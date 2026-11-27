# Changed — Bundle Modifications Report (Part 047 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `47 / 126` (**316** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 046](part-046.md) · [Part 048 →](part-048.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 31. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L217-L283` → after: `L429-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L429-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L429-L480) · [Before (L217-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L217-L283)

```diff
-     class fR {
-       static _NearestPow2Floor(RR) {
-         return RR <= 1 ? 1 : 1 << Math.floor(Math.log2(RR))
-       }
-       static ConvertCubeMapTextureToSphericalPolynomial(RR) {
-         if (!RR.isCube) return null;
-         RR.jH()?.ke().flushFramebuffer();
-         const JR = RR.getSize().width,
-           GR = RR._sphericalPolynomialTargetSize,
-           yR = GR > 0 ? this._NearestPow2Floor(GR) : 0,
-           tR = !RR.noMipmap && !0 === RR._texture?.generateMipMaps,
-           uR = yR > 0 && yR < JR && tR,
-           ZR = uR ? Math.max(0, Math.round(Math.log2(JR / yR))) : 0,
-           qR = uR ? Math.max(1, Math.floor(JR / Math.pow(2, ZR))) : JR,
-           iR = RR.readPixels(0, ZR, void 0, !1),
-           fR = RR.readPixels(1, ZR, void 0, !1);
- ... (51 more removed lines; see GitHub link above)
+ 
+     function Er(rr) {
+       let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const Zr = new ar.c(rr, Qr);
+       Sr.sideOrientation = ar.c._GetDefaultSideOrientation(Sr.sideOrientation), Zr._originalBuilderSideOrientation = Sr.sideOrientation;
+       return fr(Sr).applyToMesh(Zr, Sr.updatable), Zr
+     }
+     let pr = !1;
+     pr || (pr = !0, jr.b.CreateBox = fr, ar.c.CreateBox = function(rr, Sr) {
+       return Er(rr, {
+         size: Sr,
+         sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
+         updatable: arguments.length > 3 ? arguments[3] : void 0
+       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+     })
+ ... (36 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L291-L338` → after: `L485-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L485-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L485-L523) · [Before (L291-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L291-L338)

```diff
-       static ConvertCubeMapToSphericalPolynomial(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const GR = JR > 0 ? this._NearestPow2Floor(JR) : 0;
-         if (GR > 0 && RR.size > GR) {
-           const JR = 5 === RR.format ? 4 : 3,
-             yR = ["right", "left", "up", "down", "front", "back"],
-             tR = {};
-           for (const uR of yR) tR[uR] = this._DownsampleFace(RR[uR], RR.size, GR, JR);
-           RR = {
-             ...RR,
-             ...tR,
-             size: GR
-           }
-         }
-         const yR = new uR.c;
-         let iR = 0;
- ... (32 more removed lines; see GitHub link above)
+       const fr = new ar.b;
+       return fr.indices = Sr, fr.positions = Qr, Wr && (fr.colors = jr), fr
+     }
+ 
+     function pr(rr) {
+       const Sr = rr.dashSize || 3,
+         Qr = rr.gapSize || 1,
+         Wr = rr.dashNb || 200,
+         jr = rr.points,
+         Ir = [],
+         fr = [],
+         Er = Zr.u.Zero();
+       let pr, xr, mr, Nr = 0,
+         Ur = 0;
+       for (mr = 0; mr < jr.length - 1; mr++) jr[mr + 1].subtractToRef(jr[mr], Er), Nr += Er.length();
+       const tr = Nr / Wr,
+ ... (23 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L340-L341` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L525) · [Before (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L340-L341)

```diff
-         const rR = 6 * (4 * Math.PI) / 6 / iR;
-         return yR.scaleInPlace(rR), yR.convertIncidentRadianceToIrradiance(), yR.convertIrradianceToLambertianRadiance(), uR.g.FromHarmonics(yR)
+         return Zr.updateVerticesData(Ir.j.PositionKind, rr, !1, !1), ar && Sr && Zr.updateVerticesData(Ir.j.ColorKind, Sr, !1, !1), Zr.refreshBoundingInfo(), Zr
```

#### 34. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L344-L359` → after: `L531-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L531-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L531-L542) · [Before (L344-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L344-L359)

```diff
-     fR._FileFaces = [new iR("right", new yR.r(1, 0, 0), new yR.r(0, 0, -1), new yR.r(0, -1, 0)), new iR("left", new yR.r(-1, 0, 0), new yR.r(0, 0, 1), new yR.r(0, -1, 0)), new iR("up", new yR.r(0, 1, 0), new yR.r(1, 0, 0), new yR.r(0, 0, 1)), new iR("down", new yR.r(0, -1, 0), ne … [truncated]
-   },
-   53632: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => yR.h,
-       h: () => yR.q
-     });
-     var yR = GR(41564);
-     (0, yR.u)()
-   },
-   39062: (RR, JR, GR) => {
-     function yR() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (RR => {
-         const JR = 16 * Math.random() | 0;
-         return ("x" === RR ? JR : 3 & JR | 8).toString(16)
-       }))
+ 
+     function mr(rr, Sr) {
+       let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const Zr = Sr.colors ? [Sr.colors] : null;
+       return xr(rr, {
+         lines: [Sr.points],
+         updatable: Sr.updatable,
+         instance: Sr.instance,
+         colors: Zr,
+         useVertexAlpha: Sr.useVertexAlpha,
+         material: Sr.material
+       }, Qr)
```

#### 35. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L361-L400` → after: `L544-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L544-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L544-L563) · [Before (L361-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L361-L400)

```diff
-     GR.d(JR, {
-       c: () => yR
-     })
-   },
-   53831: (RR, JR, GR) => {
-     GR.d(JR, {
-       e: () => uR
-     });
-     var yR = GR(53823),
-       tR = GR(53836);
-     class uR {
-       static ExpandRGBDTexture(RR) {
-         const JR = RR._texture;
-         if (!JR || !RR.isRGBD) return;
-         const tR = JR.ke(),
-           uR = tR.getCaps(),
- ... (24 more removed lines; see GitHub link above)
+ 
+     function Nr(rr, Sr) {
+       let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const ar = Sr.points,
+         Ir = Sr.instance,
+         Er = Sr.gapSize || 1,
+         xr = Sr.dashSize || 3;
+       if (Ir) {
+         const rr = rr => {
+           const Sr = Zr.u.Zero(),
+             Qr = rr.length / 6;
+           let Wr, jr, fr, Er, pr = 0,
+             xr = 0;
+           for (fr = 0; fr < ar.length - 1; fr++) ar[fr + 1].subtractToRef(ar[fr], Sr), pr += Sr.length();
+           const mr = pr / Qr,
+             Nr = Ir._creationDataStorage.dashSize,
+ ... (4 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L402-L406` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L565) · [Before (L402-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L402-L406)

```diff
-         qR && (ZR ? iR() : RR.onLoadObservable.addOnce(iR))
-       }
-       static async EncodeTextureToRGBD(RR, JR) {
-         let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         return JR.ke().isWebGPU ? await GR.e(661).then((() => GR(64281))) : await GR.e(643).then((() => GR(64274))), await (0, tR.e)("rgbdEncode", RR, JR, yR, 1, 5)
+         return (Sr.dashNb || Sr.dashSize || Sr.gapSize || Sr.useVertexAlpha || Sr.material) && fr.c.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), Ir.updateMeshPositions(rr, !1), Ir
```

#### 37. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L410-L420` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L588) · [Before (L410-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L410-L420)

```diff
-   64132: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       AsyncLoop: () => yR.c,
-       RegisterTools: () => yR.e,
-       Tools: () => yR.h,
-       className: () => yR.k
-     });
-     var yR = GR(41616);
-     (0, yR.e)()
-   },
-   53887: (RR, JR, GR) => {
+   42297: (rr, Sr, Qr) => {
```

#### 38. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L422` → after: `L590-L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L590-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L590-L591) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L422)

```diff
-       e: () => tR
+       b: () => mr,
+       c: () => tr
```

#### 39. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L424-L429` → after: `L593-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L593-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L593-L628) · [Before (L424-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L424-L429)

```diff
-     class yR {
-       constructor(RR) {
-         this._pendingActions = new Array, this._workerInfos = RR.map((RR => ({
-           workerPromise: Promise.resolve(RR),
-           idle: !0
-         })))
+     var Zr, Wr, ar = Qr(38684),
+       jr = Qr(41995),
+       Ir = Qr(42243),
+       fr = Qr(42299),
+       Er = Qr(42130),
+       pr = Qr(42308),
+       xr = Qr(41769);
+     class mr extends Ir.c {
+       _isShaderMaterial(rr) {
+         return !!rr && "ShaderMaterial" === rr.getClassName()
+       }
+       constructor(rr) {
+         let Sr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           Zr = arguments.length > 5 ? arguments[5] : void 0,
+           Wr = arguments.length > 6 ? arguments[6] : void 0,
+           Ir = arguments.length > 7 ? arguments[7] : void 0;
+ ... (20 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L431-L435` → after: `L630-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L630-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L630-L631) · [Before (L431-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L431-L435)

```diff
-       dispose() {
-         for (const RR of this._workerInfos) RR.workerPromise.then((RR => {
-           RR.terminate()
-         }));
-         this._workerInfos.length = 0, this._pendingActions.length = 0
+       get material() {
+         return this._internalAbstractMeshDataInfo._material
```

#### 41. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L437-L438` → after: `L633-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L633-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L633-L637) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L437-L438)

```diff
-       push(RR) {
-         this._executeOnIdleWorker(RR) || this._pendingActions.push(RR)
+       set material(rr) {
+         const Sr = this.material;
+         if (Sr === rr) return;
+         const Qr = Sr && this._ownsMaterial;
+         this._ownsMaterial = !1, this._setInternalMaterial(rr), Qr && Sr?.dispose()
```

#### 42. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L440-L442` → after: `L639-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L639-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L639-L642) · [Before (L440-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L440-L442)

```diff
-       _executeOnIdleWorker(RR) {
-         for (const JR of this._workerInfos)
-           if (JR.idle) return this._execute(JR, RR), !0;
+       _setInternalMaterial(rr) {
+         this._setMaterial(rr), this.material && (this.material.fillMode = Er.d.LineListDrawMode, this.material.disableLighting = !0)
+       }
+       get checkCollisions() {
```

#### 43. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L445-L451` → after: `L645-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L645-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L645-L657) · [Before (L445-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L445-L451)

```diff
-       _execute(RR, JR) {
-         RR.idle = !1, RR.workerPromise.then((GR => {
-           JR(GR, (() => {
-             const JR = this._pendingActions.shift();
-             JR ? this._execute(RR, JR) : RR.idle = !0
-           }))
-         }))
+       set checkCollisions(rr) {}
+       _bind(rr, Sr) {
+         if (!this._geometry) return this;
+         const Qr = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
+         if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Sr, Qr) : this._geometry._bind(Sr, Qr, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMate … [truncated]
+           const {
+             r: rr,
+             g: Sr,
+             b: Qr
+           } = this.color;
+           this._color4.set(rr, Sr, Qr, this.alpha), this.material.setColor4("color", this._color4)
+         }
+         return this
```

#### 44. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L453-L457` → after: `L659-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L659-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L659-L683) · [Before (L453-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L453-L457)

```diff
-     }
-     class tR extends yR {
-       constructor(RR, JR) {
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tR.DefaultOptions;
-         super([]), this._maxWorkers = RR, this._createWorkerAsync = JR, this._options = GR
+       _draw(rr, Sr, Qr) {
+         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
+         const Zr = this.eC().MU();
+         return this._unIndexed ? Zr.drawArraysType(Er.d.LineListDrawMode, rr.verticesStart, rr.verticesCount, Qr) : Zr.drawElementsType(Er.d.LineListDrawMode, rr.indexStart, rr.indexCount, Qr), this
+       }
+       dispose(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Sr) && this.material?.dispose(!1, !1, !0), super.dispose(rr)
+       }
+       clone(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           Qr = arguments.length > 2 ? arguments[2] : void 0;
+         if (Sr && void 0 === Sr._addToSceneRootNodes) {
+           const Qr = Sr;
+           return Qr.source = this, new mr(rr, this.eC(), Qr.parent, Qr.source, Qr.doNotCloneChildren)
+         }
+ ... (9 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L459-L467` → after: `L685-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L685-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L685-L686) · [Before (L459-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L459-L467)

```diff
-       push(RR) {
-         if (!this._executeOnIdleWorker(RR))
-           if (this._workerInfos.length < this._maxWorkers) {
-             const JR = {
-               workerPromise: this._createWorkerAsync(),
-               idle: !1
-             };
-             this._workerInfos.push(JR), this._execute(JR, RR)
-           } else this._pendingActions.push(RR)
+       serialize(rr) {
+         super.serialize(rr), rr.color = this.color.OWr(), rr.alpha = this.alpha
```

#### 46. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L469-L479` → after: `L688-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L688-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L688-L690) · [Before (L469-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L469-L479)

```diff
-       _execute(RR, JR) {
-         RR.timeoutId && (clearTimeout(RR.timeoutId), delete RR.timeoutId), super._execute(RR, ((GR, yR) => {
-           JR(GR, (() => {
-             yR(), RR.idle && (RR.timeoutId = setTimeout((() => {
-               RR.workerPromise.then((RR => {
-                 RR.terminate()
-               }));
-               const JR = this._workerInfos.indexOf(RR); - 1 !== JR && this._workerInfos.splice(JR, 1)
-             }), this._options.idleTimeElapsedBeforeRelease))
-           }))
-         }))
+       static Parse(rr, Sr) {
+         const Qr = new mr(rr.name, Sr);
+         return Qr.color = ar.e.FromArray(rr.color), Qr.alpha = rr.alpha, Qr
```

#### 47. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L482-L483` → after: `L693-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L693-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L693-L700) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L482-L483)

```diff
-     tR.DefaultOptions = {
-       idleTimeElapsedBeforeRelease: 1e3
+     mr.ForceGLSL = !1;
+     class Nr extends fr.e {
+       constructor(rr, Sr) {
+         super(rr, Sr), this.intersectionThreshold = Sr.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 48. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L486-L613` → after: `L708-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L708-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L708-L710) · [Before (L486-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L486-L613)

```diff
-   64157: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       AbstractThreeMfSerializer: () => Yq,
-       BVHExporter: () => pZ,
-       ContentTypeFileName: () => eq,
-       DefaultXmlSerializerFormatOptions: () => SZ,
-       DefaultXmlSerializerNumberOptions: () => zZ,
-       EXT_lights_area: () => nt,
-       EXT_mesh_gpu_instancing: () => Py,
-       EXT_texture_avif: () => uZ,
-       EXT_texture_webp: () => JZ,
-       GLTF2Export: () => Hy,
-       GLTFData: () => fR,
-       GetXmlFieldMeta: () => oZ,
-       GetXmlName: () => cZ,
-       IsQualifiedName: () => gZ,
- ... (112 more removed lines; see GitHub link above)
+   40237: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => ar
```

#### 49. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L615-L617` → after: `L712-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L712-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L712-L715) · [Before (L615-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L615-L617)

```diff
-     var yR = GR(38195),
-       tR = GR(64132),
-       uR = GR(41810);
+     var Zr = Qr(40246);
+     const Wr = (rr, Sr, Qr) => rr ? rr.getClassName && "Mesh" === rr.getClassName() ? null : !rr.getClassName || "SubMesh" !== rr.getClassName() && "PhysicsBody" !== rr.getClassName() ? rr.clone ? rr.clone() : Array.isArray(rr) ? rr.slice() : Qr && "object" === typeof rr ? {
+       ...rr
+     } : null : rr.clone(Sr) : null;
```

#### 50. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L619-L624` → after: `L717-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L717-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L717-L730) · [Before (L619-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L619-L624)

```diff
-       static OBJ(RR, JR, GR, ZR) {
-         const qR = [];
-         let iR = 1,
-           fR = 1;
-         JR && (GR || (GR = "mat"), qR.push("mtllib " + GR + ".mtl"));
-         for (let VR = 0; VR < RR.length; VR++) {
+       static DeepCopy(rr, Sr, Qr, ar) {
+         let jr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const Ir = function(rr) {
+           const Sr = [];
+           do {
+             const Qr = Object.getOwnPropertyNames(rr);
+             for (const rr of Qr) - 1 === Sr.indexOf(rr) && Sr.push(rr)
+           } while (rr = Object.getPrototypeOf(rr));
+           return Sr
+         }(rr);
+         for (const Er of Ir) {
+           if ("_" === Er[0] && (!ar || -1 === ar.indexOf(Er))) continue;
+           if (Er.endsWith("Observable")) continue;
+           if (Qr && -1 !== Qr.indexOf(Er)) continue;
```

#### 51. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L626-L667` → after: `L732-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L732-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L732-L745) · [Before (L626-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L626-L667)

```diff
-             KR = GR.name || `mesh${VR}}`;
-           qR.push(`o ${KR}`);
-           let wR = null;
-           if (ZR) {
-             const RR = GR.computeWorldMatrix(!0);
-             wR = new yR.Matrix, RR.invertToRef(wR), GR.bakeTransformIntoVertices(RR)
-           }
-           if (JR) {
-             const RR = GR.material;
-             RR && qR.push("usemtl " + RR.id)
-           }
-           const rR = GR.geometry;
-           if (!rR) {
-             tR.Tools.Warn("No geometry is present on the mesh");
-             continue
-           }
- ... (26 more removed lines; see GitHub link above)
+             pr = typeof Ir;
+           if ("function" !== pr) try {
+             if ("object" === pr)
+               if (Ir instanceof Uint8Array) Sr[Er] = Uint8Array.from(Ir);
+               else if (Ir instanceof Array) {
+               if (Sr[Er] = [], Ir.length > 0)
+                 if ("object" == typeof Ir[0])
+                   for (let rr = 0; rr < Ir.length; rr++) {
+                     const Qr = Wr(Ir[rr], Sr, jr); - 1 === Sr[Er].indexOf(Qr) && Sr[Er].push(Qr)
+                   } else Sr[Er] = Ir.slice(0)
+             } else Sr[Er] = Wr(Ir, Sr, jr);
+             else Sr[Er] = Ir
+           } catch (fr) {
+             Zr.c.Warn(fr.message)
```

#### 52. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L701-L763` → after: `L750-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L750-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L750-L756) · [Before (L701-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L701-L763)

```diff
-     var VR = GR(42711),
-       KR = GR(42644),
-       wR = GR(53615),
-       rR = GR(42657),
-       eR = GR(41352),
-       aR = GR(38224),
-       LR = GR(38329),
-       nR = GR(38239);
-     const UR = nR.HighestCommonFactor,
-       WR = {
-         ...nR,
-         TwoPi: 2 * Math.PI,
-         Sign: Math.sign,
-         Log2: Math.log2,
-         HCF: UR
-       };
- ... (47 more removed lines; see GitHub link above)
+   },
+   39405: (rr, Sr, Qr) => {
+     function Zr() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (rr => {
+         const Sr = 16 * Math.random() | 0;
+         return ("x" === rr ? Sr : 3 & Sr | 8).toString(16)
+       }))
```

#### 53. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L765-L16076` → after: `L758-L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L758-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L758-L765) · [Before (L765-L16076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L765-L16076)

```diff
-     let jR = (() => {
-       var RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR;
-       let VR, KR, wR, rR, eR, aR, LR, nR, UR, WR = zR.b,
-         AR = [],
-         CR = [],
-         XR = [],
-         MR = [],
-         BR = [],
-         gR = [],
-         bR = [],
-         vR = [],
-         OR = [],
-         xR = [],
-         NR = [],
-         DR = [],
-         HR = [],
- ... (15296 more removed lines; see GitHub link above)
+     Qr.d(Sr, {
+       b: () => Zr
+     })
+   },
+   40246: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => Zr
+     });
```

#### 54. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L16078-L16197` → after: `L767-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L767-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/262.js#L767-L838) · [Before (L16078-L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/262.js#L16078-L16197)

```diff
-       constructor() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
-           GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-         this._from = RR, this._to = JR, this._step = GR, this._i = RR
-       }
-       next() {
-         if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
-         const RR = this._i;
-         return this._i += this._step, RR
-       }
-       reset() {
-         return this._i = this._from, this
-       }
-     }
-     class Tq extends Yq {
- ... (104 more removed lines; see GitHub link above)
+       static _CheckLimit(rr, Sr) {
+         let Qr = Zr._LogLimitOutputs[rr];
+         return Qr ? Qr.current++ : (Qr = {
+           limit: Sr,
+           current: 1
+         }, Zr._LogLimitOutputs[rr] = Qr), Qr.current <= Qr.limit
+       }
+       static _GenerateLimitMessage(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const Qr = Zr._LogLimitOutputs[rr];
+         if (!Qr || !Zr.MessageLimitReached) return;
+         const Wr = this._Levels[Sr];
+         Qr.current === Qr.limit && Zr[Wr.name](Zr.MessageLimitReached.replace(/%LIMIT%/g, "" + Qr.limit).replace(/%TYPE%/g, Wr.name ?? ""))
+       }
+       static _AddLogEntry(rr) {
+         Zr._LogCache = rr + Zr._LogCache, Zr.OnNewCacheEntry && Zr.OnNewCacheEntry(rr)
+ ... (56 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/263.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/263.js` (267 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2)

#### 1. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2)

```diff
- export const ids = [263];
+ export const ids = [263, 268];
```

#### 2. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L4)

```diff
-   38224: (RR, JR, GR) => {
+   54371: (rr, Sr, Qr) => {
```

#### 3. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L8-L30` → after: `L8-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L8-L21) · [Before (L8-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L8-L30)

```diff
-     var yR = GR(38233);
-     class tR {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
-     }
-     tR.Instances = [], tR.OnEnginesDisposedObservable = new yR.b, tR._LastCreatedScene = null, tR.UseFallbackTexture = !0, tR.FallbackTexture = ""
-   },
-   38219: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => yR
-     });
-     class yR {
- ... (7 more removed lines; see GitHub link above)
+     var Zr = Qr(54310),
+       Wr = Qr(41865);
+     let ar = !1;
+ 
+     function jr() {
+       ar || (ar = !0, Wr.b.prototype._sphericalPolynomialTargetSize = 0, Wr.b.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(Wr.b.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Zr.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+               this._texture._sphericalPolynomial = rr, this._texture._sphericalPolynomialComputed = !0
+             }))), null
```

#### 4. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L32-L33` → after: `L23-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L23-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L23-L30) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L32-L33)

```diff
-         yR.MatrixUse64Bits = RR, yR.MatrixCurrentType = yR.MatrixUse64Bits ? Array : Float32Array, yR.MatrixTrackedMatrices = null
-       }
+           return null
+         },
+         set: function(rr) {
+           this._texture && (this._texture._sphericalPolynomial = rr)
+         },
+         enumerable: !0,
+         configurable: !0
+       }))
```

#### 5. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L37` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L33) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L37)

```diff
-   38247: (RR, JR, GR) => {
+   38679: (rr, Sr, Qr) => {
```

#### 6. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L39-L44` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L35-L36) · [Before (L39-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L39-L44)

```diff
-       c: () => qR,
-       e: () => fR,
-       h: () => iR,
-       k: () => yR,
-       n: () => uR,
-       r: () => ZR
+       Color3: () => Zr.e,
+       d: () => Zr.f
```

#### 7. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L46-L164` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L38-L39) · [Before (L46-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L46-L164)

```diff
-     class yR {}
- 
-     function tR(RR) {
-       RR.updateFlag = yR._UpdateFlagSeed++
-     }
- 
-     function uR(RR, JR, GR) {
-       let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       const tR = RR.QtR(),
-         uR = JR.QtR(),
-         ZR = tR[0],
-         qR = tR[1],
-         iR = tR[2],
-         fR = tR[3],
-         VR = tR[4],
-         KR = tR[5],
- ... (103 more removed lines; see GitHub link above)
+     var Zr = Qr(38684);
+     (0, Zr.h)()
```

#### 8. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L166` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L41) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L166)

```diff
-   38204: (RR, JR, GR) => {
+   39262: (rr, Sr, Qr) => {
```

#### 9. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L168-L174` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L43) · [Before (L168-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L168-L174)

```diff
-       e: () => aR,
-       i: () => eR,
-       j: () => AR,
-       l: () => nR,
-       n: () => KR,
-       r: () => wR,
-       s: () => rR
+       b: () => Wr
```

#### 10. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L176-L183` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L45) · [Before (L176-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L176-L183)

```diff
-     var yR = GR(38213),
-       tR = GR(38217),
-       uR = GR(38219),
-       ZR = GR(38224),
-       qR = GR(38239),
-       iR = GR(38247),
-       fR = GR(38253);
-     const VR = RR => parseInt(RR.toString().replace(/\W/g, ""));
+     var Zr = Qr(39264);
```

#### 11. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L185-L448` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L47-L50) · [Before (L185-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L185-L448)

```diff
-       constructor() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         this.x = RR, this.y = JR
-       }
-       toString() {
-         return `{X: ${this.x} Y: ${this.y}}`
-       }
-       getClassName() {
-         return "Vector2"
-       }
-       getHashCode() {
-         let RR = VR(this.x);
-         return RR = 397 * RR ^ VR(this.y), RR
-       }
-       toArray(RR) {
- ... (248 more removed lines; see GitHub link above)
+       static GetPlanes(rr) {
+         const Sr = [];
+         for (let Qr = 0; Qr < 6; Qr++) Sr.push(new Zr.d(0, 0, 0, 0));
+         return Wr.GetPlanesToRef(rr, Sr), Sr
```

#### 12. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L450-L451` → after: `L52-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L52-L54) · [Before (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L450-L451)

```diff
-       static Transform(RR, JR) {
-         return KR.TransformToRef(RR, JR, new KR)
+       static GetNearPlaneToRef(rr, Sr) {
+         const Qr = rr.m;
+         Sr.normal.x = Qr[3] + Qr[2], Sr.normal.y = Qr[7] + Qr[6], Sr.normal.z = Qr[11] + Qr[10], Sr.d = Qr[15] + Qr[14], Sr.normalize()
```

#### 13. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L453-L457` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L56-L58) · [Before (L453-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L453-L457)

```diff
-       static TransformToRef(RR, JR, GR) {
-         const yR = JR.m,
-           tR = RR.x * yR[0] + RR.y * yR[4] + yR[12],
-           uR = RR.x * yR[1] + RR.y * yR[5] + yR[13];
-         return GR.x = tR, GR.y = uR, GR
+       static GetFarPlaneToRef(rr, Sr) {
+         const Qr = rr.m;
+         Sr.normal.x = Qr[3] - Qr[2], Sr.normal.y = Qr[7] - Qr[6], Sr.normal.z = Qr[11] - Qr[10], Sr.d = Qr[15] - Qr[14], Sr.normalize()
```

#### 14. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L459-L464` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L60-L62) · [Before (L459-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L459-L464)

```diff
-       static PointInTriangle(RR, JR, GR, yR) {
-         const tR = .5 * (-GR.y * yR.x + JR.y * (-GR.x + yR.x) + JR.x * (GR.y - yR.y) + GR.x * yR.y),
-           uR = tR < 0 ? -1 : 1,
-           ZR = (JR.y * yR.x - JR.x * yR.y + (yR.y - JR.y) * RR.x + (JR.x - yR.x) * RR.y) * uR,
-           qR = (JR.x * GR.y - JR.y * GR.x + (JR.y - GR.y) * RR.x + (GR.x - JR.x) * RR.y) * uR;
-         return ZR > 0 && qR > 0 && ZR + qR < 2 * tR * uR
+       static GetLeftPlaneToRef(rr, Sr) {
+         const Qr = rr.m;
+         Sr.normal.x = Qr[3] + Qr[0], Sr.normal.y = Qr[7] + Qr[4], Sr.normal.z = Qr[11] + Qr[8], Sr.d = Qr[15] + Qr[12], Sr.normalize()
```

#### 15. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L466-L467` → after: `L64-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L64-L66) · [Before (L466-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L466-L467)

```diff
-       static Distance(RR, JR) {
-         return Math.sqrt(KR.DistanceSquared(RR, JR))
+       static GetRightPlaneToRef(rr, Sr) {
+         const Qr = rr.m;
+         Sr.normal.x = Qr[3] - Qr[0], Sr.normal.y = Qr[7] - Qr[4], Sr.normal.z = Qr[11] - Qr[8], Sr.d = Qr[15] - Qr[12], Sr.normalize()
```

#### 16. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L469-L472` → after: `L68-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L68-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L68-L70) · [Before (L469-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L469-L472)

```diff
-       static DistanceSquared(RR, JR) {
-         const GR = RR.x - JR.x,
-           yR = RR.y - JR.y;
-         return GR * GR + yR * yR
+       static GetTopPlaneToRef(rr, Sr) {
+         const Qr = rr.m;
+         Sr.normal.x = Qr[3] - Qr[1], Sr.normal.y = Qr[7] - Qr[5], Sr.normal.z = Qr[11] - Qr[9], Sr.d = Qr[15] - Qr[13], Sr.normalize()
```

#### 17. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L474-L475` → after: `L72-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L72-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L72-L74) · [Before (L474-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L474-L475)

```diff
-       static Center(RR, JR) {
-         return KR.CenterToRef(RR, JR, new KR)
+       static GetBottomPlaneToRef(rr, Sr) {
+         const Qr = rr.m;
+         Sr.normal.x = Qr[3] + Qr[1], Sr.normal.y = Qr[7] + Qr[5], Sr.normal.z = Qr[11] + Qr[9], Sr.d = Qr[15] + Qr[13], Sr.normalize()
```

#### 18. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L477-L478` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L76-L77) · [Before (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L477-L478)

```diff
-       static CenterToRef(RR, JR, GR) {
-         return GR.VJR((RR.x + JR.x) / 2, (RR.y + JR.y) / 2)
+       static GetPlanesToRef(rr, Sr) {
+         Wr.GetNearPlaneToRef(rr, Sr[0]), Wr.GetFarPlaneToRef(rr, Sr[1]), Wr.GetLeftPlaneToRef(rr, Sr[2]), Wr.GetRightPlaneToRef(rr, Sr[3]), Wr.GetTopPlaneToRef(rr, Sr[4]), Wr.GetBottomPlaneToRef(rr, Sr[5])
```

#### 19. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L480-L486` → after: `L79-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L79-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L79-L82) · [Before (L480-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L480-L486)

```diff
-       static DistanceOfPointFromSegment(RR, JR, GR) {
-         const yR = KR.DistanceSquared(JR, GR);
-         if (0 === yR) return KR.Distance(RR, JR);
-         const tR = GR.subtract(JR),
-           uR = Math.max(0, Math.min(1, KR.Dot(RR.subtract(JR), tR) / yR)),
-           ZR = JR.add(tR.multiplyByFloats(uR, uR));
-         return KR.Distance(RR, ZR)
+       static IsPointInFrustum(rr, Sr) {
+         for (let Qr = 0; Qr < 6; Qr++)
+           if (Sr[Qr].dotCoordinate(rr) < 0) return !1;
+         return !0
```

#### 20. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L489` → after: `L85-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L85-L90) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L489)

```diff
-     KR._V8PerformanceHack = new KR(.5, .5), KR._ZeroReadOnly = KR.Zero();
+   },
+   39264: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => Wr
+     });
+     var Zr = Qr(38560);
```

#### 21. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L491-L495` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L92-L93) · [Before (L491-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L491-L495)

```diff
-       get x() {
-         return this._x
-       }
-       set x(RR) {
-         this._x = RR, this._isDirty = !0
+       constructor(rr, Sr, Qr, Wr) {
+         this.normal = new Zr.u(rr, Sr, Qr), this.d = Wr
```

#### 22. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L497-L498` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L95-L96) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L497-L498)

```diff
-       get y() {
-         return this._y
+       OWr() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 23. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L500-L516` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L98-L99) · [Before (L500-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L500-L516)

```diff
-       set y(RR) {
-         this._y = RR, this._isDirty = !0
-       }
-       get z() {
-         return this._z
-       }
-       set z(RR) {
-         this._z = RR, this._isDirty = !0
-       }
-       constructor() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this._isDirty = !0, this._x = RR, this._y = JR, this._z = GR
-       }
-       toString() {
- ... (1 more removed lines; see GitHub link above)
+       clone() {
+         return new Wr(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 24. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L519` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L102) · [Before (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L519)

```diff
-         return "Fe"
+         return "Plane"
```

#### 25. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L522-L540` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L105-L106) · [Before (L522-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L522-L540)

```diff
-         let RR = VR(this._x);
-         return RR = 397 * RR ^ VR(this._y), RR = 397 * RR ^ VR(this._z), RR
-       }
-       QtR() {
-         return [this._x, this._y, this._z]
-       }
-       toArray(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return RR[JR] = this._x, RR[JR + 1] = this._y, RR[JR + 2] = this._z, this
-       }
-       yK(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return wR.FromArrayToRef(RR, JR, this), this
-       }
-       toQuaternion() {
-         return eR.RotationYawPitchRoll(this._y, this._x, this._z)
- ... (3 more removed lines; see GitHub link above)
+         let rr = this.normal.getHashCode();
+         return rr = 397 * rr ^ this.d, rr
```

#### 26. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L542-L555` → after: `L108-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L108-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L108-L111) · [Before (L542-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L542-L555)

```diff
-       addInPlaceFromFloats(RR, JR, GR) {
-         return this._x += RR, this._y += JR, this._z += GR, this._isDirty = !0, this
-       }
-       add(RR) {
-         return new wR(this._x + RR._x, this._y + RR._y, this._z + RR._z)
-       }
-       addToRef(RR, JR) {
-         return JR._x = this._x + RR._x, JR._y = this._y + RR._y, JR._z = this._z + RR._z, JR._isDirty = !0, JR
-       }
-       VuR(RR) {
-         return this._x -= RR._x, this._y -= RR._y, this._z -= RR._z, this._isDirty = !0, this
-       }
-       subtract(RR) {
-         return new wR(this._x - RR._x, this._y - RR._y, this._z - RR._z)
+       normalize() {
+         const rr = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let Sr = 0;
+         return 0 !== rr && (Sr = 1 / rr), this.normal.x *= Sr, this.normal.y *= Sr, this.normal.z *= Sr, this.d *= Sr, this
```

#### 27. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L557-L558` → after: `L113-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L113-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L113-L125) · [Before (L557-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L557-L558)

```diff
-       subtractToRef(RR, JR) {
-         return this.subtractFromFloatsToRef(RR._x, RR._y, RR._z, JR)
+       transform(rr) {
+         const Sr = Wr._TmpMatrix;
+         rr.invertToRef(Sr);
+         const Qr = Sr.m,
+           Zr = this.normal.x,
+           ar = this.normal.y,
+           jr = this.normal.z,
+           Ir = this.d,
+           fr = Zr * Qr[0] + ar * Qr[1] + jr * Qr[2] + Ir * Qr[3],
+           Er = Zr * Qr[4] + ar * Qr[5] + jr * Qr[6] + Ir * Qr[7],
+           pr = Zr * Qr[8] + ar * Qr[9] + jr * Qr[10] + Ir * Qr[11],
+           xr = Zr * Qr[12] + ar * Qr[13] + jr * Qr[14] + Ir * Qr[15];
+         return new Wr(fr, Er, pr, xr)
```

#### 28. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L560-L561` → after: `L127-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L127-L128) · [Before (L560-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L560-L561)

```diff
-       subtractFromFloats(RR, JR, GR) {
-         return new wR(this._x - RR, this._y - JR, this._z - GR)
+       dotCoordinate(rr) {
+         return this.normal.x * rr.x + this.normal.y * rr.y + this.normal.z * rr.z + this.d
```

#### 29. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L563-L564` → after: `L130-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L130-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L130-L142) · [Before (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L563-L564)

```diff
-       subtractFromFloatsToRef(RR, JR, GR, yR) {
-         return yR._x = this._x - RR, yR._y = this._y - JR, yR._z = this._z - GR, yR._isDirty = !0, yR
+       copyFromPoints(rr, Sr, Qr) {
+         const Zr = Sr.x - rr.x,
+           Wr = Sr.y - rr.y,
+           ar = Sr.z - rr.z,
+           jr = Qr.x - rr.x,
+           Ir = Qr.y - rr.y,
+           fr = Qr.z - rr.z,
+           Er = Wr * fr - ar * Ir,
+           pr = ar * jr - Zr * fr,
+           xr = Zr * Ir - Wr * jr,
+           mr = Math.sqrt(Er * Er + pr * pr + xr * xr);
+         let Nr;
+         return Nr = 0 !== mr ? 1 / mr : 0, this.normal.x = Er * Nr, this.normal.y = pr * Nr, this.normal.z = xr * Nr, this.d = -(this.normal.x * rr.x + this.normal.y * rr.y + this.normal.z * rr.z), this
```

#### 30. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L566-L567` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L144-L145) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L566-L567)

```diff
-       Re() {
-         return new wR(-this._x, -this._y, -this._z)
+       isFrontFacingTo(rr, Sr) {
+         return Zr.u.Dot(this.normal, rr) <= Sr
```

#### 31. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L569-L570` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L147-L148) · [Before (L569-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L569-L570)

```diff
-       negateInPlace() {
-         return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
+       signedDistanceTo(rr) {
+         return Zr.u.Dot(rr, this.normal) + this.d
```

#### 32. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L572-L573` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L150-L151) · [Before (L572-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L572-L573)

```diff
-       negateToRef(RR) {
-         return RR._x = -1 * this._x, RR._y = -1 * this._y, RR._z = -1 * this._z, RR._isDirty = !0, RR
+       static FromArray(rr) {
+         return new Wr(rr[0], rr[1], rr[2], rr[3])
```

#### 33. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L575-L576` → after: `L153-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L153-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L153-L155) · [Before (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L575-L576)

```diff
-       scaleInPlace(RR) {
-         return this._x *= RR, this._y *= RR, this._z *= RR, this._isDirty = !0, this
+       static FromPoints(rr, Sr, Qr) {
+         const Zr = new Wr(0, 0, 0, 0);
+         return Zr.copyFromPoints(rr, Sr, Qr), Zr
```

#### 34. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L578-L579` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L157-L159) · [Before (L578-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L578-L579)

```diff
-       scale(RR) {
-         return new wR(this._x * RR, this._y * RR, this._z * RR)
+       static FromPositionAndNormal(rr, Sr) {
+         const Qr = new Wr(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(rr, Sr, Qr)
```

#### 35. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L581-L582` → after: `L161-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L161-L162) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L581-L582)

```diff
-       scaleToRef(RR, JR) {
-         return JR._x = this._x * RR, JR._y = this._y * RR, JR._z = this._z * RR, JR._isDirty = !0, JR
+       static FromPositionAndNormalToRef(rr, Sr, Qr) {
+         return Qr.normal.iH(Sr), Qr.normal.normalize(), Qr.d = -rr.dot(Qr.normal), Qr
```

#### 36. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L584-L592` → after: `L164-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L164-L166) · [Before (L584-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L584-L592)

```diff
-       getNormalToRef(RR) {
-         const JR = this.length();
-         let GR = Math.acos(this._y / JR);
-         const yR = Math.atan2(this._z, this._x);
-         GR > Math.PI / 2 ? GR -= Math.PI / 2 : GR += Math.PI / 2;
-         const tR = JR * Math.sin(GR) * Math.cos(yR),
-           uR = JR * Math.cos(GR),
-           ZR = JR * Math.sin(GR) * Math.sin(yR);
-         return RR.set(tR, uR, ZR), RR
+       static SignedDistanceToPlaneFromPositionAndNormal(rr, Sr, Qr) {
+         const Wr = -(Sr.x * rr.x + Sr.y * rr.y + Sr.z * rr.z);
+         return Zr.u.Dot(Qr, Sr) + Wr
```

#### 37. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L594-L605` → after: `L168-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L168-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L168-L190) · [Before (L594-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L594-L605)

```diff
-       applyRotationQuaternionToRef(RR, JR) {
-         const GR = this._x,
-           yR = this._y,
-           tR = this._z,
-           uR = RR._x,
-           ZR = RR._y,
-           qR = RR._z,
-           iR = RR._w,
-           fR = 2 * (ZR * tR - qR * yR),
-           VR = 2 * (qR * GR - uR * tR),
-           KR = 2 * (uR * yR - ZR * GR);
-         return JR._x = GR + iR * fR + ZR * KR - qR * VR, JR._y = yR + iR * VR + qR * fR - uR * KR, JR._z = tR + iR * KR + uR * VR - ZR * fR, JR._isDirty = !0, JR
+     }
+     Wr._TmpMatrix = Zr.d.Identity()
+   },
+   38555: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       Matrix: () => Zr.d,
+       Quaternion: () => Zr.h,
+       RegisterMathVector: () => Zr.k,
+       TmpVectors: () => Zr.n,
+       Vector2: () => Zr.q,
+       kU: () => Zr.u,
+       Vector4: () => Zr.x
+     });
+     var Zr = Qr(38560);
+     (0, Zr.k)()
+   },
+ ... (7 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L607-L608` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L192-L193) · [Before (L607-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L607-L608)

```diff
-       applyRotationQuaternionInPlace(RR) {
-         return this.applyRotationQuaternionToRef(RR, this)
+       toGlobal(rr, Sr) {
+         return new Zr(this.x * rr, this.y * Sr, this.width * rr, this.height * Sr)
```

#### 39. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L610-L611` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L195-L196) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L610-L611)

```diff
-       applyRotationQuaternion(RR) {
-         return this.applyRotationQuaternionToRef(RR, new wR)
+       toGlobalToRef(rr, Sr, Qr) {
+         return Qr.x = this.x * rr, Qr.y = this.y * Sr, Qr.width = this.width * rr, Qr.height = this.height * Sr, this
```

#### 40. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L613-L614` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L198-L199) · [Before (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L613-L614)

```diff
-       scaleAndAddToRef(RR, JR) {
-         return JR._x += this._x * RR, JR._y += this._y * RR, JR._z += this._z * RR, JR._isDirty = !0, JR
+       clone() {
+         return new Zr(this.x, this.y, this.width, this.height)
```

#### 41. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L616-L617` → after: `L201-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L201-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L201-L214) · [Before (L616-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L616-L617)

```diff
-       projectOnPlane(RR, JR) {
-         return this.projectOnPlaneToRef(RR, JR, new wR)
+     }
+   },
+   54310: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => Er
+     });
+     var Zr = Qr(38560),
+       Wr = Qr(38599),
+       ar = Qr(41861),
+       jr = Qr(38569),
+       Ir = Qr(38684);
+     class fr {
+       constructor(rr, Sr, Qr, Zr) {
+         this.name = rr, this.worldAxisForNormal = Sr, this.worldAxisForFileX = Qr, this.worldAxisForFileY = Zr
```

#### 42. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L619-L629` → after: `L216-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L216-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L216-L284) · [Before (L619-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L619-L629)

```diff
-       projectOnPlaneToRef(RR, JR, GR) {
-         const yR = RR.normal,
-           tR = RR.d,
-           uR = LR.Fe[0];
-         this.subtractToRef(JR, uR), uR.normalize();
-         const ZR = wR.Dot(uR, yR);
-         if (Math.abs(ZR) < 1e-10) GR.NRR(1 / 0);
-         else {
-           const RR = -(wR.Dot(JR, yR) + tR) / ZR,
-             qR = uR.scaleInPlace(RR);
-           JR.addToRef(qR, GR)
+     }
+     class Er {
+       static _NearestPow2Floor(rr) {
+         return rr <= 1 ? 1 : 1 << Math.floor(Math.log2(rr))
+       }
+       static ConvertCubeMapTextureToSphericalPolynomial(rr) {
+         if (!rr.isCube) return null;
+         rr.eC()?.MU().flushFramebuffer();
+         const Sr = rr.getSize().width,
+           Qr = rr._sphericalPolynomialTargetSize,
+           Zr = Qr > 0 ? this._NearestPow2Floor(Qr) : 0,
+           Wr = !rr.noMipmap && !0 === rr._texture?.generateMipMaps,
+           ar = Zr > 0 && Zr < Sr && Wr,
+           jr = ar ? Math.max(0, Math.round(Math.log2(Sr / Zr))) : 0,
+           Ir = ar ? Math.max(1, Math.floor(Sr / Math.pow(2, jr))) : Sr,
+           fr = rr.readPixels(0, jr, void 0, !1),
+ ... (53 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L633-L656` → after: `L291-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L291-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L291-L341) · [Before (L633-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L633-L656)

```diff
-       equals(RR) {
-         return RR && this._x === RR._x && this._y === RR._y && this._z === RR._z
-       }
-       equalsWithEpsilon(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yR.c;
-         return RR && (0, qR.WithinEpsilon)(this._x, RR._x, JR) && (0, qR.WithinEpsilon)(this._y, RR._y, JR) && (0, qR.WithinEpsilon)(this._z, RR._z, JR)
-       }
-       JiR(RR, JR, GR) {
-         return this._x === RR && this._y === JR && this._z === GR
-       }
-       multiplyInPlace(RR) {
-         return this._x *= RR._x, this._y *= RR._y, this._z *= RR._z, this._isDirty = !0, this
-       }
-       multiply(RR) {
-         return this.multiplyByFloats(RR._x, RR._y, RR._z)
-       }
- ... (8 more removed lines; see GitHub link above)
+       static ConvertCubeMapToSphericalPolynomial(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const Qr = Sr > 0 ? this._NearestPow2Floor(Sr) : 0;
+         if (Qr > 0 && rr.size > Qr) {
+           const Sr = 5 === rr.format ? 4 : 3,
+             Zr = ["right", "left", "up", "down", "front", "back"],
+             Wr = {};
+           for (const ar of Zr) Wr[ar] = this._DownsampleFace(rr[ar], rr.size, Qr, Sr);
+           rr = {
+             ...rr,
+             ...Wr,
+             size: Qr
+           }
+         }
+         const Zr = new ar.c;
+         let fr = 0;
+ ... (35 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L658-L659` → after: `L343-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L343-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L343-L402) · [Before (L658-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L658-L659)

```diff
-       divideToRef(RR, JR) {
-         return JR._x = this._x / RR._x, JR._y = this._y / RR._y, JR._z = this._z / RR._z, JR._isDirty = !0, JR
+     }
+     Er._FileFaces = [new fr("right", new Zr.u(1, 0, 0), new Zr.u(0, 0, -1), new Zr.u(0, -1, 0)), new fr("left", new Zr.u(-1, 0, 0), new Zr.u(0, 0, 1), new Zr.u(0, -1, 0)), new fr("up", new Zr.u(0, 1, 0), new Zr.u(1, 0, 0), new Zr.u(0, 0, 1)), new fr("down", new Zr.u(0, -1, 0), ne … [truncated]
+   },
+   54160: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => Zr.g,
+       h: () => Zr.q
+     });
+     var Zr = Qr(41898);
+     (0, Zr.x)()
+   },
+   39405: (rr, Sr, Qr) => {
+     function Zr() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (rr => {
+         const Sr = 16 * Math.random() | 0;
+         return ("x" === rr ? Sr : 3 & Sr | 8).toString(16)
+ ... (44 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L661-L662` → after: `L404-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L404-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L404-L406) · [Before (L661-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L661-L662)

```diff
-       divideInPlace(RR) {
-         return this._x = this._x / RR._x, this._y = this._y / RR._y, this._z = this._z / RR._z, this._isDirty = !0, this
+       static async EncodeTextureToRGBD(rr, Sr) {
+         let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         return Sr.MU().isWebGPU ? await Qr.e(662).then((() => Qr(64756))) : await Qr.e(644).then((() => Qr(64750))), await (0, Wr.d)("rgbdEncode", rr, Sr, Zr, 1, 5)
```

#### 46. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L664-L665` → after: `L408-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L408-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L408-L443) · [Before (L664-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L664-L665)

```diff
-       minimizeInPlace(RR) {
-         return this.minimizeInPlaceFromFloats(RR._x, RR._y, RR._z)
+     }
+   },
+   64590: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       AsyncLoop: () => Zr.b,
+       RegisterTools: () => Zr.d,
+       Tools: () => Zr.h,
+       className: () => Zr.j
+     });
+     var Zr = Qr(41950);
+     (0, Zr.d)()
+   },
+   54381: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => Wr
+     });
+ ... (20 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L667-L668` → after: `L445-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L445-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L445-L451) · [Before (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L667-L668)

```diff
-       maximizeInPlace(RR) {
-         return this.maximizeInPlaceFromFloats(RR._x, RR._y, RR._z)
+       _execute(rr, Sr) {
+         rr.idle = !1, rr.workerPromise.then((Qr => {
+           Sr(Qr, (() => {
+             const Sr = this._pendingActions.shift();
+             Sr ? this._execute(rr, Sr) : rr.idle = !0
+           }))
+         }))
```

#### 48. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L670-L671` → after: `L453-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L453-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L453-L479) · [Before (L670-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L670-L671)

```diff
-       minimizeInPlaceFromFloats(RR, JR, GR) {
-         return RR < this._x && (this.x = RR), JR < this._y && (this.y = JR), GR < this._z && (this.z = GR), this
+     }
+     class Wr extends Zr {
+       constructor(rr, Sr) {
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wr.DefaultOptions;
+         super([]), this._maxWorkers = rr, this._createWorkerAsync = Sr, this._options = Qr
+       }
+       push(rr) {
+         if (!this._executeOnIdleWorker(rr))
+           if (this._workerInfos.length < this._maxWorkers) {
+             const Sr = {
+               workerPromise: this._createWorkerAsync(),
+               idle: !1
+             };
+             this._workerInfos.push(Sr), this._execute(Sr, rr)
+           } else this._pendingActions.push(rr)
+       }
+ ... (11 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L673-L674` → after: `L481-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L481-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L481-L671) · [Before (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L673-L674)

```diff
-       maximizeInPlaceFromFloats(RR, JR, GR) {
-         return RR > this._x && (this.x = RR), JR > this._y && (this.y = JR), GR > this._z && (this.z = GR), this
+     }
+     Wr.DefaultOptions = {
+       idleTimeElapsedBeforeRelease: 1e3
+     }
+   },
+   64623: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       AbstractThreeMfSerializer: () => FI,
+       BVHExporter: () => vj,
+       ContentTypeFileName: () => NI,
+       DefaultXmlSerializerFormatOptions: () => Vj,
+       DefaultXmlSerializerNumberOptions: () => Aj,
+       EXT_lights_area: () => hW,
+       EXT_mesh_gpu_instancing: () => GZ,
+       EXT_texture_avif: () => Wj,
+       EXT_texture_webp: () => rj,
+ ... (175 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L676-L681` → after: `L673-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L673-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L673-L679) · [Before (L676-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L676-L681)

```diff
-       isNonUniformWithinEpsilon(RR) {
-         const JR = Math.abs(this._x),
-           GR = Math.abs(this._y);
-         if (!(0, qR.WithinEpsilon)(JR, GR, RR)) return !0;
-         const yR = Math.abs(this._z);
-         return !(0, qR.WithinEpsilon)(JR, yR, RR) || !(0, qR.WithinEpsilon)(GR, yR, RR)
+       static MTL(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
+         const Qr = [],
+           Zr = rr.material;
+         Qr.push("newmtl " + Sr), Qr.push("  Ns " + Zr.specularPower.toFixed(4)), Qr.push("  Ni 1.5000"), Qr.push("  d " + Zr.alpha.toFixed(4)), Qr.push("  Tr 0.0000"), Qr.push("  Tf 1.0000 1.0000 1.0000"), Qr.push("  illum 2"), Qr.push("  Ka " + Zr.ambientColor.r.toFixed(4) + " " … [truncated]
+         Zr.ambientTexture && Qr.push("  map_Ka " + Zr.ambientTexture.name), Zr.diffuseTexture && Qr.push("  map_Kd " + Zr.diffuseTexture.name), Zr.specularTexture && Qr.push("  map_Ks " + Zr.specularTexture.name), Zr.bumpTexture && Qr.push("  map_bump -imfchan z " + Zr.bumpTextur … [truncated]
+         return Qr.join("\n")
```

#### 51. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L683-L686` → after: `L681-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L681-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L681-L698) · [Before (L683-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L683-L686)

```diff
-       get isNonUniform() {
-         const RR = Math.abs(this._x);
-         if (RR !== Math.abs(this._y)) return !0;
-         return RR !== Math.abs(this._z)
+     }
+     var Ir = 0,
+       fr = Qr(54160);
+     class Er {
+       constructor() {
+         this.files = {}
+       }
+       get glTFFiles() {
+         return this.files
+       }
+       downloadFiles() {
+         for (const rr in this.files) {
+           const Sr = this.files[rr],
+             Qr = new Blob([Sr], {
+               type: (0, fr.e)(rr)
+             });
+ ... (2 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L688-L689` → after: `L700-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L700-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L700-L762) · [Before (L688-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L688-L689)

```diff
-       floorToRef(RR) {
-         return RR._x = Math.floor(this._x), RR._y = Math.floor(this._y), RR._z = Math.floor(this._z), RR._isDirty = !0, RR
+     }
+     var pr = Qr(43031),
+       xr = Qr(42966),
+       mr = Qr(54151),
+       Nr = Qr(42980),
+       Ur = Qr(41725),
+       tr = Qr(38587),
+       hr = Qr(38679),
+       zr = Qr(38599);
+     const Yr = zr.HighestCommonFactor,
+       nr = {
+         ...zr,
+         TwoPi: 2 * Math.PI,
+         Sign: Math.sign,
+         Log2: Math.log2,
+         HCF: Yr
+ ... (47 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L691-L692` → after: `L764-L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L764-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L764-L994) · [Before (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L691-L692)

```diff
-       floor() {
-         return new wR(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
+     }
+     let wr = (() => {
+       var rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er;
+       let pr, xr, mr, Nr, Ur, tr, hr, zr, Yr, nr = Vr.c,
+         er = [],
+         Kr = [],
+         yr = [],
+         Br = [],
+         Tr = [],
+         Lr = [],
+         lr = [],
+         Xr = [],
+         Pr = [],
+         Hr = [],
+         qr = [],
+         Rr = [],
+ ... (215 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L694-L695` → after: `L996-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L996-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L996-L1392) · [Before (L694-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L694-L695)

```diff
-       fractToRef(RR) {
-         return RR._x = this._x - Math.floor(this._x), RR._y = this._y - Math.floor(this._y), RR._z = this._z - Math.floor(this._z), RR._isDirty = !0, RR
+     }
+     let rS = (() => {
+       var rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er;
+       let pr, xr, mr, Nr, Ur, tr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr = Vr.c,
+         Lr = [],
+         lr = [],
+         Xr = [],
+         Pr = [],
+         Hr = [],
+         qr = [],
+         Rr = [],
+         gr = [],
+         Cr = [],
+         Mr = [],
+         Gr = [],
+         kr = [],
+ ... (381 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L697-L698` → after: `L1394-L1602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R1394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L1394-L1602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L1394-L1602) · [Before (L697-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L697-L698)

```diff
-       fract() {
-         return new wR(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
+     }
+     let QS = (() => {
+       var rr, Sr, Qr, Zr;
+       let Wr, ar, jr, Ir, fr, Er, pr, xr = Vr.c,
+         mr = [],
+         Nr = [],
+         Ur = [],
+         tr = [],
+         hr = [],
+         zr = [],
+         Yr = [],
+         nr = [],
+         er = [],
+         Kr = [],
+         yr = [],
+         Br = [],
+ ... (193 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L700-L701` → after: `L1604-L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L1604-L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L1604-L1785) · [Before (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L700-L701)

```diff
-       length() {
-         return Math.sqrt(this.lengthSquared())
+     }
+     let WS = (() => {
+       var rr, Sr, Qr, Zr;
+       let Wr, ar, jr, Ir, fr, Er = Vr.c,
+         pr = [],
+         xr = [],
+         mr = [],
+         Nr = [],
+         Ur = [],
+         tr = [],
+         hr = [],
+         zr = [],
+         Yr = [],
+         nr = [];
+       return rr = class extends Er {
+         get isEnabled() {
+ ... (166 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L703-L704` → after: `L1787-L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L1787-L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L1787-L2054) · [Before (L703-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L703-L704)

```diff
-       lengthSquared() {
-         return this._x * this._x + this._y * this._y + this._z * this._z
+     }
+     let jS = (() => {
+       var rr, Sr, Qr, Zr, Wr, ar, jr, Ir;
+       let fr, Er, pr, xr, mr, Nr, Ur, tr, hr, zr = Vr.c,
+         Yr = [],
+         nr = [],
+         er = [],
+         Kr = [],
+         yr = [],
+         Br = [],
+         Tr = [],
+         Lr = [],
+         lr = [],
+         Xr = [],
+         Pr = [],
+         Hr = [],
+ ... (252 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L706-L707` → after: `L2056-L2841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L2056-L2841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L2056-L2841) · [Before (L706-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L706-L707)

```diff
-       get hasAZeroComponent() {
-         return this._x * this._y * this._z === 0
+     }
+     let fS = (() => {
+       var rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr;
+       let zr, Yr, nr, er, Kr, yr, Br, Tr, Lr, lr, Xr, Pr, Hr, qr, Rr, gr, Cr, Mr, kr, Ar, ir, wr, cr, or, br, Jr, dr, ur, rS, SS, QS = Vr.c,
+         ZS = [],
+         WS = [],
+         aS = [],
+         jS = [],
+         fS = [],
+         ES = [],
+         pS = [],
+         xS = [],
+         mS = [],
+         NS = [],
+         US = [],
+         tS = [],
+ ... (770 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L709-L710` → after: `L2843-L2844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R2843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L2843-L2844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L2843-L2844) · [Before (L709-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L709-L710)

```diff
-       normalize() {
-         return this.normalizeFromLength(this.length())
+       reset() {
+         super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
```

#### 60. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L712-L715` → after: `L2846-L3409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R2846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L2846-L3409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L2846-L3409) · [Before (L712-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L712-L715)

```diff
-       reorderInPlace(RR) {
-         if ("xyz" === (RR = RR.toLowerCase())) return this;
-         const JR = LR.Fe[0].vN(this);
-         return this.x = JR[RR[0]], this.y = JR[RR[1]], this.z = JR[RR[2]], this
+     }
+     class KS extends((0, hS.b)(Jr.b)) {}
+     let yS = (() => {
+       var rr, Sr;
+       let Zr, Wr = KS,
+         jr = [],
+         Ir = [];
+       return rr = class extends Wr {
+         get realTimeFiltering() {
+           return this._realTimeFiltering
+         }
+         set realTimeFiltering(rr) {
+           this._realTimeFiltering = rr, this.BQr(1)
+         }
+         get realTimeFilteringQuality() {
+           return this._realTimeFilteringQuality
+ ... (548 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L717-L718` → after: `L3411-L3423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3411-L3423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3411-L3423) · [Before (L717-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L717-L718)

```diff
-       rotateByQuaternionToRef(RR, JR) {
-         return RR.toRotationMatrix(LR.Matrix[0]), wR.TransformCoordinatesToRef(this, LR.Matrix[0], JR), JR
+       _rebuild() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           Qr = arguments.length > 2 ? arguments[2] : void 0;
+         if (this._count < 1 || rr) return;
+         const Zr = this._createInternaTextureIndexMapping();
+         this.releaseInternalTextures(), this._createInternalTextures(), Sr && (this._releaseTextures(), this._createTextures(Qr));
+         const Wr = this._renderTarget.textures;
+         for (let ar = 0; ar < Wr.length; ar++) {
+           const rr = this._textures[ar];
+           void 0 !== Zr[ar] && this._renderTarget.setTexture(Wr[Zr[ar]], ar), rr._texture = Wr[ar], rr._texture && (rr._noMipmap = !rr._texture.useMipMaps, rr._useSRGBBuffer = rr._texture._useSRGBBuffer)
+         }
+         1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
```

#### 62. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L720-L721` → after: `L3425-L3426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3425-L3426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3425-L3426) · [Before (L720-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L720-L721)

```diff
-       rotateByQuaternionAroundPointToRef(RR, JR, GR) {
-         return this.subtractToRef(JR, LR.Fe[0]), LR.Fe[0].rotateByQuaternionToRef(RR, LR.Fe[0]), JR.addToRef(LR.Fe[0], GR), GR
+       _createInternalTextures() {
+         this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
```

#### 63. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L723-L724` → after: `L3428-L3430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3428-L3430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3428-L3430) · [Before (L723-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L723-L724)

```diff
-       cross(RR) {
-         return wR.CrossToRef(this, RR, new wR)
+       _releaseTextures() {
+         if (this._textures)
+           for (let rr = 0; rr < this._textures.length; rr++) this._textures[rr]._texture = null, this._textures[rr].dispose()
```

#### 64. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L726-L727` → after: `L3432-L3438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3432-L3438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3432-L3438) · [Before (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L726-L727)

```diff
-       normalizeFromLength(RR) {
-         return 0 === RR || 1 === RR ? this : this.scaleInPlace(1 / RR)
+       _createTextures(rr) {
+         const Sr = this._renderTarget.textures;
+         this._textures = [];
+         for (let Qr = 0; Qr < Sr.length; Qr++) {
+           const Zr = new Xr.f(null, this.eC());
+           rr?.[Qr] && (Zr.name = rr[Qr]), Zr._texture = Sr[Qr], Zr._texture && (Zr._noMipmap = !Zr._texture.useMipMaps, Zr._useSRGBBuffer = Zr._texture._useSRGBBuffer), this._textures.push(Zr)
+         }
```

#### 65. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L729-L730` → after: `L3440-L3445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3440-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3440-L3445) · [Before (L729-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L729-L730)

```diff
-       normalizeToNew() {
-         return this.normalizeToRef(new wR)
+       setInternalTexture(rr, Sr) {
+         let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         if (this.renderTarget && (0 === Sr && (this._texture = rr), this.renderTarget.setTexture(rr, Sr, Qr), this.textures[Sr] || (this.textures[Sr] = new Xr.f(null, this.eC()), this.textures[Sr].name = this._textureNames?.[Sr] ?? this.textures[Sr].name), this.textures[Sr]._text … [truncated]
+           let Qr;
+           Qr = rr.is2DArray ? 35866 : rr.isCube ? 34067 : rr.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[Sr] = Qr
+         }
```

#### 66. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L732-L734` → after: `L3447-L3483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3447-L3483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3447-L3483) · [Before (L732-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L732-L734)

```diff
-       normalizeToRef(RR) {
-         const JR = this.length();
-         return 0 === JR || 1 === JR ? (RR._x = this._x, RR._y = this._y, RR._z = this._z, RR._isDirty = !0, RR) : this.scaleToRef(1 / JR, RR)
+       setLayerAndFaceIndex(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
+           Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
+         this.textures[rr] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[rr] = Sr), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[rr] = Qr), this.renderTarget.setLayerAndFace … [truncated]
+       }
+       setLayerAndFaceIndices(rr, Sr) {
+         this.renderTarget && (this._multiRenderTargetOptions.layerIndex = rr, this._multiRenderTargetOptions.faceIndex = Sr, this.renderTarget.setLayerAndFaceIndices(rr, Sr))
+       }
+       get samples() {
+         return this._samples
+       }
+       set samples(rr) {
+         this._renderTarget ? this._samples = this._renderTarget.setSamples(rr) : this._samples = rr
+       }
+       resize(rr) {
+         this._processSizeParameter(rr), this._rebuild(!1, void 0, this._textureNames)
+ ... (21 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L736-L1109` → after: `L3485-L3490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3485-L3490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3485-L3490) · [Before (L736-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L736-L1109)

```diff
-       clone() {
-         return new wR(this._x, this._y, this._z)
-       }
-       vN(RR) {
-         return this.VJR(RR._x, RR._y, RR._z)
-       }
-       VJR(RR, JR, GR) {
-         return this._x = RR, this._y = JR, this._z = GR, this._isDirty = !0, this
-       }
-       set(RR, JR, GR) {
-         return this.VJR(RR, JR, GR)
-       }
-       NRR(RR) {
-         return this._x = this._y = this._z = RR, this._isDirty = !0, this
-       }
-       static GetClipFactor(RR, JR, GR, yR) {
- ... (358 more removed lines; see GitHub link above)
+       releaseInternalTextures() {
+         const rr = this._renderTarget?.textures;
+         if (rr) {
+           for (let Sr = rr.length - 1; Sr >= 0; Sr--) this._textures[Sr]._texture = null;
+           this._renderTarget?.dispose(), this._renderTarget = null
+         }
```

#### 68. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1112` → after: `L3493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3493) · [Before (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1112)

```diff
-     wR._V8PerformanceHack = new wR(.5, .5, .5), wR._UpReadOnly = wR.Up(), wR._DownReadOnly = wR.Down(), wR._LeftHandedForwardReadOnly = wR.Forward(!1), wR._RightHandedForwardReadOnly = wR.Forward(!0), wR._LeftHandedBackwardReadOnly = wR.Backward(!1), wR._RightHandedBackwardReadOn … [truncated]
+     var RS = Qr(42020);
```

#### 69. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1114-L1405` → after: `L3495-L3496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3495-L3496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3495-L3496) · [Before (L1114-L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1114-L1405)

```diff
-       get x() {
-         return this._x
-       }
-       set x(RR) {
-         this._x = RR, this._isDirty = !0
-       }
-       get y() {
-         return this._y
-       }
-       set y(RR) {
-         this._y = RR, this._isDirty = !0
-       }
-       get z() {
-         return this._z
-       }
-       set z(RR) {
- ... (276 more removed lines; see GitHub link above)
+       constructor(rr) {
+         this.name = RS.b.NAME_GEOMETRYBUFFERRENDERER, this.Dt = rr
```

#### 70. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1407-L1409` → after: `L3498-L3499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3498-L3499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3498-L3499) · [Before (L1407-L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1407-L1409)

```diff
-       static FromVector3(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return new rR(RR._x, RR._y, RR._z, JR)
+       register() {
+         this.Dt._gatherRenderTargetsStage.registerStep(RS.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
```

#### 71. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1411-L1412` → after: `L3501-L3504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3501-L3504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3501-L3504) · [Before (L1411-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1411-L1412)

```diff
-       static Dot(RR, JR) {
-         return RR.x * JR.x + RR.y * JR.y + RR.z * JR.z + RR.w * JR.w
+       rebuild() {}
+       dispose() {}
+       _gatherRenderTargets(rr) {
+         this.Dt._geometryBufferRenderer && rr.push(this.Dt._geometryBufferRenderer.getGBuffer())
```

#### 72. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1415` → after: `L3507-L3513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3507-L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3507-L3513) · [Before (L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1415)

```diff
-     rR._V8PerformanceHack = new rR(.5, .5, .5, .5), rR._ZeroReadOnly = rR.Zero();
+     let CS = !1;
+     var MS;
+     ! function(rr) {
+       rr[rr.Small = 0] = "Small", rr[rr.Medium = 1] = "Medium", rr[rr.Large = 2] = "Large", rr[rr.ExtraLarge = 3] = "ExtraLarge"
+     }(MS || (MS = {}));
+     const GS = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
+       kS = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", … [truncated]
```

#### 73. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1417-L1511` → after: `L3515-L3577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3515-L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3515-L3577) · [Before (L1417-L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1417-L1511)

```diff
-       get x() {
-         return this._x
-       }
-       set x(RR) {
-         this._x = RR, this._isDirty = !0
-       }
-       get y() {
-         return this._y
-       }
-       set y(RR) {
-         this._y = RR, this._isDirty = !0
-       }
-       get z() {
-         return this._z
-       }
-       set z(RR) {
- ... (79 more removed lines; see GitHub link above)
+       get renderTransparentMeshes() {
+         return this._renderTransparentMeshes
+       }
+       set renderTransparentMeshes(rr) {
+         if (rr && this._enableMeshBlendTag && !this._scene.MU().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
+         this._renderTransparentMeshes = rr
+       }
+       get normalsAreUnsigned() {
+         return this._normalsAreUnsigned
+       }
+       _linkPrePassRenderer(rr) {
+         if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
+         this._linkedWithPrePass = !0, this._prePassRenderer = rr, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
+       }
+       _unlinkPrePassRenderer() {
+         this._linkedWithPrePass = !1, this._createRenderTargets()
+ ... (47 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1513-L1514` → after: `L3579-L3580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3579-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3579-L3580) · [Before (L1513-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1513-L1514)

```diff
-       subtractFromFloatsToRef(RR, JR, GR, yR, tR) {
-         return tR._x = this._x - RR, tR._y = this._y - JR, tR._z = this._z - GR, tR._w = this._w - yR, tR._isDirty = !0, tR
+       get enableDepth() {
+         return this._enableDepth
```

#### 75. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1516-L1517` → after: `L3582-L3583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3582-L3583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3582-L3583) · [Before (L1516-L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1516-L1517)

```diff
-       subtract(RR) {
-         return new eR(this._x - RR._x, this._y - RR._y, this._z - RR._z, this._w - RR._w)
+       set enableDepth(rr) {
+         this._enableDepth = rr, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 76. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1519-L1520` → after: `L3585-L3586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3585-L3586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3585-L3586) · [Before (L1519-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1519-L1520)

```diff
-       VuR(RR) {
-         return this._x -= RR._x, this._y -= RR._y, this._z -= RR._z, this._w -= RR._w, this._isDirty = !0, this
+       get enableNormal() {
+         return this._enableNormal
```

#### 77. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1522-L1523` → after: `L3588-L3589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3588-L3589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3588-L3589) · [Before (L1522-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1522-L1523)

```diff
-       scale(RR) {
-         return new eR(this._x * RR, this._y * RR, this._z * RR, this._w * RR)
+       set enableNormal(rr) {
+         this._enableNormal = rr, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 78. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1525-L1526` → after: `L3591-L3592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3591-L3592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3591-L3592) · [Before (L1525-L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1525-L1526)

```diff
-       scaleToRef(RR, JR) {
-         return JR._x = this._x * RR, JR._y = this._y * RR, JR._z = this._z * RR, JR._w = this._w * RR, JR._isDirty = !0, JR
+       get enablePosition() {
+         return this._enablePosition
```

#### 79. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1528-L1529` → after: `L3594-L3595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3594-L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3594-L3595) · [Before (L1528-L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1528-L1529)

```diff
-       scaleInPlace(RR) {
-         return this._x *= RR, this._y *= RR, this._z *= RR, this._w *= RR, this._isDirty = !0, this
+       set enablePosition(rr) {
+         this._enablePosition = rr, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 80. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1531-L1532` → after: `L3597-L3598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3597-L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3597-L3598) · [Before (L1531-L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1531-L1532)

```diff
-       scaleAndAddToRef(RR, JR) {
-         return JR._x += this._x * RR, JR._y += this._y * RR, JR._z += this._z * RR, JR._w += this._w * RR, JR._isDirty = !0, JR
+       get enableVelocity() {
+         return this._enableVelocity
```

#### 81. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1534-L1536` → after: `L3600-L3601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3600-L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3600-L3601) · [Before (L1534-L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1534-L1536)

```diff
-       multiply(RR) {
-         const JR = new eR(0, 0, 0, 1);
-         return this.multiplyToRef(RR, JR), JR
+       set enableVelocity(rr) {
+         this._enableVelocity = rr, rr || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = rr
```

#### 82. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1538-L1543` → after: `L3603-L3604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3603-L3604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3603-L3604) · [Before (L1538-L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1538-L1543)

```diff
-       multiplyToRef(RR, JR) {
-         const GR = this._x * RR._w + this._y * RR._z - this._z * RR._y + this._w * RR._x,
-           yR = -this._x * RR._z + this._y * RR._w + this._z * RR._x + this._w * RR._y,
-           tR = this._x * RR._y - this._y * RR._x + this._z * RR._w + this._w * RR._z,
-           uR = -this._x * RR._x - this._y * RR._y - this._z * RR._z + this._w * RR._w;
-         return JR.VJR(GR, yR, tR, uR), JR
+       get enableVelocityLinear() {
+         return this._enableVelocityLinear
```

#### 83. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1545-L1546` → after: `L3606-L3607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3606-L3607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3606-L3607) · [Before (L1545-L1546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1545-L1546)

```diff
-       multiplyInPlace(RR) {
-         return this.multiplyToRef(RR, this)
+       set enableVelocityLinear(rr) {
+         this._enableVelocityLinear = rr, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 84. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1548-L1549` → after: `L3609-L3610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3609-L3610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3609-L3610) · [Before (L1548-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1548-L1549)

```diff
-       multiplyByFloats(RR, JR, GR, yR) {
-         return this._x *= RR, this._y *= JR, this._z *= GR, this._w *= yR, this._isDirty = !0, this
+       get enableReflectivity() {
+         return this._enableReflectivity
```

#### 85. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1551-L1552` → after: `L3612-L3613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3612-L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3612-L3613) · [Before (L1551-L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1551-L1552)

```diff
-       divide(RR) {
-         throw new ReferenceError("Can not divide a quaternion")
+       set enableReflectivity(rr) {
+         this._enableReflectivity = rr, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 86. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1554-L1555` → after: `L3615-L3616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3615-L3616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3615-L3616) · [Before (L1554-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1554-L1555)

```diff
-       divideToRef(RR, JR) {
-         throw new ReferenceError("Can not divide a quaternion")
+       get enableScreenspaceDepth() {
+         return this._enableScreenspaceDepth
```

#### 87. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1557-L1558` → after: `L3618-L3619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3618-L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3618-L3619) · [Before (L1557-L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1557-L1558)

```diff
-       divideInPlace(RR) {
-         throw new ReferenceError("Can not divide a quaternion")
+       set enableScreenspaceDepth(rr) {
+         this._enableScreenspaceDepth = rr, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 88. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1560-L1561` → after: `L3621-L3622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3621-L3622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3621-L3622) · [Before (L1560-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1560-L1561)

```diff
-       minimizeInPlace() {
-         throw new ReferenceError("Can not minimize a quaternion")
+       get enableIrradiance() {
+         return this._enableIrradiance
```

#### 89. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1563-L1564` → after: `L3624-L3625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3624-L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3624-L3625) · [Before (L1563-L1564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1563-L1564)

```diff
-       minimizeInPlaceFromFloats() {
-         throw new ReferenceError("Can not minimize a quaternion")
+       set enableIrradiance(rr) {
+         this._enableIrradiance = rr, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 90. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1566-L1567` → after: `L3627-L3628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3627-L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3627-L3628) · [Before (L1566-L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1566-L1567)

```diff
-       maximizeInPlace() {
-         throw new ReferenceError("Can not maximize a quaternion")
+       get enableObjectId() {
+         return this._enableObjectId
```

#### 91. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1569-L1570` → after: `L3630-L3661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3630-L3661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3630-L3661) · [Before (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1569-L1570)

```diff
-       maximizeInPlaceFromFloats() {
-         throw new ReferenceError("Can not maximize a quaternion")
+       set enableObjectId(rr) {
+         if (rr && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
+         if (rr && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
+         if (rr && !this._enableObjectId && !this._linkedWithPrePass) {
+           const rr = this._scene.MU(),
+             Sr = Math.min(rr.getCaps().maxDrawBuffers ?? 1, 8),
+             Qr = this._assignRenderTargetIndices()[0] + 1;
+           if (rr.getCaps().drawBuffersExtension && Qr > Sr) throw new Error(`GeometryBufferRenderer: ${Qr} color attachments were requested, but this engine supports at most ${Sr}`)
+         }
+         this._enableObjectId = rr, rr || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
+       }
+       get enableMeshBlendingTag() {
+         return this._enableMeshBlendTag
+       }
+       set enableMeshBlendingTag(rr) {
+         if (this._enableMeshBlendTag !== rr) {
+ ... (16 more added lines; see GitHub link above)
```

#### 92. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1572-L1573` → after: `L3663-L3664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3663-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3663-L3664) · [Before (L1572-L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1572-L1573)

```diff
-       Re() {
-         return this.negateToRef(new eR)
+       get Dt() {
+         return this._scene
```

#### 93. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1575-L1576` → after: `L3666-L3667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3666-L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3666-L3667) · [Before (L1575-L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1575-L1576)

```diff
-       negateInPlace() {
-         return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
+       get ratio() {
+         return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
```

#### 94. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1578-L1579` → after: `L3669-L3670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3669-L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3669-L3670) · [Before (L1578-L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1578-L1579)

```diff
-       negateToRef(RR) {
-         return RR._x = -this._x, RR._y = -this._y, RR._z = -this._z, RR._w = -this._w, RR._isDirty = !0, RR
+       get shaderLanguage() {
+         return this._shaderLanguage
```

#### 95. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1581-L1582` → after: `L3672-L3958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3672-L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3672-L3958) · [Before (L1581-L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1581-L1582)

```diff
-       JiR(RR, JR, GR, yR) {
-         return this._x === RR && this._y === JR && this._z === GR && this._w === yR
+       constructor(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
+           Zr = arguments.length > 3 ? arguments[3] : void 0;
+         var Wr;
+         this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, t … [truncated]
+           get: function() {
+             return this._geometryBufferRenderer
+           },
+           set: function(rr) {
+             rr && rr.isSupported && (this._geometryBufferRenderer = rr)
+           },
+           enumerable: !0,
+           configurable: !0
+         }), Mr.f.prototype.enableGeometryBufferRenderer = function() {
+           let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+ ... (271 more added lines; see GitHub link above)
```

#### 96. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1584-L1585` → after: `L3960-L3969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3960-L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3960-L3969) · [Before (L1584-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1584-L1585)

```diff
-       floorToRef(RR) {
-         throw new ReferenceError("Can not floor a quaternion")
+       _getRenderTargetDimensions() {
+         if ("object" === typeof this._ratioOrDimensions) return {
+           width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
+           height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
+         };
+         const rr = this._scene.MU();
+         return {
+           width: Math.max(1, Math.floor(rr.getRenderWidth() * this._ratioOrDimensions)),
+           height: Math.max(1, Math.floor(rr.getRenderHeight() * this._ratioOrDimensions))
+         }
```

#### 97. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1587-L1588` → after: `L3971-L3973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3971-L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3971-L3973) · [Before (L1587-L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1587-L1588)

```diff
-       floor() {
-         throw new ReferenceError("Can not floor a quaternion")
+       _copyBonesTransformationMatrices(rr, Sr) {
+         for (let Qr = 0; Qr < rr.length; Qr++) Sr[Qr] = rr[Qr];
+         return Sr
```

#### 98. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1590-L1591` → after: `L3975-L4001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R3975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L3975-L4001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L3975-L4001) · [Before (L1590-L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1590-L1591)

```diff
-       fractToRef(RR) {
-         throw new ReferenceError("Can not fract a quaternion")
+     }
+     AS.ForceGLSL = !1, AS.DEPTH_TEXTURE_TYPE = 0, AS.NORMAL_TEXTURE_TYPE = 1, AS.POSITION_TEXTURE_TYPE = 2, AS.VELOCITY_TEXTURE_TYPE = 3, AS.REFLECTIVITY_TEXTURE_TYPE = 4, AS.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, AS.VELOCITY_LINEAR_TEXTURE_TYPE = 6, AS.IRRADIANCE_TEXTURE_TYPE = 7,  … [truncated]
+       throw (0, zS.l)("GeometryBufferRendererSceneComponent")
+     };
+     var VS = Qr(38609);
+     const iS = {
+       effect: null,
+       subMesh: null
+     };
+ 
+     function wS(rr) {
+       if ("number" === typeof rr) return 1;
+       if (rr instanceof Gr.q) return 2;
+       if (rr instanceof Gr.u || rr instanceof Fr.e) return 3;
+       if (rr instanceof Gr.x || rr instanceof Fr.f) return 4;
+       throw new Error("Unsupported OpenPBR property type.")
+ ... (11 more added lines; see GitHub link above)
```

#### 99. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1593-L1594` → after: `L4003-L4004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4003-L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L4003-L4004) · [Before (L1593-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1593-L1594)

```diff
-       fract() {
-         throw new ReferenceError("Can not fract a quaternion")
+       constructor(rr, Sr) {
+         this.linkedProperties = {}, this.firstLinkedKey = "", this.name = rr, this.numComponents = Sr
```

#### 100. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1596-L1597` → after: `L4006-L4012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4006-L4012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L4006-L4012) · [Before (L1596-L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1596-L1597)

```diff
-       conjugateToRef(RR) {
-         return RR.VJR(-this._x, -this._y, -this._z, this._w), RR
+     }
+     cS._tmpArray = [0, 0, 0, 0];
+     class FS {
+       constructor(rr, Sr, Qr, Zr) {
+         let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
+           ar = arguments.length > 5 ? arguments[5] : void 0;
+         this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = rr, this.targetUniformName = Qr, this.defaultValue = Sr, this.value = Sr, this.targetUniformComponentNum = Zr, this.targetUniformComponentOffset = Wr, this.requiredDefine = ar
```

#### 101. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1599-L1600` → after: `L4014-L4015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4014-L4015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L4014-L4015) · [Before (L1599-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1599-L1600)

```diff
-       conjugateInPlace() {
-         return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
+       get numComponents() {
+         return "number" === typeof this.defaultValue ? 1 : wS(this.defaultValue)
```

#### 102. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1602-L1603` → after: `L4017-L4020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4017-L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L4017-L4020) · [Before (L1602-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1602-L1603)

```diff
-       conjugate() {
-         return new eR(-this._x, -this._y, -this._z, this._w)
+     }
+     class oS {
+       get samplerName() {
+         return this.samplerPrefix + "Sampler"
```

#### 103. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1605-L1608` → after: `L4022-L4023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4022-L4023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L4022-L4023) · [Before (L1605-L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1605-L1608)

```diff
-       invert() {
-         const RR = this.conjugate(),
-           JR = this.lengthSquared();
-         return 0 == JR || 1 == JR || RR.scaleInPlace(1 / JR), RR
+       get samplerInfoName() {
+         return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
```

#### 104. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1610-L1613` → after: `L4025-L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4025-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L4025-L4026) · [Before (L1610-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1610-L1613)

```diff
-       invertInPlace() {
-         this.conjugateInPlace();
-         const RR = this.lengthSquared();
-         return 0 == RR || 1 == RR || this.scaleInPlace(1 / RR), this
+       get samplerMatrixName() {
+         return this.samplerPrefix + "Matrix"
```

#### 105. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1615-L1616` → after: `L4028-L4029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4028-L4029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L4028-L4029) · [Before (L1615-L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1615-L1616)

```diff
-       lengthSquared() {
-         return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
+       constructor(rr, Sr, Qr) {
+         this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = rr, this.samplerPrefix = Sr, this.textureDefine = Qr
```

#### 106. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1618-L1619` → after: `L4031-L4037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4031-L4037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L4031-L4037) · [Before (L1618-L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1618-L1619)

```diff
-       length() {
-         return Math.sqrt(this.lengthSquared())
+     }
+     class bS extends((0, tS.e)((0, US.c)(Ar.b))) {}
+     class JS extends(function(rr) {
+       return class extends rr {
+         constructor() {
+           super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBO … [truncated]
+         }
```

#### 107. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1621-L1622` → after: `L4039-L4042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4039-L4042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L4039-L4042) · [Before (L1621-L1622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1621-L1622)

```diff
-       normalize() {
-         return this.normalizeFromLength(this.length())
+     }(bS)) {}
+     class DS extends((0, or.g)(JS)) {
+       constructor(rr) {
+         super(rr), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, th … [truncated]
```

#### 108. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1624-L1625` → after: `L4044-L4045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4044-L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L4044-L4045) · [Before (L1624-L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1624-L1625)

```diff
-       normalizeFromLength(RR) {
-         return 0 === RR || 1 === RR ? this : this.scaleInPlace(1 / RR)
+       reset() {
+         super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
```

#### 109. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1627-L1629` → after: `L4047-L9339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4047-L9339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L4047-L9339) · [Before (L1627-L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1627-L1629)

```diff
-       normalizeToNew() {
-         const RR = new eR(0, 0, 0, 1);
-         return this.normalizeToRef(RR), RR
+     }
+     class dS extends((0, hS.b)(Jr.b)) {}
+     let sS = (() => {
+         var rr, Sr, Zr, Wr, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr, Pr, Hr, qr, Rr, Mr, Ar, Vr, ir, wr, or, Jr, ur, rS, SS, QS, ZS, WS, aS, jS, IS, fS, ES, US, tS, hS, zS, YS, nS, eS, KS, yS, vS, OS, LS, lS, XS, PS, HS, qS, RS, gS, CS, MS, GS,  … [truncated]
+         let XQ, PQ, HQ, qQ, RQ, gQ, CQ, MQ, GQ, kQ, AQ, VQ, iQ, wQ, cQ, FQ, oQ, bQ, JQ, DQ, dQ, sQ, uQ, rZ, SZ, QZ, ZZ, WZ, aZ, jZ, IZ, fZ, EZ, pZ, xZ, mZ, NZ, UZ, tZ, hZ, zZ, YZ, nZ, eZ, KZ, yZ, BZ, TZ, vZ, OZ, LZ, lZ, XZ, PZ, HZ, qZ, RZ, gZ, CZ, MZ, GZ, kZ, AZ, VZ, iZ, wZ, cZ,  … [truncated]
+           HW = [],
+           qW = [],
+           RW = [],
+           gW = [],
+           CW = [],
+           MW = [],
+           GW = [],
+           kW = [],
+           AW = [],
+           VW = [],
+           iW = [],
+ ... (5277 more added lines; see GitHub link above)
```

#### 110. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1631-L1633` → after: `L9341-L9342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R9341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L9341-L9342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L9341-L9342) · [Before (L1631-L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1631-L1633)

```diff
-       normalizeToRef(RR) {
-         const JR = this.length();
-         return 0 === JR || 1 === JR ? RR.VJR(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / JR, RR)
+       set sizeAttenuation(rr) {
+         this._sizeAttenuation = rr, this.markAllDefinesAsDirty()
```

#### 111. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1635-L1637` → after: `L9344-L9345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R9344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L9344-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L9344-L9345) · [Before (L1635-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1635-L1637)

```diff
-       toEulerAngles() {
-         const RR = wR.Zero();
-         return this.toEulerAnglesToRef(RR), RR
+       get color() {
+         return this._color
```

#### 112. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1639-L1653` → after: `L9347-L9429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R9347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L9347-L9429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L9347-L9429) · [Before (L1639-L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1639-L1653)

```diff
-       toEulerAnglesToRef(RR) {
-         const JR = this._z,
-           GR = this._x,
-           yR = this._y,
-           tR = this._w,
-           uR = yR * JR - GR * tR,
-           ZR = .4999999;
-         if (uR < -ZR) RR._y = 2 * Math.atan2(yR, tR), RR._x = Math.PI / 2, RR._z = 0, RR._isDirty = !0;
-         else if (uR > ZR) RR._y = 2 * Math.atan2(yR, tR), RR._x = -Math.PI / 2, RR._z = 0, RR._isDirty = !0;
-         else {
-           const ZR = tR * tR,
-             qR = JR * JR,
-             iR = GR * GR,
-             fR = yR * yR;
-           RR._z = Math.atan2(2 * (GR * yR + JR * tR), -qR - iR + fR + ZR), RR._x = Math.asin(-2 * uR), RR._y = Math.atan2(2 * (JR * GR + yR * tR), qR - iR - fR + ZR), RR._isDirty = !0
+       set color(rr) {
+         this.setColor(rr)
+       }
+       setColor(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         null === this._color && null !== rr || null !== this._color && null === rr ? (this._color = rr, Sr || this.markAllDefinesAsDirty()) : this._color = rr
+       }
+       get colorsDistributionType() {
+         return this._colorsDistributionType
+       }
+       set colorsDistributionType(rr) {
+         this._colorsDistributionType = rr, this.markAllDefinesAsDirty()
+       }
+       get resolution() {
+         return this._resolution
+       }
+ ... (67 more added lines; see GitHub link above)
```

#### 113. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1655` → after: `L9431-L9632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R9431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L9431-L9632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L9431-L9632) · [Before (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1655)

```diff
-         return RR
+         Wr.lC.add((() => {
+           nZ.DisposeEmptyColorsTexture()
+         }))
+       }
+       dispose() {
+         this._colorsTexture && this._colorsTexture !== UZ.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
+       }
+       _setColorModeAndColorDistributionType() {
+         this.setVector2("grl_colorModeAndColorDistributionType", new Gr.q(this._colorMode, this._colorsDistributionType))
+       }
+       updateLazy() {
+         this._colors && this.setColors(this._colors, !1, !0)
+       }
+       get colors() {
+         return this._colors
+       }
+ ... (186 more added lines; see GitHub link above)
```

#### 114. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1657-L1681` → after: `L9634-L9655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R9634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L9634-L9655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L9634-L9655) · [Before (L1657-L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1657-L1681)

```diff
-       toAlphaBetaGammaToRef(RR) {
-         const JR = this._z,
-           GR = this._x,
-           yR = this._y,
-           tR = this._w,
-           uR = Math.sqrt(GR * GR + yR * yR),
-           ZR = Math.sqrt(JR * JR + tR * tR),
-           qR = 2 * Math.atan2(uR, ZR),
-           iR = 2 * Math.atan2(JR, tR),
-           fR = 2 * Math.atan2(yR, GR),
-           VR = (iR + fR) / 2,
-           KR = (iR - fR) / 2;
-         return RR.set(KR, qR, VR), RR
-       }
-       toRotationMatrix(RR) {
-         return aR.FromQuaternionToRef(this, RR), RR
- ... (9 more removed lines; see GitHub link above)
+       get colorPointers() {
+         return this._colorPointers
+       }
+       set colorPointers(rr) {
+         this._colorPointers = rr, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(rr)
+       }
+       get greasedLineMaterial() {
+         if (this.material && this.material instanceof LZ) return this.material;
+         const rr = this.material?.pluginManager?.getPlugin(KZ.GREASED_LINE_MATERIAL_NAME);
+         return rr || void 0
+       }
+       get points() {
+         const rr = [];
+         return TZ.b.DeepCopy(this._points, rr), rr
+       }
+       setPoints(rr, Sr) {
+ ... (6 more added lines; see GitHub link above)
```

#### 115. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1683-L1684` → after: `L9657-L9663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R9657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L9657-L9663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L9657-L9663) · [Before (L1683-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1683-L1684)

```diff
-           axis: RR,
-           angle: this.toAxisAngleToRef(RR)
+           points: this._points,
+           colorPointers: this._colorPointers,
+           lazy: this._lazy,
+           updatable: this._updatable,
+           uvs: this._uvs,
+           widths: this._widths,
+           ribbonOptions: this._options.ribbonOptions
```

#### 116. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1687-L1691` → after: `L9666-L9833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R9666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L9666-L9833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L9666-L9833) · [Before (L1687-L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1687-L1691)

```diff
-       toAxisAngleToRef(RR) {
-         let JR;
-         const GR = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
-           yR = this._w;
-         return GR > 0 ? (JR = 2 * Math.atan2(GR, yR), RR.set(this._x / GR, this._y / GR, this._z / GR)) : (JR = 0, RR.set(1, 0, 0)), JR
+       serialize(rr) {
+         super.serialize(rr), rr.type = this.getClassName(), rr.lineOptions = this._createLineOptions()
+       }
+       _createVertexBuffers() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const Sr = new BZ.b;
+         return Sr.positions = this._vertexPositions, Sr.indices = this._indices, Sr.uvs = this._uvs, rr && (Sr.normals = [], BZ.b.ComputeNormals(this._vertexPositions, this._indices, Sr.normals)), Sr.applyToMesh(this, this._options.updatable), Sr
+       }
+       _createOffsetsBuffer(rr) {
+         const Sr = this._scene.MU(),
+           Qr = new kr.c(Sr, rr, this._updatable, 3);
+         this.setVerticesBuffer(Qr.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = Qr
+       }
+     }
+     class qZ {
+       constructor(rr, Sr) {
+ ... (152 more added lines; see GitHub link above)
```

#### 117. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1693` → after: `L9835-L9910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R9835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L9835-L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L9835-L9910) · [Before (L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1693)

```diff
-       static FromRotationMatrix(RR) {
+       get options() {
+         return this._options
+       }
+       static RegisterExtension(rr, Sr) {
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
+         RZ.UnregisterExtension(rr) && Wr.Tools.Warn(`Extension with the name ${rr} already exists`), RZ._ExtensionFactories[rr] = Sr;
+         const Zr = Qr ?? 0;
+         RZ._ExtensionOrders[rr] = Zr;
+         let ar = RZ._ExtensionNames.length;
+         for (let Wr = 0; Wr < RZ._ExtensionNames.length; Wr++) {
+           const rr = RZ._ExtensionNames[Wr];
+           if (Zr < RZ._ExtensionOrders[rr]) {
+             ar = Wr;
+             break
+           }
+         }
+ ... (60 more added lines; see GitHub link above)
```

#### 118. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1695` → after: `L9912-L9957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R9912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L9912-L9957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L9912-L9957) · [Before (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1695)

```diff
-         return eR.FromRotationMatrixToRef(RR, JR), JR
+         return xr.files[Zr] = new Blob([pr.getOutputData()], {
+           type: "application/octet-stream"
+         }), xr
+       }
+       _setNodeTransformation(rr, Sr, Qr) {
+         if (Sr.getPivotPoint().equalsWithEpsilon(CQ, qQ.e) || Wr.Tools.Warn("Pivot points are not supported in the glTF serializer"), !Sr.position.equalsWithEpsilon(CQ, qQ.e)) {
+           const Wr = Zr.TmpVectors.kU[0].iH(Sr.position);
+           Qr && cQ(Wr), rr.translation = Wr.OWr()
+         }
+         Sr.Tx.equalsWithEpsilon(GQ, qQ.e) || (rr.scale = Sr.Tx.OWr());
+         const ar = Sr.rotationQuaternion?.clone() || Zr.Quaternion.FromEulerAngles(Sr.rotation.x, Sr.rotation.y, Sr.rotation.z);
+         ar.equalsWithEpsilon(MQ, qQ.e) || (Qr && FQ(ar), rr.rotation = ar.normalize().OWr())
+       }
+       _setCameraTransformation(rr, Sr, Qr) {
+         const Wr = Zr.TmpVectors.kU[0],
+           ar = Zr.TmpVectors.Quaternion[0],
+ ... (30 more added lines; see GitHub link above)
```

#### 119. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1697-L1708` → after: `L9959-L10027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R9959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L9959-L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L9959-L10027) · [Before (L1697-L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1697-L1708)

```diff
-       static FromRotationMatrixToRef(RR, JR) {
-         const GR = RR.m,
-           yR = GR[0],
-           tR = GR[4],
-           uR = GR[8],
-           ZR = GR[1],
-           qR = GR[5],
-           iR = GR[9],
-           fR = GR[2],
-           VR = GR[6],
-           KR = GR[10],
-           wR = yR + qR + KR;
+       _exportAndAssignCameras() {
+         const rr = Array.from(this._camerasMap.values());
+         for (const Sr of rr) {
+           const rr = this._nodesCameraMap.get(Sr);
+           if (void 0 !== rr) {
+             this._cameras.push(Sr);
+             for (const Sr of rr) Sr.camera = this._cameras.length - 1
+           }
+         }
+       }
+       _listAvailableSkeletons() {
+         for (const rr of this._babylonScene.skeletons) {
+           if (rr.bones.length <= 0) continue;
+           const Sr = {
+             joints: []
+           };
+ ... (53 more added lines; see GitHub link above)
```

#### 120. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1710` → after: `L10029-L10100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R10029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L10029-L10100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L10029-L10100) · [Before (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1710)

```diff
-         return wR > 0 ? (rR = .5 / Math.sqrt(wR + 1), JR._w = .25 / rR, JR._x = (VR - iR) * rR, JR._y = (uR - fR) * rR, JR._z = (ZR - tR) * rR, JR._isDirty = !0) : yR > qR && yR > KR ? (rR = 2 * Math.sqrt(1 + yR - qR - KR), JR._w = (VR - iR) / rR, JR._x = .25 * rR, JR._y = (tR +  … [truncated]
+         if (Wr && !this._options.includeCoordinateSystemConversionNodes)
+           for (const Er of this._babylonScene.animationGroups)
+             for (const rr of Er.targetedAnimations) {
+               const Sr = rr.target;
+               Sr instanceof xr.b && !Sr.parent && (ar ?? (ar = new Set)).add(Sr)
+             }
+         for (const Er of this._babylonScene.rootNodes) {
+           const rr = Er.animations,
+             jr = !!rr && rr.length > 0 || ar?.has(Er);
+           Wr && !this._options.includeCoordinateSystemConversionNodes && gQ(Er, this._babylonScene.useRightHandedSystem) && !jr ? Zr.push(...Er.getChildren()) : this._babylonScene.useRightHandedSystem ? Sr.push(Er) : Qr.push(Er)
+         }
+         this._listAvailableCameras(), this._listAvailableSkeletons();
+         const jr = new qZ(!0, !1);
+         rr.nodes.push(...await this._exportNodesAsync(Qr, jr));
+         const Ir = new qZ(!1, !1);
+         rr.nodes.push(...await this._exportNodesAsync(Sr, Ir));
+ ... (56 more added lines; see GitHub link above)
```

#### 121. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1712-L1713` → after: `L10102-L10105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R10102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L10102-L10105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L10102-L10105) · [Before (L1712-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1712-L1713)

```diff
-       static Dot(RR, JR) {
-         return RR._x * JR._x + RR._y * JR._y + RR._z * JR._z + RR._w * JR._w
+       _setNodeExtension(rr, Sr, Qr) {
+         const Zr = this._nodes[rr];
+         if (!Zr) throw new Error(`Cannot write ${Sr}: glTF node ${rr} does not exist.`);
+         Zr.extensions || (Zr.extensions = {}), Zr.extensions[Sr] = Qr
```

#### 122. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1715-L1718` → after: `L10107-L10109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R10107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L10107-L10109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L10107-L10109) · [Before (L1715-L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1715-L1718)

```diff
-       static AreClose(RR, JR) {
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
-         const yR = eR.Dot(RR, JR);
-         return 1 - yR * yR <= GR
+       _shouldExportNode(rr) {
+         let Sr = this._shouldExportNodeMap.get(rr);
+         return void 0 === Sr && (Sr = this._options.shouldExportNode(rr), this._shouldExportNodeMap.set(rr, Sr)), Sr
```

#### 123. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1720-L1722` → after: `L10111-L10115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R10111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L10111-L10115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L10111-L10115) · [Before (L1720-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1720-L1722)

```diff
-       static SmoothToRef(RR, JR, GR, yR, tR) {
-         let uR = 0 === yR ? 1 : GR / yR;
-         return uR = (0, qR.Clamp)(uR, 0, 1), eR.SlerpToRef(RR, JR, uR, tR), tR
+       async _exportNodesAsync(rr, Sr) {
+         const Qr = new Array;
+         this._exportBuffers(rr, Sr);
+         for (const Zr of rr) await this._exportNodeAsync(Zr, Qr, Sr);
+         return Qr
```

#### 124. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1724-L1725` → after: `L10117-L10583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R10117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L10117-L10583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L10117-L10583) · [Before (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1724-L1725)

```diff
-       static Zero() {
-         return new eR(0, 0, 0, 0)
+       _collectBuffers(rr, Sr, Qr, Zr, Wr) {
+         if (this._shouldExportNode(rr) && rr instanceof mr.b && rr.geometry) {
+           const ar = rr.geometry.getVertexBuffers();
+           if (ar)
+             for (const Zr in ar) {
+               if (!iQ(Zr)) continue;
+               const jr = ar[Zr];
+               Wr.setHasVertexColorAlpha(jr, rr.hasVertexAlpha);
+               const Ir = jr._buffer,
+                 fr = Sr.get(Ir) || [];
+               Sr.set(Ir, fr), -1 === fr.indexOf(jr) && fr.push(jr);
+               const Er = Qr.get(jr) || [];
+               Qr.set(jr, Er), -1 === Er.indexOf(rr) && Er.push(rr)
+             }
+           const jr = rr.morphTargetManager;
+           if (jr)
+ ... (451 more added lines; see GitHub link above)
```

#### 125. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1727-L1728` → after: `L10585-L10852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R10585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L10585-L10852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L10585-L10852) · [Before (L1727-L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1727-L1728)

```diff
-       static Inverse(RR) {
-         return new eR(-RR._x, -RR._y, -RR._z, RR._w)
+     }
+     let kZ = !1;
+ 
+     function AZ() {
+       kZ || (kZ = !0, RZ.RegisterExtension(CZ, (rr => new GZ(rr))))
+     }
+     Qr(42318);
+     AZ();
+     var VZ = Qr(54381);
+ 
+     function iZ(rr, Sr, Qr, Zr) {
+       const Wr = rr;
+       let ar = null,
+         jr = null,
+         Ir = null,
+         fr = null;
+ ... (252 more added lines; see GitHub link above)
```

#### 126. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1730-L1731` → after: `L10854-L10904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R10854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L10854-L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L10854-L10904) · [Before (L1730-L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1730-L1731)

```diff
-       static InverseToRef(RR, JR) {
-         return JR.set(-RR._x, -RR._y, -RR._z, RR._w), JR
+       constructor(rr) {
+         this.name = DZ, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === rr.options.meshCompressionMethod && JZ.DefaultAvailable
+       }
+       dispose() {}
+       postExportMeshPrimitive(rr, Sr, Qr) {
+         if (!this.enabled) return;
+         if (4 !== rr.mode && 5 !== rr.mode) return void Lr.c.Warn("Cannot compress primitive with mode " + rr.mode + ".");
+         const Zr = [],
+           Wr = [];
+         let ar = null;
+         if (void 0 !== rr.indices) {
+           const jr = Qr[rr.indices],
+             Ir = Sr.getBufferView(jr);
+           ar = Sr.getData(Ir).slice(), Zr.push(Ir), Wr.push(jr)
+         }
+         const jr = [];
+ ... (35 more added lines; see GitHub link above)
```

#### 127. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1733-L1734` → after: `L10906-L10928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R10906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L10906-L10928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L10906-L10928) · [Before (L1733-L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1733-L1734)

```diff
-       static Identity() {
-         return new eR(0, 0, 0, 1)
+     }
+     let sZ = !1;
+ 
+     function uZ() {
+       sZ || (sZ = !0, RZ.RegisterExtension(DZ, (rr => new dZ(rr))))
+     }
+     uZ();
+     var rW = Qr(54104);
+     const SW = "KHR_lights_punctual",
+       QW = {
+         name: "",
+         color: [1, 1, 1],
+         intensity: 1,
+         range: Number.MAX_VALUE
+       },
+       ZW = {
+ ... (7 more added lines; see GitHub link above)
```

#### 128. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1736-L1737` → after: `L10930-L10931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R10930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L10930-L10931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L10930-L10931) · [Before (L1736-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1736-L1737)

```diff
-       static IsIdentity(RR) {
-         return RR && 0 === RR._x && 0 === RR._y && 0 === RR._z && 1 === RR._w
+       dispose() {
+         this._lights = null
```

#### 129. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1739-L1740` → after: `L10933-L10934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R10933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L10933-L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L10933-L10934) · [Before (L1739-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1739-L1740)

```diff
-       static RotationAxis(RR, JR) {
-         return eR.RotationAxisToRef(RR, JR, new eR)
+       get wasUsed() {
+         return !!this._lights
```

#### 130. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1742-L1745` → after: `L10936-L10937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R10936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L10936-L10937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L10936-L10937) · [Before (L1742-L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1742-L1745)

```diff
-       static RotationAxisToRef(RR, JR, GR) {
-         GR._w = Math.cos(JR / 2);
-         const yR = Math.sin(JR / 2) / RR.length();
-         return GR._x = RR._x * yR, GR._y = RR._y * yR, GR._z = RR._z * yR, GR._isDirty = !0, GR
+       onExporting() {
+         this._exporter._glTF.extensions[SW] = this._lights
```

#### 131. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1747-L1748` → after: `L10939-L10983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R10939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L10939-L10983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L10939-L10983) · [Before (L1747-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1747-L1748)

```diff
-       static FromArray(RR, JR) {
-         return JR || (JR = 0), new eR(RR[JR], RR[JR + 1], RR[JR + 2], RR[JR + 3])
+       async postExportNodeAsync(rr, Sr, Qr, Zr, Wr) {
+         return await new Promise((ar => {
+           if (!(Qr instanceof pZ.c)) return void ar(Sr);
+           const jr = Qr.getTypeID() == pZ.c.LIGHTTYPEID_POINTLIGHT ? "point" : Qr.getTypeID() == pZ.c.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : Qr.getTypeID() == pZ.c.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
+           if (!jr || !(Qr instanceof rW.c)) return Lr.c.Warn(`${rr}: Light ${Qr.name} is not supported in ${SW}`), void ar(Sr);
+           if (Qr.falloffType !== pZ.c.FALLOFF_GLTF && Lr.c.Warn(`${rr}: Light falloff for ${Qr.name} does not match the ${SW} specification!`), !Qr.position.ffr(0, 0, 0)) {
+             const rr = Gr.n.kU[0].iH(Qr.position);
+             Wr && cQ(rr), Sr.translation = rr.OWr()
+           }
+           if ("point" !== jr) {
+             const rr = Qr.direction.normalizeToRef(Gr.n.kU[0]);
+             Wr && cQ(rr);
+             const Zr = Gr.h.FromUnitVectorsToRef(WW, rr, Gr.n.Quaternion[0]);
+             Gr.h.IsIdentity(Zr) || (Sr.rotation = Zr.OWr())
+           }
+           const Ir = {
+ ... (29 more added lines; see GitHub link above)
```

#### 132. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1750-L1751` → after: `L10985-L11018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R10985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L10985-L11018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L10985-L11018) · [Before (L1750-L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1750-L1751)

```diff
-       static FromArrayToRef(RR, JR, GR) {
-         return GR._x = RR[JR], GR._y = RR[JR + 1], GR._z = RR[JR + 2], GR._w = RR[JR + 3], GR._isDirty = !0, GR
+     }
+     let jW = !1;
+ 
+     function IW() {
+       jW || (jW = !0, RZ.RegisterExtension(SW, (rr => new aW(rr))))
+     }
+     IW();
+     const fW = "KHR_interactivity";
+     class EW {
+       constructor(rr) {
+         this._exporter = rr, this.name = fW, this.enabled = !!rr.options.khrInteractivity, this.required = rr.options.khrInteractivity?.required ?? !1
+       }
+       dispose() {
+         this._exporter = null
+       }
+       get wasUsed() {
+ ... (18 more added lines; see GitHub link above)
```

#### 133. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1753-L1754` → after: `L11020-L11090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R11020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L11020-L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L11020-L11090) · [Before (L1753-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1753-L1754)

```diff
-       static FromFloatsToRef(RR, JR, GR, yR, tR) {
-         return tR.VJR(RR, JR, GR, yR), tR
+     }
+     let pW = !1;
+ 
+     function xW() {
+       pW || (pW = !0, RZ.RegisterExtension(fW, (rr => new EW(rr)), 200))
+     }
+     xW();
+     const mW = "EXT_lights_area",
+       NW = {
+         name: "",
+         color: [1, 1, 1],
+         intensity: 1,
+         size: 1
+       },
+       UW = {
+         aspect: 1
+ ... (55 more added lines; see GitHub link above)
```

#### 134. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1756-L1758` → after: `L11092-L11183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R11092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L11092-L11183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L11092-L11183) · [Before (L1756-L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1756-L1758)

```diff
-       static FromEulerAngles(RR, JR, GR) {
-         const yR = new eR;
-         return eR.RotationYawPitchRollToRef(JR, RR, GR, yR), yR
+     }
+     let zW = !1;
+ 
+     function YW() {
+       zW || (zW = !0, RZ.RegisterExtension(mW, (rr => new hW(rr))))
+     }
+     YW();
+     const nW = "KHR_materials_anisotropy";
+     class eW {
+       constructor(rr) {
+         this.name = nW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = rr
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (76 more added lines; see GitHub link above)
```

#### 135. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1760-L1761` → after: `L11185-L11200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R11185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L11185-L11200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L11185-L11200) · [Before (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1760-L1761)

```diff
-       static FromEulerAnglesToRef(RR, JR, GR, yR) {
-         return eR.RotationYawPitchRollToRef(JR, RR, GR, yR), yR
+     }
+     let KW = !1;
+ 
+     function yW() {
+       KW || (KW = !0, RZ.RegisterExtension(nW, (rr => new eW(rr))))
+     }
+     yW();
+     const BW = "KHR_materials_clearcoat";
+ 
+     function TW(rr, Sr) {
+       const Qr = new Xr.f(Sr.name, Sr.eC());
+       return Qr._texture = rr, Qr.coordinatesIndex = Sr.coordinatesIndex, Sr instanceof Xr.f && (Qr.uOffset = Sr.uOffset, Qr.vOffset = Sr.vOffset, Qr.uScale = Sr.uScale, Qr.vScale = Sr.vScale, Qr.wAng = Sr.wAng), Qr.wrapU = Sr.wrapU, Qr.wrapV = Sr.wrapV, Qr
+     }
+     class vW {
+       constructor(rr) {
+         this.name = BW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = rr
```

#### 136. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1763-L1765` → after: `L11202-L11275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R11202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L11202-L11275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L11202-L11275) · [Before (L1763-L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1763-L1765)

```diff
-       static FromEulerVector(RR) {
-         const JR = new eR;
-         return eR.RotationYawPitchRollToRef(RR._y, RR._x, RR._z, JR), JR
+       dispose() {
+         for (const rr of Object.keys(this._mergedTexturesMap)) {
+           this._mergedTexturesMap[rr].dispose()
+         }
+         this._mergedTexturesMap = {};
+         for (const rr of Object.keys(this._cachedInternalTexturesMap)) {
+           this._cachedInternalTexturesMap[rr].dispose()
+         }
+         this._cachedInternalTexturesMap = {}
+       }
+       get wasUsed() {
+         return this._wasUsed
+       }
+       async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
+         const Zr = [];
+         if (Qr instanceof yS) {
+ ... (58 more added lines; see GitHub link above)
```

#### 137. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1767-L1768` → after: `L11277-L11298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R11277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L11277-L11298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L11277-L11298) · [Before (L1767-L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1767-L1768)

```diff
-       static FromEulerVectorToRef(RR, JR) {
-         return eR.RotationYawPitchRollToRef(RR._y, RR._x, RR._z, JR), JR
+     }
+     let OW = !1;
+ 
+     function LW() {
+       OW || (OW = !0, RZ.RegisterExtension(BW, (rr => new vW(rr))))
+     }
+     LW();
+     const lW = "KHR_materials_coat";
+ 
+     function XW(rr) {
+       const Sr = rr.coatRoughnessAnisotropyTexture,
+         Qr = rr.geometryCoatTangentTexture;
+       return `${Sr&&Sr.getInternalTexture()?Sr.getInternalTexture().uniqueId:"NoStrength"}_${Qr&&Qr.getInternalTexture()?Qr.getInternalTexture().uniqueId:"NoTangent"}`
+     }
+ 
+     function PW(rr, Sr) {
+ ... (6 more added lines; see GitHub link above)
```

#### 138. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1770-L1773` → after: `L11300-L11430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R11300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L11300-L11430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L11300-L11430) · [Before (L1770-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1770-L1773)

```diff
-       static FromUnitVectorsToRef(RR, JR, GR) {
-         let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yR.c;
-         const uR = wR.Dot(RR, JR) + 1;
-         return uR < tR ? Math.abs(RR.x) > Math.abs(RR.z) ? GR.set(-RR.y, RR.x, 0, 0) : GR.set(0, -RR.z, RR.y, 0) : (wR.CrossToRef(RR, JR, nR.Fe[0]), GR.set(nR.Fe[0].x, nR.Fe[0].y, nR.Fe[0].z, uR)), GR.normalize()
+       dispose() {
+         for (const rr of Object.keys(this._mergedTexturesMap)) {
+           this._mergedTexturesMap[rr].dispose()
+         }
+         this._mergedTexturesMap = {};
+         for (const rr of Object.keys(this._cachedInternalTexturesMap)) {
+           this._cachedInternalTexturesMap[rr].dispose()
+         }
+         this._cachedInternalTexturesMap = {}
+       }
+       get wasUsed() {
+         return this._wasUsed
+       }
+       async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
+         const Zr = [];
+         if (Qr instanceof yS) {
+ ... (115 more added lines; see GitHub link above)
```

#### 139. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1775-L1777` → after: `L11432-L12927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R11432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L11432-L12927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L11432-L12927) · [Before (L1775-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1775-L1777)

```diff
-       static RotationYawPitchRoll(RR, JR, GR) {
-         const yR = new eR;
-         return eR.RotationYawPitchRollToRef(RR, JR, GR, yR), yR
+     }
+     let qW = !1;
+ 
+     function RW() {
+       qW || (qW = !0, RZ.RegisterExtension(lW, (rr => new HW(rr))))
+     }
+     RW();
+     let gW = (() => {
+       var rr, Sr, Qr, Zr, Wr, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr, Lr, lr, Xr, Pr, Hr, qr, gr, Cr, Mr, Gr, kr, Ar, Vr, ir, wr, cr, or, br, Jr, Dr, dr, sr, ur, rS, SS, QS, ZS, WS, aS, jS, IS, fS, ES, pS, xS, mS, NS, US, tS, hS, zS, YS, nS;
+       let eS, KS, TS, vS, OS, LS, lS, XS, PS, HS, qS, RS, gS, CS, MS, GS, kS, AS, VS, iS, wS, cS, FS, oS, bS, JS, DS, dS, sS, uS, rQ, SQ, QQ, ZQ, WQ, aQ, jQ, IQ, fQ, EQ, pQ, xQ, mQ, NQ, UQ, tQ, hQ, zQ, YQ, nQ, eQ, KQ, yQ, BQ, TQ, vQ, OQ, LQ, lQ, XQ, PQ, HQ, qQ, RQ, gQ, CQ, MQ, GQ … [truncated]
+         AQ = [],
+         VQ = [],
+         iQ = [],
+         wQ = [],
+         cQ = [],
+         FQ = [],
+ ... (1480 more added lines; see GitHub link above)
```

#### 140. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1779-L1793` → after: `L12929-L12931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R12929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L12929-L12931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L12929-L12931) · [Before (L1779-L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1779-L1793)

```diff
-       static RotationYawPitchRollToRef(RR, JR, GR, yR) {
-         const tR = .5 * GR,
-           uR = .5 * JR,
-           ZR = .5 * RR,
-           qR = Math.sin(tR),
-           iR = Math.cos(tR),
-           fR = Math.sin(uR),
-           VR = Math.cos(uR),
-           KR = Math.sin(ZR),
-           wR = Math.cos(ZR);
-         return yR._x = wR * fR * iR + KR * VR * qR, yR._y = KR * VR * iR - wR * fR * qR, yR._z = wR * VR * qR - KR * fR * iR, yR._w = wR * VR * iR + KR * fR * qR, yR._isDirty = !0, yR
-       }
-       static RotationAlphaBetaGamma(RR, JR, GR) {
-         const yR = new eR;
-         return eR.RotationAlphaBetaGammaToRef(RR, JR, GR, yR), yR
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
```

#### 141. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1795-L1799` → after: `L12933-L12939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R12933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L12933-L12939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L12933-L12939) · [Before (L1795-L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1795-L1799)

```diff
-       static RotationAlphaBetaGammaToRef(RR, JR, GR, yR) {
-         const tR = .5 * (GR + RR),
-           uR = .5 * (GR - RR),
-           ZR = .5 * JR;
-         return yR._x = Math.cos(uR) * Math.sin(ZR), yR._y = Math.sin(uR) * Math.sin(ZR), yR._z = Math.sin(tR) * Math.cos(ZR), yR._w = Math.cos(tR) * Math.cos(ZR), yR._isDirty = !0, yR
+       async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
+         const Zr = [];
+         if (Qr instanceof gW && this._isExtensionEnabled(Qr)) {
+           const Sr = MW(rr, Qr);
+           return Sr && Zr.push(Sr), Qr.subSurface.translucencyColorTexture && Zr.push(Qr.subSurface.translucencyColorTexture), Zr
+         }
+         return Zr
```

#### 142. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1801-L1803` → after: `L12941-L12965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R12941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L12941-L12965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L12941-L12965) · [Before (L1801-L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1801-L1803)

```diff
-       static RotationQuaternionFromAxis(RR, JR, GR) {
-         const yR = new eR(0, 0, 0, 0);
-         return eR.RotationQuaternionFromAxisToRef(RR, JR, GR, yR), yR
+       _isExtensionEnabled(rr) {
+         if (rr.unlit) return !1;
+         const Sr = rr.subSurface;
+         return !!Sr.isTranslucencyEnabled && (!rr.unlit && !Sr.useAlbedoToTintTranslucency && Sr.useGltfStyleTextures && 1 === Sr.volumeIndexOfRefraction && 0 === Sr.minimumThickness && 0 === Sr.maximumThickness)
+       }
+       postExportMaterialAsync(rr, Sr, Qr) {
+         return new Promise((Zr => {
+           if (Qr instanceof gW && this._isExtensionEnabled(Qr)) {
+             this._wasUsed = !0;
+             const Zr = Qr.subSurface,
+               Wr = MW(rr, Qr),
+               ar = 0 == Zr.translucencyIntensity ? void 0 : Zr.translucencyIntensity,
+               jr = this._exporter._materialExporter.getTextureInfo(Wr) ?? void 0,
+               Ir = !Zr.translucencyColor || Zr.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Zr.translucencyColor.OWr(),
+               fr = this._exporter._materialExporter.getTextureInfo(Zr.translucencyColorTexture) ?? void 0,
+               Er = {
+ ... (9 more added lines; see GitHub link above)
```

#### 143. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1805-L1807` → after: `L12967-L12998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R12967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L12967-L12998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L12967-L12998) · [Before (L1805-L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1805-L1807)

```diff
-       static RotationQuaternionFromAxisToRef(RR, JR, GR, yR) {
-         const tR = LR.Matrix[0];
-         return RR = RR.normalizeToRef(LR.Fe[0]), JR = JR.normalizeToRef(LR.Fe[1]), GR = GR.normalizeToRef(LR.Fe[2]), aR.FromXYZAxesToRef(RR, JR, GR, tR), eR.FromRotationMatrixToRef(tR, yR), yR
+     }
+     let kW = !1;
+ 
+     function AW() {
+       kW || (kW = !0, RZ.RegisterExtension(CW, (rr => new GW(rr))))
+     }
+     AW();
+     const VW = "KHR_materials_dispersion";
+     class iW {
+       constructor() {
+         this.name = VW, this.enabled = !0, this.required = !1, this._wasUsed = !1
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 144. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1809-L1811` → after: `L13000-L13029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13000-L13029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13000-L13029) · [Before (L1809-L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1809-L1811)

```diff
-       static FromLookDirectionLH(RR, JR) {
-         const GR = new eR;
-         return eR.FromLookDirectionLHToRef(RR, JR, GR), GR
+     }
+     let wW = !1;
+ 
+     function cW() {
+       wW || (wW = !0, RZ.RegisterExtension(VW, (() => new iW)))
+     }
+     cW();
+     const FW = "KHR_materials_emissive_strength";
+     class oW {
+       constructor() {
+         this.name = FW, this.enabled = !0, this.required = !1, this._wasUsed = !1
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (14 more added lines; see GitHub link above)
```

#### 145. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1813-L1815` → after: `L13031-L13066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13031-L13066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13031-L13066) · [Before (L1813-L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1813-L1815)

```diff
-       static FromLookDirectionLHToRef(RR, JR, GR) {
-         const yR = LR.Matrix[0];
-         return aR.LookDirectionLHToRef(RR, JR, yR), eR.FromRotationMatrixToRef(yR, GR), GR
+     }
+     let bW = !1;
+ 
+     function JW() {
+       bW || (bW = !0, RZ.RegisterExtension(FW, (() => new oW)))
+     }
+     JW();
+     const DW = "KHR_materials_ior";
+     class dW {
+       constructor() {
+         this.name = DW, this.enabled = !0, this.required = !1, this._wasUsed = !1
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (20 more added lines; see GitHub link above)
```

#### 146. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1817-L1819` → after: `L13068-L13123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13068-L13123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13068-L13123) · [Before (L1817-L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1817-L1819)

```diff
-       static FromLookDirectionRH(RR, JR) {
-         const GR = new eR;
-         return eR.FromLookDirectionRHToRef(RR, JR, GR), GR
+     }
+     let sW = !1;
+ 
+     function uW() {
+       sW || (sW = !0, RZ.RegisterExtension(DW, (() => new dW)))
+     }
+     uW();
+     const ra = "KHR_materials_iridescence";
+     class Sa {
+       constructor(rr) {
+         this.name = ra, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = rr
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (40 more added lines; see GitHub link above)
```

#### 147. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1821-L1823` → after: `L13125-L13156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13125-L13156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13125-L13156) · [Before (L1821-L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1821-L1823)

```diff
-       static FromLookDirectionRHToRef(RR, JR, GR) {
-         const yR = LR.Matrix[0];
-         return aR.LookDirectionRHToRef(RR, JR, yR), eR.FromRotationMatrixToRef(yR, GR)
+     }
+     let Qa = !1;
+ 
+     function Za() {
+       Qa || (Qa = !0, RZ.RegisterExtension(ra, (rr => new Sa(rr))))
+     }
+     Za();
+     const Wa = "KHR_materials_sheen";
+     class aa {
+       constructor(rr) {
+         this.name = Wa, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = rr
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 148. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1825-L1827` → after: `L13158-L13173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13158-L13173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13158-L13173) · [Before (L1825-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1825-L1827)

```diff
-       static Slerp(RR, JR, GR) {
-         const yR = eR.Identity();
-         return eR.SlerpToRef(RR, JR, GR, yR), yR
+     }
+     let ja = !1;
+ 
+     function Ia() {
+       ja || (ja = !0, RZ.RegisterExtension(Wa, (rr => new aa(rr))))
+     }
+     Ia();
+     const fa = "KHR_materials_fuzz";
+ 
+     function Ea(rr, Sr) {
+       const Qr = new Xr.f(Sr.name, Sr.eC());
+       return Qr._texture = rr, Qr.coordinatesIndex = Sr.coordinatesIndex, Sr instanceof Xr.f && (Qr.uOffset = Sr.uOffset, Qr.vOffset = Sr.vOffset, Qr.uScale = Sr.uScale, Qr.vScale = Sr.vScale, Qr.wAng = Sr.wAng), Qr.wrapU = Sr.wrapU, Qr.wrapV = Sr.wrapV, Qr
+     }
+     class pa {
+       constructor(rr) {
+         this.name = fa, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = rr
```

#### 149. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1829-L1851` → after: `L13175-L13231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13175-L13231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13175-L13231) · [Before (L1829-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1829-L1851)

```diff
-       static SlerpToRef(RR, JR, GR, yR) {
-         let tR, uR, ZR = RR._x * JR._x + RR._y * JR._y + RR._z * JR._z + RR._w * JR._w,
-           qR = !1;
-         if (ZR < 0 && (qR = !0, ZR = -ZR), ZR > .999999) uR = 1 - GR, tR = qR ? -GR : GR;
-         else {
-           const RR = Math.acos(ZR),
-             JR = 1 / Math.sin(RR);
-           uR = Math.sin((1 - GR) * RR) * JR, tR = qR ? -Math.sin(GR * RR) * JR : Math.sin(GR * RR) * JR
-         }
-         return yR._x = uR * RR._x + tR * JR._x, yR._y = uR * RR._y + tR * JR._y, yR._z = uR * RR._z + tR * JR._z, yR._w = uR * RR._w + tR * JR._w, yR._isDirty = !0, yR
-       }
-       static Hermite(RR, JR, GR, yR, tR) {
-         const uR = tR * tR,
-           ZR = tR * uR,
-           qR = 2 * ZR - 3 * uR + 1,
-           iR = -2 * ZR + 3 * uR,
- ... (7 more removed lines; see GitHub link above)
+       dispose() {
+         for (const rr of Object.keys(this._mergedTexturesMap)) {
+           this._mergedTexturesMap[rr].dispose()
+         }
+         this._mergedTexturesMap = {};
+         for (const rr of Object.keys(this._cachedInternalTexturesMap)) {
+           this._cachedInternalTexturesMap[rr].dispose()
+         }
+         this._cachedInternalTexturesMap = {}
+       }
+       get wasUsed() {
+         return this._wasUsed
+       }
+       async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
+         if (Qr instanceof sS) {
+           const rr = [];
+ ... (41 more added lines; see GitHub link above)
```

#### 150. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1853-L1855` → after: `L13233-L13294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13233-L13294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13233-L13294) · [Before (L1853-L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1853-L1855)

```diff
-       static Hermite1stDerivative(RR, JR, GR, yR, tR) {
-         const uR = new eR;
-         return this.Hermite1stDerivativeToRef(RR, JR, GR, yR, tR, uR), uR
+     }
+     let xa = !1;
+ 
+     function ma() {
+       xa || (xa = !0, RZ.RegisterExtension(fa, (rr => new pa(rr))))
+     }
+     ma();
+     const Na = "KHR_materials_specular";
+     class Ua {
+       constructor(rr) {
+         this.name = Na, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = rr
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (46 more added lines; see GitHub link above)
```

#### 151. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1857-L1859` → after: `L13296-L13306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13296-L13306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13296-L13306) · [Before (L1857-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1857-L1859)

```diff
-       static Hermite1stDerivativeToRef(RR, JR, GR, yR, tR, uR) {
-         const ZR = tR * tR;
-         return uR._x = 6 * (ZR - tR) * RR._x + (3 * ZR - 4 * tR + 1) * JR._x + 6 * (-ZR + tR) * GR._x + (3 * ZR - 2 * tR) * yR._x, uR._y = 6 * (ZR - tR) * RR._y + (3 * ZR - 4 * tR + 1) * JR._y + 6 * (-ZR + tR) * GR._y + (3 * ZR - 2 * tR) * yR._y, uR._z = 6 * (ZR - tR) * RR._z + ( … [truncated]
+     }
+     let ta = !1;
+ 
+     function ha() {
+       ta || (ta = !0, RZ.RegisterExtension(Na, (rr => new Ua(rr))))
+     }
+     ha();
+     const za = "KHR_materials_transmission";
+     class Ya {
+       constructor(rr) {
+         this.name = za, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = rr
```

#### 152. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1861-L1863` → after: `L13308-L13310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13308-L13310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13308-L13310) · [Before (L1861-L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1861-L1863)

```diff
-       static Normalize(RR) {
-         const JR = eR.Zero();
-         return eR.NormalizeToRef(RR, JR), JR
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
```

#### 153. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1865-L1866` → after: `L13312-L13317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13312-L13317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13312-L13317) · [Before (L1865-L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1865-L1866)

```diff
-       static NormalizeToRef(RR, JR) {
-         return RR.normalizeToRef(JR), JR
+       async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
+         const Zr = [];
+         if (Qr instanceof gW) {
+           if (this._isExtensionEnabled(Qr)) return Qr.subSurface.refractionIntensityTexture && Qr.subSurface.useGltfStyleTextures && Zr.push(Qr.subSurface.refractionIntensityTexture), Zr
+         } else Qr instanceof sS && (Qr.transmissionWeight > 0 && Qr.transmissionWeightTexture && (Zr.push(Qr.transmissionWeightTexture), Qr.transmissionColorTexture && Zr.push(Qr.transmissionColorTexture)), Qr.subsurfaceWeight > 0 && Qr.subsurfaceWeightTexture && Zr.push(Qr.subsu … [truncated]
+         return Zr
```

#### 154. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1868-L1870` → after: `L13319-L13325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13319-L13325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13319-L13325) · [Before (L1868-L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1868-L1870)

```diff
-       static Clamp(RR, JR, GR) {
-         const yR = new eR;
-         return eR.ClampToRef(RR, JR, GR, yR), yR
+       _isExtensionEnabled(rr) {
+         if (rr instanceof sS && !rr.unlit) return rr.transmissionWeight > 0 || rr.subsurfaceWeight > 0;
+         if (rr instanceof gW && !rr.unlit) {
+           const Sr = rr.subSurface;
+           return Sr.isRefractionEnabled && void 0 != Sr.refractionIntensity && 0 != Sr.refractionIntensity || null != Sr.refractionIntensityTexture && Sr.useGltfStyleTextures
+         }
+         return !1
```

#### 155. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1872-L1873` → after: `L13327-L13362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13327-L13362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13327-L13362) · [Before (L1872-L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1872-L1873)

```diff
-       static ClampToRef(RR, JR, GR, yR) {
-         return yR.VJR((0, qR.Clamp)(RR.x, JR.x, GR.x), (0, qR.Clamp)(RR.y, JR.y, GR.y), (0, qR.Clamp)(RR.z, JR.z, GR.z), (0, qR.Clamp)(RR.w, JR.w, GR.w))
+       async postExportMaterialAsync(rr, Sr, Qr) {
+         if (!this._isExtensionEnabled(Qr)) return Sr;
+         if (Qr instanceof gW) {
+           this._wasUsed = !0;
+           const Zr = Qr.subSurface,
+             Wr = {
+               transmissionFactor: 0 === Zr.refractionIntensity ? void 0 : Zr.refractionIntensity
+             };
+           if (Zr.refractionIntensityTexture)
+             if (Zr.useGltfStyleTextures) {
+               this._exporter._materialNeedsUVsSet.add(Qr);
+               const rr = this._exporter._materialExporter.getTextureInfo(Zr.refractionIntensityTexture);
+               rr && (Wr.transmissionTexture = rr)
+             } else Lr.c.Warn(`${rr}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
+           Sr.extensions || (Sr.extensions = {}), Sr.extensions[za] = Wr
+         } else if (Qr instanceof sS) {
+ ... (20 more added lines; see GitHub link above)
```

#### 156. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1875-L1878` → after: `L13364-L13375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13364-L13375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13364-L13375) · [Before (L1875-L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1875-L1878)

```diff
-       static Random() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         return new eR((0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR))
+     }
+     let na = !1;
+ 
+     function ea() {
+       na || (na = !0, RZ.RegisterExtension(za, (rr => new Ya(rr))))
+     }
+     ea();
+     var Ka = Qr(42103);
+     const ya = "KHR_materials_unlit";
+     class Ba {
+       constructor() {
+         this.name = ya, this.enabled = !0, this.required = !1, this._wasUsed = !1
```

#### 157. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1880-L1883` → after: `L13377-L13378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13377-L13378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13377-L13378) · [Before (L1880-L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1880-L1883)

```diff
-       static RandomToRef() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         return (arguments.length > 2 ? arguments[2] : void 0).VJR((0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR))
+       get wasUsed() {
+         return this._wasUsed
```

#### 158. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1885-L1886` → after: `L13380-L13385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13380-L13385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13380-L13385) · [Before (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1885-L1886)

```diff
-       static Minimize() {
-         throw new ReferenceError("Quaternion.Minimize does not make sense")
+       dispose() {}
+       postExportMaterialAsync(rr, Sr, Qr) {
+         return new Promise((rr => {
+           let Zr = !1;
+           Qr instanceof gW ? Zr = Qr.unlit : Qr instanceof Ka.d && (Zr = Qr.disableLighting), Zr && (this._wasUsed = !0, null == Sr.extensions && (Sr.extensions = {}), Sr.extensions[ya] = {}), rr(Sr)
+         }))
```

#### 159. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1888-L1889` → after: `L13387-L13397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13387-L13397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13387-L13397) · [Before (L1888-L1889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1888-L1889)

```diff
-       static Maximize() {
-         throw new ReferenceError("Quaternion.Maximize does not make sense")
+     }
+     let Ta = !1;
+ 
+     function va() {
+       Ta || (Ta = !0, RZ.RegisterExtension(ya, (() => new Ba)))
+     }
+     va();
+     const Oa = "KHR_materials_volume";
+     class La {
+       constructor(rr) {
+         this.name = Oa, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = rr
```

#### 160. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1891-L1892` → after: `L13399-L13401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13399-L13401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13399-L13401) · [Before (L1891-L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1891-L1892)

```diff
-       static Distance(RR, JR) {
-         return Math.sqrt(eR.DistanceSquared(RR, JR))
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
```

#### 161. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1894-L1899` → after: `L13403-L13408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13403-L13408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13403-L13408) · [Before (L1894-L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1894-L1899)

```diff
-       static DistanceSquared(RR, JR) {
-         const GR = RR.x - JR.x,
-           yR = RR.y - JR.y,
-           tR = RR.z - JR.z,
-           uR = RR.w - JR.w;
-         return GR * GR + yR * yR + tR * tR + uR * uR
+       async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
+         const Zr = [];
+         if (Qr instanceof gW) {
+           if (this._isExtensionEnabled(Qr)) return Qr.subSurface.thicknessTexture && Zr.push(Qr.subSurface.thicknessTexture), Zr
+         } else Qr instanceof sS && (Qr.transmissionWeight > 0 || Qr.subsurfaceWeight > 0) && Qr.geometryThicknessTexture && Zr.push(Qr.geometryThicknessTexture);
+         return Zr
```

#### 162. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1901-L1902` → after: `L13410-L13474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13410-L13474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13410-L13474) · [Before (L1901-L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1901-L1902)

```diff
-       static Center(RR, JR) {
-         return eR.CenterToRef(RR, JR, eR.Zero())
+       _isExtensionEnabled(rr) {
+         if (rr.unlit) return !1;
+         const Sr = rr.subSurface;
+         return !(!Sr.isRefractionEnabled && !Sr.isTranslucencyEnabled) && (void 0 != Sr.maximumThickness && 0 != Sr.maximumThickness || void 0 != Sr.tintColorAtDistance && Sr.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != Sr.tintColor && Sr.tintColor != Fr.e.White() … [truncated]
+       }
+       _hasTexturesExtension(rr) {
+         return null != rr.subSurface.thicknessTexture
+       }
+       postExportMaterialAsync(rr, Sr, Qr) {
+         return new Promise((rr => {
+           if (Qr instanceof gW && this._isExtensionEnabled(Qr)) {
+             this._wasUsed = !0;
+             const rr = Qr.subSurface,
+               Zr = {
+                 thicknessFactor: 0 == rr.maximumThickness ? void 0 : rr.maximumThickness,
+                 thicknessTexture: this._exporter._materialExporter.getTextureInfo(rr.thicknessTexture) ?? void 0,
+ ... (49 more added lines; see GitHub link above)
```

#### 163. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1904-L1905` → after: `L13476-L13542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13476-L13542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13476-L13542) · [Before (L1904-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1904-L1905)

```diff
-       static CenterToRef(RR, JR, GR) {
-         return GR.VJR((RR.x + JR.x) / 2, (RR.y + JR.y) / 2, (RR.z + JR.z) / 2, (RR.w + JR.w) / 2)
+     }
+     let la = !1;
+ 
+     function Xa() {
+       la || (la = !0, RZ.RegisterExtension(Oa, (rr => new La(rr))))
+     }
+     Xa();
+     const Pa = "KHR_materials_volume_scatter";
+     class Ha {
+       constructor(rr) {
+         this.name = Pa, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = rr
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (51 more added lines; see GitHub link above)
```

#### 164. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1908` → after: `L13545-L13551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13545-L13551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13545-L13551) · [Before (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1908)

```diff
-     eR._V8PerformanceHack = new eR(.5, .5, .5, .5);
+     let qa = !1;
+ 
+     function Ra() {
+       qa || (qa = !0, RZ.RegisterExtension(Pa, (rr => new Ha(rr)), 101))
+     }
+     Ra();
+     const ga = "KHR_materials_diffuse_roughness";
```

#### 165. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1910-L1911` → after: `L13553-L13578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13553-L13578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13553-L13578) · [Before (L1910-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1910-L1911)

```diff
-       static get Use64Bits() {
-         return uR.c.MatrixUse64Bits
+       constructor(rr) {
+         this.name = ga, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = rr
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+       async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
+         const Zr = [];
+         if (Qr instanceof yS) {
+           if (Qr._baseDiffuseRoughness) return Qr._baseDiffuseRoughnessTexture && Zr.push(Qr._baseDiffuseRoughnessTexture), Zr
+         } else if (Qr instanceof sS && Qr.baseDiffuseRoughness) return Qr.baseDiffuseRoughnessTexture && Zr.push(Qr.baseDiffuseRoughnessTexture), Zr;
+         return []
+       }
+       postExportMaterialAsync(rr, Sr, Qr) {
+         return new Promise((rr => {
+ ... (10 more added lines; see GitHub link above)
```

#### 166. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1913-L1914` → after: `L13580-L13590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13580-L13590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13580-L13590) · [Before (L1913-L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1913-L1914)

```diff
-       get m() {
-         return this._m
+     }
+     let Ma = !1;
+ 
+     function Ga() {
+       Ma || (Ma = !0, RZ.RegisterExtension(ga, (rr => new Ca(rr))))
+     }
+     Ga();
+     const ka = "KHR_materials_openpbr";
+     class Aa {
+       constructor() {
+         this.name = ka, this.enabled = !0, this.required = !1, this._wasUsed = !1
```

#### 167. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1916-L1917` → after: `L13592-L13594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13592-L13594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13592-L13594) · [Before (L1916-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1916-L1917)

```diff
-       markAsUpdated() {
-         this.updateFlag = iR.k._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
```

#### 168. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1919-L1923` → after: `L13596-L13599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13596-L13599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13596-L13599) · [Before (L1919-L1923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1919-L1923)

```diff
-       _updateIdentityStatus(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         this._isIdentity = RR, this._isIdentity3x2 = RR || GR, this._isIdentityDirty = !this._isIdentity && JR, this._isIdentity3x2Dirty = !this._isIdentity3x2 && yR
+       postExportMaterialAsync(rr, Sr, Qr) {
+         return new Promise((rr => {
+           Qr instanceof sS && (this._wasUsed = !0, Sr.extensions = Sr.extensions || {}, Sr.extensions[ka] = {}), rr(Sr)
+         }))
```

#### 169. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1926-L1964` → after: `L13611-L13639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13611-L13639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13611-L13639) · [Before (L1926-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1926-L1964)

```diff
-         this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, uR.c.MatrixTrackPrecisionChange && uR.c.MatrixTrackedMatrices.push(this), this._m = new uR.c.MatrixCurrentType(16), this.markAsUpdated()
-       }
-       isIdentity() {
-         if (this._isIdentityDirty) {
-           this._isIdentityDirty = !1;
-           const RR = this._m;
-           this._isIdentity = 1 === RR[0] && 0 === RR[1] && 0 === RR[2] && 0 === RR[3] && 0 === RR[4] && 1 === RR[5] && 0 === RR[6] && 0 === RR[7] && 0 === RR[8] && 0 === RR[9] && 1 === RR[10] && 0 === RR[11] && 0 === RR[12] && 0 === RR[13] && 0 === RR[14] && 1 === RR[15]
-         }
-         return this._isIdentity
-       }
-       isIdentityAs3x2() {
-         return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 != … [truncated]
-       }
-       determinant() {
-         if (!0 === this._isIdentity) return 1;
-         const RR = this._m,
- ... (23 more removed lines; see GitHub link above)
+         this.name = wa, this.enabled = !0, this.required = !1, this._wasUsed = !1
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+       postExportTexture(rr, Sr, Qr) {
+         if (Qr.eC() || TS.h.Warn(`${rr}: "scene" is not defined for Babylon texture ${Qr.name}!`), (0 !== Qr.uAng || 0 !== Qr.vAng) && (TS.h.Warn(`${rr}: Texture ${Qr.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== Qr.uRotationCenter || 0 !== Qr.vRotatio … [truncated]
+         const Zr = {};
+         let Wr = !1;
+         if (0 === Qr.uOffset && 0 === Qr.vOffset || (Zr.offset = [Qr.uOffset, Qr.vOffset], Wr = !0), 1 === Qr.uScale && 1 === Qr.vScale || (Zr.scale = [Qr.uScale, Qr.vScale], Wr = !0), 0 !== Qr.wAng) {
+           if (0 !== Qr.uRotationCenter || 0 !== Qr.vRotationCenter) {
+             if (Qr.homogeneousRotationInUVTransform && Qr.uScale !== Qr.vScale) return void TS.h.Warn(`${rr}: Texture ${Qr.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${wa}.`);
+             TS.h.Warn(`${rr}: Texture ${Qr.name} with non-origin rotation center will be exported using an adjusted offset with ${wa}.`), Zr.offset = function(rr) {
+               const {
+                 uOffset: Sr,
+ ... (13 more added lines; see GitHub link above)
```

#### 170. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1966-L1975` → after: `L13641-L13652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13641-L13652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13641-L13652) · [Before (L1966-L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1966-L1975)

```diff
-       toString() {
-         return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
-       }
-       toArray() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         if (!RR) return this._m;
-         const GR = this._m;
-         for (let yR = 0; yR < 16; yR++) RR[JR + yR] = GR[yR];
-         return this
+     }
+     let Fa = !1;
+ 
+     function oa() {
+       Fa || (Fa = !0, RZ.RegisterExtension(wa, (() => new ca)))
+     }
+     oa();
+     var ba = Qr(41898);
+     const Ja = "KHR_texture_basisu";
+     class Da {
+       get wasUsed() {
+         return this._wasUsed
```

#### 171. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1977-L1978` → after: `L13654-L13665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13654-L13665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13654-L13665) · [Before (L1977-L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1977-L1978)

```diff
-       QtR() {
-         return this._m
+       constructor(rr) {
+         this.name = Ja, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = rr
+       }
+       dispose() {}
+       postExportTexture(rr, Sr) {
+         const Qr = this._exporter._textures[Sr.index],
+           Zr = Qr.source;
+         if (void 0 === Zr) return;
+         const Wr = this._exporter._images[Zr];
+         "image/ktx2" === (Wr.mimeType || (0, ba.g)(Wr.uri)) && (Qr.source = void 0, Qr.extensions || (Qr.extensions = {}), Qr.extensions[Ja] = {
+           source: Zr
+         }, this._wasUsed = !0)
```

#### 172. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1980-L1982` → after: `L13667-L13677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13667-L13677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13667-L13677) · [Before (L1980-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1980-L1982)

```diff
-       yK(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return aR.FromArrayToRef(RR, JR, this)
+     }
+     let da = !1;
+ 
+     function sa() {
+       da || (da = !0, RZ.RegisterExtension(Ja, (rr => new Da(rr))))
+     }
+     sa();
+     const ua = "EXT_texture_webp";
+     class rj {
+       get wasUsed() {
+         return this._wasUsed
```

#### 173. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1984-L1986` → after: `L13679-L13690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13679-L13690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13679-L13690) · [Before (L1984-L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1984-L1986)

```diff
-       VJR() {
-         for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
-         return aR.FromArrayToRef(JR, 0, this)
+       constructor(rr) {
+         this.name = ua, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = rr
+       }
+       dispose() {}
+       postExportTexture(rr, Sr) {
+         const Qr = this._exporter._textures[Sr.index],
+           Zr = Qr.source;
+         if (void 0 === Zr) return;
+         const Wr = this._exporter._images[Zr];
+         "image/webp" === (Wr.mimeType || (0, ba.g)(Wr.uri)) && (Qr.source = void 0, Qr.extensions || (Qr.extensions = {}), Qr.extensions[ua] = {
+           source: Zr
+         }, this._wasUsed = !0)
```

#### 174. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1988-L1991` → after: `L13692-L13702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13692-L13702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13692-L13702) · [Before (L1988-L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1988-L1991)

```diff
-       set() {
-         const RR = this._m;
-         for (let JR = 0; JR < 16; JR++) RR[JR] = JR < 0 || arguments.length <= JR ? void 0 : arguments[JR];
-         return this.markAsUpdated(), this
+     }
+     let Sj = !1;
+ 
+     function Qj() {
+       Sj || (Sj = !0, RZ.RegisterExtension(ua, (rr => new rj(rr))))
+     }
+     Qj();
+     const Zj = "EXT_texture_avif";
+     class Wj {
+       get wasUsed() {
+         return this._wasUsed
```

#### 175. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1993-L1996` → after: `L13704-L13715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13704-L13715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13704-L13715) · [Before (L1993-L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1993-L1996)

```diff
-       NRR(RR) {
-         const JR = this._m;
-         for (let GR = 0; GR < 16; GR++) JR[GR] = RR;
-         return this.markAsUpdated(), this
+       constructor(rr) {
+         this.name = Zj, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = rr
+       }
+       dispose() {}
+       postExportTexture(rr, Sr) {
+         const Qr = this._exporter._textures[Sr.index],
+           Zr = Qr.source;
+         if (void 0 === Zr) return;
+         const Wr = this._exporter._images[Zr];
+         "image/avif" === (Wr.mimeType || (0, ba.g)(Wr.uri)) && (Qr.source = void 0, Qr.extensions || (Qr.extensions = {}), Qr.extensions[Zj] = {
+           source: Zr
+         }, this._wasUsed = !0)
```

#### 176. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1998-L1999` → after: `L13717-L13791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13717-L13791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13717-L13791) · [Before (L1998-L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L1998-L1999)

```diff
-       invert() {
-         return this.invertToRef(this), this
+     }
+     let aj = !1;
+ 
+     function jj() {
+       aj || (aj = !0, RZ.RegisterExtension(Zj, (rr => new Wj(rr))))
+     }
+     jj();
+     class Ij {
+       static CreateSTL(rr) {
+         let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
+           Wr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           ar = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           jr = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           Ir = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+           fr = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+ ... (59 more added lines; see GitHub link above)
```

#### 177. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2001-L2002` → after: `L13793-L13813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13793-L13813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13793-L13813) · [Before (L2001-L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2001-L2002)

```diff
-       reset() {
-         return aR.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
+     }
+ 
+     function fj(rr, Sr) {
+       let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
+         Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       const Wr = [];
+       for (let ar = 0; ar < rr.length / Qr; ar++) {
+         const jr = rr[ar * Qr] * (Zr ? -1 : 1),
+           Ir = rr[ar * Qr + 1],
+           fr = rr[ar * Qr + 2];
+         Wr.push(`(${jr.toPrecision(Sr.precision)}, ${Ir.toPrecision(Sr.precision)}, ${fr.toPrecision(Sr.precision)})`)
+       }
+       return Wr.join(", ")
+     }
+ 
+     function Ej(rr, Sr) {
+ ... (5 more added lines; see GitHub link above)
```

#### 178. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2004-L2052` → after: `L13815-L13860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13815-L13860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13815-L13860) · [Before (L2004-L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2004-L2052)

```diff
-       add(RR) {
-         const JR = new aR;
-         return this.addToRef(RR, JR), JR
-       }
-       addToRef(RR, JR) {
-         const GR = this._m,
-           yR = JR._m,
-           tR = RR.m;
-         for (let uR = 0; uR < 16; uR++) yR[uR] = GR[uR] + tR[uR];
-         return JR.markAsUpdated(), JR
-       }
-       addToSelf(RR) {
-         const JR = this._m,
-           GR = RR.m;
-         return JR[0] += GR[0], JR[1] += GR[1], JR[2] += GR[2], JR[3] += GR[3], JR[4] += GR[4], JR[5] += GR[5], JR[6] += GR[6], JR[7] += GR[7], JR[8] += GR[8], JR[9] += GR[9], JR[10] += GR[10], JR[11] += GR[11], JR[12] += GR[12], JR[13] += GR[13], JR[14] += GR[14], JR[15] += GR[15 … [truncated]
-       }
- ... (33 more removed lines; see GitHub link above)
+       return Qr.join(", ")
+     }
+ 
+     function pj(rr, Sr, Qr, Zr) {
+       const Wr = rr.getVerticesData(pr.g.PositionKind),
+         ar = rr.getVerticesData(pr.g.NormalKind);
+       if (Wr && ar) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${Qr}"\n\t\tint[] faceVertexCounts = [${function(rr){const Sr=rr.yar()?.length?rr.getTotalIndices():rr.getTotalVertices();return Array(Sr/3).fill(3).join(", ")}(rr)}]\n\t\tint[] faceVer … [truncated]
+       n\ tcolor3f[] primvars: displayColor = [$ {
+         fj(Zr, Sr, Zr.length / rr.getTotalVertices())
+       }](\n\ t\ tinterpolation = "vertex"\
+         n\ t\ t)`),Qr}(rr,Sr)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
+     }
+ 
+     function xj(rr, Sr, Qr, Zr) {
+       return `\n        def "Geometry"\n        {\n        ${pj(rr,Sr,Qr,Zr)}\n        }\n        `
+     }
+ ... (30 more added lines; see GitHub link above)
```

#### 179. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2054-L2061` → after: `L13862-L13997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13862-L13997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13862-L13997) · [Before (L2054-L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2054-L2061)

```diff
-       subtractFromFloatsToRef() {
-         for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
-         const yR = JR.pop(),
-           tR = this._m,
-           uR = yR._m,
-           ZR = JR;
-         for (let qR = 0; qR < 16; qR++) uR[qR] = tR[qR] - ZR[qR];
-         return yR.markAsUpdated(), yR
+     }
+ 
+     function zj(rr) {
+       return `(${rr.x}, ${rr.y})`
+     }
+ 
+     function Yj(rr) {
+       return `(${rr.r}, ${rr.g}, ${rr.b})`
+     }
+ 
+     function nj(rr) {
+       return "image/jpeg" === rr || "image/png" === rr
+     }
+ 
+     function ej(rr, Sr, Qr, Wr, ar, jr) {
+       const Ir = rr.getInternalTexture().uniqueId + "_" + rr.invertY,
+ ... (120 more added lines; see GitHub link above)
```

#### 180. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2063-L2064` → after: `L13999-L14002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R13999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L13999-L14002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L13999-L14002) · [Before (L2063-L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2063-L2064)

```diff
-       invertToRef(RR) {
-         return !0 === this._isIdentity ? (aR.IdentityToRef(RR), RR) : ((0, iR.e)(this, RR.QtR()) ? RR.markAsUpdated() : RR.vN(this), RR)
+       return Sr.determinant() < 0 && Wr.Tools.Warn(`Mesh ${rr.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
+         matrix: Sr,
+         windingOrder: Zr === ar.d.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
+         convertToRightHanded: jr
```

#### 181. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2066-L2067` → after: `L14004-L14076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14004-L14076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14004-L14076) · [Before (L2066-L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2066-L2067)

```diff
-       addAtIndex(RR, JR) {
-         return this._m[RR] += JR, this.markAsUpdated(), this
+     }
+     async function Bj(rr, Sr, Qr) {
+       const ar = {
+         fflateUrl: "https://unpkg.com/fflate@0.8.2",
+         includeAnchoringProperties: !0,
+         anchoringType: "plane",
+         planeAnchoringAlignment: "horizontal",
+         modelFileName: "model.usda",
+         precision: 5,
+         exportCamera: !1,
+         cameraSensorWidth: 35,
+         ...Sr
+       };
+       "undefined" === typeof fflate && await Wr.Tools.LoadScriptAsync(ar.fflateUrl);
+       const jr = {};
+       jr[ar.modelFileName] = null;
+ ... (57 more added lines; see GitHub link above)
```

#### 182. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2069-L2070` → after: `L14078-L14092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14078-L14092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14078-L14092) · [Before (L2069-L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2069-L2070)

```diff
-       multiplyAtIndex(RR, JR) {
-         return this._m[RR] *= JR, this.markAsUpdated(), this
+       let pr = 0;
+       for (const Zr in jr) {
+         const rr = jr[Zr];
+         if (!rr) continue;
+         pr += 34 + Zr.length;
+         const Sr = 63 & pr;
+         if (4 !== Sr) {
+           const Qr = new Uint8Array(64 - Sr);
+           jr[Zr] = [rr, {
+             extra: {
+               12345: Qr
+             }
+           }]
+         }
+         pr = rr.length
```

#### 183. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2072-L2073` → after: `L14094-L14143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14094-L14143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14094-L14143) · [Before (L2072-L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2072-L2073)

```diff
-       setTranslationFromFloats(RR, JR, GR) {
-         return this._m[12] = RR, this._m[13] = JR, this._m[14] = GR, this.markAsUpdated(), this
+       return fflate.zipSync(jr, {
+         level: 0
+       })
+     }
+     var Tj = Qr(42961);
+     class vj {
+       static Export(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
+           Qr = arguments.length > 2 ? arguments[2] : void 0;
+         if (!rr || 0 === rr.bones.length) throw new Error("Invalid or empty skeleton provided");
+         let Zr = Sr;
+         Sr && 0 !== Sr.length || (Zr = rr.animations.map((rr => rr.name)));
+         let Wr = null;
+         for (const Er of Zr) {
+           const Sr = rr.getAnimationRange(Er);
+           Sr && (Wr = Wr ? new Tj.b("animation-range", Math.min(Wr.from, Sr.from), Math.max(Wr.to, Sr.to)) : Sr)
+ ... (34 more added lines; see GitHub link above)
```

#### 184. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2075-L2076` → after: `L14145-L14162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14145-L14162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14145-L14162) · [Before (L2075-L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2075-L2076)

```diff
-       addTranslationFromFloats(RR, JR, GR) {
-         return this._m[12] += RR, this._m[13] += JR, this._m[14] += GR, this.markAsUpdated(), this
+       static _ExportHierarchy(rr, Sr) {
+         let Qr = "";
+         const Zr = "    ".repeat(Sr);
+         for (const Wr of rr) {
+           const rr = Wr.bone;
+           if (this._IsEndSite(Wr)) {
+             Qr += `${Zr}End Site\n`, Qr += `${Zr}{\n`;
+             const Sr = this._GetBoneOffset(rr);
+             Qr += `${Zr}    OFFSET ${Sr.x.toFixed(6)} ${Sr.y.toFixed(6)} ${Sr.z.toFixed(6)}\n`, Qr += `${Zr}}\n`
+           } else {
+             Qr += `${0===Sr?"ROOT":`${Zr}JOINT`} ${rr.name}\n`, Qr += `${Zr}{\n`;
+             const ar = this._GetBoneOffset(rr);
+             Qr += `${Zr}    OFFSET ${ar.x.toFixed(6)} ${ar.y.toFixed(6)} ${ar.z.toFixed(6)}\n`;
+             const jr = [];
+             Wr.hasPositionChannels && jr.push("Xposition", "Yposition", "Zposition"), Wr.hasRotationChannels && jr.push("Zrotation", "Xrotation", "Yrotation"), jr.length > 0 && (Qr += `${Zr}    CHANNELS ${jr.length} ${jr.join(" ")}\n`), Wr.children.length > 0 && (Qr += this._Expo … [truncated]
+           }
+ ... (2 more added lines; see GitHub link above)
```

#### 185. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2078-L2079` → after: `L14164-L14165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14164-L14165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14164-L14165) · [Before (L2078-L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2078-L2079)

```diff
-       setTranslation(RR) {
-         return this.setTranslationFromFloats(RR._x, RR._y, RR._z)
+       static _IsEndSite(rr) {
+         return 0 === rr.children.length
```

#### 186. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2081-L2082` → after: `L14167-L14173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14167-L14173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14167-L14173) · [Before (L2081-L2082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2081-L2082)

```diff
-       getTranslation() {
-         return new wR(this._m[12], this._m[13], this._m[14])
+       static _GetBoneOffset(rr) {
+         try {
+           if (!rr.getParent()) return rr.getRestMatrix().getTranslation();
+           return rr.getLocalMatrix().getTranslation()
+         } catch (Sr) {
+           return Zr.kU.Zero()
+         }
```

#### 187. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2084-L2085` → after: `L14175-L14181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14175-L14181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14175-L14181) · [Before (L2084-L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2084-L2085)

```diff
-       getTranslationToRef(RR) {
-         return RR.x = this._m[12], RR.y = this._m[13], RR.z = this._m[14], RR
+       static _ExportMotionData(rr, Sr, Qr, Zr) {
+         let Wr = "";
+         for (let ar = 0; ar < Sr; ar++) {
+           const Sr = [];
+           this._CollectFrameValues(rr, ar + Qr, Sr, Zr), Wr += Sr.map((rr => rr.toFixed(6))).join(" ") + "\n"
+         }
+         return Wr
```

#### 188. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2087-L2089` → after: `L14183-L14196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14183-L14196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14183-L14196) · [Before (L2087-L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2087-L2089)

```diff
-       removeRotationAndScaling() {
-         const RR = this.m;
-         return aR.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, RR[12], RR[13], RR[14], RR[15], this), this._updateIdentityStatus(0 === RR[12] && 0 === RR[13] && 0 === RR[14] && 1 === RR[15]), this
+       static _CollectFrameValues(rr, Sr, Qr, Zr) {
+         for (const Wr of rr)
+           if (!this._IsEndSite(Wr)) {
+             if (Wr.hasPositionChannels) {
+               const rr = this._GetPositionAtFrameIndex(Wr.positionKeys, Sr);
+               Qr.push(rr.x, rr.y, rr.z)
+             }
+             if (Wr.hasRotationChannels) {
+               const rr = this._GetRotationAtFrameIndex(Wr.rotationKeys, Sr),
+                 Zr = this._QuaternionToEuler(rr);
+               Qr.push(Zr.z, Zr.x, Zr.y)
+             }
+             Wr.children.length > 0 && this._CollectFrameValues(Wr.children, Sr, Qr, Zr)
+           }
```

#### 189. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2091-L2094` → after: `L14198-L14200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14198-L14200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14198-L14200) · [Before (L2091-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2091-L2094)

```diff
-       vN(RR) {
-         RR.copyToArray(this._m);
-         const JR = RR;
-         return this.updateFlag = JR.updateFlag, this._updateIdentityStatus(JR._isIdentity, JR._isIdentityDirty, JR._isIdentity3x2, JR._isIdentity3x2Dirty), this
+       static _GetPositionAtFrameIndex(rr, Sr) {
+         if (0 === rr.length) return Zr.kU.Zero();
+         return rr[Math.max(0, Math.min(Sr, rr.length - 1))].value.clone()
```

#### 190. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2096-L2098` → after: `L14202-L14204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14202-L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14202-L14204) · [Before (L2096-L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2096-L2098)

```diff
-       copyToArray(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return (0, iR.c)(this, RR, JR), this
+       static _GetRotationAtFrameIndex(rr, Sr) {
+         if (0 === rr.length) return Zr.Quaternion.Identity();
+         return rr[Math.max(0, Math.min(Sr, rr.length - 1))].value.clone()
```

#### 191. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2100-L2102` → after: `L14206-L14212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14206-L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14206-L14212) · [Before (L2100-L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2100-L2102)

```diff
-       multiply(RR) {
-         const JR = new aR;
-         return this.multiplyToRef(RR, JR), JR
+       static _QuaternionToEuler(rr) {
+         const Sr = new Zr.Matrix;
+         rr.toRotationMatrix(Sr);
+         const Qr = Sr.m;
+         let ar, jr, Ir;
+         const fr = Math.sqrt(Qr[0] * Qr[0] + Qr[1] * Qr[1]);
+         return fr > qQ.e ? (ar = Math.atan2(Qr[6], Qr[10]), jr = Math.atan2(-Qr[2], fr), Ir = Math.atan2(Qr[1], Qr[0])) : (ar = Math.atan2(-Qr[9], Qr[5]), jr = Math.atan2(-Qr[2], fr), Ir = 0), new Zr.kU(Wr.Tools.ToDegrees(ar), Wr.Tools.ToDegrees(jr), Wr.Tools.ToDegrees(Ir))
```

#### 192. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2104-L2108` → after: `L14214-L14228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14214-L14228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14214-L14228) · [Before (L2104-L2108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2104-L2108)

```diff
-       multiplyInPlace(RR) {
-         const JR = this._m,
-           GR = RR.m;
-         for (let yR = 0; yR < 16; yR++) JR[yR] *= GR[yR];
-         return this.markAsUpdated(), this
+     }
+ 
+     function Oj(rr) {
+       return "string" === typeof rr?.name
+     }
+     const Lj = Symbol("__xml:meta$__"),
+       lj = Symbol("__xml:name$__");
+ 
+     function Xj(rr, Sr) {
+       Object.prototype.hasOwnProperty.call(rr.metadata, Lj) || (rr.metadata[Lj] = []), rr.metadata[Lj].push(Sr)
+     }
+ 
+     function Pj(rr) {
+       return (Sr, Qr) => {
+         Sr[lj] = rr
```

#### 193. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2110-L2113` → after: `L14230-L14294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14230-L14294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14230-L14294) · [Before (L2110-L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2110-L2113)

```diff
-       multiplyByFloats() {
-         const RR = this._m;
-         for (let JR = 0; JR < 16; JR++) RR[JR] *= JR < 0 || arguments.length <= JR ? void 0 : arguments[JR];
-         return this.markAsUpdated(), this
+     }
+ 
+     function Hj() {
+       return (rr, Sr) => Xj(Sr, {
+         kind: "none",
+         prop: String(Sr.name),
+         ignore: !0
+       })
+     }
+ 
+     function qj(rr) {
+       return (Sr, Qr) => Xj(Qr, {
+         kind: "attr",
+         prop: String(Qr.name),
+         ...rr
+       })
+ ... (49 more added lines; see GitHub link above)
```

#### 194. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2115-L2188` → after: `L14296-L14322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14296-L14322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14296-L14322) · [Before (L2115-L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2115-L2188)

```diff
-       multiplyByFloatsToRef() {
-         for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
-         const yR = JR.pop(),
-           tR = this._m,
-           uR = yR._m,
-           ZR = JR;
-         for (let qR = 0; qR < 16; qR++) uR[qR] = tR[qR] * ZR[qR];
-         return yR.markAsUpdated(), yR
-       }
-       multiplyToRef(RR, JR) {
-         return this._isIdentity ? (JR.vN(RR), JR) : RR._isIdentity ? (JR.vN(this), JR) : (this.multiplyToArray(RR, JR._m, 0), JR.markAsUpdated(), JR)
-       }
-       multiplyToArray(RR, JR, GR) {
-         return (0, iR.n)(this, RR, JR, GR), this
-       }
-       divide(RR) {
- ... (58 more removed lines; see GitHub link above)
+     }
+ 
+     function kj(rr, Sr) {
+       return Sr ? `${Sr}:${rr}` : rr
+     }
+     const Aj = Object.freeze({
+         eps: 1e-6,
+         maxDecimalsCap: 15,
+         trimTrailingZeros: !0,
+         allowScientific: !1,
+         snapNearZero: !0
+       }),
+       Vj = Object.freeze({
+         number: Aj
+       });
+ 
+ ... (11 more added lines; see GitHub link above)
```

#### 195. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2190-L2196` → after: `L14324-L14328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14324-L14328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14324-L14328) · [Before (L2190-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2190-L2196)

```diff
-       equalsWithEpsilon(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const GR = this._m,
-           yR = RR.m;
-         for (let tR = 0; tR < 16; tR++)
-           if (!(0, qR.WithinEpsilon)(GR[tR], yR[tR], JR)) return !1;
-         return !0
+     }
+ 
+     function wj(rr) {
+       return {
+         number: ij(rr?.number)
```

#### 196. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2198-L2202` → after: `L14330-L14347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14330-L14347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14330-L14347) · [Before (L2198-L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2198-L2202)

```diff
-       JiR() {
-         const RR = this._m;
-         for (let JR = 0; JR < 16; JR++)
-           if (RR[JR] != (JR < 0 || arguments.length <= JR ? void 0 : arguments[JR])) return !1;
-         return !0
+     }
+     class cj {
+       constructor(rr) {
+         if (this.o = rr, this._o = rr.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
+       }
+       toString(rr) {
+         if (!Number.isFinite(rr)) throw new Error(`Cannot format non-finite number: ${rr}`);
+         const Sr = this._o,
+           Qr = this._clampInt(Sr.maxDecimalsCap ?? 15, 0, 20),
+           Zr = Sr.trimTrailingZeros ?? !0,
+           Wr = Sr.snapNearZero ?? !0,
+           ar = Sr.zeroThreshold ?? Sr.eps,
+           jr = 1 / Sr.eps;
+         let Ir, fr = Math.round(rr * jr) / jr;
+         if (Object.is(fr, -0) && (fr = 0), Wr && Math.abs(fr) <= ar && (fr = 0), Ir = void 0 !== Sr.fixedDecimals ? this._clampInt(Sr.fixedDecimals, 0, Qr) : this._clampInt(Math.ceil(-Math.log10(Sr.eps)), 0, Qr), Sr.allowScientific, 0 === Ir) return String(Math.trunc(fr));
+         let Er = fr.toFixed(Ir);
+ ... (2 more added lines; see GitHub link above)
```

#### 197. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2204-L2205` → after: `L14349-L14350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14349-L14350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14349-L14350) · [Before (L2204-L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2204-L2205)

```diff
-       floor() {
-         return this.floorToRef(new aR)
+       _clampInt(rr, Sr, Qr) {
+         return Number.isFinite(rr) ? (rr = Math.trunc(rr), Math.max(Sr, Math.min(Qr, rr))) : Sr
```

#### 198. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2207-L2211` → after: `L14352-L14371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14352-L14371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14352-L14371) · [Before (L2207-L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2207-L2211)

```diff
-       floorToRef(RR) {
-         const JR = this._m,
-           GR = RR._m;
-         for (let yR = 0; yR < 16; yR++) GR[yR] = Math.floor(JR[yR]);
-         return RR.markAsUpdated(), RR
+     }
+ 
+     function Fj(rr) {
+       return rr instanceof Date
+     }
+ 
+     function oj(rr) {
+       return "string" === typeof rr
+     }
+ 
+     function bj(rr) {
+       return "string" === typeof rr || "number" === typeof rr || "boolean" === typeof rr || "bigint" === typeof rr || Fj(rr)
+     }
+ 
+     function Jj(rr) {
+       return "number" === typeof rr || "boolean" === typeof rr || "bigint" === typeof rr || Fj(rr)
+ ... (4 more added lines; see GitHub link above)
```

#### 199. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2213-L2214` → after: `L14373-L14376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14373-L14376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14373-L14376) · [Before (L2213-L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2213-L2214)

```diff
-       fract() {
-         return this.fractToRef(new aR)
+       withNamespace() {
+         for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
+         for (const Zr of Sr) this._assignNamespace(Zr);
+         return this
```

#### 200. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2216-L2220` → after: `L14378-L14403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14378-L14403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14378-L14403) · [Before (L2216-L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2216-L2220)

```diff
-       fractToRef(RR) {
-         const JR = this._m,
-           GR = RR._m;
-         for (let yR = 0; yR < 16; yR++) GR[yR] = JR[yR] - Math.floor(JR[yR]);
-         return RR.markAsUpdated(), RR
+       serialize(rr, Sr) {
+         if (!(Sr = Sr ?? Cj(rr))) throw new Error("can not find name for given object");
+         const Qr = Gj(Sr);
+         Qr.ns && this._assignNamespace(Qr.ns, "xmlns"), this._gatherNamespaces(rr, new WeakSet);
+         const Zr = this._builder.ele(null, Qr.name);
+         for (const [Wr, ar] of Array.from(this._ns.entries())) Zr.att("xmlns", ar, Wr);
+         this._writeObjectContent(Zr, rr, (new WeakSet).add(rr)), this._builder.end()
+       }
+       _writeObject(rr, Sr, Qr) {
+         if (Qr.has(Sr)) return;
+         if (Qr.add(Sr), Array.isArray(Sr)) {
+           for (const Zr of Sr) Jj(Zr) || (oj(Zr) ? this._builder.text(Zr) : this._writeObject(rr, Zr, Qr));
+           return
+         }
+         const Zr = Cj(Sr);
+         if (!Zr) return;
+ ... (10 more added lines; see GitHub link above)
```

#### 201. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2222-L2224` → after: `L14405-L14441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14405-L14441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14405-L14441) · [Before (L2222-L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2222-L2224)

```diff
-       clone() {
-         const RR = new aR;
-         return RR.vN(this), RR
+       _writeObjectContent(rr, Sr, Qr) {
+         const Zr = gj(Sr) ?? [],
+           Wr = new Map;
+         for (const jr of Zr) {
+           const rr = Wr.get(jr.prop) ?? [];
+           rr.push(jr), Wr.set(jr.prop, rr)
+         }
+         const ar = Object.keys(Sr).sort(((rr, Sr) => {
+           const Qr = (Wr.get(rr) ?? []).some((rr => "attr" === rr.kind));
+           return Qr === (Wr.get(Sr) ?? []).some((rr => "attr" === rr.kind)) ? 0 : Qr ? -1 : 1
+         }));
+         for (const jr of ar) {
+           const Zr = Sr[jr];
+           if (null === Zr || void 0 === Zr) continue;
+           const ar = Wr.get(jr);
+           if (ar) {
+ ... (21 more added lines; see GitHub link above)
```

#### 202. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2226-L2227` → after: `L14443-L14478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14443-L14478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14443-L14478) · [Before (L2226-L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2226-L2227)

```diff
-       getClassName() {
-         return "Matrix"
+       _gatherNamespaces(rr, Sr) {
+         if (Sr.has(rr)) return;
+         if (Sr.add(rr), Array.isArray(rr)) {
+           for (const Qr of rr) bj(Qr) || this._gatherNamespaces(Qr, Sr);
+           return
+         }
+         const Qr = Cj(rr);
+         Qr && this._assignNamespace(Qr);
+         const Zr = gj(rr) ?? [],
+           Wr = new Map;
+         for (const jr of Zr) {
+           const rr = Wr.get(jr.prop) ?? [];
+           rr.push(jr), Wr.set(jr.prop, rr)
+         }
+         const ar = [];
+         for (const jr of Object.keys(rr)) {
+ ... (20 more added lines; see GitHub link above)
```

#### 203. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2229-L2231` → after: `L14480-L14489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14480-L14489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14480-L14489) · [Before (L2229-L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2229-L2231)

```diff
-       getHashCode() {
-         let RR = VR(this._m[0]);
-         for (let JR = 1; JR < 16; JR++) RR = 397 * RR ^ VR(this._m[JR]);
+       _buildNsPrefix(rr) {
+         let Sr, Qr = !1;
+         do {
+           Sr = "ns" + this._prefixCount++;
+           for (const rr of Array.from(this._ns.values()))
+             if (rr === Sr) {
+               Qr = !0;
+               break
+             }
+         } while (Qr);
```

#### 204. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2234-L2247` → after: `L14492-L14519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14492-L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14492-L14519) · [Before (L2234-L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2234-L2247)

```diff
-       decomposeToTransformNode(RR) {
-         return RR.rotationQuaternion = RR.rotationQuaternion || new eR, this.decompose(RR.MK, RR.rotationQuaternion, RR.position)
-       }
-       decompose(RR, JR, GR, yR) {
-         let tR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
-         if (this._isIdentity) return GR && GR.NRR(0), RR && RR.NRR(1), JR && JR.VJR(0, 0, 0, 1), !0;
-         const uR = this._m;
-         if (GR && GR.VJR(uR[12], uR[13], uR[14]), (RR = RR || LR.Fe[0]).x = Math.sqrt(uR[0] * uR[0] + uR[1] * uR[1] + uR[2] * uR[2]), RR.y = Math.sqrt(uR[4] * uR[4] + uR[5] * uR[5] + uR[6] * uR[6]), RR.z = Math.sqrt(uR[8] * uR[8] + uR[9] * uR[9] + uR[10] * uR[10]), yR) {
-           const JR = (tR ? yR.absoluteScaling.x : yR.MK.x) < 0 ? -1 : 1,
-             GR = (tR ? yR.absoluteScaling.y : yR.MK.y) < 0 ? -1 : 1,
-             uR = (tR ? yR.absoluteScaling.z : yR.MK.z) < 0 ? -1 : 1;
-           RR.x *= JR, RR.y *= GR, RR.z *= uR
-         } else this.determinant() <= 0 && (RR.y *= -1);
-         if (0 === RR._x || 0 === RR._y || 0 === RR._z) return JR && JR.VJR(0, 0, 0, 1), !1;
+     }
+     class dj {}
+     var sj;
+     dj.OpenTag = "<", dj.CloseTag = ">", dj.Slash = "/", dj.Question = "?", dj.Quote = '"', dj.Equal = "=", dj.Space = " ", dj.Semicolon = ":", dj.Dec = "<?xml", dj.Xml = "xml", dj.Xmlns = "xmlns", dj.Xsi = "xsi", dj.VersionKeyword = "version", dj.EncodingKeyword = "encoding", dj … [truncated]
+       function(rr) {
+         rr[rr.Declaration = 0] = "Declaration", rr[rr.Tag = 1] = "Tag", rr[rr.Attribute = 2] = "Attribute", rr[rr.Text = 3] = "Text"
+       }(sj || (sj = {}));
+     class uj {
+       constructor(rr) {
+         this._ctxStack = [], this._d = 0, this._w = rr
+       }
+       dec(rr, Sr, Qr) {
+         return this._w.write(dj.Dec), this._writeAttStr(dj.VersionKeyword, rr), Sr && this._writeAttStr(dj.EncodingKeyword, Sr), void 0 !== Qr && this._writeAttStr(dj.StandaloneKeyword, Qr ? "yes" : "no"), this._w.write(dj.Question, dj.CloseTag), this
+       }
+       att(rr, Sr, Qr) {
+         const Zr = this._peekContext();
+ ... (12 more added lines; see GitHub link above)
```

#### 205. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2249-L2252` → after: `L14521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14521) · [Before (L2249-L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2249-L2252)

```diff
-           const GR = 1 / RR._x,
-             yR = 1 / RR._y,
-             tR = 1 / RR._z;
-           aR.FromValuesToRef(uR[0] * GR, uR[1] * GR, uR[2] * GR, 0, uR[4] * yR, uR[5] * yR, uR[6] * yR, 0, uR[8] * tR, uR[9] * tR, uR[10] * tR, 0, 0, 0, 0, 1, LR.Matrix[0]), eR.FromRotationMatrixToRef(LR.Matrix[0], JR)
+           Wr = `${this._ensurePrefixDeclared(Zr,rr)}:${Sr}`
```

#### 206. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2254` → after: `L14523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14523) · [Before (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2254)

```diff
-         return !0
+         return Zr.lastToken = sj.Attribute, this._writeAttStr(Wr, Qr), this
```

#### 207. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2256-L2264` → after: `L14525-L14590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14525-L14590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14525-L14590) · [Before (L2256-L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2256-L2264)

```diff
-       getRow(RR) {
-         if (RR < 0 || RR > 3) return null;
-         const JR = 4 * RR;
-         return new rR(this._m[JR + 0], this._m[JR + 1], this._m[JR + 2], this._m[JR + 3])
-       }
-       getRowToRef(RR, JR) {
-         if (RR >= 0 && RR <= 3) {
-           const GR = 4 * RR;
-           JR.x = this._m[GR + 0], JR.y = this._m[GR + 1], JR.z = this._m[GR + 2], JR.w = this._m[GR + 3]
+       ele(rr, Sr) {
+         const Qr = this._peekContext();
+         Qr && this._closeOpenTagIfNeeded(Qr);
+         let Zr = Sr;
+         if (rr) {
+           Zr = `${this._lookupPrefix(rr)??rr}:${Sr}`
+         }
+         return this._pushContext(Zr, ++this._d), this._w.write(dj.OpenTag, Zr), this
+       }
+       text(rr) {
+         const Sr = this._peekContext();
+         if (!Sr) throw new Error("text() without open element");
+         return this._closeOpenTagIfNeeded(Sr), Sr.lastToken = sj.Text, this._w.write(this._escText(rr)), this
+       }
+       end() {
+         const rr = this._popContext();
+ ... (50 more added lines; see GitHub link above)
```

#### 208. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2291-L2293` → after: `L14593-L14598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14593-L14598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14593-L14598) · [Before (L2291-L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2291-L2293)

```diff
-       scaleAndAddToRef(RR, JR) {
-         for (let GR = 0; GR < 16; GR++) JR._m[GR] += this._m[GR] * RR;
-         return JR.markAsUpdated(), JR
+       _ensurePrefixDeclared(rr, Sr) {
+         const Qr = this._lookupPrefix(Sr);
+         if (Qr) return Qr;
+         if (rr.closed) throw new Error(`can not declare namespace after start tag closed for <${rr.name}>`);
+         const Zr = this._allocPrefix(rr);
+         return this._writeAttStr(`${dj.Xmlns}:${Zr}`, Sr), this._registerNamespace(rr, Zr, Sr), Zr
```

#### 209. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2295-L2298` → after: `L14600-L14601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14600-L14601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14600-L14601) · [Before (L2295-L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2295-L2298)

```diff
-       scaleInPlace(RR) {
-         const JR = this._m;
-         for (let GR = 0; GR < 16; GR++) JR[GR] *= RR;
-         return this.markAsUpdated(), this
+       _closeOpenTagIfNeeded(rr) {
+         rr.closed || (this._w.write(dj.CloseTag), rr.closed = !0)
```

#### 210. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2300-L2304` → after: `L14603-L14606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14603-L14606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14603-L14606) · [Before (L2300-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2300-L2304)

```diff
-       toNormalMatrix(RR) {
-         const JR = LR.Matrix[0];
-         this.invertToRef(JR), JR.transposeToRef(RR);
-         const GR = RR._m;
-         return aR.FromValuesToRef(GR[0], GR[1], GR[2], 0, GR[4], GR[5], GR[6], 0, GR[8], GR[9], GR[10], 0, 0, 0, 0, 1, RR), RR
+     }
+     uj.Context = class {
+       constructor(rr, Sr) {
+         this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = rr, this.depth = Sr
```

#### 211. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2306-L2308` → after: `L14608-L14611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14608-L14611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14608-L14611) · [Before (L2306-L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2306-L2308)

```diff
-       getRotationMatrix() {
-         const RR = new aR;
-         return this.getRotationMatrixToRef(RR), RR
+     };
+     class rI {
+       constructor() {
+         this.count = 0, this._chunks = []
```

#### 212. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2310-L2317` → after: `L14613-L14617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14613-L14617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14613-L14617) · [Before (L2310-L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2310-L2317)

```diff
-       getRotationMatrixToRef(RR) {
-         const JR = LR.Fe[0];
-         if (!this.decompose(JR)) return aR.IdentityToRef(RR), RR;
-         const GR = this._m,
-           yR = 1 / JR._x,
-           tR = 1 / JR._y,
-           uR = 1 / JR._z;
-         return aR.FromValuesToRef(GR[0] * yR, GR[1] * yR, GR[2] * yR, 0, GR[4] * tR, GR[5] * tR, GR[6] * tR, 0, GR[8] * uR, GR[9] * uR, GR[10] * uR, 0, 0, 0, 0, 1, RR), RR
+       write() {
+         for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
+         if (0 === Sr.length) return this;
+         const Zr = Sr.join("");
+         return this._chunks.push(Zr), this.count += Zr.length, this
```

#### 213. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2319-L2321` → after: `L14619-L14620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14619-L14620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14619-L14620) · [Before (L2319-L2321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2319-L2321)

```diff
-       toggleModelMatrixHandInPlace() {
-         const RR = this._m;
-         return RR[2] *= -1, RR[6] *= -1, RR[8] *= -1, RR[9] *= -1, RR[14] *= -1, this.markAsUpdated(), this
+       toString() {
+         return this._chunks.join("")
```

#### 214. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2323-L2325` → after: `L14622-L14623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14622-L14623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14622-L14623) · [Before (L2323-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2323-L2325)

```diff
-       toggleProjectionMatrixHandInPlace() {
-         const RR = this._m;
-         return RR[8] *= -1, RR[9] *= -1, RR[10] *= -1, RR[11] *= -1, this.markAsUpdated(), this
+       clear() {
+         this._chunks = [], this.count = 0
```

#### 215. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2327-L2328` → after: `L14625-L14629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14625-L14629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14625-L14629) · [Before (L2327-L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2327-L2328)

```diff
-       _convertProjectionToHalfZRangeInPlace() {
-         return this.multiplyToRef(UR, this), this
+     }
+     class SI {
+       constructor(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         this._sink = rr, this._opts = Sr, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
```

#### 216. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2330-L2333` → after: `L14631-L14638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14631-L14638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14631-L14638) · [Before (L2330-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2330-L2333)

```diff
-       static FromArray(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const GR = new aR;
-         return aR.FromArrayToRef(RR, JR, GR), GR
+       write() {
+         for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
+         if (0 === Sr.length) return this;
+         const Zr = Sr.join("");
+         if (0 === Zr.length) return this;
+         this._pending += Zr, this._pendingChars += Zr.length;
+         const Wr = this._opts.flushChars ?? 65536;
+         return this._pendingChars >= Wr && this.flush(), this
```

#### 217. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2335-L2337` → after: `L14640-L14643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14640-L14643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14640-L14643) · [Before (L2335-L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2335-L2337)

```diff
-       static FromArrayToRef(RR, JR, GR) {
-         for (let yR = 0; yR < 16; yR++) GR._m[yR] = RR[yR + JR];
-         return GR.markAsUpdated(), GR
+       flush() {
+         if (0 === this._pendingChars) return this;
+         const rr = this._encoder.encode(this._pending);
+         return this._sink.push(rr), this.count += rr.length, this._pending = "", this._pendingChars = 0, this
```

#### 218. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2339-L2340` → after: `L14645-L14646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14645-L14646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14645-L14646) · [Before (L2339-L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2339-L2340)

```diff
-       static FromFloat32ArrayToRefScaled(RR, JR, GR, yR) {
-         return yR._m[0] = RR[0 + JR] * GR, yR._m[1] = RR[1 + JR] * GR, yR._m[2] = RR[2 + JR] * GR, yR._m[3] = RR[3 + JR] * GR, yR._m[4] = RR[4 + JR] * GR, yR._m[5] = RR[5 + JR] * GR, yR._m[6] = RR[6 + JR] * GR, yR._m[7] = RR[7 + JR] * GR, yR._m[8] = RR[8 + JR] * GR, yR._m[9] = RR … [truncated]
+       finish() {
+         this.flush(), this._sink.push(new Uint8Array(0), !0)
```

#### 219. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2342-L2343` → after: `L14648-L14649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14648-L14649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14648-L14649) · [Before (L2342-L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2342-L2343)

```diff
-       static get IdentityReadOnly() {
-         return aR._IdentityReadOnly
+       clear() {
+         this._pending = "", this._pendingChars = 0, this.count = 0
```

#### 220. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2345-L2347` → after: `L14651-L14674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14651-L14674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14651-L14674) · [Before (L2345-L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2345-L2347)

```diff
-       static FromValuesToRef(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR) {
-         const nR = LR._m;
-         nR[0] = RR, nR[1] = JR, nR[2] = GR, nR[3] = yR, nR[4] = tR, nR[5] = uR, nR[6] = ZR, nR[7] = qR, nR[8] = iR, nR[9] = fR, nR[10] = VR, nR[11] = KR, nR[12] = wR, nR[13] = rR, nR[14] = eR, nR[15] = aR, LR.markAsUpdated()
+     }
+     const QI = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
+       ZI = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
+     var WI, aI;
+     ! function(rr) {
+       rr.micron = "micron", rr.millimeter = "millimeter", rr.centimeter = "centimeter", rr.inch = "inch", rr.foot = "foot", rr.meter = "meter"
+     }(WI || (WI = {})),
+     function(rr) {
+       rr.model = "model", rr.solidsupport = "solidsupport", rr.support = "support", rr.surface = "surface", rr.other = "other"
+     }(aI || (aI = {}));
+     const jI = "http://schemas.openxmlformats.org/package/2006/content-types",
+       II = "http://schemas.openxmlformats.org/package/2006/relationships";
+     var fI;
+     ! function(rr) {
+       rr.Relationships = "application/vnd.openxmlformats-package.relationships+xml", rr.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", rr.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", rr.Colors = "application/vnd.ms-package.3dmanufactur … [truncated]
+     }(fI || (fI = {}));
+ ... (8 more added lines; see GitHub link above)
```

#### 221. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2349-L2352` → after: `L14676-L14677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14676-L14677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14676-L14677) · [Before (L2349-L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2349-L2352)

```diff
-       static FromValues(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, LR) {
-         const nR = new aR,
-           UR = nR._m;
-         return UR[0] = RR, UR[1] = JR, UR[2] = GR, UR[3] = yR, UR[4] = tR, UR[5] = uR, UR[6] = ZR, UR[7] = qR, UR[8] = iR, UR[9] = fR, UR[10] = VR, UR[11] = KR, UR[12] = wR, UR[13] = rR, UR[14] = eR, UR[15] = LR, nR.markAsUpdated(), nR
+       static IsThreeDimModel(rr) {
+         return rr === UI.ThreeDimModel
```

#### 222. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2354-L2386` → after: `L14679-L14882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14679-L14882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14679-L14882) · [Before (L2354-L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2354-L2386)

```diff
-       static Compose(RR, JR, GR) {
-         const yR = new aR;
-         return aR.ComposeToRef(RR, JR, GR, yR), yR
-       }
-       static ComposeToRef(RR, JR, GR, yR) {
-         const tR = yR._m,
-           uR = JR._x,
-           ZR = JR._y,
-           qR = JR._z,
-           iR = JR._w,
-           fR = uR + uR,
-           VR = ZR + ZR,
-           KR = qR + qR,
-           wR = uR * fR,
-           rR = uR * VR,
-           eR = uR * KR,
- ... (17 more removed lines; see GitHub link above)
+     }
+     UI.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", UI.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", UI.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", UI.MustPre … [truncated]
+     let tI = (() => {
+         let rr, Sr, Qr = [Pj({
+             ns: jI,
+             name: "Types"
+           })],
+           Zr = [];
+         Sr = class {
+           constructor() {
+             this.items = []
+           }
+         };
+         return (0, vr.q)(Sr, "ThreeMfContentTypes"), (() => {
+           const Wr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+           (0, vr.k)(null, rr = {
+ ... (188 more added lines; see GitHub link above)
```

#### 223. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2389-L2390` → after: `L14887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14887) · [Before (L2389-L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2389-L2390)

```diff
-         const RR = aR.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
-         return RR._updateIdentityStatus(!1), RR
+         return new eI([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
```

#### 224. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2392-L2398` → after: `L14889-L14890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14889-L14890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14889-L14890) · [Before (L2392-L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2392-L2398)

```diff
-       static RotationX(RR) {
-         const JR = new aR;
-         return aR.RotationXToRef(RR, JR), JR
-       }
-       static Invert(RR) {
-         const JR = new aR;
-         return RR.invertToRef(JR), JR
+       constructor(rr) {
+         this.values = rr
```

#### 225. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2400-L2403` → after: `L14892-L14893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14892-L14893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14892-L14893) · [Before (L2400-L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2400-L2403)

```diff
-       static RotationXToRef(RR, JR) {
-         const GR = Math.sin(RR),
-           yR = Math.cos(RR);
-         return aR.FromValuesToRef(1, 0, 0, 0, 0, yR, GR, 0, 0, -GR, yR, 0, 0, 0, 0, 1, JR), JR._updateIdentityStatus(1 === yR && 0 === GR), JR
+       toString() {
+         return this.values.join(" ")
```

#### 226. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2405-L2407` → after: `L14895-L14898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14895-L14898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14895-L14898) · [Before (L2405-L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2405-L2407)

```diff
-       static RotationY(RR) {
-         const JR = new aR;
-         return aR.RotationYToRef(RR, JR), JR
+     }
+     class KI {
+       constructor(rr) {
+         this.o = rr, this._f = new cj(rr)
```

#### 227. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2409-L2412` → after: `L14900-L14901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14900-L14901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14900-L14901) · [Before (L2409-L2412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2409-L2412)

```diff
-       static RotationYToRef(RR, JR) {
-         const GR = Math.sin(RR),
-           yR = Math.cos(RR);
-         return aR.FromValuesToRef(yR, 0, -GR, 0, 0, 1, 0, 0, GR, 0, yR, 0, 0, 0, 0, 1, JR), JR._updateIdentityStatus(1 === yR && 0 === GR), JR
+       toString(rr) {
+         return rr.values.map((rr => this._f.toString(rr))).join(" ")
```

#### 228. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2414-L2416` → after: `L14903-L15871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14903-L15871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L14903-L15871) · [Before (L2414-L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2414-L2416)

```diff
-       static RotationZ(RR) {
-         const JR = new aR;
-         return aR.RotationZToRef(RR, JR), JR
+     }
+     let yI = (() => {
+         let rr, Sr, Qr, Zr, Wr, ar = [Pj({
+             ns: QI,
+             name: "model"
+           })],
+           jr = [],
+           Ir = [],
+           fr = [],
+           Er = [],
+           pr = [],
+           xr = [],
+           mr = [];
+         Sr = class {
+           constructor() {
+             this.unit = (0, vr.m)(this, Ir, WI.millimeter), this.requiredextensions = ((0, vr.m)(this, fr), (0, vr.m)(this, Er, void 0)), this.recommendedextensions = ((0, vr.m)(this, pr), (0, vr.m)(this, xr, void 0)), this.metadata = (0, vr.m)(this, mr)
+ ... (953 more added lines; see GitHub link above)
```

#### 229. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2418-L2421` → after: `L15873-L15874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15873-L15874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15873-L15874) · [Before (L2418-L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2418-L2421)

```diff
-       static RotationZToRef(RR, JR) {
-         const GR = Math.sin(RR),
-           yR = Math.cos(RR);
-         return aR.FromValuesToRef(yR, GR, 0, 0, -GR, yR, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, JR), JR._updateIdentityStatus(1 === yR && 0 === GR), JR
+       withName(rr) {
+         return this._object.name = rr, this
```

#### 230. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2423-L2425` → after: `L15876-L15877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15876-L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15876-L15877) · [Before (L2423-L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2423-L2425)

```diff
-       static RotationAxis(RR, JR) {
-         const GR = new aR;
-         return aR.RotationAxisToRef(RR, JR, GR), GR
+       withThumbnail(rr) {
+         return this._object.thumbnail = rr, this
```

#### 231. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2427-L2433` → after: `L15879-L15881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15879-L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15879-L15881) · [Before (L2427-L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2427-L2433)

```diff
-       static RotationAxisToRef(RR, JR, GR) {
-         const yR = Math.sin(-JR),
-           tR = Math.cos(-JR),
-           uR = 1 - tR;
-         RR = RR.normalizeToRef(LR.Fe[0]);
-         const ZR = GR._m;
-         return ZR[0] = RR._x * RR._x * uR + tR, ZR[1] = RR._x * RR._y * uR - RR._z * yR, ZR[2] = RR._x * RR._z * uR + RR._y * yR, ZR[3] = 0, ZR[4] = RR._y * RR._x * uR + RR._z * yR, ZR[5] = RR._y * RR._y * uR + tR, ZR[6] = RR._y * RR._z * uR - RR._x * yR, ZR[7] = 0, ZR[8] = RR._z … [truncated]
+       withProperty(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return this._object.pid = rr, this._object.id = Sr, this
```

#### 232. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2435-L2445` → after: `L15883-L15884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15883-L15884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15883-L15884) · [Before (L2435-L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2435-L2445)

```diff
-       static RotationAlignToRef(RR, JR, GR) {
-         let tR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         const uR = wR.Dot(JR, RR),
-           ZR = GR._m;
-         if (uR < -1 + yR.c) ZR[0] = -1, ZR[1] = 0, ZR[2] = 0, ZR[3] = 0, ZR[4] = 0, ZR[5] = tR ? 1 : -1, ZR[6] = 0, ZR[7] = 0, ZR[8] = 0, ZR[9] = 0, ZR[10] = tR ? -1 : 1, ZR[11] = 0;
-         else {
-           const GR = wR.Cross(JR, RR),
-             yR = 1 / (1 + uR);
-           ZR[0] = GR._x * GR._x * yR + uR, ZR[1] = GR._y * GR._x * yR - GR._z, ZR[2] = GR._z * GR._x * yR + GR._y, ZR[3] = 0, ZR[4] = GR._x * GR._y * yR + GR._z, ZR[5] = GR._y * GR._y * yR + uR, ZR[6] = GR._z * GR._y * yR - GR._x, ZR[7] = 0, ZR[8] = GR._x * GR._z * yR - GR._y, ZR … [truncated]
-         }
-         return ZR[12] = 0, ZR[13] = 0, ZR[14] = 0, ZR[15] = 1, GR.markAsUpdated(), GR
+       build() {
+         return this._object
```

#### 233. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2447-L2449` → after: `L15886-L15887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15886-L15887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15886-L15887) · [Before (L2447-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2447-L2449)

```diff
-       static RotationYawPitchRoll(RR, JR, GR) {
-         const yR = new aR;
-         return aR.RotationYawPitchRollToRef(RR, JR, GR, yR), yR
+       reset(rr, Sr) {
+         this._object = new OI(rr, Sr)
```

#### 234. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2451-L2452` → after: `L15889-L15892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15889-L15892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15889-L15892) · [Before (L2451-L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2451-L2452)

```diff
-       static RotationYawPitchRollToRef(RR, JR, GR, yR) {
-         return eR.RotationYawPitchRollToRef(RR, JR, GR, LR.Quaternion[0]), LR.Quaternion[0].toRotationMatrix(yR), yR
+     }
+     class AI extends kI {
+       constructor(rr) {
+         super(rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aI.model), this._object.content = new qI
```

#### 235. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2454-L2456` → after: `L15894-L15895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15894-L15895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15894-L15895) · [Before (L2454-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2454-L2456)

```diff
-       static Scaling(RR, JR, GR) {
-         const yR = new aR;
-         return aR.ScalingToRef(RR, JR, GR, yR), yR
+       withComponent(rr, Sr) {
+         return this._object.content.component.push(new RI(rr, Sr)), this
```

#### 236. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2458-L2459` → after: `L15897-L15900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15897-L15900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15897-L15900) · [Before (L2458-L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2458-L2459)

```diff
-       static ScalingToRef(RR, JR, GR, yR) {
-         return aR.FromValuesToRef(RR, 0, 0, 0, 0, JR, 0, 0, 0, 0, GR, 0, 0, 0, 0, 1, yR), yR._updateIdentityStatus(1 === RR && 1 === JR && 1 === GR), yR
+     }
+     class VI extends kI {
+       constructor(rr) {
+         super(rr, aI.model)
```

#### 237. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2461-L2463` → after: `L15902-L15903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15902-L15903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15902-L15903) · [Before (L2461-L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2461-L2463)

```diff
-       static Translation(RR, JR, GR) {
-         const yR = new aR;
-         return aR.TranslationToRef(RR, JR, GR, yR), yR
+       withPostProcessHandlers(rr, Sr) {
+         return this._vh = rr, this._th = Sr, this
```

#### 238. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2465-L2466` → after: `L15905-L15906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15905-L15906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15905-L15906) · [Before (L2465-L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2465-L2466)

```diff
-       static TranslationToRef(RR, JR, GR, yR) {
-         return aR.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, RR, JR, GR, 1, yR), yR._updateIdentityStatus(0 === RR && 0 === JR && 0 === GR), yR
+       withData(rr) {
+         return this._object.content = this._buildMesh(rr), this
```

#### 239. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2468-L2470` → after: `L15908-L15909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15908-L15909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15908-L15909) · [Before (L2468-L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2468-L2470)

```diff
-       static Lerp(RR, JR, GR) {
-         const yR = new aR;
-         return aR.LerpToRef(RR, JR, GR, yR), yR
+       withMaterial(rr, Sr) {
+         return this._object.pid = rr, this._object.pindex = Sr, this
```

#### 240. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2472-L2477` → after: `L15911-L15914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15911-L15914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15911-L15914) · [Before (L2472-L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2472-L2477)

```diff
-       static LerpToRef(RR, JR, GR, yR) {
-         const tR = yR._m,
-           uR = RR.m,
-           ZR = JR.m;
-         for (let qR = 0; qR < 16; qR++) tR[qR] = uR[qR] * (1 - GR) + ZR[qR] * GR;
-         return yR.markAsUpdated(), yR
+       _buildMesh(rr) {
+         const Sr = this._buildVertices(rr.positions),
+           Qr = this._buildTriangle(rr.indices);
+         return new LI(Sr, Qr)
```

#### 241. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2479-L2499` → after: `L15916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15916) · [Before (L2479-L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2479-L2499)

```diff
-       static DecomposeLerp(RR, JR, GR) {
-         const yR = new aR;
-         return aR.DecomposeLerpToRef(RR, JR, GR, yR), yR
-       }
-       static DecomposeLerpToRef(RR, JR, GR, yR) {
-         const tR = LR.Fe[0],
-           uR = LR.Quaternion[0],
-           ZR = LR.Fe[1];
-         RR.decompose(tR, uR, ZR);
-         const qR = LR.Fe[2],
-           iR = LR.Quaternion[1],
-           fR = LR.Fe[3];
-         JR.decompose(qR, iR, fR);
-         const VR = LR.Fe[4];
-         wR.LerpToRef(tR, qR, GR, VR);
-         const KR = LR.Quaternion[2];
- ... (5 more removed lines; see GitHub link above)
+       _buildVertices(rr) {
```

#### 242. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2501-L2539` → after: `L15918-L15926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15918-L15926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15918-L15926) · [Before (L2501-L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2501-L2539)

```diff
-         return aR.LookAtLHToRef(RR, JR, GR, yR), yR
-       }
-       static LookAtLHToRef(RR, JR, GR, yR) {
-         const tR = LR.Fe[0],
-           uR = LR.Fe[1],
-           ZR = LR.Fe[2];
-         JR.subtractToRef(RR, ZR), ZR.normalize(), wR.CrossToRef(GR, ZR, tR);
-         const qR = tR.lengthSquared();
-         0 === qR ? tR.x = 1 : tR.normalizeFromLength(Math.sqrt(qR)), wR.CrossToRef(ZR, tR, uR), uR.normalize();
-         const iR = -wR.Dot(tR, RR),
-           fR = -wR.Dot(uR, RR),
-           VR = -wR.Dot(ZR, RR);
-         return aR.FromValuesToRef(tR._x, uR._x, ZR._x, 0, tR._y, uR._y, ZR._y, 0, tR._z, uR._z, ZR._z, 0, iR, fR, VR, 1, yR), yR
-       }
-       static LookAtRH(RR, JR, GR) {
-         const yR = new aR;
- ... (23 more removed lines; see GitHub link above)
+         if (rr)
+           for (let Qr = 0; Qr < rr.length;) {
+             const Zr = rr[Qr++],
+               Wr = rr[Qr++],
+               ar = rr[Qr++];
+             let jr = new XI(Zr, Wr, ar);
+             this._vh && (jr = this._vh(jr)), Sr.vertex.push(jr)
+           }
+         return Sr
```

#### 243. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2541` → after: `L15928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15928) · [Before (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2541)

```diff
-       static LookDirectionRH(RR, JR) {
+       _buildTriangle(rr) {
```

#### 244. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2543` → after: `L15930-L15938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15930-L15938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15930-L15938) · [Before (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2543)

```diff
-         return aR.LookDirectionRHToRef(RR, JR, GR), GR
+         if (rr)
+           for (let Qr = 0; Qr < rr.length;) {
+             const Zr = rr[Qr++],
+               Wr = rr[Qr++],
+               ar = rr[Qr++];
+             let jr = new HI(Zr, Wr, ar);
+             this._th && (jr = this._th(jr)), Sr.triangle.push(jr)
+           }
+         return Sr
```

#### 245. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2545-L2547` → after: `L15940-L15943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15940-L15943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15940-L15943) · [Before (L2545-L2547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2545-L2547)

```diff
-       static LookDirectionRHToRef(RR, JR, GR) {
-         const yR = LR.Fe[2];
-         return wR.CrossToRef(JR, RR, yR), aR.FromValuesToRef(yR._x, yR._y, yR._z, 0, JR._x, JR._y, JR._z, 0, RR._x, RR._y, RR._z, 0, 0, 0, 0, 1, GR), GR
+     }
+     class iI {
+       constructor(rr) {
+         this._m = new gI(rr)
```

#### 246. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2549-L2551` → after: `L15945-L15948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15945-L15948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15945-L15948) · [Before (L2549-L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2549-L2551)

```diff
-       static OrthoLH(RR, JR, GR, yR, tR) {
-         const uR = new aR;
-         return aR.OrthoLHToRef(RR, JR, GR, yR, uR, tR), uR
+       withColor(rr, Sr) {
+         this._m.base = this._m.base ?? [];
+         let Qr = this._m.base.find((Sr => Sr.name.toLowerCase() === rr.toLowerCase()));
+         return Qr ? (Qr.displaycolor = this._rgbaToHex(Sr), this) : (Qr = new CI(rr, this._rgbaToHex(Sr)), this._m.base.push(Qr), this)
```

#### 247. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2553-L2558` → after: `L15950-L15951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15950-L15951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15950-L15951) · [Before (L2553-L2558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2553-L2558)

```diff
-       static OrthoLHToRef(RR, JR, GR, yR, tR, uR) {
-         const ZR = 2 / RR,
-           qR = 2 / JR,
-           iR = 2 / (yR - GR),
-           fR = -(yR + GR) / (yR - GR);
-         return aR.FromValuesToRef(ZR, 0, 0, 0, 0, qR, 0, 0, 0, 0, iR, 0, 0, 0, fR, 1, tR), uR && tR.multiplyToRef(UR, tR), tR._updateIdentityStatus(1 === ZR && 1 === qR && 1 === iR && 0 === fR), tR
+       build() {
+         return this._m
```

#### 248. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2560-L2580` → after: `L15953-L15961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15953-L15961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15953-L15961) · [Before (L2560-L2580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2560-L2580)

```diff
-       static OrthoOffCenterLH(RR, JR, GR, yR, tR, uR, ZR) {
-         const qR = new aR;
-         return aR.OrthoOffCenterLHToRef(RR, JR, GR, yR, tR, uR, qR, ZR), qR
-       }
-       static OrthoOffCenterLHToRef(RR, JR, GR, yR, tR, uR, ZR, qR) {
-         const iR = 2 / (JR - RR),
-           fR = 2 / (yR - GR),
-           VR = 2 / (uR - tR),
-           KR = -(uR + tR) / (uR - tR),
-           wR = (RR + JR) / (RR - JR),
-           rR = (yR + GR) / (GR - yR);
-         return aR.FromValuesToRef(iR, 0, 0, 0, 0, fR, 0, 0, 0, 0, VR, 0, wR, rR, KR, 1, ZR), qR && ZR.multiplyToRef(UR, ZR), ZR.markAsUpdated(), ZR
-       }
-       static ObliqueOffCenterLHToRef(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR) {
-         const KR = -ZR * Math.cos(qR),
-           wR = -ZR * Math.sin(qR);
- ... (5 more removed lines; see GitHub link above)
+       _rgbaToHex(rr) {
+         const Sr = rr => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(rr, 1 / 2.2)))),
+           Qr = Sr(rr.r).toString(16).padStart(2, "0").toUpperCase(),
+           Zr = Sr(rr.g).toString(16).padStart(2, "0").toUpperCase(),
+           Wr = Sr(rr.b).toString(16).padStart(2, "0").toUpperCase();
+         if ("number" === typeof rr.a) {
+           return `#${Qr}${Zr}${Wr}${Math.round(Math.min(255,Math.max(0,255*rr.a))).toString(16).padStart(2,"0").toUpperCase()}`
+         }
+         return `#${Qr}${Zr}${Wr}`
```

#### 249. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2582-L2583` → after: `L15963-L15966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15963-L15966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15963-L15966) · [Before (L2582-L2583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2582-L2583)

```diff
-       static OrthoOffCenterRHToRef(RR, JR, GR, yR, tR, uR, ZR, qR) {
-         return aR.OrthoOffCenterLHToRef(RR, JR, GR, yR, tR, uR, ZR, qR), ZR._m[10] *= -1, ZR
+     }
+     class wI {
+       constructor() {
+         this._model = new yI, this._objects = new Map
```

#### 250. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2585-L2588` → after: `L15968-L15969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15968-L15969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15968-L15969) · [Before (L2585-L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2585-L2588)

```diff
-       static ObliqueOffCenterRHToRef(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR) {
-         const KR = ZR * Math.cos(qR),
-           wR = ZR * Math.sin(qR);
-         return aR.TranslationToRef(0, 0, iR, LR.Matrix[1]), aR.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, KR, wR, 1, 0, 0, 0, 0, 1, LR.Matrix[0]), LR.Matrix[1].multiplyToRef(LR.Matrix[0], LR.Matrix[0]), aR.TranslationToRef(0, 0, -iR, LR.Matrix[1]), LR.Matrix[0].multiplyToRef(LR.Matr … [truncated]
+       withMetaData(rr, Sr, Qr, Zr) {
+         return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new BI(rr, Sr, Qr, Zr)), this
```

#### 251. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2590-L2604` → after: `L15971-L15972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15971-L15972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15971-L15972) · [Before (L2590-L2604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2590-L2604)

```diff
-       static PerspectiveLH(RR, JR, GR, yR, tR) {
-         let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-         const ZR = new aR,
-           qR = 2 * GR / RR,
-           iR = 2 * GR / JR,
-           fR = (yR + GR) / (yR - GR),
-           VR = -2 * yR * GR / (yR - GR),
-           KR = Math.tan(uR);
-         return aR.FromValuesToRef(qR, 0, 0, 0, 0, iR, 0, KR, 0, 0, fR, 1, 0, 0, VR, 0, ZR), tR && ZR.multiplyToRef(UR, ZR), ZR._updateIdentityStatus(!1), ZR
-       }
-       static PerspectiveFovLH(RR, JR, GR, yR, tR) {
-         let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
-           ZR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-         const qR = new aR;
-         return aR.PerspectiveFovLHToRef(RR, JR, GR, yR, qR, !0, tR, uR, ZR), qR
+       withMaterial(rr) {
+         return rr instanceof iI && (rr = rr.build()), rr && (this._model.resources = this._model.resources ?? new vI, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(rr)), this
```

#### 252. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2606-L2635` → after: `L15974-L15975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15974-L15975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15974-L15975) · [Before (L2606-L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2606-L2635)

```diff
-       static PerspectiveFovLHToRef(RR, JR, GR, yR, tR) {
-         let uR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           ZR = arguments.length > 6 ? arguments[6] : void 0,
-           qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
-           iR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
-         const fR = GR,
-           VR = yR,
-           KR = 1 / Math.tan(.5 * RR),
-           wR = uR ? KR / JR : KR,
-           rR = uR ? KR : KR * JR,
-           eR = iR && 0 === fR ? -1 : 0 !== VR ? (VR + fR) / (VR - fR) : 1,
-           LR = iR && 0 === fR ? 2 * VR : 0 !== VR ? -2 * VR * fR / (VR - fR) : -2 * fR,
-           nR = Math.tan(qR);
-         return aR.FromValuesToRef(wR, 0, 0, 0, 0, rR, 0, nR, 0, 0, eR, 1, 0, 0, LR, 0, tR), ZR && tR.multiplyToRef(UR, tR), tR._updateIdentityStatus(!1), tR
-       }
-       static PerspectiveFovReverseLHToRef(RR, JR, GR, yR, tR) {
- ... (14 more removed lines; see GitHub link above)
+       withMesh(rr) {
+         return rr instanceof VI && (rr = rr.build()), this._model.resources = this._model.resources ?? new vI, this._model.resources.object.push(rr), this
```

#### 253. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2637-L2669` → after: `L15977-L15978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15977-L15978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15977-L15978) · [Before (L2637-L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2637-L2669)

```diff
-       static PerspectiveFovRHToRef(RR, JR, GR, yR, tR) {
-         let uR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           ZR = arguments.length > 6 ? arguments[6] : void 0,
-           qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
-           iR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
-         const fR = GR,
-           VR = yR,
-           KR = 1 / Math.tan(.5 * RR),
-           wR = uR ? KR / JR : KR,
-           rR = uR ? KR : KR * JR,
-           eR = iR && 0 === fR ? 1 : 0 !== VR ? -(VR + fR) / (VR - fR) : -1,
-           LR = iR && 0 === fR ? 2 * VR : 0 !== VR ? -2 * VR * fR / (VR - fR) : -2 * fR,
-           nR = Math.tan(qR);
-         return aR.FromValuesToRef(wR, 0, 0, 0, 0, rR, 0, nR, 0, 0, eR, -1, 0, 0, LR, 0, tR), ZR && tR.multiplyToRef(UR, tR), tR._updateIdentityStatus(!1), tR
-       }
-       static PerspectiveFovReverseRHToRef(RR, JR, GR, yR, tR) {
- ... (17 more removed lines; see GitHub link above)
+       withComponents(rr) {
+         return rr instanceof AI && (rr = rr.build()), this._model.resources = this._model.resources ?? new vI, this._model.resources.object.push(rr), this
```

#### 254. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2671-L2674` → after: `L15980-L15981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15980-L15981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15980-L15981) · [Before (L2671-L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2671-L2674)

```diff
-       static GetAsMatrix2x2(RR) {
-         const JR = RR.m,
-           GR = [JR[0], JR[1], JR[4], JR[5]];
-         return uR.c.MatrixUse64Bits ? GR : new Float32Array(GR)
+       withBuild(rr, Sr, Qr) {
+         return this._model.build = this._model.build ?? new MI, this._model.build.item?.push(new GI(rr, Sr, Qr)), this
```

#### 255. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2676-L2679` → after: `L15983-L15984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15983-L15984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15983-L15984) · [Before (L2676-L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2676-L2679)

```diff
-       static GetAsMatrix3x3(RR) {
-         const JR = RR.m,
-           GR = [JR[0], JR[1], JR[2], JR[4], JR[5], JR[6], JR[8], JR[9], JR[10]];
-         return uR.c.MatrixUse64Bits ? GR : new Float32Array(GR)
+       withUnit(rr) {
+         return this._model.unit = rr, this
```

#### 256. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2681-L2683` → after: `L15986-L15987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15986-L15987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15986-L15987) · [Before (L2681-L2683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2681-L2683)

```diff
-       static Transpose(RR) {
-         const JR = new aR;
-         return aR.TransposeToRef(RR, JR), JR
+       reset() {
+         return this._model = new yI, this._objects = new Map, this
```

#### 257. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2685-L2778` → after: `L15989-L16015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15989-L16015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L15989-L16015) · [Before (L2685-L2778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2685-L2778)

```diff
-       static TransposeToRef(RR, JR) {
-         const GR = RR.m,
-           yR = GR[0],
-           tR = GR[4],
-           uR = GR[8],
-           ZR = GR[12],
-           qR = GR[1],
-           iR = GR[5],
-           fR = GR[9],
-           VR = GR[13],
-           KR = GR[2],
-           wR = GR[6],
-           rR = GR[10],
-           eR = GR[14],
-           aR = GR[3],
-           LR = GR[7],
- ... (78 more removed lines; see GitHub link above)
+       build() {
+         if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
+         if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
+         return this._model
+       }
+     }
+     wI.KnownMetaSet = new Set(yI.KnownMeta.map((rr => rr.toLowerCase())));
+     class cI {
+       withContentType(rr) {
+         this._cts || (this._cts = new tI);
+         const Sr = this._cts.items;
+         return Sr.some((Sr => Sr.ext === rr.ext && Sr.ct === rr.ct)) || Sr.push(rr), this
+       }
+       withRelationship(rr) {
+         this._rs || (this._rs = new zI);
+         const Sr = this._rs.items;
+ ... (11 more added lines; see GitHub link above)
```

#### 258. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2780` → after: `L16017-L16018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16017-L16018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L16017-L16018) · [Before (L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2780)

```diff
-       }), (0, fR.f)("BABYLON.Vector2", KR), (0, fR.f)("BABYLON.Vector3", wR), (0, fR.f)("BABYLON.Vector4", rR), (0, fR.f)("BABYLON.Matrix", aR))
+         return new nI(this._cts, this._rs, this._m)
+       }
```

#### 259. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2790-L2799` → after: `L16022-L16058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16022-L16058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L16022-L16058) · [Before (L2790-L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2790-L2799)

```diff
-         let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           GR = arguments.length > 2 ? arguments[2] : void 0,
-           yR = arguments.length > 3 ? arguments[3] : void 0;
-         this.initialize(RR, JR, GR, yR)
-       }
-       initialize(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           GR = arguments.length > 2 ? arguments[2] : void 0,
-           yR = arguments.length > 3 ? arguments[3] : void 0;
-         return this.mask = RR, this.skipNextObservers = JR, this.target = GR, this.currentTarget = yR, this
+         this._o = rr
+       }
+       get options() {
+         return this._o
+       }
+       async serializeAsync(rr) {
+         const Sr = await this.ensureZipLibReadyAsync();
+         if (!Sr) return;
+         const Qr = Sr.Zip,
+           Zr = Sr.ZipDeflate;
+         if (!Qr || !Zr) throw new Error("fflate Zip / ZipDeflate not available");
+         const Wr = function(rr, Sr, Qr) {
+           const Wr = new Zr(Sr, {
+             level: 6
+           });
+           rr.add(Wr);
+ ... (21 more added lines; see GitHub link above)
```

#### 260. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2803-L2809` → after: `L16062-L16072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16062-L16072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L16062-L16072) · [Before (L2803-L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2803-L2809)

```diff
-       constructor(RR, JR) {
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         this.callback = RR, this.mask = JR, this.scope = GR, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
-       }
-       remove() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._remove && this._remove(RR)
+       static async SerializeToMemoryAsync(rr) {
+         const Sr = new Array;
+         let Qr = 0;
+         for (var Zr = arguments.length, Wr = new Array(Zr > 1 ? Zr - 1 : 0), ar = 1; ar < Zr; ar++) Wr[ar - 1] = arguments[ar];
+         if (await rr.serializeAsync((function(rr, Zr, Wr) {
+             Sr.push(Zr), Qr += Zr.length
+           }), ...Wr), !Qr) return;
+         const jr = new Uint8Array(Qr);
+         let Ir = 0;
+         for (const fr of Sr) jr.set(fr, Ir), Ir += fr.length;
+         return jr
```

#### 261. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2813-L2842` → after: `L16078-L16082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16078-L16082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L16078-L16082) · [Before (L2813-L2842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2813-L2842)

```diff
-       static FromPromise(RR, JR) {
-         const GR = new ZR;
-         return RR.then((RR => {
-           GR.notifyObservers(RR)
-         })).catch((RR => {
-           if (!JR) throw RR;
-           JR.notifyObservers(RR)
-         })), GR
-       }
-       get observers() {
-         return this._observers
-       }
-       constructor(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this.notifyIfTriggered = JR, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new tR(0), RR && (this._onObserverAdded = RR)
-       }
- ... (14 more removed lines; see GitHub link above)
+       constructor() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
+           Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+         this._from = rr, this._to = Sr, this._step = Qr, this._i = rr
```

#### 262. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2844-L2845` → after: `L16084-L16087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16084-L16087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L16084-L16087) · [Before (L2844-L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2844-L2845)

```diff
-       addOnce(RR) {
-         return this.add(RR, void 0, void 0, void 0, !0)
+       next() {
+         if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
+         const rr = this._i;
+         return this._i += this._step, rr
```

#### 263. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2847-L2850` → after: `L16089-L16090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16089-L16090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L16089-L16090) · [Before (L2847-L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2847-L2850)

```diff
-       remove(RR) {
-         if (!RR) return !1;
-         RR._remove = null;
-         return -1 !== this._observers.indexOf(RR) && (this._deferUnregister(RR), !0)
+       reset() {
+         return this._i = this._from, this
```

#### 264. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2852-L2855` → after: `L16092-L16128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16092-L16128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L16092-L16128) · [Before (L2852-L2855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2852-L2855)

```diff
-       removeCallback(RR, JR) {
-         for (let GR = 0; GR < this._observers.length; GR++) {
-           const yR = this._observers[GR];
-           if (!yR._willBeUnregistered && (yR.callback === RR && (!JR || JR === yR.scope))) return this._deferUnregister(yR), !0
+     }
+     class DI extends FI {
+       constructor() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         super({
+           ...DI.DefaultOptions,
+           ...rr
+         })
+       }
+       toModel(rr) {
+         for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
+         Qr = Qr.filter((rr => rr instanceof EZ.d || rr instanceof Nr.e));
+         const Wr = new JI,
+           ar = rr,
+           jr = new Map,
+           Ir = this.options.exportInstances ? [] : null;
+ ... (21 more added lines; see GitHub link above)
```

#### 265. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2857-L2900` → after: `L16130-L16177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16130-L16177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L16130-L16177) · [Before (L2857-L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2857-L2900)

```diff
-         return !1
-       }
-       _deferUnregister(RR) {
-         RR._willBeUnregistered || (this._numObserversMarkedAsDeleted++, RR.unregisterOnNextCall = !1, RR._willBeUnregistered = !0, setTimeout((() => {
-           this._remove(RR)
-         }), 0))
-       }
-       _remove(RR) {
-         let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!RR) return !1;
-         const GR = this._observers.indexOf(RR);
-         return -1 !== GR && (JR && this._numObserversMarkedAsDeleted--, this._observers.splice(GR, 1), !0)
-       }
-       makeObserverTopPriority(RR) {
-         this._remove(RR, !1), this._observers.unshift(RR)
-       }
- ... (28 more removed lines; see GitHub link above)
+         if (Ir && Ir.length) {
+           const rr = this._groupBy(Ir, (rr => rr.Rar));
+           for (const [Sr, Qr] of Array.from(rr.entries()))
+             if (Qr && Qr.length)
+               for (let rr = 0; rr < Qr.length; rr++) {
+                 const Zr = Qr[rr].getWorldMatrix(),
+                   Wr = Sr.jT;
+                 for (let rr = 0; rr < Wr.length; rr++) {
+                   const Sr = Wr[rr],
+                     Qr = jr.get(Sr);
+                   Qr && ar.withBuild(Qr.id, this._handleBabylonTo3mfMatrixTransformToRef(Zr, eI.Zero()))
+                 }
+               }
+         }
+         return ar.build()
+       }
+ ... (32 more added lines; see GitHub link above)
```

#### 266. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2907-L2909` → after: `L16180-L16187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16180-L16187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L16180-L16187) · [Before (L2907-L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2907-L2909)

```diff
-       clone() {
-         const RR = new ZR;
-         return RR._observers = this._observers.slice(0), RR
+       _groupBy(rr, Sr) {
+         const Qr = new Map;
+         for (const Zr of rr) {
+           const rr = Sr(Zr),
+             Wr = Qr.get(rr);
+           Wr ? Wr.push(Zr) : Qr.set(rr, [Zr])
+         }
+         return Qr
```

#### 267. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L2911-L2915` → after: `L16189-L16191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16189-L16191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/263.js#L16189-L16191) · [Before (L2911-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/263.js#L2911-L2915)

```diff
-       hasSpecificMask() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
-         for (const JR of this._observers)
-           if (JR.mask & RR || JR.mask === RR) return !0;
-         return !1
+       _handleBabylonTo3mfMatrixTransformToRef(rr, Sr) {
+         const Qr = rr.multiplyToRef(DI._R_BJS_TO_3MF, Gr.d.Zero()).m;
+         return Sr.values = [Qr[0], Qr[1], Qr[2], Qr[4], Qr[5], Qr[6], Qr[8], Qr[9], Qr[10], Qr[12], Qr[13], Qr[14]], Sr
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/264.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/264.js` (153 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6)

#### 1. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4` → after: `L4-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L4-L37) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L4)

```diff
-   38331: (RR, JR, GR) => {
+   38587: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => Wr
+     });
+     var Zr = Qr(38595);
+     class Wr {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     Wr.Instances = [], Wr.OnEnginesDisposedObservable = new Zr.d, Wr._LastCreatedScene = null, Wr.UseFallbackTexture = !0, Wr.FallbackTexture = ""
+   },
+   38578: (rr, Sr, Qr) => {
+ ... (18 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L8-L9` → after: `L40-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L40-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L40-L44) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L8-L9)

```diff
-       g: () => aR,
-       j: () => rR
+       f: () => Er,
+       j: () => fr,
+       l: () => Zr,
+       p: () => ar,
+       s: () => jr
```

#### 3. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L11-L14` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L46) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L11-L14)

```diff
-     var yR = GR(38217),
-       tR = GR(38213),
-       uR = GR(38239),
-       ZR = GR(38253);
+     class Zr {}
```

#### 4. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L17` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L49) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L17)

```diff
-       return Math.pow(RR, tR.i)
+       rr.updateFlag = Zr._UpdateFlagSeed++
```

#### 5. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L20-L21` → after: `L52-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L52-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L52-L88) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L20-L21)

```diff
-     function iR(RR) {
-       return RR <= .04045 ? .0773993808 * RR : Math.pow(.947867299 * (RR + .055), 2.4)
+     function ar(rr, Sr, Qr) {
+       let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       const Wr = rr.OWr(),
+         ar = Sr.OWr(),
+         jr = Wr[0],
+         Ir = Wr[1],
+         fr = Wr[2],
+         Er = Wr[3],
+         pr = Wr[4],
+         xr = Wr[5],
+         mr = Wr[6],
+         Nr = Wr[7],
+         Ur = Wr[8],
+         tr = Wr[9],
+         hr = Wr[10],
+         zr = Wr[11],
+ ... (21 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L24-L25` → after: `L91-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L91-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L91-L93) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L24-L25)

```diff
-     function fR(RR) {
-       return Math.pow(RR, tR.e)
+     function jr(rr, Sr, Qr) {
+       let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       ar(rr, Sr, Qr.OWr(), Zr), Wr(Qr)
```

#### 7. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L28-L29` → after: `L96-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L96-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L96-L162) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L28-L29)

```diff
-     function VR(RR) {
-       return RR <= .0031308 ? 12.92 * RR : 1.055 * Math.pow(RR, .41666) - .055
+     function Ir(rr, Sr) {
+       let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const Zr = rr.OWr();
+       Sr[Qr] = Zr[0], Sr[Qr + 1] = Zr[1], Sr[Qr + 2] = Zr[2], Sr[Qr + 3] = Zr[3], Sr[Qr + 4] = Zr[4], Sr[Qr + 5] = Zr[5], Sr[Qr + 6] = Zr[6], Sr[Qr + 7] = Zr[7], Sr[Qr + 8] = Zr[8], Sr[Qr + 9] = Zr[9], Sr[Qr + 10] = Zr[10], Sr[Qr + 11] = Zr[11], Sr[Qr + 12] = Zr[12], Sr[Qr + 13]  … [truncated]
+     }
+ 
+     function fr(rr, Sr) {
+       const Qr = Er(rr, Sr.OWr());
+       return Qr && Wr(Sr), Qr
+     }
+ 
+     function Er(rr, Sr) {
+       const Qr = rr.OWr(),
+         Zr = Qr[0],
+         Wr = Qr[1],
+         ar = Qr[2],
+ ... (51 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L34-L36` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L187-L188) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L34-L36)

```diff
-           JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.r = RR, this.g = JR, this.b = GR
+           Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         this.x = rr, this.y = Sr
```

#### 9. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L39` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L191) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L39)

```diff
-         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
+         return `{X: ${this.x} Y: ${this.y}}`
```

#### 10. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L42` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L194) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L42)

```diff
-         return "Color3"
+         return "Vector2"
```

#### 11. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L45-L46` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L197-L198) · [Before (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L45-L46)

```diff
-         let RR = 255 * this.r | 0;
-         return RR = 397 * RR ^ 255 * this.g, RR = 397 * RR ^ 255 * this.b, RR
+         let rr = pr(this.x);
+         return rr = 397 * rr ^ pr(this.y), rr
```

#### 12. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L50` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L202) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L50)

```diff
-         return RR[JR] = this.r, RR[JR + 1] = this.g, RR[JR + 2] = this.b, this
+         return rr[Sr] = this.x, rr[Sr + 1] = this.y, this
```

#### 13. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L56-L58` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L208-L209) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L56-L58)

```diff
-       toColor4() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
-         return new wR(this.r, this.g, this.b, RR)
+       OWr() {
+         return [this.x, this.y]
```

#### 14. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L60-L61` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L211-L212) · [Before (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L60-L61)

```diff
-       QtR() {
-         return [this.r, this.g, this.b]
+       iH(rr) {
+         return this.x = rr.x, this.y = rr.y, this
```

#### 15. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L63-L64` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L214-L215) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L63-L64)

```diff
-       toLuminance() {
-         return .3 * this.r + .59 * this.g + .11 * this.b
+       Hrr(rr, Sr) {
+         return this.x = rr, this.y = Sr, this
```

#### 16. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L66-L67` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L217-L218) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L66-L67)

```diff
-       multiply(RR) {
-         return new KR(this.r * RR.r, this.g * RR.g, this.b * RR.b)
+       set(rr, Sr) {
+         return this.Hrr(rr, Sr)
```

#### 17. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L69-L70` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L220-L221) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L69-L70)

```diff
-       multiplyToRef(RR, JR) {
-         return JR.r = this.r * RR.r, JR.g = this.g * RR.g, JR.b = this.b * RR.b, JR
+       Srr(rr) {
+         return this.Hrr(rr, rr)
```

#### 18. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L72-L73` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L223-L224) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L72-L73)

```diff
-       multiplyInPlace(RR) {
-         return this.r *= RR.r, this.g *= RR.g, this.b *= RR.b, this
+       add(rr) {
+         return new xr(this.x + rr.x, this.y + rr.y)
```

#### 19. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L75-L76` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L226-L227) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L75-L76)

```diff
-       multiplyByFloats(RR, JR, GR) {
-         return new KR(this.r * RR, this.g * JR, this.b * GR)
+       addToRef(rr, Sr) {
+         return Sr.x = this.x + rr.x, Sr.y = this.y + rr.y, Sr
```

#### 20. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L78-L79` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L229-L230) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L78-L79)

```diff
-       divide(RR) {
-         throw new ReferenceError("Can not divide a color")
+       addInPlace(rr) {
+         return this.x += rr.x, this.y += rr.y, this
```

#### 21. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L81-L82` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L232-L233) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L81-L82)

```diff
-       divideToRef(RR, JR) {
-         throw new ReferenceError("Can not divide a color")
+       addInPlaceFromFloats(rr, Sr) {
+         return this.x += rr, this.y += Sr, this
```

#### 22. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L84-L85` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L235-L236) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L84-L85)

```diff
-       divideInPlace(RR) {
-         throw new ReferenceError("Can not divide a color")
+       addVector3(rr) {
+         return new xr(this.x + rr.x, this.y + rr.y)
```

#### 23. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L87-L88` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L238-L239) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L87-L88)

```diff
-       minimizeInPlace(RR) {
-         return this.minimizeInPlaceFromFloats(RR.r, RR.g, RR.b)
+       subtract(rr) {
+         return new xr(this.x - rr.x, this.y - rr.y)
```

#### 24. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L90-L91` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L241-L242) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L90-L91)

```diff
-       maximizeInPlace(RR) {
-         return this.maximizeInPlaceFromFloats(RR.r, RR.g, RR.b)
+       subtractToRef(rr, Sr) {
+         return Sr.x = this.x - rr.x, Sr.y = this.y - rr.y, Sr
```

#### 25. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L93-L94` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/264.js#L244-L245) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/264.js#L93-L94)

```diff
-       minimizeInPlaceFromFloats(RR, JR, GR) {
-         return this.r = Math.min(RR, this.r), this.g = Math.min(JR, this.g), this.b = Math.min(GR, this.b), this
+       iWr(rr) {
+         return this.x -= rr.x, this.y -= rr.y, this
```
