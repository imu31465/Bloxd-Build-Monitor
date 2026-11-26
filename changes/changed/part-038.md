# Changed — Bundle Modifications Report (Part 038 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `38 / 115` (**282** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 037](part-037.md) · [Part 039 →](part-039.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/292.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/292.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93)

#### 14. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L690-L691` → after: `L219-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L219-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L219-L223) · [Before (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L690-L691)

```diff
-       deleteThrottleMetadata(UU) {
-         delete this.throttleMetadata[UU]
+       static CreateRTexture(HH, BH, LH, SH) {
+         let hH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           tH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           zH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : AH.g.TRILINEAR_SAMPLINGMODE;
+         return new rH(HH, BH, LH, 6, SH, hH, tH, zH, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L693-L715` → after: `L225-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L225-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L225-L229) · [Before (L693-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L693-L715)

```diff
-     };
- 
-     function dX(UU) {
-       return new Headers({
-         Accept: "application/json",
-         "x-goog-api-key": UU
-       })
-     }
-     async function LX(UU) {
-       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WX,
-         zU = arguments.length > 2 ? arguments[2] : void 0;
-       const {
-         appId: cU,
-         apiKey: yU,
-         measurementId: QU
-       } = UU.options;
- ... (7 more removed lines; see GitHub link above)
+       static CreateRStorageTexture(HH, BH, LH, SH) {
+         let hH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           tH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           zH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : AH.g.TRILINEAR_SAMPLINGMODE;
+         return new rH(HH, BH, LH, 6, SH, hH, tH, zH, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L730-L758` → after: `L232-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L232-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L232-L261) · [Before (L730-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L730-L758)

```diff
-     async function eX(UU, XU, zU) {
-       let {
-         throttleEndTimeMillis: cU,
-         backoffCount: yU
-       } = XU, AU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WX;
-       var FU;
-       const {
-         appId: oU,
-         measurementId: DU
-       } = UU;
-       try {
-         await
-         function(UU, XU) {
-           return new Promise(((zU, cU) => {
-             const yU = Math.max(XU - Date.now(), 0),
-               QU = setTimeout(zU, yU);
- ... (13 more removed lines; see GitHub link above)
+   },
+   45102: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => AH.c
+     });
+     var AH = LH(41730);
+     (0, AH.d)()
+   },
+   45055: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => AH.e
+     });
+     var AH = LH(41754);
+     (0, AH.h)()
+   },
+   41754: (HH, BH, LH) => {
+ ... (14 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L760-L793` → after: `L263-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L263-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L263-L280) · [Before (L760-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L760-L793)

```diff
-       try {
-         const XU = await async function(UU) {
-           var XU;
-           const {
-             appId: zU,
-             apiKey: cU
-           } = UU, yU = {
-             method: "GET",
-             headers: dX(cU)
-           }, QU = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", zU), AU = await fetch(QU, yU);
-           if (200 !== AU.status && 304 !== AU.status) {
-             let UU = "";
-             try {
-               const zU = await AU.json();
-               (null === (XU = zU.error) || void 0 === XU ? void 0 : XU.message) && (UU = zU.error.message)
-             } catch (FU) {}
- ... (18 more removed lines; see GitHub link above)
+       constructor(HH) {
+         let BH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           AH = arguments.length > 5 ? arguments[5] : void 0,
+           rH = arguments.length > 6 ? arguments[6] : void 0,
+           tH = arguments.length > 7 ? arguments[7] : void 0;
+         super(HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, BH, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = AH, this.useVertexAlpha = rH, this.color = new  … [truncated]
+         const zH = {
+           attributes: [hH.i.PositionKind],
+           uniforms: ["world", "viewProjection"],
+           needAlphaBlending: !0,
+           defines: [],
+           useClipPlane: null,
+           shaderLanguage: 0
+         };
+         if (this.useVertexAlpha ? zH.defines.push("#define VERTEXALPHA") : zH.needAlphaBlending = !1, this.useVertexColor ? (zH.defines.push("#define VERTEXCOLOR"), zH.attributes.push(hH.i.ColorKind)) : (zH.uniforms.push("color"), this._color4 = new SH.g), tH) this.material = tH;
+         else {
+ ... (2 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L795` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L282-L283) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L795)

```diff
-           throw EU
+           const HH = new EH.r("colorShader", this.yN(), "color", zH, !1);
+           HH.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(HH)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L804-L807` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L286-L287) · [Before (L804-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L804-L807)

```diff
-     }
-     class CX {
-       constructor() {
-         this.listeners = []
+       getClassName() {
+         return "LinesMesh"
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L809-L810` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L289-L290) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L809-L810)

```diff
-       addEventListener(UU) {
-         this.listeners.push(UU)
+       get material() {
+         return this._internalAbstractMeshDataInfo._material
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L812-L813` → after: `L292-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L292-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L292-L296) · [Before (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L812-L813)

```diff
-       abort() {
-         this.listeners.forEach((UU => UU()))
+       set material(HH) {
+         const BH = this.material;
+         if (BH === HH) return;
+         const LH = BH && this._ownsMaterial;
+         this._ownsMaterial = !1, this._setInternalMaterial(HH), LH && BH?.dispose()
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L815-L855` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L298-L299) · [Before (L815-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L815-L855)

```diff
-     }
-     let wX, qX;
- 
-     function OX(UU) {
-       qX = UU
-     }
- 
-     function SX(UU) {
-       wX = UU
-     }
-     async function rX(UU, XU, zU, cU, yU, AU, FU) {
-       var oU;
-       const DU = LX(UU);
-       DU.then((XU => {
-         zU[XU.measurementId] = XU.appId, UU.options.measurementId && XU.measurementId !== UU.options.measurementId && gX.warn(`The measurement ID in the local Firebase config (${UU.options.measurementId}) does not match the measurement ID fetched from the server (${XU.measurement … [truncated]
-       })).catch((UU => gX.error(UU))), XU.push(DU);
- ... (25 more removed lines; see GitHub link above)
+       _setInternalMaterial(HH) {
+         this._setMaterial(HH), this.material && (this.material.fillMode = CH.c.LineListDrawMode, this.material.disableLighting = !0)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L857-L858` → after: `L301-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L301-L302) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L857-L858)

```diff
-       _delete() {
-         return delete fX[this.app.options.appId], Promise.resolve()
+       get checkCollisions() {
+         return !1
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L860-L881` → after: `L304-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L304-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L304-L314) · [Before (L860-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L860-L881)

```diff
-     }
-     let fX = {},
-       iX = [];
-     const HX = {};
-     let MX, vX, VX = "dataLayer",
-       sX = "gtag",
-       nX = !1;
- 
-     function mX(UU) {
-       if (nX) throw GX.create("already-initialized");
-       UU.dataLayerName && (VX = UU.dataLayerName), UU.gtagName && (sX = UU.gtagName)
-     }
- 
-     function lX(UU, XU, zU) {
-       ! function() {
-         const UU = [];
- ... (6 more removed lines; see GitHub link above)
+       set checkCollisions(HH) {}
+       _bind(HH, BH) {
+         if (!this._geometry) return this;
+         const LH = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
+         if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(BH, LH) : this._geometry._bind(BH, LH, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMate … [truncated]
+           const {
+             r: HH,
+             g: BH,
+             b: LH
+           } = this.color;
+           this._color4.set(HH, BH, LH, this.alpha), this.material.setColor4("color", this._color4)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L883-L888` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L316) · [Before (L883-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L883-L888)

```diff
-       }();
-       const cU = UU.options.appId;
-       if (!cU) throw GX.create("no-app-id");
-       if (!UU.options.apiKey) {
-         if (!UU.options.measurementId) throw GX.create("no-api-key");
-         gX.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${UU.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
+         return this
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L890-L911` → after: `L318-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L318-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L318-L321) · [Before (L890-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L890-L911)

```diff
-       if (null != fX[cU]) throw GX.create("already-exists", {
-         id: cU
-       });
-       if (!nX) {
-         ! function(UU) {
-           let XU = [];
-           Array.isArray(window[UU]) ? XU = window[UU] : window[UU] = XU
-         }(VX);
-         const {
-           wrappedGtag: UU,
-           gtagCore: XU
-         } = function(UU, XU, zU, cU, yU) {
-           let QU = function() {
-             for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
-             window[cU].push(arguments)
-           };
- ... (6 more removed lines; see GitHub link above)
+       _draw(HH, BH, LH) {
+         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
+         const AH = this.yN().Iu();
+         return this._unIndexed ? AH.drawArraysType(CH.c.LineListDrawMode, HH.verticesStart, HH.verticesCount, LH) : AH.drawElementsType(CH.c.LineListDrawMode, HH.indexStart, HH.indexCount, LH), this
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L913-L930` → after: `L323-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L323-L325) · [Before (L913-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L913-L930)

```diff
-       fX[cU] = rX(UU, iX, HX, XU, MX, VX, zU);
-       return new uX(UU)
-     }
- 
-     function xX() {
-       let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, cU.H)();
-       UU = (0, QU.R)(UU);
-       const XU = (0, cU.s)(UU, aX);
-       return XU.isInitialized() ? XU.getImmediate() : JX(UU)
-     }
- 
-     function JX(UU) {
-       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const zU = (0, cU.s)(UU, aX);
-       if (zU.isInitialized()) {
-         const UU = zU.getImmediate();
- ... (2 more removed lines; see GitHub link above)
+       dispose(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || BH) && this.material?.dispose(!1, !1, !0), super.dispose(HH)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L932-L943` → after: `L327-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L327-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L327-L334) · [Before (L932-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L932-L943)

```diff
-       return zU.initialize({
-         options: XU
-       })
-     }
-     async function jX() {
-       if ((0, QU.Z)()) return !1;
-       if (!(0, QU.m)()) return !1;
-       if (!(0, QU.fb)()) return !1;
-       try {
-         return await (0, QU.tb)()
-       } catch (UU) {
-         return !1
+       clone(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           LH = arguments.length > 2 ? arguments[2] : void 0;
+         if (BH && void 0 === BH._addToSceneRootNodes) {
+           const LH = BH;
+           return LH.source = this, new GH(HH, this.yN(), LH.parent, LH.source, LH.doNotCloneChildren)
+         }
+         return new GH(HH, this.yN(), BH, this, LH)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L945-L986` → after: `L336-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L336-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L336-L340) · [Before (L945-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L945-L986)

```diff
-     }
- 
-     function KX(UU, XU, zU) {
-       UU = (0, QU.R)(UU), async function(UU, XU, zU, cU) {
-         if (cU && cU.global) return UU("set", {
-           screen_name: zU
-         }), Promise.resolve();
-         UU("config", await XU, {
-           update: !0,
-           screen_name: zU
-         })
-       }(vX, fX[UU.app.options.appId], XU, zU).catch((UU => gX.error(UU)))
-     }
-     async function bX(UU) {
-       return UU = (0, QU.R)(UU), async function(UU, XU) {
-         const zU = await XU;
- ... (26 more removed lines; see GitHub link above)
+       createInstance(HH) {
+         const BH = new YH(HH, this);
+         if (this.kF) {
+           BH.kF = {};
+           for (const HH in this.kF) BH.kF[HH] = this.kF[HH]
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L988-L1003` → after: `L342-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L342-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L342-L350) · [Before (L988-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L988-L1003)

```diff
-         UU("config", await XU, {
-           update: !0,
-           user_properties: zU
-         })
-       }(vX, fX[UU.app.options.appId], XU, zU).catch((UU => gX.error(UU)))
-     }
- 
-     function Uz(UU, XU) {
-       UU = (0, QU.R)(UU), async function(UU, XU) {
-         const zU = await UU;
-         window[`ga-disable-${zU}`] = !XU
-       }(fX[UU.app.options.appId], XU).catch((UU => gX.error(UU)))
-     }
- 
-     function Xz(UU) {
-       vX ? vX("set", UU) : SX(UU)
+         return BH
+       }
+       serialize(HH) {
+         super.serialize(HH), HH.color = this.color.xrH(), HH.alpha = this.alpha
+       }
+       static Parse(HH, BH) {
+         const LH = new GH(HH.name, BH);
+         return LH.color = SH.c.FromArray(HH.color), LH.alpha = HH.alpha, LH
+       }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L1005-L1015` → after: `L352-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L352-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L352-L359) · [Before (L1005-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L1005-L1015)

```diff
- 
-     function zz(UU, XU, zU, cU) {
-       UU = (0, QU.R)(UU), async function(UU, XU, zU, cU, yU) {
-         if (yU && yU.global) UU("event", zU, cU);
-         else {
-           const yU = await XU;
-           UU("event", zU, Object.assign(Object.assign({}, cU), {
-             send_to: yU
-           }))
-         }
-       }(vX, fX[UU.app.options.appId], XU, zU, cU).catch((UU => gX.error(UU)))
+     GH.ForceGLSL = !1;
+     class YH extends zH.c {
+       constructor(HH, BH) {
+         super(HH, BH), this.intersectionThreshold = BH.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L1018-L1039` → after: `L363-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L363-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/292.js#L363-L365) · [Before (L1018-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/292.js#L1018-L1039)

```diff
-     function cz(UU) {
-       vX ? vX("consent", "update", UU) : OX(UU)
-     }
-     const yz = "@firebase/analytics",
-       Qz = "0.10.0";
-     (0, cU.t)(new AU.f(aX, ((UU, XU) => {
-       let {
-         options: zU
-       } = XU;
-       return lX(UU.getProvider("app").getImmediate(), UU.getProvider("installations-internal").getImmediate(), zU)
-     }), "PUBLIC")), (0, cU.t)(new AU.f("analytics-internal", (function(UU) {
-       try {
-         const XU = UU.getProvider(aX).getImmediate();
-         return {
-           logEvent: (UU, zU, cU) => zz(XU, UU, zU, cU)
-         }
- ... (6 more removed lines; see GitHub link above)
+     function QH() {
+       uH || (uH = !0, tH.c._LinesMeshParser = (HH, BH) => GH.Parse(HH, BH))
+     }(AH = GH.prototype).enableEdgesRendering ?? (AH.enableEdgesRendering = (0, XH.f)("LinesMesh", "enableEdgesRendering")), (rH = YH.prototype).enableEdgesRendering ?? (rH.enableEdgesRendering = (0, XH.f)("InstancedLinesMesh", "enableEdgesRendering"))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/293.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/293.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22)

#### 1. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L5-L3926` → after: `L4-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L4-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/293.js#L4-L239) · [Before (L5-L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/293.js#L5-L3926)

```diff
-     41615: (UU, XU, zU) => {
-         zU.r(XU), zU.d(XU, {
-           ActionCodeOperation: () => NU,
-           ActionCodeURL: () => bX,
-           AuthCredential: () => HX,
-           AuthErrorCodes: () => gU,
-           EmailAuthCredential: () => lX,
-           EmailAuthProvider: () => hX,
-           FacebookAuthProvider: () => cz,
-           FactorId: () => oU,
-           GithubAuthProvider: () => Qz,
-           GoogleAuthProvider: () => yz,
-           OAuthCredential: () => JX,
-           OAuthProvider: () => zz,
-           OperationType: () => YU,
-           PhoneAuthCredential: () => KX,
- ... (3906 more removed lines; see GitHub link above)
+   41769: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => VH,
+       f: () => TH,
+       j: () => vH,
+       n: () => PH,
+       q: () => xH,
+       r: () => MH
+     });
+     var AH = LH(41319),
+       rH = LH(41383),
+       SH = LH(37963),
+       hH = LH(41427),
+       tH = LH(41777),
+       zH = LH(41636),
+       CH = LH(41339),
+ ... (220 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L3928-L3952` → after: `L241-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L241-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/293.js#L241-L354) · [Before (L3928-L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/293.js#L3928-L3952)

```diff
-           vy = new Map([
-             ["identitytoolkit.googleapis.com", "p"],
-             ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
-             ["test-identitytoolkit.sandbox.googleapis.com", "t"]
-           ]);
- 
-         function Vy(UU) {
-           const XU = UU.config;
-           dU(XU.authDomain, UU, "auth-domain-config-required");
-           const zU = XU.emulator ? SU(XU, "emulator/auth/iframe") : `https://${UU.config.authDomain}/__/auth/iframe`,
-             QU = {
-               apiKey: XU.apiKey,
-               appName: UU.name,
-               v: yU.e
-             },
-             AU = vy.get(UU.config.apiHost);
- ... (9 more removed lines; see GitHub link above)
+           shaderLanguage: this._options.shaderLanguage,
+           extraInitializationsAsync: this._options.extraInitializationsAsync
+         }, tH), AH ? LH.setEffect(mH, kH, this._materialContext) : VH && VH.setEffect(mH, kH), this._onEffectCreatedObservable && (WH.effect = mH, WH.subMesh = LH ?? HH?.jU[0] ?? null, this._onEffectCreatedObservable.notifyObservers(WH))), VH._wasPreviouslyUsingInstances = !!BH,  … [truncated]
+       }
+       bindOnlyWorldMatrix(HH, BH) {
+         const LH = BH ?? this.getEffect();
+         if (!LH) return;
+         const AH = this._options.uniforms; - 1 !== AH.indexOf("world") && LH.setMatrix("world", HH);
+         const rH = this.yN(); - 1 !== AH.indexOf("worldView") && (HH.multiplyToRef(rH.getViewMatrix(), this._cachedWorldViewMatrix), LH.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== AH.indexOf("worldViewProjection") && (HH.multiplyToRef(rH.getTransformMatrix(), thi … [truncated]
+       }
+       bindForSubMesh(HH, BH, LH) {
+         this.bind(HH, BH, LH._drawWrapperOverride?.effect, LH)
+       }
+       bind(HH, BH, LH, AH) {
+         const rH = AH && this._storeEffectOnSubMeshes,
+           SH = LH ?? (rH ? AH.effect : this.getEffect());
+ ... (98 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L3954-L4026` → after: `L356-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L356-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/293.js#L356-L573) · [Before (L3954-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/293.js#L3954-L4026)

```diff
-         class ny {
-           constructor(UU) {
-             this.window = UU, this.associatedEvent = null
-           }
-           close() {
-             if (this.window) try {
-               this.window.close()
-             } catch (UU) {}
-           }
-         }
- 
-         function my(UU, XU, zU) {
-           let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
-             QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
-           const AU = Math.max((window.screen.availHeight - QU) / 2, 0).toString(),
-             FU = Math.max((window.screen.availWidth - yU) / 2, 0).toString();
- ... (57 more removed lines; see GitHub link above)
+         const LH = Object.keys(this._options);
+         for (const AH of LH) {
+           const HH = this._options[AH];
+           Array.isArray(HH) && (this._options[AH] = HH.slice(0))
+         }
+         this.stencil.copyTo(BH.stencil);
+         for (const AH in this._textures) BH.setTexture(AH, this._textures[AH]);
+         for (const AH in this._internalTextures) BH.setInternalTexture(AH, this._internalTextures[AH]);
+         for (const AH in this._textureArrays) BH.setTextureArray(AH, this._textureArrays[AH]);
+         for (const AH in this._externalTextures) BH.setExternalTexture(AH, this._externalTextures[AH]);
+         for (const AH in this._ints) BH.setInt(AH, this._ints[AH]);
+         for (const AH in this._uints) BH.setUInt(AH, this._uints[AH]);
+         for (const AH in this._floats) BH.setFloat(AH, this._floats[AH]);
+         for (const AH in this._floatsArrays) BH.setFloats(AH, this._floatsArrays[AH]);
+         for (const AH in this._colors3) BH.setColor3(AH, this._colors3[AH]);
+         for (const AH in this._colors3Arrays) BH._colors3Arrays[AH] = this._colors3Arrays[AH];
+ ... (202 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/294.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/294.js` (87 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79)

#### 1. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L4-L142` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L4-L6) · [Before (L4-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L4-L142)

```diff
-   41652: (UU, XU, zU) => {
-     zU.d(XU, {
-       $: () => Ac,
-       $b: () => qU,
-       $f: () => fz,
-       A: () => mU,
-       Ab: () => zz,
-       Af: () => Xc,
-       Bc: () => mX,
-       Bd: () => rU,
-       Be: () => nz,
-       Cb: () => Xz,
-       Cc: () => VU,
-       Cf: () => Tz,
-       D: () => xX,
-       E: () => NU,
- ... (123 more removed lines; see GitHub link above)
+   41790: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       default: () => fL
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L144-L784` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L8-L12) · [Before (L144-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L144-L784)

```diff
-     const cU = -2147483648,
-       yU = 12,
-       QU = 12,
-       AU = 4095,
-       FU = {
-         Lifeform: 1,
-         Throwable: 2,
-         Mesh: 3,
-         Audio: 4,
-         Item: 5
-       },
-       oU = {
-         Alive: 1,
-         Crouching: 2,
-         OnGround: 4,
-         InFluid: 8,
- ... (625 more removed lines; see GitHub link above)
+     var AH = LH(45),
+       rH = LH(1038),
+       SH = LH.n(rH);
+     const hH = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
+       tH = 3e3;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L786-L840` → after: `L14-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L14-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L14-L23) · [Before (L786-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L786-L840)

```diff
-     function oz(UU, XU, zU, cU, yU) {
-       var QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU, gU, kU, GU, BU, ZU, RU, PU, WU, dU, LU, eU, CU, wU;
-       switch (UU) {
-         case 32:
-           return 4 === cU && (null === (QU = yU.tickEnd) || void 0 === QU || QU.call(yU, gX.LY(XU, zU)), !0);
-         case 33:
-           return 12 === cU && (null === (AU = yU.entitySpawned) || void 0 === AU || AU.call(yU, kX.serverId(XU, zU), kX.index(XU, zU), kX.kind(XU, zU)), !0);
-         case 34:
-           return 12 === cU && (null === (FU = yU.entityDespawned) || void 0 === FU || FU.call(yU, kX.serverId(XU, zU), kX.index(XU, zU), kX.kind(XU, zU)), !0);
-         case 39:
-           return !(cU < 20) && (null === (oU = yU.changeBlockFail) || void 0 === oU || oU.call(yU, GX.pos(XU, zU, 0), GX.pos(XU, zU, 1), GX.pos(XU, zU, 2), GX.actual(XU, zU), GX.dataLen(XU, zU), zU + 20, cU - 20), !0);
-         case 46:
-           return 0 === cU && (null === (DU = yU.changeBlockFailEnd) || void 0 === DU || DU.call(yU), !0);
-         case 48:
-           return 20 === cU && (null === (EU = yU.inventoryEvent) || void 0 === EU || EU.call(yU, BX.what(XU, zU), BX.value(XU, zU), BX.pos(XU, zU, 0), BX.pos(XU, zU, 1), BX.pos(XU, zU, 2), BX.block(XU, zU)), !0);
-         case 49:
- ... (39 more removed lines; see GitHub link above)
+     function zH(HH) {
+       return HH.down && HH.inPlay && !HH.bound
+     }
+ 
+     function CH(HH, BH) {
+       let LH = 0,
+         AH = HH.length;
+       for (; LH < AH;) {
+         const rH = LH + AH >> 1;
+         HH[rH].atMs <= BH ? LH = rH + 1 : AH = rH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L899` → after: `L29-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L29-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L29-L33) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L899)

```diff
-       return Ez.buffer !== UU.buffer && (Ez = new Uint8Array(UU.buffer)), Ez
+       let {
+         code: BH,
+         unbound: LH
+       } = HH;
+       return `${BH}:${LH}`
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L902-L905` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L36-L37) · [Before (L902-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L902-L905)

```diff
-     function Nz(UU, XU, zU) {
-       const cU = UU.gY(66, XU, 4);
-       if (cU < 0) return !1;
-       return UU.view.setUint8(cU + 0, zU), !0
+     function XH(HH, BH) {
+       return BH[1] - HH[1] || (HH[0] < BH[0] ? -1 : 1)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L908-L911` → after: `L74-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L74-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L74-L79) · [Before (L908-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L908-L911)

```diff
-     function Iz(UU, XU, zU) {
-       const cU = UU.gY(67, XU, 4);
-       if (cU < 0) return !1;
-       return UU.view.setUint32(cU + 0, zU, !0), !0
+     function YH(HH) {
+       var BH;
+       const LH = GH[HH];
+       if (void 0 !== LH) return LH;
+       const AH = null !== (BH = /^(?:Key|Digit)(.)$/.exec(HH)) && void 0 !== BH ? BH : /^Numpad(.+)$/.exec(HH);
+       return null !== AH ? HH.startsWith("Numpad") ? `Num ${AH[1]}` : AH[1] : HH
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L914-L917` → after: `L86-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L86-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L86-L91) · [Before (L914-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L914-L917)

```diff
-     function pz(UU, XU, zU) {
-       const cU = UU.gY(68, XU, 4);
-       if (cU < 0) return !1;
-       return UU.view.setUint8(cU + 0, zU), !0
+     function xH(HH) {
+       const BH = Math.max(0, Math.floor(HH / 1e3)),
+         LH = Math.floor(BH / 3600),
+         AH = Math.floor(BH % 3600 / 60),
+         rH = String(BH % 60).padStart(2, "0");
+       return LH > 0 ? `${LH}:${String(AH).padStart(2,"0")}:${rH}` : `${AH}:${rH}`
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L920-L924` → after: `L94-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L94-L95) · [Before (L920-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L920-L924)

```diff
-     function az(UU, XU, zU, cU) {
-       const yU = UU.gY(69, XU, 4 + cU.length);
-       if (yU < 0) return !1;
-       const QU = UU.view;
-       return QU.setUint8(yU + 0, zU), Yz(QU).set(cU, QU.byteOffset + yU + 4), !0
+     function vH(HH, BH) {
+       return getComputedStyle(HH).getPropertyValue(BH).trim()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L927-L931` → after: `L98-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L98-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L98-L106) · [Before (L927-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L927-L931)

```diff
-     function tz(UU, XU, zU, cU, yU) {
-       const QU = UU.gY(128, XU, 4 + yU.length);
-       if (QU < 0) return !1;
-       const AU = UU.view;
-       return AU.setUint8(QU + 0, zU), AU.setUint16(QU + 2, cU, !0), Yz(AU).set(yU, AU.byteOffset + QU + 4), !0
+     function PH(HH, BH) {
+       switch (HH.kind) {
+         case "note":
+           return HH.label;
+         case "hidden":
+           return BH.tabHidden;
+         default:
+           return BH[HH.kind]
+       }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L934-L937` → after: `L109-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L109-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L109-L127) · [Before (L934-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L934-L937)

```diff
-     function gz(UU, XU, zU) {
-       const cU = UU.gY(131, XU, 4);
-       if (cU < 0) return !1;
-       return UU.view.setInt32(cU + 0, zU, !0), !0
+     function TH(HH) {
+       let {
+         draw: BH,
+         className: LH
+       } = HH;
+       const rH = (0, AH.useRef)(null);
+       return (0, AH.useEffect)((() => {
+         const HH = rH.current,
+           LH = HH.getContext("2d");
+         if (null === BH || null === LH) return;
+         const {
+           clientWidth: AH,
+           clientHeight: SH
+         } = HH, hH = window.devicePixelRatio;
+         HH.width = Math.round(AH * hH), HH.height = Math.round(SH * hH), LH.setTransform(hH, 0, 0, hH, 0, 0), BH(LH, AH, SH, HH)
+       }), [BH]), (0, WH.jsx)("canvas", {
+ ... (3 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L940-L943` → after: `L130-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L130-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L130-L350) · [Before (L940-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L940-L943)

```diff
-     function kz(UU, XU, zU) {
-       const cU = UU.gY(132, XU, 4);
-       if (cU < 0) return !1;
-       return UU.view.setUint32(cU + 0, zU, !0), !0
+     function UH(HH) {
+       let {
+         controller: BH,
+         frames: LH,
+         input: rH,
+         markers: SH,
+         inactiveRanges: hH,
+         videoGaps: CH,
+         labels: EH
+       } = HH;
+       const {
+         timeline: GH
+       } = BH, UH = (0, AH.useRef)(null), [VH, OH] = (0, AH.useState)(0), [bH, kH] = (0, AH.useState)(null), mH = (0, AH.useRef)(null), oH = Math.max(1, GH.durationMs);
+       ! function(HH, BH, LH) {
+         (0, AH.useEffect)((() => {
+           let AH = 0,
+ ... (205 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L946-L949` → after: `L364-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L364-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L364-L373) · [Before (L946-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L946-L949)

```diff
-     function Gz(UU, XU, zU) {
-       const cU = UU.gY(133, XU, 4);
-       if (cU < 0) return !1;
-       return UU.view.setUint32(cU + 0, zU, !0), !0
+     function eH(HH) {
+       const BH = HH.filter((HH => HH.endMs > HH.startMs)).sort(((HH, BH) => HH.startMs - BH.startMs)),
+         LH = [];
+       for (const AH of BH) {
+         const HH = LH.at(-1);
+         void 0 !== HH && AH.startMs <= HH.endMs ? HH.endMs = Math.max(HH.endMs, AH.endMs) : LH.push({
+           ...AH
+         })
+       }
+       return LH
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L951-L955` → after: `L375-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L375-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L375-L412) · [Before (L951-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L951-L955)

```diff
- 
-     function Bz(UU, XU, zU) {
-       const cU = UU.gY(144, XU, 4);
-       if (cU < 0) return !1;
-       return UU.view.setUint8(cU + 0, zU), !0
+     class qH {
+       constructor(HH) {
+         this.rW = void 0, this.durationMs = void 0, this.positionStarts = void 0, this.rW = eH(HH), this.positionStarts = [];
+         let BH = 0;
+         for (const LH of this.rW) this.positionStarts.push(BH), BH += LH.endMs - LH.startMs;
+         this.durationMs = BH
+       }
+       get startMs() {
+         var HH, BH;
+         return null !== (HH = null === (BH = this.rW[0]) || void 0 === BH ? void 0 : BH.startMs) && void 0 !== HH ? HH : 0
+       }
+       get endMs() {
+         var HH, BH;
+         return null !== (HH = null === (BH = this.rW.at(-1)) || void 0 === BH ? void 0 : BH.endMs) && void 0 !== HH ? HH : 0
+       }
+       toPosition(HH) {
+ ... (22 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L958-L962` → after: `L415-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L415-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L415-L416) · [Before (L958-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L958-L962)

```diff
-     function Zz(UU, XU, zU, cU, yU) {
-       const QU = UU.gY(145, XU, 12);
-       if (QU < 0) return !1;
-       const AU = UU.view;
-       return AU.setInt32(QU + 0, zU, !0), AU.setInt32(QU + 4, cU, !0), AU.setInt32(QU + 8, yU, !0), !0
+     function gH(HH) {
+       return [...HH].sort(((HH, BH) => HH.startMs - BH.startMs))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L965-L969` → after: `L419-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L419-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L419-L466) · [Before (L965-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L965-L969)

```diff
-     function Rz(UU, XU, zU, cU) {
-       const yU = UU.gY(256, XU, 4 + cU.length);
-       if (yU < 0) return !1;
-       const QU = UU.view;
-       return QU.setUint16(yU + 0, zU, !0), Yz(QU).set(cU, QU.byteOffset + yU + 4), !0
+     function NH(HH, BH) {
+       let LH = 1 / 0,
+         AH = -1 / 0;
+       const rH = HH => {
+         LH = Math.min(LH, HH), AH = Math.max(AH, HH)
+       };
+       for (const SH of [...HH.videoSegments, ...HH.telemetryChunks]) rH(SH.startMs), rH(SH.endMs);
+       for (const SH of HH.domEvents) rH(BH.toEpoch(SH.timestamp));
+       return LH < AH ? {
+         startMs: LH,
+         endMs: AH
+       } : {
+         startMs: 0,
+         endMs: 0
+       }
+     }
+ ... (32 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L973-L975` → after: `L511-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L511-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L511-L535) · [Before (L973-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L973-L975)

```diff
-       const cU = UU.gY(258, XU, 4);
-       if (cU < 0) return !1;
-       return UU.view.setUint8(cU + 0, zU), !0
+       return function(HH, BH) {
+         const LH = [];
+         for (const AH of HH) {
+           let HH = AH.startMs;
+           for (const rH of BH) rH.endMs <= HH || rH.startMs >= AH.endMs || (rH.startMs > HH && LH.push({
+             startMs: HH,
+             endMs: rH.startMs
+           }), HH = Math.max(HH, rH.endMs));
+           HH < AH.endMs && LH.push({
+             startMs: HH,
+             endMs: AH.endMs
+           })
+         }
+         return LH
+       }(function(HH) {
+         const BH = [];
+ ... (9 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L978-L985` → after: `L538-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L538-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L538-L540) · [Before (L978-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L978-L985)

```diff
-     function Wz(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
-       const DU = UU.gY(320, XU, 48 + oU.length);
-       if (DU < 0) return !1;
-       const EU = UU.view;
-       EU.setUint32(DU + 0, zU, !0), EU.setUint16(DU + 4, cU, !0), EU.setUint16(DU + 6, yU, !0), EU.setUint32(DU + 8, QU, !0);
-       for (let YU = 0; YU < 3; YU++) EU.setFloat64(DU + 12 + 8 * YU, AU[YU], !0);
-       for (let YU = 0; YU < 3; YU++) EU.setFloat32(DU + 36 + 4 * YU, FU[YU], !0);
-       return Yz(EU).set(oU, EU.byteOffset + DU + 48), !0
+     function sH(HH) {
+       var BH, LH, AH;
+       return HH.type === cH.b.IncrementalSnapshot ? FH.has(null !== (LH = null === (AH = HH.data) || void 0 === AH ? void 0 : AH.source) && void 0 !== LH ? LH : -1) : HH.type === cH.b.Custom && (null === (BH = HH.data) || void 0 === BH ? void 0 : BH.tag) === DH
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L988-L995` → after: `L543-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L543-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L543-L562) · [Before (L988-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L988-L995)

```diff
-     function dz(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
-       const DU = UU.gY(321, XU, 48 + oU.length);
-       if (DU < 0) return !1;
-       const EU = UU.view;
-       EU.setUint32(DU + 0, zU, !0), EU.setInt32(DU + 4, cU, !0), EU.setUint16(DU + 8, yU, !0), EU.setUint16(DU + 10, QU, !0);
-       for (let YU = 0; YU < 3; YU++) EU.setFloat64(DU + 12 + 8 * YU, AU[YU], !0);
-       for (let YU = 0; YU < 3; YU++) EU.setFloat32(DU + 36 + 4 * YU, FU[YU], !0);
-       return Yz(EU).set(oU, EU.byteOffset + DU + 48), !0
+     function JH(HH, BH) {
+       const LH = [];
+       for (const hH of HH)
+         if (hH.type === cH.b.Custom) {
+           var AH;
+           const HH = null === (AH = hH.data) || void 0 === AH ? void 0 : AH.tag,
+             rH = void 0 === HH ? void 0 : dH[HH];
+           void 0 !== rH && LH.push({
+             kind: rH,
+             atMs: BH.toEpoch(hH.timestamp)
+           })
+         } else if (hH.type === cH.b.Plugin) {
+         var rH, SH;
+         const HH = hH.data;
+         "rrweb/console@1" !== (null === HH || void 0 === HH ? void 0 : HH.plugin) || "error" !== (null === (rH = HH.payload) || void 0 === rH ? void 0 : rH.level) && "assert" !== (null === (SH = HH.payload) || void 0 === SH ? void 0 : SH.level) || LH.push({
+           kind: "error",
+ ... (4 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L997-L1005` → after: `L564-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L564-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L564-L597) · [Before (L997-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L997-L1005)

```diff
- 
-     function Lz(UU, XU, zU, cU, yU, QU, AU) {
-       const FU = UU.gY(322, XU, 44 + AU.length);
-       if (FU < 0) return !1;
-       const oU = UU.view;
-       oU.setUint32(FU + 0, zU, !0), oU.setUint32(FU + 4, cU, !0);
-       for (let DU = 0; DU < 3; DU++) oU.setFloat64(FU + 8 + 8 * DU, yU[DU], !0);
-       for (let DU = 0; DU < 3; DU++) oU.setFloat32(FU + 32 + 4 * DU, QU[DU], !0);
-       return Yz(oU).set(AU, oU.byteOffset + FU + 44), !0
+     const iH = 3e6;
+     class pH {
+       constructor(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
+           AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iH;
+         this.fetchUrls = HH, this.onUrls = BH, this.wallNowMs = LH, this.refreshableAfterMs = AH, this.lastRefreshWallMs = -1 / 0, this.urlsFetchedAtWallMs = void 0, this.inFlight = !1, this.timer = null, this.destroyed = !1, this.urlsFetchedAtWallMs = LH()
+       }
+       get refreshing() {
+         return this.inFlight
+       }
+       request() {
+         if (null === this.fetchUrls || this.destroyed || null !== this.timer || this.inFlight) return;
+         if (this.wallNowMs() - this.urlsFetchedAtWallMs < this.refreshableAfterMs) return;
+         const HH = this.lastRefreshWallMs + 6e4 - this.wallNowMs();
+         HH > 0 ? this.timer = setTimeout((() => {
+           this.timer = null, this.request()
+ ... (18 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1007-L1011` → after: `L599-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L599-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L599-L759) · [Before (L1007-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1007-L1011)

```diff
- 
-     function ez(UU, XU, zU) {
-       const cU = UU.gY(323, XU, 4);
-       if (cU < 0) return !1;
-       return UU.view.setUint32(cU + 0, zU, !0), !0
+     class yH {
+       constructor(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
+           AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iH;
+         this.source = HH, this.description = BH, this.wallNowMs = LH, this.refreshableAfterMs = AH, this.entries = new Map, this.unavailable = new Set, this.inFlight = !1, this.failedFetches = 0, this.retryAtWallMs = -1 / 0, this.destroyed = !1
+       }
+       reset(HH) {
+         this.entries.clear(), this.unavailable.clear(), this.failedFetches = 0, this.retryAtWallMs = -1 / 0;
+         const BH = this.wallNowMs();
+         for (const LH of HH) this.entries.set(LH.sequence, {
+           urls: LH,
+           fetchedAtWallMs: BH
+         })
+       }
+       get(HH) {
+         const BH = this.getFresh(HH);
+ ... (145 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1014-L1020` → after: `L762-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L762-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L762-L770) · [Before (L1014-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1014-L1020)

```diff
-     function Cz(UU, XU, zU, cU, yU, QU) {
-       const AU = UU.gY(324, XU, 32 + QU.length);
-       if (AU < 0) return !1;
-       const FU = UU.view;
-       FU.setUint32(AU + 0, zU, !0), FU.setUint32(AU + 4, cU, !0);
-       for (let oU = 0; oU < 3; oU++) FU.setFloat64(AU + 8 + 8 * oU, yU[oU], !0);
-       return Yz(FU).set(QU, FU.byteOffset + AU + 32), !0
+     function BB(HH) {
+       return {
+         inputRecorded: HH.some((HH => HH.keys.length > 0)),
+         frames: HH.flatMap((HH => HH.frames)),
+         states: HH.flatMap((HH => HH.states)),
+         events: HH.flatMap((HH => HH.events)),
+         actions: HH.flatMap((HH => HH.actions)),
+         keys: HH.flatMap((HH => HH.keys))
+       }
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1024` → after: `L774-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L774-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L774-L783) · [Before (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1024)

```diff
-       return !(UU.gY(325, XU, 0) < 0)
+       const {
+         actions: LH
+       } = HH;
+       return !HH.inputRecorded || LH.length > 0 && LH[0].atMs <= BH.startMs + 1 ? HH : {
+         ...HH,
+         actions: [{
+           atMs: BH.startMs,
+           bits: 0
+         }, ...LH]
+       }
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1027-L1031` → after: `L786-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L786-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L786-L796) · [Before (L1027-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1027-L1031)

```diff
-     function qz(UU, XU, zU, cU, yU, QU) {
-       const AU = UU.gY(384, XU, 16);
-       if (AU < 0) return !1;
-       const FU = UU.view;
-       return FU.setUint32(AU + 0, zU, !0), FU.setUint32(AU + 4, cU, !0), FU.setFloat32(AU + 8, yU, !0), FU.setFloat32(AU + 12, QU, !0), !0
+     function AB(HH) {
+       return HH.flatMap((HH => {
+         let {
+           sequence: BH,
+           url: LH
+         } = HH;
+         return void 0 === BH || void 0 === LH ? [] : [{
+           sequence: BH,
+           url: LH
+         }]
+       }))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1034-L1040` → after: `L799-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L799-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L799-L800) · [Before (L1034-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1034-L1040)

```diff
-     function Oz(UU, XU, zU, cU, yU, QU, AU) {
-       const FU = UU.gY(385, XU, 36 + AU.length);
-       if (FU < 0) return !1;
-       const oU = UU.view;
-       oU.setUint32(FU + 0, zU, !0), oU.setUint32(FU + 4, cU, !0);
-       for (let DU = 0; DU < 3; DU++) oU.setFloat64(FU + 8 + 8 * DU, yU[DU], !0);
-       return oU.setUint32(FU + 32, QU, !0), Yz(oU).set(AU, oU.byteOffset + FU + 36), !0
+     function rB(HH, BH) {
+       return HH < BH.startMs ? BH.startMs - HH : HH > BH.endMs ? 2 * (HH - BH.endMs) : 0
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1042-L1050` → after: `L802-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L802-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L802-L890) · [Before (L1042-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1042-L1050)

```diff
- 
-     function Sz(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
-       const DU = UU.gY(386, XU, 56 + oU.length);
-       if (DU < 0) return !1;
-       const EU = UU.view;
-       EU.setUint32(DU + 0, zU, !0), EU.setUint8(DU + 4, cU);
-       for (let YU = 0; YU < 4; YU++) EU.setFloat32(DU + 8 + 4 * YU, yU[YU], !0);
-       for (let YU = 0; YU < 3; YU++) EU.setFloat64(DU + 24 + 8 * YU, QU[YU], !0);
-       return EU.setUint32(DU + 48, AU, !0), EU.setUint32(DU + 52, FU, !0), Yz(EU).set(oU, EU.byteOffset + DU + 56), !0
+     class SB {
+       constructor(HH, BH, LH, AH) {
+         this.data = HH, this.domClock = BH, this.timeline = LH, this.options = AH, this.telemetry = void 0, this.activityTimes = void 0, this.markerList = [], this.inactiveRangeList = [], this.videoGapRanges = [], this.activityTimes = function(HH, BH) {
+           return HH.filter(sH).map((HH => BH.toEpoch(HH.timestamp)))
+         }(HH.domEvents, BH), this.telemetry = new HB(HH.telemetryChunks, AH.loadTelemetryChunk, (() => {
+           this.rebuild()
+         }), AH.onTelemetryFailed, AH.telemetryUrls), this.rebuild()
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

#### 26. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1053-L1062` → after: `L893-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L893-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L893-L894) · [Before (L1053-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1053-L1062)

```diff
-     function rz(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
-       const DU = UU.gY(387, XU, 56);
-       if (DU < 0) return !1;
-       const EU = UU.view;
-       EU.setUint32(DU + 0, zU, !0), EU.setUint16(DU + 4, cU, !0), EU.setUint8(DU + 6, yU);
-       for (let YU = 0; YU < 3; YU++) EU.setFloat64(DU + 8 + 8 * YU, QU[YU], !0);
-       for (let YU = 0; YU < 2; YU++) EU.setFloat32(DU + 32 + 4 * YU, AU[YU], !0);
-       EU.setFloat32(DU + 40, FU, !0);
-       for (let YU = 0; YU < 3; YU++) EU.setFloat32(DU + 44 + 4 * YU, oU[YU], !0);
-       return !0
+     function hB(HH) {
+       return BH => HH >= BH.startMs && HH < BH.endMs
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1064-L1068` → after: `L896-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L896-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L896-L935) · [Before (L1064-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1064-L1068)

```diff
- 
-     function uz(UU, XU, zU) {
-       const cU = UU.gY(388, XU, 4);
-       if (cU < 0) return !1;
-       return UU.view.setUint32(cU + 0, zU, !0), !0
+     class tB {
+       constructor() {
+         this.addedAt = new Map, this.settleQueued = !1, this.plugin = {
+           handler: (HH, BH, LH) => {
+             let {
+               replayer: AH
+             } = LH;
+             this.record(HH), BH && !this.settleQueued && (this.settleQueued = !0, queueMicrotask((() => {
+               this.settleQueued = !1, this.settle(AH)
+             })))
+           }
+         }
+       }
+       settle(HH) {
+         const BH = HH.iframe.contentDocument;
+         if (null === BH || void 0 === BH || !BH.documentElement.classList.contains("rrweb-paused")) return;
+ ... (24 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1071-L1075` → after: `L949-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L949-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L949-L962) · [Before (L1071-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1071-L1075)

```diff
-     function fz(UU, XU, zU, cU) {
-       const yU = UU.gY(389, XU, 8);
-       if (yU < 0) return !1;
-       const QU = UU.view;
-       return QU.setInt32(yU + 0, zU, !0), QU.setFloat32(yU + 4, cU, !0), !0
+     function vB(HH, BH) {
+       let {
+         hosts: LH
+       } = BH, AH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const rH = HH.trim();
+       if (/[\\\u0000-\u001f]/.test(rH)) return !1;
+       if (!WB.test(rH)) return !0;
+       let SH;
+       try {
+         SH = new URL(rH.startsWith("//") ? `https:${rH}` : rH)
+       } catch {
+         return !1
+       }
+       return "data:" === SH.protocol ? AH ? "text/css" !== rH.slice(5).split(/[,;]/)[0].trim().toLowerCase() : MB.test(rH) : "blob:" === SH.protocol || ("http:" === SH.protocol || "https:" === SH.protocol) && LH.some((HH => SH.hostname === HH || SH.hostname.endsWith(`.${HH}`)))
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1078-L1082` → after: `L965-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L965-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L965-L971) · [Before (L1078-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1078-L1082)

```diff
-     function iz(UU, XU, zU, cU) {
-       const yU = UU.gY(390, XU, 8);
-       if (yU < 0) return !1;
-       const QU = UU.view;
-       return QU.setInt32(yU + 0, zU, !0), QU.setFloat32(yU + 4, cU, !0), !0
+     function PB(HH, BH) {
+       return HH.replace(GB, (function(HH) {
+         for (var LH = arguments.length, AH = new Array(LH > 1 ? LH - 1 : 0), rH = 1; rH < LH; rH++) AH[rH - 1] = arguments[rH];
+         if (vB(AH.slice(0, 7).find((HH => "string" === typeof HH)), BH, !0)) return HH;
+         const SH = HH.slice(0, 4).toLowerCase();
+         return "url(" === SH ? `url("${xB}")` : "@imp" === SH ? `@import "${xB}"` : `"${xB}"`
+       }))
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1085-L1089` → after: `L974-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L974-L975) · [Before (L1085-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1085-L1089)

```diff
-     function Hz(UU, XU, zU, cU, yU, QU) {
-       const AU = UU.gY(391, XU, 12);
-       if (AU < 0) return !1;
-       const FU = UU.view;
-       return FU.setFloat32(AU + 0, zU, !0), FU.setFloat32(AU + 4, cU, !0), FU.setUint8(AU + 8, yU), FU.setUint8(AU + 9, QU), !0
+     function TB(HH) {
+       return QB.test(HH.replace(GB, '""'))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1092-L1095` → after: `L978-L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L978-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L978-L991) · [Before (L1092-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1092-L1095)

```diff
-     function Mz(UU, XU, zU) {
-       const cU = UU.gY(392, XU, 4);
-       if (cU < 0) return !1;
-       return UU.view.setUint32(cU + 0, zU, !0), !0
+     function UB(HH) {
+       let BH = "between";
+       for (let LH = 0; LH < HH.length; LH++) {
+         const AH = HH[LH];
+         if ("/" === AH && "*" === HH[LH + 1]) {
+           if (LH = HH.indexOf("*/", LH + 2), -1 === LH) return "open";
+           LH++, BH = "between"
+         } else if ('"' === AH || "'" === AH) {
+           for (LH++; LH < HH.length && HH[LH] !== AH && !/[\n\r\f]/.test(HH[LH]); LH++) "\\" === HH[LH] && LH++;
+           if (LH >= HH.length) return "open";
+           BH = "token"
+         } else "\\" === AH ? (LH++, BH = "token") : ";" === AH || "{" === AH || "}" === AH ? BH = "between" : /\s/.test(AH) || (BH = "token")
+       }
+       return BH
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1098-L1102` → after: `L994-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L994-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L994-L1001) · [Before (L1098-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1098-L1102)

```diff
-     function vz(UU, XU, zU, cU, yU) {
-       const QU = UU.gY(393, XU, 12);
-       if (QU < 0) return !1;
-       const AU = UU.view;
-       return AU.setUint32(QU + 0, zU, !0), AU.setUint16(QU + 4, cU, !0), AU.setFloat32(QU + 8, yU, !0), !0
+     function VB(HH, BH) {
+       const LH = PB(HH, BH);
+       if (TB(LH) || "open" === UB(LH)) return "";
+       if (!LH.includes("\\")) return LH;
+       const AH = function(HH) {
+         return HH.replace(uB, ((HH, BH, LH) => void 0 !== BH ? String.fromCodePoint(Math.min(parseInt(BH, 16), 1114111)) : null !== LH && void 0 !== LH ? LH : ""))
+       }(LH);
+       return PB(AH, BH) !== AH || TB(AH) ? "" : LH
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1105-L1113` → after: `L1004-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1004-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1004-L1006) · [Before (L1105-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1105-L1113)

```diff
-     function Vz(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU, YU) {
-       const NU = UU.gY(394, XU, 56 + YU.length);
-       if (NU < 0) return !1;
-       const IU = UU.view;
-       IU.setUint32(NU + 0, zU, !0), IU.setUint16(NU + 4, cU, !0), IU.setUint8(NU + 6, yU), IU.setUint8(NU + 7, QU);
-       for (let pU = 0; pU < 3; pU++) IU.setFloat64(NU + 8 + 8 * pU, AU[pU], !0);
-       IU.setFloat32(NU + 32, FU, !0), IU.setInt32(NU + 36, oU, !0);
-       for (let pU = 0; pU < 3; pU++) IU.setFloat32(NU + 40 + 4 * pU, DU[pU], !0);
-       return IU.setFloat32(NU + 52, EU, !0), Yz(IU).set(YU, IU.byteOffset + NU + 56), !0
+     function OB(HH, BH) {
+       const LH = YB.test(HH) ? VB(HH, BH) : HH;
+       return LH.split("/* rr_split */").every((HH => "between" === UB(HH))) ? LH : ""
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1117-L1119` → after: `L1010-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1010-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1010-L1039) · [Before (L1117-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1117-L1119)

```diff
-       const cU = UU.gY(398, XU, 4);
-       if (cU < 0) return !1;
-       return UU.view.setUint32(cU + 0, zU, !0), !0
+       if ("string" === typeof BH) {
+         const AH = HH.toLowerCase();
+         if (XB.has(AH)) return null;
+         if (CB.has(AH)) return function(HH, BH) {
+           return HH.split(",").every((HH => {
+             const LH = HH.trim().split(/\s+/)[0];
+             return void 0 === LH || "" === LH || vB(LH, BH)
+           }))
+         }(BH, LH) ? BH : null;
+         if (EB.has(AH)) {
+           return BH.split(";").every((HH => vB(HH, LH))) ? bB("", BH, LH) : null
+         }
+         return zB.has(AH) ? vB(BH, LH) ? BH : null : "_csstext" === AH ? OB(BH, LH) : YB.test(BH) ? VB(BH, LH) : BH
+       }
+       if (Array.isArray(BH)) return BH.map((HH => bB("", HH, LH)));
+       if (null !== BH && "object" === typeof BH) {
+ ... (14 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1122-L1126` → after: `L1042-L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1042-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1042-L1054) · [Before (L1122-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1122-L1126)

```diff
-     function nz(UU, XU, zU, cU, yU) {
-       const QU = UU.gY(399, XU, 12);
-       if (QU < 0) return !1;
-       const AU = UU.view;
-       return AU.setUint32(QU + 0, zU, !0), AU.setUint32(QU + 4, cU, !0), AU.setFloat32(QU + 8, yU, !0), !0
+     function kB(HH, BH) {
+       const LH = (HH, AH) => {
+         if (null === HH || "object" !== typeof HH) return;
+         const rH = HH;
+         if (BH(rH, AH), Array.isArray(rH.childNodes))
+           for (const BH of rH.childNodes) LH(BH, rH.id)
+       };
+       for (const AH of HH) {
+         const HH = AH.data;
+         if (AH.type === cH.b.FullSnapshot) LH(null === HH || void 0 === HH ? void 0 : HH.node, null);
+         else if (AH.type === cH.b.IncrementalSnapshot && Array.isArray(null === HH || void 0 === HH ? void 0 : HH.adds))
+           for (const BH of HH.adds) LH(null === BH || void 0 === BH ? void 0 : BH.node, null === BH || void 0 === BH ? void 0 : BH.parentId)
+       }
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1129-L1132` → after: `L1057-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1057-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1057-L1076) · [Before (L1129-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1129-L1132)

```diff
-     function mz(UU, XU, zU) {
-       const cU = UU.gY(448, XU, 4);
-       if (cU < 0) return !1;
-       return UU.view.setFloat32(cU + 0, zU, !0), !0
+     function mB(HH) {
+       const BH = new Set,
+         LH = [];
+       kB(HH, ((HH, AH) => {
+         let {
+           id: rH,
+           tagName: SH
+         } = HH;
+         "number" === typeof rH && ("string" === typeof SH && "style" === SH.toLowerCase() && BH.add(rH), LH.push({
+           id: rH,
+           parentId: AH
+         }))
+       }));
+       const AH = new Set;
+       for (const {
+           id: rH,
+ ... (4 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1135-L1140` → after: `L1104-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1104-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1104-L1111) · [Before (L1135-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1135-L1140)

```diff
-     function lz(UU, XU, zU, cU) {
-       const yU = UU.gY(450, XU, 12);
-       if (yU < 0) return !1;
-       const QU = UU.view;
-       for (let AU = 0; AU < 2; AU++) QU.setFloat32(yU + 0 + 4 * AU, zU[AU], !0);
-       return QU.setUint8(yU + 8, cU), !0
+     function qB(HH, BH) {
+       return HH.replace(KB, (HH => HH.replace(cB, ((HH, LH, AH) => {
+         const rH = LH.toLowerCase(),
+           SH = oB[BH][rH];
+         if (void 0 === AH) return "none" === SH ? lB : fB;
+         const hH = AH.toLowerCase();
+         return IB[rH].includes(hH) ? hH === SH ? fB : lB : HH
+       }))))
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1143-L1147` → after: `L1114-L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1114-L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1114-L1118) · [Before (L1143-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1143-L1147)

```diff
-     function xz(UU, XU, zU, cU) {
-       const yU = UU.gY(452, XU, 8);
-       if (yU < 0) return !1;
-       const QU = UU.view;
-       return QU.setFloat32(yU + 0, zU, !0), QU.setUint8(yU + 4, cU), !0
+     function gB(HH) {
+       const BH = HH.attributes,
+         LH = null === BH || void 0 === BH ? void 0 : BH.rel,
+         AH = null === BH || void 0 === BH ? void 0 : BH.href;
+       return "link" === HH.tagName && "string" === typeof LH && LH.toLowerCase().split(/\s+/).includes("stylesheet") && "string" === typeof AH ? AH : null
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1150-L1154` → after: `L1121-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1121-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1121-L1138) · [Before (L1150-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1150-L1154)

```diff
-     function Jz(UU, XU, zU, cU, yU) {
-       const QU = UU.gY(454, XU, 4);
-       if (QU < 0) return !1;
-       const AU = UU.view;
-       return AU.setUint8(QU + 0, zU), AU.setUint8(QU + 1, cU), AU.setUint8(QU + 2, yU), !0
+     function NB(HH) {
+       const BH = new Map;
+       kB(HH, (HH => {
+         const LH = gB(HH);
+         null !== LH && BH.set(HH.id, LH)
+       }));
+       const LH = new Map;
+       for (const rH of HH) {
+         const HH = rH.data;
+         if (rH.type === cH.b.IncrementalSnapshot && (null === HH || void 0 === HH ? void 0 : HH.source) === cH.d.Mutation)
+           for (const rH of null !== (AH = HH.attributes) && void 0 !== AH ? AH : []) {
+             var AH;
+             const HH = rH.attributes._cssText,
+               SH = BH.get(rH.id);
+             "string" !== typeof HH || void 0 === SH || LH.has(SH) || LH.set(SH, HH)
+           }
+ ... (2 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1157-L1162` → after: `L1141-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1141-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1141-L1183) · [Before (L1157-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1157-L1162)

```diff
-     function jz(UU, XU, zU, cU) {
-       const yU = UU.gY(455, XU, 40);
-       if (yU < 0) return !1;
-       const QU = UU.view;
-       for (let AU = 0; AU < 9; AU++) QU.setInt32(yU + 0 + 4 * AU, zU[AU], !0);
-       return QU.setUint32(yU + 36, cU, !0), !0
+     function RB(HH, BH, LH) {
+       var AH;
+       if ("string" === typeof HH) return null !== LH.pointer && eB.has(BH) ? qB(HH, LH.pointer) : HH;
+       if (Array.isArray(HH)) {
+         let BH = !1;
+         const AH = HH.map((HH => {
+           const AH = RB(HH, "", LH);
+           return BH ||= AH !== HH, AH
+         }));
+         return BH ? AH : HH
+       }
+       if (null === HH || "object" !== typeof HH) return HH;
+       const rH = function(HH, BH) {
+         const LH = HH.attributes,
+           AH = gB(HH),
+           rH = null !== AH && void 0 === (null === LH || void 0 === LH ? void 0 : LH._cssText) ? BH.sheets.get(AH) : void 0;
+ ... (27 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1164-L1169` → after: `L1185-L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1185-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1185-L1278) · [Before (L1164-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1164-L1169)

```diff
- 
-     function Kz(UU, XU, zU, cU) {
-       const yU = UU.gY(456, XU, 8);
-       if (yU < 0) return !1;
-       const QU = UU.view;
-       return QU.setFloat32(yU + 0, zU, !0), QU.setUint8(yU + 4, cU), !0
+     const jB = "brv-styles",
+       nB = [".brv-video-layer { position: absolute !important; margin: 0 !important; padding: 0 !important; border: 0 !important; }", ".brv-video-layer { overflow: hidden !important; pointer-events: none !important; background: none !important; transform: none !important; }", ".b … [truncated]
+       FB = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv- … [truncated]
+     class DB {
+       static create(HH, BH, LH, AH, rH, SH, hH, tH) {
+         if (!BH.some((HH => HH.type === cH.b.FullSnapshot))) return null;
+         const zH = function(HH, BH) {
+           const LH = {
+             sheets: NB(HH),
+             styleTextIds: mB(HH),
+             pointer: BH
+           };
+           return HH.map((HH => {
+             if (HH.type !== cH.b.FullSnapshot && HH.type !== cH.b.IncrementalSnapshot) return HH;
+             const BH = RB(HH.data, "data", LH);
+             return BH === HH.data ? HH : {
+ ... (78 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1171-L1178` → after: `L1280-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1280-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1280-L1305) · [Before (L1171-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1171-L1178)

```diff
- 
-     function bz(UU, XU, zU, cU, yU) {
-       const QU = UU.gY(457, XU, 16);
-       if (QU < 0) return !1;
-       const AU = UU.view;
-       for (let FU = 0; FU < 3; FU++) AU.setInt32(QU + 0 + 4 * FU, zU[FU], !0);
-       for (let FU = 0; FU < 3; FU++) AU.setInt8(QU + 12 + 1 * FU, cU[FU]);
-       return AU.setUint8(QU + 15, yU), !0
+     const wB = {
+       width: 1280,
+       height: 720
+     };
+     class ZB {
+       constructor(HH, BH) {
+         this.root = HH, this.onViewportChanged = BH, this.element = void 0, this.viewport = null, this.resizeObserver = void 0, this.element = document.createElement("div"), this.element.className = "brv-stage", HH.appendChild(this.element), this.resizeObserver = new ResizeObserv … [truncated]
+           this.fit()
+         })), this.resizeObserver.observe(HH)
+       }
+       setViewport(HH) {
+         var BH;
+         null === HH || HH.width <= 0 || HH.height <= 0 || HH.width === (null === (BH = this.viewport) || void 0 === BH ? void 0 : BH.width) && HH.height === this.viewport.height || (this.viewport = HH, this.element.style.width = `${HH.width}px`, this.element.style.height = `${HH. … [truncated]
+       }
+       destroy() {
+         this.resizeObserver.disconnect(), this.element.remove()
+ ... (10 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1180-L1185` → after: `L1307-L1355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1307-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1307-L1355) · [Before (L1180-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1180-L1185)

```diff
- 
-     function Tz(UU, XU, zU, cU) {
-       const yU = UU.gY(530, XU, 4 + cU.length);
-       if (yU < 0) return !1;
-       const QU = UU.view;
-       return QU.setUint8(yU + 0, zU), Yz(QU).set(cU, QU.byteOffset + yU + 4), !0
+     class dB {
+       constructor(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
+           LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iH;
+         this.urls = void 0, this.urls = new yH(HH, "video URLs", BH, LH)
+       }
+       reset(HH) {
+         this.urls.reset(HH.flatMap((HH => {
+           var BH;
+           return null !== (BH = function(HH) {
+             return "url" in HH ? null === HH.url ? null : {
+               sequence: HH.sequence,
+               url: HH.url
+             } : void 0 === HH.partUrls ? null : {
+               sequence: HH.sequence,
+               partUrls: HH.partUrls
+ ... (33 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1188-L1192` → after: `L1358-L1424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1358-L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1358-L1424) · [Before (L1188-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1188-L1192)

```diff
-     function hz(UU, XU, zU, cU, yU, QU) {
-       const AU = UU.gY(531, XU, 12 + QU.length);
-       if (AU < 0) return !1;
-       const FU = UU.view;
-       return FU.setFloat32(AU + 0, zU, !0), FU.setFloat32(AU + 4, cU, !0), FU.setUint32(AU + 8, yU, !0), Yz(FU).set(QU, FU.byteOffset + AU + 12), !0
+     function sB(HH) {
+       const BH = [];
+       let LH = 0;
+       for (const EH of HH) BH.push(LH), LH += EH.byteLength;
+       let AH = 0;
+       const rH = LH => {
+           for (; BH[AH] > LH;) AH--;
+           for (; AH + 1 < BH.length && BH[AH + 1] <= LH;) AH++;
+           return HH[AH][LH - BH[AH]]
+         },
+         SH = HH => rH(HH) * 2 ** 24 + 65536 * rH(HH + 1) + 256 * rH(HH + 2) + rH(HH + 3);
+       let hH = 0,
+         tH = !1,
+         zH = !1,
+         CH = 0;
+       for (; hH + 8 <= LH;) {
+ ... (51 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1195-L1199` → after: `L1427-L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1427-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1427-L1428) · [Before (L1195-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1195-L1199)

```diff
-     function Uc(UU, XU, zU, cU, yU, QU) {
-       const AU = UU.gY(532, XU, 12 + QU.length);
-       if (AU < 0) return !1;
-       const FU = UU.view;
-       return FU.setInt32(AU + 0, zU, !0), FU.setInt32(AU + 4, cU, !0), FU.setUint32(AU + 8, yU, !0), Yz(FU).set(QU, FU.byteOffset + AU + 12), !0
+     function pB(HH, BH) {
+       return `${HH}/${BH}`
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1202-L1206` → after: `L1431-L1441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1431-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1431-L1441) · [Before (L1202-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1202-L1206)

```diff
-     function Xc(UU, XU, zU, cU, yU) {
-       const QU = UU.gY(533, XU, 8 + yU.length);
-       if (QU < 0) return !1;
-       const AU = UU.view;
-       return AU.setInt32(QU + 0, zU, !0), AU.setInt32(QU + 4, cU, !0), Yz(AU).set(yU, AU.byteOffset + QU + 8), !0
+     function yB(HH) {
+       const BH = function(HH) {
+         return HH.map(((BH, LH) => {
+           const AH = HH[LH + 1];
+           return void 0 === AH ? BH.endMs : Math.min(BH.endMs, AH.startMs)
+         }))
+       }(HH);
+       return HH.map(((HH, LH) => ({
+         ...HH,
+         endMs: BH[LH]
+       }))).filter((HH => HH.endMs > HH.startMs))
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1210` → after: `L1445-L1456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1445-L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1445-L1456) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1210)

```diff
-       return !(UU.gY(576, XU, 0) < 0)
+       let LH = 0,
+         AH = HH.length - 1;
+       for (; LH <= AH;) {
+         const rH = LH + AH >> 1,
+           SH = HH[rH];
+         if (BH < SH.startMs) AH = rH - 1;
+         else {
+           if (!(BH >= SH.endMs)) return SH;
+           LH = rH + 1
+         }
+       }
+       return null
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1213-L1220` → after: `L1459-L1460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1459-L1460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1459-L1460) · [Before (L1213-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1213-L1220)

```diff
-     function cc(UU, XU, zU, cU, yU, QU) {
-       const AU = UU.gY(577, XU, 36 + QU.length);
-       if (AU < 0) return !1;
-       const FU = UU.view;
-       FU.setUint8(AU + 0, zU);
-       for (let oU = 0; oU < 16; oU++) FU.setUint8(AU + 4 + 1 * oU, cU[oU]);
-       for (let oU = 0; oU < 16; oU++) FU.setUint8(AU + 20 + 1 * oU, yU[oU]);
-       return Yz(FU).set(QU, FU.byteOffset + AU + 36), !0
+     function BL(HH, BH) {
+       return (BH - HH.startMs) / 1e3
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1223-L1227` → after: `L1463-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1463-L1464) · [Before (L1223-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1223-L1227)

```diff
-     function yc(UU, XU, zU, cU) {
-       const yU = UU.gY(578, XU, 4 + cU.length);
-       if (yU < 0) return !1;
-       const QU = UU.view;
-       return QU.setUint8(yU + 0, zU), Yz(QU).set(cU, QU.byteOffset + yU + 4), !0
+     function LL(HH) {
+       return Math.max(.4, .1 * HH)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1230-L1234` → after: `L1467-L1468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1467-L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1467-L1468) · [Before (L1230-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1230-L1234)

```diff
-     function Qc(UU, XU, zU, cU, yU, QU, AU, FU) {
-       const oU = UU.gY(579, XU, 36);
-       if (oU < 0) return !1;
-       const DU = UU.view;
-       return DU.setFloat64(oU + 0, zU, !0), DU.setFloat64(oU + 8, cU, !0), DU.setFloat64(oU + 16, yU, !0), DU.setFloat64(oU + 24, QU, !0), DU.setUint16(oU + 32, AU, !0), DU.setUint8(oU + 34, FU), !0
+     function AL(HH) {
+       return Math.max(.0625, Math.min(16, HH))
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1237-L1238` → after: `L1471-L1553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1471-L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1471-L1553) · [Before (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1237-L1238)

```diff
-       constructor(UU, XU) {
-         this.core = UU, this.afterCall = XU
+       constructor(HH, BH, LH, AH, rH, SH, hH) {
+         this.still = BH, this.clock = LH, this.frameDurationS = AH, this.wallNowMs = rH, this.onLoadFailed = hH, this.element = void 0, this.slots = new Map, this.shown = null, this.seekLatencyS = .15, this.lastSeekWallMs = -1 / 0, this.lastPresented = null, this.stats = {
+           frames: 0,
+           sumAbsDriftMs: 0,
+           maxAbsDriftMs: 0,
+           withinOneFrame: 0,
+           seeks: 0
+         }, this.failed = new Set, this.segments = void 0, this.segmentUrls = void 0, this.blobs = new iB, this.stillImage = void 0, this.stillShown = !1, this.failedStillUrl = null, this.segments = yB(HH), this.segmentUrls = new dB(SH), this.segmentUrls.reset(this.segments), this … [truncated]
+           console.warn("Replay still failed to load."), this.failedStillUrl = this.stillImage.getAttribute("src"), this.stillImage.removeAttribute("src"), this.onLoadFailed()
+         })), this.element.appendChild(this.stillImage)
+       }
+       get visible() {
+         return null !== this.shown || this.stillShown
+       }
+       getVideoSizeAt(HH) {
+         var BH, LH;
+ ... (67 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1240-L1242` → after: `L1555-L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1555-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1555-L1605) · [Before (L1240-L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1240-L1242)

```diff
-       canModify(UU, XU, zU) {
-         const cU = this.core.tAU(UU, XU, zU);
-         return this.afterCall(), cU
+       sync(HH, BH) {
+         const {
+           video: LH
+         } = HH;
+         if (LH.seeking) return;
+         const {
+           playing: AH,
+           speed: rH
+         } = this.clock, SH = AH && rH < 16, hH = function(HH) {
+           let {
+             targetS: BH,
+             currentS: LH,
+             playing: AH,
+             speed: rH,
+             frameDurationS: SH
+           } = HH;
+ ... (35 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1244-L1246` → after: `L1607-L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1607-L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1607-L1632) · [Before (L1244-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1244-L1246)

```diff
-       terrainBlocked(UU, XU, zU, cU, yU) {
-         const QU = this.core.oFU(UU, XU, zU, cU, yU);
-         return this.afterCall(), QU
+       getSlot(HH) {
+         const BH = this.slots.get(HH.sequence);
+         if (void 0 !== BH) return BH;
+         const LH = "parts" in HH ? this.blobs.get(HH.sequence, HH.parts) : null,
+           AH = null === LH ? this.segmentUrls.get(HH.sequence) : null;
+         if ("pending" === AH) return null;
+         if ("failed" === AH) return this.failed.has(HH.sequence) || (console.error(`Replay video segment ${HH.sequence} has no URLs to load.`), this.markFailed(HH)), null;
+         const rH = document.createElement("video");
+         rH.className = "brv-video", rH.muted = !0, rH.playsInline = !0, rH.preload = "auto", rH.disablePictureInPicture = !0;
+         const SH = {
+           segment: HH,
+           video: rH,
+           seekStartedWallMs: null,
+           objectUrl: null,
+           abort: new AbortController
+         };
+ ... (10 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1248-L1250` → after: `L1634-L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1634-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1634-L1639) · [Before (L1248-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1248-L1250)

```diff
-       Jw(UU, XU, zU, cU) {
-         const yU = this.core.pI(UU, XU, zU, cU);
-         return this.afterCall(), yU
+       loadParts(HH, BH) {
+         this.blobs.load(HH.segment.sequence, BH, HH.abort.signal).then((BH => {
+           if (this.slots.get(HH.segment.sequence) === HH) return null === BH ? (console.error(`Replay video segment ${HH.segment.sequence} has no playable parts.`), void this.markFailed(HH.segment)) : void this.playBlob(HH, BH)
+         }), (BH => {
+           this.slots.get(HH.segment.sequence) === HH && (console.error(`Replay video segment ${HH.segment.sequence} failed to load.`, BH), this.markFailed(HH.segment))
+         }))
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1252-L1254` → after: `L1641-L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1641-L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1641-L1642) · [Before (L1252-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1252-L1254)

```diff
-       blockData(UU, XU, zU) {
-         const cU = this.core.pAU(UU, XU, zU);
-         return this.afterCall(), cU
+       playBlob(HH, BH) {
+         HH.objectUrl = URL.createObjectURL(BH), HH.video.src = HH.objectUrl
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1256-L1258` → after: `L1644-L1645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1644-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1644-L1645) · [Before (L1256-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1256-L1258)

```diff
-       cameraSweep(UU, XU, zU, cU, yU, QU, AU) {
-         const FU = this.core.NQU(UU, XU, zU, cU, yU, QU, AU);
-         return this.afterCall(), FU
+       markFailed(HH) {
+         this.failed.add(HH.sequence), this.onLoadFailed()
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1260-L1262` → after: `L1647-L1651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1647-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1647-L1651) · [Before (L1260-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1260-L1262)

```diff
-       hasServerTarget(UU) {
-         const XU = this.core.CAU(UU);
-         return this.afterCall(), XU
+       showStill(HH) {
+         const BH = null !== HH && HH.url !== this.failedStillUrl ? HH : null;
+         null !== BH && this.stillImage.getAttribute("src") !== BH.url && (this.stillImage.src = BH.url);
+         const LH = null !== BH && this.stillImage.complete && this.stillImage.naturalWidth > 0;
+         LH !== this.stillShown && (this.stillImage.classList.toggle("brv-still-shown", LH), this.stillShown = LH)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1264-L1266` → after: `L1653-L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1653-L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1653-L1655) · [Before (L1264-L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1264-L1266)

```diff
-       entityInteractable(UU) {
-         const XU = this.core.PAU(UU);
-         return this.afterCall(), XU
+       show(HH) {
+         var BH;
+         this.shown !== HH && (null === (BH = this.shown) || void 0 === BH || BH.video.classList.remove("brv-video-shown"), null === HH || void 0 === HH || HH.video.classList.add("brv-video-shown"), this.shown = HH)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1268-L1270` → after: `L1657-L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1657-L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1657-L1658) · [Before (L1268-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1268-L1270)

```diff
-       entityCrouching(UU) {
-         const XU = this.core.RAU(UU);
-         return this.afterCall(), XU
+       evictExcept(HH) {
+         for (const [BH, LH] of this.slots) HH.includes(LH.segment) || (this.release(LH), this.slots.delete(BH))
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1272-L1274` → after: `L1660-L1661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1660-L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1660-L1661) · [Before (L1272-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1272-L1274)

```diff
-       entityDrawn(UU) {
-         const XU = this.core.gQU(UU);
-         return this.afterCall(), XU
+       release(HH) {
+         this.shown === HH && (this.shown = null), HH.abort.abort(), HH.video.pause(), HH.video.removeAttribute("src"), HH.video.load(), HH.video.remove(), null !== HH.objectUrl && URL.revokeObjectURL(HH.objectUrl)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1276-L1278` → after: `L1663-L1687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1663-L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1663-L1687) · [Before (L1276-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1276-L1278)

```diff
-       predictServerPosition(UU, XU, zU, cU) {
-         const yU = this.core.vAU(UU, XU, zU, cU);
-         return this.afterCall(), yU
+       watchFrames(HH) {
+         const {
+           video: BH
+         } = HH;
+         if ("function" !== typeof BH.requestVideoFrameCallback) return;
+         const LH = (AH, rH) => {
+           if (!this.slots.has(HH.segment.sequence)) return;
+           const SH = BH.ownerDocument.defaultView,
+             hH = null === SH ? 0 : SH.performance.timeOrigin - performance.timeOrigin,
+             tH = BL(HH.segment, this.clock.timeAtWall(rH.expectedDisplayTime + hH)),
+             zH = this.lastPresented,
+             CH = this.wallNowMs() - this.lastSeekWallMs > 1e3;
+           if (null !== zH && zH.slot === HH && CH && this.clock.playing && rH.mediaTime > zH.mediaTimeS) {
+             const HH = Math.abs(function(HH, BH, LH) {
+               return LH < HH ? 1e3 * (LH - HH) : 1e3 * Math.max(0, LH - BH)
+             }(zH.mediaTimeS, rH.mediaTime, zH.clockMediaTimeS));
+ ... (9 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1280-L1282` → after: `L1689-L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1689-L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1689-L1729) · [Before (L1280-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1280-L1282)

```diff
-       setOtherEntitySetting(UU, XU, zU) {
-         const cU = this.core.tQU(UU, XU, zU);
-         return this.afterCall(), cU
+     }
+     const SL = 1 / 30,
+       hL = ["#noa-canvas", "#noa-container"];
+     class tL {
+       constructor(HH, BH) {
+         var LH, AH, rH, SH, hH, tH, zH, CH;
+         let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         this.timeline = void 0, this.chapters = void 0, this.lowFps = void 0, this.stage = void 0, this.clock = void 0, this.annotations = void 0, this.videoLayer = void 0, this.domLayer = void 0, this.listeners = new Set, this.skipInactive = !0, this.ended = !1, this.frame = 0,  … [truncated]
+           this.frame = requestAnimationFrame(this.IX);
+           const HH = performance.now();
+           this.applySkips();
+           const BH = this.clock.timeMs();
+           this.annotations.update(BH, this.clock.speed), this.videoLayer.update(BH), null === this.domLayer ? this.stage.setViewport(this.videoLayer.getVideoSizeAt(BH)) : this.domLayer.update(BH, this.clock.playing, HH);
+           const LH = this.getState();
+           (null === this.lastState || function(HH, BH) {
+             return Object.keys(HH).some((LH => "positionMs" === LH ? Math.floor(HH.positionMs / 1e3) !== Math.floor(BH.positionMs / 1e3) : HH[LH] !== BH[LH]))
+ ... (25 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1284-L1286` → after: `L1731-L1732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1731-L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1731-L1732) · [Before (L1284-L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1284-L1286)

```diff
-       entityInfoBatch(UU) {
-         const XU = this.core.BQU(UU);
-         return this.afterCall(), XU
+       get inactiveRanges() {
+         return this.annotations.inactiveRanges
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1288-L1290` → after: `L1734-L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1734-L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1734-L1735) · [Before (L1288-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1288-L1290)

```diff
-       entityName(UU) {
-         const XU = this.core.WAU(UU);
-         return this.afterCall(), XU
+       get videoGaps() {
+         return this.annotations.videoGaps
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1292-L1294` → after: `L1737-L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1737-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1737-L1738) · [Before (L1292-L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1292-L1294)

```diff
-       hasEffect(UU, XU) {
-         const zU = this.core.eAU(UU, XU);
-         return this.afterCall(), zU
+       get frames() {
+         return this.annotations.frames
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1296-L1298` → after: `L1740-L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1740-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1740-L1741) · [Before (L1296-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1296-L1298)

```diff
-       scratchPtr() {
-         const UU = this.core.oQU();
-         return this.afterCall(), UU
+       get input() {
+         return this.annotations.input
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1300-L1302` → after: `L1743-L1746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1743-L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1743-L1746) · [Before (L1300-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1300-L1302)

```diff
-       invSwap(UU, XU) {
-         const zU = this.core.uAU(UU, XU);
-         return this.afterCall(), zU
+       subscribe(HH) {
+         return this.listeners.add(HH), HH(this.getState()), () => {
+           this.listeners.delete(HH)
+         }
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1304-L1306` → after: `L1748-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1748-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1748-L1759) · [Before (L1304-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1304-L1306)

```diff
-       invMove(UU, XU, zU) {
-         const cU = this.core.OAU(UU, XU, zU);
-         return this.afterCall(), cU
+       getState() {
+         const HH = this.clock.timeMs();
+         return {
+           positionMs: this.timeline.toPosition(HH),
+           durationMs: this.timeline.durationMs,
+           playing: this.clock.playing,
+           speed: this.clock.speed,
+           skipInactive: this.skipInactive,
+           ended: this.ended,
+           notice: this.getNotice(HH),
+           telemetryChunksLoaded: this.annotations.telemetryChunksLoaded
+         }
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1308-L1310` → after: `L1761-L1762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1761-L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1761-L1762) · [Before (L1308-L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1308-L1310)

```diff
-       invQuickMove(UU, XU, zU, cU) {
-         const yU = this.core.SAU(UU, XU, zU, cU);
-         return this.afterCall(), yU
+       getPositionMs() {
+         return this.timeline.toPosition(this.clock.timeMs())
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1312-L1314` → after: `L1764-L1765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1764-L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1764-L1765) · [Before (L1312-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1312-L1314)

```diff
-       invRemove(UU, XU, zU) {
-         const cU = this.core.rAU(UU, XU, zU);
-         return this.afterCall(), cU
+       getSyncStats() {
+         return this.videoLayer.getSyncStats()
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1316-L1318` → after: `L1767-L1768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1767-L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1767-L1768) · [Before (L1316-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1316-L1318)

```diff
-       invEnchant(UU, XU, zU, cU, yU) {
-         const QU = this.core.qAU(UU, XU, zU, cU, yU);
-         return this.afterCall(), QU
+       resetSyncStats() {
+         this.videoLayer.resetSyncStats()
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1320-L1322` → after: `L1770-L1771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1770-L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1770-L1771) · [Before (L1320-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1320-L1322)

```diff
-       craft(UU, XU, zU) {
-         const cU = this.core.craft(UU, XU, zU);
-         return this.afterCall(), cU
+       play() {
+         this.ended && this.seekToTime(this.timeline.startMs), this.clock.play(), this.syncDom(), this.emit()
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1324-L1326` → after: `L1773-L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1773-L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1773-L1774) · [Before (L1324-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1324-L1326)

```diff
-       salvage(UU, XU, zU) {
-         const cU = this.core.salvage(UU, XU, zU);
-         return this.afterCall(), cU
+       pause() {
+         this.clock.pause(), this.syncDom(), this.emit()
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1328-L1330` → after: `L1776-L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1776-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1776-L1777) · [Before (L1328-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1328-L1330)

```diff
-       selectSlot(UU) {
-         const XU = this.core.mAU(UU);
-         return this.afterCall(), XU
+       togglePlay() {
+         this.clock.playing ? this.pause() : this.play()
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1332-L1334` → after: `L1779-L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1779-L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1779-L1780) · [Before (L1332-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1332-L1334)

```diff
-       closeChest() {
-         const UU = this.core.gAU();
-         return this.afterCall(), UU
+       seekToPosition(HH) {
+         this.seekToTime(this.timeline.toTime(HH))
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1336-L1338` → after: `L1782-L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1782-L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1782-L1783) · [Before (L1336-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1336-L1338)

```diff
-       itemAttributesBatch(UU) {
-         const XU = this.core.GQU(UU);
-         return this.afterCall(), XU
+       seekBy(HH) {
+         this.seekToPosition(this.timeline.toPosition(this.clock.timeMs()) + HH)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1340-L1342` → after: `L1785-L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1785-L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1785-L1786) · [Before (L1340-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1340-L1342)

```diff
-       itemNames() {
-         const UU = this.core.uL();
-         return this.afterCall(), UU
+       stepFrame(HH) {
+         this.clock.pause(), this.seekBy(HH * SL * 1e3)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1344-L1346` → after: `L1788-L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1788-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1788-L1790) · [Before (L1344-L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1344-L1346)

```diff
-       blockProps() {
-         const UU = this.core.aAU();
-         return this.afterCall(), UU
+       setSpeed(HH) {
+         var BH;
+         this.clock.setSpeed(HH), null === (BH = this.domLayer) || void 0 === BH || BH.setSpeed(HH), this.emit()
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1348-L1350` → after: `L1792-L1793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1792-L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1792-L1793) · [Before (L1348-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1348-L1350)

```diff
-       itemProps() {
-         const UU = this.core.fAU();
-         return this.afterCall(), UU
+       setSkipInactive(HH) {
+         this.skipInactive = HH, this.emit()
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1352-L1354` → after: `L1795-L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1795-L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1795-L1798) · [Before (L1352-L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1352-L1354)

```diff
-       salvageRecipe(UU) {
-         const XU = this.core.RQU(UU);
-         return this.afterCall(), XU
+       goToChapter(HH) {
+         const BH = this.clock.timeMs(),
+           LH = 1 === HH ? this.chapters.find((HH => HH.startMs > BH + 500)) : this.chapters.findLast((HH => HH.startMs < BH - 2e3));
+         void 0 !== LH && this.seekToTime(LH.startMs)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1356-L1358` → after: `L1800-L1802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1800-L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1800-L1802) · [Before (L1356-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1356-L1358)

```diff
-       craftingView(UU, XU, zU) {
-         const cU = this.core.kQU(UU, XU, zU);
-         return this.afterCall(), cU
+       destroy() {
+         var HH;
+         cancelAnimationFrame(this.frame), this.urlRefresher.destroy(), this.annotations.destroy(), null === (HH = this.domLayer) || void 0 === HH || HH.destroy(), this.videoLayer.destroy(), this.stage.destroy(), this.listeners.clear()
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1360-L1362` → after: `L1804-L1805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1804-L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1804-L1805) · [Before (L1360-L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1360-L1362)

```diff
-       directorView() {
-         const UU = this.core.EQU();
-         return this.afterCall(), UU
+       getNotice(HH) {
+         return this.annotations.isHiddenAt(HH) ? "tabHidden" : this.videoLayer.failedAt(HH) && !this.urlRefresher.refreshing ? "videoFailed" : null !== this.domLayer || this.videoLayer.visible ? this.annotations.isVideoGapAt(HH) ? "videoGap" : null : "nothingToShow"
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1364-L1366` → after: `L1807-L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1807-L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1807-L1815) · [Before (L1364-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1364-L1366)

```diff
-       directorDefaultPose() {
-         const UU = this.core.IQU();
-         return this.afterCall(), UU
+       applySkips() {
+         var HH;
+         if (!this.clock.playing) return;
+         const BH = this.clock.timeMs(),
+           LH = this.timeline.nextPlayableTime(BH);
+         if (null === LH) return this.clock.pause(), this.clock.seek(this.timeline.endMs), this.ended = !0, this.syncDom(), void this.emit();
+         const AH = this.skipInactive ? this.annotations.inactiveRanges.find((HH => LH >= HH.startMs && LH < HH.endMs - 500)) : void 0,
+           rH = null !== (HH = null === AH || void 0 === AH ? void 0 : AH.endMs) && void 0 !== HH ? HH : LH;
+         rH !== BH && this.seekToTime(rH)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1368-L1370` → after: `L1817-L1818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1817-L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1817-L1818) · [Before (L1368-L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1368-L1370)

```diff
-       directorEntity(UU) {
-         const XU = this.core.YQU(UU);
-         return this.afterCall(), XU
+       seekToTime(HH) {
+         this.ended = !1, this.clock.seek(Math.max(this.timeline.startMs, Math.min(this.timeline.endMs, HH))), this.videoLayer.noteClockJump(), this.syncDom(), this.emit()
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1372-L1374` → after: `L1820-L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1820-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1820-L1822) · [Before (L1372-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1372-L1374)

```diff
-       directorPose(UU, XU, zU, cU, yU, QU) {
-         const AU = this.core.pQU(UU, XU, zU, cU, yU, QU);
-         return this.afterCall(), AU
+       syncDom() {
+         var HH;
+         null === (HH = this.domLayer) || void 0 === HH || HH.sync(this.clock.timeMs(), this.clock.playing)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1376-L1378` → after: `L1824-L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L1824-L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L1824-L2536) · [Before (L1376-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1376-L1378)

```diff
-       passTimings(UU) {
-         const XU = this.core.MAU(UU);
-         return this.afterCall(), XU
+       emit() {
+         this.emitState(this.getState())
+       }
+       emitState(HH) {
+         this.lastState = HH;
+         for (const BH of this.listeners) BH(HH)
+       }
+     }
+     const zL = 2500,
+       CL = 5;
+ 
+     function EL(HH) {
+       let {
+         label: BH,
+         LX: LH,
+         wide: AH = !1
+ ... (697 more added lines; see GitHub link above)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L1380-L1382` → after: `L2538-L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R2538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L2538-L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/294.js#L2538-L2543) · [Before (L1380-L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/294.js#L1380-L1382)

```diff
-       drawCensus() {
-         const UU = this.core.ZAU();
-         return this.afterCall(), UU
+ 
+       function cH(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         MH !== xH && (lH.current = MH), EH((LH => {
+           (0, bH.j)(LH, OL, MH), (0, bH.j)(LH, bL, (0, IH.j)(HH)), BH && (0, bH.j)(LH, kL, null)
+         }))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/295.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/295.js` (473 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L4)

```diff
-   44281: (UU, XU, zU) => {
+   41798: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L7-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L8-L9) · [Before (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L7-L9)

```diff
-       e: () => FU,
-       i: () => AU,
-       m: () => DU
+       d: () => oh,
+       h: () => zz
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L11-L13` → after: `L11-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L11-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L11-L39) · [Before (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L11-L13)

```diff
-     var cU = zU(37919),
-       yU = zU(39519),
-       QU = zU(39516);
+     var AH, rH = Object.defineProperty,
+       SH = (HH, BH, LH) => ((HH, BH, LH) => BH in HH ? rH(HH, BH, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: LH
+       }) : HH[BH] = LH)(HH, "symbol" !== typeof BH ? BH + "" : BH, LH),
+       hH = Object.defineProperty,
+       tH = (HH, BH, LH) => ((HH, BH, LH) => BH in HH ? hH(HH, BH, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: LH
+       }) : HH[BH] = LH)(HH, "symbol" !== typeof BH ? BH + "" : BH, LH),
+       zH = (HH => (HH[HH.Document = 0] = "Document", HH[HH.DocumentType = 1] = "DocumentType", HH[HH.Element = 2] = "Element", HH[HH.Text = 3] = "Text", HH[HH.CDATA = 4] = "CDATA", HH[HH.Comment = 5] = "Comment", HH))(zH || {});
+     const CH = {
+ ... (13 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L15-L24` → after: `L41-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L41-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L41-L66) · [Before (L15-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L15-L24)

```diff
-     function AU(UU, XU, zU, cU) {
-       const yU = QU.t;
-       XU.fill(0), UU.gravity.toArray(XU, yU.gravity), UU.colorDead.toArray(XU, yU.colorDead), zU[yU.ramp] = UU.useRampGradients ? 1 : 0;
-       const AU = UU.getColorGradients(),
-         FU = NU(UU, AU, "colour", cU);
-       zU[yU.colorCount] = FU;
-       for (let QU = 0; QU < FU; QU++) {
-         var oU;
-         const UU = AU[IU(AU, QU)];
-         XU[yU.colorPositions + QU] = UU.gradient, UU.color1.toArray(XU, yU.color1 + 4 * QU), (null !== (oU = UU.color2) && void 0 !== oU ? oU : UU.color1).toArray(XU, yU.color2 + 4 * QU)
+     function YH(HH) {
+       if (XH[HH]) return XH[HH];
+       const BH = globalThis[HH],
+         LH = BH.prototype,
+         AH = HH in CH ? CH[HH] : void 0,
+         rH = Boolean(AH && AH.every((HH => {
+           var BH, AH;
+           return Boolean(null == (AH = null == (BH = Object.getOwnPropertyDescriptor(LH, HH)) ? void 0 : BH.get) ? void 0 : AH.toString().includes("[native code]"))
+         }))),
+         SH = HH in EH ? EH[HH] : void 0,
+         hH = Boolean(SH && SH.every((HH => {
+           var BH;
+           return "function" === typeof LH[HH] && (null == (BH = LH[HH]) ? void 0 : BH.toString().includes("[native code]"))
+         })));
+       if (rH && hH && !globalThis.Zone) return XH[HH] = BH.prototype, BH.prototype;
+       try {
+ ... (10 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L36-L40` → after: `L71-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L71-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L71-L77) · [Before (L36-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L36-L40)

```diff
-     function FU() {
-       return {
-         key: [],
-         texels: new Uint8Array(4 * QU.n)
-       }
+     function QH(HH, BH, LH) {
+       var AH, rH;
+       const SH = null == (AH = uH[HH]) ? void 0 : AH[LH];
+       if (SH) return SH.call(BH);
+       const hH = YH(HH),
+         tH = null == (rH = Object.getOwnPropertyDescriptor(hH, LH)) ? void 0 : rH.get;
+       return tH ? ((uH[HH] || (uH[HH] = {}))[LH] = tH, tH.call(BH)) : BH[LH]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L42` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L79) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L42)

```diff
-     const oU = [];
+     const WH = {};
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L44-L49` → after: `L81-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L81-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L81-L85) · [Before (L44-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L44-L49)

```diff
-     function DU(UU, XU) {
-       return EU(UU, oU), !gU(oU, XU.key) && (XU.key.length = 0, XU.key.push(...oU), XU.key.length > 0 && function(UU, XU) {
-         for (let zU = 0; zU < QU.n; zU++) yU.g.GetCurrentGradient(zU / QU.n, UU, ((UU, XU, zU) => {
-           cU.Color3.LerpToRef(UU.color, XU.color, zU, YU)
-         })), XU[4 * zU] = 255 * YU.r, XU[4 * zU + 1] = 255 * YU.g, XU[4 * zU + 2] = 255 * YU.b, XU[4 * zU + 3] = 255
-       }(UU.getRampGradients(), XU.texels), !0)
+     function MH(HH, BH, LH) {
+       const AH = `${HH}.${String(LH)}`;
+       if (WH[AH]) return WH[AH].bind(BH);
+       const rH = YH(HH)[LH];
+       return "function" !== typeof rH ? BH[LH] : (WH[AH] = rH, rH.bind(BH))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L51-L57` → after: `L87-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L87-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L87-L157) · [Before (L51-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L51-L57)

```diff
- 
-     function EU(UU, XU) {
-       XU.length = 0;
-       const zU = UU.useRampGradients ? UU.getRampGradients() : null;
-       if (null !== zU && void 0 !== zU && zU.length) {
-         XU.push(zU.length);
-         for (const UU of zU) XU.push(UU.gradient, UU.color.r, UU.color.g, UU.color.b)
+     let xH = Date.now;
+     /[1-9][0-9]{12}/.test(Date.now().toString()) || (xH = () => (new Date).getTime());
+     const vH = {
+       ownerDocument: function(HH) {
+         return QH("Node", HH, "ownerDocument")
+       },
+       childNodes: function(HH) {
+         return QH("Node", HH, "childNodes")
+       },
+       parentNode: function(HH) {
+         return QH("Node", HH, "parentNode")
+       },
+       parentElement: function(HH) {
+         return QH("Node", HH, "parentElement")
+       },
+       textContent: function(HH) {
+ ... (55 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L59-L64` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L159) · [Before (L59-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L59-L64)

```diff
-     }
-     const YU = new cU.Color3;
- 
-     function NU(UU, XU, zU, cU) {
-       return XU ? XU.length > QU.c ? (cU(`particleStops:${zU}`, `GPU particles use the first 2 and last ${QU.c-2} of more than ${QU.c} ${zU} gradient stops (${UU.name})`), QU.c) : XU.length : 0
-     }
+     };
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L66-L67` → after: `L161-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L161-L162) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L66-L67)

```diff
-     function IU(UU, XU) {
-       return XU < 2 || UU.length <= QU.c ? XU : UU.length - QU.c + XU
+     function PH(HH) {
+       return HH.nodeType === HH.ELEMENT_NODE
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L72-L73` → after: `L165-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L165-L167) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L72-L73)

```diff
-     function tU(UU, XU, zU) {
-       return AU(UU, pU, aU, zU), XU && gU(aU, XU) ? null : aU.slice()
+     function TH(HH) {
+       const BH = HH && "host" in HH && "mode" in HH && vH.host(HH) || null;
+       return Boolean(BH && "shadowRoot" in BH && vH.shadowRoot(BH) === HH)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L76-L80` → after: `L170-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L170-L171) · [Before (L76-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L76-L80)

```diff
-     function gU(UU, XU) {
-       if (UU.length !== XU.length) return !1;
-       for (let zU = 0; zU < UU.length; zU++)
-         if (UU[zU] !== XU[zU]) return !1;
-       return !0
+     function UH(HH) {
+       return "[object ShadowRoot]" === Object.prototype.toString.call(HH)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L83-L109` → after: `L174-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L174-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L174-L183) · [Before (L83-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L83-L109)

```diff
-     function kU(UU, XU, zU) {
-       var cU;
-       UU[XU] = zU.gradient, UU[XU + 1] = zU.factor1, UU[XU + 2] = null !== (cU = zU.factor2) && void 0 !== cU ? cU : zU.factor1
-     }
-   },
-   42259: (UU, XU, zU) => {
-     function cU(UU, XU, zU) {
-       const cU = XU * XU * 4,
-         yU = UU[0].layers,
-         QU = yU * (UU.length - 1) + UU[UU.length - 1].layers,
-         AU = new Uint8Array(QU * cU);
-       UU.forEach(((XU, zU) => {
-         const QU = zU + 1 < UU.length ? Math.min(XU.layers, yU) : XU.layers;
-         AU.set(new Uint8Array(XU.pixels.buffer, XU.pixels.byteOffset, QU * cU), zU * yU * cU)
-       }));
-       const FU = Math.max(1, Math.min(QU, zU || QU));
- ... (11 more removed lines; see GitHub link above)
+     function VH(HH) {
+       try {
+         const LH = HH.rules || HH.cssRules;
+         if (!LH) return null;
+         let AH = HH.href;
+         !AH && HH.ownerNode && (AH = HH.ownerNode.baseURI);
+         const rH = Array.from(LH, (HH => OH(HH, AH))).join("");
+         return (BH = rH).includes(" background-clip: text;") && !BH.includes(" -webkit-background-clip: text;") && (BH = BH.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), BH
+       } catch (LH) {
+         return null
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L111` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L185) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L111)

```diff
-       return oU
+       var BH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L119-L141` → after: `L188-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L188-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L188-L213) · [Before (L119-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L119-L141)

```diff
-     function QU(UU, XU, zU) {
-       var cU, QU;
-       const AU = null !== (cU = yU.get(UU)) && void 0 !== cU ? cU : new Map;
-       yU.set(UU, AU);
-       const FU = null !== (QU = AU.get(XU[0])) && void 0 !== QU ? QU : [];
-       AU.set(XU[0], FU);
-       const oU = FU.find((UU => UU.urls.length === XU.length && UU.urls.every(((UU, zU) => UU === XU[zU]))));
-       if (oU) return oU.built;
-       const DU = {
-         urls: [...XU],
-         built: zU()
-       };
-       return FU.push(DU), DU.built.catch((() => {
-         FU.splice(FU.indexOf(DU), 1)
-       })), DU.built
-     }
- ... (7 more removed lines; see GitHub link above)
+     function OH(HH, BH) {
+       if (function(HH) {
+           return "styleSheet" in HH
+         }(HH)) {
+         let BH;
+         try {
+           BH = VH(HH.styleSheet) || function(HH) {
+             const {
+               cssText: BH
+             } = HH;
+             if (BH.split('"').length < 3) return BH;
+             const LH = ["@import", `url(${JSON.stringify(HH.href)})`];
+             return "" === HH.layerName ? LH.push("layer") : HH.layerName && LH.push(`layer(${HH.layerName})`), HH.supportsText && LH.push(`supports(${HH.supportsText})`), HH.media.length && LH.push(HH.media.mediaText), LH.join(" ") + ";"
+           }(HH)
+         } catch (LH) {
+           BH = HH.cssText
+ ... (10 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L215-L220` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L217-L218) · [Before (L215-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L215-L220)

```diff
-       constructor(UU, XU) {
-         this.name = UU, this.sa = XU, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.bS = {
-           addOnce: UU => {
-             this.disposers.push(UU)
-           }
-         }, this.uniqueId = XU.getUniqueId()
+       constructor() {
+         tH(this, "idNodeMap", new Map), tH(this, "nodeMetaMap", new WeakMap)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L222-L223` → after: `L220-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L220-L223) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L222-L223)

```diff
-       get isFrozen() {
-         return this.checkReadyOnlyOnce
+       getId(HH) {
+         var BH;
+         if (!HH) return -1;
+         return (null == (BH = this.getMeta(HH)) ? void 0 : BH.id) ?? -1
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L225-L226` → after: `L225-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L225-L226) · [Before (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L225-L226)

```diff
-       nS() {
-         return this.sa
+       yAH(HH) {
+         return this.idNodeMap.get(HH) || null
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L228-L229` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L228-L229) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L228-L229)

```diff
-       getClassName() {
-         return "LiteMaterial"
+       getIds() {
+         return Array.from(this.idNodeMap.keys())
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L231-L232` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L231-L232) · [Before (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L231-L232)

```diff
-       freeze() {
-         this.checkReadyOnlyOnce = !0
+       getMeta(HH) {
+         return this.nodeMetaMap.get(HH) || null
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L234-L235` → after: `L234-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L234-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L234-L236) · [Before (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L234-L235)

```diff
-       unfreeze() {
-         this.checkReadyOnlyOnce = !1
+       removeNodeFromMap(HH) {
+         const BH = this.getId(HH);
+         this.idNodeMap.delete(BH), HH.childNodes && HH.childNodes.forEach((HH => this.removeNodeFromMap(HH)))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L237-L239` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L238-L239) · [Before (L237-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L237-L239)

```diff
-       markDirty() {}
-       get fillMode() {
-         return this.model.fillMode
+       has(HH) {
+         return this.idNodeMap.has(HH)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L241-L242` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L241-L242) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L241-L242)

```diff
-       needAlphaBlendingForMesh(UU) {
-         return (0, dU.M)(this.model, UU.visibility, UU.hasVertexAlpha)
+       hasNode(HH) {
+         return this.nodeMetaMap.has(HH)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L244-L245` → after: `L244-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L244-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L244-L246) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L244-L245)

```diff
-       needAlphaTestingForMesh(UU) {
-         return (0, dU.Q)(this.model, UU.visibility, UU.hasVertexAlpha)
+       add(HH, BH) {
+         const LH = BH.id;
+         this.idNodeMap.set(LH, HH), this.nodeMetaMap.set(HH, BH)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L247-L249` → after: `L248-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L248-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L248-L254) · [Before (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L247-L249)

```diff
-       dispose() {
-         (0, BU.k)(this);
-         for (const UU of this.disposers.splice(0)) UU()
+       replace(HH, BH) {
+         const LH = this.yAH(HH);
+         if (LH) {
+           const HH = this.nodeMetaMap.get(LH);
+           HH && this.nodeMetaMap.set(BH, HH)
+         }
+         this.idNodeMap.set(HH, BH)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L251-L252` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L256-L257) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L251-L252)

```diff
-       get model() {
-         return (0, dU.V)(this)
+       reset() {
+         this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L257-L258` → after: `L261-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L261-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L261-L262) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L257-L258)

```diff
-     function OU(UU) {
-       return qU.has(UU)
+     function kH() {
+       return new bH
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L262-L352` → after: `L266-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L266-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L266-L275) · [Before (L262-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L262-L352)

```diff
-       qU.add(UU)
-     }
-     const rU = {
-       create: (UU, XU) => ((0, ZU.m)(UU, new wU(UU.name, XU)), LU.c.defines()),
-       write: () => {},
-       addFeature: (UU, XU) => {
-         const zU = UU.mirror;
-         XU.feature === WU.h && XU.state.dirLightCount > 0 && (UU.disableLighting = !0, (0, dU.T)(UU)), "BLOXD_LIGHTING" in XU.defines && (0, BU.h)(zU), XU.feature === PU.j && ((0, GU.h)(XU.state, CU), function(UU, XU) {
-           const zU = UU.nS().qp();
-           setTimeout((() => {
-             zU.atlasArrays(XU.sources).then((zU => {
-               (0, GU.b)(UU, XU, zU.map((UU => ({
-                 atlas: UU,
-                 layers: UU.layers
-               }))), zU[0].layerWidth, CU)
-             })).catch((UU => {
- ... (75 more removed lines; see GitHub link above)
+       let {
+         element: BH,
+         maskInputOptions: LH,
+         tagName: AH,
+         type: rH,
+         value: SH,
+         maskInputFn: hH
+       } = HH, tH = SH || "";
+       const zH = rH && oH(rH);
+       return (LH[AH.toLowerCase()] || zH && LH[zH]) && (tH = hH ? hH(tH, BH) : "*".repeat(tH.length)), tH
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L355-L406` → after: `L278-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L278-L279) · [Before (L355-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L355-L406)

```diff
-     function HU() {
-       throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
-     }
-     const MU = {
-       tcU: HU,
-       iyU: (UU, XU) => {
-         const zU = new iU(UU.engine, cU.e.FromArray(XU.clearColor), cU.Color3.FromArray(XU.ambientColor));
-         (0, AU.e)(rU, zU), UU.sa = zU,
-           function(UU, XU) {
-             const zU = Object.assign((0, uU.i)(UU, "camera"), {
-               layerMask: 268435455
-             });
-             UU.model.nodes.setWorldSource(zU.row, UU.model.view.worldMatrix), UU.camera = XU.activeCamera = zU
-           }(UU, zU), (0, yU.i)(UU, ((UU, XU, zU) => (0, QU.g)(UU, XU, zU, FU.b)))
-       },
-       SyU: () => {},
- ... (36 more removed lines; see GitHub link above)
+     function oH(HH) {
+       return HH.toLowerCase()
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L408-L409` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L281) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L408-L409)

```diff
-     var mU = zU(42259),
-       lU = zU(39529);
+     const IH = "__rrweb_original__";
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L412` → after: `L284-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L284-L285) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L412)

```diff
-       return Math.max(4, 4 * Math.ceil(UU / 4))
+       const BH = HH.type;
+       return HH.hasAttribute("data-rr-is-password") ? "password" : BH ? oH(BH) : null
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L415-L422` → after: `L288-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L288-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L288-L296) · [Before (L415-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L415-L422)

```diff
-     function JU(UU, XU, zU, cU) {
-       const yU = UU.createBuffer({
-         label: cU,
-         size: xU(XU.byteLength),
-         usage: zU,
-         mappedAtCreation: !0
-       });
-       return new Uint8Array(yU.getMappedRange(), 0, XU.byteLength).set(new Uint8Array(XU.buffer, XU.byteOffset, XU.byteLength)), yU.unmap(), yU
+     function lH(HH, BH) {
+       let LH;
+       try {
+         LH = new URL(HH, BH ?? window.location.href)
+       } catch (rH) {
+         return null
+       }
+       const AH = LH.pathname.match(/\.([0-9a-z]+)(?:$)/i);
+       return (null == AH ? void 0 : AH[1]) ?? null
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L426` → after: `L304-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L304-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L304-L318) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L426)

```diff
-       return Math.floor(Math.log2(Math.max(UU, XU))) + 1
+       return (HH || "").replace(KH, ((HH, LH, AH, rH, SH, hH) => {
+         const tH = AH || SH || hH,
+           zH = LH || rH || "";
+         if (!tH) return HH;
+         if (cH.test(tH) || eH.test(tH)) return `url(${zH}${tH}${zH})`;
+         if (qH.test(tH)) return `url(${zH}${tH}${zH})`;
+         if ("/" === tH[0]) return `url(${zH}${function(HH){let BH="";return BH=HH.indexOf("//")>-1?HH.split("/").slice(0,3).join("/"):HH.split("/")[0],BH=BH.split("?")[0],BH}(BH)+tH}${zH})`;
+         const CH = tH.split("#")[0],
+           EH = tH.substring(CH.length),
+           XH = BH.split("#")[0].split("/"),
+           GH = CH.split("/");
+         XH.pop();
+         for (const BH of GH) "." !== BH && (".." === BH ? XH.pop() : XH.push(BH));
+         return `url(${zH}${XH.join("/")}${EH}${zH})`
+       }))
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L429-L474` → after: `L324-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L324-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L324-L371) · [Before (L429-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L429-L474)

```diff
-     function KU(UU, XU, zU, cU, yU, QU) {
-       const AU = UU.createTexture({
-           label: QU,
-           size: {
-             width: zU,
-             height: cU,
-             depthOrArrayLayers: yU
-           },
-           format: "rgba8unorm",
-           mipLevelCount: jU(zU, cU),
-           usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
-         }),
-         FU = (XU, zU, cU, QU) => {
-           UU.queue.writeTexture({
-             texture: AU,
-             mipLevel: zU
- ... (30 more removed lines; see GitHub link above)
+     function nH(HH) {
+       return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? HH.replace(jH, "") : HH.replace(RH, "$1")
+     }
+ 
+     function FH(HH, BH) {
+       return function(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         const AH = Array.from(BH.childNodes),
+           rH = [];
+         let SH = 0;
+         if (AH.length > 1 && HH && "string" === typeof HH) {
+           let BH = nH(HH, LH);
+           const hH = BH.length / HH.length;
+           for (let tH = 1; tH < AH.length; tH++)
+             if (AH[tH].textContent && "string" === typeof AH[tH].textContent) {
+               const zH = nH(AH[tH].textContent, LH),
+ ... (32 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L478-L485` → after: `L375-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L375-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L375-L377) · [Before (L478-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L478-L485)

```diff
-             yield {
-               data: zU,
-               width: UU,
-               height: XU
-             }, yU = zU, QU = UU, AU = XU
-           }
-         }(XU, zU, cU, yU)) FU(DU.data, oU++, DU.width, DU.height);
-       return AU
+         }
+         return rH.push(HH), rH
+       }(HH, BH).join("/* rr_split */")
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L487-L490` → after: `L379-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L379-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L379-L380) · [Before (L487-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L487-L490)

```diff
-     const bU = {
-       premultiplyAlpha: "none",
-       colorSpaceConversion: "none"
-     };
+     let DH = 1;
+     const wH = new RegExp("[^a-z0-9-_:]");
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L492-L497` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L382-L383) · [Before (L492-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L492-L497)

```diff
-     function TU(UU) {
-       if (UU.startsWith("data:")) {
-         const XU = UU.search(/[;,]/);
-         return `data:${XU>5?UU.slice(5,XU):""} URL of ${UU.length} characters`
-       }
-       return UU.length > 80 ? `${UU.slice(0,80)}...` : UU
+     function ZH() {
+       return DH++
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L499-L502` → after: `L385-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L385-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L385-L391) · [Before (L499-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L499-L502)

```diff
-     async function hU(UU) {
-       const XU = await fetch(UU);
-       if (!XU.ok) throw new Error(`${TU(UU)}: ${XU.status} ${XU.statusText}`);
-       return createImageBitmap(await XU.blob(), bU)
+     let dH, aH;
+     const sH = /^[^ \t\n\r\u000c]+/,
+       JH = /^[, \t\n\r\u000c]+/;
+     const iH = new WeakMap;
+ 
+     function pH(HH, BH) {
+       return BH && "" !== BH.trim() ? HB(HH, BH) : BH
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L504-L519` → after: `L393-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L393-L395) · [Before (L504-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L504-L519)

```diff
-     async function UX(UU) {
-       const XU = await hU(UU),
-         zU = new OffscreenCanvas(XU.width, XU.height),
-         cU = zU.getContext("2d", {
-           willReadFrequently: !0
-         });
-       if (!cU) throw new Error("No 2D context to decode an image");
-       cU.drawImage(XU, 0, 0);
-       const {
-         data: yU
-       } = cU.getImageData(0, 0, XU.width, XU.height);
-       return XU.close(), {
-         pixels: new Uint8Array(yU.buffer, yU.byteOffset, yU.byteLength),
-         width: zU.width,
-         height: zU.height
-       }
+ 
+     function yH(HH) {
+       return Boolean("svg" === HH.tagName || HH.ownerSVGElement)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L523-L538` → after: `L399-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L399-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L399-L428) · [Before (L523-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L523-L538)

```diff
-       return (0, mU.g)(UU, XU.urls, (async () => {
-         const zU = await Promise.all(XU.urls.map((async (UU, zU) => {
-             var cU, yU, QU, AU, FU;
-             return null !== (AU = null !== (yU = null === (QU = XU.pixels) || void 0 === QU ? void 0 : QU[zU]) && void 0 !== yU ? yU : null, FU = XU.layerWidth, cU = null !== AU && void 0 !== AU && AU.byteLength && FU && AU.byteLength % (FU * FU * 4) === 0 ? {
-               pixels: AU,
-               layerWidth: FU,
-               layers: AU.byteLength / (FU * FU * 4)
-             } : null) && void 0 !== cU ? cU : await async function(UU) {
-               const {
-                 pixels: XU,
-                 width: zU
-               } = await UX(UU);
-               return {
-                 pixels: XU,
-                 layerWidth: zU,
-                 layers: XU.byteLength / (zU * zU * 4)
+       let LH = iH.get(HH);
+       if (LH || (LH = HH.createElement("a"), iH.set(HH, LH)), BH) {
+         if (BH.startsWith("blob:") || BH.startsWith("data:")) return BH
+       } else BH = "";
+       return LH.setAttribute("href", BH), LH.href
+     }
+ 
+     function BB(HH, BH, LH, AH) {
+       return AH ? "src" === LH || "href" === LH && ("use" !== BH || "#" !== AH[0]) || "xlink:href" === LH && "#" !== AH[0] || "background" === LH && ["table", "td", "th"].includes(BH) ? pH(HH, AH) : "srcset" === LH ? function(HH, BH) {
+         if ("" === BH.trim()) return BH;
+         let LH = 0;
+ 
+         function AH(HH) {
+           let AH;
+           const rH = HH.exec(BH.substring(LH));
+           return rH ? (AH = rH[0], LH += AH.length, AH) : ""
+ ... (14 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L540-L551` → after: `L430-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L430-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L430-L439) · [Before (L540-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L540-L551)

```diff
-             }(UU)
-           }))),
-           cU = zU[0].layerWidth;
-         return (0, mU.d)(zU, cU, UU.limits.maxTextureArrayLayers).map(((zU, yU) => {
-           let {
-             pixels: QU,
-             layers: AU
-           } = zU;
-           return {
-             texture: KU(UU, QU, cU, cU, AU, `atlas-${yU}-${TU(XU.urls[0])}`),
-             layerWidth: cU,
-             layers: AU
+               if (hH) ")" === HH && (hH = !1);
+               else {
+                 if ("," === HH) {
+                   LH += 1, rH.push((SH + AH).trim());
+                   break
+                 }
+                 "(" === HH && (hH = !0)
+               }
+               AH += HH, LH += 1
+             }
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L553-L554` → after: `L441-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L441-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L441-L443) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L553-L554)

```diff
-         }))
-       }))
+         }
+         return rH.join(", ")
+       }(HH, AH) : "style" === LH ? gH(AH, HB(HH)) : "object" === BH && "data" === LH ? pH(HH, AH) : AH : AH
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L587-L590` → after: `L446-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L446-L447) · [Before (L587-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L587-L590)

```diff
-     function yX(UU) {
-       for (const XU of (0, lU.h)(UU))
-         if (!cX.has((0, lU.g)(XU))) return !1;
-       return !0
+     function LB(HH, BH, LH) {
+       return ["video", "audio"].includes(HH) && "autoplay" === oH(BH)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L593-L600` → after: `L450-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L450-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L450-L455) · [Before (L593-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L593-L600)

```diff
-     function QX(UU) {
-       const XU = cX.get(UU);
-       if (!XU) return null;
-       const [zU, cU, yU] = XU;
-       return {
-         srcFactor: zX.get(zU),
-         dstFactor: zX.get(cU),
-         operation: yU
+     function AB(HH, BH, LH) {
+       if (!HH) return !1;
+       if (HH.nodeType !== HH.ELEMENT_NODE) return !!LH && AB(vH.parentNode(HH), BH, LH);
+       for (let AH = HH.classList.length; AH--;) {
+         const LH = HH.classList[AH];
+         if (BH.test(LH)) return !0
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L605-L606` → after: `L460-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L460-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L460-L479) · [Before (L605-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L605-L606)

```diff
-     function FX(UU) {
-       AX = UU
+     function rB(HH, BH, LH, AH) {
+       let rH;
+       if (PH(HH)) {
+         if (rH = HH, !vH.childNodes(rH).length) return !1
+       } else {
+         if (null === vH.parentElement(HH)) return !1;
+         rH = vH.parentElement(HH)
+       }
+       try {
+         if ("string" === typeof BH) {
+           if (AH) {
+             if (rH.closest(`.${BH}`)) return !0
+           } else if (rH.classList.contains(BH)) return !0
+         } else if (AB(rH, BH, AH)) return !0;
+         if (LH)
+           if (AH) {
+ ... (4 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L610-L611` → after: `L482-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L482-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L482-L694) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L610-L611)

```diff
-     function DX(UU) {
-       return oX.has(UU)
+     function SB(HH, BH) {
+       const {
+         doc: LH,
+         mirror: AH,
+         blockClass: rH,
+         blockSelector: SH,
+         needsMask: hH,
+         inlineStylesheet: tH,
+         maskInputOptions: CH = {},
+         maskTextFn: EH,
+         maskInputFn: XH,
+         dataURLOptions: GH = {},
+         inlineImages: YH,
+         recordCanvas: uH,
+         keepIframeSrcFn: QH,
+         newlyAddedElement: WH = !1,
+ ... (197 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L614-L617` → after: `L697-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L697-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L697-L698) · [Before (L614-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L614-L617)

```diff
-     function EX(UU, XU, zU, cU) {
-       let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-       var QU;
-       DX(UU) || (null === (QU = AX) || void 0 === QU || QU(XU, zU, cU, yU))
+     function hB(HH) {
+       return void 0 === HH || null === HH ? "" : HH.toLowerCase()
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L619-L633` → after: `L700-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L700-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L700-L714) · [Before (L619-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L619-L633)

```diff
-     class YX {
-       constructor(UU) {
-         this.resources = UU, this.matrixKey = {
-           xY: 0
-         }, this.attributesKey = {
-           xY: 0
-         }, this.inputs = Object.create(null);
-         for (let XU = 0; XU < 4; XU++) this.inputs[`world${XU}`] = new pX(this.matrixKey, 16 * XU, 64, 4)
-       }
-       release() {
-         this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
-       }
-       bind(UU, XU) {
-         this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, UU, !0), XU && this.resources.vertexBufferCreated(this.attributesKey, XU, !0)
-       }
+ 
+     function tB(HH) {
+       return !0 === HH || "all" === HH ? {
+         script: !0,
+         comment: !0,
+         headFavicon: !0,
+         headWhitespace: !0,
+         headMetaSocial: !0,
+         headMetaRobots: !0,
+         headMetaHttpEquiv: !0,
+         headMetaVerification: !0,
+         headMetaAuthorship: "all" === HH,
+         headMetaDescKeywords: "all" === HH,
+         headTitleMutations: "all" === HH
+       } : HH || {}
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L635-L641` → after: `L716-L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L716-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L716-L781) · [Before (L635-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L635-L641)

```diff
-     class NX extends YX {
-       constructor(UU, XU, zU) {
-         super(UU), this.mesh = XU, this.rowStride = void 0, this.matrices = null, this.attributes = null;
-         const cU = this.inputs;
-         let yU = 0;
-         for (const {
-             size: AU
+ 
+     function zB(HH, BH) {
+       const {
+         doc: LH,
+         mirror: AH,
+         blockClass: rH,
+         blockSelector: SH,
+         maskTextClass: hH,
+         maskTextSelector: tH,
+         skipChild: CH = !1,
+         inlineStylesheet: EH = !0,
+         maskInputOptions: XH = {},
+         maskTextFn: GH,
+         maskInputFn: YH,
+         slimDOMOptions: uH,
+         dataURLOptions: QH = {},
+ ... (50 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L643-L648` → after: `L783-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L783-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L783-L830) · [Before (L643-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L643-L648)

```diff
-           of zU) yU += AU;
-         for (const {
-             name: AU,
-             offset: FU,
-             size: oU,
-             type: DU
+         }
+         return !1
+       }(cH, uH) || !KH && cH.type === zH.Text && !cH.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : ZH();
+       const qH = Object.assign(cH, {
+         id: eH
+       });
+       if (AH.add(HH, qH), -2 === eH) return null;
+       xH && xH(HH);
+       let gH = !CH;
+       if (qH.type === zH.Element) {
+         gH = gH && !qH.needBlock, delete qH.needBlock;
+         const BH = vH.shadowRoot(HH);
+         BH && UH(BH) && (qH.isShadowHost = !0)
+       }
+       if ((qH.type === zH.Document || qH.type === zH.Element) && gH) {
+         uH.headWhitespace && qH.type === zH.Element && "head" === qH.tagName && (KH = !1);
+ ... (32 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L711-L721` → after: `L833-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L833-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L833-L842) · [Before (L711-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L711-L721)

```diff
-         let QU = 0;
-         XU.renderSelf && this.packRow(QU++, UU, XU.row, zU);
-         for (let AU = 0; AU < XU.rows.length; AU++) this.packRow(QU++, XU.instances[AU], XU.rows[AU], zU);
-         this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * yU), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, yU * this.rowStride)
-       }
-       packRow(UU, XU, zU, cU) {
-         const yU = this.matrices;
-         if (zU < 0) yU.set(XU.getWorldMatrix().m, 16 * UU);
-         else
-           for (let DU = 0; DU < 16; DU++) yU[16 * UU + DU] = cU[16 * zU + DU];
-         const QU = this.attributes;
+         let TH = null;
+         if (PH(HH) && (TH = vH.shadowRoot(HH)))
+           for (const HH of Array.from(vH.childNodes(TH))) {
+             const LH = zB(HH, BH);
+             LH && (UH(TH) && (LH.isShadow = !0), qH.childNodes.push(LH))
+           }
+       }
+       const NH = vH.parentNode(HH);
+       return NH && TH(NH) && UH(NH) && (qH.isShadow = !0), qH.type === zH.Element && "iframe" === qH.tagName && function(HH, BH, LH) {
+         const AH = HH.contentWindow;
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L723-L729` → after: `L844-L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L844-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L844-L848) · [Before (L723-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L723-L729)

```diff
-         const AU = XU.XM,
-           FU = this.layout;
-         for (let DU = 0; DU < FU.length; DU++) {
-           var oU;
-           const XU = null !== (oU = AU[FU[DU]]) && void 0 !== oU ? oU : 0,
-             zU = UU * this.rowStride + this.offsets[DU];
-           XU.toArray ? XU.toArray(QU, zU) : XU.copyToArray ? XU.copyToArray(QU, zU) : QU[zU] = XU
+         let rH, SH = !1;
+         try {
+           rH = AH.document.readyState
+         } catch (tH) {
+           return
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L731-L748` → after: `L850-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L850-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L850-L934) · [Before (L731-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L731-L748)

```diff
-       }
-     }
-     class pX {
-       constructor(UU, XU, zU, cU) {
-         let yU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-           QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
-           AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-         this.key = UU, this.byteOffset = XU, this.byteStride = zU, this.size = cU, this.instanced = yU, this.type = QU, this.normalized = AU
-       }
-       getBuffer() {
-         return this.key
-       }
-       getSize() {
-         return this.size
-       }
-       getIsInstanced() {
- ... (2 more removed lines; see GitHub link above)
+         if ("complete" !== rH) {
+           const AH = setTimeout((() => {
+             SH || (BH(), SH = !0)
+           }), LH);
+           return void HH.addEventListener("load", (() => {
+             clearTimeout(AH), SH = !0, BH()
+           }))
+         }
+         const hH = "about:blank";
+         if (AH.location.href !== hH || HH.src === hH || "" === HH.src) return setTimeout(BH, 0), HH.addEventListener("load", BH);
+         HH.addEventListener("load", BH)
+       }(HH, (() => {
+         const BH = HH.contentDocument;
+         if (BH && VH) {
+           const LH = zB(BH, {
+             doc: BH,
+ ... (69 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L750-L751` → after: `L936-L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L936-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L936-L945) · [Before (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L750-L751)

```diff
-     const aX = "CANVAS_ALPHA_ONE",
-       tX = `override ${aX}: bool = false;`,
+     const CB = new RegExp(/(max|min)-device-(width|height)/.source, "g"),
+       EB = {
+         postcssPlugin: "postcss-custom-selectors",
+         prepare: () => ({
+           postcssPlugin: "postcss-custom-selectors",
+           AtRule: function(HH) {
+             HH.params.match(CB) && (HH.params = HH.params.replace(CB, "$1-$2"))
+           }
+         })
+       },
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L753-L755` → after: `L947-L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L947-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L947-L957) · [Before (L753-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L753-L755)

```diff
-         srcFactor: "zero",
-         dstFactor: "one",
-         operation: "add"
+         postcssPlugin: "postcss-hover-classes",
+         prepare: function() {
+           const HH = [];
+           return {
+             Rule: function(BH) {
+               -1 === HH.indexOf(BH) && (HH.push(BH), BH.selectors.forEach((function(HH) {
+                 HH.includes(":hover") && (BH.selector += ",\n" + HH.replace(/:hover/g, ".\\:hover"))
+               })))
+             }
+           }
+         }
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L800` → after: `L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L961) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L800)

```diff
-       return UU._currentEncoder
+       return HH && HH.__esModule && Object.prototype.hasOwnProperty.call(HH, "default") ? HH.default : HH
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L804-L867` → after: `L965-L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L965-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L965-L980) · [Before (L804-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L804-L867)

```diff
-       return UU.createBindGroupLayout({
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
- ... (48 more removed lines; see GitHub link above)
+       if (HH.__esModule) return HH;
+       var BH = HH.default;
+       if ("function" == typeof BH) {
+         var LH = function HH() {
+           return this instanceof HH ? Reflect.construct(BH, arguments, this.constructor) : BH.apply(this, arguments)
+         };
+         LH.prototype = BH.prototype
+       } else LH = {};
+       return Object.defineProperty(LH, "__esModule", {
+         value: !0
+       }), Object.keys(HH).forEach((function(BH) {
+         var AH = Object.getOwnPropertyDescriptor(HH, BH);
+         Object.defineProperty(LH, BH, AH.get ? AH : {
+           enumerable: !0,
+           get: function() {
+             return HH[BH]
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L869-L910` → after: `L982-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L982-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L982-L983) · [Before (L869-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L869-L910)

```diff
-         }), zU.pipelines.set(cU, yU)
-       }
-       return yU
-     }
- 
-     function wX(UU, XU, zU) {
-       const cU = XU.eye,
-         yU = XU.viewMatrix;
-       UU[0] = cU[0] + yU[2] * zU, UU[1] = cU[1] + yU[6] * zU, UU[2] = cU[2] + yU[10] * zU
-     }
-     var qX = zU(38700),
-       OX = zU(44273),
-       SX = zU(37961);
-     const rX = Math.PI,
-       uX = rX / 1.95,
-       fX = [5e-4 / 94, 125e-7, 5e-4 / 18],
- ... (26 more removed lines; see GitHub link above)
+         })
+       })), LH
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L912-L918` → after: `L985-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L985-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L985-L986) · [Before (L912-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L912-L918)

```diff
-     const MX = {
-       A: .15,
-       B: .5,
-       C: .1,
-       D: .2,
-       E: .02,
-       F: .3
+     var uB, QB = {
+       exports: {}
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L932-L933` → after: `L989-L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L989-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L989-L1023) · [Before (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L932-L933)

```diff
-     function VX(UU, XU, zU) {
-       return Math.min(Math.max(UU, XU), zU)
+     function WB() {
+       if (uB) return QB.exports;
+       uB = 1;
+       var HH = String,
+         BH = function() {
+           return {
+             isColorSupported: !1,
+             reset: HH,
+             bold: HH,
+             dim: HH,
+             italic: HH,
+             underline: HH,
+             inverse: HH,
+             hidden: HH,
+             strikethrough: HH,
+             black: HH,
+ ... (19 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L935` → after: `L1025-L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1025-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L1025-L1031) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L935)

```diff
-     const sX = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;
+     const MB = YB(Object.freeze(Object.defineProperty({
+       __proto__: null,
+       default: {}
+     }, Symbol.toStringTag, {
+       value: "Module"
+     })));
+     var xB, vB;
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L937-L980` → after: `L1033-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1033-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L1033-L1073) · [Before (L937-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L937-L980)

```diff
-     function nX(UU, XU) {
-       const zU = new Map(XU),
-         cU = [],
-         yU = [],
-         QU = () => 0 === yU.length || yU[yU.length - 1].active;
-       let AU = null;
-       const FU = () => {
-         const UU = [...zU].filter((UU => {
-             let [, XU] = UU;
-             return !0 !== XU
-           })),
-           XU = UU.map((UU => {
-             let [XU] = UU;
-             return XU
-           })).join("|");
-         AU = UU.length ? new RegExp(`\\b(${XU})\\b`, "g") : null
- ... (28 more removed lines; see GitHub link above)
+     function PB() {
+       if (vB) return xB;
+       vB = 1;
+       let HH = WB(),
+         BH = MB;
+       class LH extends Error {
+         constructor(HH, BH, AH, rH, SH, hH) {
+           super(HH), this.name = "CssSyntaxError", this.reason = HH, SH && (this.file = SH), rH && (this.source = rH), hH && (this.plugin = hH), "undefined" !== typeof BH && "undefined" !== typeof AH && ("number" === typeof BH ? (this.line = BH, this.column = AH) : (this.line = B … [truncated]
+         }
+         setMessage() {
+           this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
+         }
+         showSourceCode(LH) {
+           if (!this.source) return "";
+           let AH = this.source;
+           null == LH && (LH = HH.isColorSupported), BH && LH && (AH = BH(AH));
+ ... (25 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L983-L984` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L1076) · [Before (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L983-L984)

```diff
-       if (yU.length) throw new Error("Unterminated #if");
-       return cU.join("\n")
+       return xB = LH, LH.default = LH, xB
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L987-L991` → after: `L1080-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1080-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L1080-L1081) · [Before (L987-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L987-L991)

```diff
-     function mX(UU, XU, zU) {
-       return UU.replace(XU, (UU => {
-         const XU = zU.get(UU);
-         return "string" === typeof XU ? XU : UU
-       }))
+     function VL() {
+       return TB || (TB = 1, UL.isClean = Symbol("isClean"), UL.my = Symbol("my")), UL
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L994-L1036` → after: `L1084-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1084-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L1084-L1111) · [Before (L994-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L994-L1036)

```diff
-     function lX(UU, XU) {
-       var zU;
-       const cU = null !== (zU = UU.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== zU ? zU : [];
-       let yU = 0;
-       const QU = () => cU[yU],
-         AU = () => cU[yU++],
-         FU = UU => {
-           const zU = /^\d/.test(UU) ? UU : XU.get(UU);
-           return "string" === typeof zU ? parseInt(zU) : Number.NaN
-         },
-         oU = () => {
-           const UU = AU();
-           if ("!" === UU) return !oU();
-           if ("(" === UU) {
-             const UU = EU();
-             return AU(), UU
- ... (27 more removed lines; see GitHub link above)
+     function OL() {
+       if (VB) return UB;
+       VB = 1;
+       const HH = {
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

#### 66. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1038-L1046` → after: `L1113-L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1113-L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L1113-L1123) · [Before (L1038-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1038-L1046)

```diff
-           return XU.has(UU)
-         },
-         DU = () => {
-           let UU = oU();
-           for (;
-             "&&" === QU();) {
-             AU();
-             const XU = oU();
-             UU = UU && XU
+         }
+         beforeAfter(HH, BH) {
+           let LH;
+           LH = "decl" === HH.type ? this.raw(HH, null, "beforeDecl") : "comment" === HH.type ? this.raw(HH, null, "beforeComment") : "before" === BH ? this.raw(HH, null, "beforeRule") : this.raw(HH, null, "beforeClose");
+           let AH = HH.parent,
+             rH = 0;
+           for (; AH && "root" !== AH.type;) rH += 1, AH = AH.parent;
+           if (LH.includes("\n")) {
+             let BH = this.raw(HH, null, "indent");
+             if (BH.length)
+               for (let HH = 0; HH < rH; HH++) LH += BH
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1049-L1056` → after: `L1126-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1126-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L1126-L1138) · [Before (L1049-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1049-L1056)

```diff
-         },
-         EU = () => {
-           let UU = DU();
-           for (;
-             "||" === QU();) {
-             AU();
-             const XU = DU();
-             UU = UU || XU
+         }
+         block(HH, BH) {
+           let LH, AH = this.raw(HH, "between", "beforeOpen");
+           this.builder(BH + AH + "{", HH, "start"), HH.nodes && HH.nodes.length ? (this.body(HH), LH = this.raw(HH, "after")) : LH = this.raw(HH, "after", "emptyBody"), LH && this.builder(LH), this.builder("}", HH, "end")
+         }
+         body(HH) {
+           let BH = HH.nodes.length - 1;
+           for (; BH > 0 && "comment" === HH.nodes[BH].type;) BH -= 1;
+           let LH = this.raw(HH, "semicolon");
+           for (let AH = 0; AH < HH.nodes.length; AH++) {
+             let rH = HH.nodes[AH],
+               SH = this.raw(rH, "before");
+             SH && this.builder(SH), this.stringify(rH, BH !== AH || LH)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1243-L1249` → after: `L1141-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1141-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L1141-L1144) · [Before (L1243-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1243-L1249)

```diff
-         let AU = 0;
-         for (let oU = 0; oU < 16384; oU++) cU[oU] = AU, AU += XU[oU], XU[oU] = cU[oU];
-         cU[16384] = AU;
-         for (let oU = 0; oU < QU; oU++) {
-           const yU = 4 * oU;
-           for (let QU = zU[yU + 1]; QU <= zU[yU + 3]; QU++)
-             for (let AU = zU[yU]; AU <= zU[yU + 2]; AU++) cU[qz + XU[QU * UU + AU]++] = oU
+         comment(HH) {
+           let BH = this.raw(HH, "left", "commentLeft"),
+             LH = this.raw(HH, "right", "commentRight");
+           this.builder("/*" + BH + HH.text + LH + "*/", HH)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1251-L1261` → after: `L1146-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1146-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L1146-L1149) · [Before (L1251-L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1251-L1261)

```diff
-         const FU = this.floats;
-         for (let oU = 0; oU < 16384; oU++) {
-           const UU = qz + cU[oU],
-             XU = UU + Math.min(cU[oU + 1] - cU[oU], 64);
-           for (let zU = UU + 1; zU < XU; zU++) {
-             const XU = cU[zU],
-               yU = FU[81934 + XU * wz];
-             let QU = zU - 1;
-             for (; QU >= UU && FU[81934 + cU[QU] * wz] < yU; QU--) cU[QU + 1] = cU[QU];
-             cU[QU + 1] = XU
-           }
+         decl(HH, BH) {
+           let LH = this.raw(HH, "between", "colon"),
+             AH = HH.prop + LH + this.rawValue(HH, "value");
+           HH.important && (AH += HH.raws.important || " !important"), BH && (AH += ";"), this.builder(AH, HH)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1263-L1319` → after: `L1151-L2802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1151-L2802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L1151-L2802) · [Before (L1263-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1263-L1319)

```diff
-         this.refs = yU
-       }
-     }
- 
-     function Mz(UU) {
-       return Math.min(127, Math.max(0, Math.floor((.5 * UU + .5) * ez)))
-     }
- 
-     function vz(UU, XU, zU, cU, yU) {
-       for (let QU = 0; QU < 4; QU++)
-         for (let AU = 0; AU < 4; AU++) yU[4 * QU + AU] = UU[XU + 4 * QU] * zU[cU + AU] + UU[XU + 4 * QU + 1] * zU[cU + 4 + AU] + UU[XU + 4 * QU + 2] * zU[cU + 8 + AU] + UU[XU + 4 * QU + 3] * zU[cU + 12 + AU]
-     }
- 
-     function Vz(UU, XU, zU, cU, yU) {
-       const QU = UU[0] - XU,
-         AU = UU[1] - zU,
- ... (41 more removed lines; see GitHub link above)
+         document(HH) {
+           this.body(HH)
+         }
+         raw(BH, LH, AH) {
+           let rH;
+           if (AH || (AH = LH), LH && (rH = BH.raws[LH], "undefined" !== typeof rH)) return rH;
+           let SH = BH.parent;
+           if ("before" === AH) {
+             if (!SH || "root" === SH.type && SH.first === BH) return "";
+             if (SH && "document" === SH.type) return ""
+           }
+           if (!SH) return HH[AH];
+           let hH = BH.root();
+           if (hH.rawCache || (hH.rawCache = {}), "undefined" !== typeof hH.rawCache[AH]) return hH.rawCache[AH];
+           if ("before" === AH || "after" === AH) return this.beforeAfter(BH, AH);
+           {
+ ... (1636 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1321-L1324` → after: `L2804-L2806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2804-L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L2804-L2806) · [Before (L1321-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1321-L1324)

```diff
-     function mz(UU) {
-       const [XU, zU, cU] = nz.r;
-       return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${UU.group}) @binding(${UU.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeT … [truncated]
-     }
+       function GH(HH) {
+         return "object" === typeof HH && "function" === typeof HH.then
+       }
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1326-L1331` → after: `L2808-L3064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2808-L3064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L2808-L3064) · [Before (L1326-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1326-L1331)

```diff
-     function lz(UU) {
-       let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-         zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const [yU, QU, AU] = Uz, [FU, oU, DU] = hX, EU = Math.log2(TX), YU = cU ? "var<private> bloxdSpCrossed: bool;\n" : "", NU = cU ? "\t\t\tbloxdSpCrossed = true;\n" : "";
-       return `@group(${UU.group}) @binding(${UU.lN}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${UU.group}) @binding(${UU.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${zU?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${YU}struct BloxdSpBoxE … [truncated]
+       function YH(HH) {
+         let BH = !1,
+           LH = CH[HH.type];
+         return "decl" === HH.type ? BH = HH.prop.toLowerCase() : "atrule" === HH.type && (BH = HH.name.toLowerCase()), BH && HH.append ? [LH, LH + "-" + BH, 0, LH + "Exit", LH + "Exit-" + BH] : BH ? [LH, LH + "-" + BH, LH + "Exit", LH + "Exit-" + BH] : HH.append ? [LH, 0, LH + "E … [truncated]
+       }
+ 
+       function uH(HH) {
+         let BH;
+         return BH = "document" === HH.type ? ["Document", 0, "DocumentExit"] : "root" === HH.type ? ["Root", 0, "RootExit"] : YH(HH), {
+           eventIndex: 0,
+           events: BH,
+           iterator: 0,
+           node: HH,
+           visitorIndex: 0,
+           visitors: []
+         }
+ ... (241 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1343-L1347` → after: `L3068-L3195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3068-L3195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3068-L3195) · [Before (L1343-L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1343-L1347)

```diff
-       const UU = xz;
-       return `${mz(UU)}${lz(UU,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${nz.c}>,\n}\n@group(${UU.group}) @binding(${UU.work}) var<uniform> bloxd … [truncated]
-     }
-     const jz = 2;
-     const Kz = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";
+       if (ML) return WL;
+       ML = 1;
+       let HH = function() {
+           if (QL) return uL;
+           QL = 1;
+           let HH = lL(),
+             BH = bL(),
+             LH = (qL(), wL());
+           const AH = NL();
+           class rH {
+             constructor(LH, rH, SH) {
+               let hH;
+               rH = rH.toString(), this.stringified = !1, this._processor = LH, this._css = rH, this._opts = SH, this._map = void 0;
+               let tH = BH;
+               this.result = new AH(this._processor, hH, this._opts), this.result.css = rH;
+               let zH = this;
+ ... (112 more added lines; see GitHub link above)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1349-L1357` → after: `L3197-L3242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3197-L3242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3197-L3242) · [Before (L1349-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1349-L1357)

```diff
-     function bz(UU, XU) {
-       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
-       const cU = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${XU.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y … [truncated]
-         yU = "trace" === zU || "lit" === zU,
-         QU = "maskEdge" === zU ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
-         AU = yU ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${XU.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of step … [truncated]
-       return `${cU}${UU.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${yU?function(){const[UU,XU,zU]=nz.r;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif  … [truncated]
-     }
-     const Tz = "bloxdSpOwnTexture";
+           function tH(zH, CH) {
+             if (Array.isArray(zH)) return zH.map((HH => tH(HH)));
+             let {
+               inputs: EH,
+               ...XH
+             } = zH;
+             if (EH) {
+               CH = [];
+               for (let HH of EH) {
+                 let LH = {
+                   ...HH,
+                   __proto__: rH.prototype
+                 };
+                 LH.map && (LH.map = {
+                   ...LH.map,
+                   __proto__: BH.prototype
+ ... (30 more added lines; see GitHub link above)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1359-L1362` → after: `L3244-L3318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3244-L3318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3244-L3318) · [Before (L1359-L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1359-L1362)

```diff
-     function hz(UU) {
-       return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${UU.texture}) - 1u)))`
-     }
-     const Uc = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${qX.g.map((UU=>{let[XU,zU]=UU;return`\tbloxdSpOut.${XU} = (bloxdSpWord & ${zU}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;
+       function xH() {
+         for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
+         return 1 === BH.length && Array.isArray(BH[0]) && (BH = BH[0]), new rH(BH)
+       }
+       return xH.plugin = function(HH, BH) {
+         let LH, AH = !1;
+ 
+         function SH() {
+           console && console.warn && !AH && (AH = !0, console.warn(HH + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
+             NODE_ENV: "production",
+             PUBLIC_URL: "",
+             WDS_SOCKET_HOST: void 0,
+             WDS_SOCKET_PATH: void 0,
+             WDS_SOCKET_PORT: void 0,
+             FAST_REFRESH: !0,
+             REACT_APP_DEV_URLS: "false"
+ ... (59 more added lines; see GitHub link above)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1364-L1365` → after: `L3320-L3329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3320-L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3320-L3329) · [Before (L1364-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1364-L1365)

```diff
-     function Xc(UU) {
-       return `bloxdSpFlags(${UU})`
+     function JL(HH, BH) {
+       const LH = null == BH ? void 0 : BH.stylesWithHoverClass.get(HH);
+       if (LH) return LH;
+       let AH = HH;
+       try {
+         AH = aL([EB, XB]).process(HH).css
+       } catch (rH) {
+         console.warn("Failed to adapt css for replay", rH)
+       }
+       return null == BH || BH.stylesWithHoverClass.set(HH, AH), AH
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1369-L1372` → after: `L3332-L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3332-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3332-L3335) · [Before (L1369-L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1369-L1372)

```diff
-     function cc(UU, XU, zU, cU, yU) {
-       const QU = UU.indexOf(XU);
-       if (QU < 0 || UU.indexOf(XU, QU + 1) >= 0) throw new Error(`Lite's ${yU} program changed at the shader pack ${cU} hook: ${QU<0?"no":"more than one"} anchor (lite/${yU}ShaderPack.ts)`);
-       return UU.slice(0, QU) + zU + UU.slice(QU + XU.length)
+     function iL() {
+       return {
+         stylesWithHoverClass: new Map
+       }
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1376` → after: `L3341-L3348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3341-L3348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3341-L3348) · [Before (L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1376)

```diff
-       return UU.sunShadow || UU.airShadow
+       if (HH.UNSAFE_allowUnprotectedRebuild) return;
+       const BH = HH.doc.defaultView;
+       if (BH && (!yL.has(HH.doc) || ! function(HH) {
+           if (!HH || "IFRAME" !== HH.tagName) return !1;
+           if (!("sandbox" in HH)) return !1;
+           const BH = Array.from(HH.sandbox);
+           return 1 === BH.length && "allow-same-origin" === BH[0]
+         }(BH.frameElement))) throw new Error("rrweb-snapshot.rebuild() cannot rebuild into an unprotected browser document. Use rebuildIntoSandboxedIframe() or set UNSAFE_allowUnprotectedRebuild: true only when you accept the script-execution risk.")
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1379-L1380` → after: `L3351-L3386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3351-L3386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3351-L3386) · [Before (L1379-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1379-L1380)

```diff
-     function Qc(UU, XU) {
-       return XU && yc(UU)
+     function BA(HH, BH, LH, AH) {
+       const {
+         doc: rH,
+         hackCss: SH,
+         cache: hH
+       } = AH;
+       HH.childNodes.length ? function(HH, BH, LH, AH) {
+         const rH = [];
+         for (const EH of HH.childNodes) EH.type === zH.Text && rH.push(EH);
+         const SH = BH.split("/* rr_split */");
+         for (; SH.length > 1 && SH.length > rH.length;) SH.splice(-2, 2, SH.slice(-2).join(""));
+         let hH = "";
+         LH && (hH = JL(SH.join(""), AH));
+         let tH = 0,
+           CH = -1;
+         for (let zH = 0; zH < rH.length && zH !== SH.length; zH++) {
+ ... (20 more added lines; see GitHub link above)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1406` → after: `L3391-L3478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3391-L3478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3391-L3478) · [Before (L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1406)

```diff
-       return `${UU.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${UU.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
+       const {
+         doc: AH,
+         hackCss: rH,
+         cache: SH
+       } = BH;
+       switch (HH.type) {
+         case zH.Document:
+           return AH.implementation.createDocument(null, "", null);
+         case zH.DocumentType:
+           return AH.implementation.createDocumentType(HH.name || "html", HH.publicId, HH.systemId);
+         case zH.Element: {
+           const rH = function(HH) {
+             let BH = sL[HH.tagName] ? sL[HH.tagName] : HH.tagName;
+             return "link" === BH && HH.attributes._cssText && (BH = "style"), BH
+           }(HH);
+           let SH;
+ ... (72 more added lines; see GitHub link above)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1409-L1415` → after: `L3481-L3494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3481-L3494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3481-L3494) · [Before (L1409-L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1409-L1415)

```diff
-     function oc(UU, XU, zU, cU) {
-       let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
-       if (!XU) return "";
-       const QU = (AU = "fragmentInputs.vPositionW", FU = UU.sunShadow ? {
-         normal: zU,
-         flags: cU
-       } : null, `\n\tbloxdSpShadowPosition = ${AU};\n${FU?`\tbloxdSpShadowNormal = normalize(${FU.normal});\n\tbloxdSpShadowEmissive = (${FU.flags} & ${qX.e.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${FU.flags} & ${qX.i}u) != 0u;\n`:""}`);
+     function AA(HH, BH) {
+       const {
+         doc: LH,
+         mirror: AH,
+         skipChild: rH = !1,
+         hackCss: SH = !0,
+         afterAppend: hH,
+         cache: tH
+       } = BH;
+       if (AH.has(HH.id)) {
+         const BH = AH.yAH(HH.id),
+           LH = AH.getMeta(BH);
+         if (EH = HH, (CH = LH) && EH && CH.type === EH.type && (CH.type === zH.Document ? CH.compatMode === EH.compatMode : CH.type === zH.DocumentType ? CH.name === EH.name && CH.publicId === EH.publicId && CH.systemId === EH.systemId : CH.type === zH.Comment || CH.type === zH.T … [truncated]
+       }
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1417-L1418` → after: `L3496-L3524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3496-L3524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3496-L3524) · [Before (L1417-L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1417-L1418)

```diff
-       return UU.sunShadow && ("mask" === yU || "maskEdge" === yU) ? `${QU}${oU="fragmentInputs.position",DU="maskEdge"===yU,`\n\tbloxdSpShadowPixel = vec2i(${oU}.xy);\n${DU?`\tbloxdSpShadowZ = ${oU}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${oU}.z), dpdy(${oU}.z));\n`:""}`}` : QU;
-       var oU, DU
+       let XH = LA(HH, {
+         doc: LH,
+         hackCss: SH,
+         cache: tH
+       });
+       if (!XH) return null;
+       if (HH.rootId && AH.yAH(HH.rootId) !== LH && AH.replace(HH.rootId, LH), HH.type === zH.Document && (LH.close(), LH.open(), "BackCompat" === HH.compatMode && HH.childNodes && HH.childNodes[0].type !== zH.DocumentType && (HH.childNodes[0].type === zH.Element && "xmlns" in HH. … [truncated]
+         for (const GH of HH.childNodes) {
+           const BH = AA(GH, {
+             doc: LH,
+             mirror: AH,
+             skipChild: !1,
+             hackCss: SH,
+             afterAppend: hH,
+             cache: tH
+           });
+ ... (13 more added lines; see GitHub link above)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1424-L1425` → after: `L3527-L3559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3527-L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3527-L3559) · [Before (L1424-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1424-L1425)

```diff
-     function Nc(UU) {
-       return `\tvertexOutputs.vPackTexture = ${Ec}[min(u32(${UU}), arrayLength(&${Ec}) - 1u)];\n`
+     function rA(HH, BH) {
+       HA(BH);
+       const {
+         doc: LH,
+         onVisit: AH,
+         hackCss: rH = !0,
+         afterAppend: SH,
+         cache: hH,
+         mirror: tH = new bH
+       } = BH, CH = AA(HH, {
+         doc: LH,
+         mirror: tH,
+         skipChild: !1,
+         hackCss: rH,
+         afterAppend: SH,
+         cache: hH
+ ... (17 more added lines; see GitHub link above)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1429` → after: `L3622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3622) · [Before (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1429)

```diff
-       return void 0 !== UU.uv
+       return HH && HH.__esModule && Object.prototype.hasOwnProperty.call(HH, "default") ? HH.default : HH
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1433-L1455` → after: `L3626-L3630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3626-L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3626-L3630) · [Before (L1433-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1433-L1455)

```diff
-       if (!UU) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
-       if (Ic(UU)) return function(UU) {
-         const {
-           texture: XU,
-           cells: zU,
-           layers: cU
-         } = UU, yU = `textureDimensions(${XU}, bloxdSpLevel)`, QU = zU ? `max(vec2u(vec2f(${yU}) / ${zU}), vec2u(1u))` : yU, AU = zU ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${QU};\n\tlet bloxdSpIndex = u32( … [truncated]
-         let FU;
-         if (zU)
-           if (1 === cU.length) FU = `\treturn bloxdSpOwnTexel(${cU[0]}, bloxdSpUv, bloxdSpLevel);\n`;
-           else {
-             const UU = cU.length - 1;
-             FU = `\tvar bloxdSpColour = bloxdSpOwnTexel(${cU[UU]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
-             for (let XU = UU - 1; XU >= 0; XU--) FU += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${cU[XU]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a)) … [truncated]
-             FU += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
-           }
- ... (7 more removed lines; see GitHub link above)
+       if (HH.__esModule) return HH;
+       var BH = HH.default;
+       if ("function" == typeof BH) {
+         var LH = function HH() {
+           return this instanceof HH ? Reflect.construct(BH, arguments, this.constructor) : BH.apply(this, arguments)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1457-L1466` → after: `L3632-L3644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3632-L3644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3632-L3644) · [Before (L1457-L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1457-L1466)

```diff
-       let cU = "";
-       for (let QU = 0; QU < XU.count - 1; QU++) cU += `\tif (bloxdSpLayer < ${XU.layers*(QU+1)}u) {\n\t\t${zU(QU)}\n\t}\n`;
-       const yU = XU.frame ? `${XU.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
-       return `var<private> ${Dc}: u32;\n${Yc}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: ve … [truncated]
-     }
- 
-     function ac(UU, XU, zU) {
-       return !!UU.surface && "bloxdDefaultSurface" !== UU.surface && function(UU, XU) {
-         return "liquid" === XU || !UU
-       }(XU, zU)
+         LH.prototype = BH.prototype
+       } else LH = {};
+       return Object.defineProperty(LH, "__esModule", {
+         value: !0
+       }), Object.keys(HH).forEach((function(BH) {
+         var AH = Object.getOwnPropertyDescriptor(HH, BH);
+         Object.defineProperty(LH, BH, AH.get ? AH : {
+           enumerable: !0,
+           get: function() {
+             return HH[BH]
+           }
+         })
+       })), LH
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1469-L1470` → after: `L3650-L3684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3650-L3684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3650-L3684) · [Before (L1469-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1469-L1470)

```diff
-     function tc(UU, XU) {
-       return UU.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${XU.vertexLocalPosition}, ${Xc(XU.vertexFlags)});\n\t\tlet bloxdSpVertex = ${UU.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t … [truncated]
+     function uA() {
+       if (GA) return YA.exports;
+       GA = 1;
+       var HH = String,
+         BH = function() {
+           return {
+             isColorSupported: !1,
+             reset: HH,
+             bold: HH,
+             dim: HH,
+             italic: HH,
+             underline: HH,
+             inverse: HH,
+             hidden: HH,
+             strikethrough: HH,
+             black: HH,
+ ... (19 more added lines; see GitHub link above)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1473-L1487` → after: `L3694-L3737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3694-L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3694-L3737) · [Before (L1473-L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1473-L1487)

```diff
-     function gc(UU, XU, zU, cU, yU) {
-       if (!UU.surface) return "";
-       const QU = (UU, XU) => `\n\tlet bloxdSpTexelUV = ${UU};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = cl … [truncated]
-       let AU = "",
-         FU = "0u, 0u, vec2f(0.0), 0.0";
-       const oU = cU && Ic(cU) ? cU : null,
-         DU = cU && !Ic(cU) ? cU : null;
-       if (oU) {
-         AU = `${oU.id?`\n\tlet bloxdSpTexture = ${oU.id};\n\t${Tz} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${oU.uv};${QU(function(UU,XU){var zU;return`${null!==(zU=UU.levelUv)&&void 0!==zU?zU:UU.cells?`${XU} / ${UU.cells}`:XU} * vec2f(textureDimensions(${UU.texture})) … [truncated]
-       } else DU && (AU = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${Dc} = bloxdSpTexture >> 16u;${QU(`fragmentInputs.vMainUV1 * ${(0,xX.Ab)(DU.width)}`,"textureAtlas0")}`, FU = `bloxdSpTexture & 0xffffu, ${Dc}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
-       const EU = yU.overlayColour,
-         YU = EU ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
-         NU = "bloxdDefaultSurface" !== UU.surface || EU ? `\n\tbaseColor = vec4f(${YU}, baseColor.a);` : "",
-         IU = ac(UU, XU, zU) ? `\n\t${yU.alphaOut} = bloxdSpSurface.alpha;` : "";
-       return `${AU}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${yU.alpha}, ${yU.enchantTier}, ${yU.enchantColour}, ${yU.enchantSpeed}, ${null!==EU&&void 0!==EU?EU:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${yU.normal}, ${yU.localPosition}, ${Xc(yU.flags)}, ${FU});\n … [truncated]
+     function xA() {
+       if (MA) return WA;
+       MA = 1;
+       let HH = uA(),
+         BH = QA;
+       class LH extends Error {
+         constructor(HH, BH, AH, rH, SH, hH) {
+           super(HH), this.name = "CssSyntaxError", this.reason = HH, SH && (this.file = SH), rH && (this.source = rH), hH && (this.plugin = hH), "undefined" !== typeof BH && "undefined" !== typeof AH && ("number" === typeof BH ? (this.line = BH, this.column = AH) : (this.line = B … [truncated]
+         }
+         setMessage() {
+           this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
+         }
+         showSourceCode(LH) {
+           if (!this.source) return "";
+           let AH = this.source;
+           null == LH && (LH = HH.isColorSupported), BH && LH && (AH = BH(AH));
+ ... (28 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1489` → after: `L3739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3739) · [Before (L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1489)

```diff
-     const kc = "bloxdSpLightIn";
+     var vA, PA, TA, UA, VA, OA, bA, kA, mA, oA, IA, fA, lA, KA, cA, eA, qA, gA, NA, RA, jA, nA, FA, DA, wA, ZA, dA, aA, sA, JA, iA, pA, yA, Hr, Br, Lr, Ar, rr, Sr, hr, tr, zr, Cr, Er, Xr, Gr, Yr, ur, Qr, Wr, Mr, xr, vr, Pr = {};
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1491-L1503` → after: `L3741-L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3741-L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3741-L3742) · [Before (L1491-L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1491-L1503)

```diff
-     function Gc(UU, XU, zU, cU) {
-       if (!UU.light) return "";
-       const yU = XU ? `${xX.m}.rgb, ${xX.m}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${xX.j}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
-         {
-           lambert: QU,
-           diffuse: AU,
-           emissive: FU,
-           ambient: oU,
-           fogColour: DU,
-           fogAlpha: EU,
-           normal: YU
-         } = cU;
-       return `\tvar ${kc} = BloxdLightIn(vec3f(0.0), ${zU?QU:"0.0"}, ${AU}, ${FU}, ${oU}, ${yU}, ${DU}, ${EU}, fragmentInputs.vPositionW, ${YU}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn. … [truncated]
+     function Tr() {
+       return vA || (vA = 1, Pr.isClean = Symbol("isClean"), Pr.my = Symbol("my")), Pr
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1506-L1529` → after: `L3745-L3760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3745-L3760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3745-L3760) · [Before (L1506-L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1506-L1529)

```diff
-     function Bc(UU) {
-       return UU.light ? `\n\t{\n\t\tlet bloxdSpLight = ${UU.light}(bloxdSpSurface, ${kc});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
-     }
-     const Zc = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
-       Rc = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
-       Pc = "\treturn color;\n}",
-       Wc = {
-         vertexFlags: "vertexOutputs.vBlockFlags",
-         vertexLocalPosition: "vec3f(0.0)",
-         flags: "fragmentInputs.vBlockFlags",
-         normal: "normalize(fragmentInputs.vNormalW)",
-         alpha: "alpha",
-         alphaOut: "alpha",
-         lambert: "fragmentInputs.vTerrainLambert",
-         diffuse: "material.vDiffuseColor.rgb",
-         emissive: "material.emissiveAndLevel.xyz",
- ... (8 more removed lines; see GitHub link above)
+     function Ur() {
+       if (TA) return PA;
+       TA = 1;
+       const HH = {
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
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1531-L1535` → after: `L3762-L3911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3762-L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3762-L3911) · [Before (L1531-L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1531-L1535)

```diff
-     const dc = Object.freeze({});
- 
-     function Lc(UU) {
-       var XU;
-       return !(null === (XU = (0, bX.e)(UU)) || void 0 === XU || !XU.sceneDepth)
+       class BH {
+         constructor(HH) {
+           this.builder = HH
+         }
+         atrule(HH, BH) {
+           let LH = "@" + HH.name,
+             AH = HH.params ? this.rawValue(HH, "params") : "";
+           if ("undefined" !== typeof HH.raws.afterName ? LH += HH.raws.afterName : AH && (LH += " "), HH.nodes) this.block(HH, LH + AH);
+           else {
+             let rH = (HH.raws.between || "") + (BH ? ";" : "");
+             this.builder(LH + AH + rH, HH)
+           }
+         }
+         beforeAfter(HH, BH) {
+           let LH;
+           LH = "decl" === HH.type ? this.raw(HH, null, "beforeDecl") : "comment" === HH.type ? this.raw(HH, null, "beforeComment") : "before" === BH ? this.raw(HH, null, "beforeRule") : this.raw(HH, null, "beforeClose");
+ ... (134 more added lines; see GitHub link above)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1538-L1541` → after: `L3914-L3917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3914-L3917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3914-L3917) · [Before (L1538-L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1538-L1541)

```diff
-     function ec(UU) {
-       const XU = (0, bX.e)(UU);
-       return !!XU && ac(XU.hooks, XU.strict, XU.program)
-     }
+     function Vr() {
+       if (VA) return UA;
+       VA = 1;
+       let HH = Ur();
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1543-L1544` → after: `L3919-L3922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3919-L3922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3919-L3922) · [Before (L1543-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1543-L1544)

```diff
-     function Cc(UU, XU, zU, cU) {
-       return cc(UU, XU, zU, cU, "terrain")
+       function BH(BH, LH) {
+         new HH(LH).stringify(BH)
+       }
+       return UA = BH, BH.default = BH, UA
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1547-L1570` → after: `L3925-L4144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR3925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L3925-L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L3925-L4144) · [Before (L1547-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1547-L1570)

```diff
-     function wc(UU, XU, zU) {
-       let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
-       const QU = function(UU) {
-           return (0, bX.c)(UU.packVariant, UU.liquid ? "liquid" : "terrain")
-         }(UU),
-         {
-           hooks: AU
-         } = QU,
-         FU = Qc(QU, cU),
-         oU = "edge" === yU ? "maskEdge" : "plain" === yU ? "mask" : "trace",
-         DU = tc(AU, Wc);
-       DU && (XU = Cc(XU, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz … [truncated]
-       const EU = "atlas" === UU.texture ? {
-           count: UU.atlasCount,
-           layers: UU.atlasLayers,
- ... (8 more removed lines; see GitHub link above)
+     function Or() {
+       if (bA) return OA;
+       bA = 1;
+       let {
+         isClean: HH,
+         my: BH
+       } = Tr(), LH = xA(), AH = Ur(), rH = Vr();
+ 
+       function SH(HH, BH) {
+         let LH = new HH.constructor;
+         for (let AH in HH) {
+           if (!Object.prototype.hasOwnProperty.call(HH, AH)) continue;
+           if ("proxyCache" === AH) continue;
+           let rH = HH[AH],
+             hH = typeof rH;
+           "parent" === AH && "object" === hH ? BH && (LH[AH] = BH) : "source" === AH ? LH[AH] = rH : Array.isArray(rH) ? LH[AH] = rH.map((HH => SH(HH, LH))) : ("object" === hH && null !== rH && (rH = SH(rH)), LH[AH] = rH)
+ ... (204 more added lines; see GitHub link above)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1574-L1575` → after: `L4147-L4162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4147-L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4147-L4162) · [Before (L1574-L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1574-L1575)

```diff
-     function Oc(UU) {
-       return void 0 !== UU.packVariant
+     function br() {
+       if (mA) return kA;
+       mA = 1;
+       let HH = Or();
+       class BH extends HH {
+         constructor(HH) {
+           HH && "undefined" !== typeof HH.value && "string" !== typeof HH.value && (HH = {
+             ...HH,
+             value: String(HH.value)
+           }), super(HH), this.type = "decl"
+         }
+         get variable() {
+           return this.prop.startsWith("--") || "$" === this.prop[0]
+         }
+       }
+       return kA = BH, BH.default = BH, kA
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1622-L1624` → after: `L4165-L4184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4165-L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4165-L4184) · [Before (L1622-L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1622-L1624)

```diff
-     function Kc(UU, XU) {
-       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jc;
-       return `\n\tlet atlasIdxIn = ${UU};\n\tlet animTick = ${zU.LY};\n\tlet animTickStride = ${zU.stride};\n\tlet numAnimTextures = ${zU.count};\n\t${(0,PU.g)(RU.b.WGSL,zU.perTexture)}\n\t${XU}animLayer;\n`
+     function kr() {
+       if (IA) return oA;
+       IA = 1;
+       return oA = {
+         nanoid: function() {
+           let HH = "",
+             BH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
+           for (; BH--;) HH += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
+           return HH
+         },
+         customAlphabet: function(HH) {
+           let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
+           return function() {
+             let LH = "",
+               AH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BH;
+             for (; AH--;) LH += HH[Math.random() * HH.length | 0];
+ ... (4 more added lines; see GitHub link above)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1627-L1636` → after: `L4187-L4264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4187-L4264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4187-L4264) · [Before (L1627-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1627-L1636)

```diff
-     function bc(UU) {
-       const XU = (XU, zU) => {
-         const cU = XU > 0 ? `fragmentInputs.texAtlasIndex - ${UU.atlasLayers.toFixed(1)} * ${XU.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
-         return `${zU?"textureSampleLevel":"textureSample"}(textureAtlas${XU}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${cU}))${zU?", atlasLod":""})`
-       };
-       if (1 === UU.atlasCount) return `baseColor = ${XU(0,!1)};`;
-       let zU = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,xX.Ab)(UU.Y5)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
-       for (let cU = 0; cU < UU.atlasCount; cU++) {
-         const yU = UU.atlasLayers * (cU + 1) - .5;
-         zU += `${cU>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,xX.Ab)(yU)}) {\n\t\tbaseColor = ${XU(cU,!0)};\n\t}`
+     function mr() {
+       if (lA) return fA;
+       lA = 1;
+       let {
+         SourceMapConsumer: HH,
+         SourceMapGenerator: BH
+       } = QA, {
+         existsSync: LH,
+         readFileSync: AH
+       } = QA, {
+         dirname: rH,
+         join: SH
+       } = QA;
+       class hH {
+         constructor(HH, BH) {
+           if (!1 === BH.map) return;
+ ... (62 more added lines; see GitHub link above)
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1638-L1642` → after: `L4266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4266) · [Before (L1638-L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1638-L1642)

```diff
-       return zU
-     }
- 
-     function Tc(UU) {
-       return `terrain-${UU.texture}${"atlas"===UU.texture?UU.atlasCount:""}${UU.animated?"-anim":""}${UU.alphaTest?"-test":""}${UU.lighting?"-lit":""}-dir${UU.dirLightCount}${UU.packed?"-packed":""}${Oc(UU)?`-sp${UU.packVariant}`:""}${UU.liquid?"-liquid":""}${UU.resting?"-rest":" … [truncated]
+       return fA = hH, hH.default = hH, fA
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1645-L1744` → after: `L4269-L4404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4269-L4404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4269-L4404) · [Before (L1645-L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1645-L1744)

```diff
-     function hc(UU) {
-       let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-         zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
-       const cU = function(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
-         const zU = "none" !== UU.texture,
-           cU = "atlas" === UU.texture,
-           yU = UU.dirLightCount > 0,
-           QU = Oc(UU);
-         if (UU.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${UU.dirLightCount}`);
-         let AU = 1,
-           FU = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
-         if (cU) {
-           UU.animated && (FU += `@group(2) @binding(${AU++}) var<storage, read> animDataPerTex: array<f32>;\n`), FU += `@group(2) @binding(${AU++}) var atlasSampler: sampler;\n`;
-           for (let XU = 0; XU < UU.atlasCount; XU++) FU += `@group(2) @binding(${AU++}) var textureAtlas${XU}: texture_2d_array<f32>;\n`
-         } else "single" === UU.texture && (FU += `@group(2) @binding(${AU++}) var diffuseSamplerSampler: sampler;\n`, FU += `@group(2) @binding(${AU++}) var diffuseSampler: texture_2d<f32>;\n`);
- ... (84 more removed lines; see GitHub link above)
+     function or() {
+       if (cA) return KA;
+       cA = 1;
+       let {
+         SourceMapConsumer: HH,
+         SourceMapGenerator: BH
+       } = QA, {
+         fileURLToPath: LH,
+         pathToFileURL: AH
+       } = QA, {
+         isAbsolute: rH,
+         resolve: SH
+       } = QA, {
+         nanoid: hH
+       } = kr(), tH = QA, zH = xA(), CH = mr(), EH = Symbol("fromOffsetCache"), XH = Boolean(HH && BH), GH = Boolean(SH && rH);
+       class YH {
+ ... (120 more added lines; see GitHub link above)
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1790-L1791` → after: `L4409-L4587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4409-L4587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4409-L4587) · [Before (L1790-L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1790-L1791)

```diff
-     function Qy(UU, XU) {
-       return `#if defined(${UU}) && ${UU}DIRECTUV == 0\nvarying v${XU}UV: vec2f;\n#endif`
+     function Ir() {
+       if (qA) return eA;
+       qA = 1;
+       let {
+         SourceMapConsumer: HH,
+         SourceMapGenerator: BH
+       } = QA, {
+         dirname: LH,
+         relative: AH,
+         resolve: rH,
+         sep: SH
+       } = QA, {
+         pathToFileURL: hH
+       } = QA, tH = or(), zH = Boolean(HH && BH), CH = Boolean(LH && rH && AH && SH);
+       return eA = class {
+         constructor(HH, BH, LH, AH) {
+ ... (163 more added lines; see GitHub link above)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1794-L1795` → after: `L4590-L4599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4590-L4599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4590-L4599) · [Before (L1794-L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1794-L1795)

```diff
-     function Ay(UU, XU, zU) {
-       return `#if defined(${UU}) && ${UU}DIRECTUV == 0\nif (uniforms.v${XU}Infos.x==0.)\n{vertexOutputs.v${XU}UV= (uniforms.${zU}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${XU}UV= (uniforms.${zU}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
+     function fr() {
+       if (NA) return gA;
+       NA = 1;
+       let HH = Or();
+       class BH extends HH {
+         constructor(HH) {
+           super(HH), this.type = "comment"
+         }
+       }
+       return gA = BH, BH.default = BH, gA
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1798-L1848` → after: `L4602-L4611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4602-L4611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4602-L4611) · [Before (L1798-L1848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1798-L1848)

```diff
-     function Fy(UU, XU, zU) {
-       return `#ifdef ${UU}\n#if ${UU}DIRECTUV == 1\n#define v${XU}UV vMainUV1\n#elif ${UU}DIRECTUV == 2\n#define v${XU}UV vMainUV2\n#else\nvarying v${XU}UV: vec2f;\n#endif\nvar ${zU}SamplerSampler: sampler;\nvar ${zU}Sampler: texture_2d<f32>;\n#endif`
-     }
-     const oy = {
-         lights: 0,
-         lightStride: 12,
-         fogInfos: 96,
-         fogColour: 100,
-         outputHeight: 103,
-         animTick: 104,
-         timeMs: 105
-       },
-       Dy = 256,
-       Ey = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) … [truncated]
-       Yy = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
-       Ny = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
- ... (35 more removed lines; see GitHub link above)
+     function lr() {
+       if (jA) return RA;
+       jA = 1;
+       let HH, BH, LH, AH, {
+           isClean: rH,
+           my: SH
+         } = Tr(),
+         hH = br(),
+         tH = fr(),
+         zH = Or();
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1850-L1852` → after: `L4613-L4615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4613-L4615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4613-L4615) · [Before (L1850-L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1850-L1852)

```diff
-     function Zy(UU) {
-       By.has(UU) || (By.add(UU), console.warn(`Lite: no place for plugin code at ${UU} in the standard shader: it is left out`))
-     }
+       function CH(HH) {
+         return HH.map((HH => (HH.nodes && (HH.nodes = CH(HH.nodes)), delete HH.source, HH)))
+       }
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1854-L1859` → after: `L4617-L4619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4617-L4619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4617-L4619) · [Before (L1854-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1854-L1859)

```diff
-     function Ry(UU, XU) {
-       let zU = UU;
-       const cU = new Map;
-       for (const [QU, AU] of XU) {
-         var yU;
-         cU.set(QU, `${null!==(yU=cU.get(QU))&&void 0!==yU?yU:""}${AU}\n`)
+       function EH(HH) {
+         if (HH[rH] = !1, HH.proxyOf.nodes)
+           for (let BH of HH.proxyOf.nodes) EH(BH)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1861-L1866` → after: `L4621-L4657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4621-L4657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4621-L4657) · [Before (L1861-L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1861-L1866)

```diff
-       for (const [QU, AU] of cU) {
-         if (!QU.startsWith("!")) {
-           const UU = `#define ${QU}`;
-           if (!zU.includes(UU)) {
-             Zy(QU);
-             continue
+       class XH extends zH {
+         append() {
+           for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
+           for (let AH of BH) {
+             let HH = this.normalize(AH, this.last);
+             for (let BH of HH) this.proxyOf.nodes.push(BH)
+           }
+           return this.markDirty(), this
+         }
+         cleanRaws(HH) {
+           if (super.cleanRaws(HH), this.nodes)
+             for (let BH of this.nodes) BH.cleanRaws(HH)
+         }
+         each(HH) {
+           if (!this.proxyOf.nodes) return;
+           let BH, LH, AH = this.getIterator();
+ ... (21 more added lines; see GitHub link above)
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1871-L1876` → after: `L4660-L4709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4660-L4709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4660-L4709) · [Before (L1871-L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1871-L1876)

```diff
-         let UU = QU.substring(1),
-           XU = "g";
-         if (UU.startsWith("!")) XU = "", UU = UU.substring(1);
-         else {
-           const zU = Gy.exec(UU);
-           zU && (XU = zU[1], UU = UU.substring(XU.length + 1))
+         index(HH) {
+           return "number" === typeof HH ? HH : (HH.proxyOf && (HH = HH.proxyOf), this.proxyOf.nodes.indexOf(HH))
+         }
+         insertAfter(HH, BH) {
+           let LH, AH = this.index(HH),
+             rH = this.normalize(BH, this.proxyOf.nodes[AH]).reverse();
+           AH = this.index(HH);
+           for (let SH of rH) this.proxyOf.nodes.splice(AH + 1, 0, SH);
+           for (let SH in this.indexes) LH = this.indexes[SH], AH < LH && (this.indexes[SH] = LH + rH.length);
+           return this.markDirty(), this
+         }
+         insertBefore(HH, BH) {
+           let LH, AH = this.index(HH),
+             rH = 0 === AH && "prepend",
+             SH = this.normalize(BH, this.proxyOf.nodes[AH], rH).reverse();
+           AH = this.index(HH);
+ ... (34 more added lines; see GitHub link above)
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1878-L1883` → after: `L4711-L4779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4711-L4779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4711-L4779) · [Before (L1878-L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1878-L1883)

```diff
-         const cU = new RegExp(UU, XU.includes("g") ? XU : `${XU}g`);
-         let yU = cU.exec(zU);
-         for (yU || Zy(QU); yU;) {
-           const UU = yU,
-             XU = AU.replace(/\$(\d+)/g, ((XU, zU) => Number(zU) < UU.length ? UU[Number(zU)] : ""));
-           zU = zU.substring(0, UU.index) + XU + zU.substring(UU.index + UU[0].length), cU.lastIndex = UU.index + XU.length, yU = cU.exec(zU)
+         push(HH) {
+           return HH.parent = this, this.proxyOf.nodes.push(HH), this
+         }
+         removeAll() {
+           for (let HH of this.proxyOf.nodes) HH.parent = void 0;
+           return this.proxyOf.nodes = [], this.markDirty(), this
+         }
+         removeChild(HH) {
+           let BH;
+           HH = this.index(HH), this.proxyOf.nodes[HH].parent = void 0, this.proxyOf.nodes.splice(HH, 1);
+           for (let LH in this.indexes) BH = this.indexes[LH], BH >= HH && (this.indexes[LH] = BH - 1);
+           return this.markDirty(), this
+         }
+         replaceValues(HH, BH, LH) {
+           return LH || (LH = BH, BH = {}), this.walkDecls((AH => {
+             BH.props && !BH.props.includes(AH.prop) || BH.fast && !AH.value.includes(BH.fast) || (AH.value = AH.value.replace(HH, LH))
+ ... (53 more added lines; see GitHub link above)
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1886` → after: `L4782-L4794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4782-L4794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4782-L4794) · [Before (L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1886)

```diff
-       return zU
+       return XH.registerParse = BH => {
+         HH = BH
+       }, XH.registerRule = HH => {
+         BH = HH
+       }, XH.registerAtRule = HH => {
+         LH = HH
+       }, XH.registerRoot = HH => {
+         AH = HH
+       }, RA = XH, XH.default = XH, XH.rebuild = HH => {
+         "atrule" === HH.type ? Object.setPrototypeOf(HH, LH.prototype) : "rule" === HH.type ? Object.setPrototypeOf(HH, BH.prototype) : "decl" === HH.type ? Object.setPrototypeOf(HH, hH.prototype) : "comment" === HH.type ? Object.setPrototypeOf(HH, tH.prototype) : "root" === HH.t … [truncated]
+           XH.rebuild(HH)
+         }))
+       }, RA
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1892-L1915` → after: `L4797-L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4797-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4797-L4817) · [Before (L1892-L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1892-L1915)

```diff
-     function Ly(UU) {
-       const XU = {
-         attributes: [],
-         varyings: [],
-         uniforms: [],
-         textures: [],
-         samplers: new Set,
-         body: ""
-       };
-       let zU = UU.replace(Py, ((UU, zU, cU, yU, QU, AU) => ("attribute" === zU ? XU.attributes.push({
-         name: QU,
-         type: AU
-       }) : void 0 === zU ? XU.varyings.push({
-         name: QU,
-         type: AU,
-         interpolation: Cy(AU, cU, yU)
- ... (8 more removed lines; see GitHub link above)
+     function Kr() {
+       if (FA) return nA;
+       FA = 1;
+       let HH, BH, LH = lr();
+       class AH extends LH {
+         constructor(HH) {
+           super({
+             type: "document",
+             ...HH
+           }), this.nodes || (this.nodes = [])
+         }
+         toResult() {
+           let LH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+           return new HH(new BH, this, LH).stringify()
+         }
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1918-L1928` → after: `L4820-L4826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4820-L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4820-L4826) · [Before (L1918-L1928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1918-L1928)

```diff
-     function ey(UU) {
-       const XU = UU.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
-         zU = new Map([
-           ["f32", "float"],
-           ["vec2f", "vec2"],
-           ["vec3f", "vec3"],
-           ["vec4f", "vec4"],
-           ["mat4x4f", "mat4"]
-         ]).get(XU);
-       if (!zU) throw new Error(`Lite: unsupported uniform type ${UU}`);
-       return zU
+     function cr() {
+       if (wA) return DA;
+       wA = 1;
+       let HH = {};
+       return DA = function(BH) {
+         HH[BH] || (HH[BH] = !0, "undefined" !== typeof console && console.warn && console.warn(BH))
+       }
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1931-L1932` → after: `L4829-L4849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4829-L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4829-L4849) · [Before (L1931-L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1931-L1932)

```diff
-     function Cy(UU, XU, zU) {
-       return void 0 === XU && void 0 === zU ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(UU.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === XU ? "@interpolate(flat) " : `@interpolate(${null!==XU&&void 0!==XU?XU:"perspective"}, ${null!==zU&&void 0!==zU?zU:"cente … [truncated]
+     function er() {
+       if (dA) return ZA;
+       dA = 1;
+       class HH {
+         constructor(HH) {
+           let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+           if (this.type = "warning", this.text = HH, BH.node && BH.node.source) {
+             let HH = BH.node.rangeBy(BH);
+             this.line = HH.start.line, this.column = HH.start.column, this.endLine = HH.end.line, this.endColumn = HH.end.column
+           }
+           for (let LH in BH) this[LH] = BH[LH]
+         }
+         toString() {
+           return this.node ? this.node.error(this.text, {
+             index: this.index,
+             plugin: this.plugin,
+ ... (5 more added lines; see GitHub link above)
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1935-L1942` → after: `L4852-L4876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4852-L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4852-L4876) · [Before (L1935-L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1935-L1942)

```diff
-     function wy(UU) {
-       return ry({
-         defines: UU.defines,
-         vertex: Ry(gy, UU.vertexCode),
-         fragment: Ry(ky, UU.fragmentCode),
-         members: [...zy, ...UU.defines.has("OPACITY") ? cy : [], ...UU.defines.has("EMISSIVE") ? yy : [], ...UU.pluginUniforms],
-         structName: "StandardUniforms"
-       })
+     function qr() {
+       if (sA) return aA;
+       sA = 1;
+       let HH = er();
+       class BH {
+         constructor(HH, BH, LH) {
+           this.processor = HH, this.messages = [], this.root = BH, this.opts = LH, this.css = void 0, this.map = void 0
+         }
+         toString() {
+           return this.css
+         }
+         warn(BH) {
+           let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+           LH.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (LH.plugin = this.lastPlugin.postcssPlugin);
+           let AH = new HH(BH, LH);
+           return this.messages.push(AH), AH
+ ... (9 more added lines; see GitHub link above)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1945-L1948` → after: `L4879-L4894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4879-L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4879-L4894) · [Before (L1945-L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1945-L1948)

```diff
-     function qy(UU) {
-       const XU = UU.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
-       if (XU === UU) throw new Error("Lite: fragment main has no return");
-       return XU
+     function gr() {
+       if (yA) return pA;
+       yA = 1;
+       let HH = lr();
+       class BH extends HH {
+         constructor(HH) {
+           super(HH), this.type = "atrule"
+         }
+         append() {
+           return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
+         }
+         prepend() {
+           return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
+         }
+       }
+       return pA = BH, BH.default = BH, HH.registerAtRule(BH), pA
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1953-L1989` → after: `L4897-L4910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4897-L4910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4897-L4910) · [Before (L1953-L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L1953-L1989)

```diff
-     function ry(UU) {
-       const XU = UU.defines,
-         zU = Ly(nX(UU.vertex, XU)),
-         cU = Ly(nX(UU.fragment, XU)),
-         yU = new Map;
-       for (const GU of [...zU.varyings, ...cU.varyings]) yU.has(GU.name) || yU.set(GU.name, GU);
-       const QU = [...yU.values()].map(((UU, XU) => `\t@location(${XU}) ${UU.interpolation}${UU.name}: ${UU.type},`)),
-         AU = [...UU.members];
-       for (const GU of [...zU.uniforms, ...cU.uniforms]) AU.some((UU => UU.name === GU.name)) || AU.push(GU);
-       const FU = Xy(UU.structName, AU),
-         oU = [],
-         DU = [];
-       let EU = 1;
-       const YU = new Set;
-       for (const GU of [...zU.textures, ...cU.textures]) {
-         if (YU.has(GU.name)) continue;
- ... (21 more removed lines; see GitHub link above)
+     function Nr() {
+       if (Br) return Hr;
+       Br = 1;
+       let HH, BH, LH = lr();
+       class AH extends LH {
+         constructor(HH) {
+           super(HH), this.type = "root", this.nodes || (this.nodes = [])
+         }
+         normalize(HH, BH, LH) {
+           let AH = super.normalize(HH);
+           if (BH)
+             if ("prepend" === LH) this.nodes.length > 1 ? BH.raws.before = this.nodes[1].raws.before : delete BH.raws.before;
+             else if (this.first !== BH)
+             for (let rH of AH) rH.raws.before = BH.raws.before;
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2023-L2034` → after: `L4913-L4920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4913-L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4913-L4920) · [Before (L2023-L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2023-L2034)

```diff
-       },
-       jy = new Float64Array(16);
- 
-     function Ky(UU, XU, zU) {
-       const cU = zU.worldMatrix;
-       var yU;
-       UU.updateFloat3("viewFrom", cU[12], cU[13], cU[14]), UU.updateFloatsFrom("zenithOffset", XU.cameraOffset, 0, 3), UU.updateFloatsFrom("up", XU.up, 0, 3), XU.luminance > 0 && (UU.updateFloat("exposure", XU.luminance), UU.updateFloat("exposureScale", (yU = XU.luminance, Math.l … [truncated]
-       const QU = XU.sunPosition;
-       if (ny.set(QU[0], QU[1], QU[2]), !XU.useSunPosition) {
-         const UU = Math.PI * (XU.inclination - .5),
-           zU = 2 * Math.PI * (XU.azimuth - .5);
-         ny.set(XU.distance * Math.cos(zU) * Math.cos(UU), XU.distance * Math.sin(-UU), XU.distance * Math.sin(zU) * Math.cos(UU)), sy.Quaternion.FromUnitVectorsToRef(sy.Sp.UpReadOnly, my.set(XU.up[0], XU.up[1], XU.up[2]), ly), ny.rotateByQuaternionToRef(ly, ny)
+         removeChild(HH, BH) {
+           let LH = this.index(HH);
+           return !BH && 0 === LH && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[LH].raws.before), super.removeChild(HH)
+         }
+         toResult() {
+           let LH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+           return new HH(new BH, this, LH).stringify()
+         }
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2036-L2038` → after: `L4922-L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4922-L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4922-L4926) · [Before (L2036-L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2036-L2038)

```diff
-       UU.updateVector3("sun", ny), xy[0] = ny.x, xy[1] = ny.y, xy[2] = ny.z;
-       const AU = HX(XU, xy, Jy);
-       UU.updateFloatsFrom("sunDir", AU.sunDir, 0, 3), UU.updateFloat("sunE", AU.sunE), UU.updateFloatsFrom("inScatterR", AU.inScatterR, 0, 3), UU.updateFloatsFrom("inScatterM", AU.inScatterM, 0, 3), UU.updateFloatsFrom("extinctionBeta", AU.extinctionBeta, 0, 3), UU.updateFloat("s … [truncated]
+       return AH.registerLazyResult = BH => {
+         HH = BH
+       }, AH.registerProcessor = HH => {
+         BH = HH
+       }, Hr = AH, AH.default = AH, LH.registerRoot(AH), Hr
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2041-L2072` → after: `L4929-L4944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4929-L4944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4929-L4944) · [Before (L2041-L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2041-L2072)

```diff
-     function by(UU, XU) {
-       const zU = jy;
-       zU[0] = XU.far, zU[5] = XU.far, zU[10] = XU.far, zU[15] = 1;
-       const cU = UU.infiniteDistance;
-       for (let yU = 0; yU < 3; yU++) zU[12 + yU] = UU.position[yU] + (cU ? XU.worldMatrix[12 + yU] : 0);
-       return jy
-     }
-     class Ty {
-       constructor() {
-         this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
-       }
-       reset() {
-         this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
-       }
-       bind(UU, XU, zU, cU, yU) {
-         zU !== this.pipeline && (UU.setPipeline(zU), this.pipeline = zU), UU.setBindGroup(1, cU, [yU]);
- ... (16 more removed lines; see GitHub link above)
+     function Rr() {
+       if (Ar) return Lr;
+       Ar = 1;
+       let HH = {
+         comma: BH => HH.split(BH, [","], !0),
+         space: BH => HH.split(BH, [" ", "\n", "\t"]),
+         split(HH, BH, LH) {
+           let AH = [],
+             rH = "",
+             SH = !1,
+             hH = 0,
+             tH = !1,
+             zH = "",
+             CH = !1;
+           for (let EH of HH) CH ? CH = !1 : "\\" === EH ? CH = !0 : tH ? EH === zH && (tH = !1) : '"' === EH || "'" === EH ? (tH = !0, zH = EH) : "(" === EH ? hH += 1 : ")" === EH ? hH > 0 && (hH -= 1) : 0 === hH && BH.includes(EH) && (SH = !0), SH ? ("" !== rH && AH.push(rH.trim … [truncated]
+           return (LH || "" !== rH) && AH.push(rH.trim()), AH
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2074-L2093` → after: `L4946-L4947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4946-L4947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4946-L4947) · [Before (L2074-L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2074-L2093)

```diff
-       }
-       clear() {
-         this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
-       }
-       collect(UU) {
-         this.collectGroup(UU, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(UU, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(UU, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.pUU.forEachGroup(th … [truncated]
-       }
-       collectGroup(UU, XU, zU, cU, yU) {
-         const QU = this.modelMeshes.group(XU),
-           AU = this.pUU.group(XU),
-           FU = 0 === XU ? null === AU || void 0 === AU ? void 0 : AU.opaque : void 0;
-         this.collectList(UU, null === QU || void 0 === QU ? void 0 : QU.opaque, FU || null === AU || void 0 === AU ? void 0 : AU.opaque, XU, !1, zU, yU), FU && (this.pUU.drawn += this.maker.bundleDraws(UU, FU, XU)), this.collectList(UU, null === QU || void 0 === QU ? void 0 : QU. … [truncated]
-       }
-       collectList(UU, XU, zU, cU, yU, QU, AU) {
-         var FU;
-         const oU = QU.length;
- ... (4 more removed lines; see GitHub link above)
+       };
+       return Lr = HH, HH.default = HH, Lr
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2096-L2097` → after: `L4950-L4968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4950-L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4950-L4968) · [Before (L2096-L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2096-L2097)

```diff
-     function UQ(UU, XU) {
-       return UU.program.id - XU.program.id || UU.material.owner.uniqueId - XU.material.owner.uniqueId
+     function jr() {
+       if (Sr) return rr;
+       Sr = 1;
+       let HH = lr(),
+         BH = Rr();
+       class LH extends HH {
+         constructor(HH) {
+           super(HH), this.type = "rule", this.nodes || (this.nodes = [])
+         }
+         get selectors() {
+           return BH.comma(this.selector)
+         }
+         set selectors(HH) {
+           let BH = this.selector ? this.selector.match(/,\s*/) : null,
+             LH = BH ? BH[0] : "," + this.raw("between", "beforeOpen");
+           this.selector = HH.join(LH)
+ ... (3 more added lines; see GitHub link above)
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2100-L2102` → after: `L4971-L5008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4971-L5008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L4971-L5008) · [Before (L2100-L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2100-L2102)

```diff
-     function XQ(UU, XU) {
-       return UU.material.owner.uniqueId - XU.material.owner.uniqueId
-     }
+     function nr() {
+       if (tr) return hr;
+       tr = 1;
+       let HH = br(),
+         BH = function() {
+           if (iA) return JA;
+           iA = 1;
+           const HH = "'".charCodeAt(0),
+             BH = '"'.charCodeAt(0),
+             LH = "\\".charCodeAt(0),
+             AH = "/".charCodeAt(0),
+             rH = "\n".charCodeAt(0),
+             SH = " ".charCodeAt(0),
+             hH = "\f".charCodeAt(0),
+             tH = "\t".charCodeAt(0),
+             zH = "\r".charCodeAt(0),
+ ... (22 more added lines; see GitHub link above)
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2104-L2109` → after: `L5010-L5402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5010-L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5010-L5402) · [Before (L2104-L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2104-L2109)

```diff
-     function zQ(UU, XU) {
-       for (let zU = XU + 1; zU < UU.length; zU++) {
-         const cU = UU[zU];
-         let yU = zU - 1;
-         for (; yU >= XU && XQ(UU[yU], cU) > 0; yU--) UU[yU + 1] = UU[yU];
-         UU[yU + 1] = cU
+             function FH(HH) {
+               throw VH.error("Unclosed " + HH, RH)
+             }
+             return {
+               back: function(HH) {
+                 nH.push(HH)
+               },
+               endOfFile: function() {
+                 return 0 === nH.length && RH >= NH
+               },
+               nextToken: function(VH) {
+                 if (nH.length) return nH.pop();
+                 if (RH >= NH) return;
+                 let eH = !!VH && VH.ignoreUnclosed;
+                 switch (OH = qH.charCodeAt(RH), OH) {
+                   case rH:
+ ... (377 more added lines; see GitHub link above)
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2118-L2120` → after: `L5406-L5411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5406-L5411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5406-L5411) · [Before (L2118-L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2118-L2120)

```diff
-     function QQ(UU, XU, zU) {
-       return UU ? (zU._needUVs = !0, UU.optimizeUVAllocation && (0, eU.F)(UU.matrix) ? (zU[`${XU}DIRECTUV`] = UU.uvSet + 1, zU[`MAINUV${UU.uvSet+1}`] = !0) : zU[`${XU}DIRECTUV`] = 0, !0) : (zU[`${XU}DIRECTUV`] = 0, !1)
-     }
+     function Fr() {
+       if (Cr) return zr;
+       Cr = 1;
+       let HH = lr(),
+         BH = nr(),
+         LH = or();
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2122-L2128` → after: `L5413-L5421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5413-L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5413-L5421) · [Before (L2122-L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2122-L2128)

```diff
-     function AQ(UU) {
-       const XU = new Map;
-       for (const zU in UU) {
-         if (95 === zU.charCodeAt(0)) continue;
-         const cU = UU[zU],
-           yU = typeof cU;
-         "number" === yU || "string" === yU ? XU.set(zU, String(cU)) : cU && "function" !== yU && XU.set(zU, !0)
+       function AH(HH, AH) {
+         let rH = new LH(HH, AH),
+           SH = new BH(rH);
+         try {
+           SH.parse()
+         } catch (hH) {
+           throw hH
+         }
+         return SH.root
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2130` → after: `L5423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5423) · [Before (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2130)

```diff
-       return XU
+       return zr = AH, AH.default = AH, HH.registerParse(AH), zr
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2133` → after: `L5426-L5432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5426-L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5426-L5432) · [Before (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2133)

```diff
-     function FQ(UU) {
+     function Dr() {
+       if (Xr) return Er;
+       Xr = 1;
+       let {
+         isClean: HH,
+         my: BH
+       } = Tr(), LH = Ir(), AH = Vr(), rH = lr(), SH = Kr(), hH = (cr(), qr()), tH = Fr(), zH = Nr();
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2135-L2148` → after: `L5434-L5463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5434-L5463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5434-L5463) · [Before (L2135-L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2135-L2148)

```diff
-         markAllAsDirty: () => {}
-       };
-       for (const {
-           defines: zU
-         }
-         of UU.features)
-         for (const UU in zU) XU[UU] = zU[UU];
-       return XU
-     }
- 
-     function oQ(UU) {
-       const XU = UU.parts.geometry;
-       return null !== XU && void 0 !== XU && XU.live ? XU : null
-     }
+           atrule: "AtRule",
+           comment: "Comment",
+           decl: "Declaration",
+           document: "Document",
+           root: "Root",
+           rule: "Rule"
+         },
+         EH = {
+           AtRule: !0,
+           AtRuleExit: !0,
+           Comment: !0,
+           CommentExit: !0,
+           Declaration: !0,
+           DeclarationExit: !0,
+           Document: !0,
+           DocumentExit: !0,
+ ... (14 more added lines; see GitHub link above)
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2150-L2204` → after: `L5465-L5466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5465-L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5465-L5466) · [Before (L2150-L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2150-L2204)

```diff
-     function DQ(UU) {
-       var XU;
-       return null !== (XU = oQ(UU)) && void 0 !== XU ? XU : cQ
-     }
-     class EQ {
-       constructor(UU, XU, zU) {
-         let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
-         this.resources = UU, this.warnOnce = XU, this.programWithModel = zU, this.packFailed = cU, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
-       }
-       programFor(UU, XU, zU, cU, yU) {
-         const QU = XU.owner;
-         let AU = this.drawStates.get(XU);
-         if (!AU) {
-           const UU = XU.parts.materials[XU.range];
-           if (!UU) return this.warnOnce("model", `${zU.name} on ${QU.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
-           AU = {
- ... (39 more removed lines; see GitHub link above)
+       function GH(HH) {
+         return "object" === typeof HH && "function" === typeof HH.then
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2206-L2208` → after: `L5468-L5472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5468-L5472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5468-L5472) · [Before (L2206-L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2206-L2208)

```diff
-       definesBits(UU) {
-         const XU = this.view;
-         return (UU.visibility < 1 ? 1 : 0) | (UU.hasVertexAlpha ? 2 : 0) | (UU.applyFog ? 4 : 0) | (UU.useVertexColors ? 8 : 0) | (UU.nonUniformScaling ? 16 : 0) | (XU.fogEnabled && 0 !== XU.fogMode ? 32 : 0) | (XU.lightsEnabled ? 64 : 0) | XU.lightCount << 7
+ 
+       function YH(HH) {
+         let BH = !1,
+           LH = CH[HH.type];
+         return "decl" === HH.type ? BH = HH.prop.toLowerCase() : "atrule" === HH.type && (BH = HH.name.toLowerCase()), BH && HH.append ? [LH, LH + "-" + BH, 0, LH + "Exit", LH + "Exit-" + BH] : BH ? [LH, LH + "-" + BH, LH + "Exit", LH + "Exit-" + BH] : HH.append ? [LH, 0, LH + "E … [truncated]
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2210-L2214` → after: `L5474-L5483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5474-L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5474-L5483) · [Before (L2210-L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2210-L2214)

```diff
-       prepareLightDefines(UU, XU, zU) {
-         let cU = 0;
-         if (this.view.lightsEnabled && !XU) {
-           const XU = Math.min(zU, 4);
-           for (; cU < this.view.lightCount && (UU[`LIGHT${cU}`] = !0, UU[`LITE_LIGHT${cU}_SLOT`] = cU, cU++, UU._needNormals = !0, cU !== XU););
+ 
+       function uH(HH) {
+         let BH;
+         return BH = "document" === HH.type ? ["Document", 0, "DocumentExit"] : "root" === HH.type ? ["Root", 0, "RootExit"] : YH(HH), {
+           eventIndex: 0,
+           events: BH,
+           iterator: 0,
+           node: HH,
+           visitorIndex: 0,
+           visitors: []
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2218-L2234` → after: `L5486-L5514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5486-L5514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5486-L5514) · [Before (L2218-L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2218-L2234)

```diff
-       prepareModelDefines(UU, XU, zU, cU, yU, QU) {
-         const {
-           features: AU
-         } = zU;
-         cU._needNormals = !1, cU._needUVs = !1;
-         const FU = this.view;
-         this.prepareLightDefines(cU, zU.disableLighting, zU.maxSimultaneousLights), cU.MAINUV1 = !1, cU.MAINUV2 = !1;
-         const oU = zU.diffuseTexture;
-         oU ? (cU._needUVs = !0, cU.DIFFUSE = !0, oU.optimizeUVAllocation && (0, eU.F)(oU.matrix) ? (cU.DIFFUSEDIRECTUV = oU.uvSet + 1, cU[`MAINUV${oU.uvSet+1}`] = !0) : cU.DIFFUSEDIRECTUV = 0, oU.uvSet > 1 && this.warnOnce(`uvset:${zU.name}`, `${zU.name} samples UV set ${oU.uvSet … [truncated]
-         const DU = zU.opacityTexture,
-           EU = zU.emissiveTexture;
-         cU.OPACITY = QQ(DU, "OPACITY", cU), cU.OPACITYRGB = null !== DU && DU.getAlphaFromRGB, cU.EMISSIVE = QQ(EU, "EMISSIVE", cU), (DU && DU.uvSet > 1 || EU && EU.uvSet > 1) && this.warnOnce(`uvset:${zU.name}`, `${zU.name} samples a UV set past 2, which is not supported`);
-         const YU = zU.reflectionTexture,
-           NU = null !== YU;
-         if (NU) {
-           if (!this.resources.boundTexture(YU)) return !1;
- ... (1 more removed lines; see GitHub link above)
+ 
+       function QH(BH) {
+         return BH[HH] = !1, BH.nodes && BH.nodes.forEach((HH => QH(HH))), BH
+       }
+       let WH = {};
+       class MH {
+         constructor(HH, LH, AH) {
+           let SH;
+           if (this.stringified = !1, this.processed = !1, "object" !== typeof LH || null === LH || "root" !== LH.type && "document" !== LH.type)
+             if (LH instanceof MH || LH instanceof hH) SH = QH(LH.root), LH.map && ("undefined" === typeof AH.map && (AH.map = {}), AH.map.inline || (AH.map.inline = !1), AH.map.prev = LH.map);
+             else {
+               let HH = tH;
+               AH.syntax && (HH = AH.syntax.parse), AH.parser && (HH = AH.parser), HH.parse && (HH = HH.parse);
+               try {
+                 SH = HH(LH, AH)
+               } catch (zH) {
+ ... (13 more added lines; see GitHub link above)
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2236-L2249` → after: `L5516-L5521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5516-L5521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5516-L5521) · [Before (L2236-L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2236-L2249)

```diff
-         cU.REFLECTION = NU, cU.REFLECTIONMAP_3D = NU, cU.REFLECTIONMAP_SKYBOX = NU, cU.REFLECTIONMAP_OPPOSITEZ = NU && (UU.useRightHandedSystem ? !YU.invertZ : YU.invertZ), cU.ROUGHNESS = NU && zU.roughness > 0, cU.REFLECTIONOVERALPHA = NU && zU.useReflectionOverAlpha, cU.LITE_RE … [truncated]
-         const {
-           visibility: IU,
-           hasVertexAlpha: pU
-         } = XU;
-         cU.ALPHATEST = (0, dU.Q)(zU, IU, pU), cU.ALPHAFROMDIFFUSE = (0, dU.bb)(zU), cU.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== zU.transparencyMode, cU.ALPHABLEND = null === zU.transparencyMode || (0, dU.M)(zU, IU, pU), cU.PREMULTIPLYALPHA = 7 === zU.alphaMode || 8 === zU.a … [truncated]
-         for (const {
-             feature: PU,
-             state: WU,
-             active: dU
-           }
-           of AU) {
-           var aU, tU;
-           if (dU) null === (aU = (tU = (0, SX.j)(PU)).prepareDefinesBeforeAttributes) || void 0 === aU || aU.call(tU, WU, cU, UU, XU)
+         async () {
+           return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
+         } catch (HH) {
+           return this.async().catch(HH)
+         } finally(HH) {
+           return this.async().then(HH, HH)
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2251-L2257` → after: `L5523-L5531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5523-L5531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5523-L5531) · [Before (L2251-L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2251-L2257)

```diff
-         this.modelPackKind(zU) && (cU._needNormals = !0), cU.NORMAL = cU._needNormals && XU.isVerticesDataPresent("normal"), cU.UV1 = cU._needUVs && XU.isVerticesDataPresent("uv"), cU.UV2 = cU._needUVs && XU.isVerticesDataPresent("uv2");
-         const gU = XU.useVertexColors && XU.isVerticesDataPresent("color");
-         cU.VERTEXCOLOR = gU, cU.VERTEXALPHA = XU.hasVertexAlpha && gU, cU.INSTANCESCOLOR = "none" !== QU && XU.isVerticesDataPresent("instanceColor");
-         for (const {
-             feature: PU,
-             state: WU,
-             active: dU
+         getAsyncError() {
+           throw new Error("Use process(css).then(cb) to work with async plugins")
+         }
+         handleError(HH, BH) {
+           let LH = this.result.lastPlugin;
+           try {
+             BH && BH.addToError(HH), this.error = HH, "CssSyntaxError" !== HH.name || HH.plugin ? LH.postcssVersion : (HH.plugin = LH.postcssPlugin, HH.setMessage())
+           } catch (AH) {
+             console && console.error && console.error(AH)
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2259-L2261` → after: `L5533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5533) · [Before (L2259-L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2259-L2261)

```diff
-           of AU) {
-           var kU, GU;
-           if (dU) null === (kU = (GU = (0, SX.j)(PU)).prepareDefines) || void 0 === kU || kU.call(GU, WU, cU, UU, XU, zU)
+           return HH
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2263-L2267` → after: `L5535-L5560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5535-L5560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5535-L5560) · [Before (L2263-L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2263-L2267)

```diff
-         const BU = UU.qp();
-         for (const {
-             feature: PU,
-             state: WU,
-             active: dU
+         prepareVisitors() {
+           this.listeners = {};
+           let HH = (HH, BH, LH) => {
+             this.listeners[BH] || (this.listeners[BH] = []), this.listeners[BH].push([HH, LH])
+           };
+           for (let BH of this.plugins)
+             if ("object" === typeof BH)
+               for (let LH in BH) {
+                 if (!EH[LH] && /^[A-Z]/.test(LH)) throw new Error(`Unknown event ${LH} in ${BH.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
+                 if (!XH[LH])
+                   if ("object" === typeof BH[LH])
+                     for (let AH in BH[LH]) HH(BH, "*" === AH ? LH : LH + "-" + AH.toLowerCase(), BH[LH][AH]);
+                   else "function" === typeof BH[LH] && HH(BH, LH, BH[LH])
+               }
+           this.hasListener = Object.keys(this.listeners).length > 0
+         }
+ ... (10 more added lines; see GitHub link above)
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2269-L2271` → after: `L5562-L5590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5562-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5562-L5590) · [Before (L2269-L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2269-L2271)

```diff
-           of AU) {
-           var ZU, RU;
-           if (dU && !1 === (null === (ZU = (RU = (0, SX.j)(PU)).isReadyForSubMesh) || void 0 === ZU ? void 0 : ZU.call(RU, WU, cU, UU, BU))) return !1
+           if (this.prepareVisitors(), this.hasListener) {
+             let BH = this.result.root;
+             for (; !BH[HH];) {
+               BH[HH] = !0;
+               let AH = [uH(BH)];
+               for (; AH.length > 0;) {
+                 let HH = this.visitTick(AH);
+                 if (GH(HH)) try {
+                   await HH
+                 } catch (LH) {
+                   let HH = AH[AH.length - 1].node;
+                   throw this.handleError(LH, HH)
+                 }
+               }
+             }
+             if (this.listeners.OnceExit)
+ ... (13 more added lines; see GitHub link above)
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2273-L2284` → after: `L5592-L5604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5592-L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5592-L5604) · [Before (L2273-L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2273-L2284)

```diff
-         return !0
-       }
-     }
- 
-     function YQ(UU, XU, zU) {
-       return UU.codeVersion !== XU.version && function(UU, XU) {
-         const zU = [],
-           cU = [];
-         for (const {
-             feature: NU,
-             state: IU,
-             active: pU
+         runOnRoot(HH) {
+           this.result.lastPlugin = HH;
+           try {
+             if ("object" === typeof HH && HH.Once) {
+               if ("document" === this.result.root.type) {
+                 let BH = this.result.root.nodes.map((BH => HH.Once(BH, this.helpers)));
+                 return GH(BH[0]) ? Promise.all(BH) : BH
+               }
+               return HH.Once(this.result.root, this.helpers)
+             }
+             if ("function" === typeof HH) return HH(this.result.root, this.result)
+           } catch (BH) {
+             throw this.handleError(BH)
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2290-L2293` → after: `L5607-L5622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5607-L5622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5607-L5622) · [Before (L2290-L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2290-L2293)

```diff
-         const oU = [];
-         for (const {
-             feature: NU,
-             state: IU
+         stringify() {
+           if (this.error) throw this.error;
+           if (this.stringified) return this.result;
+           this.stringified = !0, this.sync();
+           let HH = this.result.opts,
+             BH = AH;
+           HH.syntax && (BH = HH.syntax.stringify), HH.stringifier && (BH = HH.stringifier), BH.stringify && (BH = BH.stringify);
+           let rH = new LH(BH, this.result.root, this.result.opts).generate();
+           return this.result.css = rH[0], this.result.map = rH[1], this.result
+         }
+         sync() {
+           if (this.error) throw this.error;
+           if (this.processed) return this.result;
+           if (this.processed = !0, this.processing) throw this.getAsyncError();
+           for (let HH of this.plugins) {
+             if (GH(this.runOnRoot(HH))) throw this.getAsyncError()
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2295-L2304` → after: `L5624-L5630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5624-L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5624-L5630) · [Before (L2295-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2295-L2304)

```diff
-           of XU.features) {
-           var DU, EU;
-           const UU = null === (DU = (EU = (0, SX.j)(NU)).getUniforms) || void 0 === DU ? void 0 : DU.call(EU, IU, RU.b.WGSL);
-           for (const XU of null !== (YU = null === UU || void 0 === UU ? void 0 : UU.ubo) && void 0 !== YU ? YU : []) {
-             var YU;
-             XU.size && XU.type && oU.push({
-               name: XU.name,
-               type: XU.type,
-               arraySize: XU.arraySize
-             })
+           if (this.prepareVisitors(), this.hasListener) {
+             let BH = this.result.root;
+             for (; !BH[HH];) BH[HH] = !0, this.walkSync(BH);
+             if (this.listeners.OnceExit)
+               if ("document" === BH.type)
+                 for (let HH of BH.nodes) this.visitSync(this.listeners.OnceExit, HH);
+               else this.visitSync(this.listeners.OnceExit, BH)
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2307-L2366` → after: `L5634-L5635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5634-L5635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5634-L5635) · [Before (L2307-L2366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2307-L2366)

```diff
-         UU.vertexCode = zU, UU.fragmentCode = cU, UU.pluginUniforms = oU, UU.codeKey = JSON.stringify([zU, cU, oU]), UU.codeVersion = XU.version
-       }(UU, XU), `${zU}#${UU.codeKey}`
-     }
- 
-     function NQ(UU, XU) {
-       if (UU)
-         for (const zU in UU) UU[zU] && XU.push([zU, UU[zU]])
-     }
-     const IQ = new Map([
-       [512, "never"],
-       [513, "greater"],
-       [514, "equal"],
-       [515, "greater-equal"],
-       [516, "less"],
-       [517, "not-equal"],
-       [518, "less-equal"],
- ... (44 more removed lines; see GitHub link above)
+         then(HH, BH) {
+           return this.async().then(HH, BH)
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2368-L2504` → after: `L5637-L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5637-L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5637-L5650) · [Before (L2368-L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2368-L2504)

```diff
-         return EU
-       }
-     }
-     var aQ = zU(38074);
- 
-     function tQ(UU) {
-       if (!UU.frozen) return -1;
-       let XU = UU.version;
-       for (const {
-           feature: zU,
-           state: cU,
-           active: yU
-         }
-         of UU.features) {
-         if (!yU || !zU.bind) continue;
-         const UU = (0, SX.j)(zU).uniformsVersion;
- ... (121 more removed lines; see GitHub link above)
+         toString() {
+           return this.css
+         }
+         visitSync(HH, BH) {
+           for (let [AH, rH] of HH) {
+             let HH;
+             this.result.lastPlugin = AH;
+             try {
+               HH = rH(BH, this.helpers)
+             } catch (LH) {
+               throw this.handleError(LH, BH.proxyOf)
+             }
+             if ("root" !== BH.type && "document" !== BH.type && !BH.parent) return !0;
+             if (GH(HH)) throw this.getAsyncError()
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2510-L2533` → after: `L5653-L5693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5653-L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5653-L5693) · [Before (L2510-L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2510-L2533)

```diff
-       }
-     }
- 
-     function BQ(UU) {
-       const XU = UU.replace(/\s+/g, "");
-       return /u32|^vec\du$/.test(XU) ? "u32" : /i32|^vec\di$/.test(XU) ? "i32" : "f32"
-     }
- 
-     function ZQ(UU, XU) {
-       const zU = UU.getSize(),
-         cU = BQ(XU),
-         yU = UU => 4 === zU ? `${UU}x4` : 2 === zU ? `${UU}x2` : null;
-       if ("f32" === cU) {
-         if (5126 === UU.type) return 1 === zU ? "float32" : zU >= 2 && zU <= 4 ? `float32x${zU}` : null;
-         if (!UU.normalized) return null;
-         switch (UU.type) {
- ... (8 more removed lines; see GitHub link above)
+         visitTick(BH) {
+           let LH = BH[BH.length - 1],
+             {
+               node: AH,
+               visitors: rH
+             } = LH;
+           if ("root" !== AH.type && "document" !== AH.type && !AH.parent) return void BH.pop();
+           if (rH.length > 0 && LH.visitorIndex < rH.length) {
+             let [HH, BH] = rH[LH.visitorIndex];
+             LH.visitorIndex += 1, LH.visitorIndex === rH.length && (LH.visitors = [], LH.visitorIndex = 0), this.result.lastPlugin = HH;
+             try {
+               return BH(AH.toProxy(), this.helpers)
+             } catch (hH) {
+               throw this.handleError(hH, AH)
+             }
+           }
+ ... (25 more added lines; see GitHub link above)
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2535-L2612` → after: `L5695-L5696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5695-L5696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5695-L5696) · [Before (L2535-L2612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2535-L2612)

```diff
-         return null
-       }
-       const QU = "u32" === cU ? "uint" : "sint";
-       switch (UU.type) {
-         case 5125:
-         case 5124:
-           return 1 === zU ? `${QU}32` : zU <= 4 ? `${QU}32x${zU}` : null;
-         case 5121:
-         case 5120:
-           return yU(`${QU}8`);
-         case 5123:
-         case 5122:
-           return yU(`${QU}16`)
-       }
-       return null
-     }
- ... (62 more removed lines; see GitHub link above)
+         warnings() {
+           return this.sync().warnings()
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2614-L2655` → after: `L5698-L5720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5698-L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5698-L5720) · [Before (L2614-L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2614-L2655)

```diff
-         if (yU.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${XU}`, `${XU} needs ${yU.length} vertex buffers`), null;
-         let FU = "";
-         for (const EU of yU) {
-           FU += `${EU.stride}${"instance"===EU.step?"i":"v"}`;
-           for (const UU of EU.attributes) FU += `,${UU.shaderLocation}:${UU.offset}:${UU.format}`;
-           FU += ";"
-         }
-         let oU = this.layouts.get(FU);
-         oU || (oU = {
-           key: FU,
-           buffers: yU.map((UU => ({
-             arrayStride: UU.stride,
-             stepMode: UU.step,
-             attributes: UU.attributes
-           }))),
-           instanceEnds: yU.map((UU => {
- ... (26 more removed lines; see GitHub link above)
+         get content() {
+           return this.stringify().content
+         }
+         get css() {
+           return this.stringify().css
+         }
+         get map() {
+           return this.stringify().map
+         }
+         get messages() {
+           return this.sync().messages
+         }
+         get opts() {
+           return this.result.opts
+         }
+         get processor() {
+ ... (7 more added lines; see GitHub link above)
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2660-L2708` → after: `L5728-L5752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5728-L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5728-L5752) · [Before (L2660-L2708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2660-L2708)

```diff
-     function WQ(UU, XU, zU, cU) {
-       const yU = XU.program.program.attributes;
-       for (let QU = 0; QU < yU.length; QU++) {
-         if ((yU[QU].optional ? null : zU.vertexInput(UU, yU[QU].name, cU)) !== XU.sources[QU]) return !1
-       }
-       return !0
-     }
-     const dQ = 64;
-     class LQ {
-       constructor(UU, XU, zU, cU) {
-         this.device = UU, this.layout = XU, this.frameBuffer = zU, this.label = cU, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
-       }
-       ensure(UU) {
-         if (UU * dQ <= this.data.length) return !1;
-         let XU = 2 * this.data.length;
-         for (; UU * dQ > XU;) XU *= 2;
- ... (33 more removed lines; see GitHub link above)
+     function wr() {
+       if (Qr) return ur;
+       Qr = 1;
+       let HH = function() {
+           if (Yr) return Gr;
+           Yr = 1;
+           let HH = Ir(),
+             BH = Vr(),
+             LH = (cr(), Fr());
+           const AH = qr();
+           class rH {
+             constructor(LH, rH, SH) {
+               let hH;
+               rH = rH.toString(), this.stringified = !1, this._processor = LH, this._css = rH, this._opts = SH, this._map = void 0;
+               let tH = BH;
+               this.result = new AH(this._processor, hH, this._opts), this.result.css = rH;
+ ... (9 more added lines; see GitHub link above)
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2710-L2714` → after: `L5754-L5759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5754-L5759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5754-L5759) · [Before (L2710-L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2710-L2714)

```diff
-           }, {
-             binding: 1,
-             resource: {
-               buffer: this.buffer,
-               size: 80
+             async () {
+               return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
+             } catch (HH) {
+               return this.async().catch(HH)
+             } finally(HH) {
+               return this.async().then(HH, HH)
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2716-L2719` → after: `L5761-L5856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5761-L5856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5761-L5856) · [Before (L2716-L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2716-L2719)

```diff
-           }]
-         })
-       }
-     }
+             sync() {
+               if (this.error) throw this.error;
+               return this.result
+             }
+             then(HH, BH) {
+               return this.async().then(HH, BH)
+             }
+             toString() {
+               return this._css
+             }
+             warnings() {
+               return []
+             }
+             get content() {
+               return this.result.css
+             }
+ ... (80 more added lines; see GitHub link above)
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2721-L2727` → after: `L5858-L5903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5858-L5903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5858-L5903) · [Before (L2721-L2727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2721-L2727)

```diff
-     function eQ(UU) {
-       return UU.gpu[eU.e.lite] ??= UU.materials.map(((XU, zU) => ({
-         parts: UU,
-         range: zU,
-         owner: UU.owner
-       })))
-     }
+           function tH(zH, CH) {
+             if (Array.isArray(zH)) return zH.map((HH => tH(HH)));
+             let {
+               inputs: EH,
+               ...XH
+             } = zH;
+             if (EH) {
+               CH = [];
+               for (let HH of EH) {
+                 let LH = {
+                   ...HH,
+                   __proto__: rH.prototype
+                 };
+                 LH.map && (LH.map = {
+                   ...LH.map,
+                   __proto__: BH.prototype
+ ... (30 more added lines; see GitHub link above)
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2729-L2733` → after: `L5905-L5941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5905-L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5905-L5941) · [Before (L2729-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2729-L2733)

```diff
-     function CQ(UU) {
-       var XU, zU, cU;
-       return null !== (XU = null !== (zU = null === (cU = UU.parts.materials[UU.range]) || void 0 === cU ? void 0 : cU.mirror) && void 0 !== zU ? zU : UU.owner.material) && void 0 !== XU ? XU : null
-     }
-     const wQ = ["opaque", "alphaTest", "transparent", "text"];
+       function xH() {
+         for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
+         return 1 === BH.length && Array.isArray(BH[0]) && (BH = BH[0]), new rH(BH)
+       }
+       return xH.plugin = function(HH, BH) {
+         let LH, AH = !1;
+ 
+         function SH() {
+           console && console.warn && !AH && (AH = !0, console.warn(HH + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
+             NODE_ENV: "production",
+             PUBLIC_URL: "",
+             WDS_SOCKET_HOST: void 0,
+             WDS_SOCKET_PATH: void 0,
+             WDS_SOCKET_PORT: void 0,
+             FAST_REFRESH: !0,
+             REACT_APP_DEV_URLS: "false"
+ ... (21 more added lines; see GitHub link above)
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2736` → after: `L5944-L5951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5944-L5951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5944-L5951) · [Before (L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2736)

```diff
-       for (const XU of wQ) UU[XU].units.length = 0, UU[XU].rows.length = 0
+       const BH = [];
+       for (const LH in HH) {
+         const AH = HH[LH];
+         if ("string" !== typeof AH) continue;
+         const rH = yr(LH);
+         BH.push(`${rH}: ${AH};`)
+       }
+       return BH.join(" ")
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2740-L2786` → after: `L5960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5960) · [Before (L2740-L2786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2740-L2786)

```diff
-         this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, OX.e)("Lite: ")
-       }
-       attach(UU, XU) {
-         this.model = UU, this.mirror = XU
-       }
-       get worlds() {
-         return this.model.nodes.qY
-       }
-       get visibility() {
-         return this.model.meshes.visibility
-       }
-       group(UU) {
-         return this.groups.get(UU)
-       }
-       forEachGroup(UU) {
-         this.groups.forEach(UU)
- ... (31 more removed lines; see GitHub link above)
+         hA(this, "parentElement", null), hA(this, "parentNode", null), hA(this, "ownerDocument"), hA(this, "firstChild", null), hA(this, "lastChild", null), hA(this, "previousSibling", null), hA(this, "nextSibling", null), hA(this, "ELEMENT_NODE", 1), hA(this, "TEXT_NODE", 3), hA … [truncated]
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2788-L2793` → after: `L5962-L5966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5962-L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5962-L5966) · [Before (L2788-L2793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2788-L2793)

```diff
-       instanceBatch(UU) {
-         const XU = this.batchOf(UU);
-         return XU.dispatched || (XU.dispatched = XU.renderSelf = !0, XU.row = this.rowOf(UU)), XU
-       }
-       rowOf(UU) {
-         return UU.row
+       get childNodes() {
+         const HH = [];
+         let BH = this.firstChild;
+         for (; BH;) HH.push(BH), BH = BH.nextSibling;
+         return HH
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2795-L2833` → after: `L5968-L5974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5968-L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5968-L5974) · [Before (L2795-L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2795-L2833)

```diff
-       activate(UU, XU) {
-         if (!UU.UH) {
-           const zU = UU;
-           if (zU.jyU) {
-             const UU = this.batchOf(zU);
-             UU.dispatched = !0, UU.renderSelf = !0, UU.row = XU
-           }
-           return void this.dispatch(zU, XU, XU)
-         }
-         const zU = UU,
-           cU = zU.KyU;
-         if (cU._getWorldMatrixDeterminant() >= 0 !== zU._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${cU.name}`, `A mirrored InstancedMesh of ${cU.name} is not drawn yet`);
-         const yU = this.batchOf(cU);
-         yU.instances.push(zU), yU.rows.push(XU), yU.dispatched || (yU.dispatched = !0, this.dispatch(cU, XU, this.rowOf(cU)))
-       }
-       batchOf(UU) {
- ... (23 more removed lines; see GitHub link above)
+       contains(HH) {
+         if (!(HH instanceof HS)) return !1;
+         if (HH.ownerDocument !== this.ownerDocument) return !1;
+         if (HH === this) return !0;
+         for (; HH.parentNode;) {
+           if (HH.parentNode === this) return !0;
+           HH = HH.parentNode
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2836-L2855` → after: `L5978-L5988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5978-L5988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5978-L5988) · [Before (L2836-L2855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2836-L2855)

```diff
-       groupOf(UU) {
-         let XU = this.groups.get(UU);
-         return XU || (XU = {
-           opaque: {
-             units: [],
-             rows: []
-           },
-           alphaTest: {
-             units: [],
-             rows: []
-           },
-           transparent: {
-             units: [],
-             rows: []
-           },
-           text: {
- ... (4 more removed lines; see GitHub link above)
+       appendChild(HH) {
+         throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
+       }
+       insertBefore(HH, BH) {
+         throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
+       }
+       removeChild(HH) {
+         throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
+       }
+       toString() {
+         return "RRNode"
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2858-L2862` → after: `L5991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5991) · [Before (L2858-L2862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2858-L2862)

```diff
- 
-     function SQ(UU) {
-       UU.opaque.length = 0, UU.transparent.length = 0
-     }
-     class rQ {
+     class BS extends HS {
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2864` → after: `L5993-L5994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5993-L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5993-L5994) · [Before (L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2864)

```diff
-         this.uD = new Map, this.enabled = [], this.groups = new Map, this.cY = [], this.warned = new Set, this.selected = 0, this.drawn = 0
+         for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
+         super(BH), hA(this, "nodeType", 9), hA(this, "nodeName", "#document"), hA(this, "compatMode", "CSS1Compat"), hA(this, "RRNodeType", dr.Document), hA(this, "textContent", null), this.ownerDocument = this
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2866-L2876` → after: `L5996-L5997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5996-L5997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5996-L5997) · [Before (L2866-L2876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2866-L2876)

```diff
-       add(UU) {
-         if (this.uD.has(UU)) return;
-         const XU = {
-           mesh: UU,
-           observer: UU.onEffectiveEnabledStateChangedObservable.add((UU => {
-             this.YC(XU, UU)
-           })),
-           index: -1,
-           steady: null
-         };
-         this.uD.set(UU, XU), this.YC(XU, UU.isEnabled())
+       get documentElement() {
+         return this.childNodes.find((HH => HH.RRNodeType === dr.Element && "HTML" === HH.tagName)) || null
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2878-L2880` → after: `L5999-L6001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5999-L6001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L5999-L6001) · [Before (L2878-L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2878-L2880)

```diff
-       remove(UU) {
-         const XU = this.uD.get(UU);
-         XU && (XU.observer.remove(!0), this.YC(XU, !1), this.uD.delete(UU))
+       get body() {
+         var HH;
+         return (null == (HH = this.documentElement) ? void 0 : HH.childNodes.find((HH => HH.RRNodeType === dr.Element && "BODY" === HH.tagName))) || null
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2882-L2883` → after: `L6003-L6005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6003-L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6003-L6005) · [Before (L2882-L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2882-L2883)

```diff
-       dropSteady() {
-         for (const UU of this.uD.values()) UU.steady = null
+       get head() {
+         var HH;
+         return (null == (HH = this.documentElement) ? void 0 : HH.childNodes.find((HH => HH.RRNodeType === dr.Element && "HEAD" === HH.tagName))) || null
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2885-L2886` → after: `L6007-L6008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6007-L6008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6007-L6008) · [Before (L2885-L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2885-L2886)

```diff
-       base(UU) {
-         return this.uD.get(UU)
+       get implementation() {
+         return this
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2888-L2893` → after: `L6010-L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6010-L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6010-L6011) · [Before (L2888-L2893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2888-L2893)

```diff
-       drawStats() {
-         return {
-           drawn: this.drawn,
-           selected: this.selected,
-           uD: this.uD.size
-         }
+       get firstElementChild() {
+         return this.documentElement
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2895-L2900` → after: `L6013-L6017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6013-L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6013-L6017) · [Before (L2895-L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2895-L2900)

```diff
-       forEachSelected(UU) {
-         for (const [XU, zU] of this.groups) {
-           for (const cU of zU.opaque) UU(cU.owner, "opaque", XU);
-           for (const cU of zU.transparent) UU(cU.owner, "transparent", XU)
-         }
-         for (const XU of this.cY) UU(XU.mesh, "opaque", 0)
+       appendChild(HH) {
+         const BH = HH.RRNodeType;
+         if ((BH === dr.Element || BH === dr.DocumentType) && this.childNodes.some((HH => HH.RRNodeType === BH))) throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${BH===dr.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
+         const LH = ES(this, HH);
+         return LH.parentElement = null, LH
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2902-L2903` → after: `L6019-L6023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6019-L6023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6019-L6023) · [Before (L2902-L2903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2902-L2903)

```diff
-       group(UU) {
-         return this.groups.get(UU)
+       insertBefore(HH, BH) {
+         const LH = HH.RRNodeType;
+         if ((LH === dr.Element || LH === dr.DocumentType) && this.childNodes.some((HH => HH.RRNodeType === LH))) throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${LH===dr.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
+         const AH = XS(this, HH, BH);
+         return AH.parentElement = null, AH
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2905-L2906` → after: `L6025-L6026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6025-L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6025-L6026) · [Before (L2905-L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2905-L2906)

```diff
-       forEachGroup(UU) {
-         this.groups.forEach(UU)
+       removeChild(HH) {
+         return GS(this, HH)
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2908-L2934` → after: `L6028-L6029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6028-L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6028-L6029) · [Before (L2908-L2934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2908-L2934)

```diff
-       select(UU, XU) {
-         if (this.drawn = 0, this.selected = 0, this.cY.length = 0, this.groups.forEach(SQ), !UU) return;
-         const zU = this.enabled;
-         for (let cU = 0; cU < zU.length; cU++) {
-           const yU = zU[cU];
-           if (yU.steady && XU(yU, UU)) {
-             this.selected++, this.cY.push(yU);
-             continue
-           }
-           const QU = yU.mesh;
-           if (QU.isBlocked || QU.RY.hasAZeroComponent) continue;
-           if (!QU.isVisible || QU.visibility <= 0 || 0 === (QU.layerMask & UU.layerMask)) continue;
-           if (QU.jyU) {
-             this.warned.has(QU.name) || (this.warned.add(QU.name), console.warn(`Lite: thin instance base ${QU.name} has InstancedMeshes and is not drawn`));
-             continue
-           }
- ... (11 more removed lines; see GitHub link above)
+       open() {
+         this.firstChild = null, this.lastChild = null
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2936-L2943` → after: `L6031-L6036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6031-L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6031-L6036) · [Before (L2936-L2943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2936-L2943)

```diff
-       YC(UU, XU) {
-         if (XU === UU.index >= 0) return;
-         UU.steady = null;
-         const zU = this.enabled;
-         if (XU) UU.index = zU.length, zU.push(UU);
-         else {
-           const XU = zU.pop();
-           XU !== UU && (zU[UU.index] = XU, XU.index = UU.index), UU.index = -1
+       close() {}
+       write(HH) {
+         let BH;
+         if ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">' === HH ? BH = "-//W3C//DTD XHTML 1.0 Transitional//EN" : '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">' === HH && (BH = "-//W3C//DTD HTML 4.0 Transitional//EN"), BH) {
+           const HH = this.createDocumentType("html", BH, "");
+           this.open(), this.appendChild(HH)
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2946-L2951` → after: `L6039-L6040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6039-L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6039-L6040) · [Before (L2946-L2951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2946-L2951)

```diff
-       listsFor(UU) {
-         let XU = this.groups.get(UU);
-         return XU || (XU = {
-           opaque: [],
-           transparent: []
-         }, this.groups.set(UU, XU)), XU
+       createDocument(HH, BH, LH) {
+         return new BS
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2953-L2957` → after: `L6042-L6044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6042-L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6042-L6044) · [Before (L2953-L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2953-L2957)

```diff
-     }
-     var uQ = zU(40473);
-     class fQ {
-       constructor() {
-         this.bundle = null, this.stale = !0, this.uD = new Set
+       createDocumentType(HH, BH, LH) {
+         const AH = new LS(HH, BH, LH);
+         return AH.ownerDocument = this, AH
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L2959-L3019` → after: `L6046-L6048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6046-L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6046-L6048) · [Before (L2959-L3019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L2959-L3019)

```diff
-     }
-     class iQ {
-       constructor(UU, XU, zU) {
-         this.device = UU, this.slots = XU, this.host = zU, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = n … [truncated]
-           UU.seen !== this.frame && (UU.draw && (UU.draw = null, this.args[5 * UU.slot + 1] = 0, this.argsDirty = !0, this.mw.stale ||= UU.mw), this.frame - UU.seen > 120 && (this.records.delete(UU.unit), this.freeSlots.push(UU.slot), UU.recorded && (this.bundleOf(UU).stale = !0) … [truncated]
-         }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(UU) {
-           var XU, zU;
-           let cU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (XU = null === (zU = globalThis.navigator) || void 0 === zU ? void 0 : zU.userAgent) && void 0 !== XU ? XU : "";
-           const yU = UU.adapterInfo;
-           return "intel" === (null === yU || void 0 === yU ? void 0 : yU.vendor) && "gen-12lp" === yU.architecture && cU.includes("Windows")
-         }(UU), (0, uQ.L)(this.direct)
-       }
-       zB() {
-         this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, uQ.L)(this.directThisFrame)
-       }
-       add(UU, XU, zU, cU) {
- ... (45 more removed lines; see GitHub link above)
+       createElement(HH) {
+         const BH = new AS(HH);
+         return BH.ownerDocument = this, BH
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3021-L3023` → after: `L6050-L6051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6050-L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6050-L6051) · [Before (L3021-L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3021-L3023)

```diff
-       noRangedBundle() {
-         for (const UU of this.records.values()) UU.mw && (UU.recorded = !1);
-         return this.mw.uD.clear(), this.mw.stale = !1, null
+       createElementNS(HH, BH) {
+         return this.createElement(BH)
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3025-L3028` → after: `L6053-L6055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6053-L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6053-L6055) · [Before (L3025-L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3025-L3028)

```diff
-       drawsRanged() {
-         for (const UU of this.records.values())
-           if (UU.mw && UU.draw) return !0;
-         return !1
+       createTextNode(HH) {
+         const BH = new hS(HH);
+         return BH.ownerDocument = this, BH
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3030-L3096` → after: `L6057-L6059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6057-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6057-L6059) · [Before (L3030-L3096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3030-L3096)

```diff
-       encode(UU, XU, zU, cU) {
-         const yU = [];
-         for (const oU of this.records.values()) "direct" !== cU && oU.mw !== ("mw" === cU) || (oU.recorded = !1, oU.draw && yU.push(oU));
-         yU.sort(vQ);
-         const QU = "direct" === cU ? null : "mw" === cU ? this.mw : this.main;
-         null === QU || void 0 === QU || QU.uD.clear(), this.binder.reset();
-         let AU = !1;
-         for (const oU of yU) {
-           var FU;
-           const yU = oU.draw,
-             DU = this.host.pipelineFor(yU, XU, zU);
-           if (!DU) {
-             this.host.pipelineCompiling(yU, zU) ? AU = !0 : QU && this.keep(oU, yU, QU.uD);
-             continue
-           }
-           let EU;
- ... (51 more removed lines; see GitHub link above)
+       createComment(HH) {
+         const BH = new tS(HH);
+         return BH.ownerDocument = this, BH
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L3098-L3106` → after: `L6061-L6063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR6061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L6061-L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/295.js#L6061-L6063) · [Before (L3098-L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/295.js#L3098-L3106)

```diff
-     }
- 
-     function HQ(UU, XU, zU, cU, yU) {
-       const QU = zU[cU + 1],
-         AU = yU.data;
-       for (let FU = 0; FU < yU.count; FU++) {
-         const yU = Math.min(AU[2 * FU], QU),
-           oU = Math.min(AU[2 * FU + 1], QU - yU);
-         0 !== oU && (XU ? UU.drawIndexed(zU[cU], oU, zU[cU + 2], 0, yU) : UU.draw(zU[cU], oU, zU[cU + 2], yU))
+       createCDATASection(HH) {
+         const BH = new zS(HH);
+         return BH.ownerDocument = this, BH
```
