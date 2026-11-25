# Changed — Bundle Modifications Report (Part 052 / 142)

- **Updated at**: `2026-11-25T16:44 JST`
- **Part**: `52 / 142` (**417** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 051](part-051.md) · [Part 053 →](part-053.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/260.js` (dz8ef.98c5e741 → wp3j0a.a13381cf · continued)

- **File**: `bundles/bloxd.io/chunks/js/260.js` (84 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073)

#### 50. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L837)

```diff
-               if (this._texture.isReady) Cu.c.SetImmediate((() => du()));
+               if (this._texture.isReady) VG.b.SetImmediate((() => CG()));
```

#### 51. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L858)

```diff
-             this.url && (this.releaseInternalTexture(), this.hV().markAllMaterialsAsDirty(1, (uu => uu.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = uu), this.url = uu, this._buffer = Eu, this._forcedExtension = su, this.delayLoadState = 4;
+             this.url && (this.releaseInternalTexture(), this.Dv().markAllMaterialsAsDirty(1, (GG => GG.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = GG), this.url = GG, this._buffer = bG, this._forcedExtension = wG, this.delayLoadState = 4;
```

#### 52. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L866` → after: `L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L866) · [Before (L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L866)

```diff
-             const uu = this.hV();
+             const GG = this.Dv();
```

#### 53. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L869` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L869) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L869)

```diff
-             !Eu && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (Eu = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(Eu, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
+             !bG && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (bG = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(bG, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
```

#### 54. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L872` → after: `L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L872) · [Before (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L872)

```diff
-             uu *= this._cachedUScale, Eu *= this._cachedVScale, uu -= this.uRotationCenter * this._cachedUScale, Eu -= this.vRotationCenter * this._cachedVScale, ju -= this.wRotationCenter, Xu.t.TransformCoordinatesFromFloatsToRef(uu, Eu, ju, this._rowGenerationMatrix, su), su.x  … [truncated]
+             GG *= this._cachedUScale, bG *= this._cachedVScale, GG -= this.uRotationCenter * this._cachedUScale, bG -= this.vRotationCenter * this._cachedVScale, ZG -= this.wRotationCenter, yG.p.TransformCoordinatesFromFloatsToRef(GG, bG, ZG, this._rowGenerationMatrix, wG), wG.x  … [truncated]
```

#### 55. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L877-L878` → after: `L877-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L877-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L877-L878) · [Before (L877-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L877-L878)

```diff
-             this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * uu, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = thi … [truncated]
-             const Eu = this.hV();
+             this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * GG, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = thi … [truncated]
+             const bG = this.Dv();
```

#### 56. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L884)

```diff
-             const Eu = this.hV();
+             const bG = this.Dv();
```

#### 57. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L922` → after: `L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L922) · [Before (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L922)

```diff
-             return gu.e.Clone((() => new uu(this._texture ? this._texture.url : null, this.hV(), Eu)), this)
+             return rG.b.Clone((() => new GG(this._texture ? this._texture.url : null, this.Dv(), bG)), this)
```

#### 58. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L933` → after: `L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L933) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L933)

```diff
-               ju.base64String = `data:${uu};base64,${(0,Nu.e)(this._buffer)}`
+               ZG.base64String = `data:${GG};base64,${(0,QG.e)(this._buffer)}`
```

#### 59. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L945` → after: `L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L945) · [Before (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L945)

```diff
-               const uu = bu.d.Instantiate(Eu.customType).Parse(Eu, ju, su);
+               const GG = pG.c.Instantiate(bG.customType).Parse(bG, ZG, wG);
```

#### 60. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L953` → after: `L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L953) · [Before (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L953)

```diff
-               const uu = ju.wO().getLoadedTexturesCache();
+               const GG = ZG.CK().getLoadedTexturesCache();
```

#### 61. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L968` → after: `L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L968) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L968)

```diff
-                     Uu = (0, qu.d)("BABYLON.Animation");
+                     SG = (0, UG.e)("BABYLON.Animation");
```

#### 62. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L973` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L973) · [Before (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L973)

```diff
-             return gu.e.Parse((() => {
+             return rG.b.Parse((() => {
```

#### 63. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L977` → after: `L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L977) · [Before (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L977)

```diff
-                 return su._waitingRenderList = Eu.renderList, su.mirrorPlane = cu.d.FromArray(Eu.mirrorPlane), Xu(su), su
+                 return wG._waitingRenderList = bG.renderList, wG.mirrorPlane = fG.b.FromArray(bG.mirrorPlane), yG(wG), wG
```

#### 64. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1048` → after: `L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1048) · [Before (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1048)

```diff
-           Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Ou = [(0, Uu.E)()], Mu = [(0, Uu.E)()], eu = [(0, Uu.E)()], Gu = [(0, Uu.E)()], pu = [(0, Uu.E)()], wu = [(0, Uu.E)()], Ju = [(0, Uu.E)()], du = [(0, Uu.E)()], au = [(0, Uu.E)()], Pu = [(0, Uu.E)()], ou = [(0, Uu.E)()], (0, su.e)( … [truncated]
+           bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], KG = [(0, SG.Q)()], zG = [(0, SG.Q)()], EG = [(0, SG.Q)()], oG = [(0, SG.Q)()], XG = [(0, SG.Q)()], uG = [(0, SG.Q)()], iG = [(0, SG.Q)()], CG = [(0, SG.Q)()], WG = [(0, SG.Q)()], mG = [(0, SG.Q)()], IG = [(0, SG.Q)()], (0, wG.k)( … [truncated]
```

#### 65. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1058)

```diff
-           }, null, mu), (0, su.e)(null, null, Eu, {
+           }, null, vG), (0, wG.k)(null, null, bG, {
```

#### 66. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1071` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1071) · [Before (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1071)

```diff
-           }, vu, Ku), (0, su.e)(null, null, ju, {
+           }, aG, cG), (0, wG.k)(null, null, ZG, {
```

#### 67. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1084` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1084) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1084)

```diff
-           }, Vu, ru), (0, su.e)(null, null, Ou, {
+           }, lG, jG), (0, wG.k)(null, null, KG, {
```

#### 68. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1097` → after: `L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1097) · [Before (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1097)

```diff
-           }, Qu, iu), (0, su.e)(null, null, Mu, {
+           }, PG, MG), (0, wG.k)(null, null, zG, {
```

#### 69. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1110` → after: `L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1110) · [Before (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1110)

```diff
-           }, Wu, Su), (0, su.e)(null, null, eu, {
+           }, AG, sG), (0, wG.k)(null, null, EG, {
```

#### 70. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1123` → after: `L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1123) · [Before (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1123)

```diff
-           }, Iu, Fu), (0, su.e)(null, null, Gu, {
+           }, qG, nG), (0, wG.k)(null, null, oG, {
```

#### 71. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1136` → after: `L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1136) · [Before (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1136)

```diff
-           }, Bu, Lu), (0, su.e)(null, null, pu, {
+           }, gG, eG), (0, wG.k)(null, null, XG, {
```

#### 72. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1149` → after: `L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1149) · [Before (L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1149)

```diff
-           }, tu, xu), (0, su.e)(null, null, wu, {
+           }, RG, TG), (0, wG.k)(null, null, uG, {
```

#### 73. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1162` → after: `L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1162) · [Before (L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1162)

```diff
-           }, Tu, Hu), (0, su.e)(null, null, Ju, {
+           }, HG, tG), (0, wG.k)(null, null, iG, {
```

#### 74. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1175` → after: `L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1175) · [Before (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1175)

```diff
-           }, Au, nu), (0, su.e)(null, null, du, {
+           }, DG, NG), (0, wG.k)(null, null, CG, {
```

#### 75. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1188` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1188) · [Before (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1188)

```diff
-           }, yu, zu), (0, su.e)(null, null, au, {
+           }, OG, xG), (0, wG.k)(null, null, WG, {
```

#### 76. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1201` → after: `L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1201) · [Before (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1201)

```diff
-           }, Ru, uE), (0, su.e)(null, null, Pu, {
+           }, BG, Gb), (0, wG.k)(null, null, mG, {
```

#### 77. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1220-L1221` → after: `L1220-L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1220-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1220-L1221) · [Before (L1220-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1220-L1221)

```diff
-         })(), uu.SerializeBuffers = !0, uu.ForceSerializeBuffers = !1, uu.OnTextureLoadErrorObservable = new Zu.d, uu._SerializeInternalTextureUniqueId = !1, uu._CubeTextureParser = (uu, Eu, ju) => {
-           throw (0, fu.h)("CubeTexture")
+         })(), GG.SerializeBuffers = !0, GG.ForceSerializeBuffers = !1, GG.OnTextureLoadErrorObservable = new LG.c, GG._SerializeInternalTextureUniqueId = !1, GG._CubeTextureParser = (GG, bG, ZG) => {
+           throw (0, YG.i)("CubeTexture")
```

#### 78. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1223` → after: `L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1223) · [Before (L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1223)

```diff
-           throw (0, fu.h)("MirrorTexture")
+           throw (0, YG.i)("MirrorTexture")
```

#### 79. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1225` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1225) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1225)

```diff
-           throw (0, fu.h)("RenderTargetTexture")
+           throw (0, YG.i)("RenderTargetTexture")
```

#### 80. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1231)

```diff
-       eu || (eu = !0, (0, qu.f)("BABYLON.Texture", Mu), gu.e._TextureParser = Mu.Parse)
+       EG || (EG = !0, (0, UG.i)("BABYLON.Texture", zG), rG.b._TextureParser = zG.Parse)
```

#### 81. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1234` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1234) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1234)

```diff
-   40268: (uu, Eu, ju) => {
+   40407: (GG, bG, ZG) => {
```

#### 82. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1236` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1236) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1236)

```diff
-       e: () => su
+       c: () => wG
```

#### 83. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1255` → after: `L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1255) · [Before (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1255)

```diff
-       T6(uu, Eu) {
+       fGG(GG, bG) {
```

#### 84. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1259` → after: `L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/260.js#L1259) · [Before (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/260.js#L1259)

```diff
-         return this.T6(uu, Eu)
+         return this.fGG(GG, bG)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/261.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/261.js` (63 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9)

#### 1. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L4)

```diff
-   40499: (uu, Eu, ju) => {
+   40623: (GG, bG, ZG) => {
```

#### 2. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L7)

```diff
-       h: () => lu
+       f: () => kG
```

#### 3. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L9-L11)

```diff
-     var su = ju(39032),
-       Uu = ju(40272),
-       Zu = ju(40462),
+     var wG = ZG(39093),
+       SG = ZG(40416),
+       LG = ZG(40592),
```

#### 4. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L19)

```diff
-         this.attached[Eu] ? su.b.Warn("camera input of type " + Eu + " already exists on camera") : (this.attached[Eu] = uu, uu.camera = this.camera, uu.checkInputs && (this.checkInputs = this._addCheckInputs(uu.checkInputs.bind(uu))), this.attachedToElement && uu.attachControl(t … [truncated]
+         this.attached[bG] ? wG.c.Warn("camera input of type " + bG + " already exists on camera") : (this.attached[bG] = GG, GG.camera = this.camera, GG.checkInputs && (this.checkInputs = this._addCheckInputs(GG.checkInputs.bind(GG))), this.attachedToElement && GG.attachControl(t … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L45)

```diff
-           uu = !Zu.e.ForceAttachControlToAlwaysPreventDefault && uu, this.attachedToElement = !0, this.noPreventDefault = uu;
+           GG = !LG.d.ForceAttachControlToAlwaysPreventDefault && GG, this.attachedToElement = !0, this.noPreventDefault = GG;
```

#### 6. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L68)

```diff
-             su = Uu.e.Serialize(uu);
+             wG = SG.b.Serialize(GG);
```

#### 7. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L81)

```diff
-                 Zu = Uu.e.Parse((() => new ju), su, null);
+                 LG = SG.b.Parse((() => new ZG), wG, null);
```

#### 8. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L89)

```diff
-               const su = Uu.e.Parse((() => new Eu), uu, null);
+               const wG = SG.b.Parse((() => new bG), GG, null);
```

#### 9. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L96` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L96) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L96)

```diff
-   41353: (uu, Eu, ju) => {
+   41519: (GG, bG, ZG) => {
```

#### 10. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L98)

```diff
-       e: () => Mu
+       b: () => zG
```

#### 11. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L100-L114` → after: `L100-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L100-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L100-L114) · [Before (L100-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L100-L114)

```diff
-     var su = ju(40255),
-       Uu = ju(40258),
-       Zu = ju(40164),
-       Xu = ju(37494),
-       lu = ju(40253),
-       qu = ju(40739),
-       fu = ju(37532),
-       Cu = ju(37514),
-       bu = ju(40272),
-       cu = ju(40108),
-       Nu = ju(39032),
-       Ou = ju(40294),
-       Yu = ju(38303),
-       hu = ju(40339);
-     var Du = ju(40168);
+     var wG = ZG(40393),
+       SG = ZG(40398),
+       LG = ZG(40271),
+       yG = ZG(37439),
+       kG = ZG(40387),
+       UG = ZG(40857),
+       YG = ZG(37484),
+       VG = ZG(37465),
+       pG = ZG(40416),
+       fG = ZG(40210),
+       QG = ZG(39093),
+       KG = ZG(40430),
+       hG = ZG(38311),
+       dG = ZG(40463);
+     var JG = ZG(40280);
```

#### 12. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L118` → after: `L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L118) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L118)

```diff
-         let Eu, ju, fu, Mu, eu, Gu, pu, wu, Ju, du = lu.c,
+         let bG, ZG, YG, zG, EG, oG, XG, uG, iG, CG = kG.b,
```

#### 13. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L138)

```diff
-             const Eu = this.hV();
+             const bG = this.Dv();
```

#### 14. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L170)

```diff
-             super(Eu), this._delayedOnLoad = (0, su.g)(this, au), this.onLoadObservable = new Cu.d, this.url = (0, su.g)(this, Pu, void 0), this.boundingBoxPosition = ((0, su.g)(this, ou), (0, su.g)(this, ku, Xu.t.Zero())), this._boundingBoxSize = (0, su.g)(this, mu), this._rotat … [truncated]
+             super(bG), this._delayedOnLoad = (0, wG.n)(this, WG), this.onLoadObservable = new VG.c, this.url = (0, wG.n)(this, mG, void 0), this.boundingBoxPosition = ((0, wG.n)(this, IG), (0, wG.n)(this, FG, yG.p.Zero())), this._boundingBoxSize = (0, wG.n)(this, vG), this._rotat … [truncated]
```

#### 15. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L177)

```diff
-             }, Du.d.prototype._cascadeLoadFiles = function(uu, Eu, ju) {
+             }, JG.c.prototype._cascadeLoadFiles = function(GG, bG, ZG) {
```

#### 16. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L182` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L182) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L182)

```diff
-             }, Du.d.prototype._cascadeLoadImgs = function(uu, Eu, ju, su) {
+             }, JG.c.prototype._cascadeLoadImgs = function(GG, bG, ZG, wG) {
```

#### 17. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L188` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L188) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L188)

```diff
-             }, Du.d.prototype._partialLoadImg = function(uu, Eu, ju, su, Uu, Zu) {
+             }, JG.c.prototype._partialLoadImg = function(GG, bG, ZG, wG, SG, LG) {
```

#### 18. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L197)

```diff
-             }, Du.d.prototype.createCubeTextureBase = function(uu, Eu, ju, su) {
+             }, JG.c.prototype.createCubeTextureBase = function(GG, bG, ZG, wG) {
```

#### 19. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L210)

```diff
-               const Mu = bu || new cu.c(this, 7);
+               const zG = pG || new fG.b(this, 7);
```

#### 20. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L219` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L219) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L219)

```diff
-                 pu = (0, hu.d)(Gu),
+                 XG = (0, dG.e)(oG),
```

#### 21. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L221)

```diff
-                   Mu.dispose(), Zu ? Zu(uu, Eu) : uu && Nu.b.Warn(uu)
+                   zG.dispose(), LG ? LG(GG, bG) : GG && QG.c.Warn(GG)
```

#### 22. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L224` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L224) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L224)

```diff
-                   uu === eu ? Zu && wu(Zu.status + " " + Zu.statusText, bu) : (Nu.b.Warn(`Failed to load ${uu}, falling back to the ${eu}`), this.createCubeTextureBase(eu, Eu, ju, !!su, Uu, wu, Xu, lu, qu, fu, Cu, Mu, Ou, Yu, Du, gu))
+                   GG === EG ? LG && uG(LG.status + " " + LG.statusText, pG) : (QG.c.Warn(`Failed to load ${GG}, falling back to the ${EG}`), this.createCubeTextureBase(EG, bG, ZG, !!wG, SG, uG, yG, kG, UG, YG, VG, zG, KG, hG, JG, rG))
```

#### 23. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L241)

```diff
-             }), this.name = uu, this.url = uu, this._noMipmap = Zu, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = Xu.e.Identity(), this.coordinatesMode = qu.g.CUBIC_MODE;
+             }), this.name = GG, this.url = GG, this._noMipmap = LG, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = yG.e.Identity(), this.coordinatesMode = UG.d.CUBIC_MODE;
```

#### 24. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L243` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L243) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L243)

```diff
-             null === Uu || Array.isArray(Uu) ? (this._noMipmap = Zu, this._format = Mu, this._createPolynomials = pu, ju = Uu, this._loaderOptions = du, this._useSRGBBuffer = Bu, this._lodScale = wu, this._lodOffset = Ju) : (ju = Uu.extensions ?? null, this._noMipmap = Uu.noMipma … [truncated]
+             null === SG || Array.isArray(SG) ? (this._noMipmap = LG, this._format = zG, this._createPolynomials = XG, ZG = SG, this._loaderOptions = CG, this._useSRGBBuffer = gG, this._lodScale = uG, this._lodOffset = iG) : (ZG = SG.extensions ?? null, this._noMipmap = SG.noMipma … [truncated]
```

#### 25. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L278-L281` → after: `L278-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L278-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L278-L281) · [Before (L278-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L278-L281)

```diff
-             if (uu.isIdentity() !== this._textureMatrix.isIdentity() && this.hV()?.markAllMaterialsAsDirty(1, (uu => -1 !== uu.getActiveTextures().indexOf(this))), this._textureMatrix = uu, !this.hV()?.useRightHandedSystem) return;
-             const Eu = Xu.m.dO[0],
-               ju = Xu.m.Quaternion[0],
-               su = Xu.m.dO[1];
+             if (GG.isIdentity() !== this._textureMatrix.isIdentity() && this.Dv()?.markAllMaterialsAsDirty(1, (GG => -1 !== GG.getActiveTextures().indexOf(this))), this._textureMatrix = GG, !this.Dv()?.useRightHandedSystem) return;
+             const bG = yG.j.mK[0],
+               ZG = yG.j.Quaternion[0],
+               wG = yG.j.mK[1];
```

#### 26. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L285` → after: `L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L285) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L285)

```diff
-             return this.hV()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
+             return this.Dv()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
```

#### 27. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L290)

```diff
-             const ju = this.hV(),
+             const ZG = this.Dv(),
```

#### 28. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L294)

```diff
-                 this.onLoadObservable.notifyObservers(this), su && (su.dispose(), this.hV()?.markAllMaterialsAsDirty(1)), uu && uu()
+                 this.onLoadObservable.notifyObservers(this), wG && (wG.dispose(), this.Dv()?.markAllMaterialsAsDirty(1)), GG && GG()
```

#### 29. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L300` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L300) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L300)

```diff
-                 }, Eu && Eu(uu, ju), qu.g.OnTextureLoadErrorObservable.notifyObservers(this)
+                 }, bG && bG(GG, ZG), UG.d.OnTextureLoadErrorObservable.notifyObservers(this)
```

#### 30. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L302)

```diff
-             this._texture ? this._texture.isReady ? Zu.c.SetImmediate((() => Uu())) : this._texture.onLoadedObservable.add((() => Uu())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, ju, this._lodScale, this._lodOffset, uu, Xu, th … [truncated]
+             this._texture ? this._texture.isReady ? LG.b.SetImmediate((() => SG())) : this._texture.onLoadedObservable.add((() => SG())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, ZG, this._lodScale, this._lodOffset, GG, yG, th … [truncated]
```

#### 31. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L307-L308` → after: `L307-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L307-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L307-L308) · [Before (L307-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L307-L308)

```diff
-               su = bu.e.Clone((() => {
-                 const ju = new uu(this.url, this.hV() || this._getEngine(), this._extensions, this._noMipmap, this._files);
+               wG = pG.b.Clone((() => {
+                 const ZG = new GG(this.url, this.Dv() || this._getEngine(), this._extensions, this._noMipmap, this._files);
```

#### 32. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L315)

```diff
-           Eu = [(0, Uu.E)()], ju = [(0, Uu.A)()], fu = [(0, Uu.A)()], Mu = [(0, Uu.E)("rotationY")], eu = [(0, Uu.E)("files")], Gu = [(0, Uu.E)("forcedExtension")], pu = [(0, Uu.E)("extensions")], wu = [(0, Uu.r)("textureMatrix")], Ju = [(0, Uu.r)("textureMatrixRefraction")], (0, … [truncated]
+           bG = [(0, SG.Q)()], ZG = [(0, SG.M)()], YG = [(0, SG.M)()], zG = [(0, SG.Q)("rotationY")], EG = [(0, SG.Q)("files")], oG = [(0, SG.Q)("forcedExtension")], XG = [(0, SG.Q)("extensions")], uG = [(0, SG.v)("textureMatrix")], iG = [(0, SG.v)("textureMatrixRefraction")], (0, … [truncated]
```

#### 33. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L325)

```diff
-           }, null, au), (0, su.e)(uu, null, Mu, {
+           }, null, WG), (0, wG.k)(GG, null, zG, {
```

#### 34. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L337)

```diff
-           }, null, au), (0, su.e)(null, null, Eu, {
+           }, null, WG), (0, wG.k)(null, null, bG, {
```

#### 35. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L350)

```diff
-           }, Pu, ou), (0, su.e)(null, null, ju, {
+           }, mG, IG), (0, wG.k)(null, null, ZG, {
```

#### 36. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L363` → after: `L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L363) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L363)

```diff
-           }, ku, mu), (0, su.e)(null, null, eu, {
+           }, FG, vG), (0, wG.k)(null, null, EG, {
```

#### 37. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L376` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L376) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L376)

```diff
-           }, vu, Ku), (0, su.e)(null, null, Gu, {
+           }, aG, cG), (0, wG.k)(null, null, oG, {
```

#### 38. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L389` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L389) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L389)

```diff
-           }, Vu, ru), (0, su.e)(null, null, pu, {
+           }, lG, jG), (0, wG.k)(null, null, XG, {
```

#### 39. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L402` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L402) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L402)

```diff
-           }, Qu, iu), (0, su.e)(null, null, wu, {
+           }, PG, MG), (0, wG.k)(null, null, uG, {
```

#### 40. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L415)

```diff
-           }, Wu, Su), (0, su.e)(null, null, Ju, {
+           }, AG, sG), (0, wG.k)(null, null, iG, {
```

#### 41. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L454)

```diff
-       const su = bu.e.Parse((() => {
+       const wG = pG.b.Parse((() => {
```

#### 42. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L458)

```diff
-       if (uu.boundingBoxPosition && (su.boundingBoxPosition = Xu.t.FromArray(uu.boundingBoxPosition)), uu.boundingBoxSize && (su.boundingBoxSize = Xu.t.FromArray(uu.boundingBoxSize)), uu.animations)
+       if (GG.boundingBoxPosition && (wG.boundingBoxPosition = yG.p.FromArray(GG.boundingBoxPosition)), GG.boundingBoxSize && (wG.boundingBoxSize = yG.p.FromArray(GG.boundingBoxSize)), GG.animations)
```

#### 43. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L461)

```diff
-             ju = (0, fu.d)("BABYLON.Animation");
+             ZG = (0, YG.e)("BABYLON.Animation");
```

#### 44. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L466)

```diff
-     eu || (eu = !0, Mu.CreateFromImages = Gu, Mu.CreateFromPrefilteredData = pu, Mu.Parse = wu, qu.g._CubeTextureParser = wu, (0, fu.f)("BABYLON.CubeTexture", Mu))
+     EG || (EG = !0, zG.CreateFromImages = oG, zG.CreateFromPrefilteredData = XG, zG.Parse = uG, UG.d._CubeTextureParser = uG, (0, YG.i)("BABYLON.CubeTexture", zG))
```

#### 45. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L468` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L468) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L468)

```diff
-   41400: (uu, Eu, ju) => {
+   41574: (GG, bG, ZG) => {
```

#### 46. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L470` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L470) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L470)

```diff
-       d: () => fu
+       b: () => YG
```

#### 47. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L472-L476` → after: `L472-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L472-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L472-L476) · [Before (L472-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L472-L476)

```diff
-     var su = ju(39032),
-       Uu = ju(40739),
-       Zu = ju(40192),
-       Xu = ju(40118),
-       lu = ju(40108);
+     var wG = ZG(39093),
+       SG = ZG(40857),
+       LG = ZG(40319),
+       yG = ZG(40225),
+       kG = ZG(40210);
```

#### 48. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L478)

```diff
-     class fu extends Uu.g {
+     class YG extends SG.d {
```

#### 49. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L485-L487` → after: `L485-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L485-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L485-L487) · [Before (L485-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L485-L487)

```diff
-         super(null, cu ? ju : ju?.vY, cu ? !su : ju, bu, fu, void 0, void 0, void 0, void 0, Cu), qu || (qu = !0, Xu.ThinEngine.prototype.createDynamicTexture = function(uu, Eu, ju, su) {
-           const Uu = new lu.c(this, 4);
-           return Uu.baseWidth = uu, Uu.baseHeight = Eu, ju && (uu = this.needPOTTextures ? (0, Zu.g)(uu, this._caps.maxTextureSize) : uu, Eu = this.needPOTTextures ? (0, Zu.g)(Eu, this._caps.maxTextureSize) : Eu), Uu.width = uu, Uu.height = Eu, Uu.isReady = !1, Uu.generateMipMaps … [truncated]
+         super(null, fG ? ZG : ZG?.Ah, fG ? !wG : ZG, pG, YG, void 0, void 0, void 0, void 0, VG), UG || (UG = !0, yG.ThinEngine.prototype.createDynamicTexture = function(GG, bG, ZG, wG) {
+           const SG = new kG.b(this, 4);
+           return SG.baseWidth = GG, SG.baseHeight = bG, ZG && (GG = this.needPOTTextures ? (0, LG.h)(GG, this._caps.maxTextureSize) : GG, bG = this.needPOTTextures ? (0, LG.h)(bG, this._caps.maxTextureSize) : bG), SG.width = GG, SG.height = bG, SG.isReady = !1, SG.generateMipMaps … [truncated]
```

#### 50. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L501)

```diff
-         }), this.name = uu, this.wrapU = Uu.g.CLAMP_ADDRESSMODE, this.wrapV = Uu.g.CLAMP_ADDRESSMODE, this._generateMipMaps = su;
+         }), this.name = GG, this.wrapU = SG.d.CLAMP_ADDRESSMODE, this.wrapV = SG.d.CLAMP_ADDRESSMODE, this._generateMipMaps = wG;
```

#### 51. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L559` → after: `L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L559) · [Before (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L559)

```diff
-         const uu = this.hV();
+         const GG = this.Dv();
```

#### 52. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L566-L567` → after: `L566-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L566-L567) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L566-L567)

```diff
-         const uu = this.hV();
-         uu && !uu.isReady() && su.b.Warn("The scene must be ready before serializing the dynamic texture");
+         const GG = this.Dv();
+         GG && !GG.isReady() && wG.c.Warn("The scene must be ready before serializing the dynamic texture");
```

#### 53. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L579` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L579) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L579)

```diff
-   41366: (uu, Eu, ju) => {
+   41539: (GG, bG, ZG) => {
```

#### 54. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L581` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L581) · [Before (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L581)

```diff
-       d: () => Uu
+       b: () => SG
```

#### 55. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L583-L584` → after: `L583-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L583-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L583-L584) · [Before (L583-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L583-L584)

```diff
-     var su = ju(40739);
-     class Uu extends su.g {
+     var wG = ZG(40857);
+     class SG extends wG.d {
```

#### 56. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L591` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L591) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L591)

```diff
-           fu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : su.g.TRILINEAR_SAMPLINGMODE,
+           YG = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : wG.d.TRILINEAR_SAMPLINGMODE,
```

#### 57. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L595)

```diff
-         super(null, Xu, !lu, qu), this.format = Zu, this._texture = Xu.wO().createRawTexture2DArray(uu, Eu, ju, Uu, Zu, lu, qu, fu, null, Cu, bu ?? 0, cu), this._depth = Uu, this.is2DArray = !0
+         super(null, yG, !kG, UG), this.format = LG, this._texture = yG.CK().createRawTexture2DArray(GG, bG, ZG, SG, LG, kG, UG, YG, null, VG, pG ?? 0, fG), this._depth = SG, this.is2DArray = !0
```

#### 58. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L608` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L608) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L608)

```diff
-   41364: (uu, Eu, ju) => {
+   41531: (GG, bG, ZG) => {
```

#### 59. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L610` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L610) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L610)

```diff
-       e: () => su.b
+       b: () => wG.e
```

#### 60. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L612-L613` → after: `L612-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L612-L613) · [Before (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L612-L613)

```diff
-     var su = ju(40622);
-     (0, su.d)()
+     var wG = ZG(40735);
+     (0, wG.f)()
```

#### 61. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L615)

```diff
-   40346: (uu, Eu, ju) => {
+   40467: (GG, bG, ZG) => {
```

#### 62. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L617` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L617) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L617)

```diff
-       b: () => su.f
+       d: () => wG.f
```

#### 63. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L619` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/261.js#L619) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/261.js#L619)

```diff
-     var su = ju(40350);
+     var wG = ZG(40475);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (76 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 1. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L4)

```diff
-   40456: (uu, Eu, ju) => {
+   40582: (GG, bG, ZG) => {
```

#### 2. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L6)

```diff
-       d: () => au
+       c: () => WG
```

#### 3. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8-L14` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L8-L14) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L8-L14)

```diff
-     var su = ju(40255),
-       Uu = ju(40258),
-       Zu = ju(37494),
-       Xu = ju(40459),
-       lu = ju(40499),
-       qu = ju(40434),
-       fu = ju(40356);
+     var wG = ZG(40393),
+       SG = ZG(40398),
+       LG = ZG(37439),
+       yG = ZG(40585),
+       kG = ZG(40623),
+       UG = ZG(40554),
+       YG = ZG(40477);
```

#### 4. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L41)

```diff
-           this.keysUp = (0, su.g)(this, Du, [38]), this.keysUpward = ((0, su.g)(this, gu), (0, su.g)(this, Mu, [33])), this.keysDown = ((0, su.g)(this, eu), (0, su.g)(this, Gu, [40])), this.keysDownward = ((0, su.g)(this, pu), (0, su.g)(this, wu, [34])), this.keysLeft = ((0, su.g … [truncated]
+           this.keysUp = (0, wG.n)(this, JG, [38]), this.keysUpward = ((0, wG.n)(this, rG), (0, wG.n)(this, zG, [33])), this.keysDown = ((0, wG.n)(this, EG), (0, wG.n)(this, oG, [40])), this.keysDownward = ((0, wG.n)(this, XG), (0, wG.n)(this, uG, [34])), this.keysLeft = ((0, wG.n … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L44)

```diff
-           uu = fu.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.hV(), this._engine = this._scene.wO(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+           GG = YG.f.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Dv(), this._engine = this._scene.CK(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
```

#### 6. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L49)

```diff
-               if (Eu.type === qu.b.KEYDOWN) {
+               if (bG.type === UG.e.KEYDOWN) {
```

#### 7. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L69)

```diff
-               Xu = uu._localDirection.T6(0, 0, 0);
+               yG = GG._localDirection.fGG(0, 0, 0);
```

#### 8. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L75)

```diff
-               Xu.normalize().scaleInPlace(Eu), uu.hV().useRightHandedSystem && (Xu.z *= -1), uu.getViewMatrix().invertToRef(uu._cameraTransformMatrix), Zu.t.TransformNormalToRef(Xu, uu._cameraTransformMatrix, uu._transformedDirection), uu.cameraDirection.addInPlace(uu._transforme … [truncated]
+               yG.normalize().scaleInPlace(bG), GG.Dv().useRightHandedSystem && (yG.z *= -1), GG.getViewMatrix().invertToRef(GG._cameraTransformMatrix), LG.p.TransformNormalToRef(yG, GG._cameraTransformMatrix, GG._transformedDirection), GG.cameraDirection.addInPlace(GG._transforme … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L94` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L94) · [Before (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L94)

```diff
-         Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Xu = [(0, Uu.E)()], lu = [(0, Uu.E)()], Cu = [(0, Uu.E)()], bu = [(0, Uu.E)()], cu = [(0, Uu.E)()], Nu = [(0, Uu.E)()], Ou = [(0, Uu.E)()], Yu = [(0, Uu.E)()], hu = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
+         bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], yG = [(0, SG.Q)()], kG = [(0, SG.Q)()], VG = [(0, SG.Q)()], pG = [(0, SG.Q)()], fG = [(0, SG.Q)()], QG = [(0, SG.Q)()], KG = [(0, SG.Q)()], hG = [(0, SG.Q)()], dG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
```

#### 10. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L107)

```diff
-         }, Du, gu), (0, su.e)(null, null, ju, {
+         }, JG, rG), (0, wG.k)(null, null, ZG, {
```

#### 11. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L120` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L120) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L120)

```diff
-         }, Mu, eu), (0, su.e)(null, null, Xu, {
+         }, zG, EG), (0, wG.k)(null, null, yG, {
```

#### 12. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L133)

```diff
-         }, Gu, pu), (0, su.e)(null, null, lu, {
+         }, oG, XG), (0, wG.k)(null, null, kG, {
```

#### 13. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L146)

```diff
-         }, wu, Ju), (0, su.e)(null, null, Cu, {
+         }, uG, iG), (0, wG.k)(null, null, VG, {
```

#### 14. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L159)

```diff
-         }, du, au), (0, su.e)(null, null, bu, {
+         }, CG, WG), (0, wG.k)(null, null, pG, {
```

#### 15. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L172)

```diff
-         }, Pu, ou), (0, su.e)(null, null, cu, {
+         }, mG, IG), (0, wG.k)(null, null, fG, {
```

#### 16. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L185)

```diff
-         }, ku, mu), (0, su.e)(null, null, Nu, {
+         }, FG, vG), (0, wG.k)(null, null, QG, {
```

#### 17. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L198` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L198) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L198)

```diff
-         }, vu, Ku), (0, su.e)(null, null, Ou, {
+         }, aG, cG), (0, wG.k)(null, null, KG, {
```

#### 18. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L211)

```diff
-         }, Vu, ru), (0, su.e)(null, null, Yu, {
+         }, lG, jG), (0, wG.k)(null, null, hG, {
```

#### 19. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L224` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L224) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L224)

```diff
-         }, Qu, iu), (0, su.e)(null, null, hu, {
+         }, PG, MG), (0, wG.k)(null, null, dG, {
```

#### 20. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L246-L247` → after: `L246-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L246-L247) · [Before (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L246-L247)

```diff
-     var bu = ju(37514),
-       cu = ju(40430);
+     var pG = ZG(37465),
+       fG = ZG(40550);
```

#### 21. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L259-L260)

```diff
-           const su = ju.XT ?? ju.sensitivity ?? 1 / this.angularSensibility,
-             Uu = ju.lT ?? ju.sensitivity ?? 1 / this.angularSensibility;
+           const wG = ZG.nD ?? ZG.sensitivity ?? 1 / this.angularSensibility,
+             SG = ZG.eD ?? ZG.sensitivity ?? 1 / this.angularSensibility;
```

#### 22. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L265)

```diff
-           this.touchEnabled = uu, this.buttons = (0, su.g)(this, Zu, [0, 1, 2]), this.angularSensibility = ((0, su.g)(this, Xu), (0, su.g)(this, lu, 2e3)), this._pointerInput = (0, su.g)(this, qu), this._previousPosition = null, this.onPointerMovedObservable = new bu.d, this._all … [truncated]
+           this.touchEnabled = GG, this.buttons = (0, wG.n)(this, LG, [0, 1, 2]), this.angularSensibility = ((0, wG.n)(this, yG), (0, wG.n)(this, kG, 2e3)), this._pointerInput = (0, wG.n)(this, UG), this._previousPosition = null, this.onPointerMovedObservable = new pG.c, this._all … [truncated]
```

#### 23. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L268-L269` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L268-L269) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L268-L269)

```diff
-           uu = fu.h.BackCompatCameraNoPreventDefault(arguments);
-           const Eu = this.camera.wO(),
+           GG = YG.f.BackCompatCameraNoPreventDefault(arguments);
+           const bG = this.camera.CK(),
```

#### 24. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L275)

```diff
-             if (su.type !== cu.d.POINTERMOVE && -1 === this.buttons.indexOf(Uu.button)) return;
+             if (wG.type !== fG.b.POINTERMOVE && -1 === this.buttons.indexOf(SG.button)) return;
```

#### 25. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L277)

```diff
-             if (su.type === cu.d.POINTERDOWN) {
+             if (wG.type === fG.b.POINTERDOWN) {
```

#### 26. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L286` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L286) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L286)

```diff
-             } else if (su.type === cu.d.POINTERUP) {
+             } else if (wG.type === fG.b.POINTERUP) {
```

#### 27. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L292` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L292) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L292)

```diff
-             } else if (su.type === cu.d.POINTERMOVE && (this._activePointerId === Uu.pointerId || !Zu))
+             } else if (wG.type === fG.b.POINTERMOVE && (this._activePointerId === SG.pointerId || !LG))
```

#### 28. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L310)

```diff
-           }, this._observer = this.camera.hV()._inputManager._addCameraPointerObserver(this._pointerInput, cu.d.POINTERDOWN | cu.d.POINTERUP | cu.d.POINTERMOVE), ju && (this._contextMenuBind = uu => this.onContextMenu(uu), ju.addEventListener("contextmenu", this._contextMenuBind, … [truncated]
+           }, this._observer = this.camera.Dv()._inputManager._addCameraPointerObserver(this._pointerInput, fG.b.POINTERDOWN | fG.b.POINTERUP | fG.b.POINTERMOVE), ZG && (this._contextMenuBind = GG => this.onContextMenu(GG), ZG.addEventListener("contextmenu", this._contextMenuBind, … [truncated]
```

#### 29. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L317-L318` → after: `L317-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L317-L318) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L317-L318)

```diff
-             if (this.camera.hV()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
-               const uu = this.camera.wO().getInputElement();
+             if (this.camera.Dv()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
+               const GG = this.camera.CK().getInputElement();
```

#### 30. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L333)

```diff
-         Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
+         bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
```

#### 31. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L346` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L346) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L346)

```diff
-         }, Zu, Xu), (0, su.e)(null, null, ju, {
+         }, LG, yG), (0, wG.k)(null, null, ZG, {
```

#### 32. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L368` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L368) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L368)

```diff
-     var Ou = ju(40442);
+     var KG = ZG(40560);
```

#### 33. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L379` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L379) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L379)

```diff
-           this.wheelPrecisionX = (0, su.g)(this, Xu, 3), this.wheelPrecisionY = ((0, su.g)(this, lu), (0, su.g)(this, qu, 3)), this.wheelPrecisionZ = ((0, su.g)(this, Cu), (0, su.g)(this, Nu, 3)), this.onChangedObservable = ((0, su.g)(this, Yu), new bu.d), this._wheelDeltaX = 0,  … [truncated]
+           this.wheelPrecisionX = (0, wG.n)(this, yG, 3), this.wheelPrecisionY = ((0, wG.n)(this, kG), (0, wG.n)(this, UG, 3)), this.wheelPrecisionZ = ((0, wG.n)(this, VG), (0, wG.n)(this, QG, 3)), this.onChangedObservable = ((0, wG.n)(this, hG), new pG.c), this._wheelDeltaX = 0,  … [truncated]
```

#### 34. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L382-L383` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L382-L383) · [Before (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L382-L383)

```diff
-           uu = fu.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = Eu => {
-             if (Eu.type !== cu.d.POINTERWHEEL) return;
+           GG = YG.f.BackCompatCameraNoPreventDefault(arguments), this._wheel = bG => {
+             if (bG.type !== fG.b.POINTERWHEEL) return;
```

#### 35. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L387` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L387) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L387)

```diff
-           }, this._observer = this.camera.hV()._inputManager._addCameraPointerObserver(this._wheel, cu.d.POINTERWHEEL)
+           }, this._observer = this.camera.Dv()._inputManager._addCameraPointerObserver(this._wheel, fG.b.POINTERWHEEL)
```

#### 36. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L390` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L390) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L390)

```diff
-           this._observer && (this.camera.hV()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
+           this._observer && (this.camera.Dv()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
```

#### 37. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L407)

```diff
-         Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Zu = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
+         bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], LG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
```

#### 38. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L420` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L420) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L420)

```diff
-         }, Xu, lu), (0, su.e)(null, null, ju, {
+         }, yG, kG), (0, wG.k)(null, null, ZG, {
```

#### 39. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L433` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L433) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L433)

```diff
-         }, qu, Cu), (0, su.e)(null, null, Zu, {
+         }, UG, VG), (0, wG.k)(null, null, LG, {
```

#### 40. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L464` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L464) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L464)

```diff
-           super(...arguments), this.camera = (0, su.g)(this, Ou), this._moveRelative = Zu.t.Zero(), this._rotateRelative = Zu.t.Zero(), this._moveScene = Zu.t.Zero(), this._wheelXAction = hu.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = hu.MoveRelative, thi … [truncated]
+           super(...arguments), this.camera = (0, wG.n)(this, KG), this._moveRelative = LG.p.Zero(), this._rotateRelative = LG.p.Zero(), this._moveScene = LG.p.Zero(), this._wheelXAction = dG.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = dG.MoveRelative, thi … [truncated]
```

#### 41. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L525)

```diff
-           this._moveRelative.k_(0), this._rotateRelative.k_(0), this._moveScene.k_(0), this._updateCamera(), this.camera.hV().useRightHandedSystem && (this._moveRelative.z *= -1);
+           this._moveRelative.N7(0), this._rotateRelative.N7(0), this._moveScene.N7(0), this._updateCamera(), this.camera.Dv().useRightHandedSystem && (this._moveRelative.z *= -1);
```

#### 42. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L528-L529` → after: `L528-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L528-L529) · [Before (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L528-L529)

```diff
-           const Eu = Zu.t.Zero();
-           Zu.t.TransformNormalToRef(this._moveRelative, uu, Eu), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(Eu), this.camera.cameraDirection.addInPlace(this._mo … [truncated]
+           const bG = LG.p.Zero();
+           LG.p.TransformNormalToRef(this._moveRelative, GG, bG), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(bG), this.camera.cameraDirection.addInPlace(this._mo … [truncated]
```

#### 43. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L561` → after: `L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L561) · [Before (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L561)

```diff
-         Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Xu = [(0, Uu.E)()], lu = [(0, Uu.E)()], qu = [(0, Uu.E)()], fu = [(0, Uu.E)()], Cu = [(0, Uu.E)()], bu = [(0, Uu.E)()], cu = [(0, Uu.E)()], (0, su.e)(uu, null, Eu, {
+         bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], yG = [(0, SG.Q)()], kG = [(0, SG.Q)()], UG = [(0, SG.Q)()], YG = [(0, SG.Q)()], VG = [(0, SG.Q)()], pG = [(0, SG.Q)()], fG = [(0, SG.Q)()], (0, wG.k)(GG, null, bG, {
```

#### 44. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L573` → after: `L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L573) · [Before (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L573)

```diff
-         }, null, Ou), (0, su.e)(uu, null, ju, {
+         }, null, KG), (0, wG.k)(GG, null, ZG, {
```

#### 45. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L585` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L585) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L585)

```diff
-         }, null, Ou), (0, su.e)(uu, null, Xu, {
+         }, null, KG), (0, wG.k)(GG, null, yG, {
```

#### 46. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L597` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L597) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L597)

```diff
-         }, null, Ou), (0, su.e)(uu, null, lu, {
+         }, null, KG), (0, wG.k)(GG, null, kG, {
```

#### 47. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L609` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L609) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L609)

```diff
-         }, null, Ou), (0, su.e)(uu, null, qu, {
+         }, null, KG), (0, wG.k)(GG, null, UG, {
```

#### 48. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L621` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L621) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L621)

```diff
-         }, null, Ou), (0, su.e)(uu, null, fu, {
+         }, null, KG), (0, wG.k)(GG, null, YG, {
```

#### 49. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L633` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L633) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L633)

```diff
-         }, null, Ou), (0, su.e)(uu, null, Cu, {
+         }, null, KG), (0, wG.k)(GG, null, VG, {
```

#### 50. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L645` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L645) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L645)

```diff
-         }, null, Ou), (0, su.e)(uu, null, bu, {
+         }, null, KG), (0, wG.k)(GG, null, pG, {
```

#### 51. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L657` → after: `L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L657) · [Before (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L657)

```diff
-         }, null, Ou), (0, su.e)(uu, null, cu, {
+         }, null, KG), (0, wG.k)(GG, null, fG, {
```

#### 52. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L687` → after: `L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L687) · [Before (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L687)

```diff
-           this.allowMouse = uu, this.touchAngularSensibility = (0, su.g)(this, Xu, 2e5), this.touchMoveSensibility = ((0, su.g)(this, lu), (0, su.g)(this, qu, 250)), this.singleFingerRotate = ((0, su.g)(this, Cu), !1), this._offsetX = null, this._offsetY = null, this._pointerPres … [truncated]
+           this.allowMouse = GG, this.touchAngularSensibility = (0, wG.n)(this, yG, 2e5), this.touchMoveSensibility = ((0, wG.n)(this, kG), (0, wG.n)(this, UG, 250)), this.singleFingerRotate = ((0, wG.n)(this, VG), !1), this._offsetX = null, this._offsetY = null, this._pointerPres … [truncated]
```

#### 53. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L690` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L690) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L690)

```diff
-           uu = fu.h.BackCompatCameraNoPreventDefault(arguments);
+           GG = YG.f.BackCompatCameraNoPreventDefault(arguments);
```

#### 54. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L698` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L698) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L698)

```diff
-                 if (ju.type === cu.d.POINTERDOWN) {
+                 if (ZG.type === fG.b.POINTERDOWN) {
```

#### 55. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L704` → after: `L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L704) · [Before (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L704)

```diff
-                 } else if (ju.type === cu.d.POINTERUP) {
+                 } else if (ZG.type === fG.b.POINTERUP) {
```

#### 56. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L710` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L710) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L710)

```diff
-               } else if (ju.type === cu.d.POINTERMOVE) {
+               } else if (ZG.type === fG.b.POINTERMOVE) {
```

#### 57. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L715-L716` → after: `L715-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L715-L716) · [Before (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L715-L716)

```diff
-             }), this._observer = this.camera.hV()._inputManager._addCameraPointerObserver(this._pointerInput, cu.d.POINTERDOWN | cu.d.POINTERUP | cu.d.POINTERMOVE), this._onLostFocus) {
-             const uu = this.camera.wO().getInputElement();
+             }), this._observer = this.camera.Dv()._inputManager._addCameraPointerObserver(this._pointerInput, fG.b.POINTERDOWN | fG.b.POINTERUP | fG.b.POINTERMOVE), this._onLostFocus) {
+             const GG = this.camera.CK().getInputElement();
```

#### 58. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L722-L723` → after: `L722-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L722-L723) · [Before (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L722-L723)

```diff
-             if (this._observer && (this.camera.hV()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
-               const uu = this.camera.wO().getInputElement();
+             if (this._observer && (this.camera.Dv()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
+               const GG = this.camera.CK().getInputElement();
```

#### 59. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L745-L746` → after: `L745-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L745-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L745-L746) · [Before (L745-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L745-L746)

```diff
-               Uu = Zu.m.dO[0];
-             Uu.T6(0, 0, Eu * this._offsetY * ju), Zu.e.RotationYawPitchRollToRef(uu.rotation.y, uu.rotation.x, 0, uu._cameraRotationMatrix), Zu.t.TransformCoordinatesToRef(Uu, uu._cameraRotationMatrix, Uu), uu.cameraDirection.addInPlace(Uu)
+               SG = LG.j.mK[0];
+             SG.fGG(0, 0, bG * this._offsetY * ZG), LG.e.RotationYawPitchRollToRef(GG.rotation.y, GG.rotation.x, 0, GG._cameraRotationMatrix), LG.p.TransformCoordinatesToRef(SG, GG._cameraRotationMatrix, SG), GG.cameraDirection.addInPlace(SG)
```

#### 60. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L757` → after: `L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L757) · [Before (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L757)

```diff
-         Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
+         bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
```

#### 61. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L770` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L770) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L770)

```diff
-         }, Xu, lu), (0, su.e)(null, null, ju, {
+         }, yG, kG), (0, wG.k)(null, null, ZG, {
```

#### 62. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L792-L793` → after: `L792-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L792-L793) · [Before (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L792-L793)

```diff
-     var Mu, eu, Gu, pu = ju(40153);
-     class wu extends lu.h {
+     var zG, EG, oG, XG = ZG(40258);
+     class uG extends kG.f {
```

#### 63. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L819-L821` → after: `L819-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L819-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L819-L821) · [Before (L819-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L819-L821)

```diff
-     }(Mu = wu.prototype).addDeviceOrientation ?? (Mu.addDeviceOrientation = (0, pu.g)("FreeCameraInputsManager", "addDeviceOrientation")), (eu = wu.prototype).addVirtualJoystick ?? (eu.addVirtualJoystick = (0, pu.g)("FreeCameraInputsManager", "addVirtualJoystick")), (Gu = wu.prot … [truncated]
-     var Ju = ju(40168),
-       du = ju(37532);
+     }(zG = uG.prototype).addDeviceOrientation ?? (zG.addDeviceOrientation = (0, XG.h)("FreeCameraInputsManager", "addDeviceOrientation")), (EG = uG.prototype).addVirtualJoystick ?? (EG.addVirtualJoystick = (0, XG.h)("FreeCameraInputsManager", "addVirtualJoystick")), (oG = uG.prot … [truncated]
+     var iG = ZG(40280),
+       CG = ZG(37484);
```

#### 64. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L924)

```diff
-             super(uu, Eu, ju, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), Uu = this, this.ellipsoid = (0, su.g)(this, bu, new Zu.t(.5, 1, .5)), this.ellipsoidOffset = ((0, su.g)(this, cu), (0, su.g)(this, Nu, new Zu.t(0, 0, 0))), this.checkCollisions = (( … [truncated]
+             super(GG, bG, ZG, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), SG = this, this.ellipsoid = (0, wG.n)(this, pG, new LG.p(.5, 1, .5)), this.ellipsoidOffset = ((0, wG.n)(this, fG), (0, wG.n)(this, QG, new LG.p(0, 0, 0))), this.checkCollisions = (( … [truncated]
```

#### 65. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L926` → after: `L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L926) · [Before (L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L926)

```diff
-               Uu._newPosition.yJ(Eu), Uu._newPosition.subtractToRef(Uu._oldPosition, Uu._diffPosition), Uu._diffPosition.length() > Ju.d.CollisionsEpsilon && (Uu.position.addToRef(Uu._diffPosition, Uu._deferredPositionUpdate), Uu._deferOnly ? Uu._deferredUpdated = !0 : Uu.positio … [truncated]
+               SG._newPosition.oW(bG), SG._newPosition.subtractToRef(SG._oldPosition, SG._diffPosition), SG._diffPosition.length() > iG.c.CollisionsEpsilon && (SG.position.addToRef(SG._diffPosition, SG._deferredPositionUpdate), SG._deferOnly ? SG._deferredUpdated = !0 : SG.positio … [truncated]
```

#### 66. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L930` → after: `L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L930) · [Before (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L930)

```diff
-             Eu = fu.h.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(Eu)
+             bG = YG.f.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(bG)
```

#### 67. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L933` → after: `L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L933) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L933)

```diff
-             this.inputs.detachElement(), this.cameraDirection = new Zu.t(0, 0, 0), this.cameraRotation = new Zu.p(0, 0)
+             this.inputs.detachElement(), this.cameraDirection = new LG.p(0, 0, 0), this.cameraRotation = new LG.m(0, 0)
```

#### 68. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L943-L944` → after: `L943-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L943-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L943-L944) · [Before (L943-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L943-L944)

```diff
-             Eu = this.parent ? Zu.t.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, Eu.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
-             const ju = this.hV().collisionCoordinator;
+             bG = this.parent ? LG.p.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, bG.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
+             const ZG = this.Dv().collisionCoordinator;
```

#### 69. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L947` → after: `L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L947) · [Before (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L947)

```diff
-             this.applyGravity && (su = uu.add(this.hV().gravity)), ju.getNewPosition(this._oldPosition, su, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
+             this.applyGravity && (wG = GG.add(this.Dv().gravity)), ZG.getNewPosition(this._oldPosition, wG, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
```

#### 70. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L950` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L950) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L950)

```diff
-             this._localDirection || (this._localDirection = Zu.t.Zero(), this._transformedDirection = Zu.t.Zero()), this.inputs.checkInputs(), super._checkInputs()
+             this._localDirection || (this._localDirection = LG.p.Zero(), this._transformedDirection = LG.p.Zero()), this.inputs.checkInputs(), super._checkInputs()
```

#### 71. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L962` → after: `L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L962) · [Before (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L962)

```diff
-             this.checkCollisions && this.hV().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
+             this.checkCollisions && this.Dv().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
```

#### 72. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L972)

```diff
-           Eu = [(0, Uu.A)()], ju = [(0, Uu.A)()], lu = [(0, Uu.E)()], qu = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
+           bG = [(0, SG.M)()], ZG = [(0, SG.M)()], kG = [(0, SG.Q)()], UG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
```

#### 73. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L985` → after: `L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L985) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L985)

```diff
-           }, bu, cu), (0, su.e)(null, null, ju, {
+           }, pG, fG), (0, wG.k)(null, null, ZG, {
```

#### 74. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L998` → after: `L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L998) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L998)

```diff
-           }, Nu, Ou), (0, su.e)(null, null, lu, {
+           }, QG, KG), (0, wG.k)(null, null, kG, {
```

#### 75. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1011` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L1011) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L1011)

```diff
-           }, Yu, hu), (0, su.e)(null, null, qu, {
+           }, hG, dG), (0, wG.k)(null, null, UG, {
```

#### 76. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1033` → after: `L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/262.js#L1033) · [Before (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/262.js#L1033)

```diff
-     Pu || (Pu = !0, (0, du.f)("BABYLON.FreeCamera", au))
+     mG || (mG = !0, (0, CG.i)("BABYLON.FreeCamera", WG))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/263.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/263.js` (64 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2)

#### 1. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L4)

```diff
-   40508: (uu, Eu, ju) => {
+   40635: (GG, bG, ZG) => {
```

#### 2. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L6)

```diff
-       e: () => cu
+       c: () => fG
```

#### 3. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L8-L16` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L8-L16) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L8-L16)

```diff
-     var su = ju(40255),
-       Uu = ju(40258),
-       Zu = ju(37494),
-       Xu = ju(37680),
-       lu = ju(40467),
-       qu = ju(40390),
-       fu = ju(37532),
-       Cu = ju(40450),
-       bu = ju(40272);
+     var wG = ZG(40393),
+       SG = ZG(40398),
+       LG = ZG(37439),
+       yG = ZG(37621),
+       kG = ZG(40599),
+       UG = ZG(40508),
+       YG = ZG(37484),
+       VG = ZG(40573),
+       pG = ZG(40416);
```

#### 4. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L19)

```diff
-       let ju, cu, Nu, Ou, Yu, hu, Du, gu, Mu, eu, Gu, pu, wu, Ju = lu.c,
+       let ZG, fG, QG, KG, hG, dG, JG, rG, zG, EG, oG, XG, uG, iG = kG.e,
```

#### 5. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L61)

```diff
-           return (0, su.b)(this, Eu, "f")
+           return (0, wG.e)(this, bG, "f")
```

#### 6. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L64)

```diff
-           (0, su.d)(this, Eu, uu, "f")
+           (0, wG.h)(this, bG, GG, "f")
```

#### 7. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L109)

```diff
-           super(ju, Uu, !1), this.diffuse = ((0, su.g)(this, du), (0, su.g)(this, au, new Xu.c(1, 1, 1))), this.specular = ((0, su.g)(this, Pu), (0, su.g)(this, ou, new Xu.c(1, 1, 1))), this.falloffType = ((0, su.g)(this, ku), (0, su.g)(this, mu, uu.FALLOFF_DEFAULT)), this.intens … [truncated]
+           super(ZG, SG, !1), this.diffuse = ((0, wG.n)(this, CG), (0, wG.n)(this, WG, new yG.c(1, 1, 1))), this.specular = ((0, wG.n)(this, mG), (0, wG.n)(this, IG, new yG.c(1, 1, 1))), this.falloffType = ((0, wG.n)(this, FG), (0, wG.n)(this, vG, GG.FALLOFF_DEFAULT)), this.intens … [truncated]
```

#### 8. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L121)

```diff
-             this.transferToEffect(ju, Zu), this.diffuse.scaleToRef(uu, Xu.m.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", Xu.m.Color3[0], this.range, Zu), su && (this.specular.scaleToRef(uu, Xu.m.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", Xu.m. … [truncated]
+             this.transferToEffect(ZG, LG), this.diffuse.scaleToRef(GG, yG.l.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", yG.l.Color3[0], this.range, LG), wG && (this.specular.scaleToRef(GG, yG.l.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", yG.l. … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L139)

```diff
-           super._syncParentEnabledState(), this.Gw() || this._resyncMeshes()
+           super._syncParentEnabledState(), this.Tu() || this._resyncMeshes()
```

#### 10. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L142)

```diff
-           super.Wk(uu), this._resyncMeshes()
+           super.DW(GG), this._resyncMeshes()
```

#### 11. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L152)

```diff
-           return Zu.t.Zero()
+           return LG.p.Zero()
```

#### 12. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L166)

```diff
-           if (this.hV().stopAnimation(this), this._parentContainer) {
+           if (this.Dv().stopAnimation(this), this._parentContainer) {
```

#### 13. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L170-L171` → after: `L170-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L170-L171) · [Before (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L170-L171)

```diff
-           for (const ju of this.hV().meshes) ju._removeLightSource(this, !0);
-           this._uniformBuffer.dispose(), this.hV().removeLight(this), super.dispose(uu, Eu)
+           for (const ZG of this.Dv().meshes) ZG._removeLightSource(this, !0);
+           this._uniformBuffer.dispose(), this.Dv().removeLight(this), super.dispose(GG, bG)
```

#### 14. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L181` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L181) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L181)

```diff
-           const su = uu.GetConstructorFromName(this.getTypeID(), Eu, this.hV());
+           const wG = GG.GetConstructorFromName(this.getTypeID(), bG, this.Dv());
```

#### 15. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L183-L184` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L183-L184) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L183-L184)

```diff
-           const Uu = bu.e.Clone(su, this);
-           return Eu && (Uu.name = Eu), ju && (Uu.parent = ju), Uu.Wk(this.isEnabled()), this.onClonedObservable.notifyObservers(Uu), Uu
+           const SG = pG.b.Clone(wG, this);
+           return bG && (SG.name = bG), ZG && (SG.parent = ZG), SG.DW(this.isEnabled()), this.onClonedObservable.notifyObservers(SG), SG
```

#### 16. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L187` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L187) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L187)

```diff
-           const uu = bu.e.Serialize(this);
+           const GG = pG.b.Serialize(this);
```

#### 17. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L196)

```diff
-           return bu.e.AppendSerializedAnimations(this, uu), uu.HY = this.serializeAnimationRanges(), uu.isEnabled = this.isEnabled(), uu
+           return pG.b.AppendSerializedAnimations(this, GG), GG.Bh = this.serializeAnimationRanges(), GG.isEnabled = this.isEnabled(), GG
```

#### 18. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L199)

```diff
-           const su = lu.c.Construct("Light_Type_" + uu, Eu, ju);
+           const wG = kG.e.Construct("Light_Type_" + GG, bG, ZG);
```

#### 19. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L206` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L206) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L206)

```diff
-           const Zu = bu.e.Parse(Uu, Eu, ju, su);
+           const LG = pG.b.Parse(SG, bG, ZG, wG);
```

#### 20. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L210)

```diff
-                 su = (0, fu.d)("BABYLON.Animation");
+                 wG = (0, YG.e)("BABYLON.Animation");
```

#### 21. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L213)

```diff
-             lu.c.ParseAnimationRanges(Zu, Eu, ju)
+             kG.e.ParseAnimationRanges(LG, bG, ZG)
```

#### 22. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L215)

```diff
-           return Eu.autoAnimate && ju.beginAnimation(Zu, Eu.autoAnimateFrom, Eu.autoAnimateTo, Eu.autoAnimateLoop, Eu.autoAnimateSpeed || 1), void 0 !== Eu.isEnabled && Zu.Wk(Eu.isEnabled), Zu._onParsed(Eu, ju, su), Zu
+           return bG.autoAnimate && ZG.beginAnimation(LG, bG.autoAnimateFrom, bG.autoAnimateTo, bG.autoAnimateLoop, bG.autoAnimateSpeed || 1), void 0 !== bG.isEnabled && LG.DW(bG.isEnabled), LG._onParsed(bG, ZG, wG), LG
```

#### 23. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L252)

```diff
-             for (const uu of this.hV().meshes) uu._resyncLightSource(this)
+             for (const GG of this.Dv().meshes) GG._resyncLightSource(this)
```

#### 24. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L255)

```diff
-           for (const uu of this.hV().meshes) - 1 !== uu.lightSources.indexOf(this) && uu._markSubMeshesAsLightDirty()
+           for (const GG of this.Dv().meshes) - 1 !== GG.lightSources.indexOf(this) && GG._markSubMeshesAsLightDirty()
```

#### 25. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L258)

```diff
-           this._photometricScale = this._getPhotometricScale(), this.hV().resetCachedMaterial()
+           this._photometricScale = this._getPhotometricScale(), this.Dv().resetCachedMaterial()
```

#### 26. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L298-L299` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L298-L299) · [Before (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L298-L299)

```diff
-           const uu = this.hV();
-           0 != this._renderPriority && (uu.requireLightSorting = !0), this.hV().sortLightsByPriority()
+           const GG = this.Dv();
+           0 != this._renderPriority && (GG.requireLightSorting = !0), this.Dv().sortLightsByPriority()
```

#### 27. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L309` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L309) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L309)

```diff
-         ju = [(0, Uu.j)()], cu = [(0, Uu.j)()], Nu = [(0, Uu.E)()], Ou = [(0, Uu.E)()], Yu = [(0, Uu.E)()], hu = [(0, Uu.E)()], Du = [(0, Uu.E)()], gu = [(0, Uu.E)()], Mu = [(0, Uu.e)("_reorderLightsInScene")], eu = [(0, Uu.E)("shadowEnabled")], Gu = [(0, Uu.E)("excludeWithLayerM … [truncated]
+         ZG = [(0, SG.m)()], fG = [(0, SG.m)()], QG = [(0, SG.Q)()], KG = [(0, SG.Q)()], hG = [(0, SG.Q)()], dG = [(0, SG.Q)()], JG = [(0, SG.Q)()], rG = [(0, SG.Q)()], zG = [(0, SG.d)("_reorderLightsInScene")], EG = [(0, SG.Q)("shadowEnabled")], oG = [(0, SG.Q)("excludeWithLayerM … [truncated]
```

#### 28. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L319` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L319) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L319)

```diff
-         }, null, du), (0, su.e)(uu, null, hu, {
+         }, null, CG), (0, wG.k)(GG, null, dG, {
```

#### 29. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L329` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L329) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L329)

```diff
-         }, null, du), (0, su.e)(uu, null, Du, {
+         }, null, CG), (0, wG.k)(GG, null, JG, {
```

#### 30. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L339)

```diff
-         }, null, du), (0, su.e)(uu, null, Mu, {
+         }, null, CG), (0, wG.k)(GG, null, zG, {
```

#### 31. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L352)

```diff
-         }, iu, Wu), (0, su.e)(null, null, ju, {
+         }, MG, AG), (0, wG.k)(null, null, ZG, {
```

#### 32. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L365)

```diff
-         }, au, Pu), (0, su.e)(null, null, cu, {
+         }, WG, mG), (0, wG.k)(null, null, fG, {
```

#### 33. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L378` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L378) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L378)

```diff
-         }, ou, ku), (0, su.e)(null, null, Nu, {
+         }, IG, FG), (0, wG.k)(null, null, QG, {
```

#### 34. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L391` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L391) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L391)

```diff
-         }, mu, vu), (0, su.e)(null, null, Ou, {
+         }, vG, aG), (0, wG.k)(null, null, KG, {
```

#### 35. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L404` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L404) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L404)

```diff
-         }, Ku, Vu), (0, su.e)(null, null, gu, {
+         }, cG, lG), (0, wG.k)(null, null, rG, {
```

#### 36. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L417)

```diff
-         }, ru, Qu), (0, su.e)(null, null, eu, {
+         }, jG, PG), (0, wG.k)(null, null, EG, {
```

#### 37. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L430` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L430) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L430)

```diff
-         }, Su, Iu), (0, su.e)(null, null, Gu, {
+         }, sG, qG), (0, wG.k)(null, null, oG, {
```

#### 38. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L443)

```diff
-         }, Fu, Bu), (0, su.e)(null, null, pu, {
+         }, nG, gG), (0, wG.k)(null, null, XG, {
```

#### 39. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L456` → after: `L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L456) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L456)

```diff
-         }, Lu, tu), (0, su.e)(null, null, wu, {
+         }, eG, RG), (0, wG.k)(null, null, uG, {
```

#### 40. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L475)

```diff
-       })(), uu.FALLOFF_DEFAULT = Cu.e.FALLOFF_DEFAULT, uu.FALLOFF_PHYSICAL = Cu.e.FALLOFF_PHYSICAL, uu.FALLOFF_GLTF = Cu.e.FALLOFF_GLTF, uu.FALLOFF_STANDARD = Cu.e.FALLOFF_STANDARD, uu.LIGHTMAP_DEFAULT = Cu.e.LIGHTMAP_DEFAULT, uu.LIGHTMAP_SPECULAR = Cu.e.LIGHTMAP_SPECULAR, uu.LIG … [truncated]
+       })(), GG.FALLOFF_DEFAULT = VG.b.FALLOFF_DEFAULT, GG.FALLOFF_PHYSICAL = VG.b.FALLOFF_PHYSICAL, GG.FALLOFF_GLTF = VG.b.FALLOFF_GLTF, GG.FALLOFF_STANDARD = VG.b.FALLOFF_STANDARD, GG.LIGHTMAP_DEFAULT = VG.b.LIGHTMAP_DEFAULT, GG.LIGHTMAP_SPECULAR = VG.b.LIGHTMAP_SPECULAR, GG.LIG … [truncated]
```

#### 41. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L478)

```diff
-   40467: (uu, Eu, ju) => {
+   40599: (GG, bG, ZG) => {
```

#### 42. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L480` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L480) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L480)

```diff
-       c: () => bu
+       e: () => pG
```

#### 43. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L482-L483` → after: `L482-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L482-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L482-L486) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L482-L483)

```diff
-     var su = ju(40255),
-       Uu = ju(37494),
+     var wG = ZG(40393),
+       SG = ZG(37439),
+       LG = ZG(40398),
+       yG = ZG(37465),
+       kG = ZG(37463),
```

#### 44. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L485-L488` → after: `L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L488) · [Before (L485-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L485-L488)

```diff
-       Xu = ju(37514),
-       lu = ju(37506),
-       qu = ju(40153),
-       fu = ju(40272);
+       YG = ZG(40416);
```

#### 45. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L491` → after: `L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L491) · [Before (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L491)

```diff
-         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new Xu.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
+         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new yG.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
```

#### 46. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L575` → after: `L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L575) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L575)

```diff
-           this._onDisposeObserver && this.wV.remove(this._onDisposeObserver), this._onDisposeObserver = this.wV.add(uu)
+           this._onDisposeObserver && this.Gl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Gl.add(GG)
```

#### 47. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L582)

```diff
-           return (uu = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (uu._onEffectiveEnabledStateChangedObservable = new Xu.d)
+           return (GG = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (GG._onEffectiveEnabledStateChangedObservable = new yG.c)
```

#### 48. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L590)

```diff
-           this._isDirty = !1, this._nodeDataStorage = new Cu, this.name = (0, su.g)(this, Ou, void 0), this.id = ((0, su.g)(this, Yu), (0, su.g)(this, hu, void 0)), this.uniqueId = ((0, su.g)(this, Du), (0, su.g)(this, gu, void 0)), this.state = ((0, su.g)(this, Mu), (0, su.g)(th … [truncated]
+           this._isDirty = !1, this._nodeDataStorage = new VG, this.name = (0, wG.n)(this, KG, void 0), this.id = ((0, wG.n)(this, hG), (0, wG.n)(this, dG, void 0)), this.uniqueId = ((0, wG.n)(this, JG), (0, wG.n)(this, rG, void 0)), this.state = ((0, wG.n)(this, zG), (0, wG.n)(th … [truncated]
```

#### 49. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L596` → after: `L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L596) · [Before (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L596)

```diff
-           return this._scene.wO()
+           return this._scene.CK()
```

#### 50. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L650` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L650) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L650)

```diff
-         tEu(uu) {
+         wZG(GG) {
```

#### 51. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L728` → after: `L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L728) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L728)

```diff
-           const Uu = fu.e.Clone((() => new uu(Eu, this.hV())), this);
+           const SG = YG.b.Clone((() => new GG(bG, this.Dv())), this);
```

#### 52. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L767)

```diff
-           this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.wV.notifyObservers(this), this.wV.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
+           this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.Gl.notifyObservers(this), this.Gl.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
```

#### 53. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L772-L774` → after: `L772-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L772-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L772-L774) · [Before (L772-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L772-L774)

```diff
-           if (Eu.HY)
-             for (let su = 0; su < Eu.HY.length; su++) {
-               const ju = Eu.HY[su];
+           if (bG.Bh)
+             for (let wG = 0; wG < bG.Bh.length; wG++) {
+               const ZG = bG.Bh[wG];
```

#### 54. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L781` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L781) · [Before (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L781)

```diff
-           this.hV().incrementRenderId(), this.computeWorldMatrix(!0);
+           this.Dv().incrementRenderId(), this.computeWorldMatrix(!0);
```

#### 55. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L783-L784` → after: `L783-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L783-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L783-L784) · [Before (L783-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L783-L784)

```diff
-           if (Zu.EW && Zu.iG) {
-             const ju = Zu.EW();
+           if (LG.HA && LG.aE) {
+             const ZG = LG.HA();
```

#### 56. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L786` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L786) · [Before (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L786)

```diff
-           } else uu = new Uu.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), Eu = new Uu.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+           } else GG = new SG.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), bG = new SG.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
```

#### 57. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L792-L793` → after: `L792-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L792-L793) · [Before (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L792-L793)

```diff
-               if (!ju.EW || 0 === ju.getTotalVertices()) continue;
-               const Xu = ju.EW().boundingBox,
+               if (!ZG.HA || 0 === ZG.getTotalVertices()) continue;
+               const yG = ZG.HA().boundingBox,
```

#### 58. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L796)

```diff
-               Uu.t.CheckExtends(lu, uu, Eu), Uu.t.CheckExtends(qu, uu, Eu)
+               SG.p.CheckExtends(kG, GG, bG), SG.p.CheckExtends(UG, GG, bG)
```

#### 59. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L806` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L806) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L806)

```diff
-         Eu = [(0, Zu.E)()], ju = [(0, Zu.E)()], bu = [(0, Zu.E)()], cu = [(0, Zu.E)()], Nu = [(0, Zu.E)()], (0, su.e)(null, null, Eu, {
+         bG = [(0, LG.Q)()], ZG = [(0, LG.Q)()], pG = [(0, LG.Q)()], fG = [(0, LG.Q)()], QG = [(0, LG.Q)()], (0, wG.k)(null, null, bG, {
```

#### 60. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L819` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L819) · [Before (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L819)

```diff
-         }, Ou, Yu), (0, su.e)(null, null, ju, {
+         }, KG, hG), (0, wG.k)(null, null, ZG, {
```

#### 61. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L832` → after: `L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L832) · [Before (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L832)

```diff
-         }, hu, Du), (0, su.e)(null, null, bu, {
+         }, dG, JG), (0, wG.k)(null, null, pG, {
```

#### 62. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L845` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L845) · [Before (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L845)

```diff
-         }, gu, Mu), (0, su.e)(null, null, cu, {
+         }, rG, zG), (0, wG.k)(null, null, fG, {
```

#### 63. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L858)

```diff
-         }, eu, Gu), (0, su.e)(null, null, Nu, {
+         }, EG, oG), (0, wG.k)(null, null, QG, {
```

#### 64. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L878` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/263.js#L878) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/263.js#L878)

```diff
-         throw (0, qu.h)("AnimationRange")
+         throw (0, UG.i)("AnimationRange")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/264.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/264.js` (172 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6)

#### 1. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L4)

```diff
-   41314: (uu, Eu, ju) => {
+   41476: (GG, bG, ZG) => {
```

#### 2. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L8-L17` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L8-L17) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L8-L17)

```diff
-     var su = ju(40255),
-       Uu = ju(40258),
-       Zu = ju(37514),
-       Xu = ju(37494),
-       lu = ju(37519),
-       qu = ju(40467),
-       fu = ju(40661),
-       Cu = ju(40430),
-       bu = ju(40170),
-       cu = ju(37496);
+     var wG = ZG(40393),
+       SG = ZG(40398),
+       LG = ZG(37465),
+       yG = ZG(37439),
+       kG = ZG(37471),
+       UG = ZG(40599),
+       YG = ZG(40784),
+       VG = ZG(40550),
+       pG = ZG(40285),
+       fG = ZG(37443);
```

#### 3. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L58)

```diff
-         const Eu = this._attachedCamera.hV();
+         const bG = this._attachedCamera.Dv();
```

#### 4. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L60)

```diff
-           uu.type !== Cu.d.POINTERDOWN ? uu.type === Cu.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
+           GG.type !== VG.b.POINTERDOWN ? GG.type === VG.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
```

#### 5. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L73)

```diff
-         const uu = this._attachedCamera.hV();
+         const GG = this._attachedCamera.Dv();
```

#### 6. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L80)

```diff
-         return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < cu.c
+         return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < fG.d
```

#### 7. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L88)

```diff
-         return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (uu = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? uu : this._userIsZooming()
+         return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (GG = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? GG : this._userIsZooming()
```

#### 8. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L97)

```diff
-     ju(41317);
+     ZG(41481);
```

#### 9. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L123)

```diff
-     var Yu = ju(41319);
+     var hG = ZG(41487);
```

#### 10. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L139-L140` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L139-L140) · [Before (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L139-L140)

```diff
-           if (uu && (uu.computeWorldMatrix(!0), uu.EW)) {
-             const Eu = uu.EW().diagonalLength;
+           if (GG && (GG.computeWorldMatrix(!0), GG.HA)) {
+             const bG = GG.HA().diagonalLength;
```

#### 11. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L162-L163` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L162-L163) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L162-L163)

```diff
-         this._radiusBounceTransition || (hu.EasingFunction.setEasingMode(hu.EasingMode), this._radiusBounceTransition = Yu.e.CreateAnimation("radius", Yu.e.ANIMATIONTYPE_FLOAT, 60, hu.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attach … [truncated]
-         const Eu = Yu.e.TransitionTo("radius", this._attachedCamera.radius + uu, this._attachedCamera, this._attachedCamera.hV(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
+         this._radiusBounceTransition || (dG.EasingFunction.setEasingMode(dG.EasingMode), this._radiusBounceTransition = hG.d.CreateAnimation("radius", hG.d.ANIMATIONTYPE_FLOAT, 60, dG.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attach … [truncated]
+         const bG = hG.d.TransitionTo("radius", this._attachedCamera.radius + GG, this._attachedCamera, this._attachedCamera.Dv(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
```

#### 12. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L185)

```diff
-         this.onTargetFramingAnimationEndObservable = new Zu.d, this._mode = Du.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
+         this.onTargetFramingAnimationEndObservable = new LG.c, this._mode = JG.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L244` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L244) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L244)

```diff
-         const Eu = this._attachedCamera.hV();
+         const bG = this._attachedCamera.Dv();
```

#### 14. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L246)

```diff
-           uu.type !== Cu.d.POINTERDOWN ? uu.type === Cu.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
+           GG.type !== VG.b.POINTERDOWN ? GG.type === VG.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
```

#### 15. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L248)

```diff
-           uu && uu.EW && this.zoomOnMesh(uu, void 0, (() => {
+           GG && GG.HA && this.zoomOnMesh(GG, void 0, (() => {
```

#### 16. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L257)

```diff
-         const uu = this._attachedCamera.hV();
+         const GG = this._attachedCamera.Dv();
```

#### 17. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L264)

```diff
-         const su = uu.EW().boundingBox;
+         const wG = GG.HA().boundingBox;
```

#### 18. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L277-L278` → after: `L277-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L277-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L277-L278) · [Before (L277-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L277-L278)

```diff
-         const su = new Xu.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-           Uu = new Xu.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         const wG = new yG.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           SG = new yG.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
```

#### 19. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L281)

```diff
-           Xu.t.CheckExtends(Eu.min, su, Uu), Xu.t.CheckExtends(Eu.max, su, Uu)
+           yG.p.CheckExtends(bG.min, wG, SG), yG.p.CheckExtends(bG.max, wG, SG)
```

#### 20. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L293` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L293) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L293)

```diff
-         if (su) ju = new Xu.t(0, lu, 0);
+         if (wG) ZG = new yG.p(0, kG, 0);
```

#### 21. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L296)

```diff
-           ju = new Xu.t(Eu.x, lu, Eu.z)
+           ZG = new yG.p(bG.x, kG, bG.z)
```

#### 22. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L298-L299` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L298-L299) · [Before (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L298-L299)

```diff
-         this._vectorTransition || (this._vectorTransition = Yu.e.CreateAnimation("target", Yu.e.ANIMATIONTYPE_VECTOR3, 60, Du.EasingFunction)), this._betaIsAnimating = !0;
-         let fu = Yu.e.TransitionTo("target", ju, this._attachedCamera, this._attachedCamera.hV(), 60, this._vectorTransition, this._framingTime);
+         this._vectorTransition || (this._vectorTransition = hG.d.CreateAnimation("target", hG.d.ANIMATIONTYPE_VECTOR3, 60, JG.EasingFunction)), this._betaIsAnimating = !0;
+         let YG = hG.d.TransitionTo("target", ZG, this._attachedCamera, this._attachedCamera.Dv(), 60, this._vectorTransition, this._framingTime);
```

#### 23. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L310)

```diff
-         return this._radiusTransition || (this._radiusTransition = Yu.e.CreateAnimation("radius", Yu.e.ANIMATIONTYPE_FLOAT, 60, Du.EasingFunction)), fu = Yu.e.TransitionTo("radius", Cu, this._attachedCamera, this._attachedCamera.hV(), 60, this._radiusTransition, this._framingTime … [truncated]
+         return this._radiusTransition || (this._radiusTransition = hG.d.CreateAnimation("radius", hG.d.ANIMATIONTYPE_FLOAT, 60, JG.EasingFunction)), YG = hG.d.TransitionTo("radius", VG, this._attachedCamera, this._attachedCamera.Dv(), 60, this._radiusTransition, this._framingTime … [truncated]
```

#### 24. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L326-L327` → after: `L326-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L326-L327) · [Before (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L326-L327)

```diff
-           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Yu.e.CreateAnimation("beta", Yu.e.ANIMATIONTYPE_FLOAT, 60, Du.EasingFunction));
-           const uu = Yu.e.TransitionTo("beta", Eu, this._attachedCamera, this._attachedCamera.hV(), 60, this._betaTransition, this._elevationReturnTime, (() => {
+           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = hG.d.CreateAnimation("beta", hG.d.ANIMATIONTYPE_FLOAT, 60, JG.EasingFunction));
+           const GG = hG.d.TransitionTo("beta", bG, this._attachedCamera, this._attachedCamera.Dv(), 60, this._betaTransition, this._elevationReturnTime, (() => {
```

#### 25. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L352)

```diff
-         return this.exponent <= 0 ? uu : (Math.exp(this.exponent * uu) - 1) / (Math.exp(this.exponent) - 1)
+         return this.exponent <= 0 ? GG : (Math.exp(this.exponent * GG) - 1) / (Math.exp(this.exponent) - 1)
```

#### 26. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L355-L358` → after: `L355-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L355-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L355-L358) · [Before (L355-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L355-L358)

```diff
-     var gu = ju(40462),
-       Mu = ju(40459),
-       eu = ju(40499),
-       Gu = ju(40356);
+     var rG = ZG(40592),
+       zG = ZG(40585),
+       EG = ZG(40623),
+       oG = ZG(40477);
```

#### 27. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L365)

```diff
-             this._currentMousePointerIdDown = -1, this.buttons = (0, su.g)(this, ju, [0, 1, 2]), this._pointerInput = (0, su.g)(this, Zu)
+             this._currentMousePointerIdDown = -1, this.buttons = (0, wG.n)(this, ZG, [0, 1, 2]), this._pointerInput = (0, wG.n)(this, LG)
```

#### 28. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L368-L369` → after: `L368-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L368-L369) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L368-L369)

```diff
-             uu = Gu.h.BackCompatCameraNoPreventDefault(arguments);
-             const Eu = this.camera.wO(),
+             GG = oG.f.BackCompatCameraNoPreventDefault(arguments);
+             const bG = this.camera.CK(),
```

#### 29. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L376` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L376) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L376)

```diff
-               if (Zu.type !== Cu.d.POINTERMOVE && -1 === this.buttons.indexOf(Xu.button)) return;
+               if (LG.type !== VG.b.POINTERMOVE && -1 === this.buttons.indexOf(yG.button)) return;
```

#### 30. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L383-L387` → after: `L383-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L383-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L383-L387) · [Before (L383-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L383-L387)

```diff
-                 if (Zu.type !== Cu.d.POINTERDOWN && Zu.type !== Cu.d.POINTERDOUBLETAP && lu && this._pointA?.pointerId !== Xu.pointerId && this._pointB?.pointerId !== Xu.pointerId) return;
-                 if (Zu.type !== Cu.d.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !lu)
-                   if (Zu.type === Cu.d.POINTERDOUBLETAP) this.onDoubleTap(Xu.pointerType, Xu);
-                   else if (Zu.type !== Cu.d.POINTERUP || this._currentMousePointerIdDown !== Xu.pointerId && !lu) {
-                   if (Zu.type === Cu.d.POINTERMOVE)
+                 if (LG.type !== VG.b.POINTERDOWN && LG.type !== VG.b.POINTERDOUBLETAP && kG && this._pointA?.pointerId !== yG.pointerId && this._pointB?.pointerId !== yG.pointerId) return;
+                 if (LG.type !== VG.b.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !kG)
+                   if (LG.type === VG.b.POINTERDOUBLETAP) this.onDoubleTap(yG.pointerType, yG);
+                   else if (LG.type !== VG.b.POINTERUP || this._currentMousePointerIdDown !== yG.pointerId && !kG) {
+                   if (LG.type === VG.b.POINTERMOVE)
```

#### 31. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L434)

```diff
-             }, this._observer = this.camera.hV()._inputManager._addCameraPointerObserver(this._pointerInput, Cu.d.POINTERDOWN | Cu.d.POINTERUP | Cu.d.POINTERMOVE | Cu.d.POINTERDOUBLETAP), this._onLostFocus = () => {
+             }, this._observer = this.camera.Dv()._inputManager._addCameraPointerObserver(this._pointerInput, VG.b.POINTERDOWN | VG.b.POINTERUP | VG.b.POINTERMOVE | VG.b.POINTERDOUBLETAP), this._onLostFocus = () => {
```

#### 32. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L437-L438` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L437-L438) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L437-L438)

```diff
-             const Zu = this.camera.hV().wO().getHostWindow();
-             Zu && Gu.h.RegisterTopRootEvents(Zu, [{
+             const LG = this.camera.Dv().CK().getHostWindow();
+             LG && oG.f.RegisterTopRootEvents(LG, [{
```

#### 33. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L445-L446` → after: `L445-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L445-L446) · [Before (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L445-L446)

```diff
-               const uu = this.camera.hV().wO().getHostWindow();
-               uu && Gu.h.UnregisterTopRootEvents(uu, [{
+               const GG = this.camera.Dv().CK().getHostWindow();
+               GG && oG.f.UnregisterTopRootEvents(GG, [{
```

#### 34. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L452-L453` → after: `L452-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L452-L453) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L452-L453)

```diff
-               if (this.camera.hV()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
-                 const uu = this.camera.hV().wO().getInputElement();
+               if (this.camera.Dv()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
+                 const GG = this.camera.Dv().CK().getInputElement();
```

#### 35. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L477` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L477) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L477)

```diff
-           Eu = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
+           bG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
```

#### 36. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L509` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L509) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L509)

```diff
-             super(...arguments), this.pinchZoom = (0, su.g)(this, lu, !0), this.multiTouchPanning = ((0, su.g)(this, qu), (0, su.g)(this, fu, !0)), this.multiTouchPanAndZoom = ((0, su.g)(this, Cu), (0, su.g)(this, bu, !0)), this._isPinching = ((0, su.g)(this, cu), !1), this._twoF … [truncated]
+             super(...arguments), this.pinchZoom = (0, wG.n)(this, kG, !0), this.multiTouchPanning = ((0, wG.n)(this, UG), (0, wG.n)(this, YG, !0)), this.multiTouchPanAndZoom = ((0, wG.n)(this, VG), (0, wG.n)(this, pG, !0)), this._isPinching = ((0, wG.n)(this, fG), !1), this._twoF … [truncated]
```

#### 37. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L524` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L524) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L524)

```diff
-           Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Zu = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
+           bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], LG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
```

#### 38. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L537)

```diff
-           }, lu, qu), (0, su.e)(null, null, ju, {
+           }, kG, UG), (0, wG.k)(null, null, ZG, {
```

#### 39. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L550` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L550) · [Before (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L550)

```diff
-           }, fu, Cu), (0, su.e)(null, null, Zu, {
+           }, YG, VG), (0, wG.k)(null, null, LG, {
```

#### 40. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L590)

```diff
-             super(...arguments), this.buttons = (0, su.g)(this, bu, [0, 1, 2]), this.angularSensibilityX = ((0, su.g)(this, cu), (0, su.g)(this, Nu, 1e3)), this.angularSensibilityY = ((0, su.g)(this, Ou), (0, su.g)(this, Yu, 1e3)), this.pinchPrecision = ((0, su.g)(this, hu), (0,  … [truncated]
+             super(...arguments), this.buttons = (0, wG.n)(this, pG, [0, 1, 2]), this.angularSensibilityX = ((0, wG.n)(this, fG), (0, wG.n)(this, QG, 1e3)), this.angularSensibilityY = ((0, wG.n)(this, KG), (0, wG.n)(this, hG, 1e3)), this.pinchPrecision = ((0, wG.n)(this, dG), (0,  … [truncated]
```

#### 41. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L625)

```diff
-             const su = this._activeEntry ?? (this.camera.wO().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
+             const wG = this._activeEntry ?? (this.camera.CK().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
```

#### 42. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L631-L632` → after: `L631-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L631-L632) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L631-L632)

```diff
-               const uu = su.XT ?? su.sensitivity ?? 1 / this.angularSensibilityX,
-                 Uu = su.lT ?? su.sensitivity ?? 1 / this.angularSensibilityY;
+               const GG = wG.nD ?? wG.sensitivity ?? 1 / this.angularSensibilityX,
+                 SG = wG.eD ?? wG.sensitivity ?? 1 / this.angularSensibilityY;
```

#### 43. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L653` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L653) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L653)

```diff
-           Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Zu = [(0, Uu.E)()], Xu = [(0, Uu.E)()], lu = [(0, Uu.E)()], qu = [(0, Uu.E)()], fu = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
+           bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], LG = [(0, SG.Q)()], yG = [(0, SG.Q)()], kG = [(0, SG.Q)()], UG = [(0, SG.Q)()], YG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
```

#### 44. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L666` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L666) · [Before (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L666)

```diff
-           }, bu, cu), (0, su.e)(null, null, ju, {
+           }, pG, fG), (0, wG.k)(null, null, ZG, {
```

#### 45. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L679` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L679) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L679)

```diff
-           }, Nu, Ou), (0, su.e)(null, null, Zu, {
+           }, QG, KG), (0, wG.k)(null, null, LG, {
```

#### 46. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L692` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L692) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L692)

```diff
-           }, Yu, hu), (0, su.e)(null, null, Xu, {
+           }, hG, dG), (0, wG.k)(null, null, yG, {
```

#### 47. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L705` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L705) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L705)

```diff
-           }, Du, gu), (0, su.e)(null, null, lu, {
+           }, JG, rG), (0, wG.k)(null, null, kG, {
```

#### 48. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L718` → after: `L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L718) · [Before (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L718)

```diff
-           }, Mu, eu), (0, su.e)(null, null, qu, {
+           }, zG, EG), (0, wG.k)(null, null, UG, {
```

#### 49. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L731` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L731) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L731)

```diff
-           }, Gu, pu), (0, su.e)(null, null, fu, {
+           }, oG, XG), (0, wG.k)(null, null, YG, {
```

#### 50. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L753` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L753) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L753)

```diff
-     var du = ju(40434);
+     var CG = ZG(40554);
```

#### 51. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L779` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L779) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L779)

```diff
-           this.camera = (0, su.g)(this, Yu), this.keysUp = (0, su.g)(this, hu, [38]), this.keysDown = ((0, su.g)(this, Du), (0, su.g)(this, gu, [40])), this.keysLeft = ((0, su.g)(this, Mu), (0, su.g)(this, eu, [37])), this.keysRight = ((0, su.g)(this, pu), (0, su.g)(this, wu, [39 … [truncated]
+           this.camera = (0, wG.n)(this, hG), this.keysUp = (0, wG.n)(this, dG, [38]), this.keysDown = ((0, wG.n)(this, JG), (0, wG.n)(this, rG, [40])), this.keysLeft = ((0, wG.n)(this, zG), (0, wG.n)(this, EG, [37])), this.keysRight = ((0, wG.n)(this, XG), (0, wG.n)(this, uG, [39 … [truncated]
```

#### 52. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L784` → after: `L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L784) · [Before (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L784)

```diff
-           }, this._rotateDirection = new Xu.p, this._panDirection = new Xu.p
+           }, this._rotateDirection = new yG.m, this._panDirection = new yG.m
```

#### 53. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L809)

```diff
-           uu = Gu.h.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.hV(), this._engine = this._scene.wO(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+           GG = oG.f.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Dv(), this._engine = this._scene.CK(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
```

#### 54. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L814` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L814) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L814)

```diff
-               if (Eu.type === du.b.KEYDOWN) {
+               if (bG.type === CG.e.KEYDOWN) {
```

#### 55. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L858)

```diff
-         Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Zu = [(0, Uu.E)()], lu = [(0, Uu.E)()], qu = [(0, Uu.E)()], fu = [(0, Uu.E)()], Cu = [(0, Uu.E)()], bu = [(0, Uu.E)()], cu = [(0, Uu.E)()], Nu = [(0, Uu.E)()], Ou = [(0, Uu.E)()], (0, su.e)(uu, null, Ou, {
+         bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], LG = [(0, SG.Q)()], kG = [(0, SG.Q)()], UG = [(0, SG.Q)()], YG = [(0, SG.Q)()], VG = [(0, SG.Q)()], pG = [(0, SG.Q)()], fG = [(0, SG.Q)()], QG = [(0, SG.Q)()], KG = [(0, SG.Q)()], (0, wG.k)(GG, null, KG, {
```

#### 56. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L868` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L868) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L868)

```diff
-         }, null, Yu), (0, su.e)(null, null, Eu, {
+         }, null, hG), (0, wG.k)(null, null, bG, {
```

#### 57. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L881)

```diff
-         }, hu, Du), (0, su.e)(null, null, ju, {
+         }, dG, JG), (0, wG.k)(null, null, ZG, {
```

#### 58. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L894)

```diff
-         }, gu, Mu), (0, su.e)(null, null, Zu, {
+         }, rG, zG), (0, wG.k)(null, null, LG, {
```

#### 59. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L907)

```diff
-         }, eu, pu), (0, su.e)(null, null, lu, {
+         }, EG, XG), (0, wG.k)(null, null, kG, {
```

#### 60. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L920` → after: `L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L920) · [Before (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L920)

```diff
-         }, wu, Ju), (0, su.e)(null, null, qu, {
+         }, uG, iG), (0, wG.k)(null, null, UG, {
```

#### 61. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L933` → after: `L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L933) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L933)

```diff
-         }, au, Pu), (0, su.e)(null, null, fu, {
+         }, WG, mG), (0, wG.k)(null, null, YG, {
```

#### 62. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L946)

```diff
-         }, ou, ku), (0, su.e)(null, null, Cu, {
+         }, IG, FG), (0, wG.k)(null, null, VG, {
```

#### 63. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L959)

```diff
-         }, mu, vu), (0, su.e)(null, null, bu, {
+         }, vG, aG), (0, wG.k)(null, null, pG, {
```

#### 64. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L972)

```diff
-         }, Ku, Vu), (0, su.e)(null, null, cu, {
+         }, cG, lG), (0, wG.k)(null, null, fG, {
```

#### 65. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L985` → after: `L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L985) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L985)

```diff
-         }, ru, Qu), (0, su.e)(null, null, Nu, {
+         }, jG, PG), (0, wG.k)(null, null, QG, {
```

#### 66. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1007-L1008` → after: `L1007-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1007-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1007-L1008) · [Before (L1007-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1007-L1008)

```diff
-     var Pu = ju(38154),
-       ou = ju(40442);
+     var mG = ZG(38175),
+       IG = ZG(40560);
```

#### 67. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1019` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1019) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1019)

```diff
-           this.wheelPrecision = (0, su.g)(this, qu, 3), this.zoomToMouseLocation = ((0, su.g)(this, fu), (0, su.g)(this, bu, !1)), this.wheelDeltaPercentage = ((0, su.g)(this, Nu), (0, su.g)(this, Ou, 0)), this.customComputeDeltaFromMouseWheel = ((0, su.g)(this, Yu), null), this. … [truncated]
+           this.wheelPrecision = (0, wG.n)(this, UG, 3), this.zoomToMouseLocation = ((0, wG.n)(this, YG), (0, wG.n)(this, pG, !1)), this.wheelDeltaPercentage = ((0, wG.n)(this, QG), (0, wG.n)(this, KG, 0)), this.customComputeDeltaFromMouseWheel = ((0, wG.n)(this, hG), null), this. … [truncated]
```

#### 68. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1027-L1028` → after: `L1027-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1027-L1028) · [Before (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1027-L1028)

```diff
-           uu = Gu.h.BackCompatCameraNoPreventDefault(arguments), this._wheel = Eu => {
-             if (Eu.type !== Cu.d.POINTERWHEEL) return;
+           GG = oG.f.BackCompatCameraNoPreventDefault(arguments), this._wheel = bG => {
+             if (bG.type !== VG.b.POINTERWHEEL) return;
```

#### 69. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1047` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1047) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1047)

```diff
-           }, this._observer = this.camera.hV()._inputManager._addCameraPointerObserver(this._wheel, Cu.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.k_(0)
+           }, this._observer = this.camera.Dv()._inputManager._addCameraPointerObserver(this._wheel, VG.b.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.N7(0)
```

#### 70. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1050` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1050) · [Before (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1050)

```diff
-           this._observer && (this.camera.hV()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
+           this._observer && (this.camera.Dv()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
```

#### 71. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1058)

```diff
-             this._inertialPanning.scaleInPlace(Eu), this._zoomToMouseRadiusOffset *= Eu, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < cu.c && (this._zoomToMouseRadiusOffset = 0)
+             this._inertialPanning.scaleInPlace(bG), this._zoomToMouseRadiusOffset *= bG, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < fG.d && (this._zoomToMouseRadiusOffset = 0)
```

#### 72. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1070` → after: `L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1070) · [Before (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1070)

```diff
-           this._hitPlane = Pu.d.FromPositionAndNormal(uu.target, Eu)
+           this._hitPlane = mG.b.FromPositionAndNormal(GG.target, bG)
```

#### 73. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1074` → after: `L1074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1074) · [Before (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1074)

```diff
-             Eu = uu.hV(),
+             bG = GG.Dv(),
```

#### 74. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1076` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1076) · [Before (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1076)

```diff
-           0 === uu.targetScreenOffset.x && 0 === uu.targetScreenOffset.y || (this._viewOffset.set(uu.targetScreenOffset.x, uu.targetScreenOffset.y, 0), uu.getViewMatrix().invertToRef(uu._cameraTransformMatrix), this._globalOffset = Xu.t.TransformNormal(this._viewOffset, uu._camer … [truncated]
+           0 === GG.targetScreenOffset.x && 0 === GG.targetScreenOffset.y || (this._viewOffset.set(GG.targetScreenOffset.x, GG.targetScreenOffset.y, 0), GG.getViewMatrix().invertToRef(GG._cameraTransformMatrix), this._globalOffset = yG.p.TransformNormal(this._viewOffset, GG._camer … [truncated]
```

#### 75. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1094` → after: `L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1094) · [Before (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1094)

```diff
-             lu = Xu.m.dO[6];
+             kG = yG.j.mK[6];
```

#### 76. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1098` → after: `L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1098) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1098)

```diff
-           Math.abs(uu.x) < cu.c && (uu.x = 0), Math.abs(uu.y) < cu.c && (uu.y = 0), Math.abs(uu.z) < cu.c && (uu.z = 0)
+           Math.abs(GG.x) < fG.d && (GG.x = 0), Math.abs(GG.y) < fG.d && (GG.y = 0), Math.abs(GG.z) < fG.d && (GG.z = 0)
```

#### 77. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1102` → after: `L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1102) · [Before (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1102)

```diff
-         Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Zu = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
+         bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], LG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
```

#### 78. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1115` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1115) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1115)

```diff
-         }, qu, fu), (0, su.e)(null, null, ju, {
+         }, UG, YG), (0, wG.k)(null, null, ZG, {
```

#### 79. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1128` → after: `L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1128) · [Before (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1128)

```diff
-         }, bu, Nu), (0, su.e)(null, null, Zu, {
+         }, pG, QG), (0, wG.k)(null, null, LG, {
```

#### 80. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1150-L1151` → after: `L1150-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1150-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1150-L1151) · [Before (L1150-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1150-L1151)

```diff
-     var mu, vu, Ku = ju(40153);
-     class Vu extends eu.h {
+     var vG, aG, cG = ZG(40258);
+     class lG extends EG.f {
```

#### 81. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1164-L1167` → after: `L1164-L1167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1164-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1164-L1167) · [Before (L1164-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1164-L1167)

```diff
-     }(mu = Vu.prototype).addVRDeviceOrientation ?? (mu.addVRDeviceOrientation = (0, Ku.g)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (vu = Vu.prototype).addGamepad ?? (vu.addGamepad = (0, Ku.g)("ArcRotateCameraInputsManager", "addGamepad"));
-     var ru = ju(37532),
-       Qu = ju(40481),
-       iu = ju(40490);
+     }(vG = lG.prototype).addVRDeviceOrientation ?? (vG.addVRDeviceOrientation = (0, cG.h)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (aG = lG.prototype).addGamepad ?? (aG.addGamepad = (0, cG.h)("ArcRotateCameraInputsManager", "addGamepad"));
+     var jG = ZG(37484),
+       PG = ZG(40610),
+       MG = ZG(40617);
```

#### 82. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1225` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1225) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1225)

```diff
-       return isNaN(uu) ? Eu : uu
+       return isNaN(GG) ? bG : GG
```

#### 83. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1279` → after: `L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1279) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1279)

```diff
-             return this.bR
+             return this.U1
```

#### 84. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1300` → after: `L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1300) · [Before (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1300)

```diff
-             this._upToYMatrix || (this._yToUpMatrix = new Xu.e, this._upToYMatrix = new Xu.e, this._upVector = Xu.t.Zero()), uu.normalize(), this._upVector.yJ(uu), this.setMatUp()
+             this._upToYMatrix || (this._yToUpMatrix = new yG.e, this._upToYMatrix = new yG.e, this._upVector = yG.p.Zero()), GG.normalize(), this._upVector.oW(GG), this.setMatUp()
```

#### 85. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1306` → after: `L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1306) · [Before (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1306)

```diff
-             Xu.e.RotationAlignToRef(Xu.t.UpReadOnly, this._upVector, this._yToUpMatrix), Xu.e.RotationAlignToRef(this._upVector, Xu.t.UpReadOnly, this._upToYMatrix)
+             yG.e.RotationAlignToRef(yG.p.UpReadOnly, this._upVector, this._yToUpMatrix), yG.e.RotationAlignToRef(this._upVector, yG.p.UpReadOnly, this._upToYMatrix)
```

#### 86. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1526` → after: `L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1526) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1526)

```diff
-             super(uu, Xu.t.Zero(), qu, Cu), fu = this, this.alpha = ((0, su.g)(this, Hu), (0, su.g)(this, Au, void 0)), this.beta = ((0, su.g)(this, nu), (0, su.g)(this, yu, void 0)), this.radius = ((0, su.g)(this, zu), (0, su.g)(this, Ru, void 0)), this.overrideCloneAlphaBetaRad … [truncated]
+             super(GG, yG.p.Zero(), UG, VG), YG = this, this.alpha = ((0, wG.n)(this, tG), (0, wG.n)(this, DG, void 0)), this.beta = ((0, wG.n)(this, NG), (0, wG.n)(this, OG, void 0)), this.radius = ((0, wG.n)(this, xG), (0, wG.n)(this, BG, void 0)), this.overrideCloneAlphaBetaRad … [truncated]
```

#### 87. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1528` → after: `L1528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1528) · [Before (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1528)

```diff
-               ju ? (fu.setPosition(Eu), fu.fc && fu.fc(ju)) : fu._previousPosition.yJ(fu._position);
+               ZG ? (YG.setPosition(bG), YG.Uf && YG.Uf(ZG)) : YG._previousPosition.oW(YG._position);
```

#### 88. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1535` → after: `L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1535) · [Before (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1535)

```diff
-               fu._computationVector.T6(fu.radius * su * Xu, fu.radius * Zu, fu.radius * Uu * Xu), lu.addToRef(fu._computationVector, fu._newPosition), fu._position.yJ(fu._newPosition);
+               YG._computationVector.fGG(YG.radius * wG * yG, YG.radius * LG, YG.radius * SG * yG), kG.addToRef(YG._computationVector, YG._newPosition), YG._position.oW(YG._newPosition);
```

#### 89. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1537-L1538` → after: `L1537-L1538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1537-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1537-L1538) · [Before (L1537-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1537-L1538)

```diff
-               fu.allowUpsideDown && fu.beta < 0 && (qu = qu.clone(), qu = qu.nZ()), fu._computeViewMatrix(fu._position, lu, qu), fu._viewMatrix.addAtIndex(12, fu.targetScreenOffset.x), fu._viewMatrix.addAtIndex(13, fu.targetScreenOffset.y), fu._collisionTriggered = !1
-             }, this.bR = Xu.t.Zero(), lu && this.setTarget(lu), this.alpha = Eu, this.beta = ju, this.radius = Uu, this.getViewMatrix(), this.inputs = new Vu(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new Wu(this.hV(), this._position), this.mo … [truncated]
+               YG.allowUpsideDown && YG.beta < 0 && (UG = UG.clone(), UG = UG.By()), YG._computeViewMatrix(YG._position, kG, UG), YG._viewMatrix.addAtIndex(12, YG.targetScreenOffset.x), YG._viewMatrix.addAtIndex(13, YG.targetScreenOffset.y), YG._collisionTriggered = !1
+             }, this.U1 = yG.p.Zero(), kG && this.setTarget(kG), this.alpha = bG, this.beta = ZG, this.radius = SG, this.getViewMatrix(), this.inputs = new lG(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new AG(this.Dv(), this._position), this.mo … [truncated]
```

#### 90. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1541` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1541) · [Before (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1541)

```diff
-             super._initCache(), this._cache.bR = new Xu.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = Xu.p.Zero()
+             super._initCache(), this._cache.U1 = new yG.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = yG.m.Zero()
```

#### 91. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1544` → after: `L1544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1544) · [Before (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1544)

```diff
-             uu || super._updateCache(), this._cache.bR.yJ(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.yJ(this.targetScreenOffset)
+             GG || super._updateCache(), this._cache.U1.oW(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.oW(this.targetScreenOffset)
```

#### 92. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1549` → after: `L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1549) · [Before (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1549)

```diff
-               this._targetBoundingCenter ? uu.addToRef(this._targetBoundingCenter, this.bR) : this.bR.yJ(uu)
+               this._targetBoundingCenter ? GG.addToRef(this._targetBoundingCenter, this.U1) : this.U1.oW(GG)
```

#### 93. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1552` → after: `L1552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1552) · [Before (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1552)

```diff
-             return uu || this.bR
+             return GG || this.U1
```

#### 94. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1558` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1558) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1558)

```diff
-             return this.hasStateStored() && this.restoreStateInterpolationFactor > cu.c && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreState … [truncated]
+             return this.hasStateStored() && this.restoreStateInterpolationFactor > fG.d && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreState … [truncated]
```

#### 95. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1570` → after: `L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1570) · [Before (L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1570)

```diff
-             this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != Zu ? this._currentInterpolationFactor = Zu : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolation … [truncated]
+             this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != LG ? this._currentInterpolationFactor = LG : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolation … [truncated]
```

#### 96. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1573` → after: `L1573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1573) · [Before (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1573)

```diff
-             return !!super._isSynchronizedViewMatrix() && (this._cache.bR.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset … [truncated]
+             return !!super._isSynchronizedViewMatrix() && (this._cache.U1.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset … [truncated]
```

#### 97. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1579` → after: `L1579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1579) · [Before (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1579)

```diff
-             Eu = Gu.h.BackCompatCameraNoPreventDefault(Uu), this._useCtrlForPanning = ju, this._panningMouseButton = su, "boolean" === typeof Uu[0] && (Uu.length > 1 && (this._useCtrlForPanning = Uu[1]), Uu.length > 2 && (this._panningMouseButton = Uu[2])), this.inputs.attachElem … [truncated]
+             bG = oG.f.BackCompatCameraNoPreventDefault(SG), this._useCtrlForPanning = ZG, this._panningMouseButton = wG, "boolean" === typeof SG[0] && (SG.length > 1 && (this._useCtrlForPanning = SG[1]), SG.length > 2 && (this._panningMouseButton = SG[2])), this.inputs.attachElem … [truncated]
```

#### 98. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1592-L1593` → after: `L1592-L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1592-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1592-L1593) · [Before (L1592-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1592-L1593)

```diff
-             const ju = Xu.m.dO[0].T6(uu, Eu, Eu);
-             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), ju.multiplyInPlace(this.panningAxis), Xu.t.TransformNormalToRef(ju, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
+             const ZG = yG.j.mK[0].fGG(GG, bG, bG);
+             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), ZG.multiplyInPlace(this.panningAxis), yG.p.TransformNormalToRef(ZG, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
```

#### 99. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1595-L1596` → after: `L1595-L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1595-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1595-L1596) · [Before (L1595-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1595-L1596)

```diff
-                 Eu = Xu.t.CrossToRef(this._transformedDirection, uu, this._transformedDirection);
-               Xu.t.CrossToRef(uu, Eu, this._transformedDirection)
+                 bG = yG.p.CrossToRef(this._transformedDirection, GG, this._transformedDirection);
+               yG.p.CrossToRef(GG, bG, this._transformedDirection)
```

#### 100. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1600-L1601` → after: `L1600-L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1600-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1600-L1601) · [Before (L1600-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1600-L1601)

```diff
-                 this._transformedDirection.addInPlace(this.bR);
-                 Xu.t.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.bR.yJ(this._transformedDirection)
+                 this._transformedDirection.addInPlace(this.U1);
+                 yG.p.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.U1.oW(this._transformedDirection)
```

#### 101. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1604-L1605` → after: `L1604-L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1604-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1604-L1605) · [Before (L1604-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1604-L1605)

```diff
-                   const uu = Xu.m.Matrix[0];
-                   this.parent.getWorldMatrix().getRotationMatrixToRef(uu), uu.transposeToRef(uu), Xu.t.TransformCoordinatesToRef(this._transformedDirection, uu, this._transformedDirection)
+                   const GG = yG.j.Matrix[0];
+                   this.parent.getWorldMatrix().getRotationMatrixToRef(GG), GG.transposeToRef(GG), yG.p.TransformCoordinatesToRef(this._transformedDirection, GG, this._transformedDirection)
```

#### 102. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1607)

```diff
-                 this.bR.addInPlace(this._transformedDirection)
+                 this.U1.addInPlace(this._transformedDirection)
```

#### 103. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1626)

```diff
-               const Eu = this._scene.wO().getDeltaTime() / 1e3,
+               const bG = this._scene.CK().getDeltaTime() / 1e3,
```

#### 104. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1630-L1631` → after: `L1630-L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1630-L1631) · [Before (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1630-L1631)

```diff
-                 const Eu = Xu.m.dO[0].set(Su(this._goalTarget.x, this.bR.x), Su(this._goalTarget.y, this.bR.y), Su(this._goalTarget.z, this.bR.z));
-                 Xu.t.LerpToRef(this.target, Eu, ju, this.bR), 10 * Xu.t.Distance(this.target, Eu) / su < cu.c ? (this._goalTarget.set(NaN, NaN, NaN), this.target.yJ(Eu), this.setTarget(this.target, !1, !0, !0)) : uu = !0
+                 const bG = yG.j.mK[0].set(sG(this._goalTarget.x, this.U1.x), sG(this._goalTarget.y, this.U1.y), sG(this._goalTarget.z, this.U1.z));
+                 yG.p.LerpToRef(this.target, bG, ZG, this.U1), 10 * yG.p.Distance(this.target, bG) / wG < fG.d ? (this._goalTarget.set(NaN, NaN, NaN), this.target.oW(bG), this.setTarget(this.target, !1, !0, !0)) : GG = !0
```

#### 105. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1634-L1636` → after: `L1634-L1636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1634-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1634-L1636) · [Before (L1634-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1634-L1636)

```diff
-                 const Eu = Xu.i.RotationAlphaBetaGammaToRef(Su(this._goalAlpha, this.alpha), Su(this._goalBeta, this.beta), 0, Xu.m.Quaternion[0]),
-                   su = Xu.i.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, Xu.m.Quaternion[1]),
-                   Uu = Xu.i.SlerpToRef(su, Eu, ju, Xu.m.Quaternion[2]);
+                 const bG = yG.g.RotationAlphaBetaGammaToRef(sG(this._goalAlpha, this.alpha), sG(this._goalBeta, this.beta), 0, yG.j.Quaternion[0]),
+                   wG = yG.g.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, yG.j.Quaternion[1]),
+                   SG = yG.g.SlerpToRef(wG, bG, ZG, yG.j.Quaternion[2]);
```

#### 106. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1638-L1639` → after: `L1638-L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1638-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1638-L1639) · [Before (L1638-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1638-L1639)

```diff
-                 const Zu = Uu.toAlphaBetaGammaToRef(Xu.m.dO[0]);
-                 if (this.alpha = Zu.x, this.beta = Zu.y, Uu.isApprox(Eu, cu.c / 5)) {
+                 const LG = SG.toAlphaBetaGammaToRef(yG.j.mK[0]);
+                 if (this.alpha = LG.x, this.beta = LG.y, SG.isApprox(bG, fG.d / 5)) {
```

#### 107. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1641` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1641) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1641)

```diff
-                   const uu = Eu.toAlphaBetaGammaToRef(Xu.m.dO[0]);
+                   const GG = bG.toAlphaBetaGammaToRef(yG.j.mK[0]);
```

#### 108. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1645-L1647` → after: `L1645-L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1645-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1645-L1647) · [Before (L1645-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1645-L1647)

```diff
-               if (isNaN(this._goalRadius) || (this.radius += (su - this.radius) * ju, Math.abs(su / this.radius - 1) < cu.c ? (this._goalRadius = NaN, this.radius = su) : uu = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
-                 const Eu = Xu.m.Vector2[0].set(Su(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), Su(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
-                 Xu.p.LerpToRef(this.targetScreenOffset, Eu, ju, this.targetScreenOffset), Xu.p.Distance(this.targetScreenOffset, Eu) < cu.c ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.yJ(Eu)) : uu = !0
+               if (isNaN(this._goalRadius) || (this.radius += (wG - this.radius) * ZG, Math.abs(wG / this.radius - 1) < fG.d ? (this._goalRadius = NaN, this.radius = wG) : GG = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
+                 const bG = yG.j.Vector2[0].set(sG(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), sG(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
+                 yG.m.LerpToRef(this.targetScreenOffset, bG, ZG, this.targetScreenOffset), yG.m.Distance(this.targetScreenOffset, bG) < fG.d ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.oW(bG)) : GG = !0
```

#### 109. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1657` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1657) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1657)

```diff
-             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Xu.t.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
+             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || yG.p.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
```

#### 110. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1668` → after: `L1668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1668) · [Before (L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1668)

```diff
-             this._position.equals(uu) || (this._position.yJ(uu), this.rebuildAnglesAndRadius())
+             this._position.equals(GG) || (this._position.oW(GG), this.rebuildAnglesAndRadius())
```

#### 111. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1674` → after: `L1674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1674) · [Before (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1674)

```diff
-             if (su = this.overrideCloneAlphaBetaRadius ?? su, uu.computeWorldMatrix) Eu && uu.EW ? this._targetBoundingCenter = uu.EW().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, uu.computeWorldMatrix(), this._targetHost = uu, this.bR = this._getTargetPo … [truncated]
+             if (wG = this.overrideCloneAlphaBetaRadius ?? wG, GG.computeWorldMatrix) bG && GG.HA ? this._targetBoundingCenter = GG.HA().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, GG.computeWorldMatrix(), this._targetHost = GG, this.U1 = this._getTargetPo … [truncated]
```

#### 112. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1679` → after: `L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1679) · [Before (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1679)

```diff
-               this._targetHost = null, this.bR = Eu, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
+               this._targetHost = null, this.U1 = bG, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
```

#### 113. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1690-L1691` → after: `L1690-L1691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1690-L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1690-L1691) · [Before (L1690-L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1690-L1691)

```diff
-             if (this._computationVector.T6(this.radius * uu * su, this.radius * ju, this.radius * Eu * su), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || Xu.t.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVe … [truncated]
-               const uu = this.hV().collisionCoordinator;
+             if (this._computationVector.fGG(this.radius * GG * wG, this.radius * ZG, this.radius * bG * wG), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || yG.p.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationV … [truncated]
+               const GG = this.Dv().collisionCoordinator;
```

#### 114. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1694` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1694) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1694)

```diff
-               this._position.yJ(this._newPosition);
+               this._position.oW(this._newPosition);
```

#### 115. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1696` → after: `L1696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1696) · [Before (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1696)

```diff
-               this.allowUpsideDown && su < 0 && (uu = uu.nZ()), this._computeViewMatrix(this._position, Uu, uu), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
+               this.allowUpsideDown && wG < 0 && (GG = GG.By()), this._computeViewMatrix(this._position, SG, GG), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
```

#### 116. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1698` → after: `L1698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1698) · [Before (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1698)

```diff
-             return this._currentTarget.yJ(Uu), this._viewMatrix
+             return this._currentTarget.oW(SG), this._viewMatrix
```

#### 117. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1702-L1703` → after: `L1702-L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1702-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1702-L1703) · [Before (L1702-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1702-L1703)

```diff
-             uu = uu || this.hV().meshes;
-             const ju = fu.e.MinMax(uu);
+             GG = GG || this.Dv().meshes;
+             const ZG = YG.c.MinMax(GG);
```

#### 118. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1705-L1706` → after: `L1705-L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1705-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1705-L1706) · [Before (L1705-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1705-L1706)

```diff
-             if (su = Math.max(Math.min(su, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = su * this.zoomOnFactor, this.mode === gu.e.ORTHOGRAPHIC_CAMERA) {
-               const uu = this.hV().wO().getAspectRatio(this),
+             if (wG = Math.max(Math.min(wG, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = wG * this.zoomOnFactor, this.mode === rG.d.ORTHOGRAPHIC_CAMERA) {
+               const GG = this.Dv().CK().getAspectRatio(this),
```

#### 119. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1719-L1720` → after: `L1719-L1720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1719-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1719-L1720) · [Before (L1719-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1719-L1720)

```diff
-               const su = uu || this.hV().meshes;
-               Eu = fu.e.MinMax(su), ju = Xu.t.Distance(Eu.min, Eu.max)
+               const wG = GG || this.Dv().meshes;
+               bG = YG.c.MinMax(wG), ZG = yG.p.Distance(bG.min, bG.max)
```

#### 120. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1724` → after: `L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1724) · [Before (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1724)

```diff
-             this.bR = fu.e.Center(Eu), su || (this.maxZ = 2 * ju)
+             this.U1 = YG.c.Center(bG), wG || (this.maxZ = 2 * ZG)
```

#### 121. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1729-L1733` → after: `L1729-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1729-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1729-L1733) · [Before (L1729-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1729-L1733)

```diff
-               case gu.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case gu.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case gu.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case gu.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case gu.e.RIG_MODE_VR:
+               case rG.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case rG.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case rG.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case rG.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
+               case rG.d.RIG_MODE_VR:
```

#### 122. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1736)

```diff
-               case gu.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+               case rG.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
```

#### 123. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1739` → after: `L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1739) · [Before (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1739)

```diff
-             const Uu = new uu(Eu, this.alpha + su, this.beta, this.radius, this.bR, this.hV());
+             const SG = new GG(bG, this.alpha + wG, this.beta, this.radius, this.U1, this.Dv());
```

#### 124. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1746-L1750` → after: `L1746-L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1746-L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1746-L1750) · [Before (L1746-L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1746-L1750)

```diff
-               case gu.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case gu.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case gu.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case gu.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case gu.e.RIG_MODE_VR:
+               case rG.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case rG.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case rG.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case rG.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
+               case rG.d.RIG_MODE_VR:
```

#### 125. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1753` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1753) · [Before (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1753)

```diff
-               case gu.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+               case rG.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
```

#### 126. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1760-L1761` → after: `L1760-L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1760-L1761) · [Before (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1760-L1761)

```diff
-             const su = Xu.t.Distance(uu, Eu),
-               Uu = this.hV().wO().getAspectRatio(this),
+             const wG = yG.p.Distance(GG, bG),
+               SG = this.Dv().CK().getAspectRatio(this),
```

#### 127. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1777)

```diff
-           Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], qu = [(0, Uu.E)()], Cu = [(0, Uu.E)()], bu = [(0, Uu.A)("target")], Ou = [(0, Uu.u)("targetHost")], Yu = [(0, Uu.E)()], eu = [(0, Uu.E)()], pu = [(0, Uu.E)()], wu = [(0, Uu.E)()], Ju = [(0, Uu.E)()], du = [(0, Uu.E)()], au = [(0,  … [truncated]
+           bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], UG = [(0, SG.Q)()], VG = [(0, SG.Q)()], pG = [(0, SG.M)("target")], KG = [(0, SG.z)("targetHost")], hG = [(0, SG.Q)()], EG = [(0, SG.Q)()], XG = [(0, SG.Q)()], uG = [(0, SG.Q)()], iG = [(0, SG.Q)()], CG = [(0, SG.Q)()], WG = [(0,  … [truncated]
```

#### 128. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1787` → after: `L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1787) · [Before (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1787)

```diff
-           }, null, Hu), (0, su.e)(uu, null, eu, {
+           }, null, tG), (0, wG.k)(GG, null, EG, {
```

#### 129. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1797` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1797) · [Before (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1797)

```diff
-           }, null, Hu), (0, su.e)(uu, null, pu, {
+           }, null, tG), (0, wG.k)(GG, null, XG, {
```

#### 130. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1807` → after: `L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1807) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1807)

```diff
-           }, null, Hu), (0, su.e)(uu, null, iu, {
+           }, null, tG), (0, wG.k)(GG, null, MG, {
```

#### 131. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1817` → after: `L1817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1817) · [Before (L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1817)

```diff
-           }, null, Hu), (0, su.e)(uu, null, Iu, {
+           }, null, tG), (0, wG.k)(GG, null, qG, {
```

#### 132. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1827` → after: `L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1827) · [Before (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1827)

```diff
-           }, null, Hu), (0, su.e)(null, null, Eu, {
+           }, null, tG), (0, wG.k)(null, null, bG, {
```

#### 133. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1840` → after: `L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1840) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1840)

```diff
-           }, Au, nu), (0, su.e)(null, null, ju, {
+           }, DG, NG), (0, wG.k)(null, null, ZG, {
```

#### 134. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1853` → after: `L1853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1853) · [Before (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1853)

```diff
-           }, yu, zu), (0, su.e)(null, null, qu, {
+           }, OG, xG), (0, wG.k)(null, null, UG, {
```

#### 135. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1866` → after: `L1866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1866) · [Before (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1866)

```diff
-           }, Ru, uE), (0, su.e)(null, null, Cu, {
+           }, BG, Gb), (0, wG.k)(null, null, VG, {
```

#### 136. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1879` → after: `L1879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1879) · [Before (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1879)

```diff
-           }, EE, jE), (0, su.e)(null, null, bu, {
+           }, bb, Zb), (0, wG.k)(null, null, pG, {
```

#### 137. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1881` → after: `L1881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1881) · [Before (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1881)

```diff
-             name: "bR",
+             name: "U1",
```

#### 138. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1885-L1886` → after: `L1885-L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1885-L1886) · [Before (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1885-L1886)

```diff
-               has: uu => "bR" in uu,
-               get: uu => uu.bR,
+               has: GG => "U1" in GG,
+               get: GG => GG.U1,
```

#### 139. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1888` → after: `L1888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1888) · [Before (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1888)

```diff
-                 uu.bR = Eu
+                 GG.U1 = bG
```

#### 140. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1892` → after: `L1892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1892) · [Before (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1892)

```diff
-           }, sE, UE), (0, su.e)(null, null, Ou, {
+           }, wb, Sb), (0, wG.k)(null, null, KG, {
```

#### 141. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1905` → after: `L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1905) · [Before (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1905)

```diff
-           }, ZE, XE), (0, su.e)(null, null, wu, {
+           }, Lb, yb), (0, wG.k)(null, null, uG, {
```

#### 142. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1918` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1918) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1918)

```diff
-           }, lE, qE), (0, su.e)(null, null, Ju, {
+           }, kb, Ub), (0, wG.k)(null, null, iG, {
```

#### 143. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1931` → after: `L1931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1931) · [Before (L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1931)

```diff
-           }, fE, CE), (0, su.e)(null, null, du, {
+           }, Yb, Vb), (0, wG.k)(null, null, CG, {
```

#### 144. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1944` → after: `L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1944) · [Before (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1944)

```diff
-           }, bE, cE), (0, su.e)(null, null, au, {
+           }, pb, fb), (0, wG.k)(null, null, WG, {
```

#### 145. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1957` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1957) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1957)

```diff
-           }, NE, OE), (0, su.e)(null, null, Pu, {
+           }, Qb, Kb), (0, wG.k)(null, null, mG, {
```

#### 146. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1970` → after: `L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1970) · [Before (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1970)

```diff
-           }, YE, hE), (0, su.e)(null, null, ou, {
+           }, hb, db), (0, wG.k)(null, null, IG, {
```

#### 147. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1983` → after: `L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1983) · [Before (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1983)

```diff
-           }, DE, gE), (0, su.e)(null, null, ku, {
+           }, Jb, rb), (0, wG.k)(null, null, FG, {
```

#### 148. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1996` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L1996) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L1996)

```diff
-           }, ME, eE), (0, su.e)(null, null, mu, {
+           }, zb, Eb), (0, wG.k)(null, null, vG, {
```

#### 149. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2009` → after: `L2009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2009) · [Before (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2009)

```diff
-           }, GE, pE), (0, su.e)(null, null, vu, {
+           }, ob, Xb), (0, wG.k)(null, null, aG, {
```

#### 150. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2022` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2022) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2022)

```diff
-           }, wE, JE), (0, su.e)(null, null, Ku, {
+           }, ub, ib), (0, wG.k)(null, null, cG, {
```

#### 151. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2035` → after: `L2035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2035) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2035)

```diff
-           }, dE, aE), (0, su.e)(null, null, ru, {
+           }, Cb, Wb), (0, wG.k)(null, null, jG, {
```

#### 152. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2048` → after: `L2048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2048) · [Before (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2048)

```diff
-           }, PE, oE), (0, su.e)(null, null, Qu, {
+           }, mb, Ib), (0, wG.k)(null, null, PG, {
```

#### 153. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2061` → after: `L2061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2061) · [Before (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2061)

```diff
-           }, kE, mE), (0, su.e)(null, null, Fu, {
+           }, Fb, vb), (0, wG.k)(null, null, nG, {
```

#### 154. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2074` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2074) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2074)

```diff
-           }, vE, KE), (0, su.e)(null, null, Bu, {
+           }, ab, cb), (0, wG.k)(null, null, gG, {
```

#### 155. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2087` → after: `L2087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2087) · [Before (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2087)

```diff
-           }, VE, rE), (0, su.e)(null, null, Lu, {
+           }, lb, jb), (0, wG.k)(null, null, eG, {
```

#### 156. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2100` → after: `L2100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2100) · [Before (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2100)

```diff
-           }, QE, iE), (0, su.e)(null, null, tu, {
+           }, Pb, Mb), (0, wG.k)(null, null, RG, {
```

#### 157. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2113` → after: `L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2113) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2113)

```diff
-           }, WE, SE), (0, su.e)(null, null, xu, {
+           }, Ab, sb), (0, wG.k)(null, null, TG, {
```

#### 158. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2135` → after: `L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2135) · [Before (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2135)

```diff
-     Fu || (Fu = !0, qu.c.AddNodeConstructor("ArcRotateCamera", ((uu, Eu) => () => new Iu(uu, 0, 0, 1, Xu.t.Zero(), Eu))), (0, ru.f)("BABYLON.ArcRotateCamera", Iu))
+     nG || (nG = !0, UG.e.AddNodeConstructor("ArcRotateCamera", ((GG, bG) => () => new qG(GG, 0, 0, 1, yG.p.Zero(), bG))), (0, jG.i)("BABYLON.ArcRotateCamera", qG))
```

#### 159. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2137)

```diff
-   40503: (uu, Eu, ju) => {
+   40629: (GG, bG, ZG) => {
```

#### 160. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2139` → after: `L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2139) · [Before (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2139)

```diff
-       c: () => su.e
+       d: () => wG.e
```

#### 161. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2141` → after: `L2141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2141) · [Before (L2141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2141)

```diff
-     var su = ju(40506);
+     var wG = ZG(40631);
```

#### 162. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2144` → after: `L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2144) · [Before (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2144)

```diff
-   40506: (uu, Eu, ju) => {
+   40631: (GG, bG, ZG) => {
```

#### 163. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2149-L2155` → after: `L2149-L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2149-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2149-L2155) · [Before (L2149-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2149-L2155)

```diff
-     var su = ju(40255),
-       Uu = ju(40258),
-       Zu = ju(37494),
-       Xu = ju(37680),
-       lu = ju(40508),
-       qu = ju(40467),
-       fu = ju(37532);
+     var wG = ZG(40393),
+       SG = ZG(40398),
+       LG = ZG(37439),
+       yG = ZG(37621),
+       kG = ZG(40635),
+       UG = ZG(40599),
+       YG = ZG(37484);
```

#### 164. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2158` → after: `L2158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2158) · [Before (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2158)

```diff
-         let Eu, ju, qu = lu.e,
+         let bG, ZG, UG = kG.c,
```

#### 165. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2165` → after: `L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2165) · [Before (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2165)

```diff
-             super(uu, ju, Uu), this.groundColor = (0, su.g)(this, fu, new Xu.c(0, 0, 0)), this.direction = ((0, su.g)(this, Cu), (0, su.g)(this, bu, void 0)), (0, su.g)(this, cu), this.direction = Eu || Zu.t.Up()
+             super(GG, ZG, SG), this.groundColor = (0, wG.n)(this, YG, new yG.c(0, 0, 0)), this.direction = ((0, wG.n)(this, VG), (0, wG.n)(this, pG, void 0)), (0, wG.n)(this, fG), this.direction = bG || LG.p.Up()
```

#### 166. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2174` → after: `L2174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2174) · [Before (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2174)

```diff
-             return this.direction = Zu.t.Normalize(uu.subtract(Zu.t.Zero())), this.direction
+             return this.direction = LG.p.Normalize(GG.subtract(LG.p.Zero())), this.direction
```

#### 167. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2180` → after: `L2180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2180) · [Before (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2180)

```diff
-             const ju = Zu.t.Normalize(this.direction);
+             const ZG = LG.p.Normalize(this.direction);
```

#### 168. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2184` → after: `L2184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2184) · [Before (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2184)

```diff
-             const ju = Zu.t.Normalize(this.direction);
+             const ZG = LG.p.Normalize(this.direction);
```

#### 169. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2191` → after: `L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2191) · [Before (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2191)

```diff
-             return lu.e.LIGHTTYPEID_HEMISPHERICLIGHT
+             return kG.c.LIGHTTYPEID_HEMISPHERICLIGHT
```

#### 170. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2198)

```diff
-           Eu = [(0, Uu.j)()], ju = [(0, Uu.A)()], (0, su.e)(null, null, Eu, {
+           bG = [(0, SG.m)()], ZG = [(0, SG.M)()], (0, wG.k)(null, null, bG, {
```

#### 171. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2211)

```diff
-           }, fu, Cu), (0, su.e)(null, null, ju, {
+           }, YG, VG), (0, wG.k)(null, null, ZG, {
```

#### 172. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2235` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/264.js#L2235) · [Before (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/264.js#L2235)

```diff
-       bu || (bu = !0, qu.c.AddNodeConstructor("Light_Type_3", ((uu, Eu) => () => new Cu(uu, Zu.t.Zero(), Eu))), (0, fu.f)("BABYLON.HemisphericLight", Cu))
+       pG || (pG = !0, UG.e.AddNodeConstructor("Light_Type_3", ((GG, bG) => () => new VG(GG, LG.p.Zero(), bG))), (0, YG.i)("BABYLON.HemisphericLight", VG))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/265.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/265.js` (251 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89)

#### 1. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/265.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/265.js#L4)

```diff
-   40650: (uu, Eu, ju) => {
+   40767: (GG, bG, ZG) => {
```

#### 2. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/265.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/265.js#L6)

```diff
-       e: () => Uu
+       b: () => SG
```

#### 3. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/265.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/265.js#L8)

```diff
-     var su = ju(40264);
+     var wG = ZG(40402);
```

#### 4. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/265.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/265.js#L19)

```diff
-           const Eu = (0, su.b)(uu[Symbol.metadata]);
+           const bG = (0, wG.c)(GG[Symbol.metadata]);
```

#### 5. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/265.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/265.js#L32)

```diff
-           uu !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !uu && this.hV ? this._imageProcessingConfiguration = this.h … [truncated]
+           GG !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !GG && this.Dv ? this._imageProcessingConfiguration = this.D … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/265.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/265.js#L81)

```diff
-   40535: (uu, Eu, ju) => {
+   40658: (GG, bG, ZG) => {
```

#### 7. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/265.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/265.js#L84)

```diff
-       f: () => Uu
+       d: () => SG
```
