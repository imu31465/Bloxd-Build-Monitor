# Changed — Bundle Modifications Report (Part 066 / 161)

- **Updated at**: `2026-11-27T02:05 JST`
- **Part**: `66 / 161` (**403** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 065](part-065.md) · [Part 067 →](part-067.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/291.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/291.js` (255 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade)

#### 194. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1896` → after: `L1896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1896) · [Before (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1896)

```diff
-         VH(BH.lightSources[hH], hH, HH, LH, "boolean" === typeof AH ? AH : AH.SPECULARTERM, BH.receiveShadows)
+         nB(OB.lightSources[oB], oB, BB, GB, "boolean" === typeof YB ? YB : YB.SPECULARTERM, OB.receiveShadows)
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1947` → after: `L1947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1947) · [Before (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1947)

```diff
-         const LH = HH.Iu().getCaps().maxUniformBuffersPerShaderStage;
+         const GB = BB.Lp().getCaps().maxUniformBuffersPerShaderStage;
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1963-L1964` → after: `L1963-L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1963-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1963-L1964) · [Before (L1963-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1963-L1964)

```diff
-           SH || (SH = new Set, bH.set(HH, SH)), SH.has(rH) || (SH.add(rH), AH.e.Warn(`maxSimultaneousLights is ${BH} but this engine supports at most ${LH} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${rH} lights affecting this mes … [truncated]
-         }(HH.Iu(), tH, SH, Math.min(BH.lightSources.length, tH));
+           QB || (QB = new Set, fB.set(BB, QB)), QB.has(DB) || (QB.add(DB), YB.b.Warn(`maxSimultaneousLights is ${OB} but this engine supports at most ${GB} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${DB} lights affecting this mes … [truncated]
+         }(BB.Lp(), jB, QB, Math.min(OB.lightSources.length, jB));
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1972` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1972) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1972)

```diff
-       const XH = HH.Iu().getCaps();
+       const PB = BB.Lp().getCaps();
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1980` → after: `L1980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1980) · [Before (L1980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1980)

```diff
-       if (BH && tH.e.ReflectionTextureEnabled) {
+       if (OB && jB.d.ReflectionTextureEnabled) {
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L1982-L1983` → after: `L1982-L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR1982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L1982-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L1982-L1983) · [Before (L1982-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L1982-L1983)

```diff
-         LH._needNormals = !0, LH.REFLECTION = !0, LH.GAMMAREFLECTION = BH.gammaSpace, LH.RGBDREFLECTION = BH.isRGBD, LH.LODINREFLECTIONALPHA = BH.lodLevelInAlpha, LH.LINEARSPECULARREFLECTION = BH.linearSpecularLOD, LH.USEIRRADIANCEMAP = !1, LH.LODBASEDMICROSFURACE = HH.Iu().getCa … [truncated]
-         const hH = HH.Iu();
+         GB._needNormals = !0, GB.REFLECTION = !0, GB.GAMMAREFLECTION = OB.gammaSpace, GB.RGBDREFLECTION = OB.isRGBD, GB.LODINREFLECTIONALPHA = OB.lodLevelInAlpha, GB.LINEARSPECULARREFLECTION = OB.linearSpecularLOD, GB.USEIRRADIANCEMAP = !1, GB.LODBASEDMICROSFURACE = BB.Lp().getCa … [truncated]
+         const oB = BB.Lp();
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2019` → after: `L2019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2019) · [Before (L2019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2019)

```diff
-         case SH.e.FALLOFF_GLTF:
+         case QB.c.FALLOFF_GLTF:
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2022` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2022) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2022)

```diff
-         case SH.e.FALLOFF_PHYSICAL:
+         case QB.c.FALLOFF_PHYSICAL:
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2025` → after: `L2025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2025) · [Before (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2025)

```diff
-         case SH.e.FALLOFF_STANDARD:
+         case QB.c.FALLOFF_STANDARD:
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2035` → after: `L2035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2035) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2035)

```diff
-       LH.lightmapMode != SH.e.LIGHTMAP_DEFAULT ? (tH.lightmapMode = !0, rH["LIGHTMAPEXCLUDED" + AH] = !0, rH["LIGHTMAPNOSPECULAR" + AH] = LH.lightmapMode == SH.e.LIGHTMAP_SHADOWSONLY) : (rH["LIGHTMAPEXCLUDED" + AH] = !1, rH["LIGHTMAPNOSPECULAR" + AH] = !1)
+       GB.lightmapMode != QB.c.LIGHTMAP_DEFAULT ? (jB.lightmapMode = !0, DB["LIGHTMAPEXCLUDED" + YB] = !0, DB["LIGHTMAPNOSPECULAR" + YB] = GB.lightmapMode == QB.c.LIGHTMAP_SHADOWSONLY) : (DB["LIGHTMAPEXCLUDED" + YB] = !1, DB["LIGHTMAPNOSPECULAR" + YB] = !1)
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2052` → after: `L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2052) · [Before (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2052)

```diff
-       !1 !== SH && (zH = (0, hH.h)(LH, HH, AH)), AH.DEPTHPREPASS !== !BH.getColorWrite() && (AH.DEPTHPREPASS = !AH.DEPTHPREPASS, zH = !0), AH.INSTANCES !== rH && (AH.INSTANCES = rH, zH = !0), AH.THIN_INSTANCES !== tH && (AH.THIN_INSTANCES = tH, zH = !0), zH && AH.markAsUnprocesse … [truncated]
+       !1 !== QB && (yB = (0, oB.k)(GB, BB, YB)), YB.DEPTHPREPASS !== !OB.getColorWrite() && (YB.DEPTHPREPASS = !YB.DEPTHPREPASS, yB = !0), YB.INSTANCES !== DB && (YB.INSTANCES = DB, yB = !0), YB.THIN_INSTANCES !== jB && (YB.THIN_INSTANCES = jB, yB = !0), yB && YB.markAsUnprocesse … [truncated]
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2065` → after: `L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2065) · [Before (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2065)

```diff
-       for (let AH = 1; AH <= 6; ++AH) BH["UV" + AH] = !!BH._needUVs && HH.isVerticesDataPresent(`uv${1===AH?"":AH}`);
+       for (let YB = 1; YB <= 6; ++YB) OB["UV" + YB] = !!OB._needUVs && BB.isVerticesDataPresent(`uv${1===YB?"":YB}`);
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2070` → after: `L2070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2070) · [Before (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2070)

```diff
-       return HH.isVerticesDataPresent("instanceColor") && (HH.ESH || HH.hasThinInstances) && (BH.INSTANCESCOLOR = !0), rH && function(HH, BH) {
+       return BB.isVerticesDataPresent("instanceColor") && (BB.WQB || BB.hasThinInstances) && (OB.INSTANCESCOLOR = !0), DB && function(BB, OB) {
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2077` → after: `L2077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2077) · [Before (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2077)

```diff
-             const rH = HH.yN(),
+             const DB = BB.JF(),
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2087` → after: `L2087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2087) · [Before (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2087)

```diff
-               const LH = rH.Iu().getCaps().maxVertexUniformVectors;
+               const GB = DB.Lp().getCaps().maxVertexUniformVectors;
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2090` → after: `L2090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2090) · [Before (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2090)

```diff
-                   SH = hH ? NH : gH,
+                   QB = oB ? XB : rB,
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2092` → after: `L2092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2092) · [Before (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2092)

```diff
-                 (rH > tH || hH && 3 * rH > LH) && (jH.add(HH.skeleton), AH.e.Warn(`Skeleton "${HH.skeleton.name}": ${HH.skeleton.bones.length} bones stored as vertex uniforms use ${rH} of ~${tH} usable uniform vectors${hH?" (multiview)":""} on a device reporting ${LH}. This can e … [truncated]
+                 (DB > jB || oB && 3 * DB > GB) && (EB.add(BB.skeleton), YB.b.Warn(`Skeleton "${BB.skeleton.name}": ${BB.skeleton.bones.length} bones stored as vertex uniforms use ${DB} of ~${jB} usable uniform vectors${oB?" (multiview)":""} on a device reporting ${GB}. This can e … [truncated]
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2116` → after: `L2116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2116) · [Before (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2116)

```diff
-       BH.ORDER_INDEPENDENT_TRANSPARENCY = HH.useOrderIndependentTransparency && LH, BH.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !HH.Iu().getCaps().textureFloatLinearFiltering, AH === BH.ORDER_INDEPENDENT_TRANSPARENCY && rH === BH.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || BH.markAsU … [truncated]
+       OB.ORDER_INDEPENDENT_TRANSPARENCY = BB.useOrderIndependentTransparency && GB, OB.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !BB.Lp().getCaps().textureFloatLinearFiltering, YB === OB.ORDER_INDEPENDENT_TRANSPARENCY && DB === OB.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || OB.markAsU … [truncated]
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2219` → after: `L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2219) · [Before (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2219)

```diff
-   41634: (HH, BH, LH) => {
+   41346: (BB, OB, GB) => {
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2221` → after: `L2221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2221) · [Before (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2221)

```diff
-       b: () => SH
+       d: () => QB
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2223-L2225` → after: `L2223-L2225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2223-L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2223-L2225) · [Before (L2223-L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2223-L2225)

```diff
-     var AH = LH(37963),
-       rH = LH(41573);
-     class SH extends rH.c {
+     var YB = GB(37778),
+       DB = GB(41283);
+     class QB extends DB.b {
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2228` → after: `L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2228) · [Before (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2228)

```diff
-         super(HH, BH, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new AH.e, this._storeEffectOnSubMeshes = LH
+         super(BB, OB, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new YB.d, this._storeEffectOnSubMeshes = GB
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2234` → after: `L2234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2234) · [Before (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2234)

```diff
-         return !!HH && (!this._storeEffectOnSubMeshes || (!HH.jU || 0 === HH.jU.length || this.isReadyForSubMesh(HH, HH.jU[0], BH)))
+         return !!BB && (!this._storeEffectOnSubMeshes || (!BB.iW || 0 === BB.iW.length || this.isReadyForSubMesh(BB, BB.iW[0], OB)))
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2238` → after: `L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2238) · [Before (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2238)

```diff
-         return !(this.checkReadyOnEveryCall || !HH.effect || !BH || BH._renderId !== this.yN().getRenderId())
+         return !(this.checkReadyOnEveryCall || !BB.effect || !OB || OB._renderId !== this.JF().getRenderId())
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2247` → after: `L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2247) · [Before (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2247)

```diff
-         BH && this.bindForSubMesh(HH, BH, BH.jU[0])
+         OB && this.bindForSubMesh(BB, OB, OB.iW[0])
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2252` → after: `L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2252) · [Before (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2252)

```diff
-         super._afterBind(HH, BH, LH), this.yN()._cachedEffect = BH, LH ? LH._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
+         super._afterBind(BB, OB, GB), this.JF()._cachedEffect = OB, GB ? GB._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2263` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2263) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2263)

```diff
-   41653: (HH, BH, LH) => {
+   41368: (BB, OB, GB) => {
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2265-L2266` → after: `L2265-L2266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2265-L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2265-L2266) · [Before (L2265-L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2265-L2266)

```diff
-       d: () => SH,
-       f: () => rH
+       c: () => QB,
+       e: () => DB
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2302)

```diff
-         const AH = `vp_${LH}_info`;
+         const YB = `vp_${GB}_info`;
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2307` → after: `L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2307) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2307)

```diff
-   41602: (HH, BH, LH) => {
+   41315: (BB, OB, GB) => {
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2310` → after: `L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2310) · [Before (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2310)

```diff
-       f: () => zH
+       g: () => yB
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2312-L2314` → after: `L2312-L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2312-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2312-L2314) · [Before (L2312-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2312-L2314)

```diff
-     var AH = LH(41290),
-       rH = LH(37963),
-       SH = LH(41297);
+     var YB = GB(40998),
+       DB = GB(37778),
+       QB = GB(41004);
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2338` → after: `L2338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2338) · [Before (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2338)

```diff
-         BH = [SH.g.filter((function() {
+         OB = [QB.j.filter((function() {
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2340` → after: `L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2340) · [Before (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2340)

```diff
-         }))], LH = [SH.g.filter((function() {
+         }))], GB = [QB.j.filter((function() {
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2342` → after: `L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2342) · [Before (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2342)

```diff
-         }))], (0, AH.g)(HH, null, BH, {
+         }))], (0, YB.h)(BB, null, OB, {
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2352` → after: `L2352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2352) · [Before (L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2352)

```diff
-         }, null, rH), (0, AH.g)(HH, null, LH, {
+         }, null, DB), (0, YB.h)(BB, null, GB, {
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2367` → after: `L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2367) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2367)

```diff
-         }), (0, AH.k)(HH, rH)
+         }), (0, YB.j)(BB, DB)
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2373-L2374` → after: `L2373-L2374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2373-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2373-L2374) · [Before (L2373-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2373-L2374)

```diff
-       const tH = new rH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         zH = new rH.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+       const jB = new DB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         yB = new DB.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2384-L2385` → after: `L2384-L2385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2384-L2385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2384-L2385) · [Before (L2384-L2385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2384-L2385)

```diff
-       const tH = new rH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         zH = new rH.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+       const jB = new DB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         yB = new DB.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2392` → after: `L2392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2392) · [Before (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2392)

```diff
-   41578: (HH, BH, LH) => {
+   41287: (BB, OB, GB) => {
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2394` → after: `L2394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2394) · [Before (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2394)

```diff
-       d: () => EH
+       c: () => MB
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2396-L2401` → after: `L2396-L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2396-L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2396-L2401) · [Before (L2396-L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2396-L2401)

```diff
-     var AH, rH = LH(41427),
-       SH = LH(41585),
-       hH = LH(41588),
-       tH = LH(41602),
-       zH = LH(41609),
-       CH = LH(41169);
+     var YB, DB = GB(41150),
+       QB = GB(41294),
+       oB = GB(41300),
+       jB = GB(41315),
+       yB = GB(41323),
+       JB = GB(40890);
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2414` → after: `L2414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2414) · [Before (L2414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2414)

```diff
-         return !LH && BH && (this._drawWrappers[HH] = LH = new zH.e(this._mesh.yN().Iu())), LH
+         return !GB && OB && (this._drawWrappers[BB] = GB = new yB.d(this._mesh.JF().Lp())), GB
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2453` → after: `L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2453) · [Before (L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2453)

```diff
-         this.materialIndex = HH, this.verticesStart = BH, this.verticesCount = LH, this.indexStart = AH, this.indexCount = rH, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastCollide … [truncated]
+         this.materialIndex = BB, this.verticesStart = OB, this.verticesCount = GB, this.indexStart = YB, this.indexCount = DB, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastCollide … [truncated]
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2459` → after: `L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2459) · [Before (L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2459)

```diff
-         return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.jF() : this._boundingInfo
+         return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.Gw() : this._boundingInfo
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2480` → after: `L2480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2480) · [Before (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2480)

```diff
-         if (!BH) return HH && this._mesh.yN()._hasDefaultMaterial ? this._mesh.yN().defaultMaterial : null;
+         if (!OB) return BB && this._mesh.JF()._hasDefaultMaterial ? this._mesh.JF().defaultMaterial : null;
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2493-L2494` → after: `L2493-L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2493-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2493-L2494) · [Before (L2493-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2493-L2494)

```diff
-         if (HH || (HH = this._renderingMesh.getVerticesData(rH.i.PositionKind)), !HH) return this._boundingInfo = this._mesh.jF(), this;
-         const BH = this._renderingMesh.vrH();
+         if (BB || (BB = this._renderingMesh.getVerticesData(DB.h.PositionKind)), !BB) return this._boundingInfo = this._mesh.Gw(), this;
+         const OB = this._renderingMesh.KDB();
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2497` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2497) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2497)

```diff
-           const HH = this._renderingMesh.jF();
+           const BB = this._renderingMesh.Gw();
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2503` → after: `L2503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2503) · [Before (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2503)

```diff
-         return this._boundingInfo ? this._boundingInfo.reConstruct(LH.minimum, LH.maximum) : this._boundingInfo = new hH.d(LH.minimum, LH.maximum), this
+         return this._boundingInfo ? this._boundingInfo.reConstruct(GB.minimum, GB.maximum) : this._boundingInfo = new oB.e(GB.minimum, GB.maximum), this
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2506` → after: `L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2506) · [Before (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2506)

```diff
-         return this.jF()._checkCollision(HH)
+         return this.Gw()._checkCollision(BB)
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2509-L2510` → after: `L2509-L2510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2509-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2509-L2510) · [Before (L2509-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2509-L2510)

```diff
-         let BH = this.jF();
-         return BH || (this.refreshBoundingInfo(), BH = this.jF()), BH && BH.update(HH), this
+         let OB = this.Gw();
+         return OB || (this.refreshBoundingInfo(), OB = this.Gw()), OB && OB.update(BB), this
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2513` → after: `L2513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2513) · [Before (L2513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2513)

```diff
-         const BH = this.jF();
+         const OB = this.Gw();
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2517` → after: `L2517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2517) · [Before (L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2517)

```diff
-         const BH = this.jF();
+         const OB = this.Gw();
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2537` → after: `L2537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2537) · [Before (L2537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2537)

```diff
-         const BH = this.jF();
+         const OB = this.Gw();
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2541` → after: `L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2541) · [Before (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2541)

```diff
-         const SH = this.eu();
+         const QB = this.cp();
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2562` → after: `L2562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2562) · [Before (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2562)

```diff
-           if (!(EH < 0) && ((rH || !hH || EH < hH.distance) && (hH = new SH.b(null, null, EH), hH.faceId = tH / 2, rH))) break
+           if (!(MB < 0) && ((DB || !oB || MB < oB.distance) && (oB = new QB.c(null, null, MB), oB.faceId = jB / 2, DB))) break
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2572` → after: `L2572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2572) · [Before (L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2572)

```diff
-           if (!(CH < 0) && ((rH || !hH || CH < hH.distance) && (hH = new SH.b(null, null, CH), hH.faceId = tH / 2, rH))) break
+           if (!(JB < 0) && ((DB || !oB || JB < oB.distance) && (oB = new QB.c(null, null, JB), oB.faceId = jB / 2, DB))) break
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2622` → after: `L2622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2622) · [Before (L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2622)

```diff
-           const HH = this.jF();
+           const BB = this.Gw();
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2624` → after: `L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2624) · [Before (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2624)

```diff
-           LH._boundingInfo = new hH.d(HH.minimum, HH.maximum)
+           GB._boundingInfo = new oB.e(BB.minimum, BB.maximum)
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2630-L2632` → after: `L2630-L2632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2630-L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2630-L2632) · [Before (L2630-L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2630-L2632)

```diff
-         this._linesIndexBuffer && (this._mesh.yN().Iu()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
-         const BH = this._mesh.jU.indexOf(this);
-         this._mesh.jU.splice(BH, 1), this.resetDrawCache(void 0, HH)
+         this._linesIndexBuffer && (this._mesh.JF().Lp()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
+         const OB = this._mesh.iW.indexOf(this);
+         this._mesh.iW.splice(OB, 1), this.resetDrawCache(void 0, BB)
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2641` → after: `L2641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2641) · [Before (L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2641)

```diff
-         const zH = (rH || AH).vrH();
+         const yB = (DB || YB).KDB();
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L2648` → after: `L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR2648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/291.js#L2648) · [Before (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/291.js#L2648)

```diff
-     }(AH = EH.prototype).projectToRef ?? (AH.projectToRef = (0, CH.f)("SubMesh", "projectToRef"))
+     }(YB = MB.prototype).projectToRef ?? (YB.projectToRef = (0, JB.g)("SubMesh", "projectToRef"))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/292.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec)

- **File**: `bundles/preprod.bloxd.io/chunks/js/292.js` (45 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93)

#### 1. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L4)

```diff
-   45065: (HH, BH, LH) => {
+   44726: (BB, OB, GB) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L6)

```diff
-       c: () => AH
+       b: () => YB
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L11)

```diff
-   45047: (HH, BH, LH) => {
+   44702: (BB, OB, GB) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L15-L19` → after: `L15-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L15-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L15-L19) · [Before (L15-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L15-L19)

```diff
-     var AH = LH(41290),
-       rH = LH(41297),
-       SH = LH(37963),
-       hH = LH(41535),
-       tH = LH(41504);
+     var YB = GB(40998),
+       DB = GB(41004),
+       QB = GB(37778),
+       oB = GB(41250),
+       jB = GB(41226);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L22)

```diff
-       let BH, LH, zH, CH, EH = hH.b,
+       let OB, GB, yB, JB, MB = oB.d,
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L26)

```diff
-           super(...arguments), this._position = (0, AH.k)(this, XH), this._needProjectionMatrixCompute = !0, this._viewMatrix = SH.e.Identity(), this._projectionMatrix = SH.e.Identity()
+           super(...arguments), this._position = (0, YB.j)(this, PB), this._needProjectionMatrixCompute = !0, this._viewMatrix = QB.d.Identity(), this._projectionMatrix = QB.d.Identity()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L59)

```diff
-           return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = SH.o.Zero()), SH.o.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDire … [truncated]
+           return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = QB.r.Zero()), QB.r.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDire … [truncated]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L71)

```diff
-           return this.direction = SH.o.Normalize(HH.subtract(this.position)), this.direction
+           return this.direction = QB.r.Normalize(BB.subtract(this.position)), this.direction
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L75-L77` → after: `L75-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L75-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L75-L77) · [Before (L75-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L75-L77)

```diff
-           const HH = SH.o.Cross(this.direction, tH.d.Y),
-             BH = SH.o.Cross(HH, this.direction);
-           return SH.o.RotationFromAxis(HH, BH, this.direction)
+           const BB = QB.r.Cross(this.direction, jB.c.Y),
+             OB = QB.r.Cross(BB, this.direction);
+           return QB.r.RotationFromAxis(BB, OB, this.direction)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L89)

```diff
-           super._initCache(), this._cache.position = SH.o.Zero()
+           super._initCache(), this._cache.position = QB.r.Zero()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L95)

```diff
-           return !HH && this.isSynchronized() ? (this._currentRenderId = this.yN().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.Tm(this.position), this._worldMatrix || (this._worldMatrix = SH.e.Identity()), SH.e.TranslationToRef(this.position.x,  … [truncated]
+           return !BB && this.isSynchronized() ? (this._currentRenderId = this.JF().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.IU(this.position), this._worldMatrix || (this._worldMatrix = QB.d.Identity()), QB.d.TranslationToRef(this.position.x,  … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L110)

```diff
-           const BH = SH.l.lu[0];
+           const OB = QB.k.Xp[0];
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L112-L114` → after: `L112-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L112-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L112-L114) · [Before (L112-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L112-L114)

```diff
-           this.computeTransformedInformation() && (LH = this.transformedPosition), SH.o.NormalizeToRef(this.getShadowDirection(HH), BH), 1 === Math.abs(SH.o.Dot(BH, SH.o.Up())) && (BH.z = 1e-13);
-           const AH = SH.l.lu[1];
-           return LH.addToRef(BH, AH), SH.e.LookAtLHToRef(LH, AH, SH.o.Up(), this._viewMatrix), this._viewMatrix
+           this.computeTransformedInformation() && (GB = this.transformedPosition), QB.r.NormalizeToRef(this.getShadowDirection(BB), OB), 1 === Math.abs(QB.r.Dot(OB, QB.r.Up())) && (OB.z = 1e-13);
+           const YB = QB.k.Xp[1];
+           return GB.addToRef(OB, YB), QB.d.LookAtLHToRef(GB, YB, QB.r.Up(), this._viewMatrix), this._viewMatrix
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L121)

```diff
-         BH = [(0, rH.F)()], LH = [(0, rH.F)()], zH = [(0, rH.H)()], CH = [(0, rH.H)()], (0, AH.g)(HH, null, BH, {
+         OB = [(0, DB.H)()], GB = [(0, DB.H)()], yB = [(0, DB.L)()], JB = [(0, DB.L)()], (0, YB.h)(BB, null, OB, {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L131` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L131) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L131)

```diff
-         }, null, XH), (0, AH.g)(HH, null, LH, {
+         }, null, PB), (0, YB.h)(BB, null, GB, {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L141)

```diff
-         }, null, XH), (0, AH.g)(HH, null, zH, {
+         }, null, PB), (0, YB.h)(BB, null, yB, {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L151)

```diff
-         }, null, XH), (0, AH.g)(HH, null, CH, {
+         }, null, PB), (0, YB.h)(BB, null, JB, {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L170)

```diff
-   45062: (HH, BH, LH) => {
+   44718: (BB, OB, GB) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L172)

```diff
-       b: () => rH
+       d: () => DB
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L174-L175` → after: `L174-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L174-L175) · [Before (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L174-L175)

```diff
-     var AH = LH(41777);
-     class rH extends AH.g {
+     var YB = GB(41470);
+     class DB extends YB.e {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L185)

```diff
-         super(null, SH, !hH, tH, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, EH), this.format = rH, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== CH || (zH = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== CH || (zH = … [truncated]
+         super(null, QB, !oB, jB, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, MB), this.format = DB, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== JB || (yB = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== JB || (yB = … [truncated]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L195` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L195) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L195)

