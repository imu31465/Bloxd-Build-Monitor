# Changed — Bundle Modifications Report (Part 021 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `21 / 82` (**291** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 020](part-020.md) · [Part 022 →](part-022.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/297.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/297.js` (78 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3)

#### 10. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L202-L203` → after: `L1803-L1805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1803-L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L1803-L1805) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L202-L203)

```diff
-     function Te() {
-       return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())
+     function AW(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       WW.push("world0"), WW.push("world1"), WW.push("world2"), WW.push("world3"), iW && (WW.push("previousWorld0"), WW.push("previousWorld1"), WW.push("previousWorld2"), WW.push("previousWorld3"))
```

#### 11. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L206-L208` → after: `L1808-L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1808-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L1808-L1810) · [Before (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L206-L208)

```diff
-     function pe() {
-       const ee = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
-       return "object" === typeof ee && void 0 !== ee.id
+     function bW(WW, iW) {
+       const OW = WW.morphTargetManager;
+       WW && OW && iW.setFloatArray("morphTargetInfluences", OW.influences)
```

#### 12. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L211-L212` → after: `L1813-L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1813-L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L1813-L1814) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L211-L212)

```diff
-     function Xe() {
-       return "object" === typeof navigator && "ReactNative" === navigator.product
+     function jW(WW, iW) {
+       iW.bindToEffect(WW, "Scene")
```

#### 13. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L215-L217` → after: `L1817-L1845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1817-L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L1817-L1845) · [Before (L215-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L215-L217)

