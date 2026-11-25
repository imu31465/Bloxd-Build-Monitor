# Changed — Bundle Modifications Report (Part 012 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `12 / 56` (**332** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 011](part-011.md) · [Part 013 →](part-013.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/253.js` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/chunks/js/253.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db)

#### 2. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/253.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/253.js#L4-L6)

```diff
-   40183: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       playDocsSound: () => kG
+   44485: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => aM
```

#### 3. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L8-L44` → after: `L8-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/253.js#L8-L23) · [Before (L8-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/253.js#L8-L44)

```diff
-     var wG = ZG(4883),
-       SG = ZG(37105),
-       LG = ZG(1163);
-     const yG = new Map;
- 
-     function kG(GG, bG, ZG, kG, UG) {
-       let YG, VG = null,
-         pG = 0,
-         fG = 0;
-       if (bG) YG = new wG.Howl({
-         src: [`${LG.clientSideServerUrls.staticUrl}/sounds/music/${GG}.mp3`],
-         html5: !0,
-         volume: ZG
-       });
-       else {
-         var QG;
- ... (21 more removed lines; see GitHub link above)
+     var OM = iM(44412),
+       SM = iM(41091);
+     let jM = !1;
+ 
+     function aM() {
+       jM || (jM = !0, SM.c.prototype._sphericalPolynomialTargetSize = 0, SM.c.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(SM.c.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = OM.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+               this._texture._sphericalPolynomial = MM, this._texture._sphericalPolynomialComputed = !0
+             }))), null
+           }
+           return null
```

#### 4. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L46-L47` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/253.js#L25-L26) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/253.js#L46-L47)

```diff
-         EG = (bG, ZG) => {
-           console.error(`Could not play docs sound ${GG}`, ZG), JG(!0)
+         set: function(MM) {
+           this._texture && (this._texture._sphericalPolynomial = MM)
```

#### 5. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L49-L50` → after: `L28-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L28-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/253.js#L28-L400) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/253.js#L49-L50)

```diff
-         oG = (GG, bG) => {
-           null !== VG && yG.get(VG) === YG && (yG.delete(VG), YG.unload()), EG(GG, bG)
+         enumerable: !0,
+         configurable: !0
+       }))
+     }
+   },
+   38167: (MM, rM, iM) => {
+     iM.d(rM, {
+       Color3: () => OM.d,
+       d: () => OM.h
+     });
+     var OM = iM(38173);
+     (0, OM.i)()
+   },
+   38740: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => SM
+ ... (357 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L52-L73` → after: `L402-L2189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L402-L2189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/253.js#L402-L2189) · [Before (L52-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/253.js#L52-L73)

```diff
-       return YG.on("play", rG, KG), YG.once("end", zG, KG), YG.once("loaderror", oG), YG.once("playerror", EG, KG), {
-         pause: () => {
-           YG.pause(KG)
-         },
-         resume: () => {
-           YG.play(KG)
-         },
-         seek: GG => {
-           const bG = hG(),
-             ZG = Math.max(GG, 0);
-           YG.seek(pG + (bG > 0 ? Math.min(ZG, bG) : ZG), KG)
-         },
-         HJ: () => {
-           const GG = YG.seek(KG);
-           return "number" === typeof GG ? Math.max(0, GG - pG) : 0
-         },
- ... (6 more removed lines; see GitHub link above)
+         PM && (aM ? nM() : MM.onLoadObservable.addOnce(nM))
+       }
+       static async EncodeTextureToRGBD(MM, rM) {
+         let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         return rM.ph().isWebGPU ? await iM.e(652).then((() => iM(64042))) : await iM.e(634).then((() => iM(64039))), await (0, SM.d)("rgbdEncode", MM, rM, OM, 1, 5)
+       }
+     }
+   },
+   63884: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       AsyncLoop: () => OM.c,
+       RegisterTools: () => OM.d,
+       Tools: () => OM.e,
+       className: () => OM.g
+     });
+     var OM = iM(41205);
+ ... (1772 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/254.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/254.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6)

#### 1. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/254.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/254.js#L4-L6)

```diff
-   40193: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       default: () => tG
+   38064: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => SM
```

#### 2. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L8-L447` → after: `L8-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/254.js#L8-L15) · [Before (L8-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/254.js#L8-L447)

```diff
-     ZG(6467);
-     var wG = ZG(51),
-       SG = ZG(40197),
-       LG = ZG(40467),
-       yG = ZG(40582),
-       kG = ZG(40629),
-       UG = ZG(40644),
-       YG = ZG(37618),
-       VG = ZG(37432),
-       pG = ZG(40776),
-       fG = ZG(40831),
-       QG = (ZG(40865), ZG(1177)),
-       KG = ZG(188),
-       hG = ZG(1151),
-       dG = ZG(17),
-       JG = ZG(2732),
- ... (424 more removed lines; see GitHub link above)
+     var OM = iM(38068);
+     class SM {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
```

#### 3. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L449-L490` → after: `L17-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L17-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/254.js#L17-L30) · [Before (L449-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/254.js#L449-L490)

```diff
- 
-     function DG(GG) {
-       let {
-         heading: bG,
-         pitch: ZG,
-         onViewFrom: SG,
-         onTurn: LG,
-         onFlip: yG
-       } = GG;
-       const {
-         t: kG
-       } = (0, hG.w)(), UG = (0, wG.useRef)(null), YG = Gb({
-         heading: bG,
-         pitch: ZG
-       }), VG = bb(bG), pG = Yb(YG, VG), fG = gG + eG + 2, QG = nG.flatMap((GG => [1, -1].map((bG => {
-         const ZG = kb(GG.direction, bG);
- ... (26 more removed lines; see GitHub link above)
+     SM.Instances = [], SM.OnEnginesDisposedObservable = new OM.d, SM._LastCreatedScene = null, SM.UseFallbackTexture = !0, SM.FallbackTexture = ""
+   },
+   38056: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => OM
+     });
+     class OM {
+       static SetMatrixPrecision(MM) {
+         if (OM.MatrixTrackPrecisionChange = !1, MM && !OM.MatrixUse64Bits && OM.MatrixTrackedMatrices)
+           for (let rM = 0; rM < OM.MatrixTrackedMatrices.length; ++rM) {
+             const MM = OM.MatrixTrackedMatrices[rM],
+               iM = MM._m;
+             MM._m = new Array(16);
+             for (let rM = 0; rM < 16; ++rM) MM._m[rM] = iM[rM]
```

#### 4. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L492-L628` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/254.js#L32-L33) · [Before (L492-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/254.js#L492-L628)

```diff
-         },
-         onPointerMove: GG => {
-           const bG = UG.current;
-           if (null === bG || bG.pointerId !== GG.pointerId) return;
-           const ZG = GG.clientX - bG.x,
-             wG = GG.clientY - bG.y;
-           bG.x = GG.clientX, bG.y = GG.clientY, bG.travel += Math.abs(ZG) + Math.abs(wG), bG.travel >= HG && LG(ZG, wG)
-         },
-         onPointerUp: GG => {
-           const bG = UG.current;
-           UG.current = null, null === bG || bG.pointerId !== GG.pointerId || bG.travel >= HG || (null !== bG.side ? SG(bG.side) : bG.isOnMiddle && yG())
-         },
-         onPointerCancel: () => {
-           UG.current = null
-         },
-         children: [QG.map(((GG, bG) => {
- ... (121 more removed lines; see GitHub link above)
+         OM.MatrixUse64Bits = MM, OM.MatrixCurrentType = OM.MatrixUse64Bits ? Array : Float32Array, OM.MatrixTrackedMatrices = null
+       }
```

#### 5. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L632` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/254.js#L49) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/254.js#L632)

```diff
-       return [Math.cos(GG), 0, -Math.sin(GG)]
+       MM.updateFlag = OM._UpdateFlagSeed++
```

#### 6. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L636-L658` → after: `L53-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L53-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/254.js#L53-L88) · [Before (L636-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/254.js#L636-L658)

```diff
-       let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
-         heading: AG,
-         pitch: sG
-       };
-       const SG = [GG.max[0] - GG.min[0], GG.max[1] - GG.min[1], GG.max[2] - GG.min[2]],
-         LG = Gb(wG),
-         yG = bb(wG.heading),
-         kG = Yb(LG, yG),
-         UG = Math.tan(ZG / 2),
-         YG = UG * bG;
-       let VG = 1;
-       for (const pG of [-SG[0] / 2, SG[0] / 2])
-         for (const GG of [-SG[1] / 2, SG[1] / 2])
-           for (const bG of [-SG[2] / 2, SG[2] / 2]) {
-             const ZG = [pG, GG, bG],
-               wG = Ub(ZG, LG);
- ... (7 more removed lines; see GitHub link above)
+       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       const SM = MM.HOM(),
+         jM = rM.HOM(),
+         aM = SM[0],
+         PM = SM[1],
+         nM = SM[2],
+         QM = SM[3],
+         zM = SM[4],
+         LM = SM[5],
+         mM = SM[6],
+         HM = SM[7],
+         hM = SM[8],
+         JM = SM[9],
+         dM = SM[10],
+         yM = SM[11],
+         lM = SM[12],
+ ... (20 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L662-L680` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/254.js#L92-L93) · [Before (L662-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/254.js#L662-L680)

```diff
-       const wG = Lb(GG),
-         SG = Lb(ZG),
-         LG = yb(GG.position, kb(bG, -1)),
-         yG = [0, 1, 2].reduce(((GG, bG) => yb(GG, kb(SG[bG], Ub(LG, wG[bG])))), [0, 0, 0]);
-       return {
-         position: yb(bG, yG),
-         heading: ZG.heading,
-         pitch: ZG.pitch
-       }
-     }
- 
-     function Sb(GG) {
-       return kb(yb(GG.min, GG.max), .5)
-     }
- 
-     function Lb(GG) {
- ... (3 more removed lines; see GitHub link above)
+       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       jM(MM, rM, iM.HOM(), OM), SM(iM)
```

#### 8. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L684` → after: `L97-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/254.js#L97-L99) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/254.js#L684)