```diff
-         const HH = new rH(null, this.getSize().width, this.getSize().height, this.format, this.yN(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
+         const BB = new DB(null, this.getSize().width, this.getSize().height, this.format, this.JF(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L222)

```diff
-           zH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : AH.g.TRILINEAR_SAMPLINGMODE;
+           yB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : YB.e.TRILINEAR_SAMPLINGMODE;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L228)

```diff
-           zH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : AH.g.TRILINEAR_SAMPLINGMODE;
+           yB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : YB.e.TRILINEAR_SAMPLINGMODE;
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L233` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L233) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L233)

```diff
-   45102: (HH, BH, LH) => {
+   44751: (BB, OB, GB) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L235)

```diff
-       e: () => AH.c
+       b: () => YB.c
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L237-L238` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L237-L238) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L237-L238)

```diff
-     var AH = LH(41730);
-     (0, AH.d)()
+     var YB = GB(41442);
+     (0, YB.g)()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L240` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L240) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L240)

```diff
-   45055: (HH, BH, LH) => {
+   44709: (BB, OB, GB) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L242)

```diff
-       e: () => AH.e
+       d: () => YB.b
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L244-L245` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L244-L245) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L244-L245)

```diff
-     var AH = LH(41754);
-     (0, AH.h)()
+     var YB = GB(41457);
+     (0, YB.c)()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L247)

```diff
-   41754: (HH, BH, LH) => {
+   41457: (BB, OB, GB) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L249-L250` → after: `L249-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L249-L250) · [Before (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L249-L250)

```diff
-       e: () => GH,
-       h: () => QH
+       b: () => zB,
+       c: () => qB
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L252-L258` → after: `L252-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L252-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L252-L258) · [Before (L252-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L252-L258)

```diff
-     var AH, rH, SH = LH(38074),
-       hH = LH(41427),
-       tH = LH(41693),
-       zH = LH(41762),
-       CH = LH(41573),
-       EH = LH(41769),
-       XH = LH(41169);
+     var YB, DB, QB = GB(37894),
+       oB = GB(41150),
+       jB = GB(41411),
+       yB = GB(41462),
+       JB = GB(41283),
+       MB = GB(41468),
+       PB = GB(40890);
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L270` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L270) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L270)

```diff
-           attributes: [hH.i.PositionKind],
+           attributes: [oB.h.PositionKind],
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L277)

```diff
-         if (this.useVertexAlpha ? zH.defines.push("#define VERTEXALPHA") : zH.needAlphaBlending = !1, this.useVertexColor ? (zH.defines.push("#define VERTEXCOLOR"), zH.attributes.push(hH.i.ColorKind)) : (zH.uniforms.push("color"), this._color4 = new SH.g), tH) this.material = tH;
+         if (this.useVertexAlpha ? yB.defines.push("#define VERTEXALPHA") : yB.needAlphaBlending = !1, this.useVertexColor ? (yB.defines.push("#define VERTEXCOLOR"), yB.attributes.push(oB.h.ColorKind)) : (yB.uniforms.push("color"), this._color4 = new QB.g), jB) this.material = jB;
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L279-L280` → after: `L279-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L279-L280) · [Before (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L279-L280)

```diff
-           this.yN().Iu().isWebGPU && !GH.ForceGLSL && (this._shaderLanguage = 1), zH.shaderLanguage = this._shaderLanguage, zH.extraInitializationsAsync = async () => {
-             1 === this._shaderLanguage ? await Promise.all([LH.e(653).then((() => LH(45996))), LH.e(659).then((() => LH(46001)))]) : await Promise.all([LH.e(635).then((() => LH(46010))), LH.e(641).then((() => LH(46015)))])
+           this.JF().Lp().isWebGPU && !zB.ForceGLSL && (this._shaderLanguage = 1), yB.shaderLanguage = this._shaderLanguage, yB.extraInitializationsAsync = async () => {
+             1 === this._shaderLanguage ? await Promise.all([GB.e(653).then((() => GB(45702))), GB.e(659).then((() => GB(45705)))]) : await Promise.all([GB.e(635).then((() => GB(45713))), GB.e(641).then((() => GB(45721)))])
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L282)

```diff
-           const HH = new EH.r("colorShader", this.yN(), "color", zH, !1);
+           const BB = new MB.k("colorShader", this.JF(), "color", yB, !1);
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L299)

```diff
-         this._setMaterial(HH), this.material && (this.material.fillMode = CH.c.LineListDrawMode, this.material.disableLighting = !0)
+         this._setMaterial(BB), this.material && (this.material.fillMode = JB.b.LineListDrawMode, this.material.disableLighting = !0)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L320-L321` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L320-L321) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L320-L321)

```diff
-         const AH = this.yN().Iu();
-         return this._unIndexed ? AH.drawArraysType(CH.c.LineListDrawMode, HH.verticesStart, HH.verticesCount, LH) : AH.drawElementsType(CH.c.LineListDrawMode, HH.indexStart, HH.indexCount, LH), this
+         const YB = this.JF().Lp();
+         return this._unIndexed ? YB.drawArraysType(JB.b.LineListDrawMode, BB.verticesStart, BB.verticesCount, GB) : YB.drawElementsType(JB.b.LineListDrawMode, BB.indexStart, BB.indexCount, GB), this
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L332` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L332) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L332)

```diff
-           return LH.source = this, new GH(HH, this.yN(), LH.parent, LH.source, LH.doNotCloneChildren)
+           return GB.source = this, new zB(BB, this.JF(), GB.parent, GB.source, GB.doNotCloneChildren)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L334)

```diff
-         return new GH(HH, this.yN(), BH, this, LH)
+         return new zB(BB, this.JF(), OB, this, GB)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L338-L340` → after: `L338-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L338-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L338-L340) · [Before (L338-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L338-L340)

```diff
-         if (this.kF) {
-           BH.kF = {};
-           for (const HH in this.kF) BH.kF[HH] = this.kF[HH]
+         if (this.yX) {
+           OB.yX = {};
+           for (const BB in this.yX) OB.yX[BB] = this.yX[BB]
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L345)

```diff
-         super.serialize(HH), HH.color = this.color.xrH(), HH.alpha = this.alpha
+         super.serialize(BB), BB.color = this.color.dDB(), BB.alpha = this.alpha
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L353` → after: `L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L353) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L353)

```diff
-     class YH extends zH.c {
+     class lB extends yB.b {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/292.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/292.js#L365)

```diff
-     }(AH = GH.prototype).enableEdgesRendering ?? (AH.enableEdgesRendering = (0, XH.f)("LinesMesh", "enableEdgesRendering")), (rH = YH.prototype).enableEdgesRendering ?? (rH.enableEdgesRendering = (0, XH.f)("InstancedLinesMesh", "enableEdgesRendering"))
+     }(YB = zB.prototype).enableEdgesRendering ?? (YB.enableEdgesRendering = (0, PB.g)("LinesMesh", "enableEdgesRendering")), (DB = lB.prototype).enableEdgesRendering ?? (DB.enableEdgesRendering = (0, PB.g)("InstancedLinesMesh", "enableEdgesRendering"))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/293.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec)

- **File**: `bundles/preprod.bloxd.io/chunks/js/293.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22)

#### 1. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L4)

```diff
-   41769: (HH, BH, LH) => {
+   41468: (BB, OB, GB) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L6)

```diff
-       e: () => VH,
+       b: () => nB,
+       c: () => VB,
+       d: () => WB,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L9-L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L9-L11)

```diff
-       n: () => PH,
-       q: () => xH,
-       r: () => MH
+       k: () => NB
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L13-L25` → after: `L13-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L13-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L13-L25) · [Before (L13-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L13-L25)

```diff
-     var AH = LH(41319),
-       rH = LH(41383),
-       SH = LH(37963),
-       hH = LH(41427),
-       tH = LH(41777),
-       zH = LH(41636),
-       CH = LH(41339),
-       EH = LH(41634),
-       XH = LH(37989),
-       GH = LH(41623),
-       YH = LH(41618),
-       uH = LH(41653),
-       QH = LH(38012);
+     var YB = GB(41022),
+       DB = GB(41091),
+       QB = GB(37778),
+       oB = GB(41150),
+       jB = GB(41470),
+       yB = GB(41354),
+       JB = GB(41041),
+       MB = GB(41346),
+       PB = GB(37796),
+       zB = GB(41333),
+       lB = GB(41325),
+       pB = GB(41368),
+       qB = GB(37823);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L30)

