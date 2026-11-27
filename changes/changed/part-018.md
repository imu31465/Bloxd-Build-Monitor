# Changed — Bundle Modifications Report (Part 018 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `18 / 82` (**294** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 017](part-017.md) · [Part 019 →](part-019.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/280.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/280.js` (59 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db)

#### 2. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L6-L7)

```diff
-       d: () => pe,
-       f: () => Be
+       e: () => NW,
+       h: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L9-L635` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L9) · [Before (L9-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L9-L635)

```diff
-     var ye = He(41113),
-       be = He(41121),
-       Me = He(41216),
-       Ke = He(37931),
-       Ue = He(37917),
-       Fe = He(41323),
-       Je = He(39467),
-       oe = He(37949),
-       Re = He(40985),
-       ke = He(38919),
-       qe = He(38581),
-       fe = He(41072),
-       Te = He(41141);
-     let pe = (() => {
-       var ee;
-       let ie, He, oe, pe, Xe, ze, Be, Ee, ge, Oe, de, We, te, Ze, we, De, Pe, Ae, Ye = Fe.d,
- ... (611 more removed lines; see GitHub link above)
+     var mW = OW(2047);
```

#### 4. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L639-L695` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L13) · [Before (L639-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L639-L695)

```diff
-       ze || (ze = !0, pe.Parse = Xe)
-     }
-   },
-   41339: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => be
-     });
-     var ye = He(37917);
-     class be {
-       constructor(ee, ie, He) {
-         this._cameraPosition = ie, this._behavior = He, this.activeInput = !1, this.speed = 1, this.i_ = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = . … [truncated]
-       }
-       computeCurrentFrameDeltas() {
-         const ee = this._scene.Nf().getDeltaTime(),
-           ie = this._getEffectiveDeltaMs(ee);
-         if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 ===  … [truncated]
- ... (41 more removed lines; see GitHub link above)
+       EW = !0
```

#### 5. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L697-L809` → after: `L15-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L15-L17) · [Before (L697-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L697-L809)

```diff
-   },
-   41345: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => ye
-     });
-     class ye {
-       constructor(ee, ie) {
-         this.inputMap = [], this.handlers = ee, this._createDefaultEntries = ie, this.resetInputMap()
-       }
-       resolveInteraction(ee, ie) {
-         for (const He of this.inputMap)
-           if (He.source === ee && this._entryMatches(He, ie)) return He;
-         return null
-       }
-       resetInputMap() {
-         this.inputMap = this._createDefaultEntries?.() ?? []
- ... (97 more removed lines; see GitHub link above)
+ 
+     function PW() {
+       EW && (EW = !1, (0, mW.b)())
```

#### 6. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L812` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L20) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L812)

```diff
-   41311: (ee, ie, He) => {
+   42394: (WW, iW, OW) => {
```

#### 7. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L814-L815` → after: `L22-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L22-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L22-L39) · [Before (L814-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L814-L815)

```diff
-       b: () => Xe,
-       c: () => Te
+       C: () => dW,
+       G: () => rW,
+       H: () => gW,
+       I: () => nW,
+       J: () => vW,
+       M: () => HW,
+       P: () => qW,
+       S: () => BW,
+       V: () => oW,
+       d: () => RW,
+       h: () => VW,
+       i: () => JW,
+       m: () => GW,
+       q: () => hW,
+       t: () => TW,
+       u: () => DW,
+ ... (2 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L817-L1067` → after: `L41-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L41-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L41-L49) · [Before (L817-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L817-L1067)

```diff
-     var ye = He(41113),
-       be = He(41121),
-       Me = He(41320),
-       Ke = He(37917),
-       Ue = He(37920),
-       Fe = He(41330),
-       Je = He(41323),
-       oe = He(41339),
-       Re = He(41345);
-     class ke extends oe.c {
-       constructor(ee, ie, He) {
-         super(ee, ie, He), this.input = new Re.d({
-           translate: (ee, ie, He) => {
-             this.panAccumulatedPixels.x += ee, this.panAccumulatedPixels.y += ie, this.panAccumulatedPixels.z += He
-           },
-           rotate: (ee, ie) => {
- ... (235 more removed lines; see GitHub link above)
+     var mW = OW(1459),
+       EW = OW(27),
+       NW = OW(1294),
+       PW = OW(3305),
+       LW = OW(5575),
+       cW = OW(5533);
+     let wW, tW = !1,
+       ZW = !1,
+       xW = !1,
```

#### 9. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L1071` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L64) · [Before (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L1071)

```diff
-       pe || (pe = !0, Je.d.AddNodeConstructor("TargetCamera", ((ee, ie) => () => new Te(ee, Ke.p.Zero(), ie))))
+       return tW
```

#### 10. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L1082-L1096` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L68) · [Before (L1082-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L1082-L1096)

```diff
-       be || (be = !0, ye.e.prototype.getInputElement = function() {
-         return this._renderingCanvas
-       }, ye.e.prototype.getRenderingCanvasClientRect = function() {
-         return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
-       }, ye.e.prototype.getInputElementClientRect = function() {
-         return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
-       }, ye.e.prototype.getAspectRatio = function(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const He = ee.viewport;
-         return this.getRenderWidth(ie) * He.width / (this.getRenderHeight(ie) * He.height)
-       }, ye.e.prototype.getScreenAspectRatio = function() {
-         return this.getRenderWidth(!0) / this.getRenderHeight(!0)
-       }, ye.e.prototype._verifyPointerLock = function() {
-         this._onPointerLockChange?.()
-       })
+       return kW
```

#### 11. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L1124-L1144` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L72) · [Before (L1124-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L1124-L1144)

```diff
-       be || (be = !0, ye.e.prototype.getRenderPassNames = function() {
-         return this._renderPassNames
-       }, ye.e.prototype.getCurrentRenderPassName = function() {
-         return this._renderPassNames[this.currentRenderPassId]
-       }, ye.e.prototype.createRenderPassId = function(ee) {
-         const ie = ++ye.e._RenderPassIdCounter;
-         return this._renderPassNames[ie] = ee ?? "NONAME", ie
-       }, ye.e.prototype.releaseRenderPassId = function(ee) {
-         this._renderPassNames[ee] = void 0;
-         for (let ie = 0; ie < this.scenes.length; ++ie) {
-           const He = this.scenes[ie];
-           for (let ie = 0; ie < He.meshes.length; ++ie) {
-             const ye = He.meshes[ie];
-             if (ye._releaseRenderPassId(ee), ye.pW)
-               for (let ie = 0; ie < ye.pW.length; ++ie) {
-                 ye.pW[ie]._removeDrawWrapper(ee)
- ... (5 more removed lines; see GitHub link above)
+       return SW
```

#### 12. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L1161-L1173` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L76) · [Before (L1161-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L1161-L1173)

```diff
-       be || (be = !0, ye.ThinEngine.prototype.setAlphaMode = function(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         if (this._alphaMode[He] === ee) {
-           if (!ie) {
-             const ie = 0 === ee;
-             this.depthCullingState.depthMask !== ie && (this.depthCullingState.depthMask = ie)
-           }
-           return
-         }
-         const ye = 0 === ee;
-         this._alphaState.setAlphaBlend(!ye, He), this._alphaState.setAlphaMode(ee, He), ie || (this.depthCullingState.depthMask = ye), this._alphaMode[He] = ee
-       })
+       return (0, NW.z)() && !SW
```

#### 13. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L1175-L1192` → after: `L78-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L78-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L78-L84) · [Before (L1175-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L1175-L1192)

```diff
-   },
-   41092: (ee, ie, He) => {
-     var ye = He(40924),
-       be = He(39467),
-       Me = He(40936),
-       Ke = He(41098),
-       Ue = He(41059);
-     class Fe extends Ke.b {
-       setDepthStencilTexture(ee) {
-         let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (super.setDepthStencilTexture(ee, ie), !ee) return;
-         const He = this._engine,
-           ye = this._context,
-           be = ee._hardwareTexture;
-         if (be && ee._autoMSAAManagement && this._MSAAFramebuffer) {
-           const ie = He._currentFramebuffer;
- ... (2 more removed lines; see GitHub link above)
+ 
+     function nW(WW) {
+       let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+       if (WW !== SW) {
+         SW = WW;
+         for (const WW of [...yW]) WW(SW);
+         iW && BW()
```

#### 14. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L1194-L1283` → after: `L86-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L86-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L86-L90) · [Before (L1194-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L1194-L1283)

```diff
-       constructor(ee, ie, He, ye, be) {
-         super(ee, ie, He, ye), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = be
-       }
-       _cloneRenderTargetWrapper() {
-         let ee;
-         return this._colorTextureArray && this._depthStencilTextureArray ? (ee = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), ee.texture.isReady = !0) : ee = super._cloneRenderTargetWrapper(), ee
-       }
-       _swapRenderTargetWrapper(ee) {
-         super._swapRenderTargetWrapper(ee), ee._framebuffer = this._framebuffer, ee._depthStencilBuffer = this._depthStencilBuffer, ee._MSAAFramebuffer = this._MSAAFramebuffer, ee._colorTextureArray = this._colorTextureArray, ee._depthStencilTextureArray = this._depthStencilTextu … [truncated]
-       }
-       createDepthStencilTexture() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-           He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
-           be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
- ... (74 more removed lines; see GitHub link above)
+     }
+ 
+     function uW(WW) {
+       return yW.add(WW), () => {
+         yW.delete(WW)
```

#### 15. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L1407-L1418` → after: `L94-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L94-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L94-L96) · [Before (L1407-L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L1407-L1418)

```diff
-       function ie(ee) {
-         return function(ie, He, ye, be, Me, Ue, Fe, Je) {
-           let oe = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
-             Re = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
-           const ke = ee ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
-             qe = ee ? 10 : 11,
-             fe = new Ke.b(this, qe);
-           fe.baseWidth = He, fe.baseHeight = ye, fe.baseDepth = be, fe.width = He, fe.height = ye, fe.depth = be, fe.format = Me, fe.type = Re, fe.generateMipMaps = Ue, fe.samplingMode = Je, ee ? fe.is3D = !0 : fe.is2DArray = !0, this._doNotHandleContextLost || (fe._bufferView =  … [truncated]
-           const Te = this._getSamplingParameters(Je, Ue);
-           return this._gl.texParameteri(ke, this._gl.TEXTURE_MAG_FILTER, Te.mag), this._gl.texParameteri(ke, this._gl.TEXTURE_MIN_FILTER, Te.min), Ue && this._gl.generateMipmap(ke), this._bindTextureDirectly(ke, null), this._internalTexturesCache.push(fe), fe
-         }
-       }
+     function oW() {
+       (0, LW.j)(PW.y.Menu, (0, NW.z)() ? 0 : PW.y.Menu)
+     }
```

#### 16. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L1420-L1883` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L98-L99) · [Before (L1420-L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L1420-L1883)

```diff
-       function He(ee) {
-         return function(ie, He, ye, be) {
-           let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-             Ke = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-           const Ue = ee ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
-             Fe = this._getWebGLTextureType(Ke),
-             Je = this._getInternalFormat(ye),
-             oe = this._getRGBABufferInternalSizedFormat(Ke, ye);
-           this._bindTextureDirectly(Ue, ie, !0), this._unpackFlipY(void 0 === be || !!be), this._doNotHandleContextLost || (ie._bufferView = He, ie.format = ye, ie.invertY = be, ie._compression = Me), ie.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Me && … [truncated]
-         }
-       }
-       Je || (Je = !0, be.ThinEngine.prototype.updateRawTexture = function(ee, ie, He, ye) {
-         let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-           Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
-           Ke = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-         if (!ee) return;
- ... (448 more removed lines; see GitHub link above)
+     function dW() {
+       kW = !1, sW = 0, oW(), BW()
```

#### 17. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L1885-L1910` → after: `L101-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L101-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L101-L104) · [Before (L1885-L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L1885-L1910)

```diff
-     class Fe {
-       constructor(ee) {
-         this._samples = new Array(ee), this.reset()
-       }
-       add(ee) {
-         let ie;
-         if (this.isSaturated()) {
-           const ee = this._samples[this._pos];
-           ie = ee - this.average, this.average -= ie / (this._sampleCount - 1), this._m2 -= ie * (ee - this.average)
-         } else this._sampleCount++;
-         ie = ee - this.average, this.average += ie / this._sampleCount, this._m2 += ie * (ee - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = ee, this._pos++, this._pos %= this._samples.length
-       }
-       history(ee) {
-         if (ee >= this._sampleCount || ee >= this._samples.length) return 0;
-         const ie = this._wrapPosition(this._pos - 1);
-         return this._samples[this._wrapPosition(ie - ee)]
- ... (10 more removed lines; see GitHub link above)
+ 
+     function eW(WW) {
+       return YW.add(WW), () => {
+         YW.delete(WW)
```

#### 18. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L1920-L1977` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L109) · [Before (L1920-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L1920-L1977)

```diff
-       const ie = function(ee) {
-         if (!(0, qe.h)() || !document.body) return null;
-         const ie = document.createElement("span");
-         ie.textContent = "Hg", ie.style.font = ee;
-         const He = document.createElement("div");
-         He.style.display = "inline-block", He.style.width = "1px", He.style.height = "0px", He.style.verticalAlign = "bottom";
-         const ye = document.createElement("div");
-         let be, Me;
-         ye.style.whiteSpace = "nowrap", ye.appendChild(ie), ye.appendChild(He), document.body.appendChild(ye);
-         try {
-           Me = He.getBoundingClientRect().top - ie.getBoundingClientRect().top, He.style.verticalAlign = "baseline", be = He.getBoundingClientRect().top - ie.getBoundingClientRect().top
-         } finally {
-           document.body.removeChild(ye)
-         }
-         const Ke = {
-           ascent: be,
- ... (42 more removed lines; see GitHub link above)
+       ZW = !1, WW !== tW && (tW = WW, lW = !1, clearTimeout(wW), xW = !tW && KW, tW ? (UW = !1, kW = !1, sW = 0) : HW() && !KW && (kW = !0), KW = !1, tW && !HW() && aW(), zW(), xW && BW())
```

#### 19. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L1981` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L113) · [Before (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L1981)

```diff
-       return Number.isFinite(ee.ascent) && Number.isFinite(ee.height) && Number.isFinite(ee.descent) && ee.height > 0
+       WW !== UW && (UW = WW, WW || BW())
```

#### 20. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L1984-L1990` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L116-L117) · [Before (L1984-L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L1984-L1990)

```diff
-     function pe(ee) {
-       if (ee.requestPointerLock) {
-         const ie = ee.requestPointerLock();
-         ie instanceof Promise ? ie.then((() => {
-           ee.focus()
-         })).catch((() => {})) : ee.focus()
-       }
+     function DW() {
+       ZW = !1, lW || !0 !== CW() || (lW = !0, clearTimeout(wW), wW = setTimeout(pW, AW))
```

#### 21. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L1992-L2277` → after: `L119-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L119-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L119-L121) · [Before (L1992-L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L1992-L2277)

```diff
-     var Xe = He(41067),
-       ze = He(40995),
-       Be = He(41070),
-       Ee = He(41072);
-     class ge extends Me.ThinEngine {
-       static get NpmPackage() {
-         return ke.e.NpmPackage
-       }
-       static get Version() {
-         return ke.e.Version
-       }
-       static get Instances() {
-         return be.b.Instances
-       }
-       static get LastCreatedEngine() {
-         return be.b.LastCreatedEngine
- ... (270 more removed lines; see GitHub link above)
+ 
+     function VW() {
+       return (!ZW || performance.now() - jW > bW) && (ZW = (0, cW.K)().lockPointer(), jW = performance.now()), ZW
```

#### 22. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L2279-L2494` → after: `L123-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L123-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L123-L125) · [Before (L2279-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L2279-L2494)

```diff
-     ge.ALPHA_DISABLE = 0, ge.ALPHA_ADD = 1, ge.ALPHA_COMBINE = 2, ge.ALPHA_SUBTRACT = 3, ge.ALPHA_MULTIPLY = 4, ge.ALPHA_MAXIMIZED = 5, ge.ALPHA_ONEONE = 6, ge.ALPHA_PREMULTIPLIED = 7, ge.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, ge.ALPHA_INTERPOLATE = 9, ge.ALPHA_SCREENMODE = 10, ge.D … [truncated]
-   },
-   41098: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => be
-     });
-     var ye = He(41059);
-     class be {
-       get depthStencilTexture() {
-         return this._depthStencilTexture
-       }
-       setDepthStencilTexture(ee) {
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = ee, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, e … [truncated]
-       }
-       get depthStencilTextureWithStencil() {
-         return this._depthStencilTextureWithStencil
- ... (200 more removed lines; see GitHub link above)
+ 
+     function pW() {
+       fW() && XW() && VW()
```

#### 23. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L2496-L2525` → after: `L127-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L127-L129) · [Before (L2496-L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L2496-L2525)

```diff
-   },
-   41542: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => ye
-     });
-     class ye {
-       static get ForceFullSceneLoadingForIncremental() {
-         return ye._ForceFullSceneLoadingForIncremental
-       }
-       static set ForceFullSceneLoadingForIncremental(ee) {
-         ye._ForceFullSceneLoadingForIncremental = ee
-       }
-       static get ShowLoadingScreen() {
-         return ye._ShowLoadingScreen
-       }
-       static set ShowLoadingScreen(ee) {
- ... (14 more removed lines; see GitHub link above)
+ 
+     function fW() {
+       return HW() && !tW && !UW && !(0, mW.k)()
```

#### 24. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L2536-L2539` → after: `L132-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L132-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L132-L134) · [Before (L2536-L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L2536-L2539)

```diff
-     function Me(ee, ie) {
-       (function(ee) {
-         return be.delete(ee)
-       })(ee) && ye.e.Warn(`Extension with the name '${ee}' already exists`), be.set(ee, ie)
+     function CW() {
+       var WW;
+       return "undefined" === typeof navigator || null === (WW = navigator.userActivation) || void 0 === WW ? void 0 : WW.isActive
```

#### 25. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L2542-L2545` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L137-L138) · [Before (L2542-L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L2542-L2545)

```diff
-     function Ke(ee, ie) {
-       "image/ktx" !== ie && "image/ktx2" !== ie || (ee = ".ktx"), be.has(ee) || (ee.endsWith(".ies") && Me(".ies", (async () => await He.e(618).then((() => He(44972))).then((ee => new ee._IESTextureLoader)))), ee.endsWith(".dds") && Me(".dds", (async () => await He.e(616).then((( … [truncated]
-       const ye = be.get(ee);
-       return ye ? Promise.resolve(ye(ie)) : null
+     function XW() {
+       return xW && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== CW()
```

#### 26. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L2643-L2648` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L141-L142) · [Before (L2643-L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L2643-L2648)

```diff
-     function Fe(ee, ie) {
-       const He = new Ke(ee.name, ie);
-       if (He.id = ee.id, He._loadedUniqueId = ee.uniqueId, be.b && be.b.AddTagsTo(He, ee.tags), ee.materialsUniqueIds) He._waitingSubMaterialsUniqueIds = ee.materialsUniqueIds;
-       else
-         for (const ye of ee.materials) He.gie.push(ie.getLastMaterialById(ye));
-       return He
+     function BW() {
+       HW() ? fW() && !kW && XW() && VW() : tW && !KW && aW()
```

#### 27. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L2652-L2759` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L146) · [Before (L2652-L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L2652-L2759)

```diff
-       Ue || (Ue = !0, Ke.ParseMultiMaterial = Fe, (0, Me.e)("BABYLON.MultiMaterial", Ke))
-     }
-   },
-   41330: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
-     });
-     var ye, be, Me = He(37917);
-     ! function(ee) {
-       ee[ee.LOCAL = 0] = "LOCAL", ee[ee.WORLD = 1] = "WORLD", ee[ee.BONE = 2] = "BONE"
-     }(ye || (ye = {}));
-     class Ke {}
-     Ke.X = new Me.p(1, 0, 0), Ke.Y = new Me.p(0, 1, 0), Ke.Z = new Me.p(0, 0, 1),
-       function(ee) {
-         ee[ee.X = 0] = "X", ee[ee.Y = 1] = "Y", ee[ee.Z = 2] = "Z"
-       }(be || (be = {}))
- ... (92 more removed lines; see GitHub link above)
+       kW ? navigator.vendor.startsWith("Apple") ? IW() : sW = MW : BW()
```

#### 28. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L2772-L2773` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L149-L150) · [Before (L2772-L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L2772-L2773)

```diff
-     function Ze(ee, ie) {
-       return ee - Math.floor(ee / ie) * ie
+     function RW() {
+       sW > 0 && 0 === --sW && IW()
```

#### 29. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L2776-L2777` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L153-L154) · [Before (L2776-L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L2776-L2777)

```diff
-     function we(ee, ie, He) {
-       ee instanceof Float32Array ? Me.b.FromArrayToRef(ee, ie, He) : He.wie((0, Xe.d)(ee[ie]), (0, Xe.d)(ee[ie + 1]), (0, Xe.d)(ee[ie + 2]), (0, Xe.d)(ee[ie + 3]), (0, Xe.d)(ee[ie + 4]), (0, Xe.d)(ee[ie + 5]), (0, Xe.d)(ee[ie + 6]), (0, Xe.d)(ee[ie + 7]), (0, Xe.d)(ee[ie + 8]), ( … [truncated]
+     function GW() {
+       sW = 0
```

#### 30. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L2780-L2817` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L157-L158) · [Before (L2780-L2817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L2780-L2817)

```diff
-     function De(ee, ie, He, ye, be, Ue, Fe, Je, oe) {
-       const Re = He.texture,
-         ke = Re?.getInternalTexture(),
-         qe = ke?._bufferView;
-       if (!(qe instanceof Float32Array) && !(qe instanceof Uint16Array)) return Oe.e.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
-       const fe = Re.getSize(),
-         Te = function(ee, ie) {
-           const He = ee.y - ee.x + 1,
-             ye = ie * ee.w / He,
-             be = ye < 1 ? 0 : 1,
-             Me = He - be;
-           let Ke = Ze(ye - Math.floor(ye), 1) * Me;
-           return Ke = Ze(Ke + ee.z, Me), Math.floor(Ke) + ee.x + be
-         }(ye, He.time);
-       if (!isFinite(Te) || Te < 0 || Te >= fe.height) return Oe.e.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
-       const pe = Me.j.rf[0],
- ... (22 more removed lines; see GitHub link above)
+     function IW() {
+       fW() && !0 === CW() && VW()
```

#### 31. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L2819-L2822` → after: `L160-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L160-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L160-L162) · [Before (L2819-L2822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L2819-L2822)

```diff
-     class Ae {
-       constructor() {
-         this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new Pe, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, th … [truncated]
-       }
+ 
+     function aW() {
+       KW = !0, (0, cW.K)().unlockPointer()
```

#### 32. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L3713-L6303` → after: `L166-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L166-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L166-L168) · [Before (L3713-L6303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L3713-L6303)

```diff
-       Ve || (Ve = !0, (0, te.e)("BABYLON.AbstractMesh", Ye))
-     }(qe = Ye.prototype).createOrUpdateSubmeshesOctree ?? (qe.createOrUpdateSubmeshesOctree = (0, pe.h)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (fe = Ye.prototype).getPhysicsImpostor ?? (fe.getPhysicsImpostor = (0, pe.h)("AbstractMesh", "getPhysicsImpostor")), (Te = Ye … [truncated]
-   },
-   41540: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Xe
-     });
-     var ye = He(37917),
-       be = He(38022),
-       Me = He(41535),
-       Ke = He(41247),
-       Ue = He(41421),
-       Fe = He(41542),
-       Je = He(41429),
-       oe = He(41203),
-       Re = He(39467),
- ... (2575 more removed lines; see GitHub link above)
+       ZW = !1, xW = !1, lW = !1, clearTimeout(wW), UW = !1, kW = !1, sW = 0, KW = !1;
+       const WW = tW;
+       tW = !1, WW && zW()
```

#### 33. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6326-L6866` → after: `L171-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L171-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L171-L174) · [Before (L6326-L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L6326-L6866)

```diff
-     function Qe() {
-       re || (re = !0, (0, ve.e)("BABYLON.Mesh", Ge))
-     }(ye = Ge.prototype).fC ?? (ye.fC = (0, ue.h)("Mesh", "fC")), (be = Ge.prototype).simplify ?? (be.simplify = (0, ue.h)("Mesh", "simplify")), (Me = Ge.prototype).thinInstanceAdd ?? (Me.thinInstanceAdd = (0, ue.h)("Mesh", "thinInstanceAdd")), (Ke = Ge.prototype).thinInstanceAdd … [truncated]
-   },
-   41535: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => fe
-     });
-     var ye = He(41113),
-       be = He(37917),
-       Me = He(41247),
-       Ke = He(40985),
-       Ue = He(38022),
-       Fe = He(39467),
-       Je = He(41121),
-       oe = He(41532),
- ... (525 more removed lines; see GitHub link above)
+     function zW() {
+       for (const WW of [...YW]) WW(tW);
+       EW.l.iZ("pointerLockUpdate", tW)
+     }
```

#### 34. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6868-L6874` → after: `L176-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L176-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L176-L188) · [Before (L6868-L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L6868-L6874)

```diff
-   41601: (ee, ie, He) => {
-     var ye = He(37917),
-       be = He(39467),
-       Me = He(41429),
-       Ke = He(41524),
-       Ue = He(41247);
-     const Fe = "bakedVertexAnimationSettingsInstanced";
+   42373: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => xW,
+       h: () => LW,
+       j: () => ZW,
+       n: () => wW,
+       q: () => PW,
+       t: () => tW,
+       x: () => cW
+     });
+     let mW = null,
+       EW = null,
+       NW = null;
```

#### 35. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6877-L6878` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L191) · [Before (L6877-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L6877-L6878)

```diff
-       const ie = ee.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
-       return ie instanceof Float32Array || ie instanceof Uint16Array
+       mW = WW
```

#### 36. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6881-L6888` → after: `L194-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L194-L195) · [Before (L6881-L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L6881-L6888)

```diff
-     function oe(ee, ie, He, ye) {
-       He.Iee(Number.POSITIVE_INFINITY), ye.Iee(Number.NEGATIVE_INFINITY);
-       for (let be = 0; be < 3 * ie; be += 3) {
-         const ie = ee[be],
-           Me = ee[be + 1],
-           Ke = ee[be + 2];
-         ie < He.x && (He.x = ie), Me < He.y && (He.y = Me), Ke < He.z && (He.z = Ke), ie > ye.x && (ye.x = ie), Me > ye.y && (ye.y = Me), Ke > ye.z && (ye.z = Ke)
-       }
+     function LW() {
+       return mW
```

#### 37. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6891-L6892` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L198-L199) · [Before (L6891-L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L6891-L6892)

```diff
-     function Re(ee, ie, He) {
-       He && (ee.x -= ee.x * He.x + He.y, ee.y -= ee.y * He.x + He.y, ee.z -= ee.z * He.x + He.y, ie.x += ie.x * He.x + He.y, ie.y += ie.y * He.x + He.y, ie.z += ie.z * He.x + He.y)
+     function cW(WW) {
+       EW = WW
```

#### 38. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6895-L6900` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L202-L203) · [Before (L6895-L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L6895-L6900)

```diff
-     function ke(ee, ie, He, be, Me) {
-       const Ke = ye.j.rf[7],
-         Ue = ye.j.rf[8];
-       for (let Fe = 0; Fe < 2; ++Fe)
-         for (let Je = 0; Je < 2; ++Je)
-           for (let oe = 0; oe < 2; ++oe) Ke.set(Fe ? ie.x : ee.x, Je ? ie.y : ee.y, oe ? ie.z : ee.z), ye.p.TransformCoordinatesToRef(Ke, He, Ue), be.minimizeInPlace(Ue), Me.maximizeInPlace(Ue)
+     function wW() {
+       return EW
```

#### 39. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6903-L6905` → after: `L206-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L206-L207) · [Before (L6903-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L6903-L6905)

```diff
-     function qe(ee, ie, He, be, Me) {
-       const Ke = ye.j.rf[7];
-       for (let Ue = 0; Ue < 3 * ie; Ue += 3) ye.p.TransformCoordinatesFromFloatsToRef(ee[Ue], ee[Ue + 1], ee[Ue + 2], He, Ke), be.minimizeInPlace(Ke), Me.maximizeInPlace(Ke)
+     function tW(WW) {
+       NW = WW
```

#### 40. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6907-L6943` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L209-L210) · [Before (L6907-L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L6907-L6943)

```diff
-     let fe = !1;
-     fe || (fe = !0, Ke.b.prototype.thinInstanceAdd = function(ee) {
-       let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       if (!this.Xx().Nf().getCaps().instancedArrays) return be.e.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
-       this._thinInstanceUpdateBufferSize("matrix", Array.isArray(ee) ? ee.length : 1);
-       const He = this._thinInstanceDataStorage.instancesCount;
-       if (Array.isArray(ee))
-         for (let ye = 0; ye < ee.length; ++ye) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, ee[ye], ye === ee.length - 1 && ie);
-       else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, ee, ie);
-       return He
-     }, Ke.b.prototype.thinInstanceAddSelf = function() {
-       let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-       return this.thinInstanceAdd(ye.b.IdentityReadOnly, ee)
-     }, Ke.b.prototype.thinInstanceRegisterAttribute = function(ee, ie) {
-       ee === Ue.h.ColorKind && (ee = Ue.h.ColorInstanceKind), this.removeVerticesData(ee), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[ee] = ie, this._userThinInstanceBuffersStorage.sizes[ee] = ie * Math.max(32, this._thinInstanceDataSt … [truncated]
-     }, Ke.b.prototype.thinInstanceSetMatrixAt = function(ee, ie) {
- ... (21 more removed lines; see GitHub link above)
+ 
+     function ZW() {
```

#### 41. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L6945-L7058` → after: `L212-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L212-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L212-L245) · [Before (L6945-L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L6945-L7058)

```diff
-     }, Ke.b.prototype.Bie = function(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-         ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       if (He = He || 16, "matrix" === ee) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = ie ? ie.length : 32 * He, this._thinInstanceDataStorage.matrixData = ie, this._thin … [truncated]
-       else if ("previousMatrix" === ee) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = ie, null !== ie && (this._thinInstanceDataStorage.previousMatrixBuf … [truncated]
-       else if ("splatIndex" === ee && ie) {
-         this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = ie.length / He, this._userThinInstanceBuffersStorage.data[ee] = ie, this._userThinInstanceBuffersStorage.strides[ee] = He, this._userThinInstanceBuffersStorage.sizes[ee] = ie.length;
-         const ye = new Ue.b(this.Nf(), ie, !0, 16, !1, !0);
-         this._thinInstanceDataStorage.matrixBuffer = ye;
-         for (let ie = 0; ie < 4; ie++) this.setVerticesBuffer(ye.createVertexBuffer(ee + ie, 4 * ie, 4))
-       } else ee === Ue.h.ColorKind && (ee = Ue.h.ColorInstanceKind), null === ie ? this._userThinInstanceBuffersStorage?.data[ee] && (this.removeVerticesData(ee), delete this._userThinInstanceBuffersStorage.data[ee], delete this._userThinInstanceBuffersStorage.strides[ee], delete … [truncated]
-     }, Ke.b.prototype.qie = function(ee) {
-       "matrix" === ee ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(ee), this._thinInstanceDataStorage.matrixBuffer?.updateDir … [truncated]
-     }, Ke.b.prototype.thinInstancePartialBufferUpdate = function(ee, ie, He) {
-       if ("matrix" === ee) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof ie ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16  … [truncated]
-       else if (ee === Ue.h.ColorKind && (ee = Ue.h.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[ee]) {
- ... (98 more removed lines; see GitHub link above)
+     }
+ 
+     function xW() {
+       var WW, iW;
+       return !0 === (null === (WW = EW) || void 0 === WW || null === (iW = WW.currentViewer) || void 0 === iW ? void 0 : iW.inPlayback)
+     }
+   },
+   42528: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW,
+       c: () => NW,
+       f: () => LW
+     });
+     var mW = OW(42094),
+       EW = OW(42109);
+ 
+ ... (18 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7060-L7069` → after: `L247-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L247-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L247-L298) · [Before (L7060-L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L7060-L7069)

```diff
-     }, Ke.b.prototype._thinInstanceInitializeUserStorage = function() {
-       this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
-         data: {},
-         sizes: {},
-         vertexBuffers: {},
-         strides: {}
-       })
-     }, Ke.b.prototype._disposeThinInstanceSpecificData = function() {
-       this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), th … [truncated]
-     })
+     }
+ 
+     function PW(WW) {
+       const {
+         terrainOpaque: iW,
+         terrainTransparent: OW,
+         earthSky: mW,
+         skyMeshes: EW,
+         regular: NW,
+         thin: PW,
+         line: LW,
+         text: cW,
+         particles: wW
+       } = WW;
+       return iW + OW + mW + EW + NW + PW + LW + cW + wW
+     }
+ ... (36 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7071` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L300) · [Before (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L7071)

```diff
-   41559: (ee, ie, He) => {
+   42508: (WW, iW, OW) => {
```

#### 44. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7074` → after: `L304-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L304-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L304-L355) · [Before (L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L7074)

```diff
-       d: () => Te
+       g: () => lW
+     });
+     var mW = OW(2051),
+       EW = OW(1296),
+       NW = OW(42109),
+       PW = OW(42131),
+       LW = OW(42134),
+       cW = OW(42149);
+     const wW = new EW.b;
+     let tW = !1;
+ 
+     function ZW(WW) {
+       const iW = (0, NW.f)();
+       return null !== iW && +WW === iW.api.localId
+     }
+ 
+ ... (36 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7076-L7084` → after: `L357-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L357-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L357-L365) · [Before (L7076-L7084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L7076-L7084)

```diff
-     var ye, be, Me, Ke, Ue = He(41113),
-       Fe = He(41121),
-       Je = He(41141),
-       oe = He(37931),
-       Re = He(37917),
-       ke = He(41323),
-       qe = He(37949),
-       fe = He(40985);
-     let Te = (() => {
+     var mW = OW(5551),
+       EW = OW(5546),
+       NW = OW(42137),
+       PW = OW(42149);
+     const LW = new Set(mW.R),
+       cW = mW.R.map((WW => (new TextEncoder).encode(WW))),
+       wW = new Map;
+ 
+     function tW(WW, iW) {
```

#### 46. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7086-L7541` → after: `L367-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L367-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L367-L374) · [Before (L7086-L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L7086-L7541)

```diff
-       let ie, He, ye, be, Me, Ke, qe, fe, Te, pe = ke.d,
-         Xe = [],
-         ze = [],
-         Be = [],
-         Ee = [],
-         ge = [],
-         Oe = [],
-         de = [],
-         We = [],
-         te = [],
-         Ze = [],
-         we = [],
-         De = [],
-         Pe = [],
-         Ae = [],
-         Ye = [],
- ... (440 more removed lines; see GitHub link above)
+       return null === (OW = wW.get(WW)) || void 0 === OW ? void 0 : OW[iW]
+     }(0, PW.j)(mW.uc.NewOtherEntitySettings, (WW => {
+       WW.payloadKind === EW.hc.Msgpack && cW.some((iW => function(WW, iW) {
+         const OW = iW[0];
+         for (let mW = WW.indexOf(OW); - 1 !== mW && mW + iW.length <= WW.length; mW = WW.indexOf(OW, mW + 1)) {
+           let OW = 1;
+           for (; OW < iW.length && WW[mW + OW] === iW[OW];) OW++;
+           if (OW === iW.length) return !0
```

#### 47. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7543-L7544` → after: `L376-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L376-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L376-L385) · [Before (L7543-L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L7543-L7544)

```diff
-         _syncAbsoluteScalingAndRotation() {
-           this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
+         return !1
+       }(WW.payload, iW))) && function(WW) {
+         if (null === WW || "object" !== typeof WW || null === WW.settings || "object" !== typeof WW.settings) return;
+         const iW = String(WW.eId),
+           OW = WW.settings;
+         let mW = wW.get(iW);
+         for (const EW in OW) {
+           if (!LW.has(EW)) continue;
+           const WW = OW[EW];
+           null === WW || void 0 === WW ? mW && delete mW[EW] : (mW ??= {}, mW[EW] = WW)
```

#### 48. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7546-L7672` → after: `L387-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L387-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L387-L406) · [Before (L7546-L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L7546-L7672)

```diff
-       }, (() => {
-         const Je = "function" === typeof Symbol && Symbol.metadata ? Object.create(pe[Symbol.metadata] ?? null) : void 0;
-         ie = [(0, Fe.P)("position")], He = [(0, Fe.P)("rotation")], ye = [(0, Fe.F)("rotationQuaternion")], be = [(0, Fe.P)("wR")], Me = [(0, Fe.R)("billboardMode")], Ke = [(0, Fe.R)()], qe = [(0, Fe.R)("infiniteDistance")], fe = [(0, Fe.R)()], Te = [(0, Fe.R)()], (0, Ue.i)(null, … [truncated]
-           kind: "field",
-           name: "_position",
-           static: !1,
-           private: !1,
-           access: {
-             has: ee => "_position" in ee,
-             get: ee => ee._position,
-             set: (ee, ie) => {
-               ee._position = ie
-             }
-           },
-           metadata: Je
-         }, Xe, ze), (0, Ue.i)(null, null, He, {
- ... (111 more removed lines; see GitHub link above)
+         mW && wW.set(iW, mW)
+       }((0, NW.d)(WW.payload))
+     })), (0, PW.e)((() => {
+       wW.clear()
+     }))
+   },
+   42502: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => lW,
+       i: () => wW,
+       m: () => ZW
+     });
+     var mW = OW(40205),
+       EW = OW(2042),
+       NW = OW(1296),
+       PW = OW(42131),
+ ... (4 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7674-L7684` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L408-L409) · [Before (L7674-L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L7674-L7684)

```diff
-     function pe(ee, ie, He) {
-       const ye = Je.c.Parse((() => new Te(ee.name, ie)), ee, ie, He);
-       if (ee.localMatrix ? ye.setPreTransformMatrix(Re.b.FromArray(ee.localMatrix)) : ee.pivotMatrix && ye.setPivotMatrix(Re.b.FromArray(ee.pivotMatrix)), ye.JY(ee.isEnabled), ye._waitingParsedUniqueId = ee.uniqueId, void 0 !== ee.parentId && (ye._waitingParentId = ee.parentId),  … [truncated]
-         for (let ie = 0; ie < ee.animations.length; ie++) {
-           const He = ee.animations[ie],
-             be = (0, qe.c)("BABYLON.Animation");
-           be && ye.animations.push(be.Parse(He))
-         }
-         ke.d.ParseAnimationRanges(ye, ee, ie)
-       }
-       return ee.autoAnimate && ie.beginAnimation(ye, ee.autoAnimateFrom, ee.autoAnimateTo, ee.autoAnimateLoop, ee.autoAnimateSpeed || 1), ye
+     function ZW(WW) {
+       return tW[WW]
```

#### 50. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7686` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L411) · [Before (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L7686)

```diff
-     let Xe = !1;
+     const xW = new NW.b;
```

#### 51. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7688-L7690` → after: `L413-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L413-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L413-L476) · [Before (L7688-L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L7688-L7690)

```diff
-     function ze() {
-       Xe || (Xe = !0, Te.Parse = pe)
-     }(ye = Te.prototype).XN ?? (ye.XN = (0, fe.h)("TransformNode", "XN")), (be = Te.prototype).applyImpulse ?? (be.applyImpulse = (0, fe.h)("TransformNode", "applyImpulse")), (Me = Te.prototype).applyAngularImpulse ?? (Me.applyAngularImpulse = (0, fe.h)("TransformNode", "applyAng … [truncated]
+     function lW(WW) {
+       return xW.add(WW)
+     }
+ 
+     function AW(WW) {
+       xW.callEach(WW, "a roster listener")
+     }(0, cW.j)(PW.db, (WW => {
+       const iW = (0, LW.g)(PW.db, WW);
+       if (void 0 === iW) return;
+       const OW = iW.SE.some((WW => {
+           let {
+             YE: iW,
+             yE: OW
+           } = WW;
+           return null !== OW && wW.has(iW) && wW.getName(iW) !== OW
+         })),
+ ... (48 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7692-L7700` → after: `L478-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L478-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L478-L514) · [Before (L7692-L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L7692-L7700)

```diff
-   41532: (ee, ie, He) => {
-     function ye(ee, ie, He) {
-       try {
-         const ye = ee.next();
-         ye.done ? ie(ye) : ye.value ? ye.value.then((() => {
-           ye.value = void 0, ie(ye)
-         }), He) : ie(ye)
-       } catch (ye) {
-         He(ye)
+   42519: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => hW,
+       g: () => jW,
+       k: () => oW,
+       l: () => dW
+     });
+     var mW = OW(1259),
+       EW = OW(632),
+       NW = OW(100),
+       PW = OW(5551),
+       LW = OW(42094),
+       cW = OW(42125),
+       wW = OW(42109),
+       tW = OW(42513),
+       ZW = OW(42502),
+ ... (21 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7704-L7710` → after: `L518-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L518-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L518-L528) · [Before (L7704-L7710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L7704-L7710)

```diff
-     function be() {
-       let ee, ie = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
-       return (He, be, Me) => {
-         const Ke = performance.now();
-         void 0 === ee || Ke - ee > ie ? (ee = Ke, setTimeout((() => {
-           ye(He, be, Me)
-         }), 0)) : ye(He, be, Me)
+     function bW(WW) {
+       let {
+         killer: iW,
+         victim: OW,
+         withItem: mW
+       } = WW;
+       return {
+         killer: MW(iW),
+         victim: MW(OW),
+         withItem: mW,
+         killstreak: 0
```

#### 54. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7714-L7724` → after: `L532-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L532-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L532-L533) · [Before (L7714-L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L7714-L7724)

```diff
-     function Me(ee, ie, He, ye, be) {
-       const Me = () => {
-         let Ke;
-         const Ue = ee => {
-           ee.done ? He(ee.value) : void 0 === Ke ? Ke = !0 : Me()
-         };
-         do {
-           Ke = void 0, be && be.aborted ? ye(new Error("Aborted")) : ie(ee, Ue, ye), void 0 === Ke && (Ke = !1)
-         } while (Ke)
-       };
-       Me()
+     function jW(WW) {
+       yW && JW((() => "killed" === WW.kind ? AW(WW.body) : bW(WW.body)))
```

#### 55. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7728-L7731` → after: `L539-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L539-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L539-L540) · [Before (L7728-L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L7728-L7731)

```diff
-       let He;
-       return Me(ee, ye, (ee => He = ee), (ee => {
-         throw ee
-       }), ie), He
+       var OW;
+       return ZW.i.has(WW) ? null === (OW = ZW.i.getSettings(WW)) || void 0 === OW ? void 0 : OW[iW] : (0, tW.c)(WW, iW)
```

#### 56. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7733-L7736` → after: `L542-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L542-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L542-L589) · [Before (L7733-L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L7733-L7736)

```diff
-     async function Ue(ee, ie, He) {
-       return await new Promise(((ye, be) => {
-         Me(ee, ie, ye, be, He)
-       }))
+ 
+     function MW(WW) {
+       var iW, OW, PW, LW, tW;
+       let {
+         eId: xW,
+         name: lW,
+         colour: AW,
+         lifeformType: bW
+       } = WW;
+       if (void 0 === xW || null === xW || "" === xW) {
+         const WW = lW || null;
+         return {
+           id: null,
+           shownName: WW,
+           lifeformType: null === WW && null !== bW && void 0 !== bW ? bW : null,
+           colour: AW || null,
+ ... (32 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7739-L7741` → after: `L592-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L592-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L592-L640) · [Before (L7739-L7741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L7739-L7741)

```diff
-     function Fe(ee, ie) {
-       return function() {
-         return Ke(ee(...arguments), ie)
+     function hW() {
+       TW || (TW = !0, (0, lW.j)(PW.uc.PlayerKilled, (WW => {
+         const iW = (0, xW.j)(WW);
+         (0, xW.d)(iW) && JW((() => AW(iW)))
+       })), (0, lW.j)(PW.uc.CustomKillfeed, (WW => {
+         const iW = (0, xW.j)(WW);
+         (0, xW.d)(iW) && (0, xW.d)(iW.killer) && (0, xW.d)(iW.victim) && JW((() => bW(iW)))
+       })), (0, lW.e)((() => {
+         SW = []
+       })))
+     }
+     const HW = Object.freeze([0, 0, 0]),
+       nW = [0, 0, 0],
+       uW = [0, 0, 0],
+       oW = {
+         kill: {
+ ... (33 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7743` → after: `L642-L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L642-L643) · [Before (L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L7743)

```diff
-     }
+   },
+   40205: (WW, iW, OW) => {
```

#### 59. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L7745-L7749` → after: `L645-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L645-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/280.js#L645-L703) · [Before (L7745-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/280.js#L7745-L7749)

```diff
-       e: () => be,
-       i: () => Fe,
-       m: () => Ue,
-       q: () => Ke
-     })
+       c: () => mW
+     });
+     class mW {
+       constructor() {
+         this.members = new Map
+       }
+       apply(WW) {
+         const iW = {
+           added: [],
+           removed: [],
+           settingChanges: []
+         };
+         for (const mW of WW.SE) {
+           let WW = this.members.get(mW.YE);
+           if (WW || (WW = {
+               name: null,
+ ... (43 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/281.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/281.js` (65 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696)

#### 1. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L4)

```diff
-   41247: (ee, ie, He) => {
+   40712: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L6-L9)

```diff
-       b: () => Ue,
-       c: () => Te,
-       f: () => Je,
-       h: () => Fe
+       e: () => EW
```

#### 3. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L11-L71` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L8-L12) · [Before (L11-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L11-L71)

```diff
-     var ye = He(41036),
-       be = He(39467),
-       Me = He(41175),
-       Ke = He(41084);
-     class Ue {
-       get RZ() {
-         return this._isDisposed
-       }
-       constructor(ee, ie, He) {
-         let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           Me = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           Ue = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           Fe = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           Je = arguments.length > 7 ? arguments[7] : void 0,
-           oe = arguments.length > 8 ? arguments[8] : void 0;
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Ke.c)(), ee && ee.Xx ? this._engine = ee.Xx().Nf() : this._engine = ee, this._updatable = He, this._instanced = Ue, this._divisor = Je || 1, this._label = oe, ie instanceof ye.c ? (this._data = null, this._buffer = ie) … [truncated]
- ... (45 more removed lines; see GitHub link above)
+     const mW = 1e3;
+ 
+     function EW(WW, iW) {
+       const OW = performance.now() + WW;
+       return 0 !== iW && Math.abs(OW - iW) < mW ? iW : OW
```

#### 4. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L73-L180` → after: `L14-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L14-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L14-L51) · [Before (L73-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L73-L180)

```diff
-     class Fe {
-       get RZ() {
-         return this._isDisposed
-       }
-       get instanceDivisor() {
-         return this._instanceDivisor
-       }
-       set instanceDivisor(ee) {
-         const ie = 0 != ee;
-         this._instanceDivisor = ee, ie !== this._instanced && (this._instanced = ie, this._computeHashCode())
-       }
-       get _maxVerticesCount() {
-         const ee = this.getData();
-         return ee ? Array.isArray(ee) ? ee.length / (this.byteStride / 4) - this.byteOffset / 4 : (ee.byteLength - this.byteOffset) / this.byteStride : 0
-       }
-       constructor(ee, ie, He, ye, be, Ke, Re, ke, qe, fe) {
- ... (92 more removed lines; see GitHub link above)
+   },
+   40890: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => wO
+     });
+     var mW = OW(62);
+     const EW = "shootingLobby",
+       NW = {
+         Red: "#fc6464",
+         Blue: "#4f94f1"
+       };
+ 
+     function PW(WW, iW) {
+       const OW = WW.reduce(((WW, iW) => WW + iW[5]), 0);
+       return 0 === OW ? 0 === WW.length ? 0 : Math.round(100 / WW.length) : Math.round(WW[iW][5] / OW * 100)
+     }
+ ... (22 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L183-L204` → after: `L54-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L54-L56) · [Before (L183-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L183-L204)

```diff
-     function Je(ee) {
-       switch (ee) {
-         case Fe.UVKind:
-         case Fe.UV2Kind:
-         case Fe.UV3Kind:
-         case Fe.UV4Kind:
-         case Fe.UV5Kind:
-         case Fe.UV6Kind:
-           return 2;
-         case Fe.NormalKind:
-         case Fe.PositionKind:
-           return 3;
-         case Fe.ColorKind:
-         case Fe.ColorInstanceKind:
-         case Fe.MatricesIndicesKind:
-         case Fe.MatricesIndicesExtraKind:
- ... (6 more removed lines; see GitHub link above)
+     function JW(WW, iW) {
+       return {
+         "--team": TW(WW, iW)
```

#### 6. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L209` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L70) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L209)

```diff
-       return ee instanceof Int8Array ? Fe.BYTE : ee instanceof Uint8Array ? Fe.UNSIGNED_BYTE : ee instanceof Int16Array ? Fe.SHORT : ee instanceof Uint16Array ? Fe.UNSIGNED_SHORT : ee instanceof Int32Array ? Fe.INT : ee instanceof Uint32Array ? Fe.UNSIGNED_INT : Fe.FLOAT
+       return Object.hasOwn(NW, WW)
```

#### 7. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L213` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L80) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L213)

```diff
-       return (0, Me.o)(ee)
+       return uW[WW]
```

#### 8. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L216-L219` → after: `L83-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L83-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L83-L85) · [Before (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L216-L219)

```diff
-     function ke(ee, ie, He, ye, be, Ke, Ue, Fe) {
-       (0, Me.f)(ee, ie, He, ye, be, Ke, Ue, ((ee, ie) => {
-         for (let He = 0; He < ye; He++) Fe(ee[He], ie + He)
-       }))
+     function dW() {
+       const WW = (0, lW.g)("hiddenPlayerNames");
+       return (0, mW.useCallback)((iW => "" === iW ? "" : (0, SW.g)(iW, WW)), [WW])
```

#### 9. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L222-L223` → after: `L88-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L88-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L88-L96) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L222-L223)

```diff
-     function qe(ee, ie, He, ye, be, Ke, Ue, Fe) {
-       return (0, Me.n)(ee, ie, He, ye, be, Ke, Ue, Fe)
+     function eW(WW) {
+       var iW;
+       let {
+         playerId: OW
+       } = WW;
+       const mW = null === (iW = (0, lW.g)("players").byId[OW]) || void 0 === iW ? void 0 : iW.cosmetics;
+       return (0, YW.jsx)(KW.e, {
+         cosmetics: null !== mW && void 0 !== mW ? mW : {}
+       })
```

#### 10. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L228-L229` → after: `L99-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L99-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L99-L119) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L228-L229)

```diff
-     function Te() {
-       fe || (fe = !0, Fe.DeduceStride = Je, Fe.GetDataType = oe, Fe.GetTypeByteLength = Re, Fe.ForEach = ke, Fe.GetFloatData = qe)
+     function vW(WW) {
+       let {
+         icon: iW,
+         value: OW,
+         label: mW,
+         gold: EW = !1
+       } = WW;
+       return (0, YW.jsxs)("div", {
+         className: "ShootingStat",
+         children: [(0, YW.jsxs)("b", {
+           className: xW()("FullyFancyText", {
+             Gold: EW
+           }),
+           children: [iW && (0, YW.jsx)(AW.c, {
+             name: iW
+           }), OW]
+ ... (5 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L231-L242` → after: `L121-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L121-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L121-L125) · [Before (L231-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L231-L242)

```diff
-   },
-   41036: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => ye
-     });
-     class ye {
-       get underlyingResource() {
-         return null
-       }
-       constructor() {
-         this.references = 0, this.bk = 0, this.is32Bits = !1, this.uniqueId = ye._Counter++
-       }
+     var gW = OW(1463),
+       DW = OW(40712);
+ 
+     function VW(WW) {
+       return `shooting:${WW}`
```

#### 12. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L254` → after: `L129-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L129-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L129-L148) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L254)

```diff
-         this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this … [truncated]
+         this.slices = {
+           hud: {
+             wire: null,
+             endsAt: 0,
+             spawnProtectionEndsAt: 0
+           },
+           lobby: {
+             wire: ["none"],
+             startsAt: 0
+           },
+           roundEnd: {
+             wire: ["none"],
+             lobbyAt: 0
+           },
+           leaderboard: [],
+           killfeed: [],
+ ... (4 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L256-L287` → after: `L150-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L150-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L150-L179) · [Before (L256-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L256-L287)

```diff
-       getNormal() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!this.pickedMesh || ie && !this.pickedMesh.isVerticesDataPresent(be.h.NormalKind)) return null;
-         let He, Me = this.pickedMesh.eMe();
-         0 === Me?.length && (Me = null);
-         const Ke = ye.j.rf[0],
-           Ue = ye.j.rf[1],
-           Fe = ye.j.rf[2];
-         if (ie) {
-           const ee = this.pickedMesh.getVerticesData(be.h.NormalKind);
-           let ie = Me ? ye.p.FromArrayToRef(ee, 3 * Me[3 * this.faceId], Ke) : Ke.wie(ee[3 * this.faceId * 3], ee[3 * this.faceId * 3 + 1], ee[3 * this.faceId * 3 + 2]),
-             Je = Me ? ye.p.FromArrayToRef(ee, 3 * Me[3 * this.faceId + 1], Ue) : Ue.wie(ee[3 * (3 * this.faceId + 1)], ee[3 * (3 * this.faceId + 1) + 1], ee[3 * (3 * this.faceId + 1) + 2]),
-             oe = Me ? ye.p.FromArrayToRef(ee, 3 * Me[3 * this.faceId + 2], Fe) : Fe.wie(ee[3 * (3 * this.faceId + 2)], ee[3 * (3 * this.faceId + 2) + 1], ee[3 * (3 * this.faceId + 2) + 2]);
-           ie = ie.scale(this.bu), Je = Je.scale(this.bv), oe = oe.scale(1 - this.bu - this.bv), He = new ye.p(ie.x + Je.x + oe.x, ie.y + Je.y + oe.y, ie.z + Je.z + oe.z)
-         } else {
- ... (16 more removed lines; see GitHub link above)
+       get(WW) {
+         return this.slices[WW]
+       }
+       yZ(WW, iW) {
+         switch (WW) {
+           case "shootingHud":
+             return this.receiveHud(iW), !0;
+           case EW: {
+             const WW = iW;
+             return this.set("lobby", {
+               wire: WW,
+               startsAt: "lobby" === WW[0] ? (0, DW.e)(WW[2], this.slices.lobby.startsAt) : 0
+             }), !0
+           }
+           case "shootingRoundEnd": {
+             const WW = iW;
+ ... (14 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L289-L290` → after: `L181-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L181-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L181-L200) · [Before (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L289-L290)

```diff
-           let He = ee.getWorldMatrix();
-           ee.nonUniformScaling && (ye.j.Matrix[0].jD(He), He = ye.j.Matrix[0], He.setTranslationFromFloats(0, 0, 0), He.invert(), He.transposeToRef(ye.j.Matrix[1]), He = ye.j.Matrix[1]), ye.p.TransformNormalToRef(ie, He, ie)
+           case "shootingEvent":
+             return this.receiveEvent(iW), !0;
+           default:
+             return !1
+         }
+       }
+       receiveHud(WW) {
+         var iW;
+         const OW = this.slices.hud,
+           mW = (null === (iW = OW.wire) || void 0 === iW ? void 0 : iW[1]) === WW[1];
+         OW.wire && !mW && (this.set("kill", null), this.set("tier", null), this.set("death", null)), this.set("hud", {
+           wire: WW,
+           endsAt: (0, DW.e)(WW[4], mW ? OW.endsAt : 0),
+           spawnProtectionEndsAt: 0 === WW[13] ? 0 : (0, DW.e)(WW[13], OW.spawnProtectionEndsAt)
+         })
+       }
+ ... (4 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L292-L294` → after: `L202-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L202-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L202-L219) · [Before (L292-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L292-L294)

```diff
-         if (ee && Je(this.pickedMesh, He), this.ray) {
-           const ie = ye.j.rf[0].jD(He);
-           ee || Je(this.pickedMesh, ie), ye.p.Dot(ie, this.ray.direction) > 0 && He.negateInPlace()
+         switch (WW[0]) {
+           case "kill":
+             this.set("kill", {
+               ...iW,
+               wire: WW
+             });
+             break;
+           case "tier":
+             this.set("tier", {
+               ...iW,
+               wire: WW
+             });
+             break;
+           case "death":
+             this.set("death", {
+               ...iW,
+ ... (2 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L298-L308` → after: `L222-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L222-L223) · [Before (L298-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L298-L308)

```diff
-       getTextureCoordinates() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be.h.UVKind;
-         if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(ee)) return null;
-         const ie = this.pickedMesh.eMe();
-         if (!ie) return null;
-         const He = this.pickedMesh.getVerticesData(ee);
-         if (!He) return null;
-         let Me = ye.n.FromArray(He, 2 * ie[3 * this.faceId]),
-           Ke = ye.n.FromArray(He, 2 * ie[3 * this.faceId + 1]),
-           Ue = ye.n.FromArray(He, 2 * ie[3 * this.faceId + 2]);
-         return Me = Me.scale(this.bu), Ke = Ke.scale(this.bv), Ue = Ue.scale(1 - this.bu - this.bv), new ye.n(Me.x + Ke.x + Ue.x, Me.y + Ke.y + Ue.y)
+       set(WW, iW) {
+         this.slices[WW] = iW, LW.l.iZ(VW(WW), iW, !0)
```

#### 17. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L319-L326` → after: `L227-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L227-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L227-L303) · [Before (L319-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L319-L326)

```diff
-     function Me() {
-       be || (be = !0, ye.ThinEngine.prototype.updateDynamicIndexBuffer = function(ee, ie) {
-         let He;
-         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(ee), He = ee.is32Bits ? ie instanceof Uint32Array ? ie : new Uint32Array(ie) : ie instanceof Uint16Array ? ie : new Uint16Array(ie), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, He, … [truncated]
-       }, ye.ThinEngine.prototype.updateDynamicVertexBuffer = function(ee, ie, He, ye) {
-         this.bindArrayBuffer(ee), void 0 === He && (He = 0);
-         const be = ie.byteLength || ie.length;
-         void 0 === ye || ye >= be && 0 === He ? ie instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, He, new Float32Array(ie)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, He, ie) : ie instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, He, new Floa … [truncated]
+     function fW(WW, iW) {
+       return (0, gW.e)(VW(iW), (() => WW.get(iW)))
+     }
+     const CW = ["Red", "Blue"],
+       XW = {
+         streak: `${yW}scoreIs_streak`,
+         diamonds: `${yW}scoreIs_diamonds`,
+         kills: `${yW}scoreIs_kills`
+       };
+ 
+     function BW(WW) {
+       var iW;
+       let {
+         store: OW,
+         variation: mW
+       } = WW;
+ ... (61 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L329-L366` → after: `L306-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L306-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L306-L387) · [Before (L329-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L329-L366)

```diff
-   },
-   41051: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => ye
-     });
-     class ye {
-       get underlyingResource() {
-         return this._webGLTexture
-       }
-       constructor() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           ie = arguments.length > 1 ? arguments[1] : void 0;
-         if (this._MSAARenderBuffers = null, this._context = ie, !ee && (ee = ie.createTexture(), !ee)) throw new Error("Unable to create webGL texture");
-         this.set(ee)
-       }
-       setUsage() {}
- ... (22 more removed lines; see GitHub link above)
+ 
+     function qW(WW) {
+       let {
+         title: iW,
+         team: OW,
+         rows: mW,
+         localId: EW
+       } = WW;
+       const {
+         t: NW
+       } = (0, sW.B)(), PW = dW(), LW = [{
+         key: "name",
+         header: (0, YW.jsxs)("span", {
+           className: "ShootingBoardTeam",
+           children: [(0, YW.jsxs)("span", {
+             children: [iW, (null === OW || void 0 === OW ? void 0 : OW.mine) && (0, YW.jsxs)("span", {
+ ... (66 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L368-L378` → after: `L389-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L389-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L389-L399) · [Before (L368-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L368-L378)

```diff
-   },
-   41e3: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => ze
-     });
-     var ye = He(37931),
-       be = He(40945),
-       Me = He(37929),
-       Ke = He(39467),
-       Ue = He(37927),
-       Fe = He(41005);
+     var RW = OW(37868),
+       GW = OW(37919),
+       IW = OW(25),
+       aW = OW(5668),
+       rW = OW(2080),
+       zW = OW(5251),
+       FW = OW(3599),
+       QW = OW(1526),
+       Wi = OW(1551),
+       ii = OW(39775);
+     const Oi = "shooting:vote";
```

#### 20. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L380-L430` → after: `L401-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L401-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L401-L442) · [Before (L380-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L380-L430)

```diff
-       constructor() {
-         let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, ee && this.reset()
-       }
-       get isDirty() {
-         return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
-       }
-       get zOffset() {
-         return this._zOffset
-       }
-       set zOffset(ee) {
-         this._zOffset !== ee && (this._zOffset = ee, this._isZOffsetDirty = !0)
-       }
-       get zOffsetUnits() {
-         return this._zOffsetUnits
-       }
- ... (35 more removed lines; see GitHub link above)
+       constructor(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ii.c;
+         this.iZ = WW, this.sendCommand = iW, this.pacer = OW, this.view = {
+           hidden: !1,
+           pending: null
+         }, this.unsent = !1, this.cardsKey = "", this.pendingTimer = null, this.unsubscribePacer = void 0, this.vote = WW => {
+           this.unsent = !0, this.set({
+             ...this.view,
+             pending: WW
+           }), this.flush()
+         }, this.setHidden = WW => {
+           this.set({
+             ...this.view,
+             hidden: WW
+           })
+         }, this.flush = () => {
+ ... (26 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L432-L433` → after: `L444-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L444-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L444-L445) · [Before (L432-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L432-L433)

```diff
-       set frontFace(ee) {
-         this._frontFace !== ee && (this._frontFace = ee, this._isFrontFaceDirty = !0)
+       dispose() {
+         this.unsubscribePacer(), this.pacer.dispose(), this.clearPendingTimer()
```

#### 22. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L435-L436` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L447-L448) · [Before (L435-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L435-L436)

```diff
-       reset() {
-         this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._is … [truncated]
+       clearPendingTimer() {
+         null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
```

#### 23. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L438-L439` → after: `L450-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L450-L451) · [Before (L438-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L438-L439)

```diff
-       apply(ee) {
-         this.isDirty && (this._isCullDirty && (this.cull ? ee.enable(ee.CULL_FACE) : ee.disable(ee.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (ee.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (ee.depthMask(this.depthMask), this … [truncated]
+       set(WW) {
+         this.view = WW, this.iZ(WW)
```

#### 24. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L442-L529` → after: `L454-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L454-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L454-L531) · [Before (L442-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L442-L529)

```diff
-     class oe {
-       get isDirty() {
-         return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
-       }
-       get func() {
-         return this._func
-       }
-       set func(ee) {
-         this._func !== ee && (this._func = ee, this._isStencilFuncDirty = !0)
-       }
-       get backFunc() {
-         return this._func
-       }
-       set backFunc(ee) {
-         this._backFunc !== ee && (this._backFunc = ee, this._isStencilFuncDirty = !0)
-       }
- ... (72 more removed lines; see GitHub link above)
+     const Ei = "ShootingVoteStripOpen";
+ 
+     function Ni(WW) {
+       var iW, OW, EW, NW, LW;
+       let {
+         maps: cW,
+         votes: wW
+       } = WW;
+       const {
+         t: tW
+       } = (0, sW.B)(), ZW = (0, QW.g)(Oi, wW.getView()), {
+         isTouchScreen: lW,
+         openInGameMenuName: bW,
+         openEverythingMenuName: jW
+       } = (0, IW.p)(["isTouchScreen", "openInGameMenuName", "openEverythingMenuName"]), UW = null !== bW || null !== jW, kW = (0, FW.e)();
+       (0, zW.b)(!0, !lW && !ZW.hidden && !UW && !kW, "shootingVoteStrip", !0), (0, mW.useEffect)((() => {
+ ... (62 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L531-L609` → after: `L533-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L533-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L533-L607) · [Before (L531-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L531-L609)

```diff
-     class Re {
-       constructor() {
-         this.reset()
-       }
-       reset() {
-         this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = Re.ALWAYS, this.opStencilFail = Re.KEEP, this.opDepthFail = Re.KEEP, this.opStencilDepthPass = Re.REPLACE, this.backFunc = Re.ALWAYS, this.backOpStencilFail = Re.KEEP, this.backOpDepthF … [truncated]
-       }
-       get stencilFunc() {
-         return this.func
-       }
-       set stencilFunc(ee) {
-         this.func = ee
-       }
-       get stencilBackFunc() {
-         return this.backFunc
-       }
- ... (63 more removed lines; see GitHub link above)
+ 
+     function Pi(WW) {
+       let {
+         map: iW,
+         chance: OW,
+         mine: EW,
+         onVote: NW,
+         showHeads: PW
+       } = WW;
+       const {
+         t: LW
+       } = (0, sW.B)(), [cW, wW, tW, ZW, lW, bW, , jW, UW] = iW, [kW, MW] = (0, mW.useState)(!1);
+       return (0, YW.jsxs)("button", {
+         type: "button",
+         className: xW()("ShootingMapCard", {
+           Mine: EW
+ ... (59 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L618-L631` → after: `L610-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L610-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L610-L623) · [Before (L618-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L618-L631)

```diff
-     function Xe(ee, ie) {
-       if (ie) {
-         const {
-           requestAnimationFrame: He
-         } = ie;
-         if ("function" === typeof He) return He(ee)
-       }
-       if ((0, Te.m)()) {
-         const {
-           requestAnimationFrame: He
-         } = ie || window;
-         if ("function" === typeof He) return He(ee)
-       } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(ee);
-       return setTimeout(ee, 16)
+     function Li(WW) {
+       let {
+         voters: iW
+       } = WW;
+       const OW = (0, lW.g)("players");
+       return (0, YW.jsx)("span", {
+         className: "ShootingMapCardHeads",
+         children: iW.slice(0, 8).map((WW => {
+           var iW;
+           return (null === (iW = OW.byId[WW]) || void 0 === iW ? void 0 : iW.cosmetics) && (0, YW.jsx)(eW, {
+             playerId: WW
+           }, WW)
+         }))
+       })
```

#### 27. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L633-L1365` → after: `L625-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L625-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L625-L648) · [Before (L633-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L633-L1365)

```diff
-     class ze {
-       get frameId() {
-         return this._frameId
-       }
-       get isWebGPU() {
-         return this._isWebGPU
-       }
-       _getShaderProcessor(ee) {
-         return this._shaderProcessor
-       }
-       _resetAlphaMode() {
-         this._alphaMode.fill(-1), this._alphaEquation.fill(-1)
-       }
-       get shaderPlatformName() {
-         return this._shaderPlatformName
-       }
- ... (717 more removed lines; see GitHub link above)
+ 
+     function ci(WW) {
+       let {
+         store: iW,
+         votes: OW,
+         variation: mW
+       } = WW;
+       const EW = fW(iW, "lobby"),
+         NW = (0, lW.g)("localPlayerAlive"),
+         PW = (0, lW.f)("connectedGame", (WW => WW.replay));
+       if ("lobby" !== EW.wire[0] || PW) return null;
+       const LW = EW.wire;
+       return (0, YW.jsxs)(YW.Fragment, {
+         children: [(0, YW.jsx)(wi, {
+           wire: LW,
+           startsAt: EW.startsAt,
+ ... (8 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1367-L1372` → after: `L650-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L650-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L650-L703) · [Before (L1367-L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1367-L1372)

```diff
-     var be = He(40979);
-     const Me = new WeakMap,
-       Ke = {
-         _webGLVersion: 2,
-         cachedPipelines: {}
-       };
+     const wi = (0, mW.memo)((function(WW) {
+       let {
+         wire: iW,
+         startsAt: OW,
+         variation: EW
+       } = WW;
+       const {
+         t: NW
+       } = (0, sW.B)(), [PW, LW] = (0, mW.useState)(null), [cW, wW] = (0, mW.useState)(null), tW = (0, GW.j)(PW, cW), [, ZW, , xW, lW, bW, jW, UW, kW] = iW, {
+         isTouchScreen: MW
+       } = (0, IW.p)(["isTouchScreen"]);
+       return (0, YW.jsx)("div", {
+         ref: wW,
+         className: "ShootingLobbyStatusContainer",
+         style: null === tW ? void 0 : {
+           top: tW
+ ... (38 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1375-L1385` → after: `L706-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L706-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L706-L729) · [Before (L1375-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1375-L1385)

```diff
-       let ie = Me.get(ee);
-       if (!ie) {
-         if (!ee) return Ke;
-         ie = {
-           _webGLVersion: ee.TEXTURE_BINDING_3D ? 2 : 1,
-           _context: ee,
-           parallelShaderCompile: ee.getExtension("KHR_parallel_shader_compile") || void 0,
-           cachedPipelines: {}
-         }, Me.set(ee, ie)
-       }
-       return ie
+       let {
+         waiting: iW,
+         startsAt: OW
+       } = WW;
+       const {
+         t: mW
+       } = (0, sW.B)(), EW = (0, kW.f)(iW ? 0 : OW);
+       return (0, YW.jsxs)("div", {
+         className: "ShootingLobbyCountdown",
+         children: [iW && (0, YW.jsx)("span", {
+           className: "ShootingLobbyCountdownLabel",
+           children: mW("shootingLobby:waiting")
+         }), !iW && (0, YW.jsxs)(YW.Fragment, {
+           children: [(0, YW.jsx)("span", {
+             className: "ShootingLobbyCountdownLabel",
+             children: mW("shootingLobby:startingIn")
+ ... (8 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1389` → after: `L733-L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L733-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L733-L755) · [Before (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1389)

```diff
-       Me.delete(ee)
+       let {
+         team: iW,
+         count: OW,
+         cap: mW,
+         mine: EW
+       } = WW;
+       const {
+         t: NW
+       } = (0, sW.B)();
+       return (0, YW.jsxs)("span", {
+         className: xW()("ShootingLobbyTeam", {
+           Mine: EW,
+           Full: OW >= mW
+         }),
+         style: JW(iW, "tdm"),
+         children: [NW(hW[iW]), (0, YW.jsx)("span", {
+ ... (7 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1392-L1395` → after: `L875-L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L875-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L875-L892) · [Before (L1392-L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1392-L1395)

```diff
-     function Je(ee, ie, He, ye, be, Me) {
-       const Ke = Ue(ye);
-       Me || (Me = Ke._createShaderProgramInjection ?? ke);
-       return Me(ee, Xe(ie, "vertex", ye, Ke._contextWasLost), Xe(He, "fragment", ye, Ke._contextWasLost), ye, be, Ke.validateShaderPrograms)
+     function Ui(WW) {
+       let {
+         endsAt: iW,
+         label: OW
+       } = WW;
+       const mW = (0, kW.f)(iW);
+       return (0, YW.jsxs)("div", {
+         className: "CubeWarfareClock",
+         children: [(0, YW.jsx)("div", {
+           className: xW()("CubeWarfareClockTime", {
+             Urgent: mW < 60
+           }),
+           children: (0, kW.d)(mW)
+         }), (0, YW.jsx)("div", {
+           className: "CubeWarfareClockLabel",
+           children: OW
+ ... (2 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1398-L1404` → after: `L895-L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L895-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L895-L948) · [Before (L1398-L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1398-L1404)

```diff
-     function oe(ee, ie, He, ye, be) {
-       let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-         Ke = arguments.length > 6 ? arguments[6] : void 0;
-       const Fe = Ue(be);
-       Ke || (Ke = Fe._createShaderProgramInjection ?? ke);
-       const Je = Fe._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
-       return Ke(ee, pe(ie, "vertex", ye, Je, be, Fe._contextWasLost), pe(He, "fragment", ye, Je, be, Fe._contextWasLost), be, Me, Fe.validateShaderPrograms)
+     function ki(WW) {
+       const {
+         t: iW
+       } = (0, sW.B)(), OW = iW => WW.leaderboard.filter((WW => WW[2] === iW)), mW = {
+         team: "Red",
+         name: iW(hW.Red),
+         score: WW.redScore,
+         members: OW("Red")
+       }, EW = {
+         team: "Blue",
+         name: iW(hW.Blue),
+         score: WW.blueScore,
+         members: OW("Blue")
+       }, [NW, PW] = "Blue" === WW.myTeam ? [EW, mW] : [mW, EW], LW = (OW, mW) => (0, YW.jsxs)("div", {
+         className: xW()("CubeWarfareSide", mW, `Team-${OW.team}`, {
+           Mine: OW.team === WW.myTeam
+ ... (38 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1407-L1410` → after: `L951-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L951-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L951-L1005) · [Before (L1407-L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1407-L1410)

```diff
-     function Re(ee, ie) {
-       const He = new ye,
-         be = Ue(ee);
-       return be.parallelShaderCompile && !be.disableParallelShaderCompile && (He.isParallelCompiled = !0), He.context = be._context, He
+     function si(WW) {
+       var iW;
+       const {
+         t: OW
+       } = (0, sW.B)(), mW = dW(), EW = null !== (iW = WW.second) && void 0 !== iW ? iW : WW.spectating || WW.playerCount > 1 ? WW.leader : null;
+       return (0, YW.jsxs)(YW.Fragment, {
+         children: [!WW.spectating && (0, YW.jsxs)("div", {
+           className: xW()("CubeWarfareSide", "Left", "Mine", "Ffa"),
+           style: {
+             "--team": (0, MW.lb)(WW.myTeam)
+           },
+           children: [(0, YW.jsx)("span", {
+             className: "CubeWarfareYouTag",
+             children: OW("shootingOverlays:you")
+           }), (0, YW.jsxs)("div", {
+             className: "CubeWarfareSideText",
+ ... (39 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1413-L1417` → after: `L1008-L1022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1008-L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1008-L1022) · [Before (L1413-L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1413-L1417)

```diff
-     function ke(ee, ie, He, ye) {
-       let be = arguments.length > 5 ? arguments[5] : void 0;
-       const Me = ye.createProgram();
-       if (ee.program = Me, !Me) throw new Error("Unable to create program");
-       return ye.attachShader(Me, ie), ye.attachShader(Me, He), ye.linkProgram(Me), ee.context = ye, ee.vertexShader = ie, ee.fragmentShader = He, ee.isParallelCompiled || fe(ee, ye, be), Me
+     function Mi(WW) {
+       let {
+         score: iW,
+         target: OW
+       } = WW;
+       return (0, YW.jsx)("div", {
+         className: xW()("CubeWarfareStrip", {
+           Progress: OW > 0
+         }),
+         children: OW > 0 && (0, YW.jsx)("i", {
+           style: {
+             transform: `scaleX(${Math.min(1,iW/OW)})`
+           }
+         })
+       })
```

#### 35. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1420-L1424` → after: `L1045-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1045-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1045-L1103) · [Before (L1420-L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1420-L1424)

```diff
-     function qe(ee, ie, He) {
-       const ye = ee;
-       if (ye._isDisposed) return !1;
-       const be = Ue(ie);
-       return !!(be && be.parallelShaderCompile && be.parallelShaderCompile.COMPLETION_STATUS_KHR && ye.program && ie.getProgramParameter(ye.program, be.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (fe(ye, ie, He), !0)
+     function Si(WW) {
+       let {
+         wire: iW,
+         touch: OW = !1
+       } = WW;
+       const {
+         t: mW
+       } = (0, sW.B)(), EW = iW[11], NW = iW[12], PW = NW.findIndex((WW => {
+         let [, iW] = WW;
+         return EW < iW
+       }));
+       return (0, YW.jsxs)("div", {
+         className: "CubeWarfarePerkColumn",
+         children: [(0, YW.jsxs)("div", {
+           className: "CubeWarfarePerkPoints SmallTextBold",
+           children: [(0, YW.jsx)(AW.c, {
+ ... (43 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1427-L1448` → after: `L1106-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1106-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1106-L1113) · [Before (L1427-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1427-L1448)

```diff
-     function fe(ee, ie, He) {
-       const ye = ee.context,
-         be = ee.vertexShader,
-         Me = ee.fragmentShader,
-         Ke = ee.program;
-       if (!ye.getProgramParameter(Ke, ye.LINK_STATUS)) {
-         if (!ie.getShaderParameter(be, ie.COMPILE_STATUS)) {
-           const He = ie.getShaderInfoLog(be);
-           if (He) throw ee.vertexCompilationError = He, new Error("VERTEX SHADER " + He)
-         }
-         if (!ie.getShaderParameter(Me, ie.COMPILE_STATUS)) {
-           const He = ie.getShaderInfoLog(Me);
-           if (He) throw ee.fragmentCompilationError = He, new Error("FRAGMENT SHADER " + He)
-         }
-         const He = ye.getProgramInfoLog(Ke);
-         if (He) throw ee.programLinkError = He, new Error(He)
- ... (6 more removed lines; see GitHub link above)
+     function Yi(WW) {
+       const [, iW] = (0, mW.useReducer)((WW => WW + 1), 0);
+       (0, mW.useEffect)((() => {
+         const OW = WW - performance.now();
+         if (0 === WW || OW <= 0) return;
+         const mW = window.setTimeout(iW, OW);
+         return () => {
+           window.clearTimeout(mW)
```

#### 37. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1450-L1451` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1115) · [Before (L1450-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1450-L1451)

```diff
-       }
-       ye.deleteShader(be), ye.deleteShader(Me), ee.vertexShader = void 0, ee.fragmentShader = void 0, ee.onCompiled && (ee.onCompiled(), ee.onCompiled = void 0)
+       }), [WW])
```

#### 38. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1454-L1461` → after: `L1119-L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1119-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1119-L1130) · [Before (L1454-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1454-L1461)

```diff
-     function Te(ee, ie, He, ye, be, Me, Ke, Fe, Re) {
-       let ke = arguments.length > 10 ? arguments[10] : void 0,
-         qe = arguments.length > 11 ? arguments[11] : void 0,
-         fe = arguments.length > 12 ? arguments[12] : void 0;
-       const Te = Ue(ee.context);
-       qe || (qe = Te.createRawShaderProgramInjection ?? Je), fe || (fe = Te.createShaderProgramInjection ?? oe);
-       const pe = ee;
-       pe.program = ye ? qe(pe, ie, He, pe.context, Re) : fe(pe, ie, He, Fe, pe.context, Re), pe.program.__SPECTOR_rebuildProgram = Ke, ke()
+     function Ti(WW) {
+       let {
+         store: iW
+       } = WW;
+       const OW = ui(fW(iW, "kill"), 2500),
+         mW = dW();
+       return OW ? (0, YW.jsx)(Hi, {
+         victimName: mW(OW.wire[2]),
+         headshot: OW.wire[4],
+         killsThisLife: OW.wire[5],
+         gold: OW.wire[6]
+       }, OW.seq) : null
```

#### 39. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1464-L1465` → after: `L1133-L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1133-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1133-L1142) · [Before (L1464-L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1464-L1465)

```diff
-     function pe(ee, ie, He, ye, Me, Ke) {
-       return Xe((0, be.e)(ee, He, ye), ie, Me, Ke)
+     function Ji(WW) {
+       let {
+         store: iW
+       } = WW;
+       const OW = ui(fW(iW, "tier"), 3500);
+       return OW ? (0, YW.jsx)(ni, {
+         tier: OW.wire[1],
+         perk: OW.wire[2],
+         icon: OW.wire[3]
+       }, OW.seq) : null
```

#### 40. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1468-L1476` → after: `L1145-L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1145-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1145-L1184) · [Before (L1468-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1468-L1476)

```diff
-     function Xe(ee, ie, He, ye) {
-       const be = He.createShader("vertex" === ie ? He.VERTEX_SHADER : He.FRAGMENT_SHADER);
-       if (!be) {
-         let ee, be = He.NO_ERROR;
-         for (;
-           (ee = He.getError()) !== He.NO_ERROR;) be = ee;
-         throw new Error(`Something went wrong while creating a gl ${ie} shader object. gl error=${be}, gl isContextLost=${He.isContextLost()}, _contextWasLost=${ye}`)
-       }
-       return He.shaderSource(be, ee), He.compileShader(be), be
+     function Hi(WW) {
+       let {
+         victimName: iW,
+         headshot: OW,
+         killsThisLife: mW,
+         gold: EW
+       } = WW;
+       const {
+         t: NW
+       } = (0, sW.B)(), PW = yi[Math.min(mW, yi.length - 1)];
+       return (0, YW.jsxs)("div", {
+         className: "CubeWarfareKillPop",
+         children: [PW && (0, YW.jsx)("div", {
+           className: "CubeWarfareMultiKill SmallTextBold",
+           children: NW(PW)
+         }), (0, YW.jsxs)("div", {
+ ... (24 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1479-L1481` → after: `L1187-L1217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1187-L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1187-L1217) · [Before (L1479-L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1479-L1481)

```diff
-     function ze(ee, ie) {
-       ie.useProgram(ee)
-     }
+     function ni(WW) {
+       let {
+         tier: iW,
+         perk: OW,
+         icon: mW
+       } = WW;
+       const {
+         t: EW
+       } = (0, sW.B)();
+       return (0, YW.jsxs)("div", {
+         className: "CubeWarfareTierBanner",
+         children: [(0, YW.jsx)("div", {
+           className: "CubeWarfareTierIcon",
+           children: (0, YW.jsx)(AW.c, {
+             name: mW || "crosshairs"
+           })
+ ... (15 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1484-L1489` → after: `L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1220) · [Before (L1484-L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1484-L1489)

```diff
-       const He = ee;
-       if (!He.isParallelCompiled) return void ie(ee);
-       const ye = He.onCompiled;
-       He.onCompiled = () => {
-         ye?.(), ie(ee)
-       }
+       return Yi(WW ? WW.at + iW : 0), WW && performance.now() - WW.at < iW ? WW : null
```

#### 43. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1491-L1512` → after: `L1222-L1242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1222-L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1222-L1242) · [Before (L1491-L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1491-L1512)

```diff
-   },
-   40936: (ee, ie, He) => {
-     He.d(ie, {
-       ThinEngine: () => ge
-     });
-     var ye = He(40945),
-       be = He(40972),
-       Me = He(41e3),
-       Ke = He(41022),
-       Ue = He(39467),
-       Fe = He(40968);
-     class Je {
-       constructor() {
-         this.shaderLanguage = 0
-       }
-       postProcessor(ee, ie, He, ye, be) {
- ... (6 more removed lines; see GitHub link above)
+     var oi = OW(3332);
+ 
+     function di() {
+       var WW, iW;
+       const OW = null === (WW = (0, oi.e)("currencyAmounts")) || void 0 === WW || null === (iW = WW.gold) || void 0 === iW ? void 0 : iW.amount,
+         [EW, NW] = (0, mW.useState)(0),
+         PW = (0, mW.useRef)(OW);
+       return (0, mW.useEffect)((() => {
+         void 0 !== OW && void 0 !== PW.current && OW > PW.current && NW((WW => WW + 1)), PW.current = OW
+       }), [OW]), void 0 === OW ? null : (0, YW.jsx)(RW.h, {
+         placement: "statBars",
+         children: (0, YW.jsxs)("div", {
+           className: xW()("CubeWarfareWallet SmallTextBold", {
+             Bump: EW > 0
+           }),
+           children: [(0, YW.jsx)(AW.c, {
+ ... (5 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1514-L1540` → after: `L1244-L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1244-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1244-L1251) · [Before (L1514-L1540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1514-L1540)

```diff
-     const oe = /(flat\s)?\s*varying\s*.*/;
-     class Re {
-       constructor() {
-         this.shaderLanguage = 0
-       }
-       attributeProcessor(ee) {
-         return ee.replace("attribute", "in")
-       }
-       varyingCheck(ee, ie) {
-         return oe.test(ee)
-       }
-       varyingProcessor(ee, ie) {
-         return ee.replace("varying", ie ? "in" : "out")
-       }
-       postProcessor(ee, ie, He) {
-         const ye = -1 !== ee.search(/#extension.+GL_EXT_draw_buffers.+require/);
- ... (11 more removed lines; see GitHub link above)
+ 
+     function ei(WW) {
+       let {
+         endsAt: iW
+       } = WW;
+       return 0 === iW ? null : (0, YW.jsx)(gi, {
+         endsAt: iW
+       }, iW)
```

#### 45. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1542-L1610` → after: `L1253-L1375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1253-L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1253-L1375) · [Before (L1542-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1542-L1610)

```diff
-     var ke = He(41030),
-       qe = He(41044),
-       fe = He(41051),
-       Te = He(40924),
-       pe = He(40979),
-       Xe = He(40960),
-       ze = He(41059),
-       Be = He(41013);
-     class Ee {}
-     class ge extends Me.e {
-       get name() {
-         return this._name
-       }
-       set name(ee) {
-         this._name = ee
-       }
- ... (53 more removed lines; see GitHub link above)
+ 
+     function vi(WW) {
+       let {
+         endsAt: iW
+       } = WW;
+       return Yi(iW), iW <= performance.now() ? null : (0, YW.jsx)("div", {
+         className: "CubeWarfareProtectionEdge"
+       })
+     }
+ 
+     function gi(WW) {
+       let {
+         endsAt: iW
+       } = WW;
+       const {
+         t: OW
+ ... (107 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1612-L1629` → after: `L1377-L1574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1377-L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1377-L1574) · [Before (L1612-L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1612-L1629)

```diff
-             }
-           }
-           if (this._doNotHandleContextLost ? this._onContextLost = () => {
-               (0, be.F)(this._gl)
-             } : (this._onContextLost = ee => {
-               ee.preventDefault(), this._contextWasLost = !0, (0, be.F)(this._gl), Ue.e.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
-             }, this._onContextRestored = () => {
-               this._restoreEngineAfterContextLost((() => this._initGLContext()))
-             }, Me.addEventListener("webglcontextrestored", this._onContextRestored, !1), He.powerPreference = He.powerPreference || "high-performance"), Me.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (He.xrCompatible = !1), !He.disableWebG … [truncated]
-             this._gl = Me.getContext("webgl2", He) || Me.getContext("experimental-webgl2", He), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
-           } catch (oe) {}
-           if (!this._gl) {
-             if (!Me) throw new Error("The provided canvas is null or undefined.");
-             try {
-               this._gl = Me.getContext("webgl", He) || Me.getContext("experimental-webgl", He)
-             } catch (oe) {
- ... (2 more removed lines; see GitHub link above)
+             }, PW.key)]
+           }), (0, YW.jsx)("span", {
+             className: "CubeWarfareAmmoGun",
+             children: (0, YW.jsx)(Ai.b, {
+               itemName: iW.name,
+               amount: 0,
+               gunTransform: "none"
+             })
+           }), LW && null === PW && (0, YW.jsx)(rW.e, {
+             noaAction: "ReloadGun",
+             className: "CubeWarfareAmmoKey",
+             padHidesKey: !0
+           })]
+         })
+       })
+     }
+ ... (182 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1631-L1777` → after: `L1576-L1583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1576-L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1576-L1583) · [Before (L1631-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1631-L1777)

```diff
-             }
-           }
-           if (!this._gl) throw new Error("WebGL not supported")
-         } else {
-           this._gl = ee, Me = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
-           const ie = this._gl.getContextAttributes();
-           ie && (He.stencil = ie.stencil)
-         }
-         this._sharedInit(Me), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== He.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = He.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
-         for (let be = 0; be < this._caps.maxVertexAttribs; be++) this._currentBufferPointers[be] = new Ee;
-         this._shaderProcessor = this.dT > 1 ? new Re : new Je;
-         const Ke = `Babylon.js v${ge.Version}`;
-         Ue.e.Log(Ke + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", Ke);
-         const Fe = (0, be.I)(this._gl);
-         Fe.validateShaderPrograms = this.validateShaderPrograms, Fe.parallelShaderCompile = this._caps.parallelShaderCompile
-       }
- ... (131 more removed lines; see GitHub link above)
+             },
+             touchPressOn: "pointerup",
+             children: (0, YW.jsxs)("span", {
+               className: "ShootingDeathLoadoutText",
+               children: [LW(`${yW}changeLoadout`), (0, YW.jsx)(rW.e, {
+                 noaAction: "OpenShop",
+                 padHidesKey: !0
+               })]
```

#### 48. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1779-L1787` → after: `L1585-L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1585-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1585-L1600) · [Before (L1779-L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1779-L1787)

```diff
-           }
-           if (this._creationOptions) {
-             const ee = this._creationOptions.forceSRGBBufferSupportState;
-             void 0 !== ee && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && ee)
-           }
-         }
-         this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
-         for (let He = 0; He < this._maxSimultaneousTextures; He++) this._nextFreeTextureSlots.push(He);
-         "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
+           }), (0, YW.jsx)("div", {
+             className: "ShootingDeathStatus FullyFancyText",
+             children: PW.status
+           })]
+         })]
+       })
+     }
+ 
+     function Gi(WW) {
+       switch (WW) {
+         case "self":
+           return `${yW}diedSelf`;
+         case "void":
+           return `${yW}diedVoid`;
+         default:
+           return "respawnPage:youDied"
```

#### 49. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1789-L1816` → after: `L1602-L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1602-L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1602-L1780) · [Before (L1789-L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1789-L1816)

```diff
-       _initFeatures() {
-         this._features = {
-           forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
-           supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
-           supportDepthStencilTexture: 1 !== this._webGLVersion,
-           supportShadowSamplers: 1 !== this._webGLVersion,
-           uniformBufferHardCheckMatrix: !1,
-           allowTexturePrefiltering: 1 !== this._webGLVersion,
-           trackUbosInFrame: !1,
-           checkUbosContentBeforeUpload: !1,
-           supportCSM: 1 !== this._webGLVersion,
-           basisNeedsPOT: 1 === this._webGLVersion,
-           support3DTextures: 1 !== this._webGLVersion,
-           needTypeSuffixInShaderConstants: 1 !== this._webGLVersion,
-           supportMSAA: 1 !== this._webGLVersion,
-           supportSSAO2: 1 !== this._webGLVersion,
- ... (12 more removed lines; see GitHub link above)
+     }
+ 
+     function Ii(WW) {
+       let {
+         secondsLeft: iW,
+         totalSeconds: OW,
+         alive: mW
+       } = WW;
+       const EW = mW || iW <= 0,
+         NW = OW > 0 ? Math.min(1, iW / OW) : 0;
+       return (0, YW.jsxs)("div", {
+         className: "ShootingDeathRing",
+         children: [(0, YW.jsxs)("svg", {
+           viewBox: "0 0 44 44",
+           children: [(0, YW.jsx)("circle", {
+             className: "ShootingDeathRingTrack",
+ ... (163 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1819-L1834` → after: `L1785-L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1785-L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1785-L1873) · [Before (L1819-L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1819-L1834)

```diff
-       get dT() {
-         return this._webGLVersion
-       }
-       getClassName() {
-         return "ThinEngine"
-       }
-       _prepareWorkingCanvas() {
-         if (this._workingCanvas) return;
-         this._workingCanvas = this.createCanvas(1, 1);
-         const ee = this._workingCanvas.getContext("2d");
-         ee && (this._workingContext = ee)
-       }
-       getInfo() {
-         return this.getGlInfo()
-       }
-       getGlInfo() {
+     }
+ 
+     function EO(WW) {
+       let {
+         entry: iW,
+         place: OW,
+         mvp: mW,
+         tdm: EW
+       } = WW;
+       const {
+         t: NW
+       } = (0, sW.B)(), PW = dW(), [LW, cW, wW, tW, ZW] = iW, bW = (0, lW.g)("players").localId;
+       return (0, YW.jsxs)("div", {
+         className: xW()("ShootingPodiumCard", `Place${OW+1}`, {
+           Mvp: mW,
+           Mine: LW === bW,
+ ... (73 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1836-L1864` → after: `L1875-L1903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1875-L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1875-L1903) · [Before (L1836-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1836-L1864)

```diff
-           vendor: this._glVendor,
-           renderer: this._glRenderer,
-           version: this._glVersion
-         }
-       }
-       extractDriverInfo() {
-         const ee = this.getGlInfo();
-         return ee && ee.renderer ? ee.renderer : ""
-       }
-       getRenderWidth() {
-         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
-       }
-       getRenderHeight() {
-         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
-       }
-       clear(ee, ie, He) {
- ... (13 more removed lines; see GitHub link above)
+           onCreate: WW => {
+             document.body.classList.add(LO), document.body.classList.toggle(cO, "ffa" === xW), AW = new tW.d(WW, PW), bW = new mi((WW => {
+               LW.l.iZ(Oi, WW, !0)
+             }), (iW => {
+               WW.sendCommand(iW)
+             })), lW = (0, cW.O)((0, mW.createElement)(mW.Fragment, null, (0, mW.createElement)(wW.e, {
+               controller: AW
+             }), (0, mW.createElement)(PO, {
+               store: ZW,
+               votes: bW,
+               variation: xW
+             })), {
+               content: (0, mW.createElement)(BW, {
+                 store: ZW,
+                 variation: xW
+               })
+ ... (13 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1910-L1926` → after: `L1907-L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1907-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1907-L1964) · [Before (L1910-L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1910-L1926)

```diff
-       setState(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           He = arguments.length > 2 ? arguments[2] : void 0,
-           ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           be = arguments.length > 4 ? arguments[4] : void 0,
-           Me = arguments.length > 5 ? arguments[5] : void 0,
-           Ke = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
-         (this._depthCullingState.cull !== ee || He) && (this._depthCullingState.cull = ee), this.setStateCullFaceType(be, He), this.setZOffset(ie), this.setZOffsetUnits(Ke);
-         const Ue = ye ? this._gl.CW : this._gl.CCW;
-         (this._depthCullingState.frontFace !== Ue || He) && (this._depthCullingState.frontFace = Ue), this._stencilStateComposer.stencilMaterial = Me
-       }
-       _resolveAndGenerateMipMapsFramebuffer(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         ee.disableAutomaticMSAAResolve || (ee.isMulti ? this.resolveMultiFramebuffer(ee) : this.resolveFramebuffer(ee)), ie || (ee.isMulti ? this.generateMipMapsMultiFramebuffer(ee) : this.generateMipMapsFramebuffer(ee))
-       }
-       _bindUnboundFramebuffer(ee) {
- ... (1 more removed lines; see GitHub link above)
+   },
+   40710: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => NW
+     });
+     var mW = OW(62),
+       EW = OW(1283);
+     const NW = (0, mW.memo)((function(WW) {
+       let {
+         controller: iW
+       } = WW;
+       return (0, EW.jsxs)("div", {
+         className: "DamageFeedback",
+         ref: iW.bindElement,
+         children: [(0, EW.jsx)("div", {
+           className: "DamageFeedbackLow",
+ ... (42 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1928-L1929` → after: `L1966-L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1966-L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1966-L1967) · [Before (L1928-L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1928-L1929)

```diff
-       _currentFrameBufferIsDefaultFrameBuffer() {
-         return null === this._currentFramebuffer
+       WK(WW) {
+         WW !== this.enabled && (this.enabled = WW, this.showCustomDamage(), WW || this.clearHits(), this.showRoot())
```

#### 54. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1931-L1933` → after: `L1969-L1971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1969-L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1969-L1971) · [Before (L1931-L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1931-L1933)

```diff
-       generateMipmaps(ee) {
-         const ie = this._getTextureTarget(ee);
-         this._bindTextureDirectly(ie, ee, !0), this._gl.generateMipmap(ie), this._bindTextureDirectly(ie, null)
+       frame(WW) {
+         this.syncHealth(), this.cameraHeading = WW;
+         for (const iW of this.arcs) this.drawArcAngle(iW)
```

#### 55. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1935` → after: `L1973-L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1973-L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L1973-L2054) · [Before (L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1935)

```diff
-       unBindFramebuffer(ee, ie, He) {
+       dispose() {
+         mW.l.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(EW)
+       }
+       showCustomDamage() {
+         document.body.classList.toggle(EW, this.enabled && this.parts.arcs)
+       }
+       showRoot() {
+         this.root && (this.root.style.display = this.enabled ? "" : "none")
+       }
+       syncHealth() {
+         const WW = this.api.getClientOption(this.localPlayerId, "_health"),
+           iW = this.api.getClientOption(this.localPlayerId, "_shield"),
+           OW = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
+         if (Object.is(WW, this.readHealth) && Object.is(iW, this.readShield) && Object.is(OW, this.readMaxHealth)) return;
+         if (this.readHealth = WW, this.readShield = iW, this.readMaxHealth = OW, null === WW || void 0 === WW || !OW) return this.lastHealthPool = null, this.maxHealth = null, this.DE = 1, this.dead = !1, void this.drawLow();
+         const mW = WW + (null !== iW && void 0 !== iW ? iW : 0);
+ ... (66 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1937-L2093` → after: `L2056-L2069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2056-L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L2056-L2069) · [Before (L1937-L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L1937-L2093)

```diff
-         this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(ee, ie), He && (ye._MSAAFramebuffer && this._bindUnboundFramebuffer(ye._framebuffer), He()), this._bindUnboundFramebuffer(null)
-       }
-       generateMipMapsFramebuffer(ee) {
-         ee.isMulti || !ee.texture?.generateMipMaps || ee.isCube || this.generateMipmaps(ee.texture)
-       }
-       resolveFramebuffer(ee) {
-         const ie = ee,
-           He = this._gl;
-         if (!ie._MSAAFramebuffer || ie.isMulti) return;
-         let ye = ie.resolveMSAAColors ? He.COLOR_BUFFER_BIT : 0;
-         ye |= ie._generateDepthBuffer && ie.resolveMSAADepth ? He.DEPTH_BUFFER_BIT : 0, ye |= ie._generateStencilBuffer && ie.resolveMSAAStencil ? He.STENCIL_BUFFER_BIT : 0, He.bindFramebuffer(He.READ_FRAMEBUFFER, ie._MSAAFramebuffer), He.bindFramebuffer(He.DRAW_FRAMEBUFFER, ie._ … [truncated]
-       }
-       flushFramebuffer() {
-         this._gl.flush()
-       }
-       restoreDefaultFramebuffer() {
- ... (141 more removed lines; see GitHub link above)
+         PW.onfinish = () => {
+           if (LW.fade !== PW) return;
+           const WW = LW.element.animate([{
+             opacity: 1
+           }, {
+             opacity: 0
+           }], {
+             delay: 936,
+             duration: 864,
+             easing: "cubic-bezier(0.4, 0, 0.7, 1)",
+             fill: "forwards"
+           });
+           WW.startTime = PW.startTime, LW.fade = WW, WW.onfinish = () => {
+             LW.fade === WW && (LW.element.remove(), tW(this.arcs, LW))
```

#### 57. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2155-L2158` → after: `L2073-L2075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2073-L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L2073-L2075) · [Before (L2155-L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L2155-L2158)

```diff
-       _releaseEffect(ee) {
-         this._compiledEffects[ee._key] && delete this._compiledEffects[ee._key];
-         const ie = ee.getPipelineContext();
-         ie && this._deletePipelineContext(ie)
+       drawArcAngle(WW) {
+         const iW = WW.direction - this.cameraHeading;
+         (null === WW.drawnAngle || Math.abs(iW - WW.drawnAngle) > .005) && (WW.drawnAngle = iW, WW.element.style.rotate = `${iW}rad`)
```

#### 58. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2160` → after: `L2077-L2150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2077-L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L2077-L2150) · [Before (L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L2160)

```diff
-       _deletePipelineContext(ee) {
+       flashEdge(WW, iW) {
+         var OW, mW, EW;
+         if (!this.root) return;
+         let NW = this.flashes.find((iW => null === iW.angle || null === WW ? iW.angle === WW : cW(iW.angle, WW) < .5));
+         if (!NW) {
+           const iW = document.createElement("div");
+           iW.className = "DamageFeedbackFlash";
+           const OW = iW.appendChild(document.createElement("div"));
+           OW.className = "DamageFeedbackFlashGlow", this.root.insertBefore(iW, this.arcLayer), NW = {
+             element: iW,
+             glow: OW,
+             angle: WW,
+             level: 0,
+             animation: null
+           }, this.flashes.push(NW)
+         }
+ ... (58 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2162-L2179` → after: `L2152-L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2152-L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L2152-L2153) · [Before (L2162-L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L2162-L2179)

```diff
-         ie && ie.program && (ie.program.__SPECTOR_rebuildProgram = null, (0, Xe.m)(ie), this._gl && (this._currentProgram === ie.program && this._setProgram(null), this._gl.deleteProgram(ie.program)))
-       }
-       _getGlobalDefines(ee) {
-         return (0, pe.f)(ee, this.isNDCHalfZRange, this.Gbe, this.useExactSrgbConversions)
-       }
-       createEffect(ee, ie, He, Me, Ke, Ue, Fe, Je, oe) {
-         let Re = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
-           ke = arguments.length > 10 ? arguments[10] : void 0;
-         const qe = "string" === typeof ee ? ee : ee.vertexToken || ee.vertexSource || ee.vertexElement || ee.vertex,
-           fe = "string" === typeof ee ? ee : ee.fragmentToken || ee.fragmentSource || ee.fragmentElement || ee.fragment,
-           Te = this._getGlobalDefines(),
-           pe = void 0 !== ie.attributes;
-         let Xe = Ke ?? ie.defines ?? "";
-         Te && (Xe += Te);
-         const ze = qe + "+" + fe + "@" + Xe;
-         if (this._compiledEffects[ze]) {
- ... (2 more removed lines; see GitHub link above)
+         bW.onfinish = () => {
+           jW.animation === bW && (jW.element.remove(), tW(this.flashes, jW))
```

#### 60. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2198-L2203` → after: `L2156-L2159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2156-L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L2156-L2159) · [Before (L2198-L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L2198-L2203)

```diff
-       inlineShaderCode(ee) {
-         return ee
-       }
-       createPipelineContext(ee) {
-         if (this._gl) {
-           (0, be.I)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
+       clearHits() {
+         for (const mW of this.arcs) {
+           var WW, iW;
+           null === (WW = mW.fade) || void 0 === WW || WW.cancel(), mW.fade = null, null === (iW = mW.pop) || void 0 === iW || iW.cancel(), mW.element.remove()
```

#### 61. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2205-L2239` → after: `L2161-L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2161-L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L2161-L2164) · [Before (L2205-L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L2205-L2239)

```diff
-         const ie = (0, be.w)(this._gl, ee);
-         return ie.engine = this, ie
-       }
-       createMaterialContext() {}
-       createDrawContext() {}
-       _finalizePipelineContext(ee) {
-         return (0, be.k)(ee, this._gl, this.validateShaderPrograms)
-       }
-       _preparePipelineContextAsync(ee, ie, He, ye, Me, Ke, Ue, Fe, Je, oe, Re) {
-         const ke = (0, be.I)(this._gl);
-         return ke._contextWasLost = this._contextWasLost, ke.validateShaderPrograms = this.validateShaderPrograms, ke._createShaderProgramInjection = this._createShaderProgram.bind(this), ke.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), ke.createShader … [truncated]
-       }
-       _createShaderProgram(ee, ie, He, ye) {
-         let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-         return (0, be.e)(ee, ie, He, ye, Me)
-       }
- ... (19 more removed lines; see GitHub link above)
+         this.arcs.length = 0;
+         for (const mW of this.flashes) {
+           var OW;
+           null === (OW = mW.animation) || void 0 === OW || OW.cancel(), mW.element.remove()
```

#### 62. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L2241-L3367` → after: `L2166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L2166) · [Before (L2241-L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L2241-L3367)

```diff
-         return He
-       }
-       enableEffect(ee) {
-         (ee = null !== ee && (0, Ke.e)(ee) ? ee.effect : ee) && ee !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(ee), this._currentEffect = ee, ee.onBind && ee.onBind(ee), ee._onBindObservable && ee._onBindObservable.notifyObse … [truncated]
-       }
-       setInt(ee, ie) {
-         return !!ee && (this._gl.uniform1i(ee, ie), !0)
-       }
-       setInt2(ee, ie, He) {
-         return !!ee && (this._gl.uniform2i(ee, ie, He), !0)
-       }
-       setInt3(ee, ie, He, ye) {
-         return !!ee && (this._gl.uniform3i(ee, ie, He, ye), !0)
-       }
-       setInt4(ee, ie, He, ye, be) {
-         return !!ee && (this._gl.uniform4i(ee, ie, He, ye, be), !0)
- ... (1111 more removed lines; see GitHub link above)
+         this.flashes.length = 0
```

#### 63. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3377-L3378` → after: `L2170-L2171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L2170-L2171) · [Before (L3377-L3378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L3377-L3378)

```diff
-     function be(ee) {
-       return 8 === ee || 9 === ee || 10 === ee || 11 === ee
+     function cW(WW, iW) {
+       return Math.abs(Math.atan2(Math.sin(WW - iW), Math.cos(WW - iW)))
```

#### 64. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L3382-L4219` → after: `L2175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L2175) · [Before (L3382-L4219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L3382-L4219)

```diff
-       return 0 === ee || 5 === ee || 7 === ee || 11 === ee
-     }
- 
-     function Ke(ee) {
-       return 13 === ee || 17 === ee || 18 === ee || 19 === ee
-     }
-     He.d(ie, {
-       e: () => Ke,
-       i: () => ye,
-       j: () => be,
-       k: () => Me
-     })
-   },
-   40929: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => ye
- ... (822 more removed lines; see GitHub link above)
+       return Math.max(0, Math.min(1, WW))
```

#### 65. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4223-L9690` → after: `L2179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R2179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/281.js#L2179) · [Before (L4223-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/281.js#L4223-L9690)

```diff
-       const He = Fe.p.TransformNormal(ee, qe),
-         ye = Fe.p.TransformNormal(ie, qe),
-         be = Fe.b.FromArray([Te(ye.x, He.x), 0, 0, 0, 0, Te(ye.y, He.y), 0, 0, 0, 0, Te(ye.z, He.z), 0, 0, 0, 0, 1]);
-       return qe.multiply(be).multiply(fe)
-     }
-     const Xe = new Fe.p(.95047, 1, 1.08883),
-       ze = Fe.b.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(pe(Xe, ke(6500, 0))),
-       Be = Fe.b.Invert(ze),
-       Ee = Fe.p.TransformNormal(new Fe.p(1, 1, 1), ze);
-     var ge = He(41141),
-       Oe = He(41227);
-     let de = (() => {
-       var ee;
-       let ie, He, Me, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe = [],
-         Xe = [],
-         ze = [],
- ... (5452 more removed lines; see GitHub link above)
+       const OW = WW.indexOf(iW); - 1 !== OW && WW.splice(OW, 1)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/282.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/282.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8)

#### 1. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/282.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/282.js#L2)

```diff
- export const ids = [282, 662];
+ export const ids = [282];
```

#### 2. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/282.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/282.js#L4)

```diff
-   40954: (ee, ie, He) => {
+   41084: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L9-L32` → after: `L42-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L42-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/282.js#L42-L783) · [Before (L9-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/282.js#L9-L32)

```diff
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ye.ShadersRepository : ye.ShadersRepositoryWGSL
-       }
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ye.ShadersStore : ye.ShadersStoreWGSL
-       }
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ye.IncludesShadersStore : ye.IncludesShadersStoreWGSL
-       }
-     }
-     ye.ShadersRepository = "src/Shaders/", ye.ShadersStore = {}, ye.IncludesShadersStore = {}, ye.ShadersRepositoryWGSL = "src/ShadersWGSL/", ye.ShadersStoreWGSL = {}, ye.IncludesShadersStoreWGSL = {}
-   },
-   63834: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       postprocessVertexShader: () => Ke
-     });
- ... (8 more removed lines; see GitHub link above)
+       constructor() {
+         this.db = null, this.opening = null, this.failed = !1, this.tailRecordings = new Set
+       }
+       get working() {
+         return !this.failed
+       }
+       static get supported() {
+         try {
+           return "undefined" !== typeof indexedDB
+         } catch {
+           return !1
+         }
+       }
+       putRecording(WW) {
+         this.write(["recordings"], (iW => {
+           iW.objectStore("recordings").put(WW)
+ ... (726 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/283.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/283.js` (98 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e)

#### 1. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L4)

```diff
-   41175: (ee, ie, He) => {
+   41109: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L6-L12` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L6-L7) · [Before (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L6-L12)

```diff
-       b: () => ke,
-       d: () => Re,
-       f: () => Fe,
-       j: () => qe,
-       n: () => Je,
-       o: () => Ue,
-       s: () => oe
+       c: () => sw,
+       g: () => Gl
```

#### 3. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L14-L15` → after: `L9-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L9-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L9-L131) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L14-L15)

```diff
-     var ye = He(39467),
-       be = He(41178);
+     const mW = "0.9.4",
+       EW = {
+         DEBUG: !1,
+         LIB_VERSION: "1.438.7",
+         LIB_NAME: "web",
+         JS_SDK_VERSION: mW
+       };
+     var NW = EW;
+     const PW = "$early_access_features",
+       LW = "$active_feature_flags",
+       cW = "$feature_flag_details",
+       wW = "$feature_flag_errors",
+       tW = "$feature_flag_evaluated_at",
+       ZW = "$feature_flag_request_id",
+       xW = "$minimal_flag_called_events",
+       lW = "$enabled_feature_flags",
+ ... (107 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L17-L45` → after: `L133-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L133-L134) · [Before (L17-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L17-L45)

```diff
-     function Me(ee, ie, He, ye) {
-       switch (ie) {
-         case 5120: {
-           let ie = ee.getInt8(He);
-           return ye && (ie = Math.max(ie / 127, -1)), ie
-         }
-         case 5121: {
-           let ie = ee.getUint8(He);
-           return ye && (ie /= 255), ie
-         }
-         case 5122: {
-           let ie = ee.getInt16(He, !0);
-           return ye && (ie = Math.max(ie / 32767, -1)), ie
-         }
-         case 5123: {
-           let ie = ee.getUint16(He, !0);
- ... (13 more removed lines; see GitHub link above)
+     function AO(WW, iW) {
+       return -1 !== WW.indexOf(iW)
```

#### 5. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L48-L76` → after: `L143-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L143-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L143-L161) · [Before (L48-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L48-L76)

```diff
-     function Ke(ee, ie, He, ye, Me) {
-       switch (ie) {
-         case 5120:
-           ye && (Me = Math.round(127 * Me)), ee.setInt8(He, Me);
-           break;
-         case 5121:
-           ye && (Me = Math.round(255 * Me)), ee.setUint8(He, Me);
-           break;
-         case 5122:
-           ye && (Me = Math.round(32767 * Me)), ee.setInt16(He, Me, !0);
-           break;
-         case 5123:
-           ye && (Me = Math.round(65535 * Me)), ee.setUint16(He, Me, !0);
-           break;
-         case 5131:
-           ee.setUint16(He, (0, be.j)(Me), !0);
- ... (13 more removed lines; see GitHub link above)
+     function UO(WW) {
+       var iW;
+       const OW = [];
+       return null !== (iW = JSON.stringify(WW, (function(WW, iW) {
+         if ("bigint" == typeof iW) return iW.toString();
+         if ("function" != typeof iW && "symbol" != typeof iW) {
+           if (iW instanceof Error) return {
+             name: iW.name,
+             message: iW.message,
+             stack: iW.stack
+           };
+           if (iW && "object" == typeof iW) {
+             for (; OW.length > 0 && OW[OW.length - 1] !== this;) OW.pop();
+             if (OW.includes(iW)) return "[Circular]";
+             OW.push(iW)
+           }
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L80-L94` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L191) · [Before (L80-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L80-L94)

```diff
-       switch (ee) {
-         case 5120:
-         case 5121:
-           return 1;
-         case 5122:
-         case 5123:
-         case 5131:
-           return 2;
-         case 5124:
-         case 5125:
-         case 5126:
-           return 4;
-         default:
-           throw new Error(`Invalid type '${ee}'`)
-       }
+       return null === WW || "object" != typeof WW
```

#### 7. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L97-L118` → after: `L194-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L194-L195) · [Before (L97-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L97-L118)

```diff
-     function Fe(ee, ie, He, ye, be, Fe, Je, oe) {
-       const Re = new Array(ye),
-         ke = new Array(ye);
-       if (ee instanceof Array) {
-         let be = ie / 4;
-         const Me = He / 4;
-         for (let ie = 0; ie < Fe; ie += ye) {
-           for (let ie = 0; ie < ye; ie++) Re[ie] = ke[ie] = ee[be + ie];
-           oe(ke, ie);
-           for (let ie = 0; ie < ye; ie++) Re[ie] !== ke[ie] && (ee[be + ie] = ke[ie]);
-           be += Me
-         }
-       } else {
-         const qe = ArrayBuffer.isView(ee) ? new DataView(ee.buffer, ee.byteOffset, ee.byteLength) : new DataView(ee),
-           fe = Ue(be);
-         for (let ee = 0; ee < Fe; ee += ye) {
- ... (6 more removed lines; see GitHub link above)
+     function DO(WW, iW) {
+       return {}.toString.call(WW) === `[object ${iW}]`
```

#### 8. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L121-L139` → after: `L198-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L198-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L198-L207) · [Before (L121-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L121-L139)

```diff
-     function Je(ee, ie, He, be, Me, Ke, Je, oe) {
-       const Re = ie * Ue(He),
-         ke = Je * ie;
-       if (5126 !== He || Me !== Re) {
-         const ye = new Float32Array(ke);
-         return Fe(ee, be, Me, ie, He, ke, Ke, ((ee, He) => {
-           for (let be = 0; be < ie; be++) ye[He + be] = ee[be]
-         })), ye
-       }
-       if (!(ee instanceof Array || ee instanceof Float32Array) || 0 !== be || ee.length !== ke) {
-         if (ee instanceof Array) {
-           const ie = be / 4;
-           return ee.slice(ie, ie + ke)
-         }
-         if (ArrayBuffer.isView(ee)) {
-           const ie = ee.byteOffset + be;
- ... (3 more removed lines; see GitHub link above)
+     function VO(WW) {
+       switch ({}.toString.call(WW)) {
+         case "[object Error]":
+         case "[object Exception]":
+         case "[object DOMException]":
+         case "[object DOMError]":
+         case "[object WebAssembly.Exception]":
+           return !0;
+         default:
+           return fO(WW, Error)
```

#### 9. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L144-L216` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L211-L212) · [Before (L144-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L144-L216)

```diff
-     function oe(ee, ie, He, be, Me, Ke, Je) {
-       const oe = Ue(He),
-         Re = function(ee) {
-           switch (ee) {
-             case 5120:
-               return Int8Array;
-             case 5121:
-               return Uint8Array;
-             case 5122:
-               return Int16Array;
-             case 5123:
-             case 5131:
-               return Uint16Array;
-             case 5124:
-               return Int32Array;
-             case 5125:
- ... (57 more removed lines; see GitHub link above)
+     function pO(WW) {
+       return "u" > typeof Event && fO(WW, Event)
```

#### 10. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L220-L224` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L216-L218) · [Before (L220-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L220-L224)

```diff
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-         ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       if (Array.isArray(ee)) {
-         for (let be = 0; be < ie; be++)
-           if (ee[He + be] - ye > 65535) return !0;
+       try {
+         return WW instanceof iW
+       } catch (WW) {
```

#### 11. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L230-L274` → after: `L226-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L226-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L226-L231) · [Before (L230-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L230-L274)

```diff
-     function qe(ee) {
-       const ie = ee.buffer;
-       if (ie instanceof ArrayBuffer) return ee;
-       const He = new ArrayBuffer(ee.byteLength);
-       return new Uint8Array(He).set(new Uint8Array(ie, ee.byteOffset, ee.byteLength)), He
-     }
-   },
-   40988: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => We,
-       i: () => Oe,
-       o: () => de,
-       k: () => Ye,
-       s: () => Ve
-     });
-     class ye {
- ... (29 more removed lines; see GitHub link above)
+     function qO(WW, iW, OW, mW, EW, NW, PW) {
+       try {
+         var LW = WW[NW](PW),
+           cW = LW.value
+       } catch (WW) {
+         return void OW(WW)
```

#### 12. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L277-L299` → after: `L235-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L235-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L235-L244) · [Before (L277-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L277-L299)

```diff
-     class be {
-       constructor() {
-         this._lines = []
-       }
-       get currentLine() {
-         return this._lines[this.lineIndex]
-       }
-       get canRead() {
-         return this.lineIndex < this._lines.length - 1
-       }
-       set lines(ee) {
-         this._lines.length = 0;
-         for (const ie of ee) {
-           if (!ie || "\r" === ie) continue;
-           if ("#" === ie[0]) {
-             this._lines.push(ie);
- ... (7 more removed lines; see GitHub link above)
+ 
+     function RO(WW) {
+       return function() {
+         var iW = this,
+           OW = arguments;
+         return new Promise((function(mW, EW) {
+           var NW = WW.apply(iW, OW);
+ 
+           function PW(WW) {
+             qO(NW, mW, EW, PW, LW, "next", WW)
```

#### 13. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L301-L309` → after: `L246-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L246-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L246-L248) · [Before (L301-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L301-L309)

```diff
-           const He = ee.indexOf(";");
-           if (-1 === He) this._lines.push(ee);
-           else if (He === ee.length - 1) ee.length > 1 && this._lines.push(ee);
-           else {
-             const ee = ie.split(";");
-             for (let ie = 0; ie < ee.length; ie++) {
-               let He = ee[ie];
-               He && (He = He.trim(), He && this._lines.push(He + (ie !== ee.length - 1 ? ";" : "")))
-             }
+ 
+           function LW(WW) {
+             qO(NW, mW, EW, PW, LW, "throw", WW)
```

#### 14. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L311` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L250-L251) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L311)

```diff
-         }
+           PW(void 0)
+         }))
```

#### 15. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L314-L321` → after: `L254-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L254-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L254-L275) · [Before (L314-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L314-L321)

```diff
-     class Me extends ye {
-       process(ee, ie, He) {
-         for (let ye = 0; ye < this.children.length; ye++) {
-           const be = this.children[ye];
-           if (be.isValid(ee)) return be.process(ee, ie, He)
-         }
-         return ""
-       }
+     const GO = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatal … [truncated]
+       IO = new Map,
+       aO = function(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+         if (!WW) return !1;
+         const OW = function(WW, iW) {
+             let OW = "";
+             for (let mW = 0; iW.length > mW; mW++) {
+               const WW = iW[mW];
+               OW += WW.length + ":" + WW
+             }
+             return WW.length + ":" + WW + "|" + iW.length + ":" + OW
+           }(WW, iW),
+           mW = IO.get(OW);
+         if (void 0 !== mW) return mW;
+         const EW = WW.toLowerCase(),
+ ... (6 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L323-L325` → after: `L277-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L277-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L277-L279) · [Before (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L323-L325)

```diff
-     class Ke extends ye {
-       isValid(ee) {
-         return this.testExpression.isTrue(ee)
+     var zO = class {
+       constructor(WW) {
+         this._buckets = {}, this._onBucketRateLimited = WW._onBucketRateLimited, this._bucketSize = rO(WW.bucketSize, 0, 100, WW._logger), this._refillRate = rO(WW.refillRate, 0, this._bucketSize, WW._logger), this._refillInterval = rO(WW.refillInterval, 0, 864e5, WW._logger)
```

#### 17. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L327-L330` → after: `L281-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L281-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L281-L283) · [Before (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L327-L330)

```diff
-     }
-     class Ue {
-       isTrue(ee) {
-         return !0
+       _applyRefill(WW, iW) {
+         const OW = Math.floor((iW - WW.lastAccess) / this._refillInterval);
+         OW > 0 && (WW.tokens = Math.min(WW.tokens + OW * this._refillRate, this._bucketSize), WW.lastAccess = WW.lastAccess + OW * this._refillInterval)
```

#### 18. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L332-L375` → after: `L285-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L285-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L285-L293) · [Before (L332-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L332-L375)

```diff
-       static postfixToInfix(ee) {
-         const ie = [];
-         for (const He of ee)
-           if (void 0 === Ue._OperatorPriority[He]) ie.push(He);
-           else {
-             const ee = ie[ie.length - 1],
-               ye = ie[ie.length - 2];
-             ie.length -= 2, ie.push(`(${ye}${He}${ee})`)
-           } return ie[ie.length - 1]
-       }
-       static infixToPostfix(ee) {
-         const ie = Ue._InfixToPostfixCache.get(ee);
-         if (ie) return ie.accessTime = Date.now(), ie.result;
-         if (!ee.includes("&&") && !ee.includes("||") && !ee.includes(")") && !ee.includes("(")) return [ee];
-         const He = [];
-         let ye = -1;
- ... (28 more removed lines; see GitHub link above)
+       consumeRateLimit(WW) {
+         var iW;
+         const OW = Date.now(),
+           mW = String(WW);
+         let EW = this._buckets[mW];
+         return EW ? this._applyRefill(EW, OW) : (EW = {
+           tokens: this._bucketSize,
+           lastAccess: OW
+         }, this._buckets[mW] = EW), 0 === EW.tokens || (EW.tokens--, 0 === EW.tokens && (null === (iW = this._onBucketRateLimited) || void 0 === iW || iW.call(this, WW)), 0 === EW.tokens)
```

#### 19. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L377-L379` → after: `L295-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L295-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L295-L484) · [Before (L377-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L377-L379)

```diff
-       static ClearCache() {
-         const ee = Array.from(Ue._InfixToPostfixCache.entries()).sort(((ee, ie) => ee[1].accessTime - ie[1].accessTime));
-         for (let ie = 0; ie < Ue.InfixToPostfixCacheCleanupSize; ie++) Ue._InfixToPostfixCache.delete(ee[ie][0])
+       stop() {
+         this._buckets = {}
+       }
+     };
+     const FO = "Mobile",
+       QO = "Android",
+       Wm = "Tablet",
+       im = "Android Tablet",
+       Om = "iPad",
+       mm = "Apple Watch",
+       Em = "Safari",
+       Nm = "BlackBerry",
+       Pm = "Samsung Internet",
+       Lm = "Chrome",
+       cm = "Chrome iOS",
+       wm = "Internet Explorer",
+ ... (174 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L382-L391` → after: `L488-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L488-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L488-L495) · [Before (L382-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L382-L391)

```diff
-     Ue.InfixToPostfixCacheLimitSize = 5e4, Ue.InfixToPostfixCacheCleanupSize = 25e3, Ue._InfixToPostfixCache = new Map, Ue._OperatorPriority = {
-       ")": 0,
-       "(": 1,
-       "||": 2,
-       "&&": 3
-     }, Ue._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
-     class Fe extends Ue {
-       constructor(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         super(), this.define = ee, this.not = ie
+ 
+     function LE(WW, iW) {
+       if (!iW) return WW;
+       let OW = [];
+       try {
+         OW = Object.keys(iW)
+       } catch (WW) {
+         OW = []
```

#### 21. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L393-L395` → after: `L497-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L497-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L497-L509) · [Before (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L393-L395)

```diff
-       isTrue(ee) {
-         let ie = void 0 !== ee[this.define];
-         return this.not && (ie = !ie), ie
+       for (const mW of OW) {
+         let OW;
+         try {
+           OW = iW[mW]
+         } catch (WW) {
+           OW = NE
+         }
+         Object.defineProperty(WW, mW, {
+           value: OW,
+           enumerable: !0,
+           writable: !0,
+           configurable: !0
+         })
```

#### 22. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L398-L400` → after: `L513-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L513-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L513-L524) · [Before (L398-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L398-L400)

```diff
-     class Je extends Ue {
-       isTrue(ee) {
-         return this.leftOperand.isTrue(ee) || this.rightOperand.isTrue(ee)
+     Date, Date;
+     const cE = 3e5;
+     var wE = class {
+       record(WW) {
+         if ("too-large" === WW.kind) return;
+         if ("retry-later" !== WW.kind) return void this.reset();
+         if (!WW.retryAfterMs) return;
+         const iW = this.isOpen(),
+           OW = Date.now(),
+           mW = Math.min(WW.retryAfterMs, cE);
+         if (!iW) return this._installedAt = OW, void(this._until = OW + mW);
+         this._until = Math.max(this._until, Math.min(OW + mW, this._installedAt + cE))
```

#### 23. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L402-L405` → after: `L526-L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L526-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L526-L530) · [Before (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L402-L405)

```diff
-     }
-     class oe extends Ue {
-       isTrue(ee) {
-         return this.leftOperand.isTrue(ee) && this.rightOperand.isTrue(ee)
+       remainingMs() {
+         const WW = Date.now();
+         if (this._installedAt - 5e3 > WW) return this.reset(), 0;
+         const iW = Math.min(cE, Math.max(0, this._until - WW));
+         return 0 === iW && this.reset(), iW
```

#### 24. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L407-L410` → after: `L532-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L532-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L532-L533) · [Before (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L407-L410)

```diff
-     }
-     class Re extends Ue {
-       constructor(ee, ie, He) {
-         super(), this.define = ee, this.operand = ie, this.testValue = He
+       isOpen() {
+         return this.remainingMs() > 0
```

#### 25. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L412-L413` → after: `L535-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L535-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L535-L536) · [Before (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L412-L413)

```diff
-       toString() {
-         return `${this.define} ${this.operand} ${this.testValue}`
+       reset() {
+         this._until = 0, this._installedAt = 0
```

#### 26. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L415-L439` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L538-L539) · [Before (L415-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L415-L439)

```diff
-       isTrue(ee) {
-         let ie = !1;
-         const He = parseInt(void 0 != ee[this.define] ? ee[this.define] : this.define),
-           ye = parseInt(void 0 != ee[this.testValue] ? ee[this.testValue] : this.testValue);
-         if (isNaN(He) || isNaN(ye)) return !1;
-         switch (this.operand) {
-           case ">":
-             ie = He > ye;
-             break;
-           case "<":
-             ie = He < ye;
-             break;
-           case "<=":
-             ie = He <= ye;
-             break;
-           case ">=":
- ... (9 more removed lines; see GitHub link above)
+       constructor() {
+         this._until = 0, this._installedAt = 0
```

#### 27. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L441-L451` → after: `L541-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L541-L542) · [Before (L441-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L441-L451)

```diff
-     }
-     var ke = He(40985),
-       qe = He(40979);
-     const fe = /defined\s*?\((.+?)\)/g,
-       Te = /defined\s*?\[(.+?)\]/g,
-       pe = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
-       Xe = /__decl__/,
-       ze = /light\{X\}.(\w*)/g,
-       Be = /\{X\}/g,
-       Ee = [],
-       ge = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
+     };
+     const tE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
```

#### 28. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L453-L454` → after: `L544-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L544-L546) · [Before (L453-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L453-L454)

```diff
-     function Oe(ee) {
-       ee.processor && ee.processor.initializeShaders && ee.processor.initializeShaders(ee.processingContext)
+     function ZE(WW, iW) {
+       return "string" == typeof(OW = WW) && tE.test(OW) ? WW : iW();
+       var OW
```

#### 29. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L457-L479` → after: `L549-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L549-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L549-L559) · [Before (L457-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L457-L479)

```diff
-     function de(ee, ie, He, ye) {
-       ie.processor?.preProcessShaderCode && (ee = ie.processor.preProcessShaderCode(ee, ie.isFragment)), Ye(ee, ie, (ee => {
-         ie.processCodeAfterIncludes && (ee = ie.processCodeAfterIncludes(ie.isFragment ? "fragment" : "vertex", ee, ie.defines));
-         const be = function(ee, ie, He) {
-           let ye = function(ee, ie) {
-             if (ie.processor?.noPrecision) return ee;
-             const He = ie.shouldUseHighPrecisionShader; - 1 === ee.indexOf("precision highp float") ? ee = He ? "precision highp float;\n" + ee : "precision mediump float;\n" + ee : He || (ee = ee.replace("precision highp float", "precision mediump float"));
-             return ee
-           }(ee, ie);
-           if (!ie.processor) return ye;
-           if (0 === ie.processor.shaderLanguage && -1 !== ye.indexOf("#version 3") && (ye = ye.replace("#version 300 es", ""), !ie.processor.parseGLES3)) return ye;
-           const be = ie.defines,
-             Me = Ae(ie, He);
-           ie.processor.preProcessor && (ye = ie.processor.preProcessor(ye, be, Me, ie.isFragment, ie.processingContext));
-           const Ke = {};
-           ye = Pe(ye, Me, ie, Ke), ie.processor.postProcessor && (ye = ie.processor.postProcessor(ye, be, ie.isFragment, ie.processingContext, He ? {
- ... (7 more removed lines; see GitHub link above)
+     function xE(WW, iW) {
+       const OW = new Error(iW);
+       try {
+         Object.defineProperty(OW, "name", {
+           value: WW,
+           writable: !0,
+           enumerable: !0,
+           configurable: !0
+         })
+       } catch (WW) {}
+       return OW
```

#### 30. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L482-L486` → after: `L562-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L562-L563) · [Before (L482-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L482-L486)

```diff
-     function We(ee, ie, He) {
-       return He.processor && He.processor.finalizeShaders ? He.processor.finalizeShaders(ee, ie, He.processingContext) : {
-         vertexCode: ee,
-         fragmentCode: ie
-       }
+     function lE(WW) {
+       return WW ? WW.split("#")[0] : WW
```

#### 31. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L490-L500` → after: `L567-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L567-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L567-L571) · [Before (L490-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L490-L500)

```diff
-       const ie = /defined\((.+)\)/.exec(ee);
-       if (ie && ie.length) return new Fe(ie[1].trim(), "!" === ee[0]);
-       const He = ["==", "!=", ">=", "<=", "<", ">"];
-       let ye = "",
-         be = 0;
-       for (ye of He)
-         if (be = ee.indexOf(ye), be > -1) break;
-       if (-1 === be) return new Fe(ee);
-       const Me = ee.substring(0, be).trim(),
-         Ke = ee.substring(be + ye.length).trim();
-       return new Re(Me, ye, Ke)
+       try {
+         return WW()
+       } catch (WW) {
+         return
+       }
```

#### 32. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L504-L522` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L575-L576) · [Before (L504-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L504-L522)

```diff
-       const He = new Ke,
-         ye = ee.substring(0, ie);
-       let be = ee.substring(ie);
-       return be = be.substring(0, (be.indexOf("//") + 1 || be.length + 1) - 1).trim(), He.testExpression = "#ifdef" === ye ? new Fe(be) : "#ifndef" === ye ? new Fe(be, !0) : function(ee) {
-         ee = ee.replace(fe, "defined[$1]");
-         const ie = Ue.infixToPostfix(ee),
-           He = [];
-         for (const be of ie)
-           if ("||" !== be && "&&" !== be) He.push(be);
-           else if (He.length >= 2) {
-           let ee = He[He.length - 1],
-             ie = He[He.length - 2];
-           He.length -= 2;
-           const ye = "&&" == be ? new oe : new Je;
-           "string" === typeof ee && (ee = ee.replace(Te, "defined($1)")), "string" === typeof ie && (ie = ie.replace(Te, "defined($1)")), ye.leftOperand = "string" === typeof ie ? te(ie) : ie, ye.rightOperand = "string" === typeof ee ? te(ee) : ee, He.push(ye)
-         }
- ... (3 more removed lines; see GitHub link above)
+       const OW = setTimeout(WW, iW);
+       return null != OW && OW.unref && (null == OW || OW.unref()), OW
```

#### 33. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L525-L538` → after: `L579-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L579-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L579-L580) · [Before (L525-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L525-L538)

```diff
-     function we(ee, ie, He, be) {
-       let Me;
-       for (; De(ee, He, be);) {
-         Me = ee.currentLine;
-         const Ke = Me.substring(0, 5).toLowerCase();
-         if ("#else" === Ke) {
-           const He = new ye;
-           return ie.children.push(He), void De(ee, He, be)
-         }
-         if ("#elif" === Ke) {
-           const ee = Ze(Me, 5);
-           ie.children.push(ee), He = ee
-         }
-       }
+     function jE(WW, iW, OW) {
+       return UE.apply(this, arguments)
```

#### 34. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L541-L572` → after: `L583-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L583-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L583-L592) · [Before (L541-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L541-L572)

```diff
-     function De(ee, ie, He) {
-       for (; ee.canRead;) {
-         ee.lineIndex++;
-         const be = ee.currentLine;
-         if (be.indexOf("#") >= 0) {
-           const ye = ge.exec(be);
-           if (ye && ye.length) {
-             switch (ye[0]) {
-               case "#ifdef": {
-                 const ye = new Me;
-                 ie.children.push(ye);
-                 const Ke = Ze(be, 6);
-                 ye.children.push(Ke), we(ee, ye, Ke, He);
-                 break
-               }
-               case "#else":
- ... (16 more removed lines; see GitHub link above)
+     function UE() {
+       return (UE = RO((function*(WW, iW, OW) {
+         let mW;
+         try {
+           return yield Promise.race([WW, new Promise(((WW, EW) => {
+             mW = bE((() => {
+               try {
+                 null == OW || OW(), WW()
+               } catch (WW) {
+                 EW(WW)
```

#### 35. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L574-L576` → after: `L594-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L594-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L594-L597) · [Before (L574-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L574-L576)

```diff
-             }
-             continue
-           }
+             }), iW)
+           }))])
+         } finally {
+           clearTimeout(mW)
```

#### 36. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L578-L584` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L599) · [Before (L578-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L578-L584)

```diff
-         const Ke = new ye;
-         if (Ke.line = be, ie.children.push(Ke), "#" === be[0] && "d" === be[1]) {
-           const ee = be.replace(";", "").split(" ");
-           Ke.additionalDefineKey = ee[1], 3 === ee.length && (Ke.additionalDefineValue = ee[2])
-         }
-       }
-       return !1
+       }))).apply(this, arguments)
```

#### 37. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L587-L600` → after: `L602-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L602-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L602-L607) · [Before (L587-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L587-L600)

```diff
-     function Pe(ee, ie, He, Me) {
-       const Ke = new ye,
-         Ue = new be;
-       return Ue.lineIndex = -1, Ue.lines = ee.split("\n"), De(Ue, Ke, Me), Ke.process(ie, He, Me)
-     }
- 
-     function Ae(ee, ie) {
-       const He = ee.defines,
-         ye = {};
-       for (const be of He) {
-         const ee = be.replace("#define", "").replace(";", "").trim().split(" ");
-         ye[ee[0]] = ee.length > 1 ? ee[1] : ""
-       }
-       return 0 === ee.processor?.shaderLanguage && (ye.GL_ES = "true"), ye.__VERSION__ = ee.version, ye[ee.platformName] = "true", (0, qe.f)(ye, ie?.isNDCHalfZRange, ie?.Gbe, ie?.useExactSrgbConversions), ye
+     function kE(WW) {
+       return kE = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
+         return typeof WW
+       } : function(WW) {
+         return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
+       }, kE(WW)
```

#### 38. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L604-L634` → after: `L611-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L611-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L611-L618) · [Before (L604-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L604-L634)

```diff
-       let ye;
-       for (Ee.length = 0; null !== (ye = pe.exec(ee));) Ee.push(ye);
-       let be = [ee],
-         Me = !1;
-       for (const Ue of Ee) {
-         let ee = Ue[1];
-         if (-1 !== ee.indexOf("__decl__") && (ee = ee.replace(Xe, ""), ie.supportsUniformBuffers && (ee = ee.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), ee += "Declaration"), !ie.includesShadersStore[ee]) {
-           const ye = ie.shadersRepository + "ShadersInclude/" + ee + ".fx";
-           return void Ve.loadFile(ye, (ye => {
-             ie.includesShadersStore[ee] = ye, Ye(be.join(""), ie, He)
-           }))
-         } {
-           let He = ie.includesShadersStore[ee];
-           if (Ue[2]) {
-             const ee = Ue[3].split(",");
-             for (let ie = 0; ie < ee.length; ie += 2) {
- ... (15 more removed lines; see GitHub link above)
+       return (iW = function(WW) {
+         var iW = function(WW) {
+           if ("object" != kE(WW) || !WW) return WW;
+           var iW = WW[Symbol.toPrimitive];
+           if (void 0 !== iW) {
+             var OW = iW.call(WW, "string");
+             if ("object" != kE(OW)) return OW;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
```

#### 39. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L636-L652` → after: `L620-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L620-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L620-L628) · [Before (L636-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L636-L652)

```diff
-           const ye = [];
-           for (const ee of be) {
-             const ie = ee.split(Ue[0]);
-             for (let ee = 0; ee < ie.length - 1; ee++) ye.push(ie[ee]), ye.push(He);
-             ye.push(ie[ie.length - 1])
-           }
-           be = ye, Me = Me || He.indexOf("#include<") >= 0 || He.indexOf("#include <") >= 0
-         }
-       }
-       Ee.length = 0;
-       const Ke = be.join("");
-       Me ? Ye(Ke.toString(), ie, He) : He(Ke)
-     }
-     const Ve = {
-       loadFile: (ee, ie, He, ye, be, Me) => {
-         throw (0, ke.l)("FileTools")
- ... (1 more removed lines; see GitHub link above)
+           return String(WW)
+         }(WW);
+         return "symbol" == kE(iW) ? iW : iW + ""
+       }(iW)) in WW ? Object.defineProperty(WW, iW, {
+         value: OW,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : WW[iW] = OW, WW
```

#### 40. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L667-L680` → after: `L632-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L632-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L632-L637) · [Before (L667-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L667-L680)

```diff
-       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (ie ? ie + "\n" : "") + ee
-     }
- 
-     function Ke(ee, ie, He, Me, Ke, Ue, Fe) {
-       const Je = Fe || be.loadFile;
-       if (!Je) throw (0, ye.l)("FileTools");
-       return Je(ee, ie, He, Me, Ke, Ue)
-     }
- 
-     function Ue(ee, ie, He, ye) {
-       if (ee) return ie ? ee.IS_NDC_HALF_ZRANGE = "" : delete ee.IS_NDC_HALF_ZRANGE, He ? ee.USE_REVERSE_DEPTHBUFFER = "" : delete ee.USE_REVERSE_DEPTHBUFFER, void(ye ? ee.USE_EXACT_SRGB_CONVERSIONS = "" : delete ee.USE_EXACT_SRGB_CONVERSIONS);
-       {
-         let ee = "";
-         return ie && (ee += "#define IS_NDC_HALF_ZRANGE"), He && (ee && (ee += "\n"), ee += "#define USE_REVERSE_DEPTHBUFFER"), ye && (ee && (ee += "\n"), ee += "#define USE_EXACT_SRGB_CONVERSIONS"), ee
+       var OW = Object.keys(WW);
+       if (Object.getOwnPropertySymbols) {
+         var mW = Object.getOwnPropertySymbols(WW);
+         iW && (mW = mW.filter((function(iW) {
+           return Object.getOwnPropertyDescriptor(WW, iW).enumerable
+         }))), OW.push.apply(OW, mW)
```

#### 41. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L740` → after: `L643-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L643-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L643-L651) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L740)

```diff
-       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !ye[ee]) return ye[ee] = !0, `${ee} needs to be imported before as it contains a side-effect required by your code.`
+       for (var iW = 1; arguments.length > iW; iW++) {
+         var OW = null != arguments[iW] ? arguments[iW] : {};
+         iW % 2 ? ME(Object(OW), !0).forEach((function(iW) {
+           sE(WW, iW, OW[iW])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : ME(Object(OW)).forEach((function(iW) {
+           Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
+         }))
+       }
+       return WW
```

#### 42. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L742-L744` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L653) · [Before (L742-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L742-L744)

```diff
-     const Me = {};
-     let Ke = !1,
-       Ue = 0;
+     let SE, YE, yE, TE;
```

#### 43. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L746-L751` → after: `L655-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L655-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L655-L681) · [Before (L746-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L746-L751)

```diff
-     function Fe(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const ye = function() {
-         if ((He || Ke) && 0 === Ue) {
-           const He = `${ee}.${ie}`;
-           Me[He] || (Me[He] = !0, console.warn(`[Babylon.js] ${He}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
+     function JE(WW) {
+       var iW;
+       const OW = globalThis._posthogChunkIds,
+         mW = globalThis._debugIds;
+       if (!OW && !mW) return;
+       const EW = OW ? Object.keys(OW) : [],
+         NW = mW ? Object.keys(mW) : [];
+       if (TE && hE(OW, EW, YE) && hE(mW, NW, yE)) return TE;
+       YE = OW ? KE({}, OW) : void 0, yE = mW ? KE({}, mW) : void 0, TE = {}, null !== (iW = SE) && void 0 !== iW || (SE = {});
+       const PW = (iW, OW) => {
+         for (const EW of iW) {
+           const iW = OW[EW];
+           if (!iW) continue;
+           const NW = null == SE ? void 0 : SE[EW];
+           if (NW) {
+             TE[NW] = iW;
+ ... (11 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L754` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L684) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L754)

```diff
-       return ye.__isSideEffectStub = !0, ye
+       return mW && PW(NW, mW), OW && PW(EW, OW), TE
```

#### 45. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L757-L758` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L687-L688) · [Before (L757-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L757-L758)

```diff
-     function Je(ee) {
-       return !!ee && !ee.__isSideEffectStub
+     function hE(WW, iW, OW) {
+       return WW && OW ? iW.length === Object.keys(OW).length && iW.every((iW => WW[iW] === OW[iW])) : WW === OW
```

#### 46. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L760-L853` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L690) · [Before (L760-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L760-L853)

```diff
- 
-     function oe(ee, ie) {
-       return {
-         get() {},
-         set(ee) {
-           Object.defineProperty(this, ie, {
-             value: ee,
-             writable: !0,
-             configurable: !0,
-             enumerable: !0
-           })
-         },
-         configurable: !0,
-         enumerable: !0
-       }
-     }
- ... (78 more removed lines; see GitHub link above)
+     var HE = class {
```

#### 47. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L855` → after: `L692-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L692-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L692-L693) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L855)

```diff
-         super(ee, Ue.h.LoadFileError), this.name = "LoadFileError", Ue.e._setPrototypeOf(this, pe.prototype), ie instanceof ye.c ? this.request = ie : this.file = ie
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         this.coercers = WW, this.stackParser = iW, this.modifiers = OW
```

#### 48. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L857-L860` → after: `L695-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L695-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L695-L707) · [Before (L857-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L857-L860)

```diff
-     }
-     class Xe extends Ue.i {
-       constructor(ee, ie) {
-         super(ee, Ue.h.RequestFileError), this.request = ie, this.name = "RequestFileError", Ue.e._setPrototypeOf(this, Xe.prototype)
+       buildFromUnknown(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         const OW = iW && iW.mechanism || {
+             handled: !0,
+             type: "generic"
+           },
+           mW = this.buildCoercingContext(OW, iW, 0).apply(WW),
+           EW = this.buildParsingContext(iW),
+           NW = this.parseStacktrace(mW, EW);
+         return {
+           $exception_list: this.convertToExceptionList(NW, OW),
+           $exception_level: "error"
+         }
```

#### 49. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L862-L865` → after: `L709-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L709-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L709-L714) · [Before (L862-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L862-L865)

```diff
-     }
-     class ze extends Ue.i {
-       constructor(ee, ie) {
-         super(ee, Ue.h.ReadFileError), this.file = ie, this.name = "ReadFileError", Ue.e._setPrototypeOf(this, ze.prototype)
+       modifyFrames(WW) {
+         var iW = this;
+         return RO((function*() {
+           for (const OW of WW) OW.stacktrace && OW.stacktrace.frames && KO(OW.stacktrace.frames) && (OW.stacktrace.frames = yield iW.applyModifiers(OW.stacktrace.frames));
+           return WW
+         }))()
```

#### 50. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L867-L949` → after: `L716-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L716-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L716-L722) · [Before (L867-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L867-L949)

```diff
-     }
-     const Be = {
-         DefaultRetryStrategy: class {
-           static ExponentialBackoff() {
-             let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
-               ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
-             return (He, ye, be) => 0 !== ye.status || be >= ee || -1 !== He.indexOf("file:") ? -1 : Math.pow(2, be) * ie
-           }
-         }.ExponentialBackoff(),
-         BaseUrl: "",
-         CorsBehavior: "anonymous",
-         PreprocessUrl: ee => ee,
-         ScriptBaseUrl: "",
-         ScriptPreprocessUrl: ee => ee,
-         CleanUrl: ee => ee = ee.replace(/#/gm, "%23")
-       },
- ... (67 more removed lines; see GitHub link above)
+       coerceFallback(WW) {
+         var iW;
+         return {
+           type: "Error",
+           value: "Unknown error",
+           stack: null === (iW = WW.syntheticException) || void 0 === iW ? void 0 : iW.stack,
+           synthetic: !0
```

#### 51. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L951` → after: `L724-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L724-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L724-L753) · [Before (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L951)

```diff
-         Ee(Me, Te);
+       }
+       parseStacktrace(WW, iW) {
+         var OW;
+         let mW, EW;
+         if (null != WW.cause && (mW = this.parseStacktrace(WW.cause, iW)), "" != WW.stack && null != WW.stack) try {
+           EW = this.applyChunkIds(this.stackParser(WW.stack, WW.synthetic ? iW.skipFirstLines : 0), iW.chunkIdMap)
+         } catch (WW) {}
+         return KE(KE({}, WW), {}, {
+           cause: mW,
+           stack: EW,
+           errors: null === (OW = WW.errors) || void 0 === OW ? void 0 : OW.map((WW => this.parseStacktrace(WW, iW)))
+         })
+       }
+       applyChunkIds(WW, iW) {
+         return WW.map((WW => (WW.filename && iW && (WW.chunk_id = iW[WW.filename]), WW)))
+       }
+ ... (14 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L953-L995` → after: `L755-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L755-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L755-L783) · [Before (L953-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L953-L995)

```diff
-           Xe = () => {
-             for (const ee of pe) ee.target.removeEventListener(ee.name, ee.handler);
-             pe.length = 0
-           };
-         pe.push({
-           target: Te,
-           name: "load",
-           handler: () => {
-             Xe(), ie(Te), ke && Te.src && URL.revokeObjectURL(Te.src)
-           }
-         }), pe.push({
-           target: Te,
-           name: "error",
-           handler: ee => {
-             Xe(), qe(ee), ke && Te.src && URL.revokeObjectURL(Te.src)
-           }
- ... (27 more removed lines; see GitHub link above)
+           mW = (WW, EW, NW) => {
+             var PW;
+             const LW = OW.length,
+               cW = void 0 === EW ? KE(KE({
+                 type: "string" == typeof iW.type && iW.type.length > 0 ? iW.type : "generic"
+               }, "boolean" == typeof iW.handled ? {
+                 handled: iW.handled
+               } : void 0 === iW.handled ? {
+                 handled: !0
+               } : {}), {}, {
+                 synthetic: "boolean" == typeof iW.synthetic ? iW.synthetic : WW.synthetic,
+                 exception_id: LW
+               }) : {
+                 type: "chained",
+                 source: NW,
+                 synthetic: WW.synthetic,
+ ... (13 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L997-L1003` → after: `L785-L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L785-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L785-L824) · [Before (L997-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L997-L1003)

```diff
-         if (!ze && !Oe && be && be.enableTexturesOffline) be.open(te, de);
-         else {
-           if (-1 !== Me.indexOf("file:")) {
-             const ee = decodeURIComponent(Me.substring(5).toLowerCase());
-             if (Ke.FilesToLoad[ee] && "undefined" !== typeof URL) {
-               try {
-                 let ie;
+         return mW(WW), OW
+       }
+       buildParsingContext(WW) {
+         var iW;
+         return {
+           chunkIdMap: JE(this.stackParser),
+           skipFirstLines: null !== (iW = WW.skipFirstLines) && void 0 !== iW ? iW : 1
+         }
+       }
+       getAggregateErrors(WW) {
+         try {
+           if (VO(WW)) {
+             let OW = Object.getPrototypeOf(WW);
+             for (let mW = 0; OW && 100 > mW; mW++) {
+               var iW;
+               const mW = null === (iW = Object.getOwnPropertyDescriptor(OW, "constructor")) || void 0 === iW ? void 0 : iW.value;
+ ... (24 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1005-L1007` → after: `L826-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L826-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L826-L828) · [Before (L1005-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1005-L1007)

```diff
-                   ie = URL.createObjectURL(Ke.FilesToLoad[ee])
-                 } catch (Ze) {
-                   ie = URL.createObjectURL(Ke.FilesToLoad[ee])
+                   return xW(iW)
+                 } finally {
+                   cW.pop()
```

#### 55. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1009` → after: `L830-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L830-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L830-L856) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1009)

```diff
-                 Te.src = ie, ke = !0
+               }, mW > 4 || mW > 0 && -1 !== cW.indexOf(WW)) return OW.coerceFallback(tW);
+             const lW = "object" == typeof WW && null !== WW || "function" == typeof WW;
+             if (0 === mW && EW >= 50 || lW && LW.has(WW)) return;
+             lW && LW.add(WW), 0 === mW && EW++;
+             const AW = OW.getAggregateErrors(WW);
+             let bW, jW;
+             PW || (PW = !!AW);
+             try {
+               if (bW = OW.applyCoercers(WW, tW), !bW) throw wW
+             } catch (WW) {
+               if (WW === wW) return void(0 === mW && EW--);
+               if (!PW) throw WW;
+               bW = OW.coerceFallback(tW)
+             }
+             if (!AW || EW >= 50) return bW;
+             try {
+ ... (11 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1011` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L858) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1011)

```diff
-                 Te.src = ""
+                 EW++, mW = OW.coerceFallback(ZW(iW + 1))
```

#### 57. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1013` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L860) · [Before (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1013)

```diff
-               return Te
+               mW && UW.push(mW)
```

#### 58. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1016-L1018` → after: `L885-L909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L885-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L885-L909) · [Before (L1016-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1016-L1018)

```diff
-           de()
-         }
-         return Te
+         })
+       }
+     };
+     const nE = /^([a-z][a-z0-9.+-]+):/i,
+       uE = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];
+ 
+     function oE(WW) {
+       if (!WW || "<anonymous>" === WW) return !1;
+       const iW = nE.exec(WW);
+       return !iW || uE.includes(iW[1].toLowerCase())
+     }
+ 
+     function dE(WW, iW, OW, mW, EW) {
+       const NW = {
+         platform: WW,
+         filename: iW,
+ ... (9 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1020-L1041` → after: `L911-L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L911-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L911-L918) · [Before (L1020-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1020-L1041)

```diff
-       de = (ee, ie, He, ye, be) => {
-         const Ke = new FileReader,
-           Ue = {
-             onCompleteObservable: new Me.d,
-             abort: () => Ke.abort()
-           };
-         return Ke.onloadend = () => Ue.onCompleteObservable.notifyObservers(Ue), be && (Ke.onerror = () => {
-           be(new ze(`Unable to read ${ee.name}`, ee))
-         }), Ke.onload = ee => {
-           ie(ee.target.result)
-         }, He && (Ke.onprogress = He), ye ? Ke.readAsArrayBuffer(ee) : Ke.readAsText(ee), Ue
-       },
-       We = (ee, ie, He, ye, be, Fe, Je) => {
-         if (ee.name) return de(ee, ie, He, be, Fe ? ee => {
-           Fe(void 0, ee)
-         } : void 0);
- ... (6 more removed lines; see GitHub link above)
+       vE = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
+       gE = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
+       DE = /\((\S*)(?::(\d+))(?::(\d+))\)/,
+       VE = (WW, iW) => {
+         const OW = vE.exec(WW);
+         if (OW) {
+           const [, WW, mW, EW] = OW;
+           return dE(iW, WW, "?", +mW, +EW)
```

#### 60. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1043-L1046` → after: `L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L920) · [Before (L1043-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1043-L1046)

```diff
-         const {
-           match: Re,
-           type: fe
-         } = Pe(oe);
+         const mW = gE.exec(WW);
```

#### 61. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1048-L1056` → after: `L922-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L922-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L922-L924) · [Before (L1048-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1048-L1056)

```diff
-           const ee = {
-             onCompleteObservable: new Me.d,
-             abort: () => () => {}
-           };
-           try {
-             const ee = be ? Ae(oe) : Ye(oe);
-             ie(ee, void 0, fe)
-           } catch (Ue) {
-             Fe ? Fe(void 0, Ue) : ke.e.Error(Ue.message || "Failed to parse the Data URL")
+           if (mW[2] && 0 === mW[2].indexOf("eval")) {
+             const WW = DE.exec(mW[2]);
+             WW && (mW[2] = WW[1], mW[3] = WW[2], mW[4] = WW[3])
```

#### 62. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1058-L1168` → after: `L926-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L926-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L926-L927) · [Before (L1058-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1058-L1168)

```diff
-           return qe.c.SetImmediate((() => {
-             ee.onCompleteObservable.notifyObservers(ee)
-           })), ee
-         }
-         return te(oe, ((ee, He) => {
-           ie(ee, He?.responseURL, He?.getResponseHeader("content-type"))
-         }), He, ye, be, Fe ? ee => {
-           Fe(ee.request, new pe(ee.message, ee.request))
-         } : void 0, Je)
-       },
-       te = (ee, ie, He, Ke, Ue, Fe, oe) => {
-         null !== Ke && (Ke ?? (Ke = Je.b.LastCreatedScene?.offlineProvider)), ee = Be.CleanUrl(ee), ee = Be.PreprocessUrl(ee);
-         const Re = Be.BaseUrl + ee;
-         let qe = !1;
-         const fe = {
-             onCompleteObservable: new Me.d,
- ... (95 more removed lines; see GitHub link above)
+           const [WW, OW] = eE(mW[1] || "?", mW[2]);
+           return dE(iW, OW, WW, mW[3] ? +mW[3] : void 0, mW[4] ? +mW[4] : void 0)
```

#### 63. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1171-L1173` → after: `L930-L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L930-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L930-L932) · [Before (L1171-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1171-L1173)

```diff
-       we = () => "undefined" !== typeof location && "file:" === location.protocol,
-       De = ee => Te.test(ee),
-       Pe = ee => {
+       pE = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
+       fE = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
+       CE = (WW, iW) => {
```

#### 64. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1175-L1181` → after: `L934-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L934-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L934-L941) · [Before (L1175-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1175-L1181)

```diff
-         if (null === ie || 0 === ie.length) return {
-           match: !1,
-           type: ""
-         };
-         return {
-           match: !0,
-           type: ie[0].replace("data:", "").replace(";base64,", "")
+         if (OW) {
+           if (OW[3] && OW[3].indexOf(" > eval") > -1) {
+             const WW = fE.exec(OW[3]);
+             WW && (OW[1] = OW[1] || "eval", OW[3] = WW[1], OW[4] = WW[2], OW[5] = "")
+           }
+           let WW = OW[3],
+             mW = OW[1] || "?";
+           return [mW, WW] = eE(mW, WW), dE(iW, WW, mW, OW[4] ? +OW[4] : void 0, OW[5] ? +OW[5] : void 0)
```

#### 65. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1183` → after: `L943-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L943-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L943-L944) · [Before (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1183)

```diff
-       };
+       },
+       XE = /\(error: (.*)\)/;
```

#### 66. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1185-L1186` → after: `L946-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L946-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L946-L947) · [Before (L1185-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1185-L1186)

```diff
-     function Ae(ee) {
-       return (0, Fe.e)(ee.split(",")[1])
+     function BE(WW, iW) {
+       return WW.filename === iW.filename && WW.function === iW.function && WW.module === iW.module && WW.lineno === iW.lineno && WW.colno === iW.colno
```

#### 67. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1237-L1238` → after: `L950-L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L950-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L950-L966) · [Before (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1237-L1238)

```diff
-     function xe() {
-       ce || (ce = !0, ae(Ae, Ye, Be, De, we, We, Oe, de, te, Ee), oe.b.loadFile = We, oe.b.loadImage = Oe, Re.s.loadFile = We)
+     function qE(WW) {
+       for (let iW = 1; 10 >= iW; iW++) {
+         const OW = WW.length - 2 * iW;
+         if (0 > OW) break;
+         let mW = !0;
+         for (let EW = 0; iW > EW; EW++)
+           if (!BE(WW[OW + EW], WW[OW + iW + EW])) {
+             mW = !1;
+             break
+           } if (mW) {
+           for (let mW = 0; iW > mW; mW++) WW[OW + mW] = WW[OW + iW + mW];
+           return WW.length = OW + iW, {
+             start: OW,
+             length: iW
+           }
+         }
+ ... (1 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1249-L1285` → after: `L969-L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L969-L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L969-L973) · [Before (L1249-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1249-L1285)

```diff
-     function be() {
-       if (ye) return ye;
-       const ee = new ArrayBuffer(4),
-         ie = new Float32Array(ee),
-         He = new Uint32Array(ee),
-         be = new Uint32Array(512),
-         Me = new Uint32Array(512);
-       for (let ye = 0; ye < 256; ++ye) {
-         const ee = ye - 127;
-         ee < -24 ? (be[ye] = 0, be[256 | ye] = 32768, Me[ye] = 24, Me[256 | ye] = 24) : ee < -14 ? (be[ye] = 1024 >> -ee - 14, be[256 | ye] = 1024 >> -ee - 14 | 32768, Me[ye] = -ee - 1, Me[256 | ye] = -ee - 1) : ee <= 15 ? (be[ye] = ee + 15 << 10, be[256 | ye] = ee + 15 << 10 | 3 … [truncated]
-       }
-       const Ke = new Uint32Array(2048),
-         Ue = new Uint32Array(64),
-         Fe = new Uint32Array(64);
-       for (let ye = 1; ye < 1024; ++ye) {
-         let ee = ye << 13,
- ... (21 more removed lines; see GitHub link above)
+     function RE(WW, iW) {
+       const OW = iW.start + iW.length,
+         mW = IE(WW, iW);
+       mW && WW.splice(OW + mW === WW.length ? OW : iW.start, mW)
+     }
```

#### 69. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1287-L1292` → after: `L975-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L975-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L975-L978) · [Before (L1287-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1287-L1292)

```diff
-     function Ke(ee) {
-       const ie = be();
-       ie.floatView[0] = ee;
-       const He = ie.uint32View[0],
-         ye = He >> 23 & 511;
-       return ie.baseTable[ye] + ((8388607 & He) >> ie.shiftTable[ye])
+     function GE(WW, iW) {
+       let OW = iW.start;
+       for (; OW > 0 && BE(WW[OW - 1], WW[OW - 1 + iW.length]);) OW--;
+       return iW.start - OW
```

#### 70. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1295-L1297` → after: `L981-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L981-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L981-L985) · [Before (L1295-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1295-L1297)

```diff
-     function Ue(ee) {
-       const ie = be();
-       return ie.uint32View[0] = ie.mantissaTable[ie.offsetTable[ee >> 10] + (1023 & ee)] + ie.exponentTable[ee >> 10], ie.floatView[0]
+     function IE(WW, iW) {
+       const OW = iW.start + iW.length;
+       let mW = OW;
+       for (; WW.length > mW && BE(WW[mW], WW[mW - iW.length]);) mW++;
+       return mW - OW
```

#### 71. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1299-L1338` → after: `L987-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L987-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L987-L992) · [Before (L1299-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1299-L1338)

```diff
-   },
-   41172: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Me,
-       g: () => be,
-       j: () => ye
-     });
-     const ye = ee => {
-         const ie = ArrayBuffer.isView(ee) ? new Uint8Array(ee.buffer, ee.byteOffset, ee.byteLength) : new Uint8Array(ee);
-         return "function" === typeof ie.toBase64 ? ie.toBase64() : function(ee) {
-           const ie = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
-           let He, ye, be, Me, Ke, Ue, Fe, Je = "",
-             oe = 0;
-           for (; oe < ee.length;) He = ee[oe++], ye = oe < ee.length ? ee[oe++] : Number.NaN, be = oe < ee.length ? ee[oe++] : Number.NaN, Me = He >> 2, Ke = (3 & He) << 4 | ye >> 4, Ue = (15 & ye) << 2 | be >> 6, Fe = 63 & be, isNaN(ye) ? Ue = Fe = 64 : isNaN(be) && (Fe = 64), J … [truncated]
-           return Je
-         }(ie)
- ... (24 more removed lines; see GitHub link above)
+ 
+     function aE(WW, iW) {
+       const OW = iW[0];
+       let mW = WW.length - (OW ? GE(WW, OW) : 0);
+       for (const EW of iW) mW -= IE(WW, EW);
+       return mW
```

#### 72. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1342-L1345` → after: `L996-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L996-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L996-L999) · [Before (L1342-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1342-L1345)

```diff
-       try {
-         if (ee()) return ie(), !0
-       } catch (ye) {
-         return He?.(ye), !0
+       for (let mW = 0; WW.length > mW; mW++) {
+         const EW = WW[(iW + mW) % WW.length],
+           NW = WW[(OW + mW) % WW.length];
+         if (EW !== NW) return NW > EW
```

#### 73. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1349-L1387` → after: `L1003-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1003-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1003-L1005) · [Before (L1349-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1349-L1387)

```diff
-     const Ke = function(ee, ie, He) {
-       let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
-         be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
-         Ke = arguments.length > 6 ? arguments[6] : void 0;
-       if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && Me(ee, ie, He)) return null;
-       const Ue = setInterval((() => {
-         Me(ee, ie, He) ? clearInterval(Ue) : (be -= ye, be < 0 && (clearInterval(Ue), He?.(new Error("Operation timed out after maximum retries. " + (Ke || "")), !0)))
-       }), ye);
-       return () => clearInterval(Ue)
-     }
-   },
-   41161: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => ye
-     });
-     class ye {
- ... (23 more removed lines; see GitHub link above)
+     var zE = class {
+         match(WW) {
+           return this.isDOMException(WW) || this.isDOMError(WW)
```

#### 74. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1389-L1391` → after: `L1007-L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1007-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1007-L1014) · [Before (L1389-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1389-L1391)

```diff
-         const He = {
-           setRequestHeader: (ee, He) => {
-             ie[ee] = He
+         coerce(WW, iW) {
+           const OW = JO(WW.stack);
+           return {
+             type: this.getType(WW),
+             value: this.getValue(WW),
+             stack: OW ? WW.stack : void 0,
+             cause: WW.cause ? iW.next(WW.cause) : void 0,
+             synthetic: !1
```

#### 75. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1399-L1401` → after: `L1017-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1017-L1018) · [Before (L1399-L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1399-L1401)

```diff
-         return {
-           url: ee,
-           headers: ie
+         getType(WW) {
+           return this.isDOMError(WW) ? "DOMError" : "DOMException"
```

#### 76. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1403-L1415` → after: `L1020-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1020-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1020-L1076) · [Before (L1403-L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1403-L1415)

```diff
-       }
-       static async FetchAsync(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         const He = ie.method ?? "GET";
-         if ("undefined" !== typeof fetch) {
-           const {
-             url: be,
-             headers: Me
-           } = ye._CollectCustomizations(ye._CleanUrl(ee), ie.headers ?? {});
-           return await fetch(be, {
-             method: He,
-             headers: Me,
-             body: ie.body ?? void 0
+         getValue(WW) {
+           const iW = WW.name || (this.isDOMError(WW) ? "DOMError" : "DOMException");
+           return WW.message ? `${iW}: ${WW.message}` : iW
+         }
+         isDOMException(WW) {
+           return DO(WW, "DOMException")
+         }
+         isDOMError(WW) {
+           return DO(WW, "DOMError")
+         }
+       },
+       FE = class {
+         match(WW) {
+           return VO(WW)
+         }
+         coerce(WW, iW) {
+ ... (41 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1418-L1440` → after: `L1079-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1079-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1079-L1093) · [Before (L1418-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1418-L1440)

```diff
-         return await new Promise(((be, Me) => {
-           const Ke = new ye;
-           Ke.responseType = "arraybuffer", Ke.addEventListener("readystatechange", (() => {
-             if (4 === Ke.readyState)
-               if (Ke.status >= 200 && Ke.status < 300) {
-                 const ee = "undefined" !== typeof Headers ? new Headers : void 0,
-                   ie = Ke.getResponseHeader("Content-Type");
-                 ie && ee && ee.set("Content-Type", ie), "undefined" !== typeof Response ? be(new Response(Ke.response, {
-                   status: Ke.status,
-                   statusText: Ke.statusText,
-                   headers: ee
-                 })) : be({
-                   ok: !0,
-                   status: Ke.status,
-                   statusText: Ke.statusText,
-                   headers: {
- ... (7 more removed lines; see GitHub link above)
+         _hasUsableMessage(WW) {
+           return JO(WW.message) && WW.message.length > 0
+         }
+         _buildLocationStack(WW) {
+           var iW, OW;
+           const mW = WW,
+             EW = null !== (iW = mW.lineno) && void 0 !== iW ? iW : 0,
+             NW = null !== (OW = mW.colno) && void 0 !== OW ? OW : 0;
+           if (JO(mW.filename) && 0 !== mW.filename.length && 0 !== EW) return `Error\n    at ${mW.filename}:${EW}:${NW}`
+         }
+       };
+     const WN = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
+     var iN = class {
+       match(WW) {
+         return "string" == typeof WW
```

#### 78. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1442-L1443` → after: `L1095-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1095-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1095-L1103) · [Before (L1442-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1442-L1443)

```diff
-       get requestURL() {
-         return this._requestURL
+       coerce(WW, iW) {
+         var OW;
+         const [mW, EW] = this.getInfos(WW);
+         return {
+           type: null != mW ? mW : "Error",
+           value: null != EW ? EW : WW,
+           stack: null === (OW = iW.syntheticException) || void 0 === OW ? void 0 : OW.stack,
+           synthetic: !0
+         }
```

#### 79. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1445-L1446` → after: `L1105-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1105-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1105-L1109) · [Before (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1445-L1446)

```diff
-       get onprogress() {
-         return this._xhr.onprogress
+       getInfos(WW) {
+         let iW = "Error",
+           OW = WW;
+         const mW = WW.match(WN);
+         return mW && (iW = mW[1], OW = mW[2]), [iW, OW]
```

#### 80. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1448-L1449` → after: `L1111-L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1111-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1111-L1302) · [Before (L1448-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1448-L1449)

```diff
-       set onprogress(ee) {
-         this._xhr.onprogress = ee
+     };
+     const ON = ["fatal", "error", "warning", "log", "info", "debug"];
+ 
+     function mN(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
+       const OW = Object.keys(WW);
+       if (OW.sort(), !OW.length) return "[object has no keys]";
+       for (let mW = OW.length; mW > 0; mW--) {
+         const WW = OW.slice(0, mW).join(", ");
+         if (iW >= WW.length) return mW === OW.length ? WW : WW.length > iW ? `${WW.slice(0,iW)}...` : WW
+       }
+       return ""
+     }
+     var EN = class {
+         match(WW) {
+           return "object" == typeof WW && null !== WW
+ ... (176 more added lines; see GitHub link above)
```

#### 81. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1451-L1452` → after: `L1304-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1304-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1304-L1305) · [Before (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1451-L1452)

```diff
-       get readyState() {
-         return this._xhr.readyState
+       size() {
+         return this._entries.length
```

#### 82. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1454-L1455` → after: `L1307-L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1307-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1307-L1325) · [Before (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1454-L1455)

```diff
-       get status() {
-         return this._xhr.status
+       _trimToMaxBytes() {
+         for (; this._totalBytes > this._config.max_bytes && this._entries.length > 0;) {
+           const WW = this._entries.shift();
+           WW && (this._totalBytes -= WW.bytes)
+         }
+       }
+     };
+ 
+     function AN(WW, iW) {
+       if (!uO(WW) || 1 / 0 === WW || -1 / 0 === WW) return iW;
+       const OW = Math.floor(WW);
+       return 0 > OW ? iW : OW
+     }
+     const bN = WW => {
+       if ("string" != typeof WW) return WW;
+       try {
+ ... (3 more added lines; see GitHub link above)
```

#### 83. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1457-L1458` → after: `L1327-L1412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1327-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1327-L1412) · [Before (L1457-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1457-L1458)

```diff
-       get statusText() {
-         return this._xhr.statusText
+     };
+ 
+     function jN(WW) {
+       return "string" == typeof WW || WW
+     }
+ 
+     function UN(WW) {
+       return "string" == typeof WW ? WW : void 0
+     }
+     const kN = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$proce … [truncated]
+       sN = "NativeGzipValidationError",
+       MN = WW => WW.length >= 2 && 31 === WW[0] && 139 === WW[1],
+       KN = (WW, iW) => WW === ZO.GZipJS || iW === ZO.GZipJS || "gzip" === iW,
+       SN = WW => !(!WW || "object" != typeof WW) && "NotReadableError" === ("name" in WW ? String(WW.name) : "");
+     let YN;
+     const yN = WW => {
+ ... (70 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1460-L1461` → after: `L1414-L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1414-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1414-L1470) · [Before (L1460-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1460-L1461)

```diff
-       get response() {
-         return this._xhr.response
+       return EW
+     }
+     const nN = "[redacted]",
+       uN = /^[A-Za-z0-9+/\n\r]+=*$/,
+       oN = /^[A-Za-z0-9_-]+={0,2}$/,
+       dN = /[-_]/,
+       eN = /^data:[^,\s]*;base64,/i,
+       vN = /^[A-Za-z0-9+/_-]+={0,2}$/,
+       gN = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g,
+       DN = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i,
+       VN = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi,
+       pN = /[\s<>"]/,
+       fN = new RegExp(VN.source, "i"),
+       CN = /[a-z][a-z0-9+.-]{0,63}:\/\//i,
+       XN = new RegExp(`^${CN.source}`, "i"),
+       BN = new RegExp(CN.source, "gi"),
+ ... (41 more added lines; see GitHub link above)
```

#### 85. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1463-L1464` → after: `L1472-L1475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1472-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1472-L1475) · [Before (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1463-L1464)

```diff
-       get responseURL() {
-         return this._xhr.responseURL
+       return {
+         changed: mW,
+         lastFieldSensitive: EW,
+         serialized: OW.toString()
```

#### 86. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1466-L1467` → after: `L1477-L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1477-L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1477-L1487) · [Before (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1466-L1467)

```diff
-       get responseText() {
-         return this._xhr.responseText
+     }
+ 
+     function PP(WW, iW) {
+       if (!WW.includes("=")) return {
+         value: LP(WW, iW),
+         lastFieldSensitive: !1
+       };
+       const OW = NP(WW, iW);
+       return {
+         value: OW.changed ? OW.serialized : WW,
+         lastFieldSensitive: OW.lastFieldSensitive
```

#### 87. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1469-L1470` → after: `L1489-L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1489-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1489-L1523) · [Before (L1469-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1469-L1470)

```diff
-       get responseType() {
-         return this._xhr.responseType
+     }
+ 
+     function LP(WW, iW) {
+       return iW ? tP(WW, {
+         allowNestedUrls: !1,
+         stripPunctuation: !0
+       }) : fN.test(WW) ? nN : WW
+     }
+ 
+     function cP(WW, iW, OW) {
+       return "#" === WW ? !iW.fragment && (iW.fragment = !0) : "?" === WW && (iW.fragment ? "=" !== OW && !iW.fragmentQuery && (iW.fragmentQuery = !0) : !iW.query && (iW.query = !0))
+     }
+ 
+     function wP(WW, iW) {
+       var OW;
+       if (WW.length > 8192 && XN.test(WW)) return nN;
+ ... (19 more added lines; see GitHub link above)
```

#### 88. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1472-L1473` → after: `L1525-L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1525-L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1525-L1598) · [Before (L1472-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1472-L1473)

```diff
-       set responseType(ee) {
-         this._xhr.responseType = ee
+       const PW = NW.search.slice(1),
+         LW = "" !== NW.hash,
+         cW = function(WW) {
+           const iW = WW.slice(1),
+             OW = iW.indexOf("?");
+           return 0 > OW ? {
+             head: iW,
+             tail: null
+           } : {
+             head: iW.slice(0, OW),
+             tail: iW.slice(OW + 1)
+           }
+         }(NW.hash);
+       if (mP(PW) || mP(cW.head) || mP(null !== (OW = cW.tail) && void 0 !== OW ? OW : "")) return nN + EW;
+       let wW = !1;
+       (NW.username || NW.password) && (NW.username = nN, NW.password = "", wW = !0);
+ ... (58 more added lines; see GitHub link above)
```

#### 89. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1475-L1476` → after: `L1600-L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1600-L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1600-L1617) · [Before (L1475-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1475-L1476)

```diff
-       get timeout() {
-         return this._xhr.timeout
+       return iW % 10 == 0
+     }
+ 
+     function lP(WW) {
+       const iW = [];
+       for (let NW = QN.exec(WW); null !== NW; NW = QN.exec(WW)) iW.push({
+         digits: NW[0],
+         start: NW.index,
+         end: NW.index + NW[0].length
+       });
+       let OW = "",
+         mW = 0,
+         EW = 0;
+       for (; iW.length > EW;) {
+         let NW = "",
+           PW = -1;
+ ... (2 more added lines; see GitHub link above)
```

#### 90. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1478-L1479` → after: `L1619-L1630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1619-L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1619-L1630) · [Before (L1478-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1478-L1479)

```diff
-       set timeout(ee) {
-         this._xhr.timeout = ee
+       return OW + WW.slice(mW)
+     }
+     const AP = {}.propertyIsEnumerable;
+ 
+     function bP(WW, iW) {
+       try {
+         return kP(WW, iW, {
+           ancestors: new WeakSet,
+           remainingNodes: 1e4
+         }, 0)
+       } catch (WW) {
+         return []
```

#### 91. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1481-L1482` → after: `L1632-L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1632-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1632-L1670) · [Before (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1481-L1482)

```diff
-       addEventListener(ee, ie, He) {
-         this._xhr.addEventListener(ee, ie, He)
+     }
+ 
+     function jP(WW, iW, OW, mW) {
+       if (0 >= OW.remainingNodes) return {
+         stringValue: EE
+       };
+       if (OW.remainingNodes--, dO(WW)) return {
+         boolValue: WW
+       };
+       if ("bigint" == typeof WW) return function(WW, iW) {
+         const OW = WW.toString(),
+           mW = BigInt("9223372036854775808");
+         return WW >= mW || -mW > WW ? (null == iW || iW.debug(`Attribute ${OW} is outside the int64 range; encoding it as a string`), {
+           stringValue: OW
+         }) : {
+           intValue: OW
+ ... (23 more added lines; see GitHub link above)
```

#### 92. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1484-L1485` → after: `L1672-L1712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1672-L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1672-L1712) · [Before (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1484-L1485)

```diff
-       removeEventListener(ee, ie, He) {
-         this._xhr.removeEventListener(ee, ie, He)
+       if ("string" == typeof WW) return {
+         stringValue: PE(WW)
+       };
+       if ("function" == typeof WW) return {
+         stringValue: "[Function]"
+       };
+       if ("symbol" == typeof WW) return {
+         stringValue: String(WW)
+       };
+       if ("object" == typeof WW && null !== WW) {
+         if (OW.ancestors.has(WW)) return {
+           stringValue: "[Circular]"
+         };
+         if (mW >= 20) return {
+           stringValue: EE
+         };
+ ... (25 more added lines; see GitHub link above)
```

#### 93. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1487-L1488` → after: `L1714-L1715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1714-L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1714-L1715) · [Before (L1487-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1487-L1488)

```diff
-       abort() {
-         this._xhr.abort()
+       return {
+         stringValue: PE(String(WW))
```

#### 94. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1490-L1491` → after: `L1717-L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1717-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1717-L1730) · [Before (L1490-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1490-L1491)

```diff
-       send(ee) {
-         this._xhr.send(ee)
+     }
+ 
+     function UP(WW, iW, OW, mW) {
+       const EW = [],
+         NW = Math.min(WW.length, 1e3);
+       let PW = 0;
+       for (; NW > PW && OW.remainingNodes > 0; PW++) try {
+         const NW = PW in WW ? WW[PW] : void 0;
+         if (nO(NW)) continue;
+         EW.push(jP(NW, iW, OW, mW))
+       } catch (WW) {
+         EW.push({
+           stringValue: NE
+         })
```

#### 95. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1493-L1499` → after: `L1732-L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1732-L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1732-L1833) · [Before (L1493-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1493-L1499)

```diff
-       open(ee, ie, He) {
-         const {
-           url: be,
-           headers: Me
-         } = ye._CollectCustomizations(ie, He);
-         this._requestURL = ye._CleanUrl(be), this._xhr.open(ee, this._requestURL, !0);
-         for (const ye in Me) this._xhr.setRequestHeader(ye, Me[ye])
+       return WW.length > PW && EW.push({
+         stringValue: EE
+       }), EW
+     }
+ 
+     function kP(WW, iW, OW, mW) {
+       const EW = [];
+       for (const NW in WW)
+         if (AP.call(WW, NW)) {
+           if (!NW) {
+             null == iW || iW.debug("Dropping an attribute with an empty key");
+             continue
+           }
+           if (EW.length >= 1e3 || 0 >= OW.remainingNodes) {
+             null == iW || iW.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
+             break
+ ... (86 more added lines; see GitHub link above)
```

#### 96. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1501-L1502` → after: `L1835-L1871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1835-L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1835-L1871) · [Before (L1501-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1501-L1502)

```diff
-       setRequestHeader(ee, ie) {
-         this._xhr.setRequestHeader(ee, ie)
+     }
+ 
+     function JP(WW, iW, OW, mW) {
+       const EW = WW.level || "info",
+         {
+           text: NW,
+           number: PW
+         } = YP[EW] || yP,
+         LW = function() {
+           let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+           return String(WW) + "000000"
+         }(uO(mW) ? mW : void 0),
+         cW = {};
+       iW.distinctId && (cW.posthogDistinctId = iW.distinctId), iW.sessionId && (cW.sessionId = iW.sessionId), iW.windowId && (cW["window.id"] = iW.windowId), nO(iW.sessionStartTimestamp) || (cW.sessionStartTimestamp = String(iW.sessionStartTimestamp)), nO(iW.lastActivityTimestamp … [truncated]
+       const wW = KE({}, cW),
+         tW = WW.attributes;
+ ... (21 more added lines; see GitHub link above)
```

#### 97. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1504-L1505` → after: `L1873-L1903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1873-L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1873-L1903) · [Before (L1504-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1504-L1505)

```diff
-       getResponseHeader(ee) {
-         return this._xhr.getResponseHeader(ee)
+       const ZW = {
+         timeUnixNano: LW,
+         observedTimeUnixNano: LW,
+         severityNumber: PW,
+         severityText: NW,
+         body: {
+           stringValue: TP(WW.body)
+         },
+         attributes: bP(wW, OW)
+       };
+       return WW.trace_id && (ZW.traceId = WW.trace_id), WW.span_id && (ZW.spanId = WW.span_id), TO(WW.trace_flags) || (ZW.flags = WW.trace_flags), ZW
+     }
+ 
+     function hP(WW, iW, OW) {
+       return sP(WW, iW, OW)
+     }
+ ... (15 more added lines; see GitHub link above)
```

#### 98. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1508` → after: `L1906-L12783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1906-L12783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/283.js#L1906-L12783) · [Before (L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/283.js#L1508)

```diff
-     ye.CustomRequestHeaders = {}, ye.CustomRequestModifiers = new Array, ye.SkipRequestModificationForBabylonCDN = !0
+     var nP = class {
+       constructor(WW) {
+         this._onFire = WW, this._firesAt = 0
+       }
+       get pending() {
+         return !!this._timer
+       }
+       arm(WW) {
+         this.clear(), this._firesAt = Date.now() + WW, this._timer = bE((() => {
+           this._timer = void 0, this._onFire()
+         }), WW)
+       }
+       armNoEarlierThan(WW) {
+         this._timer && Date.now() + WW <= this._firesAt || this.arm(WW)
+       }
+       clear() {
+ ... (10862 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/284.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/284.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887)

#### 1. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/284.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/284.js#L4-L6)

```diff
-   41212: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Me
+   41336: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       playDocsSound: () => cW
```

#### 2. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8-L19` → after: `L8-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/284.js#L8-L26) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/284.js#L8-L19)

```diff
-     var ye = He(39467),
-       be = He(37949);
-     class Me {
-       static Instantiate(ee) {
-         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[ee]) return this.RegisteredExternalClasses[ee];
-         const ie = (0, be.c)(ee);
-         if (ie) return ie;
-         ye.e.Warn(ee + " not found, you may have missed an import.");
-         const He = ee.split(".");
-         let Me = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
-         for (let ye = 0, be = He.length; ye < be; ye++) Me = Me[He[ye]];
-         return "function" !== typeof Me ? null : Me
+     var mW = OW(5615),
+       EW = OW(37559),
+       NW = OW(1185),
+       PW = OW(37563);
+     const LW = new Map;
+ 
+     function cW(WW, iW, OW, cW, wW) {
+       let tW, ZW = 0;
+       if (iW) tW = new mW.Howl({
+         src: [`${NW.clientSideServerUrls.staticUrl}/sounds/music/${WW}.mp3`],
+         html5: !0,
+         volume: OW
+       });
+       else {
+         const iW = (0, EW.u)(WW);
+         ZW = iW.ms / 1e3, tW = LW.get(WW), tW || (tW = new mW.Howl({
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L21-L279` → after: `L28-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L28-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/284.js#L28-L71) · [Before (L21-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/284.js#L21-L279)

```diff
-     }
-     Me.RegisteredExternalClasses = {}
-   },
-   41005: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => be
-     });
-     var ye = He(40968);
-     class be {
-       static get Now() {
-         return (0, ye.m)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
-       }
-     }
-   },
-   41044: (ee, ie, He) => {
-     function ye(ee) {
- ... (243 more removed lines; see GitHub link above)
+       const xW = iW ? tW.play() : tW.play(PW.d);
+       tW.volume(OW, xW), cW > 0 && tW.seek(cW, xW);
+       const lW = () => {
+         const WW = tW.duration();
+         return iW || WW > 0 ? WW : ZW
+       };
+       let AW = !1;
+       const bW = WW => {
+           AW || (AW = !0, tW.off("play", jW, xW), tW.off("end", UW, xW), tW.off("loaderror", sW), tW.off("playerror", kW, xW), iW && tW.unload(), wW.onEnd(WW))
+         },
+         jW = () => {
+           wW.onPlay(lW())
+         },
+         UW = () => {
+           bW(!1)
+         },
+ ... (28 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/285.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/285.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2)

#### 1. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L4-L6)

```diff
-   41550: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => ye
+   41350: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => IW
```

#### 2. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L8-L195` → after: `L8-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L8-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L8-L102) · [Before (L8-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L8-L195)

```diff
-     let ye = !1
-   },
-   41111: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => fe
-     });
-     var ye = He(41113),
-       be = He(41121),
-       Me = He(37931),
-       Ke = He(37917),
-       Ue = He(37929),
-       Fe = He(38745),
-       Je = He(41137);
-     class oe {
-       get wrapU() {
-         return this._wrapU
- ... (172 more removed lines; see GitHub link above)
+     OW(7436);
+     var mW = OW(62),
+       EW = OW(41359),
+       NW = OW(41604),
+       PW = OW(41715),
+       LW = OW(41760),
+       cW = OW(41782),
+       wW = OW(38369),
+       tW = OW(38235),
+       ZW = OW(41916),
+       xW = OW(41966),
+       lW = (OW(41997), OW(1217)),
+       AW = OW(182),
+       bW = OW(1172),
+       jW = OW(25),
+       UW = OW(3809),
+ ... (79 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L197-L286` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L104-L107) · [Before (L197-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L197-L286)

```diff
-           this.Xx()?.markAllMaterialsAsDirty(1, (ee => ee.hasTexture(this)))
-         }
-         get isRGBD() {
-           return null != this._texture && this._texture._isRGBD
-         }
-         set isRGBD(ee) {
-           ee !== this.isRGBD && (this._texture && (this._texture._isRGBD = ee), this.Xx()?.markAllMaterialsAsDirty(1, (ee => ee.hasTexture(this))))
-         }
-         get noMipmap() {
-           return !1
-         }
-         get lodGenerationOffset() {
-           return this._texture ? this._texture._lodGenerationOffset : 0
-         }
-         set lodGenerationOffset(ee) {
-           this._texture && (this._texture._lodGenerationOffset = ee)
- ... (74 more removed lines; see GitHub link above)
+           return {
+             positions: Int32Array.from(OW),
+             values: Float64Array.from(mW),
+             count: mW.length
```

#### 4. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L288-L324` → after: `L109-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L109-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L109-L115) · [Before (L288-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L288-L324)

```diff
-           return null
-         }
-         _rebuild() {}
-         clone() {
-           return null
-         }
-         get textureType() {
-           return this._texture && void 0 !== this._texture.type ? this._texture.type : 0
-         }
-         get textureFormat() {
-           return this._texture && void 0 !== this._texture.format ? this._texture.format : 5
-         }
-         _markAllSubMeshesAsTexturesDirty() {
-           const ee = this.Xx();
-           ee && ee.markAllMaterialsAsDirty(1)
-         }
- ... (21 more removed lines; see GitHub link above)
+         }(iW, ni)), [iW, ni]),
+         vi = yW * Ni.cameraFOV / 100,
+         gi = Zi.height > 0 ? Zi.width / Zi.height : 1,
+         Di = (0, mW.useMemo)((() => function(WW, iW) {
+           return {
+             min: [WW.min[0] - iW[0], WW.min[1] - iW[1], WW.min[2] - iW[2]],
+             max: [WW.max[0] - iW[0] + 1, WW.max[1] - iW[1] + 1, WW.max[2] - iW[2] + 1]
```

#### 5. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L326-L337` → after: `L117-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L117-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L117-L132) · [Before (L326-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L326-L337)

```diff
-         }
-         _readPixelsSync() {
-           let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-             ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-             He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-             ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
-             be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-           if (!this._texture) return null;
-           const Me = this.getSize();
-           let Ke = Me.width,
-             Ue = Me.height;
-           const Fe = this._getEngine();
+         }(pW, ni)), [pW, ni]),
+         Vi = Oi(Di, gi, vi),
+         fi = null !== Ji && void 0 !== Ji ? Ji : Vi,
+         Ci = (0, mW.useRef)({
+           fittedView: Vi,
+           fieldOfView: vi,
+           mouseSensitivity: Ni.mouseSensitivity,
+           canLock: ji
+         });
+       Ci.current = {
+         fittedView: Vi,
+         fieldOfView: vi,
+         mouseSensitivity: Ni.mouseSensitivity,
+         canLock: ji
+       };
+       const Xi = (0, mW.useMemo)((() => {
```

#### 6. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L339-L362` → after: `L134-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L134-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L134-L172) · [Before (L339-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L339-L362)

```diff
-           0 != ie && (Ke /= Math.pow(2, ie), Ue /= Math.pow(2, ie), Ke = Math.round(Ke), Ue = Math.round(Ue));
-           try {
-             return this._texture.isCube ? Fe._readTexturePixelsSync(this._texture, Ke, Ue, ee, ie, He, ye, be) : Fe._readTexturePixelsSync(this._texture, Ke, Ue, -1, ie, He, ye, be)
-           } catch (Je) {
-             return null
-           }
-         }
-         get _lodTextureHigh() {
-           return this._texture ? this._texture._lodTextureHigh : null
-         }
-         get _lodTextureMid() {
-           return this._texture ? this._texture._lodTextureMid : null
-         }
-         get _lodTextureLow() {
-           return this._texture ? this._texture._lodTextureLow : null
-         }
- ... (8 more removed lines; see GitHub link above)
+           const WW = (WW, OW, mW) => {
+               var EW, NW, PW;
+               return null !== (EW = null === (NW = iW.frequencies[WW + ni[0]]) || void 0 === NW || null === (PW = NW[OW + ni[1]]) || void 0 === PW ? void 0 : PW[mW + ni[2]]) && void 0 !== EW ? EW : 0
+             },
+             mW = function(WW, iW, OW, mW) {
+               let EW = 0,
+                 NW = 1 / 0;
+               for (const ZW of [0, 1, 2]) {
+                 if (0 === iW[ZW]) {
+                   if (WW[ZW] < 0 || WW[ZW] > OW[ZW]) return null;
+                   continue
+                 }
+                 const mW = (0 - WW[ZW]) / iW[ZW],
+                   PW = (OW[ZW] - WW[ZW]) / iW[ZW];
+                 EW = Math.max(EW, Math.min(mW, PW)), NW = Math.min(NW, Math.max(mW, PW))
+               }
+ ... (23 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L364-L382` → after: `L174-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L174-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L174-L186) · [Before (L364-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L364-L382)

```diff
-           this.Bx.notifyObservers(this), this.Bx.clear(), this.metadata = null, super.dispose()
-         }
-         serialize() {
-           let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           if (!this.name && !ee) return null;
-           const ie = ke.c.Serialize(this);
-           return ke.c.AppendSerializedAnimations(this, ie), ie
-         }
-         static WhenAllReady(ee, ie) {
-           let He = ee.length;
-           if (0 !== He)
-             for (let ye = 0; ye < ee.length; ye++) {
-               const be = ee[ye];
-               if (be.isReady()) 0 === --He && ie();
-               else {
-                 const ee = be.onLoadObservable;
- ... (3 more removed lines; see GitHub link above)
+         }), [Ki, iW, ni, fi, di, OW, dW]),
+         {
+           keyHandlers: Bi
+         } = (0, KW.d)({
+           isEnabled: Ki,
+           claimedKeyCodes: uW,
+           Xx: WW => {
+             Hi((iW => function(WW, iW) {
+               const OW = [Math.sin(WW.heading), 0, Math.cos(WW.heading)],
+                 mW = Pi(Pi(Li(OW, iW.forward), Li(ii(WW.heading), iW.right)), [0, iW.up, 0]);
+               return {
+                 ...WW,
+                 position: Pi(WW.position, mW)
```

#### 8. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L384-L458` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L188) · [Before (L384-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L384-L458)

```diff
-             } else ie()
-         }
-         static _IsScene(ee) {
-           return "Scene" === ee.getClassName()
-         }
-       }, (() => {
-         const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(ce[Symbol.metadata] ?? null) : void 0;
-         ie = [(0, be.R)()], He = [(0, be.R)()], Je = [(0, be.R)()], Re = [(0, be.R)()], qe = [(0, be.R)("hasAlpha")], fe = [(0, be.R)("getAlphaFromRGB")], Te = [(0, be.R)()], pe = [(0, be.R)("coordinatesIndex")], Xe = [(0, be.R)()], ze = [(0, be.R)("coordinatesMode")], Be = [(0,  … [truncated]
-           kind: "getter",
-           name: "wrapU",
-           static: !1,
-           private: !1,
-           access: {
-             has: ee => "wrapU" in ee,
-             get: ee => ee.wrapU
-           },
- ... (59 more removed lines; see GitHub link above)
+             }(null !== iW && void 0 !== iW ? iW : Ci.current.fittedView, WW)))
```

#### 9. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L460-L591` → after: `L190-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L190-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L190-L245) · [Before (L460-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L460-L591)

```diff
-           metadata: Me
-         }, null, xe), (0, ye.i)(ee, null, Ae, {
-           kind: "getter",
-           name: "lodGenerationScale",
-           static: !1,
-           private: !1,
-           access: {
-             has: ee => "lodGenerationScale" in ee,
-             get: ee => ee.lodGenerationScale
-           },
-           metadata: Me
-         }, null, xe), (0, ye.i)(ee, null, Ye, {
-           kind: "getter",
-           name: "linearSpecularLOD",
-           static: !1,
-           private: !1,
- ... (116 more removed lines; see GitHub link above)
+           onZoomChange: Yi
+         });
+       (0, mW.useEffect)((() => {
+         const WW = wi.current;
+         if (!WW) return;
+         let iW;
+         try {
+           iW = function(WW, iW) {
+             const OW = new EW.c(WW, !0, {
+                 stencil: !1
+               }, !0),
+               mW = new NW.c(OW),
+               [lW, AW, bW] = MW.O;
+             mW.clearColor = new wW.c(lW / 255, AW / 255, bW / 255, 1);
+             const jW = new PW.b("Heatmap3DCamera", tW.fA.Zero(), mW);
+             jW.fov = iW, jW.minZ = .05;
+ ... (40 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L594-L605` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L263-L264) · [Before (L594-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L594-L605)

```diff
-           metadata: Me
-         }, re, Qe), (0, ye.i)(null, null, Xe, {
-           kind: "field",
-           name: "optimizeUVAllocation",
-           static: !1,
-           private: !1,
-           access: {
-             has: ee => "optimizeUVAllocation" in ee,
-             get: ee => ee.optimizeUVAllocation,
-             set: (ee, ie) => {
-               ee.optimizeUVAllocation = ie
-             }
+           OW = () => {
+             ki.current && (ki.current = !1, Ui(!1))
```

#### 11. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L607-L617` → after: `L266-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L266-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L266-L326) · [Before (L607-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L607-L617)

```diff
-           metadata: Me
-         }, ei, ii), (0, ye.i)(null, null, ze, {
-           kind: "field",
-           name: "_coordinatesMode",
-           static: !1,
-           private: !1,
-           access: {
-             has: ee => "_coordinatesMode" in ee,
-             get: ee => ee._coordinatesMode,
-             set: (ee, ie) => {
-               ee._coordinatesMode = ie
+           mW = iW => {
+             const OW = !Ci.current.canLock && document.activeElement === WW && 0 !== (1 & iW.buttons);
+             if (document.pointerLockElement !== WW && !OW) return;
+             const mW = Ci.current.mouseSensitivity * JW;
+             Hi((WW => function(WW, iW, OW) {
+               const mW = 2 * Math.PI;
+               return {
+                 ...WW,
+                 heading: ((WW.heading + iW) % mW + mW) % mW,
+                 pitch: Math.max(-DW, Math.min(DW, WW.pitch + OW))
+               }
+             }(null !== WW && void 0 !== WW ? WW : Ci.current.fittedView, iW.movementX * mW, iW.movementY * mW)))
+           };
+         return document.addEventListener("pointerlockchange", iW), document.addEventListener("pointerlockerror", OW), document.addEventListener("pointermove", mW), () => {
+           document.removeEventListener("pointerlockchange", iW), document.removeEventListener("pointerlockerror", OW), document.removeEventListener("pointermove", mW), document.pointerLockElement === WW && (0, SW.e)()
+         }
+ ... (45 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L620-L631` → after: `L361-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L361-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L361-L372) · [Before (L620-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L620-L631)

```diff
-           metadata: Me
-         }, Hi, yi), (0, ye.i)(null, null, ge, {
-           kind: "field",
-           name: "wrapR",
-           static: !1,
-           private: !1,
-           access: {
-             has: ee => "wrapR" in ee,
-             get: ee => ee.wrapR,
-             set: (ee, ie) => {
-               ee.wrapR = ie
-             }
+           tabIndex: 0,
+           "aria-label": IW("3D heatmap"),
+           onClick: () => {
+             const WW = wi.current;
+             if (null === WW) return;
+             if (WW.focus({
+                 preventScroll: !0
+               }), Ai || !ji) return;
+             const iW = WW.requestPointerLock();
+             iW instanceof Promise ? iW.catch((WW => {
+               WW instanceof DOMException && ("WrongDocumentError" === WW.name || "NotSupportedError" === WW.name) && Ui(!1)
+             })) : ki.current = !0
```

#### 13. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L633-L644` → after: `L374-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L374-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L374-L381) · [Before (L633-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L633-L644)

```diff
-           metadata: Me
-         }, bi, Mi), (0, ye.i)(null, null, Oe, {
-           kind: "field",
-           name: "anisotropicFilteringLevel",
-           static: !1,
-           private: !1,
-           access: {
-             has: ee => "anisotropicFilteringLevel" in ee,
-             get: ee => ee.anisotropicFilteringLevel,
-             set: (ee, ie) => {
-               ee.anisotropicFilteringLevel = ie
-             }
+           ...Bi,
+           onKeyDown: WW => {
+             if (Ki && hW.has(WW.code)) return WW.preventDefault(), void(() => {
+               const WW = wi.current;
+               null !== WW && document.pointerLockElement === WW ? (0, SW.e)() : null === WW || void 0 === WW || WW.blur()
+             })();
+             const iW = HW[WW.code];
+             return Ki && void 0 !== iW ? (WW.preventDefault(), void XW(iW)) : Ki && (0, KW.c)("replayPlayPause", WW.code) && !(0, KW.c)("Zoom", WW.code) ? (WW.preventDefault(), void(WW.repeat || qW())) : Ki && WW.code === nW ? (WW.preventDefault(), void BW()) : Ki && WW.code ===  … [truncated]
```

#### 14. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L646-L657` → after: `L383-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L383-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L383-L384) · [Before (L646-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L646-L657)

```diff
-           metadata: Me
-         }, Ki, Ui), (0, ye.i)(null, null, we, {
-           kind: "field",
-           name: "invertZ",
-           static: !1,
-           private: !1,
-           access: {
-             has: ee => "invertZ" in ee,
-             get: ee => ee.invertZ,
-             set: (ee, ie) => {
-               ee.invertZ = ie
-             }
+           onFocus: () => {
+             Mi(!0)
```

#### 15. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L659-L670` → after: `L386-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L386-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L386-L409) · [Before (L659-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L659-L670)

```diff
-           metadata: Me
-         }, Fi, Ji), (0, ye.i)(null, null, De, {
-           kind: "field",
-           name: "lodLevelInAlpha",
-           static: !1,
-           private: !1,
-           access: {
-             has: ee => "lodLevelInAlpha" in ee,
-             get: ee => ee.lodLevelInAlpha,
-             set: (ee, ie) => {
-               ee.lodLevelInAlpha = ie
-             }
+           onBlur: () => {
+             Mi(!1), Bi.onBlur()
+           }
+         }), xi && (0, YW.jsx)("div", {
+           className: "StudioHeatmap3DUnavailable SmallTextLight",
+           children: IW("3D view isn't available in this browser.")
+         }), Ki && (0, YW.jsx)("div", {
+           className: "StudioHeatmap3DCrosshair"
+         }), (0, YW.jsx)("div", {
+           className: "StudioHeatmap3DCoordinates SmallTextLight",
+           children: fi.position.map(((WW, iW) => (WW + ni[iW]).toFixed(2))).join(" ")
+         }), yi && (0, YW.jsx)(aW, {
+           heading: fi.heading,
+           pitch: fi.pitch,
+           onViewFrom: WW => {
+             const iW = Li(WW, -1),
+ ... (8 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L672-L683` → after: `L411-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L411-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L411-L417) · [Before (L672-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L672-L683)

```diff
-           metadata: Me
-         }, oi, Ri), (0, ye.i)(null, null, ae, {
-           kind: "field",
-           name: "isRenderTarget",
-           static: !1,
-           private: !1,
-           access: {
-             has: ee => "isRenderTarget" in ee,
-             get: ee => ee.isRenderTarget,
-             set: (ee, ie) => {
-               ee.isRenderTarget = ie
-             }
+           onTurn: (WW, iW) => {
+             Hi((OW => function(WW, iW, OW, mW) {
+               return mi(WW, iW, {
+                 heading: WW.heading + OW * RW,
+                 pitch: Math.max(-DW, Math.min(DW, WW.pitch + mW * RW))
+               })
+             }(null !== OW && void 0 !== OW ? OW : Ci.current.fittedView, Ei(Di), WW, iW)))
```

#### 17. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L685-L711` → after: `L419-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L419-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L419-L617) · [Before (L685-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L685-L711)

```diff
-           metadata: Me
-         }, ki, qi), Me && Object.defineProperty(ee, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: Me
-         })
-       })(), ee.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, ee
-     })();
-     (Re = fe.prototype).forceSphericalPolynomialsRecompute ?? (Re.forceSphericalPolynomialsRecompute = (0, qe.h)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(fe.prototype, "sphericalPolynomial") || Object.defineProperty(fe.prototype, "sph … [truncated]
-   },
-   41593: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => ge,
-       e: () => Be
-     });
- ... (11 more removed lines; see GitHub link above)
+           onFlip: () => {
+             Hi((WW => function(WW, iW) {
+               return mi(WW, iW, {
+                 heading: WW.heading + Math.PI,
+                 pitch: -WW.pitch
+               })
+             }(null !== WW && void 0 !== WW ? WW : Ci.current.fittedView, Ei(Di))))
+           }
+         }), null !== Xi && (0, YW.jsx)("div", {
+           className: "StudioHeatmapMapReadout SmallTextLight",
+           children: null === GW ? IW("studio:heatmapBlockReadout", {
+             x: Xi.x,
+             y: Xi.y,
+             z: Xi.z,
+             count: (0, lW.V)(Xi.value)
+           }) : GW(Xi.x, Xi.y, Xi.z, Xi.value)
+ ... (183 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L714-L724` → after: `L620-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L620-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L620-L657) · [Before (L714-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L714-L724)

```diff
-       let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const ye = ie.width,
-         be = ie.height;
-       if (ee instanceof Float32Array) {
-         let ie = ee.byteLength / ee.BYTES_PER_ELEMENT;
-         const He = new Uint8Array(ie);
-         for (; --ie >= 0;) {
-           let ye = ee[ie];
-           ye < 0 ? ye = 0 : ye > 1 && (ye = 1), He[ie] = 255 * ye
-         }
-         ee = He
+       const OW = (OW, mW, EW) => new tW.fA(0 === OW ? WW[0] : iW[0], 0 === mW ? WW[1] : iW[1], 0 === EW ? WW[2] : iW[2]),
+         mW = [];
+       for (const EW of [0, 1])
+         for (const WW of [0, 1]) mW.push([OW(0, EW, WW), OW(1, EW, WW)], [OW(EW, 0, WW), OW(EW, 1, WW)], [OW(EW, WW, 0), OW(EW, WW, 1)]);
+       return mW
+     }
+ 
+     function Wi(WW) {
+       return [Math.sin(WW.heading) * Math.cos(WW.pitch), -Math.sin(WW.pitch), Math.cos(WW.heading) * Math.cos(WW.pitch)]
+     }
+ 
+     function ii(WW) {
+       return [Math.cos(WW), 0, -Math.sin(WW)]
+     }
+ 
+     function Oi(WW, iW, OW) {
+ ... (22 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L726-L735` → after: `L659-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L659-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L659-L669) · [Before (L726-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L726-L735)

```diff
-       const Me = document.createElement("canvas");
-       Me.width = ye, Me.height = be;
-       const Ke = Me.getContext("2d");
-       if (!Ke) return null;
-       const Ue = Ke.createImageData(ye, be);
-       if (Ue.data.set(ee), Ke.putImageData(Ue, 0, 0), He) {
-         const ee = document.createElement("canvas");
-         ee.width = ye, ee.height = be;
-         const ie = ee.getContext("2d");
-         return ie ? (ie.translate(0, be), ie.scale(1, -1), ie.drawImage(Me, 0, 0), ee.toDataURL("image/png")) : null
+     }
+ 
+     function mi(WW, iW, OW) {
+       const mW = Ni(WW),
+         EW = Ni(OW),
+         NW = Pi(WW.position, Li(iW, -1)),
+         PW = [0, 1, 2].reduce(((WW, iW) => Pi(WW, Li(EW[iW], ci(NW, mW[iW])))), [0, 0, 0]);
+       return {
+         position: Pi(iW, PW),
+         heading: OW.heading,
+         pitch: OW.pitch
```

#### 20. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L741-L746` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L674) · [Before (L741-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L741-L746)

```diff
-       let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const ye = ee.getInternalTexture();
-       if (!ye) return null;
-       const be = ee._readPixelsSync(ie, He);
-       return be ? fe(be, ee.getSize(), ye.invertY) : null
+       return Li(Pi(WW.min, WW.max), .5)
```

#### 21. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L748-L754` → after: `L676-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L676-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L676-L680) · [Before (L748-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L748-L754)

```diff
-     async function pe(ee) {
-       let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const ye = ee.getInternalTexture();
-       if (!ye) return null;
-       const be = await ee.readPixels(ie, He);
-       return be ? fe(be, ee.getSize(), ye.invertY) : null
+ 
+     function Ni(WW) {
+       const iW = Wi(WW),
+         OW = ii(WW.heading);
+       return [iW, OW, wi(iW, OW)]
```

#### 22. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1230-L1231` → after: `L683-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L683-L684) · [Before (L1230-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L1230-L1231)

```diff
-     function ge() {
-       Ee || (Ee = !0, (0, Fe.e)("BABYLON.Texture", Be), ze.c._TextureParser = Be.Parse)
+     function Pi(WW, iW) {
+       return [WW[0] + iW[0], WW[1] + iW[1], WW[2] + iW[2]]
```

#### 23. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1233-L1289` → after: `L686-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L686-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/285.js#L686-L696) · [Before (L1233-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/285.js#L1233-L1289)

```diff
-   },
-   41137: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => ye
-     });
-     class ye {
-       constructor(ee, ie) {
-         this.width = ee, this.height = ie
-       }
-       toString() {
-         return `{W: ${this.width}, H: ${this.height}}`
-       }
-       getClassName() {
-         return "Size"
-       }
-       getHashCode() {
- ... (41 more removed lines; see GitHub link above)
+ 
+     function Li(WW, iW) {
+       return [WW[0] * iW, WW[1] * iW, WW[2] * iW]
+     }
+ 
+     function ci(WW, iW) {
+       return WW[0] * iW[0] + WW[1] * iW[1] + WW[2] * iW[2]
+     }
+ 
+     function wi(WW, iW) {
+       return [WW[1] * iW[2] - WW[2] * iW[1], WW[2] * iW[0] - WW[0] * iW[2], WW[0] * iW[1] - WW[1] * iW[0]]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/286.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/286.js` (83 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469)

#### 1. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L4)

```diff
-   41350: (ee, ie, He) => {
+   41723: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L6-L7` → after: `L6-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L6-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L6-L644) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L6-L7)

```diff
-       c: () => Ke,
-       f: () => Ue
+       e: () => jW,
+       h: () => sW
+     });
+     var mW = OW(41516),
+       EW = OW(41519),
+       NW = OW(41628),
+       PW = OW(38276),
+       LW = OW(38241),
+       cW = OW(41732),
+       wW = OW(39911),
+       tW = OW(38299),
+       ZW = OW(41415),
+       xW = OW(39271),
+       lW = OW(38937),
+       AW = OW(41477),
+       bW = OW(41538);
+ ... (623 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L9-L12` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L646) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L9-L12)

```diff
-     var ye = He(39467),
-       be = He(41141),
-       Me = He(41320),
-       Ke = {};
+     var mW = OW(38241);
```

#### 4. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L14-L15` → after: `L648-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L648-L649) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L14-L15)

```diff
-       constructor(ee) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = ee, this.checkInputs = () => {}
+       constructor(WW, iW, OW) {
+         this._cameraPosition = iW, this._behavior = OW, this.activeInput = !1, this.speed = 1, this.xG = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = . … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L17-L19` → after: `L651-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L651-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L651-L656) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L17-L19)

```diff
-       add(ee) {
-         const ie = ee.getSimpleName();
-         this.attached[ie] ? ye.e.Warn("camera input of type " + ie + " already exists on camera") : (this.attached[ie] = ee, ee.camera = this.camera, ee.checkInputs && (this.checkInputs = this._addCheckInputs(ee.checkInputs.bind(ee))), this.attachedToElement && ee.attachControl(t … [truncated]
+       computeCurrentFrameDeltas() {
+         const WW = this._scene.VA().getDeltaTime(),
+           iW = this._getEffectiveDeltaMs(WW);
+         if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 ===  … [truncated]
+         this.panDeltaCurrentFrame.Z5(0), this.rotationDeltaCurrentFrame.Z5(0), this.zoomDeltaCurrentFrame = 0;
+         (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.yWW(this._calculateCurrentVelocity(this._p … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L21-L25` → after: `L658-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L658-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L658-L659) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L21-L25)

```diff
-       remove(ee) {
-         for (const ie in this.attached) {
-           const He = this.attached[ie];
-           if (He === ee) return He.detachControl(), He.camera = null, delete this.attached[ie], void this.rebuildInputCheck()
-         }
+       resetRotationVelocity() {
+         this._rotationVelocity.Z5(0), this.rotationAccumulatedPixels.Z5(0)
```

#### 7. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L27-L31` → after: `L661-L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L661-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L661-L662) · [Before (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L27-L31)

```diff
-       removeByType(ee) {
-         for (const ie in this.attached) {
-           const He = this.attached[ie];
-           He.getClassName() === ee && (He.detachControl(), He.camera = null, delete this.attached[ie], this.rebuildInputCheck())
-         }
+       resetPanVelocity() {
+         this._panVelocity.Z5(0), this.panAccumulatedPixels.Z5(0)
```

#### 8. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L33-L37` → after: `L664-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L664-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L664-L665) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L33-L37)

```diff
-       _addCheckInputs(ee) {
-         const ie = this.checkInputs;
-         return () => {
-           ie(), ee()
-         }
+       resetZoomVelocity() {
+         this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
```

#### 9. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L39-L40` → after: `L667-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L667-L668) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L39-L40)

```diff
-       attachInput(ee) {
-         this.attachedToElement && ee.attachControl(this.noPreventDefault)
+       get isInterpolating() {
+         return !!this._behavior?.isInterpolating
```

#### 10. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L42-L46` → after: `L670-L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L670-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L670-L718) · [Before (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L42-L46)

```diff
-       attachElement() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (!this.attachedToElement) {
-           ee = !Me.d.ForceAttachControlToAlwaysPreventDefault && ee, this.attachedToElement = !0, this.noPreventDefault = ee;
-           for (const ie in this.attached) this.attached[ie].attachControl(ee)
+       getFrameIndependentDecay(WW) {
+         const iW = this._scene.VA().getDeltaTime(),
+           OW = this._getEffectiveDeltaMs(iW),
+           mW = 1e3 / this.referenceFrameRate;
+         return Math.pow(WW, OW / mW)
+       }
+       getFrameIndependentInputScale(WW) {
+         const iW = 1 - WW;
+         if (iW <= 0) return 1;
+         return (1 - this.getFrameIndependentDecay(WW)) / iW
+       }
+       _getEffectiveDeltaMs(WW) {
+         return WW > 0 ? WW : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
+       }
+       _calculateCurrentVelocity(WW, iW, OW) {
+         let mW = WW;
+ ... (33 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L49-L52` → after: `L721-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L721-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L721-L728) · [Before (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L49-L52)

```diff
-       detachElement() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         for (const ie in this.attached) this.attached[ie].detachControl(), ee && (this.attached[ie].camera = null);
-         this.attachedToElement = !1
+       getEntries(WW, iW, OW) {
+         const mW = [],
+           EW = this.inputMap;
+         for (let NW = 0; NW < EW.length; NW++) {
+           const PW = EW[NW];
+           PW.source === WW && PW.interaction === iW && this._entryConditionsMatch(PW, OW) && mW.push(PW)
+         }
+         return mW
```

#### 12. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L54-L58` → after: `L730-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L730-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L730-L757) · [Before (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L54-L58)

```diff
-       rebuildInputCheck() {
-         this.checkInputs = () => {};
-         for (const ee in this.attached) {
-           const ie = this.attached[ee];
-           ie.checkInputs && (this.checkInputs = this._addCheckInputs(ie.checkInputs.bind(ie)))
+       addEntry(WW) {
+         const iW = this._entrySpecificity(WW);
+         let OW = this.inputMap.length;
+         for (let mW = 0; mW < this.inputMap.length; mW++)
+           if (this._entrySpecificity(this.inputMap[mW]) < iW) {
+             OW = mW;
+             break
+           } this.inputMap.splice(OW, 0, WW)
+       }
+       setInteraction(WW, iW, OW) {
+         const mW = this.resolveInteraction(WW, iW);
+         return mW && this._entryCoversAllConditionsOf(mW, iW) ? (mW.interaction = OW, !0) : (this.addEntry({
+           source: WW,
+           ...iW ?? {},
+           interaction: OW
+         }), !0)
+ ... (12 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L61-L62` → after: `L761-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L761-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L761-L768) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L61-L62)

```diff
-       clear() {
-         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
+       setInteractions(WW, iW, OW) {
+         let mW = 0;
+         const EW = this.inputMap;
+         for (let NW = 0; NW < EW.length; NW++) {
+           const PW = EW[NW];
+           PW.source === WW && this._entryMatches(PW, iW) && (PW.interaction = OW, mW++)
+         }
+         return mW
```

#### 14. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L64-L69` → after: `L770-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L770-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L770-L779) · [Before (L64-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L64-L69)

```diff
-       serialize(ee) {
-         const ie = {};
-         for (const He in this.attached) {
-           const ee = this.attached[He],
-             ye = be.c.Serialize(ee);
-           ie[ee.getClassName()] = ye
+       _entryMatches(WW, iW) {
+         switch (WW.source) {
+           case "pointer":
+             return (void 0 === WW.button || WW.button === iW?.button) && this._matchModifiers(WW.modifiers, iW?.modifiers);
+           case "wheel":
+             return this._matchModifiers(WW.modifiers, iW?.modifiers);
+           case "touch":
+             return void 0 === WW.touchCount || WW.touchCount === iW?.touchCount;
+           case "keyboard":
+             return (void 0 === WW.key || (Array.isArray(WW.key) ? -1 !== WW.key.indexOf(iW?.key ?? -1) : WW.key === iW?.key)) && this._matchModifiers(WW.modifiers, iW?.modifiers)
```

#### 15. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L73-L90` → after: `L782-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L782-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L782-L794) · [Before (L73-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L73-L90)

```diff
-       parse(ee) {
-         const ie = ee.inputsmgr;
-         if (ie) {
-           this.clear();
-           for (const ee in ie) {
-             const He = Ke[ee];
-             if (He) {
-               const ye = ie[ee],
-                 Me = be.c.Parse((() => new He), ye, null);
-               this.add(Me)
-             }
-           }
-         } else
-           for (const He in this.attached) {
-             const ie = Ke[this.attached[He].getClassName()];
-             if (ie) {
- ... (2 more removed lines; see GitHub link above)
+       _entryConditionsMatch(WW, iW) {
+         if (!iW) return !0;
+         switch (WW.source) {
+           case "pointer":
+             return (!("button" in iW) || WW.button === iW.button) && (!("modifiers" in iW) || this._entryModifiersMatch(WW.modifiers, iW.modifiers));
+           case "wheel":
+             return !("modifiers" in iW) || this._entryModifiersMatch(WW.modifiers, iW.modifiers);
+           case "touch":
+             return !("touchCount" in iW) || WW.touchCount === iW.touchCount;
+           case "keyboard":
+             if ("key" in iW) {
+               if (void 0 === WW.key) return void 0 === iW.key;
+               if (void 0 === iW.key || (Array.isArray(WW.key) ? -1 === WW.key.indexOf(iW.key) : WW.key !== iW.key)) return !1
```

#### 16. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L92` → after: `L796-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L796-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L796-L808) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L92)

```diff
-           }
+             return !("modifiers" in iW) || this._entryModifiersMatch(WW.modifiers, iW.modifiers)
+         }
+       }
+       _entrySpecificity(WW) {
+         let iW = 0;
+         return "button" in WW && void 0 !== WW.button && iW++, "key" in WW && void 0 !== WW.key && iW++, "touchCount" in WW && void 0 !== WW.touchCount && iW++, "modifiers" in WW && WW.modifiers && iW++, iW
+       }
+       _matchModifiers(WW, iW) {
+         return !WW || (void 0 === WW.ctrl || WW.ctrl === (iW?.ctrl ?? !1)) && ((void 0 === WW.shift || WW.shift === (iW?.shift ?? !1)) && (void 0 === WW.alt || WW.alt === (iW?.alt ?? !1)))
+       }
+       _entryModifiersMatch(WW, iW) {
+         if (!iW) return !WW;
+         return void 0 !== iW.ctrl || void 0 !== iW.shift || void 0 !== iW.alt ? (void 0 === iW.ctrl || WW?.ctrl === iW.ctrl) && ((void 0 === iW.shift || WW?.shift === iW.shift) && (void 0 === iW.alt || WW?.alt === iW.alt)) : !WW || void 0 === WW.ctrl && void 0 === WW.shift && voi … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L96` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L812) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L96)

```diff
-   42210: (ee, ie, He) => {
+   41719: (WW, iW, OW) => {
```

#### 18. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L98` → after: `L814-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L814-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L814-L815) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L98)

```diff
-       c: () => Be
+       b: () => UW,
+       d: () => bW
```

#### 19. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L100-L115` → after: `L817-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L817-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L817-L857) · [Before (L100-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L100-L115)

```diff
-     var ye = He(41113),
-       be = He(41121),
-       Me = He(40995),
-       Ke = He(37917),
-       Ue = He(41111),
-       Fe = He(41593),
-       Je = He(37949),
-       oe = He(37931),
-       Re = He(41141),
-       ke = He(40924),
-       qe = He(39467),
-       fe = He(41159),
-       Te = He(38745),
-       pe = He(41191);
-     var Xe = He(41e3);
-     let ze = !1;
+     var mW = OW(41516),
+       EW = OW(41519),
+       NW = OW(41723),
+       PW = OW(38241),
+       LW = OW(38249),
+       cW = OW(41739),
+       wW = OW(41732),
+       tW = OW(41743),
+       ZW = OW(41747);
+     class xW extends tW.e {
+       constructor(WW, iW, OW) {
+         super(WW, iW, OW), this.input = new ZW.d({
+           translate: (WW, iW, OW) => {
+             this.panAccumulatedPixels.x += WW, this.panAccumulatedPixels.y += iW, this.panAccumulatedPixels.z += OW
+           },
+           rotate: (WW, iW) => {
+ ... (25 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L118-L125` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L860) · [Before (L118-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L118-L125)

```diff
-         let ie, He, Je, Be, Ee, ge, Oe, de, We, te = Ue.c,
-           Ze = [],
-           we = [],
-           De = [],
-           Pe = [],
-           Ae = [],
-           Ye = [],
-           Ve = [],
+         let iW, OW, wW, tW, ZW = NW.e,
```

#### 21. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L135-L243` → after: `L870-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L870-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L870-L871) · [Before (L135-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L135-L243)

```diff
-           set boundingBoxSize(ee) {
-             if (this._boundingBoxSize && this._boundingBoxSize.equals(ee)) return;
-             this._boundingBoxSize = ee;
-             const ie = this.Xx();
-             ie && ie.markAllMaterialsAsDirty(1)
-           }
-           get boundingBoxSize() {
-             return this._boundingBoxSize
-           }
-           set rotationY(ee) {
-             this._rotationY = ee, this.setReflectionTextureMatrix(Ke.b.RotationY(this._rotationY))
-           }
-           get rotationY() {
-             return this._rotationY
-           }
-           get noMipmap() {
- ... (93 more removed lines; see GitHub link above)
+           get inertia() {
+             return this._targetInertia
```

#### 22. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L245-L302` → after: `L873-L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L873-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L873-L874) · [Before (L245-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L245-L302)

```diff
-           getClassName() {
-             return "CubeTexture"
-           }
-           updateURL(ee) {
-             let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-               He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-               ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-               Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-               Ke = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-               Ue = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               Fe = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
-             this.name && !this.name.startsWith("data:") || (this.name = ee), this.url = ee, ie && (this._forcedExtension = ie);
-             const Je = ee.lastIndexOf("."),
-               oe = ie || (Je > -1 ? ee.substring(Je).toLowerCase() : ""),
-               Re = 0 === oe.indexOf(".dds"),
- ... (42 more removed lines; see GitHub link above)
+           set inertia(WW) {
+             this._targetInertia = WW, this.movement && (this.movement.panInertia = WW, this.movement.rotationInertia = WW)
```

#### 23. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L304-L311` → after: `L876-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L876-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L876-L877) · [Before (L304-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L304-L311)

```diff
-           clone() {
-             let ie = 0;
-             const He = this.irradianceTexture,
-               ye = Re.c.Clone((() => {
-                 const He = new ee(this.url, this.Xx() || this._getEngine(), this._extensions, this._noMipmap, this._files);
-                 return ie = He.uniqueId, He
-               }), this);
-             return ye.uniqueId = ie, He && !this.irradianceTexture && (this.irradianceTexture = He), ye
+           constructor(WW, iW, OW) {
+             super(WW, iW, OW, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new PW.q(0, 0, 0), this.cameraRotation = new PW.m(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, mW.g)(this, bW, !1), this.rotation =  … [truncated]
```

#### 24. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L313-L346` → after: `L879-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L879-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L879-L949) · [Before (L313-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L313-L346)

```diff
-         }, (() => {
-           const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(te[Symbol.metadata] ?? null) : void 0;
-           ie = [(0, be.R)()], He = [(0, be.P)()], Je = [(0, be.P)()], Be = [(0, be.R)("rotationY")], Ee = [(0, be.R)("files")], ge = [(0, be.R)("forcedExtension")], Oe = [(0, be.R)("extensions")], de = [(0, be.z)("textureMatrix")], We = [(0, be.z)("textureMatrixRefraction")], (0, … [truncated]
-             kind: "getter",
-             name: "boundingBoxSize",
-             static: !1,
-             private: !1,
-             access: {
-               has: ee => "boundingBoxSize" in ee,
-               get: ee => ee.boundingBoxSize
-             },
-             metadata: Me
-           }, null, Ze), (0, ye.i)(ee, null, Be, {
-             kind: "setter",
-             name: "rotationY",
-             static: !1,
- ... (18 more removed lines; see GitHub link above)
+           getFrontPosition(WW) {
+             this.getWorldMatrix();
+             const iW = PW.l.fA[0],
+               OW = PW.l.fA[1];
+             return OW.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(OW, iW), iW.scaleInPlace(WW), this.globalPosition.add(iW)
+           }
+           _getLockedTargetPosition() {
+             if (!this.lockedTarget) return null;
+             if (this.lockedTarget.absolutePosition) {
+               const WW = this.lockedTarget;
+               WW.computeWorldMatrix().getTranslationToRef(WW.absolutePosition)
+             }
+             return this.lockedTarget.absolutePosition || this.lockedTarget
+           }
+           storeState() {
+             return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
+ ... (55 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L348-L359` → after: `L951-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L951-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L951-L952) · [Before (L348-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L348-L359)

```diff
-             },
-             metadata: Me
-           }, we, De), (0, ye.i)(null, null, He, {
-             kind: "field",
-             name: "boundingBoxPosition",
-             static: !1,
-             private: !1,
-             access: {
-               has: ee => "boundingBoxPosition" in ee,
-               get: ee => ee.boundingBoxPosition,
-               set: (ee, ie) => {
-                 ee.boundingBoxPosition = ie
+               if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.HJ(this._deferredRotationUpdate), this.rotationQuaternion) {
+                 this._deferredRotationUpdate.lengthSquared() && (PW.g.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 :  … [truncated]
```

#### 26. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L361-L372` → after: `L954-L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L954-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L954-L991) · [Before (L361-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L361-L372)

```diff
-             },
-             metadata: Me
-           }, Pe, Ae), (0, ye.i)(null, null, Ee, {
-             kind: "field",
-             name: "_files",
-             static: !1,
-             private: !1,
-             access: {
-               has: ee => "_files" in ee,
-               get: ee => ee._files,
-               set: (ee, ie) => {
-                 ee._files = ie
+             }
+             this.cameraDirection.Z5(0), this.cameraRotation.set(0, 0), super._checkInputs()
+           }
+           _updateCameraRotationMatrix() {
+             this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : PW.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
+           }
+           _rotateUpVectorWithCameraRotationMatrix() {
+             return PW.q.TransformNormalToRef(PW.q.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
+           }
+           _getViewMatrix() {
+             return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuat … [truncated]
+           }
+           _computeViewMatrix(WW, iW, OW) {
+             if (this.bD().useRightHandedSystem ? PW.d.LookAtRHToRef(WW, iW, OW, this._viewMatrix) : PW.d.LookAtLHToRef(WW, iW, OW, this._viewMatrix), this.parent) {
+               const WW = this.parent.getWorldMatrix();
+               this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(WW, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
+ ... (22 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L374-L376` → after: `L993-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L993-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L993-L1008) · [Before (L374-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L374-L376)

```diff
-             },
-             metadata: Me
-           }, Ye, Ve), (0, ye.i)(null, null, ge, {
+               case NW.e.RIG_MODE_VR:
+                 WW.rotationQuaternion && iW.rotationQuaternion && this.rotationQuaternion ? (WW.rotationQuaternion.HJ(this.rotationQuaternion), iW.rotationQuaternion.HJ(this.rotationQuaternion)) : (WW.rotation.HJ(this.rotation), iW.rotation.HJ(this.rotation)), WW.position.HJ(this … [truncated]
+             }
+             super._updateRigCameras()
+           }
+           _getRigCamPositionAndTarget(iW, OW) {
+             this.getTarget().subtractToRef(this.position, WW._TargetFocalPoint), WW._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
+             const mW = WW._TargetFocalPoint.addInPlace(this.position);
+             PW.d.TranslationToRef(-mW.x, -mW.y, -mW.z, WW._TargetTransformMatrix), WW._TargetTransformMatrix.multiplyToRef(PW.d.RotationAxis(OW.upVector, iW), WW._RigCamTransformMatrix), PW.d.TranslationToRef(mW.x, mW.y, mW.z, WW._TargetTransformMatrix), WW._RigCamTransformMatrix … [truncated]
+           }
+           getClassName() {
+             return "TargetCamera"
+           }
+         }, (() => {
+           const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZW[Symbol.metadata] ?? null) : void 0;
+           iW = [(0, EW.M)()], OW = [(0, EW.K)()], wW = [(0, EW.M)()], tW = [(0, EW.z)("lockedTargetId")], (0, mW.e)(null, null, iW, {
```

#### 28. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L378` → after: `L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1010) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L378)

```diff
-             name: "_forcedExtension",
+             name: "updateUpVectorFromRotation",
```

#### 29. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L382-L383` → after: `L1014-L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1014-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1014-L1015) · [Before (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L382-L383)

```diff
-               has: ee => "_forcedExtension" in ee,
-               get: ee => ee._forcedExtension,
+               has: WW => "updateUpVectorFromRotation" in WW,
+               get: WW => WW.updateUpVectorFromRotation,
```

#### 30. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L385` → after: `L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1017) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L385)

```diff
-                 ee._forcedExtension = ie
+                 WW.updateUpVectorFromRotation = iW
```

#### 31. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L389` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1021) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L389)

```diff
-           }, ae, ce), (0, ye.i)(null, null, Oe, {
+           }, bW, jW), (0, mW.e)(null, null, OW, {
```

#### 32. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L391` → after: `L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1023) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L391)

```diff
-             name: "_extensions",
+             name: "rotation",
```

#### 33. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L395-L396` → after: `L1027-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1027-L1028) · [Before (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L395-L396)

```diff
-               has: ee => "_extensions" in ee,
-               get: ee => ee._extensions,
+               has: WW => "rotation" in WW,
+               get: WW => WW.rotation,
```

#### 34. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L398` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1030) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L398)

```diff
-                 ee._extensions = ie
+                 WW.rotation = iW
```

#### 35. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L402` → after: `L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1034) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L402)

```diff
-           }, xe, Le), (0, ye.i)(null, null, de, {
+           }, UW, kW), (0, mW.e)(null, null, wW, {
```

#### 36. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L404` → after: `L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1036) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L404)

```diff
-             name: "_textureMatrix",
+             name: "speed",
```

#### 37. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L408-L409` → after: `L1040-L1041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1040-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1040-L1041) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L408-L409)

```diff
-               has: ee => "_textureMatrix" in ee,
-               get: ee => ee._textureMatrix,
+               has: WW => "speed" in WW,
+               get: WW => WW.speed,
```

#### 38. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L411` → after: `L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1043) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L411)

```diff
-                 ee._textureMatrix = ie
+                 WW.speed = iW
```

#### 39. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L415` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1047) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L415)

```diff
-           }, Ce, ve), (0, ye.i)(null, null, We, {
+           }, sW, MW), (0, mW.e)(null, null, tW, {
```

#### 40. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L417` → after: `L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1049) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L417)

```diff
-             name: "_textureMatrixRefraction",
+             name: "lockedTarget",
```

#### 41. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L421-L422` → after: `L1053-L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1053-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1053-L1054) · [Before (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L421-L422)

```diff
-               has: ee => "_textureMatrixRefraction" in ee,
-               get: ee => ee._textureMatrixRefraction,
+               has: WW => "lockedTarget" in WW,
+               get: WW => WW.lockedTarget,
```

#### 42. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L424` → after: `L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1056) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L424)

```diff
-                 ee._textureMatrixRefraction = ie
+                 WW.lockedTarget = iW
```

#### 43. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L434` → after: `L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1066) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L434)

```diff
-         })(), ee
+         })(), WW._RigCamTransformMatrix = new PW.d, WW._TargetTransformMatrix = new PW.d, WW._TargetFocalPoint = new PW.q, WW
```

#### 44. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L438-L441` → after: `L1070-L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L1070-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/286.js#L1070-L1071) · [Before (L438-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/286.js#L438-L441)

```diff
-     function ge(ee, ie, He) {
-       let ye = "";
-       for (const be of ee) ye += be;
-       return new Be(ye, ie, null, He, ee)
+     function UW() {
+       jW || (jW = !0, wW.d.AddNodeConstructor("TargetCamera", ((WW, iW) => () => new bW(WW, PW.q.Zero(), iW))))
```