```diff
-       return [GG[0] + bG[0], GG[1] + bG[1], GG[2] + bG[2]]
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const OM = MM.HOM();
+       rM[iM] = OM[0], rM[iM + 1] = OM[1], rM[iM + 2] = OM[2], rM[iM + 3] = OM[3], rM[iM + 4] = OM[4], rM[iM + 5] = OM[5], rM[iM + 6] = OM[6], rM[iM + 7] = OM[7], rM[iM + 8] = OM[8], rM[iM + 9] = OM[9], rM[iM + 10] = OM[10], rM[iM + 11] = OM[11], rM[iM + 12] = OM[12], rM[iM + 13]  … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L688` → after: `L103-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/254.js#L103-L104) · [Before (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/254.js#L688)

```diff
-       return [GG[0] * bG, GG[1] * bG, GG[2] * bG]
+       const iM = QM(MM, rM.HOM());
+       return iM && SM(rM), iM
```

#### 10. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L692` → after: `L108-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L108-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/254.js#L108-L162) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/254.js#L692)

```diff
-       return GG[0] * bG[0] + GG[1] * bG[1] + GG[2] * bG[2]
+       const iM = MM.HOM(),
+         OM = iM[0],
+         SM = iM[1],
+         jM = iM[2],
+         aM = iM[3],
+         PM = iM[4],
+         nM = iM[5],
+         QM = iM[6],
+         zM = iM[7],
+         LM = iM[8],
+         mM = iM[9],
+         HM = iM[10],
+         hM = iM[11],
+         JM = iM[12],
+         dM = iM[13],
+         yM = iM[14],
+ ... (39 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L694-L696` → after: `L164-L2916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L164-L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/254.js#L164-L2916) · [Before (L694-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/254.js#L694-L696)

```diff
- 
-     function Yb(GG, bG) {
-       return [GG[1] * bG[2] - GG[2] * bG[1], GG[2] * bG[0] - GG[0] * bG[2], GG[0] * bG[1] - GG[1] * bG[0]]
+     OM._UpdateFlagSeed = 0
+   },
+   38040: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => JM,
+       h: () => hM,
+       i: () => UM,
+       l: () => yM,
+       o: () => LM,
+       q: () => mM,
+       u: () => HM
+     });
+     var OM = iM(38044),
+       SM = iM(38048),
+       jM = iM(38056),
+       aM = iM(38064),
+ ... (2737 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/255.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/255.js` (164 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c)

#### 1. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4)

```diff
-   40592: (GG, bG, ZG) => {
+   38173: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7-L2745` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L7-L9) · [Before (L7-L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L7-L2745)

```diff
-       h: () => zG
-     });
-     var wG = ZG(40393),
-       SG = ZG(40398),
-       LG = ZG(40484),
-       yG = ZG(37465),
-       kG = ZG(37439),
-       UG = ZG(40599),
-       YG = ZG(39093),
-       VG = ZG(37484),
-       pG = ZG(40258),
-       fG = ZG(38499),
-       QG = ZG(38167),
-       KG = ZG(40354),
-       hG = ZG(40416);
-     let dG = (() => {
- ... (2723 more removed lines; see GitHub link above)
+       h: () => mM,
+       i: () => JM,
+       j: () => HM
```

#### 3. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2747-L2770` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L11-L14) · [Before (L2747-L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L2747-L2770)

```diff
-     var wG = ZG(40393),
-       SG = ZG(37465),
-       LG = ZG(37439),
-       yG = ZG(40524),
-       kG = ZG(40795),
-       UG = ZG(40820),
-       YG = ZG(40517),
-       VG = ZG(40681),
-       pG = ZG(40508);
-     class fG {
-       constructor() {
-         this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new LG.p(0, 0, 0), this._diffPositionForCollisions = new LG.p(0, 0, 0), this._collisionResponse = !0
-       }
-     }
-     var QG, KG, hG, dG = ZG(40258),
-       JG = ZG(40451),
- ... (8 more removed lines; see GitHub link above)
+     var OM = iM(38048),
+       SM = iM(38044),
+       jM = iM(38074),
+       aM = iM(38085);
```

#### 4. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2772-L2773` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L16-L17) · [Before (L2772-L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L2772-L2773)

```diff
-     function WG(GG, bG) {
-       return GG - Math.floor(GG / bG) * bG
+     function PM(MM) {
+       return Math.pow(MM, SM.h)
```

#### 5. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2776-L2777` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L20-L21) · [Before (L2776-L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L2776-L2777)

```diff
-     function mG(GG, bG, ZG) {
-       GG instanceof Float32Array ? LG.e.FromArrayToRef(GG, bG, ZG) : ZG.fGG((0, JG.c)(GG[bG]), (0, JG.c)(GG[bG + 1]), (0, JG.c)(GG[bG + 2]), (0, JG.c)(GG[bG + 3]), (0, JG.c)(GG[bG + 4]), (0, JG.c)(GG[bG + 5]), (0, JG.c)(GG[bG + 6]), (0, JG.c)(GG[bG + 7]), (0, JG.c)(GG[bG + 8]), ( … [truncated]
+     function nM(MM) {
+       return MM <= .04045 ? .0773993808 * MM : Math.pow(.947867299 * (MM + .055), 2.4)
```

#### 6. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L2780-L2822` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L24-L25) · [Before (L2780-L2822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L2780-L2822)

```diff
-     function IG(GG, bG, ZG, wG, SG, kG, UG, YG, VG) {
-       const pG = ZG.texture,
-         fG = pG?.getInternalTexture(),
-         QG = fG?._bufferView;
-       if (!(QG instanceof Float32Array) && !(QG instanceof Uint16Array)) return XG.c.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
-       const KG = pG.getSize(),
-         hG = function(GG, bG) {
-           const ZG = GG.y - GG.x + 1,
-             wG = bG * GG.w / ZG,
-             SG = wG < 1 ? 0 : 1,
-             LG = ZG - SG;
-           let yG = WG(wG - Math.floor(wG), 1) * LG;
-           return yG = WG(yG + GG.z, LG), Math.floor(yG) + GG.x + SG
-         }(wG, ZG.time);
-       if (!isFinite(hG) || hG < 0 || hG >= KG.height) return XG.c.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
-       const dG = LG.j.mK[0],
- ... (27 more removed lines; see GitHub link above)
+     function QM(MM) {
+       return Math.pow(MM, SM.f)
```

#### 7. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3712-L3733` → after: `L28-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L28-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L28-L30) · [Before (L3712-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L3712-L3733)

```diff
-     function lG() {
-       cG || (cG = !0, (0, CG.i)("BABYLON.AbstractMesh", aG))
-     }(QG = aG.prototype).createOrUpdateSubmeshesOctree ?? (QG.createOrUpdateSubmeshesOctree = (0, dG.h)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (KG = aG.prototype).getPhysicsImpostor ?? (KG.getPhysicsImpostor = (0, dG.h)("AbstractMesh", "getPhysicsImpostor")), (hG = aG … [truncated]
-   },
-   40797: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => JG
-     });
-     var wG = ZG(37439),
-       SG = ZG(37621),
-       LG = ZG(40795),
-       yG = ZG(40524),
-       kG = ZG(40673),
-       UG = ZG(40800),
-       YG = ZG(40681),
-       VG = ZG(40477),
- ... (6 more removed lines; see GitHub link above)
+     function zM(MM) {
+       return MM <= .0031308 ? 12.92 * MM : 1.055 * Math.pow(MM, .41666) - .055
+     }
```

#### 8. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L3735-L4263` → after: `L32-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L32-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L32-L36) · [Before (L3735-L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L3735-L4263)

```diff
-       get boundingBias() {
-         return this._boundingBias
-       }
-       set boundingBias(GG) {
-         this._boundingBias ? this._boundingBias.oW(GG) : this._boundingBias = GG.clone(), this._updateBoundingInfo(!0, null)
-       }
-       static CreateGeometryForMesh(GG) {
-         const bG = new JG(JG.RandomId(), GG.Dv());
-         return bG.applyToMesh(GG), bG
-       }
-       get meshes() {
-         return this._meshes
-       }
-       constructor(GG, bG, ZG) {
-         let SG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
- ... (513 more removed lines; see GitHub link above)
+       constructor() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.r = MM, this.g = rM, this.b = iM
```

#### 9. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4265-L4289` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L38-L39) · [Before (L4265-L4289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4265-L4289)

```diff
-     }
-   },
-   40844: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => pG,
-       h: () => KG
-     });
-     var wG = ZG(37439),
-       SG = ZG(39093),
-       LG = ZG(40811),
-       yG = ZG(40784),
-       kG = ZG(39086),
-       UG = ZG(40820),
-       YG = ZG(40524),
-       VG = ZG(37484);
-     class pG extends LG.b {
- ... (9 more removed lines; see GitHub link above)
+       toString() {
+         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
```

#### 10. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4292-L4316` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L42) · [Before (L4292-L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4292-L4316)

```diff
-         return "InstancedMesh"
-       }
-       get lightSources() {
-         return this._sourceMesh._lightSources
-       }
-       _resyncLightSources() {}
-       _resyncLightSource() {}
-       _removeLightSource() {}
-       get receiveShadows() {
-         return this._sourceMesh.receiveShadows
-       }
-       set receiveShadows(GG) {
-         this._sourceMesh?.receiveShadows !== GG && SG.c.Warn("Setting receiveShadows on an instanced mesh has no effect")
-       }
-       get material() {
-         return this._sourceMesh.material
- ... (9 more removed lines; see GitHub link above)
+         return "Color3"
```

#### 11. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4318-L4319` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L44-L46) · [Before (L4318-L4319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4318-L4319)

```diff
-       get skeleton() {
-         return this._sourceMesh.skeleton
+       getHashCode() {
+         let MM = 255 * this.r | 0;
+         return MM = 397 * MM ^ 255 * this.g, MM = 397 * MM ^ 255 * this.b, MM
```

#### 12. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4321-L4322` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L48-L50) · [Before (L4321-L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4321-L4322)

```diff
-       set skeleton(GG) {
-         this._sourceMesh?.skeleton !== GG && SG.c.Warn("Setting skeleton on an instanced mesh has no effect")
+       toArray(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return MM[rM] = this.r, MM[rM + 1] = this.g, MM[rM + 2] = this.b, this
```

#### 13. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4324-L4328` → after: `L52-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L52-L54) · [Before (L4324-L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4324-L4328)

```diff
-       get renderingGroupId() {
-         return this._sourceMesh.renderingGroupId
-       }
-       set renderingGroupId(GG) {
-         this._sourceMesh && GG !== this._sourceMesh.renderingGroupId && SG.c.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
+       cz(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return LM.FromArrayToRef(MM, rM, this), this
```

#### 14. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4330-L4331` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L56-L58) · [Before (L4330-L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4330-L4331)

```diff
-       get meshBlendingTag() {
-         return this._sourceMesh.meshBlendingTag
+       toColor4() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         return new mM(this.r, this.g, this.b, MM)
```

#### 15. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4333-L4334` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L60-L61) · [Before (L4333-L4334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4333-L4334)

```diff
-       set meshBlendingTag(GG) {
-         this._sourceMesh && GG !== this._sourceMesh.meshBlendingTag && SG.c.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
+       HOM() {
+         return [this.r, this.g, this.b]
```

#### 16. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4336-L4337` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L63-L64) · [Before (L4336-L4337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4336-L4337)

```diff
-       getTotalVertices() {
-         return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
+       toLuminance() {
+         return .3 * this.r + .59 * this.g + .11 * this.b
```

#### 17. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4339-L4340` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L66-L67) · [Before (L4339-L4340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4339-L4340)

```diff
-       getTotalIndices() {
-         return this._sourceMesh.getTotalIndices()
+       multiply(MM) {
+         return new LM(this.r * MM.r, this.g * MM.g, this.b * MM.b)
```

#### 18. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4342-L4343` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L69-L70) · [Before (L4342-L4343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4342-L4343)

```diff
-       get ESG() {
-         return this._sourceMesh
+       multiplyToRef(MM, rM) {
+         return rM.r = this.r * MM.r, rM.g = this.g * MM.g, rM.b = this.b * MM.b, rM
```

#### 19. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4345-L4346` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L72-L73) · [Before (L4345-L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4345-L4346)

```diff
-       get geometry() {
-         return this._sourceMesh._geometry
+       multiplyInPlace(MM) {
+         return this.r *= MM.r, this.g *= MM.g, this.b *= MM.b, this
```

#### 20. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4348-L4349` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L75-L76) · [Before (L4348-L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4348-L4349)

```diff
-       createInstance(GG) {
-         return this._sourceMesh.createInstance(GG)
+       multiplyByFloats(MM, rM, iM) {
+         return new LM(this.r * MM, this.g * rM, this.b * iM)
```

#### 21. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4351-L4353` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L78-L79) · [Before (L4351-L4353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4351-L4353)

```diff
-       isReady() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         return this._sourceMesh.isReady(GG, !0)
+       divide(MM) {
+         throw new ReferenceError("Can not divide a color")
```

#### 22. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4355-L4356` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L81-L82) · [Before (L4355-L4356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4355-L4356)

```diff
-       getVerticesData(GG, bG, ZG) {
-         return this._sourceMesh.getVerticesData(GG, bG, ZG)
+       divideToRef(MM, rM) {
+         throw new ReferenceError("Can not divide a color")
```

#### 23. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4358-L4359` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L84-L85) · [Before (L4358-L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4358-L4359)

```diff
-       copyVerticesData(GG, bG) {
-         this._sourceMesh.copyVerticesData(GG, bG)
+       divideInPlace(MM) {
+         throw new ReferenceError("Can not divide a color")
```

#### 24. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4361-L4362` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L87-L88) · [Before (L4361-L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4361-L4362)

```diff
-       getVertexBuffer(GG, bG) {
-         return this._sourceMesh.getVertexBuffer(GG, bG)
+       minimizeInPlace(MM) {
+         return this.minimizeInPlaceFromFloats(MM.r, MM.g, MM.b)
```

#### 25. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4364-L4365` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L90-L91) · [Before (L4364-L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4364-L4365)

```diff
-       setVerticesData(GG, bG, ZG, wG) {
-         return this.ESG && this.ESG.setVerticesData(GG, bG, ZG, wG), this.ESG
+       maximizeInPlace(MM) {
+         return this.maximizeInPlaceFromFloats(MM.r, MM.g, MM.b)
```

#### 26. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4367-L4368` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L93-L94) · [Before (L4367-L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4367-L4368)

```diff
-       updateVerticesData(GG, bG, ZG, wG) {
-         return this.ESG && this.ESG.updateVerticesData(GG, bG, ZG, wG), this.ESG
+       minimizeInPlaceFromFloats(MM, rM, iM) {
+         return this.r = Math.min(MM, this.r), this.g = Math.min(rM, this.g), this.b = Math.min(iM, this.b), this
```

#### 27. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4370-L4372` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L96-L97) · [Before (L4370-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4370-L4372)

```diff
-       setIndices(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-         return this.ESG && this.ESG.setIndices(GG, bG), this.ESG
+       maximizeInPlaceFromFloats(MM, rM, iM) {
+         return this.r = Math.max(MM, this.r), this.g = Math.max(rM, this.g), this.b = Math.max(iM, this.b), this
```

#### 28. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4374-L4375` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L99-L100) · [Before (L4374-L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4374-L4375)

```diff
-       isVerticesDataPresent(GG) {
-         return this._sourceMesh.isVerticesDataPresent(GG)
+       floorToRef(MM) {
+         throw new ReferenceError("Can not floor a color")
```

#### 29. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4377-L4378` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L102-L103) · [Before (L4377-L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4377-L4378)

```diff
-       IwG() {
-         return this._sourceMesh.IwG()
+       floor() {
+         throw new ReferenceError("Can not floor a color")
```

#### 30. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4380-L4381` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L105-L106) · [Before (L4380-L4381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4380-L4381)

```diff
-       get _positions() {
-         return this._sourceMesh._positions
+       fractToRef(MM) {
+         throw new ReferenceError("Can not fract a color")
```

#### 31. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4383-L4404` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L108-L109) · [Before (L4383-L4404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4383-L4404)

```diff
-       refreshBoundingInfo() {
-         let GG, bG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           ZG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this.hasBoundingInfo && this.HA().isLocked) return this;
-         GG = "object" === typeof bG ? bG : {
-           applySkeleton: bG,
-           applyMorph: ZG
-         };
-         const wG = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
-         return this._refreshBoundingInfo(this._sourceMesh._getData(GG, null, YG.l.PositionKind), wG), this
-       }
-       _preActivate() {
-         return this._currentLOD && this._currentLOD._preActivate(), this
-       }
-       _activate(GG, bG) {
-         if (super._activate(GG, bG), this._sourceMesh.aE || SG.c.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
- ... (6 more removed lines; see GitHub link above)
+       fract() {
+         throw new ReferenceError("Can not fract a color")
```

#### 32. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4406-L4407` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L111-L112) · [Before (L4406-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4406-L4407)

```diff
-       _postActivate() {
-         this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceM … [truncated]
+       equals(MM) {
+         return MM && this.r === MM.r && this.g === MM.g && this.b === MM.b
```

#### 33. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4409-L4415` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L114-L115) · [Before (L4409-L4415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4409-L4415)

```diff
-       getWorldMatrix() {
-         if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== UG.d.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
-           this._billboardWorldMatrix || (this._billboardWorldMatrix = new wG.e);
-           const GG = this._currentLOD._masterMesh;
-           return this._currentLOD._masterMesh = this, wG.j.mK[7].oW(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.oW(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.oW(wG.j.mK[7]), this._currentLOD._masterMesh = … [truncated]
-         }
-         return super.getWorldMatrix()
+       equalsFloats(MM, rM, iM) {
+         return this.IaM(MM, rM, iM)
```

#### 34. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4417-L4418` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L117-L118) · [Before (L4417-L4418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4417-L4418)

```diff
-       get Ul() {
-         return !0
+       IaM(MM, rM, iM) {
+         return this.r === MM && this.g === rM && this.b === iM
```

#### 35. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4420-L4427` → after: `L120-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L120-L122) · [Before (L4420-L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4420-L4427)

```diff
-       getLOD(GG) {
-         if (!GG) return this;
-         const bG = this.ESG.getLODLevels();
-         if (bG && 0 !== bG.length) {
-           const bG = this.HA();
-           this._currentLOD = this.ESG.getLOD(GG, bG.xwG)
-         } else this._currentLOD = this.ESG;
-         return this._currentLOD
+       equalsWithEpsilon(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SM.d;
+         return (0, jM.WithinEpsilon)(this.r, MM.r, rM) && (0, jM.WithinEpsilon)(this.g, MM.g, rM) && (0, jM.WithinEpsilon)(this.b, MM.b, rM)
```

#### 36. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4429-L4430` → after: `L124-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L124-L125) · [Before (L4429-L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4429-L4430)

```diff
-       _preActivateForIntermediateRendering(GG) {
-         return this.ESG._preActivateForIntermediateRendering(GG)
+       VJ() {
+         throw new ReferenceError("Can not negate a color")
```

#### 37. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4432-L4435` → after: `L127-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L127-L128) · [Before (L4432-L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4432-L4435)

```diff
-       _syncSubMeshes() {
-         if (this.releaseSubMeshes(), this._sourceMesh.aE)
-           for (let GG = 0; GG < this._sourceMesh.aE.length; GG++) this._sourceMesh.aE[GG].clone(this, this._sourceMesh);
-         return this
+       negateInPlace() {
+         throw new ReferenceError("Can not negate a color")
```

#### 38. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4437-L4438` → after: `L130-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L130-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L130-L131) · [Before (L4437-L4438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4437-L4438)

```diff
-       _generatePointsArray() {
-         return this._sourceMesh._generatePointsArray()
+       negateToRef(MM) {
+         throw new ReferenceError("Can not negate a color")
```

#### 39. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4440-L4441` → after: `L133-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L133-L134) · [Before (L4440-L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4440-L4441)

```diff
-       _updateBoundingInfo() {
-         return this.hasBoundingInfo ? this.HA().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
+       scale(MM) {
+         return new LM(this.r * MM, this.g * MM, this.b * MM)
```

#### 40. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4443-L4452` → after: `L136-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L136-L137) · [Before (L4443-L4452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4443-L4452)

```diff
-       clone(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           ZG = arguments.length > 2 ? arguments[2] : void 0;
-         const wG = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(GG);
-         if (kG.e.DeepCopy(this, wG, ["name", "aE", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "ESG", "Ul", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "zSG", "collider", "edgesRenderer", "forward", "up", "right", "a … [truncated]
-           for (let SG = 0; SG < this.Dv().meshes.length; SG++) {
-             const GG = this.Dv().meshes[SG];
-             GG.parent === this && GG.clone(GG.name, wG)
-           }
-         return wG.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(wG), wG
+       scaleInPlace(MM) {
+         return this.r *= MM, this.g *= MM, this.b *= MM, this
```

#### 41. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4454-L4456` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L139-L140) · [Before (L4454-L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4454-L4456)

```diff
-       dispose(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this._sourceMesh.M6(this), super.dispose(GG, bG)
+       scaleToRef(MM, rM) {
+         return rM.r = this.r * MM, rM.g = this.g * MM, rM.b = this.b * MM, rM
```

#### 42. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4458-L4459` → after: `L142-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L142-L143) · [Before (L4458-L4459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4458-L4459)

```diff
-       _serializeAsParent(GG) {
-         super._serializeAsParent(GG), GG.parentId = this._sourceMesh.uniqueId, GG.parentInstanceIndex = this._indexInSourceMeshInstanceArray
+       scaleAndAddToRef(MM, rM) {
+         return rM.r += this.r * MM, rM.g += this.g * MM, rM.b += this.b * MM, rM
```

#### 43. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4461-L4463` → after: `L145-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L145-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L145-L147) · [Before (L4461-L4463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4461-L4463)

```diff
-       instantiateHierarchy() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           bG = arguments.length > 1 ? arguments[1] : void 0,
+       clampToRef() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
```

#### 44. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4465-L4594` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L149) · [Before (L4465-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4465-L4594)

```diff
-         const wG = this.clone("Clone of " + (this.name || this.id), GG || this.parent, !0, bG && bG.newSourcedMesh);
-         wG && ZG && ZG(this, wG);
-         for (const SG of this.getChildTransformNodes(!0)) SG.instantiateHierarchy(wG, bG, ZG);
-         return wG
-       }
-     }
-     let fG = !1;
- 
-     function QG(GG, bG, ZG, wG, SG) {
-       for (let LG = 0; LG < bG.length; LG++) {
-         const yG = GG[bG[LG]] ?? 0,
-           kG = SG + ZG[LG];
-         yG.toArray ? yG.toArray(wG, kG) : yG.copyToArray ? yG.copyToArray(wG, kG) : wG[kG] = yG
-       }
-     }
- 
- ... (114 more removed lines; see GitHub link above)
+         return iM.r = (0, jM.Clamp)(this.r, MM, rM), iM.g = (0, jM.Clamp)(this.g, MM, rM), iM.b = (0, jM.Clamp)(this.b, MM, rM), iM
```

#### 45. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4596-L4600` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L151-L152) · [Before (L4596-L4600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4596-L4600)

```diff
-     }
-     class eG {}
-     class RG {
-       constructor() {
-         this.batchCache = new HG(this), this.batchCacheReplacementModeInFrozenMode = new HG(this), this.instancesBufferSize = 2048
+       add(MM) {
+         return new LM(this.r + MM.r, this.g + MM.g, this.b + MM.b)
```

#### 46. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4602-L4605` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L154-L155) · [Before (L4602-L4605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4602-L4605)

```diff
-     }
-     class TG {
-       constructor() {
-         this.renderPasses = {}
+       addInPlace(MM) {
+         return this.r += MM.r, this.g += MM.g, this.b += MM.b, this
```

#### 47. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4607-L4610` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L157-L158) · [Before (L4607-L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4607-L4610)

```diff
-     }
-     class HG {
-       constructor(GG) {
-         this.parent = GG, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
+       addInPlaceFromFloats(MM, rM, iM) {
+         return this.r += MM, this.g += rM, this.b += iM, this
```

#### 48. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4612-L4615` → after: `L160-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L160-L161) · [Before (L4612-L4615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4612-L4615)

```diff
-     }
-     class tG {
-       constructor() {
-         this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
+       addToRef(MM, rM) {
+         return rM.r = this.r + MM.r, rM.g = this.g + MM.g, rM.b = this.b + MM.b, rM
```

#### 49. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4617-L4620` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L163-L164) · [Before (L4617-L4620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4617-L4620)

```diff
-     }
-     class DG {
-       constructor() {
-         this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
+       subtract(MM) {
+         return new LM(this.r - MM.r, this.g - MM.g, this.b - MM.b)
```

#### 50. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4622-L4632` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L166-L167) · [Before (L4622-L4632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4622-L4632)

```diff
-     }
-     const NG = {
-       source: null,
-       parent: null,
-       doNotCloneChildren: !1,
-       clonePhysicsImpostor: !0,
-       cloneThinInstances: !1
-     };
-     class OG extends vG.b {
-       static _GetDefaultSideOrientation(GG) {
-         return GG || OG.FRONTSIDE
+       subtractToRef(MM, rM) {
+         return rM.r = this.r - MM.r, rM.g = this.g - MM.g, rM.b = this.b - MM.b, rM
```

#### 51. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4634-L4635` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L169-L170) · [Before (L4634-L4635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4634-L4635)

```diff
-       get useLODScreenCoverage() {
-         return this._internalMeshDataInfo._useLODScreenCoverage
+       kOM(MM) {
+         return this.r -= MM.r, this.g -= MM.g, this.b -= MM.b, this
```

#### 52. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4637-L4638` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L172-L173) · [Before (L4637-L4638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4637-L4638)

```diff
-       set useLODScreenCoverage(GG) {
-         this._internalMeshDataInfo._useLODScreenCoverage = GG, this._sortLODLevels()
+       subtractFromFloats(MM, rM, iM) {
+         return new LM(this.r - MM, this.g - rM, this.b - iM)
```

#### 53. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4640-L4641` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L175-L176) · [Before (L4640-L4641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4640-L4641)

```diff
-       get computeBonesUsingShaders() {
-         return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
+       subtractFromFloatsToRef(MM, rM, iM, OM) {
+         return OM.r = this.r - MM, OM.g = this.g - rM, OM.b = this.b - iM, OM
```

#### 54. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4643-L4644` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L178-L179) · [Before (L4643-L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4643-L4644)

```diff
-       set computeBonesUsingShaders(GG) {
-         this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== GG && (GG && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(mG.l.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVer … [truncated]
+       clone() {
+         return new LM(this.r, this.g, this.b)
```

#### 55. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4646-L4647` → after: `L181-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L181-L182) · [Before (L4646-L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4646-L4647)

```diff
-       get onBeforeRenderObservable() {
-         return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new JG.c), this._internalMeshDataInfo._onBeforeRenderObservable
+       jR(MM) {
+         return this.r = MM.r, this.g = MM.g, this.b = MM.b, this
```

#### 56. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4649-L4650` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L184-L185) · [Before (L4649-L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4649-L4650)

```diff
-       get onBeforeBindObservable() {
-         return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new JG.c), this._internalMeshDataInfo._onBeforeBindObservable
+       iMM(MM, rM, iM) {
+         return this.r = MM, this.g = rM, this.b = iM, this
```

#### 57. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4652-L4653` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L187-L188) · [Before (L4652-L4653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4652-L4653)

```diff
-       get onAfterRenderObservable() {
-         return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new JG.c), this._internalMeshDataInfo._onAfterRenderObservable
+       set(MM, rM, iM) {
+         return this.iMM(MM, rM, iM)
```

#### 58. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4655-L4656` → after: `L190-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L190-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L190-L215) · [Before (L4655-L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4655-L4656)

```diff
-       get onBetweenPassObservable() {
-         return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new JG.c), this._internalMeshDataInfo._onBetweenPassObservable
+       P_(MM) {
+         return this.r = this.g = this.b = MM, this
+       }
+       toHexString() {
+         const MM = Math.round(255 * this.r),
+           rM = Math.round(255 * this.g),
+           iM = Math.round(255 * this.b);
+         return "#" + (0, jM.ToHex)(MM) + (0, jM.ToHex)(rM) + (0, jM.ToHex)(iM)
+       }
+       fromHexString(MM) {
+         return "#" !== MM.substring(0, 1) || 7 !== MM.length || (this.r = parseInt(MM.substring(1, 3), 16) / 255, this.g = parseInt(MM.substring(3, 5), 16) / 255, this.b = parseInt(MM.substring(5, 7), 16) / 255), this
+       }
+       toHSV() {
+         return this.toHSVToRef(new LM)
+       }
+       toHSVToRef(MM) {
+ ... (10 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4658-L4659` → after: `L217-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L217-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L217-L220) · [Before (L4658-L4659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4658-L4659)

```diff
-       get onBeforeDrawObservable() {
-         return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new JG.c), this._internalMeshDataInfo._onBeforeDrawObservable
+       toLinearSpace() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const rM = new LM;
+         return this.toLinearSpaceToRef(rM, MM), rM
```

#### 60. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4661-L4662` → after: `L222-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L222-L223) · [Before (L4661-L4662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4661-L4662)

```diff
-       set onBeforeDraw(GG) {
-         this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(GG)
+       toLinearSpaceToRef(MM) {
+         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (MM.r = nM(this.r), MM.g = nM(this.g), MM.b = nM(this.b)) : (MM.r = PM(this.r), MM.g = PM(this.g), MM.b = PM(this.b)), this
```

#### 61. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4664-L4665` → after: `L225-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L225-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L225-L228) · [Before (L4664-L4665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4664-L4665)

```diff
-       get zSG() {
-         return this.instances.length > 0
+       toGammaSpace() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const rM = new LM;
+         return this.toGammaSpaceToRef(rM, MM), rM
```

#### 62. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4667-L4668` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L230-L231) · [Before (L4667-L4668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4667-L4668)

```diff
-       get hasThinInstances() {
-         return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
+       toGammaSpaceToRef(MM) {
+         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (MM.r = zM(this.r), MM.g = zM(this.g), MM.b = zM(this.b)) : (MM.r = QM(this.r), MM.g = QM(this.g), MM.b = QM(this.b)), this
```

#### 63. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4670-L4671` → after: `L233-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L233-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L233-L242) · [Before (L4670-L4671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4670-L4671)

```diff
-       get forcedInstanceCount() {
-         return this._internalMeshDataInfo._forcedInstanceCount
+       static HSVtoRGBToRef(MM, rM, iM, OM) {
+         const SM = iM * rM,
+           jM = MM / 60,
+           aM = SM * (1 - Math.abs(jM % 2 - 1));
+         let PM = 0,
+           nM = 0,
+           QM = 0;
+         jM >= 0 && jM <= 1 ? (PM = SM, nM = aM) : jM >= 1 && jM <= 2 ? (PM = aM, nM = SM) : jM >= 2 && jM <= 3 ? (nM = SM, QM = aM) : jM >= 3 && jM <= 4 ? (nM = aM, QM = SM) : jM >= 4 && jM <= 5 ? (PM = aM, QM = SM) : jM >= 5 && jM <= 6 && (PM = SM, QM = aM);
+         const zM = iM - SM;
+         return OM.r = PM + zM, OM.g = nM + zM, OM.b = QM + zM, OM
```

#### 64. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4673-L4674` → after: `L244-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L244-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L244-L246) · [Before (L4673-L4674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4673-L4674)

```diff
-       set forcedInstanceCount(GG) {
-         this._internalMeshDataInfo._forcedInstanceCount = GG
+       static FromHSV(MM, rM, iM) {
+         const OM = new LM(0, 0, 0);
+         return LM.HSVtoRGBToRef(MM, rM, iM, OM), OM
```

#### 65. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4676-L4677` → after: `L248-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L248-L249) · [Before (L4676-L4677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4676-L4677)

```diff
-       get sideOrientation() {
-         return this._internalMeshDataInfo._sideOrientation
+       static FromHexString(MM) {
+         return new LM(0, 0, 0).fromHexString(MM)
```

#### 66. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4679-L4680` → after: `L251-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L251-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L251-L253) · [Before (L4679-L4680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4679-L4680)

```diff
-       set sideOrientation(GG) {
-         this._internalMeshDataInfo._sideOrientation = GG, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === GG || !this._scene.useRightHandedSystem && 0 === GG
+       static FromArray(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return new LM(MM[rM], MM[rM + 1], MM[rM + 2])
```

#### 67. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4682-L4683` → after: `L255-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L255-L258) · [Before (L4682-L4683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4682-L4683)

```diff
-       get _effectiveSideOrientation() {
-         return this._internalMeshDataInfo._effectiveSideOrientation
+       static FromArrayToRef(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           iM = arguments.length > 2 ? arguments[2] : void 0;
+         iM.r = MM[rM], iM.g = MM[rM + 1], iM.b = MM[rM + 2]
```

#### 68. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4685-L4686` → after: `L260-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L260-L261) · [Before (L4685-L4686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4685-L4686)

```diff
-       get overrideMaterialSideOrientation() {
-         return this.sideOrientation
+       static FromInts(MM, rM, iM) {
+         return new LM(MM / 255, rM / 255, iM / 255)
```

#### 69. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4688-L4689` → after: `L263-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L263-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L263-L265) · [Before (L4688-L4689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4688-L4689)

```diff
-       set overrideMaterialSideOrientation(GG) {
-         this.sideOrientation = GG, this.material && (this.material.sideOrientation = null)
+       static Lerp(MM, rM, iM) {
+         const OM = new LM(0, 0, 0);
+         return LM.LerpToRef(MM, rM, iM, OM), OM
```

#### 70. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4691-L4692` → after: `L267-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L267-L268) · [Before (L4691-L4692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4691-L4692)

```diff
-       get overrideRenderingFillMode() {
-         return this._internalMeshDataInfo._overrideRenderingFillMode
+       static LerpToRef(MM, rM, iM, OM) {
+         OM.r = MM.r + (rM.r - MM.r) * iM, OM.g = MM.g + (rM.g - MM.g) * iM, OM.b = MM.b + (rM.b - MM.b) * iM
```

#### 71. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4694-L4695` → after: `L270-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L270-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L270-L280) · [Before (L4694-L4695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4694-L4695)

```diff
-       set overrideRenderingFillMode(GG) {
-         this._internalMeshDataInfo._overrideRenderingFillMode = GG
+       static Hermite(MM, rM, iM, OM, SM) {
+         const jM = SM * SM,
+           aM = SM * jM,
+           PM = 2 * aM - 3 * jM + 1,
+           nM = -2 * aM + 3 * jM,
+           QM = aM - 2 * jM + SM,
+           zM = aM - jM,
+           mM = MM.r * PM + iM.r * nM + rM.r * QM + OM.r * zM,
+           HM = MM.g * PM + iM.g * nM + rM.g * QM + OM.g * zM,
+           hM = MM.b * PM + iM.b * nM + rM.b * QM + OM.b * zM;
+         return new LM(mM, HM, hM)
```

#### 72. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4697-L4698` → after: `L282-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L282-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L282-L284) · [Before (L4697-L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4697-L4698)

```diff
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
+       static Hermite1stDerivative(MM, rM, iM, OM, SM) {
+         const jM = LM.Black();
+         return this.Hermite1stDerivativeToRef(MM, rM, iM, OM, SM, jM), jM
```

#### 73. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4700-L4701` → after: `L286-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L286-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L286-L288) · [Before (L4700-L4701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4700-L4701)

```diff
-       set material(GG) {
-         GG && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (GG.sideOrientation = null), this._setMaterial(GG)
+       static Hermite1stDerivativeToRef(MM, rM, iM, OM, SM, jM) {
+         const aM = SM * SM;
+         jM.r = 6 * (aM - SM) * MM.r + (3 * aM - 4 * SM + 1) * rM.r + 6 * (-aM + SM) * iM.r + (3 * aM - 2 * SM) * OM.r, jM.g = 6 * (aM - SM) * MM.g + (3 * aM - 4 * SM + 1) * rM.g + 6 * (-aM + SM) * iM.g + (3 * aM - 2 * SM) * OM.g, jM.b = 6 * (aM - SM) * MM.b + (3 * aM - 4 * SM + 1 … [truncated]
```

#### 74. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4703-L4704` → after: `L290-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L290-L291) · [Before (L4703-L4704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4703-L4704)

```diff
-       get source() {
-         return this._internalMeshDataInfo._source
+       static Red() {
+         return new LM(1, 0, 0)
```

#### 75. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4706-L4707` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L293-L294) · [Before (L4706-L4707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4706-L4707)

```diff
-       get cloneMeshMap() {
-         return this._internalMeshDataInfo.meshMap
+       static Green() {
+         return new LM(0, 1, 0)
```

#### 76. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4709-L4710` → after: `L296-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L296-L297) · [Before (L4709-L4710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4709-L4710)

```diff
-       get isUnIndexed() {
-         return this._unIndexed
+       static Blue() {
+         return new LM(0, 0, 1)
```

#### 77. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4712-L4713` → after: `L299-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L299-L300) · [Before (L4712-L4713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4712-L4713)

```diff
-       set isUnIndexed(GG) {
-         this._unIndexed !== GG && (this._unIndexed = GG, this._markSubMeshesAsAttributesDirty())
+       static Black() {
+         return new LM(0, 0, 0)
```

#### 78. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4715-L4717` → after: `L302-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L302-L303) · [Before (L4715-L4717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4715-L4717)

```diff
-       get worldMatrixInstancedBuffer() {
-         const GG = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
-         return GG ? GG.instancesData : void 0
+       static get BlackReadOnly() {
+         return LM._BlackReadOnly
```

#### 79. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4719-L4721` → after: `L305-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L305-L306) · [Before (L4719-L4721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4719-L4721)

```diff
-       get previousWorldMatrixInstancedBuffer() {
-         const GG = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
-         return GG ? GG.instancesPreviousData : void 0
+       static White() {
+         return new LM(1, 1, 1)
```

#### 80. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4723-L4724` → after: `L308-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L308-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L308-L309) · [Before (L4723-L4724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4723-L4724)

```diff
-       get manualUpdateOfWorldMatrixInstancedBuffer() {
-         return this._instanceDataStorage.manualUpdate
+       static Purple() {
+         return new LM(.5, 0, .5)
```

#### 81. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4726-L4727` → after: `L311-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L311-L312) · [Before (L4726-L4727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4726-L4727)

```diff
-       set manualUpdateOfWorldMatrixInstancedBuffer(GG) {
-         this._instanceDataStorage.manualUpdate = GG
+       static Magenta() {
+         return new LM(1, 0, 1)
```

#### 82. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4729-L4730` → after: `L314-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L314-L315) · [Before (L4729-L4730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4729-L4730)

```diff
-       get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
-         return this._instanceDataStorage.previousManualUpdate
+       static Yellow() {
+         return new LM(1, 1, 0)
```

#### 83. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4732-L4733` → after: `L317-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L317-L318) · [Before (L4732-L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4732-L4733)

```diff
-       set manualUpdateOfPreviousWorldMatrixInstancedBuffer(GG) {
-         this._instanceDataStorage.previousManualUpdate = GG
+       static Gray() {
+         return new LM(.5, .5, .5)
```

#### 84. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4735-L4736` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L320-L321) · [Before (L4735-L4736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4735-L4736)

```diff
-       get forceWorldMatrixInstancedBufferUpdate() {
-         return this._instanceDataStorage.forceMatrixUpdates
+       static Teal() {
+         return new LM(0, 1, 1)
```

#### 85. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4738-L4739` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L323-L324) · [Before (L4738-L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4738-L4739)

```diff
-       set forceWorldMatrixInstancedBufferUpdate(GG) {
-         this._instanceDataStorage.forceMatrixUpdates = GG
+       static Random() {
+         return new LM(Math.random(), Math.random(), Math.random())
```

#### 86. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4741-L4804` → after: `L326-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L326-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L326-L334) · [Before (L4741-L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4741-L4804)

```diff
-       _copySource(GG, bG) {
-         let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
-           wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         const SG = this.Dv();
-         if (GG._geometry && GG._geometry.applyToMesh(this), EG.e.DeepCopy(GG, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "zSG", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLe … [truncated]
-           const bG = GG._ranges;
-           for (const GG in bG) Object.prototype.hasOwnProperty.call(bG, GG) && bG[GG] && this.createAnimationRange(GG, bG[GG].from, bG[GG].to)
-         }
-         if (GG.metadata && GG.metadata.clone ? this.metadata = GG.metadata.clone() : this.metadata = GG.metadata, this._internalMetadata = GG._internalMetadata, this.meshBlendingTag = GG.meshBlendingTag, oG.c && oG.c.HasTags(GG) && oG.c.AddTagsTo(this, oG.c.GetTags(GG, !0)), this … [truncated]
-           const SG = GG.getDescendants(!0);
-           for (let GG = 0; GG < SG.length; GG++) {
-             const LG = SG[GG];
-             LG._isMesh ? (NG.parent = this, NG.doNotCloneChildren = bG, NG.clonePhysicsImpostor = ZG, NG.cloneThinInstances = wG, LG.clone(this.name + "." + LG.name, NG)) : LG.clone && LG.clone(this.name + "." + LG.name, this)
-           }
-         }
-         if (GG.morphTargetManager && (this.morphTargetManager = GG.morphTargetManager), (0, qG.b)(SG.getPhysicsEngine)) {
- ... (48 more removed lines; see GitHub link above)
+     }
+     LM._V8PerformanceHack = new LM(.5, .5, .5), LM._BlackReadOnly = LM.Black();
+     class mM {
+       constructor() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
+         this.r = MM, this.g = rM, this.b = iM, this.a = OM
```

#### 87. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4806-L4822` → after: `L336-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L336-L337) · [Before (L4806-L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4806-L4822)

```diff
-       getClassName() {
-         return "Mesh"
-       }
-       get _isMesh() {
-         return !0
-       }
-       toString(GG) {
-         let bG = super.toString(GG);
-         if (bG += ", n vertices: " + this.getTotalVertices(), bG += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
-           for (let ZG = 0; ZG < this.animations.length; ZG++) bG += ", animation[0]: " + this.animations[ZG].toString(GG);
-         if (GG)
-           if (this._geometry) {
-             const GG = this.IwG(),
-               ZG = this.getVerticesData(mG.l.PositionKind);
-             ZG && GG && (bG += ", flat shading: " + (ZG.length / 3 === GG.length ? "YES" : "NO"))
-           } else bG += ", flat shading: UNKNOWN";
- ... (1 more removed lines; see GitHub link above)
+       HOM() {
+         return [this.r, this.g, this.b, this.a]
```

#### 88. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4824-L4826` → after: `L339-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L339-L341) · [Before (L4824-L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4824-L4826)

```diff
-       _unBindEffect() {
-         super._unBindEffect();
-         for (const GG of this.instances) GG._unBindEffect()
+       toArray(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return MM[rM] = this.r, MM[rM + 1] = this.g, MM[rM + 2] = this.b, MM[rM + 3] = this.a, this
```

#### 89. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4828-L4829` → after: `L343-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L343-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L343-L345) · [Before (L4828-L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4828-L4829)

```diff
-       get hasLODLevels() {
-         return this._internalMeshDataInfo._LODLevels.length > 0
+       cz(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return this.r = MM[rM], this.g = MM[rM + 1], this.b = MM[rM + 2], this.a = MM[rM + 3], this
```

#### 90. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4831-L4832` → after: `L347-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L347-L348) · [Before (L4831-L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4831-L4832)

```diff
-       getLODLevels() {
-         return this._internalMeshDataInfo._LODLevels
+       equals(MM) {
+         return MM && this.r === MM.r && this.g === MM.g && this.b === MM.b && this.a === MM.a
```

#### 91. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4834-L4836` → after: `L350-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L350-L351) · [Before (L4834-L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4834-L4836)

```diff
-       _sortLODLevels() {
-         const GG = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
-         this._internalMeshDataInfo._LODLevels.sort(((bG, ZG) => bG.distanceOrScreenCoverage < ZG.distanceOrScreenCoverage ? GG : bG.distanceOrScreenCoverage > ZG.distanceOrScreenCoverage ? -GG : 0))
+       add(MM) {
+         return new mM(this.r + MM.r, this.g + MM.g, this.b + MM.b, this.a + MM.a)
```

#### 92. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4838-L4841` → after: `L353-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L353-L354) · [Before (L4838-L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4838-L4841)

```diff
-       addLODLevel(GG, bG) {
-         if (bG && bG._masterMesh) return AG.c.Warn("You cannot use a mesh as LOD level twice"), this;
-         const ZG = new gG(GG, bG);
-         return this._internalMeshDataInfo._LODLevels.push(ZG), bG && (bG._masterMesh = this), this._sortLODLevels(), this
+       addToRef(MM, rM) {
+         return rM.r = this.r + MM.r, rM.g = this.g + MM.g, rM.b = this.b + MM.b, rM.a = this.a + MM.a, rM
```

#### 93. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4843-L4880` → after: `L356-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L356-L357) · [Before (L4843-L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4843-L4880)

```diff
-       getLODLevelAtDistance(GG) {
-         const bG = this._internalMeshDataInfo;
-         for (let ZG = 0; ZG < bG._LODLevels.length; ZG++) {
-           const wG = bG._LODLevels[ZG];
-           if (wG.distanceOrScreenCoverage === GG) return wG.mesh
-         }
-         return null
-       }
-       removeLODLevel(GG) {
-         const bG = this._internalMeshDataInfo;
-         for (let ZG = 0; ZG < bG._LODLevels.length; ZG++) bG._LODLevels[ZG].mesh === GG && (bG._LODLevels.splice(ZG, 1), GG && (GG._masterMesh = null));
-         return this._sortLODLevels(), this
-       }
-       getLOD(GG, bG) {
-         const ZG = this._internalMeshDataInfo;
-         if (!ZG._LODLevels || 0 === ZG._LODLevels.length) return this;
- ... (22 more removed lines; see GitHub link above)
+       addInPlace(MM) {
+         return this.r += MM.r, this.g += MM.g, this.b += MM.b, this.a += MM.a, this
```

#### 94. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4882-L4883` → after: `L359-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L359-L360) · [Before (L4882-L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4882-L4883)

```diff
-       get geometry() {
-         return this._geometry
+       addInPlaceFromFloats(MM, rM, iM, OM) {
+         return this.r += MM, this.g += rM, this.b += iM, this.a += OM, this
```

#### 95. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4885-L4886` → after: `L362-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L362-L363) · [Before (L4885-L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4885-L4886)

```diff
-       getTotalVertices() {
-         return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
+       subtract(MM) {
+         return new mM(this.r - MM.r, this.g - MM.g, this.b - MM.b, this.a - MM.a)
```

#### 96. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4888-L4891` → after: `L365-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L365-L366) · [Before (L4888-L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4888-L4891)

```diff
-       getVerticesData(GG, bG, ZG, wG) {
-         if (!this._geometry) return null;
-         let SG = wG ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[GG]?.getFloatData(this.instances.length + 1, ZG || bG && 1 !== this._geometry.meshes.length);
-         return SG || (SG = this._geometry.getVerticesData(GG, bG, ZG)), SG
+       subtractToRef(MM, rM) {
+         return rM.r = this.r - MM.r, rM.g = this.g - MM.g, rM.b = this.b - MM.b, rM.a = this.a - MM.a, rM
```

#### 97. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4893-L4894` → after: `L368-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L368-L369) · [Before (L4893-L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4893-L4894)

```diff
-       copyVerticesData(GG, bG) {
-         this._geometry && this._geometry.copyVerticesData(GG, bG)
+       kOM(MM) {
+         return this.r -= MM.r, this.g -= MM.g, this.b -= MM.b, this.a -= MM.a, this
```

#### 98. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4896-L4897` → after: `L371-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L371-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L371-L372) · [Before (L4896-L4897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4896-L4897)

```diff
-       getVertexBuffer(GG, bG) {
-         return this._geometry ? (bG ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[GG]) ?? this._geometry.getVertexBuffer(GG) : null
+       subtractFromFloats(MM, rM, iM, OM) {
+         return new mM(this.r - MM, this.g - rM, this.b - iM, this.a - OM)
```

#### 99. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4899-L4900` → after: `L374-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L374-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L374-L375) · [Before (L4899-L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4899-L4900)

```diff
-       isVerticesDataPresent(GG, bG) {
-         return this._geometry ? !bG && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[GG] || this._geometry.isVerticesDataPresent(GG) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(GG)
+       subtractFromFloatsToRef(MM, rM, iM, OM, SM) {
+         return SM.r = this.r - MM, SM.g = this.g - rM, SM.b = this.b - iM, SM.a = this.a - OM, SM
```

#### 100. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4902-L4908` → after: `L377-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L377-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L377-L378) · [Before (L4902-L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4902-L4908)

```diff
-       isVertexBufferUpdatable(GG, bG) {
-         if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(GG);
-         if (!bG) {
-           const bG = this._userInstancedBuffersStorage?.vertexBuffers[GG];
-           if (bG) return bG.isUpdatable()
-         }
-         return this._geometry.isVertexBufferUpdatable(GG)
+       scale(MM) {
+         return new mM(this.r * MM, this.g * MM, this.b * MM, this.a * MM)
```

#### 101. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4910-L4920` → after: `L380-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L380-L381) · [Before (L4910-L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4910-L4920)

```diff
-       getVerticesDataKinds(GG) {
-         if (!this._geometry) {
-           const GG = [];
-           if (this._delayInfo)
-             for (const bG of this._delayInfo) GG.push(bG);
-           return GG
-         }
-         const bG = this._geometry.getVerticesDataKinds();
-         if (!GG && this._userInstancedBuffersStorage)
-           for (const ZG in this._userInstancedBuffersStorage.vertexBuffers) - 1 === bG.indexOf(ZG) && bG.push(ZG);
-         return bG
+       scaleInPlace(MM) {
+         return this.r *= MM, this.g *= MM, this.b *= MM, this.a *= MM, this
```

#### 102. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4922-L4972` → after: `L383-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L383-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L383-L384) · [Before (L4922-L4972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4922-L4972)

```diff
-       getTotalIndices() {
-         return this._geometry ? this._geometry.getTotalIndices() : 0
-       }
-       IwG(GG, bG) {
-         return this._geometry ? this._geometry.IwG(GG, bG) : []
-       }
-       get isBlocked() {
-         return null !== this._masterMesh && void 0 !== this._masterMesh
-       }
-       isReady() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (2 === this.delayLoadState) return !1;
-         if (!super.isReady(GG)) return !1;
-         if (!this.aE || 0 === this.aE.length) return !0;
-         if (!GG) return !0;
- ... (35 more removed lines; see GitHub link above)
+       scaleToRef(MM, rM) {
+         return rM.r = this.r * MM, rM.g = this.g * MM, rM.b = this.b * MM, rM.a = this.a * MM, rM
```

#### 103. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4974-L4975` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L386-L387) · [Before (L4974-L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4974-L4975)

```diff
-       get areNormalsFrozen() {
-         return this._internalMeshDataInfo._areNormalsFrozen
+       scaleAndAddToRef(MM, rM) {
+         return rM.r += this.r * MM, rM.g += this.g * MM, rM.b += this.b * MM, rM.a += this.a * MM, rM
```

#### 104. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4977-L5048` → after: `L389-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L389-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L389-L393) · [Before (L4977-L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L4977-L5048)

```diff
-       aK() {
-         return this._internalMeshDataInfo._areNormalsFrozen = !0, this
-       }
-       unfreezeNormals() {
-         return this._internalMeshDataInfo._areNormalsFrozen = !1, this
-       }
-       set overridenInstanceCount(GG) {
-         this._instanceDataStorage.overridenInstanceCount = GG
-       }
-       _getInstanceDataStorage() {
-         if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
-         const GG = this._instanceDataStorage.engine.currentRenderPassId;
-         let bG = this._instanceDataStorage.renderPasses[GG];
-         return bG || (bG = new RG, this._instanceDataStorage.renderPasses[GG] = bG), bG
-       }
-       _preActivate() {
- ... (56 more removed lines; see GitHub link above)
+       clampToRef() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           iM = arguments.length > 2 ? arguments[2] : void 0;
+         return iM.r = (0, jM.Clamp)(this.r, MM, rM), iM.g = (0, jM.Clamp)(this.g, MM, rM), iM.b = (0, jM.Clamp)(this.b, MM, rM), iM.a = (0, jM.Clamp)(this.a, MM, rM), iM
```

#### 105. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5050-L5294` → after: `L395-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L395-L396) · [Before (L5050-L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5050-L5294)

```diff
-       subdivide(GG) {
-         if (GG < 1) return;
-         const bG = this.getTotalIndices();
-         let ZG = bG / GG | 0,
-           wG = 0;
-         for (; ZG % 3 !== 0;) ZG++;
-         this.releaseSubMeshes();
-         for (let SG = 0; SG < GG && !(wG >= bG); SG++) aG.c.CreateFromIndices(0, wG, wG + ZG >= bG ? bG - wG : ZG, this, void 0, !1), wG += ZG;
-         this.refreshBoundingInfo(), this.synchronizeInstances()
-       }
-       setVerticesData(GG, bG) {
-         let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           wG = arguments.length > 3 ? arguments[3] : void 0;
-         if (this._geometry) this._geometry.setVerticesData(GG, bG, ZG, wG);
-         else {
-           const wG = new IG.e;
- ... (229 more removed lines; see GitHub link above)
+       multiply(MM) {
+         return new mM(this.r * MM.r, this.g * MM.g, this.b * MM.b, this.a * MM.a)
```

#### 106. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5296-L5298` → after: `L398-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L398-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L398-L399) · [Before (L5296-L5298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5296-L5298)

```diff
-       _disposeInstanceDataStorageRenderPass(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         GG?.instancesBuffer && (bG && GG.instancesBuffer.dispose(), GG.instancesBuffer = null), GG?.instancesPreviousBuffer && (bG && GG.instancesPreviousBuffer.dispose(), GG.instancesPreviousBuffer = null)
+       multiplyToRef(MM, rM) {
+         return rM.r = this.r * MM.r, rM.g = this.g * MM.g, rM.b = this.b * MM.b, rM.a = this.a * MM.a, rM
```

#### 107. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5300-L5324` → after: `L401-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L401-L402) · [Before (L5300-L5324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5300-L5324)

```diff
-       _rebuild() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         for (const bG in this._instanceDataStorage.renderPasses) {
-           const ZG = this._instanceDataStorage.renderPasses[bG];
-           this._disposeInstanceDataStorageRenderPass(ZG, GG)
-         }
-         if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, GG), this._userInstancedBuffersStorage) {
-           for (const bG in this._userInstancedBuffersStorage.vertexBuffers) {
-             const ZG = this._userInstancedBuffersStorage.vertexBuffers[bG];
-             ZG && (GG && ZG.dispose(), this._userInstancedBuffersStorage.vertexBuffers[bG] = null)
-           }
-           this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
-         }
-         this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(GG)
-       }
-       _releaseRenderPassId(GG) {
- ... (9 more removed lines; see GitHub link above)
+       multiplyInPlace(MM) {
+         return this.r *= MM.r, this.g *= MM.g, this.b *= MM.b, this.a *= MM.a, this
```

#### 108. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5326-L5330` → after: `L404-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L404-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L404-L405) · [Before (L5326-L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5326-L5330)

```diff
-       _freeze() {
-         if (this.aE) {
-           for (let GG = 0; GG < this.aE.length; GG++) this._getInstancesRenderList(GG);
-           this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
-         }
+       multiplyByFloats(MM, rM, iM, OM) {
+         return new mM(this.r * MM, this.g * rM, this.b * iM, this.a * OM)
```

#### 109. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5332-L5539` → after: `L407-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L407-L408) · [Before (L5332-L5539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5332-L5539)

```diff
-       _unFreeze() {
-         this._instanceDataStorage.isFrozen = !1;
-         for (const GG in this._instanceDataStorage.renderPasses) {
-           this._instanceDataStorage.renderPasses[GG].previousBatch = null
-         }
-         this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
-       }
-       renderWithRenderPassId(GG, bG, ZG, wG) {
-         let SG = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
-         const LG = this._scene.CK(),
-           yG = LG.currentRenderPassId;
-         if (void 0 !== GG && (LG.currentRenderPassId = GG), wG)(!SG || SG && wG.isInFrustum(this._scene._frustumPlanes)) && this.render(wG, !!bG, ZG);
-         else
-           for (let kG = 0; kG < this.aE.length; kG++) {
-             const GG = this.aE[kG];
-             (!SG || SG && GG.isInFrustum(this._scene._frustumPlanes)) && this.render(GG, !!bG, ZG)
- ... (192 more removed lines; see GitHub link above)
+       divide(MM) {
+         throw new ReferenceError("Can not divide a color")
```

#### 110. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5541-L5592` → after: `L410-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L410-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L410-L411) · [Before (L5541-L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5541-L5592)

```diff
-       _checkDelayState() {
-         const GG = this.Dv();
-         return this._geometry ? this._geometry.load(GG) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(GG)), this
-       }
-       _queueLoad(GG) {
-         GG.addPendingData(this);
-         const bG = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
-         return (async () => {
-           try {
-             const ZG = await GG._loadDelayedFileAsync(this.delayLoadingFile, bG, !0);
-             ZG instanceof ArrayBuffer ? this._delayLoadingFunction(ZG, this) : this._delayLoadingFunction(JSON.parse(ZG), this);
-             for (const GG of this.instances) GG.refreshBoundingInfo(), GG._syncSubMeshes();
-             this.delayLoadState = 1, GG.removePendingData(this)
-           } catch (ZG) {
-             GG.removePendingData(this), GG.Tu || AG.c.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${ZG}`)
-           }
- ... (36 more removed lines; see GitHub link above)
+       divideToRef(MM, rM) {
+         throw new ReferenceError("Can not divide a color")
```

#### 111. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5594-L5596` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L413-L414) · [Before (L5594-L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5594-L5596)

```diff
-       bakeCurrentTransformIntoVertices() {
-         let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(GG), this
+       divideInPlace(MM) {
+         throw new ReferenceError("Can not divide a color")
```

#### 112. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5598-L5599` → after: `L416-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L416-L417) · [Before (L5598-L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5598-L5599)

```diff
-       get _positions() {
-         return this._internalAbstractMeshDataInfo._positions || this._geometry && this._geometry._positions || null
+       minimizeInPlace(MM) {
+         return this.r = Math.min(this.r, MM.r), this.g = Math.min(this.g, MM.g), this.b = Math.min(this.b, MM.b), this.a = Math.min(this.a, MM.a), this
```

#### 113. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5601-L5602` → after: `L419-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L419-L420) · [Before (L5601-L5602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5601-L5602)

```diff
-       _resetPointsArrayCache() {
-         return this._geometry && this._geometry._resetPointsArrayCache(), this
+       maximizeInPlace(MM) {
+         return this.r = Math.max(this.r, MM.r), this.g = Math.max(this.g, MM.g), this.b = Math.max(this.b, MM.b), this.a = Math.max(this.a, MM.a), this
```

#### 114. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5604-L5605` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L422-L423) · [Before (L5604-L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5604-L5605)

```diff
-       _generatePointsArray() {
-         return !!this._geometry && this._geometry._generatePointsArray()
+       minimizeInPlaceFromFloats(MM, rM, iM, OM) {
+         return this.r = Math.min(MM, this.r), this.g = Math.min(rM, this.g), this.b = Math.min(iM, this.b), this.a = Math.min(OM, this.a), this
```

#### 115. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5607-L5686` → after: `L425-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L425-L426) · [Before (L5607-L5686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5607-L5686)

```diff
-       clone() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
-           bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           ZG = arguments.length > 2 ? arguments[2] : void 0,
-           wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         if (bG && void 0 === bG._addToSceneRootNodes) {
-           const ZG = bG;
-           return NG.source = this, NG.doNotCloneChildren = ZG.doNotCloneChildren, NG.clonePhysicsImpostor = ZG.clonePhysicsImpostor, NG.cloneThinInstances = ZG.cloneThinInstances, new OG(GG, this.Dv(), NG)
-         }
-         return new OG(GG, this.Dv(), bG, this, ZG, wG)
-       }
-       dispose(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
-         const ZG = this._internalMeshDataInfo;
-         if (ZG._onBeforeDrawObservable && ZG._onBeforeDrawObservable.clear(), ZG._onBeforeBindObservable && ZG._onBeforeBindObservable.clear(), ZG._onBeforeRenderObservable && ZG._onBeforeRenderObservable.clear(), ZG._onAfterRenderObservable && ZG._onAfterRenderObservable.clear() … [truncated]
- ... (64 more removed lines; see GitHub link above)
+       maximizeInPlaceFromFloats(MM, rM, iM, OM) {
+         return this.r = Math.max(MM, this.r), this.g = Math.max(rM, this.g), this.b = Math.max(iM, this.b), this.a = Math.max(OM, this.a), this
```

#### 116. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5688-L5733` → after: `L428-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L428-L429) · [Before (L5688-L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5688-L5733)

```diff
-       _convertToUnIndexedMesh() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const bG = this.getVerticesDataKinds().filter((GG => !this.getVertexBuffer(GG)?.getIsInstanced())),
-           ZG = this.IwG(!1, !0),
-           wG = {},
-           SG = (GG, bG) => {
-             const wG = new Float32Array(ZG.length * bG);
-             let SG = 0;
-             for (let LG = 0; LG < ZG.length; LG++)
-               for (let yG = 0; yG < bG; yG++) wG[SG++] = GG[ZG[LG] * bG + yG];
-             return wG
-           },
-           LG = this.HA(),
-           yG = this.geometry ? this.aE.slice(0) : [];
-         for (const kG of bG) wG[kG] = this.getVerticesData(kG);
-         for (const kG of bG) {
- ... (30 more removed lines; see GitHub link above)
+       floorToRef(MM) {
+         throw new ReferenceError("Can not floor a color")
```

#### 117. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5735-L5736` → after: `L431-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L431-L432) · [Before (L5735-L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5735-L5736)

```diff
-       convertToFlatShadedMesh() {
-         return this._convertToUnIndexedMesh(!0)
+       floor() {
+         throw new ReferenceError("Can not floor a color")
```

#### 118. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5738-L5739` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L434-L435) · [Before (L5738-L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5738-L5739)

```diff
-       convertToUnIndexedMesh() {
-         return this._convertToUnIndexedMesh()
+       fractToRef(MM) {
+         throw new ReferenceError("Can not fract a color")
```

#### 119. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5741-L5754` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L437-L438) · [Before (L5741-L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5741-L5754)

```diff
-       flipFaces() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const bG = IG.e.ExtractFromMesh(this);
-         let ZG;
-         if (GG && this.isVerticesDataPresent(mG.l.NormalKind) && bG.normals) {
-           for (ZG = 0; ZG < bG.normals.length; ZG++) bG.normals[ZG] *= -1;
-           this.setVerticesData(mG.l.NormalKind, bG.normals, this.isVertexBufferUpdatable(mG.l.NormalKind))
-         }
-         if (bG.indices) {
-           let GG;
-           for (ZG = 0; ZG < bG.indices.length; ZG += 3) GG = bG.indices[ZG + 1], bG.indices[ZG + 1] = bG.indices[ZG + 2], bG.indices[ZG + 2] = GG;
-           this.setIndices(bG.indices, null, this.isVertexBufferUpdatable(mG.l.PositionKind), !0)
-         }
-         return this
+       fract() {
+         throw new ReferenceError("Can not fract a color")
```

#### 120. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5756-L5852` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L440-L441) · [Before (L5756-L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5756-L5852)

```diff
-       increaseVertices() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
-         const bG = IG.e.ExtractFromMesh(this),
-           ZG = bG.indices && !Array.isArray(bG.indices) && Array.from ? Array.from(bG.indices) : bG.indices,
-           wG = bG.positions && !Array.isArray(bG.positions) && Array.from ? Array.from(bG.positions) : bG.positions,
-           SG = bG.uvs && !Array.isArray(bG.uvs) && Array.from ? Array.from(bG.uvs) : bG.uvs,
-           LG = bG.normals && !Array.isArray(bG.normals) && Array.from ? Array.from(bG.normals) : bG.normals;
-         if (ZG && wG) {
-           bG.indices = ZG, bG.positions = wG, SG && (bG.uvs = SG), LG && (bG.normals = LG);
-           const yG = GG + 1,
-             kG = [];
-           for (let GG = 0; GG < yG + 1; GG++) kG[GG] = [];
-           let UG, YG;
-           const VG = new iG.p(0, 0, 0),
-             pG = new iG.p(0, 0, 0),
-             fG = new iG.m(0, 0),
- ... (81 more removed lines; see GitHub link above)
+       VJ() {
+         throw new ReferenceError("Can not negate a color")
```

#### 121. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5854-L5855` → after: `L443-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L443-L444) · [Before (L5854-L5855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5854-L5855)

```diff
-       static _instancedMeshFactory(GG, bG) {
-         throw (0, qG.i)("InstancedMesh")
+       negateInPlace() {
+         throw new ReferenceError("Can not negate a color")
```

#### 122. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5857-L5858` → after: `L446-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L446-L447) · [Before (L5857-L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5857-L5858)

```diff
-       static _PhysicsImpostorParser(GG, bG, ZG) {
-         throw (0, qG.i)("PhysicsImpostor")
+       negateToRef(MM) {
+         throw new ReferenceError("Can not negate a color")
```

#### 123. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5860-L5862` → after: `L449-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L449-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L449-L451) · [Before (L5860-L5862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5860-L5862)

```diff
-       createInstance(GG) {
-         const bG = OG._instancedMeshFactory(GG, this);
-         return bG.parent = this.parent, bG
+       equalsWithEpsilon(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SM.d;
+         return (0, jM.WithinEpsilon)(this.r, MM.r, rM) && (0, jM.WithinEpsilon)(this.g, MM.g, rM) && (0, jM.WithinEpsilon)(this.b, MM.b, rM) && (0, jM.WithinEpsilon)(this.a, MM.a, rM)
```

#### 124. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5864-L5976` → after: `L453-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L453-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L453-L454) · [Before (L5864-L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5864-L5976)

```diff
-       synchronizeInstances() {
-         for (let GG = 0; GG < this.instances.length; GG++) {
-           this.instances[GG]._syncSubMeshes()
-         }
-         return this
-       }
-       optimizeIndices(GG) {
-         const bG = this.IwG(),
-           ZG = this.getVerticesData(mG.l.PositionKind);
-         if (!ZG || !bG) return this;
-         const wG = [];
-         for (let LG = 0; LG < ZG.length; LG += 3) wG.push(iG.p.FromArray(ZG, LG));
-         const SG = [];
-         return rG.b.SyncAsyncForLoop(wG.length, 40, (GG => {
-           const bG = wG.length - 1 - GG,
-             ZG = wG[bG];
- ... (97 more removed lines; see GitHub link above)
+       IaM(MM, rM, iM, OM) {
+         return this.r === MM && this.g === rM && this.b === iM && this.a === OM
```

#### 125. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L5978-L6012` → after: `L456-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L456-L457) · [Before (L5978-L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L5978-L6012)

```diff
-       static Parse(GG, bG, ZG) {
-         let wG, SG = !1;
-         if (GG.type && "LinesMesh" === GG.type ? wG = OG._LinesMeshParser(GG, bG) : GG.type && "GroundMesh" === GG.type ? wG = OG._GroundMeshParser(GG, bG) : GG.type && "GoldbergMesh" === GG.type ? wG = OG._GoldbergMeshParser(GG, bG) : GG.type && "GreasedLineMesh" === GG.type ? w … [truncated]
-           for (let bG = 0; bG < GG.animations.length; bG++) {
-             const ZG = GG.animations[bG],
-               SG = (0, sG.e)("BABYLON.Animation");
-             SG && wG.animations.push(SG.Parse(ZG))
-           }
-           WG.e.ParseAnimationRanges(wG, GG, bG)
-         }
-         if (GG.autoAnimate && bG.beginAnimation(wG, GG.autoAnimateFrom, GG.autoAnimateTo, GG.autoAnimateLoop, GG.autoAnimateSpeed || 1), GG.layerMask && !isNaN(GG.layerMask) ? wG.layerMask = Math.abs(parseInt(GG.layerMask)) : wG.layerMask = 268435455, GG.physicsImpostor && (wG.ph … [truncated]
-             ids: GG.lodMeshIds,
-             distances: GG.lodDistances ? GG.lodDistances : null,
-             coverages: GG.lodCoverages ? GG.lodCoverages : null
-           }), GG.instances)
-           for (let LG = 0; LG < GG.instances.length; LG++) {
- ... (19 more removed lines; see GitHub link above)
+       toString() {
+         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
```

#### 126. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6014-L6086` → after: `L459-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L459-L460) · [Before (L6014-L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6014-L6086)

```diff
-       setPositionsForCPUSkinning() {
-         const GG = this._internalMeshDataInfo;
-         if (!GG._sourcePositions) {
-           const bG = this.getVerticesData(mG.l.PositionKind);
-           if (!bG) return GG._sourcePositions;
-           GG._sourcePositions = new Float32Array(bG), this.isVertexBufferUpdatable(mG.l.PositionKind) || this.setVerticesData(mG.l.PositionKind, bG, !0)
-         }
-         return GG._sourcePositions
-       }
-       setNormalsForCPUSkinning() {
-         const GG = this._internalMeshDataInfo;
-         if (!GG._sourceNormals) {
-           const bG = this.getVerticesData(mG.l.NormalKind);
-           if (!bG) return GG._sourceNormals;
-           GG._sourceNormals = new Float32Array(bG), this.isVertexBufferUpdatable(mG.l.NormalKind) || this.setVerticesData(mG.l.NormalKind, bG, !0)
-         }
- ... (57 more removed lines; see GitHub link above)
+       getClassName() {
+         return "Color4"
```

#### 127. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6088-L6204` → after: `L462-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L462-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L462-L464) · [Before (L6088-L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6088-L6204)

```diff
-       static Center(GG) {
-         const bG = GG instanceof Array ? OG.MinMax(GG) : GG;
-         return iG.p.Center(bG.min, bG.max)
-       }
-       static MergeMeshes(GG) {
-         let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-           ZG = arguments.length > 2 ? arguments[2] : void 0,
-           wG = arguments.length > 3 ? arguments[3] : void 0,
-           SG = arguments.length > 4 ? arguments[4] : void 0,
-           LG = arguments.length > 5 ? arguments[5] : void 0;
-         return (0, XG.l)(OG._MergeMeshesCoroutine(GG, bG, ZG, wG, SG, LG, !1))
-       }
-       static async MergeMeshesAsync(GG) {
-         let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-           ZG = arguments.length > 2 ? arguments[2] : void 0,
-           wG = arguments.length > 3 ? arguments[3] : void 0,
- ... (101 more removed lines; see GitHub link above)
+       getHashCode() {
+         let MM = 255 * this.r | 0;
+         return MM = 397 * MM ^ 255 * this.g, MM = 397 * MM ^ 255 * this.b, MM = 397 * MM ^ 255 * this.a, MM
```

#### 128. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6206-L6207` → after: `L466-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L466-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L466-L467) · [Before (L6206-L6207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6206-L6207)

```diff
-       i6(GG) {
-         GG._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(GG)
+       clone() {
+         return (new mM).jR(this)
```

#### 129. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6210-L6257` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L470) · [Before (L6210-L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6210-L6257)

```diff
-         const bG = GG._indexInSourceMeshInstanceArray;
-         if (-1 != bG) {
-           if (bG !== this.instances.length - 1) {
-             const GG = this.instances[this.instances.length - 1];
-             this.instances[bG] = GG, GG._indexInSourceMeshInstanceArray = bG
-           }
-           GG._indexInSourceMeshInstanceArray = -1, this.instances.pop()
-         }
-       }
-       _shouldConvertRHS() {
-         return this._scene.useRightHandedSystem && this.sideOrientation === cG.e.CounterClockWiseSideOrientation
-       }
-       _getRenderingFillMode(GG) {
-         const bG = this.Dv();
-         return bG.forcePointsCloud ? cG.e.PointFillMode : bG.forceWireframe ? cG.e.WireFrameFillMode : this.overrideRenderingFillMode ?? GG
-       }
- ... (32 more removed lines; see GitHub link above)
+         return this.r = MM.r, this.g = MM.g, this.b = MM.b, this.a = MM.a, this
```

#### 130. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6259-L6260` → after: `L472-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L472-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L472-L473) · [Before (L6259-L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6259-L6260)

```diff
-       static CreatePolygon(GG, bG, ZG, wG, SG, LG, yG) {
-         throw new Error("Import MeshBuilder to populate this function")
+       iMM(MM, rM, iM, OM) {
+         return this.r = MM, this.g = rM, this.b = iM, this.a = OM, this
```

#### 131. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6262-L6263` → after: `L475-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L475-L476) · [Before (L6262-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6262-L6263)

```diff
-       static ExtrudePolygon(GG, bG, ZG, wG, SG, LG, yG, kG) {
-         throw new Error("Import MeshBuilder to populate this function")
+       set(MM, rM, iM, OM) {
+         return this.iMM(MM, rM, iM, OM)
```

#### 132. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6265-L6269` → after: `L478-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L478-L479) · [Before (L6265-L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6265-L6269)

```diff
-       static ExtrudeShape(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG) {
-         throw new Error("Import MeshBuilder to populate this function")
-       }
-       static ExtrudeShapeCustom(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG) {
-         throw new Error("Import MeshBuilder to populate this function")
+       P_(MM) {
+         return this.r = this.g = this.b = this.a = MM, this
```

#### 133. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6271-L6272` → after: `L481-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L481-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L481-L488) · [Before (L6271-L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6271-L6272)

```diff
-       static CreateLathe(GG, bG, ZG, wG, SG, LG, yG) {
-         throw new Error("Import MeshBuilder to populate this function")
+       toHexString() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const rM = Math.round(255 * this.r),
+           iM = Math.round(255 * this.g),
+           OM = Math.round(255 * this.b);
+         if (MM) return "#" + (0, jM.ToHex)(rM) + (0, jM.ToHex)(iM) + (0, jM.ToHex)(OM);
+         const SM = Math.round(255 * this.a);
+         return "#" + (0, jM.ToHex)(rM) + (0, jM.ToHex)(iM) + (0, jM.ToHex)(OM) + (0, jM.ToHex)(SM)
```

#### 134. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6274-L6275` → after: `L490-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L490-L491) · [Before (L6274-L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6274-L6275)

```diff
-       static CreatePlane(GG, bG, ZG, wG, SG) {
-         throw new Error("Import MeshBuilder to populate this function")
+       fromHexString(MM) {
+         return "#" !== MM.substring(0, 1) || 9 !== MM.length && 7 !== MM.length || (this.r = parseInt(MM.substring(1, 3), 16) / 255, this.g = parseInt(MM.substring(3, 5), 16) / 255, this.b = parseInt(MM.substring(5, 7), 16) / 255, 9 === MM.length && (this.a = parseInt(MM.substrin … [truncated]
```

#### 135. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6277-L6278` → after: `L493-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L493-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L493-L496) · [Before (L6277-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6277-L6278)

```diff
-       static CreateGround(GG, bG, ZG, wG, SG, LG) {
-         throw new Error("Import MeshBuilder to populate this function")
+       toLinearSpace() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const rM = new mM;
+         return this.toLinearSpaceToRef(rM, MM), rM
```

#### 136. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6280-L6281` → after: `L498-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L498-L499) · [Before (L6280-L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6280-L6281)

```diff
-       static CreateTiledGround(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
-         throw new Error("Import MeshBuilder to populate this function")
+       toLinearSpaceToRef(MM) {
+         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (MM.r = nM(this.r), MM.g = nM(this.g), MM.b = nM(this.b)) : (MM.r = PM(this.r), MM.g = PM(this.g), MM.b = PM(this.b)), MM.a = this.a, this
```

#### 137. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6283-L6284` → after: `L501-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L501-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L501-L533) · [Before (L6283-L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6283-L6284)

```diff
-       static CreateGroundFromHeightMap(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG) {
-         throw new Error("Import MeshBuilder to populate this function")
+       toGammaSpace() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const rM = new mM;
+         return this.toGammaSpaceToRef(rM, MM), rM
+       }
+       toGammaSpaceToRef(MM) {
+         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (MM.r = zM(this.r), MM.g = zM(this.g), MM.b = zM(this.b)) : (MM.r = QM(this.r), MM.g = QM(this.g), MM.b = QM(this.b)), MM.a = this.a, this
+       }
+       static FromHexString(MM) {
+         return "#" !== MM.substring(0, 1) || 9 !== MM.length && 7 !== MM.length ? new mM(0, 0, 0, 0) : new mM(0, 0, 0, 1).fromHexString(MM)
+       }
+       static Lerp(MM, rM, iM) {
+         return mM.LerpToRef(MM, rM, iM, new mM)
+       }
+       static LerpToRef(MM, rM, iM, OM) {
+         return OM.r = MM.r + (rM.r - MM.r) * iM, OM.g = MM.g + (rM.g - MM.g) * iM, OM.b = MM.b + (rM.b - MM.b) * iM, OM.a = MM.a + (rM.a - MM.a) * iM, OM
+ ... (17 more added lines; see GitHub link above)
```

#### 138. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6286-L6287` → after: `L535-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L535-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L535-L537) · [Before (L6286-L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6286-L6287)

```diff
-       static CreateTube(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG) {
-         throw new Error("Import MeshBuilder to populate this function")
+       static Hermite1stDerivativeToRef(MM, rM, iM, OM, SM, jM) {
+         const aM = SM * SM;
+         jM.r = 6 * (aM - SM) * MM.r + (3 * aM - 4 * SM + 1) * rM.r + 6 * (-aM + SM) * iM.r + (3 * aM - 2 * SM) * OM.r, jM.g = 6 * (aM - SM) * MM.g + (3 * aM - 4 * SM + 1) * rM.g + 6 * (-aM + SM) * iM.g + (3 * aM - 2 * SM) * OM.g, jM.b = 6 * (aM - SM) * MM.b + (3 * aM - 4 * SM + 1 … [truncated]
```

#### 139. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6289-L6290` → after: `L539-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L539-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L539-L541) · [Before (L6289-L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6289-L6290)

```diff
-       static CreatePolyhedron(GG, bG, ZG) {
-         throw new Error("Import MeshBuilder to populate this function")
+       static FromColor3(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         return new mM(MM.r, MM.g, MM.b, rM)
```

#### 140. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6292-L6293` → after: `L543-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L543-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L543-L545) · [Before (L6292-L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6292-L6293)

```diff
-       static CreateIcoSphere(GG, bG, ZG) {
-         throw new Error("Import MeshBuilder to populate this function")
+       static FromArray(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return new mM(MM[rM], MM[rM + 1], MM[rM + 2], MM[rM + 3])
```

#### 141. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6295-L6296` → after: `L547-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L547-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L547-L550) · [Before (L6295-L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6295-L6296)

```diff
-       static CreateDecal(GG, bG, ZG, wG, SG, LG) {
-         throw new Error("Import MeshBuilder to populate this function")
+       static FromArrayToRef(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           iM = arguments.length > 2 ? arguments[2] : void 0;
+         iM.r = MM[rM], iM.g = MM[rM + 1], iM.b = MM[rM + 2], iM.a = MM[rM + 3]
```

#### 142. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6298-L6299` → after: `L552-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L552-L553) · [Before (L6298-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6298-L6299)

```diff
-       static CreateCapsule(GG, bG, ZG) {
-         throw new Error("Import MeshBuilder to populate this function")
+       static FromInts(MM, rM, iM, OM) {
+         return new mM(MM / 255, rM / 255, iM / 255, OM / 255)
```

#### 143. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6301-L6302` → after: `L555-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L555-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L555-L564) · [Before (L6301-L6302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6301-L6302)

```diff
-       static ExtendToGoldberg(GG) {
-         throw new Error("Import MeshBuilder to populate this function")
+       static CheckColors4(MM, rM) {
+         if (MM.length === 3 * rM) {
+           const rM = [];
+           for (let iM = 0; iM < MM.length; iM += 3) {
+             const OM = iM / 3 * 4;
+             rM[OM] = MM[iM], rM[OM + 1] = MM[iM + 1], rM[OM + 2] = MM[iM + 2], rM[OM + 3] = 1
+           }
+           return rM
+         }
+         return MM
```

#### 144. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6305-L6323` → after: `L567-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L567-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L567-L569) · [Before (L6305-L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6305-L6323)

```diff
-     OG.FRONTSIDE = IG.e.FRONTSIDE, OG.BACKSIDE = IG.e.BACKSIDE, OG.DOUBLESIDE = IG.e.DOUBLESIDE, OG.DEFAULTSIDE = IG.e.DEFAULTSIDE, OG.NO_CAP = 0, OG.CAP_START = 1, OG.CAP_END = 2, OG.CAP_ALL = 3, OG.NO_FLIP = 0, OG.FLIP_TILE = 1, OG.ROTATE_TILE = 2, OG.FLIP_ROW = 3, OG.ROTATE_RO … [truncated]
-       throw (0, qG.i)("GroundMesh")
-     }, OG._GoldbergMeshParser = (GG, bG) => {
-       throw (0, qG.i)("GoldbergMesh")
-     }, OG._LinesMeshParser = (GG, bG) => {
-       throw (0, qG.i)("LinesMesh")
-     }, OG._GreasedLineMeshParser = (GG, bG) => {
-       throw (0, qG.i)("GreasedLineMesh")
-     }, OG._GreasedLineRibbonMeshParser = (GG, bG) => {
-       throw (0, qG.i)("GreasedLineRibbonMesh")
-     }, OG._TrailMeshParser = (GG, bG) => {
-       throw (0, qG.i)("TrailMesh")
-     }, OG._GaussianSplattingMeshParser = (GG, bG) => {
-       throw (0, qG.i)("GaussianSplattingMesh")
-     }, OG._GaussianSplattingPartProxyMeshParser = (GG, bG) => {
-       throw (0, qG.i)("GaussianSplattingPartProxyMesh")
- ... (3 more removed lines; see GitHub link above)
+     mM._V8PerformanceHack = new mM(.5, .5, .5, .5);
+     class HM {}
+     HM.Color3 = (0, OM.c)(3, LM.Black), HM.Color4 = (0, OM.c)(3, (() => new mM(0, 0, 0, 0)));
```

#### 145. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6327-L6328` → after: `L573-L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L573-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L573-L588) · [Before (L6327-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6327-L6328)

```diff
-       xG || (xG = !0, (0, sG.i)("BABYLON.Mesh", OG))
-     }(wG = OG.prototype).gM ?? (wG.gM = (0, qG.h)("Mesh", "gM")), (SG = OG.prototype).simplify ?? (SG.simplify = (0, qG.h)("Mesh", "simplify")), (LG = OG.prototype).thinInstanceAdd ?? (LG.thinInstanceAdd = (0, qG.h)("Mesh", "thinInstanceAdd")), (yG = OG.prototype).thinInstanceAdd … [truncated]
+       hM || (hM = !0, Object.defineProperties(LM.prototype, {
+         dimension: {
+           value: [3]
+         },
+         rank: {
+           value: 1
+         }
+       }), Object.defineProperties(mM.prototype, {
+         dimension: {
+           value: [4]
+         },
+         rank: {
+           value: 1
+         }
+       }), (0, aM.e)("BABYLON.Color3", LM), (0, aM.e)("BABYLON.Color4", mM))
+     }
```

#### 146. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6330` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L590) · [Before (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6330)

```diff
-   40795: (GG, bG, ZG) => {
+   38044: (MM, rM, iM) => {
```

#### 147. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6332` → after: `L592-L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L592-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L592-L594) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6332)

```diff
-       e: () => KG
+       d: () => jM,
+       f: () => OM,
+       h: () => SM
```

#### 148. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6334-L6866` → after: `L596-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L596-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L596-L599) · [Before (L6334-L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6334-L6866)

```diff
-     var wG = ZG(40393),
-       SG = ZG(37439),
-       LG = ZG(40524),
-       yG = ZG(40258),
-       kG = ZG(37621),
-       UG = ZG(39093),
-       YG = ZG(40398),
-       VG = ZG(40792),
-       pG = ZG(40438),
-       fG = ZG(40673);
-     class QG {}
-     let KG = (() => {
-       var GG;
-       let bG, ZG, KG, hG, dG = [];
-       return GG = class {
-         constructor() {
- ... (517 more removed lines; see GitHub link above)
+     const OM = 1 / 2.2,
+       SM = 2.2;
+     Math.sqrt(5);
+     let jM = .001
```

#### 149. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6868-L6875` → after: `L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L601) · [Before (L6868-L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6868-L6875)

```diff
-   40865: (GG, bG, ZG) => {
-     var wG = ZG(37439),
-       SG = ZG(39093),
-       LG = ZG(40681),
-       yG = ZG(40784),
-       kG = ZG(40524);
-     const UG = "bakedVertexAnimationSettingsInstanced";
- 
+   38074: (MM, rM, iM) => {
```

#### 150. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6877-L6878` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L603) · [Before (L6877-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6877-L6878)

```diff
-       const bG = GG.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
-       return bG instanceof Float32Array || bG instanceof Uint16Array
+       return parseInt(MM.toString().replace(/\W/g, ""))
```

#### 151. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6881-L6888` → after: `L606-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L606-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L606-L626) · [Before (L6881-L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6881-L6888)

```diff
-     function VG(GG, bG, ZG, wG) {
-       ZG.N7(Number.POSITIVE_INFINITY), wG.N7(Number.NEGATIVE_INFINITY);
-       for (let SG = 0; SG < 3 * bG; SG += 3) {
-         const bG = GG[SG],
-           LG = GG[SG + 1],
-           yG = GG[SG + 2];
-         bG < ZG.x && (ZG.x = bG), LG < ZG.y && (ZG.y = LG), yG < ZG.z && (ZG.z = yG), bG > wG.x && (wG.x = bG), LG > wG.y && (wG.y = LG), yG > wG.z && (wG.z = yG)
-       }
+     function SM(MM, rM) {
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(MM - rM) <= iM
+     }
+ 
+     function jM(MM, rM, iM) {
+       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
+       return MM < rM - OM || MM > iM + OM
+     }
+ 
+     function aM(MM, rM) {
+       return MM === rM ? MM : Math.random() * (rM - MM) + MM
+     }
+ 
+     function PM(MM, rM, iM) {
+       return MM + (rM - MM) * iM
+ ... (5 more added lines; see GitHub link above)
```

#### 152. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6892` → after: `L630-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L630-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L630-L631) · [Before (L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6892)

```diff
-       ZG && (GG.x -= GG.x * ZG.x + ZG.y, GG.y -= GG.y * ZG.x + ZG.y, GG.z -= GG.z * ZG.x + ZG.y, bG.x += bG.x * ZG.x + ZG.y, bG.y += bG.y * ZG.x + ZG.y, bG.z += bG.z * ZG.x + ZG.y)
+       let OM;
+       return OM = MM != rM ? mM((iM - MM) / (rM - MM)) : 0, OM
```

#### 153. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6896-L6900` → after: `L635-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L635-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L635-L637) · [Before (L6896-L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6896-L6900)

```diff
-       const yG = wG.j.mK[7],
-         kG = wG.j.mK[8];
-       for (let UG = 0; UG < 2; ++UG)
-         for (let YG = 0; YG < 2; ++YG)
-           for (let VG = 0; VG < 2; ++VG) yG.set(UG ? bG.x : GG.x, YG ? bG.y : GG.y, VG ? bG.z : GG.z), wG.p.TransformCoordinatesToRef(yG, ZG, kG), SG.minimizeInPlace(kG), LG.maximizeInPlace(kG)
+       const jM = SM * SM,
+         aM = SM * jM;
+       return MM * (2 * aM - 3 * jM + 1) + iM * (-2 * aM + 3 * jM) + rM * (aM - 2 * jM + SM) + OM * (aM - jM)
```

#### 154. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6904-L6905` → after: `L641-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L641-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L641-L642) · [Before (L6904-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6904-L6905)

```diff
-       const yG = wG.j.mK[7];
-       for (let kG = 0; kG < 3 * bG; kG += 3) wG.p.TransformCoordinatesFromFloatsToRef(GG[kG], GG[kG + 1], GG[kG + 2], ZG, yG), SG.minimizeInPlace(yG), LG.maximizeInPlace(yG)
+       const jM = SM * SM;
+       return 6 * (jM - SM) * MM + (3 * jM - 4 * SM + 1) * rM + 6 * (-jM + SM) * iM + (3 * jM - 2 * SM) * OM
```

#### 155. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6907-L6943` → after: `L644-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L644-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L644-L669) · [Before (L6907-L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6907-L6943)

```diff
-     let KG = !1;
-     KG || (KG = !0, yG.c.prototype.thinInstanceAdd = function(GG) {
-       let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       if (!this.Dv().CK().getCaps().instancedArrays) return SG.c.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
-       this._thinInstanceUpdateBufferSize("matrix", Array.isArray(GG) ? GG.length : 1);
-       const ZG = this._thinInstanceDataStorage.instancesCount;
-       if (Array.isArray(GG))
-         for (let wG = 0; wG < GG.length; ++wG) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, GG[wG], wG === GG.length - 1 && bG);
-       else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, GG, bG);
-       return ZG
-     }, yG.c.prototype.thinInstanceAddSelf = function() {
-       let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-       return this.thinInstanceAdd(wG.e.IdentityReadOnly, GG)
-     }, yG.c.prototype.thinInstanceRegisterAttribute = function(GG, bG) {
-       GG === kG.l.ColorKind && (GG = kG.l.ColorInstanceKind), this.removeVerticesData(GG), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[GG] = bG, this._userThinInstanceBuffersStorage.sizes[GG] = bG * Math.max(32, this._thinInstanceDataSt … [truncated]
-     }, yG.c.prototype.thinInstanceSetMatrixAt = function(GG, bG) {
- ... (21 more removed lines; see GitHub link above)
+ 
+     function mM(MM) {
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+       return Math.min(iM, Math.max(rM, MM))
+     }
+ 
+     function HM(MM) {
+       return MM -= 2 * Math.PI * Math.floor((MM + Math.PI) / (2 * Math.PI))
+     }
+ 
+     function hM(MM) {
+       const rM = MM.toString(16);
+       return MM <= 15 ? ("0" + rM).toUpperCase() : rM.toUpperCase()
+     }
+ 
+ ... (10 more added lines; see GitHub link above)
```

#### 156. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L6945-L7672` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L671) · [Before (L6945-L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L6945-L7672)

```diff
-     }, yG.c.prototype.yGG = function(GG, bG) {
-       let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-         wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       if (ZG = ZG || 16, "matrix" === GG) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = bG ? bG.length : 32 * ZG, this._thinInstanceDataStorage.matrixData = bG, this._thin … [truncated]
-       else if ("previousMatrix" === GG) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = bG, null !== bG && (this._thinInstanceDataStorage.previousMatrixBuf … [truncated]
-       else if ("splatIndex" === GG && bG) {
-         this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = bG.length / ZG, this._userThinInstanceBuffersStorage.data[GG] = bG, this._userThinInstanceBuffersStorage.strides[GG] = ZG, this._userThinInstanceBuffersStorage.sizes[GG] = bG.length;
-         const wG = new kG.c(this.CK(), bG, !0, 16, !1, !0);
-         this._thinInstanceDataStorage.matrixBuffer = wG;
-         for (let bG = 0; bG < 4; bG++) this.setVerticesBuffer(wG.createVertexBuffer(GG + bG, 4 * bG, 4))
-       } else GG === kG.l.ColorKind && (GG = kG.l.ColorInstanceKind), null === bG ? this._userThinInstanceBuffersStorage?.data[GG] && (this.removeVerticesData(GG), delete this._userThinInstanceBuffersStorage.data[GG], delete this._userThinInstanceBuffersStorage.strides[GG], delete … [truncated]
-     }, yG.c.prototype.bGG = function(GG) {
-       "matrix" === GG ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(GG), this._thinInstanceDataStorage.matrixBuffer?.updateDir … [truncated]
-     }, yG.c.prototype.thinInstancePartialBufferUpdate = function(GG, bG, ZG) {
-       if ("matrix" === GG) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof bG ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16  … [truncated]
-       else if (GG === kG.l.ColorKind && (GG = kG.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[GG]) {
- ... (712 more removed lines; see GitHub link above)
+     }
```

#### 157. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7674-L7684` → after: `L673-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L673-L674) · [Before (L7674-L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L7674-L7684)

```diff
-     function dG(GG, bG, ZG) {
-       const wG = YG.b.Parse((() => new hG(GG.name, bG)), GG, bG, ZG);
-       if (GG.localMatrix ? wG.setPreTransformMatrix(pG.e.FromArray(GG.localMatrix)) : GG.pivotMatrix && wG.setPivotMatrix(pG.e.FromArray(GG.pivotMatrix)), wG.DW(GG.isEnabled), wG._waitingParsedUniqueId = GG.uniqueId, void 0 !== GG.parentId && (wG._waitingParentId = GG.parentId),  … [truncated]
-         for (let bG = 0; bG < GG.animations.length; bG++) {
-           const ZG = GG.animations[bG],
-             SG = (0, QG.e)("BABYLON.Animation");
-           SG && wG.animations.push(SG.Parse(ZG))
-         }
-         fG.e.ParseAnimationRanges(wG, GG, bG)
-       }
-       return GG.autoAnimate && bG.beginAnimation(wG, GG.autoAnimateFrom, GG.autoAnimateTo, GG.autoAnimateLoop, GG.autoAnimateSpeed || 1), wG
+     function dM(MM, rM) {
+       return MM - Math.floor(MM / rM) * rM
```

#### 158. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7694-L7701` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L678) · [Before (L7694-L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L7694-L7701)

```diff
-       try {
-         const wG = GG.next();
-         wG.done ? bG(wG) : wG.value ? wG.value.then((() => {
-           wG.value = void 0, bG(wG)
-         }), ZG) : bG(wG)
-       } catch (wG) {
-         ZG(wG)
-       }
+       return (MM - rM) / (iM - rM)
```

#### 159. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7704-L7711` → after: `L681-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L681-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L681-L682) · [Before (L7704-L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L7704-L7711)

```diff
-     function SG() {
-       let GG, bG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
-       return (ZG, SG, LG) => {
-         const yG = performance.now();
-         void 0 === GG || yG - GG > bG ? (GG = yG, setTimeout((() => {
-           wG(ZG, SG, LG)
-         }), 0)) : wG(ZG, SG, LG)
-       }
+     function lM(MM, rM, iM) {
+       return MM * (iM - rM) + rM
```

#### 160. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7714-L7724` → after: `L685-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L685-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L685-L687) · [Before (L7714-L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L7714-L7724)

```diff
-     function LG(GG, bG, ZG, wG, SG) {
-       const LG = () => {
-         let yG;
-         const kG = GG => {
-           GG.done ? ZG(GG.value) : void 0 === yG ? yG = !0 : LG()
-         };
-         do {
-           yG = void 0, SG && SG.aborted ? wG(new Error("Aborted")) : bG(GG, kG, wG), void 0 === yG && (yG = !1)
-         } while (yG)
-       };
-       LG()
+     function EM(MM, rM) {
+       let iM = dM(rM - MM, 360);
+       return iM > 180 && (iM -= 360), iM
```

#### 161. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7729-L7731` → after: `L708-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L708-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L708-L716) · [Before (L7729-L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L7729-L7731)

```diff
-       return LG(GG, wG, (GG => ZG = GG), (GG => {
-         throw GG
-       }), bG), ZG
+       return SM = -iM < OM && OM < iM ? rM : CM(MM, rM = MM + OM, iM), SM
+     }
+ 
+     function bM(MM, rM, iM) {
+       return (MM - rM) / (iM - rM)
+     }
+ 
+     function wM(MM, rM, iM) {
+       return (iM - rM) * MM + rM
```

#### 162. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7733-L7736` → after: `L718-L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L718-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L718-L758) · [Before (L7733-L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L7733-L7736)

```diff
-     async function kG(GG, bG, ZG) {
-       return await new Promise(((wG, SG) => {
-         LG(GG, bG, wG, SG, ZG)
-       }))
+ 
+     function tM(MM, rM) {
+       const iM = MM % rM;
+       return 0 === iM ? rM : tM(rM, iM)
+     }
+     iM.r(rM), iM.d(rM, {
+       Clamp: () => mM,
+       DeltaAngle: () => EM,
+       Denormalize: () => lM,
+       ExtractAsInt: () => OM,
+       Hermite: () => zM,
+       Hermite1stDerivative: () => LM,
+       HighestCommonFactor: () => tM,
+       ILog2: () => JM,
+       InverseLerp: () => QM,
+       Lerp: () => PM,
+ ... (25 more added lines; see GitHub link above)
```

#### 163. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7740-L7741` → after: `L768-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L768-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L768-L784) · [Before (L7740-L7741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L7740-L7741)

```diff
-       return function() {
-         return yG(GG(...arguments), bG)
+       const iM = jM.map((iM => function(MM, rM, iM) {
+         const OM = MM[rM];
+         if ("function" !== typeof OM) return null;
+         const SM = function() {
+           const OM = MM.length,
+             jM = SM.previous.apply(MM, arguments);
+           return iM(rM, OM), jM
+         };
+         return OM.next = SM, SM.previous = OM, MM[rM] = SM, () => {
+           const iM = SM.previous;
+           if (!iM) return;
+           const OM = SM.next;
+           OM ? (iM.next = OM, OM.previous = iM) : (iM.next = void 0, MM[rM] = iM), SM.next = void 0, SM.previous = void 0
+         }
+       }(MM, iM, rM)));
+       return () => {
+ ... (1 more added lines; see GitHub link above)
```

#### 164. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L7745-L7749` → after: `L790-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L790-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/255.js#L790-L801) · [Before (L7745-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/255.js#L7745-L7749)

```diff
-       d: () => SG,
-       f: () => UG,
-       i: () => kG,
-       l: () => yG
-     })
+       b: () => jM,
+       e: () => SM
+     });
+     const OM = {};
+ 
+     function SM(MM, rM) {
+       OM[MM] = rM
+     }
+ 
+     function jM(MM) {
+       return OM[MM]
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/256.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/256.js` (49 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f)

#### 1. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4-L232` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L4) · [Before (L4-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L4-L232)

```diff
-   40524: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => kG,
-       g: () => hG,
-       h: () => YG,
-       l: () => UG
-     });
-     var wG = ZG(40313),
-       SG = ZG(39093),
-       LG = ZG(40447),
-       yG = ZG(40367);
-     class kG {
-       get Tu() {
-         return this._isDisposed
-       }
-       constructor(GG, bG, ZG) {
- ... (213 more removed lines; see GitHub link above)
+   38064: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L237-L238` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L10-L11) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L237-L238)

```diff
-       get underlyingResource() {
-         return null
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
```

#### 3. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L240-L241` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L13-L14) · [Before (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L240-L241)

```diff
-       constructor() {
-         this.references = 0, this.rp = 0, this.is32Bits = !1, this.uniqueId = wG._Counter++
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
```

#### 4. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L244` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L17) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L244)

```diff
-     wG._Counter = 0
+     SM.Instances = [], SM.OnEnginesDisposedObservable = new OM.d, SM._LastCreatedScene = null, SM.UseFallbackTexture = !0, SM.FallbackTexture = ""
```

#### 5. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L246` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L19) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L246)

```diff
-   40517: (GG, bG, ZG) => {
+   39705: (MM, rM, iM) => {
```

#### 6. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L248` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L21) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L248)

```diff
-       c: () => LG
+       b: () => jM
```

#### 7. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L250-L251` → after: `L23-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L23-L26) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L250-L251)

```diff
-     var wG = ZG(37439),
-       SG = ZG(40524);
+     var OM = iM(39711);
+     const SM = (MM, rM, iM) => MM ? MM.getClassName && "Mesh" === MM.getClassName() ? null : !MM.getClassName || "SubMesh" !== MM.getClassName() && "PhysicsBody" !== MM.getClassName() ? MM.clone ? MM.clone() : Array.isArray(MM) ? MM.slice() : iM && "object" === typeof MM ? {
+       ...MM
+     } : null : MM.clone(rM) : null;
```

#### 8. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L253-L287` → after: `L28-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L28-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L28-L56) · [Before (L253-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L253-L287)

```diff
-       constructor() {
-         this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this … [truncated]
-       }
-       getNormal() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!this.pickedMesh || bG && !this.pickedMesh.isVerticesDataPresent(SG.l.NormalKind)) return null;
-         let ZG, LG = this.pickedMesh.IwG();
-         0 === LG?.length && (LG = null);
-         const yG = wG.j.mK[0],
-           kG = wG.j.mK[1],
-           UG = wG.j.mK[2];
-         if (bG) {
-           const GG = this.pickedMesh.getVerticesData(SG.l.NormalKind);
-           let bG = LG ? wG.p.FromArrayToRef(GG, 3 * LG[3 * this.faceId], yG) : yG.fGG(GG[3 * this.faceId * 3], GG[3 * this.faceId * 3 + 1], GG[3 * this.faceId * 3 + 2]),
-             YG = LG ? wG.p.FromArrayToRef(GG, 3 * LG[3 * this.faceId + 1], kG) : kG.fGG(GG[3 * (3 * this.faceId + 1)], GG[3 * (3 * this.faceId + 1) + 1], GG[3 * (3 * this.faceId + 1) + 2]),
- ... (19 more removed lines; see GitHub link above)
+       static DeepCopy(MM, rM, iM, jM) {
+         let aM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const PM = function(MM) {
+           const rM = [];
+           do {
+             const iM = Object.getOwnPropertyNames(MM);
+             for (const MM of iM) - 1 === rM.indexOf(MM) && rM.push(MM)
+           } while (MM = Object.getPrototypeOf(MM));
+           return rM
+         }(MM);
+         for (const QM of PM) {
+           if ("_" === QM[0] && (!jM || -1 === jM.indexOf(QM))) continue;
+           if (QM.endsWith("Observable")) continue;
+           if (iM && -1 !== iM.indexOf(QM)) continue;
+           const PM = MM[QM],
+             zM = typeof PM;
+ ... (13 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L312-L318` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L62) · [Before (L312-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L312-L318)

```diff
-   40367: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => LG
-     });
-     var wG = ZG(40225);
-     let SG = !1;
- 
+   38885: (MM, rM, iM) => {
```

#### 10. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L320-L327` → after: `L64-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L64-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L64-L67) · [Before (L320-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L320-L327)

```diff
-       SG || (SG = !0, wG.ThinEngine.prototype.updateDynamicIndexBuffer = function(GG, bG) {
-         let ZG;
-         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(GG), ZG = GG.is32Bits ? bG instanceof Uint32Array ? bG : new Uint32Array(bG) : bG instanceof Uint16Array ? bG : new Uint16Array(bG), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, ZG, … [truncated]
-       }, wG.ThinEngine.prototype.updateDynamicVertexBuffer = function(GG, bG, ZG, wG) {
-         this.bindArrayBuffer(GG), void 0 === ZG && (ZG = 0);
-         const SG = bG.byteLength || bG.length;
-         void 0 === wG || wG >= SG && 0 === ZG ? bG instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZG, new Float32Array(bG)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZG, bG) : bG instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZG, new Floa … [truncated]
-       })
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (MM => {
+         const rM = 16 * Math.random() | 0;
+         return ("x" === MM ? rM : 3 & rM | 8).toString(16)
+       }))
```

#### 11. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L330` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L73) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L330)

```diff
-   40324: (GG, bG, ZG) => {
+   39711: (MM, rM, iM) => {
```

#### 12. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L332` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L75) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L332)

```diff
-       b: () => wG
+       e: () => OM
```

#### 13. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L335-L342` → after: `L78-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L78-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L78-L83) · [Before (L335-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L335-L342)

```diff
-       get underlyingResource() {
-         return this._webGLTexture
-       }
-       constructor() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           bG = arguments.length > 1 ? arguments[1] : void 0;
-         if (this._MSAARenderBuffers = null, this._context = bG, !GG && (GG = bG.createTexture(), !GG)) throw new Error("Unable to create webGL texture");
-         this.set(GG)
+       static _CheckLimit(MM, rM) {
+         let iM = OM._LogLimitOutputs[MM];
+         return iM ? iM.current++ : (iM = {
+           limit: rM,
+           current: 1
+         }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
```

#### 14. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L344-L346` → after: `L85-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L85-L90) · [Before (L344-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L344-L346)

```diff
-       setUsage() {}
-       set(GG) {
-         this._webGLTexture = GG
+       static _GenerateLimitMessage(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const iM = OM._LogLimitOutputs[MM];
+         if (!iM || !OM.MessageLimitReached) return;
+         const SM = this._Levels[rM];
+         iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
```

#### 15. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L348-L349` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L92-L93) · [Before (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L348-L349)

```diff
-       reset() {
-         this._webGLTexture = null, this._MSAARenderBuffers = null
+       static _AddLogEntry(MM) {
+         OM._LogCache = MM + OM._LogCache, OM.OnNewCacheEntry && OM.OnNewCacheEntry(MM)
```

#### 16. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L351-L352` → after: `L95-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L95-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L95-L98) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L351-L352)

```diff
-       addMSAARenderBuffer(GG) {
-         this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(GG)
+       static _FormatMessage(MM) {
+         const rM = MM => MM < 10 ? "0" + MM : "" + MM,
+           iM = new Date;
+         return "[" + rM(iM.getHours()) + ":" + rM(iM.getMinutes()) + ":" + rM(iM.getSeconds()) + "]: " + MM
```

#### 17. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L354-L367` → after: `L100-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L100-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L100-L142) · [Before (L354-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L354-L367)

```diff
-       releaseMSAARenderBuffers() {
-         if (this._MSAARenderBuffers) {
-           for (const GG of this._MSAARenderBuffers) this._context.deleteRenderbuffer(GG);
-           this._MSAARenderBuffers = null
-         }
-       }
-       getMSAARenderBuffer() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         return this._MSAARenderBuffers?.[GG] ?? null
-       }
-       release() {
-         this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
-       }
-     }
+       static _LogDisabled(MM, rM) {}
+       static _LogEnabled() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           rM = arguments.length > 1 ? arguments[1] : void 0,
+           iM = arguments.length > 2 ? arguments[2] : void 0;
+         const SM = Array.isArray(rM) ? rM[0] : rM;
+         if (void 0 !== iM && !OM._CheckLimit(SM, iM)) return;
+         const jM = OM._FormatMessage(SM),
+           aM = this._Levels[MM],
+           PM = Array.isArray(rM) ? rM.slice(1) : [];
+         aM.logFunc && aM.logFunc("BJS - " + jM, ...PM);
+         const nM = `<div style='color:${aM.color}'>${jM}</div><br>`;
+         OM._AddLogEntry(nM), OM._GenerateLimitMessage(SM, MM)
+       }
+       static get LogCache() {
+         return OM._LogCache
+ ... (27 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L369` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L144) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L369)