```diff
-     class MH extends EH.b {
+     class NB extends MB.d {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L33)

```diff
-         super(HH, BH, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this. … [truncated]
+         super(BB, OB, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this. … [truncated]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L175-L176` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L175-L176) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L175-L176)

```diff
-         const SH = this.yN(),
-           tH = SH.Iu(),
+         const QB = this.JF(),
+           jB = QB.Lp(),
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L186` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L186) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L186)

```diff
-           const HH = 0 === this._options.defines[rH].indexOf("#define") ? this._options.defines[rH] : `#define ${this._options.defines[rH]}`;
+           const BB = 0 === this._options.defines[DB].indexOf("#define") ? this._options.defines[DB] : `#define ${this._options.defines[DB]}`;
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L190-L191` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L190-L191) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L190-L191)

```diff
-         if (HH && HH.isVerticesDataPresent(hH.i.ColorKind) && (-1 === EH.indexOf(hH.i.ColorKind) && EH.push(hH.i.ColorKind), CH.push("#define VERTEXCOLOR")), BH && (CH.push("#define INSTANCES"), (0, YH.kb)(EH, this._materialHelperNeedsPreviousMatrices), HH?.hasThinInstances && (C … [truncated]
-           EH.push(hH.i.MatricesIndicesKind), EH.push(hH.i.MatricesWeightsKind), HH.numBoneInfluencers > 4 && (EH.push(hH.i.MatricesIndicesExtraKind), EH.push(hH.i.MatricesWeightsExtraKind));
+         if (BB && BB.isVerticesDataPresent(oB.h.ColorKind) && (-1 === MB.indexOf(oB.h.ColorKind) && MB.push(oB.h.ColorKind), JB.push("#define VERTEXCOLOR")), OB && (JB.push("#define INSTANCES"), (0, lB.rb)(MB, this._materialHelperNeedsPreviousMatrices), BB?.hasThinInstances && (J … [truncated]
+           MB.push(oB.h.MatricesIndicesKind), MB.push(oB.h.MatricesWeightsKind), BB.numBoneInfluencers > 4 && (MB.push(oB.h.MatricesIndicesExtraKind), MB.push(oB.h.MatricesWeightsExtraKind));
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L193)

```diff
-           CH.push("#define NUM_BONE_INFLUENCERS " + HH.numBoneInfluencers), XH = new zH.b, XH.addCPUSkinningFallback(0, HH), BH.isUsingTextureForMatrices ? (CH.push("#define BONETEXTURE"), -1 === MH.indexOf("boneTextureInfo") && MH.push("boneTextureInfo"), -1 === this._options.sa … [truncated]
+           JB.push("#define NUM_BONE_INFLUENCERS " + BB.numBoneInfluencers), PB = new yB.c, PB.addCPUSkinningFallback(0, BB), OB.isUsingTextureForMatrices ? (JB.push("#define BONETEXTURE"), -1 === NB.indexOf("boneTextureInfo") && NB.push("boneTextureInfo"), -1 === this._options.sa … [truncated]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L203)

```diff
-           PH = (0, YH.H)(TH, CH, EH, HH, !0, rH, AH, BH, LH, SH), TH.isUsingTextureForTargets && (-1 === MH.indexOf("morphTargetTextureIndices") && MH.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTar … [truncated]
+           AB = (0, lB.V)(VB, JB, MB, BB, !0, DB, YB, OB, GB, QB), VB.isUsingTextureForTargets && (-1 === NB.indexOf("morphTargetTextureIndices") && NB.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTar … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L213)

```diff
-         HH && this.needAlphaTestingForMesh(HH) && CH.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, GH.b)(MH), (0, GH.i)(this, SH, CH)), SH.fogEnabled && HH?.applyFog && SH.fogMode !== rH.d.FOGMODE_NONE && (CH.push("#define FOG"), -1 === MH.indexOf("view") & … [truncated]
+         BB && this.needAlphaTestingForMesh(BB) && JB.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, zB.e)(NB), (0, zB.o)(this, QB, JB)), QB.fogEnabled && BB?.applyFog && QB.fogMode !== DB.e.FOGMODE_NONE && (JB.push("#define FOG"), -1 === NB.indexOf("view") & … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L217-L218` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L217-L218) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L217-L218)

```diff
-           HH && (this._vertexPullingMetadata = (0, uH.f)(HH), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((HH, BH) => {
-             MH.push(`vp_${BH}_info`)
+           BB && (this._vertexPullingMetadata = (0, pB.e)(BB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, OB) => {
+             NB.push(`vp_${OB}_info`)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L243` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L243) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L243)

```diff
-         }, tH), AH ? LH.setEffect(mH, kH, this._materialContext) : VH && VH.setEffect(mH, kH), this._onEffectCreatedObservable && (WH.effect = mH, WH.subMesh = LH ?? HH?.jU[0] ?? null, this._onEffectCreatedObservable.notifyObservers(WH))), VH._wasPreviouslyUsingInstances = !!BH,  … [truncated]
+         }, jB), YB ? GB.setEffect(dB, kB, this._materialContext) : nB && nB.setEffect(dB, kB), this._onEffectCreatedObservable && (ZB.effect = dB, ZB.subMesh = GB ?? BB?.iW[0] ?? null, this._onEffectCreatedObservable.notifyObservers(ZB))), nB._wasPreviouslyUsingInstances = !!OB,  … [truncated]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L249` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L249) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L249)

```diff
-         const rH = this.yN(); - 1 !== AH.indexOf("worldView") && (HH.multiplyToRef(rH.getViewMatrix(), this._cachedWorldViewMatrix), LH.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== AH.indexOf("worldViewProjection") && (HH.multiplyToRef(rH.getTransformMatrix(), thi … [truncated]
+         const DB = this.JF(); - 1 !== YB.indexOf("worldView") && (BB.multiplyToRef(DB.getViewMatrix(), this._cachedWorldViewMatrix), GB.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== YB.indexOf("worldViewProjection") && (BB.multiplyToRef(DB.getTransformMatrix(), thi … [truncated]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L258)

```diff
-         const hH = this.yN();
+         const oB = this.JF();
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L262)

```diff
-         if (SH && tH && tH.length > 0 && hH.Iu().supportsUniformBuffers)
+         if (QB && jB && jB.length > 0 && oB.Lp().supportsUniformBuffers)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L269)

```diff
-                 (0, YH.t)(SH, hH.getSceneUniformBuffer()), hH.finalizeSceneUbo(), zH = !0
+                 (0, lB.E)(QB, oB.getSceneUniformBuffer()), oB.finalizeSceneUbo(), yB = !0
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L275)

```diff
-           for (HH in zH || -1 === this._options.uniforms.indexOf("view") || SH.setMatrix("view", hH.getViewMatrix()), zH || -1 === this._options.uniforms.indexOf("projection") || SH.setMatrix("projection", hH.getProjectionMatrix()), zH || -1 === this._options.uniforms.indexOf("vi … [truncated]
+           for (BB in yB || -1 === this._options.uniforms.indexOf("view") || QB.setMatrix("view", oB.getViewMatrix()), yB || -1 === this._options.uniforms.indexOf("projection") || QB.setMatrix("projection", oB.getProjectionMatrix()), yB || -1 === this._options.uniforms.indexOf("vi … [truncated]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L305` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L305) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L305)

```diff
-           const LH = hH.Iu(),
+           const GB = oB.Lp(),
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L317)

```diff
-           (0, YH.r)(BH, SH), BH.morphTargetManager && BH.morphTargetManager.isUsingTextureForTargets && BH.morphTargetManager._bind(SH);
+           (0, lB.A)(OB, QB), OB.morphTargetManager && OB.morphTargetManager.isUsingTextureForTargets && OB.morphTargetManager._bind(QB);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L350)

```diff
-         const BH = AH.c.Clone((() => new MH(HH, this.yN(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
+         const OB = YB.d.Clone((() => new NB(BB, this.JF(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L404` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L404) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L404)

```diff
-         const HH = AH.c.Serialize(this);
+         const BB = YB.d.Serialize(this);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L438-L439` → after: `L438-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L438-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L438-L439) · [Before (L438-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L438-L439)

```diff
-         for (BH in HH.quaternions = {}, this._quaternions) HH.quaternions[BH] = this._quaternions[BH].xrH();
-         for (BH in HH.matrices = {}, this._matrices) HH.matrices[BH] = this._matrices[BH].xrH();
+         for (OB in BB.quaternions = {}, this._quaternions) BB.quaternions[OB] = this._quaternions[OB].dDB();
+         for (OB in BB.matrices = {}, this._matrices) BB.matrices[OB] = this._matrices[OB].dDB();
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L452` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L452) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L452)

```diff
-       const rH = AH.c.Parse((() => new MH(HH.name, BH, HH.shaderPath, HH.options, HH.storeEffectOnSubMeshes)), HH, BH, LH);
+       const DB = YB.d.Parse((() => new NB(BB.name, OB, BB.shaderPath, BB.options, BB.storeEffectOnSubMeshes)), BB, OB, GB);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L454)

```diff
-       for (hH in HH.stencil && rH.stencil.parse(HH.stencil, BH, LH), HH.textures) rH.setTexture(hH, tH.g.Parse(HH.textures[hH], BH, LH));
+       for (oB in BB.stencil && DB.stencil.parse(BB.stencil, OB, GB), BB.textures) DB.setTexture(oB, jB.e.Parse(BB.textures[oB], OB, GB));
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L458)

```diff
-         for (let HH = 0; HH < AH.length; HH++) SH.push(tH.g.Parse(AH[HH], BH, LH));
+         for (let BB = 0; BB < YB.length; BB++) QB.push(jB.e.Parse(YB[BB], OB, GB));
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L524` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L524) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L524)

```diff
-       for (hH in HH.matrices) rH.setMatrix(hH, SH.e.FromArray(HH.matrices[hH]));
+       for (oB in BB.matrices) DB.setMatrix(oB, QB.d.FromArray(BB.matrices[oB]));
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L538` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L538) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L538)

```diff
-         const hH = new CH.d;
+         const oB = new JB.e;
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L542` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L542) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L542)

```diff
-               const BH = xH(JSON.parse(hH.responseText), LH || XH.d.LastCreatedScene, AH);
+               const OB = RB(JSON.parse(oB.responseText), GB || PB.b.LastCreatedScene, YB);
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L552` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L552) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L552)

```diff
-         const hH = new CH.d;
+         const oB = new JB.e;
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L557` → after: `L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/293.js#L557) · [Before (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/293.js#L557)

```diff
-                 SH = xH(JSON.parse(AH.shaderMaterial), BH || XH.d.LastCreatedScene, LH);
+                 QB = RB(JSON.parse(YB.shaderMaterial), OB || PB.b.LastCreatedScene, GB);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/294.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec)

- **File**: `bundles/preprod.bloxd.io/chunks/js/294.js` (144 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79)

#### 1. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L4)

```diff
-   41790: (HH, BH, LH) => {
+   41478: (BB, OB, GB) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L8-L9)

```diff
-     var AH = LH(45),
-       rH = LH(1038),
+     var YB = GB(56),
+       DB = GB(1090),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L33)

```diff
-       return `${BH}:${LH}`
+       return `${OB}:${GB}`
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L78-L79` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L78-L79) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L78-L79)

```diff
-       const AH = null !== (BH = /^(?:Key|Digit)(.)$/.exec(HH)) && void 0 !== BH ? BH : /^Numpad(.+)$/.exec(HH);
-       return null !== AH ? HH.startsWith("Numpad") ? `Num ${AH[1]}` : AH[1] : HH
+       const YB = null !== (OB = /^(?:Key|Digit)(.)$/.exec(BB)) && void 0 !== OB ? OB : /^Numpad(.+)$/.exec(BB);
+       return null !== YB ? BB.startsWith("Numpad") ? `Num ${YB[1]}` : YB[1] : BB
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L83)

```diff
-     var WH = LH(1225);
+     var ZB = GB(1282);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L91)

```diff
-       return LH > 0 ? `${LH}:${String(AH).padStart(2,"0")}:${rH}` : `${AH}:${rH}`
+       return GB > 0 ? `${GB}:${String(YB).padStart(2,"0")}:${DB}` : `${YB}:${DB}`
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L150-L151` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L150-L151) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L150-L151)

```diff
-             const tH = (null !== (hH = BH.current) && void 0 !== hH ? hH : HH.getPositionMs()) / Math.max(1, HH.timeline.durationMs) * 100;
-             tH !== rH && (rH = tH, LH.current.style.setProperty("--brv-position", `${tH}%`))
+             const jB = (null !== (oB = OB.current) && void 0 !== oB ? oB : BB.getPositionMs()) / Math.max(1, BB.timeline.durationMs) * 100;
+             jB !== DB && (DB = jB, GB.current.style.setProperty("--brv-position", `${jB}%`))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L232)

```diff
-             }, BH.push(HH)), HH.endMs = AH.atMs, HH.counts.set(AH.code, (null !== (LH = HH.counts.get(AH.code)) && void 0 !== LH ? LH : 0) + 1)
+             }, OB.push(BB)), BB.endMs = YB.atMs, BB.counts.set(YB.code, (null !== (GB = BB.counts.get(YB.code)) && void 0 !== GB ? GB : 0) + 1)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L268` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L268) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L268)

```diff
-           return NH.px >= qH(HH.atMs) - MH && NH.px <= qH(null !== (BH = HH.endMs) && void 0 !== BH ? BH : HH.atMs) + MH
+           return XB.px >= gB(BB.atMs) - NB && XB.px <= gB(null !== (OB = BB.endMs) && void 0 !== OB ? OB : BB.atMs) + NB
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L302)

```diff
-                 left: `${BH}%`,
+                 left: `${OB}%`,
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L311` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L311) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L311)

```diff
-                 left: `${BH}%`,
+                 left: `${OB}%`,
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L333)

