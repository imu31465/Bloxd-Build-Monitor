# Changed — Bundle Modifications Report (Part 016 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `16 / 65` (**294** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/250.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/250.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977)

#### 27. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L695-L696` → after: `L887-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L887-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/250.js#L887-L949) · [Before (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/250.js#L695-L696)

```diff
-     function gz(DD, zD) {
-       return [DD[1] * zD[2] - DD[2] * zD[1], DD[2] * zD[0] - DD[0] * zD[2], DD[0] * zD[1] - DD[1] * zD[0]]
+     function Pp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       const op = new xp.c(pp, cp),
+         {
+           positions: Ip,
+           normals: Sp,
+           uvs: Yp,
+           indices: Dp
+         } = ip;
+       return Object.assign(new Lp.d, {
+         positions: Ip,
+         normals: Sp,
+         uvs: Yp,
+         indices: Dp
+       }).applyToMesh(op, Op), op
+     }
+ ... (47 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/251.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/251.js` (55 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b)

#### 1. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L4-L7` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L4-L8) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L4-L7)

```diff
-   40148: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => GD,
-       d: () => MD
+   41295: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       openMobLineupPreview: () => hp,
+       openMobPreview: () => bp,
+       openPetPreview: () => ap
```

#### 2. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L9-L614` → after: `L10-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L10-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L10-L37) · [Before (L9-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L9-L614)