```diff
-   40280: (GG, bG, ZG) => {
+   38068: (MM, rM, iM) => {
```

#### 19. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L371` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L146) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L371)

```diff
-       c: () => rG
+       d: () => aM
```

#### 20. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L373-L441` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L148) · [Before (L373-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L373-L441)

```diff
-     var wG = ZG(37465),
-       SG = ZG(40228),
-       LG = ZG(37463),
-       yG = ZG(39093),
-       kG = ZG(37456),
-       UG = ZG(40285);
-     class YG {
-       constructor() {
-         let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, GG && this.reset()
-       }
-       get isDirty() {
-         return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
-       }
-       get zOffset() {
-         return this._zOffset
- ... (53 more removed lines; see GitHub link above)
+     const OM = "undefined" !== typeof WeakRef;
```

#### 21. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L443-L523` → after: `L150-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L150-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L150-L154) · [Before (L443-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L443-L523)

```diff
-       get isDirty() {
-         return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
-       }
-       get func() {
-         return this._func
-       }
-       set func(GG) {
-         this._func !== GG && (this._func = GG, this._isStencilFuncDirty = !0)
-       }
-       get backFunc() {
-         return this._func
-       }
-       set backFunc(GG) {
-         this._backFunc !== GG && (this._backFunc = GG, this._isStencilFuncDirty = !0)
-       }
-       get funcRef() {
- ... (65 more removed lines; see GitHub link above)
+       constructor(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           iM = arguments.length > 2 ? arguments[2] : void 0,
+           OM = arguments.length > 3 ? arguments[3] : void 0;
+         this.initialize(MM, rM, iM, OM)
```