```diff
-               className: `brv-marker brv-marker-${HH.kind}${rH?" brv-marker-range":""}`,
+               className: `brv-marker brv-marker-${BB.kind}${DB?" brv-marker-range":""}`,
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L335-L336` → after: `L335-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L335-L336) · [Before (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L335-L336)

```diff
-                 left: `${AH}%`,
-                 width: rH ? eH(null !== (LH = HH.endMs) && void 0 !== LH ? LH : HH.atMs) - AH + "%" : void 0
+                 left: `${YB}%`,
+                 width: DB ? LB(null !== (GB = BB.endMs) && void 0 !== GB ? GB : BB.atMs) - YB + "%" : void 0
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L347` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L347) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L347)

```diff
-           children: [xH(NH.positionMs), null !== RH && ` \xb7 ${EH.fps(RH)}`, void 0 !== nH && ` \xb7 ${PH(nH,EH)}`, jH && ` \xb7 ${EH.videoGap}`, void 0 !== FH && ` \xb7 ${EH.unboundKeys((DH=FH.keys,DH.map((HH=>{let[BH,LH]=HH;return LH>1?`${YH(BH)} \xd7${LH}`:YH(BH)})).join(", " … [truncated]
+           children: [RB(XB.positionMs), null !== wB && ` \xb7 ${MB.fps(wB)}`, void 0 !== cB && ` \xb7 ${AB(cB,MB)}`, EB && ` \xb7 ${MB.videoGap}`, void 0 !== hB && ` \xb7 ${MB.unboundKeys((aB=hB.keys,aB.map((BB=>{let[OB,GB]=BB;return GB>1?`${lB(OB)} \xd7${GB}`:lB(OB)})).join(", " … [truncated]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L352-L360` → after: `L352-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L352-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L352-L360) · [Before (L352-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L352-L360)

```diff
-     var VH = LH(5083),
-       OH = LH(1123),
-       bH = LH(4969),
-       kH = LH(1313),
-       mH = LH(1455),
-       oH = LH(1315),
-       IH = LH(7049),
-       fH = LH(5572),
-       lH = LH(5566);
+     var nB = GB(5090),
+       UB = GB(1175),
+       fB = GB(4975),
+       kB = GB(1375),
+       dB = GB(1485),
+       KB = GB(1383),
+       uB = GB(7023),
+       mB = GB(5578),
+       IB = GB(5575);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L362)

```diff
-     var cH = LH(41798);
+     var iB = GB(41487);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L377)

```diff
-         this.rW = void 0, this.durationMs = void 0, this.positionStarts = void 0, this.rW = eH(HH), this.positionStarts = [];
+         this.JZ = void 0, this.durationMs = void 0, this.positionStarts = void 0, this.JZ = LB(BB), this.positionStarts = [];
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L379` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L379) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L379)

```diff
-         for (const LH of this.rW) this.positionStarts.push(BH), BH += LH.endMs - LH.startMs;
+         for (const GB of this.JZ) this.positionStarts.push(OB), OB += GB.endMs - GB.startMs;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L384)

```diff
-         return null !== (HH = null === (BH = this.rW[0]) || void 0 === BH ? void 0 : BH.startMs) && void 0 !== HH ? HH : 0
+         return null !== (BB = null === (OB = this.JZ[0]) || void 0 === OB ? void 0 : OB.startMs) && void 0 !== BB ? BB : 0
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L388` → after: `L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L388) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L388)

```diff
-         return null !== (HH = null === (BH = this.rW.at(-1)) || void 0 === BH ? void 0 : BH.endMs) && void 0 !== HH ? HH : 0
+         return null !== (BB = null === (OB = this.JZ.at(-1)) || void 0 === OB ? void 0 : OB.endMs) && void 0 !== BB ? BB : 0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L391-L392` → after: `L391-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L391-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L391-L392) · [Before (L391-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L391-L392)

```diff
-         for (let BH = 0; BH < this.rW.length; BH++) {
-           const LH = this.rW[BH];
+         for (let OB = 0; OB < this.JZ.length; OB++) {
+           const GB = this.JZ[OB];
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L399-L400` → after: `L399-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L399-L400) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L399-L400)

```diff
-         for (let LH = this.rW.length - 1; LH >= 0; LH--)
-           if (BH >= this.positionStarts[LH]) return this.rW[LH].startMs + (BH - this.positionStarts[LH]);
+         for (let GB = this.JZ.length - 1; GB >= 0; GB--)
+           if (OB >= this.positionStarts[GB]) return this.JZ[GB].startMs + (OB - this.positionStarts[GB]);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L404` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L404) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L404)

```diff
-         return this.rW.some((BH => HH >= BH.startMs && HH < BH.endMs))
+         return this.JZ.some((OB => BB >= OB.startMs && BB < OB.endMs))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L407)

```diff
-         for (const BH of this.rW) {
+         for (const OB of this.JZ) {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L475)

```diff
-           LH.type === cH.b.Custom && (null === HH || void 0 === HH ? void 0 : HH.tag) === jH && "number" === typeof(null === (BH = HH.payload) || void 0 === BH ? void 0 : BH.epochMs) && this.samples.push({
+           GB.type === iB.e.Custom && (null === BB || void 0 === BB ? void 0 : BB.tag) === EB && "number" === typeof(null === (OB = BB.payload) || void 0 === OB ? void 0 : OB.epochMs) && this.samples.push({
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L494` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L494) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L494)

```diff
-           this.samples[BH].domMs <= HH ? AH = BH : rH = BH - 1
+           this.samples[OB].domMs <= BB ? YB = OB : DB = OB - 1
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L496)

```diff
-         return null !== (BH = null === (LH = this.samples[AH]) || void 0 === LH ? void 0 : LH.offsetMs) && void 0 !== BH ? BH : 0
+         return null !== (OB = null === (GB = this.samples[YB]) || void 0 === GB ? void 0 : GB.offsetMs) && void 0 !== OB ? OB : 0
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L499` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L499) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L499)

```diff
-     const FH = new Set([cH.d.MouseMove, cH.d.MouseInteraction, cH.d.Scroll, cH.d.Input, cH.d.TouchMove, cH.d.Drag]),
+     const hB = new Set([iB.g.MouseMove, iB.g.MouseInteraction, iB.g.Scroll, iB.g.Input, iB.g.TouchMove, iB.g.Drag]),
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L540` → after: `L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L540) · [Before (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L540)

```diff
-       return HH.type === cH.b.IncrementalSnapshot ? FH.has(null !== (LH = null === (AH = HH.data) || void 0 === AH ? void 0 : AH.source) && void 0 !== LH ? LH : -1) : HH.type === cH.b.Custom && (null === (BH = HH.data) || void 0 === BH ? void 0 : BH.tag) === DH
+       return BB.type === iB.e.IncrementalSnapshot ? hB.has(null !== (GB = null === (YB = BB.data) || void 0 === YB ? void 0 : YB.source) && void 0 !== GB ? GB : -1) : BB.type === iB.e.Custom && (null === (OB = BB.data) || void 0 === OB ? void 0 : OB.tag) === aB
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L546` → after: `L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L546) · [Before (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L546)

```diff
-         if (hH.type === cH.b.Custom) {
+         if (oB.type === iB.e.Custom) {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L554` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L554) · [Before (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L554)

```diff
-         } else if (hH.type === cH.b.Plugin) {
+         } else if (oB.type === iB.e.Plugin) {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L615)

```diff
-         return null !== BH ? BH : null === this.source || this.unavailable.has(HH) || this.failedFetches > 0 ? "failed" : "pending"
+         return null !== OB ? OB : null === this.source || this.unavailable.has(BB) || this.failedFetches > 0 ? "failed" : "pending"
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L643` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L643) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L643)

```diff
-           for (const LH of BH) AH.has(LH) || (console.warn(`Replay sequence ${LH} has no ${this.description}.`), this.unavailable.add(LH))
+           for (const GB of OB) YB.has(GB) || (console.warn(`Replay sequence ${GB} has no ${this.description}.`), this.unavailable.add(GB))
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L684` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L684) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L684)

```diff
-           return null !== (BH = LH.sequence) && void 0 !== BH ? BH : []
+           return null !== (OB = GB.sequence) && void 0 !== OB ? OB : []
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L704` → after: `L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L704) · [Before (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L704)

```diff
-         if (void 0 === HH.sequence) return null !== (BH = HH.url) && void 0 !== BH ? BH : null;
+         if (void 0 === BB.sequence) return null !== (OB = BB.url) && void 0 !== OB ? OB : null;
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L712)