```diff
-     var pD = wD(39921),
-       sD = wD(39927),
-       KD = wD(40043),
-       rD = wD(37119),
-       LD = wD(37079),
-       cD = wD(40155),
-       gD = wD(38662),
-       RD = wD(37134),
-       AD = wD(39808),
-       UD = wD(38074),
-       fD = wD(37752),
-       ID = wD(39886),
-       BD = wD(39939);
-     let GD = (() => {
-       var DD;
-       let zD, wD, RD, GD, hD, nD, MD, OD, JD, ED, QD, XD, VD, PD, CD, xD, TD, bD, jD = cD.b,
- ... (590 more removed lines; see GitHub link above)
+     var Op = cp(40024),
+       op = cp(40289),
+       Ip = cp(41300),
+       Sp = cp(37479),
+       xp = cp(37313),
+       Lp = cp(40443),
+       Yp = cp(41325),
+       Dp = cp(38690),
+       Ap = cp(37403),
+       Pp = cp(37385),
+       Wp = cp(37305),
+       yp = cp(38596),
+       Up = cp(38588),
+       wp = cp(38317),
+       vp = cp(38365),
+       tp = cp(38343),
+ ... (12 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L616-L634` → after: `L39-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L39-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L39-L56) · [Before (L616-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L616-L634)

```diff
-     function hD(DD, zD) {
-       const wD = DD.type,
-         pD = GD.GetConstructorFromName(wD, DD.name, zD, DD.interaxial_distance, DD.isStereoscopicSideBySide),
-         sD = BD.d.Parse(pD, DD, zD);
-       if (void 0 !== DD.parentId && (sD._waitingParentId = DD.parentId), void 0 !== DD.parentInstanceIndex && (sD._waitingParentInstanceIndex = DD.parentInstanceIndex), sD.inputs && (sD.inputs.parse(DD), sD._setupInputs()), DD.upVector && (sD.upVector = LD.s.FromArray(DD.upVector … [truncated]
-         const zD = DD.interaxial_distance ? {
-           interaxialDistance: DD.interaxial_distance
-         } : {};
-         sD.setCameraRigMode(DD.cameraRigMode, zD)
-       }
-       if (DD.animations) {
-         for (let zD = 0; zD < DD.animations.length; zD++) {
-           const wD = DD.animations[zD],
-             pD = (0, RD.e)("BABYLON.Animation");
-           pD && sD.animations.push(pD.Parse(wD))
-         }
- ... (3 more removed lines; see GitHub link above)
+     function Xp() {
+       if (null !== Mp) return Mp;
+       const pp = document.createElement("canvas");
+       pp.classList.add("MobPreviewCanvas");
+       const ip = new Op.d(pp, !0, {
+         preserveDrawingBuffer: !0
+       });
+       ip.lOp = (0, dp.g)().WU.engine.lOp;
+       const cp = new op.c(ip);
+       cp.clearColor = new Sp.b(0, 0, 0, 0), cp.ambientColor = new Sp.Color3(1, 1, 1);
+       const Yp = new Ip.c("Gw", Math.PI / 2, Math.PI / 2, jp, xp.Zy.Zero(), cp),
+         Dp = new Lp.d("light", new xp.Zy(-.1, 1, -.3), cp);
+       return Dp.diffuse = new Sp.Color3(1, 1, 1), Dp.specular = new Sp.Color3(1, 1, 1), Dp.groundColor = new Sp.Color3(.5, .5, .5), Mp = {
+         engine: ip,
+         pw: cp,
+         canvas: pp,
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L638-L639` → after: `L59-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L59-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L59-L62) · [Before (L638-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L638-L639)

```diff
-     function MD() {
-       nD || (nD = !0, GD.Parse = hD)
+     function lp(pp) {
+       return Cp[pp] ??= (0, wp.u)(pp, Xp().pw, !0).catch((ip => {
+         throw delete Cp[pp], ip
+       })), Cp[pp]
```

#### 5. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L641-L682` → after: `L64-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L64-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L64-L121) · [Before (L641-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L641-L682)

```diff
-   },
-   40162: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => sD
-     });
-     var pD = wD(37079);
-     class sD {
-       constructor(DD, zD, wD) {
-         this._cameraPosition = zD, this._behavior = wD, this.activeInput = !1, this.speed = 1, this.pY = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = . … [truncated]
-       }
-       computeCurrentFrameDeltas() {
-         const DD = this._scene.iI().getDeltaTime(),
-           zD = this._getEffectiveDeltaMs(DD);
-         if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 ===  … [truncated]
-         this.panDeltaCurrentFrame.I9(0), this.rotationDeltaCurrentFrame.I9(0), this.zoomDeltaCurrentFrame = 0;
-         (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.Z2(this._calculateCurrentVelocity(this._pa … [truncated]
- ... (26 more removed lines; see GitHub link above)
+ 
+     function Qp(pp) {
+       let ip = Ep.get(pp);
+       return ip || (ip = Hp.w[pp].loadModel(Xp().pw, !1).then((pp => (pp.eC(!1), pp)), (ip => {
+         throw Ep.delete(pp), ip
+       })), Ep.set(pp, ip)), ip
+     }
+ 
+     function Jp(pp) {
+       var ip, cp, Op;
+       let {
+         mobType: op,
+         variation: Ip,
+         animation: Sp
+       } = pp, Lp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, jp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const Rp = null !== (ip = null === Lp || void 0 === Lp ? void 0 : Lp.size) && void 0 !== ip ? ip : 1,
+ ... (42 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L684-L694` → after: `L123-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L123-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L123-L159) · [Before (L684-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L684-L694)

```diff
-       _calculateCurrentVelocity(DD, zD, wD) {
-         let pD = DD;
-         const sD = this._scene.iI().getDeltaTime(),
-           KD = this._getEffectiveDeltaMs(sD);
-         if (0 === KD) return pD;
-         const rD = this.getFrameIndependentDecay(wD);
-         if (pD *= rD, 0 !== zD || this.activeInput) {
-           const DD = 1 - wD;
-           pD += zD / KD * (DD > 0 ? (1 - rD) / DD : 1)
-         } else Math.abs(pD) < 1e-6 && (pD = 0);
-         return pD
+     }
+ 
+     function Bp(pp, ip) {
+       return Jp({
+         mobType: "NPC",
+         variation: null,
+         animation: pp.animation
+       }, pp, ip)
+     }
+ 
+     function Np(pp) {
+       let {
+         mobType: ip,
+         variation: cp,
+         metaInfo: Op,
+         tamed: op
+ ... (21 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L704-L745` → after: `L164-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L164-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L164-L172) · [Before (L704-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L704-L745)

```diff
-         this.inputMap = [], this.handlers = DD, this._createDefaultEntries = zD, this.resetInputMap()
-       }
-       resolveInteraction(DD, zD) {
-         for (const wD of this.inputMap)
-           if (wD.source === DD && this._entryMatches(wD, zD)) return wD;
-         return null
-       }
-       resetInputMap() {
-         this.inputMap = this._createDefaultEntries?.() ?? []
-       }
-       getEntry(DD, zD, wD) {
-         const pD = this.inputMap;
-         for (let sD = 0; sD < pD.length; sD++) {
-           const KD = pD[sD];
-           if (KD.source === DD && KD.interaction === zD && this._entryConditionsMatch(KD, wD)) return KD
-         }
- ... (26 more removed lines; see GitHub link above)
+         this.place = ip, this.remove = null;
+         const {
+           engine: cp,
+           pw: Op,
+           canvas: op
+         } = Xp();
+         pp.appendChild(op), cp.resize(), cp.runRenderLoop((() => {
+           Op.render()
+         }))
```

#### 8. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L747-L759` → after: `L174-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L174-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L174-L176) · [Before (L747-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L747-L759)

```diff
-       _entryCoversAllConditionsOf(DD, zD) {
-         if (!zD) return !0;
-         const wD = DD;
-         for (const pD of Object.keys(zD)) {
-           const DD = zD[pD];
-           if (void 0 !== DD)
-             if ("modifiers" === pD) {
-               const zD = wD.modifiers ?? {};
-               for (const wD of Object.keys(DD))
-                 if (void 0 !== DD[wD] && void 0 === zD[wD]) return !1
-             } else if (void 0 === wD[pD]) return !1
-         }
-         return !0
+       show(pp) {
+         var ip;
+         null === (ip = this.remove) || void 0 === ip || ip.call(this), this.remove = this.place(pp)
```

#### 9. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L761-L768` → after: `L178-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L178-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L178-L183) · [Before (L761-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L761-L768)

```diff
-       setInteractions(DD, zD, wD) {
-         let pD = 0;
-         const sD = this.inputMap;
-         for (let KD = 0; KD < sD.length; KD++) {
-           const rD = sD[KD];
-           rD.source === DD && this._entryMatches(rD, zD) && (rD.interaction = wD, pD++)
-         }
-         return pD
+       resize(pp, ip) {
+         const {
+           engine: cp,
+           canvas: Op
+         } = Xp();
+         Op.width = pp, Op.height = ip, cp.resize()
```

#### 10. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L770-L780` → after: `L185-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L185-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L185-L187) · [Before (L770-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L770-L780)

```diff
-       _entryMatches(DD, zD) {
-         switch (DD.source) {
-           case "pointer":
-             return (void 0 === DD.button || DD.button === zD?.button) && this._matchModifiers(DD.modifiers, zD?.modifiers);
-           case "wheel":
-             return this._matchModifiers(DD.modifiers, zD?.modifiers);
-           case "touch":
-             return void 0 === DD.touchCount || DD.touchCount === zD?.touchCount;
-           case "keyboard":
-             return (void 0 === DD.key || (Array.isArray(DD.key) ? -1 !== DD.key.indexOf(zD?.key ?? -1) : DD.key === zD?.key)) && this._matchModifiers(DD.modifiers, zD?.modifiers)
-         }
+       close() {
+         var pp;
+         Xp().engine.stopRenderLoop(), null === (pp = this.remove) || void 0 === pp || pp.call(this), this.remove = null
```

#### 11. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L782-L797` → after: `L189-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L189-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L189-L195) · [Before (L782-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L782-L797)

```diff
-       _entryConditionsMatch(DD, zD) {
-         if (!zD) return !0;
-         switch (DD.source) {
-           case "pointer":
-             return (!("button" in zD) || DD.button === zD.button) && (!("modifiers" in zD) || this._entryModifiersMatch(DD.modifiers, zD.modifiers));
-           case "wheel":
-             return !("modifiers" in zD) || this._entryModifiersMatch(DD.modifiers, zD.modifiers);
-           case "touch":
-             return !("touchCount" in zD) || DD.touchCount === zD.touchCount;
-           case "keyboard":
-             if ("key" in zD) {
-               if (void 0 === DD.key) return void 0 === zD.key;
-               if (void 0 === zD.key || (Array.isArray(DD.key) ? -1 === DD.key.indexOf(zD.key) : DD.key !== zD.key)) return !1
-             }
-             return !("modifiers" in zD) || this._entryModifiersMatch(DD.modifiers, zD.modifiers)
-         }
+     }
+     class fp {
+       constructor(pp) {
+         this.preview = void 0, this.view = {
+           figures: [],
+           shown: []
+         }, this.aspect = 1, this.placed = [], this.preview = new Tp(pp, (() => () => {}))
```

#### 12. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L799-L801` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L197-L198) · [Before (L799-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L799-L801)

```diff
-       _entrySpecificity(DD) {
-         let zD = 0;
-         return "button" in DD && void 0 !== DD.button && zD++, "key" in DD && void 0 !== DD.key && zD++, "touchCount" in DD && void 0 !== DD.touchCount && zD++, "modifiers" in DD && DD.modifiers && zD++, zD
+       show(pp) {
+         pp.figures !== this.view.figures && this.preload(pp.figures), this.view = pp, this.place()
```

#### 13. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L803-L804` → after: `L200-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L200-L201) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L803-L804)

```diff
-       _matchModifiers(DD, zD) {
-         return !DD || (void 0 === DD.ctrl || DD.ctrl === (zD?.ctrl ?? !1)) && ((void 0 === DD.shift || DD.shift === (zD?.shift ?? !1)) && (void 0 === DD.alt || DD.alt === (zD?.alt ?? !1)))
+       resize(pp, ip) {
+         this.preview.resize(pp, ip), this.aspect = pp / ip, this.place()
```

#### 14. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L806-L808` → after: `L203-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L203-L206) · [Before (L806-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L806-L808)

```diff
-       _entryModifiersMatch(DD, zD) {
-         if (!zD) return !DD;
-         return void 0 !== zD.ctrl || void 0 !== zD.shift || void 0 !== zD.alt ? (void 0 === zD.ctrl || DD?.ctrl === zD.ctrl) && ((void 0 === zD.shift || DD?.shift === zD.shift) && (void 0 === zD.alt || DD?.alt === zD.alt)) : !DD || void 0 === DD.ctrl && void 0 === DD.shift && voi … [truncated]
+       close() {
+         this.preview.close();
+         for (const pp of this.placed) null === pp || void 0 === pp || pp.remove();
+         this.placed = []
```

#### 15. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L810-L833` → after: `L208-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L208-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L208-L212) · [Before (L810-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L810-L833)

```diff
-     }
-   },
-   40146: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => hD,
-       g: () => BD
-     });
-     var pD = wD(39921),
-       sD = wD(39927),
-       KD = wD(40148),
-       rD = wD(37079),
-       LD = wD(37088),
-       cD = wD(40157),
-       gD = wD(40155),
-       RD = wD(40162),
-       AD = wD(40171);
- ... (8 more removed lines; see GitHub link above)
+       preload(pp) {
+         const ip = () => {};
+         lp("NPC").catch(ip);
+         for (const {
+             qm: cp
```

#### 16. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L835` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L214) · [Before (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L835)

```diff
-         }, (() => this._createDefaultInputMap()))
+           of pp) null !== cp && Qp(cp).catch(ip)
```

#### 17. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L837-L853` → after: `L216-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L216-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L216-L233) · [Before (L837-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L837-L853)

```diff
-       _createDefaultInputMap() {
-         return [{
-           source: "pointer",
-           interaction: "rotate"
-         }, {
-           source: "keyboard",
-           interaction: "translate"
-         }, {
-           source: "keyboard",
-           interaction: "rotate"
-         }, {
-           source: "touch",
-           interaction: "rotate"
-         }, {
-           source: "touch",
-           interaction: "translate"
- ... (1 more removed lines; see GitHub link above)
+       place() {
+         const {
+           figures: pp,
+           shown: ip
+         } = this.view, cp = pp.map(((cp, Op) => {
+           var op;
+           const Ip = null !== (op = this.placed[Op]) && void 0 !== op ? op : null;
+           if (!ip[Op]) return null === Ip || void 0 === Ip || Ip.remove(), null;
+           const Sp = (xp = (Op + .5) / pp.length, Lp = this.aspect, (.5 - xp) * (2 * jp * Math.tan(Xp().camera.fov / 2)) * Lp);
+           var xp, Lp;
+           return null !== Ip && Ip.figure === cp && Ip.x === Sp ? Ip : (null === Ip || void 0 === Ip || Ip.remove(), {
+             figure: cp,
+             x: Sp,
+             remove: Bp(cp, Sp)
+           })
+         }));
+ ... (2 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1070-L1071` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L237-L238) · [Before (L1070-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L1070-L1071)

```diff
-     function hD() {
-       GD || (GD = !0, gD.b.AddNodeConstructor("TargetCamera", ((DD, zD) => () => new BD(DD, rD.s.Zero(), zD))))
+     function bp(pp) {
+       return new Tp(pp, Jp)
```

#### 19. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1081-L1096` → after: `L241-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L241-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L241-L246) · [Before (L1081-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L1081-L1096)

```diff
-     function KD() {
-       sD || (sD = !0, pD.c.prototype.getInputElement = function() {
-         return this._renderingCanvas
-       }, pD.c.prototype.getRenderingCanvasClientRect = function() {
-         return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
-       }, pD.c.prototype.getInputElementClientRect = function() {
-         return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
-       }, pD.c.prototype.getAspectRatio = function(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const wD = DD.viewport;
-         return this.getRenderWidth(zD) * wD.width / (this.getRenderHeight(zD) * wD.height)
-       }, pD.c.prototype.getScreenAspectRatio = function() {
-         return this.getRenderWidth(!0) / this.getRenderHeight(!0)
-       }, pD.c.prototype._verifyPointerLock = function() {
-         this._onPointerLockChange?.()
-       })
+     function hp(pp) {
+       return new fp(pp)
+     }
+ 
+     function ap(pp) {
+       return new Tp(pp, Np)
```

#### 20. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1099-L1116` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L249) · [Before (L1099-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L1099-L1116)

```diff
-   39958: (DD, zD, wD) => {
-     var pD = wD(39826),
-       sD = wD(39960);
-     let KD = !1;
-     KD || (KD = !0, (0, sD.y)(), pD.c.prototype._loadFileAsync = async function(DD, zD, wD) {
-       return await new Promise(((pD, sD) => {
-         this._loadFile(DD, (DD => {
-           pD(DD)
-         }), void 0, zD, wD, ((DD, zD) => {
-           sD(zD)
-         }))
-       }))
-     })
-   },
-   39951: (DD, zD, wD) => {
-     (0, wD(39886).b)()
- ... (2 more removed lines; see GitHub link above)
+   39014: (pp, ip, cp) => {
```

#### 21. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1120-L1121` → after: `L253-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L253-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L253-L257) · [Before (L1120-L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L1120-L1121)

```diff
-     var pD = wD(39826);
-     let sD = !1;
+     var Op = cp(37413),
+       op = cp(37429),
+       Ip = cp(37662),
+       Sp = cp(37433),
+       xp = cp(37421);
```

#### 22. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1123-L1144` → after: `L259-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L259-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L259-L270) · [Before (L1123-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L1123-L1144)

```diff
-     function KD() {
-       sD || (sD = !0, pD.c.prototype.getRenderPassNames = function() {
-         return this._renderPassNames
-       }, pD.c.prototype.getCurrentRenderPassName = function() {
-         return this._renderPassNames[this.currentRenderPassId]
-       }, pD.c.prototype.createRenderPassId = function(DD) {
-         const zD = ++pD.c._RenderPassIdCounter;
-         return this._renderPassNames[zD] = DD ?? "NONAME", zD
-       }, pD.c.prototype.releaseRenderPassId = function(DD) {
-         this._renderPassNames[DD] = void 0;
-         for (let zD = 0; zD < this.scenes.length; ++zD) {
-           const wD = this.scenes[zD];
-           for (let zD = 0; zD < wD.meshes.length; ++zD) {
-             const pD = wD.meshes[zD];
-             if (pD._releaseRenderPassId(DD), pD.QE)
-               for (let zD = 0; zD < pD.QE.length; ++zD) {
- ... (6 more removed lines; see GitHub link above)
+     function Lp(pp) {
+       return `\n\t\t\t\t${(0,xp.v)(pp,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       n\ t\ t\ t\ t\ t$ {
+         (0, xp.A)(pp, "float", "s", "sin(ang)")
+       }\
+       n\ t\ t\ t\ t\ t$ {
+         (0, xp.A)(pp, "float", "c", "cos(ang)")
+       }\
+       n\ t\ t\ t\ t\ treturn $ {
+         (0, xp.j)(pp, "mat2", "c", "s", "-s", "c")
+       };\
+       n\ t\ t\ t\ t`)}\n\t\t\t`
```

#### 23. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1160-L1173` → after: `L273-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L273-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L273-L277) · [Before (L1160-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L1160-L1173)

```diff
-     function KD() {
-       sD || (sD = !0, pD.ThinEngine.prototype.setAlphaMode = function(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         if (this._alphaMode[wD] === DD) {
-           if (!zD) {
-             const zD = 0 === DD;
-             this.depthCullingState.depthMask !== zD && (this.depthCullingState.depthMask = zD)
-           }
-           return
-         }
-         const pD = 0 === DD;
-         this._alphaState.setAlphaBlend(!pD, wD), this._alphaState.setAlphaMode(DD, wD), zD || (this.depthCullingState.depthMask = pD), this._alphaMode[wD] = DD
-       })
+     function Yp(pp, ip) {
+       let cp = (0, xp.sb)(pp, "skele" + (ip - 1));
+       for (let op = ip - 2; op >= 0; op--) cp = (0, xp.jb)(pp, `boneIdx == ${op}`, (0, xp.sb)(pp, `skele${op}`), cp);
+       const Op = "bone.yz + rotate(bone.x) * pivot - pivot";
+       return `\n\t\t\t\t${(0,xp.A)(pp,"int","boneIdx",(0,xp.qb)(pp,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,xp.A)(pp,"vec3","bone",cp)}\n\t\t\t\t${(0,xp.A)(pp,"vec2","pivot",(0,xp.j)(pp,"vec2","0.0",`${(0,xp.zb)(pp,"position")}.z`))}\n\t\t\t\t${(0,xp.Y)(pp)?`positi … [truncated]
```

#### 24. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1175-L1284` → after: `L279-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L279-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L279-L281) · [Before (L1175-L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L1175-L1284)

```diff
-   },
-   39905: (DD, zD, wD) => {
-     var pD = wD(39761),
-       sD = wD(38662),
-       KD = wD(39766),
-       rD = wD(39914),
-       LD = wD(39867);
-     class cD extends rD.b {
-       setDepthStencilTexture(DD) {
-         let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (super.setDepthStencilTexture(DD, zD), !DD) return;
-         const wD = this._engine,
-           pD = this._context,
-           sD = DD._hardwareTexture;
-         if (sD && DD._autoMSAAManagement && this._MSAAFramebuffer) {
-           const zD = wD._currentFramebuffer;
- ... (94 more removed lines; see GitHub link above)
+ 
+     function Dp(pp) {
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,xp.j)(pp,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 25. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1286-L1306` → after: `L283-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L283-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L283-L288) · [Before (L1286-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L1286-L1306)

```diff
-     let gD = !1;
-     gD || (gD = !0, KD.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(DD, zD, wD) {
-       const pD = new cD(DD, zD, wD, this, this._gl);
-       return this._renderTargetWrapperCache.push(pD), pD
-     }, KD.ThinEngine.prototype.createRenderTargetTexture = function(DD, zD) {
-       const wD = this._createHardwareRenderTargetWrapper(!1, !1, DD);
-       let pD, sD, KD = !0,
-         rD = !1,
-         LD = !1,
-         cD = 1;
-       void 0 !== zD && "object" === typeof zD && (KD = zD.generateDepthBuffer ?? !0, rD = !!zD.generateStencilBuffer, LD = !!zD.noColorAttachment, pD = zD.colorAttachment, cD = zD.samples ?? 1, sD = zD.label);
-       const gD = pD || (LD ? null : this._createInternalTexture(DD, zD, !0, 5)),
-         RD = DD.width || DD,
-         AD = DD.height || DD,
-         UD = this._currentFramebuffer,
-         fD = this._gl,
- ... (5 more removed lines; see GitHub link above)
+     const Ap = {
+         x: 0,
+         y: 0,
+         z: 0,
+         vcp(pp, ip) {
+           return this.x = pp[ip], this.y = pp[ip + 1], this.z = pp[ip + 2], this
```

#### 26. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1308-L1384` → after: `L290-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L290-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L290-L308) · [Before (L1308-L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L1308-L1384)

```diff
-       } else this.updateRenderTargetTextureSampleCount(wD, cD);
-       return wD
-     }, KD.ThinEngine.prototype._createDepthStencilTexture = function(DD, zD, wD) {
-       const KD = this._gl,
-         rD = DD.layers || 0,
-         cD = DD.depth || 0;
-       let gD = KD.TEXTURE_2D;
-       0 !== rD ? gD = KD.TEXTURE_2D_ARRAY : 0 !== cD && (gD = KD.TEXTURE_3D);
-       const RD = new pD.e(this, 12);
-       if (RD.label = zD.label, !this._caps.depthTextureExtension) return sD.d.Error("Depth texture is not supported by your browser or hardware."), RD;
-       const AD = {
-         bilinearFiltering: !1,
-         comparisonFunction: 0,
-         generateStencil: !1,
-         ...zD
-       };
- ... (61 more removed lines; see GitHub link above)
+       },
+       Pp = {
+         name: "Cape",
+         className: "CapeMaterialPlugin",
+         priority: 200,
+         defines: (pp, ip) => ({
+           ...(0, Op.b)("CAPE"),
+           BLOXD_CAPE_BONES: `${pp}`,
+           BLOXD_CAPE_MAX_Y: (0, op.hb)(ip)
+         }),
+         getUniforms(pp) {
+           return (0, Ip.b)(function(pp) {
+             const ip = [];
+             for (let cp = 0; cp < pp; cp++) ip.push({
+               name: `skele${cp}`,
+               type: "highp vec3"
+ ... (3 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1386-L1564` → after: `L310-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L310-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L310-L311) · [Before (L1386-L1564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L1386-L1564)

```diff
-         enumerable: !1,
-         configurable: !0
-       })
-     }();
-     var rD = wD(39761),
-       LD = wD(38662),
-       cD = wD(39852);
-     let gD = !1;
-     ! function() {
-       function DD(DD, zD, wD, pD) {
-         let sD, KD = 1;
-         1 === pD ? sD = new Float32Array(zD * wD * 4) : 2 === pD ? (sD = new Uint16Array(zD * wD * 4), KD = 15360) : sD = 7 === pD ? new Uint32Array(zD * wD * 4) : new Uint8Array(zD * wD * 4);
-         for (let rD = 0; rD < zD; rD++)
-           for (let pD = 0; pD < wD; pD++) {
-             const wD = 3 * (pD * zD + rD),
-               LD = 4 * (pD * zD + rD);
- ... (163 more removed lines; see GitHub link above)
+         bind(pp) {
+           for (let ip = 0; ip < this.skeleLen; ip++) pp.updateVector3(`skele${ip}`, Ap.vcp(this.skele, 3 * ip))
```

#### 28. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L1566-L1848` → after: `L313-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L313-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L313-L320) · [Before (L1566-L1848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L1566-L1848)

```diff
-         sD = this._gl;
-       this._bindTextureDirectly(sD.TEXTURE_CUBE_MAP, wD, !0), this._setupDepthStencilTexture(wD, DD, pD.bilinearFiltering, pD.comparisonFunction);
-       for (let KD = 0; KD < 6; KD++) pD.generateStencil ? sD.texImage2D(sD.TEXTURE_CUBE_MAP_POSITIVE_X + KD, 0, sD.DEPTH24_STENCIL8, DD, DD, 0, sD.DEPTH_STENCIL, sD.UNSIGNED_INT_24_8, null) : sD.texImage2D(sD.TEXTURE_CUBE_MAP_POSITIVE_X + KD, 0, sD.DEPTH_COMPONENT24, DD, DD, 0, s … [truncated]
-       return this._bindTextureDirectly(sD.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(wD), wD
-     }, sD.ThinEngine.prototype._setCubeMapTextureParams = function(DD, zD, wD) {
-       const pD = this._gl;
-       pD.texParameteri(pD.TEXTURE_CUBE_MAP, pD.TEXTURE_MAG_FILTER, pD.LINEAR), pD.texParameteri(pD.TEXTURE_CUBE_MAP, pD.TEXTURE_MIN_FILTER, zD ? pD.LINEAR_MIPMAP_LINEAR : pD.LINEAR), pD.texParameteri(pD.TEXTURE_CUBE_MAP, pD.TEXTURE_WRAP_S, pD.CLAMP_TO_EDGE), pD.texParameteri(pD.T … [truncated]
-     }, sD.ThinEngine.prototype.createCubeTexture = function(DD, zD, wD, pD) {
-       let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-         KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-         rD = arguments.length > 6 ? arguments[6] : void 0,
-         gD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-         RD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         AD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
-         UD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
-         fD = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
- ... (267 more removed lines; see GitHub link above)
+         uniformsVersion() {
+           return this.bonesVersion
+         },
+         getCustomCode(pp, ip) {
+           return "vertex" !== pp ? null : {
+             CUSTOM_VERTEX_DEFINITIONS: Lp(ip),
+             CUSTOM_VERTEX_UPDATE_POSITION: Yp(ip, this.skeleLen),
+             CUSTOM_VERTEX_UPDATE_NORMAL: Dp(ip)
```

#### 29. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L2223-L2279` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L323-L324) · [Before (L2223-L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L2223-L2279)

```diff
-       }
-       _uploadImageToTexture(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         const sD = this._gl,
-           KD = this._getWebGLTextureType(DD.type),
-           rD = this._getInternalFormat(DD.format),
-           LD = this._getRGBABufferInternalSizedFormat(DD.type, rD),
-           cD = DD.isCube ? sD.TEXTURE_CUBE_MAP : sD.TEXTURE_2D;
-         this._bindTextureDirectly(cD, DD, !0), this._unpackFlipY(DD.invertY);
-         let gD = sD.TEXTURE_2D;
-         DD.isCube && (gD = sD.TEXTURE_CUBE_MAP_POSITIVE_X + wD), sD.texImage2D(gD, pD, LD, rD, KD, zD), this._bindTextureDirectly(cD, null, !0)
-       }
-       updateTextureComparisonFunction(DD, zD) {
-         if (1 === this.AB) return void RD.d.Error("WebGL 1 does not support texture comparison.");
-         const wD = this._gl;
- ... (41 more removed lines; see GitHub link above)
+       };
+     (0, Sp.q)(Pp)
```

#### 30. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L2281` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L326) · [Before (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L2281)

```diff
-   39914: (DD, zD, wD) => {
+   38916: (pp, ip, cp) => {
```

#### 31. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L2283` → after: `L328-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L328-L329) · [Before (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L2283)

```diff
-       b: () => sD
+       e: () => Dp,
+       g: () => Ap
```

#### 32. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L2285-L2482` → after: `L331-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L331-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L331-L363) · [Before (L2285-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L2285-L2482)

```diff
-     var pD = wD(39867);
-     class sD {
-       get depthStencilTexture() {
-         return this._depthStencilTexture
-       }
-       setDepthStencilTexture(DD) {
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = DD, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, D … [truncated]
-       }
-       get depthStencilTextureWithStencil() {
-         return this._depthStencilTextureWithStencil
-       }
-       get isCube() {
-         return this._isCube
-       }
-       get isMulti() {
-         return this._isMulti
- ... (182 more removed lines; see GitHub link above)
+     var Op = cp(37413),
+       op = cp(37662),
+       Ip = cp(37421),
+       Sp = cp(37433);
+     const xp = "bloxdTextLodBias",
+       Lp = [{
+         name: xp,
+         type: "float"
+       }],
+       Yp = "bloxdTextSample",
+       Dp = {
+         planes: -.5,
+         boards: -.5
+       },
+       Ap = {
+         name: "TextSampler",
+ ... (17 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L2486-L2527` → after: `L366-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L366-L367) · [Before (L2486-L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L2486-L2527)

```diff
-       }
-       releaseTextures() {
-         if (this._textures)
-           for (let DD = 0; DD < this._textures.length; ++DD) this._textures[DD].dispose();
-         this._textures = null
-       }
-       dispose() {
-         arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
-       }
-     }
-   },
-   40359: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => pD
-     });
-     class pD {
- ... (26 more removed lines; see GitHub link above)
+       };
+     (0, Sp.q)(Ap)
```

#### 34. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L2529-L6866` → after: `L369-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L369-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L369-L406) · [Before (L2529-L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L2529-L6866)

```diff
-   40006: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(38662);
-     const sD = new Map;
- 
-     function KD(DD, zD) {
-       (function(DD) {
-         return sD.delete(DD)
-       })(DD) && pD.d.Warn(`Extension with the name '${DD}' already exists`), sD.set(DD, zD)
-     }
- 
-     function rD(DD, zD) {
-       "image/ktx" !== zD && "image/ktx2" !== zD || (DD = ".ktx"), sD.has(DD) || (DD.endsWith(".ies") && KD(".ies", (async () => await wD.e(309).then((() => wD(41686))).then((DD => new DD._IESTextureLoader)))), DD.endsWith(".dds") && KD(".dds", (async () => await wD.e(307).then((( … [truncated]
-       const pD = sD.get(DD);
- ... (4322 more removed lines; see GitHub link above)
+   41339: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       CapeMaterialPlugin: () => dp,
+       HueTintMaterialPlugin: () => ep,
+       LifeformMaterialPlugin: () => jp,
+       OverlayMaterialPlugin: () => kp
+     });
+     var Op = cp(41345),
+       op = cp(38232);
+     class Ip extends((0, Op.d)(op.d)) {}(0, Op.g)(op.d, Ip);
+     var Sp = cp(37411);
+     class xp extends((0, Op.d)(Sp.h)) {}(0, Op.g)(Sp.h, xp);
+     var Lp = cp(38071);
+     class Yp extends((0, Op.d)(Lp.i)) {}(0, Op.g)(Lp.i, Yp);
+     var Dp = cp(37655),
+       Ap = cp(40459),
+ ... (22 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6868-L6874` → after: `L408-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L408-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L408-L427) · [Before (L6868-L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L6868-L6874)

```diff
-   40408: (DD, zD, wD) => {
-     var pD = wD(37079),
-       sD = wD(38662),
-       KD = wD(40234),
-       rD = wD(40335),
-       LD = wD(40066);
-     const cD = "bakedVertexAnimationSettingsInstanced";
+   41345: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => ap,
+       d: () => tp,
+       g: () => Zp
+     });
+     var Op = cp(40459),
+       op = cp(41347),
+       Ip = cp(41393),
+       Sp = cp(41353),
+       xp = cp(38045),
+       Lp = cp(38055),
+       Yp = cp(38061),
+       Dp = cp(38064),
+       Ap = cp(37445),
+       Pp = cp(37448),
+ ... (4 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6876-L6878` → after: `L429-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L429-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L429-L434) · [Before (L6876-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L6876-L6878)

```diff
-     function gD(DD) {
-       const zD = DD.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
-       return zD instanceof Float32Array || zD instanceof Uint16Array
+     function vp(pp, ip) {
+       return Object.assign((function(pp, cp, Op, op) {
+         return ip(this.featureState, pp, cp, Op, op)
+       }), {
+         Py: pp
+       })
```

#### 37. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6881-L6887` → after: `L437-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L437-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L437-L462) · [Before (L6881-L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L6881-L6887)

```diff
-     function RD(DD, zD, wD, pD) {
-       wD.I9(Number.POSITIVE_INFINITY), pD.I9(Number.NEGATIVE_INFINITY);
-       for (let sD = 0; sD < 3 * zD; sD += 3) {
-         const zD = DD[sD],
-           KD = DD[sD + 1],
-           rD = DD[sD + 2];
-         zD < wD.x && (wD.x = zD), KD < wD.y && (wD.y = KD), rD < wD.z && (wD.z = rD), zD > pD.x && (pD.x = zD), KD > pD.y && (pD.y = KD), rD > pD.z && (pD.z = rD)
+     function tp(pp) {
+       const ip = class extends Wp.c {
+           constructor(ip, cp) {
+             const Op = (0, Up.$)(ip),
+               op = Op && (0, Up.s)(Op, pp.name);
+             for (var Ip = arguments.length, Sp = new Array(Ip > 2 ? Ip - 2 : 0), xp = 2; xp < Ip; xp++) Sp[xp - 2] = arguments[xp];
+             super(ip, pp.name, pp.priority, op ? op.defines : pp.defines(...Sp), !1), this.featureState = void 0, this.featureState = cp, this._pluginManager._addPlugin(this), this._enable(!0), (0, Up.v)(this._material, pp, this.featureState, this._pluginDefineNames)
+           }
+           getClassName() {
+             return pp.className
+           }
+           isCompatible(pp) {
+             return pp === wp.b.GLSL || pp === wp.b.WGSL
+           }
+         },
+         cp = (0, yp.l)(pp);
+ ... (10 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6892` → after: `L472-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L472-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L472-L573) · [Before (L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L6892)

```diff
-       wD && (DD.x -= DD.x * wD.x + wD.y, DD.y -= DD.y * wD.x + wD.y, DD.z -= DD.z * wD.x + wD.y, zD.x += zD.x * wD.x + wD.y, zD.y += zD.y * wD.x + wD.y, zD.z += zD.z * wD.x + wD.y)
+       return (0, jp.h)(cp, ip.urls, (() => async function(pp, ip, cp) {
+         const {
+           width: Op
+         } = pp[0].getSize(), op = pp.map(((pp, cp) => {
+           var op;
+           const Ip = Math.round(pp.getSize().height / Op),
+             Sp = null === ip || void 0 === ip ? void 0 : ip[cp];
+           return {
+             pixels: Sp && Sp.byteLength === Op * Op * Ip * 4 ? Sp : null !== (op = mp.get(pp.getInternalTexture())) && void 0 !== op ? op : pp._readPixelsSync(),
+             layers: Ip
+           }
+         })), Ip = cp.gy().getCaps().texture2DArrayMaxLayerCount, xp = (0, jp.d)(op, Op, Ip).map((pp => {
+           let {
+             pixels: ip,
+             layers: op
+           } = pp;
+ ... (86 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6895-L6900` → after: `L576-L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L576-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L576-L622) · [Before (L6895-L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L6895-L6900)

```diff
-     function UD(DD, zD, wD, sD, KD) {
-       const rD = pD.n.WI[7],
-         LD = pD.n.WI[8];
-       for (let cD = 0; cD < 2; ++cD)
-         for (let gD = 0; gD < 2; ++gD)
-           for (let RD = 0; RD < 2; ++RD) rD.set(cD ? zD.x : DD.x, gD ? zD.y : DD.y, RD ? zD.z : DD.z), pD.s.TransformCoordinatesToRef(rD, wD, LD), sD.minimizeInPlace(LD), KD.maximizeInPlace(LD)
+     function ap(pp, ip) {
+       if (!(ip instanceof Op.StandardMaterial) || ip.specularTexture) return;
+       const {
+         r: cp,
+         g: op,
+         b: Ip
+       } = ip.specularColor;
+       0 === cp && 0 === op && 0 === Ip && (pp.SPECULARTERM = !1)
+     }(0, Dp.d)({
+       disableUnusedSpecularTerm: ap
+     });
+     var np = cp(37519),
+       Fp = cp(37807);
+     const gp = new RegExp(`^#define ${Yp.b}\\s*$`, "m");
+     class Gp extends(tp(Yp.h)) {
+       constructor(pp, ip) {
+ ... (31 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6903-L6905` → after: `L626-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L626-L627) · [Before (L6903-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L6903-L6905)

```diff
-     function fD(DD, zD, wD, sD, KD) {
-       const rD = pD.n.WI[7];
-       for (let LD = 0; LD < 3 * zD; LD += 3) pD.s.TransformCoordinatesFromFloatsToRef(DD[LD], DD[LD + 1], DD[LD + 2], wD, rD), sD.minimizeInPlace(rD), KD.maximizeInPlace(rD)
+     function Zp(pp, ip) {
+       rp.set(pp, ip)
```

#### 41. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6907-L6932` → after: `L629-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L629-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L629-L632) · [Before (L6907-L6932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L6907-L6932)

```diff
-     let ID = !1;
-     ID || (ID = !0, rD.e.prototype.thinInstanceAdd = function(DD) {
-       let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       if (!this.Ul().iI().getCaps().instancedArrays) return sD.d.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
-       this._thinInstanceUpdateBufferSize("matrix", Array.isArray(DD) ? DD.length : 1);
-       const wD = this._thinInstanceDataStorage.instancesCount;
-       if (Array.isArray(DD))
-         for (let pD = 0; pD < DD.length; ++pD) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, DD[pD], pD === DD.length - 1 && zD);
-       else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, DD, zD);
-       return wD
-     }, rD.e.prototype.thinInstanceAddSelf = function() {
-       let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-       return this.thinInstanceAdd(pD.e.IdentityReadOnly, DD)
-     }, rD.e.prototype.thinInstanceRegisterAttribute = function(DD, zD) {
-       DD === LD.k.ColorKind && (DD = LD.k.ColorInstanceKind), this.removeVerticesData(DD), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[DD] = zD, this._userThinInstanceBuffersStorage.sizes[DD] = zD * Math.max(32, this._thinInstanceDataSt … [truncated]
-     }, rD.e.prototype.thinInstanceSetMatrixAt = function(DD, zD) {
- ... (10 more removed lines; see GitHub link above)
+     Zp(xp.d, Hp), Zp(Lp.f, qp), Zp(Yp.h, Gp), Zp(Dp.g, hp), (0, Ap.e)({
+       create: (pp, ip) => {
+         const cp = new Op.StandardMaterial(pp.name, ip);
+         return (0, np.p)(pp, cp), cp.detailMap._pluginDefineNames
```

#### 42. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6934-L6936` → after: `L634-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L634-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L634-L635) · [Before (L6934-L6936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L6934-L6936)

```diff
-       set: function(DD) {
-         const zD = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
-         DD <= (zD ? zD.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = DD)
+       write: (pp, ip, cp) => {
+         (0, np.S)(pp.mirror, ip, cp)
```

#### 43. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L6938-L7013` → after: `L637-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L637-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L637-L658) · [Before (L6938-L7013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L6938-L7013)

```diff
-       enumerable: !0,
-       configurable: !0
-     }), rD.e.prototype._thinInstanceCreateMatrixBuffer = function(DD, zD) {
-       let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-       const pD = new LD.b(this.iI(), zD, !wD, 16, !1, !0);
-       for (let sD = 0; sD < 4; sD++) this.setVerticesBuffer(pD.createVertexBuffer(DD + sD, 4 * sD, 4));
-       return pD
-     }, rD.e.prototype.f6 = function(DD, zD) {
-       let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-         pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       if (wD = wD || 16, "matrix" === DD) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = zD ? zD.length : 32 * wD, this._thinInstanceDataStorage.matrixData = zD, this._thin … [truncated]
-       else if ("previousMatrix" === DD) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = zD, null !== zD && (this._thinInstanceDataStorage.previousMatrixBuf … [truncated]
-       else if ("splatIndex" === DD && zD) {
-         this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = zD.length / wD, this._userThinInstanceBuffersStorage.data[DD] = zD, this._userThinInstanceBuffersStorage.strides[DD] = wD, this._userThinInstanceBuffersStorage.sizes[DD] = zD.length;
-         const pD = new LD.b(this.iI(), zD, !0, 16, !1, !0);
-         this._thinInstanceDataStorage.matrixBuffer = pD;
- ... (60 more removed lines; see GitHub link above)
+       addFeature: (pp, ip, cp) => {
+         const Op = rp.get(ip.feature);
+         if (!Op) throw new Error(`${ip.feature.name} has no plugin class (registerPluginClass)`);
+         new Op(pp.mirror, ip.state, ...cp)
+       },
+       texture: (pp, ip, cp) => {
+         let {
+           url: Op,
+           noMipmap: op,
+           invertY: Ip,
+           samplingMode: xp,
+           data: Lp,
+           sets: Yp
+         } = cp;
+         if (!Lp) {
+           const cp = new Sp.d(Op, ip, op, Ip, xp);
+ ... (6 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7015-L7058` → after: `L660-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L660-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L660-L709) · [Before (L7015-L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L7015-L7058)

```diff
-             return !(!isFinite(nD.x) || !isFinite(OD.x)) && (DD.FW().reConstruct(OD, JD), DD.rawBoundingInfo = new KD.b(nD, MD), function(DD, zD) {
-               DD.length = 0;
-               for (let wD = 0; wD < zD.boundingBox.vectors.length; ++wD) DD.push(zD.boundingBox.vectors[wD].clone())
-             }(zD, DD.rawBoundingInfo), DD._updateBoundingInfo(), !0)
-           }(this, rD, wD)) return;
-         sD && this.bakedVertexAnimationManager?.isEnabled && gD(this) ? this.refreshBoundingInfo({
-           applySkeleton: zD,
-           applyMorph: wD,
-           applyBakedVertexAnimation: !0,
-           updatePositionsArray: !1
-         }) : this.refreshBoundingInfo(zD, wD);
-         const DD = this.FW();
-         this.rawBoundingInfo = new KD.b(DD.minimum, DD.maximum)
-       }
-       const ID = this.FW(),
-         BD = this._thinInstanceDataStorage.matrixData;
- ... (28 more removed lines; see GitHub link above)
+           })),
+           {
+             mimeType: Wp,
+             bytes: yp,
+             label: Up
+           } = Lp,
+           wp = {
+             noMipmap: op,
+             invertY: !1,
+             samplingMode: xp,
+             ...Dp,
+             mimeType: Wp,
+             loaderOptions: void 0,
+             useSRGBBuffer: !1
+           },
+           vp = new Sp.d(null, ip, wp);
+ ... (34 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7071` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L713) · [Before (L7071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L7071)

```diff
-   40372: (DD, zD, wD) => {
+   41391: (pp, ip, cp) => {
```

#### 46. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7073` → after: `L715-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L715-L716) · [Before (L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L7073)

```diff
-       c: () => nD,
+       b: () => Dp,
+       e: () => Ap,
```

#### 47. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7076-L7544` → after: `L719-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L719-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L719-L791) · [Before (L7076-L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L7076-L7544)

```diff
-     var pD, sD, KD, rD, LD = wD(39921),
-       cD = wD(39927),
-       gD = wD(39939),
-       RD = wD(37119),
-       AD = wD(37079),
-       UD = wD(40155),
-       fD = wD(37134),
-       ID = wD(39808);
-     let BD = (() => {
-       var DD;
-       let zD, wD, pD, sD, KD, rD, fD, ID, BD, GD = UD.b,
-         hD = [],
-         nD = [],
-         MD = [],
-         OD = [],
-         JD = [],
- ... (453 more removed lines; see GitHub link above)
+     var Op = cp(41378),
+       op = cp(40273),
+       Ip = cp(40498),
+       Sp = cp(40593),
+       xp = cp(41383),
+       Lp = cp(40589),
+       Yp = cp(37698);
+     class Dp extends Sp.b {
+       constructor() {
+         super(...arguments), this.model = null, this.onGeometryUpdated = (pp, ip) => {
+           this.releaseUnlessInstanced(ip)
+         }, this.onLinked = null
+       }
+       link(pp) {
+         var ip;
+         (0, Yp.m)(pp), this.model = pp, null === (ip = this.onLinked) || void 0 === ip || ip.call(this, pp)
+ ... (57 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7546-L7680` → after: `L793-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L793-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L793-L802) · [Before (L7546-L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L7546-L7680)

```diff
-       }, (() => {
-         const gD = "function" === typeof Symbol && Symbol.metadata ? Object.create(GD[Symbol.metadata] ?? null) : void 0;
-         zD = [(0, cD.B)("position")], wD = [(0, cD.B)("rotation")], pD = [(0, cD.t)("rotationQuaternion")], sD = [(0, cD.B)("rc")], KD = [(0, cD.C)("billboardMode")], rD = [(0, cD.C)()], fD = [(0, cD.C)("infiniteDistance")], ID = [(0, cD.C)()], BD = [(0, cD.C)()], (0, LD.i)(null, … [truncated]
-           kind: "field",
-           name: "_position",
-           static: !1,
-           private: !1,
-           access: {
-             has: DD => "_position" in DD,
-             get: DD => DD._position,
-             set: (DD, zD) => {
-               DD._position = zD
-             }
-           },
-           metadata: gD
-         }, hD, nD), (0, LD.i)(null, null, wD, {
- ... (119 more removed lines; see GitHub link above)
+         return ip._updatable = Sp, ip._boundingInfo = new Ip.d(this.extend.minimum, this.extend.maximum), ip.relink(), ip
+       }
+       static mergeMeshes(pp, ip, cp, Op, op, Ip) {
+         const Lp = pp[0].Gl(),
+           Yp = new xp.c(pp[0].name + "_merged", Lp),
+           Ap = new Dp(Sp.b.RandomId(), Lp, void 0, !1, Yp);
+         try {
+           if (!xp.c.MergeMeshes(pp, ip, cp, Yp, op, Ip)) return Yp.dispose(), null
+         } catch (Pp) {
+           throw Yp.dispose(), Pp
```

#### 49. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7682` → after: `L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L804) · [Before (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L7682)

```diff
-         UD.b.ParseAnimationRanges(pD, DD, zD)
+         return Ap.relink(), Yp
```

#### 50. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7684-L7700` → after: `L806-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L806-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L806-L807) · [Before (L7684-L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L7684-L7700)

```diff
-       return DD.autoAnimate && zD.beginAnimation(pD, DD.autoAnimateFrom, DD.autoAnimateTo, DD.autoAnimateLoop, DD.autoAnimateSpeed || 1), pD
-     }
-     let hD = !1;
- 
-     function nD() {
-       hD || (hD = !0, BD.Parse = GD)
-     }(pD = BD.prototype).Vk ?? (pD.Vk = (0, ID.h)("TransformNode", "Vk")), (sD = BD.prototype).applyImpulse ?? (sD.applyImpulse = (0, ID.h)("TransformNode", "applyImpulse")), (KD = BD.prototype).applyAngularImpulse ?? (KD.applyAngularImpulse = (0, ID.h)("TransformNode", "applyAng … [truncated]
-   },
-   40342: (DD, zD, wD) => {
-     function pD(DD, zD, wD) {
-       try {
-         const pD = DD.next();
-         pD.done ? zD(pD) : pD.value ? pD.value.then((() => {
-           pD.value = void 0, zD(pD)
-         }), wD) : zD(pD)
-       } catch (pD) {
- ... (1 more removed lines; see GitHub link above)
+       removeVerticesData(pp) {
+         this.releaseUnlessInstanced(pp), super.removeVerticesData(pp)
```

#### 51. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7702-L7710` → after: `L809-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L809-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L809-L817) · [Before (L7702-L7710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L7702-L7710)

```diff
-     }
- 
-     function sD() {
-       let DD, zD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
-       return (wD, sD, KD) => {
-         const rD = performance.now();
-         void 0 === DD || rD - DD > zD ? (DD = rD, setTimeout((() => {
-           pD(wD, sD, KD)
-         }), 0)) : pD(wD, sD, KD)
+       dispose() {
+         this.release(), super.dispose()
+       }
+       releaseUnlessInstanced(pp) {
+         var ip;
+         pp && null !== (ip = this.getVertexBuffer(pp)) && void 0 !== ip && ip.getIsInstanced() || this.release()
+       }
+       release() {
+         this.model && ((0, Yp.v)(this.model), this.model = null)
```

#### 52. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7714-L7724` → after: `L821-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L821-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L821-L839) · [Before (L7714-L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L7714-L7724)

```diff
-     function KD(DD, zD, wD, pD, sD) {
-       const KD = () => {
-         let rD;
-         const LD = DD => {
-           DD.done ? wD(DD.value) : void 0 === rD ? rD = !0 : KD()
-         };
-         do {
-           rD = void 0, sD && sD.aborted ? pD(new Error("Aborted")) : zD(DD, LD, pD), void 0 === rD && (rD = !1)
-         } while (rD)
-       };
-       KD()
+     function Ap(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new xp.c(pp, cp);
+       const op = (0, Yp.j)(ip),
+         {
+           positions: Ip,
+           normals: Ap,
+           uvs: Pp,
+           indices: Wp,
+           named: yp = {}
+         } = ip,
+         Up = new Lp.d;
+       Up.positions = Ip, Up.normals = null !== Ap && void 0 !== Ap ? Ap : null, Up.uvs = null !== Pp && void 0 !== Pp ? Pp : null, Up.indices = Wp;
+       const wp = new Dp(Sp.b.RandomId(), cp, Up, !1, Op);
+       for (const {
+           kind: Sp,
+           components: xp
+ ... (3 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7727-L7736` → after: `L842-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L842-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L842-L856) · [Before (L7727-L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L7727-L7736)

```diff
-     function rD(DD, zD) {
-       let wD;
-       return KD(DD, pD, (DD => wD = DD), (DD => {
-         throw DD
-       }), zD), wD
-     }
-     async function LD(DD, zD, wD) {
-       return await new Promise(((pD, sD) => {
-         KD(DD, zD, pD, sD, wD)
-       }))
+     function Pp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       const op = new xp.c(pp, cp),
+         {
+           positions: Ip,
+           normals: Sp,
+           uvs: Yp,
+           indices: Dp
+         } = ip;
+       return Object.assign(new Lp.d, {
+         positions: Ip,
+         normals: Sp,
+         uvs: Yp,
+         indices: Dp
+       }).applyToMesh(op, Op), op
```

#### 54. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7738-L7741` → after: `L858-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L858-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L858-L880) · [Before (L7738-L7741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L7738-L7741)

```diff
- 
-     function cD(DD, zD) {
-       return function() {
-         return rD(DD(...arguments), zD)
+   },
+   41375: (pp, ip, cp) => {
+     function Op(pp, ip, cp) {
+       const Op = ip * ip * 4,
+         op = pp[0].layers,
+         Ip = op * (pp.length - 1) + pp[pp.length - 1].layers,
+         Sp = new Uint8Array(Ip * Op);
+       pp.forEach(((ip, cp) => {
+         const Ip = cp + 1 < pp.length ? Math.min(ip.layers, op) : ip.layers;
+         Sp.set(new Uint8Array(ip.pixels.buffer, ip.pixels.byteOffset, Ip * Op), cp * op * Op)
+       }));
+       const xp = Math.max(1, Math.min(Ip, cp || Ip));
+       if (xp === Ip) return [{
+         pixels: Sp,
+         layers: Ip
+       }];
+ ... (7 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L7745-L7749` → after: `L885-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L885-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/251.js#L885-L905) · [Before (L7745-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/251.js#L7745-L7749)

```diff
-       b: () => sD,
-       c: () => cD,
-       f: () => LD,
-       j: () => rD
-     })
+       d: () => Op,
+       h: () => Ip
+     });
+     const op = new WeakMap;
+ 
+     function Ip(pp, ip, cp) {
+       var Op, Ip;
+       const Sp = null !== (Op = op.get(pp)) && void 0 !== Op ? Op : new Map;
+       op.set(pp, Sp);
+       const xp = null !== (Ip = Sp.get(ip[0])) && void 0 !== Ip ? Ip : [];
+       Sp.set(ip[0], xp);
+       const Lp = xp.find((pp => pp.urls.length === ip.length && pp.urls.every(((pp, cp) => pp === ip[cp]))));
+       if (Lp) return Lp.built;
+       const Yp = {
+         urls: [...ip],
+         built: cp()
+ ... (5 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/252.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/252.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f)

#### 1. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L4)

```diff
-   40066: (DD, zD, wD) => {
+   41251: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6-L9` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L6-L7) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L6-L9)

```diff
-       b: () => LD,
-       e: () => BD,
-       h: () => gD,
-       k: () => cD
+       d: () => Ip,
+       f: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L11-L71` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L9-L13) · [Before (L11-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L11-L71)

```diff
-     var pD = wD(39849),
-       sD = wD(38662),
-       KD = wD(39984),
-       rD = wD(39898);
-     class LD {
-       get EX() {
-         return this._isDisposed
-       }
-       constructor(DD, zD, wD) {
-         let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           KD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           LD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           cD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           gD = arguments.length > 7 ? arguments[7] : void 0,
-           RD = arguments.length > 8 ? arguments[8] : void 0;
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, rD.b)(), DD && DD.Ul ? this._engine = DD.Ul().iI() : this._engine = DD, this._updatable = wD, this._instanced = LD, this._divisor = gD || 1, this._label = RD, zD instanceof pD.d ? (this._data = null, this._buffer = zD) … [truncated]
- ... (45 more removed lines; see GitHub link above)
+     var Op = cp(1971);
+     let op = !1;
+ 
+     function Ip() {
+       op = !0
```

#### 4. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L73-L180` → after: `L15-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L15-L17) · [Before (L73-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L73-L180)

```diff
-     class cD {
-       get EX() {
-         return this._isDisposed
-       }
-       get instanceDivisor() {
-         return this._instanceDivisor
-       }
-       set instanceDivisor(DD) {
-         const zD = 0 != DD;
-         this._instanceDivisor = DD, zD !== this._instanced && (this._instanced = zD, this._computeHashCode())
-       }
-       get _maxVerticesCount() {
-         const DD = this.getData();
-         return DD ? Array.isArray(DD) ? DD.length / (this.byteStride / 4) - this.byteOffset / 4 : (DD.byteLength - this.byteOffset) / this.byteStride : 0
-       }
-       constructor(DD, zD, wD, pD, sD, rD, AD, UD, fD, ID) {
- ... (92 more removed lines; see GitHub link above)
+ 
+     function Sp() {
+       op && (op = !1, (0, Op.b)())
```

#### 5. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L184-L204` → after: `L30-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L30-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L30-L46) · [Before (L184-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L184-L204)

```diff
-       switch (DD) {
-         case cD.UVKind:
-         case cD.UV2Kind:
-         case cD.UV3Kind:
-         case cD.UV4Kind:
-         case cD.UV5Kind:
-         case cD.UV6Kind:
-           return 2;
-         case cD.NormalKind:
-         case cD.PositionKind:
-           return 3;
-         case cD.ColorKind:
-         case cD.ColorInstanceKind:
-         case cD.MatricesIndicesKind:
-         case cD.MatricesIndicesExtraKind:
-         case cD.MatricesWeightsKind:
- ... (5 more removed lines; see GitHub link above)
+       if (pp.queries.drawCensus() < Op.ob.BYTES) return null;
+       const ip = pp.memoryData(pp.scratch(), Op.ob.BYTES, 4, "the draw census");
+       return null === ip ? null : {
+         terrainOpaque: Op.ob.terrainOpaque(ip, 0),
+         terrainTransparent: Op.ob.terrainTransparent(ip, 0),
+         terrainPack: Op.ob.terrainPack(ip, 0),
+         earthSky: Op.ob.earthSky(ip, 0),
+         skyMeshes: Op.ob.skyMeshes(ip, 0),
+         regular: Op.ob.regular(ip, 0),
+         thin: Op.ob.thin(ip, 0),
+         line: Op.ob.line(ip, 0),
+         text: Op.ob.text(ip, 0),
+         particles: Op.ob.particles(ip, 0),
+         terrainParts: Op.ob.terrainParts(ip, 0),
+         terrainCompiling: Op.ob.terrainCompiling(ip, 0),
+         ringCopiesMax: Op.ob.ringCopiesMax(ip, 0),
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L209` → after: `L51-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L51-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L51-L62) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L209)

```diff
-       return DD instanceof Int8Array ? cD.BYTE : DD instanceof Uint8Array ? cD.UNSIGNED_BYTE : DD instanceof Int16Array ? cD.SHORT : DD instanceof Uint16Array ? cD.UNSIGNED_SHORT : DD instanceof Int32Array ? cD.INT : DD instanceof Uint32Array ? cD.UNSIGNED_INT : cD.FLOAT
+       const {
+         terrainOpaque: ip,
+         terrainTransparent: cp,
+         earthSky: Op,
+         skyMeshes: op,
+         regular: Ip,
+         thin: Sp,
+         line: xp,
+         text: Lp,
+         particles: Yp
+       } = pp;
+       return ip + cp + Op + op + Ip + Sp + xp + Lp + Yp
```

#### 7. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L212-L214` → after: `L65-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L65-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L65-L114) · [Before (L212-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L212-L214)

```diff
-     function AD(DD) {
-       return (0, KD.n)(DD)
-     }
+     function xp() {
+       const pp = (0, op.k)();
+       return !0 === (null === pp || void 0 === pp ? void 0 : pp.isCoreRunning) ? function(pp) {
+         const ip = Ip(pp);
+         if (null === ip) return [];
+         const {
+           terrainOpaque: cp,
+           terrainTransparent: Op,
+           terrainPack: op,
+           earthSky: xp,
+           skyMeshes: Lp,
+           regular: Yp,
+           thin: Dp,
+           line: Ap,
+           text: Pp,
+           particles: Wp
+ ... (34 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L216-L219` → after: `L116-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L116-L118) · [Before (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L216-L219)

```diff
-     function UD(DD, zD, wD, pD, sD, rD, LD, cD) {
-       (0, KD.h)(DD, zD, wD, pD, sD, rD, LD, ((DD, zD) => {
-         for (let wD = 0; wD < pD; wD++) cD(DD[wD], zD + wD)
-       }))
+     function Ap(pp) {
+       const ip = (0, Ip.k)();
+       return null !== ip && +pp === ip.api.localId
```

#### 9. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L222-L223` → after: `L121-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L121-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L121-L140) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L222-L223)

```diff
-     function fD(DD, zD, wD, pD, sD, rD, LD, cD) {
-       return (0, KD.m)(DD, zD, wD, pD, sD, rD, LD, cD)
+     function Pp() {
+       Dp || (Dp = !0, (0, Lp.h)(Sp.p, (pp => {
+         var ip, cp;
+         const Op = (0, xp.f)(Sp.p, pp);
+         if (!(0, xp.b)(Op)) return;
+         const op = Op;
+         Ap(op.Np) && Wp(op.Tp, {
+           icon: op.Oc,
+           level: op.Ic,
+           displayName: null !== (ip = op.bp) && void 0 !== ip ? ip : null,
+           durationMs: null !== (cp = op.oc) && void 0 !== cp ? cp : null
+         })
+       })), (0, Lp.h)(Sp.P, (pp => {
+         const ip = (0, xp.f)(Sp.P, pp);
+         if (!(0, xp.b)(ip)) return;
+         const cp = ip;
+ ... (4 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L228-L229` → after: `L143-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L143-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L143-L146) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L228-L229)

```diff
-     function BD() {
-       ID || (ID = !0, cD.DeduceStride = gD, cD.GetDataType = RD, cD.GetTypeByteLength = AD, cD.ForEach = UD, cD.GetFloatData = fD)
+     function Wp(pp, ip) {
+       Op.e.update(pp, ip), Yp.forEach((ip => {
+         ip(pp)
+       }))
```

#### 11. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L231-L241` → after: `L148-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L148-L150) · [Before (L231-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L231-L241)

```diff
-   },
-   39849: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => pD
-     });
-     class pD {
-       get underlyingResource() {
-         return null
-       }
-       constructor() {
-         this.references = 0, this.bA = 0, this.is32Bits = !1, this.uniqueId = pD._Counter++
+     const yp = {
+       localEffectUpdated: {
+         watch: pp => Yp.add(pp)
```

#### 12. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L246` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L154) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L246)

```diff
-   40063: (DD, zD, wD) => {
+   41233: (pp, ip, cp) => {
```

#### 13. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L250-L278` → after: `L158-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L158-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L158-L175) · [Before (L250-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L250-L278)

```diff
-     var pD = wD(37079),
-       sD = wD(40066);
-     class KD {
-       constructor() {
-         this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this … [truncated]
-       }
-       getNormal() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!this.pickedMesh || zD && !this.pickedMesh.isVerticesDataPresent(sD.k.NormalKind)) return null;
-         let wD, KD = this.pickedMesh.XpD();
-         0 === KD?.length && (KD = null);
-         const rD = pD.n.WI[0],
-           LD = pD.n.WI[1],
-           cD = pD.n.WI[2];
-         if (zD) {
- ... (13 more removed lines; see GitHub link above)
+     var Op = cp(4911),
+       op = cp(4903),
+       Ip = cp(40824),
+       Sp = cp(40837);
+     const xp = new Set(Op.A),
+       Lp = Op.A.map((pp => (new TextEncoder).encode(pp))),
+       Yp = new Map;
+ 
+     function Dp(pp, ip) {
+       var cp;
+       return null === (cp = Yp.get(pp)) || void 0 === cp ? void 0 : cp[ip]
+     }(0, Sp.h)(Op.Zb.NewOtherEntitySettings, (pp => {
+       pp.payloadKind === op.kc.Msgpack && Lp.some((ip => function(pp, ip) {
+         const cp = ip[0];
+         for (let Op = pp.indexOf(cp); - 1 !== Op && Op + ip.length <= pp.length; Op = pp.indexOf(cp, Op + 1)) {
+           let cp = 1;
+ ... (2 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L280-L294` → after: `L177-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L177-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L177-L186) · [Before (L280-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L280-L294)

```diff
-         const gD = (DD, zD) => {
-           if (-1 !== this.thinInstanceIndex) {
-             const wD = DD._thinInstanceDataStorage.matrixData,
-               sD = this.thinInstanceIndex << 4;
-             if (wD && wD.length > sD) {
-               const DD = pD.n.Matrix[0];
-               pD.e.FromArrayToRef(wD, sD, DD), pD.s.TransformNormalToRef(zD, DD, zD)
-             }
-           }
-           let wD = DD.getWorldMatrix();
-           DD.nonUniformScaling && (pD.n.Matrix[0].pC(wD), wD = pD.n.Matrix[0], wD.setTranslationFromFloats(0, 0, 0), wD.invert(), wD.transposeToRef(pD.n.Matrix[1]), wD = pD.n.Matrix[1]), pD.s.TransformNormalToRef(zD, wD, zD)
-         };
-         if (DD && gD(this.pickedMesh, wD), this.ray) {
-           const zD = pD.n.WI[0].pC(wD);
-           DD || gD(this.pickedMesh, zD), pD.s.Dot(zD, this.ray.direction) > 0 && wD.negateInPlace()
+         return !1
+       }(pp.payload, ip))) && function(pp) {
+         if (null === pp || "object" !== typeof pp || null === pp.settings || "object" !== typeof pp.settings) return;
+         const ip = String(pp.eId),
+           cp = pp.settings;
+         let Op = Yp.get(ip);
+         for (const op in cp) {
+           if (!xp.has(op)) continue;
+           const pp = cp[op];
+           null === pp || void 0 === pp ? Op && delete Op[op] : (Op ??= {}, Op[op] = pp)
```

#### 15. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L296-L310` → after: `L188-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L188-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L188-L192) · [Before (L296-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L296-L310)

```diff
-         return wD.normalize(), wD
-       }
-       getTextureCoordinates() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sD.k.UVKind;
-         if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(DD)) return null;
-         const zD = this.pickedMesh.XpD();
-         if (!zD) return null;
-         const wD = this.pickedMesh.getVerticesData(DD);
-         if (!wD) return null;
-         let KD = pD.r.FromArray(wD, 2 * zD[3 * this.faceId]),
-           rD = pD.r.FromArray(wD, 2 * zD[3 * this.faceId + 1]),
-           LD = pD.r.FromArray(wD, 2 * zD[3 * this.faceId + 2]);
-         return KD = KD.scale(this.bu), rD = rD.scale(this.bv), LD = LD.scale(1 - this.bu - this.bv), new pD.r(KD.x + rD.x + LD.x, KD.y + rD.y + LD.y)
-       }
-     }
+         Op && Yp.set(ip, Op)
+       }((0, Ip.c)(pp.payload))
+     })), (0, Sp.d)((() => {
+       Yp.clear()
+     }))
```

#### 16. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L312` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L194) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L312)

```diff
-   39898: (DD, zD, wD) => {
+   41221: (pp, ip, cp) => {
```

#### 17. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L314` → after: `L196-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L196-L198) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L314)

```diff
-       b: () => KD
+       b: () => Wp,
+       d: () => Yp,
+       e: () => Ap
```

#### 18. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L316-L317` → after: `L200-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L200-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L200-L207) · [Before (L316-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L316-L317)

```diff
-     var pD = wD(39766);
-     let sD = !1;
+     var Op = cp(39182),
+       op = cp(1963),
+       Ip = cp(1313),
+       Sp = cp(40813),
+       xp = cp(40818),
+       Lp = cp(40837);
+     const Yp = new Op.e;
+     let Dp = {};
```

#### 19. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L319-L327` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L209-L210) · [Before (L319-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L319-L327)

```diff
-     function KD() {
-       sD || (sD = !0, pD.ThinEngine.prototype.updateDynamicIndexBuffer = function(DD, zD) {
-         let wD;
-         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(DD), wD = DD.is32Bits ? zD instanceof Uint32Array ? zD : new Uint32Array(zD) : zD instanceof Uint16Array ? zD : new Uint16Array(zD), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, wD, … [truncated]
-       }, pD.ThinEngine.prototype.updateDynamicVertexBuffer = function(DD, zD, wD, pD) {
-         this.bindArrayBuffer(DD), void 0 === wD && (wD = 0);
-         const sD = zD.byteLength || zD.length;
-         void 0 === pD || pD >= sD && 0 === wD ? zD instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, wD, new Float32Array(zD)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, wD, zD) : zD instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, wD, new Floa … [truncated]
-       })
+     function Ap(pp) {
+       return Dp[pp]
```

#### 20. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L330` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L279) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L330)

```diff
-   39858: (DD, zD, wD) => {
+   41240: (pp, ip, cp) => {
```

#### 21. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L332` → after: `L281-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L281-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L281-L284) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L332)

```diff
-       e: () => pD
+       e: () => Mp,
+       h: () => wp,
+       j: () => lp,
+       k: () => Qp
```

#### 22. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L334-L349` → after: `L286-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L286-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L286-L315) · [Before (L334-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L334-L349)

```diff
-     class pD {
-       get underlyingResource() {
-         return this._webGLTexture
-       }
-       constructor() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           zD = arguments.length > 1 ? arguments[1] : void 0;
-         if (this._MSAARenderBuffers = null, this._context = zD, !DD && (DD = zD.createTexture(), !DD)) throw new Error("Unable to create webGL texture");
-         this.set(DD)
-       }
-       setUsage() {}
-       set(DD) {
-         this._webGLTexture = DD
-       }
-       reset() {
-         this._webGLTexture = null, this._MSAARenderBuffers = null
+     var Op = cp(1284),
+       op = cp(629),
+       Ip = cp(104),
+       Sp = cp(4911),
+       xp = cp(40769),
+       Lp = cp(40806),
+       Yp = cp(40783),
+       Dp = cp(41233),
+       Ap = cp(41221),
+       Pp = cp(40818),
+       Wp = cp(40837);
+ 
+     function yp(pp) {
+       let {
+         deadEId: ip,
+         killerEId: cp,
+ ... (14 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L351-L352` → after: `L317-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L317-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L317-L329) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L351-L352)

```diff
-       addMSAARenderBuffer(DD) {
-         this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(DD)
+     }
+ 
+     function Up(pp) {
+       let {
+         killer: ip,
+         victim: cp,
+         withItem: Op
+       } = pp;
+       return {
+         killer: dp(ip),
+         victim: dp(cp),
+         withItem: Op,
+         killstreak: 0
```

#### 24. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L354-L357` → after: `L331-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L331-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L331-L440) · [Before (L354-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L354-L357)

```diff
-       releaseMSAARenderBuffers() {
-         if (this._MSAARenderBuffers) {
-           for (const DD of this._MSAARenderBuffers) this._context.deleteRenderbuffer(DD);
-           this._MSAARenderBuffers = null
+     }
+ 
+     function wp(pp) {
+       mp && qp((() => "killed" === pp.kind ? yp(pp.body) : Up(pp.body)))
+     }
+     const vp = "#2727f1",
+       tp = "#912c2c";
+ 
+     function Hp(pp, ip) {
+       var cp;
+       return Ap.d.has(pp) ? null === (cp = Ap.d.getSettings(pp)) || void 0 === cp ? void 0 : cp[ip] : (0, Dp.c)(pp, ip)
+     }
+ 
+     function dp(pp) {
+       var ip, cp, Sp, xp, Dp;
+       let {
+ ... (94 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L369` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L444) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L369)

```diff
-   39826: (DD, zD, wD) => {
+   39182: (pp, ip, cp) => {
```

#### 26. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L371` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L446) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L371)

```diff
-       c: () => nD
+       e: () => Op
```

#### 27. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L519-L523` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L450) · [Before (L519-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L519-L523)

```diff
-         let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, DD && this.reset()
-       }
-       reset() {
-         this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
+         this.members = new Map
```

#### 28. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L526-L590` → after: `L453-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L453-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L453-L481) · [Before (L526-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L526-L590)

```diff
-         if (!DD) return;
-         const zD = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
-         this.enabled = zD ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = zD ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = zD ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = zD ? this.stencilMaterial. … [truncated]
-       }
-     }
-     class AD {
-       constructor() {
-         this.reset()
-       }
-       reset() {
-         this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = AD.ALWAYS, this.opStencilFail = AD.KEEP, this.opDepthFail = AD.KEEP, this.opStencilDepthPass = AD.REPLACE, this.backFunc = AD.ALWAYS, this.backOpStencilFail = AD.KEEP, this.backOpDepthF … [truncated]
-       }
-       get stencilFunc() {
-         return this.func
-       }
-       set stencilFunc(DD) {
- ... (49 more removed lines; see GitHub link above)
+         const ip = {
+           added: [],
+           removed: [],
+           settingChanges: []
+         };
+         for (const Op of pp.hp) {
+           let pp = this.members.get(Op.ap);
+           if (pp || (pp = {
+               name: null,
+               settings: {}
+             }, this.members.set(Op.ap, pp), ip.added.push(Op.ap)), null !== Op.np && (pp.name = Op.np), null !== Op.Fp || Op.Gp.length > 0) {
+             const cp = null === Op.Fp ? {} : JSON.parse(Op.Fp);
+             Object.assign(pp.settings, cp);
+             for (const ip of Op.Gp) delete pp.settings[ip], cp[ip] = void 0;
+             ip.settingChanges.push({
+               playerId: Op.ap,
+ ... (13 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L592-L593` → after: `L483-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L483-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L483-L484) · [Before (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L592-L593)

```diff
-       get stencilBackOpStencilDepthPass() {
-         return this.backOpStencilDepthPass
+       has(pp) {
+         return this.members.has(pp)
```

#### 30. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L595-L596` → after: `L486-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L486-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L486-L487) · [Before (L595-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L595-L596)

```diff
-       set stencilBackOpStencilDepthPass(DD) {
-         this.backOpStencilDepthPass = DD
+       ids() {
+         return [...this.members.keys()]
```

#### 31. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L598-L599` → after: `L489-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L489-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L489-L491) · [Before (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L598-L599)

```diff
-       get stencilMask() {
-         return this.mask
+       getName(pp) {
+         var ip, cp;
+         return null !== (ip = null === (cp = this.members.get(pp)) || void 0 === cp ? void 0 : cp.name) && void 0 !== ip ? ip : void 0
```

#### 32. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L601-L602` → after: `L493-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L493-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L493-L495) · [Before (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L601-L602)

```diff
-       set stencilMask(DD) {
-         this.mask = DD
+       getSettings(pp) {
+         var ip;
+         return null === (ip = this.members.get(pp)) || void 0 === ip ? void 0 : ip.settings
```

#### 33. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L604-L605` → after: `L497-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L497-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L497-L499) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L604-L605)

```diff
-       get stencilTest() {
-         return this.enabled
+       getSetting(pp, ip) {
+         var cp;
+         return null === (cp = this.members.get(pp)) || void 0 === cp ? void 0 : cp.settings[ip]
```

#### 34. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L607-L608` → after: `L501-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/252.js#L501-L502) · [Before (L607-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/252.js#L607-L608)

```diff
-       set stencilTest(DD) {
-         this.enabled = DD
+       clear() {
+         this.members.clear()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/253.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/253.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db)

#### 1. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/253.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/253.js#L2)

```diff
- export const ids = [253, 353];
+ export const ids = [253];
```

#### 2. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/253.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/253.js#L4-L6)

```diff
-   39776: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => pD
+   40003: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       playDocsSound: () => xp
```

#### 3. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L8-L10` → after: `L8-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/253.js#L8-L31) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/253.js#L8-L10)

```diff
-     class pD {
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pD.ShadersRepository : pD.ShadersRepositoryWGSL
+     var Op = cp(4974),
+       op = cp(36948),
+       Ip = cp(1211);
+     const Sp = new Map;
+ 
+     function xp(pp, ip, cp, xp, Lp) {
+       let Yp, Dp = null,
+         Ap = 0,
+         Pp = 0;
+       if (ip) Yp = new Op.Howl({
+         src: [`${Ip.clientSideServerUrls.staticUrl}/sounds/music/${pp}.mp3`],
+         html5: !0,
+         volume: cp
+       });
+       else {
+         var Wp;
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L12-L13` → after: `L33-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L33-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/253.js#L33-L74) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/253.js#L12-L13)

```diff
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pD.ShadersStore : pD.ShadersStoreWGSL
+       const yp = ip ? Yp.play() : Yp.play(pp);
+       Yp.volume(cp, yp), xp > 0 && Yp.seek(Ap + xp, yp);
+       const Up = () => ip ? Yp.duration() : Pp;
+       let wp = !1;
+       const vp = pp => {
+           wp || (wp = !0, Yp.off("play", tp, yp), Yp.off("end", Hp, yp), Yp.off("loaderror", ep), Yp.off("playerror", dp, yp), ip && Yp.unload(), Lp.onEnd(pp))
+         },
+         tp = () => {
+           Lp.onPlay(Up())
+         },
+         Hp = () => {
+           vp(!1)
+         },
+         dp = (ip, cp) => {
+           console.error(`Could not play docs sound ${pp}`, cp), vp(!0)
+         },
+ ... (26 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/254.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/254.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6)

#### 1. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L4-L12` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L4-L6) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L4-L12)

```diff
-   39984: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => UD,
-       g: () => AD,
-       h: () => cD,
-       j: () => fD,
-       m: () => gD,
-       n: () => LD,
-       r: () => RD
+   40016: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       default: () => Zp
```

#### 2. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L14-L228` → after: `L8-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L8-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L8-L66) · [Before (L14-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L14-L228)

```diff
-     var pD = wD(38662),
-       sD = wD(39990);
- 
-     function KD(DD, zD, wD, pD) {
-       switch (zD) {
-         case 5120: {
-           let zD = DD.getInt8(wD);
-           return pD && (zD = Math.max(zD / 127, -1)), zD
-         }
-         case 5121: {
-           let zD = DD.getUint8(wD);
-           return pD && (zD /= 255), zD
-         }
-         case 5122: {
-           let zD = DD.getInt16(wD, !0);
-           return pD && (zD = Math.max(zD / 32767, -1)), zD
- ... (199 more removed lines; see GitHub link above)
+     cp(6592);
+     var Op = cp(62),
+       op = cp(40024),
+       Ip = cp(40289),
+       Sp = cp(40405),
+       xp = cp(40443),
+       Lp = cp(40459),
+       Yp = cp(37479),
+       Dp = cp(37313),
+       Ap = cp(40568),
+       Pp = cp(40626),
+       Wp = (cp(40663), cp(1234)),
+       yp = cp(195),
+       Up = cp(1201),
+       wp = cp(25),
+       vp = cp(2835),
+ ... (43 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L231-L267` → after: `L69-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L69-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L69-L101) · [Before (L231-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L231-L267)

```diff
-       const zD = DD.buffer;
-       if (zD instanceof ArrayBuffer) return DD;
-       const wD = new ArrayBuffer(DD.byteLength);
-       return new Uint8Array(wD).set(new Uint8Array(zD, DD.byteOffset, DD.byteLength)), wD
-     }
-   },
-   39813: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => XD,
-       g: () => ED,
-       j: () => QD,
-       h: () => jD,
-       l: () => dD
-     });
-     class pD {
-       constructor() {
- ... (21 more removed lines; see GitHub link above)
+       let {
+         heatmap: ip,
+         scale: cp,
+         fullyOpaqueFrom: Qp,
+         bounds: fp,
+         fitBounds: bp,
+         schematic: hp,
+         controls: ap,
+         onStepTime: np,
+         onShowAllTime: Fp,
+         onTogglePlaying: gp,
+         getReadout: rp = null
+       } = pp;
+       const {
+         t: Zp
+       } = (0, Up.H)(), {
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L271-L293` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L104-L107) · [Before (L271-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L271-L293)

```diff
-           pD += wD + "\n"
-         }
-         for (const sD of this.children) pD += sD.process(DD, zD, wD);
-         return this.additionalDefineKey && (DD[this.additionalDefineKey] = this.additionalDefineValue || "true", wD[this.additionalDefineKey] = DD[this.additionalDefineKey]), pD
-       }
-     }
-     class sD {
-       constructor() {
-         this._lines = []
-       }
-       get currentLine() {
-         return this._lines[this.lineIndex]
-       }
-       get canRead() {
-         return this.lineIndex < this._lines.length - 1
-       }
- ... (7 more removed lines; see GitHub link above)
+           return {
+             positions: Int32Array.from(cp),
+             values: Float64Array.from(Op),
+             count: Op.length
```

#### 5. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L295-L299` → after: `L109-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L109-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L109-L115) · [Before (L295-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L295-L299)

```diff
-           const DD = zD.trim();
-           if (!DD) continue;
-           if (DD.startsWith("//")) {
-             this._lines.push(zD);
-             continue
+         }(ip, Ei)), [ip, Ei]),
+         Bi = mp * xi.cameraFOV / 100,
+         Ni = Wi.height > 0 ? Wi.width / Wi.height : 1,
+         Ti = (0, Op.useMemo)((() => function(pp, ip) {
+           return {
+             min: [pp.min[0] - ip[0], pp.min[1] - ip[1], pp.min[2] - ip[2]],
+             max: [pp.max[0] - ip[0] + 1, pp.max[1] - ip[1] + 1, pp.max[2] - ip[2] + 1]
```

#### 6. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L301-L309` → after: `L117-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L117-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L117-L172) · [Before (L301-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L301-L309)

```diff
-           const wD = DD.indexOf(";");
-           if (-1 === wD) this._lines.push(DD);
-           else if (wD === DD.length - 1) DD.length > 1 && this._lines.push(DD);
-           else {
-             const DD = zD.split(";");
-             for (let zD = 0; zD < DD.length; zD++) {
-               let wD = DD[zD];
-               wD && (wD = wD.trim(), wD && this._lines.push(wD + (zD !== DD.length - 1 ? ";" : "")))
-             }
+         }(bp, Ei)), [bp, Ei]),
+         fi = oi(Ti, Ni, Bi),
+         bi = null !== Mi && void 0 !== Mi ? Mi : fi,
+         ai = (0, Op.useRef)({
+           fittedView: fi,
+           fieldOfView: Bi,
+           mouseSensitivity: xi.mouseSensitivity,
+           canLock: ti
+         });
+       ai.current = {
+         fittedView: fi,
+         fieldOfView: Bi,
+         mouseSensitivity: xi.mouseSensitivity,
+         canLock: ti
+       };
+       const ni = (0, Op.useMemo)((() => {
+ ... (40 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L311-L347` → after: `L174-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L174-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L174-L259) · [Before (L311-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L311-L347)

```diff
-         }
-       }
-     }
-     class KD extends pD {
-       process(DD, zD, wD) {
-         for (let pD = 0; pD < this.children.length; pD++) {
-           const sD = this.children[pD];
-           if (sD.isValid(DD)) return sD.process(DD, zD, wD)
-         }
-         return ""
-       }
-     }
-     class rD extends pD {
-       isValid(DD) {
-         return this.testExpression.isTrue(DD)
-       }
- ... (21 more removed lines; see GitHub link above)
+         }), [ji, ip, Ei, bi, Qi, cp, Qp]),
+         {
+           keyHandlers: Fi
+         } = (0, ep.f)({
+           isEnabled: ji,
+           claimedKeyCodes: Xp,
+           RP: pp => {
+             Ci((ip => function(pp, ip) {
+               const cp = [Math.sin(pp.heading), 0, Math.cos(pp.heading)],
+                 Op = Li(Li(Yi(cp, ip.forward), Yi(Oi(pp.heading), ip.right)), [0, ip.up, 0]);
+               return {
+                 ...pp,
+                 position: Li(pp.position, Op)
+               }
+             }(null !== ip && void 0 !== ip ? ip : ai.current.fittedView, pp)))
+           },
+ ... (70 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L349` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L261) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L349)

```diff
-             RD = RD.trim(), "" !== RD && (wD.push(RD), RD = "")
+             di.current = !1, vi(document.pointerLockElement === pp)
```

#### 9. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L351-L352` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L263-L264) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L351-L352)

```diff
-           KD = DD => {
-             pD < LD._Stack.length - 1 && (LD._Stack[++pD] = DD)
+           cp = () => {
+             di.current && (di.current = !1, Hi(!1))
```

#### 10. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L354-L572` → after: `L266-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L266-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L266-L275) · [Before (L354-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L354-L572)

```diff
-           rD = () => LD._Stack[pD],
-           cD = () => -1 === pD ? "!!INVALID EXPRESSION!!" : LD._Stack[pD--];
-         let gD = 0,
-           RD = "";
-         for (; gD < DD.length;) {
-           const zD = DD.charAt(gD),
-             AD = gD < DD.length - 1 ? DD.substring(gD, 2 + gD) : "";
-           if ("(" === zD) RD = "", KD(zD);
-           else if (")" === zD) {
-             for (sD(); - 1 !== pD && "(" !== rD();) wD.push(cD());
-             cD()
-           } else if (LD._OperatorPriority[AD] > 1) {
-             for (sD(); - 1 !== pD && LD._OperatorPriority[rD()] >= LD._OperatorPriority[AD];) wD.push(cD());
-             KD(AD), gD++
-           } else RD += zD;
-           gD++
- ... (203 more removed lines; see GitHub link above)
+           Op = ip => {
+             const cp = !ai.current.canLock && document.activeElement === pp && 0 !== (1 & ip.buttons);
+             if (document.pointerLockElement !== pp && !cp) return;
+             const Op = ai.current.mouseSensitivity * qp;
+             Ci((pp => function(pp, ip, cp) {
+               const Op = 2 * Math.PI;
+               return {
+                 ...pp,
+                 heading: ((pp.heading + ip) % Op + Op) % Op,
+                 pitch: Math.max(-Tp, Math.min(Tp, pp.pitch + cp))
```

#### 11. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L574-L575` → after: `L277-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L277-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L277-L300) · [Before (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L574-L575)

```diff
-             }
-             continue
+             }(null !== pp && void 0 !== pp ? pp : ai.current.fittedView, ip.movementX * Op, ip.movementY * Op)))
+           };
+         return document.addEventListener("pointerlockchange", ip), document.addEventListener("pointerlockerror", cp), document.addEventListener("pointermove", Op), () => {
+           document.removeEventListener("pointerlockchange", ip), document.removeEventListener("pointerlockerror", cp), document.removeEventListener("pointermove", Op), document.pointerLockElement === pp && (0, jp.c)()
+         }
+       }), []), (0, Op.useEffect)((() => {
+         const pp = Pi.current;
+         null !== pp && 0 !== Wi.width && 0 !== Wi.height && (pp.engine.resize(), pp.needsRender = !0)
+       }), [Wi.width, Wi.height]), (0, Op.useEffect)((() => {
+         const pp = Pi.current;
+         null !== pp && (pp.targetFieldOfView = Bi * (ki ? Rp : 1))
+       }), [Bi, ki]), (0, Op.useEffect)((() => {
+         const pp = Pi.current;
+         null !== pp && function(pp, ip, cp, Op) {
+           const op = [],
+             Ip = [],
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L577-L622` → after: `L302-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L302-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L302-L326) · [Before (L577-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L577-L622)

```diff
-         }
-         const rD = new pD;
-         if (rD.line = sD, zD.children.push(rD), "#" === sD[0] && "d" === sD[1]) {
-           const DD = sD.replace(";", "").split(" ");
-           rD.additionalDefineKey = DD[1], 3 === DD.length && (rD.additionalDefineValue = DD[2])
-         }
-       }
-       return !1
-     }
- 
-     function TD(DD, zD, wD, KD) {
-       const rD = new pD,
-         LD = new sD;
-       return LD.lineIndex = -1, LD.lines = DD.split("\n"), xD(LD, rD, KD), rD.process(zD, wD, KD)
-     }
- 
- ... (30 more removed lines; see GitHub link above)
+           Kp(pp.cells, Float32Array.from(op), Float32Array.from(Ip), Ip.length / 4), pp.translucent = {
+             rc: Float32Array.from(Sp),
+             colours: Float32Array.from(xp),
+             count: xp.length / 4
+           }, pp.translucentSortedFrom = null, Vp(pp), pp.needsRender = !0
+         }(pp, Ji, cp, Qp)
+       }), [Ji, cp, Qp]), (0, Op.useEffect)((() => {
+         const pp = Pi.current;
+         null !== pp && function(pp, ip) {
+           pp.chunkGridOrigin = ip, pp.chunkGridCentre = null, sp(pp)
+         }(pp, fp.min)
+       }), [fp]), (0, Op.useEffect)((() => {
+         const pp = Pi.current;
+         null !== pp && function(pp, ip, cp) {
+           const Op = [],
+             op = [];
+ ... (9 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L625-L634` → after: `L329-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L329-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L329-L387) · [Before (L625-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L625-L634)

```diff
-           if (LD[4]) {
-             const DD = LD[5];
-             if (-1 !== DD.indexOf("..")) {
-               const pD = DD.split(".."),
-                 sD = parseInt(pD[0]);
-               let KD = parseInt(pD[1]),
-                 rD = wD.slice(0);
-               wD = "", isNaN(KD) && (KD = zD.indexParameters[pD[1]]);
-               for (let DD = sD; DD < KD; DD++) zD.supportsUniformBuffers || (rD = rD.replace(nD, ((DD, zD) => zD + "{X}"))), wD += rD.replace(MD, DD.toString()) + "\n"
-             } else zD.supportsUniformBuffers || (wD = wD.replace(nD, ((DD, zD) => zD + "{X}"))), wD = wD.replace(MD, DD)
+           Kp(pp.schematicBlocks, Float32Array.from(Op), Float32Array.from(op), op.length / 4), pp.needsRender = !0
+         }(pp, hp, fp)
+       }), [hp, fp]), (0, Op.useEffect)((() => {
+         const pp = Pi.current;
+         null !== pp && null !== pp.chunkGrid && (pp.chunkGrid.isVisible = Ri, pp.needsRender = !0)
+       }), [Ri, fp]), (0, Op.useEffect)((() => {
+         const pp = Pi.current;
+         null !== pp && function(pp, ip, cp) {
+           const {
+             camera: Op
+           } = pp;
+           Op.position.set(ip.position[0], ip.position[1], ip.position[2]), Op.rotation.set(ip.pitch, ip.heading, 0);
+           const op = (Jp + 1) * yp.g.Qy * Math.sqrt(3);
+           Op.maxZ = Math.max(op, Math.hypot(...Li(ip.position, Yi(Si({
+             min: [0, 0, 0],
+             max: cp
+ ... (43 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L636-L640` → after: `L389-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L389-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L389-L425) · [Before (L636-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L636-L640)

```diff
-           const pD = [];
-           for (const DD of sD) {
-             const zD = DD.split(LD[0]);
-             for (let DD = 0; DD < zD.length - 1; DD++) pD.push(zD[DD]), pD.push(wD);
-             pD.push(zD[zD.length - 1])
+         }), yi && (0, kp.jsx)("div", {
+           className: "StudioHeatmap3DUnavailable SmallTextLight",
+           children: Zp("3D view isn't available in this browser.")
+         }), ji && (0, kp.jsx)("div", {
+           className: "StudioHeatmap3DCrosshair"
+         }), (0, kp.jsx)("div", {
+           className: "StudioHeatmap3DCoordinates SmallTextLight",
+           children: bi.position.map(((pp, ip) => (pp + Ei[ip]).toFixed(2))).join(" ")
+         }), Ri && (0, kp.jsx)(zp, {
+           heading: bi.heading,
+           pitch: bi.pitch,
+           onViewFrom: pp => {
+             const ip = Yi(pp, -1),
+               cp = 0 === ip[1] ? {
+                 heading: Math.atan2(ip[0], ip[2]),
+                 pitch: 0
+ ... (21 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L642-L652` → after: `L427-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L427-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L427-L447) · [Before (L642-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L642-L652)

```diff
-           sD = pD, KD = KD || wD.indexOf("#include<") >= 0 || wD.indexOf("#include <") >= 0
-         }
-       }
-       OD.length = 0;
-       const rD = sD.join("");
-       KD ? jD(rD.toString(), zD, wD) : wD(rD)
-     }
-     const dD = {
-       loadFile: (DD, zD, wD, pD, sD, KD) => {
-         throw (0, UD.j)("FileTools")
-       }
+         }), null !== ni && (0, kp.jsx)("div", {
+           className: "StudioHeatmapMapReadout SmallTextLight",
+           children: null === rp ? Zp("studio:heatmapBlockReadout", {
+             x: ni.x,
+             y: ni.y,
+             z: ni.z,
+             count: (0, Wp.O)(ni.value)
+           }) : rp(ni.x, ni.y, ni.z, ni.value)
+         }), (0, kp.jsxs)("div", {
+           className: "StudioHeatmapMapControls",
+           children: [ap, (0, kp.jsx)(tp.S, {
+             active: null === Mi,
+             onClick: () => {
+               Ci(null)
+             },
+             children: (0, kp.jsx)(Hp.d, {
+ ... (5 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L666-L667` → after: `L450-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L450-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L450-L556) · [Before (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L666-L667)

```diff
-     function KD(DD, zD) {
-       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (zD ? zD + "\n" : "") + DD
+     function zp(pp) {
+       let {
+         heading: ip,
+         pitch: cp,
+         onViewFrom: op,
+         onTurn: Ip,
+         onFlip: Sp
+       } = pp;
+       const {
+         t: xp
+       } = (0, Up.H)(), Lp = (0, Op.useRef)(null), Yp = ci({
+         heading: ip,
+         pitch: cp
+       }), Dp = Oi(ip), Ap = Ai(Yp, Dp), Pp = np + Fp + 2, Wp = ap.flatMap((pp => [1, -1].map((ip => {
+         const cp = Yi(pp.direction, ip);
+         return {
+ ... (91 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L670-L673` → after: `L559-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L559-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L559-L582) · [Before (L670-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L670-L673)

```diff
-     function rD(DD, zD, wD, KD, rD, LD, cD) {
-       const gD = cD || sD.loadFile;
-       if (!gD) throw (0, pD.j)("FileTools");
-       return gD(DD, zD, wD, KD, rD, LD)
+     function sp(pp) {
+       var ip, cp, Op;
+       const {
+         chunkGridOrigin: op,
+         camera: Ip
+       } = pp;
+       if (null === op) return;
+       const Sp = [Ip.position.x, Ip.position.y, Ip.position.z],
+         xp = [0, 2].map((pp => Math.floor((Sp[pp] + op[pp]) / yp.g.Qy))),
+         Lp = pp.chunkGridCentre;
+       if (null !== Lp && Lp.every(((pp, ip) => pp === xp[ip]))) return;
+       const Ap = null === (ip = null === (cp = pp.chunkGrid) || void 0 === cp ? void 0 : cp.isVisible) || void 0 === ip || ip;
+       null === (Op = pp.chunkGrid) || void 0 === Op || Op.dispose();
+       const [Wp, Up] = [0, 2].map(((pp, ip) => {
+         const cp = [];
+         for (let Op = xp[ip] - Jp; Op <= xp[ip] + Jp + 1; Op++) cp.push(Op * yp.g.Qy - op[pp]);
+ ... (8 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L677-L698` → after: `L586-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L586-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L586-L590) · [Before (L677-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L677-L698)

```diff
-       if (DD) return zD ? DD.IS_NDC_HALF_ZRANGE = "" : delete DD.IS_NDC_HALF_ZRANGE, wD ? DD.USE_REVERSE_DEPTHBUFFER = "" : delete DD.USE_REVERSE_DEPTHBUFFER, void(pD ? DD.USE_EXACT_SRGB_CONVERSIONS = "" : delete DD.USE_EXACT_SRGB_CONVERSIONS);
-       {
-         let DD = "";
-         return zD && (DD += "#define IS_NDC_HALF_ZRANGE"), wD && (DD && (DD += "\n"), DD += "#define USE_REVERSE_DEPTHBUFFER"), pD && (DD && (DD += "\n"), DD += "#define USE_EXACT_SRGB_CONVERSIONS"), DD
-       }
-     }
- 
-     function cD(DD, zD) {
-       let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         pD = arguments.length > 3 ? arguments[3] : void 0;
-       switch (DD) {
-         case 3: {
-           const DD = new Int8Array(zD);
-           return pD && DD.set(new Int8Array(pD)), DD
-         }
-         case 0: {
- ... (6 more removed lines; see GitHub link above)
+       pp.I9("matrix", function(pp, ip) {
+         const cp = new Float32Array(16 * ip);
+         for (let Op = 0; Op < ip; Op++) {
+           const ip = 16 * Op;
+           cp[ip] = 1, cp[ip + 5] = 1, cp[ip + 10] = 1, cp[ip + 12] = pp[3 * Op], cp[ip + 13] = pp[3 * Op + 1], cp[ip + 14] = pp[3 * Op + 2], cp[ip + 15] = 1
```

#### 19. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L700-L727` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L592-L593) · [Before (L700-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L700-L727)

```diff
-         case 5:
-         case 8:
-         case 9:
-         case 10:
-         case 2: {
-           const DD = "number" !== typeof zD ? new Uint16Array(zD) : new Uint16Array(wD ? zD / 2 : zD);
-           return pD && DD.set(new Uint16Array(pD)), DD
-         }
-         case 6: {
-           const DD = "number" !== typeof zD ? new Int32Array(zD) : new Int32Array(wD ? zD / 4 : zD);
-           return pD && DD.set(new Int32Array(pD)), DD
-         }
-         case 7:
-         case 11:
-         case 12:
-         case 13:
- ... (12 more removed lines; see GitHub link above)
+         return cp
+       }(ip, Op), 16, !0), pp.I9("color", cp, 4, !0), pp.isVisible = Op > 0
```

#### 20. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L740` → after: `L597-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L597-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L597-L616) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L740)

```diff
-       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !pD[DD]) return pD[DD] = !0, `${DD} needs to be imported before as it contains a side-effect required by your code.`
+       const {
+         camera: ip,
+         translucent: cp
+       } = pp, Op = [ip.position.x, ip.position.y, ip.position.z], op = pp.translucentSortedFrom;
+       if (null !== op && Math.hypot(Op[0] - op[0], Op[1] - op[1], Op[2] - op[2]) < Qp) return;
+       pp.translucentSortedFrom = Op;
+       const Ip = new Float64Array(cp.count),
+         Sp = new Uint32Array(cp.count);
+       for (let Yp = 0; Yp < cp.count; Yp++) {
+         const pp = cp.rc[3 * Yp] - Op[0],
+           ip = cp.rc[3 * Yp + 1] - Op[1],
+           op = cp.rc[3 * Yp + 2] - Op[2];
+         Ip[Yp] = pp * pp + ip * ip + op * op, Sp[Yp] = Yp
+       }
+       Sp.sort(((pp, ip) => Ip[ip] - Ip[pp]));
+       const xp = new Float32Array(3 * cp.count),
+ ... (4 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L747-L754` → after: `L620-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L620-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L620-L624) · [Before (L747-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L747-L754)

```diff
-       let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const pD = function() {
-         if ((wD || rD) && 0 === LD) {
-           const wD = `${DD}.${zD}`;
-           KD[wD] || (KD[wD] = !0, console.warn(`[Babylon.js] ${wD}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
-         }
-       };
-       return pD.__isSideEffectStub = !0, pD
+       const cp = (cp, Op, op) => new Dp.Zy(0 === cp ? pp[0] : ip[0], 0 === Op ? pp[1] : ip[1], 0 === op ? pp[2] : ip[2]),
+         Op = [];
+       for (const op of [0, 1])
+         for (const pp of [0, 1]) Op.push([cp(0, op, pp), cp(1, op, pp)], [cp(op, 0, pp), cp(op, 1, pp)], [cp(op, pp, 0), cp(op, pp, 1)]);
+       return Op
```

#### 22. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L758-L787` → after: `L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L628) · [Before (L758-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L758-L787)

```diff
-       return !!DD && !DD.__isSideEffectStub
-     }
- 
-     function RD(DD, zD) {
-       return {
-         get() {},
-         set(DD) {
-           Object.defineProperty(this, zD, {
-             value: DD,
-             writable: !0,
-             configurable: !0,
-             enumerable: !0
-           })
-         },
-         configurable: !0,
-         enumerable: !0
- ... (14 more removed lines; see GitHub link above)
+       return [Math.sin(pp.heading) * Math.cos(pp.pitch), -Math.sin(pp.pitch), Math.cos(pp.heading) * Math.cos(pp.pitch)]
```

#### 23. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L791-L823` → after: `L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L632) · [Before (L791-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L791-L823)

```diff
-       let zD = "",
-         wD = DD.firstChild;
-       for (; wD;) 3 === wD.nodeType && (zD += wD.textContent), wD = wD.nextSibling;
-       return zD
-     }
-     wD.d(zD, {
-       b: () => rD,
-       c: () => KD,
-       f: () => sD,
-       h: () => pD
-     })
-   },
-   39971: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => pD,
-       d: () => sD,
- ... (17 more removed lines; see GitHub link above)
+       return [Math.cos(pp), 0, -Math.sin(pp)]
```

#### 24. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L825-L860` → after: `L634-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L634-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L634-L657) · [Before (L825-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L825-L860)

```diff
-   },
-   39960: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => bD,
-       g: () => MD,
-       h: () => PD,
-       l: () => xD,
-       o: () => XD,
-       r: () => ED,
-       u: () => QD,
-       y: () => lD,
-       C: () => VD,
-       G: () => OD
-     });
-     var pD = wD(39969),
-       sD = wD(39785),
- ... (20 more removed lines; see GitHub link above)
+ 
+     function oi(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
+         heading: fp,
+         pitch: bp
+       };
+       const op = [pp.max[0] - pp.min[0], pp.max[1] - pp.min[1], pp.max[2] - pp.min[2]],
+         Ip = ci(Op),
+         Sp = Oi(Op.heading),
+         xp = Ai(Ip, Sp),
+         Lp = Math.tan(cp / 2),
+         Yp = Lp * ip;
+       let Dp = 1;
+       for (const Ap of [-op[0] / 2, op[0] / 2])
+         for (const pp of [-op[1] / 2, op[1] / 2])
+           for (const ip of [-op[2] / 2, op[2] / 2]) {
+ ... (8 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L863-L865` → after: `L660-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L660-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L660-L669) · [Before (L863-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L863-L865)

```diff
-     class nD extends LD.g {
-       constructor(DD, zD) {
-         super(DD, LD.d.ReadFileError), this.file = zD, this.name = "ReadFileError", LD.c._setPrototypeOf(this, nD.prototype)
+ 
+     function Ii(pp, ip, cp) {
+       const Op = xi(pp),
+         op = xi(cp),
+         Ip = Li(pp.position, Yi(ip, -1)),
+         Sp = [0, 1, 2].reduce(((pp, ip) => Li(pp, Yi(op[ip], Di(Ip, Op[ip])))), [0, 0, 0]);
+       return {
+         position: Li(ip, Sp),
+         heading: cp.heading,
+         pitch: cp.pitch
```

#### 26. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1186` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L674) · [Before (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L1186)

```diff
-       return (0, cD.c)(DD.split(",")[1])
+       return Yi(Li(pp.min, pp.max), .5)
```

#### 27. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1237-L1238` → after: `L677-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L677-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L677-L680) · [Before (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L1237-L1238)

```diff
-     function lD() {
-       iD || (iD = !0, SD(bD, jD, MD, xD, CD, XD, ED, QD, VD, OD), RD.e.loadFile = XD, RD.e.loadImage = ED, AD.l.loadFile = XD)
+     function xi(pp) {
+       const ip = ci(pp),
+         cp = Oi(pp.heading);
+       return [ip, cp, Ai(ip, cp)]
```

#### 28. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1249-L1283` → after: `L683-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L683-L684) · [Before (L1249-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L1249-L1283)

```diff
-     function sD() {
-       if (pD) return pD;
-       const DD = new ArrayBuffer(4),
-         zD = new Float32Array(DD),
-         wD = new Uint32Array(DD),
-         sD = new Uint32Array(512),
-         KD = new Uint32Array(512);
-       for (let pD = 0; pD < 256; ++pD) {
-         const DD = pD - 127;
-         DD < -24 ? (sD[pD] = 0, sD[256 | pD] = 32768, KD[pD] = 24, KD[256 | pD] = 24) : DD < -14 ? (sD[pD] = 1024 >> -DD - 14, sD[256 | pD] = 1024 >> -DD - 14 | 32768, KD[pD] = -DD - 1, KD[256 | pD] = -DD - 1) : DD <= 15 ? (sD[pD] = DD + 15 << 10, sD[256 | pD] = DD + 15 << 10 | 3 … [truncated]
-       }
-       const rD = new Uint32Array(2048),
-         LD = new Uint32Array(64),
-         cD = new Uint32Array(64);
-       for (let pD = 1; pD < 1024; ++pD) {
-         let DD = pD << 13,
- ... (19 more removed lines; see GitHub link above)
+     function Li(pp, ip) {
+       return [pp[0] + ip[0], pp[1] + ip[1], pp[2] + ip[2]]
```

#### 29. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1287-L1292` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L687-L688) · [Before (L1287-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L1287-L1292)

```diff
-     function rD(DD) {
-       const zD = sD();
-       zD.floatView[0] = DD;
-       const wD = zD.uint32View[0],
-         pD = wD >> 23 & 511;
-       return zD.baseTable[pD] + ((8388607 & wD) >> zD.shiftTable[pD])
+     function Yi(pp, ip) {
+       return [pp[0] * ip, pp[1] * ip, pp[2] * ip]
```

#### 30. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1295-L1338` → after: `L691-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L691-L692) · [Before (L1295-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L1295-L1338)

```diff
-     function LD(DD) {
-       const zD = sD();
-       return zD.uint32View[0] = zD.mantissaTable[zD.offsetTable[DD >> 10] + (1023 & DD)] + zD.exponentTable[DD >> 10], zD.floatView[0]
-     }
-   },
-   39975: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => KD,
-       d: () => sD,
-       e: () => pD
-     });
-     const pD = DD => {
-         const zD = ArrayBuffer.isView(DD) ? new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength) : new Uint8Array(DD);
-         return "function" === typeof zD.toBase64 ? zD.toBase64() : function(DD) {
-           const zD = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
-           let wD, pD, sD, KD, rD, LD, cD, gD = "",
- ... (28 more removed lines; see GitHub link above)
+     function Di(pp, ip) {
+       return pp[0] * ip[0] + pp[1] * ip[1] + pp[2] * ip[2]
```

#### 31. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1341-L1506` → after: `L695-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/254.js#L695-L696) · [Before (L1341-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/254.js#L1341-L1506)

```diff
-     function KD(DD, zD, wD) {
-       try {
-         if (DD()) return zD(), !0
-       } catch (pD) {
-         return wD?.(pD), !0
-       }
-       return !1
-     }
-     const rD = function(DD, zD, wD) {
-       let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
-         sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
-         rD = arguments.length > 6 ? arguments[6] : void 0;
-       if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && KD(DD, zD, wD)) return null;
-       const LD = setInterval((() => {
-         KD(DD, zD, wD) ? clearInterval(LD) : (sD -= pD, sD < 0 && (clearInterval(LD), wD?.(new Error("Operation timed out after maximum retries. " + (rD || "")), !0)))
-       }), pD);
- ... (150 more removed lines; see GitHub link above)
+     function Ai(pp, ip) {
+       return [pp[1] * ip[2] - pp[2] * ip[1], pp[2] * ip[0] - pp[0] * ip[2], pp[0] * ip[1] - pp[1] * ip[0]]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/255.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/255.js` (108 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c)

#### 1. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4` → after: `L4-L3716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4-L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4-L3716) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L4)

```diff
-   40036: (DD, zD, wD) => {
+   40411: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => wp,
+       e: () => Hp
+     });
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(40314),
+       Sp = cp(37349),
+       xp = cp(37320),
+       Lp = cp(40415),
+       Yp = cp(38905),
+       Dp = cp(37368),
+       Ap = cp(40096),
+       Pp = cp(38313),
+       Wp = cp(37985),
+ ... (3697 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L8-L9` → after: `L3720-L3733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3720-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L3720-L3733) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L8-L9)

```diff
-     var pD = wD(38662),
-       sD = wD(37134);
+     var Op = cp(37320),
+       op = cp(37487),
+       Ip = cp(40589),
+       Sp = cp(40342),
+       xp = cp(40481),
+       Lp = cp(40597),
+       Yp = cp(40498),
+       Dp = cp(40304),
+       Ap = cp(38905),
+       Pp = cp(40236),
+       Wp = cp(40506),
+       yp = cp(37345),
+       Up = cp(40605),
+       wp = cp(40273);
```

#### 3. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L11-L22` → after: `L3735-L4265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR3735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L3735-L4265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L3735-L4265) · [Before (L11-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L11-L22)

```diff
-       static Instantiate(DD) {
-         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[DD]) return this.RegisteredExternalClasses[DD];
-         const zD = (0, sD.e)(DD);
-         if (zD) return zD;
-         pD.d.Warn(DD + " not found, you may have missed an import.");
-         const wD = DD.split(".");
-         let KD = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
-         for (let pD = 0, sD = wD.length; pD < sD; pD++) KD = KD[wD[pD]];
-         return "function" !== typeof KD ? null : KD
-       }
-     }
-     KD.RegisteredExternalClasses = {}
+       get boundingBias() {
+         return this._boundingBias
+       }
+       set boundingBias(pp) {
+         this._boundingBias ? this._boundingBias.rM(pp) : this._boundingBias = pp.clone(), this._updateBoundingInfo(!0, null)
+       }
+       static CreateGeometryForMesh(pp) {
+         const ip = new vp(vp.RandomId(), pp.Gl());
+         return ip.applyToMesh(pp), ip
+       }
+       get meshes() {
+         return this._meshes
+       }
+       constructor(pp, ip, cp) {
+         let op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+ ... (515 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L24` → after: `L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4267) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L24)

```diff
-   39832: (DD, zD, wD) => {
+   40638: (pp, ip, cp) => {
```

#### 5. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L26` → after: `L4269-L4566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4269-L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4269-L4566) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L26)

```diff
-       c: () => sD
+       d: () => Ap,
+       h: () => yp
+     });
+     var Op = cp(37320),
+       op = cp(38905),
+       Ip = cp(40614),
+       Sp = cp(40577),
+       xp = cp(38900),
+       Lp = cp(40617),
+       Yp = cp(40342),
+       Dp = cp(37368);
+     class Ap extends Ip.b {
+       constructor(pp, ip) {
+         super(pp, ip.Gl()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, ip.F_(this), this._sourceMesh = ip, this._unIndexed = ip._unIndexed, this.position.rM(ip.position), this.rotation.rM(ip.rotation), this.ei.rM(ip.ei), ip.rotationQuaternion && (this. … [truncated]
+         for (const cp of ip.getAnimationRanges()) null != cp && this.createAnimationRange(cp.name, cp.from, cp.to);
+         if (this.infiniteDistance = ip.infiniteDistance, this.setPivotMatrix(ip.getPivotMatrix()), ip.skeleton || ip.morphTargetManager || !ip.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
+ ... (282 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L28` → after: `L4568-L4617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4568-L4617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4568-L4617) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L28)

```diff
-     var pD = wD(39785);
+     var Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp = cp(37349),
+       tp = cp(40304),
+       Hp = cp(40257),
+       dp = cp(38900),
+       ep = cp(40236),
+       jp = cp(40586),
+       kp = cp(40411),
+       mp = cp(37320),
+       Rp = cp(37487),
+       qp = cp(40415),
+       Mp = cp(40342),
+       Cp = cp(40589),
+       Ep = cp(40593),
+       Xp = cp(40614),
+       lp = cp(40481),
+       Qp = cp(40476),
+ ... (34 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L30-L31` → after: `L4619-L4721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4619-L4721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4619-L4721) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L30-L31)

```diff
-       static get Now() {
-         return (0, pD.h)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
+       constructor() {
+         this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
+       }
+     }
+     const sp = {
+       source: null,
+       parent: null,
+       doNotCloneChildren: !1,
+       clonePhysicsImpostor: !0,
+       cloneThinInstances: !1
+     };
+     class Kp extends Xp.b {
+       static _GetDefaultSideOrientation(pp) {
+         return pp || Kp.FRONTSIDE
+       }
+       get useLODScreenCoverage() {
+ ... (87 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L33-L106` → after: `L4723-L4736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4723-L4736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4723-L4736) · [Before (L33-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L33-L106)

```diff
-     }
-   },
-   39852: (DD, zD, wD) => {
-     function pD(DD) {
-       let zD = 1;
-       do {
-         zD *= 2
-       } while (zD < DD);
-       return zD === DD
-     }
- 
-     function sD(DD, zD, wD) {
-       return DD * (1 - wD) + zD * wD
-     }
- 
-     function KD(DD) {
- ... (58 more removed lines; see GitHub link above)
+       get manualUpdateOfWorldMatrixInstancedBuffer() {
+         return this._instanceDataStorage.manualUpdate
+       }
+       set manualUpdateOfWorldMatrixInstancedBuffer(pp) {
+         this._instanceDataStorage.manualUpdate = pp
+       }
+       get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
+         return this._instanceDataStorage.previousManualUpdate
+       }
+       set manualUpdateOfPreviousWorldMatrixInstancedBuffer(pp) {
+         this._instanceDataStorage.previousManualUpdate = pp
+       }
+       get forceWorldMatrixInstancedBufferUpdate() {
+         return this._instanceDataStorage.forceMatrixUpdates
```

#### 9. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L108-L109` → after: `L4738-L4739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4738-L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4738-L4739) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L108-L109)

```diff
-       static set BaseUrl(DD) {
-         UD.g.BaseUrl = DD
+       set forceWorldMatrixInstancedBufferUpdate(pp) {
+         this._instanceDataStorage.forceMatrixUpdates = pp
```

#### 10. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L111-L112` → after: `L4741-L4807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4741-L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4741-L4807) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L111-L112)

```diff
-       static get CleanUrl() {
-         return UD.g.CleanUrl
+       _copySource(pp, ip) {
+         let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
+           Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         const op = this.Gl();
+         if (pp._geometry && pp._geometry.applyToMesh(this), dp.e.DeepCopy(pp, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "fop", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLe … [truncated]
+           const ip = pp._ranges;
+           for (const pp in ip) Object.prototype.hasOwnProperty.call(ip, pp) && ip[pp] && this.createAnimationRange(pp, ip[pp].from, ip[pp].to)
+         }
+         if (pp.metadata && pp.metadata.clone ? this.metadata = pp.metadata.clone() : this.metadata = pp.metadata, this._internalMetadata = pp._internalMetadata, this.meshBlendingTag = pp.meshBlendingTag, ep.b && ep.b.HasTags(pp) && ep.b.AddTagsTo(this, ep.b.GetTags(pp, !0)), this … [truncated]
+           const op = pp.getDescendants(!0);
+           for (let pp = 0; pp < op.length; pp++) {
+             const Ip = op[pp];
+             Ip._isMesh ? (sp.parent = this, sp.doNotCloneChildren = ip, sp.clonePhysicsImpostor = cp, sp.cloneThinInstances = Op, Ip.clone(this.name + "." + Ip.name, sp)) : Ip.clone && Ip.clone(this.name + "." + Ip.name, this)
+           }
+         }
+         if (pp.morphTargetManager && (this.morphTargetManager = pp.morphTargetManager), (0, hp.d)(op.getPhysicsEngine)) {
+ ... (51 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L114-L115` → after: `L4809-L4810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4809-L4810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4809-L4810) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L114-L115)

```diff
-       static set CleanUrl(DD) {
-         UD.g.CleanUrl = DD
+       get _isMesh() {
+         return !0
```

#### 12. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L117-L118` → after: `L4812-L4822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4812-L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4812-L4822) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L117-L118)

```diff
-       static IsAbsoluteUrl(DD) {
-         return 0 === DD.indexOf("//") || -1 !== DD.indexOf("://") && (-1 !== DD.indexOf(".") && (-1 !== DD.indexOf("/") && (!(DD.indexOf(":") > DD.indexOf("/")) && (DD.indexOf("://") < DD.indexOf(".") || (0 === DD.indexOf("data:") || 0 === DD.indexOf("blob:"))))))
+       toString(pp) {
+         let ip = super.toString(pp);
+         if (ip += ", n vertices: " + this.getTotalVertices(), ip += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
+           for (let cp = 0; cp < this.animations.length; cp++) ip += ", animation[0]: " + this.animations[cp].toString(pp);
+         if (pp)
+           if (this._geometry) {
+             const pp = this.NOp(),
+               cp = this.getVerticesData(Mp.j.PositionKind);
+             cp && pp && (ip += ", flat shading: " + (cp.length / 3 === pp.length ? "YES" : "NO"))
+           } else ip += ", flat shading: UNKNOWN";
+         return ip
```

#### 13. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L120-L121` → after: `L4824-L4826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4824-L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4824-L4826) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L120-L121)

```diff
-       static set ScriptBaseUrl(DD) {
-         UD.g.ScriptBaseUrl = DD
+       _unBindEffect() {
+         super._unBindEffect();
+         for (const pp of this.instances) pp._unBindEffect()
```

#### 14. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L123-L124` → after: `L4828-L4829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4828-L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4828-L4829) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L123-L124)

```diff
-       static get ScriptBaseUrl() {
-         return UD.g.ScriptBaseUrl
+       get hasLODLevels() {
+         return this._internalMeshDataInfo._LODLevels.length > 0
```

#### 15. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L126-L127` → after: `L4831-L4832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4831-L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4831-L4832) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L126-L127)

```diff
-       static set CDNBaseUrl(DD) {
-         pD.ScriptBaseUrl = DD, pD.AssetBaseUrl = DD
+       getLODLevels() {
+         return this._internalMeshDataInfo._LODLevels
```

#### 16. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L129-L130` → after: `L4834-L4836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4834-L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4834-L4836) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L129-L130)

```diff
-       static set ScriptPreprocessUrl(DD) {
-         UD.g.ScriptPreprocessUrl = DD
+       _sortLODLevels() {
+         const pp = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
+         this._internalMeshDataInfo._LODLevels.sort(((ip, cp) => ip.distanceOrScreenCoverage < cp.distanceOrScreenCoverage ? pp : ip.distanceOrScreenCoverage > cp.distanceOrScreenCoverage ? -pp : 0))
```

#### 17. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L132-L133` → after: `L4838-L4841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4838-L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4838-L4841) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L132-L133)

```diff
-       static get ScriptPreprocessUrl() {
-         return UD.g.ScriptPreprocessUrl
+       addLODLevel(pp, ip) {
+         if (ip && ip._masterMesh) return fp.e.Warn("You cannot use a mesh as LOD level twice"), this;
+         const cp = new np(pp, ip);
+         return this._internalMeshDataInfo._LODLevels.push(cp), ip && (ip._masterMesh = this), this._sortLODLevels(), this
```

#### 18. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L135-L136` → after: `L4843-L4849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4843-L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4843-L4849) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L135-L136)

```diff
-       static get DefaultRetryStrategy() {
-         return UD.g.DefaultRetryStrategy
+       getLODLevelAtDistance(pp) {
+         const ip = this._internalMeshDataInfo;
+         for (let cp = 0; cp < ip._LODLevels.length; cp++) {
+           const Op = ip._LODLevels[cp];
+           if (Op.distanceOrScreenCoverage === pp) return Op.mesh
+         }
+         return null
```

#### 19. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L138-L139` → after: `L4851-L4854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4851-L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4851-L4854) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L138-L139)

```diff
-       static set DefaultRetryStrategy(DD) {
-         UD.g.DefaultRetryStrategy = DD
+       removeLODLevel(pp) {
+         const ip = this._internalMeshDataInfo;
+         for (let cp = 0; cp < ip._LODLevels.length; cp++) ip._LODLevels[cp].mesh === pp && (ip._LODLevels.splice(cp, 1), pp && (pp._masterMesh = null));
+         return this._sortLODLevels(), this
```

#### 20. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L141-L142` → after: `L4856-L4880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4856-L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4856-L4880) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L141-L142)

```diff
-       static get CorsBehavior() {
-         return UD.g.CorsBehavior
+       getLOD(pp, ip) {
+         const cp = this._internalMeshDataInfo;
+         if (!cp._LODLevels || 0 === cp._LODLevels.length) return this;
+         const Op = ip || this.bJ().Yop,
+           op = pp.mode === kp.d.ORTHOGRAPHIC_CAMERA ? pp.minZ : Op.centerWorld.subtract(pp.globalPosition).length();
+         let Ip = op,
+           Sp = 1;
+         if (cp._useLODScreenCoverage) {
+           const ip = pp.screenArea;
+           let cp = Op.radiusWorld * pp.minZ / op;
+           cp = cp * cp * Math.PI, Ip = cp / ip, Sp = -1
+         }
+         if (Sp * cp._LODLevels[cp._LODLevels.length - 1].distanceOrScreenCoverage > Sp * Ip) return this.onLODLevelSelection && this.onLODLevelSelection(Ip, this, this), this;
+         for (let xp = 0; xp < cp._LODLevels.length; xp++) {
+           const pp = cp._LODLevels[xp];
+           if (Sp * pp.distanceOrScreenCoverage < Sp * Ip) {
+ ... (9 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L144-L145` → after: `L4882-L4883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4882-L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4882-L4883) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L144-L145)

```diff
-       static set CorsBehavior(DD) {
-         UD.g.CorsBehavior = DD
+       get geometry() {
+         return this._geometry
```

#### 22. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L147-L148` → after: `L4885-L4886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4885-L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4885-L4886) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L147-L148)

```diff
-       static get UseFallbackTexture() {
-         return AD.d.UseFallbackTexture
+       getTotalVertices() {
+         return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
```

#### 23. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L150-L151` → after: `L4888-L4891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4888-L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4888-L4891) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L150-L151)

```diff
-       static set UseFallbackTexture(DD) {
-         AD.d.UseFallbackTexture = DD
+       getVerticesData(pp, ip, cp, Op) {
+         if (!this._geometry) return null;
+         let op = Op ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[pp]?.getFloatData(this.instances.length + 1, cp || ip && 1 !== this._geometry.meshes.length);
+         return op || (op = this._geometry.getVerticesData(pp, ip, cp)), op
```

#### 24. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L153-L154` → after: `L4893-L4894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4893-L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4893-L4894) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L153-L154)

```diff
-       static get RegisteredExternalClasses() {
-         return ID.b.RegisteredExternalClasses
+       copyVerticesData(pp, ip) {
+         this._geometry && this._geometry.copyVerticesData(pp, ip)
```

#### 25. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L156-L157` → after: `L4896-L4897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4896-L4897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4896-L4897) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L156-L157)

```diff
-       static set RegisteredExternalClasses(DD) {
-         ID.b.RegisteredExternalClasses = DD
+       getVertexBuffer(pp, ip) {
+         return this._geometry ? (ip ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[pp]) ?? this._geometry.getVertexBuffer(pp) : null
```

#### 26. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L159-L160` → after: `L4899-L4900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4899-L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4899-L4900) · [Before (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L159-L160)

```diff
-       static get fallbackTexture() {
-         return AD.d.FallbackTexture
+       isVerticesDataPresent(pp, ip) {
+         return this._geometry ? !ip && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[pp] || this._geometry.isVerticesDataPresent(pp) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(pp)
```

#### 27. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L162-L163` → after: `L4902-L4908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4902-L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4902-L4908) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L162-L163)

```diff
-       static set fallbackTexture(DD) {
-         AD.d.FallbackTexture = DD
+       isVertexBufferUpdatable(pp, ip) {
+         if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(pp);
+         if (!ip) {
+           const ip = this._userInstancedBuffersStorage?.vertexBuffers[pp];
+           if (ip) return ip.isUpdatable()
+         }
+         return this._geometry.isVertexBufferUpdatable(pp)
```

#### 28. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L165-L167` → after: `L4910-L4920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4910-L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4910-L4920) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L165-L167)

```diff
-       static FetchToRef(DD, zD, wD, pD, sD, KD) {
-         const rD = 4 * ((Math.abs(DD) * wD % wD | 0) + (Math.abs(zD) * pD % pD | 0) * wD);
-         KD.r = sD[rD] / 255, KD.g = sD[rD + 1] / 255, KD.b = sD[rD + 2] / 255, KD.a = sD[rD + 3] / 255
+       getVerticesDataKinds(pp) {
+         if (!this._geometry) {
+           const pp = [];
+           if (this._delayInfo)
+             for (const ip of this._delayInfo) pp.push(ip);
+           return pp
+         }
+         const ip = this._geometry.getVerticesDataKinds();
+         if (!pp && this._userInstancedBuffersStorage)
+           for (const cp in this._userInstancedBuffersStorage.vertexBuffers) - 1 === ip.indexOf(cp) && ip.push(cp);
+         return ip
```

#### 29. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L169-L170` → after: `L4922-L4923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4922-L4923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4922-L4923) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L169-L170)

```diff
-       static Mix(DD, zD, wD) {
-         return 0
+       getTotalIndices() {
+         return this._geometry ? this._geometry.getTotalIndices() : 0
```

#### 30. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L172-L173` → after: `L4925-L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4925-L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4925-L4926) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L172-L173)

```diff
-       static Instantiate(DD) {
-         return ID.b.Instantiate(DD)
+       NOp(pp, ip) {
+         return this._geometry ? this._geometry.NOp(pp, ip) : []
```

#### 31. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L175-L176` → after: `L4928-L4929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4928-L4929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4928-L4929) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L175-L176)

```diff
-       static SetImmediate(DD) {
-         fD.d.SetImmediate(DD)
+       get isBlocked() {
+         return null !== this._masterMesh && void 0 !== this._masterMesh
```

#### 32. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L178` → after: `L4931-L4971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4931-L4971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4931-L4971) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L178)

```diff
-       static IsExponentOfTwo(DD) {
+       isReady() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (2 === this.delayLoadState) return !1;
+         if (!super.isReady(pp)) return !1;
+         if (!this.Am || 0 === this.Am.length) return !0;
+         if (!pp) return !0;
+         const cp = this.gy(),
+           Op = this.Gl(),
+           op = ip || cp.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
+         this.computeWorldMatrix();
+         const Ip = this.material || Op.defaultMaterial;
+         if (Ip)
+           if (Ip._storeEffectOnSubMeshes)
+             for (const xp of this.Am) {
+               const pp = xp.Ky();
+ ... (25 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L181-L182` → after: `L4974-L4975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4974-L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4974-L4975) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L181-L182)

```diff
-       static FloatRound(DD) {
-         return Math.fround(DD)
+       get areNormalsFrozen() {
+         return this._internalMeshDataInfo._areNormalsFrozen
```

#### 34. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L184-L186` → after: `L4977-L4978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4977-L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4977-L4978) · [Before (L184-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L184-L186)

```diff
-       static GetFilename(DD) {
-         const zD = DD.lastIndexOf("/");
-         return zD < 0 ? DD : DD.substring(zD + 1)
+       Vy() {
+         return this._internalMeshDataInfo._areNormalsFrozen = !0, this
```

#### 35. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L188-L191` → after: `L4980-L4990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4980-L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4980-L4990) · [Before (L188-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L188-L191)

```diff
-       static GetFolderPath(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const wD = DD.lastIndexOf("/");
-         return wD < 0 ? zD ? DD : "" : DD.substring(0, wD + 1)
+       unfreezeNormals() {
+         return this._internalMeshDataInfo._areNormalsFrozen = !1, this
+       }
+       set overridenInstanceCount(pp) {
+         this._instanceDataStorage.overridenInstanceCount = pp
+       }
+       _getInstanceDataStorage() {
+         if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
+         const pp = this._instanceDataStorage.engine.currentRenderPassId;
+         let ip = this._instanceDataStorage.renderPasses[pp];
+         return ip || (ip = new gp, this._instanceDataStorage.renderPasses[pp] = ip), ip
```

#### 36. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L193-L194` → after: `L4992-L4995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4992-L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4992-L4995) · [Before (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L193-L194)

```diff
-       static ToDegrees(DD) {
-         return 180 * DD / Math.PI
+       _preActivate() {
+         const pp = this._internalMeshDataInfo,
+           ip = this.Gl().getRenderId();
+         return pp._preActivateId === ip || (pp._preActivateId = ip, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
```

#### 37. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L196-L197` → after: `L4997-L4999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4997-L4999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L4997-L4999) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L196-L197)

```diff
-       static ToRadians(DD) {
-         return DD * Math.PI / 180
+       _preActivateForIntermediateRendering(pp) {
+         const ip = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
+         return ip.visibleInstances && (ip.visibleInstances.intermediateDefaultRenderId = pp), this
```

#### 38. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L199-L203` → after: `L5001-L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5001-L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5001-L5007) · [Before (L199-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L199-L203)

```diff
-       static SmoothAngleChange(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
-         const pD = this.ToRadians(DD),
-           sD = this.ToRadians(zD);
-         return this.ToDegrees(Math.atan2((1 - wD) * Math.sin(sD) + wD * Math.sin(pD), (1 - wD) * Math.cos(sD) + wD * Math.cos(pD)))
+       _registerInstanceForRenderId(pp, ip) {
+         const cp = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
+         return cp.visibleInstances || (cp.visibleInstances = {
+           defaultRenderId: ip,
+           selfDefaultRenderId: this._renderId,
+           intermediateDefaultRenderId: -1
+         }), cp.visibleInstances[ip] || (void 0 === cp.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete cp.visibleInstances[cp.previousRenderId], cp.previousRenderId = ip, cp.visibleInstances[ip] = new Arra … [truncated]
```

#### 39. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L205-L206` → after: `L5009-L5010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5009-L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5009-L5010) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L205-L206)

```diff
-       static MakeArray(DD, zD) {
-         return !0 === zD || void 0 !== DD && null != DD ? Array.isArray(DD) ? DD : [DD] : null
+       _afterComputeWorldMatrix() {
+         super._afterComputeWorldMatrix(), this.hasThinInstances && (this.sy || this.thinInstanceRefreshBoundingInfo(!1))
```

#### 40. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L208-L209` → after: `L5012-L5048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5012-L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5012-L5048) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L208-L209)

```diff
-       static GetPointerPrefix(DD) {
-         return (0, KD.h)() && !window.PointerEvent ? "mouse" : "pointer"
+       _postActivate() {
+         this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
+       }
+       refreshBoundingInfo() {
+         let pp, ip = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           cp = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (this.hasBoundingInfo && this.bJ().isLocked) return this;
+         pp = "object" === typeof ip ? ip : {
+           applySkeleton: ip,
+           applyMorph: cp
+         };
+         const Op = this.geometry ? this.geometry.boundingBias : null;
+         return this._refreshBoundingInfo(this._getData(pp, null, Mp.j.PositionKind), Op), this
+       }
+       _createGlobalSubMesh(pp) {
+         const ip = this.getTotalVertices();
+ ... (21 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L211-L212` → after: `L5050-L5058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5050-L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5050-L5058) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L211-L212)

```diff
-       static SetCorsBehavior(DD, zD) {
-         (0, UD.G)(DD, zD)
+       subdivide(pp) {
+         if (pp < 1) return;
+         const ip = this.getTotalIndices();
+         let cp = ip / pp | 0,
+           Op = 0;
+         for (; cp % 3 !== 0;) cp++;
+         this.releaseSubMeshes();
+         for (let op = 0; op < pp && !(Op >= ip); op++) lp.d.CreateFromIndices(0, Op, Op + cp >= ip ? ip - Op : cp, this, void 0, !1), Op += cp;
+         this.refreshBoundingInfo(), this.synchronizeInstances()
```

#### 42. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L214-L215` → after: `L5060-L5070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5060-L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5060-L5070) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L214-L215)

```diff
-       static SetReferrerPolicyBehavior(DD, zD) {
-         zD.referrerPolicy = DD
+       setVerticesData(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Op = arguments.length > 3 ? arguments[3] : void 0;
+         if (this._geometry) this._geometry.setVerticesData(pp, ip, cp, Op);
+         else {
+           const Op = new Cp.d;
+           Op.set(ip, pp);
+           const op = this.Gl();
+           new Ep.b(Ep.b.RandomId(), op, Op, cp, this)
+         }
+         return this
```

#### 43. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L217-L218` → after: `L5072-L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5072-L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5072-L5073) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L217-L218)

```diff
-       static get PreprocessUrl() {
-         return UD.g.PreprocessUrl
+       removeVerticesData(pp) {
+         this._geometry && this._geometry.removeVerticesData(pp)
```

#### 44. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L220-L221` → after: `L5075-L5078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5075-L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5075-L5078) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L220-L221)

```diff
-       static set PreprocessUrl(DD) {
-         UD.g.PreprocessUrl = DD
+       markVerticesDataAsUpdatable(pp) {
+         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         const cp = this.getVertexBuffer(pp);
+         cp && cp.isUpdatable() !== ip && this.setVerticesData(pp, this.getVerticesData(pp), ip)
```

#### 45. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L223-L224` → after: `L5080-L5083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5080-L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5080-L5083) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L223-L224)

```diff
-       static LoadImage(DD, zD, wD, pD, sD, KD) {
-         return (0, UD.r)(DD, zD, wD, pD, sD, KD)
+       setVerticesBuffer(pp) {
+         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         return this._geometry || (this._geometry = Ep.b.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(pp, cp, ip), this
```

#### 46. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L226-L227` → after: `L5085-L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5085-L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5085-L5086) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L226-L227)

```diff
-       static LoadFile(DD, zD, wD, pD, sD, KD) {
-         return (0, UD.o)(DD, zD, wD, pD, sD, KD)
+       updateVerticesData(pp, ip, cp, Op) {
+         return this._geometry ? (Op ? (this.makeGeometryUnique(), this.updateVerticesData(pp, ip, cp, !1)) : this._geometry.updateVerticesData(pp, ip, cp), this) : this
```

#### 47. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L229` → after: `L5088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5088) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L229)

```diff
-       static async LoadFileAsync(DD) {
+       updateMeshPositions(pp) {
```

#### 48. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L231-L237` → after: `L5090-L5098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5090-L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5090-L5098) · [Before (L231-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L231-L237)

```diff
-         return await new Promise(((wD, pD) => {
-           (0, UD.o)(DD, (DD => {
-             wD(DD)
-           }), void 0, void 0, zD, ((DD, zD) => {
-             pD(zD)
-           }))
-         }))
+         const cp = this.getVerticesData(Mp.j.PositionKind);
+         if (!cp) return this;
+         if (pp(cp), this.updateVerticesData(Mp.j.PositionKind, cp, !1, !1), ip) {
+           const pp = this.NOp(),
+             ip = this.getVerticesData(Mp.j.NormalKind);
+           if (!ip) return this;
+           Cp.d.ComputeNormals(cp, pp, ip), this.updateVerticesData(Mp.j.NormalKind, ip, !1, !1)
+         }
+         return this
```

#### 49. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L239-L243` → after: `L5100-L5121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5100-L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5100-L5121) · [Before (L239-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L239-L243)

```diff
-       static GetAssetUrl(DD) {
-         if (!DD) return "";
-         if (pD.AssetBaseUrl && DD.startsWith(pD._DefaultAssetsUrl)) {
-           const zD = pD.AssetBaseUrl.endsWith("/") ? pD.AssetBaseUrl.slice(0, -1) : pD.AssetBaseUrl;
-           return DD.replace(pD._DefaultAssetsUrl, zD)
+       makeGeometryUnique() {
+         if (!this._geometry) return this;
+         if (1 === this._geometry.meshes.length) return this;
+         const pp = this._geometry,
+           ip = this._geometry.copy(Ep.b.RandomId());
+         return pp.releaseForMesh(this, !0), ip.applyToMesh(this), this
+       }
+       setIndexBuffer(pp, ip, cp) {
+         let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           op = this._geometry;
+         op || (op = new Ep.b(Ep.b.RandomId(), this.Gl(), void 0, void 0, this)), op.setIndexBuffer(pp, ip, cp, Op)
+       }
+       setIndices(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+ ... (6 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L245` → after: `L5123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5123) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L245)

```diff
-         return DD
+         return this
```

#### 51. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L247-L279` → after: `L5125-L5538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5125-L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5125-L5538) · [Before (L247-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L247-L279)

```diff
-       static GetBabylonScriptURL(DD, zD) {
-         if (!DD) return "";
-         if (DD.startsWith(pD._DefaultCdnUrl))
-           if (pD.ScriptBaseUrl) {
-             const zD = pD.ScriptBaseUrl.endsWith("/") ? pD.ScriptBaseUrl.slice(0, -1) : pD.ScriptBaseUrl;
-             DD = DD.replace(pD._DefaultCdnUrl, zD)
-           } else if (pD._CdnVersion) {
-           const zD = `${pD._DefaultCdnUrl}/v${pD._CdnVersion}`;
-           DD.startsWith(zD) || (DD = DD.replace(pD._DefaultCdnUrl, zD))
-         }
-         return DD = pD.ScriptPreprocessUrl(DD), zD && !pD.IsAbsoluteUrl(DD) && (DD = pD.GetAbsoluteUrl(DD)), DD
-       }
-       static LoadBabylonScript(DD, zD, wD, sD) {
-         DD = pD.GetBabylonScriptURL(DD), pD.LoadScript(DD, zD, wD)
-       }
-       static async LoadBabylonScriptAsync(DD) {
- ... (17 more removed lines; see GitHub link above)
+       updateIndices(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         return this._geometry ? (this._geometry.updateIndices(pp, ip, cp), this) : this
+       }
+       toLeftHanded() {
+         return this._geometry ? (this._geometry.toLeftHanded(), this) : this
+       }
+       _bind(pp, ip, cp) {
+         let Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         if (!this._geometry) return this;
+         const op = this.Gl().gy();
+         let Ip;
+         if (this._unIndexed)
+           if (this._getRenderingFillMode(cp) === Qp.b.WireFrameFillMode) Ip = pp._getLinesIndexBuffer(this.NOp(), op);
+           else Ip = null;
+         else switch (this._getRenderingFillMode(cp)) {
+ ... (398 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L282-L284` → after: `L5541-L5548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5541-L5548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5541-L5548) · [Before (L282-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L282-L284)

```diff
-       static _LoadScriptWeb(DD, zD, wD, pD) {
-         let sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         if ("function" === typeof importScripts) {
+       _checkDelayState() {
+         const pp = this.Gl();
+         return this._geometry ? this._geometry.load(pp) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(pp)), this
+       }
+       _queueLoad(pp) {
+         pp.addPendingData(this);
+         const ip = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
+         return (async () => {
```

#### 53. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L286` → after: `L5550-L5553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5550-L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5550-L5553) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L286)

```diff
-             importScripts(DD), zD && zD()
+             const cp = await pp._loadDelayedFileAsync(this.delayLoadingFile, ip, !0);
+             cp instanceof ArrayBuffer ? this._delayLoadingFunction(cp, this) : this._delayLoadingFunction(JSON.parse(cp), this);
+             for (const pp of this.instances) pp.refreshBoundingInfo(), pp._syncSubMeshes();
+             this.delayLoadState = 1, pp.removePendingData(this)
```

#### 54. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L288` → after: `L5555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5555) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L288)

```diff
-             wD?.(`Unable to load script '${DD}' in worker`, cD)
+             pp.removePendingData(this), pp.uR || fp.e.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${cp}`)
```

#### 55. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L290` → after: `L5557-L5590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5557-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5557-L5590) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L290)

```diff
-           return
+         })(), this
+       }
+       isInFrustum(pp) {
+         return 2 !== this.delayLoadState && (!!super.isInFrustum(pp) && (this._checkDelayState(), !0))
+       }
+       setMaterialById(pp) {
+         const ip = this.Gl().materials;
+         let cp;
+         for (cp = ip.length - 1; cp > -1; cp--)
+           if (ip[cp].id === pp) return this.material = ip[cp], this;
+         const Op = this.Gl().multiMaterials;
+         for (cp = Op.length - 1; cp > -1; cp--)
+           if (Op[cp].id === pp) return this.material = Op[cp], this;
+         return this
+       }
+       getAnimatables() {
+ ... (18 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L292-L299` → after: `L5592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5592) · [Before (L292-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L292-L299)

```diff
-         if (!(0, KD.h)()) return void wD?.(`Cannot load script '${DD}' outside of a window or a worker`);
-         const rD = document.getElementsByTagName("head")[0],
-           LD = document.createElement("script");
-         sD ? (LD.setAttribute("type", "module"), LD.innerText = DD) : (LD.setAttribute("type", "text/javascript"), LD.setAttribute("src", DD)), pD && (LD.id = pD), LD.onload = () => {
-           zD && zD()
-         }, LD.onerror = zD => {
-           wD && wD(`Unable to load script '${DD}'`, zD)
-         }, rD.appendChild(LD)
+         return pp.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.Am = ip, this
```

#### 57. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L301-L308` → after: `L5594-L5754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5594-L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5594-L5754) · [Before (L301-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L301-L308)

```diff
-       static async LoadScriptAsync(DD, zD) {
-         return await new Promise(((wD, pD) => {
-           this.LoadScript(DD, (() => {
-             wD()
-           }), ((DD, zD) => {
-             pD(zD || new Error(DD))
-           }), zD)
-         }))
+       bakeCurrentTransformIntoVertices() {
+         let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(pp), this
+       }
+       get _positions() {
+         return this._internalAbstractMeshDataInfo._positions || this._geometry && this._geometry._positions || null
+       }
+       _resetPointsArrayCache() {
+         return this._geometry && this._geometry._resetPointsArrayCache(), this
+       }
+       _generatePointsArray() {
+         return !!this._geometry && this._geometry._generatePointsArray()
+       }
+       clone() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
+           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+ ... (145 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L310-L314` → after: `L5756-L5943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5756-L5943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5756-L5943) · [Before (L310-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L310-L314)

```diff
-       static ReadFileAsDataURL(DD, zD, wD) {
-         const pD = new FileReader,
-           KD = {
-             onCompleteObservable: new sD.b,
-             abort: () => pD.abort()
+       increaseVertices() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         const ip = Cp.d.ExtractFromMesh(this),
+           cp = ip.indices && !Array.isArray(ip.indices) && Array.from ? Array.from(ip.indices) : ip.indices,
+           Op = ip.positions && !Array.isArray(ip.positions) && Array.from ? Array.from(ip.positions) : ip.positions,
+           op = ip.uvs && !Array.isArray(ip.uvs) && Array.from ? Array.from(ip.uvs) : ip.uvs,
+           Ip = ip.normals && !Array.isArray(ip.normals) && Array.from ? Array.from(ip.normals) : ip.normals;
+         if (cp && Op) {
+           ip.indices = cp, ip.positions = Op, op && (ip.uvs = op), Ip && (ip.normals = Ip);
+           const Sp = pp + 1,
+             xp = [];
+           for (let pp = 0; pp < Sp + 1; pp++) xp[pp] = [];
+           let Lp, Yp;
+           const Dp = new mp.o(0, 0, 0),
+             Ap = new mp.o(0, 0, 0),
+             Pp = new mp.l(0, 0),
+ ... (172 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L316-L320` → after: `L5945-L6012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR5945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L5945-L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L5945-L6012) · [Before (L316-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L316-L320)

```diff
-         return pD.onloadend = () => {
-           KD.onCompleteObservable.notifyObservers(KD)
-         }, pD.onload = DD => {
-           zD(DD.target.result)
-         }, pD.onprogress = wD, pD.readAsDataURL(DD), KD
+           for (const pp in this._userThinInstanceBuffersStorage.data) ip.data[pp] = Array.from(this._userThinInstanceBuffersStorage.data[pp]), ip.sizes[pp] = this._userThinInstanceBuffersStorage.sizes[pp], ip.strides[pp] = this._userThinInstanceBuffersStorage.strides[pp];
+           pp.thinInstances.userThinInstance = ip
+         }
+         return Tp.c.AppendSerializedAnimations(this, pp), pp.By = this.serializeAnimationRanges(), pp.layerMask = this.layerMask, pp.alphaIndex = this.alphaIndex, pp.hasVertexAlpha = this.hasVertexAlpha, pp.overlayAlpha = this.overlayAlpha, pp.overlayColor = this.overlayColor.BOp … [truncated]
+       }
+       _syncGeometryWithMorphTargetManager() {
+         if (!this.geometry) return;
+         this._markSubMeshesAsAttributesDirty();
+         const pp = this._internalAbstractMeshDataInfo._morphTargetManager;
+         if (pp && pp.vertexCount) {
+           if (pp.vertexCount !== this.getTotalVertices()) return fp.e.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
+           if (pp.isUsingTextureForTargets) return;
+           for (let ip = 0; ip < pp.numInfluencers; ip++) {
+             const cp = pp.getActiveTarget(ip),
+               Op = cp.getPositions();
+             if (!Op) return void fp.e.Error("Invalid morph target. Target must have positions.");
+ ... (52 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L322-L323` → after: `L6014-L6021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6014-L6021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6014-L6021) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L322-L323)

```diff
-       static ReadFile(DD, zD, wD, pD, sD) {
-         return (0, UD.u)(DD, zD, wD, pD, sD)
+       setPositionsForCPUSkinning() {
+         const pp = this._internalMeshDataInfo;
+         if (!pp._sourcePositions) {
+           const ip = this.getVerticesData(Mp.j.PositionKind);
+           if (!ip) return pp._sourcePositions;
+           pp._sourcePositions = new Float32Array(ip), this.isVertexBufferUpdatable(Mp.j.PositionKind) || this.setVerticesData(Mp.j.PositionKind, ip, !0)
+         }
+         return pp._sourcePositions
```

#### 61. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L325-L327` → after: `L6023-L6030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6023-L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6023-L6030) · [Before (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L325-L327)

```diff
-       static FileAsURL(DD) {
-         const zD = new Blob([DD]);
-         return window.URL.createObjectURL(zD)
+       setNormalsForCPUSkinning() {
+         const pp = this._internalMeshDataInfo;
+         if (!pp._sourceNormals) {
+           const ip = this.getVerticesData(Mp.j.NormalKind);
+           if (!ip) return pp._sourceNormals;
+           pp._sourceNormals = new Float32Array(ip), this.isVertexBufferUpdatable(Mp.j.NormalKind) || this.setVerticesData(Mp.j.NormalKind, ip, !0)
+         }
+         return pp._sourceNormals
```

#### 62. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L329-L331` → after: `L6032-L6071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6032-L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6032-L6071) · [Before (L329-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L329-L331)

```diff
-       static Format(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
-         return DD.toFixed(zD)
+       applySkeleton(pp) {
+         if (!this.geometry) return this;
+         if (this.geometry._softwareSkinningFrameId == this.Gl().getFrameId()) return this;
+         if (this.geometry._softwareSkinningFrameId = this.Gl().getFrameId(), !this.isVerticesDataPresent(Mp.j.PositionKind)) return this;
+         if (!this.isVerticesDataPresent(Mp.j.MatricesIndicesKind)) return this;
+         if (!this.isVerticesDataPresent(Mp.j.MatricesWeightsKind)) return this;
+         const ip = this.isVerticesDataPresent(Mp.j.NormalKind),
+           cp = this._internalMeshDataInfo;
+         if (!cp._sourcePositions) {
+           const pp = this.Am.slice();
+           this.setPositionsForCPUSkinning(), this.Am = pp
+         }
+         ip && !cp._sourceNormals && this.setNormalsForCPUSkinning();
+         let Op = this.getVerticesData(Mp.j.PositionKind);
+         if (!Op) return this;
+         Op instanceof Float32Array || (Op = new Float32Array(Op));
+ ... (24 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L333-L334` → after: `L6073-L6086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6073-L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6073-L6086) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L333-L334)

```diff
-       static DeepCopy(DD, zD, wD, pD) {
-         LD.e.DeepCopy(DD, zD, wD, pD)
+       static MinMax(pp) {
+         let ip = null,
+           cp = null;
+         for (const Op of pp) {
+           const pp = Op.bJ().boundingBox;
+           ip && cp ? (ip.minimizeInPlace(pp.minimumWorld), cp.maximizeInPlace(pp.maximumWorld)) : (ip = pp.minimumWorld.clone(), cp = pp.maximumWorld.clone())
+         }
+         return ip && cp ? {
+           min: ip,
+           max: cp
+         } : {
+           min: mp.o.Zero(),
+           max: mp.o.Zero()
+         }
```

#### 64. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L336-L339` → after: `L6088-L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6088-L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6088-L6090) · [Before (L336-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L336-L339)

```diff
-       static IsEmpty(DD) {
-         for (const zD in DD)
-           if (Object.prototype.hasOwnProperty.call(DD, zD)) return !1;
-         return !0
+       static Center(pp) {
+         const ip = pp instanceof Array ? Kp.MinMax(pp) : pp;
+         return mp.o.Center(ip.min, ip.max)
```

#### 65. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L341-L342` → after: `L6092-L6127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6092-L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6092-L6127) · [Before (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L341-L342)

```diff
-       static RegisterTopRootEvents(DD, zD) {
-         for (let pD = 0; pD < zD.length; pD++) {
+       static MergeMeshes(pp) {
+         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           cp = arguments.length > 2 ? arguments[2] : void 0,
+           Op = arguments.length > 3 ? arguments[3] : void 0,
+           op = arguments.length > 4 ? arguments[4] : void 0,
+           Ip = arguments.length > 5 ? arguments[5] : void 0;
+         return (0, jp.g)(Kp._MergeMeshesCoroutine(pp, ip, cp, Op, op, Ip, !1))
+       }
+       static async MergeMeshesAsync(pp) {
+         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           cp = arguments.length > 2 ? arguments[2] : void 0,
+           Op = arguments.length > 3 ? arguments[3] : void 0,
+           op = arguments.length > 4 ? arguments[4] : void 0,
+           Ip = arguments.length > 5 ? arguments[5] : void 0;
+         return await (0, jp.e)(Kp._MergeMeshesCoroutine(pp, ip, cp, Op, op, Ip, !0), (0, jp.c)())
+       }
+ ... (20 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L344-L347` → after: `L6129-L6196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6129-L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6129-L6196) · [Before (L344-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L344-L347)

```diff
-           DD.addEventListener(sD.name, sD.handler, !1);
-           try {
-             window.parent && window.parent.addEventListener(sD.name, sD.handler, !1)
-           } catch (wD) {}
+           if (cp.Vl) return fp.e.Warn("Cannot merge instance meshes."), null;
+           if (Pp !== cp.sideOrientation) return fp.e.Warn("Cannot merge meshes with different sideOrientation values."), null;
+           if (Ip || Sp) {
+             const pp = Ap.reduce(((pp, ip) => Math.max(pp, ip.start + ip.count)), 0);
+             if (Sp)
+               if (cp.material) {
+                 const ip = cp.material;
+                 if (ip instanceof Bp.b) {
+                   for (let pp = 0; pp < ip.u9.length; pp++) Yp.indexOf(ip.u9[pp]) < 0 && Yp.push(ip.u9[pp]);
+                   for (let Op = 0; Op < cp.Am.length; Op++) Dp.push(Yp.indexOf(ip.u9[cp.Am[Op].materialIndex])), Ap.push({
+                     start: pp + cp.Am[Op].indexStart,
+                     count: cp.Am[Op].indexCount
+                   })
+                 } else {
+                   Yp.indexOf(ip) < 0 && Yp.push(ip);
+                   for (let Op = 0; Op < cp.Am.length; Op++) Dp.push(Yp.indexOf(ip)), Ap.push({
+ ... (52 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L350-L356` → after: `L6206-L6216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6206-L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6206-L6216) · [Before (L350-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L350-L356)

```diff
-       static UnregisterTopRootEvents(DD, zD) {
-         for (let pD = 0; pD < zD.length; pD++) {
-           const sD = zD[pD];
-           DD.removeEventListener(sD.name, sD.handler);
-           try {
-             DD.parent && DD.parent.removeEventListener(sD.name, sD.handler)
-           } catch (wD) {}
+       F_(pp) {
+         pp._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(pp)
+       }
+       o3(pp) {
+         const ip = pp._indexInSourceMeshInstanceArray;
+         if (-1 != ip) {
+           if (ip !== this.instances.length - 1) {
+             const pp = this.instances[this.instances.length - 1];
+             this.instances[ip] = pp, pp._indexInSourceMeshInstanceArray = ip
+           }
+           pp._indexInSourceMeshInstanceArray = -1, this.instances.pop()
```

#### 68. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L359-L360` → after: `L6219-L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6219-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6219-L6220) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L359-L360)

```diff
-       static async DumpFramebuffer(DD, zD, wD, pD) {
-         throw (0, gD.j)("DumpTools")
+       _shouldConvertRHS() {
+         return this._scene.useRightHandedSystem && this.sideOrientation === Qp.b.CounterClockWiseSideOrientation
```

#### 69. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L362-L363` → after: `L6222-L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6222-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6222-L6224) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L362-L363)

```diff
-       static DumpData(DD, zD, wD, pD) {
-         throw (0, gD.j)("DumpTools")
+       _getRenderingFillMode(pp) {
+         const ip = this.Gl();
+         return ip.forcePointsCloud ? Qp.b.PointFillMode : ip.forceWireframe ? Qp.b.WireFrameFillMode : this.overrideRenderingFillMode ?? pp
```

#### 70. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L365-L366` → after: `L6226-L6227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6226-L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6226-L6227) · [Before (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L365-L366)

```diff
-       static async DumpDataAsync(DD, zD, wD) {
-         throw (0, gD.j)("DumpTools")
+       setMaterialByID(pp) {
+         return this.setMaterialById(pp)
```

#### 71. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L368-L369` → after: `L6229-L6230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6229-L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6229-L6230) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L368-L369)

```diff
-       static _IsOffScreenCanvas(DD) {
-         return void 0 !== DD.convertToBlob
+       static CreateRibbon(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 72. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L371-L387` → after: `L6232-L6233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6232-L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6232-L6233) · [Before (L371-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L371-L387)

```diff
-       static ToBlob(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
-           sD = arguments.length > 3 ? arguments[3] : void 0;
-         pD._IsOffScreenCanvas(DD) || DD.toBlob || (DD.toBlob = function(DD, zD, wD) {
-           setTimeout((() => {
-             const pD = atob(this.toDataURL(zD, wD).split(",")[1]),
-               sD = pD.length,
-               KD = new Uint8Array(sD);
-             for (let DD = 0; DD < sD; DD++) KD[DD] = pD.charCodeAt(DD);
-             DD(new Blob([KD]))
-           }))
-         }), pD._IsOffScreenCanvas(DD) ? DD.convertToBlob({
-           type: wD,
-           quality: sD
-         }).then((DD => zD(DD))) : DD.toBlob((function(DD) {
-           zD(DD)
- ... (1 more removed lines; see GitHub link above)
+       static CreateDisc(pp, ip, cp, Op, op, Ip) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 73. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L389-L404` → after: `L6235-L6236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6235-L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6235-L6236) · [Before (L389-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L389-L404)

```diff
-       static DownloadBlob(DD, zD) {
-         if ("download" in document.createElement("a")) {
-           if (!zD) {
-             const DD = new Date;
-             zD = "screenshot_" + ((DD.getFullYear() + "-" + (DD.getMonth() + 1)).slice(2) + "-" + DD.getDate() + "_" + DD.getHours() + "-" + ("0" + DD.getMinutes()).slice(-2)) + ".png"
-           }
-           pD.Download(DD, zD)
-         } else if (DD && "undefined" !== typeof URL) {
-           const zD = URL.createObjectURL(DD),
-             wD = window.open("");
-           if (!wD) return;
-           const pD = wD.document.createElement("img");
-           pD.onload = function() {
-             URL.revokeObjectURL(zD)
-           }, pD.src = zD, wD.document.body.appendChild(pD)
-         }
+       static CreateBox(pp, ip, cp, Op, op) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 74. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L406-L427` → after: `L6238-L6239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6238-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6238-L6239) · [Before (L406-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L406-L427)

```diff
-       static EncodeScreenshotCanvasData(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
-           sD = arguments.length > 3 ? arguments[3] : void 0,
-           KD = arguments.length > 4 ? arguments[4] : void 0;
-         if ("string" !== typeof sD && zD) {
-           if (zD) {
-             if (pD._IsOffScreenCanvas(DD)) return void DD.convertToBlob({
-               type: wD,
-               quality: KD
-             }).then((DD => {
-               const wD = new FileReader;
-               wD.readAsDataURL(DD), wD.onloadend = () => {
-                 const DD = wD.result;
-                 zD(DD)
-               }
-             }));
- ... (6 more removed lines; see GitHub link above)
+       static CreateSphere(pp, ip, cp, Op, op, Ip) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 75. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L429-L435` → after: `L6241-L6242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6241-L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6241-L6242) · [Before (L429-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L429-L435)

```diff
-       static Download(DD, zD) {
-         if ("undefined" === typeof URL) return;
-         const wD = window.URL.createObjectURL(DD),
-           pD = document.createElement("a");
-         document.body.appendChild(pD), pD.style.display = "none", pD.href = wD, pD.download = zD, pD.addEventListener("click", (() => {
-           pD.parentElement && pD.parentElement.removeChild(pD)
-         })), pD.click(), window.URL.revokeObjectURL(wD)
+       static CreateHemisphere(pp, ip, cp, Op) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 76. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L437-L438` → after: `L6244-L6245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6244-L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6244-L6245) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L437-L438)

```diff
-       static BackCompatCameraNoPreventDefault(DD) {
-         return "boolean" === typeof DD[0] ? DD[0] : "boolean" === typeof DD[1] && DD[1]
+       static CreateCylinder(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 77. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L440-L441` → after: `L6247-L6248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6247-L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6247-L6248) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L440-L441)

```diff
-       static CreateScreenshot(DD, zD, wD, pD) {
-         throw (0, gD.j)("ScreenshotTools")
+       static CreateTorus(pp, ip, cp, Op, op, Ip, Sp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 78. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L443-L444` → after: `L6250-L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6250-L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6250-L6251) · [Before (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L443-L444)

```diff
-       static async CreateScreenshotAsync(DD, zD, wD) {
-         throw (0, gD.j)("ScreenshotTools")
+       static CreateTorusKnot(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 79. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L446-L447` → after: `L6253-L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6253-L6254) · [Before (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L446-L447)

```diff
-       static CreateScreenshotUsingRenderTarget(DD, zD, wD, pD) {
-         throw (0, gD.j)("ScreenshotTools")
+       static CreateLines(pp, ip, cp, Op, op) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 80. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L449-L450` → after: `L6256-L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6256-L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6256-L6257) · [Before (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L449-L450)

```diff
-       static async CreateScreenshotUsingRenderTargetAsync(DD, zD, wD) {
-         throw (0, gD.j)("ScreenshotTools")
+       static CreateDashedLines(pp, ip, cp, Op, op, Ip, Sp, xp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 81. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L452-L453` → after: `L6259-L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6259-L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6259-L6260) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L452-L453)

```diff
-       static RandomId() {
-         return (0, BD.c)()
+       static CreatePolygon(pp, ip, cp, Op, op, Ip, Sp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 82. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L455-L456` → after: `L6262-L6263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6262-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6262-L6263) · [Before (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L455-L456)

```diff
-       static IsBase64(DD) {
-         return (0, UD.l)(DD)
+       static ExtrudePolygon(pp, ip, cp, Op, op, Ip, Sp, xp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 83. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L458-L459` → after: `L6265-L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6265-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6265-L6266) · [Before (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L458-L459)

```diff
-       static DecodeBase64(DD) {
-         return (0, UD.c)(DD)
+       static ExtrudeShape(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 84. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L461-L462` → after: `L6268-L6269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6268-L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6268-L6269) · [Before (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L461-L462)

```diff
-       static get errorsCount() {
-         return rD.d.errorsCount
+       static ExtrudeShapeCustom(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 85. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L464-L465` → after: `L6271-L6272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6271-L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6271-L6272) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L464-L465)

```diff
-       static Log(DD) {
-         rD.d.Log(DD)
+       static CreateLathe(pp, ip, cp, Op, op, Ip, Sp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 86. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L467-L468` → after: `L6274-L6275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6274-L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6274-L6275) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L467-L468)

```diff
-       static Warn(DD) {
-         rD.d.Warn(DD)
+       static CreatePlane(pp, ip, cp, Op, op) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 87. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L470-L471` → after: `L6277-L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6277-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6277-L6278) · [Before (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L470-L471)

```diff
-       static Error(DD) {
-         rD.d.Error(DD)
+       static CreateGround(pp, ip, cp, Op, op, Ip) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 88. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L473-L474` → after: `L6280-L6281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6280-L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6280-L6281) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L473-L474)

```diff
-       static get LogCache() {
-         return rD.d.LogCache
+       static CreateTiledGround(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 89. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L476-L477` → after: `L6283-L6284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6283-L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6283-L6284) · [Before (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L476-L477)

```diff
-       static ClearLogCache() {
-         rD.d.ClearLogCache()
+       static CreateGroundFromHeightMap(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 90. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L479-L480` → after: `L6286-L6287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6286-L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6286-L6287) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L479-L480)

```diff
-       static set LogLevels(DD) {
-         rD.d.LogLevels = DD
+       static CreateTube(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 91. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L482-L483` → after: `L6289-L6290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6289-L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6289-L6290) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L482-L483)

```diff
-       static set PerformanceLogLevel(DD) {
-         (DD & pD.PerformanceUserMarkLogLevel) !== pD.PerformanceUserMarkLogLevel ? (DD & pD.PerformanceConsoleLogLevel) !== pD.PerformanceConsoleLogLevel ? (pD.StartPerformanceCounter = pD._StartPerformanceCounterDisabled, pD.EndPerformanceCounter = pD._EndPerformanceCounterDisab … [truncated]
+       static CreatePolyhedron(pp, ip, cp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 92. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L485-L493` → after: `L6292-L6293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6292-L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6292-L6293) · [Before (L485-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L485-L493)

```diff
-       static _StartPerformanceCounterDisabled(DD, zD) {}
-       static _EndPerformanceCounterDisabled(DD, zD) {}
-       static _StartUserMark(DD) {
-         let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!pD._Performance) {
-           if (!(0, KD.h)()) return;
-           pD._Performance = window.performance
-         }
-         zD && pD._Performance.mark && pD._Performance.mark(DD + "-Begin")
+       static CreateIcoSphere(pp, ip, cp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 93. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L495-L496` → after: `L6295-L6296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6295-L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6295-L6296) · [Before (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L495-L496)

```diff
-       static _EndUserMark(DD) {
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && pD._Performance.mark && (pD._Performance.mark(DD + "-End"), pD._Performance.measure(DD, DD + "-Begin", DD + "-End"))
+       static CreateDecal(pp, ip, cp, Op, op, Ip) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 94. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L498-L500` → after: `L6298-L6299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6298-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6298-L6299) · [Before (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L498-L500)

```diff
-       static _StartPerformanceConsole(DD) {
-         let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         zD && (pD._StartUserMark(DD, zD), console.time && console.time(DD))
+       static CreateCapsule(pp, ip, cp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 95. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L502-L504` → after: `L6301-L6302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6301-L6302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6301-L6302) · [Before (L502-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L502-L504)

```diff
-       static _EndPerformanceConsole(DD) {
-         let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         zD && (pD._EndUserMark(DD, zD), console.timeEnd(DD))
+       static ExtendToGoldberg(pp) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 96. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L506-L511` → after: `L6304-L6394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6304-L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6304-L6394) · [Before (L506-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L506-L511)

```diff
-       static _StartMarkNative(DD) {
-         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
-           if (pD._NativePerformanceCounterHandles.has(DD)) pD.Warn(`Performance counter with name ${DD} is already started.`);
-           else {
-             const zD = _native.startPerformanceCounter(DD);
-             pD._NativePerformanceCounterHandles.set(DD, zD)
+     }
+     Kp.FRONTSIDE = Cp.d.FRONTSIDE, Kp.BACKSIDE = Cp.d.BACKSIDE, Kp.DOUBLESIDE = Cp.d.DOUBLESIDE, Kp.DEFAULTSIDE = Cp.d.DEFAULTSIDE, Kp.NO_CAP = 0, Kp.CAP_START = 1, Kp.CAP_END = 2, Kp.CAP_ALL = 3, Kp.NO_FLIP = 0, Kp.FLIP_TILE = 1, Kp.ROTATE_TILE = 2, Kp.FLIP_ROW = 3, Kp.ROTATE_RO … [truncated]
+       throw (0, hp.o)("GroundMesh")
+     }, Kp._GoldbergMeshParser = (pp, ip) => {
+       throw (0, hp.o)("GoldbergMesh")
+     }, Kp._LinesMeshParser = (pp, ip) => {
+       throw (0, hp.o)("LinesMesh")
+     }, Kp._GreasedLineMeshParser = (pp, ip) => {
+       throw (0, hp.o)("GreasedLineMesh")
+     }, Kp._GreasedLineRibbonMeshParser = (pp, ip) => {
+       throw (0, hp.o)("GreasedLineRibbonMesh")
+     }, Kp._TrailMeshParser = (pp, ip) => {
+       throw (0, hp.o)("TrailMesh")
+     }, Kp._GaussianSplattingMeshParser = (pp, ip) => {
+       throw (0, hp.o)("GaussianSplattingMesh")
+     }, Kp._GaussianSplattingPartProxyMeshParser = (pp, ip) => {
+ ... (75 more added lines; see GitHub link above)
```

#### 97. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L519-L529` → after: `L6397-L6413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6397-L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6397-L6413) · [Before (L519-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L519-L529)

```diff
-       }
-       static get Now() {
-         return cD.c.Now
-       }
-       static GetClassName(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           wD = null;
-         if (!zD && DD.getClassName) wD = DD.getClassName();
-         else {
-           if (DD instanceof Object) {
-             wD = (zD ? DD : Object.getPrototypeOf(DD)).constructor.__bjsclassName__
+         applyToMesh(pp, ip) {
+           return this._applyTo(pp, ip, !1), this
+         }
+         applyToGeometry(pp, ip) {
+           return this._applyTo(pp, ip, !1), this
+         }
+         updateMesh(pp) {
+           return this._update(pp), this
+         }
+         updateGeometry(pp) {
+           return this._update(pp), this
+         }* _applyToCoroutine(pp) {
+           let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+             cp = arguments.length > 2 ? arguments[2] : void 0;
+           if (this.positions && (pp.setVerticesData(Ip.j.PositionKind, this.positions, ip), cp && (yield)), this.normals && (pp.setVerticesData(Ip.j.NormalKind, this.normals, ip), cp && (yield)), this.tangents && (pp.setVerticesData(Ip.j.TangentKind, this.tangents, ip), cp && (yi … [truncated]
+             const Op = this.positions && this.colors.length === this.positions.length ? 3 : 4;
+ ... (1 more added lines; see GitHub link above)
```

#### 98. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L531` → after: `L6415-L6420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6415-L6420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6415-L6420) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L531)

```diff
-           wD || (wD = typeof DD)
+           if (this.matricesIndices && (pp.setVerticesData(Ip.j.MatricesIndicesKind, this.matricesIndices, ip), cp && (yield)), this.matricesWeights && (pp.setVerticesData(Ip.j.MatricesWeightsKind, this.matricesWeights, ip), cp && (yield)), this.matricesIndicesExtra && (pp.setVert … [truncated]
+             const ip = pp;
+             ip.Am = [];
+             for (const pp of this.materialInfos) new Pp.d(pp.materialIndex, pp.verticesStart, pp.verticesCount, pp.indexStart, pp.indexCount, ip)
+           }
+           return this
```

#### 99. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L533-L548` → after: `L6422-L6451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6422-L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6422-L6451) · [Before (L533-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L533-L548)

```diff
-         return wD
-       }
-       static First(DD, zD) {
-         for (const wD of DD)
-           if (zD(wD)) return wD;
-         return null
-       }
-       static getFullClassName(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           wD = null,
-           pD = null;
-         if (!zD && DD.getClassName) wD = DD.getClassName();
-         else {
-           if (DD instanceof Object) {
-             const sD = zD ? DD : Object.getPrototypeOf(DD);
-             wD = sD.constructor.__bjsclassName__, pD = sD.constructor.__bjsmoduleName__
+         _update(pp, ip, cp) {
+           return this.positions && pp.updateVerticesData(Ip.j.PositionKind, this.positions, ip, cp), this.normals && pp.updateVerticesData(Ip.j.NormalKind, this.normals, ip, cp), this.tangents && pp.updateVerticesData(Ip.j.TangentKind, this.tangents, ip, cp), this.uvs && pp.updat … [truncated]
+         }
+         static _TransformVector3Coordinates(pp, ip) {
+           let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+             Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp.length;
+           const Ip = op.i.Zy[0],
+             Sp = op.i.Zy[1];
+           for (let xp = cp; xp < cp + Op; xp += 3) op.o.FromArrayToRef(pp, xp, Ip), op.o.TransformCoordinatesToRef(Ip, ip, Sp), pp[xp] = Sp.x, pp[xp + 1] = Sp.y, pp[xp + 2] = Sp.z
+         }
+         static _TransformVector3Normals(pp, ip) {
+           let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+             Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp.length;
+           const Ip = op.i.Zy[0],
+             Sp = op.i.Zy[1];
+           for (let xp = cp; xp < cp + Op; xp += 3) op.o.FromArrayToRef(pp, xp, Ip), op.o.TransformNormalToRef(Ip, ip, Sp), pp[xp] = Sp.x, pp[xp + 1] = Sp.y, pp[xp + 2] = Sp.z
+ ... (14 more added lines; see GitHub link above)
```

#### 100. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L552-L563` → after: `L6454-L6878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6454-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6454-L6878) · [Before (L552-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L552-L563)

```diff
-         return wD ? (null != pD ? pD + "." : "") + wD : null
-       }
-       static async DelayAsync(DD) {
-         await new Promise((zD => {
-           setTimeout((() => {
-             zD()
-           }), DD)
-         }))
-       }
-       static IsSafari() {
-         return !!(0, KD.f)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
-       }
+         transform(ip) {
+           const cp = ip.determinant() < 0;
+           return this.positions && pp._TransformVector3Coordinates(this.positions, ip), this.normals && pp._TransformVector3Normals(this.normals, ip), this.tangents && pp._TransformVector4Normals(this.tangents, ip), cp && this.indices && pp._FlipFaces(this.indices), this
+         }
+         splitBasedOnMaterialID() {
+           if (!this.materialInfos || this.materialInfos.length < 2) return [this];
+           const ip = [];
+           for (const cp of this.materialInfos) {
+             const Op = new pp;
+             if (this.positions && (Op.positions = this.positions.slice(3 * cp.verticesStart, 3 * (cp.verticesCount + cp.verticesStart))), this.normals && (Op.normals = this.normals.slice(3 * cp.verticesStart, 3 * (cp.verticesCount + cp.verticesStart))), this.tangents && (Op.tange … [truncated]
+               Op.indices = [];
+               for (let pp = cp.indexStart; pp < cp.indexStart + cp.indexCount; pp++) Op.indices.push(this.indices[pp] - cp.verticesStart)
+             }
+             const op = new Wp;
+             op.indexStart = 0, op.indexCount = Op.indices ? Op.indices.length : 0, op.materialIndex = cp.materialIndex, op.verticesStart = 0, op.verticesCount = (Op.positions ? Op.positions.length : 0) / 3, Op.materialInfos = [op], ip.push(Op)
+           }
+ ... (409 more added lines; see GitHub link above)
```

#### 101. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L566-L568` → after: `L6881-L6887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6881-L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6881-L6887) · [Before (L566-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L566-L568)

```diff
-     function nD(DD, zD) {
-       return wD => {
-         wD.__bjsclassName__ = DD, wD.__bjsmoduleName__ = null != zD ? zD : null
+     function Dp(pp, ip, cp, Op) {
+       cp.E_(Number.POSITIVE_INFINITY), Op.E_(Number.NEGATIVE_INFINITY);
+       for (let op = 0; op < 3 * ip; op += 3) {
+         const ip = pp[op],
+           Ip = pp[op + 1],
+           Sp = pp[op + 2];
+         ip < cp.x && (cp.x = ip), Ip < cp.y && (cp.y = Ip), Sp < cp.z && (cp.z = Sp), ip > Op.x && (Op.x = ip), Ip > Op.y && (Op.y = Ip), Sp > Op.z && (Op.z = Sp)
```

#### 102. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L571-L580` → after: `L6890-L6965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6890-L6965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6890-L6965) · [Before (L571-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L571-L580)

```diff
-     pD = hD, hD.AssetBaseUrl = "", hD.UseCustomRequestHeaders = !1, hD.CustomRequestHeaders = RD.e.CustomRequestHeaders, hD.GetDOMTextContent = KD.b, hD._DefaultCdnUrl = "https://cdn.babylonjs.com", hD._CdnVersion = "9.28.0", hD._DefaultAssetsUrl = "https://assets.babylonjs.com/c … [truncated]
-       const zD = document.createElement("a");
-       return zD.href = DD, zD.href
-     } : "function" === typeof URL && "object" === typeof location ? DD => new URL(DD, location.origin).href : () => {
-       throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
-     }, hD.NoneLogLevel = rD.d.NoneLogLevel, hD.MessageLogLevel = rD.d.MessageLogLevel, hD.WarningLogLevel = rD.d.WarningLogLevel, hD.ErrorLogLevel = rD.d.ErrorLogLevel, hD.AllLogLevel = rD.d.AllLogLevel, hD.IsWindowObjectExist = KD.h, hD.PerformanceNoneLogLevel = 0, hD.Performanc … [truncated]
-     class MD {
-       constructor(DD, zD, wD) {
-         let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         this.iterations = DD, this.index = pD - 1, this._done = !1, this._fn = zD, this._successCallback = wD
+ 
+     function Ap(pp, ip, cp) {
+       cp && (pp.x -= pp.x * cp.x + cp.y, pp.y -= pp.y * cp.x + cp.y, pp.z -= pp.z * cp.x + cp.y, ip.x += ip.x * cp.x + cp.y, ip.y += ip.y * cp.x + cp.y, ip.z += ip.z * cp.x + cp.y)
+     }
+ 
+     function Pp(pp, ip, cp, op, Ip) {
+       const Sp = Op.i.Zy[7],
+         xp = Op.i.Zy[8];
+       for (let Lp = 0; Lp < 2; ++Lp)
+         for (let Yp = 0; Yp < 2; ++Yp)
+           for (let Dp = 0; Dp < 2; ++Dp) Sp.set(Lp ? ip.x : pp.x, Yp ? ip.y : pp.y, Dp ? ip.z : pp.z), Op.o.TransformCoordinatesToRef(Sp, cp, xp), op.minimizeInPlace(xp), Ip.maximizeInPlace(xp)
+     }
+ 
+     function Wp(pp, ip, cp, op, Ip) {
+       const Sp = Op.i.Zy[7];
+       for (let xp = 0; xp < 3 * ip; xp += 3) Op.o.TransformCoordinatesFromFloatsToRef(pp[xp], pp[xp + 1], pp[xp + 2], cp, Sp), op.minimizeInPlace(Sp), Ip.maximizeInPlace(Sp)
+ ... (60 more added lines; see GitHub link above)
```

#### 103. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L582-L583` → after: `L6967-L6972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6967-L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6967-L6972) · [Before (L582-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L582-L583)

```diff
-       executeNext() {
-         this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
+     }, Sp.d.prototype.thinInstanceGetWorldMatrices = function() {
+       if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
+       const pp = this._thinInstanceDataStorage.matrixData;
+       if (!this._thinInstanceDataStorage.worldMatrices) {
+         this._thinInstanceDataStorage.worldMatrices = [];
+         for (let ip = 0; ip < this._thinInstanceDataStorage.instancesCount; ++ip) this._thinInstanceDataStorage.worldMatrices[ip] = Op.b.FromArray(pp, 16 * ip)
```

#### 104. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L585-L586` → after: `L6974-L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR6974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L6974-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L6974-L7027) · [Before (L585-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L585-L586)

```diff
-       breakLoop() {
-         this._done = !0, this._successCallback()
+       return this._thinInstanceDataStorage.worldMatrices
+     }, Sp.d.prototype.thinInstanceRefreshBoundingInfo = function() {
+       let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+         ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+         cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
+       const Sp = this._thinInstanceDataStorage.boundingVectors;
+       if (pp || !this.rawBoundingInfo) {
+         if (Sp.length = 0, op && function(pp, ip, cp) {
+             const op = pp._userThinInstanceBuffersStorage,
+               Sp = op?.data[Lp],
+               yp = op?.strides[Lp];
+             if (!Sp || !yp || yp < 4 || !Yp(pp)) return !1;
+             const Up = pp._thinInstanceDataStorage.matrixData;
+             if (!Up) return !1;
+ ... (38 more added lines; see GitHub link above)
```

#### 105. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L588-L590` → after: `L7029-L7036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7029-L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L7029-L7036) · [Before (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L588-L590)

```diff
-       static Run(DD, zD, wD) {
-         const pD = new MD(DD, zD, wD, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
-         return pD.executeNext(), pD
+       const yp = this.bJ(),
+         Up = this._thinInstanceDataStorage.matrixData;
+       if (0 === Sp.length)
+         for (let Op = 0; Op < yp.boundingBox.vectors.length; ++Op) Sp.push(yp.boundingBox.vectors[Op].clone());
+       Op.i.Zy[0].E_(Number.POSITIVE_INFINITY), Op.i.Zy[1].E_(Number.NEGATIVE_INFINITY);
+       for (let Ip = 0; Ip < this._thinInstanceDataStorage.instancesCount; ++Ip) {
+         Op.b.FromArrayToRef(Up, 16 * Ip, Op.i.Matrix[0]);
+         for (let pp = 0; pp < Sp.length; ++pp) Op.o.TransformCoordinatesToRef(Sp[pp], Op.i.Matrix[0], Op.i.Zy[2]), Op.i.Zy[0].minimizeInPlace(Op.i.Zy[2]), Op.i.Zy[1].maximizeInPlace(Op.i.Zy[2])
```

#### 106. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L592-L601` → after: `L7038-L7477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7038-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L7038-L7477) · [Before (L592-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L592-L601)

```diff
-       static SyncAsyncForLoop(DD, zD, wD, pD, sD) {
-         let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-         return MD.Run(Math.ceil(DD / zD), (pD => {
-           sD && sD() ? pD.breakLoop() : setTimeout((() => {
-             for (let KD = 0; KD < zD; ++KD) {
-               const rD = pD.index * zD + KD;
-               if (rD >= DD) break;
-               if (wD(rD), sD && sD()) {
-                 pD.breakLoop();
-                 break
+       yp.reConstruct(Op.i.Zy[0], Op.i.Zy[1]), this._updateBoundingInfo()
+     }, Sp.d.prototype._thinInstanceRecreateBuffer = function(pp) {
+       let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+       "matrix" === pp ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, ip)) : "previousMatrix" === pp ? this._scene.needsPreviousWorldMatr … [truncated]
+     }, Sp.d.prototype._thinInstanceUpdateBufferSize = function(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+       pp === xp.j.ColorKind && (pp = xp.j.ColorInstanceKind);
+       const cp = "matrix" === pp;
+       if (!cp && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[pp])) return;
+       const Op = cp ? 16 : this._userThinInstanceBuffersStorage.strides[pp],
+         op = cp ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[pp];
+       let Ip = cp ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[pp];
+       const Sp = (this._thinInstanceDataStorage.instancesCount + ip) * Op;
+       let Lp = op;
+       for (; Lp < Sp;) Lp *= 2;
+       if (!Ip || op != Lp) {
+ ... (424 more added lines; see GitHub link above)
```

#### 107. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L604-L606` → after: `L7480-L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7480-L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L7480-L7682) · [Before (L604-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L604-L606)

```diff
-             pD.executeNext()
-           }), KD)
-         }), pD)
+           }
+           this.ei.i5(1, 1, 1), this.position.i5(0, 0, 0), this.rotation.i5(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Ap.f.Identity()), this._worldMatrix = Ap.b.Identity()
+         }
+         _afterComputeWorldMatrix() {}
+         registerAfterWorldMatrixUpdate(pp) {
+           return this.onAfterWorldMatrixUpdateObservable.add(pp), this
+         }
+         unregisterAfterWorldMatrixUpdate(pp) {
+           return this.onAfterWorldMatrixUpdateObservable.removeCallback(pp), this
+         }
+         getPositionInCameraSpace() {
+           let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+           return pp || (pp = this.Gl().activeCamera), Ap.o.TransformCoordinates(this.getAbsolutePosition(), pp.getViewMatrix())
+         }
+         getDistanceToCamera() {
+           let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+ ... (187 more added lines; see GitHub link above)
```

#### 108. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L612` → after: `L7689-L7731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7689-L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/255.js#L7689-L7731) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/255.js#L612)

```diff
-       OD || (OD = !0, hD.Mix = GD.j, hD.IsExponentOfTwo = GD.g, AD.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAE … [truncated]
+       vp || (vp = !0, Up.Parse = wp)
+     }(Op = Up.prototype).fn ?? (Op.fn = (0, yp.k)("TransformNode", "fn")), (op = Up.prototype).applyImpulse ?? (op.applyImpulse = (0, yp.k)("TransformNode", "applyImpulse")), (Ip = Up.prototype).applyAngularImpulse ?? (Ip.applyAngularImpulse = (0, yp.k)("TransformNode", "applyAng … [truncated]
+   },
+   40586: (pp, ip, cp) => {
+     function Op(pp, ip, cp) {
+       try {
+         const Op = pp.next();
+         Op.done ? ip(Op) : Op.value ? Op.value.then((() => {
+           Op.value = void 0, ip(Op)
+         }), cp) : ip(Op)
+       } catch (Op) {
+         cp(Op)
+       }
+     }
+ 
+     function op() {
+ ... (27 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/256.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/256.js` (95 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f)

#### 1. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L4)

```diff
-   40364: (DD, zD, wD) => {
+   40342: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6-L12` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L6-L9) · [Before (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L6-L12)

```diff
-       e: () => pD
-     });
-     let pD = !1
-   },
-   39918: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => ID
+       b: () => xp,
+       f: () => Up,
+       i: () => Yp,
+       j: () => Lp
```

#### 3. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L14-L20` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L11-L14) · [Before (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L14-L20)

```diff
-     var pD = wD(39921),
-       sD = wD(39927),
-       KD = wD(37119),
-       rD = wD(37079),
-       LD = wD(37110),
-       cD = wD(37891),
-       gD = wD(39935);
+     var Op = cp(40140),
+       op = cp(38905),
+       Ip = cp(40273),
+       Sp = cp(40179);
```

#### 4. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L22-L23` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L16-L17) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L22-L23)

```diff
-       get wrapU() {
-         return this._wrapU
+       get uR() {
+         return this._isDisposed
```

#### 5. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L25-L26` → after: `L19-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L19-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L19-L26) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L25-L26)

```diff
-       set wrapU(DD) {
-         this._wrapU = DD
+       constructor(pp, ip, cp) {
+         let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+           Ip = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           xp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           Lp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+           Yp = arguments.length > 7 ? arguments[7] : void 0,
+           Dp = arguments.length > 8 ? arguments[8] : void 0;
+         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Sp.d)(), pp && pp.Gl ? this._engine = pp.Gl().gy() : this._engine = pp, this._updatable = cp, this._instanced = xp, this._divisor = Yp || 1, this._label = Dp, ip instanceof Op.c ? (this._data = null, this._buffer = ip) … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L28-L29` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L28-L33) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L28-L29)

```diff
-       get wrapV() {
-         return this._wrapV
+       createVertexBuffer(pp, ip, cp, Op, op) {
+         let Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           Sp = arguments.length > 6 ? arguments[6] : void 0;
+         const xp = Ip ? ip : ip * Float32Array.BYTES_PER_ELEMENT,
+           Yp = Op ? Ip ? Op : Op * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
+         return new Lp(this._engine, this, pp, this._updatable, !0, Yp, void 0 === op ? this._instanced : op, xp, cp, void 0, void 0, !0, this._divisor || Sp)
```

#### 7. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L31-L32` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L35-L36) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L31-L32)

```diff
-       set wrapV(DD) {
-         this._wrapV = DD
+       isUpdatable() {
+         return this._updatable
```

#### 8. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L34-L35` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L38-L39) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L34-L35)

```diff
-       get coordinatesMode() {
-         return 0
+       getData() {
+         return this._data
```

#### 9. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L37-L38` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L41-L42) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L37-L38)

```diff
-       get isCube() {
-         return !!this._texture && this._texture.isCube
+       getBuffer() {
+         return this._buffer
```

#### 10. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L40-L41` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L44-L45) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L40-L41)

```diff
-       set isCube(DD) {
-         this._texture && (this._texture.isCube = DD)
+       getStrideSize() {
+         return this.byteStride / Float32Array.BYTES_PER_ELEMENT
```

#### 11. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L43-L44` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L47-L49) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L43-L44)

```diff
-       get is3D() {
-         return !!this._texture && this._texture.is3D
+       create() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         !pp && this._buffer || (pp = pp || this._data, pp && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, pp), this._data = pp) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(pp, this._label), this._data = pp … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L46-L47` → after: `L51-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L51-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L51-L57) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L46-L47)

```diff
-       set is3D(DD) {
-         this._texture && (this._texture.is3D = DD)
+       _rebuild() {
+         if (this._data) this._buffer = null, this.create(this._data);
+         else {
+           if (!this._buffer) return;
+           if (this._buffer.TA > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.TA, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.TA, void 0, this._label));
+           op.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
+         }
```

#### 13. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L49-L50` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L59-L60) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L49-L50)

```diff
-       get is2DArray() {
-         return !!this._texture && this._texture.is2DArray
+       update(pp) {
+         this.create(pp)
```

#### 14. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L52-L53` → after: `L62-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L62-L64) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L52-L53)

```diff
-       set is2DArray(DD) {
-         this._texture && (this._texture.is2DArray = DD)
+       updateDirectly(pp, ip, cp) {
+         let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, pp, Op ? ip : ip * Float32Array.BYTES_PER_ELEMENT, cp ? cp * this.byteStride : void 0), this._data = 0 === ip && void 0 === cp ? pp : null)
```

#### 15. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L55-L56` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L66-L67) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L55-L56)

```diff
-       getClassName() {
-         return "ThinTexture"
+       _increaseReferences() {
+         this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
```

#### 16. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L58-L59` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L69-L70) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L58-L59)

```diff
-       static _IsRenderTargetWrapper(DD) {
-         return void 0 !== DD?.shareDepth
+       dispose() {
+         this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
```

#### 17. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L61-L62` → after: `L72-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L72-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L72-L75) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L61-L62)

```diff
-       constructor(DD) {
-         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = gD.b.Zero(), this._cachedBaseSize = gD.b.Zero(), this._initialSamplingMode = 2, this._texture = RD. … [truncated]
+     }
+     class Lp {
+       get uR() {
+         return this._isDisposed
```

#### 18. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L64-L65` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L77-L78) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L64-L65)

```diff
-       isReady() {
-         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
+       get instanceDivisor() {
+         return this._instanceDivisor
```

#### 19. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L67-L69` → after: `L80-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L80-L82) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L67-L69)

```diff
-       delayLoad() {}
-       getInternalTexture() {
-         return this._texture
+       set instanceDivisor(pp) {
+         const ip = 0 != pp;
+         this._instanceDivisor = pp, ip !== this._instanced && (this._instanced = ip, this._computeHashCode())
```

#### 20. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L71-L74` → after: `L84-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L84-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L84-L119) · [Before (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L71-L74)

```diff
-       getSize() {
-         if (this._texture) {
-           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
-           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
+       get _maxVerticesCount() {
+         const pp = this.getData();
+         return pp ? Array.isArray(pp) ? pp.length / (this.byteStride / 4) - this.byteOffset / 4 : (pp.byteLength - this.byteOffset) / this.byteStride : 0
+       }
+       constructor(pp, ip, cp, Op, op, Sp, Ap, Pp, Wp, yp) {
+         let Up, wp = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+           vp = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
+           tp = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
+           Hp = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
+         if (this._isDisposed = !1, this.engine = pp, "object" === typeof Op && null !== Op ? (Up = Op.updatable ?? !1, op = Op.postponeInternalCreation, Sp = Op.stride, Ap = Op.instanced, Pp = Op.offset, Wp = Op.size, yp = Op.type, wp = Op.normalized ?? !1, vp = Op.useBytes ?? !1 … [truncated]
+           const pp = this.getData();
+           this.type = pp ? Dp(pp) : Lp.FLOAT
+         } else this.type = yp;
+         const dp = (0, Ip.p)(this.type);
+         vp ? (this._size = Wp || (Sp ? Sp / dp : Yp(cp)), this.byteStride = Sp || this._buffer.byteStride || this._size * dp, this.byteOffset = Pp || 0) : (this._size = Wp || Sp || Yp(cp), this.byteStride = Sp ? Sp * dp : this._buffer.byteStride || this._size * dp, this.byteOffse … [truncated]
+       }
+ ... (20 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L78-L79` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L122-L123) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L78-L79)

```diff
-       getBaseSize() {
-         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
+       _computeHashCode() {
+         this.hashCode = (Lp._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
```

#### 22. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L81-L82` → after: `L125-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L125-L126) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L81-L82)

```diff
-       get samplingMode() {
-         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
+       _rebuild() {
+         this._buffer?._rebuild()
```

#### 23. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L84-L86` → after: `L128-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L128-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L128-L160) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L84-L86)

```diff
-       updateSamplingMode(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this._texture && this._engine && this._engine.updateTextureSamplingMode(DD, this._texture, this._texture.generateMipMaps && zD)
+       getKind() {
+         return this._kind
+       }
+       isUpdatable() {
+         return this._buffer.isUpdatable()
+       }
+       getData() {
+         return this._buffer.getData()
+       }
+       getFloatData(pp, ip) {
+         const cp = this.getData();
+         return cp ? (0, Ip.m)(cp, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, pp, ip) : null
+       }
+       getBuffer() {
+         return this._buffer.getBuffer()
+       }
+ ... (17 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L88-L89` → after: `L162-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L162-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L162-L170) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L88-L89)

```diff
-       releaseInternalTexture() {
-         this._texture && (this._texture.dispose(), this._texture = null)
+       create(pp) {
+         this._buffer.create(pp), this._alignBuffer()
+       }
+       update(pp) {
+         this._buffer.update(pp), this._alignBuffer()
+       }
+       updateDirectly(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         this._buffer.updateDirectly(pp, ip, void 0, cp), this._alignBuffer()
```

#### 25. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L92` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L173) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L92)

```diff
-         this._texture && (this.releaseInternalTexture(), this._engine = null)
+         this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
```

#### 26. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L95-L133` → after: `L182-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L182-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L182-L278) · [Before (L95-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L95-L133)

```diff
-     var AD, UD = wD(39939),
-       fD = wD(39808);
-     let ID = (() => {
-       var DD;
-       let zD, wD, gD, AD, fD, ID, BD, GD, hD, nD, MD, OD, JD, ED, QD, XD, VD, PD, CD, xD, TD, bD, jD, dD, SD, iD = RD,
-         lD = [],
-         WD = [],
-         ND = [],
-         ZD = [],
-         yD = [],
-         kD = [],
-         mD = [],
-         eD = [],
-         oD = [],
-         aD = [],
-         uD = [],
- ... (23 more removed lines; see GitHub link above)
+ 
+     function Yp(pp) {
+       switch (pp) {
+         case Lp.UVKind:
+         case Lp.UV2Kind:
+         case Lp.UV3Kind:
+         case Lp.UV4Kind:
+         case Lp.UV5Kind:
+         case Lp.UV6Kind:
+           return 2;
+         case Lp.NormalKind:
+         case Lp.PositionKind:
+           return 3;
+         case Lp.ColorKind:
+         case Lp.ColorInstanceKind:
+         case Lp.MatricesIndicesKind:
+ ... (81 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L135-L136` → after: `L280-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L280-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L280-L294) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L135-L136)

```diff
-         get hasAlpha() {
-           return this._hasAlpha
+         const Yp = (pp, ip) => {
+           if (-1 !== this.thinInstanceIndex) {
+             const cp = pp._thinInstanceDataStorage.matrixData,
+               op = this.thinInstanceIndex << 4;
+             if (cp && cp.length > op) {
+               const pp = Op.i.Matrix[0];
+               Op.b.FromArrayToRef(cp, op, pp), Op.o.TransformNormalToRef(ip, pp, ip)
+             }
+           }
+           let cp = pp.getWorldMatrix();
+           pp.nonUniformScaling && (Op.i.Matrix[0].rM(cp), cp = Op.i.Matrix[0], cp.setTranslationFromFloats(0, 0, 0), cp.invert(), cp.transposeToRef(Op.i.Matrix[1]), cp = Op.i.Matrix[1]), Op.o.TransformNormalToRef(ip, cp, ip)
+         };
+         if (pp && Yp(this.pickedMesh, cp), this.ray) {
+           const ip = Op.i.Zy[0].rM(cp);
+           pp || Yp(this.pickedMesh, ip), Op.o.Dot(ip, this.ray.direction) > 0 && cp.negateInPlace()
```

#### 28. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L138-L139` → after: `L296-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L296-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L296-L357) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L138-L139)

```diff
-         set getAlphaFromRGB(DD) {
-           this._getAlphaFromRGB !== DD && (this._getAlphaFromRGB = DD, this._scene && this._scene.markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this))))
+         return cp.normalize(), cp
+       }
+       getTextureCoordinates() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : op.j.UVKind;
+         if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(pp)) return null;
+         const ip = this.pickedMesh.NOp();
+         if (!ip) return null;
+         const cp = this.pickedMesh.getVerticesData(pp);
+         if (!cp) return null;
+         let Ip = Op.l.FromArray(cp, 2 * ip[3 * this.faceId]),
+           Sp = Op.l.FromArray(cp, 2 * ip[3 * this.faceId + 1]),
+           xp = Op.l.FromArray(cp, 2 * ip[3 * this.faceId + 2]);
+         return Ip = Ip.scale(this.bu), Sp = Sp.scale(this.bv), xp = xp.scale(1 - this.bu - this.bv), new Op.l(Ip.x + Sp.x + xp.x, Ip.y + Sp.y + xp.y)
+       }
+     }
+   },
+ ... (46 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L141-L142` → after: `L359-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L359-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L359-L680) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L141-L142)

```diff
-         get getAlphaFromRGB() {
-           return this._getAlphaFromRGB
+       }
+       getMSAARenderBuffer() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+         return this._MSAARenderBuffers?.[pp] ?? null
+       }
+       release() {
+         this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
+       }
+     }
+   },
+   40113: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => tp
+     });
+     var Op = cp(37349),
+       op = cp(40053),
+ ... (306 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L144-L145` → after: `L682-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L682-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L682-L694) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L144-L145)

```diff
-         set coordinatesIndex(DD) {
-           this._coordinatesIndex !== DD && (this._coordinatesIndex = DD, this._scene && this._scene.markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this))))
+       }
+       _rebuildInternalTextures() {
+         const pp = this._internalTexturesCache.slice();
+         for (const ip of pp) ip._rebuild()
+       }
+       _rebuildRenderTargetWrappers() {
+         const pp = this._renderTargetWrapperCache.slice();
+         for (const ip of pp) ip.textures?.some((pp => 15 === pp.source)) || ip._rebuild()
+       }
+       _rebuildEffects() {
+         for (const pp in this._compiledEffects) {
+           const ip = this._compiledEffects[pp];
+           ip._pipelineContext = null, ip._prepareEffect()
```

#### 31. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L147-L148` → after: `L696-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L696-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L696-L741) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L147-L148)

```diff
-         get coordinatesIndex() {
-           return this._coordinatesIndex
+         op.e.ResetCache()
+       }
+       _rebuildGraphicsResources() {
+         this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
+       }
+       _flagContextRestored() {
+         Sp.e.Warn(this.name + " context successfully restored."), this.Fy.notifyObservers(this), this._contextWasLost = !1
+       }
+       _restoreEngineAfterContextLost(pp) {
+         setTimeout((() => {
+           this._clearEmptyResources();
+           const ip = this._depthCullingState.depthTest,
+             cp = this._depthCullingState.depthFunc,
+             Op = this._depthCullingState.depthMask,
+             op = this._stencilState.stencilTest;
+           pp(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = ip, this._depthCullingState.depthFunc = cp, this._depthCullingState.depthMask = Op, this._stencilState.stencilTest = op, this._flagContextRestored()
+ ... (30 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L150-L151` → after: `L743-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L743-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L743-L773) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L150-L151)

```diff
-         set coordinatesMode(DD) {
-           this._coordinatesMode !== DD && (this._coordinatesMode = DD, this._scene && this._scene.markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this))))
+         return this._emptyCubeTexture
+       }
+       set framebufferDimensionsObject(pp) {
+         this._framebufferDimensionsObject = pp
+       }
+       get activeRenderLoops() {
+         return this._activeRenderLoops
+       }
+       stopRenderLoop(pp) {
+         if (!pp) return this._activeRenderLoops.length = 0, void this._cancelFrame();
+         const ip = this._activeRenderLoops.indexOf(pp);
+         ip >= 0 && (this._activeRenderLoops.splice(ip, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
+       }
+       _cancelFrame() {
+         if (this.customAnimationFrameRequester) {
+           if (0 !== this._frameHandler) {
+ ... (15 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L153-L154` → after: `L775-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L775-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L775-L796) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L153-L154)

```diff
-         get coordinatesMode() {
-           return this._coordinatesMode
+       }
+       Hk() {
+         this.onBeginFrameObservable.notifyObservers(this)
+       }
+       Rk() {
+         this._frameId++, this.onEndFrameObservable.notifyObservers(this)
+       }
+       get maxFPS() {
+         return this._maxFPS
+       }
+       set maxFPS(pp) {
+         this._maxFPS = pp, void 0 !== pp && (this._minFrameTime = pp <= 0 ? Number.MAX_VALUE : 1e3 / pp)
+       }
+       _isOverFrameTime(pp) {
+         if (!pp || void 0 === this._maxFPS) return !1;
+         const ip = pp - this._lastFrameTime;
+ ... (6 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L156-L157` → after: `L798-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L798-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L798-L804) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L156-L157)

```diff
-         get wrapU() {
-           return this._wrapU
+       }
+       _renderLoop(pp) {
+         this._processFrame(pp), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
+       }
+       _renderFrame() {
+         for (let pp = 0; pp < this._activeRenderLoops.length; pp++) {
+           (0, this._activeRenderLoops[pp])()
```

#### 35. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L159-L184` → after: `L806-L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L806-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L806-L943) · [Before (L159-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L159-L184)

```diff
-         set wrapU(DD) {
-           this._wrapU = DD
-         }
-         get wrapV() {
-           return this._wrapV
-         }
-         set wrapV(DD) {
-           this._wrapV = DD
-         }
-         get isCube() {
-           return this._texture ? this._texture.isCube : this._isCube
-         }
-         set isCube(DD) {
-           this._texture ? this._texture.isCube = DD : this._isCube = DD
-         }
-         get is3D() {
- ... (10 more removed lines; see GitHub link above)
+       }
+       _renderViews() {
+         return !1
+       }
+       _queueNewFrame(pp, ip) {
+         return vp(pp, ip)
+       }
+       _queueNewFrameForRenderLoop() {
+         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.zy = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.z … [truncated]
+       }
+       runRenderLoop(pp) {
+         -1 === this._activeRenderLoops.indexOf(pp) && (this._activeRenderLoops.push(pp), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
+       }
+       getDepthBuffer() {
+         return this._depthCullingState.depthTest
+       }
+ ... (122 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L186-L187` → after: `L945-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L945-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L945-L1026) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L186-L187)

```diff
-         get gammaSpace() {
-           return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
+         return kp
+       }
+       _rebuildBuffers() {
+         for (const pp of this._uniformBuffers) pp._rebuildAfterContextLost()
+       }
+       get _shouldUseHighPrecisionShader() {
+         return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
+       }
+       getHostDocument() {
+         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Up.f)() ? document : null
+       }
+       getLoadedTexturesCache() {
+         return this._internalTexturesCache
+       }
+       clearInternalTexturesCache() {
+         this._internalTexturesCache.length = 0
+ ... (66 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L189-L195` → after: `L1028-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1028-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1028-L1045) · [Before (L189-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L189-L195)

```diff
-         set gammaSpace(DD) {
-           if (this._texture) {
-             if (this._texture._gammaSpace === DD) return;
-             this._texture._gammaSpace = DD
-           } else {
-             if (this._gammaSpace === DD) return;
-             this._gammaSpace = DD
+         if ((0, Up.j)() && (0, Up.f)())
+           if (this._renderingCanvas) {
+             const cp = this._renderingCanvas.getBoundingClientRect?.();
+             pp = this._renderingCanvas.clientWidth || cp?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, ip = this._renderingCanvas.clientHeight || cp?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
+           } else pp = window.innerWidth, ip = window.innerHeight;
+         else pp = this._renderingCanvas ? this._renderingCanvas.width : 100, ip = this._renderingCanvas ? this._renderingCanvas.height : 100;
+         this.setSize(pp / this._hardwareScalingLevel, ip / this._hardwareScalingLevel, cp)
+       }
+       setSize(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (!this._renderingCanvas) return !1;
+         if (pp |= 0, ip |= 0, !cp && this._renderingCanvas.width === pp && this._renderingCanvas.height === ip) return !1;
+         if (this._renderingCanvas.width = pp, this._renderingCanvas.height = ip, this.scenes) {
+           for (let pp = 0; pp < this.scenes.length; pp++) {
+             const ip = this.scenes[pp];
+             for (let pp = 0; pp < ip.cameras.length; pp++) {
+ ... (2 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L197-L209` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1047) · [Before (L197-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L197-L209)

```diff
-           this.Ul()?.markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this)))
-         }
-         get isRGBD() {
-           return null != this._texture && this._texture._isRGBD
-         }
-         set isRGBD(DD) {
-           DD !== this.isRGBD && (this._texture && (this._texture._isRGBD = DD), this.Ul()?.markAllMaterialsAsDirty(1, (DD => DD.hasTexture(this))))
-         }
-         get noMipmap() {
-           return !1
-         }
-         get lodGenerationOffset() {
-           return this._texture ? this._texture._lodGenerationOffset : 0
+           this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
```

#### 39. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L211-L230` → after: `L1049-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1049-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1049-L1144) · [Before (L211-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L211-L230)

```diff
-         set lodGenerationOffset(DD) {
-           this._texture && (this._texture._lodGenerationOffset = DD)
-         }
-         get lodGenerationScale() {
-           return this._texture ? this._texture._lodGenerationScale : 0
-         }
-         set lodGenerationScale(DD) {
-           this._texture && (this._texture._lodGenerationScale = DD)
-         }
-         get linearSpecularLOD() {
-           return !!this._texture && this._texture._linearSpecularLOD
-         }
-         set linearSpecularLOD(DD) {
-           this._texture && (this._texture._linearSpecularLOD = DD)
-         }
-         get irradianceTexture() {
- ... (4 more removed lines; see GitHub link above)
+         return !0
+       }
+       createRawTexture(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap) {
+         throw (0, Wp.o)("engine.rawTexture")
+       }
+       createRawCubeTexture(pp, ip, cp, Op, op, Ip, Sp, xp) {
+         throw (0, Wp.o)("engine.rawTexture")
+       }
+       createRawTexture3D(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp) {
+         throw (0, Wp.o)("engine.rawTexture")
+       }
+       createRawTexture2DArray(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap) {
+         throw (0, Wp.o)("engine.rawTexture")
+       }
+       _sharedInit(pp) {
+         this._renderingCanvas = pp
+ ... (80 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L232-L233` → after: `L1146-L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1146-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1146-L1208) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L232-L233)

```diff
-         get uid() {
-           return this._uid || (this._uid = (0, cD.c)()), this._uid
+       }
+       static GetCompatibleTextureLoader(pp, ip) {
+         return null
+       }
+     }
+     tp._RenderPassIdCounter = 0, tp._RescalePostProcessFactory = null, tp.CollisionsEpsilon = .001, tp.QueueNewFrame = vp
+   },
+   40062: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Op
+     });
+     class Op {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersRepository : Op.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+ ... (47 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L235-L236` → after: `L1210-L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1210-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1210-L1230) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L235-L236)

```diff
-         toString() {
-           return this.name
+         op.forEach(((pp, ip) => {
+           Ip[pp] = ip
+         }));
+         for (const Dp of Lp.getAttributes(this, Sp)) xp.push(Dp)
+       }
+       dispose() {
+         this._uniforms = {}, this._isDisposed = !0
+       }
+       _cacheMatrix(pp, ip) {
+         const cp = this._valueCache[pp],
+           Op = ip.updateFlag;
+         if (void 0 !== cp && cp === Op) return !1;
+         const op = ip.BOp();
+         let Ip = this._matrixValueCache[pp];
+         if (void 0 !== cp && null !== cp && void 0 !== Ip) {
+           let ip = !0;
+ ... (5 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L238-L239` → after: `L1232-L1435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1232-L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1232-L1435) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L238-L239)

```diff
-         getClassName() {
-           return "BaseTexture"
+         return void 0 === Ip && (Ip = this._matrixValueCache[pp] = new Float32Array(16)), Ip.set(op), this._valueCache[pp] = Op, !0
+       }
+       _cacheFloat2(pp, ip, cp) {
+         let Op = this._valueCache[pp];
+         if (!Op || 2 !== Op.length) return Op = [ip, cp], this._valueCache[pp] = Op, !0;
+         let op = !1;
+         return Op[0] !== ip && (Op[0] = ip, op = !0), Op[1] !== cp && (Op[1] = cp, op = !0), op
+       }
+       _cacheFloat3(pp, ip, cp, Op) {
+         let op = this._valueCache[pp];
+         if (!op || 3 !== op.length) return op = [ip, cp, Op], this._valueCache[pp] = op, !0;
+         let Ip = !1;
+         return op[0] !== ip && (op[0] = ip, Ip = !0), op[1] !== cp && (op[1] = cp, Ip = !0), op[2] !== Op && (op[2] = Op, Ip = !0), Ip
+       }
+       _cacheFloat4(pp, ip, cp, Op, op) {
+         let Ip = this._valueCache[pp];
+ ... (188 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L241-L242` → after: `L1437-L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1437-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1437-L1439) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L241-L242)

```diff
-         set onDispose(DD) {
-           this._onDisposeObserver && this.Bl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Bl.add(DD)
+         if (!ip.getShaderParameter(Ip, ip.COMPILE_STATUS)) {
+           const cp = ip.getShaderInfoLog(Ip);
+           if (cp) throw pp.fragmentCompilationError = cp, new Error("FRAGMENT SHADER " + cp)
```

#### 44. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L244-L245` → after: `L1441-L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1441-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1441-L1448) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L244-L245)

```diff
-         get isBlocking() {
-           return !0
+         const cp = Op.getProgramInfoLog(Sp);
+         if (cp) throw pp.programLinkError = cp, new Error(cp)
+       }
+       if (cp) {
+         Op.validateProgram(Sp);
+         if (!Op.getProgramParameter(Sp, Op.VALIDATE_STATUS)) {
+           const ip = Op.getProgramInfoLog(Sp);
+           if (ip) throw pp.programValidationError = ip, new Error(ip)
```

#### 45. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L247-L248` → after: `L1450-L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1450-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1450-L1509) · [Before (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L247-L248)

```diff
-         get loadingError() {
-           return this._loadingError
+       }
+       Op.deleteShader(op), Op.deleteShader(Ip), pp.vertexShader = void 0, pp.fragmentShader = void 0, pp.onCompiled && (pp.onCompiled(), pp.onCompiled = void 0)
+     }
+ 
+     function Up(pp, ip, cp, Op, op, Ip, Sp, Lp, Ap) {
+       let Pp = arguments.length > 10 ? arguments[10] : void 0,
+         Wp = arguments.length > 11 ? arguments[11] : void 0,
+         yp = arguments.length > 12 ? arguments[12] : void 0;
+       const Up = xp(pp.context);
+       Wp || (Wp = Up.createRawShaderProgramInjection ?? Yp), yp || (yp = Up.createShaderProgramInjection ?? Dp);
+       const wp = pp;
+       wp.program = Op ? Wp(wp, ip, cp, wp.context, Ap) : yp(wp, ip, cp, Lp, wp.context, Ap), wp.program.__SPECTOR_rebuildProgram = Sp, Pp()
+     }
+ 
+     function wp(pp, ip, cp, Op, Ip, Sp) {
+       return vp((0, op.g)(pp, cp, Op), ip, Ip, Sp)
+ ... (44 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L250-L251` → after: `L1511-L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1511-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1511-L1537) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L250-L251)

```diff
-         get errorObject() {
-           return this._errorObject
+         return pp
+       }
+     }
+     const Dp = /(flat\s)?\s*varying\s*.*/;
+     class Ap {
+       constructor() {
+         this.shaderLanguage = 0
+       }
+       attributeProcessor(pp) {
+         return pp.replace("attribute", "in")
+       }
+       varyingCheck(pp, ip) {
+         return Dp.test(pp)
+       }
+       varyingProcessor(pp, ip) {
+         return pp.replace("varying", ip ? "in" : "out")
+ ... (11 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L253-L255` → after: `L1539-L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1539-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1539-L1637) · [Before (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L253-L255)

```diff
-         constructor(zD) {
-           let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           super(null), this.uniqueId = ((0, pD.m)(this, lD), (0, pD.m)(this, WD, void 0)), this.name = ((0, pD.m)(this, ND), (0, pD.m)(this, ZD, void 0)), this.displayName = ((0, pD.m)(this, yD), (0, pD.m)(this, kD, void 0)), this.metadata = ((0, pD.m)(this, mD), (0, pD.m)(this,  … [truncated]
+         return pp
+       }
+     }
+     var Pp = cp(40134),
+       Wp = cp(40143),
+       yp = cp(40149),
+       Up = cp(40033),
+       wp = cp(40088),
+       vp = cp(40068),
+       tp = cp(40151),
+       Hp = cp(40124);
+     class dp {}
+     class ep extends Ip.b {
+       get name() {
+         return this._name
+       }
+ ... (83 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L257-L258` → after: `L1639-L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1639-L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1639-L1655) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L257-L258)

```diff
-         Ul() {
-           return this._scene
+         this._sharedInit(Ip), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== cp.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = cp.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
+         for (let op = 0; op < this._caps.maxVertexAttribs; op++) this._currentBufferPointers[op] = new dp;
+         this._shaderProcessor = this.eU > 1 ? new Ap : new Yp;
+         const Sp = `Babylon.js v${ep.Version}`;
+         xp.e.Log(Sp + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", Sp);
+         const Lp = (0, op.J)(this._gl);
+         Lp.validateShaderPrograms = this.validateShaderPrograms, Lp.parallelShaderCompile = this._caps.parallelShaderCompile
+       }
+       _clearEmptyResources() {
+         this._dummyFramebuffer = null, super._clearEmptyResources()
+       }
+       _getShaderProcessingContext(pp) {
+         return null
+       }
+       areAllEffectsReady() {
+         for (const pp in this._compiledEffects) {
+ ... (1 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L260-L261` → after: `L1657-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1657-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1657-L1733) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L260-L261)

```diff
-         _getEngine() {
-           return this._engine
+         return !0
+       }
+       _initGLContext() {
+         this._caps = {
+           maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
+           maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
+           maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
+           maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
+           maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
+           maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
+           maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
+           maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
+           maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
+           maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
+           maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
+           shaderFloatPrecision: 0,
+ ... (61 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L263-L264` → after: `L1735-L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1735-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1735-L1738) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L263-L264)

```diff
-         getTextureMatrix() {
-           return rD.e.IdentityReadOnly
+         if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
+         else {
+           const pp = this._gl.getExtension("WEBGL_depth_texture");
+           null != pp && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = pp.UNSIGNED_INT_24_8_WEBGL)
```

#### 51. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L266-L267` → after: `L1740-L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1740-L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1740-L1744) · [Before (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L266-L267)

```diff
-         getReflectionTextureMatrix() {
-           return rD.e.IdentityReadOnly
+         if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
+         else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
+         else {
+           const pp = this._gl.getExtension("OES_vertex_array_object");
+           null != pp && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = pp.createVertexArrayOES.bind(pp), this._gl.bindVertexArray = pp.bindVertexArrayOES.bind(pp), this._gl.deleteVertexArray = pp.deleteVertexArrayOES.bind(pp))
```

#### 52. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L269-L270` → after: `L1746-L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1746-L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1746-L1749) · [Before (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L269-L270)

```diff
-         getRefractionTextureMatrix() {
-           return this.getReflectionTextureMatrix()
+         if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
+         else {
+           const pp = this._gl.getExtension("ANGLE_instanced_arrays");
+           null != pp ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = pp.drawArraysInstancedANGLE.bind(pp), this._gl.drawElementsInstanced = pp.drawElementsInstancedANGLE.bind(pp), this._gl.vertexAttribDivisor = pp.vertexAttribDivisorANGLE.bind(pp)) : this._caps … [truncated]
```

#### 53. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L272-L273` → after: `L1751-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1751-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1751-L1759) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L272-L273)

```diff
-         isReadyOrNotBlocking() {
-           return !this.isBlocking || this.isReady() || this.loadingError
+         if (this._gl.getShaderPrecisionFormat) {
+           const pp = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
+             ip = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
+           if (pp && ip && (this._caps.highPrecisionShaderSupported = 0 !== pp.precision && 0 !== ip.precision, this._caps.shaderFloatPrecision = Math.min(pp.precision, ip.precision)), !this._shouldUseHighPrecisionShader) {
+             const pp = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
+               ip = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
+             pp && ip && (this._caps.shaderFloatPrecision = Math.min(pp.precision, ip.precision))
+           }
+           this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
```

#### 54. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L275-L277` → after: `L1761-L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1761-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1761-L1764) · [Before (L275-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L275-L277)

```diff
-         scale(DD) {}
-         get canRescale() {
-           return !1
+         if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
+         else {
+           const pp = this._gl.getExtension("EXT_blend_minmax");
+           null != pp && (this._caps.blendMinMax = !0, this._gl.MAX = pp.MAX_EXT, this._gl.MIN = pp.MIN_EXT)
```

#### 55. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L279-L286` → after: `L1766-L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1766-L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1766-L1778) · [Before (L279-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L279-L286)

```diff
-         _getFromCache(DD, zD, wD, pD, sD, KD) {
-           const rD = this._getEngine();
-           if (!rD) return null;
-           const LD = rD._getUseSRGBBuffer(!!sD, zD),
-             cD = rD.getLoadedTexturesCache();
-           for (let gD = 0; gD < cD.length; gD++) {
-             const rD = cD[gD];
-             if ((void 0 === sD || LD === rD._useSRGBBuffer) && (void 0 === pD || pD === rD.invertY) && rD.url === DD && rD.generateMipMaps === !zD && (!wD || wD === rD.samplingMode) && (void 0 === KD || KD === rD.isCube)) return rD.incrementReferences(), rD
+         if (!this._caps.supportSRGBBuffers) {
+           if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
+             SRGB: WebGL2RenderingContext.SRGB,
+             SRGB8: WebGL2RenderingContext.SRGB8,
+             SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
+           };
+           else {
+             const pp = this._gl.getExtension("EXT_sRGB");
+             null != pp && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
+               SRGB: pp.SRGB_EXT,
+               SRGB8: pp.SRGB_ALPHA_EXT,
+               SRGB8_ALPHA8: pp.SRGB_ALPHA_EXT
+             })
```

#### 56. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L288-L343` → after: `L1780-L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1780-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1780-L1782) · [Before (L288-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L288-L343)

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
-           const DD = this.Ul();
-           DD && DD.markAllMaterialsAsDirty(1)
-         }
- ... (40 more removed lines; see GitHub link above)
+           if (this._creationOptions) {
+             const pp = this._creationOptions.forceSRGBBufferSupportState;
+             void 0 !== pp && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && pp)
```

#### 57. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L346-L350` → after: `L1785-L1816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1785-L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1785-L1816) · [Before (L346-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L346-L350)

```diff
-         get _lodTextureHigh() {
-           return this._texture ? this._texture._lodTextureHigh : null
-         }
-         get _lodTextureMid() {
-           return this._texture ? this._texture._lodTextureMid : null
+         this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
+         for (let cp = 0; cp < this._maxSimultaneousTextures; cp++) this._nextFreeTextureSlots.push(cp);
+         "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
+       }
+       _initFeatures() {
+         this._features = {
+           forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
+           supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
+           supportDepthStencilTexture: 1 !== this._webGLVersion,
+           supportShadowSamplers: 1 !== this._webGLVersion,
+           uniformBufferHardCheckMatrix: !1,
+           allowTexturePrefiltering: 1 !== this._webGLVersion,
+           trackUbosInFrame: !1,
+           checkUbosContentBeforeUpload: !1,
+           supportCSM: 1 !== this._webGLVersion,
+           basisNeedsPOT: 1 === this._webGLVersion,
+ ... (16 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L352-L353` → after: `L1818-L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1818-L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1818-L1838) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L352-L353)

```diff
-         get _lodTextureLow() {
-           return this._texture ? this._texture._lodTextureLow : null
+       }
+       get eU() {
+         return this._webGLVersion
+       }
+       getClassName() {
+         return "ThinEngine"
+       }
+       _prepareWorkingCanvas() {
+         if (this._workingCanvas) return;
+         this._workingCanvas = this.createCanvas(1, 1);
+         const pp = this._workingCanvas.getContext("2d");
+         pp && (this._workingContext = pp)
+       }
+       getInfo() {
+         return this.getGlInfo()
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L355-L361` → after: `L1840-L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1840-L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1840-L1863) · [Before (L355-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L355-L361)

```diff
-         dispose() {
-           if (this._scene) {
-             this._scene.stopAnimation && this._scene.stopAnimation(this), this._scene.removePendingData(this);
-             const DD = this._scene.textures.indexOf(this);
-             if (DD >= 0 && this._scene.textures.splice(DD, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
-               const DD = this._parentContainer.textures.indexOf(this);
-               DD > -1 && this._parentContainer.textures.splice(DD, 1), this._parentContainer = null
+       }
+       extractDriverInfo() {
+         const pp = this.getGlInfo();
+         return pp && pp.renderer ? pp.renderer : ""
+       }
+       getRenderWidth() {
+         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
+       }
+       getRenderHeight() {
+         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
+       }
+       clear(pp, ip, cp) {
+         let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+         const Ip = this.stencilStateComposer.useStencilGlobalOnly;
+         this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = Ip;
+ ... (8 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L364` → after: `L1866-L4409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1866-L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L1866-L4409) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L364)

```diff
-           this.Bl.notifyObservers(this), this.Bl.clear(), this.metadata = null, super.dispose()
+           ip && (this._gl.clearColor(pp.r, pp.g, pp.b, void 0 !== pp.a ? pp.a : 1), Sp |= this._gl.COLOR_BUFFER_BIT)
+         }
+         cp && (this.lOp ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), Sp |= this._gl.DEPTH_BUFFER_BIT), Op && (this._gl.clearStencil(op), Sp |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(Sp)
+       }
+       _clearColorAttachment(pp, ip, cp, Op) {
+         if ((0, tp.i)(cp)) {
+           const cp = (0, tp.k)(Op),
+             op = cp ? ep._TempClearColorUint32 : ep._TempClearColorInt32;
+           return op[0] = ip.r, op[1] = ip.g, op[2] = ip.b, op[3] = ip.a, void(cp ? this._gl.clearBufferuiv(this._gl.COLOR, pp, op) : this._gl.clearBufferiv(this._gl.COLOR, pp, op))
+         }
+         ep._TempClearColorFloat32[0] = ip.r, ep._TempClearColorFloat32[1] = ip.g, ep._TempClearColorFloat32[2] = ip.b, ep._TempClearColorFloat32[3] = ip.a, this._gl.clearBufferfv(this._gl.COLOR, pp, ep._TempClearColorFloat32)
+       }
+       _viewport(pp, ip, cp, Op) {
+         pp === this._viewportCached.x && ip === this._viewportCached.y && cp === this._viewportCached.z && Op === this._viewportCached.w || (this._viewportCached.x = pp, this._viewportCached.y = ip, this._viewportCached.z = cp, this._viewportCached.w = Op, this._gl.viewport(pp, i … [truncated]
+       }
+       Rk() {
+ ... (2528 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L367-L377` → after: `L4412-L7624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4412-L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/256.js#L4412-L7624) · [Before (L367-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/256.js#L367-L377)

```diff
-           let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           if (!this.name && !DD) return null;
-           const zD = UD.d.Serialize(this);
-           return UD.d.AppendSerializedAnimations(this, zD), zD
-         }
-         static WhenAllReady(DD, zD) {
-           let wD = DD.length;
-           if (0 !== wD)
-             for (let pD = 0; pD < DD.length; pD++) {
-               const sD = DD[pD];
-               if (sD.isReady()) 0 === --wD && zD();
+           return ep.c.Serialize(this)
+         }
+         _bind(pp) {
+           let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
+             cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
+             Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
+           this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturati … [truncated]
+         }
+       }, (() => {
+         const Sp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         ip = [(0, op.K)()], cp = [(0, op.K)()], Ip = [(0, op.K)()], xp = [(0, op.K)()], Lp = [(0, op.K)()], Yp = [(0, op.K)()], Dp = [(0, op.K)()], Ap = [(0, op.K)()], Pp = [(0, op.K)()], Wp = [(0, op.K)()], yp = [(0, op.K)()], Up = [(0, op.K)()], (0, Op.j)(null, null, ip, {
+           kind: "field",
+           name: "_globalHue",
+           static: !1,
+           private: !1,
+           access: {
+ ... (3197 more added lines; see GitHub link above)
```