#### 22. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L525-L528` → after: `L156-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L156-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L156-L160) · [Before (L525-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L525-L528)

```diff
-       apply(GG) {
-         if (!GG) return;
-         const bG = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
-         this.enabled = bG ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = bG ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = bG ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = bG ? this.stencilMaterial. … [truncated]
+       initialize(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           iM = arguments.length > 2 ? arguments[2] : void 0,
+           OM = arguments.length > 3 ? arguments[3] : void 0;
+         return this.mask = MM, this.skipNextObservers = rM, this.target = iM, this.currentTarget = OM, this
```

#### 23. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L532-L608` → after: `L164-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L164-L166) · [Before (L532-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L532-L608)

```diff
-       constructor() {
-         this.reset()
-       }
-       reset() {
-         this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = pG.ALWAYS, this.opStencilFail = pG.KEEP, this.opDepthFail = pG.KEEP, this.opStencilDepthPass = pG.REPLACE, this.backFunc = pG.ALWAYS, this.backOpStencilFail = pG.KEEP, this.backOpDepthF … [truncated]
-       }
-       get stencilFunc() {
-         return this.func
-       }
-       set stencilFunc(GG) {
-         this.func = GG
-       }
-       get stencilBackFunc() {
-         return this.backFunc
-       }
-       set stencilBackFunc(GG) {
- ... (61 more removed lines; see GitHub link above)
+       constructor(MM, rM) {
+         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         this.callback = MM, this.mask = rM, this.scope = iM, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
```