```diff
-           this.destroyed || (console.error(`Failed to load replay telemetry for ${HH.chunk.startMs}-${HH.chunk.endMs}.`, BH), HH.status = HH.attempts < 2 ? "idle" : "failed", this.onFailed())
+           this.destroyed || (console.error(`Failed to load replay telemetry for ${BB.chunk.startMs}-${BB.chunk.endMs}.`, OB), BB.status = BB.attempts < 2 ? "idle" : "failed", this.onFailed())
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L750)

```diff
-             of HH.events) "hidden" === SH && null === AH ? AH = rH : "visible" === SH && null !== AH && (LH.push({
+             of BB.events) "hidden" === QB && null === YB ? YB = DB : "visible" === QB && null !== YB && (GB.push({
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L777)

```diff
-       return !HH.inputRecorded || LH.length > 0 && LH[0].atMs <= BH.startMs + 1 ? HH : {
+       return !BB.inputRecorded || GB.length > 0 && GB[0].atMs <= OB.startMs + 1 ? BB : {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L800)

```diff
-       return HH < BH.startMs ? BH.startMs - HH : HH > BH.endMs ? 2 * (HH - BH.endMs) : 0
+       return BB < OB.startMs ? OB.startMs - BB : BB > OB.endMs ? 2 * (BB - OB.endMs) : 0
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L924-L925` → after: `L924-L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L924-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L924-L925) · [Before (L924-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L924-L925)

```diff
-         if (HH.type === cH.b.FullSnapshot) this.addedAt.clear();
-         else if (HH.type === cH.b.IncrementalSnapshot && HH.data.source === cH.d.Mutation) {
+         if (BB.type === iB.e.FullSnapshot) this.addedAt.clear();
+         else if (BB.type === iB.e.IncrementalSnapshot && BB.data.source === iB.g.Mutation) {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L958` → after: `L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L958) · [Before (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L958)

```diff
-         SH = new URL(rH.startsWith("//") ? `https:${rH}` : rH)
+         QB = new URL(DB.startsWith("//") ? `https:${DB}` : DB)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L962` → after: `L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L962) · [Before (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L962)

```diff
-       return "data:" === SH.protocol ? AH ? "text/css" !== rH.slice(5).split(/[,;]/)[0].trim().toLowerCase() : MB.test(rH) : "blob:" === SH.protocol || ("http:" === SH.protocol || "https:" === SH.protocol) && LH.some((HH => SH.hostname === HH || SH.hostname.endsWith(`.${HH}`)))
+       return "data:" === QB.protocol ? YB ? "text/css" !== DB.slice(5).split(/[,;]/)[0].trim().toLowerCase() : NO.test(DB) : "blob:" === QB.protocol || ("http:" === QB.protocol || "https:" === QB.protocol) && GB.some((BB => QB.hostname === BB || QB.hostname.endsWith(`.${BB}`)))
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L970` → after: `L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L970) · [Before (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L970)

```diff
-         return "url(" === SH ? `url("${xB}")` : "@imp" === SH ? `@import "${xB}"` : `"${xB}"`
+         return "url(" === QB ? `url("${RO}")` : "@imp" === QB ? `@import "${RO}"` : `"${RO}"`
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L999` → after: `L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L999) · [Before (L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L999)

```diff
-         return HH.replace(uB, ((HH, BH, LH) => void 0 !== BH ? String.fromCodePoint(Math.min(parseInt(BH, 16), 1114111)) : null !== LH && void 0 !== LH ? LH : ""))
+         return BB.replace(pO, ((BB, OB, GB) => void 0 !== OB ? String.fromCodePoint(Math.min(parseInt(OB, 16), 1114111)) : null !== GB && void 0 !== GB ? GB : ""))
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1006` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1006) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1006)

```diff
-       return LH.split("/* rr_split */").every((HH => "between" === UB(HH))) ? LH : ""
+       return GB.split("/* rr_split */").every((BB => "between" === SO(BB))) ? GB : ""
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1018` → after: `L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1018) · [Before (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1018)

```diff
-         }(BH, LH) ? BH : null;
+         }(OB, GB) ? OB : null;
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1022` → after: `L1022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1022) · [Before (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1022)

```diff
-         return zB.has(AH) ? vB(BH, LH) ? BH : null : "_csstext" === AH ? OB(BH, LH) : YB.test(BH) ? VB(BH, LH) : BH
+         return yO.has(YB) ? WO(OB, GB) ? OB : null : "_csstext" === YB ? UO(OB, GB) : lO.test(OB) ? nO(OB, GB) : OB
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1051-L1052` → after: `L1051-L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1051-L1052) · [Before (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1051-L1052)

```diff
-         if (AH.type === cH.b.FullSnapshot) LH(null === HH || void 0 === HH ? void 0 : HH.node, null);
-         else if (AH.type === cH.b.IncrementalSnapshot && Array.isArray(null === HH || void 0 === HH ? void 0 : HH.adds))
+         if (YB.type === iB.e.FullSnapshot) GB(null === BB || void 0 === BB ? void 0 : BB.node, null);
+         else if (YB.type === iB.e.IncrementalSnapshot && Array.isArray(null === BB || void 0 === BB ? void 0 : BB.adds))
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1108` → after: `L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1108) · [Before (L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1108)

```diff
-         if (void 0 === AH) return "none" === SH ? lB : fB;
+         if (void 0 === YB) return "none" === QB ? IO : mO;
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1110` → after: `L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1110) · [Before (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1110)

```diff
-         return IB[rH].includes(hH) ? hH === SH ? fB : lB : HH
+         return uO[DB].includes(oB) ? oB === QB ? mO : IO : BB
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1118` → after: `L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1118) · [Before (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1118)

```diff
-       return "link" === HH.tagName && "string" === typeof LH && LH.toLowerCase().split(/\s+/).includes("stylesheet") && "string" === typeof AH ? AH : null
+       return "link" === BB.tagName && "string" === typeof GB && GB.toLowerCase().split(/\s+/).includes("stylesheet") && "string" === typeof YB ? YB : null
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1130-L1131` → after: `L1130-L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1130-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1130-L1131) · [Before (L1130-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1130-L1131)

```diff
-         if (rH.type === cH.b.IncrementalSnapshot && (null === HH || void 0 === HH ? void 0 : HH.source) === cH.d.Mutation)
-           for (const rH of null !== (AH = HH.attributes) && void 0 !== AH ? AH : []) {
+         if (DB.type === iB.e.IncrementalSnapshot && (null === BB || void 0 === BB ? void 0 : BB.source) === iB.g.Mutation)
+           for (const DB of null !== (YB = BB.attributes) && void 0 !== YB ? YB : []) {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1150` → after: `L1150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1150) · [Before (L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1150)

```diff
-         return BH ? AH : HH
+         return OB ? YB : BB
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1157` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1157) · [Before (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1157)

```diff
-         return void 0 === rH ? HH : {
+         return void 0 === DB ? BB : {
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1183` → after: `L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1183) · [Before (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1183)

```diff
-       return null !== (AH = SH) && void 0 !== AH ? AH : rH
+       return null !== (YB = QB) && void 0 !== YB ? YB : DB
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1187` → after: `L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1187) · [Before (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1187)

```diff
-       FB = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv- … [truncated]
+       hO = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv- … [truncated]
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1190` → after: `L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1190) · [Before (L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1190)

```diff
-         if (!BH.some((HH => HH.type === cH.b.FullSnapshot))) return null;
+         if (!OB.some((BB => BB.type === iB.e.FullSnapshot))) return null;
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1198` → after: `L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1198) · [Before (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1198)

```diff
-             if (HH.type !== cH.b.FullSnapshot && HH.type !== cH.b.IncrementalSnapshot) return HH;
+             if (BB.type !== iB.e.FullSnapshot && BB.type !== iB.e.IncrementalSnapshot) return BB;
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1200` → after: `L1200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1200) · [Before (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1200)

```diff
-             return BH === HH.data ? HH : {
+             return OB === BB.data ? BB : {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1210` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1210) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1210)

```diff
-           return HH.map((HH => HH.type === cH.b.Meta ? HH : {
+           return BB.map((BB => BB.type === iB.e.Meta ? BB : {
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1219` → after: `L1219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1219) · [Before (L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1219)

```diff
-         this.domClock = LH, this.canvasSelectors = AH, this.videoLayer = rH, this.replayer = void 0, this.pausedAnimations = new tB, this.firstDomMs = void 0, this.lastDomMs = void 0, this.lastCanvasRectMs = -1 / 0, this.lastDomCheckMs = -1 / 0, this.firstDomMs = null !== (hH = n … [truncated]
+         this.domClock = GB, this.canvasSelectors = YB, this.videoLayer = DB, this.replayer = void 0, this.pausedAnimations = new jO, this.firstDomMs = void 0, this.lastDomMs = void 0, this.lastCanvasRectMs = -1 / 0, this.lastDomCheckMs = -1 / 0, this.firstDomMs = null !== (oB = n … [truncated]
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1277` → after: `L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1277) · [Before (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1277)

```diff
-         null !== BH ? (LH.previousSibling !== BH && BH.after(LH), LH.style.display = "", LH.style.left = `${BH.offsetLeft}px`, LH.style.top = `${BH.offsetTop}px`, LH.style.width = `${BH.offsetWidth}px`, LH.style.height = `${BH.offsetHeight}px`) : LH.style.display = "none"
+         null !== OB ? (GB.previousSibling !== OB && OB.after(GB), GB.style.display = "", GB.style.left = `${OB.offsetLeft}px`, GB.style.top = `${OB.offsetTop}px`, GB.style.width = `${OB.offsetWidth}px`, GB.style.height = `${OB.offsetHeight}px`) : GB.style.display = "none"
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1292` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1292) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1292)

```diff
-         null === HH || HH.width <= 0 || HH.height <= 0 || HH.width === (null === (BH = this.viewport) || void 0 === BH ? void 0 : BH.width) && HH.height === this.viewport.height || (this.viewport = HH, this.element.style.width = `${HH.width}px`, this.element.style.height = `${HH. … [truncated]
+         null === BB || BB.width <= 0 || BB.height <= 0 || BB.width === (null === (OB = this.viewport) || void 0 === OB ? void 0 : OB.width) && BB.height === this.viewport.height || (this.viewport = BB, this.element.style.width = `${BB.width}px`, this.element.style.height = `${BB. … [truncated]
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1299` → after: `L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1299) · [Before (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1299)

```diff
-         const BH = null !== (HH = this.viewport) && void 0 !== HH ? HH : wB,
+         const OB = null !== (BB = this.viewport) && void 0 !== BB ? BB : eO,
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1304` → after: `L1304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1304) · [Before (L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1304)

```diff
-         this.element.style.transform = `translate(${rH}px, ${SH}px) scale(${AH})`
+         this.element.style.transform = `translate(${DB}px, ${QB}px) scale(${YB})`
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1324` → after: `L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1324) · [Before (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1324)

```diff
-           }(HH)) && void 0 !== BH ? BH : []
+           }(BB)) && void 0 !== OB ? OB : []
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1352` → after: `L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1352) · [Before (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1352)

```diff
-             console.warn(`Replay video part ${tH} failed to load; playing the parts before it.`, hH), rH = Math.min(rH, tH)
+             console.warn(`Replay video part ${jB} failed to load; playing the parts before it.`, oB), DB = Math.min(DB, jB)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1383` → after: `L1383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1383) · [Before (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1383)

```diff
-       return tH && CH > 0 ? CH : null
+       return jB && JB > 0 ? JB : null
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1389` → after: `L1389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1389) · [Before (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1389)

```diff
-       if (!LH.ok) throw new Error(`HTTP ${LH.status}`);
+       if (!GB.ok) throw new Error(`HTTP ${GB.status}`);
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1396` → after: `L1396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1396) · [Before (L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1396)

```diff
-         this.fetchPart = HH, this.aX = BH, this.blobs = new Map
+         this.fetchPart = BB, this.CP = OB, this.blobs = new Map
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1413)

```diff
-                 LH.push(rH.byteLength <= AH ? rH : rH.subarray(0, AH)), AH -= rH.byteLength
+                 GB.push(DB.byteLength <= YB ? DB : DB.subarray(0, YB)), YB -= DB.byteLength
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1423` → after: `L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1423) · [Before (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1423)

```diff
-         this.blobs.delete(HH), this.blobs.set(HH, BH), this.blobs.size > this.aX && this.blobs.delete(this.blobs.keys().next().value)
+         this.blobs.delete(BB), this.blobs.set(BB, OB), this.blobs.size > this.CP && this.blobs.delete(this.blobs.keys().next().value)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1428` → after: `L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1428) · [Before (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1428)

```diff
-       return `${HH}/${BH}`
+       return `${BB}/${OB}`
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1487` → after: `L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1487) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1487)

```diff
-         const AH = null !== (BH = null !== (LH = HL(this.segments, HH)) && void 0 !== LH ? LH : this.segments.find((BH => BH.startMs > HH))) && void 0 !== BH ? BH : this.segments.at(-1);
+         const YB = null !== (OB = null !== (GB = BG(this.segments, BB)) && void 0 !== GB ? GB : this.segments.find((OB => OB.startMs > BB))) && void 0 !== OB ? OB : this.segments.at(-1);
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1507` → after: `L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1507) · [Before (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1507)

```diff
-             return void 0 === LH ? null : LH.startMs - BH <= ("parts" in LH ? 15e3 : 8e3) ? LH : null
+             return void 0 === GB ? null : GB.startMs - OB <= ("parts" in GB ? 15e3 : 8e3) ? GB : null
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1509` → after: `L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1509) · [Before (L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1509)

```diff
-         this.evictExcept([AH, rH, null !== (BH = null === (LH = this.shown) || void 0 === LH ? void 0 : LH.segment) && void 0 !== BH ? BH : null]), null !== rH && this.getSlot(rH), this.showStill(null === AH ? function(HH, BH, LH) {
+         this.evictExcept([YB, DB, null !== (OB = null === (GB = this.shown) || void 0 === GB ? void 0 : GB.segment) && void 0 !== OB ? OB : null]), null !== DB && this.getSlot(DB), this.showStill(null === YB ? function(BB, OB, GB) {
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1512` → after: `L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1512) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1512)

```diff
-           return void 0 === AH ? LH >= BH.atMs - 1e4 ? BH : null : LH >= AH.endMs && Math.abs(BH.atMs - AH.endMs) <= 1e4 ? BH : null
+           return void 0 === YB ? GB >= OB.atMs - 1e4 ? OB : null : GB >= YB.endMs && Math.abs(OB.atMs - YB.endMs) <= 1e4 ? OB : null
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1600` → after: `L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1600) · [Before (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1600)

```diff
-             tH = AH ? SH ? Math.min(BH, LL(rH) / 2) : BH : 0;
+             jB = YB ? QB ? Math.min(OB, GG(DB) / 2) : OB : 0;
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1613` → after: `L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1613) · [Before (L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1613)

```diff
-         if ("failed" === AH) return this.failed.has(HH.sequence) || (console.error(`Replay video segment ${HH.sequence} has no URLs to load.`), this.markFailed(HH)), null;
+         if ("failed" === YB) return this.failed.has(BB.sequence) || (console.error(`Replay video segment ${BB.sequence} has no URLs to load.`), this.markFailed(BB)), null;
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1631)

```diff
-           this.slots.get(HH.sequence) === SH && (console.error(`Replay video segment ${HH.sequence} failed to load.`, rH.error), this.markFailed(HH))
+           this.slots.get(BB.sequence) === QB && (console.error(`Replay video segment ${BB.sequence} failed to load.`, DB.error), this.markFailed(BB))
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1636` → after: `L1636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1636) · [Before (L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1636)

```diff
-           if (this.slots.get(HH.segment.sequence) === HH) return null === BH ? (console.error(`Replay video segment ${HH.segment.sequence} has no playable parts.`), void this.markFailed(HH.segment)) : void this.playBlob(HH, BH)
+           if (this.slots.get(BB.segment.sequence) === BB) return null === OB ? (console.error(`Replay video segment ${BB.segment.sequence} has no playable parts.`), void this.markFailed(BB.segment)) : void this.playBlob(BB, OB)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1638` → after: `L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1638) · [Before (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1638)

```diff
-           this.slots.get(HH.segment.sequence) === HH && (console.error(`Replay video segment ${HH.segment.sequence} failed to load.`, BH), this.markFailed(HH.segment))
+           this.slots.get(BB.segment.sequence) === BB && (console.error(`Replay video segment ${BB.segment.sequence} failed to load.`, OB), this.markFailed(BB.segment))
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1648` → after: `L1648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1648) · [Before (L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1648)

```diff
-         const BH = null !== HH && HH.url !== this.failedStillUrl ? HH : null;
+         const OB = null !== BB && BB.url !== this.failedStillUrl ? BB : null;
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1696-L1697` → after: `L1696-L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1696-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1696-L1697) · [Before (L1696-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1696-L1697)

```diff
-         this.timeline = void 0, this.chapters = void 0, this.lowFps = void 0, this.stage = void 0, this.clock = void 0, this.annotations = void 0, this.videoLayer = void 0, this.domLayer = void 0, this.listeners = new Set, this.skipInactive = !0, this.ended = !1, this.frame = 0,  … [truncated]
-           this.frame = requestAnimationFrame(this.IX);
+         this.timeline = void 0, this.chapters = void 0, this.lowFps = void 0, this.stage = void 0, this.clock = void 0, this.annotations = void 0, this.videoLayer = void 0, this.domLayer = void 0, this.listeners = new Set, this.skipInactive = !0, this.ended = !1, this.frame = 0,  … [truncated]
+           this.frame = requestAnimationFrame(this.kP);
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1708` → after: `L1708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1708) · [Before (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1708)

```diff
-         this.lowFps = null !== (LH = EH.lowFps) && void 0 !== LH ? LH : 25;
+         this.lowFps = null !== (GB = MB.lowFps) && void 0 !== GB ? GB : 25;
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1711-L1713` → after: `L1711-L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1711-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1711-L1713) · [Before (L1711-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1711-L1713)

```diff
-           inactivityThresholdMs: null !== (AH = EH.inactivityThresholdMs) && void 0 !== AH ? AH : 1e4,
-           loadTelemetryChunk: null !== (rH = EH.loadTelemetryChunk) && void 0 !== rH ? rH : null,
-           telemetryUrls: null !== (SH = EH.telemetryUrls) && void 0 !== SH ? SH : null,
+           inactivityThresholdMs: null !== (YB = MB.inactivityThresholdMs) && void 0 !== YB ? YB : 1e4,
+           loadTelemetryChunk: null !== (DB = MB.loadTelemetryChunk) && void 0 !== DB ? DB : null,
+           telemetryUrls: null !== (QB = MB.telemetryUrls) && void 0 !== QB ? QB : null,
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1717` → after: `L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1717) · [Before (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1717)

```diff
-         }), this.urlRefresher = new pH(null !== (hH = EH.refreshUrls) && void 0 !== hH ? hH : null, (HH => {
+         }), this.urlRefresher = new xB(null !== (oB = MB.refreshUrls) && void 0 !== oB ? oB : null, (BB => {
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1722` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1722) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1722)

```diff
-         })), this.videoLayer = new rL(gH(BH.videoSegments), BH.still, this.clock, SL, XH, null !== (tH = EH.segmentUrls) && void 0 !== tH ? tH : null, (() => {
+         })), this.videoLayer = new DG(rB(OB.videoSegments), OB.still, this.clock, QG, PB, null !== (jB = MB.segmentUrls) && void 0 !== jB ? jB : null, (() => {
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1724` → after: `L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1724) · [Before (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1724)

```diff
-         })), this.domLayer = DB.create(this.stage.element, BH.domEvents, BH.recordedPointer, GH, null !== (zH = EH.canvasSelectors) && void 0 !== zH ? zH : hL, null !== (CH = EH.resourceHosts) && void 0 !== CH ? CH : [], this.videoLayer, (HH => {
+         })), this.domLayer = aO.create(this.stage.element, OB.domEvents, OB.recordedPointer, zB, null !== (yB = MB.canvasSelectors) && void 0 !== yB ? yB : oG, null !== (JB = MB.resourceHosts) && void 0 !== JB ? JB : [], this.videoLayer, (BB => {
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1726` → after: `L1726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1726) · [Before (L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1726)

```diff
-         })), null === this.domLayer && (this.stage.element.classList.add("brv-stage-video-only"), this.stage.element.appendChild(this.videoLayer.element)), this.syncDom(), this.IX()
+         })), null === this.domLayer && (this.stage.element.classList.add("brv-stage-video-only"), this.stage.element.appendChild(this.videoLayer.element)), this.syncDom(), this.kP()
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1814` → after: `L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1814) · [Before (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1814)

```diff
-           rH = null !== (HH = null === AH || void 0 === AH ? void 0 : AH.endMs) && void 0 !== HH ? HH : LH;
+           DB = null !== (BB = null === YB || void 0 === YB ? void 0 : YB.endMs) && void 0 !== BB ? BB : GB;
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1838` → after: `L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1838) · [Before (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1838)

```diff
-         LX: LH,
+         sJ: GB,
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1842` → after: `L1842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1842) · [Before (L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1842)

```diff
-         className: `brv-key${LH?" brv-key-held":""}${AH?" brv-key-wide":""}`,
+         className: `brv-key${GB?" brv-key-held":""}${YB?" brv-key-wide":""}`,
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1900` → after: `L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1900) · [Before (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1900)

```diff
-             uH = `${GH};${YH.map((HH=>EH(HH))).join(",")}`;
+             pB = `${zB};${lB.map((BB=>MB(BB))).join(",")}`;
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1943` → after: `L1943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1943) · [Before (L1943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1943)

```diff
-                 LX: SH("forward")
+                 sJ: QB("forward")
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1949` → after: `L1949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1949) · [Before (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1949)

```diff
-                 LX: SH("left")
+                 sJ: QB("left")
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1952` → after: `L1952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1952) · [Before (L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1952)

```diff
-                 LX: SH("backward")
+                 sJ: QB("backward")
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1955` → after: `L1955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1955) · [Before (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1955)

```diff
-                 LX: SH("right")
+                 sJ: QB("right")
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1961` → after: `L1961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1961) · [Before (L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1961)

```diff
-                 LX: SH("sprint")
+                 sJ: QB("sprint")
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1964` → after: `L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1964) · [Before (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1964)

```diff
-                 LX: SH("crouch")
+                 sJ: QB("crouch")
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1967` → after: `L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1967) · [Before (L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1967)

```diff
-                 LX: SH("jump"),
+                 sJ: QB("jump"),
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1979` → after: `L1979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1979) · [Before (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1979)

```diff
-                 className: `${LH}${SH(BH)?" brv-key-held":""}`
+                 className: `${GB}${QB(OB)?" brv-key-held":""}`
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1999` → after: `L1999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L1999) · [Before (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L1999)

```diff
-       fps: HH => `${HH} FPS`,
+       fps: BB => `${BB} FPS`,
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2001-L2002` → after: `L2001-L2002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2001-L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2001-L2002) · [Before (L2001-L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2001-L2002)

```diff
-       unboundKey: HH => `${HH} does nothing here`,
-       unboundKeys: HH => `${HH} did nothing`
+       unboundKey: BB => `${BB} does nothing here`,
+       unboundKeys: BB => `${BB} did nothing`
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2086` → after: `L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2086) · [Before (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2086)

```diff
-         className: void 0 === LH ? "brv-player" : `brv-player ${LH}`,
+         className: void 0 === GB ? "brv-player" : `brv-player ${GB}`,
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2234` → after: `L2234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2234) · [Before (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2234)

```diff
-               title: `${hH.speed} (1-${KH.length})`,
+               title: `${oB.speed} (1-${FB.length})`,
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2248` → after: `L2248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2248) · [Before (L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2248)

```diff
-               title: `${hH.skipInactive} (S)`,
+               title: `${oB.skipInactive} (S)`,
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2261` → after: `L2261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2261) · [Before (L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2261)

```diff
-               title: `${hH.keys} (I)`,
+               title: `${oB.keys} (I)`,
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2280` → after: `L2280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2280) · [Before (L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2280)

```diff
-     var PL = LH(5564);
+     var AG = GB(5570);
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2292` → after: `L2292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2292) · [Before (L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2292)

```diff
-       } = (0, OH.B)(), [tH, zH] = (0, AH.useState)({
+       } = (0, UB.H)(), [jB, yB] = (0, YB.useState)({
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2321-L2322` → after: `L2321-L2322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2321-L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2321-L2322) · [Before (L2321-L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2321-L2322)

```diff
-         loadTelemetryChunk: IH.y,
-         refreshUrls: async () => (0, IH.s)(await PL.d.getReplay(rH, BH, LH)),
+         loadTelemetryChunk: uB.C,
+         refreshUrls: async () => (0, uB.x)(await AG.e.getReplay(DB, OB, GB)),
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2324-L2325` → after: `L2324-L2325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2324-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2324-L2325) · [Before (L2324-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2324-L2325)

```diff
-           load: async HH => (await PL.d.getReplaySegmentUrls(rH, BH, LH, HH, [])).videoSegments,
-           maxSequences: lH.e
+           load: async BB => (await AG.e.getReplaySegmentUrls(DB, OB, GB, BB, [])).videoSegments,
+           maxSequences: IB.b
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2328-L2329` → after: `L2328-L2329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2328-L2329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2328-L2329) · [Before (L2328-L2329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2328-L2329)

```diff
-           load: async HH => (await PL.d.getReplaySegmentUrls(rH, BH, LH, [], HH)).telemetrySegments,
-           maxSequences: lH.h
+           load: async BB => (await AG.e.getReplaySegmentUrls(DB, OB, GB, [], BB)).telemetrySegments,
+           maxSequences: IB.g
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2336-L2338` → after: `L2336-L2338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2336-L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2336-L2338) · [Before (L2336-L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2336-L2338)

```diff
-         }), (0, IH.B)({
-           getReplay: () => PL.d.getReplay(rH, BH, LH),
-           loadDomEvents: IH.w,
+         }), (0, uB.E)({
+           getReplay: () => AG.e.getReplay(DB, OB, GB),
+           loadDomEvents: uB.z,
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2350` → after: `L2350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2350) · [Before (L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2350)

```diff
-             const HH = (0, IH.v)(BH.replay, BH.domEvents, (HH => hH("studio:replayVisit", {
+             const BB = (0, uB.y)(OB.replay, OB.domEvents, (BB => oB("studio:replayVisit", {
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2361` → after: `L2361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2361) · [Before (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2361)

```diff
-             message: (0, IH.l)(BH, hH("studio:replayLoadFailed"))
+             message: (0, uB.r)(OB, oB("studio:replayLoadFailed"))
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2368` → after: `L2368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2368) · [Before (L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2368)

```diff
-         children: (0, WH.jsx)(kH.d, {})
+         children: (0, ZB.jsx)(kB.b, {})
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2371` → after: `L2371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2371) · [Before (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2371)

```diff
-         children: [(0, WH.jsx)(kH.d, {}), hH("studio:replayPreparing")]
+         children: [(0, ZB.jsx)(kB.b, {}), oB("studio:replayPreparing")]
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2374` → after: `L2374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2374) · [Before (L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2374)

```diff
-         children: [tH.message, (0, WH.jsx)(mH.W, {
+         children: [jB.message, (0, ZB.jsx)(dB.Z, {
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2395` → after: `L2395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2395) · [Before (L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2395)

```diff
-       } = (0, OH.B)();
+       } = (0, UB.H)();
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2403` → after: `L2403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2403) · [Before (L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2403)

```diff
-           children: (0, WH.jsx)(oH.c, {
+           children: (0, ZB.jsx)(KB.b, {
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2409-L2411` → after: `L2409-L2411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2409-L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2409-L2411) · [Before (L2409-L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2409-L2411)

```diff
-     const OL = IH.N.replay,
-       bL = IH.N.filters,
-       kL = IH.N.endedAt,
+     const UG = uB.Q.replay,
+       fG = uB.Q.filters,
+       kG = uB.Q.endedAt,
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2444` → after: `L2444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2444) · [Before (L2444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2444)

```diff
-       } = (0, OH.B)(), hH = (0, IH.o)(BH);
+       } = (0, UB.H)(), oB = (0, uB.v)(OB);
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2454` → after: `L2454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2454) · [Before (L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2454)

```diff
-             children: (0, IH.k)(BH.startedAtMs)
+             children: (0, uB.n)(OB.startedAtMs)
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2462` → after: `L2462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2462) · [Before (L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2462)

```diff
-             className: SH()("StudioReplayTag", `StudioReplayTag-${HH}`),
+             className: QB()("StudioReplayTag", `StudioReplayTag-${BB}`),
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2477` → after: `L2477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2477) · [Before (L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2477)

```diff
-       } = (0, OH.B)();
+       } = (0, UB.H)();
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2483` → after: `L2483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2483) · [Before (L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2483)

```diff
-         children: [(0, WH.jsx)(oH.c, {
+         children: [(0, ZB.jsx)(KB.b, {
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2485` → after: `L2485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2485) · [Before (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2485)

```diff
-         }), rH("studio:replaysStartFailed"), (0, WH.jsx)(mH.W, {
+         }), DB("studio:replaysStartFailed"), (0, ZB.jsx)(dB.Z, {
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2493` → after: `L2493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2493) · [Before (L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2493)

```diff
-         children: (0, WH.jsx)(kH.d, {})
+         children: (0, ZB.jsx)(kB.b, {})
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2505` → after: `L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2505) · [Before (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2505)

```diff
-       } = (0, OH.B)(), zH = function(HH, BH) {
+       } = (0, UB.H)(), yB = function(BB, OB) {
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2508` → after: `L2508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2508) · [Before (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2508)

```diff
-         } = (0, OH.B)(), [rH, SH] = (0, AH.useState)({
+         } = (0, UB.H)(), [DB, QB] = (0, YB.useState)({
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2515` → after: `L2515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2515) · [Before (L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2515)

```diff
-           }), PL.d.listReplays(BH, HH).then((HH => {
+           }), AG.e.listReplays(OB, BB).then((BB => {
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2523` → after: `L2523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2523) · [Before (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2523)

```diff
-               message: (0, IH.l)(HH, LH("studio:replaysLoadFailed"))
+               message: (0, uB.r)(BB, GB("studio:replaysLoadFailed"))
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2529` → after: `L2529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2529) · [Before (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2529)

```diff
-       }(rH, hH), [CH, EH] = (0, bH.p)(), XH = (0, IH.H)(CH.get(bL)), GH = (0, IH.F)(CH.get(kL)), YH = CH.get(OL), uH = "loaded" === zH.status ? (0, IH.e)(zH.value.recordings, XH, GH) : [], QH = "loaded" === zH.status ? (0, IH.P)(zH.value.recordings, uH, YH) : [], MH = null !== (B … [truncated]
+       }(DB, oB), [JB, MB] = (0, fB.l)(), PB = (0, uB.M)(JB.get(fG)), zB = (0, uB.J)(JB.get(kG)), lB = JB.get(UG), pB = "loaded" === yB.status ? (0, uB.d)(yB.value.recordings, PB, zB) : [], qB = "loaded" === yB.status ? (0, uB.U)(yB.value.recordings, pB, lB) : [], NB = null !== (O … [truncated]
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2533` → after: `L2533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2533) · [Before (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2533)

```diff
-           (0, bH.j)(BH, OL, HH)
+           (0, fB.i)(OB, UG, BB)
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2542` → after: `L2542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2542) · [Before (L2542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2542)

```diff
-           (0, bH.j)(LH, OL, MH), (0, bH.j)(LH, bL, (0, IH.j)(HH)), BH && (0, bH.j)(LH, kL, null)
+           (0, fB.i)(GB, UG, NB), (0, fB.i)(GB, fG, (0, uB.l)(BB)), OB && (0, fB.i)(GB, kG, null)
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2554` → after: `L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2554) · [Before (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2554)

```diff
-         children: (0, WH.jsx)(kH.d, {})
+         children: (0, ZB.jsx)(kB.b, {})
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2558` → after: `L2558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2558) · [Before (L2558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2558)

```diff
-         children: [(0, WH.jsx)(oH.c, {
+         children: [(0, ZB.jsx)(KB.b, {
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2568` → after: `L2568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2568) · [Before (L2568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2568)

```diff
-         children: [(0, WH.jsx)(oH.c, {
+         children: [(0, ZB.jsx)(KB.b, {
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2572` → after: `L2572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2572) · [Before (L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2572)

```diff
-       const gH = IH.L.filter((HH => eH.some((BH => (0, IH.E)(BH, HH))))),
+       const rB = uB.P.filter((BB => LB.some((OB => (0, uB.F)(OB, BB))))),
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2578` → after: `L2578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2578) · [Before (L2578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2578)

```diff
-           children: [null !== GH && (0, WH.jsxs)(mH.W, {
+           children: [null !== zB && (0, ZB.jsxs)(dB.Z, {
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2584-L2585` → after: `L2584-L2585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2584-L2585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2584-L2585) · [Before (L2584-L2585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2584-L2585)

```diff
-               minutes: (0, fH.r)(GH.minute, GH.orLonger ? GH.minute : 1 / 0)
-             }), (0, WH.jsx)(oH.c, {
+               minutes: (0, mB.C)(zB.minute, zB.orLonger ? zB.minute : 1 / 0)
+             }), (0, ZB.jsx)(KB.b, {
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2588` → after: `L2588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2588) · [Before (L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2588)

```diff
-           }), gH.map((HH => (0, WH.jsx)(mH.W, {
+           }), rB.map((BB => (0, ZB.jsx)(dB.Z, {
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L2608` → after: `L2608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/294.js#L2608) · [Before (L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/294.js#L2608)

```diff
-               children: [tH("studio:replaysNoMatch"), (0, WH.jsx)(mH.W, {
+               children: [jB("studio:replaysNoMatch"), (0, ZB.jsx)(dB.Z, {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/295.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec)

- **File**: `bundles/preprod.bloxd.io/chunks/js/295.js` (141 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L1)

```diff
- /*! For license information please see cwj32u.295.30defb0f.chunk.js.LICENSE.txt */
+ /*! For license information please see gw4e3a.295.0d581ca7.chunk.js.LICENSE.txt */
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5)

```diff
-   41798: (HH, BH, LH) => {
+   41487: (BB, OB, GB) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7-L9` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L7-L9) · [Before (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L7-L9)

```diff
-       b: () => mh,
-       d: () => oh,
-       h: () => zz
+       e: () => uo,
+       g: () => mo,
+       j: () => Jy
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L82)

```diff
-       const AH = `${HH}.${String(LH)}`;
+       const YB = `${BB}.${String(GB)}`;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L199-L200` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L199-L200) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L199-L200)

```diff
-             const LH = ["@import", `url(${JSON.stringify(HH.href)})`];
-             return "" === HH.layerName ? LH.push("layer") : HH.layerName && LH.push(`layer(${HH.layerName})`), HH.supportsText && LH.push(`supports(${HH.supportsText})`), HH.media.length && LH.push(HH.media.mediaText), LH.join(" ") + ";"
+             const GB = ["@import", `url(${JSON.stringify(BB.href)})`];
+             return "" === BB.layerName ? GB.push("layer") : BB.layerName && GB.push(`layer(${BB.layerName})`), BB.supportsText && GB.push(`supports(${BB.supportsText})`), BB.media.length && GB.push(BB.media.mediaText), GB.join(" ") + ";"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L225)

```diff
-       yAH(HH) {
+       yDB(BB) {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L249` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L249) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L249)

```diff
-         const LH = this.yAH(HH);
+         const GB = this.yDB(BB);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L308-L310` → after: `L308-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L308-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L308-L310) · [Before (L308-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L308-L310)

```diff
-         if (cH.test(tH) || eH.test(tH)) return `url(${zH}${tH}${zH})`;
-         if (qH.test(tH)) return `url(${zH}${tH}${zH})`;
-         if ("/" === tH[0]) return `url(${zH}${function(HH){let BH="";return BH=HH.indexOf("//")>-1?HH.split("/").slice(0,3).join("/"):HH.split("/")[0],BH=BH.split("?")[0],BH}(BH)+tH}${zH})`;
+         if (iB.test(jB) || LB.test(jB)) return `url(${yB}${jB}${yB})`;
+         if (gB.test(jB)) return `url(${yB}${jB}${yB})`;
+         if ("/" === jB[0]) return `url(${yB}${function(BB){let OB="";return OB=BB.indexOf("//")>-1?BB.split("/").slice(0,3).join("/"):BB.split("/")[0],OB=OB.split("?")[0],OB}(OB)+jB}${yB})`;
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L317)

```diff
-         return `url(${zH}${XH.join("/")}${EH}${zH})`
+         return `url(${yB}${PB.join("/")}${MB}${yB})`
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L321` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L321) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L321)

```diff
-       RH = new RegExp(`${NH}|\\b(0)px?`, "g"),
+       wB = new RegExp(`${XB}|\\b(0)px?`, "g"),
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L443)

```diff
-       }(HH, AH) : "style" === LH ? gH(AH, HB(HH)) : "object" === BH && "data" === LH ? pH(HH, AH) : AH : AH
+       }(BB, YB) : "style" === GB ? rB(YB, BO(BB)) : "object" === OB && "data" === GB ? xB(BB, YB) : YB : YB
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L471` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L471) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L471)

```diff
-             if (rH.closest(`.${BH}`)) return !0
+             if (DB.closest(`.${OB}`)) return !0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L608` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L608) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L608)

```diff
-                     console.warn(`Cannot inline img src=${AH}! Error: ${HH}`)
+                     console.warn(`Cannot inline img src=${YB}! Error: ${BB}`)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L610` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L610) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L610)

```diff
-                   "anonymous" === BH.crossOrigin && (rH ? MH.crossOrigin = rH : BH.removeAttribute("crossorigin"))
+                   "anonymous" === OB.crossOrigin && (DB ? NB.crossOrigin = DB : OB.removeAttribute("crossorigin"))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L626-L627` → after: `L626-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L626-L627) · [Before (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L626-L627)

```diff
-                 rr_width: `${BH}px`,
-                 rr_height: `${LH}px`
+                 rr_width: `${OB}px`,
+                 rr_height: `${GB}px`
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L977` → after: `L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L977) · [Before (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L977)

```diff
-         Object.defineProperty(LH, BH, AH.get ? AH : {
+         Object.defineProperty(GB, OB, YB.get ? YB : {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1279` → after: `L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L1279) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L1279)

```diff
-           "parent" === AH && "object" === hH ? BH && (LH[AH] = BH) : "source" === AH ? LH[AH] = rH : Array.isArray(rH) ? LH[AH] = rH.map((HH => SH(HH, LH))) : ("object" === hH && null !== rH && (rH = SH(rH)), LH[AH] = rH)
+           "parent" === YB && "object" === oB ? OB && (GB[YB] = OB) : "source" === YB ? GB[YB] = DB : Array.isArray(DB) ? GB[YB] = DB.map((BB => QB(BB, GB))) : ("object" === oB && null !== DB && (DB = QB(DB)), GB[YB] = DB)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1296` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L1296) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L1296)

```diff
-             HH.stack = HH.stack.replace(/\n\s{4}at /, `$&${BH.input.from}:${BH.start.line}:${BH.start.column}$&`)
+             BB.stack = BB.stack.replace(/\n\s{4}at /, `$&${OB.input.from}:${OB.start.line}:${OB.start.column}$&`)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1349` → after: `L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L1349) · [Before (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L1349)

```diff
-             get: (HH, BH) => "proxyOf" === BH ? HH : "root" === BH ? () => HH.root().toProxy() : HH[BH],
+             get: (BB, OB) => "proxyOf" === OB ? BB : "root" === OB ? () => BB.root().toProxy() : BB[OB],
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L1626)

```diff
-           if (null === HH || "undefined" === typeof HH || "object" === typeof HH && !HH.toString) throw new Error(`PostCSS received ${HH} instead of CSS string`);
+           if (null === BB || "undefined" === typeof BB || "object" === typeof BB && !BB.toString) throw new Error(`PostCSS received ${BB} instead of CSS string`);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1661` → after: `L1661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L1661) · [Before (L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L1661)

```diff
-           }, CH.source, CH.file, tH.plugin) : new zH(HH, void 0 === SH ? BH : {
+           }, JB.source, JB.file, jB.plugin) : new yB(BB, void 0 === QB ? OB : {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L1664)

```diff
-           }, void 0 === SH ? LH : {
+           }, void 0 === QB ? GB : {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1706` → after: `L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L1706) · [Before (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L1706)

```diff
-           return /^\w+:\/\//.test(HH) ? HH : SH(this.map.consumer().sourceRoot || this.map.root || ".", HH)
+           return /^\w+:\/\//.test(BB) ? BB : QB(this.map.consumer().sourceRoot || this.map.root || ".", BB)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1989` → after: `L1989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L1989) · [Before (L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L1989)

```diff
-             get: (HH, BH) => "proxyOf" === BH ? HH : HH[BH] ? "each" === BH || "string" === typeof BH && BH.startsWith("walk") ? function() {
+             get: (BB, OB) => "proxyOf" === OB ? BB : BB[OB] ? "each" === OB || "string" === typeof OB && OB.startsWith("walk") ? function() {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2000` → after: `L2000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L2000) · [Before (L2000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L2000)

```diff
-           return "number" === typeof HH ? HH : (HH.proxyOf && (HH = HH.proxyOf), this.proxyOf.nodes.indexOf(HH))
+           return "number" === typeof BB ? BB : (BB.proxyOf && (BB = BB.proxyOf), this.proxyOf.nodes.indexOf(BB))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2364-L2368` → after: `L2364-L2368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2364-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L2364-L2368) · [Before (L2364-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L2364-L2368)

```diff
-                   case rH:
-                   case SH:
-                   case tH:
-                   case zH:
-                   case hH:
+                   case DB:
+                   case QB:
+                   case jB:
+                   case yB:
+                   case oB:
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2375-L2381` → after: `L2375-L2381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2375-L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L2375-L2381) · [Before (L2375-L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L2375-L2381)

```diff
-                   case CH:
-                   case EH:
-                   case YH:
-                   case uH:
-                   case MH:
-                   case QH:
-                   case GH: {
+                   case JB:
+                   case MB:
+                   case lB:
+                   case pB:
+                   case NB:
+                   case qB:
+                   case zB: {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2386` → after: `L2386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L2386) · [Before (L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L2386)

```diff
-                   case XH:
+                   case PB:
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2402-L2403` → after: `L2402-L2403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2402-L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L2402-L2403) · [Before (L2402-L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L2402-L2403)

```diff
-                   case HH:
-                   case BH:
+                   case BB:
+                   case OB:
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2417` → after: `L2417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L2417) · [Before (L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L2417)

```diff
-                   case xH:
+                   case RB:
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2420` → after: `L2420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L2420) · [Before (L2420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L2420)

```diff
-                   case LH:
+                   case GB:
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2468` → after: `L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L2468) · [Before (L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L2468)

```diff
-                 SH.source.end = this.hT(HH[2]), SH.source.end.offset++, this.semicolon = !0;
+                 QB.source.end = this.pR(BB[2]), QB.source.end.offset++, this.semicolon = !0;
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2478` → after: `L2478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L2478) · [Before (L2478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L2478)

```diff
-                   LH && (SH.source.end = this.hT(LH[3] || LH[2]), SH.source.end.offset++)
+                   GB && (QB.source.end = this.pR(GB[3] || GB[2]), QB.source.end.offset++)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2490` → after: `L2490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L2490) · [Before (L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L2490)

```diff
-           SH.raws.between = this.spacesAndCommentsFromEnd(zH), zH.length ? (SH.raws.afterName = this.spacesAndCommentsFromStart(zH), this.raw(SH, "params", zH), hH && (HH = zH[zH.length - 1], SH.source.end = this.hT(HH[3] || HH[2]), SH.source.end.offset++, this.spaces = SH.raws.b … [truncated]
+           QB.raws.between = this.spacesAndCommentsFromEnd(yB), yB.length ? (QB.raws.afterName = this.spacesAndCommentsFromStart(yB), this.raw(QB, "params", yB), oB && (BB = yB[yB.length - 1], QB.source.end = this.pR(BB[3] || BB[2]), QB.source.end.offset++, this.spaces = QB.raws.b … [truncated]
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2515` → after: `L2515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L2515) · [Before (L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L2515)

```diff
-           this.init(BH, HH[2]), BH.source.end = this.hT(HH[3] || HH[2]), BH.source.end.offset++;
+           this.init(OB, BB[2]), OB.source.end = this.pR(BB[3] || BB[2]), OB.source.end.offset++;
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2530` → after: `L2530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L2530) · [Before (L2530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L2530)

```diff
-           for (";" === SH[0] && (this.semicolon = !0, BH.pop()), AH.source.end = this.hT(SH[3] || SH[2] || function(HH) {
+           for (";" === QB[0] && (this.semicolon = !0, OB.pop()), YB.source.end = this.pR(QB[3] || QB[2] || function(BB) {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2538` → after: `L2538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L2538) · [Before (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L2538)

```diff
-           for (AH.source.start = this.hT(BH[0][2]), AH.prop = ""; BH.length;) {
+           for (YB.source.start = this.pR(OB[0][2]), YB.prop = ""; OB.length;) {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2587` → after: `L2587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L2587) · [Before (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L2587)

```diff
-           this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.hT(HH … [truncated]
+           this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.pR(BB … [truncated]
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2590` → after: `L2590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L2590) · [Before (L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L2590)

```diff
-           this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.hT(this.tokenizer.positio … [truncated]
+           this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.pR(this.tokenizer.positio … [truncated]
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2609` → after: `L2609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L2609) · [Before (L2609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L2609)

```diff
-             start: this.hT(BH)
+             start: this.pR(OB)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2882` → after: `L2882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L2882) · [Before (L2882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L2882)

```diff
-                 if (!EH[LH] && /^[A-Z]/.test(LH)) throw new Error(`Unknown event ${LH} in ${BH.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
+                 if (!MB[GB] && /^[A-Z]/.test(GB)) throw new Error(`Unknown event ${GB} in ${OB.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2885` → after: `L2885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L2885) · [Before (L2885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L2885)

```diff
-                     for (let AH in BH[LH]) HH(BH, "*" === AH ? LH : LH + "-" + AH.toLowerCase(), BH[LH][AH]);
+                     for (let YB in OB[GB]) BB(OB, "*" === YB ? GB : GB + "-" + YB.toLowerCase(), OB[GB][YB]);
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3277` → after: `L3277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L3277) · [Before (L3277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L3277)

```diff
-       }, xH.stringify = SH, xH.parse = YH, xH.fromJSON = hH, xH.list = uH, xH.comment = HH => new CH(HH), xH.atRule = HH => new EH(HH), xH.decl = HH => new BH(HH), xH.rule = HH => new QH(HH), xH.root = HH => new WH(HH), xH.document = HH => new tH(HH), xH.CssSyntaxError = HH, xH.D … [truncated]
+       }, RB.stringify = QB, RB.parse = lB, RB.fromJSON = oB, RB.list = pB, RB.comment = BB => new JB(BB), RB.atRule = BB => new MB(BB), RB.decl = BB => new OB(BB), RB.rule = BB => new qB(BB), RB.root = BB => new ZB(BB), RB.document = BB => new jB(BB), RB.CssSyntaxError = BB, RB.D … [truncated]
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3279` → after: `L3279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L3279) · [Before (L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L3279)

```diff
-     aL.stringify, aL.fromJSON, aL.plugin, aL.parse, aL.list, aL.document, aL.comment, aL.atRule, aL.rule, aL.decl, aL.root, aL.CssSyntaxError, aL.Declaration, aL.JF, aL.Processor, aL.Document, aL.Comment, aL.Warning, aL.AtRule, aL.Result, aL.Input, aL.Rule, aL.Root, aL.Node;
+     CG.stringify, CG.fromJSON, CG.plugin, CG.parse, CG.list, CG.document, CG.comment, CG.atRule, CG.rule, CG.decl, CG.root, CG.CssSyntaxError, CG.Declaration, CG.pw, CG.Processor, CG.Document, CG.Comment, CG.Warning, CG.AtRule, CG.Result, CG.Input, CG.Rule, CG.Root, CG.Node;
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3460` → after: `L3460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L3460) · [Before (L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L3460)

```diff
-             } else "rr_mediaPlaybackRate" === BH && "number" === typeof LH ? SH.playbackRate = LH : "rr_mediaMuted" === BH && "boolean" === typeof LH ? SH.muted = LH : "rr_mediaLoop" === BH && "boolean" === typeof LH ? SH.loop = LH : "rr_mediaVolume" === BH && "number" === typeof … [truncated]
+             } else "rr_mediaPlaybackRate" === OB && "number" === typeof GB ? QB.playbackRate = GB : "rr_mediaMuted" === OB && "boolean" === typeof GB ? QB.muted = GB : "rr_mediaLoop" === OB && "boolean" === typeof GB ? QB.loop = GB : "rr_mediaVolume" === OB && "number" === typeof … [truncated]
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3468` → after: `L3468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L3468) · [Before (L3468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L3468)

```diff
-           return "input" !== rH && "textarea" !== rH || SH.setAttribute("autocomplete", "off"), SH
+           return "input" !== DB && "textarea" !== DB || QB.setAttribute("autocomplete", "off"), QB
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3491` → after: `L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L3491) · [Before (L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L3491)

```diff
-         const BH = AH.yAH(HH.id),
+         const OB = YB.yDB(BB.id),
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3493` → after: `L3493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L3493) · [Before (L3493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L3493)

```diff
-         if (EH = HH, (CH = LH) && EH && CH.type === EH.type && (CH.type === zH.Document ? CH.compatMode === EH.compatMode : CH.type === zH.DocumentType ? CH.name === EH.name && CH.publicId === EH.publicId && CH.systemId === EH.systemId : CH.type === zH.Comment || CH.type === zH.T … [truncated]
+         if (MB = BB, (JB = GB) && MB && JB.type === MB.type && (JB.type === yB.Document ? JB.compatMode === MB.compatMode : JB.type === yB.DocumentType ? JB.name === MB.name && JB.publicId === MB.publicId && JB.systemId === MB.systemId : JB.type === yB.Comment || JB.type === yB.T … [truncated]
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3502` → after: `L3502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L3502) · [Before (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L3502)

```diff
-       if (HH.rootId && AH.yAH(HH.rootId) !== LH && AH.replace(HH.rootId, LH), HH.type === zH.Document && (LH.close(), LH.open(), "BackCompat" === HH.compatMode && HH.childNodes && HH.childNodes[0].type !== zH.DocumentType && (HH.childNodes[0].type === zH.Element && "xmlns" in HH. … [truncated]
+       if (BB.rootId && YB.yDB(BB.rootId) !== GB && YB.replace(BB.rootId, GB), BB.type === yB.Document && (GB.close(), GB.open(), "BackCompat" === BB.compatMode && BB.childNodes && BB.childNodes[0].type !== yB.DocumentType && (BB.childNodes[0].type === yB.Element && "xmlns" in BB. … [truncated]
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3545` → after: `L3545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L3545) · [Before (L3545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L3545)

```diff
-         for (const AH of HH.getIds()) HH.has(AH) && (LH = HH.yAH(AH), BH(LH));
+         for (const YB of BB.getIds()) BB.has(YB) && (GB = BB.yDB(YB), OB(GB));
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3585` → after: `L3585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L3585) · [Before (L3585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L3585)

```diff
-       yAH(HH) {
+       yDB(BB) {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3609` → after: `L3609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L3609) · [Before (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L3609)

```diff
-         const LH = this.yAH(HH);
+         const GB = this.yDB(BB);
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3638` → after: `L3638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L3638) · [Before (L3638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L3638)

```diff
-         Object.defineProperty(LH, BH, AH.get ? AH : {
+         Object.defineProperty(GB, OB, YB.get ? YB : {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3940` → after: `L3940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L3940) · [Before (L3940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L3940)

```diff
-           "parent" === AH && "object" === hH ? BH && (LH[AH] = BH) : "source" === AH ? LH[AH] = rH : Array.isArray(rH) ? LH[AH] = rH.map((HH => SH(HH, LH))) : ("object" === hH && null !== rH && (rH = SH(rH)), LH[AH] = rH)
+           "parent" === YB && "object" === oB ? OB && (GB[YB] = OB) : "source" === YB ? GB[YB] = DB : Array.isArray(DB) ? GB[YB] = DB.map((BB => QB(BB, GB))) : ("object" === oB && null !== DB && (DB = QB(DB)), GB[YB] = DB)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3957` → after: `L3957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L3957) · [Before (L3957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L3957)

```diff
-             HH.stack = HH.stack.replace(/\n\s{4}at /, `$&${BH.input.from}:${BH.start.line}:${BH.start.column}$&`)
+             BB.stack = BB.stack.replace(/\n\s{4}at /, `$&${OB.input.from}:${OB.start.line}:${OB.start.column}$&`)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4010` → after: `L4010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L4010) · [Before (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L4010)

```diff
-             get: (HH, BH) => "proxyOf" === BH ? HH : "root" === BH ? () => HH.root().toProxy() : HH[BH],
+             get: (BB, OB) => "proxyOf" === OB ? BB : "root" === OB ? () => BB.root().toProxy() : BB[OB],
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4287` → after: `L4287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L4287) · [Before (L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L4287)

```diff
-           if (null === HH || "undefined" === typeof HH || "object" === typeof HH && !HH.toString) throw new Error(`PostCSS received ${HH} instead of CSS string`);
+           if (null === BB || "undefined" === typeof BB || "object" === typeof BB && !BB.toString) throw new Error(`PostCSS received ${BB} instead of CSS string`);
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4322` → after: `L4322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L4322) · [Before (L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L4322)

```diff
-           }, CH.source, CH.file, tH.plugin) : new zH(HH, void 0 === SH ? BH : {
+           }, JB.source, JB.file, jB.plugin) : new yB(BB, void 0 === QB ? OB : {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4325` → after: `L4325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L4325) · [Before (L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L4325)

```diff
-           }, void 0 === SH ? LH : {
+           }, void 0 === QB ? GB : {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4367` → after: `L4367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L4367) · [Before (L4367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L4367)

```diff
-           return /^\w+:\/\//.test(HH) ? HH : SH(this.map.consumer().sourceRoot || this.map.root || ".", HH)
+           return /^\w+:\/\//.test(BB) ? BB : QB(this.map.consumer().sourceRoot || this.map.root || ".", BB)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4650` → after: `L4650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L4650) · [Before (L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L4650)

```diff
-             get: (HH, BH) => "proxyOf" === BH ? HH : HH[BH] ? "each" === BH || "string" === typeof BH && BH.startsWith("walk") ? function() {
+             get: (BB, OB) => "proxyOf" === OB ? BB : BB[OB] ? "each" === OB || "string" === typeof OB && OB.startsWith("walk") ? function() {
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4661` → after: `L4661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L4661) · [Before (L4661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L4661)

```diff
-           return "number" === typeof HH ? HH : (HH.proxyOf && (HH = HH.proxyOf), this.proxyOf.nodes.indexOf(HH))
+           return "number" === typeof BB ? BB : (BB.proxyOf && (BB = BB.proxyOf), this.proxyOf.nodes.indexOf(BB))
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5025-L5029` → after: `L5025-L5029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5025-L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5025-L5029) · [Before (L5025-L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5025-L5029)

```diff
-                   case rH:
-                   case SH:
-                   case tH:
-                   case zH:
-                   case hH:
+                   case DB:
+                   case QB:
+                   case jB:
+                   case yB:
+                   case oB:
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5036-L5042` → after: `L5036-L5042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5036-L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5036-L5042) · [Before (L5036-L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5036-L5042)

```diff
-                   case CH:
-                   case EH:
-                   case YH:
-                   case uH:
-                   case MH:
-                   case QH:
-                   case GH: {
+                   case JB:
+                   case MB:
+                   case lB:
+                   case pB:
+                   case NB:
+                   case qB:
+                   case zB: {
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5047` → after: `L5047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5047) · [Before (L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5047)

```diff
-                   case XH:
+                   case PB:
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5063-L5064` → after: `L5063-L5064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5063-L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5063-L5064) · [Before (L5063-L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5063-L5064)

```diff
-                   case HH:
-                   case BH:
+                   case BB:
+                   case OB:
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5078` → after: `L5078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5078) · [Before (L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5078)

```diff
-                   case xH:
+                   case RB:
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5081` → after: `L5081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5081) · [Before (L5081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5081)

```diff
-                   case LH:
+                   case GB:
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5129` → after: `L5129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5129) · [Before (L5129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5129)

```diff
-                 SH.source.end = this.hT(HH[2]), SH.source.end.offset++, this.semicolon = !0;
+                 QB.source.end = this.pR(BB[2]), QB.source.end.offset++, this.semicolon = !0;
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5139` → after: `L5139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5139) · [Before (L5139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5139)

```diff
-                   LH && (SH.source.end = this.hT(LH[3] || LH[2]), SH.source.end.offset++)
+                   GB && (QB.source.end = this.pR(GB[3] || GB[2]), QB.source.end.offset++)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5151` → after: `L5151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5151) · [Before (L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5151)

```diff
-           SH.raws.between = this.spacesAndCommentsFromEnd(zH), zH.length ? (SH.raws.afterName = this.spacesAndCommentsFromStart(zH), this.raw(SH, "params", zH), hH && (HH = zH[zH.length - 1], SH.source.end = this.hT(HH[3] || HH[2]), SH.source.end.offset++, this.spaces = SH.raws.b … [truncated]
+           QB.raws.between = this.spacesAndCommentsFromEnd(yB), yB.length ? (QB.raws.afterName = this.spacesAndCommentsFromStart(yB), this.raw(QB, "params", yB), oB && (BB = yB[yB.length - 1], QB.source.end = this.pR(BB[3] || BB[2]), QB.source.end.offset++, this.spaces = QB.raws.b … [truncated]
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5176` → after: `L5176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5176) · [Before (L5176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5176)

```diff
-           this.init(BH, HH[2]), BH.source.end = this.hT(HH[3] || HH[2]), BH.source.end.offset++;
+           this.init(OB, BB[2]), OB.source.end = this.pR(BB[3] || BB[2]), OB.source.end.offset++;
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5191` → after: `L5191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5191) · [Before (L5191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5191)

```diff
-           for (";" === SH[0] && (this.semicolon = !0, BH.pop()), AH.source.end = this.hT(SH[3] || SH[2] || function(HH) {
+           for (";" === QB[0] && (this.semicolon = !0, OB.pop()), YB.source.end = this.pR(QB[3] || QB[2] || function(BB) {
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5199` → after: `L5199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5199) · [Before (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5199)

```diff
-           for (AH.source.start = this.hT(BH[0][2]), AH.prop = ""; BH.length;) {
+           for (YB.source.start = this.pR(OB[0][2]), YB.prop = ""; OB.length;) {
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5248` → after: `L5248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5248) · [Before (L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5248)

```diff
-           this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.hT(HH … [truncated]
+           this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.pR(BB … [truncated]
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5251` → after: `L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5251) · [Before (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5251)

```diff
-           this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.hT(this.tokenizer.positio … [truncated]
+           this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.pR(this.tokenizer.positio … [truncated]
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5270` → after: `L5270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5270) · [Before (L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5270)

```diff
-             start: this.hT(BH)
+             start: this.pR(OB)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5543` → after: `L5543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5543) · [Before (L5543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5543)

```diff
-                 if (!EH[LH] && /^[A-Z]/.test(LH)) throw new Error(`Unknown event ${LH} in ${BH.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
+                 if (!MB[GB] && /^[A-Z]/.test(GB)) throw new Error(`Unknown event ${GB} in ${OB.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5546` → after: `L5546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5546) · [Before (L5546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5546)

```diff
-                     for (let AH in BH[LH]) HH(BH, "*" === AH ? LH : LH + "-" + AH.toLowerCase(), BH[LH][AH]);
+                     for (let YB in OB[GB]) BB(OB, "*" === YB ? GB : GB + "-" + YB.toLowerCase(), OB[GB][YB]);
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5938` → after: `L5938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5938) · [Before (L5938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5938)

```diff
-       }, xH.stringify = SH, xH.parse = YH, xH.fromJSON = hH, xH.list = uH, xH.comment = HH => new CH(HH), xH.atRule = HH => new EH(HH), xH.decl = HH => new BH(HH), xH.rule = HH => new QH(HH), xH.root = HH => new WH(HH), xH.document = HH => new tH(HH), xH.CssSyntaxError = HH, xH.D … [truncated]
+       }, RB.stringify = QB, RB.parse = lB, RB.fromJSON = oB, RB.list = pB, RB.comment = BB => new JB(BB), RB.atRule = BB => new MB(BB), RB.decl = BB => new OB(BB), RB.rule = BB => new qB(BB), RB.root = BB => new ZB(BB), RB.document = BB => new jB(BB), RB.CssSyntaxError = BB, RB.D … [truncated]
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5940` → after: `L5940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5940) · [Before (L5940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5940)

```diff
-     Zr.stringify, Zr.fromJSON, Zr.plugin, Zr.parse, Zr.list, Zr.document, Zr.comment, Zr.atRule, Zr.rule, Zr.decl, Zr.root, Zr.CssSyntaxError, Zr.Declaration, Zr.JF, Zr.Processor, Zr.Document, Zr.Comment, Zr.Warning, Zr.AtRule, Zr.Result, Zr.Input, Zr.Rule, Zr.Root, Zr.Node;
+     TD.stringify, TD.fromJSON, TD.plugin, TD.parse, TD.list, TD.document, TD.comment, TD.atRule, TD.rule, TD.decl, TD.root, TD.CssSyntaxError, TD.Declaration, TD.pw, TD.Processor, TD.Document, TD.Comment, TD.Warning, TD.AtRule, TD.Result, TD.Input, TD.Rule, TD.Root, TD.Node;
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5949` → after: `L5949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5949) · [Before (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5949)

```diff
-         BH.push(`${rH}: ${AH};`)
+         OB.push(`${DB}: ${YB};`)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L5955` → after: `L5955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L5955) · [Before (L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L5955)

```diff
-       ir = HH => Jr.test(HH) ? HH : HH.replace(sr, ((HH, BH) => BH ? BH.toUpperCase() : "")),
+       sD = BB => vD.test(BB) ? BB : BB.replace(HD, ((BB, OB) => OB ? OB.toUpperCase() : "")),
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6015` → after: `L6015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L6015) · [Before (L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L6015)

```diff
-         if ((BH === dr.Element || BH === dr.DocumentType) && this.childNodes.some((HH => HH.RRNodeType === BH))) throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${BH===dr.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
+         if ((OB === bD.Element || OB === bD.DocumentType) && this.childNodes.some((BB => BB.RRNodeType === OB))) throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${OB===bD.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6021` → after: `L6021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L6021) · [Before (L6021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L6021)

```diff
-         if ((LH === dr.Element || LH === dr.DocumentType) && this.childNodes.some((HH => HH.RRNodeType === LH))) throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${LH===dr.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
+         if ((GB === bD.Element || GB === bD.DocumentType) && this.childNodes.some((BB => BB.RRNodeType === GB))) throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${GB===bD.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6114` → after: `L6114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L6114) · [Before (L6114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L6114)

```diff
-           AH ? HH[SH] = AH : delete HH[SH], "important" === rH && (HH[SH] += " !important"), this.attributes.style = ar(HH)
+           YB ? BB[QB] = YB : delete BB[QB], "important" === DB && (BB[QB] += " !important"), this.attributes.style = CD(BB)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6152-L6153` → after: `L6152-L6153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6152-L6153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L6152-L6153) · [Before (L6152-L6153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L6152-L6153)

```diff
-         for (const BH in this.attributes) HH += `${BH}="${this.attributes[BH]}" `;
-         return `${this.tagName} ${HH}`
+         for (const OB in this.attributes) BB += `${OB}="${this.attributes[OB]}" `;
+         return `${this.tagName} ${BB}`
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6260` → after: `L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L6260) · [Before (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L6260)

```diff
-       return BH === LH || (BH.parentNode && BH.parentNode.removeChild(BH), BH.previousSibling = LH.previousSibling, LH.previousSibling = BH, BH.nextSibling = LH, BH.previousSibling ? BH.previousSibling.nextSibling = BH : HH.firstChild = BH, BH.parentElement = HH, BH.parentNode =  … [truncated]
+       return OB === GB || (OB.parentNode && OB.parentNode.removeChild(OB), OB.previousSibling = GB.previousSibling, GB.previousSibling = OB, OB.nextSibling = GB, OB.previousSibling ? OB.previousSibling.nextSibling = OB : BB.firstChild = OB, OB.parentElement = BB, OB.parentNode =  … [truncated]
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6503` → after: `L6503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L6503) · [Before (L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L6503)

```diff
-         for (BH && (rH = LH.mirror.yAH(AH.getId(BH))); EH <= XH; ++EH) {
+         for (OB && (DB = GB.mirror.yDB(YB.getId(OB))); MB <= PB; ++MB) {
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6529` → after: `L6529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L6529) · [Before (L6529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L6529)

```diff
-       if (AH > -1 && (SH = BH.yAH(AH)), null !== SH && PS(SH, HH)) return SH;
+       if (YB > -1 && (QB = OB.yDB(YB)), null !== QB && AQ(QB, BB)) return QB;
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6726` → after: `L6726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L6726) · [Before (L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L6726)

```diff
-       yAH(HH) {
+       yDB(BB) {
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6750` → after: `L6750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L6750) · [Before (L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L6750)

```diff
-         const LH = this.yAH(HH);
+         const GB = this.yDB(BB);
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6849` → after: `L6849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L6849) · [Before (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L6849)

```diff
-       const AH = `${HH}.${String(LH)}`;
+       const YB = `${BB}.${String(GB)}`;
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6944` → after: `L6944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L6944) · [Before (L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L6944)

```diff
-       yAH: () => (console.error(yS), null),
+       yDB: () => (console.error(tQ), null),
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L6973` → after: `L6973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L6973) · [Before (L6973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L6973)

```diff
-       return rH.Object.defineProperty(HH, BH, AH ? LH : {
+       return DB.Object.defineProperty(BB, OB, YB ? GB : {
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7001` → after: `L7001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L7001) · [Before (L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L7001)

```diff
-       return HH.nodeType === HH.ELEMENT_NODE ? HH : iS.parentElement(HH)
+       return BB.nodeType === BB.ELEMENT_NODE ? BB : sQ.parentElement(BB)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7118` → after: `L7118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L7118) · [Before (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L7118)

```diff
-       return LH ? 1 === BH.length ? LH : vh(LH.cssRules, BH.slice(1)) : null
+       return GB ? 1 === OB.length ? GB : Ao(GB.cssRules, OB.slice(1)) : null
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7200` → after: `L7200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L7200) · [Before (L7200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L7200)

```diff
-     const qh = (HH, BH) => `${HH}@${BH}`;
+     const Xo = (BB, OB) => `${BB}@${OB}`;
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7384` → after: `L7384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L7384) · [Before (L7384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L7384)

```diff
-                     BH !== AH.style.getPropertyValue(HH) || rH !== AH.style.getPropertyPriority(HH) ? hH.styleDiff[HH] = "" === rH ? BH : [BH, rH] : hH._unchangedStyles[HH] = [BH, rH]
+                     OB !== YB.style.getPropertyValue(BB) || DB !== YB.style.getPropertyPriority(BB) ? oB.styleDiff[BB] = "" === DB ? OB : [OB, DB] : oB._unchangedStyles[BB] = [OB, DB]
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7798` → after: `L7798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L7798) · [Before (L7798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L7798)

```diff
-             "radio" === QH && WH && uH && LH.querySelectorAll(`input[type="radio"][name="${WH}"]`).forEach((HH => {
+             "radio" === qB && ZB && pB && GB.querySelectorAll(`input[type="radio"][name="${ZB}"]`).forEach((BB => {
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7914` → after: `L7914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR7914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L7914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L7914) · [Before (L7914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L7914)

```diff
-           const AH = `${HH} { ${BH} }`;
+           const YB = `${BB} { ${OB} }`;
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8077` → after: `L8077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L8077) · [Before (L8077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L8077)

```diff
-             fontSource: "string" === typeof BH ? BH : JSON.stringify(Array.from(new Uint8Array(BH)))
+             fontSource: "string" === typeof OB ? OB : JSON.stringify(Array.from(new Uint8Array(OB)))
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8125` → after: `L8125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L8125) · [Before (L8125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L8125)

```diff
-               rW: tH
+               JZ: jB
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8145` → after: `L8145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L8145) · [Before (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L8145)

```diff
-                 console.warn(`Custom element callback failed for ${BH}`)
+                 console.warn(`Custom element callback failed for ${OB}`)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8301` → after: `L8301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L8301) · [Before (L8301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L8301)

```diff
-                 return BH.data.rW.forEach((BH => {
+                 return OB.data.JZ.forEach((OB => {
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L8869` → after: `L8869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L8869) · [Before (L8869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L8869)

```diff
-         } : void 0 !== GH ? GH : {
+         } : void 0 !== zB ? zB : {
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L9566` → after: `L9566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L9566) · [Before (L9566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L9566)

```diff
-                     UH = null != WH ? WH : tH,
+                     SB = null != ZB ? ZB : jB,
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L9577` → after: `L9577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L9577) · [Before (L9577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L9577)

```diff
-                       oH = null != WH ? WH : tH;
+                       KB = null != ZB ? ZB : jB;
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L9631` → after: `L9631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR9631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L9631) · [Before (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L9631)

```diff
-               var SH = "object" == typeof AH ? AH : {
+               var QB = "object" == typeof YB ? YB : {
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L10058` → after: `L10058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L10058) · [Before (L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L10058)

```diff
-           this.warn(`Failed to replay media interactions: ${zH.message||zH}`)
+           this.warn(`Failed to replay media interactions: ${yB.message||yB}`)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L10558` → after: `L10558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L10558) · [Before (L10558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L10558)

```diff
-         const AH = (rH = this.config.blockClass, [`.${rH} { background: currentColor }`, "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
+         const YB = (DB = this.config.blockClass, [`.${DB} { background: currentColor }`, "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L10698` → after: `L10698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L10698) · [Before (L10698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L10698)

```diff
-               this.warn(`Exception in mutation ${hH.message||hH}`, SH)
+               this.warn(`Exception in mutation ${oB.message||oB}`, QB)
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L10728` → after: `L10728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L10728) · [Before (L10728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L10728)

```diff
-               LH = this.mirror.yAH(SH.id);
+               GB = this.mirror.yDB(QB.id);
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L10769` → after: `L10769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L10769) · [Before (L10769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L10769)

```diff
-               const HH = this.virtualDom.mirror.yAH(SH.id);
+               const BB = this.virtualDom.mirror.yDB(QB.id);
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L10785` → after: `L10785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L10785) · [Before (L10785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L10785)

```diff
-               const HH = this.virtualDom.mirror.yAH(SH.id);
+               const BB = this.virtualDom.mirror.yDB(QB.id);
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L10793` → after: `L10793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L10793) · [Before (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L10793)

```diff
-             const BH = this.usingVirtualDom ? this.virtualDom.mirror.yAH(SH.id) : this.mirror.yAH(SH.id);
+             const OB = this.usingVirtualDom ? this.virtualDom.mirror.yDB(QB.id) : this.mirror.yDB(QB.id);
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L10808` → after: `L10808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L10808) · [Before (L10808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L10808)

```diff
-             this.usingVirtualDom ? SH.styleId ? this.constructedStyleMutations.push(SH) : SH.id && (null == (AH = this.virtualDom.mirror.yAH(SH.id)) || AH.rules.push(SH)) : this.applyStyleSheetMutation(SH);
+             this.usingVirtualDom ? QB.styleId ? this.constructedStyleMutations.push(QB) : QB.id && (null == (YB = this.virtualDom.mirror.yDB(QB.id)) || YB.rules.push(QB)) : this.applyStyleSheetMutation(QB);
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L10813` → after: `L10813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L10813) · [Before (L10813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L10813)

```diff
-               const BH = this.virtualDom.mirror.yAH(SH.id);
+               const OB = this.virtualDom.mirror.yDB(QB.id);
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L10820` → after: `L10820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L10820) · [Before (L10820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L10820)

```diff
-               const BH = this.mirror.yAH(SH.id);
+               const OB = this.mirror.yDB(QB.id);
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L10861` → after: `L10861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR10861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L10861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/295.js#L10861) · [Before (L10861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/295.js#L10861)

```diff
-         HH.removes = HH.removes.filter((BH => !!LH.yAH(BH.id) || (this.warnNodeNotFound(HH, BH.id), !1))), HH.removes.forEach((BH => {
+         BB.removes = BB.removes.filter((OB => !!GB.yDB(OB.id) || (this.warnNodeNotFound(BB, OB.id), !1))), BB.removes.forEach((OB => {
```