```diff
-     function ze() {
-       const ee = fe();
-       return ee.indexOf("MSIE ") >= 0 || ee.indexOf("Trident/") >= 0
+     function UW(WW, iW, OW, mW) {
+       let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         PW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         cW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         wW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         tW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         ZW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+         xW = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
+       if (WW.texturesEnabled && EW && LW.e.ReflectionTextureEnabled) {
+         if (OW.tWW("reflectionMatrix", EW.getReflectionTextureMatrix()), OW.updateFloat2("vReflectionInfos", EW.level * WW.iblIntensity, xW), cW && EW.boundingBoxSize) {
+           const WW = EW;
+           OW.updateVector3("vReflectionPosition", WW.boundingBoxPosition), OW.updateVector3("vReflectionSize", WW.boundingBoxSize)
+         }
+         if (NW) {
+           const WW = EW.getSize().width;
+ ... (13 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L220-L224` → after: `L1848-L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1848-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L1848-L1854) · [Before (L220-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L220-L224)

```diff
-     function Be() {
-       try {
-         return "object" === typeof indexedDB
-       } catch (ee) {
-         return !1
+     function kW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+         EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       if (mW && LW.e.ReflectionTextureEnabled) {
+         iW.LODBASEDMICROSFURACE ? OW.setTexture("reflectionSampler", mW) : (OW.setTexture("reflectionSampler", mW._lodTextureMid || mW), OW.setTexture("reflectionSamplerLow", mW._lodTextureLow || mW), OW.setTexture("reflectionSamplerHigh", mW._lodTextureHigh || mW)), iW.USEIRRADI … [truncated]
+         const NW = WW.iblCdfGenerator;
+         EW && NW && OW.setTexture("icdfSampler", NW.getIcdfTexture())
```

#### 15. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L228-L245` → after: `L1858-L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1858-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L1858-L1859) · [Before (L228-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L228-L245)

```diff
-     function Ee() {
-       return new Promise(((ee, ie) => {
-         try {
-           let He = !0;
-           const ye = "validate-browser-context-for-indexeddb-analytics-module",
-             be = self.indexedDB.open(ye);
-           be.onsuccess = () => {
-             be.result.close(), He || self.indexedDB.deleteDatabase(ye), ee(!0)
-           }, be.onupgradeneeded = () => {
-             He = !1
-           }, be.onerror = () => {
-             var ee;
-             ie((null === (ee = be.error) || void 0 === ee ? void 0 : ee.message) || "")
-           }
-         } catch (He) {
-           ie(He)
- ... (2 more removed lines; see GitHub link above)
+     function sW(WW, iW, OW) {
+       iW._needUVs = !0, iW[OW] = !0, WW.optimizeUVAllocation && WW.getTextureMatrix().isIdentityAs3x2() ? (iW[OW + "DIRECTUV"] = WW.coordinatesIndex + 1, iW["MAINUV" + (WW.coordinatesIndex + 1)] = !0) : iW[OW + "DIRECTUV"] = 0
```

#### 16. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L248-L272` → after: `L1862-L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1862-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L1862-L1864) · [Before (L248-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L248-L272)

```diff
-     function ge() {
-       return !("undefined" === typeof navigator || !navigator.cookieEnabled)
-     }
-     class Oe extends Error {
-       constructor(ee, ie, He) {
-         super(ie), this.code = ee, this.customData = He, this.name = "FirebaseError", Object.setPrototypeOf(this, Oe.prototype), Error.captureStackTrace && Error.captureStackTrace(this, de.prototype.create)
-       }
-     }
-     class de {
-       constructor(ee, ie, He) {
-         this.service = ee, this.serviceName = ie, this.errors = He
-       }
-       create(ee) {
-         const ie = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
-           He = `${this.service}/${ee}`,
-           ye = this.errors[ee],
- ... (9 more removed lines; see GitHub link above)
+     function MW(WW, iW, OW) {
+       const mW = WW.getTextureMatrix();
+       iW.tWW(OW + "Matrix", mW)
```

#### 17. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L276-L279` → after: `L1867-L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1867-L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L1867-L1868) · [Before (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L276-L279)

```diff
-     function te(ee) {
-       for (const ie in ee)
-         if (Object.prototype.hasOwnProperty.call(ee, ie)) return !1;
-       return !0
+     function KW(WW, iW, OW) {
+       OW.BAKED_VERTEX_ANIMATION_TEXTURE && OW.INSTANCES && WW.push("bakedVertexAnimationSettingsInstanced")
```

#### 18. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L282-L296` → after: `L1871-L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1871-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L1871-L1882) · [Before (L282-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L282-L296)

```diff
-     function Ze(ee, ie) {
-       if (ee === ie) return !0;
-       const He = Object.keys(ee),
-         ye = Object.keys(ie);
-       for (const be of He) {
-         if (!ye.includes(be)) return !1;
-         const He = ee[be],
-           Me = ie[be];
-         if (we(He) && we(Me)) {
-           if (!Ze(He, Me)) return !1
-         } else if (He !== Me) return !1
-       }
-       for (const be of ye)
-         if (!He.includes(be)) return !1;
-       return !0
+     function SW(WW, iW, OW) {
+       var mW;
+       if (iW && WW && (WW.computeBonesUsingShaders && iW._bonesComputationForcedToCPU && (WW.computeBonesUsingShaders = !1), WW.useBones && WW.computeBonesUsingShaders && WW.skeleton)) {
+         const EW = WW.skeleton;
+         if (EW.isUsingTextureForMatrices && iW.getUniformIndex("boneTextureInfo") > -1) {
+           const OW = EW.getTransformMatrixTexture(WW);
+           iW.setTexture("boneSampler", OW), iW.setFloat2("boneTextureInfo", EW._textureWidth, EW._textureHeight)
+         } else {
+           const NW = EW.getTransformMatrices(WW);
+           NW && (iW.setMatrices("mBones", NW), OW && WW.bD().prePassRenderer && WW.bD().prePassRenderer.getIndex(2) && (OW.previousBones[WW.uniqueId] || (OW.previousBones[WW.uniqueId] = NW.slice()), iW.setMatrices("mPreviousBones", OW.previousBones[WW.uniqueId]), mW = NW, OW.prev … [truncated]
+         }
+       }
```

#### 19. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L299-L300` → after: `L1885-L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1885-L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L1885-L1887) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L299-L300)

```diff
-     function we(ee) {
-       return null !== ee && "object" === typeof ee
+     function YW(WW, iW, OW, mW, EW) {
+       let NW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+       WW._bindLight(iW, OW, mW, EW, NW)
```

#### 20. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L303-L308` → after: `L1892-L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1892-L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L1892-L1897) · [Before (L303-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L303-L308)

```diff
-     function De(ee) {
-       const ie = [];
-       for (const [He, ye] of Object.entries(ee)) Array.isArray(ye) ? ye.forEach((ee => {
-         ie.push(encodeURIComponent(He) + "=" + encodeURIComponent(ee))
-       })) : ie.push(encodeURIComponent(He) + "=" + encodeURIComponent(ye));
-       return ie.length ? "&" + ie.join("&") : ""
+     function JW(WW, iW, OW, mW) {
+       let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
+       const NW = Math.min(iW.lightSources.length, EW);
+       for (let PW = 0; PW < NW; PW++) {
+         YW(iW.lightSources[PW], PW, WW, OW, "boolean" === typeof mW ? mW : mW.SPECULARTERM, iW.receiveShadows)
+       }
```

#### 21. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L311-L318` → after: `L1900-L1901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1900-L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L1900-L1901) · [Before (L311-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L311-L318)

```diff
-     function Pe(ee) {
-       const ie = {};
-       return ee.replace(/^\?/, "").split("&").forEach((ee => {
-         if (ee) {
-           const [He, ye] = ee.split("=");
-           ie[decodeURIComponent(He)] = decodeURIComponent(ye)
-         }
-       })), ie
+     function hW(WW, iW, OW, mW) {
+       OW.NUM_BONE_INFLUENCERS > 0 && (mW.addCPUSkinningFallback(0, iW), WW.push("matricesIndices"), WW.push("matricesWeights"), OW.NUM_BONE_INFLUENCERS > 4 && (WW.push("matricesIndicesExtra"), WW.push("matricesWeightsExtra")))
```

#### 22. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L321-L325` → after: `L1904-L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1904-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L1904-L1905) · [Before (L321-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L321-L325)

```diff
-     function Ae(ee) {
-       const ie = ee.indexOf("?");
-       if (!ie) return "";
-       const He = ee.indexOf("#", ie);
-       return ee.substring(ie, He > 0 ? He : void 0)
+     function HW(WW, iW) {
+       (iW.INSTANCES || iW.THIN_INSTANCES) && AW(WW, !!iW.PREPASS_VELOCITY), iW.INSTANCESCOLOR && WW.push("instanceColor")
```

#### 23. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L329-L330` → after: `L1909-L1913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1909-L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L1909-L1913) · [Before (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L329-L330)

```diff
-       const He = new Ve(ee, ie);
-       return He.subscribe.bind(He)
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
+         mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         EW = 0;
+       for (let NW = 0; NW < OW && WW["LIGHT" + NW]; NW++) NW > 0 && (EW = mW + NW, iW.addFallback(EW, "LIGHT" + NW)), WW.SHADOWS || (WW["SHADOW" + NW] && iW.addFallback(mW, "SHADOW" + NW), WW["SHADOWPCF" + NW] && iW.addFallback(mW, "SHADOWPCF" + NW), WW["SHADOWPCSS" + NW] && iW.a … [truncated]
+       return EW
```

#### 24. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L332-L394` → after: `L1915-L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1915-L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L1915-L1927) · [Before (L332-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L332-L394)

```diff
-     class Ve {
-       constructor(ee, ie) {
-         this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = ie, this.task.then((() => {
-           ee(this)
-         })).catch((ee => {
-           this.error(ee)
-         }))
-       }
-       next(ee) {
-         this.forEachObserver((ie => {
-           ie.next(ee)
-         }))
-       }
-       error(ee) {
-         this.forEachObserver((ie => {
-           ie.error(ee)
- ... (47 more removed lines; see GitHub link above)
+ 
+     function uW(WW, iW, OW, mW, EW, NW, PW) {
+       let LW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         cW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         wW = arguments.length > 9 ? arguments[9] : void 0,
+         tW = arguments.length > 10 ? arguments[10] : void 0;
+       if (PW._areMiscDirty) {
+         PW.LOGARITHMICDEPTH = OW, PW.POINTSIZE = mW, PW.FOG = EW && function(WW, iW) {
+           return iW.fogEnabled && WW.applyFog && 0 !== iW.fogMode
+         }(WW, iW), PW.NONUNIFORMSCALING = WW.nonUniformScaling, PW.ALPHATEST = NW, PW.DECAL_AFTER_DETAIL = LW, PW.USE_VERTEX_PULLING = cW, PW.RIGHT_HANDED = iW.useRightHandedSystem;
+         const ZW = cW ? wW?.geometry?.getIndexBuffer() : null,
+           xW = !!wW && wW.isUnIndexed;
+         PW.VERTEX_PULLING_USE_INDEX_BUFFER = !!ZW && !xW, PW.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!ZW || xW) && ZW.is32Bits, PW.VERTEXOUTPUT_INVARIANT = !!tW
```

#### 25. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L398-L402` → after: `L1931-L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1931-L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L1931-L1939) · [Before (L398-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L398-L402)

```diff
-     function ae() {}
-     const ce = 1e3,
-       xe = 2,
-       Le = 144e5,
-       Ce = .5;
+     function oW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (!WW.lightsEnabled || mW) return !0;
+       const EW = iW.lightSources,
+         NW = Math.min(EW.length, OW);
+       for (let PW = 0; PW < NW; PW++)
+         if (!EW[PW].areLightTexturesReady()) return !1;
+       return !0
+     }
```

#### 26. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L404-L408` → after: `L1941-L1973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1941-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L1941-L1973) · [Before (L404-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L404-L408)

```diff
-     function ve(ee) {
-       let ie = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xe;
-       const He = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ce) * Math.pow(ie, ee),
-         ye = Math.round(Ce * He * (Math.random() - .5) * 2);
-       return Math.min(Le, He + ye)
+     function dW(WW, iW, OW, EW) {
+       let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
+         PW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (!OW._areLightsDirty) return OW._needNormals;
+       const LW = NW;
+       NW = function(WW, iW) {
+         const OW = WW.VA().getCaps().maxUniformBuffersPerShaderStage;
+         if (null == OW) return iW;
+         const mW = Math.max(OW - yW, 1);
+         return Math.min(iW, mW)
+       }(WW, NW);
+       let cW = 0;
+       const wW = {
+         needNormals: OW._needNormals,
+         needRebuild: !1,
+         lightmapMode: !1,
+ ... (17 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L411-L412` → after: `L1976-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1976-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L1976-L2014) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L411-L412)

```diff
-     function ue(ee) {
-       return ee && ee._delegate ? ee._delegate : ee
+     function eW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
+         NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (iW && LW.e.ReflectionTextureEnabled) {
+         if (!iW.isReadyOrNotBlocking()) return !1;
+         OW._needNormals = !0, OW.REFLECTION = !0, OW.GAMMAREFLECTION = iW.gammaSpace, OW.RGBDREFLECTION = iW.isRGBD, OW.LODINREFLECTIONALPHA = iW.lodLevelInAlpha, OW.LINEARSPECULARREFLECTION = iW.linearSpecularLOD, OW.USEIRRADIANCEMAP = !1, OW.LODBASEDMICROSFURACE = WW.VA().getCa … [truncated]
+         const PW = WW.VA();
+         switch (mW && EW > 0 ? (OW.NUM_SAMPLES = "" + EW, PW._features.needTypeSuffixInShaderConstants && (OW.NUM_SAMPLES = OW.NUM_SAMPLES + "u"), OW.REALTIME_FILTERING = !0, WW.iblCdfGenerator && (OW.IBL_CDF_FILTERING = !0)) : OW.REALTIME_FILTERING = !1, OW.INVERTCUBICMAP = 6 == … [truncated]
+           case 0:
+             OW.REFLECTIONMAP_EXPLICIT = !0;
+             break;
+           case 2:
+             OW.REFLECTIONMAP_PLANAR = !0;
+             break;
+           case 4:
+ ... (23 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L458-L468` → after: `L2017-L2033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2017-L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2017-L2033) · [Before (L458-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L458-L468)

```diff
-     function fe(ee) {
-       return ee !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Ue || (Ue = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(ee) ? function() {
-         for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
-         return ee.apply(Xe(this), He), pe(Fe.get(this))
-       } : function() {
-         for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
-         return pe(ee.apply(Xe(this), He))
-       } : function(ie) {
-         for (var He = arguments.length, ye = new Array(He > 1 ? He - 1 : 0), be = 1; be < He; be++) ye[be - 1] = arguments[be];
-         const Me = ee.call(Xe(this), ie, ...ye);
-         return oe.set(Me, ie.sort ? ie.sort() : [ie]), pe(Me)
+     function vW(WW, iW, OW, mW, EW, PW, LW) {
+       switch (LW.needNormals = !0, void 0 === EW["LIGHT" + mW] && (LW.needRebuild = !0), EW["LIGHT" + mW] = !0, EW["SPOTLIGHT" + mW] = !1, EW["HEMILIGHT" + mW] = !1, EW["POINTLIGHT" + mW] = !1, EW["DIRLIGHT" + mW] = !1, EW["AREALIGHT" + mW] = !1, EW["CLUSTLIGHT" + mW] = !1, OW.pr … [truncated]
+         case NW.e.FALLOFF_GLTF:
+           EW["LIGHT_FALLOFF_GLTF" + mW] = !0;
+           break;
+         case NW.e.FALLOFF_PHYSICAL:
+           EW["LIGHT_FALLOFF_PHYSICAL" + mW] = !0;
+           break;
+         case NW.e.FALLOFF_STANDARD:
+           EW["LIGHT_FALLOFF_STANDARD" + mW] = !0
+       }
+       if (PW && !OW.specular.equalsFloats(0, 0, 0) && (LW.specularEnabled = !0), EW["SHADOW" + mW] = !1, EW["SHADOWCSM" + mW] = !1, EW["SHADOWCSMDEBUG" + mW] = !1, EW["SHADOWCSMNUM_CASCADES" + mW] = !1, EW["SHADOWCSMUSESHADOWMAXZ" + mW] = !1, EW["SHADOWCSMNOBLEND" + mW] = !1, EW[ … [truncated]
+         const iW = OW.getShadowGenerator(WW.activeCamera) ?? OW.getShadowGenerator();
+         if (iW) {
+           const WW = iW.getShadowMap();
+           WW && WW.renderList && WW.renderList.length > 0 && (LW.shadowEnabled = !0, iW.prepareDefines(EW, mW))
+ ... (1 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L472-L489` → after: `L2038-L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2038-L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2038-L2052) · [Before (L472-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L472-L489)

```diff
-     function Te(ee) {
-       return "function" === typeof ee ? fe(ee) : (ee instanceof IDBTransaction && function(ee) {
-         if (Je.has(ee)) return;
-         const ie = new Promise(((ie, He) => {
-           const ye = () => {
-               ee.removeEventListener("complete", be), ee.removeEventListener("error", Me), ee.removeEventListener("abort", Me)
-             },
-             be = () => {
-               ie(), ye()
-             },
-             Me = () => {
-               He(ee.error || new DOMException("AbortError", "AbortError")), ye()
-             };
-           ee.addEventListener("complete", be), ee.addEventListener("error", Me), ee.addEventListener("abort", Me)
-         }));
-         Je.set(ee, ie)
- ... (2 more removed lines; see GitHub link above)
+     function gW(WW, iW, OW, mW, EW) {
+       let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+         LW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         cW = function(WW, iW) {
+           let OW = !1;
+           if (WW.activeCamera) {
+             const mW = iW.CAMERA_ORTHOGRAPHIC ? 1 : 0,
+               EW = iW.CAMERA_PERSPECTIVE ? 1 : 0,
+               NW = 1 === WW.activeCamera.mode ? 1 : 0,
+               PW = 0 === WW.activeCamera.mode ? 1 : 0;
+             (mW ^ NW || EW ^ PW) && (iW.CAMERA_ORTHOGRAPHIC = 1 === NW, iW.CAMERA_PERSPECTIVE = 1 === PW, OW = !0)
+           }
+           return OW
+         }(WW, mW);
+       !1 !== NW && (cW = (0, PW.j)(OW, WW, mW)), mW.DEPTHPREPASS !== !iW.getColorWrite() && (mW.DEPTHPREPASS = !mW.DEPTHPREPASS, cW = !0), mW.INSTANCES !== EW && (mW.INSTANCES = EW, cW = !0), mW.THIN_INSTANCES !== LW && (mW.THIN_INSTANCES = LW, cW = !0), cW && mW.markAsUnprocesse … [truncated]
```

#### 30. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L492-L512` → after: `L2059-L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2059-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2059-L2103) · [Before (L492-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L492-L512)

```diff
-     function pe(ee) {
-       if (ee instanceof IDBRequest) return function(ee) {
-         const ie = new Promise(((ie, He) => {
-           const ye = () => {
-               ee.removeEventListener("success", be), ee.removeEventListener("error", Me)
-             },
-             be = () => {
-               ie(pe(ee.result)), ye()
-             },
-             Me = () => {
-               He(ee.error), ye()
-             };
-           ee.addEventListener("success", be), ee.addEventListener("error", Me)
-         }));
-         return ie.then((ie => {
-           ie instanceof IDBCursor && Fe.set(ie, ee)
- ... (5 more removed lines; see GitHub link above)
+     function CW(WW, iW, OW, EW) {
+       let NW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         PW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+         LW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
+       if (!iW._areAttributesDirty && iW._needNormals === iW._normals && iW._needUVs === iW._uvs) return !1;
+       iW._normals = iW._needNormals, iW._uvs = iW._needUVs, iW.NORMAL = iW._needNormals && WW.isVerticesDataPresent("normal"), iW._needNormals && WW.isVerticesDataPresent("tangent") && (iW.TANGENT = !0);
+       for (let mW = 1; mW <= 6; ++mW) iW["UV" + mW] = !!iW._needUVs && WW.isVerticesDataPresent(`uv${1===mW?"":mW}`);
+       if (OW) {
+         const OW = WW.useVertexColors && WW.isVerticesDataPresent("color");
+         iW.VERTEXCOLOR = OW, iW.VERTEXALPHA = WW.hasVertexAlpha && OW && PW
+       }
+       return WW.isVerticesDataPresent("instanceColor") && (WW.QEW || WW.hasThinInstances) && (iW.INSTANCESCOLOR = !0), EW && function(WW, iW) {
+         if (WW.useBones && WW.computeBonesUsingShaders && WW.skeleton) {
+           iW.NUM_BONE_INFLUENCERS = WW.numBoneInfluencers;
+           const OW = void 0 !== iW.BONETEXTURE;
+           if (WW.skeleton.isUsingTextureForMatrices && OW) iW.BONETEXTURE = !0;
+ ... (29 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L520-L553` → after: `L2107-L2109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2107-L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2107-L2109) · [Before (L520-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L520-L553)

```diff
-       if (!(ee instanceof IDBDatabase) || ie in ee || "string" !== typeof ie) return;
-       if (Ee.get(ie)) return Ee.get(ie);
-       const He = ie.replace(/FromIndex$/, ""),
-         ye = ie !== He,
-         be = Be.includes(He);
-       if (!(He in (ye ? IDBIndex : IDBObjectStore).prototype) || !be && !ze.includes(He)) return;
-       const Me = async function(ee) {
-         const ie = this.transaction(ee, be ? "readwrite" : "readonly");
-         let Me = ie.store;
-         for (var Ke = arguments.length, Ue = new Array(Ke > 1 ? Ke - 1 : 0), Fe = 1; Fe < Ke; Fe++) Ue[Fe - 1] = arguments[Fe];
-         return ye && (Me = Me.index(Ue.shift())), (await Promise.all([Me[He](...Ue), be && ie.done]))[0]
-       };
-       return Ee.set(ie, Me), Me
-     }
-     qe = (ee => ({
-       ...ee,
- ... (18 more removed lines; see GitHub link above)
+       if (WW.activeCamera) {
+         const OW = iW.MULTIVIEW;
+         iW.MULTIVIEW = null !== WW.activeCamera.outputRenderTarget && WW.activeCamera.outputRenderTarget.getViewCount() > 1, iW.MULTIVIEW != OW && iW.markAsUnprocessed()
```

#### 32. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L615-L620` → after: `L2113-L2116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2113-L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2113-L2116) · [Before (L615-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L615-L620)

```diff
-     function Hi(ee, ie) {
-       try {
-         ee.container.uL(ie)
-       } catch (He) {
-         te.debug(`Component ${ie.name} failed to register with FirebaseApp ${ee.name}`, He)
-       }
+     function BW(WW, iW, OW) {
+       const mW = iW.ORDER_INDEPENDENT_TRANSPARENCY,
+         EW = iW.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
+       iW.ORDER_INDEPENDENT_TRANSPARENCY = WW.useOrderIndependentTransparency && OW, iW.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !WW.VA().getCaps().textureFloatLinearFiltering, mW === iW.ORDER_INDEPENDENT_TRANSPARENCY && EW === iW.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || iW.markAsU … [truncated]
```

#### 33. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L623-L624` → after: `L2119-L2180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2119-L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2119-L2180) · [Before (L623-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L623-L624)

```diff
-     function yi(ee, ie) {
-       ee.container.addOrOverwriteComponent(ie)
+     function qW(WW, iW, OW) {
+       const mW = iW.PREPASS;
+       if (!iW._arePrePassDirty) return;
+       const EW = [{
+         type: 1,
+         define: "PREPASS_POSITION",
+         index: "PREPASS_POSITION_INDEX"
+       }, {
+         type: 9,
+         define: "PREPASS_LOCAL_POSITION",
+         index: "PREPASS_LOCAL_POSITION_INDEX"
+       }, {
+         type: 2,
+         define: "PREPASS_VELOCITY",
+         index: "PREPASS_VELOCITY_INDEX"
+       }, {
+ ... (46 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L627-L632` → after: `L2183-L2190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2183-L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2183-L2190) · [Before (L627-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L627-L632)

```diff
-     function bi(ee) {
-       const ie = ee.name;
-       if (ii.has(ie)) return te.debug(`There were multiple attempts to register component ${ie}.`), !1;
-       ii.set(ie, ee);
-       for (const He of ei.values()) Hi(He, ee);
-       return !0
+     function RW(WW, iW, OW, mW) {
+       let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         PW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         LW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         cW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         wW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
+       EW && EW.push("Light" + WW), NW || (iW.push("vLightData" + WW, "vLightDiffuse" + WW, "vLightSpecular" + WW, "vLightDirection" + WW, "vLightWidth" + WW, "vLightHeight" + WW, "vLightFalloff" + WW, "vLightGround" + WW, "vSliceData" + WW, "vSliceRanges" + WW, "lightMatrix" + WW … [truncated]
```

#### 35. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L635-L639` → after: `L2193-L2196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2193-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2193-L2196) · [Before (L635-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L635-L639)

```diff
-     function Mi(ee, ie) {
-       const He = ee.container.getProvider("heartbeat").getImmediate({
-         optional: !0
-       });
-       return He && He.triggerHeartbeat(), ee.container.getProvider(ie)
+     function GW(WW, iW, OW) {
+       const mW = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
+       OW && mW.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSpheri … [truncated]
+       iW.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
```

#### 36. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L642-L644` → after: `L2199-L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2199-L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2199-L2207) · [Before (L642-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L642-L644)

```diff
-     function Ki(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : re;
-       Mi(ee, ie).clearInstance(He)
+     function IW(WW, iW, OW) {
+       let mW, EW, NW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
+         PW = null;
+       if (WW.uniformsNames) {
+         const LW = WW;
+         mW = LW.uniformsNames, EW = LW.uniformBuffersNames, iW = LW.samplers, OW = LW.defines, NW = LW.maxSimultaneousLights || 0, PW = LW.shaderLanguage ?? null
+       } else mW = WW, iW || (iW = []);
+       for (let LW = 0; LW < NW && OW["LIGHT" + LW]; LW++) RW(LW, mW, iW, OW["PROJECTEDLIGHTTEXTURE" + LW], EW, !1, OW["IESLIGHTTEXTURE" + LW], OW["CLUSTLIGHT" + LW], OW["RECTAREALIGHTEMISSIONTEXTURE" + LW], 1 === PW);
+       OW.NUM_MORPH_INFLUENCERS && (mW.push("morphTargetInfluences"), mW.push("morphTargetCount")), OW.BAKED_VERTEX_ANIMATION_TEXTURE && (mW.push("bakedVertexAnimationSettings"), mW.push("bakedVertexAnimationTextureSizeInverted"), mW.push("bakedVertexAnimationTime"), iW.push("bake … [truncated]
```

#### 37. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L647-L648` → after: `L2210-L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2210-L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2210-L2216) · [Before (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L647-L648)

```diff
-     function Ui() {
-       ii.clear()
+     function aW(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+         OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       WW.addUniform("vReflectionInfos", 2), WW.addUniform("reflectionMatrix", 16), iW && WW.addUniform("vReflectionMicrosurfaceInfos", 3), OW && (WW.addUniform("vReflectionPosition", 3), WW.addUniform("vReflectionSize", 3)), mW && (WW.addUniform("vReflectionFilteringInfo", 2), WW … [truncated]
```

#### 38. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L650-L666` → after: `L2218-L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2218-L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2218-L2228) · [Before (L650-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L650-L666)

```diff
-     const Fi = {
-         "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
-         "bad-app-name": "Illegal App name: '{$appName}",
-         "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
-         "app-deleted": "Firebase App named '{$appName}' already deleted",
-         "no-options": "Need to provide options, when not being deployed to hosting via source.",
-         "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
-         "invalid-log-argument": "First argument to `onLog` must be null or a function.",
-         "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
-         "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
-         "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
-         "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
-       },
-       Ji = new Me.h("app", "Firebase", Fi);
-     class oi {
-       constructor(ee, ie, He) {
- ... (1 more removed lines; see GitHub link above)
+   },
+   41861: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => NW
+     });
+     var mW = OW(38241),
+       EW = OW(41805);
+     class NW extends EW.d {
+       constructor(WW, iW) {
+         let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         super(WW, iW, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new mW.d, this._storeEffectOnSubMeshes = OW
```

#### 39. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L668-L669` → after: `L2230-L2231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2230-L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2230-L2231) · [Before (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L668-L669)

```diff
-       get automaticDataCollectionEnabled() {
-         return this.checkDestroyed(), this._automaticDataCollectionEnabled
+       getEffect() {
+         return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
```

#### 40. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L671-L672` → after: `L2233-L2234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2233-L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2233-L2234) · [Before (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L671-L672)

```diff
-       set automaticDataCollectionEnabled(ee) {
-         this.checkDestroyed(), this._automaticDataCollectionEnabled = ee
+       isReady(WW, iW) {
+         return !!WW && (!this._storeEffectOnSubMeshes || (!WW.hY || 0 === WW.hY.length || this.isReadyForSubMesh(WW, WW.hY[0], iW)))
```

#### 41. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L674-L675` → after: `L2236-L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2236-L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2236-L2238) · [Before (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L674-L675)

```diff
-       get name() {
-         return this.checkDestroyed(), this._name
+       _isReadyForSubMesh(WW) {
+         const iW = WW.materialDefines;
+         return !(this.checkReadyOnEveryCall || !WW.effect || !iW || iW._renderId !== this.bD().getRenderId())
```

#### 42. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L677-L678` → after: `L2240-L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2240-L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2240-L2241) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L677-L678)

```diff
-       get options() {
-         return this.checkDestroyed(), this._options
+       bindOnlyWorldMatrix(WW) {
+         this._activeEffect.setMatrix("world", WW)
```

#### 43. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L680-L681` → after: `L2243-L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2243-L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2243-L2244) · [Before (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L680-L681)

```diff
-       get config() {
-         return this.checkDestroyed(), this._config
+       bindOnlyNormalMatrix(WW) {
+         this._activeEffect.setMatrix("normalMatrix", WW)
```

#### 44. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L683-L684` → after: `L2246-L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2246-L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2246-L2247) · [Before (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L683-L684)

```diff
-       get container() {
-         return this._container
+       bind(WW, iW) {
+         iW && this.bindForSubMesh(WW, iW, iW.hY[0])
```

#### 45. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L686-L687` → after: `L2249-L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2249-L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2249-L2252) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L686-L687)

```diff
-       get isDeleted() {
-         return this._isDeleted
+       _afterBind(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           OW = arguments.length > 2 ? arguments[2] : void 0;
+         super._afterBind(WW, iW, OW), this.bD()._cachedEffect = iW, OW ? OW._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
```

#### 46. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L689-L690` → after: `L2254-L2256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2254-L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2254-L2256) · [Before (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L689-L690)

```diff
-       set isDeleted(ee) {
-         this._isDeleted = ee
+       _mustRebind(WW, iW, OW) {
+         let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
+         return OW._drawWrapper._forceRebindOnNextCall || WW.isCachedMaterialInvalid(this, iW, mW)
```

#### 47. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L692-L695` → after: `L2258-L2259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2258-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2258-L2259) · [Before (L692-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L692-L695)

```diff
-       checkDestroyed() {
-         if (this.isDeleted) throw Ji.create("app-deleted", {
-           appName: this._name
-         })
+       dispose(WW, iW, OW) {
+         this._activeEffect = void 0, super.dispose(WW, iW, OW)
```

#### 48. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L698` → after: `L2262-L2268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2262-L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2262-L2268) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L698)

```diff
-     const Ri = "9.23.0";
+   },
+   41886: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => NW,
+       c: () => EW
+     });
+     const mW = new WeakMap;
```

#### 49. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L701-L717` → after: `L2271-L2273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2271-L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2271-L2273) · [Before (L701-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L701-L717)

```diff
-       let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         He = ee;
-       if ("object" !== typeof ie) {
-         ie = {
-           name: ie
-         }
-       }
-       const be = Object.assign({
-           name: re,
-           automaticDataCollectionEnabled: !1
-         }, ie),
-         Ke = be.name;
-       if ("string" !== typeof Ke || !Ke) throw Ji.create("bad-app-name", {
-         appName: String(Ke)
-       });
-       if (He || (He = (0, Me.z)()), !He) throw Ji.create("no-options");
- ... (1 more removed lines; see GitHub link above)
+       const iW = WW.getVertexBuffers();
+       if (!iW) return null;
+       let OW = mW.get(WW);
```

#### 50. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L719-L722` → after: `L2275-L2295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2275-L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2275-L2295) · [Before (L719-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L719-L722)

```diff
-         if ((0, Me.t)(He, Ue.options) && (0, Me.t)(be, Ue.config)) return Ue;
-         throw Ji.create("duplicate-app", {
-           appName: Ke
-         })
+         let WW = !1;
+         for (const mW in iW)
+           if (!OW.has(mW)) {
+             WW = !0;
+             break
+           } if (!WW) return OW
+       } else OW = new Map, mW.set(WW, OW);
+       for (const mW in iW) {
+         const WW = iW[mW];
+         if (WW) {
+           const iW = WW.byteOffset,
+             EW = WW.byteStride,
+             NW = WW.type,
+             PW = WW.normalized;
+           OW.set(mW, {
+             offset: iW,
+ ... (5 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L765-L876` → after: `L2301-L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2301-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2301-L2304) · [Before (L765-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L765-L876)

```diff
-       if (null !== ee && "function" !== typeof ee) throw Ji.create("invalid-log-argument");
-       (0, be.i)(ee, ie)
-     }
- 
-     function Bi(ee) {
-       (0, be.h)(ee)
-     }
-     const Ei = "firebase-heartbeat-store";
-     let gi = null;
- 
-     function Oi() {
-       return gi || (gi = function(ee, ie) {
-         let {
-           blocked: He,
-           upgrade: ye,
-           blocking: be,
- ... (96 more removed lines; see GitHub link above)
+       iW.forEach(((iW, OW) => {
+         const mW = `vp_${OW}_info`;
+         WW.setFloat4(mW, iW.offset, iW.stride, iW.type, iW.normalized ? 1 : 0)
+       }))
```

#### 52. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L878-L901` → after: `L2306-L2325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2306-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2306-L2325) · [Before (L878-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L878-L901)

```diff
-     class wi {
-       constructor(ee) {
-         this.app = ee, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
-       }
-       async runIndexedDBEnvironmentCheck() {
-         return !!(0, Me.T)() && (0, Me.db)().then((() => !0)).catch((() => !1))
-       }
-       async read() {
-         if (await this._canUseIndexedDBPromise) {
-           return await async function(ee) {
-             try {
-               const ie = await Oi();
-               return await ie.transaction(Ei).objectStore(Ei).get(Wi(ee))
-             } catch (ie) {
-               if (ie instanceof Me.k) te.warn(ie.message);
-               else {
- ... (8 more removed lines; see GitHub link above)
+   },
+   41834: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => LW,
+       d: () => cW
+     });
+     var mW = OW(41516),
+       EW = OW(38241),
+       NW = OW(41519);
+     let PW = (() => {
+       var WW;
+       let iW, OW, EW = [];
+       return WW = class {
+         static extractMinAndMaxIndexed(WW, iW, OW, mW, EW, NW) {
+           for (let PW = OW; PW < OW + mW; PW++) {
+             const OW = 3 * iW[PW],
+ ... (4 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L904-L925` → after: `L2328-L2334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2328-L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2328-L2334) · [Before (L904-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L904-L925)

```diff
-         return {
-           heartbeats: []
-         }
-       }
-       async overwrite(ee) {
-         var ie;
-         if (await this._canUseIndexedDBPromise) {
-           const He = await this.read();
-           return di(this.app, {
-             lastSentHeartbeatDate: null !== (ie = ee.lastSentHeartbeatDate) && void 0 !== ie ? ie : He.lastSentHeartbeatDate,
-             heartbeats: ee.heartbeats
-           })
-         }
-       }
-       async add(ee) {
-         var ie;
- ... (6 more removed lines; see GitHub link above)
+         static extractMinAndMax(WW, iW, OW, mW, EW, NW) {
+           for (let PW = iW, LW = iW * mW; PW < iW + OW; PW++, LW += mW) {
+             const iW = WW[LW],
+               OW = WW[LW + 1],
+               mW = WW[LW + 2];
+             EW.minimizeInPlaceFromFloats(iW, OW, mW), NW.maximizeInPlaceFromFloats(iW, OW, mW)
+           }
```

#### 54. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L930-L934` → after: `L2381-L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2381-L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2381-L2389) · [Before (L930-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L930-L934)

```diff
-     function Di(ee) {
-       return (0, Me.q)(JSON.stringify({
-         version: 2,
-         heartbeats: ee
-       })).length
+     function cW(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+         NW = arguments.length > 4 ? arguments[4] : void 0;
+       const LW = new EW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         cW = new EW.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+       return NW || (NW = 3), PW.extractMinAndMax(WW, iW, OW, NW, LW, cW), mW && (LW.x -= LW.x * mW.x + mW.y, LW.y -= LW.y * mW.x + mW.y, LW.z -= LW.z * mW.x + mW.y, cW.x += cW.x * mW.x + mW.y, cW.y += cW.y * mW.x + mW.y, cW.z += cW.z * mW.x + mW.y), {
+         minimum: LW,
+         maximum: cW
+       }
```

#### 55. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L939` → after: `L2392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2392) · [Before (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L939)

```diff
-   41628: (ee, ie, He) => {
+   41808: (WW, iW, OW) => {
```

#### 56. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L941-L942` → after: `L2394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2394) · [Before (L941-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L941-L942)

```diff
-       d: () => Ue,
-       h: () => be
+       d: () => tW
```

#### 57. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L944` → after: `L2396-L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2396-L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2396-L2401) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L944)

```diff
-     var ye = He(41632);
+     var mW, EW = OW(41660),
+       NW = OW(41812),
+       PW = OW(41818),
+       LW = OW(41834),
+       cW = OW(41840),
+       wW = OW(41415);
```

#### 58. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L946-L950` → after: `L2403-L2445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2403-L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2403-L2445) · [Before (L946-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L946-L950)

```diff
-       constructor(ee, ie, He) {
-         this.name = ee, this.instanceFactory = ie, this.type = He, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
-       }
-       setInstantiationMode(ee) {
-         return this.instantiationMode = ee, this
+       get materialDefines() {
+         const WW = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
+         return "string" === typeof WW ? null : WW
+       }
+       set materialDefines(WW) {
+         (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = WW
+       }
+       _getDrawWrapper(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         WW = WW ?? this._engine.currentRenderPassId;
+         let OW = this._drawWrappers[WW];
+         return !OW && iW && (this._drawWrappers[WW] = OW = new cW.d(this._mesh.bD().VA())), OW
+       }
+       _removeDrawWrapper(WW) {
+         let iW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[WW]?.dispose(iW), this._drawWrappers[WW] = void 0
+ ... (27 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L952-L953` → after: `L2447-L2448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2447-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2447-L2448) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L952-L953)

```diff
-       setMultipleInstances(ee) {
-         return this.multipleInstances = ee, this
+       static AddToMesh(WW, iW, OW, mW, EW, NW, PW) {
+         return new tW(WW, iW, OW, mW, EW, NW, PW, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
```

#### 60. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L955-L956` → after: `L2450-L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2450-L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2450-L2453) · [Before (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L955-L956)

```diff
-       setServiceProps(ee) {
-         return this.serviceProps = ee, this
+       constructor(WW, iW, OW, mW, EW, NW, PW) {
+         let LW = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
+           cW = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
+         this.materialIndex = WW, this.verticesStart = iW, this.verticesCount = OW, this.indexStart = mW, this.indexCount = EW, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastCollide … [truncated]
```

#### 61. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L958-L959` → after: `L2455-L2456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2455-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2455-L2456) · [Before (L958-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L958-L959)

```diff
-       setInstanceCreatedCallback(ee) {
-         return this.onInstanceCreated = ee, this
+       get IsGlobal() {
+         return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
```

#### 62. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L961-L1020` → after: `L2458-L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2458-L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2458-L2459) · [Before (L961-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L961-L1020)

```diff
-     }
-     const Me = "[DEFAULT]";
-     class Ke {
-       constructor(ee, ie) {
-         this.name = ee, this.container = ie, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
-       }
-       get(ee) {
-         const ie = this.normalizeInstanceIdentifier(ee);
-         if (!this.instancesDeferred.has(ie)) {
-           const ee = new ye.d;
-           if (this.instancesDeferred.set(ie, ee), this.isInitialized(ie) || this.shouldAutoInitialize()) try {
-             const He = this.getOrInitializeService({
-               instanceIdentifier: ie
-             });
-             He && ee.resolve(He)
-           } catch (He) {}
- ... (44 more removed lines; see GitHub link above)
+       KV() {
+         return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.KV() : this._boundingInfo
```

#### 63. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1022-L1024` → after: `L2461-L2462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2461-L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2461-L2462) · [Before (L1022-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L1022-L1024)

```diff
-       clearInstance() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me;
-         this.instancesDeferred.delete(ee), this.instancesOptions.delete(ee), this.instances.delete(ee)
+       setBoundingInfo(WW) {
+         return this._boundingInfo = WW, this
```

#### 64. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1026-L1028` → after: `L2464-L2465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2464-L2465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2464-L2465) · [Before (L1026-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L1026-L1028)

```diff
-       async delete() {
-         const ee = Array.from(this.instances.values());
-         await Promise.all([...ee.filter((ee => "INTERNAL" in ee)).map((ee => ee.INTERNAL.delete())), ...ee.filter((ee => "_delete" in ee)).map((ee => ee._delete()))])
+       getMesh() {
+         return this._mesh
```

#### 65. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1030-L1031` → after: `L2467-L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2467-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2467-L2468) · [Before (L1030-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L1030-L1031)

```diff
-       isComponentSet() {
-         return null != this.component
+       getRenderingMesh() {
+         return this._renderingMesh
```

#### 66. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1033-L1035` → after: `L2470-L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2470-L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2470-L2471) · [Before (L1033-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L1033-L1035)

```diff
-       isInitialized() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me;
-         return this.instances.has(ee)
+       getReplacementMesh() {
+         return this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null
```

#### 67. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1037-L1039` → after: `L2473-L2475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2473-L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2473-L2475) · [Before (L1037-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L1037-L1039)

```diff
-       getOptions() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me;
-         return this.instancesOptions.get(ee) || {}
+       getEffectiveMesh() {
+         const WW = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
+         return WW || this._renderingMesh
```

#### 68. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1041-L1053` → after: `L2477-L2483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2477-L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2477-L2483) · [Before (L1041-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L1041-L1053)

```diff
-       initialize() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         const {
-           options: ie = {}
-         } = ee, He = this.normalizeInstanceIdentifier(ee.instanceIdentifier);
-         if (this.isInitialized(He)) throw Error(`${this.name}(${He}) has already been initialized`);
-         if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
-         const ye = this.getOrInitializeService({
-           instanceIdentifier: He,
-           options: ie
-         });
-         for (const [be, Me] of this.instancesDeferred.entries()) {
-           He === this.normalizeInstanceIdentifier(be) && Me.resolve(ye)
+       BA() {
+         let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         const iW = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
+         if (!iW) return WW && this._mesh.bD()._hasDefaultMaterial ? this._mesh.bD().defaultMaterial : null;
+         if (this._isMultiMaterial(iW)) {
+           const WW = iW.getSubMaterial(this.materialIndex);
+           return this._currentMaterial !== WW && (this._currentMaterial = WW, this.resetDrawCache()), WW
```

#### 69. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1057-L1169` → after: `L2487-L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2487-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2487-L2488) · [Before (L1057-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L1057-L1169)

```diff
-       cR(ee, ie) {
-         var He;
-         const ye = this.normalizeInstanceIdentifier(ie),
-           be = null !== (He = this.onInitCallbacks.get(ye)) && void 0 !== He ? He : new Set;
-         be.add(ee), this.onInitCallbacks.set(ye, be);
-         const Me = this.instances.get(ye);
-         return Me && ee(Me, ye), () => {
-           be.delete(ee)
-         }
-       }
-       invokeOnInitCallbacks(ee, ie) {
-         const He = this.onInitCallbacks.get(ie);
-         if (He)
-           for (const be of He) try {
-             be(ee, ie)
-           } catch (ye) {}
- ... (97 more removed lines; see GitHub link above)
+       _isMultiMaterial(WW) {
+         return void 0 !== WW.getSubMaterial
```

#### 70. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1171-L1176` → after: `L2490-L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2490-L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2490-L2554) · [Before (L1171-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L1171-L1176)

```diff
-       set logHandler(ee) {
-         if ("function" !== typeof ee) throw new TypeError("Value assigned to `logHandler` must be a function");
-         this._logHandler = ee
-       }
-       get userLogHandler() {
-         return this._userLogHandler
+       refreshBoundingInfo() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
+         if (WW || (WW = this._renderingMesh.getVerticesData(EW.k.PositionKind)), !WW) return this._boundingInfo = this._mesh.KV(), this;
+         const iW = this._renderingMesh.IEW();
+         let OW;
+         if (0 === this.indexStart && this.indexCount === iW.length) {
+           const WW = this._renderingMesh.KV();
+           OW = {
+             minimum: WW.minimum.clone(),
+             maximum: WW.maximum.clone()
+           }
+         } else OW = (0, LW.b)(WW, iW, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
+         return this._boundingInfo ? this._boundingInfo.reConstruct(OW.minimum, OW.maximum) : this._boundingInfo = new PW.b(OW.minimum, OW.maximum), this
+       }
+       _checkCollision(WW) {
+ ... (49 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1178-L1179` → after: `L2556-L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2556-L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2556-L2564) · [Before (L1178-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L1178-L1179)

```diff
-       set userLogHandler(ee) {
-         this._userLogHandler = ee
+       _intersectLines(WW, iW, OW, mW, EW) {
+         let PW = null;
+         for (let LW = this.indexStart; LW < this.indexStart + this.indexCount; LW += 2) {
+           const cW = iW[OW[LW]],
+             wW = iW[OW[LW + 1]],
+             tW = WW.intersectionSegment(cW, wW, mW);
+           if (!(tW < 0) && ((EW || !PW || tW < PW.distance) && (PW = new NW.e(null, null, tW), PW.faceId = LW / 2, EW))) break
+         }
+         return PW
```

#### 72. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1181-L1183` → after: `L2566-L2574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2566-L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2566-L2574) · [Before (L1181-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L1181-L1183)

```diff
-       debug() {
-         for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
-         this._userLogHandler && this._userLogHandler(this, be.DEBUG, ...ie), this._logHandler(this, be.DEBUG, ...ie)
+       _intersectUnIndexedLines(WW, iW, OW, mW, EW) {
+         let PW = null;
+         for (let LW = this.verticesStart; LW < this.verticesStart + this.verticesCount; LW += 2) {
+           const OW = iW[LW],
+             cW = iW[LW + 1],
+             wW = WW.intersectionSegment(OW, cW, mW);
+           if (!(wW < 0) && ((EW || !PW || wW < PW.distance) && (PW = new NW.e(null, null, wW), PW.faceId = LW / 2, EW))) break
+         }
+         return PW
```

#### 73. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1185-L1187` → after: `L2576-L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2576-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2576-L2599) · [Before (L1185-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L1185-L1187)

```diff
-       log() {
-         for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
-         this._userLogHandler && this._userLogHandler(this, be.VERBOSE, ...ie), this._logHandler(this, be.VERBOSE, ...ie)
+       _intersectTriangles(WW, iW, OW, mW, EW, NW, PW) {
+         let LW = null,
+           cW = -1;
+         for (let wW = this.indexStart; wW < this.indexStart + this.indexCount - (3 - mW); wW += mW) {
+           cW++;
+           const mW = OW[wW],
+             tW = OW[wW + 1],
+             ZW = OW[wW + 2];
+           if (EW && 4294967295 === ZW) {
+             wW += 2;
+             continue
+           }
+           const xW = iW[mW],
+             lW = iW[tW],
+             AW = iW[ZW];
+           if (!xW || !lW || !AW) continue;
+ ... (8 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1189-L1191` → after: `L2601-L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2601-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2601-L2614) · [Before (L1189-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L1189-L1191)

```diff
-       info() {
-         for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
-         this._userLogHandler && this._userLogHandler(this, be.INFO, ...ie), this._logHandler(this, be.INFO, ...ie)
+       _intersectUnIndexedTriangles(WW, iW, OW, mW, EW) {
+         let NW = null;
+         for (let PW = this.verticesStart; PW < this.verticesStart + this.verticesCount; PW += 3) {
+           const OW = iW[PW],
+             LW = iW[PW + 1],
+             cW = iW[PW + 2];
+           if (EW && !EW(OW, LW, cW, WW, -1, -1, -1)) continue;
+           const wW = WW.intersectsTriangle(OW, LW, cW);
+           if (wW) {
+             if (wW.distance < 0) continue;
+             if ((mW || !NW || wW.distance < NW.distance) && (NW = wW, NW.faceId = PW / 3, mW)) break
+           }
+         }
+         return NW
```

#### 75. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1193-L1195` → after: `L2616-L2617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2616-L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2616-L2617) · [Before (L1193-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L1193-L1195)

```diff
-       warn() {
-         for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
-         this._userLogHandler && this._userLogHandler(this, be.WARN, ...ie), this._logHandler(this, be.WARN, ...ie)
+       _rebuild() {
+         this._linesIndexBuffer && (this._linesIndexBuffer = null)
```

#### 76. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1197-L1199` → after: `L2619-L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2619-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2619-L2626) · [Before (L1197-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L1197-L1199)

```diff
-       error() {
-         for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
-         this._userLogHandler && this._userLogHandler(this, be.ERROR, ...ie), this._logHandler(this, be.ERROR, ...ie)
+       clone(WW, iW) {
+         const OW = new tW(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, WW, iW, !1);
+         if (!this.IsGlobal) {
+           const WW = this.KV();
+           if (!WW) return OW;
+           OW._boundingInfo = new PW.b(WW.minimum, WW.maximum)
+         }
+         return OW
```

#### 77. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1201-L1230` → after: `L2628-L2644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2628-L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2628-L2644) · [Before (L1201-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L1201-L1230)

```diff
-     }
- 
-     function oe(ee) {
-       ye.forEach((ie => {
-         ie.setLogLevel(ee)
-       }))
-     }
- 
-     function Re(ee, ie) {
-       for (const He of ye) {
-         let ye = null;
-         ie && ie.level && (ye = Me[ie.level]), He.userLogHandler = null === ee ? null : function(ie, He) {
-           for (var Me = arguments.length, Ke = new Array(Me > 2 ? Me - 2 : 0), Ue = 2; Ue < Me; Ue++) Ke[Ue - 2] = arguments[Ue];
-           const Fe = Ke.map((ee => {
-             if (null == ee) return null;
-             if ("string" === typeof ee) return ee;
- ... (14 more removed lines; see GitHub link above)
+       dispose() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         this._linesIndexBuffer && (this._mesh.bD().VA()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
+         const iW = this._mesh.hY.indexOf(this);
+         this._mesh.hY.splice(iW, 1), this.resetDrawCache(void 0, WW)
+       }
+       getClassName() {
+         return "SubMesh"
+       }
+       static CreateFromIndices(WW, iW, OW, mW, EW) {
+         let NW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+           PW = Number.MAX_VALUE,
+           LW = -Number.MAX_VALUE;
+         const cW = (EW || mW).IEW();
+         for (let wW = iW; wW < iW + OW; wW++) {
+           const WW = cW[wW];
+ ... (1 more added lines; see GitHub link above)
```

#### 78. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1233` → after: `L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R2648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/297.js#L2648) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/297.js#L1233)

```diff
-     }
+     }(mW = tW.prototype).projectToRef ?? (mW.projectToRef = (0, wW.k)("SubMesh", "projectToRef"))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/298.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/298.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89)

#### 1. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L5-L18` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L4-L6) · [Before (L5-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L5-L18)

```diff
-   41649: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       getAnalytics: () => Ii,
-       getGoogleAnalyticsClientId: () => Qi,
-       initializeAnalytics: () => Ni,
-       isSupported: () => Gi,
-       logEvent: () => bH,
-       setAnalyticsCollectionEnabled: () => HH,
-       setConsent: () => MH,
-       setCurrentScreen: () => ri,
-       setDefaultEventParameters: () => yH,
-       setUserId: () => eH,
-       setUserProperties: () => iH,
-       settings: () => ji
+   53769: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => mW
```

#### 2. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L20-L35` → after: `L8-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L8-L26) · [Before (L20-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L20-L35)

```diff
-     var ye = He(41625),
-       be = He(41640),
-       Me = He(41632),
-       Ke = He(41628);
-     let Ue, Fe;
-     const Je = new WeakMap,
-       oe = new WeakMap,
-       Re = new WeakMap,
-       ke = new WeakMap,
-       qe = new WeakMap;
-     let fe = {
-       get(ee, ie, He) {
-         if (ee instanceof IDBTransaction) {
-           if ("done" === ie) return oe.get(ee);
-           if ("objectStoreNames" === ie) return ee.objectStoreNames || Re.get(ee);
-           if ("store" === ie) return He.objectStoreNames[1] ? void 0 : He.objectStore(He.objectStoreNames[0])
+     class mW {}
+     mW.AUTOSAMPLERSUFFIX = "Sampler", mW.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", mW.ALPHA_DISABLE = 0, mW.ALPHA_ADD = 1, mW.ALPHA_COMBINE = 2, mW.ALPHA_SUBTRACT = 3, mW.ALPHA_MULTIPLY = 4, mW.ALPHA_MAXIMIZED = 5, mW.ALPHA_ONEONE = 6, mW.ALPHA_PREMULTIPLIED = 7, mW.ALPH … [truncated]
+   },
+   53745: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => cW
+     });
+     var mW = OW(41516),
+       EW = OW(41519),
+       NW = OW(38241),
+       PW = OW(41773),
+       LW = OW(41739);
+     let cW = (() => {
+       var WW;
+       let iW, OW, cW, wW, tW = PW.b,
+         ZW = [];
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L37-L53` → after: `L28-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L28-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L28-L185) · [Before (L37-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L37-L53)

```diff
-         return Xe(ee[ie])
-       },
-       set: (ee, ie, He) => (ee[ie] = He, !0),
-       has: (ee, ie) => ee instanceof IDBTransaction && ("done" === ie || "store" === ie) || ie in ee
-     };
- 
-     function Te(ee) {
-       return ee !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Fe || (Fe = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(ee) ? function() {
-         for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
-         return ee.apply(ze(this), He), Xe(Je.get(this))
-       } : function() {
-         for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
-         return Xe(ee.apply(ze(this), He))
-       } : function(ie) {
-         for (var He = arguments.length, ye = new Array(He > 1 ? He - 1 : 0), be = 1; be < He; be++) ye[be - 1] = arguments[be];
-         const Me = ee.call(ze(this), ie, ...ye);
- ... (1 more removed lines; see GitHub link above)
+         _setPosition(WW) {
+           this._position = WW
+         }
+         get position() {
+           return this._position
+         }
+         set position(WW) {
+           this._setPosition(WW)
+         }
+         _setDirection(WW) {
+           this._direction = WW
+         }
+         get direction() {
+           return this._direction
+         }
+         set direction(WW) {
+ ... (142 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L55-L213` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L187-L188) · [Before (L55-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L55-L213)

```diff
-     }
- 
-     function pe(ee) {
-       return "function" === typeof ee ? Te(ee) : (ee instanceof IDBTransaction && function(ee) {
-         if (oe.has(ee)) return;
-         const ie = new Promise(((ie, He) => {
-           const ye = () => {
-               ee.removeEventListener("complete", be), ee.removeEventListener("error", Me), ee.removeEventListener("abort", Me)
-             },
-             be = () => {
-               ie(), ye()
-             },
-             Me = () => {
-               He(ee.error || new DOMException("AbortError", "AbortError")), ye()
-             };
-           ee.addEventListener("complete", be), ee.addEventListener("error", Me), ee.addEventListener("abort", Me)
- ... (143 more removed lines; see GitHub link above)
+       update(WW) {
+         this.updateMipLevel(WW, 0)
```

#### 5. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L215-L385` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L190-L191) · [Before (L215-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L215-L385)

```diff
-     }
- 
-     function le(ee) {
-       return `${ee.appName}!${ee.appId}`
-     }
-     const Se = new Map;
- 
-     function ne(ee, ie) {
-       const He = le(ee);
-       je(He, ie),
-         function(ee, ie) {
-           const He = Ie();
-           He && He.postMessage({
-             key: ee,
-             fid: ie
-           });
- ... (155 more removed lines; see GitHub link above)
+       updateMipLevel(WW, iW) {
+         this._getEngine().updateRawTexture(this._texture, WW, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, iW), this._waitingForData = !1
```

#### 6. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L387-L396` → after: `L193-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L193-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L193-L196) · [Before (L387-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L387-L396)

```diff
-     }
-     async function yi(ee) {
-       let ie = await bi(ee.appConfig);
-       for (; 1 === ie.registrationStatus;) await ve(100), ie = await bi(ee.appConfig);
-       if (0 === ie.registrationStatus) {
-         const {
-           installationEntry: ie,
-           registrationPromise: He
-         } = await Hi(ee);
-         return He || ie
+       clone() {
+         if (!this._texture) return super.clone();
+         const WW = new EW(null, this.getSize().width, this.getSize().height, this.format, this.bD(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
+         return WW._texture = this._texture, this._texture.incrementReferences(), WW
```

#### 7. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L398-L432` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L198-L199) · [Before (L398-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L398-L432)

```diff
-       return ie
-     }
- 
-     function bi(ee) {
-       return ii(ee, (ee => {
-         if (!ee) throw Ae.create("installation-not-found");
-         return Mi(ee)
-       }))
-     }
- 
-     function Mi(ee) {
-       return 1 === (ie = ee).registrationStatus && ie.registrationTime + te < Date.now() ? {
-         fid: ee.fid,
-         registrationStatus: 0
-       } : ee;
-       var ie
- ... (19 more removed lines; see GitHub link above)
+       isReady() {
+         return super.isReady() && !this._waitingForData
```

#### 8. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L434-L447` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L201-L202) · [Before (L434-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L434-L447)

```diff
-       const Ue = {
-           installation: {
-             sdkVersion: Ze,
-             appId: He.appId
-           }
-         },
-         Fe = {
-           method: "POST",
-           headers: Me,
-           body: JSON.stringify(Ue)
-         },
-         Je = await Ce((() => fetch(be, Fe)));
-       if (Je.ok) {
-         return ae(await Je.json())
+       static CreateLuminanceTexture(WW, iW, OW, mW) {
+         return new EW(WW, iW, OW, 1, mW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 9. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L449-L599` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L204-L205) · [Before (L449-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L449-L599)

```diff
-       throw await ce("Generate Auth Token", Je)
-     }
-     async function Ui(ee) {
-       let ie, He = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       const ye = await ii(ee.appConfig, (ye => {
-         if (!Ji(ye)) throw Ae.create("not-registered");
-         const be = ye.authToken;
-         if (!He && function(ee) {
-             return 2 === ee.requestStatus && ! function(ee) {
-               const ie = Date.now();
-               return ie < ee.creationTime || ee.creationTime + ee.expiresIn < ie + De
-             }(ee)
-           }(be)) return ye;
-         if (1 === be.requestStatus) return ie = async function(ee, ie) {
-           let He = await Fi(ee.appConfig);
-           for (; 1 === He.authToken.requestStatus;) await ve(100), He = await Fi(ee.appConfig);
- ... (135 more removed lines; see GitHub link above)
+       static CreateLuminanceAlphaTexture(WW, iW, OW, mW) {
+         return new EW(WW, iW, OW, 2, mW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 10. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L601-L675` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L207-L208) · [Before (L601-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L601-L675)

```diff
-       return ee
-     }
- 
-     function Oi(ee) {
-       return Promise.all(ee.map((ee => ee.catch((ee => ee)))))
-     }
- 
-     function di(ee, ie) {
-       const He = function(ee, ie) {
-           let He;
-           return window.trustedTypes && (He = window.trustedTypes.createPolicy(ee, ie)), He
-         }("firebase-js-sdk-policy", {
-           createScriptURL: gi
-         }),
-         ye = document.createElement("script"),
-         be = `${Xi}?l=${ee}&id=${ie}`;
- ... (59 more removed lines; see GitHub link above)
+       static CreateAlphaTexture(WW, iW, OW, mW) {
+         return new EW(WW, iW, OW, 0, mW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 11. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L677-L682` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L210-L211) · [Before (L677-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L677-L682)

```diff
-     }
-     const ti = new class {
-       constructor() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-           ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
-         this.throttleMetadata = ee, this.intervalMillis = ie
+       static CreateRGBTexture(WW, iW, OW, mW) {
+         return new EW(WW, iW, OW, 4, mW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L684-L685` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L213-L214) · [Before (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L684-L685)

```diff
-       getThrottleMetadata(ee) {
-         return this.throttleMetadata[ee]
+       static CreateRGBATexture(WW, iW, OW, mW) {
+         return new EW(WW, iW, OW, 5, mW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L687-L688` → after: `L216-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L216-L217) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L687-L688)

```diff
-       setThrottleMetadata(ee, ie) {
-         this.throttleMetadata[ee] = ie
+       static CreateRGBAStorageTexture(WW, iW, OW, mW) {
+         return new EW(WW, iW, OW, 5, mW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 14. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L690-L691` → after: `L219-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L219-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L219-L223) · [Before (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L690-L691)

```diff
-       deleteThrottleMetadata(ee) {
-         delete this.throttleMetadata[ee]
+       static CreateRTexture(WW, iW, OW, NW) {
+         let PW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           LW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           cW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : mW.h.TRILINEAR_SAMPLINGMODE;
+         return new EW(WW, iW, OW, 6, NW, PW, LW, cW, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
```

#### 15. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L693-L715` → after: `L225-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L225-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L225-L229) · [Before (L693-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L693-L715)

```diff
-     };
- 
-     function Zi(ee) {
-       return new Headers({
-         Accept: "application/json",
-         "x-goog-api-key": ee
-       })
-     }
-     async function wi(ee) {
-       let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ti,
-         He = arguments.length > 2 ? arguments[2] : void 0;
-       const {
-         appId: ye,
-         apiKey: be,
-         measurementId: Me
-       } = ee.options;
- ... (7 more removed lines; see GitHub link above)
+       static CreateRStorageTexture(WW, iW, OW, NW) {
+         let PW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           LW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           cW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : mW.h.TRILINEAR_SAMPLINGMODE;
+         return new EW(WW, iW, OW, 6, NW, PW, LW, cW, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
```

#### 16. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L730-L758` → after: `L232-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L232-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L232-L261) · [Before (L730-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L730-L758)

```diff
-     async function Di(ee, ie, He) {
-       let {
-         throttleEndTimeMillis: ye,
-         backoffCount: be
-       } = ie, Ke = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ti;
-       var Ue;
-       const {
-         appId: Fe,
-         measurementId: Je
-       } = ee;
-       try {
-         await
-         function(ee, ie) {
-           return new Promise(((He, ye) => {
-             const be = Math.max(ie - Date.now(), 0),
-               Me = setTimeout(He, be);
- ... (13 more removed lines; see GitHub link above)
+   },
+   53801: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => mW.b
+     });
+     var mW = OW(41942);
+     (0, mW.d)()
+   },
+   53752: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => mW.c
+     });
+     var mW = OW(41969);
+     (0, mW.d)()
+   },
+   41969: (WW, iW, OW) => {
+ ... (14 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L760-L793` → after: `L263-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L263-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L263-L280) · [Before (L760-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L760-L793)

```diff
-       try {
-         const ie = await async function(ee) {
-           var ie;
-           const {
-             appId: He,
-             apiKey: ye
-           } = ee, be = {
-             method: "GET",
-             headers: Zi(ye)
-           }, Me = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", He), Ke = await fetch(Me, be);
-           if (200 !== Ke.status && 304 !== Ke.status) {
-             let ee = "";
-             try {
-               const He = await Ke.json();
-               (null === (ie = He.error) || void 0 === ie ? void 0 : ie.message) && (ee = He.error.message)
-             } catch (Ue) {}
- ... (18 more removed lines; see GitHub link above)
+       constructor(WW) {
+         let iW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           mW = arguments.length > 5 ? arguments[5] : void 0,
+           EW = arguments.length > 6 ? arguments[6] : void 0,
+           LW = arguments.length > 7 ? arguments[7] : void 0;
+         super(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, iW, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = mW, this.useVertexAlpha = EW, this.color = new  … [truncated]
+         const cW = {
+           attributes: [PW.k.PositionKind],
+           uniforms: ["world", "viewProjection"],
+           needAlphaBlending: !0,
+           defines: [],
+           useClipPlane: null,
+           shaderLanguage: 0
+         };
+         if (this.useVertexAlpha ? cW.defines.push("#define VERTEXALPHA") : cW.needAlphaBlending = !1, this.useVertexColor ? (cW.defines.push("#define VERTEXCOLOR"), cW.attributes.push(PW.k.ColorKind)) : (cW.uniforms.push("color"), this._color4 = new NW.d), LW) this.material = LW;
+         else {
+ ... (2 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L795` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L282-L283) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L795)

```diff
-           throw oe
+           const WW = new tW.o("colorShader", this.bD(), "color", cW, !1);
+           WW.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(WW)
```

#### 19. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L804-L807` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L286-L287) · [Before (L804-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L804-L807)

```diff
-     }
-     class Pi {
-       constructor() {
-         this.listeners = []
+       getClassName() {
+         return "LinesMesh"
```

#### 20. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L809-L810` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L289-L290) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L809-L810)

```diff
-       addEventListener(ee) {
-         this.listeners.push(ee)
+       get material() {
+         return this._internalAbstractMeshDataInfo._material
```

#### 21. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L812-L813` → after: `L292-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L292-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L292-L296) · [Before (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L812-L813)

```diff
-       abort() {
-         this.listeners.forEach((ee => ee()))
+       set material(WW) {
+         const iW = this.material;
+         if (iW === WW) return;
+         const OW = iW && this._ownsMaterial;
+         this._ownsMaterial = !1, this._setInternalMaterial(WW), OW && iW?.dispose()
```

#### 22. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L815-L855` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L298-L299) · [Before (L815-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L815-L855)

```diff
-     }
-     let Ai, Yi;
- 
-     function Vi(ee) {
-       Yi = ee
-     }
- 
-     function ai(ee) {
-       Ai = ee
-     }
-     async function ci(ee, ie, He, ye, be, Ke, Ue) {
-       var Fe;
-       const Je = wi(ee);
-       Je.then((ie => {
-         He[ie.measurementId] = ie.appId, ee.options.measurementId && ie.measurementId !== ee.options.measurementId && zi.warn(`The measurement ID in the local Firebase config (${ee.options.measurementId}) does not match the measurement ID fetched from the server (${ie.measurement … [truncated]
-       })).catch((ee => zi.error(ee))), ie.push(Je);
- ... (25 more removed lines; see GitHub link above)
+       _setInternalMaterial(WW) {
+         this._setMaterial(WW), this.material && (this.material.fillMode = wW.d.LineListDrawMode, this.material.disableLighting = !0)
```

#### 23. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L857-L858` → after: `L301-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L301-L302) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L857-L858)

```diff
-       _delete() {
-         return delete Li[this.app.options.appId], Promise.resolve()
+       get checkCollisions() {
+         return !1
```

#### 24. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L860-L881` → after: `L304-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L304-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L304-L314) · [Before (L860-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L860-L881)

```diff
-     }
-     let Li = {},
-       Ci = [];
-     const vi = {};
-     let ui, mi, li = "dataLayer",
-       Si = "gtag",
-       ni = !1;
- 
-     function ji(ee) {
-       if (ni) throw Ei.create("already-initialized");
-       ee.dataLayerName && (li = ee.dataLayerName), ee.gtagName && (Si = ee.gtagName)
-     }
- 
-     function si(ee, ie, He) {
-       ! function() {
-         const ee = [];
- ... (6 more removed lines; see GitHub link above)
+       set checkCollisions(WW) {}
+       _bind(WW, iW) {
+         if (!this._geometry) return this;
+         const OW = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
+         if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(iW, OW) : this._geometry._bind(iW, OW, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMate … [truncated]
+           const {
+             r: WW,
+             g: iW,
+             b: OW
+           } = this.color;
+           this._color4.set(WW, iW, OW, this.alpha), this.material.setColor4("color", this._color4)
```

#### 25. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L883-L888` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L316) · [Before (L883-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L883-L888)

```diff
-       }();
-       const ye = ee.options.appId;
-       if (!ye) throw Ei.create("no-app-id");
-       if (!ee.options.apiKey) {
-         if (!ee.options.measurementId) throw Ei.create("no-api-key");
-         zi.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${ee.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
+         return this
```

#### 26. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L890-L911` → after: `L318-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L318-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L318-L321) · [Before (L890-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L890-L911)

```diff
-       if (null != Li[ye]) throw Ei.create("already-exists", {
-         id: ye
-       });
-       if (!ni) {
-         ! function(ee) {
-           let ie = [];
-           Array.isArray(window[ee]) ? ie = window[ee] : window[ee] = ie
-         }(li);
-         const {
-           wrappedGtag: ee,
-           gtagCore: ie
-         } = function(ee, ie, He, ye, be) {
-           let Me = function() {
-             for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
-             window[ye].push(arguments)
-           };
- ... (6 more removed lines; see GitHub link above)
+       _draw(WW, iW, OW) {
+         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
+         const mW = this.bD().VA();
+         return this._unIndexed ? mW.drawArraysType(wW.d.LineListDrawMode, WW.verticesStart, WW.verticesCount, OW) : mW.drawElementsType(wW.d.LineListDrawMode, WW.indexStart, WW.indexCount, OW), this
```

#### 27. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L913-L930` → after: `L323-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L323-L325) · [Before (L913-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L913-L930)

```diff
-       Li[ye] = ci(ee, Ci, vi, ie, ui, li, He);
-       return new xi(ee)
-     }
- 
-     function Ii() {
-       let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ye.D)();
-       ee = (0, Me.I)(ee);
-       const ie = (0, ye.r)(ee, Ti);
-       return ie.isInitialized() ? ie.getImmediate() : Ni(ee)
-     }
- 
-     function Ni(ee) {
-       let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const He = (0, ye.r)(ee, Ti);
-       if (He.isInitialized()) {
-         const ee = He.getImmediate();
- ... (2 more removed lines; see GitHub link above)
+       dispose(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || iW) && this.material?.dispose(!1, !1, !0), super.dispose(WW)
```

#### 28. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L932-L943` → after: `L327-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L327-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L327-L334) · [Before (L932-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L932-L943)

```diff
-       return He.initialize({
-         options: ie
-       })
-     }
-     async function Gi() {
-       if ((0, Me.O)()) return !1;
-       if (!(0, Me.m)()) return !1;
-       if (!(0, Me.T)()) return !1;
-       try {
-         return await (0, Me.db)()
-       } catch (ee) {
-         return !1
+       clone(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           OW = arguments.length > 2 ? arguments[2] : void 0;
+         if (iW && void 0 === iW._addToSceneRootNodes) {
+           const OW = iW;
+           return OW.source = this, new xW(WW, this.bD(), OW.parent, OW.source, OW.doNotCloneChildren)
+         }
+         return new xW(WW, this.bD(), iW, this, OW)
```

#### 29. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L945-L986` → after: `L336-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L336-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L336-L340) · [Before (L945-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L945-L986)

```diff
-     }
- 
-     function ri(ee, ie, He) {
-       ee = (0, Me.I)(ee), async function(ee, ie, He, ye) {
-         if (ye && ye.global) return ee("set", {
-           screen_name: He
-         }), Promise.resolve();
-         ee("config", await ie, {
-           update: !0,
-           screen_name: He
-         })
-       }(mi, Li[ee.app.options.appId], ie, He).catch((ee => zi.error(ee)))
-     }
-     async function Qi(ee) {
-       return ee = (0, Me.I)(ee), async function(ee, ie) {
-         const He = await ie;
- ... (26 more removed lines; see GitHub link above)
+       createInstance(WW) {
+         const iW = new lW(WW, this);
+         if (this.bV) {
+           iW.bV = {};
+           for (const WW in this.bV) iW.bV[WW] = this.bV[WW]
```

#### 30. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L988-L1003` → after: `L342-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L342-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L342-L350) · [Before (L988-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L988-L1003)

```diff
-         ee("config", await ie, {
-           update: !0,
-           user_properties: He
-         })
-       }(mi, Li[ee.app.options.appId], ie, He).catch((ee => zi.error(ee)))
-     }
- 
-     function HH(ee, ie) {
-       ee = (0, Me.I)(ee), async function(ee, ie) {
-         const He = await ee;
-         window[`ga-disable-${He}`] = !ie
-       }(Li[ee.app.options.appId], ie).catch((ee => zi.error(ee)))
-     }
- 
-     function yH(ee) {
-       mi ? mi("set", ee) : ai(ee)
+         return iW
+       }
+       serialize(WW) {
+         super.serialize(WW), WW.color = this.color.wEW(), WW.alpha = this.alpha
+       }
+       static Parse(WW, iW) {
+         const OW = new xW(WW.name, iW);
+         return OW.color = NW.b.FromArray(WW.color), OW.alpha = WW.alpha, OW
+       }
```

#### 31. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L1005-L1015` → after: `L352-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L352-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L352-L359) · [Before (L1005-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L1005-L1015)

```diff
- 
-     function bH(ee, ie, He, ye) {
-       ee = (0, Me.I)(ee), async function(ee, ie, He, ye, be) {
-         if (be && be.global) ee("event", He, ye);
-         else {
-           const be = await ie;
-           ee("event", He, Object.assign(Object.assign({}, ye), {
-             send_to: be
-           }))
-         }
-       }(mi, Li[ee.app.options.appId], ie, He, ye).catch((ee => zi.error(ee)))
+     xW.ForceGLSL = !1;
+     class lW extends cW.e {
+       constructor(WW, iW) {
+         super(WW, iW), this.intersectionThreshold = iW.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 32. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L1018-L1039` → after: `L363-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L363-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/298.js#L363-L365) · [Before (L1018-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/298.js#L1018-L1039)

```diff
-     function MH(ee) {
-       mi ? mi("consent", "update", ee) : Vi(ee)
-     }
-     const KH = "@firebase/analytics",
-       UH = "0.10.0";
-     (0, ye.v)(new Ke.h(Ti, ((ee, ie) => {
-       let {
-         options: He
-       } = ie;
-       return si(ee.getProvider("app").getImmediate(), ee.getProvider("installations-internal").getImmediate(), He)
-     }), "PUBLIC")), (0, ye.v)(new Ke.h("analytics-internal", (function(ee) {
-       try {
-         const ie = ee.getProvider(Ti).getImmediate();
-         return {
-           logEvent: (ee, He, ye) => bH(ie, ee, He, ye)
-         }
- ... (6 more removed lines; see GitHub link above)
+     function bW() {
+       AW || (AW = !0, LW.e._LinesMeshParser = (WW, iW) => xW.Parse(WW, iW))
+     }(mW = xW.prototype).enableEdgesRendering ?? (mW.enableEdgesRendering = (0, ZW.k)("LinesMesh", "enableEdgesRendering")), (EW = lW.prototype).enableEdgesRendering ?? (EW.enableEdgesRendering = (0, ZW.k)("InstancedLinesMesh", "enableEdgesRendering"))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/299.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/299.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8)

#### 1. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L5-L3926` → after: `L4-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L4-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/299.js#L4-L239) · [Before (L5-L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/299.js#L5-L3926)

```diff
-     41654: (ee, ie, He) => {
-         He.r(ie), He.d(ie, {
-           ActionCodeOperation: () => ke,
-           ActionCodeURL: () => Qi,
-           AuthCredential: () => vi,
-           AuthErrorCodes: () => Xe,
-           EmailAuthCredential: () => si,
-           EmailAuthProvider: () => iH,
-           FacebookAuthProvider: () => MH,
-           FactorId: () => Fe,
-           GithubAuthProvider: () => UH,
-           GoogleAuthProvider: () => KH,
-           OAuthCredential: () => Ni,
-           OAuthProvider: () => bH,
-           OperationType: () => Re,
-           PhoneAuthCredential: () => ri,
- ... (3906 more removed lines; see GitHub link above)
+   41985: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => YW,
+       d: () => KW,
+       h: () => sW,
+       i: () => MW,
+       k: () => kW,
+       o: () => UW
+     });
+     var mW = OW(41538),
+       EW = OW(41612),
+       NW = OW(38241),
+       PW = OW(41660),
+       LW = OW(41992),
+       cW = OW(41867),
+       wW = OW(41564),
+ ... (220 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L3928-L3952` → after: `L241-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L241-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/299.js#L241-L354) · [Before (L3928-L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/299.js#L3928-L3952)

```diff
-           lb = new Map([
-             ["identitytoolkit.googleapis.com", "p"],
-             ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
-             ["test-identitytoolkit.sandbox.googleapis.com", "t"]
-           ]);
- 
-         function Sb(ee) {
-           const ie = ee.config;
-           te(ie.authDomain, ee, "auth-domain-config-required");
-           const He = ie.emulator ? Ve(ie, "emulator/auth/iframe") : `https://${ee.config.authDomain}/__/auth/iframe`,
-             Me = {
-               apiKey: ie.apiKey,
-               appName: ee.name,
-               v: be.d
-             },
-             Ke = lb.get(ee.config.apiHost);
- ... (9 more removed lines; see GitHub link above)
+           shaderLanguage: this._options.shaderLanguage,
+           extraInitializationsAsync: this._options.extraInitializationsAsync
+         }, LW), mW ? OW.setEffect(hW, JW, this._materialContext) : YW && YW.setEffect(hW, JW), this._onEffectCreatedObservable && (jW.effect = hW, jW.subMesh = OW ?? WW?.hY[0] ?? null, this._onEffectCreatedObservable.notifyObservers(jW))), YW._wasPreviouslyUsingInstances = !!iW,  … [truncated]
+       }
+       bindOnlyWorldMatrix(WW, iW) {
+         const OW = iW ?? this.getEffect();
+         if (!OW) return;
+         const mW = this._options.uniforms; - 1 !== mW.indexOf("world") && OW.setMatrix("world", WW);
+         const EW = this.bD(); - 1 !== mW.indexOf("worldView") && (WW.multiplyToRef(EW.getViewMatrix(), this._cachedWorldViewMatrix), OW.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== mW.indexOf("worldViewProjection") && (WW.multiplyToRef(EW.getTransformMatrix(), thi … [truncated]
+       }
+       bindForSubMesh(WW, iW, OW) {
+         this.bind(WW, iW, OW._drawWrapperOverride?.effect, OW)
+       }
+       bind(WW, iW, OW, mW) {
+         const EW = mW && this._storeEffectOnSubMeshes,
+           NW = OW ?? (EW ? mW.effect : this.getEffect());
+ ... (98 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L3954-L4026` → after: `L356-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L356-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/299.js#L356-L573) · [Before (L3954-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/299.js#L3954-L4026)

```diff
-         class jb {
-           constructor(ee) {
-             this.window = ee, this.associatedEvent = null
-           }
-           close() {
-             if (this.window) try {
-               this.window.close()
-             } catch (ee) {}
-           }
-         }
- 
-         function sb(ee, ie, He) {
-           let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
-             Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
-           const Ke = Math.max((window.screen.availHeight - Me) / 2, 0).toString(),
-             Ue = Math.max((window.screen.availWidth - be) / 2, 0).toString();
- ... (57 more removed lines; see GitHub link above)
+         const OW = Object.keys(this._options);
+         for (const mW of OW) {
+           const WW = this._options[mW];
+           Array.isArray(WW) && (this._options[mW] = WW.slice(0))
+         }
+         this.stencil.copyTo(iW.stencil);
+         for (const mW in this._textures) iW.setTexture(mW, this._textures[mW]);
+         for (const mW in this._internalTextures) iW.setInternalTexture(mW, this._internalTextures[mW]);
+         for (const mW in this._textureArrays) iW.setTextureArray(mW, this._textureArrays[mW]);
+         for (const mW in this._externalTextures) iW.setExternalTexture(mW, this._externalTextures[mW]);
+         for (const mW in this._ints) iW.setInt(mW, this._ints[mW]);
+         for (const mW in this._uints) iW.setUInt(mW, this._uints[mW]);
+         for (const mW in this._floats) iW.setFloat(mW, this._floats[mW]);
+         for (const mW in this._floatsArrays) iW.setFloats(mW, this._floatsArrays[mW]);
+         for (const mW in this._colors3) iW.setColor3(mW, this._colors3[mW]);
+         for (const mW in this._colors3Arrays) iW._colors3Arrays[mW] = this._colors3Arrays[mW];
+ ... (202 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/300.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/300.js` (87 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008)

#### 1. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L4-L142` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L4-L6) · [Before (L4-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L4-L142)

```diff
-   41694: (ee, ie, He) => {
-     He.d(ie, {
-       $: () => iH,
-       $c: () => ye,
-       $d: () => ue,
-       $e: () => lH,
-       $f: () => hH,
-       A: () => Ii,
-       Ae: () => TH,
-       Bd: () => ae,
-       Db: () => Xe,
-       Dc: () => je,
-       Df: () => Hy,
-       E: () => ke,
-       Ec: () => Ni,
-       Ee: () => NH,
- ... (123 more removed lines; see GitHub link above)
+   42e3: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => dO
```

#### 2. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L144-L784` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L8-L12) · [Before (L144-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L144-L784)

```diff
-     const ye = -2147483648,
-       be = 12,
-       Me = 12,
-       Ke = 4095,
-       Ue = {
-         Lifeform: 1,
-         Throwable: 2,
-         Mesh: 3,
-         Audio: 4,
-         Item: 5
-       },
-       Fe = {
-         Alive: 1,
-         Crouching: 2,
-         OnGround: 4,
-         InFluid: 8,
- ... (625 more removed lines; see GitHub link above)
+     var mW = OW(62),
+       EW = OW(1089),
+       NW = OW.n(EW);
+     const PW = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
+       LW = 3e3;
```

#### 3. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L786-L840` → after: `L14-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L14-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L14-L23) · [Before (L786-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L786-L840)

```diff
-     function oH(ee, ie, He, ye, be) {
-       var Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe, Xe, ze, Be, Ee, ge, Oe, de, We, te, Ze, we, De, Pe;
-       switch (ee) {
-         case 32:
-           return 4 === ye && (null === (Me = be.tickEnd) || void 0 === Me || Me.call(be, zi.YR(ie, He)), !0);
-         case 33:
-           return 12 === ye && (null === (Ke = be.entitySpawned) || void 0 === Ke || Ke.call(be, Bi.serverId(ie, He), Bi.index(ie, He), Bi.kind(ie, He)), !0);
-         case 34:
-           return 12 === ye && (null === (Ue = be.entityDespawned) || void 0 === Ue || Ue.call(be, Bi.serverId(ie, He), Bi.index(ie, He), Bi.kind(ie, He)), !0);
-         case 39:
-           return !(ye < 20) && (null === (Fe = be.changeBlockFail) || void 0 === Fe || Fe.call(be, Ei.pos(ie, He, 0), Ei.pos(ie, He, 1), Ei.pos(ie, He, 2), Ei.actual(ie, He), Ei.dataLen(ie, He), He + 20, ye - 20), !0);
-         case 46:
-           return 0 === ye && (null === (Je = be.changeBlockFailEnd) || void 0 === Je || Je.call(be), !0);
-         case 48:
-           return 20 === ye && (null === (oe = be.inventoryEvent) || void 0 === oe || oe.call(be, gi.what(ie, He), gi.value(ie, He), gi.pos(ie, He, 0), gi.pos(ie, He, 1), gi.pos(ie, He, 2), gi.block(ie, He)), !0);
-         case 49:
- ... (39 more removed lines; see GitHub link above)
+     function cW(WW) {
+       return WW.down && WW.inPlay && !WW.bound
+     }
+ 
+     function wW(WW, iW) {
+       let OW = 0,
+         mW = WW.length;
+       for (; OW < mW;) {
+         const EW = OW + mW >> 1;
+         WW[EW].atMs <= iW ? OW = EW + 1 : mW = EW
```

#### 4. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L899` → after: `L29-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L29-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L29-L33) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L899)

```diff
-       return kH.buffer !== ee.buffer && (kH = new Uint8Array(ee.buffer)), kH
+       let {
+         code: iW,
+         unbound: OW
+       } = WW;
+       return `${iW}:${OW}`
```

#### 5. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L902-L905` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L36-L37) · [Before (L902-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L902-L905)

```diff
-     function fH(ee, ie, He) {
-       const ye = ee.gR(66, ie, 4);
-       if (ye < 0) return !1;
-       return ee.view.setUint8(ye + 0, He), !0
+     function ZW(WW, iW) {
+       return iW[1] - WW[1] || (WW[0] < iW[0] ? -1 : 1)
```

#### 6. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L908-L911` → after: `L74-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L74-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L74-L79) · [Before (L908-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L908-L911)

```diff
-     function TH(ee, ie, He) {
-       const ye = ee.gR(67, ie, 4);
-       if (ye < 0) return !1;
-       return ee.view.setUint32(ye + 0, He, !0), !0
+     function lW(WW) {
+       var iW;
+       const OW = xW[WW];
+       if (void 0 !== OW) return OW;
+       const mW = null !== (iW = /^(?:Key|Digit)(.)$/.exec(WW)) && void 0 !== iW ? iW : /^Numpad(.+)$/.exec(WW);
+       return null !== mW ? WW.startsWith("Numpad") ? `Num ${mW[1]}` : mW[1] : WW
```

#### 7. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L914-L917` → after: `L86-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L86-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L86-L91) · [Before (L914-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L914-L917)

```diff
-     function pH(ee, ie, He) {
-       const ye = ee.gR(68, ie, 4);
-       if (ye < 0) return !1;
-       return ee.view.setUint8(ye + 0, He), !0
+     function kW(WW) {
+       const iW = Math.max(0, Math.floor(WW / 1e3)),
+         OW = Math.floor(iW / 3600),
+         mW = Math.floor(iW % 3600 / 60),
+         EW = String(iW % 60).padStart(2, "0");
+       return OW > 0 ? `${OW}:${String(mW).padStart(2,"0")}:${EW}` : `${mW}:${EW}`
```

#### 8. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L920-L924` → after: `L94-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L94-L95) · [Before (L920-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L920-L924)

```diff
-     function XH(ee, ie, He, ye) {
-       const be = ee.gR(69, ie, 4 + ye.length);
-       if (be < 0) return !1;
-       const Me = ee.view;
-       return Me.setUint8(be + 0, He), qH(Me).set(ye, Me.byteOffset + be + 4), !0
+     function sW(WW, iW) {
+       return getComputedStyle(WW).getPropertyValue(iW).trim()
```

#### 9. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L927-L931` → after: `L98-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L98-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L98-L106) · [Before (L927-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L927-L931)

```diff
-     function zH(ee, ie, He, ye, be) {
-       const Me = ee.gR(128, ie, 4 + be.length);
-       if (Me < 0) return !1;
-       const Ke = ee.view;
-       return Ke.setUint8(Me + 0, He), Ke.setUint16(Me + 2, ye, !0), qH(Ke).set(be, Ke.byteOffset + Me + 4), !0
+     function MW(WW, iW) {
+       switch (WW.kind) {
+         case "note":
+           return WW.label;
+         case "hidden":
+           return iW.tabHidden;
+         default:
+           return iW[WW.kind]
+       }
```

#### 10. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L934-L937` → after: `L109-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L109-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L109-L127) · [Before (L934-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L934-L937)

```diff
-     function BH(ee, ie, He) {
-       const ye = ee.gR(131, ie, 4);
-       if (ye < 0) return !1;
-       return ee.view.setInt32(ye + 0, He, !0), !0
+     function KW(WW) {
+       let {
+         draw: iW,
+         className: OW
+       } = WW;
+       const EW = (0, mW.useRef)(null);
+       return (0, mW.useEffect)((() => {
+         const WW = EW.current,
+           OW = WW.getContext("2d");
+         if (null === iW || null === OW) return;
+         const {
+           clientWidth: mW,
+           clientHeight: NW
+         } = WW, PW = window.devicePixelRatio;
+         WW.width = Math.round(mW * PW), WW.height = Math.round(NW * PW), OW.setTransform(PW, 0, 0, PW, 0, 0), iW(OW, mW, NW, WW)
+       }), [iW]), (0, jW.jsx)("canvas", {
+ ... (3 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L940-L943` → after: `L130-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L130-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L130-L350) · [Before (L940-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L940-L943)

```diff
-     function EH(ee, ie, He) {
-       const ye = ee.gR(132, ie, 4);
-       if (ye < 0) return !1;
-       return ee.view.setUint32(ye + 0, He, !0), !0
+     function SW(WW) {
+       let {
+         controller: iW,
+         frames: OW,
+         input: EW,
+         markers: NW,
+         inactiveRanges: PW,
+         videoGaps: wW,
+         labels: tW
+       } = WW;
+       const {
+         timeline: xW
+       } = iW, SW = (0, mW.useRef)(null), [YW, yW] = (0, mW.useState)(0), [TW, JW] = (0, mW.useState)(null), hW = (0, mW.useRef)(null), HW = Math.max(1, xW.durationMs);
+       ! function(WW, iW, OW) {
+         (0, mW.useEffect)((() => {
+           let mW = 0,
+ ... (205 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L946-L949` → after: `L364-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L364-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L364-L373) · [Before (L946-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L946-L949)

```diff
-     function gH(ee, ie, He) {
-       const ye = ee.gR(133, ie, 4);
-       if (ye < 0) return !1;
-       return ee.view.setUint32(ye + 0, He, !0), !0
+     function vW(WW) {
+       const iW = WW.filter((WW => WW.endMs > WW.startMs)).sort(((WW, iW) => WW.startMs - iW.startMs)),
+         OW = [];
+       for (const mW of iW) {
+         const WW = OW.at(-1);
+         void 0 !== WW && mW.startMs <= WW.endMs ? WW.endMs = Math.max(WW.endMs, mW.endMs) : OW.push({
+           ...mW
+         })
+       }
+       return OW
```

#### 13. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L951-L955` → after: `L375-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L375-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L375-L412) · [Before (L951-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L951-L955)

```diff
- 
-     function OH(ee, ie, He) {
-       const ye = ee.gR(144, ie, 4);
-       if (ye < 0) return !1;
-       return ee.view.setUint8(ye + 0, He), !0
+     class gW {
+       constructor(WW) {
+         this.kj = void 0, this.durationMs = void 0, this.positionStarts = void 0, this.kj = vW(WW), this.positionStarts = [];
+         let iW = 0;
+         for (const OW of this.kj) this.positionStarts.push(iW), iW += OW.endMs - OW.startMs;
+         this.durationMs = iW
+       }
+       get startMs() {
+         var WW, iW;
+         return null !== (WW = null === (iW = this.kj[0]) || void 0 === iW ? void 0 : iW.startMs) && void 0 !== WW ? WW : 0
+       }
+       get endMs() {
+         var WW, iW;
+         return null !== (WW = null === (iW = this.kj.at(-1)) || void 0 === iW ? void 0 : iW.endMs) && void 0 !== WW ? WW : 0
+       }
+       toPosition(WW) {
+ ... (22 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L958-L962` → after: `L415-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L415-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L415-L416) · [Before (L958-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L958-L962)

```diff
-     function dH(ee, ie, He, ye, be) {
-       const Me = ee.gR(145, ie, 12);
-       if (Me < 0) return !1;
-       const Ke = ee.view;
-       return Ke.setInt32(Me + 0, He, !0), Ke.setInt32(Me + 4, ye, !0), Ke.setInt32(Me + 8, be, !0), !0
+     function DW(WW) {
+       return [...WW].sort(((WW, iW) => WW.startMs - iW.startMs))
```

#### 15. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L965-L969` → after: `L419-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L419-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L419-L466) · [Before (L965-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L965-L969)

```diff
-     function WH(ee, ie, He, ye) {
-       const be = ee.gR(256, ie, 4 + ye.length);
-       if (be < 0) return !1;
-       const Me = ee.view;
-       return Me.setUint16(be + 0, He, !0), qH(Me).set(ye, Me.byteOffset + be + 4), !0
+     function VW(WW, iW) {
+       let OW = 1 / 0,
+         mW = -1 / 0;
+       const EW = WW => {
+         OW = Math.min(OW, WW), mW = Math.max(mW, WW)
+       };
+       for (const NW of [...WW.videoSegments, ...WW.telemetryChunks]) EW(NW.startMs), EW(NW.endMs);
+       for (const NW of WW.domEvents) EW(iW.toEpoch(NW.timestamp));
+       return OW < mW ? {
+         startMs: OW,
+         endMs: mW
+       } : {
+         startMs: 0,
+         endMs: 0
+       }
+     }
+ ... (32 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L973-L975` → after: `L511-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L511-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L511-L535) · [Before (L973-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L973-L975)

```diff
-       const ye = ee.gR(258, ie, 4);
-       if (ye < 0) return !1;
-       return ee.view.setUint8(ye + 0, He), !0
+       return function(WW, iW) {
+         const OW = [];
+         for (const mW of WW) {
+           let WW = mW.startMs;
+           for (const EW of iW) EW.endMs <= WW || EW.startMs >= mW.endMs || (EW.startMs > WW && OW.push({
+             startMs: WW,
+             endMs: EW.startMs
+           }), WW = Math.max(WW, EW.endMs));
+           WW < mW.endMs && OW.push({
+             startMs: WW,
+             endMs: mW.endMs
+           })
+         }
+         return OW
+       }(function(WW) {
+         const iW = [];
+ ... (9 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L978-L985` → after: `L538-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L538-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L538-L540) · [Before (L978-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L978-L985)

```diff
-     function ZH(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
-       const Je = ee.gR(320, ie, 48 + Fe.length);
-       if (Je < 0) return !1;
-       const oe = ee.view;
-       oe.setUint32(Je + 0, He, !0), oe.setUint16(Je + 4, ye, !0), oe.setUint16(Je + 6, be, !0), oe.setUint32(Je + 8, Me, !0);
-       for (let Re = 0; Re < 3; Re++) oe.setFloat64(Je + 12 + 8 * Re, Ke[Re], !0);
-       for (let Re = 0; Re < 3; Re++) oe.setFloat32(Je + 36 + 4 * Re, Ue[Re], !0);
-       return qH(oe).set(Fe, oe.byteOffset + Je + 48), !0
+     function aW(WW) {
+       var iW, OW, mW;
+       return WW.type === eW.e.IncrementalSnapshot ? XW.has(null !== (OW = null === (mW = WW.data) || void 0 === mW ? void 0 : mW.source) && void 0 !== OW ? OW : -1) : WW.type === eW.e.Custom && (null === (iW = WW.data) || void 0 === iW ? void 0 : iW.tag) === BW
```

#### 18. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L988-L995` → after: `L543-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L543-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L543-L562) · [Before (L988-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L988-L995)

```diff
-     function wH(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
-       const Je = ee.gR(321, ie, 48 + Fe.length);
-       if (Je < 0) return !1;
-       const oe = ee.view;
-       oe.setUint32(Je + 0, He, !0), oe.setInt32(Je + 4, ye, !0), oe.setUint16(Je + 8, be, !0), oe.setUint16(Je + 10, Me, !0);
-       for (let Re = 0; Re < 3; Re++) oe.setFloat64(Je + 12 + 8 * Re, Ke[Re], !0);
-       for (let Re = 0; Re < 3; Re++) oe.setFloat32(Je + 36 + 4 * Re, Ue[Re], !0);
-       return qH(oe).set(Fe, oe.byteOffset + Je + 48), !0
+     function rW(WW, iW) {
+       const OW = [];
+       for (const PW of WW)
+         if (PW.type === eW.e.Custom) {
+           var mW;
+           const WW = null === (mW = PW.data) || void 0 === mW ? void 0 : mW.tag,
+             EW = void 0 === WW ? void 0 : GW[WW];
+           void 0 !== EW && OW.push({
+             kind: EW,
+             atMs: iW.toEpoch(PW.timestamp)
+           })
+         } else if (PW.type === eW.e.Plugin) {
+         var EW, NW;
+         const WW = PW.data;
+         "rrweb/console@1" !== (null === WW || void 0 === WW ? void 0 : WW.plugin) || "error" !== (null === (EW = WW.payload) || void 0 === EW ? void 0 : EW.level) && "assert" !== (null === (NW = WW.payload) || void 0 === NW ? void 0 : NW.level) || OW.push({
+           kind: "error",
+ ... (4 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L997-L1005` → after: `L564-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L564-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L564-L597) · [Before (L997-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L997-L1005)

```diff
- 
-     function DH(ee, ie, He, ye, be, Me, Ke) {
-       const Ue = ee.gR(322, ie, 44 + Ke.length);
-       if (Ue < 0) return !1;
-       const Fe = ee.view;
-       Fe.setUint32(Ue + 0, He, !0), Fe.setUint32(Ue + 4, ye, !0);
-       for (let Je = 0; Je < 3; Je++) Fe.setFloat64(Ue + 8 + 8 * Je, be[Je], !0);
-       for (let Je = 0; Je < 3; Je++) Fe.setFloat32(Ue + 32 + 4 * Je, Me[Je], !0);
-       return qH(Fe).set(Ke, Fe.byteOffset + Ue + 44), !0
+     const zW = 3e6;
+     class FW {
+       constructor(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
+           mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zW;
+         this.fetchUrls = WW, this.onUrls = iW, this.wallNowMs = OW, this.refreshableAfterMs = mW, this.lastRefreshWallMs = -1 / 0, this.urlsFetchedAtWallMs = void 0, this.inFlight = !1, this.timer = null, this.destroyed = !1, this.urlsFetchedAtWallMs = OW()
+       }
+       get refreshing() {
+         return this.inFlight
+       }
+       request() {
+         if (null === this.fetchUrls || this.destroyed || null !== this.timer || this.inFlight) return;
+         if (this.wallNowMs() - this.urlsFetchedAtWallMs < this.refreshableAfterMs) return;
+         const WW = this.lastRefreshWallMs + 6e4 - this.wallNowMs();
+         WW > 0 ? this.timer = setTimeout((() => {
+           this.timer = null, this.request()
+ ... (18 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1007-L1011` → after: `L599-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L599-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L599-L759) · [Before (L1007-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1007-L1011)

```diff
- 
-     function PH(ee, ie, He) {
-       const ye = ee.gR(323, ie, 4);
-       if (ye < 0) return !1;
-       return ee.view.setUint32(ye + 0, He, !0), !0
+     class QW {
+       constructor(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
+           mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zW;
+         this.source = WW, this.description = iW, this.wallNowMs = OW, this.refreshableAfterMs = mW, this.entries = new Map, this.unavailable = new Set, this.inFlight = !1, this.failedFetches = 0, this.retryAtWallMs = -1 / 0, this.destroyed = !1
+       }
+       reset(WW) {
+         this.entries.clear(), this.unavailable.clear(), this.failedFetches = 0, this.retryAtWallMs = -1 / 0;
+         const iW = this.wallNowMs();
+         for (const OW of WW) this.entries.set(OW.sequence, {
+           urls: OW,
+           fetchedAtWallMs: iW
+         })
+       }
+       get(WW) {
+         const iW = this.getFresh(WW);
+ ... (145 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1014-L1020` → after: `L762-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L762-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L762-L770) · [Before (L1014-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1014-L1020)

```diff
-     function AH(ee, ie, He, ye, be, Me) {
-       const Ke = ee.gR(324, ie, 32 + Me.length);
-       if (Ke < 0) return !1;
-       const Ue = ee.view;
-       Ue.setUint32(Ke + 0, He, !0), Ue.setUint32(Ke + 4, ye, !0);
-       for (let Fe = 0; Fe < 3; Fe++) Ue.setFloat64(Ke + 8 + 8 * Fe, be[Fe], !0);
-       return qH(Ue).set(Me, Ue.byteOffset + Ke + 32), !0
+     function ii(WW) {
+       return {
+         inputRecorded: WW.some((WW => WW.keys.length > 0)),
+         frames: WW.flatMap((WW => WW.frames)),
+         states: WW.flatMap((WW => WW.states)),
+         events: WW.flatMap((WW => WW.events)),
+         actions: WW.flatMap((WW => WW.actions)),
+         keys: WW.flatMap((WW => WW.keys))
+       }
```

#### 22. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1024` → after: `L774-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L774-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L774-L783) · [Before (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1024)

```diff
-       return !(ee.gR(325, ie, 0) < 0)
+       const {
+         actions: OW
+       } = WW;
+       return !WW.inputRecorded || OW.length > 0 && OW[0].atMs <= iW.startMs + 1 ? WW : {
+         ...WW,
+         actions: [{
+           atMs: iW.startMs,
+           bits: 0
+         }, ...OW]
+       }
```

#### 23. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1027-L1031` → after: `L786-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L786-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L786-L796) · [Before (L1027-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1027-L1031)

```diff
-     function VH(ee, ie, He, ye, be, Me) {
-       const Ke = ee.gR(384, ie, 16);
-       if (Ke < 0) return !1;
-       const Ue = ee.view;
-       return Ue.setUint32(Ke + 0, He, !0), Ue.setUint32(Ke + 4, ye, !0), Ue.setFloat32(Ke + 8, be, !0), Ue.setFloat32(Ke + 12, Me, !0), !0
+     function mi(WW) {
+       return WW.flatMap((WW => {
+         let {
+           sequence: iW,
+           url: OW
+         } = WW;
+         return void 0 === iW || void 0 === OW ? [] : [{
+           sequence: iW,
+           url: OW
+         }]
+       }))
```

#### 24. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1034-L1040` → after: `L799-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L799-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L799-L800) · [Before (L1034-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1034-L1040)

```diff
-     function aH(ee, ie, He, ye, be, Me, Ke) {
-       const Ue = ee.gR(385, ie, 36 + Ke.length);
-       if (Ue < 0) return !1;
-       const Fe = ee.view;
-       Fe.setUint32(Ue + 0, He, !0), Fe.setUint32(Ue + 4, ye, !0);
-       for (let Je = 0; Je < 3; Je++) Fe.setFloat64(Ue + 8 + 8 * Je, be[Je], !0);
-       return Fe.setUint32(Ue + 32, Me, !0), qH(Fe).set(Ke, Fe.byteOffset + Ue + 36), !0
+     function Ei(WW, iW) {
+       return WW < iW.startMs ? iW.startMs - WW : WW > iW.endMs ? 2 * (WW - iW.endMs) : 0
```

#### 25. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1042-L1050` → after: `L802-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L802-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L802-L890) · [Before (L1042-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1042-L1050)

```diff
- 
-     function cH(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
-       const Je = ee.gR(386, ie, 56 + Fe.length);
-       if (Je < 0) return !1;
-       const oe = ee.view;
-       oe.setUint32(Je + 0, He, !0), oe.setUint8(Je + 4, ye);
-       for (let Re = 0; Re < 4; Re++) oe.setFloat32(Je + 8 + 4 * Re, be[Re], !0);
-       for (let Re = 0; Re < 3; Re++) oe.setFloat64(Je + 24 + 8 * Re, Me[Re], !0);
-       return oe.setUint32(Je + 48, Ke, !0), oe.setUint32(Je + 52, Ue, !0), qH(oe).set(Fe, oe.byteOffset + Je + 56), !0
+     class Ni {
+       constructor(WW, iW, OW, mW) {
+         this.data = WW, this.domClock = iW, this.timeline = OW, this.options = mW, this.telemetry = void 0, this.activityTimes = void 0, this.markerList = [], this.inactiveRangeList = [], this.videoGapRanges = [], this.activityTimes = function(WW, iW) {
+           return WW.filter(aW).map((WW => iW.toEpoch(WW.timestamp)))
+         }(WW.domEvents, iW), this.telemetry = new Wi(WW.telemetryChunks, mW.loadTelemetryChunk, (() => {
+           this.rebuild()
+         }), mW.onTelemetryFailed, mW.telemetryUrls), this.rebuild()
+       }
+       get markers() {
+         return this.markerList
+       }
+       get inactiveRanges() {
+         return this.inactiveRangeList
+       }
+       get videoGaps() {
+         return this.videoGapRanges
+ ... (73 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1053-L1062` → after: `L893-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L893-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L893-L894) · [Before (L1053-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1053-L1062)

```diff
-     function xH(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
-       const Je = ee.gR(387, ie, 56);
-       if (Je < 0) return !1;
-       const oe = ee.view;
-       oe.setUint32(Je + 0, He, !0), oe.setUint16(Je + 4, ye, !0), oe.setUint8(Je + 6, be);
-       for (let Re = 0; Re < 3; Re++) oe.setFloat64(Je + 8 + 8 * Re, Me[Re], !0);
-       for (let Re = 0; Re < 2; Re++) oe.setFloat32(Je + 32 + 4 * Re, Ke[Re], !0);
-       oe.setFloat32(Je + 40, Ue, !0);
-       for (let Re = 0; Re < 3; Re++) oe.setFloat32(Je + 44 + 4 * Re, Fe[Re], !0);
-       return !0
+     function Pi(WW) {
+       return iW => WW >= iW.startMs && WW < iW.endMs
```

#### 27. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1064-L1068` → after: `L896-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L896-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L896-L935) · [Before (L1064-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1064-L1068)

```diff
- 
-     function LH(ee, ie, He) {
-       const ye = ee.gR(388, ie, 4);
-       if (ye < 0) return !1;
-       return ee.view.setUint32(ye + 0, He, !0), !0
+     class Li {
+       constructor() {
+         this.addedAt = new Map, this.settleQueued = !1, this.plugin = {
+           handler: (WW, iW, OW) => {
+             let {
+               replayer: mW
+             } = OW;
+             this.record(WW), iW && !this.settleQueued && (this.settleQueued = !0, queueMicrotask((() => {
+               this.settleQueued = !1, this.settle(mW)
+             })))
+           }
+         }
+       }
+       settle(WW) {
+         const iW = WW.iframe.contentDocument;
+         if (null === iW || void 0 === iW || !iW.documentElement.classList.contains("rrweb-paused")) return;
+ ... (24 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1071-L1075` → after: `L949-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L949-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L949-L962) · [Before (L1071-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1071-L1075)

```diff
-     function CH(ee, ie, He, ye) {
-       const be = ee.gR(389, ie, 8);
-       if (be < 0) return !1;
-       const Me = ee.view;
-       return Me.setInt32(be + 0, He, !0), Me.setFloat32(be + 4, ye, !0), !0
+     function si(WW, iW) {
+       let {
+         hosts: OW
+       } = iW, mW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const EW = WW.trim();
+       if (/[\\\u0000-\u001f]/.test(EW)) return !1;
+       if (!ji.test(EW)) return !0;
+       let NW;
+       try {
+         NW = new URL(EW.startsWith("//") ? `https:${EW}` : EW)
+       } catch {
+         return !1
+       }
+       return "data:" === NW.protocol ? mW ? "text/css" !== EW.slice(5).split(/[,;]/)[0].trim().toLowerCase() : Ui.test(EW) : "blob:" === NW.protocol || ("http:" === NW.protocol || "https:" === NW.protocol) && OW.some((WW => NW.hostname === WW || NW.hostname.endsWith(`.${WW}`)))
```

#### 29. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1078-L1082` → after: `L965-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L965-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L965-L971) · [Before (L1078-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1078-L1082)

```diff
-     function vH(ee, ie, He, ye) {
-       const be = ee.gR(390, ie, 8);
-       if (be < 0) return !1;
-       const Me = ee.view;
-       return Me.setInt32(be + 0, He, !0), Me.setFloat32(be + 4, ye, !0), !0
+     function Mi(WW, iW) {
+       return WW.replace(xi, (function(WW) {
+         for (var OW = arguments.length, mW = new Array(OW > 1 ? OW - 1 : 0), EW = 1; EW < OW; EW++) mW[EW - 1] = arguments[EW];
+         if (si(mW.slice(0, 7).find((WW => "string" === typeof WW)), iW, !0)) return WW;
+         const NW = WW.slice(0, 4).toLowerCase();
+         return "url(" === NW ? `url("${ki}")` : "@imp" === NW ? `@import "${ki}"` : `"${ki}"`
+       }))
```

#### 30. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1085-L1089` → after: `L974-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L974-L975) · [Before (L1085-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1085-L1089)

```diff
-     function uH(ee, ie, He, ye, be, Me) {
-       const Ke = ee.gR(391, ie, 12);
-       if (Ke < 0) return !1;
-       const Ue = ee.view;
-       return Ue.setFloat32(Ke + 0, He, !0), Ue.setFloat32(Ke + 4, ye, !0), Ue.setUint8(Ke + 8, be), Ue.setUint8(Ke + 9, Me), !0
+     function Ki(WW) {
+       return bi.test(WW.replace(xi, '""'))
```

#### 31. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1092-L1095` → after: `L978-L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L978-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L978-L991) · [Before (L1092-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1092-L1095)

```diff
-     function mH(ee, ie, He) {
-       const ye = ee.gR(392, ie, 4);
-       if (ye < 0) return !1;
-       return ee.view.setUint32(ye + 0, He, !0), !0
+     function Si(WW) {
+       let iW = "between";
+       for (let OW = 0; OW < WW.length; OW++) {
+         const mW = WW[OW];
+         if ("/" === mW && "*" === WW[OW + 1]) {
+           if (OW = WW.indexOf("*/", OW + 2), -1 === OW) return "open";
+           OW++, iW = "between"
+         } else if ('"' === mW || "'" === mW) {
+           for (OW++; OW < WW.length && WW[OW] !== mW && !/[\n\r\f]/.test(WW[OW]); OW++) "\\" === WW[OW] && OW++;
+           if (OW >= WW.length) return "open";
+           iW = "token"
+         } else "\\" === mW ? (OW++, iW = "token") : ";" === mW || "{" === mW || "}" === mW ? iW = "between" : /\s/.test(mW) || (iW = "token")
+       }
+       return iW
```

#### 32. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1098-L1102` → after: `L994-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L994-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L994-L1001) · [Before (L1098-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1098-L1102)

```diff
-     function lH(ee, ie, He, ye, be) {
-       const Me = ee.gR(393, ie, 12);
-       if (Me < 0) return !1;
-       const Ke = ee.view;
-       return Ke.setUint32(Me + 0, He, !0), Ke.setUint16(Me + 4, ye, !0), Ke.setFloat32(Me + 8, be, !0), !0
+     function Yi(WW, iW) {
+       const OW = Mi(WW, iW);
+       if (Ki(OW) || "open" === Si(OW)) return "";
+       if (!OW.includes("\\")) return OW;
+       const mW = function(WW) {
+         return WW.replace(Ai, ((WW, iW, OW) => void 0 !== iW ? String.fromCodePoint(Math.min(parseInt(iW, 16), 1114111)) : null !== OW && void 0 !== OW ? OW : ""))
+       }(OW);
+       return Mi(mW, iW) !== mW || Ki(mW) ? "" : OW
```

#### 33. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1105-L1113` → after: `L1004-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1004-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1004-L1006) · [Before (L1105-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1105-L1113)

```diff
-     function SH(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re) {
-       const ke = ee.gR(394, ie, 56 + Re.length);
-       if (ke < 0) return !1;
-       const qe = ee.view;
-       qe.setUint32(ke + 0, He, !0), qe.setUint16(ke + 4, ye, !0), qe.setUint8(ke + 6, be), qe.setUint8(ke + 7, Me);
-       for (let fe = 0; fe < 3; fe++) qe.setFloat64(ke + 8 + 8 * fe, Ke[fe], !0);
-       qe.setFloat32(ke + 32, Ue, !0), qe.setInt32(ke + 36, Fe, !0);
-       for (let fe = 0; fe < 3; fe++) qe.setFloat32(ke + 40 + 4 * fe, Je[fe], !0);
-       return qe.setFloat32(ke + 52, oe, !0), qH(qe).set(Re, qe.byteOffset + ke + 56), !0
+     function yi(WW, iW) {
+       const OW = li.test(WW) ? Yi(WW, iW) : WW;
+       return OW.split("/* rr_split */").every((WW => "between" === Si(WW))) ? OW : ""
```

#### 34. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1117-L1119` → after: `L1010-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1010-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1010-L1039) · [Before (L1117-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1117-L1119)

```diff
-       const ye = ee.gR(398, ie, 4);
-       if (ye < 0) return !1;
-       return ee.view.setUint32(ye + 0, He, !0), !0
+       if ("string" === typeof iW) {
+         const mW = WW.toLowerCase();
+         if (Zi.has(mW)) return null;
+         if (wi.has(mW)) return function(WW, iW) {
+           return WW.split(",").every((WW => {
+             const OW = WW.trim().split(/\s+/)[0];
+             return void 0 === OW || "" === OW || si(OW, iW)
+           }))
+         }(iW, OW) ? iW : null;
+         if (ti.has(mW)) {
+           return iW.split(";").every((WW => si(WW, OW))) ? Ti("", iW, OW) : null
+         }
+         return ci.has(mW) ? si(iW, OW) ? iW : null : "_csstext" === mW ? yi(iW, OW) : li.test(iW) ? Yi(iW, OW) : iW
+       }
+       if (Array.isArray(iW)) return iW.map((WW => Ti("", WW, OW)));
+       if (null !== iW && "object" === typeof iW) {
+ ... (14 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1122-L1126` → after: `L1042-L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1042-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1042-L1054) · [Before (L1122-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1122-L1126)

```diff
-     function jH(ee, ie, He, ye, be) {
-       const Me = ee.gR(399, ie, 12);
-       if (Me < 0) return !1;
-       const Ke = ee.view;
-       return Ke.setUint32(Me + 0, He, !0), Ke.setUint32(Me + 4, ye, !0), Ke.setFloat32(Me + 8, be, !0), !0
+     function Ji(WW, iW) {
+       const OW = (WW, mW) => {
+         if (null === WW || "object" !== typeof WW) return;
+         const EW = WW;
+         if (iW(EW, mW), Array.isArray(EW.childNodes))
+           for (const iW of EW.childNodes) OW(iW, EW.id)
+       };
+       for (const mW of WW) {
+         const WW = mW.data;
+         if (mW.type === eW.e.FullSnapshot) OW(null === WW || void 0 === WW ? void 0 : WW.node, null);
+         else if (mW.type === eW.e.IncrementalSnapshot && Array.isArray(null === WW || void 0 === WW ? void 0 : WW.adds))
+           for (const iW of WW.adds) OW(null === iW || void 0 === iW ? void 0 : iW.node, null === iW || void 0 === iW ? void 0 : iW.parentId)
+       }
```

#### 36. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1129-L1132` → after: `L1057-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1057-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1057-L1076) · [Before (L1129-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1129-L1132)

```diff
-     function sH(ee, ie, He) {
-       const ye = ee.gR(448, ie, 4);
-       if (ye < 0) return !1;
-       return ee.view.setFloat32(ye + 0, He, !0), !0
+     function Hi(WW) {
+       const iW = new Set,
+         OW = [];
+       Ji(WW, ((WW, mW) => {
+         let {
+           id: EW,
+           tagName: NW
+         } = WW;
+         "number" === typeof EW && ("string" === typeof NW && "style" === NW.toLowerCase() && iW.add(EW), OW.push({
+           id: EW,
+           parentId: mW
+         }))
+       }));
+       const mW = new Set;
+       for (const {
+           id: EW,
+ ... (4 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1135-L1140` → after: `L1104-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1104-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1104-L1111) · [Before (L1135-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1135-L1140)

```diff
-     function IH(ee, ie, He, ye) {
-       const be = ee.gR(450, ie, 12);
-       if (be < 0) return !1;
-       const Me = ee.view;
-       for (let Ke = 0; Ke < 2; Ke++) Me.setFloat32(be + 0 + 4 * Ke, He[Ke], !0);
-       return Me.setUint8(be + 8, ye), !0
+     function Di(WW, iW) {
+       return WW.replace(ei, (WW => WW.replace(vi, ((WW, OW, mW) => {
+         const EW = OW.toLowerCase(),
+           NW = ni[iW][EW];
+         if (void 0 === mW) return "none" === NW ? di : oi;
+         const PW = mW.toLowerCase();
+         return ui[EW].includes(PW) ? PW === NW ? oi : di : WW
+       }))))
```

#### 38. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1143-L1147` → after: `L1114-L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1114-L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1114-L1118) · [Before (L1143-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1143-L1147)

```diff
-     function hH(ee, ie, He, ye) {
-       const be = ee.gR(452, ie, 8);
-       if (be < 0) return !1;
-       const Me = ee.view;
-       return Me.setFloat32(be + 0, He, !0), Me.setUint8(be + 4, ye), !0
+     function Vi(WW) {
+       const iW = WW.attributes,
+         OW = null === iW || void 0 === iW ? void 0 : iW.rel,
+         mW = null === iW || void 0 === iW ? void 0 : iW.href;
+       return "link" === WW.tagName && "string" === typeof OW && OW.toLowerCase().split(/\s+/).includes("stylesheet") && "string" === typeof mW ? mW : null
```

#### 39. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1150-L1154` → after: `L1121-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1121-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1121-L1138) · [Before (L1150-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1150-L1154)

```diff
-     function NH(ee, ie, He, ye, be) {
-       const Me = ee.gR(454, ie, 4);
-       if (Me < 0) return !1;
-       const Ke = ee.view;
-       return Ke.setUint8(Me + 0, He), Ke.setUint8(Me + 1, ye), Ke.setUint8(Me + 2, be), !0
+     function fi(WW) {
+       const iW = new Map;
+       Ji(WW, (WW => {
+         const OW = Vi(WW);
+         null !== OW && iW.set(WW.id, OW)
+       }));
+       const OW = new Map;
+       for (const EW of WW) {
+         const WW = EW.data;
+         if (EW.type === eW.e.IncrementalSnapshot && (null === WW || void 0 === WW ? void 0 : WW.source) === eW.h.Mutation)
+           for (const EW of null !== (mW = WW.attributes) && void 0 !== mW ? mW : []) {
+             var mW;
+             const WW = EW.attributes._cssText,
+               NW = iW.get(EW.id);
+             "string" !== typeof WW || void 0 === NW || OW.has(NW) || OW.set(NW, WW)
+           }
+ ... (2 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1157-L1162` → after: `L1141-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1141-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1141-L1183) · [Before (L1157-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1157-L1162)

```diff
-     function GH(ee, ie, He, ye) {
-       const be = ee.gR(455, ie, 40);
-       if (be < 0) return !1;
-       const Me = ee.view;
-       for (let Ke = 0; Ke < 9; Ke++) Me.setInt32(be + 0 + 4 * Ke, He[Ke], !0);
-       return Me.setUint32(be + 36, ye, !0), !0
+     function Ci(WW, iW, OW) {
+       var mW;
+       if ("string" === typeof WW) return null !== OW.pointer && gi.has(iW) ? Di(WW, OW.pointer) : WW;
+       if (Array.isArray(WW)) {
+         let iW = !1;
+         const mW = WW.map((WW => {
+           const mW = Ci(WW, "", OW);
+           return iW ||= mW !== WW, mW
+         }));
+         return iW ? mW : WW
+       }
+       if (null === WW || "object" !== typeof WW) return WW;
+       const EW = function(WW, iW) {
+         const OW = WW.attributes,
+           mW = Vi(WW),
+           EW = null !== mW && void 0 === (null === OW || void 0 === OW ? void 0 : OW._cssText) ? iW.sheets.get(mW) : void 0;
+ ... (27 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1164-L1169` → after: `L1185-L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1185-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1185-L1278) · [Before (L1164-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1164-L1169)

```diff
- 
-     function rH(ee, ie, He, ye) {
-       const be = ee.gR(456, ie, 8);
-       if (be < 0) return !1;
-       const Me = ee.view;
-       return Me.setFloat32(be + 0, He, !0), Me.setUint8(be + 4, ye), !0
+     const Xi = "brv-styles",
+       Bi = [".brv-video-layer { position: absolute !important; margin: 0 !important; padding: 0 !important; border: 0 !important; }", ".brv-video-layer { overflow: hidden !important; pointer-events: none !important; background: none !important; transform: none !important; }", ".b … [truncated]
+       qi = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv- … [truncated]
+     class Ri {
+       static create(WW, iW, OW, mW, EW, NW, PW, LW) {
+         if (!iW.some((WW => WW.type === eW.e.FullSnapshot))) return null;
+         const cW = function(WW, iW) {
+           const OW = {
+             sheets: fi(WW),
+             styleTextIds: Hi(WW),
+             pointer: iW
+           };
+           return WW.map((WW => {
+             if (WW.type !== eW.e.FullSnapshot && WW.type !== eW.e.IncrementalSnapshot) return WW;
+             const iW = Ci(WW.data, "data", OW);
+             return iW === WW.data ? WW : {
+ ... (78 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1171-L1178` → after: `L1280-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1280-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1280-L1305) · [Before (L1171-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1171-L1178)

```diff
- 
-     function QH(ee, ie, He, ye, be) {
-       const Me = ee.gR(457, ie, 16);
-       if (Me < 0) return !1;
-       const Ke = ee.view;
-       for (let Ue = 0; Ue < 3; Ue++) Ke.setInt32(Me + 0 + 4 * Ue, He[Ue], !0);
-       for (let Ue = 0; Ue < 3; Ue++) Ke.setInt8(Me + 12 + 1 * Ue, ye[Ue]);
-       return Ke.setUint8(Me + 15, be), !0
+     const Gi = {
+       width: 1280,
+       height: 720
+     };
+     class Ii {
+       constructor(WW, iW) {
+         this.root = WW, this.onViewportChanged = iW, this.element = void 0, this.viewport = null, this.resizeObserver = void 0, this.element = document.createElement("div"), this.element.className = "brv-stage", WW.appendChild(this.element), this.resizeObserver = new ResizeObserv … [truncated]
+           this.fit()
+         })), this.resizeObserver.observe(WW)
+       }
+       setViewport(WW) {
+         var iW;
+         null === WW || WW.width <= 0 || WW.height <= 0 || WW.width === (null === (iW = this.viewport) || void 0 === iW ? void 0 : iW.width) && WW.height === this.viewport.height || (this.viewport = WW, this.element.style.width = `${WW.width}px`, this.element.style.height = `${WW. … [truncated]
+       }
+       destroy() {
+         this.resizeObserver.disconnect(), this.element.remove()
+ ... (10 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1180-L1185` → after: `L1307-L1355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1307-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1307-L1355) · [Before (L1180-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1180-L1185)

```diff
- 
-     function ey(ee, ie, He, ye) {
-       const be = ee.gR(530, ie, 4 + ye.length);
-       if (be < 0) return !1;
-       const Me = ee.view;
-       return Me.setUint8(be + 0, He), qH(Me).set(ye, Me.byteOffset + be + 4), !0
+     class ai {
+       constructor(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
+           OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zW;
+         this.urls = void 0, this.urls = new QW(WW, "video URLs", iW, OW)
+       }
+       reset(WW) {
+         this.urls.reset(WW.flatMap((WW => {
+           var iW;
+           return null !== (iW = function(WW) {
+             return "url" in WW ? null === WW.url ? null : {
+               sequence: WW.sequence,
+               url: WW.url
+             } : void 0 === WW.partUrls ? null : {
+               sequence: WW.sequence,
+               partUrls: WW.partUrls
+ ... (33 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1188-L1192` → after: `L1358-L1424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1358-L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1358-L1424) · [Before (L1188-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1188-L1192)

```diff
-     function iy(ee, ie, He, ye, be, Me) {
-       const Ke = ee.gR(531, ie, 12 + Me.length);
-       if (Ke < 0) return !1;
-       const Ue = ee.view;
-       return Ue.setFloat32(Ke + 0, He, !0), Ue.setFloat32(Ke + 4, ye, !0), Ue.setUint32(Ke + 8, be, !0), qH(Ue).set(Me, Ue.byteOffset + Ke + 12), !0
+     function zi(WW) {
+       const iW = [];
+       let OW = 0;
+       for (const tW of WW) iW.push(OW), OW += tW.byteLength;
+       let mW = 0;
+       const EW = OW => {
+           for (; iW[mW] > OW;) mW--;
+           for (; mW + 1 < iW.length && iW[mW + 1] <= OW;) mW++;
+           return WW[mW][OW - iW[mW]]
+         },
+         NW = WW => EW(WW) * 2 ** 24 + 65536 * EW(WW + 1) + 256 * EW(WW + 2) + EW(WW + 3);
+       let PW = 0,
+         LW = !1,
+         cW = !1,
+         wW = 0;
+       for (; PW + 8 <= OW;) {
+ ... (51 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1195-L1199` → after: `L1427-L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1427-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1427-L1428) · [Before (L1195-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1195-L1199)

```diff
-     function Hy(ee, ie, He, ye, be, Me) {
-       const Ke = ee.gR(532, ie, 12 + Me.length);
-       if (Ke < 0) return !1;
-       const Ue = ee.view;
-       return Ue.setInt32(Ke + 0, He, !0), Ue.setInt32(Ke + 4, ye, !0), Ue.setUint32(Ke + 8, be, !0), qH(Ue).set(Me, Ue.byteOffset + Ke + 12), !0
+     function WO(WW, iW) {
+       return `${WW}/${iW}`
```

#### 46. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1202-L1206` → after: `L1431-L1441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1431-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1431-L1441) · [Before (L1202-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1202-L1206)

```diff
-     function yy(ee, ie, He, ye, be) {
-       const Me = ee.gR(533, ie, 8 + be.length);
-       if (Me < 0) return !1;
-       const Ke = ee.view;
-       return Ke.setInt32(Me + 0, He, !0), Ke.setInt32(Me + 4, ye, !0), qH(Ke).set(be, Ke.byteOffset + Me + 8), !0
+     function iO(WW) {
+       const iW = function(WW) {
+         return WW.map(((iW, OW) => {
+           const mW = WW[OW + 1];
+           return void 0 === mW ? iW.endMs : Math.min(iW.endMs, mW.startMs)
+         }))
+       }(WW);
+       return WW.map(((WW, OW) => ({
+         ...WW,
+         endMs: iW[OW]
+       }))).filter((WW => WW.endMs > WW.startMs))
```

#### 47. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1210` → after: `L1445-L1456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1445-L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1445-L1456) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1210)

```diff
-       return !(ee.gR(576, ie, 0) < 0)
+       let OW = 0,
+         mW = WW.length - 1;
+       for (; OW <= mW;) {
+         const EW = OW + mW >> 1,
+           NW = WW[EW];
+         if (iW < NW.startMs) mW = EW - 1;
+         else {
+           if (!(iW >= NW.endMs)) return NW;
+           OW = EW + 1
+         }
+       }
+       return null
```

#### 48. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1213-L1220` → after: `L1459-L1460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1459-L1460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1459-L1460) · [Before (L1213-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1213-L1220)

```diff
-     function My(ee, ie, He, ye, be, Me) {
-       const Ke = ee.gR(577, ie, 36 + Me.length);
-       if (Ke < 0) return !1;
-       const Ue = ee.view;
-       Ue.setUint8(Ke + 0, He);
-       for (let Fe = 0; Fe < 16; Fe++) Ue.setUint8(Ke + 4 + 1 * Fe, ye[Fe]);
-       for (let Fe = 0; Fe < 16; Fe++) Ue.setUint8(Ke + 20 + 1 * Fe, be[Fe]);
-       return qH(Ue).set(Me, Ue.byteOffset + Ke + 36), !0
+     function mO(WW, iW) {
+       return (iW - WW.startMs) / 1e3
```

#### 49. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1223-L1227` → after: `L1463-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1463-L1464) · [Before (L1223-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1223-L1227)

```diff
-     function Ky(ee, ie, He, ye) {
-       const be = ee.gR(578, ie, 4 + ye.length);
-       if (be < 0) return !1;
-       const Me = ee.view;
-       return Me.setUint8(be + 0, He), qH(Me).set(ye, Me.byteOffset + be + 4), !0
+     function EO(WW) {
+       return Math.max(.4, .1 * WW)
```

#### 50. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1230-L1234` → after: `L1467-L1468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1467-L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1467-L1468) · [Before (L1230-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1230-L1234)

```diff
-     function Uy(ee, ie, He, ye, be, Me, Ke, Ue) {
-       const Fe = ee.gR(579, ie, 36);
-       if (Fe < 0) return !1;
-       const Je = ee.view;
-       return Je.setFloat64(Fe + 0, He, !0), Je.setFloat64(Fe + 8, ye, !0), Je.setFloat64(Fe + 16, be, !0), Je.setFloat64(Fe + 24, Me, !0), Je.setUint16(Fe + 32, Ke, !0), Je.setUint8(Fe + 34, Ue), !0
+     function NO(WW) {
+       return Math.max(.0625, Math.min(16, WW))
```

#### 51. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1237-L1238` → after: `L1471-L1553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1471-L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1471-L1553) · [Before (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1237-L1238)

```diff
-       constructor(ee, ie) {
-         this.core = ee, this.afterCall = ie
+       constructor(WW, iW, OW, mW, EW, NW, PW) {
+         this.still = iW, this.clock = OW, this.frameDurationS = mW, this.wallNowMs = EW, this.onLoadFailed = PW, this.element = void 0, this.slots = new Map, this.shown = null, this.seekLatencyS = .15, this.lastSeekWallMs = -1 / 0, this.lastPresented = null, this.stats = {
+           frames: 0,
+           sumAbsDriftMs: 0,
+           maxAbsDriftMs: 0,
+           withinOneFrame: 0,
+           seeks: 0
+         }, this.failed = new Set, this.segments = void 0, this.segmentUrls = void 0, this.blobs = new Qi, this.stillImage = void 0, this.stillShown = !1, this.failedStillUrl = null, this.segments = iO(WW), this.segmentUrls = new ai(NW), this.segmentUrls.reset(this.segments), this … [truncated]
+           console.warn("Replay still failed to load."), this.failedStillUrl = this.stillImage.getAttribute("src"), this.stillImage.removeAttribute("src"), this.onLoadFailed()
+         })), this.element.appendChild(this.stillImage)
+       }
+       get visible() {
+         return null !== this.shown || this.stillShown
+       }
+       getVideoSizeAt(WW) {
+         var iW, OW;
+ ... (67 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1240-L1242` → after: `L1555-L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1555-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1555-L1605) · [Before (L1240-L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1240-L1242)

```diff
-       canModify(ee, ie, He) {
-         const ye = this.core.kUe(ee, ie, He);
-         return this.afterCall(), ye
+       sync(WW, iW) {
+         const {
+           video: OW
+         } = WW;
+         if (OW.seeking) return;
+         const {
+           playing: mW,
+           speed: EW
+         } = this.clock, NW = mW && EW < 16, PW = function(WW) {
+           let {
+             targetS: iW,
+             currentS: OW,
+             playing: mW,
+             speed: EW,
+             frameDurationS: NW
+           } = WW;
+ ... (35 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1244-L1246` → after: `L1607-L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1607-L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1607-L1632) · [Before (L1244-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1244-L1246)

```diff
-       terrainBlocked(ee, ie, He, ye, be) {
-         const Me = this.core.yFe(ee, ie, He, ye, be);
-         return this.afterCall(), Me
+       getSlot(WW) {
+         const iW = this.slots.get(WW.sequence);
+         if (void 0 !== iW) return iW;
+         const OW = "parts" in WW ? this.blobs.get(WW.sequence, WW.parts) : null,
+           mW = null === OW ? this.segmentUrls.get(WW.sequence) : null;
+         if ("pending" === mW) return null;
+         if ("failed" === mW) return this.failed.has(WW.sequence) || (console.error(`Replay video segment ${WW.sequence} has no URLs to load.`), this.markFailed(WW)), null;
+         const EW = document.createElement("video");
+         EW.className = "brv-video", EW.muted = !0, EW.playsInline = !0, EW.preload = "auto", EW.disablePictureInPicture = !0;
+         const NW = {
+           segment: WW,
+           video: EW,
+           seekStartedWallMs: null,
+           objectUrl: null,
+           abort: new AbortController
+         };
+ ... (10 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1248-L1250` → after: `L1634-L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1634-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1634-L1639) · [Before (L1248-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1248-L1250)

```diff
-       RV(ee, ie, He, ye) {
-         const be = this.core.Aq(ee, ie, He, ye);
-         return this.afterCall(), be
+       loadParts(WW, iW) {
+         this.blobs.load(WW.segment.sequence, iW, WW.abort.signal).then((iW => {
+           if (this.slots.get(WW.segment.sequence) === WW) return null === iW ? (console.error(`Replay video segment ${WW.segment.sequence} has no playable parts.`), void this.markFailed(WW.segment)) : void this.playBlob(WW, iW)
+         }), (iW => {
+           this.slots.get(WW.segment.sequence) === WW && (console.error(`Replay video segment ${WW.segment.sequence} failed to load.`, iW), this.markFailed(WW.segment))
+         }))
```

#### 55. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1252-L1254` → after: `L1641-L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1641-L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1641-L1642) · [Before (L1252-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1252-L1254)

```diff
-       blockData(ee, ie, He) {
-         const ye = this.core.oUe(ee, ie, He);
-         return this.afterCall(), ye
+       playBlob(WW, iW) {
+         WW.objectUrl = URL.createObjectURL(iW), WW.video.src = WW.objectUrl
```

#### 56. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1256-L1258` → after: `L1644-L1645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1644-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1644-L1645) · [Before (L1256-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1256-L1258)

```diff
-       cameraSweep(ee, ie, He, ye, be, Me, Ke) {
-         const Ue = this.core.JKe(ee, ie, He, ye, be, Me, Ke);
-         return this.afterCall(), Ue
+       markFailed(WW) {
+         this.failed.add(WW.sequence), this.onLoadFailed()
```

#### 57. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1260-L1262` → after: `L1647-L1651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1647-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1647-L1651) · [Before (L1260-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1260-L1262)

```diff
-       hasServerTarget(ee) {
-         const ie = this.core.WUe(ee);
-         return this.afterCall(), ie
+       showStill(WW) {
+         const iW = null !== WW && WW.url !== this.failedStillUrl ? WW : null;
+         null !== iW && this.stillImage.getAttribute("src") !== iW.url && (this.stillImage.src = iW.url);
+         const OW = null !== iW && this.stillImage.complete && this.stillImage.naturalWidth > 0;
+         OW !== this.stillShown && (this.stillImage.classList.toggle("brv-still-shown", OW), this.stillShown = OW)
```

#### 58. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1264-L1266` → after: `L1653-L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1653-L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1653-L1655) · [Before (L1264-L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1264-L1266)

```diff
-       entityInteractable(ee) {
-         const ie = this.core.BUe(ee);
-         return this.afterCall(), ie
+       show(WW) {
+         var iW;
+         this.shown !== WW && (null === (iW = this.shown) || void 0 === iW || iW.video.classList.remove("brv-video-shown"), null === WW || void 0 === WW || WW.video.classList.add("brv-video-shown"), this.shown = WW)
```

#### 59. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1268-L1270` → after: `L1657-L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1657-L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1657-L1658) · [Before (L1268-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1268-L1270)

```diff
-       entityCrouching(ee) {
-         const ie = this.core.zUe(ee);
-         return this.afterCall(), ie
+       evictExcept(WW) {
+         for (const [iW, OW] of this.slots) WW.includes(OW.segment) || (this.release(OW), this.slots.delete(iW))
```

#### 60. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1272-L1274` → after: `L1660-L1661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1660-L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1660-L1661) · [Before (L1272-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1272-L1274)

```diff
-       entityDrawn(ee) {
-         const ie = this.core.fKe(ee);
-         return this.afterCall(), ie
+       release(WW) {
+         this.shown === WW && (this.shown = null), WW.abort.abort(), WW.video.pause(), WW.video.removeAttribute("src"), WW.video.load(), WW.video.remove(), null !== WW.objectUrl && URL.revokeObjectURL(WW.objectUrl)
```

#### 61. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1276-L1278` → after: `L1663-L1687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1663-L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1663-L1687) · [Before (L1276-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1276-L1278)

```diff
-       predictServerPosition(ee, ie, He, ye) {
-         const be = this.core.xUe(ee, ie, He, ye);
-         return this.afterCall(), be
+       watchFrames(WW) {
+         const {
+           video: iW
+         } = WW;
+         if ("function" !== typeof iW.requestVideoFrameCallback) return;
+         const OW = (mW, EW) => {
+           if (!this.slots.has(WW.segment.sequence)) return;
+           const NW = iW.ownerDocument.defaultView,
+             PW = null === NW ? 0 : NW.performance.timeOrigin - performance.timeOrigin,
+             LW = mO(WW.segment, this.clock.timeAtWall(EW.expectedDisplayTime + PW)),
+             cW = this.lastPresented,
+             wW = this.wallNowMs() - this.lastSeekWallMs > 1e3;
+           if (null !== cW && cW.slot === WW && wW && this.clock.playing && EW.mediaTime > cW.mediaTimeS) {
+             const WW = Math.abs(function(WW, iW, OW) {
+               return OW < WW ? 1e3 * (OW - WW) : 1e3 * Math.max(0, OW - iW)
+             }(cW.mediaTimeS, EW.mediaTime, cW.clockMediaTimeS));
+ ... (9 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1280-L1282` → after: `L1689-L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1689-L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1689-L1729) · [Before (L1280-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1280-L1282)

```diff
-       setOtherEntitySetting(ee, ie, He) {
-         const ye = this.core.qKe(ee, ie, He);
-         return this.afterCall(), ye
+     }
+     const LO = 1 / 30,
+       cO = ["#noa-canvas", "#noa-container"];
+     class wO {
+       constructor(WW, iW) {
+         var OW, mW, EW, NW, PW, LW, cW, wW;
+         let tW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         this.timeline = void 0, this.chapters = void 0, this.lowFps = void 0, this.stage = void 0, this.clock = void 0, this.annotations = void 0, this.videoLayer = void 0, this.domLayer = void 0, this.listeners = new Set, this.skipInactive = !0, this.ended = !1, this.frame = 0,  … [truncated]
+           this.frame = requestAnimationFrame(this.hZ);
+           const WW = performance.now();
+           this.applySkips();
+           const iW = this.clock.timeMs();
+           this.annotations.update(iW, this.clock.speed), this.videoLayer.update(iW), null === this.domLayer ? this.stage.setViewport(this.videoLayer.getVideoSizeAt(iW)) : this.domLayer.update(iW, this.clock.playing, WW);
+           const OW = this.getState();
+           (null === this.lastState || function(WW, iW) {
+             return Object.keys(WW).some((OW => "positionMs" === OW ? Math.floor(WW.positionMs / 1e3) !== Math.floor(iW.positionMs / 1e3) : WW[OW] !== iW[OW]))
+ ... (25 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1284-L1286` → after: `L1731-L1732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1731-L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1731-L1732) · [Before (L1284-L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1284-L1286)

```diff
-       entityInfoBatch(ee) {
-         const ie = this.core.XKe(ee);
-         return this.afterCall(), ie
+       get inactiveRanges() {
+         return this.annotations.inactiveRanges
```

#### 64. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1288-L1290` → after: `L1734-L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1734-L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1734-L1735) · [Before (L1288-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1288-L1290)

```diff
-       entityName(ee) {
-         const ie = this.core.EUe(ee);
-         return this.afterCall(), ie
+       get videoGaps() {
+         return this.annotations.videoGaps
```

#### 65. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1292-L1294` → after: `L1737-L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1737-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1737-L1738) · [Before (L1292-L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1292-L1294)

```diff
-       hasEffect(ee, ie) {
-         const He = this.core.dUe(ee, ie);
-         return this.afterCall(), He
+       get frames() {
+         return this.annotations.frames
```

#### 66. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1296-L1298` → after: `L1740-L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1740-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1740-L1741) · [Before (L1296-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1296-L1298)

```diff
-       scratchPtr() {
-         const ee = this.core.MKe();
-         return this.afterCall(), ee
+       get input() {
+         return this.annotations.input
```

#### 67. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1300-L1302` → after: `L1743-L1746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1743-L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1743-L1746) · [Before (L1300-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1300-L1302)

```diff
-       invSwap(ee, ie) {
-         const He = this.core.AUe(ee, ie);
-         return this.afterCall(), He
+       subscribe(WW) {
+         return this.listeners.add(WW), WW(this.getState()), () => {
+           this.listeners.delete(WW)
+         }
```

#### 68. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1304-L1306` → after: `L1748-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1748-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1748-L1759) · [Before (L1304-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1304-L1306)

```diff
-       invMove(ee, ie, He) {
-         const ye = this.core.wUe(ee, ie, He);
-         return this.afterCall(), ye
+       getState() {
+         const WW = this.clock.timeMs();
+         return {
+           positionMs: this.timeline.toPosition(WW),
+           durationMs: this.timeline.durationMs,
+           playing: this.clock.playing,
+           speed: this.clock.speed,
+           skipInactive: this.skipInactive,
+           ended: this.ended,
+           notice: this.getNotice(WW),
+           telemetryChunksLoaded: this.annotations.telemetryChunksLoaded
+         }
```

#### 69. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1308-L1310` → after: `L1761-L1762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1761-L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1761-L1762) · [Before (L1308-L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1308-L1310)

```diff
-       invQuickMove(ee, ie, He, ye) {
-         const be = this.core.DUe(ee, ie, He, ye);
-         return this.afterCall(), be
+       getPositionMs() {
+         return this.timeline.toPosition(this.clock.timeMs())
```

#### 70. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1312-L1314` → after: `L1764-L1765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1764-L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1764-L1765) · [Before (L1312-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1312-L1314)

```diff
-       invRemove(ee, ie, He) {
-         const ye = this.core.PUe(ee, ie, He);
-         return this.afterCall(), ye
+       getSyncStats() {
+         return this.videoLayer.getSyncStats()
```

#### 71. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1316-L1318` → after: `L1767-L1768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1767-L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1767-L1768) · [Before (L1316-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1316-L1318)

```diff
-       invEnchant(ee, ie, He, ye, be) {
-         const Me = this.core.ZUe(ee, ie, He, ye, be);
-         return this.afterCall(), Me
+       resetSyncStats() {
+         this.videoLayer.resetSyncStats()
```

#### 72. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1320-L1322` → after: `L1770-L1771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1770-L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1770-L1771) · [Before (L1320-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1320-L1322)

```diff
-       craft(ee, ie, He) {
-         const ye = this.core.craft(ee, ie, He);
-         return this.afterCall(), ye
+       play() {
+         this.ended && this.seekToTime(this.timeline.startMs), this.clock.play(), this.syncDom(), this.emit()
```

#### 73. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1324-L1326` → after: `L1773-L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1773-L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1773-L1774) · [Before (L1324-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1324-L1326)

```diff
-       salvage(ee, ie, He) {
-         const ye = this.core.salvage(ee, ie, He);
-         return this.afterCall(), ye
+       pause() {
+         this.clock.pause(), this.syncDom(), this.emit()
```

#### 74. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1328-L1330` → after: `L1776-L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1776-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1776-L1777) · [Before (L1328-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1328-L1330)

```diff
-       selectSlot(ee) {
-         const ie = this.core.uUe(ee);
-         return this.afterCall(), ie
+       togglePlay() {
+         this.clock.playing ? this.pause() : this.play()
```

#### 75. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1332-L1334` → after: `L1779-L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1779-L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1779-L1780) · [Before (L1332-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1332-L1334)

```diff
-       closeChest() {
-         const ee = this.core.qUe();
-         return this.afterCall(), ee
+       seekToPosition(WW) {
+         this.seekToTime(this.timeline.toTime(WW))
```

#### 76. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1336-L1338` → after: `L1782-L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1782-L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1782-L1783) · [Before (L1336-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1336-L1338)

```diff
-       itemAttributesBatch(ee) {
-         const ie = this.core.pKe(ee);
-         return this.afterCall(), ie
+       seekBy(WW) {
+         this.seekToPosition(this.timeline.toPosition(this.clock.timeMs()) + WW)
```

#### 77. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1340-L1342` → after: `L1785-L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1785-L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1785-L1786) · [Before (L1340-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1340-L1342)

```diff
-       itemNames() {
-         const ee = this.core.sA();
-         return this.afterCall(), ee
+       stepFrame(WW) {
+         this.clock.pause(), this.seekBy(WW * LO * 1e3)
```

#### 78. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1344-L1346` → after: `L1788-L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1788-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1788-L1790) · [Before (L1344-L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1344-L1346)

```diff
-       blockProps() {
-         const ee = this.core.RUe();
-         return this.afterCall(), ee
+       setSpeed(WW) {
+         var iW;
+         this.clock.setSpeed(WW), null === (iW = this.domLayer) || void 0 === iW || iW.setSpeed(WW), this.emit()
```

#### 79. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1348-L1350` → after: `L1792-L1793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1792-L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1792-L1793) · [Before (L1348-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1348-L1350)

```diff
-       itemProps() {
-         const ee = this.core.YUe();
-         return this.afterCall(), ee
+       setSkipInactive(WW) {
+         this.skipInactive = WW, this.emit()
```

#### 80. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1352-L1354` → after: `L1795-L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1795-L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1795-L1798) · [Before (L1352-L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1352-L1354)

```diff
-       salvageRecipe(ee) {
-         const ie = this.core.BKe(ee);
-         return this.afterCall(), ie
+       goToChapter(WW) {
+         const iW = this.clock.timeMs(),
+           OW = 1 === WW ? this.chapters.find((WW => WW.startMs > iW + 500)) : this.chapters.findLast((WW => WW.startMs < iW - 2e3));
+         void 0 !== OW && this.seekToTime(OW.startMs)
```

#### 81. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1356-L1358` → after: `L1800-L1802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1800-L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1800-L1802) · [Before (L1356-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1356-L1358)

```diff
-       craftingView(ee, ie, He) {
-         const ye = this.core.TKe(ee, ie, He);
-         return this.afterCall(), ye
+       destroy() {
+         var WW;
+         cancelAnimationFrame(this.frame), this.urlRefresher.destroy(), this.annotations.destroy(), null === (WW = this.domLayer) || void 0 === WW || WW.destroy(), this.videoLayer.destroy(), this.stage.destroy(), this.listeners.clear()
```

#### 82. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1360-L1362` → after: `L1804-L1805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1804-L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1804-L1805) · [Before (L1360-L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1360-L1362)

```diff
-       directorView() {
-         const ee = this.core.UKe();
-         return this.afterCall(), ee
+       getNotice(WW) {
+         return this.annotations.isHiddenAt(WW) ? "tabHidden" : this.videoLayer.failedAt(WW) && !this.urlRefresher.refreshing ? "videoFailed" : null !== this.domLayer || this.videoLayer.visible ? this.annotations.isVideoGapAt(WW) ? "videoGap" : null : "nothingToShow"
```

#### 83. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1364-L1366` → after: `L1807-L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1807-L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1807-L1815) · [Before (L1364-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1364-L1366)

```diff
-       directorDefaultPose() {
-         const ee = this.core.oKe();
-         return this.afterCall(), ee
+       applySkips() {
+         var WW;
+         if (!this.clock.playing) return;
+         const iW = this.clock.timeMs(),
+           OW = this.timeline.nextPlayableTime(iW);
+         if (null === OW) return this.clock.pause(), this.clock.seek(this.timeline.endMs), this.ended = !0, this.syncDom(), void this.emit();
+         const mW = this.skipInactive ? this.annotations.inactiveRanges.find((WW => OW >= WW.startMs && OW < WW.endMs - 500)) : void 0,
+           EW = null !== (WW = null === mW || void 0 === mW ? void 0 : mW.endMs) && void 0 !== WW ? WW : OW;
+         EW !== iW && this.seekToTime(EW)
```

#### 84. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1368-L1370` → after: `L1817-L1818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1817-L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1817-L1818) · [Before (L1368-L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1368-L1370)

```diff
-       directorEntity(ee) {
-         const ie = this.core.FKe(ee);
-         return this.afterCall(), ie
+       seekToTime(WW) {
+         this.ended = !1, this.clock.seek(Math.max(this.timeline.startMs, Math.min(this.timeline.endMs, WW))), this.videoLayer.noteClockJump(), this.syncDom(), this.emit()
```

#### 85. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1372-L1374` → after: `L1820-L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1820-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1820-L1822) · [Before (L1372-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1372-L1374)

```diff
-       directorPose(ee, ie, He, ye, be, Me) {
-         const Ke = this.core.RKe(ee, ie, He, ye, be, Me);
-         return this.afterCall(), Ke
+       syncDom() {
+         var WW;
+         null === (WW = this.domLayer) || void 0 === WW || WW.sync(this.clock.timeMs(), this.clock.playing)
```

#### 86. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1376-L1378` → after: `L1824-L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L1824-L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L1824-L2536) · [Before (L1376-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1376-L1378)

```diff
-       passTimings(ee) {
-         const ie = this.core.cUe(ee);
-         return this.afterCall(), ie
+       emit() {
+         this.emitState(this.getState())
+       }
+       emitState(WW) {
+         this.lastState = WW;
+         for (const iW of this.listeners) iW(WW)
+       }
+     }
+     const tO = 2500,
+       ZO = 5;
+ 
+     function xO(WW) {
+       let {
+         label: iW,
+         BL: OW,
+         wide: mW = !1
+ ... (697 more added lines; see GitHub link above)
```

#### 87. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1380-L1382` → after: `L2538-L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R2538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L2538-L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/300.js#L2538-L2543) · [Before (L1380-L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/300.js#L1380-L1382)

```diff
-       drawCensus() {
-         const ee = this.core.XUe();
-         return this.afterCall(), ee
+ 
+       function eW(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         UW !== kW && (oW.current = UW), tW((OW => {
+           (0, TW.j)(OW, JO, UW), (0, TW.j)(OW, hO, (0, nW.i)(WW)), iW && (0, TW.j)(OW, HO, null)
+         }))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/301.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/301.js` (474 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad)

#### 1. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L4)

```diff
-   44799: (ee, ie, He) => {
+   42009: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6-L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6-L7)

```diff
-       c: () => pe,
-       g: () => Ue,
+       e: () => uP,
```

#### 3. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L9)

```diff
-       l: () => Je
+       k: () => tc
```

#### 4. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L11-L13` → after: `L11-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L11-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L11-L39) · [Before (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L11-L13)

```diff
-     var ye = He(38020),
-       be = He(39499),
-       Me = He(39492);
+     var mW, EW = Object.defineProperty,
+       NW = (WW, iW, OW) => ((WW, iW, OW) => iW in WW ? EW(WW, iW, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: OW
+       }) : WW[iW] = OW)(WW, "symbol" !== typeof iW ? iW + "" : iW, OW),
+       PW = Object.defineProperty,
+       LW = (WW, iW, OW) => ((WW, iW, OW) => iW in WW ? PW(WW, iW, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: OW
+       }) : WW[iW] = OW)(WW, "symbol" !== typeof iW ? iW + "" : iW, OW),
+       cW = (WW => (WW[WW.Document = 0] = "Document", WW[WW.DocumentType = 1] = "DocumentType", WW[WW.Element = 2] = "Element", WW[WW.Text = 3] = "Text", WW[WW.CDATA = 4] = "CDATA", WW[WW.Comment = 5] = "Comment", WW))(cW || {});
+     const wW = {
+ ... (13 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L15-L24` → after: `L41-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L41-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L41-L66) · [Before (L15-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L15-L24)

```diff
-     function Ke(ee, ie, He, ye) {
-       const be = Me.v;
-       ie.fill(0), ee.gravity.toArray(ie, be.gravity), ee.colorDead.toArray(ie, be.colorDead), He[be.ramp] = ee.useRampGradients ? 1 : 0;
-       const Ke = ee.getColorGradients(),
-         Ue = ke(ee, Ke, "colour", ye);
-       He[be.colorCount] = Ue;
-       for (let Me = 0; Me < Ue; Me++) {
-         var Fe;
-         const ee = Ke[qe(Ke, Me)];
-         ie[be.colorPositions + Me] = ee.gradient, ee.color1.toArray(ie, be.color1 + 4 * Me), (null !== (Fe = ee.color2) && void 0 !== Fe ? Fe : ee.color1).toArray(ie, be.color2 + 4 * Me)
+     function lW(WW) {
+       if (ZW[WW]) return ZW[WW];
+       const iW = globalThis[WW],
+         OW = iW.prototype,
+         mW = WW in wW ? wW[WW] : void 0,
+         EW = Boolean(mW && mW.every((WW => {
+           var iW, mW;
+           return Boolean(null == (mW = null == (iW = Object.getOwnPropertyDescriptor(OW, WW)) ? void 0 : iW.get) ? void 0 : mW.toString().includes("[native code]"))
+         }))),
+         NW = WW in tW ? tW[WW] : void 0,
+         PW = Boolean(NW && NW.every((WW => {
+           var iW;
+           return "function" === typeof OW[WW] && (null == (iW = OW[WW]) ? void 0 : iW.toString().includes("[native code]"))
+         })));
+       if (EW && PW && !globalThis.Zone) return ZW[WW] = iW.prototype, iW.prototype;
+       try {
+ ... (10 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L36-L40` → after: `L71-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L71-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L71-L77) · [Before (L36-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L36-L40)

```diff
-     function Ue() {
-       return {
-         key: [],
-         texels: new Uint8Array(4 * Me.i)
-       }
+     function bW(WW, iW, OW) {
+       var mW, EW;
+       const NW = null == (mW = AW[WW]) ? void 0 : mW[OW];
+       if (NW) return NW.call(iW);
+       const PW = lW(WW),
+         LW = null == (EW = Object.getOwnPropertyDescriptor(PW, OW)) ? void 0 : EW.get;
+       return LW ? ((AW[WW] || (AW[WW] = {}))[OW] = LW, LW.call(iW)) : iW[OW]
```

#### 7. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L42` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L79) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L42)

```diff
-     const Fe = [];
+     const jW = {};
```

#### 8. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L44-L49` → after: `L81-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L81-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L81-L85) · [Before (L44-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L44-L49)

```diff
-     function Je(ee, ie) {
-       return oe(ee, Fe), !Xe(Fe, ie.key) && (ie.key.length = 0, ie.key.push(...Fe), ie.key.length > 0 && function(ee, ie) {
-         for (let He = 0; He < Me.i; He++) be.k.GetCurrentGradient(He / Me.i, ee, ((ee, ie, He) => {
-           ye.Color3.LerpToRef(ee.color, ie.color, He, Re)
-         })), ie[4 * He] = 255 * Re.r, ie[4 * He + 1] = 255 * Re.g, ie[4 * He + 2] = 255 * Re.b, ie[4 * He + 3] = 255
-       }(ee.getRampGradients(), ie.texels), !0)
+     function UW(WW, iW, OW) {
+       const mW = `${WW}.${String(OW)}`;
+       if (jW[mW]) return jW[mW].bind(iW);
+       const EW = lW(WW)[OW];
+       return "function" !== typeof EW ? iW[OW] : (jW[mW] = EW, EW.bind(iW))
```

#### 9. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L51-L57` → after: `L87-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L87-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L87-L157) · [Before (L51-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L51-L57)

```diff
- 
-     function oe(ee, ie) {
-       ie.length = 0;
-       const He = ee.useRampGradients ? ee.getRampGradients() : null;
-       if (null !== He && void 0 !== He && He.length) {
-         ie.push(He.length);
-         for (const ee of He) ie.push(ee.gradient, ee.color.r, ee.color.g, ee.color.b)
+     let kW = Date.now;
+     /[1-9][0-9]{12}/.test(Date.now().toString()) || (kW = () => (new Date).getTime());
+     const sW = {
+       ownerDocument: function(WW) {
+         return bW("Node", WW, "ownerDocument")
+       },
+       childNodes: function(WW) {
+         return bW("Node", WW, "childNodes")
+       },
+       parentNode: function(WW) {
+         return bW("Node", WW, "parentNode")
+       },
+       parentElement: function(WW) {
+         return bW("Node", WW, "parentElement")
+       },
+       textContent: function(WW) {
+ ... (55 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L59-L64` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L159) · [Before (L59-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L59-L64)

```diff
-     }
-     const Re = new ye.Color3;
- 
-     function ke(ee, ie, He, ye) {
-       return ie ? ie.length > Me.b ? (ye(`particleStops:${He}`, `GPU particles use the first 2 and last ${Me.b-2} of more than ${Me.b} ${He} gradient stops (${ee.name})`), Me.b) : ie.length : 0
-     }
+     };
```

#### 11. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L66-L67` → after: `L161-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L161-L162) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L66-L67)

```diff
-     function qe(ee, ie) {
-       return ie < 2 || ee.length <= Me.b ? ie : ee.length - Me.b + ie
+     function MW(WW) {
+       return WW.nodeType === WW.ELEMENT_NODE
```

#### 12. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L72-L73` → after: `L165-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L165-L167) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L72-L73)

```diff
-     function pe(ee, ie, He) {
-       return Ke(ee, fe, Te, He), ie && Xe(Te, ie) ? null : Te.slice()
+     function KW(WW) {
+       const iW = WW && "host" in WW && "mode" in WW && sW.host(WW) || null;
+       return Boolean(iW && "shadowRoot" in iW && sW.shadowRoot(iW) === WW)
```

#### 13. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L76-L80` → after: `L170-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L170-L171) · [Before (L76-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L76-L80)

```diff
-     function Xe(ee, ie) {
-       if (ee.length !== ie.length) return !1;
-       for (let He = 0; He < ee.length; He++)
-         if (ee[He] !== ie[He]) return !1;
-       return !0
+     function SW(WW) {
+       return "[object ShadowRoot]" === Object.prototype.toString.call(WW)
```

#### 14. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L83-L109` → after: `L174-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L174-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L174-L183) · [Before (L83-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L83-L109)

```diff
-     function ze(ee, ie, He) {
-       var ye;
-       ee[ie] = He.gradient, ee[ie + 1] = He.factor1, ee[ie + 2] = null !== (ye = He.factor2) && void 0 !== ye ? ye : He.factor1
-     }
-   },
-   42229: (ee, ie, He) => {
-     function ye(ee, ie, He) {
-       const ye = ie * ie * 4,
-         be = ee[0].layers,
-         Me = be * (ee.length - 1) + ee[ee.length - 1].layers,
-         Ke = new Uint8Array(Me * ye);
-       ee.forEach(((ie, He) => {
-         const Me = He + 1 < ee.length ? Math.min(ie.layers, be) : ie.layers;
-         Ke.set(new Uint8Array(ie.pixels.buffer, ie.pixels.byteOffset, Me * ye), He * be * ye)
-       }));
-       const Ue = Math.max(1, Math.min(Me, He || Me));
- ... (11 more removed lines; see GitHub link above)
+     function YW(WW) {
+       try {
+         const OW = WW.rules || WW.cssRules;
+         if (!OW) return null;
+         let mW = WW.href;
+         !mW && WW.ownerNode && (mW = WW.ownerNode.baseURI);
+         const EW = Array.from(OW, (WW => yW(WW, mW))).join("");
+         return (iW = EW).includes(" background-clip: text;") && !iW.includes(" -webkit-background-clip: text;") && (iW = iW.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), iW
+       } catch (OW) {
+         return null
```

#### 15. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L111` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L185) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L111)

```diff
-       return Fe
+       var iW
```

#### 16. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L119-L141` → after: `L188-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L188-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L188-L213) · [Before (L119-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L119-L141)

```diff
-     function Me(ee, ie, He) {
-       var ye, Me;
-       const Ke = null !== (ye = be.get(ee)) && void 0 !== ye ? ye : new Map;
-       be.set(ee, Ke);
-       const Ue = null !== (Me = Ke.get(ie[0])) && void 0 !== Me ? Me : [];
-       Ke.set(ie[0], Ue);
-       const Fe = Ue.find((ee => ee.urls.length === ie.length && ee.urls.every(((ee, He) => ee === ie[He]))));
-       if (Fe) return Fe.built;
-       const Je = {
-         urls: [...ie],
-         built: He()
-       };
-       return Ue.push(Je), Je.built.catch((() => {
-         Ue.splice(Ue.indexOf(Je), 1)
-       })), Je.built
-     }
- ... (7 more removed lines; see GitHub link above)
+     function yW(WW, iW) {
+       if (function(WW) {
+           return "styleSheet" in WW
+         }(WW)) {
+         let iW;
+         try {
+           iW = YW(WW.styleSheet) || function(WW) {
+             const {
+               cssText: iW
+             } = WW;
+             if (iW.split('"').length < 3) return iW;
+             const OW = ["@import", `url(${JSON.stringify(WW.href)})`];
+             return "" === WW.layerName ? OW.push("layer") : WW.layerName && OW.push(`layer(${WW.layerName})`), WW.supportsText && OW.push(`supports(${WW.supportsText})`), WW.media.length && OW.push(WW.media.mediaText), OW.join(" ") + ";"
+           }(WW)
+         } catch (OW) {
+           iW = WW.cssText
+ ... (10 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L215-L220` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L217-L218) · [Before (L215-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L215-L220)

```diff
-       constructor(ee, ie) {
-         this.name = ee, this.yp = ie, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.Bx = {
-           addOnce: ee => {
-             this.disposers.push(ee)
-           }
-         }, this.uniqueId = ie.getUniqueId()
+       constructor() {
+         LW(this, "idNodeMap", new Map), LW(this, "nodeMetaMap", new WeakMap)
```

#### 18. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L222-L223` → after: `L220-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L220-L223) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L222-L223)

```diff
-       get isFrozen() {
-         return this.checkReadyOnlyOnce
+       getId(WW) {
+         var iW;
+         if (!WW) return -1;
+         return (null == (iW = this.getMeta(WW)) ? void 0 : iW.id) ?? -1
```

#### 19. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L225-L226` → after: `L225-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L225-L226) · [Before (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L225-L226)

```diff
-       Xx() {
-         return this.yp
+       AmW(WW) {
+         return this.idNodeMap.get(WW) || null
```

#### 20. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L228-L229` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L228-L229) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L228-L229)

```diff
-       getClassName() {
-         return "LiteMaterial"
+       getIds() {
+         return Array.from(this.idNodeMap.keys())
```

#### 21. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L231-L232` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L231-L232) · [Before (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L231-L232)

```diff
-       freeze() {
-         this.checkReadyOnlyOnce = !0
+       getMeta(WW) {
+         return this.nodeMetaMap.get(WW) || null
```

#### 22. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L234-L235` → after: `L234-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L234-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L234-L236) · [Before (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L234-L235)

```diff
-       unfreeze() {
-         this.checkReadyOnlyOnce = !1
+       removeNodeFromMap(WW) {
+         const iW = this.getId(WW);
+         this.idNodeMap.delete(iW), WW.childNodes && WW.childNodes.forEach((WW => this.removeNodeFromMap(WW)))
```

#### 23. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L237-L239` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L238-L239) · [Before (L237-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L237-L239)

```diff
-       markDirty() {}
-       get fillMode() {
-         return this.model.fillMode
+       has(WW) {
+         return this.idNodeMap.has(WW)
```

#### 24. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L241-L242` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L241-L242) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L241-L242)

```diff
-       needAlphaBlendingForMesh(ee) {
-         return (0, te.M)(this.model, ee.visibility, ee.hasVertexAlpha)
+       hasNode(WW) {
+         return this.nodeMetaMap.has(WW)
```

#### 25. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L244-L245` → after: `L244-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L244-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L244-L246) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L244-L245)

```diff
-       needAlphaTestingForMesh(ee) {
-         return (0, te.O)(this.model, ee.visibility, ee.hasVertexAlpha)
+       add(WW, iW) {
+         const OW = iW.id;
+         this.idNodeMap.set(OW, WW), this.nodeMetaMap.set(WW, iW)
```

#### 26. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L247-L249` → after: `L248-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L248-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L248-L254) · [Before (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L247-L249)

```diff
-       dispose() {
-         (0, Ee.m)(this);
-         for (const ee of this.disposers.splice(0)) ee()
+       replace(WW, iW) {
+         const OW = this.AmW(WW);
+         if (OW) {
+           const WW = this.nodeMetaMap.get(OW);
+           WW && this.nodeMetaMap.set(iW, WW)
+         }
+         this.idNodeMap.set(WW, iW)
```

#### 27. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L251-L252` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L256-L257) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L251-L252)

```diff
-       get model() {
-         return (0, te.V)(this)
+       reset() {
+         this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
```

#### 28. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L257-L258` → after: `L261-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L261-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L261-L262) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L257-L258)

```diff
-     function Ye(ee) {
-       return Ae.has(ee)
+     function JW() {
+       return new TW
```

#### 29. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L262-L352` → after: `L266-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L266-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L266-L275) · [Before (L262-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L262-L352)

```diff
-       Ae.add(ee)
-     }
-     const ae = {
-       create: (ee, ie) => ((0, ge.o)(ee, new Pe(ee.name, ie)), Ze.b.defines()),
-       write: () => {},
-       addFeature: (ee, ie) => {
-         const He = ee.mirror;
-         ie.feature === We.e && ie.state.dirLightCount > 0 && (ee.disableLighting = !0, (0, te.S)(ee)), "BLOXD_LIGHTING" in ie.defines && (0, Ee.i)(He), ie.feature === de.k && ((0, Be.l)(ie.state, De), function(ee, ie) {
-           const He = ee.Xx().Nf();
-           setTimeout((() => {
-             He.atlasArrays(ie.sources).then((He => {
-               (0, Be.d)(ee, ie, He.map((ee => ({
-                 atlas: ee,
-                 layers: ee.layers
-               }))), He[0].layerWidth, De)
-             })).catch((ee => {
- ... (75 more removed lines; see GitHub link above)
+       let {
+         element: iW,
+         maskInputOptions: OW,
+         tagName: mW,
+         type: EW,
+         value: NW,
+         maskInputFn: PW
+       } = WW, LW = NW || "";
+       const cW = EW && HW(EW);
+       return (OW[mW.toLowerCase()] || cW && OW[cW]) && (LW = PW ? PW(LW, iW) : "*".repeat(LW.length)), LW
```

#### 30. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L355-L406` → after: `L278-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L278-L279) · [Before (L355-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L355-L406)

```diff
-     function Ce() {
-       throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
-     }
-     const ve = {
-       Rbe: Ce,
-       VMe: (ee, ie) => {
-         const He = new Le(ee.engine, ye.e.FromArray(ie.clearColor), ye.Color3.FromArray(ie.ambientColor));
-         (0, Ke.d)(ae, He), ee.yp = He,
-           function(ee, ie) {
-             const He = Object.assign((0, ce.h)(ee, "camera"), {
-               layerMask: 268435455
-             });
-             ee.model.nodes.setWorldSource(He.row, ee.model.view.worldMatrix), ee.camera = ie.activeCamera = He
-           }(ee, He), (0, be.f)(ee, ((ee, ie, He) => (0, Me.g)(ee, ie, He, Ue.b)))
-       },
-       DMe: () => {},
- ... (36 more removed lines; see GitHub link above)
+     function HW(WW) {
+       return WW.toLowerCase()
```

#### 31. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L408-L409` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L281) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L408-L409)

```diff
-     var ne = He(42229),
-       je = He(39508);
+     const nW = "__rrweb_original__";
```

#### 32. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L412` → after: `L284-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L284-L285) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L412)

```diff
-       return Math.max(4, 4 * Math.ceil(ee / 4))
+       const iW = WW.type;
+       return WW.hasAttribute("data-rr-is-password") ? "password" : iW ? HW(iW) : null
```

#### 33. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L415-L422` → after: `L288-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L288-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L288-L296) · [Before (L415-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L415-L422)

```diff
-     function Ie(ee, ie, He, ye) {
-       const be = ee.createBuffer({
-         label: ye,
-         size: se(ie.byteLength),
-         usage: He,
-         mappedAtCreation: !0
-       });
-       return new Uint8Array(be.getMappedRange(), 0, ie.byteLength).set(new Uint8Array(ie.buffer, ie.byteOffset, ie.byteLength)), be.unmap(), be
+     function oW(WW, iW) {
+       let OW;
+       try {
+         OW = new URL(WW, iW ?? window.location.href)
+       } catch (EW) {
+         return null
+       }
+       const mW = OW.pathname.match(/\.([0-9a-z]+)(?:$)/i);
+       return (null == mW ? void 0 : mW[1]) ?? null
```

#### 34. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L426` → after: `L304-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L304-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L304-L318) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L426)

```diff
-       return Math.floor(Math.log2(Math.max(ee, ie))) + 1
+       return (WW || "").replace(dW, ((WW, OW, mW, EW, NW, PW) => {
+         const LW = mW || NW || PW,
+           cW = OW || EW || "";
+         if (!LW) return WW;
+         if (eW.test(LW) || vW.test(LW)) return `url(${cW}${LW}${cW})`;
+         if (gW.test(LW)) return `url(${cW}${LW}${cW})`;
+         if ("/" === LW[0]) return `url(${cW}${function(WW){let iW="";return iW=WW.indexOf("//")>-1?WW.split("/").slice(0,3).join("/"):WW.split("/")[0],iW=iW.split("?")[0],iW}(iW)+LW}${cW})`;
+         const wW = LW.split("#")[0],
+           tW = LW.substring(wW.length),
+           ZW = iW.split("#")[0].split("/"),
+           xW = wW.split("/");
+         ZW.pop();
+         for (const iW of xW) "." !== iW && (".." === iW ? ZW.pop() : ZW.push(iW));
+         return `url(${cW}${ZW.join("/")}${tW}${cW})`
+       }))
```

#### 35. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L429-L474` → after: `L324-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L324-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L324-L371) · [Before (L429-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L429-L474)

```diff
-     function Ne(ee, ie, He, ye, be, Me) {
-       const Ke = ee.createTexture({
-           label: Me,
-           size: {
-             width: He,
-             height: ye,
-             depthOrArrayLayers: be
-           },
-           format: "rgba8unorm",
-           mipLevelCount: he(He, ye),
-           usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
-         }),
-         Ue = (ie, He, ye, Me) => {
-           ee.queue.writeTexture({
-             texture: Ke,
-             mipLevel: He
- ... (30 more removed lines; see GitHub link above)
+     function CW(WW) {
+       return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? WW.replace(fW, "") : WW.replace(pW, "$1")
+     }
+ 
+     function XW(WW, iW) {
+       return function(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         const mW = Array.from(iW.childNodes),
+           EW = [];
+         let NW = 0;
+         if (mW.length > 1 && WW && "string" === typeof WW) {
+           let iW = CW(WW, OW);
+           const PW = iW.length / WW.length;
+           for (let LW = 1; LW < mW.length; LW++)
+             if (mW[LW].textContent && "string" === typeof mW[LW].textContent) {
+               const cW = CW(mW[LW].textContent, OW),
+ ... (32 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L478-L485` → after: `L375-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L375-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L375-L377) · [Before (L478-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L478-L485)

```diff
-             yield {
-               data: He,
-               width: ee,
-               height: ie
-             }, be = He, Me = ee, Ke = ie
-           }
-         }(ie, He, ye, be)) Ue(Je.data, Fe++, Je.width, Je.height);
-       return Ke
+         }
+         return EW.push(WW), EW
+       }(WW, iW).join("/* rr_split */")
```

#### 37. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L487-L490` → after: `L379-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L379-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L379-L380) · [Before (L487-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L487-L490)

```diff
-     const Ge = {
-       premultiplyAlpha: "none",
-       colorSpaceConversion: "none"
-     };
+     let BW = 1;
+     const qW = new RegExp("[^a-z0-9-_:]");
```

#### 38. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L492-L519` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L382-L383) · [Before (L492-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L492-L519)

```diff
-     function re(ee) {
-       if (ee.startsWith("data:")) {
-         const ie = ee.search(/[;,]/);
-         return `data:${ie>5?ee.slice(5,ie):""} URL of ${ee.length} characters`
-       }
-       return ee.length > 80 ? `${ee.slice(0,80)}...` : ee
-     }
-     async function Qe(ee) {
-       const ie = await fetch(ee);
-       if (!ie.ok) throw new Error(`${re(ee)}: ${ie.status} ${ie.statusText}`);
-       return createImageBitmap(await ie.blob(), Ge)
-     }
-     async function ei(ee) {
-       const ie = await Qe(ee),
-         He = new OffscreenCanvas(ie.width, ie.height),
-         ye = He.getContext("2d", {
- ... (12 more removed lines; see GitHub link above)
+     function RW() {
+       return BW++
```

#### 39. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L523-L554` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L391) · [Before (L523-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L523-L554)

```diff
-       return (0, ne.e)(ee, ie.urls, (async () => {
-         const He = await Promise.all(ie.urls.map((async (ee, He) => {
-             var ye, be, Me, Ke, Ue;
-             return null !== (Ke = null !== (be = null === (Me = ie.pixels) || void 0 === Me ? void 0 : Me[He]) && void 0 !== be ? be : null, Ue = ie.layerWidth, ye = null !== Ke && void 0 !== Ke && Ke.byteLength && Ue && Ke.byteLength % (Ue * Ue * 4) === 0 ? {
-               pixels: Ke,
-               layerWidth: Ue,
-               layers: Ke.byteLength / (Ue * Ue * 4)
-             } : null) && void 0 !== ye ? ye : await async function(ee) {
-               const {
-                 pixels: ie,
-                 width: He
-               } = await ei(ee);
-               return {
-                 pixels: ie,
-                 layerWidth: He,
-                 layers: ie.byteLength / (He * He * 4)
- ... (16 more removed lines; see GitHub link above)
+       return iW && "" !== iW.trim() ? Wi(WW, iW) : iW
```

#### 40. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L588-L590` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L395) · [Before (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L588-L590)

```diff
-       for (const ie of (0, je.p)(ee))
-         if (!yi.has((0, je.l)(ie))) return !1;
-       return !0
+       return Boolean("svg" === WW.tagName || WW.ownerSVGElement)
```

#### 41. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L593-L601` → after: `L398-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L398-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L398-L403) · [Before (L593-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L593-L601)

```diff
-     function Mi(ee) {
-       const ie = yi.get(ee);
-       if (!ie) return null;
-       const [He, ye, be] = ie;
-       return {
-         srcFactor: Hi.get(He),
-         dstFactor: Hi.get(ye),
-         operation: be
-       }
+     function Wi(WW, iW) {
+       let OW = zW.get(WW);
+       if (OW || (OW = WW.createElement("a"), zW.set(WW, OW)), iW) {
+         if (iW.startsWith("blob:") || iW.startsWith("data:")) return iW
+       } else iW = "";
+       return OW.setAttribute("href", iW), OW.href
```

#### 42. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L605-L608` → after: `L406-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L406-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L406-L409) · [Before (L605-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L605-L608)

```diff
-     function Ui(ee) {
-       Ki = ee
-     }
-     const Fi = new WeakSet;
+     function ii(WW, iW, OW, mW) {
+       return mW ? "src" === OW || "href" === OW && ("use" !== iW || "#" !== mW[0]) || "xlink:href" === OW && "#" !== mW[0] || "background" === OW && ["table", "td", "th"].includes(iW) ? FW(WW, mW) : "srcset" === OW ? function(WW, iW) {
+         if ("" === iW.trim()) return iW;
+         let OW = 0;
```

#### 43. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L610-L611` → after: `L411-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L411-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L411-L443) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L610-L611)

```diff
-     function Ji(ee) {
-       return Fi.has(ee)
+         function mW(WW) {
+           let mW;
+           const EW = WW.exec(iW.substring(OW));
+           return EW ? (mW = EW[0], OW += mW.length, mW) : ""
+         }
+         const EW = [];
+         for (; mW(rW), !(OW >= iW.length);) {
+           let NW = mW(aW);
+           if ("," === NW.slice(-1)) NW = FW(WW, NW.substring(0, NW.length - 1)), EW.push(NW);
+           else {
+             let mW = "";
+             NW = FW(WW, NW);
+             let PW = !1;
+             for (;;) {
+               const WW = iW.charAt(OW);
+               if ("" === WW) {
+ ... (17 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L614-L617` → after: `L446-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L446-L447) · [Before (L614-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L614-L617)

```diff
-     function oi(ee, ie, He, ye) {
-       let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-       var Me;
-       Ji(ee) || (null === (Me = Ki) || void 0 === Me || Me(ie, He, ye, be))
+     function Oi(WW, iW, OW) {
+       return ["video", "audio"].includes(WW) && "autoplay" === HW(iW)
```

#### 45. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L619-L632` → after: `L449-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L449-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L449-L455) · [Before (L619-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L619-L632)

```diff
-     class Ri {
-       constructor(ee) {
-         this.resources = ee, this.matrixKey = {
-           bk: 0
-         }, this.attributesKey = {
-           bk: 0
-         }, this.inputs = Object.create(null);
-         for (let ie = 0; ie < 4; ie++) this.inputs[`world${ie}`] = new fi(this.matrixKey, 16 * ie, 64, 4)
-       }
-       release() {
-         this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
-       }
-       bind(ee, ie) {
-         this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, ee, !0), ie && this.resources.vertexBufferCreated(this.attributesKey, ie, !0)
+ 
+     function mi(WW, iW, OW) {
+       if (!WW) return !1;
+       if (WW.nodeType !== WW.ELEMENT_NODE) return !!OW && mi(sW.parentNode(WW), iW, OW);
+       for (let mW = WW.classList.length; mW--;) {
+         const OW = WW.classList[mW];
+         if (iW.test(OW)) return !0
```

#### 46. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L758-L782` → after: `L460-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L460-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L460-L466) · [Before (L758-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L758-L782)

```diff
-     function Bi(ee, ie, He) {
-       var ye;
-       let be = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       const Me = null !== (ye = ie._colorFormat) && void 0 !== ye ? ye : "bgra8unorm",
-         Ke = be ? 15 : 0;
-       return He ? {
-         ...ee,
-         targets: [{
-           format: Me,
-           blend: {
-             color: He,
-             alpha: zi
-           },
-           writeMask: Ke
-         }]
-       } : {
- ... (9 more removed lines; see GitHub link above)
+     function Ei(WW, iW, OW, mW) {
+       let EW;
+       if (MW(WW)) {
+         if (EW = WW, !sW.childNodes(EW).length) return !1
+       } else {
+         if (null === sW.parentElement(WW)) return !1;
+         EW = sW.parentElement(WW)
```

#### 47. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L787-L796` → after: `L483-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L483-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L483-L694) · [Before (L787-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L787-L796)

```diff
-       ee._renderables.push(ie)
-     }
- 
-     function gi(ee) {
-       return ee._device
-     }
- 
-     function Oi(ee) {
-       var ie, He;
-       return null !== (ie = null === (He = ee._frameGraph) || void 0 === He ? void 0 : He._tasks) && void 0 !== ie ? ie : []
+       const {
+         doc: OW,
+         mirror: mW,
+         blockClass: EW,
+         blockSelector: NW,
+         needsMask: PW,
+         inlineStylesheet: LW,
+         maskInputOptions: wW = {},
+         maskTextFn: tW,
+         maskInputFn: ZW,
+         dataURLOptions: xW = {},
+         inlineImages: lW,
+         recordCanvas: AW,
+         keepIframeSrcFn: bW,
+         newlyAddedElement: jW = !1,
+         cssCaptured: UW = !1
+ ... (196 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L800` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L698) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L800)

```diff
-       return ee._currentEncoder
+       return void 0 === WW || null === WW ? "" : WW.toLowerCase()
```

#### 49. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L804-L819` → after: `L702-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L702-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L702-L714) · [Before (L804-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L804-L819)

```diff
-       return ee.createBindGroupLayout({
-         label: "lite-scene-equivalent",
-         entries: [{
-           binding: 0,
-           visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-           buffer: {
-             type: "uniform"
-           }
-         }, {
-           binding: 1,
-           visibility: GPUShaderStage.FRAGMENT,
-           buffer: {
-             type: "uniform"
-           }
-         }]
-       })
+       return !0 === WW || "all" === WW ? {
+         script: !0,
+         comment: !0,
+         headFavicon: !0,
+         headWhitespace: !0,
+         headMetaSocial: !0,
+         headMetaRobots: !0,
+         headMetaHttpEquiv: !0,
+         headMetaVerification: !0,
+         headMetaAuthorship: "all" === WW,
+         headMetaDescKeywords: "all" === WW,
+         headTitleMutations: "all" === WW
+       } : WW || {}
```

#### 50. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L827-L838` → after: `L718-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L718-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L718-L747) · [Before (L827-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L827-L838)

```diff
-       let He = Di.get(ee);
-       if (!He) {
-         He = {
-           module: ee.createShaderModule({
-             label: "placeholder",
-             code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
-           }),
-           pipelines: new Map
-         }, Di.set(ee, He)
-       }
-       const ye = `${ie._colorFormat}|${ie._depthStencilFormat}|${ie._sampleCount}`;
-       let be = He.pipelines.get(ye);
+       const {
+         doc: OW,
+         mirror: mW,
+         blockClass: EW,
+         blockSelector: NW,
+         maskTextClass: PW,
+         maskTextSelector: LW,
+         skipChild: wW = !1,
+         inlineStylesheet: tW = !0,
+         maskInputOptions: ZW = {},
+         maskTextFn: xW,
+         maskInputFn: lW,
+         slimDOMOptions: AW,
+         dataURLOptions: bW = {},
+         inlineImages: jW = !1,
+         recordCanvas: UW = !1,
+ ... (14 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L840-L867` → after: `L749-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L749-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L749-L837) · [Before (L840-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L840-L867)

```diff
-         var Me;
-         const {
-           module: Ke
-         } = He;
-         be = ee.createRenderPipeline({
-           label: `placeholder ${ye}`,
-           layout: ee.createPipelineLayout({
-             bindGroupLayouts: []
-           }),
-           vertex: {
-             module: Ke,
-             entryPoint: "v"
-           },
-           fragment: {
-             module: Ke,
-             entryPoint: "f",
- ... (12 more removed lines; see GitHub link above)
+         uW = Ei(WW, PW, LW, void 0 === uW)
+       }
+       const eW = Ni(WW, {
+         doc: OW,
+         mirror: mW,
+         blockClass: EW,
+         blockSelector: NW,
+         needsMask: uW,
+         inlineStylesheet: tW,
+         maskInputOptions: ZW,
+         maskTextFn: xW,
+         maskInputFn: lW,
+         dataURLOptions: bW,
+         inlineImages: jW,
+         recordCanvas: UW,
+         keepIframeSrcFn: hW,
+ ... (73 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L871` → after: `L840-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L840-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L840-L934) · [Before (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L871)

```diff
-       return be
+       const VW = sW.parentNode(WW);
+       return VW && KW(VW) && SW(VW) && (gW.isShadow = !0), gW.type === cW.Element && "iframe" === gW.tagName && function(WW, iW, OW) {
+         const mW = WW.contentWindow;
+         if (!mW) return;
+         let EW, NW = !1;
+         try {
+           EW = mW.document.readyState
+         } catch (LW) {
+           return
+         }
+         if ("complete" !== EW) {
+           const mW = setTimeout((() => {
+             NW || (iW(), NW = !0)
+           }), OW);
+           return void WW.addEventListener("load", (() => {
+             clearTimeout(mW), NW = !0, iW()
+ ... (79 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L874-L892` → after: `L960-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L960-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L960-L962) · [Before (L874-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L874-L892)

```diff
-     function Ai(ee, ie, He) {
-       const ye = ie.eye,
-         be = ie.viewMatrix;
-       ee[0] = ye[0] + be[2] * He, ee[1] = ye[1] + be[6] * He, ee[2] = ye[2] + be[10] * He
-     }
-     var Yi = He(38795),
-       Vi = He(44791),
-       ai = He(38045);
-     const ci = Math.PI,
-       xi = ci / 1.95,
-       Li = [5e-4 / 94, 125e-7, 5e-4 / 18],
-       Ci = [
-         [68e-8, .686],
-         [55e-8, .678],
-         [45e-8, .666]
-       ].map((ee => {
- ... (3 more removed lines; see GitHub link above)
+     function xi(WW) {
+       return WW && WW.__esModule && Object.prototype.hasOwnProperty.call(WW, "default") ? WW.default : WW
+     }
```

#### 54. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L894-L910` → after: `L964-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L964-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L964-L983) · [Before (L894-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L894-L910)

```diff
-     function vi(ee, ie, He) {
-       const {
-         up: ye,
-         mieDirectionalG: be
-       } = ee, Me = 1 - li(1 - Math.exp(ie[1] / 45e4), 0, 1), Ke = ee.rayleigh - (1 - Me), Ue = Math.hypot(ie[0], ie[1], ie[2]), Fe = Ue > 0 ? 1 / Ue : 0, Je = He.sunDir;
-       for (let qe = 0; qe < 3; qe++) Je[qe] = ie[qe] * Fe;
-       const oe = Je[0] * ye[0] + Je[1] * ye[1] + Je[2] * ye[2],
-         Re = 1e3 * Math.max(0, 1 - Math.exp(-(xi - Math.acos(li(oe, -1, 1))) / 1.5));
-       He.sunE = Re;
-       const ke = .2 * ee.turbidity * 1e-17 * ee.mieCoefficient;
-       for (let qe = 0; qe < 3; qe++) {
-         const ee = Li[qe] * Ke,
-           ie = Ci[qe] * ke,
-           ye = Re / (ee + ie);
-         He.inScatterR[qe] = ee * ye, He.inScatterM[qe] = ie * ye, He.extinctionBeta[qe] = 8400 * ee + 1250 * ie
-       }
- ... (1 more removed lines; see GitHub link above)
+     function li(WW) {
+       if (WW.__esModule) return WW;
+       var iW = WW.default;
+       if ("function" == typeof iW) {
+         var OW = function WW() {
+           return this instanceof WW ? Reflect.construct(iW, arguments, this.constructor) : iW.apply(this, arguments)
+         };
+         OW.prototype = iW.prototype
+       } else OW = {};
+       return Object.defineProperty(OW, "__esModule", {
+         value: !0
+       }), Object.keys(WW).forEach((function(iW) {
+         var mW = Object.getOwnPropertyDescriptor(WW, iW);
+         Object.defineProperty(OW, iW, mW.get ? mW : {
+           enumerable: !0,
+           get: function() {
+ ... (4 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L912-L918` → after: `L985-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L985-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L985-L986) · [Before (L912-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L912-L918)

```diff
-     const ui = {
-       A: .15,
-       B: .5,
-       C: .1,
-       D: .2,
-       E: .02,
-       F: .3
+     var Ai, bi = {
+       exports: {}
```

#### 56. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L932-L933` → after: `L989-L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L989-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L989-L1023) · [Before (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L932-L933)

```diff
-     function li(ee, ie, He) {
-       return Math.min(Math.max(ee, ie), He)
+     function ji() {
+       if (Ai) return bi.exports;
+       Ai = 1;
+       var WW = String,
+         iW = function() {
+           return {
+             isColorSupported: !1,
+             reset: WW,
+             bold: WW,
+             dim: WW,
+             italic: WW,
+             underline: WW,
+             inverse: WW,
+             hidden: WW,
+             strikethrough: WW,
+             black: WW,
+ ... (19 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L935` → after: `L1025-L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1025-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1025-L1031) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L935)

```diff
-     const Si = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;
+     const Ui = li(Object.freeze(Object.defineProperty({
+       __proto__: null,
+       default: {}
+     }, Symbol.toStringTag, {
+       value: "Module"
+     })));
+     var ki, si;
```

#### 58. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L937-L980` → after: `L1033-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1033-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1033-L1073) · [Before (L937-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L937-L980)

```diff
-     function ni(ee, ie) {
-       const He = new Map(ie),
-         ye = [],
-         be = [],
-         Me = () => 0 === be.length || be[be.length - 1].active;
-       let Ke = null;
-       const Ue = () => {
-         const ee = [...He].filter((ee => {
-             let [, ie] = ee;
-             return !0 !== ie
-           })),
-           ie = ee.map((ee => {
-             let [ie] = ee;
-             return ie
-           })).join("|");
-         Ke = ee.length ? new RegExp(`\\b(${ie})\\b`, "g") : null
- ... (28 more removed lines; see GitHub link above)
+     function Mi() {
+       if (si) return ki;
+       si = 1;
+       let WW = ji(),
+         iW = Ui;
+       class OW extends Error {
+         constructor(WW, iW, mW, EW, NW, PW) {
+           super(WW), this.name = "CssSyntaxError", this.reason = WW, NW && (this.file = NW), EW && (this.source = EW), PW && (this.plugin = PW), "undefined" !== typeof iW && "undefined" !== typeof mW && ("number" === typeof iW ? (this.line = iW, this.column = mW) : (this.line = i … [truncated]
+         }
+         setMessage() {
+           this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
+         }
+         showSourceCode(OW) {
+           if (!this.source) return "";
+           let mW = this.source;
+           null == OW && (OW = WW.isColorSupported), iW && OW && (mW = iW(mW));
+ ... (25 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L983-L984` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1076) · [Before (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L983-L984)

```diff
-       if (be.length) throw new Error("Unterminated #if");
-       return ye.join("\n")
+       return ki = OW, OW.default = OW, ki
```

#### 60. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L987-L991` → after: `L1080-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1080-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1080-L1081) · [Before (L987-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L987-L991)

```diff
-     function ji(ee, ie, He) {
-       return ee.replace(ie, (ee => {
-         const ie = He.get(ee);
-         return "string" === typeof ie ? ie : ee
-       }))
+     function TO() {
+       return Ki || (Ki = 1, yO.isClean = Symbol("isClean"), yO.my = Symbol("my")), yO
```

#### 61. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L994-L1009` → after: `L1084-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1084-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1084-L1111) · [Before (L994-L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L994-L1009)

```diff
-     function si(ee, ie) {
-       var He;
-       const ye = null !== (He = ee.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== He ? He : [];
-       let be = 0;
-       const Me = () => ye[be],
-         Ke = () => ye[be++],
-         Ue = ee => {
-           const He = /^\d/.test(ee) ? ee : ie.get(ee);
-           return "string" === typeof He ? parseInt(He) : Number.NaN
-         },
-         Fe = () => {
-           const ee = Ke();
-           if ("!" === ee) return !Fe();
-           if ("(" === ee) {
-             const ee = oe();
-             return Ke(), ee
+     function JO() {
+       if (Yi) return Si;
+       Yi = 1;
+       const WW = {
+         after: "\n",
+         beforeClose: "\n",
+         beforeComment: "\n",
+         beforeDecl: "\n",
+         beforeOpen: " ",
+         beforeRule: "\n",
+         colon: ": ",
+         commentLeft: " ",
+         commentRight: " ",
+         emptyBody: "",
+         indent: "    ",
+         semicolon: !1
+ ... (12 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1011-L1015` → after: `L1113-L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1113-L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1113-L1123) · [Before (L1011-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1011-L1015)

```diff
-           if ("defined" === ee) {
-             const ee = "(" === Me();
-             ee && Ke();
-             const He = Ke();
-             return ee && Ke(), ie.has(He)
+         }
+         beforeAfter(WW, iW) {
+           let OW;
+           OW = "decl" === WW.type ? this.raw(WW, null, "beforeDecl") : "comment" === WW.type ? this.raw(WW, null, "beforeComment") : "before" === iW ? this.raw(WW, null, "beforeRule") : this.raw(WW, null, "beforeClose");
+           let mW = WW.parent,
+             EW = 0;
+           for (; mW && "root" !== mW.type;) EW += 1, mW = mW.parent;
+           if (OW.includes("\n")) {
+             let iW = this.raw(WW, null, "indent");
+             if (iW.length)
+               for (let WW = 0; WW < EW; WW++) OW += iW
```

#### 63. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1017-L1036` → after: `L1125-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1125-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1125-L1138) · [Before (L1017-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1017-L1036)

```diff
-           const He = Me();
-           if ("==" === He || "!=" === He || ">" === He || "<" === He || ">=" === He || "<=" === He) {
-             Ke();
-             const ie = Ue(ee),
-               ye = Ue(Ke());
-             if (Number.isNaN(ie) || Number.isNaN(ye)) return !1;
-             switch (He) {
-               case "==":
-                 return ie === ye;
-               case "!=":
-                 return ie !== ye;
-               case ">":
-                 return ie > ye;
-               case "<":
-                 return ie < ye;
-               case ">=":
- ... (4 more removed lines; see GitHub link above)
+           return OW
+         }
+         block(WW, iW) {
+           let OW, mW = this.raw(WW, "between", "beforeOpen");
+           this.builder(iW + mW + "{", WW, "start"), WW.nodes && WW.nodes.length ? (this.body(WW), OW = this.raw(WW, "after")) : OW = this.raw(WW, "after", "emptyBody"), OW && this.builder(OW), this.builder("}", WW, "end")
+         }
+         body(WW) {
+           let iW = WW.nodes.length - 1;
+           for (; iW > 0 && "comment" === WW.nodes[iW].type;) iW -= 1;
+           let OW = this.raw(WW, "semicolon");
+           for (let mW = 0; mW < WW.nodes.length; mW++) {
+             let EW = WW.nodes[mW],
+               NW = this.raw(EW, "before");
+             NW && this.builder(NW), this.stringify(EW, iW !== mW || OW)
```

#### 64. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1038-L1046` → after: `L1140-L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1140-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1140-L1160) · [Before (L1038-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1038-L1046)

```diff
-           return ie.has(ee)
-         },
-         Je = () => {
-           let ee = Fe();
-           for (;
-             "&&" === Me();) {
-             Ke();
-             const ie = Fe();
-             ee = ee && ie
+         }
+         comment(WW) {
+           let iW = this.raw(WW, "left", "commentLeft"),
+             OW = this.raw(WW, "right", "commentRight");
+           this.builder("/*" + iW + WW.text + OW + "*/", WW)
+         }
+         decl(WW, iW) {
+           let OW = this.raw(WW, "between", "colon"),
+             mW = WW.prop + OW + this.rawValue(WW, "value");
+           WW.important && (mW += WW.raws.important || " !important"), iW && (mW += ";"), this.builder(mW, WW)
+         }
+         document(WW) {
+           this.body(WW)
+         }
+         raw(iW, OW, mW) {
+           let EW;
+ ... (5 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1048-L1056` → after: `L1162-L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1162-L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1162-L1170) · [Before (L1048-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1048-L1056)

```diff
-           return ee
-         },
-         oe = () => {
-           let ee = Je();
-           for (;
-             "||" === Me();) {
-             Ke();
-             const ie = Je();
-             ee = ee || ie
+           if (!NW) return WW[mW];
+           let PW = iW.root();
+           if (PW.rawCache || (PW.rawCache = {}), "undefined" !== typeof PW.rawCache[mW]) return PW.rawCache[mW];
+           if ("before" === mW || "after" === mW) return this.beforeAfter(iW, mW);
+           {
+             let WW = "raw" + ((LW = mW)[0].toUpperCase() + LW.slice(1));
+             this[WW] ? EW = this[WW](PW, iW) : PW.walk((WW => {
+               if (EW = WW.raws[OW], "undefined" !== typeof EW) return !1
+             }))
```

#### 66. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1058-L1087` → after: `L1172-L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1172-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1172-L1250) · [Before (L1058-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1058-L1087)

```diff
-           return ee
-         },
-         Re = oe();
-       if (be !== ye.length) throw new Error(`Cannot evaluate #if ${ee}`);
-       return Re
-     }
-     var Ii = He(38133),
-       Ni = He(38231),
-       Gi = He(38236),
-       ri = He(41807),
-       Qi = He(39546);
-     const eH = 32,
-       iH = [10, 3, 10],
-       HH = [21, 7, 21],
-       yH = HH[0] * HH[1] * HH[2],
-       bH = 0,
- ... (14 more removed lines; see GitHub link above)
+           var LW;
+           return "undefined" === typeof EW && (EW = WW[mW]), PW.rawCache[mW] = EW, EW
+         }
+         rawBeforeClose(WW) {
+           let iW;
+           return WW.walk((WW => {
+             if (WW.nodes && WW.nodes.length > 0 && "undefined" !== typeof WW.raws.after) return iW = WW.raws.after, iW.includes("\n") && (iW = iW.replace(/[^\n]+$/, "")), !1
+           })), iW && (iW = iW.replace(/\S/g, "")), iW
+         }
+         rawBeforeComment(WW, iW) {
+           let OW;
+           return WW.walkComments((WW => {
+             if ("undefined" !== typeof WW.raws.before) return OW = WW.raws.before, OW.includes("\n") && (OW = OW.replace(/[^\n]+$/, "")), !1
+           })), "undefined" === typeof OW ? OW = this.raw(iW, null, "beforeDecl") : OW && (OW = OW.replace(/\S/g, "")), OW
+         }
+         rawBeforeDecl(WW, iW) {
+ ... (63 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1090-L1093` → after: `L1253-L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1253-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1253-L1256) · [Before (L1090-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1090-L1093)

```diff
-     function pH(ee, ie, He) {
-       return ye = TH(ee, HH[0]), be = TH(ie, HH[1]), Me = TH(He, HH[2]), ye + HH[0] * (be + HH[1] * Me);
-       var ye, be, Me
-     }
+     function hO() {
+       if (Ti) return yi;
+       Ti = 1;
+       let WW = JO();
```

#### 68. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1095-L1096` → after: `L1258-L1261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1258-L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1258-L1261) · [Before (L1095-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1095-L1096)

```diff
-     function XH(ee, ie, He) {
-       return ee + 8 * (ie + 8 * He)
+       function iW(iW, OW) {
+         new WW(OW).stringify(iW)
+       }
+       return yi = iW, iW.default = iW, yi
```

#### 69. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1099-L1152` → after: `L1264-L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1264-L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1264-L1281) · [Before (L1099-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1099-L1152)

```diff
-     function zH(ee, ie, He) {
-       return ee + 4 * (ie + 4 * He)
-     }
-     const BH = 65535,
-       EH = 0,
-       gH = 1,
-       OH = 2,
-       dH = 3;
- 
-     function WH(ee) {
-       return Math.ceil(ee * ee / 32)
-     }
-     const tH = 8192,
-       ZH = 1 << 18,
-       wH = 65536,
-       DH = 294912,
- ... (38 more removed lines; see GitHub link above)
+     function HO() {
+       if (Hi) return Ji;
+       Hi = 1;
+       let {
+         isClean: WW,
+         my: iW
+       } = TO(), OW = Mi(), mW = JO(), EW = hO();
+ 
+       function NW(WW, iW) {
+         let OW = new WW.constructor;
+         for (let mW in WW) {
+           if (!Object.prototype.hasOwnProperty.call(WW, mW)) continue;
+           if ("proxyCache" === mW) continue;
+           let EW = WW[mW],
+             PW = typeof EW;
+           "parent" === mW && "object" === PW ? iW && (OW[mW] = iW) : "source" === mW ? OW[mW] = EW : Array.isArray(EW) ? OW[mW] = EW.map((WW => NW(WW, OW))) : ("object" === PW && null !== EW && (EW = NW(EW)), OW[mW] = EW)
+ ... (2 more added lines; see GitHub link above)
```

#### 70. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1154-L1241` → after: `L1283-L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1283-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1283-L1298) · [Before (L1154-L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1154-L1241)

```diff
-       add(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         if (this.parts >= AH || ! function(ee, ie, He) {
-             const ye = ee[ie],
-               be = ee[ie + 1],
-               Me = ee[ie + 2],
-               Ke = ee[ie + 3],
-               Ue = ee[ie + 4],
-               Fe = ee[ie + 5],
-               Je = ee[ie + 6],
-               oe = ee[ie + 7],
-               Re = ee[ie + 8],
-               ke = ee[ie + 9],
-               qe = ee[ie + 10],
-               fe = ee[ie + 11],
-               Te = ee[ie + 12],
- ... (72 more removed lines; see GitHub link above)
+       class PW {
+         constructor() {
+           let OW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+           this.raws = {}, this[WW] = !1, this[iW] = !0;
+           for (let WW in OW)
+             if ("nodes" === WW) {
+               this.nodes = [];
+               for (let iW of OW[WW]) "function" === typeof iW.clone ? this.append(iW.clone()) : this.append(iW)
+             } else this[WW] = OW[WW]
+         }
+         addToError(WW) {
+           if (WW.postcssNode = this, WW.stack && this.source && /\n\s{4}at /.test(WW.stack)) {
+             let iW = this.source;
+             WW.stack = WW.stack.replace(/\n\s{4}at /, `$&${iW.input.from}:${iW.start.line}:${iW.start.column}$&`)
+           }
+           return WW
```

#### 71. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1243-L1249` → after: `L1300-L1437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1300-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1300-L1437) · [Before (L1243-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1243-L1249)

```diff
-         let Ke = 0;
-         for (let Fe = 0; Fe < 16384; Fe++) ye[Fe] = Ke, Ke += ie[Fe], ie[Fe] = ye[Fe];
-         ye[16384] = Ke;
-         for (let Fe = 0; Fe < Me; Fe++) {
-           const be = 4 * Fe;
-           for (let Me = He[be + 1]; Me <= He[be + 3]; Me++)
-             for (let Ke = He[be]; Ke <= He[be + 2]; Ke++) ye[VH + ie[Me * ee + Ke]++] = Fe
+         after(WW) {
+           return this.parent.insertAfter(this, WW), this
+         }
+         assign() {
+           let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+           for (let iW in WW) this[iW] = WW[iW];
+           return this
+         }
+         before(WW) {
+           return this.parent.insertBefore(this, WW), this
+         }
+         cleanRaws(WW) {
+           delete this.raws.before, delete this.raws.after, WW || delete this.raws.between
+         }
+         clone() {
+           let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
+ ... (122 more added lines; see GitHub link above)
```

#### 72. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1251-L1260` → after: `L1439-L1457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1439-L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1439-L1457) · [Before (L1251-L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1251-L1260)

```diff
-         const Ue = this.floats;
-         for (let Fe = 0; Fe < 16384; Fe++) {
-           const ee = VH + ye[Fe],
-             ie = ee + Math.min(ye[Fe + 1] - ye[Fe], 64);
-           for (let He = ee + 1; He < ie; He++) {
-             const ie = ye[He],
-               be = Ue[81934 + ie * YH];
-             let Me = He - 1;
-             for (; Me >= ee && Ue[81934 + ye[Me] * YH] < be; Me--) ye[Me + 1] = ye[Me];
-             ye[Me + 1] = ie
+         toJSON(WW, iW) {
+           let OW = {},
+             mW = null == iW;
+           iW = iW || new Map;
+           let EW = 0;
+           for (let NW in this) {
+             if (!Object.prototype.hasOwnProperty.call(this, NW)) continue;
+             if ("parent" === NW || "proxyCache" === NW) continue;
+             let WW = this[NW];
+             if (Array.isArray(WW)) OW[NW] = WW.map((WW => "object" === typeof WW && WW.toJSON ? WW.toJSON(null, iW) : WW));
+             else if ("object" === typeof WW && WW.toJSON) OW[NW] = WW.toJSON(null, iW);
+             else if ("source" === NW) {
+               let mW = iW.get(WW.input);
+               null == mW && (mW = EW, iW.set(WW.input, EW), EW++), OW[NW] = {
+                 end: WW.end,
+                 inputId: mW,
+ ... (3 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1267-L1323` → after: `L1486-L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1486-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1486-L1501) · [Before (L1267-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1267-L1323)

```diff
-     function mH(ee) {
-       return Math.min(127, Math.max(0, Math.floor((.5 * ee + .5) * PH)))
-     }
- 
-     function lH(ee, ie, He, ye, be) {
-       for (let Me = 0; Me < 4; Me++)
-         for (let Ke = 0; Ke < 4; Ke++) be[4 * Me + Ke] = ee[ie + 4 * Me] * He[ye + Ke] + ee[ie + 4 * Me + 1] * He[ye + 4 + Ke] + ee[ie + 4 * Me + 2] * He[ye + 8 + Ke] + ee[ie + 4 * Me + 3] * He[ye + 12 + Ke]
-     }
- 
-     function SH(ee, ie, He, ye, be) {
-       const Me = ee[0] - ie,
-         Ke = ee[1] - He,
-         Ue = ee[2] - ye,
-         Fe = ee[3] - ie,
-         Je = ee[4] - He,
-         oe = ee[5] - ye,
- ... (41 more removed lines; see GitHub link above)
+     function nO() {
+       if (ui) return ni;
+       ui = 1;
+       let WW = HO();
+       class iW extends WW {
+         constructor(WW) {
+           WW && "undefined" !== typeof WW.value && "string" !== typeof WW.value && (WW = {
+             ...WW,
+             value: String(WW.value)
+           }), super(WW), this.type = "decl"
+         }
+         get variable() {
+           return this.prop.startsWith("--") || "$" === this.prop[0]
+         }
+       }
+       return ni = iW, iW.default = iW, ni
```

#### 74. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1326-L1331` → after: `L1504-L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1504-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1504-L1523) · [Before (L1326-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1326-L1331)

```diff
-     function IH(ee) {
-       let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-         He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const [be, Me, Ke] = HH, [Ue, Fe, Je] = iH, oe = Math.log2(eH), Re = ye ? "var<private> bloxdSpCrossed: bool;\n" : "", ke = ye ? "\t\t\tbloxdSpCrossed = true;\n" : "";
-       return `@group(${ee.group}) @binding(${ee.Uq}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${ee.group}) @binding(${ee.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${He?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${Re}struct BloxdSpBoxE … [truncated]
+     function uO() {
+       if (di) return oi;
+       di = 1;
+       return oi = {
+         nanoid: function() {
+           let WW = "",
+             iW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
+           for (; iW--;) WW += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
+           return WW
+         },
+         customAlphabet: function(WW) {
+           let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
+           return function() {
+             let OW = "",
+               mW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iW;
+             for (; mW--;) OW += WW[Math.random() * WW.length | 0];
+ ... (4 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1343-L1344` → after: `L1527-L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1527-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1527-L1605) · [Before (L1343-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1343-L1344)

```diff
-       const ee = hH;
-       return `${sH(ee)}${IH(ee,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${jH.e}>,\n}\n@group(${ee.group}) @binding(${ee.work}) var<uniform> bloxd … [truncated]
+       if (vi) return ei;
+       vi = 1;
+       let {
+         SourceMapConsumer: WW,
+         SourceMapGenerator: iW
+       } = Ui, {
+         existsSync: OW,
+         readFileSync: mW
+       } = Ui, {
+         dirname: EW,
+         join: NW
+       } = Ui;
+       class PW {
+         constructor(WW, iW) {
+           if (!1 === iW.map) return;
+           this.loadAnnotation(WW), this.inline = this.startWith(this.annotation, "data:");
+ ... (63 more added lines; see GitHub link above)
```

#### 76. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1349-L1355` → after: `L1608-L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1608-L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1608-L1745) · [Before (L1349-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1349-L1355)

```diff
-     function QH(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
-       const ye = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${ie.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y … [truncated]
-         be = "trace" === He || "lit" === He,
-         Me = "maskEdge" === He ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
-         Ke = be ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${ie.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of step … [truncated]
-       return `${ye}${ee.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${be?function(){const[ee,ie,He]=jH.p;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif  … [truncated]
+     function dO() {
+       if (Di) return gi;
+       Di = 1;
+       let {
+         SourceMapConsumer: WW,
+         SourceMapGenerator: iW
+       } = Ui, {
+         fileURLToPath: OW,
+         pathToFileURL: mW
+       } = Ui, {
+         isAbsolute: EW,
+         resolve: NW
+       } = Ui, {
+         nanoid: PW
+       } = uO(), LW = Ui, cW = Mi(), wW = oO(), tW = Symbol("fromOffsetCache"), ZW = Boolean(WW && iW), xW = Boolean(NW && EW);
+       class lW {
+ ... (122 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1359-L1360` → after: `L1748-L1926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1748-L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1748-L1926) · [Before (L1359-L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1359-L1360)

```diff
-     function iy(ee) {
-       return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${ee.texture}) - 1u)))`
+     function eO() {
+       if (fi) return Vi;
+       fi = 1;
+       let {
+         SourceMapConsumer: WW,
+         SourceMapGenerator: iW
+       } = Ui, {
+         dirname: OW,
+         relative: mW,
+         resolve: EW,
+         sep: NW
+       } = Ui, {
+         pathToFileURL: PW
+       } = Ui, LW = dO(), cW = Boolean(WW && iW), wW = Boolean(OW && EW && mW && NW);
+       return Vi = class {
+         constructor(WW, iW, OW, mW) {
+ ... (163 more added lines; see GitHub link above)
```

#### 78. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1364-L1365` → after: `L1929-L1938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1929-L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1929-L1938) · [Before (L1364-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1364-L1365)

```diff
-     function yy(ee) {
-       return `bloxdSpFlags(${ee})`
+     function vO() {
+       if (Xi) return Ci;
+       Xi = 1;
+       let WW = HO();
+       class iW extends WW {
+         constructor(WW) {
+           super(WW), this.type = "comment"
+         }
+       }
+       return Ci = iW, iW.default = iW, Ci
```

#### 79. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1369-L1373` → after: `L1941-L1950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1941-L1950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1941-L1950) · [Before (L1369-L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1369-L1373)

```diff
-     function My(ee, ie, He, ye, be) {
-       const Me = ee.indexOf(ie);
-       if (Me < 0 || ee.indexOf(ie, Me + 1) >= 0) throw new Error(`Lite's ${be} program changed at the shader pack ${ye} hook: ${Me<0?"no":"more than one"} anchor (lite/${be}ShaderPack.ts)`);
-       return ee.slice(0, Me) + He + ee.slice(Me + ie.length)
-     }
+     function gO() {
+       if (qi) return Bi;
+       qi = 1;
+       let WW, iW, OW, mW, {
+           isClean: EW,
+           my: NW
+         } = TO(),
+         PW = nO(),
+         LW = vO(),
+         cW = HO();
```

#### 80. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1375-L1376` → after: `L1952-L2133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1952-L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L1952-L2133) · [Before (L1375-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1375-L1376)

```diff
-     function Ky(ee) {
-       return ee.sunShadow || ee.airShadow
+       function wW(WW) {
+         return WW.map((WW => (WW.nodes && (WW.nodes = wW(WW.nodes)), delete WW.source, WW)))
+       }
+ 
+       function tW(WW) {
+         if (WW[EW] = !1, WW.proxyOf.nodes)
+           for (let iW of WW.proxyOf.nodes) tW(iW)
+       }
+       class ZW extends cW {
+         append() {
+           for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
+           for (let mW of iW) {
+             let WW = this.normalize(mW, this.last);
+             for (let iW of WW) this.proxyOf.nodes.push(iW)
+           }
+           return this.markDirty(), this
+ ... (166 more added lines; see GitHub link above)
```

#### 81. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1379-L1380` → after: `L2136-L2156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2136-L2156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L2136-L2156) · [Before (L1379-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1379-L1380)

```diff
-     function Uy(ee, ie) {
-       return ie && Ky(ee)
+     function DO() {
+       if (Gi) return Ri;
+       Gi = 1;
+       let WW, iW, OW = gO();
+       class mW extends OW {
+         constructor(WW) {
+           super({
+             type: "document",
+             ...WW
+           }), this.nodes || (this.nodes = [])
+         }
+         toResult() {
+           let OW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+           return new WW(new iW, this, OW).stringify()
+         }
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 82. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1387-L1403` → after: `L2159-L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2159-L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L2159-L2164) · [Before (L1387-L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1387-L1403)

```diff
-     function Jy(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
-       if (!Ky(ee)) return "";
-       if (ie) {
-         const ie = Fy,
-           be = "trace" === He || "lit" === He;
-         let Me = "";
-         ee.sunShadow && (Me = be ? `${IH(ie,!0,"lit"===He)}${ye=ie,`@group(${ye.group}) @binding(${ye.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${ye.group}) @binding(${ye.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn blo … [truncated]
-           const ye = `@group(${ee}) @binding(${ie}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
-           return He ? `${ye}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${rH}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = text … [truncated]
-         }(ie.group, ri.s, "maskEdge" === He));
-         const Ke = {
-           shadowDirection: `${ri.k}.shadowDirection`,
-           renderOffset: `${ri.k}.renderOffset`,
-           eyePosition: `${ri.k}.eyePosition`
-         };
- ... (1 more removed lines; see GitHub link above)
+     function VO() {
+       if (ai) return Ii;
+       ai = 1;
+       let WW = {};
+       return Ii = function(iW) {
+         WW[iW] || (WW[iW] = !0, "undefined" !== typeof console && console.warn && console.warn(iW))
```

#### 83. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1409-L1418` → after: `L2168-L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2168-L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L2168-L2188) · [Before (L1409-L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1409-L1418)

```diff
-     function oy(ee, ie, He, ye) {
-       let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
-       if (!ie) return "";
-       const Me = (Ke = "fragmentInputs.vPositionW", Ue = ee.sunShadow ? {
-         normal: He,
-         flags: ye
-       } : null, `\n\tbloxdSpShadowPosition = ${Ke};\n${Ue?`\tbloxdSpShadowNormal = normalize(${Ue.normal});\n\tbloxdSpShadowEmissive = (${Ue.flags} & ${Yi.d.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${Ue.flags} & ${Yi.h}u) != 0u;\n`:""}`);
-       var Ke, Ue;
-       return ee.sunShadow && ("mask" === be || "maskEdge" === be) ? `${Me}${Fe="fragmentInputs.position",Je="maskEdge"===be,`\n\tbloxdSpShadowPixel = vec2i(${Fe}.xy);\n${Je?`\tbloxdSpShadowZ = ${Fe}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${Fe}.z), dpdy(${Fe}.z));\n`:""}`}` : Me;
-       var Fe, Je
+     function pO() {
+       if (zi) return ri;
+       zi = 1;
+       class WW {
+         constructor(WW) {
+           let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+           if (this.type = "warning", this.text = WW, iW.node && iW.node.source) {
+             let WW = iW.node.rangeBy(iW);
+             this.line = WW.start.line, this.column = WW.start.column, this.endLine = WW.end.line, this.endColumn = WW.end.column
+           }
+           for (let OW in iW) this[OW] = iW[OW]
+         }
+         toString() {
+           return this.node ? this.node.error(this.text, {
+             index: this.index,
+             plugin: this.plugin,
+ ... (5 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1424-L1425` → after: `L2191-L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2191-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L2191-L2215) · [Before (L1424-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1424-L1425)

```diff
-     function fy(ee) {
-       return `\tvertexOutputs.vPackTexture = ${ky}[min(u32(${ee}), arrayLength(&${ky}) - 1u)];\n`
+     function fO() {
+       if (Qi) return Fi;
+       Qi = 1;
+       let WW = pO();
+       class iW {
+         constructor(WW, iW, OW) {
+           this.processor = WW, this.messages = [], this.root = iW, this.opts = OW, this.css = void 0, this.map = void 0
+         }
+         toString() {
+           return this.css
+         }
+         warn(iW) {
+           let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+           OW.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (OW.plugin = this.lastPlugin.postcssPlugin);
+           let mW = new WW(iW, OW);
+           return this.messages.push(mW), mW
+ ... (9 more added lines; see GitHub link above)
```

#### 85. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1428-L1429` → after: `L2218-L2233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2218-L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L2218-L2233) · [Before (L1428-L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1428-L1429)

```diff
-     function Ty(ee) {
-       return void 0 !== ee.uv
+     function CO() {
+       if (mO) return OO;
+       mO = 1;
+       let WW = gO();
+       class iW extends WW {
+         constructor(WW) {
+           super(WW), this.type = "atrule"
+         }
+         append() {
+           return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
+         }
+         prepend() {
+           return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
+         }
+       }
+       return OO = iW, iW.default = iW, WW.registerAtRule(iW), OO
```

#### 86. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1432-L1460` → after: `L2236-L2265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2236-L2265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L2236-L2265) · [Before (L1432-L1460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1432-L1460)

```diff
-     function py(ee) {
-       if (!ee) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
-       if (Ty(ee)) return function(ee) {
-         const {
-           texture: ie,
-           cells: He,
-           layers: ye
-         } = ee, be = `textureDimensions(${ie}, bloxdSpLevel)`, Me = He ? `max(vec2u(vec2f(${be}) / ${He}), vec2u(1u))` : be, Ke = He ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Me};\n\tlet bloxdSpIndex = u32( … [truncated]
-         let Ue;
-         if (He)
-           if (1 === ye.length) Ue = `\treturn bloxdSpOwnTexel(${ye[0]}, bloxdSpUv, bloxdSpLevel);\n`;
-           else {
-             const ee = ye.length - 1;
-             Ue = `\tvar bloxdSpColour = bloxdSpOwnTexel(${ye[ee]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
-             for (let ie = ee - 1; ie >= 0; ie--) Ue += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${ye[ie]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a)) … [truncated]
-             Ue += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
- ... (13 more removed lines; see GitHub link above)
+     function XO() {
+       if (NO) return EO;
+       NO = 1;
+       let WW, iW, OW = gO();
+       class mW extends OW {
+         constructor(WW) {
+           super(WW), this.type = "root", this.nodes || (this.nodes = [])
+         }
+         normalize(WW, iW, OW) {
+           let mW = super.normalize(WW);
+           if (iW)
+             if ("prepend" === OW) this.nodes.length > 1 ? iW.raws.before = this.nodes[1].raws.before : delete iW.raws.before;
+             else if (this.first !== iW)
+             for (let EW of mW) EW.raws.before = iW.raws.before;
+           return mW
+         }
+ ... (14 more added lines; see GitHub link above)
```

#### 87. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1463-L1466` → after: `L2268-L2286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2268-L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L2268-L2286) · [Before (L1463-L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1463-L1466)

```diff
-     function Xy(ee, ie, He) {
-       return !!ee.surface && "bloxdDefaultSurface" !== ee.surface && function(ee, ie) {
-         return "liquid" === ie || !ee
-       }(ie, He)
+     function BO() {
+       if (LO) return PO;
+       LO = 1;
+       let WW = {
+         comma: iW => WW.split(iW, [","], !0),
+         space: iW => WW.split(iW, [" ", "\n", "\t"]),
+         split(WW, iW, OW) {
+           let mW = [],
+             EW = "",
+             NW = !1,
+             PW = 0,
+             LW = !1,
+             cW = "",
+             wW = !1;
+           for (let tW of WW) wW ? wW = !1 : "\\" === tW ? wW = !0 : LW ? tW === cW && (LW = !1) : '"' === tW || "'" === tW ? (LW = !0, cW = tW) : "(" === tW ? PW += 1 : ")" === tW ? PW > 0 && (PW -= 1) : 0 === PW && iW.includes(tW) && (NW = !0), NW ? ("" !== EW && mW.push(EW.trim … [truncated]
+           return (OW || "" !== EW) && mW.push(EW.trim()), mW
+ ... (3 more added lines; see GitHub link above)
```

#### 88. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1469-L1470` → after: `L2289-L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2289-L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L2289-L2307) · [Before (L1469-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1469-L1470)

```diff
-     function zy(ee, ie) {
-       return ee.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${ie.vertexLocalPosition}, ${yy(ie.vertexFlags)});\n\t\tlet bloxdSpVertex = ${ee.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t … [truncated]
+     function qO() {
+       if (wO) return cO;
+       wO = 1;
+       let WW = gO(),
+         iW = BO();
+       class OW extends WW {
+         constructor(WW) {
+           super(WW), this.type = "rule", this.nodes || (this.nodes = [])
+         }
+         get selectors() {
+           return iW.comma(this.selector)
+         }
+         set selectors(WW) {
+           let iW = this.selector ? this.selector.match(/,\s*/) : null,
+             OW = iW ? iW[0] : "," + this.raw("between", "beforeOpen");
+           this.selector = WW.join(OW)
+ ... (3 more added lines; see GitHub link above)
```

#### 89. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1473-L1489` → after: `L2310-L2347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2310-L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L2310-L2347) · [Before (L1473-L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1473-L1489)

```diff
-     function By(ee, ie, He, ye, be) {
-       if (!ee.surface) return "";
-       const Me = (ee, ie) => `\n\tlet bloxdSpTexelUV = ${ee};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = cl … [truncated]
-       let Ke = "",
-         Ue = "0u, 0u, vec2f(0.0), 0.0";
-       const Fe = ye && Ty(ye) ? ye : null,
-         Je = ye && !Ty(ye) ? ye : null;
-       if (Fe) {
-         Ke = `${Fe.id?`\n\tlet bloxdSpTexture = ${Fe.id};\n\t${ey} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${Fe.uv};${Me(function(ee,ie){var He;return`${null!==(He=ee.levelUv)&&void 0!==He?He:ee.cells?`${ie} / ${ee.cells}`:ie} * vec2f(textureDimensions(${ee.texture})) … [truncated]
-       } else Je && (Ke = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${Ry} = bloxdSpTexture >> 16u;${Me(`fragmentInputs.vMainUV1 * ${(0,Ii.mb)(Je.width)}`,"textureAtlas0")}`, Ue = `bloxdSpTexture & 0xffffu, ${Ry}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
-       const oe = be.overlayColour,
-         Re = oe ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
-         ke = "bloxdDefaultSurface" !== ee.surface || oe ? `\n\tbaseColor = vec4f(${Re}, baseColor.a);` : "",
-         qe = Xy(ee, ie, He) ? `\n\t${be.alphaOut} = bloxdSpSurface.alpha;` : "";
-       return `${Ke}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${be.alpha}, ${be.enchantTier}, ${be.enchantColour}, ${be.enchantSpeed}, ${null!==oe&&void 0!==oe?oe:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${be.normal}, ${be.localPosition}, ${yy(be.flags)}, ${Ue});\n … [truncated]
-     }
- ... (1 more removed lines; see GitHub link above)
+     function RO() {
+       if (ZO) return tO;
+       ZO = 1;
+       let WW = nO(),
+         iW = function() {
+           if (iO) return WO;
+           iO = 1;
+           const WW = "'".charCodeAt(0),
+             iW = '"'.charCodeAt(0),
+             OW = "\\".charCodeAt(0),
+             mW = "/".charCodeAt(0),
+             EW = "\n".charCodeAt(0),
+             NW = " ".charCodeAt(0),
+             PW = "\f".charCodeAt(0),
+             LW = "\t".charCodeAt(0),
+             cW = "\r".charCodeAt(0),
+ ... (22 more added lines; see GitHub link above)
```

#### 90. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1491-L1503` → after: `L2349-L2742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2349-L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L2349-L2742) · [Before (L1491-L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1491-L1503)

```diff
-     function gy(ee, ie, He, ye) {
-       if (!ee.light) return "";
-       const be = ie ? `${Ii.k}.rgb, ${Ii.k}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${Ii.h}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
-         {
-           lambert: Me,
-           diffuse: Ke,
-           emissive: Ue,
-           ambient: Fe,
-           fogColour: Je,
-           fogAlpha: oe,
-           normal: Re
-         } = ye;
-       return `\tvar ${Ey} = BloxdLightIn(vec3f(0.0), ${He?Me:"0.0"}, ${Ke}, ${Ue}, ${Fe}, ${be}, ${Je}, ${oe}, fragmentInputs.vPositionW, ${Re}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn. … [truncated]
+             function XW(WW) {
+               throw YW.error("Unclosed " + WW, pW)
+             }
+             return {
+               back: function(WW) {
+                 CW.push(WW)
+               },
+               endOfFile: function() {
+                 return 0 === CW.length && pW >= VW
+               },
+               nextToken: function(YW) {
+                 if (CW.length) return CW.pop();
+                 if (pW >= VW) return;
+                 let vW = !!YW && YW.ignoreUnclosed;
+                 switch (yW = gW.charCodeAt(pW), yW) {
+                   case EW:
+ ... (378 more added lines; see GitHub link above)
```

#### 91. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1506-L1531` → after: `L2745-L2750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2745-L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L2745-L2750) · [Before (L1506-L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1506-L1531)

```diff
-     function Oy(ee) {
-       return ee.light ? `\n\t{\n\t\tlet bloxdSpLight = ${ee.light}(bloxdSpSurface, ${Ey});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
-     }
-     const dy = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
-       Wy = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
-       ty = "\treturn color;\n}",
-       Zy = {
-         vertexFlags: "vertexOutputs.vBlockFlags",
-         vertexLocalPosition: "vec3f(0.0)",
-         flags: "fragmentInputs.vBlockFlags",
-         normal: "normalize(fragmentInputs.vNormalW)",
-         alpha: "alpha",
-         alphaOut: "alpha",
-         lambert: "fragmentInputs.vTerrainLambert",
-         diffuse: "material.vDiffuseColor.rgb",
-         emissive: "material.emissiveAndLevel.xyz",
- ... (10 more removed lines; see GitHub link above)
+     function GO() {
+       if (lO) return xO;
+       lO = 1;
+       let WW = gO(),
+         iW = RO(),
+         OW = dO();
```

#### 92. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1533-L1535` → after: `L2752-L2762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2752-L2762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L2752-L2762) · [Before (L1533-L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1533-L1535)

```diff
-     function Dy(ee) {
-       var ie;
-       return !(null === (ie = (0, Qi.c)(ee)) || void 0 === ie || !ie.sceneDepth)
+       function mW(WW, mW) {
+         let EW = new OW(WW, mW),
+           NW = new iW(EW);
+         try {
+           NW.parse()
+         } catch (PW) {
+           throw PW
+         }
+         return NW.root
+       }
+       return xO = mW, mW.default = mW, WW.registerParse(mW), xO
```

#### 93. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1538-L1541` → after: `L2765-L2802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2765-L2802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L2765-L2802) · [Before (L1538-L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1538-L1541)

```diff
-     function Py(ee) {
-       const ie = (0, Qi.c)(ee);
-       return !!ie && Xy(ie.hooks, ie.strict, ie.program)
-     }
+     function IO() {
+       if (bO) return AO;
+       bO = 1;
+       let {
+         isClean: WW,
+         my: iW
+       } = TO(), OW = eO(), mW = hO(), EW = gO(), NW = DO(), PW = (VO(), fO()), LW = GO(), cW = XO();
+       const wW = {
+           atrule: "AtRule",
+           comment: "Comment",
+           decl: "Declaration",
+           document: "Document",
+           root: "Root",
+           rule: "Rule"
+         },
+         tW = {
+ ... (22 more added lines; see GitHub link above)
```

#### 94. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1543-L1545` → after: `L2804-L2806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2804-L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L2804-L2806) · [Before (L1543-L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1543-L1545)

```diff
-     function Ay(ee, ie, He, ye) {
-       return My(ee, ie, He, ye, "terrain")
-     }
+       function xW(WW) {
+         return "object" === typeof WW && "function" === typeof WW.then
+       }
```

#### 95. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1547-L1572` → after: `L2808-L2812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2808-L2812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L2808-L2812) · [Before (L1547-L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1547-L1572)

```diff
-     function Yy(ee, ie, He) {
-       let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
-       const Me = function(ee) {
-           return (0, Qi.b)(ee.packVariant, ee.liquid ? "liquid" : "terrain")
-         }(ee),
-         {
-           hooks: Ke
-         } = Me,
-         Ue = Uy(Me, ye),
-         Fe = "edge" === be ? "maskEdge" : "plain" === be ? "mask" : "trace",
-         Je = zy(Ke, Zy);
-       Je && (ie = Ay(ie, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz … [truncated]
-       const oe = "atlas" === ee.texture ? {
-           count: ee.atlasCount,
-           layers: ee.atlasLayers,
- ... (10 more removed lines; see GitHub link above)
+       function lW(WW) {
+         let iW = !1,
+           OW = wW[WW.type];
+         return "decl" === WW.type ? iW = WW.prop.toLowerCase() : "atrule" === WW.type && (iW = WW.name.toLowerCase()), iW && WW.append ? [OW, OW + "-" + iW, 0, OW + "Exit", OW + "Exit-" + iW] : iW ? [OW, OW + "-" + iW, OW + "Exit", OW + "Exit-" + iW] : WW.append ? [OW, 0, OW + "E … [truncated]
+       }
```

#### 96. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1574-L1575` → after: `L2814-L3064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2814-L3064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L2814-L3064) · [Before (L1574-L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1574-L1575)

```diff
-     function ay(ee) {
-       return void 0 !== ee.packVariant
+       function AW(WW) {
+         let iW;
+         return iW = "document" === WW.type ? ["Document", 0, "DocumentExit"] : "root" === WW.type ? ["Root", 0, "RootExit"] : lW(WW), {
+           eventIndex: 0,
+           events: iW,
+           iterator: 0,
+           node: WW,
+           visitorIndex: 0,
+           visitors: []
+         }
+       }
+ 
+       function bW(iW) {
+         return iW[WW] = !1, iW.nodes && iW.nodes.forEach((WW => bW(WW))), iW
+       }
+       let jW = {};
+ ... (235 more added lines; see GitHub link above)
```

#### 97. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1578-L1619` → after: `L3281-L3317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3281-L3317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L3281-L3317) · [Before (L1578-L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1578-L1619)

```diff
-         uMe: 0,
-         mMe: 4,
-         lMe: 8,
-         SMe: 12,
-         fogInfos: 16,
-         fogColour: 20,
-         outputHeight: 23,
-         sceneAmbient: 24,
-         dirLights: 28,
-         aoLevels: 44
-       },
-       xy = cy.aoLevels + 4,
-       Ly = {
-         diffuse: 0,
-         ambientAndCutoff: 4,
-         emissiveAndLevel: 8,
- ... (26 more removed lines; see GitHub link above)
+       script: "noscript",
+       altglyph: "altGlyph",
+       altglyphdef: "altGlyphDef",
+       altglyphitem: "altGlyphItem",
+       animatecolor: "animateColor",
+       animatemotion: "animateMotion",
+       animatetransform: "animateTransform",
+       clippath: "clipPath",
+       feblend: "feBlend",
+       fecolormatrix: "feColorMatrix",
+       fecomponenttransfer: "feComponentTransfer",
+       fecomposite: "feComposite",
+       feconvolvematrix: "feConvolveMatrix",
+       fediffuselighting: "feDiffuseLighting",
+       fedisplacementmap: "feDisplacementMap",
+       fedistantlight: "feDistantLight",
+ ... (21 more added lines; see GitHub link above)
```

#### 98. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1623-L1624` → after: `L3321-L3329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3321-L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L3321-L3329) · [Before (L1623-L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1623-L1624)

```diff
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Gy;
-       return `\n\tlet atlasIdxIn = ${ee};\n\tlet animTick = ${He.YR};\n\tlet animTickStride = ${He.stride};\n\tlet numAnimTextures = ${He.count};\n\t${(0,de.g)(Oe.b.WGSL,He.perTexture)}\n\t${ie}animLayer;\n`
+       const OW = null == iW ? void 0 : iW.stylesWithHoverClass.get(WW);
+       if (OW) return OW;
+       let mW = WW;
+       try {
+         mW = rO([ti, Zi]).process(WW).css
+       } catch (EW) {
+         console.warn("Failed to adapt css for replay", EW)
+       }
+       return null == iW || iW.stylesWithHoverClass.set(WW, mW), mW
```

#### 99. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1627-L1636` → after: `L3332-L3334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3332-L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L3332-L3334) · [Before (L1627-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1627-L1636)

```diff
-     function Qy(ee) {
-       const ie = (ie, He) => {
-         const ye = ie > 0 ? `fragmentInputs.texAtlasIndex - ${ee.atlasLayers.toFixed(1)} * ${ie.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
-         return `${He?"textureSampleLevel":"textureSample"}(textureAtlas${ie}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${ye}))${He?", atlasLod":""})`
-       };
-       if (1 === ee.atlasCount) return `baseColor = ${ie(0,!1)};`;
-       let He = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,Ii.mb)(ee.W4)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
-       for (let ye = 0; ye < ee.atlasCount; ye++) {
-         const be = ee.atlasLayers * (ye + 1) - .5;
-         He += `${ye>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,Ii.mb)(be)}) {\n\t\tbaseColor = ${ie(ye,!0)};\n\t}`
+     function QO() {
+       return {
+         stylesWithHoverClass: new Map
```

#### 100. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1642` → after: `L3341-L3348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3341-L3348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L3341-L3348) · [Before (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L1642)

```diff
-       return `terrain-${ee.texture}${"atlas"===ee.texture?ee.atlasCount:""}${ee.animated?"-anim":""}${ee.alphaTest?"-test":""}${ee.lighting?"-lit":""}-dir${ee.dirLightCount}${ee.packed?"-packed":""}${ay(ee)?`-sp${ee.packVariant}`:""}${ee.liquid?"-liquid":""}${ee.resting?"-rest":" … [truncated]
+       if (WW.UNSAFE_allowUnprotectedRebuild) return;
+       const iW = WW.doc.defaultView;
+       if (iW && (!im.has(WW.doc) || ! function(WW) {
+           if (!WW || "IFRAME" !== WW.tagName) return !1;
+           if (!("sandbox" in WW)) return !1;
+           const iW = Array.from(WW.sandbox);
+           return 1 === iW.length && "allow-same-origin" === iW[0]
+         }(iW.frameElement))) throw new Error("rrweb-snapshot.rebuild() cannot rebuild into an unprotected browser document. Use rebuildIntoSandboxedIframe() or set UNSAFE_allowUnprotectedRebuild: true only when you accept the script-execution risk.")
```