#### 24. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L610-L623` → after: `L168-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L168-L170) · [Before (L610-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L610-L623)

```diff
-     }
-     pG.ALWAYS = 519, pG.KEEP = 7680, pG.REPLACE = 7681;
-     var fG = ZG(40290),
-       QG = ZG(40258),
-       KG = ZG(40210),
-       hG = ZG(40241),
-       dG = ZG(40252);
- 
-     function JG(GG, bG) {
-       if (bG) {
-         const {
-           requestAnimationFrame: ZG
-         } = bG;
-         if ("function" === typeof ZG) return ZG(GG)
+       remove() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         this._remove && this._remove(MM)
```

#### 25. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L634-L668` → after: `L174-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L174-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L174-L181) · [Before (L634-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L634-L668)

```diff
-       get frameId() {
-         return this._frameId
-       }
-       get isWebGPU() {
-         return this._isWebGPU
-       }
-       _getShaderProcessor(GG) {
-         return this._shaderProcessor
-       }
-       _resetAlphaMode() {
-         this._alphaMode.fill(-1), this._alphaEquation.fill(-1)
-       }
-       get shaderPlatformName() {
-         return this._shaderPlatformName
-       }
-       _clearEmptyResources() {
- ... (19 more removed lines; see GitHub link above)
+       static FromPromise(MM, rM) {
+         const iM = new aM;
+         return MM.then((MM => {
+           iM.notifyObservers(MM)
+         })).catch((MM => {
+           if (!rM) throw MM;
+           rM.notifyObservers(MM)
+         })), iM
```

#### 26. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L670-L671` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L183-L184) · [Before (L670-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L670-L671)

```diff
-       get stencilState() {
-         return this._stencilState
+       get observers() {
+         return this._observers
```

#### 27. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L673-L674` → after: `L186-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L186-L188) · [Before (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L673-L674)

```diff
-       get stencilStateComposer() {
-         return this._stencilStateComposer
+       constructor(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this.notifyIfTriggered = rM, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new SM(0), MM && (this._onObserverAdded = MM)
```

#### 28. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L676-L681` → after: `L190-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L190-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L190-L203) · [Before (L676-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L676-L681)

```diff
-       _getGlobalDefines(GG) {
-         if (GG) return this.isNDCHalfZRange ? GG.IS_NDC_HALF_ZRANGE = "" : delete GG.IS_NDC_HALF_ZRANGE, this.iwG ? GG.USE_REVERSE_DEPTHBUFFER = "" : delete GG.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? GG.USE_EXACT_SRGB_CONVERSIONS = "" : delete GG.USE_EXACT_SR … [truncated]
-         {
-           let GG = "";
-           return this.isNDCHalfZRange && (GG += "#define IS_NDC_HALF_ZRANGE"), this.iwG && (GG && (GG += "\n"), GG += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (GG && (GG += "\n"), GG += "#define USE_EXACT_SRGB_CONVERSIONS"), GG
-         }
+       add(MM) {
+         let rM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           iM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         if (!MM) return null;
+         const SM = new jM(MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
+         SM.unregisterOnNextCall = iM, rM ? this._observers.unshift(SM) : this._observers.push(SM), this._onObserverAdded && this._onObserverAdded(SM), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(SM, this._lastNotifiedValue);
+         const aM = OM ? new WeakRef(this) : {
+           deref: () => this
+         };
+         return SM._remove = function() {
+           let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           const rM = aM.deref();
+           rM && (MM ? rM.remove(SM) : rM._remove(SM))
+         }, SM
```

#### 29. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L683-L685` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L205-L206) · [Before (L683-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L683-L685)

```diff
-       _rebuildInternalTextures() {
-         const GG = this._internalTexturesCache.slice();
-         for (const bG of GG) bG._rebuild()
+       addOnce(MM) {
+         return this.add(MM, void 0, void 0, void 0, !0)
```

#### 30. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L687-L689` → after: `L208-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L208-L211) · [Before (L687-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L687-L689)

```diff
-       _rebuildRenderTargetWrappers() {
-         const GG = this._renderTargetWrapperCache.slice();
-         for (const bG of GG) bG.textures?.some((GG => 15 === GG.source)) || bG._rebuild()
+       remove(MM) {
+         if (!MM) return !1;
+         MM._remove = null;
+         return -1 !== this._observers.indexOf(MM) && (this._deferUnregister(MM), !0)
```

#### 31. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L691-L694` → after: `L213-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L213-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L213-L216) · [Before (L691-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L691-L694)

```diff
-       _rebuildEffects() {
-         for (const GG in this._compiledEffects) {
-           const bG = this._compiledEffects[GG];
-           bG._pipelineContext = null, bG._prepareEffect()
+       removeCallback(MM, rM) {
+         for (let iM = 0; iM < this._observers.length; iM++) {
+           const OM = this._observers[iM];
+           if (!OM._willBeUnregistered && (OM.callback === MM && (!rM || rM === OM.scope))) return this._deferUnregister(OM), !0
```

#### 32. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L720-L746` → after: `L220-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L220-L223) · [Before (L720-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L720-L746)

```diff
-       set snapshotRendering(GG) {}
-       get snapshotRenderingMode() {
-         return 0
-       }
-       set snapshotRenderingMode(GG) {}
-       getClassName() {
-         return "AbstractEngine"
-       }
-       get emptyTexture() {
-         return this._emptyTexture || (this._emptyTexture = this.createRawTexture(new Uint8Array(4), 1, 1, 5, !1, !1, 1)), this._emptyTexture
-       }
-       get emptyTexture3D() {
-         return this._emptyTexture3D || (this._emptyTexture3D = this.createRawTexture3D(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture3D
-       }
-       get emptyTexture2DArray() {
-         return this._emptyTexture2DArray || (this._emptyTexture2DArray = this.createRawTexture2DArray(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture2DArray
- ... (11 more removed lines; see GitHub link above)
+       _deferUnregister(MM) {
+         MM._willBeUnregistered || (this._numObserversMarkedAsDeleted++, MM.unregisterOnNextCall = !1, MM._willBeUnregistered = !0, setTimeout((() => {
+           this._remove(MM)
+         }), 0))
```

#### 33. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L748-L774` → after: `L225-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L225-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L225-L229) · [Before (L748-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L748-L774)

```diff
-       get activeRenderLoops() {
-         return this._activeRenderLoops
-       }
-       stopRenderLoop(GG) {
-         if (!GG) return this._activeRenderLoops.length = 0, void this._cancelFrame();
-         const bG = this._activeRenderLoops.indexOf(GG);
-         bG >= 0 && (this._activeRenderLoops.splice(bG, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
-       }
-       _cancelFrame() {
-         if (this.customAnimationFrameRequester) {
-           if (0 !== this._frameHandler) {
-             this._frameHandler = 0;
-             const {
-               cancelAnimationFrame: GG
-             } = this.customAnimationFrameRequester;
-             GG && GG(this.customAnimationFrameRequester.IK), delete this.customAnimationFrameRequester.IK
- ... (11 more removed lines; see GitHub link above)
+       _remove(MM) {
+         let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         if (!MM) return !1;
+         const iM = this._observers.indexOf(MM);
+         return -1 !== iM && (rM && this._numObserversMarkedAsDeleted--, this._observers.splice(iM, 1), !0)
```

#### 34. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L776-L777` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L231-L232) · [Before (L776-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L776-L777)

```diff
-       yE() {
-         this.onBeginFrameObservable.notifyObservers(this)
+       makeObserverTopPriority(MM) {
+         this._remove(MM, !1), this._observers.unshift(MM)
```

#### 35. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L779-L780` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L234-L235) · [Before (L779-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L779-L780)

```diff
-       kE() {
-         this._frameId++, this.onEndFrameObservable.notifyObservers(this)
+       makeObserverBottomPriority(MM) {
+         this._remove(MM, !1), this._observers.push(MM)
```

#### 36. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L782-L783` → after: `L237-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L237-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L237-L247) · [Before (L782-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L782-L783)

```diff
-       get maxFPS() {
-         return this._maxFPS
+       notifyObservers(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
+           iM = arguments.length > 2 ? arguments[2] : void 0,
+           OM = arguments.length > 3 ? arguments[3] : void 0,
+           SM = arguments.length > 4 ? arguments[4] : void 0;
+         if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = MM), !this._observers.length) return !0;
+         const jM = this._eventState;
+         jM.mask = rM, jM.target = iM, jM.currentTarget = OM, jM.skipNextObservers = !1, jM.lastReturnValue = MM, jM.userInfo = SM;
+         for (const aM of this._observers)
+           if (!aM._willBeUnregistered && (aM.mask & rM && (aM.unregisterOnNextCall && this._deferUnregister(aM), aM.scope ? jM.lastReturnValue = aM.callback.apply(aM.scope, [MM, jM]) : jM.lastReturnValue = aM.callback(MM, jM)), jM.skipNextObservers)) return !1;
+         return !0
```

#### 37. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L785-L786` → after: `L249-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L249-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L249-L253) · [Before (L785-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L785-L786)

```diff
-       set maxFPS(GG) {
-         this._maxFPS = GG, void 0 !== GG && (this._minFrameTime = GG <= 0 ? Number.MAX_VALUE : 1e3 / GG)
+       notifyObserver(MM, rM) {
+         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
+         if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = rM), MM._willBeUnregistered) return;
+         const OM = this._eventState;
+         OM.mask = iM, OM.skipNextObservers = !1, MM.unregisterOnNextCall && this._deferUnregister(MM), MM.callback(rM, OM)
```

#### 38. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L788-L791` → after: `L255-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L255-L256) · [Before (L788-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L788-L791)

```diff
-       _isOverFrameTime(GG) {
-         if (!GG || void 0 === this._maxFPS) return !1;
-         const bG = GG - this._lastFrameTime;
-         return this._lastFrameTime = GG, this._renderAccumulator += bG, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
+       hasObservers() {
+         return this._observers.length - this._numObserversMarkedAsDeleted > 0
```

#### 39. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L793-L796` → after: `L258-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L258-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L258-L261) · [Before (L793-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L793-L796)

```diff
-       _processFrame(GG) {
-         if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(GG)) {
-           let GG = !0;
-           (this.Tu || !this.renderEvenInBackground && this._windowIsBackground) && (GG = !1), GG && (this.yE(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.kE())
+       clear() {
+         for (; this._observers.length;) {
+           const MM = this._observers.pop();
+           MM && (MM._remove = null)
```

#### 40. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L799-L800` → after: `L265-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L265-L266) · [Before (L799-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L799-L800)

```diff
-       _renderLoop(GG) {
-         this._processFrame(GG), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
+       cleanLastNotifiedState() {
+         this._hasNotified = !1, this._lastNotifiedValue = void 0
```

#### 41. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L802-L805` → after: `L268-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L268-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L268-L270) · [Before (L802-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L802-L805)

```diff
-       _renderFrame() {
-         for (let GG = 0; GG < this._activeRenderLoops.length; GG++) {
-           (0, this._activeRenderLoops[GG])()
-         }
+       clone() {
+         const MM = new aM;
+         return MM._observers = this._observers.slice(0), MM
```

#### 42. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L807` → after: `L272-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L272-L275) · [Before (L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L807)

```diff
-       _renderViews() {
+       hasSpecificMask() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
+         for (const rM of this._observers)
+           if (rM.mask & MM || rM.mask === MM) return !0;
```

#### 43. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1153-L1155` → after: `L280-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L280-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L280-L285) · [Before (L1153-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L1153-L1155)

```diff
-   40237: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => wG
+   63884: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       AsyncLoop: () => OM.c,
+       RegisterTools: () => OM.d,
+       Tools: () => OM.e,
+       className: () => OM.g
```

#### 44. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1157-L1168` → after: `L287-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L287-L288) · [Before (L1157-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L1157-L1168)

```diff
-     class wG {
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wG.ShadersRepository : wG.ShadersRepositoryWGSL
-       }
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wG.ShadersStore : wG.ShadersStoreWGSL
-       }
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wG.IncludesShadersStore : wG.IncludesShadersStoreWGSL
-       }
-     }
-     wG.ShadersRepository = "src/Shaders/", wG.ShadersStore = {}, wG.IncludesShadersStore = {}, wG.ShadersRepositoryWGSL = "src/ShadersWGSL/", wG.ShadersStoreWGSL = {}, wG.IncludesShadersStoreWGSL = {}
+     var OM = iM(41205);
+     (0, OM.d)()
```

#### 45. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1170` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L290) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L1170)

```diff
-   40243: (GG, bG, ZG) => {
+   38085: (MM, rM, iM) => {
```

#### 46. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1172-L1182` → after: `L292-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L292-L293) · [Before (L1172-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L1172-L1182)

```diff
-       d: () => fG,
-       g: () => zG,
-       k: () => KG,
-       o: () => QG,
-       q: () => hG,
-       u: () => rG,
-       w: () => pG,
-       z: () => YG,
-       C: () => VG,
-       F: () => UG,
-       G: () => kG
+       b: () => jM,
+       e: () => SM
```

#### 47. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1184-L1477` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L295) · [Before (L1184-L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L1184-L1477)

```diff
-     class wG {
-       constructor() {
-         this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
-       }
-       get isAsync() {
-         return this.isParallelCompiled
-       }
-       get isReady() {
-         return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
-       }
-       _handlesSpectorRebuildCallback(GG) {
-         GG && this.program && GG(this.program)
-       }
-       setEngine(GG) {
-         this.engine = GG
-       }
- ... (278 more removed lines; see GitHub link above)
+     const OM = {};
```

#### 48. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1480` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L298) · [Before (L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L1480)

```diff
-       bG.useProgram(GG)
+       OM[MM] = rM
```

#### 49. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L3455-L9690` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/256.js#L302) · [Before (L3455-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/256.js#L3455-L9690)

```diff
-       GG.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
-     }
-     ZG.d(bG, {
-       d: () => wG
-     })
-   },
-   40296: (GG, bG, ZG) => {
-     function wG(GG) {
-       return void 0 === GG.getPipelineContext
-     }
-     ZG.d(bG, {
-       e: () => wG
-     })
-   },
-   40697: (GG, bG, ZG) => {
-     ZG.d(bG, {
- ... (6220 more removed lines; see GitHub link above)
+       return OM[MM]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/257.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/257.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558)

#### 1. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/257.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/257.js#L2)

```diff
- export const ids = [257, 358];
+ export const ids = [257];
```

#### 2. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/257.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/257.js#L4)

```diff
-   40237: (GG, bG, ZG) => {
+   38116: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/257.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/257.js#L6)

```diff
-       e: () => wG
+       d: () => PM,
+       g: () => aM,
+       i: () => SM
```

#### 4. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9-L19` → after: `L14-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L14-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/257.js#L14-L70) · [Before (L9-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/257.js#L9-L19)

```diff
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wG.ShadersRepository : wG.ShadersRepositoryWGSL
-       }
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wG.ShadersStore : wG.ShadersStoreWGSL
-       }
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wG.IncludesShadersStore : wG.IncludesShadersStoreWGSL
-       }
-     }
-     wG.ShadersRepository = "src/Shaders/", wG.ShadersStore = {}, wG.IncludesShadersStore = {}, wG.ShadersRepositoryWGSL = "src/ShadersWGSL/", wG.ShadersStoreWGSL = {}, wG.IncludesShadersStoreWGSL = {}
+       constructor(MM) {
+         this.boneCount = MM, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * MM), this.position = new Float64Array(3 * MM), this.scale = new Float64Array(3 * MM).fill(1), this.touched = new Uint8Arra … [truncated]
+       }
+       clampToLimits() {
+         for (let MM = 0; MM < this.boneCount; MM++)
+           if (0 !== this.touched[MM])
+             for (let rM = 3 * MM; rM < 3 * MM + 3; rM++) {
+               const MM = this.rotation[rM],
+                 iM = this.position[rM],
+                 aM = this.scale[rM];
+               MM >= -36e4 && MM <= jM || (this.rotation[rM] = nM(MM, jM)), iM >= -1024 && iM <= OM || (this.position[rM] = nM(iM, OM)), aM >= -SM && aM <= SM || (this.scale[rM] = nM(aM, SM, 1))
+             }
+       }
+       reset() {
+         for (let MM = 0; MM < this.boneCount; MM++)
+           if (0 !== this.touched[MM]) {
+ ... (41 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L21-L23` → after: `L72-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L72-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/257.js#L72-L75) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/257.js#L21-L23)

```diff
-   61824: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       postprocessVertexShader: () => yG
+   38111: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => nM,
+       f: () => PM
```

#### 6. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L25-L32` → after: `L77-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L77-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/257.js#L77-L390) · [Before (L25-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/257.js#L25-L32)

```diff
-     var wG = ZG(40237);
-     const SG = "postprocessVertexShader",
-       LG = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
-     wG.e.ShadersStore[SG] || (wG.e.ShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
+     var OM = iM(38097),
+       SM = iM(332),
+       jM = iM(2e3),
+       aM = iM(38116);
+ 
+     function PM(MM) {
+       if ("yS" in MM) return wM.createAnimationScript(MM);
+       return new zM(MM).createAnimationScript()
+     }
+ 
+     function nM(MM, rM, iM, SM) {
+       const jM = MM.yS <= 0 ? 1 : rM + iM * Math.max(0, SM) / MM.yS;
+       return MM.lS === OM.h.LoopOnLastFrame ? jM % 1 : MM.lS === OM.h.NoLoop && jM >= 1 ? null : Math.min(1, jM)
+     }
+     class QM {
+       createAnimationScript(MM) {
+ ... (298 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/258.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/258.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d)

#### 1. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/258.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/258.js#L4)

```diff
-   40447: (GG, bG, ZG) => {
+   38167: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L6-L12` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/258.js#L6-L7) · [Before (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/258.js#L6-L12)

```diff
-       e: () => fG,
-       f: () => pG,
-       g: () => UG,
-       j: () => QG,
-       k: () => YG,
-       l: () => kG,
-       m: () => VG
+       Color3: () => OM.d,
+       d: () => OM.h
```

#### 3. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L14-L1508` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/258.js#L9-L10) · [Before (L14-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/258.js#L14-L1508)

```diff
-     var wG = ZG(39093),
-       SG = ZG(40451);
- 
-     function LG(GG, bG, ZG, wG) {
-       switch (bG) {
-         case 5120: {
-           let bG = GG.getInt8(ZG);
-           return wG && (bG = Math.max(bG / 127, -1)), bG
-         }
-         case 5121: {
-           let bG = GG.getUint8(ZG);
-           return wG && (bG /= 255), bG
-         }
-         case 5122: {
-           let bG = GG.getInt16(ZG, !0);
-           return wG && (bG = Math.max(bG / 32767, -1)), bG
- ... (1479 more removed lines; see GitHub link above)
+     var OM = iM(38173);
+     (0, OM.i)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/259.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/259.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b)

#### 1. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L4` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/259.js#L4-L40) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/259.js#L4)

```diff
-   40480: (GG, bG, ZG) => {
+   63918: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       DEVTOOLS_SHADERS: () => jM,
+       registerDevtoolsShader: () => aM
+     });
+     var OM = iM(40964),
+       SM = iM(38188);
+     const jM = {
+       devtoolsNormal: function(MM) {
+         return {
+           vertex: `\n\t\t\t${(0,SM.e)(MM,"position","vec3")}\n\t\t\t${(0,SM.e)(MM,"normal","vec3")}\n\t\t\t${(0,SM.zb)(MM,"worldViewProjection","mat4")}\n\t\t\t${(0,SM.zb)(MM,"world","mat4")}\n\t\t\t${(0,SM.Fb)(MM,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,SM.Gb)(MM,`\n\t\t\t\t${ … [truncated]
+           fragment: `\n\t\t\t${(0,SM.Fb)(MM,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,SM.R)(MM,`\n\t\t\t\t\n\t\t\t\t${(0,SM.B)(MM,"vec3","normalColor",`abs(${(0,SM.U)(MM,"vNormal")})`)}\n\t\t\t\t${(0,SM.M)(MM)} = ${(0,SM.n)(MM,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+         }
+       },
+       devtoolsWhite: function(MM) {
+         return {
+ ... (21 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L6` → after: `L42-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/259.js#L42-L78) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/259.js#L6)

```diff
-       c: () => LG
+       A: () => LM,
+       B: () => zM,
+       Db: () => RM,
+       E: () => bM,
+       Fb: () => dM,
+       G: () => WM,
+       Gb: () => EM,
+       Hb: () => tM,
+       K: () => jM,
+       Kb: () => gM,
+       M: () => kM,
+       Q: () => DM,
+       R: () => UM,
+       U: () => uM,
+       V: () => pM,
+       X: () => fM,
+ ... (21 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L8-L9` → after: `L80-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L80-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/259.js#L80-L268) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/259.js#L8-L9)

```diff
-     var wG = ZG(39093),
-       SG = ZG(37484);
+     const OM = {
+       GLSL: 0,
+       WGSL: 1
+     };
+ 
+     function SM(MM) {
+       return MM === OM.WGSL
+     }
+ 
+     function jM(MM, rM, iM) {
+       return SM(MM) ? iM : rM
+     }
+     const aM = new Map([
+       ["int", "i32"],
+       ["float", "f32"],
+       ["vec2", "vec2f"],
+ ... (173 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L11-L613` → after: `L270-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L270-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/259.js#L270-L280) · [Before (L11-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/259.js#L11-L613)

```diff
-       static Instantiate(GG) {
-         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[GG]) return this.RegisteredExternalClasses[GG];
-         const bG = (0, SG.e)(GG);
-         if (bG) return bG;
-         wG.c.Warn(GG + " not found, you may have missed an import.");
-         const ZG = GG.split(".");
-         let LG = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
-         for (let wG = 0, SG = ZG.length; wG < SG; wG++) LG = LG[ZG[wG]];
-         return "function" !== typeof LG ? null : LG
-       }
-     }
-     LG.RegisteredExternalClasses = {}
-   },
-   40285: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => SG
- ... (587 more removed lines; see GitHub link above)
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.ShadersRepository : OM.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.ShadersStore : OM.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.IncludesShadersStore : OM.IncludesShadersStoreWGSL
+       }
+     }
+     OM.ShadersRepository = "src/Shaders/", OM.ShadersStore = {}, OM.IncludesShadersStore = {}, OM.ShadersRepositoryWGSL = "src/ShadersWGSL/", OM.ShadersStoreWGSL = {}, OM.IncludesShadersStoreWGSL = {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/260.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/260.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073)

#### 1. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L4)

```diff
-   40805: (GG, bG, ZG) => {
+   42174: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L6)

```diff
-       c: () => wG
+       noaDevTools: () => LM
```

#### 3. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L8-L74` → after: `L8-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L8-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L8-L37) · [Before (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L8-L74)

```diff
-     let wG = !1
-   },
-   40387: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => KG
-     });
-     var wG = ZG(40393),
-       SG = ZG(40398),
-       LG = ZG(37465),
-       yG = ZG(37439),
-       kG = ZG(37463),
-       UG = ZG(38311),
-       YG = ZG(40407);
-     class VG {
-       get wrapU() {
-         return this._wrapU
- ... (51 more removed lines; see GitHub link above)
+     var OM = iM(38423),
+       SM = iM(38404),
+       jM = iM(3063),
+       aM = iM(1830),
+       PM = iM(42067);
+ 
+     function nM(MM) {
+       const {
+         CL: rM
+       } = MM, iM = rM.engine, OM = {
+         width: iM.getRenderWidth(),
+         height: iM.getRenderHeight()
+       };
+       return {
+         canvas: iM.getRenderingCanvas(),
+         maxTextureSize: iM.getCaps().maxTextureSize,
+ ... (14 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L81-L82` → after: `L40-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L40-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L40-L233) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L81-L82)

```diff
-       get samplingMode() {
-         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
+     }
+     var QM = iM(34920);
+ 
+     function zM(MM, rM) {
+       let {
+         width: QM,
+         height: zM,
+         colouring: LM
+       } = rM;
+       const mM = "normals" === LM,
+         HM = "depth" === LM;
+       return new Promise((rM => {
+         try {
+           const hM = (0, jM.f)();
+           if (hM.CL.MJ) return "screenshot" !== MM || null !== LM ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void rM()) : void(0, PM.h)(nM(hM), QM, zM).finally(rM);
+           const JM = hM.CL.engine,
+ ... (178 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L84-L86` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L235-L236) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L84-L86)

```diff
-       updateSamplingMode(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this._texture && this._engine && this._engine.updateTextureSamplingMode(GG, this._texture, this._texture.generateMipMaps && bG)
+       downloadScene(MM, rM) {
+         return zM(MM, rM)
```

#### 6. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L88-L89` → after: `L238-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L238-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L238-L242) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L88-L89)

```diff
-       releaseInternalTexture() {
-         this._texture && (this._texture.dispose(), this._texture = null)
+       async setAmbientLightIntensity(MM) {
+         const {
+           Color3: rM
+         } = await Promise.all([iM.e(255), iM.e(258)]).then((() => iM(38167)));
+         (0, jM.f)().CL.Hk().ambientColor = rM.FromArray([MM, MM, MM])
```

#### 7. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L91-L92` → after: `L244-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L244-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L244-L247) · [Before (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L91-L92)

```diff
-       dispose() {
-         this._texture && (this.releaseInternalTexture(), this._engine = null)
+       capturePhoto(MM, rM, iM) {
+         return function(MM, rM, iM, OM) {
+           return (0, PM.d)(nM(MM), rM, iM, OM)
+         }((0, jM.f)(), MM, rM, iM)
```

#### 8. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L95-L320` → after: `L250-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L250-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L250-L273) · [Before (L95-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L95-L320)

```diff
-     var pG, fG = ZG(40416),
-       QG = ZG(40258);
-     let KG = (() => {
-       var GG;
-       let bG, ZG, YG, pG, QG, KG, hG, dG, JG, rG, zG, EG, oG, XG, uG, iG, CG, WG, mG, IG, FG, vG, aG, cG, lG, jG = VG,
-         PG = [],
-         MG = [],
-         AG = [],
-         sG = [],
-         qG = [],
-         nG = [],
-         gG = [],
-         eG = [],
-         RG = [],
-         TG = [],
-         HG = [],
- ... (210 more removed lines; see GitHub link above)
+   },
+   42067: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => PM,
+       h: () => nM
+     });
+     var OM = iM(1845);
+     const SM = 33177600,
+       jM = 3e4;
+     let aM = !1;
+ 
+     function PM(MM, rM, iM) {
+       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const {
+         scale: PM = 1,
+         type: nM = "image/png",
+ ... (8 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L322` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L275) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L322)

```diff
-             return this._texture.isCube || this._texture.is2DArray ? YG._readTexturePixels(this._texture, kG, UG, GG, bG, ZG, wG, SG, LG, yG) : YG._readTexturePixels(this._texture, kG, UG, -1, bG, ZG, wG, SG, LG, yG)
+             MM.restoreSize()
```

#### 10. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L324` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L277) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L324)

```diff
-             return null
+             console.error("A screenshot couldn't size the canvas back", iM)
```

#### 11. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L326-L339` → after: `L279-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L279-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L279-L304) · [Before (L326-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L326-L339)

```diff
-         }
-         _readPixelsSync() {
-           let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-             bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-             ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-             wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
-             SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-           if (!this._texture) return null;
-           const LG = this.getSize();
-           let yG = LG.width,
-             kG = LG.height;
-           const UG = this._getEngine();
-           if (!UG) return null;
-           0 != bG && (yG /= Math.pow(2, bG), kG /= Math.pow(2, bG), yG = Math.round(yG), kG = Math.round(kG));
+         };
+         LM = setTimeout((() => {
+           hM(), zM(new Error("No frame was drawn to capture"))
+         }), jM);
+         try {
+           const OM = function(MM, rM, iM) {
+             const OM = Math.max(1, MM),
+               jM = Math.max(1, rM),
+               aM = Math.min(1, iM / Math.max(OM, jM), Math.sqrt(SM / (OM * jM)));
+             return {
+               width: Math.max(1, Math.floor(OM * aM)),
+               height: Math.max(1, Math.floor(jM * aM))
+             }
+           }(rM, iM, MM.maxTextureSize);
+           MM.resize(OM.width, OM.height, PM * OM.width / Math.max(1, rM))
+         } catch (JM) {
+ ... (10 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L341` → after: `L306-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L306-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L306-L311) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L341)

```diff
-             return this._texture.isCube ? UG._readTexturePixelsSync(this._texture, yG, kG, GG, bG, ZG, wG, SG) : UG._readTexturePixelsSync(this._texture, yG, kG, -1, bG, ZG, wG, SG)
+             rM.toBlob((MM => {
+               MM ? OM({
+                 blob: MM,
+                 ...iM
+               }) : zM(new Error("The canvas gave no image"))
+             }), nM, QM)
```

#### 13. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L343` → after: `L313-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L313-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L313-L315) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L343)

```diff
-             return null
+             zM(JM)
+           } finally {
+             hM()
```

#### 14. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L346-L361` → after: `L353-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L353-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L353-L407) · [Before (L346-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L346-L361)

```diff
-         get _lodTextureHigh() {
-           return this._texture ? this._texture._lodTextureHigh : null
-         }
-         get _lodTextureMid() {
-           return this._texture ? this._texture._lodTextureMid : null
-         }
-         get _lodTextureLow() {
-           return this._texture ? this._texture._lodTextureLow : null
-         }
-         dispose() {
-           if (this._scene) {
-             this._scene.stopAnimation && this._scene.stopAnimation(this), this._scene.removePendingData(this);
-             const GG = this._scene.textures.indexOf(this);
-             if (GG >= 0 && this._scene.textures.splice(GG, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
-               const GG = this._parentContainer.textures.indexOf(this);
-               GG > -1 && this._parentContainer.textures.splice(GG, 1), this._parentContainer = null
+       } else jM = Math.max(0, jM - 1)
+     }
+ 
+     function nM(MM, rM, iM) {
+       let SM = -1,
+         jM = 0;
+       for (let aM = 0; aM < OM.g; aM++) {
+         const iM = MM[aM],
+           PM = MM[aM + 1];
+         PM > iM && rM & 1 << OM.c[aM] && (SM < 0 && (SM = iM), jM = PM)
+       }
+       return SM < 0 ? (iM[0] = 0, iM[1] = 0, 0) : (iM[0] = SM, iM[1] = jM - SM, jM - SM)
+     }
+     class QM {
+       constructor(MM, rM) {
+         this.HL = MM, this.engine = rM, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
+ ... (39 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L364-L387` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L410) · [Before (L364-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L364-L387)

```diff
-           this.Gl.notifyObservers(this), this.Gl.clear(), this.metadata = null, super.dispose()
-         }
-         serialize() {
-           let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           if (!this.name && !GG) return null;
-           const bG = fG.b.Serialize(this);
-           return fG.b.AppendSerializedAnimations(this, bG), bG
-         }
-         static WhenAllReady(GG, bG) {
-           let ZG = GG.length;
-           if (0 !== ZG)
-             for (let wG = 0; wG < GG.length; wG++) {
-               const SG = GG[wG];
-               if (SG.isReady()) 0 === --ZG && bG();
-               else {
-                 const GG = SG.onLoadObservable;
- ... (8 more removed lines; see GitHub link above)
+           rM && 0 === MM._noaFaceCount || (JM[yM++] = MM)
```

#### 16. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L389-L694` → after: `L412-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L412-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L412-L414) · [Before (L389-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L389-L694)

```diff
-       }, (() => {
-         const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(jG[Symbol.metadata] ?? null) : void 0;
-         bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], YG = [(0, SG.Q)()], pG = [(0, SG.Q)()], QG = [(0, SG.Q)("hasAlpha")], KG = [(0, SG.Q)("getAlphaFromRGB")], hG = [(0, SG.Q)()], dG = [(0, SG.Q)("coordinatesIndex")], JG = [(0, SG.Q)()], rG = [(0, SG.Q)("coordinatesMode")], zG = [(0,  … [truncated]
-           kind: "getter",
-           name: "wrapU",
-           static: !1,
-           private: !1,
-           access: {
-             has: GG => "wrapU" in GG,
-             get: GG => GG.wrapU
-           },
-           metadata: LG
-         }, null, PG), (0, wG.k)(GG, null, EG, {
-           kind: "getter",
-           name: "wrapV",
-           static: !1,
- ... (290 more removed lines; see GitHub link above)
+         MM.length = yM
+       }
+     }
```

#### 17. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L696` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L416) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L696)

```diff
-   40857: (GG, bG, ZG) => {
+   38404: (MM, rM, iM) => {
```

#### 18. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L699` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L419) · [Before (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L699)

```diff
-       d: () => zG
+       e: () => PM
```

#### 19. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L701-L711` → after: `L421-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L421-L423) · [Before (L701-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L701-L711)

```diff
-     var wG = ZG(40393),
-       SG = ZG(40398),
-       LG = ZG(37465),
-       yG = ZG(37439),
-       kG = ZG(40387),
-       UG = ZG(37484),
-       YG = ZG(40258),
-       VG = ZG(40271),
-       pG = ZG(40480),
-       fG = ZG(38175),
-       QG = ZG(40443);
+     const OM = new WeakSet;
+     let SM = 0;
+     const jM = new Set;
```

#### 20. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L714-L737` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L426) · [Before (L714-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L714-L737)

```diff
-       let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const wG = bG.width,
-         SG = bG.height;
-       if (GG instanceof Float32Array) {
-         let bG = GG.byteLength / GG.BYTES_PER_ELEMENT;
-         const ZG = new Uint8Array(bG);
-         for (; --bG >= 0;) {
-           let wG = GG[bG];
-           wG < 0 ? wG = 0 : wG > 1 && (wG = 1), ZG[bG] = 255 * wG
-         }
-         GG = ZG
-       }
-       const LG = document.createElement("canvas");
-       LG.width = wG, LG.height = SG;
-       const yG = LG.getContext("2d");
-       if (!yG) return null;
- ... (8 more removed lines; see GitHub link above)
+       MM._data = rM
```

#### 21. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L741-L746` → after: `L430-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L430-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L430-L431) · [Before (L741-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L741-L746)

```diff
-       let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const wG = GG.getInternalTexture();
-       if (!wG) return null;
-       const SG = GG._readPixelsSync(bG, ZG);
-       return SG ? KG(SG, GG.getSize(), wG.invertY) : null
+       var rM, iM;
+       (null !== (rM = null === (iM = MM.getBuffer()) || void 0 === iM ? void 0 : iM.vL) && void 0 !== rM ? rM : 0) > 0 && (OM.add(MM), 0 === SM ? aM(MM, null) : jM.add(MM))
```

#### 22. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L748-L958` → after: `L433-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L433-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L433-L443) · [Before (L748-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L748-L958)

```diff
-     async function dG(GG) {
-       let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const wG = GG.getInternalTexture();
-       if (!wG) return null;
-       const SG = await GG.readPixels(bG, ZG);
-       return SG ? KG(SG, GG.getSize(), wG.invertY) : null
-     }
-     var JG = ZG(40805),
-       rG = ZG(40416);
-     let zG = (() => {
-         var GG;
-         let bG, ZG, KG, zG, EG, oG, XG, uG, iG, CG, WG, mG, IG, FG = kG.b,
-           vG = [],
-           aG = [],
-           cG = [],
- ... (195 more removed lines; see GitHub link above)
+ 
+     function nM(MM) {
+       SM++;
+       for (const iM of function(MM) {
+           const rM = new Set;
+           for (const SM of MM) {
+             const MM = SM.geometry;
+             for (const SM of Object.values(null !== (iM = null === MM || void 0 === MM ? void 0 : MM.getVertexBuffers()) && void 0 !== iM ? iM : {})) {
+               var iM;
+               const MM = SM.getWrapperBuffer();
+               OM.has(MM) && rM.add(MM)
```

#### 23. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1030-L1228` → after: `L446-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L446-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L446-L455) · [Before (L1030-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L1030-L1228)

```diff
-           static CreateFromBase64String(bG, ZG, wG, SG, LG) {
-             let yG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : GG.TRILINEAR_SAMPLINGMODE;
-             return new GG("data:" + ZG, wG, SG, LG, yG, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, bG, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0 … [truncated]
-           }
-           static LoadFromDataString(bG, ZG, wG) {
-             let SG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               LG = arguments.length > 4 ? arguments[4] : void 0,
-               yG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-               kG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : GG.TRILINEAR_SAMPLINGMODE,
-               UG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               YG = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
-               VG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
-               pG = arguments.length > 10 ? arguments[10] : void 0,
-               fG = arguments.length > 11 ? arguments[11] : void 0;
-             return "data:" !== bG.substring(0, 5) && (bG = "data:" + bG), new GG(bG, wG, LG, yG, kG, UG, YG, ZG, SG, VG, void 0, void 0, pG, fG)
-           }
- ... (183 more removed lines; see GitHub link above)
+           return rM
+         }(MM)) iM.getData() || QM(iM), jM.add(iM);
+       let rM = !0;
+       return () => {
+         if (rM && (rM = !1, SM--, 0 === SM)) {
+           for (const MM of jM) aM(MM, null);
+           jM.clear()
+         }
+       }
+     }
```

#### 24. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1230-L1231` → after: `L457-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L457-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L457-L462) · [Before (L1230-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L1230-L1231)

```diff
-     function oG() {
-       EG || (EG = !0, (0, UG.i)("BABYLON.Texture", zG), rG.b._TextureParser = zG.Parse)
+     function QM(MM) {
+       const rM = MM.getBuffer();
+       if (!rM || !(rM.vL > 0)) return;
+       const iM = MM._engine,
+         OM = new Uint8Array(rM.vL);
+       iM.bindArrayBuffer(rM), iM._gl.getBufferSubData(iM._gl.ARRAY_BUFFER, 0, OM), iM._resetVertexBufferBinding(), aM(MM, OM)
```

#### 25. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1234` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L465) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L1234)

```diff
-   40407: (GG, bG, ZG) => {
+   38418: (MM, rM, iM) => {
```

#### 26. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1236` → after: `L467-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L467-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L467-L473) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L1236)

```diff
-       c: () => wG
+       c: () => aM,
+       g: () => jM,
+       k: () => nM,
+       l: () => OM,
+       n: () => PM,
+       r: () => SM,
+       t: () => QM
```

#### 27. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L1238-L1289` → after: `L475-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L475-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/260.js#L475-L579) · [Before (L1238-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/260.js#L1238-L1289)

```diff
-     class wG {
-       constructor(GG, bG) {
-         this.width = GG, this.height = bG
-       }
-       toString() {
-         return `{W: ${this.width}, H: ${this.height}}`
-       }
-       getClassName() {
-         return "Size"
-       }
-       getHashCode() {
-         let GG = 0 | this.width;
-         return GG = 397 * GG ^ this.height, GG
-       }
-       oW(GG) {
-         this.width = GG.width, this.height = GG.height
- ... (36 more removed lines; see GitHub link above)
+     const OM = 6,
+       SM = [0, 2, 4, 1, 3, 5, 0, 2],
+       jM = 6,
+       aM = [1, 0, 3, 2, 5, 4];
+     for (let zM = jM; zM < SM.length; zM++)
+       if (SM[zM] !== SM[zM - jM]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
+     const PM = SM.length + 1,
+       nM = (() => {
+         const MM = [];
+         for (let rM = 0; rM < jM; rM++) MM[SM[rM]] = rM;
+         return MM
+       })();
+ 
+     function QM(MM) {
+       return !!MM && MM.backFaceCulling && (0 === MM.transparencyMode || 1 === MM.transparencyMode)
+     }
+ ... (89 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/261.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/261.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9)

#### 1. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L2)

```diff
- export const ids = [261];
+ export const ids = [261, 262];
```

#### 2. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L4)

```diff
-   40623: (GG, bG, ZG) => {
+   41362: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L7)

```diff
-       f: () => kG
+       e: () => mM
```

#### 4. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L9-L115` → after: `L9-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L9-L15) · [Before (L9-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L9-L115)

```diff
-     var wG = ZG(39093),
-       SG = ZG(40416),
-       LG = ZG(40592),
-       yG = {};
-     class kG {
-       constructor(GG) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = GG, this.checkInputs = () => {}
-       }
-       add(GG) {
-         const bG = GG.getSimpleName();
-         this.attached[bG] ? wG.c.Warn("camera input of type " + bG + " already exists on camera") : (this.attached[bG] = GG, GG.camera = this.camera, GG.checkInputs && (this.checkInputs = this._addCheckInputs(GG.checkInputs.bind(GG))), this.attachedToElement && GG.attachControl(t … [truncated]
-       }
-       remove(GG) {
-         for (const bG in this.attached) {
-           const ZG = this.attached[bG];
-           if (ZG === GG) return ZG.detachControl(), ZG.camera = null, delete this.attached[bG], void this.rebuildInputCheck()
- ... (91 more removed lines; see GitHub link above)
+     var OM = iM(41099),
+       SM = iM(41105),
+       jM = iM(38040),
+       aM = iM(38173),
+       PM = iM(41366),
+       nM = iM(41328),
+       QM = iM(38085);
```

#### 5. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L118-L129` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L18) · [Before (L118-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L118-L129)

```diff
-         let bG, ZG, YG, zG, EG, oG, XG, uG, iG, CG = kG.b,
-           WG = [],
-           mG = [],
-           IG = [],
-           FG = [],
-           vG = [],
-           aG = [],
-           cG = [],
-           lG = [],
-           jG = [],
-           PG = [],
-           MG = [],
+         let rM, iM, nM = PM.d,
```

#### 6. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L135-L142` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L24-L25) · [Before (L135-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L135-L142)

```diff
-           set boundingBoxSize(GG) {
-             if (this._boundingBoxSize && this._boundingBoxSize.equals(GG)) return;
-             this._boundingBoxSize = GG;
-             const bG = this.Dv();
-             bG && bG.markAllMaterialsAsDirty(1)
-           }
-           get boundingBoxSize() {
-             return this._boundingBoxSize
+           constructor(MM, rM, iM, SM) {
+             super(MM, iM, SM), this.groundColor = (0, OM.m)(this, QM, new aM.d(0, 0, 0)), this.direction = ((0, OM.m)(this, zM), (0, OM.m)(this, LM, void 0)), (0, OM.m)(this, mM), this.direction = rM || jM.q.Up()
```

#### 7. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L144-L243` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L27-L28) · [Before (L144-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L144-L243)

```diff
-           set rotationY(GG) {
-             this._rotationY = GG, this.setReflectionTextureMatrix(yG.e.RotationY(this._rotationY))
-           }
-           get rotationY() {
-             return this._rotationY
-           }
-           get noMipmap() {
-             return this._noMipmap
-           }
-           get forcedExtension() {
-             return this._forcedExtension
-           }
-           constructor(GG, bG) {
-             let ZG, SG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-               LG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               kG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
- ... (84 more removed lines; see GitHub link above)
+           _buildUniformLayout() {
+             this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniform … [truncated]
```

#### 8. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L246` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L31) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L246)

```diff
-             return "CubeTexture"
+             return "HemisphericLight"
```

#### 9. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L248-L268` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L33-L34) · [Before (L248-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L248-L268)

```diff
-           updateURL(GG) {
-             let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-               ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-               wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-               LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-               yG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-               kG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               UG = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
-             this.name && !this.name.startsWith("data:") || (this.name = GG), this.url = GG, bG && (this._forcedExtension = bG);
-             const YG = GG.lastIndexOf("."),
-               VG = bG || (YG > -1 ? GG.substring(YG).toLowerCase() : ""),
-               pG = 0 === VG.indexOf(".dds"),
-               fG = 0 === VG.indexOf(".env"),
-               QG = 0 === VG.indexOf(".basis");
-             if (fG ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = wG, wG && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), kG) this._files = kG;
- ... (5 more removed lines; see GitHub link above)
+           setDirectionToTarget(MM) {
+             return this.direction = jM.q.Normalize(MM.subtract(jM.q.Zero())), this.direction
```

#### 10. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L270-L271` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L36-L37) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L270-L271)

```diff
-           delayLoad(GG) {
-             4 === this.delayLoadState && (GG && (this._forcedExtension = GG), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
+           getShadowGenerator() {
+             return null
```

#### 11. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L273-L274` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L39-L41) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L273-L274)

```diff
-           getReflectionTextureMatrix() {
-             return this._textureMatrix
+           transferToEffect(MM, rM) {
+             const iM = jM.q.Normalize(this.direction);
+             return this._uniformBuffer.updateFloat4("vLightData", iM.x, iM.y, iM.z, 0, rM), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), rM), this
```

#### 12. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L276-L282` → after: `L43-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L43-L45) · [Before (L276-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L276-L282)

```diff
-           setReflectionTextureMatrix(GG) {
-             if (GG.updateFlag === this._textureMatrix.updateFlag) return;
-             if (GG.isIdentity() !== this._textureMatrix.isIdentity() && this.Dv()?.markAllMaterialsAsDirty(1, (GG => -1 !== GG.getActiveTextures().indexOf(this))), this._textureMatrix = GG, !this.Dv()?.useRightHandedSystem) return;
-             const bG = yG.j.mK[0],
-               ZG = yG.j.Quaternion[0],
-               wG = yG.j.mK[1];
-             this._textureMatrix.decompose(bG, ZG, wG), ZG.z *= -1, ZG.w *= -1, yG.e.ComposeToRef(bG, ZG, wG, this._textureMatrixRefraction)
+           transferToNodeMaterialEffect(MM, rM) {
+             const iM = jM.q.Normalize(this.direction);
+             return MM.setFloat3(rM, iM.x, iM.y, iM.z), this
```

#### 13. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L284-L285` → after: `L47-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L47-L48) · [Before (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L284-L285)

```diff
-           getRefractionTextureMatrix() {
-             return this.Dv()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
+           computeWorldMatrix() {
+             return this._worldMatrix || (this._worldMatrix = jM.d.Identity()), this._worldMatrix
```

#### 14. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L287-L302` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L50-L51) · [Before (L287-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L287-L302)

```diff
-           _loadTexture() {
-             let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-               bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-             const ZG = this.Dv(),
-               wG = this._texture;
-             this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
-             const SG = () => {
-                 this.onLoadObservable.notifyObservers(this), wG && (wG.dispose(), this.Dv()?.markAllMaterialsAsDirty(1)), GG && GG()
-               },
-               yG = (GG, ZG) => {
-                 this._loadingError = !0, this._errorObject = {
-                   message: GG,
-                   exception: ZG
-                 }, bG && bG(GG, ZG), UG.d.OnTextureLoadErrorObservable.notifyObservers(this)
-               };
-             this._texture ? this._texture.isReady ? LG.b.SetImmediate((() => SG())) : this._texture.onLoadedObservable.add((() => SG())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, ZG, this._lodScale, this._lodOffset, GG, yG, th … [truncated]
+           getTypeID() {
+             return PM.d.LIGHTTYPEID_HEMISPHERICLIGHT
```

#### 15. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L304-L311` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L53-L54) · [Before (L304-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L304-L311)

```diff
-           clone() {
-             let bG = 0;
-             const ZG = this.irradianceTexture,
-               wG = pG.b.Clone((() => {
-                 const ZG = new GG(this.url, this.Dv() || this._getEngine(), this._extensions, this._noMipmap, this._files);
-                 return bG = ZG.uniqueId, ZG
-               }), this);
-             return wG.uniqueId = bG, ZG && !this.irradianceTexture && (this.irradianceTexture = ZG), wG
+           prepareLightSpecificDefines(MM, rM) {
+             MM["HEMILIGHT" + rM] = !0
```

#### 16. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L315-L337` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L58) · [Before (L315-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L315-L337)

```diff
-           bG = [(0, SG.Q)()], ZG = [(0, SG.M)()], YG = [(0, SG.M)()], zG = [(0, SG.Q)("rotationY")], EG = [(0, SG.Q)("files")], oG = [(0, SG.Q)("forcedExtension")], XG = [(0, SG.Q)("extensions")], uG = [(0, SG.v)("textureMatrix")], iG = [(0, SG.v)("textureMatrixRefraction")], (0, … [truncated]
-             kind: "getter",
-             name: "boundingBoxSize",
-             static: !1,
-             private: !1,
-             access: {
-               has: GG => "boundingBoxSize" in GG,
-               get: GG => GG.boundingBoxSize
-             },
-             metadata: LG
-           }, null, WG), (0, wG.k)(GG, null, zG, {
-             kind: "setter",
-             name: "rotationY",
-             static: !1,
-             private: !1,
-             access: {
- ... (7 more removed lines; see GitHub link above)
+           rM = [(0, SM.r)()], iM = [(0, SM.J)()], (0, OM.i)(null, null, rM, {
```

#### 17. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L339` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L60) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L339)

```diff
-             name: "url",
+             name: "groundColor",
```

#### 18. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L343-L344` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L64-L65) · [Before (L343-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L343-L344)

```diff
-               has: GG => "url" in GG,
-               get: GG => GG.url,
+               has: MM => "groundColor" in MM,
+               get: MM => MM.groundColor,
```

#### 19. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L346` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L67) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L346)

```diff
-                 GG.url = bG
+                 MM.groundColor = rM
```

#### 20. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L350` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L71) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L350)

```diff
-           }, mG, IG), (0, wG.k)(null, null, ZG, {
+           }, QM, zM), (0, OM.i)(null, null, iM, {
```

#### 21. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L352` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L73) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L352)

```diff
-             name: "boundingBoxPosition",
+             name: "direction",
```

#### 22. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L356-L357` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L77-L78) · [Before (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L356-L357)

```diff
-               has: GG => "boundingBoxPosition" in GG,
-               get: GG => GG.boundingBoxPosition,
+               has: MM => "direction" in MM,
+               get: MM => MM.direction,
```

#### 23. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L359-L424` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L80) · [Before (L359-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L359-L424)

```diff
-                 GG.boundingBoxPosition = bG
-               }
-             },
-             metadata: LG
-           }, FG, vG), (0, wG.k)(null, null, EG, {
-             kind: "field",
-             name: "_files",
-             static: !1,
-             private: !1,
-             access: {
-               has: GG => "_files" in GG,
-               get: GG => GG._files,
-               set: (GG, bG) => {
-                 GG._files = bG
-               }
-             },
- ... (50 more removed lines; see GitHub link above)
+                 MM.direction = rM
```

#### 24. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L438-L450` → after: `L94-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L94-L95) · [Before (L438-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L438-L450)

```diff
-     function oG(GG, bG, ZG) {
-       let wG = "";
-       for (const SG of GG) wG += SG;
-       return new zG(wG, bG, null, ZG, GG)
-     }
- 
-     function XG(GG, bG) {
-       let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-         wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       const SG = bG.useDelayedTextureLoading;
-       bG.useDelayedTextureLoading = !1;
-       const LG = new zG(GG, bG, null, !1, null, null, null, void 0, !0, ZG, wG);
-       return bG.useDelayedTextureLoading = SG, LG
+     function mM() {
+       LM || (LM = !0, nM.d.AddNodeConstructor("Light_Type_3", ((MM, rM) => () => new zM(MM, jM.q.Zero(), rM))), (0, QM.e)("BABYLON.HemisphericLight", zM))
```

#### 25. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L452-L464` → after: `L97-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L97-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L97-L140) · [Before (L452-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L452-L464)

```diff
- 
-     function uG(GG, bG, ZG) {
-       const wG = pG.b.Parse((() => {
-         let wG = !1;
-         return GG.prefiltered && (wG = GG.prefiltered), new zG(ZG + (GG.url ?? GG.name), bG, GG.extensions, !1, GG.files || null, null, null, void 0, wG, GG.forcedExtension)
-       }), GG, bG);
-       if (GG.boundingBoxPosition && (wG.boundingBoxPosition = yG.p.FromArray(GG.boundingBoxPosition)), GG.boundingBoxSize && (wG.boundingBoxSize = yG.p.FromArray(GG.boundingBoxSize)), GG.animations)
-         for (let SG = 0; SG < GG.animations.length; SG++) {
-           const bG = GG.animations[SG],
-             ZG = (0, YG.e)("BABYLON.Animation");
-           ZG && wG.animations.push(ZG.Parse(bG))
-         }
-       return wG
+   },
+   38740: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => SM
+     });
+     var OM = iM(38744);
+     class SM {
+       static GetPlanes(MM) {
+         const rM = [];
+         for (let iM = 0; iM < 6; iM++) rM.push(new OM.d(0, 0, 0, 0));
+         return SM.GetPlanesToRef(MM, rM), rM
+       }
+       static GetNearPlaneToRef(MM, rM) {
+         const iM = MM.m;
+         rM.normal.x = iM[3] + iM[2], rM.normal.y = iM[7] + iM[6], rM.normal.z = iM[11] + iM[10], rM.d = iM[15] + iM[14], rM.normalize()
+       }
+ ... (28 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L468` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L143) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L468)

```diff
-   41574: (GG, bG, ZG) => {
+   38744: (MM, rM, iM) => {
```

#### 27. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L470` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L145) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L470)

```diff
-       b: () => YG
+       d: () => SM
```

#### 28. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L472-L511` → after: `L147-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L147-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L147-L156) · [Before (L472-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L472-L511)

```diff
-     var wG = ZG(39093),
-       SG = ZG(40857),
-       LG = ZG(40319),
-       yG = ZG(40225),
-       kG = ZG(40210);
-     let UG = !1;
-     class YG extends SG.d {
-       constructor(GG, bG, ZG) {
-         let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           YG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
-           VG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
-           pG = arguments.length > 6 ? arguments[6] : void 0;
-         const fG = !ZG || ZG._isScene;
-         super(null, fG ? ZG : ZG?.Ah, fG ? !wG : ZG, pG, YG, void 0, void 0, void 0, void 0, VG), UG || (UG = !0, yG.ThinEngine.prototype.createDynamicTexture = function(GG, bG, ZG, wG) {
-           const SG = new kG.b(this, 4);
-           return SG.baseWidth = GG, SG.baseHeight = bG, ZG && (GG = this.needPOTTextures ? (0, LG.h)(GG, this._caps.maxTextureSize) : GG, bG = this.needPOTTextures ? (0, LG.h)(bG, this._caps.maxTextureSize) : bG), SG.width = GG, SG.height = bG, SG.isReady = !1, SG.generateMipMaps … [truncated]
- ... (24 more removed lines; see GitHub link above)
+     var OM = iM(38040);
+     class SM {
+       constructor(MM, rM, iM, SM) {
+         this.normal = new OM.q(MM, rM, iM), this.d = SM
+       }
+       HOM() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new SM(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 29. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L514` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L159) · [Before (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L514)

```diff
-         return "DynamicTexture"
+         return "Plane"
```

#### 30. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L516-L517` → after: `L161-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L161-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L161-L163) · [Before (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L516-L517)

```diff
-       get canRescale() {
-         return !0
+       getHashCode() {
+         let MM = this.normal.getHashCode();
+         return MM = 397 * MM ^ this.d, MM
```

#### 31. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L519-L520` → after: `L165-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L165-L168) · [Before (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L519-L520)

```diff
-       _recreate(GG) {
-         this._canvas.width = GG.width, this._canvas.height = GG.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(GG.width, GG.height, this._generateMipMaps, this.samplingMode)
+       normalize() {
+         const MM = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let rM = 0;
+         return 0 !== MM && (rM = 1 / MM), this.normal.x *= rM, this.normal.y *= rM, this.normal.z *= rM, this.d *= rM, this
```

#### 32. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L522-L524` → after: `L170-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L170-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L170-L182) · [Before (L522-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L522-L524)

```diff
-       scale(GG) {
-         const bG = this.getSize();
-         bG.width *= GG, bG.height *= GG, this._recreate(bG)
+       transform(MM) {
+         const rM = SM._TmpMatrix;
+         MM.invertToRef(rM);
+         const iM = rM.m,
+           OM = this.normal.x,
+           jM = this.normal.y,
+           aM = this.normal.z,
+           PM = this.d,
+           nM = OM * iM[0] + jM * iM[1] + aM * iM[2] + PM * iM[3],
+           QM = OM * iM[4] + jM * iM[5] + aM * iM[6] + PM * iM[7],
+           zM = OM * iM[8] + jM * iM[9] + aM * iM[10] + PM * iM[11],
+           LM = OM * iM[12] + jM * iM[13] + aM * iM[14] + PM * iM[15];
+         return new SM(nM, QM, zM, LM)
```

#### 33. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L526-L528` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L184-L185) · [Before (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L526-L528)

```diff
-       scaleTo(GG, bG) {
-         const ZG = this.getSize();
-         ZG.width = GG, ZG.height = bG, this._recreate(ZG)
+       dotCoordinate(MM) {
+         return this.normal.x * MM.x + this.normal.y * MM.y + this.normal.z * MM.z + this.d
```

#### 34. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L530-L531` → after: `L187-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L187-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L187-L199) · [Before (L530-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L530-L531)

```diff
-       getContext() {
-         return this._context
+       copyFromPoints(MM, rM, iM) {
+         const OM = rM.x - MM.x,
+           SM = rM.y - MM.y,
+           jM = rM.z - MM.z,
+           aM = iM.x - MM.x,
+           PM = iM.y - MM.y,
+           nM = iM.z - MM.z,
+           QM = SM * nM - jM * PM,
+           zM = jM * aM - OM * nM,
+           LM = OM * PM - SM * aM,
+           mM = Math.sqrt(QM * QM + zM * zM + LM * LM);
+         let HM;
+         return HM = 0 !== mM ? 1 / mM : 0, this.normal.x = QM * HM, this.normal.y = zM * HM, this.normal.z = LM * HM, this.d = -(this.normal.x * MM.x + this.normal.y * MM.y + this.normal.z * MM.z), this
```

#### 35. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L533-L535` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L201-L202) · [Before (L533-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L533-L535)

```diff
-       clear(GG) {
-         const bG = this.getSize();
-         GG && (this._context.fillStyle = GG), this._context.clearRect(0, 0, bG.width, bG.height)
+       isFrontFacingTo(MM, rM) {
+         return OM.q.Dot(this.normal, MM) <= rM
```

#### 36. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L537-L553` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L204-L205) · [Before (L537-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L537-L553)

```diff
-       update(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === GG || GG, bG, this._format || void 0, void 0, ZG)
-       }
-       drawText(GG, bG, ZG, wG, SG, LG, yG) {
-         let kG = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
-         const UG = this.getSize();
-         if (LG && (this._context.fillStyle = LG, this._context.fillRect(0, 0, UG.width, UG.height)), this._context.font = wG, null === bG || void 0 === bG) {
-           const ZG = this._context.measureText(GG);
-           bG = (UG.width - ZG.width) / 2
-         }
-         if (null === ZG || void 0 === ZG) {
-           const GG = parseInt(wG.replace(/\D/g, ""));
-           ZG = UG.height / 2 + GG / 3.65
-         }
- ... (1 more removed lines; see GitHub link above)
+       signedDistanceTo(MM) {
+         return OM.q.Dot(MM, this.normal) + this.d
```

#### 37. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L555-L556` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L207-L208) · [Before (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L555-L556)

```diff
-       dispose() {
-         super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
+       static FromArray(MM) {
+         return new SM(MM[0], MM[1], MM[2], MM[3])
```

#### 38. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L558-L563` → after: `L210-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L210-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L210-L212) · [Before (L558-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L558-L563)

```diff
-       clone() {
-         const GG = this.Dv();
-         if (!GG) return this;
-         const bG = this.getSize(),
-           ZG = new YG(this.name, bG, GG, this._generateMipMaps);
-         return ZG.hasAlpha = this.hasAlpha, ZG.level = this.level, ZG.wrapU = this.wrapU, ZG.wrapV = this.wrapV, ZG
+       static FromPoints(MM, rM, iM) {
+         const OM = new SM(0, 0, 0, 0);
+         return OM.copyFromPoints(MM, rM, iM), OM
```

#### 39. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L565-L569` → after: `L214-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L214-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L214-L216) · [Before (L565-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L565-L569)

```diff
-       serialize() {
-         const GG = this.Dv();
-         GG && !GG.isReady() && wG.c.Warn("The scene must be ready before serializing the dynamic texture");
-         const bG = super.serialize();
-         return YG._IsCanvasElement(this._canvas) && (bG.base64String = this._canvas.toDataURL()), bG.invertY = this._invertY, bG.samplingMode = this.samplingMode, bG
+       static FromPositionAndNormal(MM, rM) {
+         const iM = new SM(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(MM, rM, iM)
```

#### 40. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L571-L572` → after: `L218-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L218-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L218-L219) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L571-L572)

```diff
-       static _IsCanvasElement(GG) {
-         return void 0 !== GG.toDataURL
+       static FromPositionAndNormalToRef(MM, rM, iM) {
+         return iM.normal.jR(rM), iM.normal.normalize(), iM.d = -MM.dot(iM.normal), iM
```

#### 41. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L574-L575` → after: `L221-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L221-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L221-L223) · [Before (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L574-L575)

```diff
-       _rebuild() {
-         this.update()
+       static SignedDistanceToPlaneFromPositionAndNormal(MM, rM, iM) {
+         const SM = -(rM.x * MM.x + rM.y * MM.y + rM.z * MM.z);
+         return OM.q.Dot(iM, rM) + SM
```

#### 42. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L579` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L228) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L579)

```diff
-   41539: (GG, bG, ZG) => {
+   39078: (MM, rM, iM) => {
```

#### 43. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L581` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L230) · [Before (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L581)

```diff
-       b: () => SG
+       e: () => OM
```

#### 44. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L583-L595` → after: `L232-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L232-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L232-L234) · [Before (L583-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L583-L595)

```diff
-     var wG = ZG(40857);
-     class SG extends wG.d {
-       get depth() {
-         return this._depth
-       }
-       constructor(GG, bG, ZG, SG, LG, yG) {
-         let kG = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
-           UG = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-           YG = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : wG.d.TRILINEAR_SAMPLINGMODE,
-           VG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
-           pG = arguments.length > 10 ? arguments[10] : void 0,
-           fG = arguments.length > 11 ? arguments[11] : void 0;
-         super(null, yG, !kG, UG), this.format = LG, this._texture = yG.CK().createRawTexture2DArray(GG, bG, ZG, SG, LG, kG, UG, YG, null, VG, pG ?? 0, fG), this._depth = SG, this.is2DArray = !0
+     class OM {
+       constructor(MM, rM, iM, OM) {
+         this.x = MM, this.y = rM, this.width = iM, this.height = OM
```

#### 45. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L597-L598` → after: `L236-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L236-L237) · [Before (L597-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L597-L598)

```diff
-       update(GG) {
-         this.updateMipLevel(GG, 0)
+       toGlobal(MM, rM) {
+         return new OM(this.x * MM, this.y * rM, this.width * MM, this.height * rM)
```

#### 46. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L600-L601` → after: `L239-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L239-L240) · [Before (L600-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L600-L601)

```diff
-       updateMipLevel(GG, bG) {
-         this._texture && this._getEngine().updateRawTexture2DArray(this._texture, GG, this._texture.format, this._texture.invertY, null, this._texture.type, bG)
+       toGlobalToRef(MM, rM, iM) {
+         return iM.x = this.x * MM, iM.y = this.y * rM, iM.width = this.width * MM, iM.height = this.height * rM, this
```

#### 47. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L603-L604` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L242-L243) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L603-L604)

```diff
-       static CreateRGBATexture(GG, bG, ZG, wG, LG) {
-         return new SG(GG, bG, ZG, wG, 5, LG, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== … [truncated]
+       clone() {
+         return new OM(this.x, this.y, this.width, this.height)
```

#### 48. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L608` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L247) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L608)

```diff
-   41531: (GG, bG, ZG) => {
+   39705: (MM, rM, iM) => {
```

#### 49. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L610` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L249) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L610)

```diff
-       b: () => wG.e
+       b: () => jM
```

#### 50. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L612-L613` → after: `L251-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L251-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L251-L288) · [Before (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L612-L613)

```diff
-     var wG = ZG(40735);
-     (0, wG.f)()
+     var OM = iM(39711);
+     const SM = (MM, rM, iM) => MM ? MM.getClassName && "Mesh" === MM.getClassName() ? null : !MM.getClassName || "SubMesh" !== MM.getClassName() && "PhysicsBody" !== MM.getClassName() ? MM.clone ? MM.clone() : Array.isArray(MM) ? MM.slice() : iM && "object" === typeof MM ? {
+       ...MM
+     } : null : MM.clone(rM) : null;
+     class jM {
+       static DeepCopy(MM, rM, iM, jM) {
+         let aM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const PM = function(MM) {
+           const rM = [];
+           do {
+             const iM = Object.getOwnPropertyNames(MM);
+             for (const MM of iM) - 1 === rM.indexOf(MM) && rM.push(MM)
+           } while (MM = Object.getPrototypeOf(MM));
+           return rM
+         }(MM);
+         for (const QM of PM) {
+ ... (22 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L615` → after: `L290-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L290-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L290-L296) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L615)

```diff
-   40467: (GG, bG, ZG) => {
+   38885: (MM, rM, iM) => {
+     function OM() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (MM => {
+         const rM = 16 * Math.random() | 0;
+         return ("x" === MM ? rM : 3 & rM | 8).toString(16)
+       }))
+     }
```

#### 52. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L617` → after: `L298-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L298-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L298-L381) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L617)

```diff
-       d: () => wG.f
+       d: () => OM
+     })
+   },
+   39711: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => OM
+     });
+     class OM {
+       static _CheckLimit(MM, rM) {
+         let iM = OM._LogLimitOutputs[MM];
+         return iM ? iM.current++ : (iM = {
+           limit: rM,
+           current: 1
+         }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
+       }
+       static _GenerateLimitMessage(MM) {
+ ... (68 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L619-L620` → after: `L383-L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L383-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/261.js#L383-L1126) · [Before (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/261.js#L619-L620)

```diff
-     var wG = ZG(40475);
-     (0, wG.d)()
+     var OM = iM(41560),
+       SM = iM(44465),
+       jM = iM(44439),
+       aM = iM(41121),
+       PM = iM(44445),
+       nM = iM(38064),
+       QM = iM(38040);
+     class zM extends PM.c {
+       static _GetDefines(MM) {
+         if (!MM) return null;
+         return MM.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
+       }
+       _gatherImports(MM, rM) {
+         MM ? (this._webGPUReady = !0, rM.push(Promise.all([iM.e(683).then((() => iM(64144))), iM.e(684).then((() => iM(64151)))]))) : rM.push(Promise.all([iM.e(685).then((() => iM(64153))), iM.e(686).then((() => iM(64161)))]))
+       }
+       constructor(MM) {
+ ... (728 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 1. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/262.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/262.js#L4)

```diff
-   40582: (GG, bG, ZG) => {
+   38740: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/262.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/262.js#L6)

```diff
-       c: () => WG
+       d: () => SM
```

#### 3. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8-L746` → after: `L8-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/262.js#L8-L171) · [Before (L8-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/262.js#L8-L746)

```diff
-     var wG = ZG(40393),
-       SG = ZG(40398),
-       LG = ZG(37439),
-       yG = ZG(40585),
-       kG = ZG(40623),
-       UG = ZG(40554),
-       YG = ZG(40477);
-     let VG = (() => {
-       var GG;
-       let bG, ZG, yG, kG, VG, pG, fG, QG, KG, hG, dG, JG = [],
-         rG = [],
-         zG = [],
-         EG = [],
-         oG = [],
-         XG = [],
-         uG = [],
- ... (723 more removed lines; see GitHub link above)
+     var OM = iM(38744);
+     class SM {
+       static GetPlanes(MM) {
+         const rM = [];
+         for (let iM = 0; iM < 6; iM++) rM.push(new OM.d(0, 0, 0, 0));
+         return SM.GetPlanesToRef(MM, rM), rM
+       }
+       static GetNearPlaneToRef(MM, rM) {
+         const iM = MM.m;
+         rM.normal.x = iM[3] + iM[2], rM.normal.y = iM[7] + iM[6], rM.normal.z = iM[11] + iM[10], rM.d = iM[15] + iM[14], rM.normalize()
+       }
+       static GetFarPlaneToRef(MM, rM) {
+         const iM = MM.m;
+         rM.normal.x = iM[3] - iM[2], rM.normal.y = iM[7] - iM[6], rM.normal.z = iM[11] - iM[10], rM.d = iM[15] - iM[14], rM.normalize()
+       }
+       static GetLeftPlaneToRef(MM, rM) {
+ ... (148 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L797-L798` → after: `L175-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L175-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/262.js#L175-L198) · [Before (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/262.js#L797-L798)

```diff
-       addKeyboard() {
-         return this.add(new VG), this
+     }
+   },
+   38885: (MM, rM, iM) => {
+     function OM() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (MM => {
+         const rM = 16 * Math.random() | 0;
+         return ("x" === MM ? rM : 3 & rM | 8).toString(16)
+       }))
+     }
+     iM.d(rM, {
+       d: () => OM
+     })
+   },
+   39711: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => OM
+ ... (8 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L800-L802` → after: `L200-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L200-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/262.js#L200-L205) · [Before (L800-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/262.js#L800-L802)

```diff
-       addMouse() {
-         let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         return this._mouseInput || (this._mouseInput = new QG(GG), this.add(this._mouseInput)), this
+       static _GenerateLimitMessage(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const iM = OM._LogLimitOutputs[MM];
+         if (!iM || !OM.MessageLimitReached) return;
+         const SM = this._Levels[rM];
+         iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
```

#### 6. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L804-L805` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/262.js#L207-L208) · [Before (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/262.js#L804-L805)

```diff
-       removeMouse() {
-         return this._mouseInput && this.remove(this._mouseInput), this
+       static _AddLogEntry(MM) {
+         OM._LogCache = MM + OM._LogCache, OM.OnNewCacheEntry && OM.OnNewCacheEntry(MM)
```

#### 7. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L807-L808` → after: `L210-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L210-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/262.js#L210-L213) · [Before (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/262.js#L807-L808)

```diff
-       addMouseWheel() {
-         return this._mouseWheelInput || (this._mouseWheelInput = new JG, this.add(this._mouseWheelInput)), this
+       static _FormatMessage(MM) {
+         const rM = MM => MM < 10 ? "0" + MM : "" + MM,
+           iM = new Date;
+         return "[" + rM(iM.getHours()) + ":" + rM(iM.getMinutes()) + ":" + rM(iM.getSeconds()) + "]: " + MM
```

#### 8. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L810-L811` → after: `L215-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L215-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/262.js#L215-L227) · [Before (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/262.js#L810-L811)

```diff
-       removeMouseWheel() {
-         return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
+       static _LogDisabled(MM, rM) {}
+       static _LogEnabled() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           rM = arguments.length > 1 ? arguments[1] : void 0,
+           iM = arguments.length > 2 ? arguments[2] : void 0;
+         const SM = Array.isArray(rM) ? rM[0] : rM;
+         if (void 0 !== iM && !OM._CheckLimit(SM, iM)) return;
+         const jM = OM._FormatMessage(SM),
+           aM = this._Levels[MM],
+           PM = Array.isArray(rM) ? rM.slice(1) : [];
+         aM.logFunc && aM.logFunc("BJS - " + jM, ...PM);
+         const nM = `<div style='color:${aM.color}'>${jM}</div><br>`;
+         OM._AddLogEntry(nM), OM._GenerateLimitMessage(SM, MM)
```

#### 9. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L813-L814` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/262.js#L229-L230) · [Before (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/262.js#L813-L814)

```diff
-       addTouch() {
-         return this.add(new rG), this
+       static get LogCache() {
+         return OM._LogCache
```

#### 10. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L816-L817` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/262.js#L232-L233) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/262.js#L816-L817)

```diff
-       clear() {
-         super.clear(), this._mouseInput = null
+       static ClearLogCache() {
+         OM._LogCache = "", OM._LogLimitOutputs = {}, OM.errorsCount = 0
```
