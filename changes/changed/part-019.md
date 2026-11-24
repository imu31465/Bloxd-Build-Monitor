# Changed — Bundle Modifications Report (Part 019 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `19 / 65` (**291** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 018](part-018.md) · [Part 020 →](part-020.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/266.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/266.js` (84 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e)

#### 83. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1201-L1230` → after: `L2628-L2644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2628-L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2628-L2644) · [Before (L1201-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L1201-L1230)

```diff
-     }
- 
-     function RD(DD) {
-       pD.forEach((zD => {
-         zD.setLogLevel(DD)
-       }))
-     }
- 
-     function AD(DD, zD) {
-       for (const wD of pD) {
-         let pD = null;
-         zD && zD.level && (pD = KD[zD.level]), wD.userLogHandler = null === DD ? null : function(zD, wD) {
-           for (var KD = arguments.length, rD = new Array(KD > 2 ? KD - 2 : 0), LD = 2; LD < KD; LD++) rD[LD - 2] = arguments[LD];
-           const cD = rD.map((DD => {
-             if (null == DD) return null;
-             if ("string" === typeof DD) return DD;
- ... (14 more removed lines; see GitHub link above)
+       dispose() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         this._linesIndexBuffer && (this._mesh.Gl().gy()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
+         const ip = this._mesh.Am.indexOf(this);
+         this._mesh.Am.splice(ip, 1), this.resetDrawCache(void 0, pp)
+       }
+       getClassName() {
+         return "SubMesh"
+       }
+       static CreateFromIndices(pp, ip, cp, Op, op) {
+         let Ip = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+           Sp = Number.MAX_VALUE,
+           xp = -Number.MAX_VALUE;
+         const Lp = (op || Op).NOp();
+         for (let Yp = ip; Yp < ip + cp; Yp++) {
+           const pp = Lp[Yp];
+ ... (1 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1233` → after: `L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2648) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L1233)

```diff
-     }
+     }(Op = Dp.prototype).projectToRef ?? (Op.projectToRef = (0, Yp.k)("SubMesh", "projectToRef"))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/267.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/267.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8)

#### 1. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L5-L18` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L4-L6) · [Before (L5-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L5-L18)

```diff
-   40450: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       getAnalytics: () => uz,
-       getGoogleAnalyticsClientId: () => Yz,
-       initializeAnalytics: () => vz,
-       isSupported: () => tz,
-       logEvent: () => ww,
-       setAnalyticsCollectionEnabled: () => Dw,
-       setConsent: () => pw,
-       setCurrentScreen: () => Fz,
-       setDefaultEventParameters: () => zw,
-       setUserId: () => Hz,
-       setUserProperties: () => qz,
-       settings: () => oz
+   41851: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Op
```

#### 2. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L20-L35` → after: `L8-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L8-L26) · [Before (L20-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L20-L35)

```diff
-     var pD = wD(40430),
-       sD = wD(40446),
-       KD = wD(40442),
-       rD = wD(40435);
-     let LD, cD;
-     const gD = new WeakMap,
-       RD = new WeakMap,
-       AD = new WeakMap,
-       UD = new WeakMap,
-       fD = new WeakMap;
-     let ID = {
-       get(DD, zD, wD) {
-         if (DD instanceof IDBTransaction) {
-           if ("done" === zD) return RD.get(DD);
-           if ("objectStoreNames" === zD) return DD.objectStoreNames || AD.get(DD);
-           if ("store" === zD) return wD.objectStoreNames[1] ? void 0 : wD.objectStore(wD.objectStoreNames[0])
+     class Op {}
+     Op.AUTOSAMPLERSUFFIX = "Sampler", Op.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", Op.ALPHA_DISABLE = 0, Op.ALPHA_ADD = 1, Op.ALPHA_COMBINE = 2, Op.ALPHA_SUBTRACT = 3, Op.ALPHA_MULTIPLY = 4, Op.ALPHA_MAXIMIZED = 5, Op.ALPHA_ONEONE = 6, Op.ALPHA_PREMULTIPLIED = 7, Op.ALPH … [truncated]
+   },
+   41823: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Lp
+     });
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(37320),
+       Sp = cp(40451),
+       xp = cp(40423);
+     let Lp = (() => {
+       var pp;
+       let ip, cp, Lp, Yp, Dp = Sp.d,
+         Ap = [];
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L37-L53` → after: `L28-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L28-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L28-L185) · [Before (L37-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L37-L53)

```diff
-         return hD(DD[zD])
-       },
-       set: (DD, zD, wD) => (DD[zD] = wD, !0),
-       has: (DD, zD) => DD instanceof IDBTransaction && ("done" === zD || "store" === zD) || zD in DD
-     };
- 
-     function BD(DD) {
-       return DD !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (cD || (cD = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(DD) ? function() {
-         for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
-         return DD.apply(nD(this), wD), hD(gD.get(this))
-       } : function() {
-         for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
-         return hD(DD.apply(nD(this), wD))
-       } : function(zD) {
-         for (var wD = arguments.length, pD = new Array(wD > 1 ? wD - 1 : 0), sD = 1; sD < wD; sD++) pD[sD - 1] = arguments[sD];
-         const KD = DD.call(nD(this), zD, ...pD);
- ... (1 more removed lines; see GitHub link above)
+         _setPosition(pp) {
+           this._position = pp
+         }
+         get position() {
+           return this._position
+         }
+         set position(pp) {
+           this._setPosition(pp)
+         }
+         _setDirection(pp) {
+           this._direction = pp
+         }
+         get direction() {
+           return this._direction
+         }
+         set direction(pp) {
+ ... (142 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L55-L213` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L187-L188) · [Before (L55-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L55-L213)

```diff
-     }
- 
-     function GD(DD) {
-       return "function" === typeof DD ? BD(DD) : (DD instanceof IDBTransaction && function(DD) {
-         if (RD.has(DD)) return;
-         const zD = new Promise(((zD, wD) => {
-           const pD = () => {
-               DD.removeEventListener("complete", sD), DD.removeEventListener("error", KD), DD.removeEventListener("abort", KD)
-             },
-             sD = () => {
-               zD(), pD()
-             },
-             KD = () => {
-               wD(DD.error || new DOMException("AbortError", "AbortError")), pD()
-             };
-           DD.addEventListener("complete", sD), DD.addEventListener("error", KD), DD.addEventListener("abort", KD)
- ... (143 more removed lines; see GitHub link above)
+       update(pp) {
+         this.updateMipLevel(pp, 0)
```

#### 5. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L215-L385` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L190-L191) · [Before (L215-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L215-L385)

```diff
-     }
- 
-     function mD(DD) {
-       return `${DD.appName}!${DD.appId}`
-     }
-     const eD = new Map;
- 
-     function oD(DD, zD) {
-       const wD = mD(DD);
-       aD(wD, zD),
-         function(DD, zD) {
-           const wD = vD();
-           wD && wD.postMessage({
-             key: DD,
-             fid: zD
-           });
- ... (155 more removed lines; see GitHub link above)
+       updateMipLevel(pp, ip) {
+         this._getEngine().updateRawTexture(this._texture, pp, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, ip), this._waitingForData = !1
```

#### 6. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L387-L396` → after: `L193-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L193-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L193-L196) · [Before (L387-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L387-L396)

```diff
-     }
-     async function pz(DD) {
-       let zD = await sz(DD.appConfig);
-       for (; 1 === zD.registrationStatus;) await ZD(100), zD = await sz(DD.appConfig);
-       if (0 === zD.registrationStatus) {
-         const {
-           installationEntry: zD,
-           registrationPromise: wD
-         } = await wz(DD);
-         return wD || zD
+       clone() {
+         if (!this._texture) return super.clone();
+         const pp = new op(null, this.getSize().width, this.getSize().height, this.format, this.Gl(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
+         return pp._texture = this._texture, this._texture.incrementReferences(), pp
```

#### 7. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L398-L432` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L198-L199) · [Before (L398-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L398-L432)

```diff
-       return zD
-     }
- 
-     function sz(DD) {
-       return zz(DD, (DD => {
-         if (!DD) throw bD.create("installation-not-found");
-         return Kz(DD)
-       }))
-     }
- 
-     function Kz(DD) {
-       return 1 === (zD = DD).registrationStatus && zD.registrationTime + VD < Date.now() ? {
-         fid: DD.fid,
-         registrationStatus: 0
-       } : DD;
-       var zD
- ... (19 more removed lines; see GitHub link above)
+       isReady() {
+         return super.isReady() && !this._waitingForData
```

#### 8. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L434-L447` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L201-L202) · [Before (L434-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L434-L447)

```diff
-       const LD = {
-           installation: {
-             sdkVersion: PD,
-             appId: wD.appId
-           }
-         },
-         cD = {
-           method: "POST",
-           headers: KD,
-           body: JSON.stringify(LD)
-         },
-         gD = await ND((() => fetch(sD, cD)));
-       if (gD.ok) {
-         return SD(await gD.json())
+       static CreateLuminanceTexture(pp, ip, cp, Op) {
+         return new op(pp, ip, cp, 1, Op, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 9. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L449-L599` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L204-L205) · [Before (L449-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L449-L599)

```diff
-       throw await iD("Generate Auth Token", gD)
-     }
-     async function Lz(DD) {
-       let zD, wD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       const pD = await zz(DD.appConfig, (pD => {
-         if (!gz(pD)) throw bD.create("not-registered");
-         const sD = pD.authToken;
-         if (!wD && function(DD) {
-             return 2 === DD.requestStatus && ! function(DD) {
-               const zD = Date.now();
-               return zD < DD.creationTime || DD.creationTime + DD.expiresIn < zD + xD
-             }(DD)
-           }(sD)) return pD;
-         if (1 === sD.requestStatus) return zD = async function(DD, zD) {
-           let wD = await cz(DD.appConfig);
-           for (; 1 === wD.authToken.requestStatus;) await ZD(100), wD = await cz(DD.appConfig);
- ... (135 more removed lines; see GitHub link above)
+       static CreateLuminanceAlphaTexture(pp, ip, cp, Op) {
+         return new op(pp, ip, cp, 2, Op, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 10. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L601-L675` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L207-L208) · [Before (L601-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L601-L675)

```diff
-       return DD
-     }
- 
-     function Jz(DD) {
-       return Promise.all(DD.map((DD => DD.catch((DD => DD)))))
-     }
- 
-     function Ez(DD, zD) {
-       const wD = function(DD, zD) {
-           let wD;
-           return window.trustedTypes && (wD = window.trustedTypes.createPolicy(DD, zD)), wD
-         }("firebase-js-sdk-policy", {
-           createScriptURL: Oz
-         }),
-         pD = document.createElement("script"),
-         sD = `${Gz}?l=${DD}&id=${zD}`;
- ... (59 more removed lines; see GitHub link above)
+       static CreateAlphaTexture(pp, ip, cp, Op) {
+         return new op(pp, ip, cp, 0, Op, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 11. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L677-L682` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L210-L211) · [Before (L677-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L677-L682)

```diff
-     }
-     const Xz = new class {
-       constructor() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-           zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
-         this.throttleMetadata = DD, this.intervalMillis = zD
+       static CreateRGBTexture(pp, ip, cp, Op) {
+         return new op(pp, ip, cp, 4, Op, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L684-L685` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L213-L214) · [Before (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L684-L685)

```diff
-       getThrottleMetadata(DD) {
-         return this.throttleMetadata[DD]
+       static CreateRGBATexture(pp, ip, cp, Op) {
+         return new op(pp, ip, cp, 5, Op, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L687-L688` → after: `L216-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L216-L217) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L687-L688)

```diff
-       setThrottleMetadata(DD, zD) {
-         this.throttleMetadata[DD] = zD
+       static CreateRGBAStorageTexture(pp, ip, cp, Op) {
+         return new op(pp, ip, cp, 5, Op, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 14. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L690-L691` → after: `L219-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L219-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L219-L223) · [Before (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L690-L691)

```diff
-       deleteThrottleMetadata(DD) {
-         delete this.throttleMetadata[DD]
+       static CreateRTexture(pp, ip, cp, Ip) {
+         let Sp = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           xp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           Lp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Op.d.TRILINEAR_SAMPLINGMODE;
+         return new op(pp, ip, cp, 6, Ip, Sp, xp, Lp, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
```

#### 15. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L693-L715` → after: `L225-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L225-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L225-L229) · [Before (L693-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L693-L715)

```diff
-     };
- 
-     function Vz(DD) {
-       return new Headers({
-         Accept: "application/json",
-         "x-goog-api-key": DD
-       })
-     }
-     async function Pz(DD) {
-       let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xz,
-         wD = arguments.length > 2 ? arguments[2] : void 0;
-       const {
-         appId: pD,
-         apiKey: sD,
-         measurementId: KD
-       } = DD.options;
- ... (7 more removed lines; see GitHub link above)
+       static CreateRStorageTexture(pp, ip, cp, Ip) {
+         let Sp = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           xp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           Lp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Op.d.TRILINEAR_SAMPLINGMODE;
+         return new op(pp, ip, cp, 6, Ip, Sp, xp, Lp, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
```

#### 16. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L730-L758` → after: `L232-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L232-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L232-L261) · [Before (L730-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L730-L758)

```diff
-     async function Cz(DD, zD, wD) {
-       let {
-         throttleEndTimeMillis: pD,
-         backoffCount: sD
-       } = zD, rD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Xz;
-       var LD;
-       const {
-         appId: cD,
-         measurementId: gD
-       } = DD;
-       try {
-         await
-         function(DD, zD) {
-           return new Promise(((wD, pD) => {
-             const sD = Math.max(zD - Date.now(), 0),
-               KD = setTimeout(wD, sD);
- ... (13 more removed lines; see GitHub link above)
+   },
+   41884: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op.b
+     });
+     var Op = cp(40614);
+     (0, Op.d)()
+   },
+   41826: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Op.e
+     });
+     var Op = cp(40631);
+     (0, Op.h)()
+   },
+   40631: (pp, ip, cp) => {
+ ... (14 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L760-L793` → after: `L263-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L263-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L263-L280) · [Before (L760-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L760-L793)

```diff
-       try {
-         const zD = await async function(DD) {
-           var zD;
-           const {
-             appId: wD,
-             apiKey: pD
-           } = DD, sD = {
-             method: "GET",
-             headers: Vz(pD)
-           }, KD = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", wD), rD = await fetch(KD, sD);
-           if (200 !== rD.status && 304 !== rD.status) {
-             let DD = "";
-             try {
-               const wD = await rD.json();
-               (null === (zD = wD.error) || void 0 === zD ? void 0 : zD.message) && (DD = wD.error.message)
-             } catch (LD) {}
- ... (18 more removed lines; see GitHub link above)
+       constructor(pp) {
+         let ip = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           Op = arguments.length > 5 ? arguments[5] : void 0,
+           op = arguments.length > 6 ? arguments[6] : void 0,
+           xp = arguments.length > 7 ? arguments[7] : void 0;
+         super(pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, ip, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Op, this.useVertexAlpha = op, this.color = new  … [truncated]
+         const Lp = {
+           attributes: [Sp.j.PositionKind],
+           uniforms: ["world", "viewProjection"],
+           needAlphaBlending: !0,
+           defines: [],
+           useClipPlane: null,
+           shaderLanguage: 0
+         };
+         if (this.useVertexAlpha ? Lp.defines.push("#define VERTEXALPHA") : Lp.needAlphaBlending = !1, this.useVertexColor ? (Lp.defines.push("#define VERTEXCOLOR"), Lp.attributes.push(Sp.j.ColorKind)) : (Lp.uniforms.push("color"), this._color4 = new Ip.h), xp) this.material = xp;
+         else {
+ ... (2 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L795` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L282-L283) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L795)

```diff
-           throw RD
+           const pp = new Dp.q("colorShader", this.Gl(), "color", Lp, !1);
+           pp.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(pp)
```

#### 19. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L804-L807` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L286-L287) · [Before (L804-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L804-L807)

```diff
-     }
-     class xz {
-       constructor() {
-         this.listeners = []
+       getClassName() {
+         return "LinesMesh"
```

#### 20. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L809-L810` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L289-L290) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L809-L810)

```diff
-       addEventListener(DD) {
-         this.listeners.push(DD)
+       get material() {
+         return this._internalAbstractMeshDataInfo._material
```

#### 21. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L812-L813` → after: `L292-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L292-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L292-L296) · [Before (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L812-L813)

```diff
-       abort() {
-         this.listeners.forEach((DD => DD()))
+       set material(pp) {
+         const ip = this.material;
+         if (ip === pp) return;
+         const cp = ip && this._ownsMaterial;
+         this._ownsMaterial = !1, this._setInternalMaterial(pp), cp && ip?.dispose()
```

#### 22. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L815-L855` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L298-L299) · [Before (L815-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L815-L855)

```diff
-     }
-     let Tz, bz;
- 
-     function jz(DD) {
-       bz = DD
-     }
- 
-     function dz(DD) {
-       Tz = DD
-     }
-     async function Sz(DD, zD, wD, pD, sD, rD, LD) {
-       var cD;
-       const gD = Pz(DD);
-       gD.then((zD => {
-         wD[zD.measurementId] = zD.appId, DD.options.measurementId && zD.measurementId !== DD.options.measurementId && hz.warn(`The measurement ID in the local Firebase config (${DD.options.measurementId}) does not match the measurement ID fetched from the server (${zD.measurement … [truncated]
-       })).catch((DD => hz.error(DD))), zD.push(gD);
- ... (25 more removed lines; see GitHub link above)
+       _setInternalMaterial(pp) {
+         this._setMaterial(pp), this.material && (this.material.fillMode = Yp.b.LineListDrawMode, this.material.disableLighting = !0)
```

#### 23. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L857-L858` → after: `L301-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L301-L302) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L857-L858)

```diff
-       _delete() {
-         return delete lz[this.app.options.appId], Promise.resolve()
+       get checkCollisions() {
+         return !1
```

#### 24. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L860-L881` → after: `L304-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L304-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L304-L314) · [Before (L860-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L860-L881)

```diff
-     }
-     let lz = {},
-       Wz = [];
-     const Nz = {};
-     let Zz, yz, kz = "dataLayer",
-       mz = "gtag",
-       ez = !1;
- 
-     function oz(DD) {
-       if (ez) throw Mz.create("already-initialized");
-       DD.dataLayerName && (kz = DD.dataLayerName), DD.gtagName && (mz = DD.gtagName)
-     }
- 
-     function az(DD, zD, wD) {
-       ! function() {
-         const DD = [];
- ... (6 more removed lines; see GitHub link above)
+       set checkCollisions(pp) {}
+       _bind(pp, ip) {
+         if (!this._geometry) return this;
+         const cp = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
+         if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(ip, cp) : this._geometry._bind(ip, cp, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMate … [truncated]
+           const {
+             r: pp,
+             g: ip,
+             b: cp
+           } = this.color;
+           this._color4.set(pp, ip, cp, this.alpha), this.material.setColor4("color", this._color4)
```

#### 25. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L883-L888` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L316) · [Before (L883-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L883-L888)

```diff
-       }();
-       const pD = DD.options.appId;
-       if (!pD) throw Mz.create("no-app-id");
-       if (!DD.options.apiKey) {
-         if (!DD.options.measurementId) throw Mz.create("no-api-key");
-         hz.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${DD.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
+         return this
```

#### 26. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L890-L911` → after: `L318-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L318-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L318-L321) · [Before (L890-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L890-L911)

```diff
-       if (null != lz[pD]) throw Mz.create("already-exists", {
-         id: pD
-       });
-       if (!ez) {
-         ! function(DD) {
-           let zD = [];
-           Array.isArray(window[DD]) ? zD = window[DD] : window[DD] = zD
-         }(kz);
-         const {
-           wrappedGtag: DD,
-           gtagCore: zD
-         } = function(DD, zD, wD, pD, sD) {
-           let KD = function() {
-             for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
-             window[pD].push(arguments)
-           };
- ... (6 more removed lines; see GitHub link above)
+       _draw(pp, ip, cp) {
+         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
+         const Op = this.Gl().gy();
+         return this._unIndexed ? Op.drawArraysType(Yp.b.LineListDrawMode, pp.verticesStart, pp.verticesCount, cp) : Op.drawElementsType(Yp.b.LineListDrawMode, pp.indexStart, pp.indexCount, cp), this
```

#### 27. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L913-L930` → after: `L323-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L323-L325) · [Before (L913-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L913-L930)

```diff
-       lz[pD] = Sz(DD, Wz, Nz, zD, Zz, kz, wD);
-       return new iz(DD)
-     }
- 
-     function uz() {
-       let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pD.K)();
-       DD = (0, KD.H)(DD);
-       const zD = (0, pD.v)(DD, Bz);
-       return zD.isInitialized() ? zD.getImmediate() : vz(DD)
-     }
- 
-     function vz(DD) {
-       let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const wD = (0, pD.v)(DD, Bz);
-       if (wD.isInitialized()) {
-         const DD = wD.getImmediate();
- ... (2 more removed lines; see GitHub link above)
+       dispose(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || ip) && this.material?.dispose(!1, !1, !0), super.dispose(pp)
```

#### 28. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L932-L943` → after: `L327-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L327-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L327-L334) · [Before (L932-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L932-L943)

```diff
-       return wD.initialize({
-         options: zD
-       })
-     }
-     async function tz() {
-       if ((0, KD.L)()) return !1;
-       if (!(0, KD.g)()) return !1;
-       if (!(0, KD.Q)()) return !1;
-       try {
-         return await (0, KD.ab)()
-       } catch (DD) {
-         return !1
+       clone(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           cp = arguments.length > 2 ? arguments[2] : void 0;
+         if (ip && void 0 === ip._addToSceneRootNodes) {
+           const cp = ip;
+           return cp.source = this, new Pp(pp, this.Gl(), cp.parent, cp.source, cp.doNotCloneChildren)
+         }
+         return new Pp(pp, this.Gl(), ip, this, cp)
```

#### 29. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L945-L986` → after: `L336-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L336-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L336-L340) · [Before (L945-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L945-L986)

```diff
-     }
- 
-     function Fz(DD, zD, wD) {
-       DD = (0, KD.H)(DD), async function(DD, zD, wD, pD) {
-         if (pD && pD.global) return DD("set", {
-           screen_name: wD
-         }), Promise.resolve();
-         DD("config", await zD, {
-           update: !0,
-           screen_name: wD
-         })
-       }(yz, lz[DD.app.options.appId], zD, wD).catch((DD => hz.error(DD)))
-     }
-     async function Yz(DD) {
-       return DD = (0, KD.H)(DD), async function(DD, zD) {
-         const wD = await zD;
- ... (26 more removed lines; see GitHub link above)
+       createInstance(pp) {
+         const ip = new Wp(pp, this);
+         if (this.MJ) {
+           ip.MJ = {};
+           for (const pp in this.MJ) ip.MJ[pp] = this.MJ[pp]
```

#### 30. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L988-L1003` → after: `L342-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L342-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L342-L350) · [Before (L988-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L988-L1003)

```diff
-         DD("config", await zD, {
-           update: !0,
-           user_properties: wD
-         })
-       }(yz, lz[DD.app.options.appId], zD, wD).catch((DD => hz.error(DD)))
-     }
- 
-     function Dw(DD, zD) {
-       DD = (0, KD.H)(DD), async function(DD, zD) {
-         const wD = await DD;
-         window[`ga-disable-${wD}`] = !zD
-       }(lz[DD.app.options.appId], zD).catch((DD => hz.error(DD)))
-     }
- 
-     function zw(DD) {
-       yz ? yz("set", DD) : dz(DD)
+         return ip
+       }
+       serialize(pp) {
+         super.serialize(pp), pp.color = this.color.BOp(), pp.alpha = this.alpha
+       }
+       static Parse(pp, ip) {
+         const cp = new Pp(pp.name, ip);
+         return cp.color = Ip.d.FromArray(pp.color), cp.alpha = pp.alpha, cp
+       }
```

#### 31. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L1005-L1015` → after: `L352-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L352-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L352-L359) · [Before (L1005-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L1005-L1015)

```diff
- 
-     function ww(DD, zD, wD, pD) {
-       DD = (0, KD.H)(DD), async function(DD, zD, wD, pD, sD) {
-         if (sD && sD.global) DD("event", wD, pD);
-         else {
-           const sD = await zD;
-           DD("event", wD, Object.assign(Object.assign({}, pD), {
-             send_to: sD
-           }))
-         }
-       }(yz, lz[DD.app.options.appId], zD, wD, pD).catch((DD => hz.error(DD)))
+     Pp.ForceGLSL = !1;
+     class Wp extends Lp.d {
+       constructor(pp, ip) {
+         super(pp, ip), this.intersectionThreshold = ip.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 32. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L1018-L1039` → after: `L363-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L363-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/267.js#L363-L365) · [Before (L1018-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/267.js#L1018-L1039)

```diff
-     function pw(DD) {
-       yz ? yz("consent", "update", DD) : jz(DD)
-     }
-     const sw = "@firebase/analytics",
-       Kw = "0.10.0";
-     (0, pD.z)(new rD.f(Bz, ((DD, zD) => {
-       let {
-         options: wD
-       } = zD;
-       return az(DD.getProvider("app").getImmediate(), DD.getProvider("installations-internal").getImmediate(), wD)
-     }), "PUBLIC")), (0, pD.z)(new rD.f("analytics-internal", (function(DD) {
-       try {
-         const zD = DD.getProvider(Bz).getImmediate();
-         return {
-           logEvent: (DD, wD, pD) => ww(zD, DD, wD, pD)
-         }
- ... (6 more removed lines; see GitHub link above)
+     function Up() {
+       yp || (yp = !0, xp.d._LinesMeshParser = (pp, ip) => Pp.Parse(pp, ip))
+     }(Op = Pp.prototype).enableEdgesRendering ?? (Op.enableEdgesRendering = (0, Ap.k)("LinesMesh", "enableEdgesRendering")), (op = Wp.prototype).enableEdgesRendering ?? (op.enableEdgesRendering = (0, Ap.k)("InstancedLinesMesh", "enableEdgesRendering"))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/268.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/268.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658)

#### 1. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L5-L3926` → after: `L4-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/268.js#L4-L239) · [Before (L5-L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/268.js#L5-L3926)

```diff
-     40455: (DD, zD, wD) => {
-         wD.r(zD), wD.d(zD, {
-           ActionCodeOperation: () => UD,
-           ActionCodeURL: () => Yz,
-           AuthCredential: () => Nz,
-           AuthErrorCodes: () => hD,
-           EmailAuthCredential: () => az,
-           EmailAuthProvider: () => qz,
-           FacebookAuthProvider: () => pw,
-           FactorId: () => cD,
-           GithubAuthProvider: () => Kw,
-           GoogleAuthProvider: () => sw,
-           OAuthCredential: () => vz,
-           OAuthProvider: () => ww,
-           OperationType: () => AD,
-           PhoneAuthCredential: () => Fz,
- ... (3906 more removed lines; see GitHub link above)
+   40647: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => kp,
+       f: () => ep,
+       j: () => Hp,
+       m: () => dp,
+       p: () => tp,
+       q: () => vp
+     });
+     var Op = cp(40233),
+       op = cp(40296),
+       Ip = cp(37320),
+       Sp = cp(40342),
+       xp = cp(40654),
+       Lp = cp(40530),
+       Yp = cp(40261),
+ ... (220 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3928-L3952` → after: `L241-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L241-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/268.js#L241-L354) · [Before (L3928-L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/268.js#L3928-L3952)

```diff
-           os = new Map([
-             ["identitytoolkit.googleapis.com", "p"],
-             ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
-             ["test-identitytoolkit.sandbox.googleapis.com", "t"]
-           ]);
- 
-         function as(DD) {
-           const zD = DD.config;
-           VD(zD.authDomain, DD, "auth-domain-config-required");
-           const wD = zD.emulator ? dD(zD, "emulator/auth/iframe") : `https://${DD.config.authDomain}/__/auth/iframe`,
-             KD = {
-               apiKey: zD.apiKey,
-               appName: DD.name,
-               v: sD.e
-             },
-             rD = os.get(DD.config.apiHost);
- ... (9 more removed lines; see GitHub link above)
+           shaderLanguage: this._options.shaderLanguage,
+           extraInitializationsAsync: this._options.extraInitializationsAsync
+         }, xp), Op ? cp.setEffect(Mp, qp, this._materialContext) : kp && kp.setEffect(Mp, qp), this._onEffectCreatedObservable && (wp.effect = Mp, wp.subMesh = cp ?? pp?.Am[0] ?? null, this._onEffectCreatedObservable.notifyObservers(wp))), kp._wasPreviouslyUsingInstances = !!ip,  … [truncated]
+       }
+       bindOnlyWorldMatrix(pp, ip) {
+         const cp = ip ?? this.getEffect();
+         if (!cp) return;
+         const Op = this._options.uniforms; - 1 !== Op.indexOf("world") && cp.setMatrix("world", pp);
+         const op = this.Gl(); - 1 !== Op.indexOf("worldView") && (pp.multiplyToRef(op.getViewMatrix(), this._cachedWorldViewMatrix), cp.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Op.indexOf("worldViewProjection") && (pp.multiplyToRef(op.getTransformMatrix(), thi … [truncated]
+       }
+       bindForSubMesh(pp, ip, cp) {
+         this.bind(pp, ip, cp._drawWrapperOverride?.effect, cp)
+       }
+       bind(pp, ip, cp, Op) {
+         const op = Op && this._storeEffectOnSubMeshes,
+           Ip = cp ?? (op ? Op.effect : this.getEffect());
+ ... (98 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3954-L4026` → after: `L356-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L356-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/268.js#L356-L573) · [Before (L3954-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/268.js#L3954-L4026)

```diff
-         class vs {
-           constructor(DD) {
-             this.window = DD, this.associatedEvent = null
-           }
-           close() {
-             if (this.window) try {
-               this.window.close()
-             } catch (DD) {}
-           }
-         }
- 
-         function ts(DD, zD, wD) {
-           let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
-             KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
-           const rD = Math.max((window.screen.availHeight - KD) / 2, 0).toString(),
-             LD = Math.max((window.screen.availWidth - sD) / 2, 0).toString();
- ... (57 more removed lines; see GitHub link above)
+         const cp = Object.keys(this._options);
+         for (const Op of cp) {
+           const pp = this._options[Op];
+           Array.isArray(pp) && (this._options[Op] = pp.slice(0))
+         }
+         this.stencil.copyTo(ip.stencil);
+         for (const Op in this._textures) ip.setTexture(Op, this._textures[Op]);
+         for (const Op in this._internalTextures) ip.setInternalTexture(Op, this._internalTextures[Op]);
+         for (const Op in this._textureArrays) ip.setTextureArray(Op, this._textureArrays[Op]);
+         for (const Op in this._externalTextures) ip.setExternalTexture(Op, this._externalTextures[Op]);
+         for (const Op in this._ints) ip.setInt(Op, this._ints[Op]);
+         for (const Op in this._uints) ip.setUInt(Op, this._uints[Op]);
+         for (const Op in this._floats) ip.setFloat(Op, this._floats[Op]);
+         for (const Op in this._floatsArrays) ip.setFloats(Op, this._floatsArrays[Op]);
+         for (const Op in this._colors3) ip.setColor3(Op, this._colors3[Op]);
+         for (const Op in this._colors3Arrays) ip._colors3Arrays[Op] = this._colors3Arrays[Op];
+ ... (202 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/269.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/269.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b)

#### 1. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L4-L141` → after: `L5-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L5-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/269.js#L5-L24) · [Before (L4-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/269.js#L4-L141)

```diff
-   40506: (DD, zD, wD) => {
-     wD.d(zD, {
-       $f: () => Mw,
-       A: () => uz,
-       Ab: () => fz,
-       Ad: () => cD,
-       Ae: () => iw,
-       Af: () => wp,
-       Bc: () => pz,
-       Bf: () => tw,
-       Ce: () => Yw,
-       Dd: () => RD,
-       De: () => dw,
-       Df: () => Qw,
-       E: () => UD,
-       Eb: () => Lz,
- ... (122 more removed lines; see GitHub link above)
+   40682: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       FirebaseError: () => Op.d,
+       SDK_VERSION: () => Op.f,
+       _DEFAULT_ENTRY_NAME: () => Op.g,
+       uOp: () => Op.i,
+       _addOrOverwriteComponent: () => Op.k,
+       _apps: () => Op.o,
+       _clearComponents: () => Op.r,
+       _components: () => Op.u,
+       _getProvider: () => Op.x,
+       _registerComponent: () => Op.z,
+       _removeServiceInstance: () => Op.B,
+       deleteApp: () => Op.D,
+       getApp: () => Op.J,
+       getApps: () => Op.G,
+ ... (4 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L143-L1364` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/269.js#L26-L27) · [Before (L143-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/269.js#L143-L1364)

```diff
-     const pD = -2147483648,
-       sD = 12,
-       KD = 12,
-       rD = 4095,
-       LD = {
-         Lifeform: 1,
-         Throwable: 2,
-         Mesh: 3,
-         Audio: 4,
-         Item: 5
-       },
-       cD = {
-         Alive: 1,
-         Crouching: 2,
-         OnGround: 4,
-         InFluid: 8,
- ... (1206 more removed lines; see GitHub link above)
+     var Op = cp(40687);
+     (0, Op.S)("firebase", "9.23.0", "app")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/270.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/270.js` (110 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3)

#### 1. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L4)

```diff
-   41502: (DD, zD, wD) => {
+   40700: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7-L9` → after: `L22-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L22-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L22-L30) · [Before (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7-L9)

```diff
-       f: () => LD,
-       j: () => rD,
-       m: () => gD
+       gb: () => dp,
+       i: () => kp,
+       l: () => jp,
+       o: () => ep,
+       r: () => xp,
+       s: () => Sp,
+       v: () => bp,
+       x: () => lp,
+       y: () => qp
```

#### 3. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L11-L21` → after: `L32-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L32-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L32-L181) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L11-L21)

```diff
-     var pD = wD(37267),
-       sD = wD(38689),
-       KD = wD(38684);
- 
-     function rD(DD, zD, wD, pD) {
-       const sD = KD.q;
-       zD.fill(0), DD.gravity.toArray(zD, sD.gravity), DD.colorDead.toArray(zD, sD.colorDead), wD[sD.ramp] = DD.useRampGradients ? 1 : 0;
-       const rD = DD.getColorGradients(),
-         LD = UD(DD, rD, "colour", pD);
-       wD[sD.colorCount] = LD;
-       for (let KD = 0; KD < LD; KD++) {
+     const Op = function(pp) {
+         const ip = [];
+         let cp = 0;
+         for (let Op = 0; Op < pp.length; Op++) {
+           let op = pp.charCodeAt(Op);
+           op < 128 ? ip[cp++] = op : op < 2048 ? (ip[cp++] = op >> 6 | 192, ip[cp++] = 63 & op | 128) : 55296 === (64512 & op) && Op + 1 < pp.length && 56320 === (64512 & pp.charCodeAt(Op + 1)) ? (op = 65536 + ((1023 & op) << 10) + (1023 & pp.charCodeAt(++Op)), ip[cp++] = op >> 1 … [truncated]
+         }
+         return ip
+       },
+       op = {
+         byteToCharMap_: null,
+         charToByteMap_: null,
+         byteToCharMapWebSafe_: null,
+         charToByteMapWebSafe_: null,
+         ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
+         get ENCODED_VALS() {
+ ... (134 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L23-L24` → after: `L183-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L183-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L183-L194) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L23-L24)

```diff
-         const DD = rD[fD(rD, KD)];
-         zD[sD.colorPositions + KD] = DD.gradient, DD.color1.toArray(zD, sD.color1 + 4 * KD), (null !== (cD = DD.color2) && void 0 !== cD ? cD : DD.color1).toArray(zD, sD.color2 + 4 * KD)
+         return null === (ip = Yp()) || void 0 === ip ? void 0 : ip[`_${pp}`]
+       };
+     class Wp {
+       constructor() {
+         this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((pp, ip) => {
+           this.resolve = pp, this.reject = ip
+         }))
+       }
+       wrapCallback(pp) {
+         return (ip, cp) => {
+           ip ? this.reject(ip) : this.resolve(cp), "function" === typeof pp && (this.promise.catch((() => {})), 1 === pp.length ? pp(ip) : pp(ip, cp))
+         }
```

#### 5. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L37-L40` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L199) · [Before (L37-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L37-L40)

```diff
-       return {
-         key: [],
-         texels: new Uint8Array(4 * KD.h)
-       }
+       return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
```

#### 6. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L44-L49` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L202-L203) · [Before (L44-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L44-L49)

```diff
-     function gD(DD, zD) {
-       return RD(DD, cD), !hD(cD, zD.key) && (zD.key.length = 0, zD.key.push(...cD), zD.key.length > 0 && function(DD, zD) {
-         for (let wD = 0; wD < KD.h; wD++) sD.l.GetCurrentGradient(wD / KD.h, DD, ((DD, zD, wD) => {
-           pD.Color3.LerpToRef(DD.color, zD.color, wD, AD)
-         })), zD[4 * wD] = 255 * AD.r, zD[4 * wD + 1] = 255 * AD.g, zD[4 * wD + 2] = 255 * AD.b, zD[4 * wD + 3] = 255
-       }(DD.getRampGradients(), zD.texels), !0)
+     function Up() {
+       return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yp())
```

#### 7. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L52-L57` → after: `L206-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L206-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L206-L224) · [Before (L52-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L52-L57)

```diff
-     function RD(DD, zD) {
-       zD.length = 0;
-       const wD = DD.useRampGradients ? DD.getRampGradients() : null;
-       if (null !== wD && void 0 !== wD && wD.length) {
-         zD.push(wD.length);
-         for (const DD of wD) zD.push(DD.gradient, DD.color.r, DD.color.g, DD.color.b)
+     function wp() {
+       const pp = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
+       return "object" === typeof pp && void 0 !== pp.id
+     }
+ 
+     function vp() {
+       return "object" === typeof navigator && "ReactNative" === navigator.product
+     }
+ 
+     function tp() {
+       const pp = yp();
+       return pp.indexOf("MSIE ") >= 0 || pp.indexOf("Trident/") >= 0
+     }
+ 
+     function Hp() {
+       try {
+ ... (3 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L62-L63` → after: `L228-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L228-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L228-L245) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L62-L63)

```diff
-     function UD(DD, zD, wD, pD) {
-       return zD ? zD.length > KD.b ? (pD(`particleStops:${wD}`, `GPU particles use the first 2 and last ${KD.b-2} of more than ${KD.b} ${wD} gradient stops (${DD.name})`), KD.b) : zD.length : 0
+     function dp() {
+       return new Promise(((pp, ip) => {
+         try {
+           let cp = !0;
+           const Op = "validate-browser-context-for-indexeddb-analytics-module",
+             op = self.indexedDB.open(Op);
+           op.onsuccess = () => {
+             op.result.close(), cp || self.indexedDB.deleteDatabase(Op), pp(!0)
+           }, op.onupgradeneeded = () => {
+             cp = !1
+           }, op.onerror = () => {
+             var pp;
+             ip((null === (pp = op.error) || void 0 === pp ? void 0 : pp.message) || "")
+           }
+         } catch (cp) {
+           ip(cp)
+ ... (2 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L66-L67` → after: `L248-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L248-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L248-L254) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L66-L67)

```diff
-     function fD(DD, zD) {
-       return zD < 2 || DD.length <= KD.b ? zD : DD.length - KD.b + zD
+     function ep() {
+       return !("undefined" === typeof navigator || !navigator.cookieEnabled)
+     }
+     class jp extends Error {
+       constructor(pp, ip, cp) {
+         super(ip), this.code = pp, this.customData = cp, this.name = "FirebaseError", Object.setPrototypeOf(this, jp.prototype), Error.captureStackTrace && Error.captureStackTrace(this, kp.prototype.create)
+       }
```

#### 10. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L69-L70` → after: `L256-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L256-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L256-L274) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L69-L70)

```diff
-     const ID = new Float32Array(KD.n),
-       BD = new Uint32Array(ID.buffer);
+     class kp {
+       constructor(pp, ip, cp) {
+         this.service = pp, this.serviceName = ip, this.errors = cp
+       }
+       create(pp) {
+         const ip = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
+           cp = `${this.service}/${pp}`,
+           Op = this.errors[pp],
+           op = Op ? function(pp, ip) {
+             return pp.replace(mp, ((pp, cp) => {
+               const Op = ip[cp];
+               return null != Op ? String(Op) : `<${cp}?>`
+             }))
+           }(Op, ip) : "Error",
+           Ip = `${this.serviceName}: ${op} (${cp}).`;
+         return new jp(cp, Ip, ip)
+ ... (3 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L72-L73` → after: `L276-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L276-L279) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L72-L73)

```diff
-     function GD(DD, zD, wD) {
-       return rD(DD, ID, BD, wD), zD && hD(BD, zD) ? null : BD.slice()
+     function Rp(pp) {
+       for (const ip in pp)
+         if (Object.prototype.hasOwnProperty.call(pp, ip)) return !1;
+       return !0
```

#### 12. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L77-L79` → after: `L283-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L283-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L283-L295) · [Before (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L77-L79)

```diff
-       if (DD.length !== zD.length) return !1;
-       for (let wD = 0; wD < DD.length; wD++)
-         if (DD[wD] !== zD[wD]) return !1;
+       if (pp === ip) return !0;
+       const cp = Object.keys(pp),
+         Op = Object.keys(ip);
+       for (const op of cp) {
+         if (!Op.includes(op)) return !1;
+         const cp = pp[op],
+           Ip = ip[op];
+         if (Mp(cp) && Mp(Ip)) {
+           if (!qp(cp, Ip)) return !1
+         } else if (cp !== Ip) return !1
+       }
+       for (const op of Op)
+         if (!cp.includes(op)) return !1;
```

#### 13. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L83-L85` → after: `L299-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L299-L300) · [Before (L83-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L83-L85)

```diff
-     function nD(DD, zD, wD) {
-       var pD;
-       DD[zD] = wD.gradient, DD[zD + 1] = wD.factor1, DD[zD + 2] = null !== (pD = wD.factor2) && void 0 !== pD ? pD : wD.factor1
+     function Mp(pp) {
+       return null !== pp && "object" === typeof pp
```

#### 14. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L87-L94` → after: `L302-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L302-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L302-L308) · [Before (L87-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L87-L94)

```diff
-   },
-   41496: (DD, zD, wD) => {
-     function pD() {
-       let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
-       const zD = new Set;
-       return (wD, pD) => {
-         zD.has(wD) || (zD.add(wD), console.warn(DD + pD))
-       }
+ 
+     function Cp(pp) {
+       const ip = [];
+       for (const [cp, Op] of Object.entries(pp)) Array.isArray(Op) ? Op.forEach((pp => {
+         ip.push(encodeURIComponent(cp) + "=" + encodeURIComponent(pp))
+       })) : ip.push(encodeURIComponent(cp) + "=" + encodeURIComponent(Op));
+       return ip.length ? "&" + ip.join("&") : ""
```

#### 15. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L96-L132` → after: `L310-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L310-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L310-L316) · [Before (L96-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L96-L132)

```diff
-     wD.d(zD, {
-       c: () => pD
-     })
-   },
-   41540: (DD, zD, wD) => {
-     wD.d(zD, {
-       createLiteRendererAsync: () => Sc,
-       liteBabylonBackend: () => ZD,
-       setPipelineFailureHook: () => Fs
-     });
-     var pD = wD(37267),
-       sD = wD(37594),
-       KD = wD(37885),
-       rD = wD(37210),
-       LD = wD(37895);
-     class cD extends LD.d {
- ... (21 more removed lines; see GitHub link above)
+ 
+     function Ep(pp) {
+       const ip = {};
+       return pp.replace(/^\?/, "").split("&").forEach((pp => {
+         if (pp) {
+           const [cp, Op] = pp.split("=");
+           ip[decodeURIComponent(cp)] = decodeURIComponent(Op)
```

#### 16. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L134-L137` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L318) · [Before (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L134-L137)

```diff
-       }
-       getClassName() {
-         return "LinesMesh"
-       }
+       })), ip
```

#### 17. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L148-L150` → after: `L321-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L321-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L321-L325) · [Before (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L148-L150)

```diff
-     function hD(DD, zD, wD, pD) {
-       let sD = 0;
-       return DD.isVerticesDataPresent("color") && (sD |= AD), "none" !== zD && (sD |= UD), "thin" === zD && (sD |= fD, DD.isVerticesDataPresent("instanceColor") && (sD |= ID)), pD.fogEnabled && DD.applyFog && 0 !== pD.fogMode && (sD |= BD), wD >= 1 && (sD |= GD), sD
+     function Xp(pp) {
+       const ip = pp.indexOf("?");
+       if (!ip) return "";
+       const cp = pp.indexOf("#", ip);
+       return pp.substring(ip, cp > 0 ? cp : void 0)
```

#### 18. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L154` → after: `L329-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L329-L330) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L154)

```diff
-       DD.updateColor4("color", zD.color, zD.alpha)
+       const cp = new Qp(pp, ip);
+       return cp.subscribe.bind(cp)
```

#### 19. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L168-L178` → after: `L334-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L334-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L334-L338) · [Before (L168-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L168-L178)

```diff
-         this.name = DD, this.oB = zD, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.Bl = {
-           addOnce: DD => {
-             this.disposers.push(DD)
-           }
-         }, this.uniqueId = zD.getUniqueId()
-       }
-       get isFrozen() {
-         return this.checkReadyOnlyOnce
-       }
-       Ul() {
-         return this.oB
+         this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = ip, this.task.then((() => {
+           pp(this)
+         })).catch((pp => {
+           this.error(pp)
+         }))
```

#### 20. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L180-L181` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L340-L343) · [Before (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L180-L181)

```diff
-       getClassName() {
-         return "LiteMaterial"
+       next(pp) {
+         this.forEachObserver((ip => {
+           ip.next(pp)
+         }))
```

#### 21. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L183-L184` → after: `L345-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L345-L348) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L183-L184)

```diff
-       freeze() {
-         this.checkReadyOnlyOnce = !0
+       error(pp) {
+         this.forEachObserver((ip => {
+           ip.error(pp)
+         })), this.close(pp)
```

#### 22. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L186-L187` → after: `L350-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L350-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L350-L353) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L186-L187)

```diff
-       unfreeze() {
-         this.checkReadyOnlyOnce = !1
+       complete() {
+         this.forEachObserver((pp => {
+           pp.complete()
+         })), this.close()
```

#### 23. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L189-L191` → after: `L355-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L355-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L355-L373) · [Before (L189-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L189-L191)

```diff
-       markDirty() {}
-       get fillMode() {
-         return this.model.fillMode
+       subscribe(pp, ip, cp) {
+         let Op;
+         if (void 0 === pp && void 0 === ip && void 0 === cp) throw new Error("Missing Observer.");
+         Op = function(pp, ip) {
+           if ("object" !== typeof pp || null === pp) return !1;
+           for (const cp of ip)
+             if (cp in pp && "function" === typeof pp[cp]) return !0;
+           return !1
+         }(pp, ["next", "error", "complete"]) ? pp : {
+           next: pp,
+           error: ip,
+           complete: cp
+         }, void 0 === Op.next && (Op.next = Jp), void 0 === Op.error && (Op.error = Jp), void 0 === Op.complete && (Op.complete = Jp);
+         const op = this.unsubscribeOne.bind(this, this.observers.length);
+         return this.finalized && this.task.then((() => {
+           try {
+ ... (3 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L193-L194` → after: `L375-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L375-L376) · [Before (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L193-L194)

```diff
-       needAlphaBlendingForMesh(DD) {
-         return (0, VD.T)(this.model, DD.visibility, DD.hasVertexAlpha)
+       unsubscribeOne(pp) {
+         void 0 !== this.observers && void 0 !== this.observers[pp] && (delete this.observers[pp], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
```

#### 25. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L196-L197` → after: `L378-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L378-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L378-L380) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L196-L197)

```diff
-       needAlphaTestingForMesh(DD) {
-         return (0, VD.W)(this.model, DD.visibility, DD.hasVertexAlpha)
+       forEachObserver(pp) {
+         if (!this.finalized)
+           for (let ip = 0; ip < this.observers.length; ip++) this.sendOne(ip, pp)
```

#### 26. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L199-L201` → after: `L382-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L382-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L382-L389) · [Before (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L199-L201)

```diff
-       dispose() {
-         (0, OD.o)(this);
-         for (const DD of this.disposers.splice(0)) DD()
+       sendOne(pp, ip) {
+         this.task.then((() => {
+           if (void 0 !== this.observers && void 0 !== this.observers[pp]) try {
+             ip(this.observers[pp])
+           } catch (cp) {
+             "undefined" !== typeof console && console.error && console.error(cp)
+           }
+         }))
```

#### 27. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L203-L204` → after: `L391-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L391-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L391-L394) · [Before (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L203-L204)

```diff
-       get model() {
-         return (0, VD.db)(this)
+       close(pp) {
+         this.finalized || (this.finalized = !0, void 0 !== pp && (this.finalError = pp), this.task.then((() => {
+           this.observers = void 0, this.onNoObservers = void 0
+         })))
```

#### 28. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L207` → after: `L397-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L397-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L397-L402) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L207)

```diff
-     const bD = new WeakSet;
+ 
+     function Jp() {}
+     const Bp = 1e3,
+       Np = 2,
+       Tp = 144e5,
+       fp = .5;
```

#### 29. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L210` → after: `L405-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L405-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L405-L408) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L210)

```diff
-       return bD.has(DD)
+       let ip = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Np;
+       const cp = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bp) * Math.pow(ip, pp),
+         Op = Math.round(fp * cp * (Math.random() - .5) * 2);
+       return Math.min(Tp, cp + Op)
```

#### 30. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L214` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L412) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L214)

```diff
-       bD.add(DD)
+       return pp && pp._delegate ? pp._delegate : pp
```

#### 31. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L216-L244` → after: `L414-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L414-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L414-L452) · [Before (L216-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L216-L244)

```diff
-     const SD = {
-       create: (DD, zD) => ((0, JD.r)(DD, new TD(DD.name, zD)), PD.b.defines()),
-       write: () => {},
-       addFeature: (DD, zD) => {
-         const wD = DD.mirror;
-         zD.feature === XD.g && zD.state.dirLightCount > 0 && (DD.disableLighting = !0, (0, VD.ab)(DD)), "BLOXD_LIGHTING" in zD.defines && (0, OD.l)(wD), zD.feature === QD.j && ((0, MD.g)(zD.state, xD), function(DD, zD) {
-           const wD = DD.Ul().iI();
-           zD.textures.forEach(((pD, sD) => {
-             setTimeout((() => {
-               var KD, rD;
-               const {
-                 url: LD
-               } = pD.source;
-               wD.atlasArray(LD, null !== (KD = null === (rD = zD.sources.pixels) || void 0 === rD ? void 0 : rD[sD]) && void 0 !== KD ? KD : null, zD.sources.layerWidth).then((wD => {
-                 (0, MD.b)(DD, zD, sD, wD, wD.layerWidth, wD.layers, xD)
-               })).catch((DD => {
- ... (13 more removed lines; see GitHub link above)
+   },
+   40687: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Ip.l,
+       f: () => Wi,
+       g: () => Vp,
+       i: () => oi,
+       k: () => Ii,
+       o: () => ci,
+       r: () => Yi,
+       u: () => Oi,
+       x: () => xi,
+       z: () => Si,
+       B: () => Li,
+       D: () => vi,
+       J: () => Ui,
+ ... (23 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L246-L270` → after: `L454-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L454-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L454-L455) · [Before (L246-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L246-L270)

```diff
-       cube: dD,
-       canvas: (DD, zD, wD) => {
-         let {
-           width: pD,
-           height: sD,
-           mipmaps: KD,
-           samplingMode: rD = CD.i.trilinear,
-           hasAlpha: LD = !1,
-           wrap: cD = CD.c.clamp
-         } = wD;
-         const gD = DD.iI().createCanvas(pD, sD),
-           RD = new CD.l("2d", {
-             kind: "canvas",
-             width: pD,
-             height: sD,
-             canvas: gD
- ... (9 more removed lines; see GitHub link above)
+       set: (pp, ip, cp) => (pp[ip] = cp, !0),
+       has: (pp, ip) => pp instanceof IDBTransaction && ("done" === ip || "store" === ip) || ip in pp
```

#### 33. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L272-L306` → after: `L457-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L457-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L457-L468) · [Before (L272-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L272-L306)

```diff
-     var iD = wD(37438),
-       lD = wD(37119);
-     class WD {
-       constructor(DD, zD, wD) {
-         this.engine = DD, this.clearColor = zD, this.ambientColor = wD, this.onBeforeRenderObservable = new lD.b, this.onBeforeCameraRenderObservable = new lD.b, this.onAfterRenderObservable = new lD.b, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = … [truncated]
-       }
-       iI() {
-         return this.engine
-       }
-       getUniqueId() {
-         return ++this.lastId
-       }
-       getFrameId() {
-         return this.frameId
-       }
-       getAnimationRatio() {
- ... (19 more removed lines; see GitHub link above)
+ 
+     function yp(pp) {
+       return pp !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (xp || (xp = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(pp) ? function() {
+         for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
+         return pp.apply(vp(this), cp), wp(Lp.get(this))
+       } : function() {
+         for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
+         return wp(pp.apply(vp(this), cp))
+       } : function(ip) {
+         for (var cp = arguments.length, Op = new Array(cp > 1 ? cp - 1 : 0), op = 1; op < cp; op++) Op[op - 1] = arguments[op];
+         const Ip = pp.call(vp(this), ip, ...Op);
+         return Dp.set(Ip, ip.sort ? ip.sort() : [ip]), wp(Ip)
```

#### 34. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L310-L311` → after: `L472-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L472-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L472-L489) · [Before (L310-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L310-L311)

```diff
-     function ND() {
-       throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
+     function Up(pp) {
+       return "function" === typeof pp ? yp(pp) : (pp instanceof IDBTransaction && function(pp) {
+         if (Yp.has(pp)) return;
+         const ip = new Promise(((ip, cp) => {
+           const Op = () => {
+               pp.removeEventListener("complete", op), pp.removeEventListener("error", Ip), pp.removeEventListener("abort", Ip)
+             },
+             op = () => {
+               ip(), Op()
+             },
+             Ip = () => {
+               cp(pp.error || new DOMException("AbortError", "AbortError")), Op()
+             };
+           pp.addEventListener("complete", op), pp.addEventListener("error", Ip), pp.addEventListener("abort", Ip)
+         }));
+         Yp.set(pp, ip)
+ ... (2 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L313-L339` → after: `L491-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L491-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L491-L504) · [Before (L313-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L313-L339)

```diff
-     const ZD = {
-       ZwD: ND,
-       rsD: (DD, zD) => {
-         const wD = new WD(DD.engine, pD.e.FromArray(zD.clearColor), pD.Color3.FromArray(zD.ambientColor));
-         (0, rD.d)(SD, wD), DD.oB = wD,
-           function(DD, zD) {
-             const wD = Object.assign((0, iD.i)(DD, "camera"), {
-               layerMask: 268435455
-             });
-             DD.model.nodes.setWorldSource(wD.row, DD.model.view.worldMatrix), DD.camera = zD.activeCamera = wD
-           }(DD, wD), (0, sD.i)(DD, ((DD, zD, wD) => (0, KD.j)(DD, zD, wD, LD.d)))
-       },
-       wsD: () => {},
-       setBabylonFog: () => {},
-       csD: ND,
-       UsD: () => {},
- ... (11 more removed lines; see GitHub link above)
+ 
+     function wp(pp) {
+       if (pp instanceof IDBRequest) return function(pp) {
+         const ip = new Promise(((ip, cp) => {
+           const Op = () => {
+               pp.removeEventListener("success", op), pp.removeEventListener("error", Ip)
+             },
+             op = () => {
+               ip(wp(pp.result)), Op()
+             },
+             Ip = () => {
+               cp(pp.error), Op()
+             };
+           pp.addEventListener("success", op), pp.addEventListener("error", Ip)
```

#### 36. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L341-L360` → after: `L506-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L506-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L506-L532) · [Before (L341-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L341-L360)

```diff
-         this.deviceLost = Promise.race([DD, zD]), this.deviceLost.then((() => {
-           this.lost = !0
-         }))
-       }
-       frameDrawn() {
-         this.refusedFrames = 0
-       }
-       frameFailed(DD) {
-         (function(DD) {
-           const {
-             name: zD,
-             message: wD
-           } = null !== DD && void 0 !== DD ? DD : {};
-           return "InvalidStateError" === zD && "string" === typeof wD && wD.startsWith("GPUDevice.")
-         })(DD) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
-           reason: "unknown",
- ... (4 more removed lines; see GitHub link above)
+         return ip.then((ip => {
+           ip instanceof IDBCursor && Lp.set(ip, pp)
+         })).catch((() => {})), Pp.set(ip, pp), ip
+       }(pp);
+       if (Ap.has(pp)) return Ap.get(pp);
+       const ip = Up(pp);
+       return ip !== pp && (Ap.set(pp, ip), Pp.set(ip, pp)), ip
+     }
+     const vp = pp => Pp.get(pp);
+     const tp = ["get", "getKey", "getAll", "getAllKeys", "count"],
+       Hp = ["put", "add", "delete", "clear"],
+       dp = new Map;
+ 
+     function ep(pp, ip) {
+       if (!(pp instanceof IDBDatabase) || ip in pp || "string" !== typeof ip) return;
+       if (dp.get(ip)) return dp.get(ip);
+ ... (11 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L364-L375` → after: `L541-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L541-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L541-L619) · [Before (L364-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L364-L375)

```diff
-         this.resources = DD, this.matrixKey = {
-           bA: 0
-         }, this.attributesKey = {
-           bA: 0
-         }, this.inputs = Object.create(null);
-         for (let zD = 0; zD < 4; zD++) this.inputs[`world${zD}`] = new uD(this.matrixKey, 16 * zD, 64, 4)
-       }
-       release() {
-         this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
-       }
-       bind(DD, zD) {
-         this.resources.vertexBufferCreated(this.matrixKey, DD, !0), zD && this.resources.vertexBufferCreated(this.attributesKey, zD, !0)
+         this.container = pp
+       }
+       getPlatformInfoString() {
+         return this.container.getProviders().map((pp => {
+           if (function(pp) {
+               const ip = pp.getComponent();
+               return "VERSION" === (null === ip || void 0 === ip ? void 0 : ip.type)
+             }(pp)) {
+             const ip = pp.getImmediate();
+             return `${ip.library}/${ip.version}`
+           }
+           return null
+         })).filter((pp => pp)).join(" ")
+       }
+     }
+     const kp = "@firebase/app",
+ ... (63 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L378` → after: `L622-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L622-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L622-L664) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L378)

```diff
-     class oD extends eD {
+ 
+     function Ii(pp, ip) {
+       pp.container.addOrOverwriteComponent(ip)
+     }
+ 
+     function Si(pp) {
+       const ip = pp.name;
+       if (Oi.has(ip)) return Rp.debug(`There were multiple attempts to register component ${ip}.`), !1;
+       Oi.set(ip, pp);
+       for (const cp of ci.values()) oi(cp, pp);
+       return !0
+     }
+ 
+     function xi(pp, ip) {
+       const cp = pp.container.getProvider("heartbeat").getImmediate({
+         optional: !0
+ ... (27 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L380-L399` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L666) · [Before (L380-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L380-L399)

```diff
-         super(DD), this.mesh = zD, this.rowStride = void 0, this.matrices = null, this.attributes = null;
-         const pD = this.inputs;
-         let sD = 0;
-         for (const {
-             size: rD
-           }
-           of wD) sD += rD;
-         for (const {
-             name: rD,
-             offset: LD,
-             size: cD,
-             type: gD
-           }
-           of wD) pD[rD] = new uD(this.attributesKey, 4 * LD, 4 * sD, cD, !0, gD);
-         this.rowStride = sD, DD.b_.set(zD, this);
-         const KD = zD.isVerticesDataPresent;
- ... (4 more removed lines; see GitHub link above)
+         this._isDeleted = !1, this._options = Object.assign({}, pp), this._config = Object.assign({}, ip), this._name = ip.name, this._automaticDataCollectionEnabled = ip.automaticDataCollectionEnabled, this._container = cp, this.container.vJ(new Op.d("app", (() => this), "PUBLIC … [truncated]
```

#### 40. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L401-L405` → after: `L668-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L668-L669) · [Before (L401-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L401-L405)

```diff
-       Z5(DD) {
-         this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, DD ? 64 * DD : void 0)
-       }
-       y5() {
-         this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
+       get automaticDataCollectionEnabled() {
+         return this.checkDestroyed(), this._automaticDataCollectionEnabled
```

#### 41. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L407-L408` → after: `L671-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L671-L672) · [Before (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L407-L408)

```diff
-       matrixRows(DD, zD) {
-         this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * DD, 16 * zD)
+       set automaticDataCollectionEnabled(pp) {
+         this.checkDestroyed(), this._automaticDataCollectionEnabled = pp
```

#### 42. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L410-L411` → after: `L674-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L674-L675) · [Before (L410-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L410-L411)

```diff
-       attributeRows(DD, zD) {
-         this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, DD * this.rowStride, zD * this.rowStride)
+       get name() {
+         return this.checkDestroyed(), this._name
```

#### 43. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L413-L414` → after: `L677-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L677-L678) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L413-L414)

```diff
-       release() {
-         super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
+       get options() {
+         return this.checkDestroyed(), this._options
```

#### 44. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L416-L418` → after: `L680-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L680-L681) · [Before (L416-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L416-L418)

```diff
-       mirror(DD, zD, wD) {
-         const pD = this.mesh._thinInstanceDataStorage;
-         pD.matrixData = DD, pD.matrixBufferSize = zD, pD.worldMatrices = null, pD.instancesCount = wD
+       get config() {
+         return this.checkDestroyed(), this._config
```

#### 45. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L420-L428` → after: `L683-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L683-L684) · [Before (L420-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L420-L428)

```diff
-     }
-     class aD extends eD {
-       constructor(DD, zD, wD) {
-         var pD, sD, KD, rD;
-         super(DD), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (pD = null === wD | … [truncated]
-           this.inputs[DD] = new uD(this.attributesKey, 4 * this.offsets[zD], 4 * this.rowStride, wD.strides[DD])
-         })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), DD.batchUploads.set(zD, this), zD.Bl.addOnce((() => {
-           this.release()
-         }))
+       get container() {
+         return this._container
```

#### 46. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L430-L431` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L686-L687) · [Before (L430-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L430-L431)

```diff
-       get packedMatrices() {
-         return this.matrices
+       get isDeleted() {
+         return this._isDeleted
```

#### 47. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L433-L435` → after: `L689-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L689-L690) · [Before (L433-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L433-L435)

```diff
-       packedRowMesh(DD) {
-         const zD = this.packedBatch;
-         return zD.renderSelf ? 0 === DD ? this.packedSource : zD.instances[DD - 1] : zD.instances[DD]
+       set isDeleted(pp) {
+         this._isDeleted = pp
```

#### 48. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L437-L438` → after: `L692-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L692-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L692-L695) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L437-L438)

```diff
-       get packedAttributes() {
-         return this.attributes
+       checkDestroyed() {
+         if (this.isDeleted) throw Ai.create("app-deleted", {
+           appName: this._name
+         })
```

#### 49. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L440-L446` → after: `L697-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L697-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L697-L705) · [Before (L440-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L440-L446)

```diff
-       pack(DD, zD, wD, pD) {
-         const sD = (zD.renderSelf ? 1 : 0) + zD.rows.length;
-         if (this.frame = pD, this.count = sD, this.packedSource = DD, this.packedBatch = zD, 0 === sD) return;
-         if (DD.getWorldMatrix(), 16 * sD > this.matrices.length) {
-           let DD = this.matrices.length / 16;
-           for (; DD < sD;) DD *= 2;
-           this.matrices = new Float32Array(16 * DD), this.attributes &&= new Float32Array(DD * this.rowStride), this.bind(this.matrices, this.attributes)
+     }
+     const Wi = "9.23.0";
+ 
+     function yi(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         cp = pp;
+       if ("object" !== typeof ip) {
+         ip = {
+           name: ip
```

#### 50. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L453-L467` → after: `L708-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L708-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L708-L722) · [Before (L453-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L453-L467)

```diff
-       packRow(DD, zD, wD, pD) {
-         const sD = this.matrices;
-         if (wD < 0) sD.set(zD.getWorldMatrix().m, 16 * DD);
-         else
-           for (let gD = 0; gD < 16; gD++) sD[16 * DD + gD] = pD[16 * wD + gD];
-         const KD = this.attributes;
-         if (!KD) return;
-         const rD = zD.iW,
-           LD = this.layout;
-         for (let gD = 0; gD < LD.length; gD++) {
-           var cD;
-           const zD = null !== (cD = rD[LD[gD]]) && void 0 !== cD ? cD : 0,
-             wD = DD * this.rowStride + this.offsets[gD];
-           zD.toArray ? zD.toArray(KD, wD) : zD.copyToArray ? zD.copyToArray(KD, wD) : KD[wD] = zD
-         }
+       const op = Object.assign({
+           name: Vp,
+           automaticDataCollectionEnabled: !1
+         }, ip),
+         Sp = op.name;
+       if ("string" !== typeof Sp || !Sp) throw Ai.create("bad-app-name", {
+         appName: String(Sp)
+       });
+       if (cp || (cp = (0, Ip.B)()), !cp) throw Ai.create("no-options");
+       const xp = ci.get(Sp);
+       if (xp) {
+         if ((0, Ip.y)(cp, xp.options) && (0, Ip.y)(op, xp.config)) return xp;
+         throw Ai.create("duplicate-app", {
+           appName: Sp
+         })
```

#### 51. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1076-L1370` → after: `L731-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L731-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L731-L736) · [Before (L1076-L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L1076-L1370)

```diff
-       const DD = Xw;
-       return `${Ew(DD)}${Qw(DD,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${Jw.e}>,\n}\n@group(${DD.group}) @binding(${DD.work}) var<uniform> bloxd … [truncated]
-     }
-     const Pw = 2;
-     const Cw = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";
- 
-     function xw(DD, zD) {
-       let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
-       const pD = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${zD.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y … [truncated]
-         sD = "trace" === wD || "lit" === wD,
-         KD = "maskEdge" === wD ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
-         rD = sD ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${zD.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of step … [truncated]
-       return `${pD}${DD.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${sD?function(){const[DD,zD,wD]=Jw.o;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif  … [truncated]
-     }
-     const Tw = "bloxdSpOwnTexture";
- 
- ... (279 more removed lines; see GitHub link above)
+       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vp;
+       const ip = ci.get(pp);
+       if (!ip && pp === Vp && (0, Ip.B)()) return yi();
+       if (!ip) throw Ai.create("no-app", {
+         appName: pp
+       });
```

#### 52. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1374-L1532` → after: `L740-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L740-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L740-L741) · [Before (L1374-L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L1374-L1532)

```diff
-     function Tp(DD) {
-       return `terrain-${DD.texture}${"atlas"===DD.texture?DD.atlasCount:""}${DD.animated?"-anim":""}${DD.alphaTest?"-test":""}${DD.lighting?"-lit":""}-dir${DD.dirLightCount}${DD.packed?"-packed":""}${Rp(DD)?`-sp${DD.packVariant}`:""}${DD.liquid?"-liquid":""}${DD.resting?"-rest":" … [truncated]
-     }
- 
-     function bp(DD) {
-       let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-         wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
-       const pD = function(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
-         const wD = "none" !== DD.texture,
-           pD = "atlas" === DD.texture,
-           sD = DD.dirLightCount > 0,
-           KD = Rp(DD);
-         if (DD.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${DD.dirLightCount}`);
-         let rD = 1,
-           LD = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
- ... (143 more removed lines; see GitHub link above)
+     function wi() {
+       return Array.from(ci.values())
```

#### 53. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1534-L1566` → after: `L743-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L743-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L743-L745) · [Before (L1534-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L1534-L1566)

```diff
-     const yp = {
-         lights: 0,
-         lightStride: 12,
-         fogInfos: 96,
-         fogColour: 100,
-         outputHeight: 103,
-         animTick: 104,
-         timeMs: 105
-       },
-       kp = 256,
-       mp = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) … [truncated]
-       ep = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
-       op = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
-       ap = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertex … [truncated]
-       vp = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
-       tp = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogC … [truncated]
- ... (17 more removed lines; see GitHub link above)
+     async function vi(pp) {
+       const ip = pp.name;
+       ci.has(ip) && (ci.delete(ip), await Promise.all(pp.container.getProviders().map((pp => pp.delete()))), pp.isDeleted = !0)
```

#### 54. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1568-L7317` → after: `L747-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L747-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L747-L756) · [Before (L1568-L7317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L1568-L7317)

```diff
-     _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
-       zD
-     }.vLightData, diffuse$ {
-       DD
-     }.rgb, $ {
-       zD
-     }.vLightSpecular.rgb, diffuse$ {
-       DD
-     }.a, glossiness);\
-     nshadow = 1.;\
-     naggShadow += shadow;\
-     nnumLights += 1.0;\
-     ndiffuseBase += info.diffuse * shadow;\
-     n #endif`}(zD))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n … [truncated]
- 
-     function zs(DD) {
- ... (5734 more removed lines; see GitHub link above)
+ 
+     function ti(pp, ip, cp) {
+       var op;
+       let Ip = null !== (op = ii[pp]) && void 0 !== op ? op : pp;
+       cp && (Ip += `-${cp}`);
+       const Sp = Ip.match(/\s|\//),
+         xp = ip.match(/\s|\//);
+       if (Sp || xp) {
+         const pp = [`Unable to register library "${Ip}" with version "${ip}":`];
+         return Sp && pp.push(`library name "${Ip}" contains illegal characters (whitespace or "/")`), Sp && xp && pp.push("and"), xp && pp.push(`version name "${ip}" contains illegal characters (whitespace or "/")`), void Rp.warn(pp.join(" "))
```

#### 55. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7319-L7327` → after: `L758-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L758-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L758-L811) · [Before (L7319-L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7319-L7327)

```diff
-       evictBeyond(DD, zD) {
-         const wD = this.slotDistance(DD),
-           pD = [];
-         for (let sD = 0; sD < jz; sD++) sD !== DD && this.slotPool[sD] && this.slotDistance(sD) > wD && pD.push(sD);
-         pD.sort(((DD, zD) => this.slotDistance(zD) - this.slotDistance(DD)));
-         for (const sD of pD) {
-           if (this.freeCount >= zD) return;
-           const DD = this.slotChunk[sD];
-           DD && !DD.EX && DD.dU && (DD.HI === this.slotVersion[sD] || cc(DD)) && this.encodeSlot(sD, this.victimScratch, !1)
+       Si(new Op.d(`${Ip}-version`, (() => ({
+         library: Ip,
+         version: ip
+       })), "VERSION"))
+     }
+ 
+     function Hi(pp, ip) {
+       if (null !== pp && "function" !== typeof pp) throw Ai.create("invalid-log-argument");
+       (0, op.j)(pp, ip)
+     }
+ 
+     function di(pp) {
+       (0, op.g)(pp)
+     }
+     const ei = "firebase-heartbeat-store";
+     let ui = null;
+ ... (38 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7336` → after: `L815-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L815-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L815-L818) · [Before (L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7336)

```diff
-     var Ac = wD(37471);
+ 
+     function mi(pp) {
+       return `${pp.name}!${pp.options.appId}`
+     }
```

#### 57. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7339-L7437` → after: `L821-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L821-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L821-L851) · [Before (L7339-L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7339-L7437)

```diff
-         this.device = DD, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Gw, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.KU = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = DD.createBuffer( … [truncated]
-           label: "sun-shadow-entities",
-           size: 589828,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.gridBuffer = DD.createBuffer({
-           label: "sun-shadow-entity-grids",
-           size: 16777216,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         })
-       }
-       update(DD, zD, wD) {
-         this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
-         const {
-           frame: pD
-         } = this;
-         pD.Jf(DD, zD), wD.forEachSunShadowCaster((DD => {
- ... (83 more removed lines; see GitHub link above)
+         this.container = pp, this._heartbeatsCache = null;
+         const ip = this.container.getProvider("app").getImmediate();
+         this.XU = new Mi(ip), this._heartbeatsCachePromise = this.XU.read().then((pp => (this._heartbeatsCache = pp, pp)))
+       }
+       async triggerHeartbeat() {
+         const pp = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
+           ip = qi();
+         if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== ip && !this._heartbeatsCache.heartbeats.some((pp => pp.date === ip))) return this._heartbeatsCache.heartbeats.push({
+           date: ip,
+           agent: pp
+         }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((pp => {
+           const ip = new Date(pp.date).valueOf();
+           return Date.now() - ip <= 2592e6
+         })), this.XU.overwrite(this._heartbeatsCache)
+       }
+       async getHeartbeatsHeader() {
+ ... (15 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7439-L7451` → after: `L853-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L853-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L853-L860) · [Before (L7439-L7451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7439-L7451)

```diff
-                 for (let DD = GD[2]; DD <= hD[2]; DD++)
-                   for (let zD = GD[1]; zD <= hD[1]; zD++)
-                     for (let wD = GD[0]; wD <= hD[0]; wD++)
-                       if (Mw(BD, UD[0] + (wD + .5) * RD, UD[1] + (zD + .5) * RD, UD[2] + (DD + .5) * RD, RD / 2)) {
-                         const pD = wD + AD[0] * (zD + AD[1] * DD);
-                         ID[pD >>> 5] |= 1 << (31 & pD)
-                       }
-               } return {
-               words: ID,
-               lo: UD,
-               hi: fD,
-               cell: RD,
-               dims: AD
+               } else if (cp.push({
+                   agent: op.agent,
+                   dates: [op.date]
+                 }), Ci(cp) > ip) {
+                 cp.pop();
+                 break
+               }
+               Op = Op.slice(1)
```

#### 59. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7453-L7464` → after: `L862-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L862-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L862-L871) · [Before (L7453-L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7453-L7464)

```diff
-           }((0, Ac.i)(KD, DD.vertexCount), zD ? DD.indexData : null, wD, pD, sD) : null;
-         if (!rD) return null;
-         const {
-           words: LD,
-           ...cD
-         } = rD;
-         if (this.gridTop + LD.length > Uw) return void(this.gridsFull = !0);
-         const gD = this.gridTop;
-         return this.gridTop += LD.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * gD, LD), {
-           ...cD,
-           at: gD
-         }
+             return {
+               heartbeatsToSend: cp,
+               unsentEntries: Op
+             }
+           }(this._heartbeatsCache.heartbeats),
+           Op = (0, Ip.s)(JSON.stringify({
+             version: 2,
+             heartbeats: ip
+           }));
+         return this._heartbeatsCache.lastSentHeartbeatDate = pp, cp.length > 0 ? (this._heartbeatsCache.heartbeats = cp, await this.XU.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.XU.overwrite(this._heartbeatsCache)), Op
```

#### 60. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7469-L7483` → after: `L875-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L875-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L875-L876) · [Before (L7469-L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7469-L7483)

```diff
-     function Ic(DD, zD) {
-       return DD[0] * zD[0] + DD[1] * zD[1] + DD[2] * zD[2] < fc
-     }
-     async function Bc(DD) {
-       const {
-         pixels: zD,
-         width: wD,
-         height: pD
-       } = await ks(DD), sD = new Uint8Array(wD * pD);
-       for (let KD = 0; KD < sD.length; KD++) sD[KD] = zD[4 * KD + 3];
-       return {
-         width: wD,
-         height: pD,
-         alpha: sD
-       }
+     function qi() {
+       return (new Date).toISOString().substring(0, 10)
```

#### 61. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7486-L7531` → after: `L879-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L879-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L879-L880) · [Before (L7486-L7531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7486-L7531)

```diff
-       constructor(DD, zD) {
-         this.device = DD, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Jw.k), this.entities = void 0, this.entityStandIn =  … [truncated]
-           label: "sun-shadow",
-           size: 128,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         }), this.voxelBuffer = DD.createBuffer({
-           label: "sun-shadow-voxels",
-           size: 4 * ez,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.special = DD.createBuffer({
-           label: "sun-shadow-special",
-           size: 9568256,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         });
-         const [wD, pD, sD] = Jw.o;
-         this.volume = DD.createTexture({
- ... (30 more removed lines; see GitHub link above)
+       constructor(pp) {
+         this.app = pp, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
```

#### 62. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7533-L7538` → after: `L882-L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L882-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L882-L883) · [Before (L7533-L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7533-L7538)

```diff
-       describePendingWork() {
-         var DD, zD;
-         const wD = [];
-         !this.volumePassStarted || this.volumePass || this.volumePassFailed || wD.push("Lite sun shadow volume pipeline compiling");
-         const pD = null !== (DD = null === (zD = this.casters) || void 0 === zD ? void 0 : zD.planesLoading) && void 0 !== DD ? DD : 0;
-         return pD > 0 && wD.push(`${pD} Lite sun shadow plane casters loading their textures`), wD
+       async runIndexedDBEnvironmentCheck() {
+         return !!(0, Ip.Q)() && (0, Ip.gb)().then((() => !0)).catch((() => !1))
```

#### 63. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7540-L7572` → after: `L885-L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L885-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L885-L901) · [Before (L7540-L7572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7540-L7572)

```diff
-       entries() {
-         var DD, zD, wD, pD;
-         const sD = Pz.u;
-         return [{
-           binding: sD.uniform,
-           resource: {
-             buffer: this.uniform
-           }
-         }, {
-           binding: sD.dU,
-           resource: {
-             buffer: this.voxelBuffer
-           }
-         }, {
-           binding: sD.special,
-           resource: {
- ... (17 more removed lines; see GitHub link above)
+       async read() {
+         if (await this._canUseIndexedDBPromise) {
+           return await async function(pp) {
+             try {
+               const ip = await ji();
+               return await ip.transaction(ei).objectStore(ei).get(mi(pp))
+             } catch (ip) {
+               if (ip instanceof Ip.l) Rp.warn(ip.message);
+               else {
+                 const pp = Ai.create("idb-get", {
+                   originalErrorMessage: null === ip || void 0 === ip ? void 0 : ip.message
+                 });
+                 Rp.warn(pp.message)
+               }
+             }
+           }(this.app) || {
+ ... (1 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7574` → after: `L903-L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L903-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L903-L906) · [Before (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7574)

```diff
-         }]
+         }
+         return {
+           heartbeats: []
+         }
```

#### 65. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7576` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L908) · [Before (L7576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7576)

```diff
-       prepare(DD, zD, wD) {
+       async overwrite(pp) {
```

#### 66. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7578-L7633` → after: `L910-L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L910-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L910-L915) · [Before (L7578-L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7578-L7633)

```diff
-         this.entitiesThisFrame = !1;
-         const sD = null !== (pD = null === wD || void 0 === wD ? void 0 : wD.sunShadowReach()) && void 0 !== pD ? pD : {
-           sunShadow: !1,
-           airShadow: !1
-         };
-         if (!wD || !sD.sunShadow && !sD.airShadow) return void(this.volumeHolds = null);
-         if (DD.KU.PDD !== xz) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${DD.KU.PDD}; everything is lit.`)));
-         const KD = this.start(DD);
-         this.casters.update(DD.Lf, DD.Lf.Uf.length);
-         const rD = DD.CU;
-         for (let UD = 0; UD < 3; UD++) this.eye[UD] = zD[UD] + rD[UD];
-         const LD = (0, Jw.w)(this.eye);
-         this.staleNear = LD;
-         const cD = DD.KU.EB;
-         KD.update(this.eye, ((DD, zD, wD) => cD.QB(DD, zD, wD)), 1);
-         const gD = (0, Jw.s)(wD.gDD()),
- ... (40 more removed lines; see GitHub link above)
+         if (await this._canUseIndexedDBPromise) {
+           const cp = await this.read();
+           return ki(this.app, {
+             lastSentHeartbeatDate: null !== (ip = pp.lastSentHeartbeatDate) && void 0 !== ip ? ip : cp.lastSentHeartbeatDate,
+             heartbeats: pp.heartbeats
+           })
```

#### 67. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7637-L7654` → after: `L918-L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L918-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L918-L925) · [Before (L7637-L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7637-L7654)

```diff
-       traceEntities(DD) {
-         this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, DD)
-       }
-       computeVolume(DD, zD, wD) {
-         const pD = this.buildVolumePass();
-         if (!pD) return void(this.volumeHolds = null);
-         const sD = (0, Jw.t)(this.volumeHolds, DD);
-         this.volumeHolds = DD;
-         const KD = 1 === sD.length && sD[0].size.every(((DD, zD) => DD === Jw.o[zD])),
-           rD = this.sweptChunk,
-           LD = this.sweptLight,
-           cD = zD[0] !== LD[0] || zD[1] !== LD[1] || zD[2] !== LD[2],
-           gD = wD[0] !== rD[0] || wD[1] !== rD[1] || wD[2] !== rD[2],
-           RD = cD && Ic(zD, LD);
-         if ((KD || this.written || gD || RD) && (this.fastLeft = Jw.g), KD || this.written || cD || gD) {
-           this.written = !1;
- ... (2 more removed lines; see GitHub link above)
+       async add(pp) {
+         var ip;
+         if (await this._canUseIndexedDBPromise) {
+           const cp = await this.read();
+           return ki(this.app, {
+             lastSentHeartbeatDate: null !== (ip = pp.lastSentHeartbeatDate) && void 0 !== ip ? ip : cp.lastSentHeartbeatDate,
+             heartbeats: [...cp.heartbeats, ...pp.heartbeats]
+           })
```

#### 68. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7783-L7784` → after: `L930-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L930-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L930-L934) · [Before (L7783-L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7783-L7784)

```diff
-     function Qc(DD, zD, wD, pD) {
-       DD.drawOffset(zD, pD + Mc), zD[pD + Oc] = DD.drawTime(), wD[pD + Jc] = DD.ring.drawStart(), wD[pD + Ec] = DD.ring.drawCount()
+     function Ci(pp) {
+       return (0, Ip.s)(JSON.stringify({
+         version: 2,
+         heartbeats: pp
+       })).length
```

#### 69. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7786-L7787` → after: `L936-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L936-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L936-L944) · [Before (L7786-L7787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7786-L7787)

```diff
-     const Xc = `\n${Gp}\n\nconst MAX_STOPS = ${nc.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${nc.b/4}>,\n\tcolor1: array<vec4f, ${nc.b}>,\n\t … [truncated]
-     var Vc = wD(41502);
+     var Ei;
+     Ei = "", Si(new Op.d("platform-logger", (pp => new jp(pp)), "PRIVATE")), Si(new Op.d("heartbeat", (pp => new Ri(pp)), "PRIVATE")), ti(kp, mp, Ei), ti(kp, mp, "esm2017"), ti("fire-js", "")
+   },
+   40692: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => xp,
+       d: () => op
+     });
+     var Op = cp(40700);
```

#### 70. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7789-L7804` → after: `L946-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L946-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L946-L947) · [Before (L7789-L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7789-L7804)

```diff
-       constructor(DD, zD, wD, pD) {
-         this.device = DD, this.system = zD, this.frameIndex = wD, this.bindings = pD, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, Vc.f)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.bou … [truncated]
-           this.device.queue.writeBuffer(this.ring, DD * nc.f * 4, this.system.ring.records, DD * nc.f, (zD - DD) * nc.f)
-         };
-         const {
-           name: sD
-         } = zD;
-         this.ring = DD.createBuffer({
-           label: `particles-${sD}`,
-           size: zD.ring.records.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.uniforms = DD.createBuffer({
-           label: `particles-uniforms-${sD}`,
-           size: 4 * nc.n,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
+       constructor(pp, ip, cp) {
+         this.name = pp, this.instanceFactory = ip, this.type = cp, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
```

#### 71. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7806-L7808` → after: `L949-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L949-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L949-L950) · [Before (L7806-L7808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7806-L7808)

```diff
-       writeUniforms(DD) {
-         const zD = (0, Vc.e)(this.system, this.uniformBits, DD);
-         zD && (this.uniformBits = zD, this.device.queue.writeBuffer(this.uniforms, 0, zD))
+       setInstantiationMode(pp) {
+         return this.instantiationMode = pp, this
```

#### 72. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7810-L7851` → after: `L952-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L952-L953) · [Before (L7810-L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7810-L7851)

```diff
-       bind() {
-         const {
-           system: DD
-         } = this, zD = this.texture;
-         (0, Vc.m)(DD, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
-           label: `particles-ramp-${DD.name}`,
-           size: [nc.h, 1],
-           format: "rgba8unorm",
-           usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
-         }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
-           texture: this.ramp
-         }, this.rampTexels.texels, {
-           bytesPerRow: 4 * nc.h
-         }, [nc.h, 1]));
-         const wD = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
-         this.bindGroup && this.boundView === zD.view && this.boundSampler === zD.sampler && this.boundRamp === wD || (this.boundView = zD.view, this.boundSampler = zD.sampler, this.boundRamp = wD, this.bindGroup = this.device.createBindGroup({
- ... (26 more removed lines; see GitHub link above)
+       setMultipleInstances(pp) {
+         return this.multipleInstances = pp, this
```

#### 73. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7853-L7855` → after: `L955-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L955-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L955-L959) · [Before (L7853-L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7853-L7855)

```diff
-       destroy() {
-         var DD;
-         this.ring.destroy(), this.uniforms.destroy(), null === (DD = this.ramp) || void 0 === DD || DD.destroy()
+       setServiceProps(pp) {
+         return this.serviceProps = pp, this
+       }
+       setInstanceCreatedCallback(pp) {
+         return this.onInstanceCreated = pp, this
```

#### 74. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7860-L7945` → after: `L965-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L965-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L965-L976) · [Before (L7860-L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7860-L7945)

```diff
-         this.device = DD, this.resources = zD, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(409 … [truncated]
-         const wD = DD.createBindGroupLayout({
-           label: "particles-system",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-             buffer: {
-               type: "uniform"
-             }
-           }, {
-             binding: 1,
-             visibility: GPUShaderStage.VERTEX,
-             buffer: {
-               type: "read-only-storage"
-             }
-           }, {
- ... (70 more removed lines; see GitHub link above)
+         this.name = pp, this.container = ip, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
+       }
+       get(pp) {
+         const ip = this.normalizeInstanceIdentifier(pp);
+         if (!this.instancesDeferred.has(ip)) {
+           const pp = new Op.e;
+           if (this.instancesDeferred.set(ip, pp), this.isInitialized(ip) || this.shouldAutoInitialize()) try {
+             const cp = this.getOrInitializeService({
+               instanceIdentifier: ip
+             });
+             cp && pp.resolve(cp)
+           } catch (cp) {}
```

#### 75. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7948-L7949` → after: `L980-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L980-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L980-L995) · [Before (L7948-L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7948-L7949)

```diff
-       get JsD() {
-         return this.systems.size
+       getImmediate(pp) {
+         var ip;
+         const cp = this.normalizeInstanceIdentifier(null === pp || void 0 === pp ? void 0 : pp.identifier),
+           Op = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.optional) && void 0 !== ip && ip;
+         if (!this.isInitialized(cp) && !this.shouldAutoInitialize()) {
+           if (Op) return null;
+           throw Error(`Service ${this.name} is not available`)
+         }
+         try {
+           return this.getOrInitializeService({
+             instanceIdentifier: cp
+           })
+         } catch (op) {
+           if (Op) return null;
+           throw op
+         }
```

#### 76. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7951-L7952` → after: `L997-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L997-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L997-L998) · [Before (L7951-L7952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7951-L7952)

```diff
-       reset() {
-         for (const DD of this.systems.keys()) DD.reset()
+       getComponent() {
+         return this.component
```

#### 77. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7954-L7955` → after: `L1000-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1000-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1000-L1020) · [Before (L7954-L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7954-L7955)

```diff
-       describePendingWork() {
-         return (0, hc.f)(this.systems.keys(), "Lite")
+       setComponent(pp) {
+         if (pp.name !== this.name) throw Error(`Mismatching Component ${pp.name} for Provider ${this.name}.`);
+         if (this.component) throw Error(`Component for ${this.name} has already been provided`);
+         if (this.component = pp, this.shouldAutoInitialize()) {
+           if (function(pp) {
+               return "EAGER" === pp.instantiationMode
+             }(pp)) try {
+             this.getOrInitializeService({
+               instanceIdentifier: Ip
+             })
+           } catch (ip) {}
+           for (const [pp, cp] of this.instancesDeferred.entries()) {
+             const Op = this.normalizeInstanceIdentifier(pp);
+             try {
+               const pp = this.getOrInitializeService({
+                 instanceIdentifier: Op
+ ... (5 more added lines; see GitHub link above)
```

#### 78. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7957-L7959` → after: `L1022-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1022-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1022-L1024) · [Before (L7957-L7959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7957-L7959)

```diff
-       EW(DD, zD) {
-         const wD = new hc.e(DD, zD, this);
-         return this.systems.set(wD, new Pc(this.device, wD, this.allocateFrameIndex(), this.bindings)), wD
+       clearInstance() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ip;
+         this.instancesDeferred.delete(pp), this.instancesOptions.delete(pp), this.instances.delete(pp)
```

#### 79. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7961-L7962` → after: `L1026-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1026-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1026-L1028) · [Before (L7961-L7962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7961-L7962)

```diff
-       Z6(DD, zD) {
-         for (const wD of this.systems.keys()) wD.Z6(DD, zD)
+       async delete() {
+         const pp = Array.from(this.instances.values());
+         await Promise.all([...pp.filter((pp => "INTERNAL" in pp)).map((pp => pp.INTERNAL.delete())), ...pp.filter((pp => "_delete" in pp)).map((pp => pp._delete()))])
```

#### 80. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7964-L7975` → after: `L1030-L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1030-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1030-L1031) · [Before (L7964-L7975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7964-L7975)

```diff
-       canDraw(DD) {
-         const zD = this.systems.get(DD),
-           wD = DD.texture ? this.resources.boundTexture(DD.texture) : null;
-         if (!zD || !wD || !this.targetPipelines) return !1;
-         if (zD.texture = wD, zD.pipelines.length = 0, !us(DD.blendMode)) return this.warnOnce(`blend:${DD.blendMode}`, `particle blend mode ${DD.blendMode} is not drawn (${DD.name})`), !0;
-         const pD = (0, ds.k)(DD.blendMode);
-         for (const sD of pD) {
-           const DD = this.pipelineFor(sD);
-           if (!1 === DD) return zD.pipelines.length = 0, !0;
-           DD && zD.pipelines.push(DD)
-         }
-         return zD.pipelines.length === pD.length
+       isComponentSet() {
+         return null != this.component
```

#### 81. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7977-L7978` → after: `L1033-L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1033-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1033-L1035) · [Before (L7977-L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7977-L7978)

```diff
-       disposeStopped(DD) {
-         DD.dispose()
+       isInitialized() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ip;
+         return this.instances.has(pp)
```

#### 82. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7980-L7982` → after: `L1037-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1037-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1037-L1039) · [Before (L7980-L7982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7980-L7982)

```diff
-       remove(DD) {
-         const zD = this.systems.get(DD);
-         zD && (this.systems.delete(DD), zD.destroy(), this.freeFrameIndices.push(zD.frameIndex))
+       getOptions() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ip;
+         return this.instancesOptions.get(pp) || {}
```

#### 83. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7984-L7994` → after: `L1041-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1041-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1041-L1053) · [Before (L7984-L7994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7984-L7994)

```diff
-       prepare(DD) {
-         const zD = DD.animationRatio || 1;
-         Lz(this.renderable._worldCenter, DD, pz), this.preparedTarget = this.target, this.draws.length = 0;
-         let wD = 0;
-         for (const pD of this.systems.values()) {
-           const DD = pD.system;
-           if (!DD.animateIfActive(zD)) continue;
-           if (DD.ring.takeUploads(pD.upload), !DD.hasLiveParticles() || 0 === pD.pipelines.length) continue;
-           pD.writeUniforms(this.warnOnce), pD.bind();
-           const sD = 64 * pD.frameIndex;
-           pD.count = DD.ring.drawCount(), Qc(DD, this.frameData, this.frameBits, sD), wD = Math.max(wD, sD + 64), this.draws.push(pD)
+       initialize() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         const {
+           options: ip = {}
+         } = pp, cp = this.normalizeInstanceIdentifier(pp.instanceIdentifier);
+         if (this.isInitialized(cp)) throw Error(`${this.name}(${cp}) has already been initialized`);
+         if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
+         const Op = this.getOrInitializeService({
+           instanceIdentifier: cp,
+           options: ip
+         });
+         for (const [op, Ip] of this.instancesDeferred.entries()) {
+           cp === this.normalizeInstanceIdentifier(op) && Ip.resolve(Op)
```

#### 84. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7996` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1055) · [Before (L7996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7996)

```diff
-         wD > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, wD)
+         return Op
```

#### 85. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L7998-L8003` → after: `L1057-L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1057-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1057-L1064) · [Before (L7998-L8003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L7998-L8003)

```diff
-       draw(DD) {
-         let zD = 0,
-           wD = null;
-         for (const pD of this.draws) {
-           DD.setBindGroup(1, pD.bindGroup), DD.setBindGroup(2, this.frameBindGroup, [256 * pD.frameIndex]);
-           for (const sD of pD.pipelines) sD !== wD && (DD.setPipeline(sD), wD = sD), DD.draw(4, pD.count), zD++
+       pN(pp, ip) {
+         var cp;
+         const Op = this.normalizeInstanceIdentifier(ip),
+           op = null !== (cp = this.onInitCallbacks.get(Op)) && void 0 !== cp ? cp : new Set;
+         op.add(pp), this.onInitCallbacks.set(Op, op);
+         const Ip = this.instances.get(Op);
+         return Ip && pp(Ip, Op), () => {
+           op.delete(pp)
```

#### 86. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8007-L8011` → after: `L1067-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1067-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1067-L1072) · [Before (L8007-L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8007-L8011)

```diff
-       bindTarget(DD) {
-         this.target = DD;
-         const zD = `${DD._colorFormat}|${DD._depthStencilFormat}|${DD._depthCompare}|${DD._sampleCount}`;
-         let wD = this.pipelines.get(zD);
-         wD || (wD = new Map, this.pipelines.set(zD, wD)), this.targetPipelines = wD
+       invokeOnInitCallbacks(pp, ip) {
+         const cp = this.onInitCallbacks.get(ip);
+         if (cp)
+           for (const op of cp) try {
+             op(pp, ip)
+           } catch (Op) {}
```

#### 87. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8013` → after: `L1074-L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1074-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1074-L1084) · [Before (L8013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8013)

```diff
-       pipelineFor(DD) {
+       getOrInitializeService(pp) {
+         let {
+           instanceIdentifier: ip,
+           options: cp = {}
+         } = pp, Op = this.instances.get(ip);
+         if (!Op && this.component && (Op = this.component.instanceFactory(this.container, {
+             instanceIdentifier: (op = ip, op === Ip ? void 0 : op),
+             options: cp
+           }), this.instances.set(ip, Op), this.instancesOptions.set(ip, cp), this.invokeOnInitCallbacks(Op, ip), this.component.onInstanceCreated)) try {
+           this.component.onInstanceCreated(this.container, ip, Op)
+         } catch (Sp) {}
```

#### 88. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8015-L8062` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1086) · [Before (L8015-L8062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8015-L8062)

```diff
-         const wD = this.targetPipelines,
-           pD = wD.get(DD);
-         if (void 0 !== pD) return pD;
-         wD.set(DD, null);
-         const sD = this.target,
-           KD = DD === ds.e,
-           rD = null !== (zD = sD._depthCompare) && void 0 !== zD ? zD : wz;
-         return this.device.createRenderPipelineAsync({
-           label: `particles-${DD}`,
-           layout: this.pipelineLayout,
-           vertex: {
-             module: this.module,
-             entryPoint: "mainVertex"
-           },
-           fragment: YD({
-             module: this.module,
- ... (32 more removed lines; see GitHub link above)
+         return Op || null
```

#### 89. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8064-L8069` → after: `L1088-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1088-L1090) · [Before (L8064-L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8064-L8069)

```diff
-       createFrameBuffer() {
-         return this.device.createBuffer({
-           label: "particles-frames",
-           size: this.frameData.byteLength,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
+       normalizeInstanceIdentifier() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ip;
+         return this.component ? this.component.multipleInstances ? pp : Ip : pp
```

#### 90. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8071-L8082` → after: `L1092-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1092-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1092-L1093) · [Before (L8071-L8082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8071-L8082)

```diff
-       createFrameBindGroup() {
-         return this.device.createBindGroup({
-           label: "particles-frames",
-           layout: this.frameLayout,
-           entries: [{
-             binding: 0,
-             resource: {
-               buffer: this.frameBuffer,
-               size: 32
-             }
-           }]
-         })
+       shouldAutoInitialize() {
+         return !!this.component && "EXPLICIT" !== this.component.instantiationMode
```

#### 91. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8086-L8138` → after: `L1097-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1097-L1098) · [Before (L8086-L8138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8086-L8138)

```diff
-       constructor(DD, zD, wD, pD, sD) {
-         this.lite = DD, this.canvas = zD, this.info = wD, this.resources = sD, this.OpD = !1, this.needPOTTextures = !1, this.P_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
-           reset: () => {
-             this.lastFrameTime = null
-           }
-         }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = zD.width, this.renderHeight = zD.height, this.caps = {
-           maxTextureSize: pD.maxTextureDimension2D,
-           texture2DArrayMaxLayerCount: pD.maxTextureArrayLayers
-         }
-       }
-       getCaps() {
-         return this.caps
-       }
-       getRenderWidth() {
-         return this.renderWidth
-       }
- ... (37 more removed lines; see GitHub link above)
+       constructor(pp) {
+         this.name = pp, this.providers = new Map
```

#### 92. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8140-L8141` → after: `L1100-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1100-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1100-L1103) · [Before (L8140-L8141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8140-L8141)

```diff
-       getDeltaTime() {
-         return this.deltaTime
+       vJ(pp) {
+         const ip = this.getProvider(pp.name);
+         if (ip.isComponentSet()) throw new Error(`Component ${pp.name} has already been registered with ${this.name}`);
+         ip.setComponent(pp)
```

#### 93. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8143-L8145` → after: `L1105-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1105-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1105-L1106) · [Before (L8143-L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8143-L8145)

```diff
-       createCanvas(DD, zD) {
-         const wD = document.createElement("canvas");
-         return wD.width = DD, wD.height = zD, wD
+       addOrOverwriteComponent(pp) {
+         this.getProvider(pp.name).isComponentSet() && this.providers.delete(pp.name), this.vJ(pp)
```

#### 94. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8147-L8149` → after: `L1108-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1108-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1108-L1111) · [Before (L8147-L8149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8147-L8149)

```diff
-       b_(DD, zD) {
-         var wD;
-         return null !== (wD = this.resources.b_.get(DD)) && void 0 !== wD ? wD : new oD(this.resources, DD, zD)
+       getProvider(pp) {
+         if (this.providers.has(pp)) return this.providers.get(pp);
+         const ip = new Sp(pp, this);
+         return this.providers.set(pp, ip), ip
```

#### 95. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8151-L8152` → after: `L1113-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1113-L1114) · [Before (L8151-L8152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8151-L8152)

```diff
-       atlasArray(DD, zD, wD) {
-         return this.resources.atlasArray(DD, zD, wD)
+       getProviders() {
+         return Array.from(this.providers.values())
```

#### 96. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8156-L8157` → after: `L1155-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1155-L1156) · [Before (L8156-L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8156-L8157)

```diff
-       constructor() {
-         this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
+       constructor(pp) {
+         this.name = pp, this._logLevel = Sp, this._logHandler = Lp, this._userLogHandler = null, Op.push(this)
```

#### 97. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8159-L8163` → after: `L1158-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1158-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1158-L1159) · [Before (L8159-L8163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8159-L8163)

```diff
-       copyFromView(DD) {
-         this.fov = DD.fov, this.nearPlane = DD.near, this.farPlane = DD.far;
-         const zD = DD.worldMatrix;
-         for (let wD = 0; wD < 16; wD++)
-           if (this.worldMatrix[wD] !== zD[wD]) return this.worldMatrix.set(zD), void this.worldMatrixVersion++
+       get logLevel() {
+         return this._logLevel
```

#### 98. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8165-L8177` → after: `L1161-L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1161-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1161-L1163) · [Before (L8165-L8177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8165-L8177)

```diff
-     }
-     class bc {
-       constructor(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD) {
-         let RD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
-         this.engine = DD, this.oB = zD, this.sceneTask = wD, this.gpuDevice = pD, this.terrain = sD, this.meshes = KD, this.particles = rD, this.resources = LD, this.sunShadow = RD, this.FzD = void 0, this.backendName = "WebGPU (Lite)", this.J9 = void 0, this.modelMeshes = void 0 … [truncated]
-           Qg: DD => {
-             jD(DD) && LD.textureSlot(DD)
-           },
-           loaded: DD => jD(DD) ? LD.textureLoaded(DD) : null,
-           canvasUpdated: (DD, zD, wD) => {
-             jD(DD) && LD.canvasUpdated(DD, zD, wD)
-           }
-         }), this.J9 = KD.J9, this.modelMeshes = KD.modelMeshes, zD.camera = this.camera
+       set logLevel(pp) {
+         if (!(pp in op)) throw new TypeError(`Invalid value "${pp}" assigned to \`logLevel\``);
+         this._logLevel = pp
```

#### 99. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8179-L8181` → after: `L1165-L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1165-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1165-L1166) · [Before (L8179-L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8179-L8181)

```diff
-       get castsEntitySunShadows() {
-         var DD, zD;
-         return null !== (DD = null === (zD = this.sunShadow) || void 0 === zD ? void 0 : zD.tracesEntities) && void 0 !== DD && DD
+       setLogLevel(pp) {
+         this._logLevel = "string" === typeof pp ? Ip[pp] : pp
```

#### 100. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8183-L8184` → after: `L1168-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1168-L1169) · [Before (L8183-L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8183-L8184)

```diff
-       get sampleCount() {
-         return this.engine.msaaSamples
+       get logHandler() {
+         return this._logHandler
```

#### 101. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8186-L8191` → after: `L1171-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1171-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1171-L1173) · [Before (L8186-L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8186-L8191)

```diff
-       attach(DD) {
-         this.modelMeshes.attach(DD.model, DD.sceneMirror);
-         const zD = DD.oB;
-         this.setClearColour(zD.clearColor.r, zD.clearColor.g, zD.clearColor.b), zD.draw = () => {
-           this.drawFrame(DD, zD)
-         }
+       set logHandler(pp) {
+         if ("function" !== typeof pp) throw new TypeError("Value assigned to `logHandler` must be a function");
+         this._logHandler = pp
```

#### 102. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8193-L8201` → after: `L1175-L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1175-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1175-L1176) · [Before (L8193-L8201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8193-L8201)

```diff
-       render(DD) {
-         if (!this.refusals.lost) {
-           try {
-             this.FzD.aJ(), DD.oB.render()
-           } catch (zD) {
-             throw this.refusals.frameFailed(zD), zD
-           }
-           this.refusals.frameDrawn()
-         }
+       get userLogHandler() {
+         return this._userLogHandler
```

#### 103. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8203-L8204` → after: `L1178-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1178-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1178-L1183) · [Before (L8203-L8204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8203-L8204)

```diff
-       lastFrameDrawCalls() {
-         return this.engine.drawCallCount
+       set userLogHandler(pp) {
+         this._userLogHandler = pp
+       }
+       debug() {
+         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+         this._userLogHandler && this._userLogHandler(this, op.DEBUG, ...ip), this._logHandler(this, op.DEBUG, ...ip)
```

#### 104. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8206-L8214` → after: `L1185-L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1185-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1185-L1187) · [Before (L8206-L8214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8206-L8214)

```diff
-       describePendingWork() {
-         var DD, zD, wD, pD;
-         const sD = [...this.particles.describePendingWork(), ...null !== (DD = null === (zD = this.sunShadow) || void 0 === zD ? void 0 : zD.describePendingWork()) && void 0 !== DD ? DD : []],
-           KD = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (wD = this.terrain.sceneDepth) && void 0 !== wD && wD.compiling ? 1 : 0) + (null !== (pD = this.terrain.shadowMask) && void 0 !== pD && pD.compiling ? 1 : 0);
-         KD > 0 && sD.push(`${KD} Lite pipelines compiling`);
-         const rD = this.terrain.buffersAwaitingVerdict;
-         rD > 0 && sD.push(`${rD} Lite terrain buffers awaiting their out-of-memory verdict`);
-         const LD = this.resources.texturesLoading;
-         return LD > 0 && sD.push(`${LD} Lite textures loading`), sD
+       log() {
+         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+         this._userLogHandler && this._userLogHandler(this, op.VERBOSE, ...ip), this._logHandler(this, op.VERBOSE, ...ip)
```

#### 105. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8216-L8217` → after: `L1189-L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1189-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1189-L1191) · [Before (L8216-L8217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8216-L8217)

```diff
-       prepareTexture(DD) {
-         return null !== this.resources.boundTexture(DD) || this.resources.textureFailed(DD)
+       info() {
+         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+         this._userLogHandler && this._userLogHandler(this, op.INFO, ...ip), this._logHandler(this, op.INFO, ...ip)
```

#### 106. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8219-L8230` → after: `L1193-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1193-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1193-L1195) · [Before (L8219-L8230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8219-L8230)

```diff
-       drawFrame(DD, zD) {
-         var wD, pD, sD, KD, rD, LD;
-         const cD = BL(DD);
-         this.camera.copyFromView(cD), this.setClearColour(cD.clearColour[0], cD.clearColour[1], cD.clearColour[2]), null === (wD = this.sunShadow) || void 0 === wD || wD.prepare(DD.AU, cD.eye, null !== (pD = DD.AU.KI) && void 0 !== pD ? pD : null), this.terrain.prepare(DD, cD), n … [truncated]
-         const gD = performance.now();
-         this.resources.flushUploads(), null === (LD = this.sunShadow) || void 0 === LD || LD.traceEntities(this.meshes);
-         try {
-           (0, yD.r)(this.engine, this.lastFrameTime > 0 ? gD - this.lastFrameTime : 0)
-         } finally {
-           this.resources.endUploadFrame()
-         }
-         this.lastFrameTime = gD
+       warn() {
+         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+         this._userLogHandler && this._userLogHandler(this, op.WARN, ...ip), this._logHandler(this, op.WARN, ...ip)
```

#### 107. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8232-L8234` → after: `L1197-L1199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1197-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1197-L1199) · [Before (L8232-L8234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8232-L8234)

```diff
-       setClearColour(DD, zD, wD) {
-         const pD = this.oB.clearColor;
-         pD.r = DD, pD.g = zD, pD.b = wD, pD.a = 1
+       error() {
+         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+         this._userLogHandler && this._userLogHandler(this, op.ERROR, ...ip), this._logHandler(this, op.ERROR, ...ip)
```

#### 108. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8239-L8242` → after: `L1203-L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1203-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1203-L1206) · [Before (L8239-L8242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8239-L8242)

```diff
-     function dc(DD, zD) {
-       return "object" === typeof DD && null !== DD ? Object.assign(DD, {
-         startStep: zD
-       }) : DD
+     function Dp(pp) {
+       Op.forEach((ip => {
+         ip.setLogLevel(pp)
+       }))
```

#### 109. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8244-L8292` → after: `L1208-L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1208-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1208-L1221) · [Before (L8244-L8292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8244-L8292)

```diff
-     async function Sc(DD, zD) {
-       const wD = await navigator.gpu.requestAdapter({
-         powerPreference: "high-performance"
-       });
-       if (!wD) throw dc(new Error("No WebGPU adapter"), "no_adapter");
-       const pD = wD.info,
-         sD = {
-           vendor: (null === pD || void 0 === pD ? void 0 : pD.vendor) || "unknown vendor",
-           renderer: (null === pD || void 0 === pD ? void 0 : pD.architecture) || "unknown renderer",
-           version: (null === pD || void 0 === pD ? void 0 : pD.description) || "unknown version"
-         },
-         KD = function(DD) {
-           const zD = {};
-           for (const wD in DD.limits) {
-             const pD = DD.limits[wD];
-             "number" === typeof pD && (zD[wD] = pD)
- ... (33 more removed lines; see GitHub link above)
+ 
+     function Ap(pp, ip) {
+       for (const cp of Op) {
+         let Op = null;
+         ip && ip.level && (Op = Ip[ip.level]), cp.userLogHandler = null === pp ? null : function(ip, cp) {
+           for (var Ip = arguments.length, Sp = new Array(Ip > 2 ? Ip - 2 : 0), xp = 2; xp < Ip; xp++) Sp[xp - 2] = arguments[xp];
+           const Lp = Sp.map((pp => {
+             if (null == pp) return null;
+             if ("string" === typeof pp) return pp;
+             if ("number" === typeof pp || "boolean" === typeof pp) return pp.toString();
+             if (pp instanceof Error) return pp.message;
+             try {
+               return JSON.stringify(pp)
+             } catch (ip) {
```

#### 110. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8294-L8315` → after: `L1223-L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1223-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/270.js#L1223-L1229) · [Before (L8294-L8315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/270.js#L8294-L8315)

```diff
-             }(rD, DD))),
-             RD = new Cc(zD, LD);
-           for (const fD of function(DD, zD, wD) {
-               return [zD.opaqueRenderable, DD.opaqueRenderable, DD.skyLastRenderable, wD.renderable, zD.transparentRenderable, DD.transparentRenderable, DD.frontRenderable]
-             }(gD, cD, RD)) HD(rD, fD);
-           const AD = function(DD) {
-             for (const zD of qD(DD))
-               if ("oB" === zD.name) return zD;
-             throw new Error("Lite: the scene has no render task named scene")
-           }(rD);
-           sD && cD.installSceneDepth(AD, DD);
-           const UD = KD ? new Gc(zD, KD.entities) : null;
-           cD.sunShadow = UD, UD && null !== KD && void 0 !== KD && KD.entities && (cD.shadowMask = new bL(zD, AD, DD, cD));
-           return gD.sunShadow = UD, await (0, kD.f)(rD), new bc(DD, rD, AD, zD, cD, gD, RD, LD, wD, pD, UD)
-         }(rD, cD, DD, sD, zD.sceneDepth, zD.sunShadow);
-         if (null !== gD) {
- ... (6 more removed lines; see GitHub link above)
+             }
+           })).filter((pp => pp)).join(" ");
+           cp >= (null !== Op && void 0 !== Op ? Op : ip.logLevel) && pp({
+             level: op[cp].toLowerCase(),
+             message: Lp,
+             args: Sp,
+             type: ip.name
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/271.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/271.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c)

#### 1. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/271.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/271.js#L4)

```diff
-   40972: (DD, zD, wD) => {
+   40713: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L6` → after: `L7-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L7-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/271.js#L7-L18) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/271.js#L6)

```diff
-       gamePackSource: () => KD
+       getAnalytics: () => zi,
+       getGoogleAnalyticsClientId: () => pc,
+       initializeAnalytics: () => si,
+       isSupported: () => Ki,
+       logEvent: () => Ic,
+       setAnalyticsCollectionEnabled: () => Oc,
+       setConsent: () => Sc,
+       setCurrentScreen: () => Vi,
+       setDefaultEventParameters: () => oc,
+       setUserId: () => ic,
+       setUserProperties: () => cc,
+       settings: () => ri
```

#### 3. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L8-L9` → after: `L20-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L20-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/271.js#L20-L149) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/271.js#L8-L9)

```diff
-     var pD = wD(5011),
-       sD = wD(1495);
+     var Op = cp(40687),
+       op = cp(40704),
+       Ip = cp(40700),
+       Sp = cp(40692);
+     let xp, Lp;
+     const Yp = new WeakMap,
+       Dp = new WeakMap,
+       Ap = new WeakMap,
+       Pp = new WeakMap,
+       Wp = new WeakMap;
+     let yp = {
+       get(pp, ip, cp) {
+         if (pp instanceof IDBTransaction) {
+           if ("done" === ip) return Dp.get(pp);
+           if ("objectStoreNames" === ip) return pp.objectStoreNames || Ap.get(pp);
+           if ("store" === ip) return cp.objectStoreNames[1] ? void 0 : cp.objectStore(cp.objectStoreNames[0])
+ ... (114 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L13-L16` → after: `L153-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L153-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/271.js#L153-L1039) · [Before (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/271.js#L13-L16)

```diff
-         packKey: async zD => (await sD.d.getGame(DD, zD, !0)).customTexturePackKey,
-         fetchPack: pD.c
-       }
-     }
+         token: pp.token,
+         requestStatus: 2,
+         expiresIn: (ip = pp.expiresIn, Number(ip.replace("s", "000"))),
+         creationTime: Date.now()
+       };
+       var ip
+     }
+     async function Bp(pp, ip) {
+       const cp = (await ip.json()).error;
+       return Xp.create("request-failed", {
+         requestName: pp,
+         serverCode: cp.code,
+         serverMessage: cp.message,
+         serverStatus: cp.status
+       })
+     }
+ ... (871 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/272.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/272.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf)

#### 1. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/272.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/272.js#L2)

```diff
- export const ids = [271, 272];
+ export const ids = [272];
```

#### 2. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L4-L97` → after: `L5-L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L5-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/272.js#L5-L4026) · [Before (L4-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/272.js#L4-L97)

```diff
-   40972: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       gamePackSource: () => KD
-     });
-     var pD = wD(5011),
-       sD = wD(1495);
- 
-     function KD(DD) {
-       return {
-         packKey: async zD => (await sD.d.getGame(DD, zD, !0)).customTexturePackKey,
-         fetchPack: pD.c
-       }
-     }
-   },
-   50777: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
- ... (78 more removed lines; see GitHub link above)
+     40721: (pp, ip, cp) => {
+         cp.r(ip), cp.d(ip, {
+           ActionCodeOperation: () => Pp,
+           ActionCodeURL: () => pc,
+           AuthCredential: () => bi,
+           AuthErrorCodes: () => vp,
+           EmailAuthCredential: () => Zi,
+           EmailAuthProvider: () => cc,
+           FacebookAuthProvider: () => Sc,
+           FactorId: () => Lp,
+           GithubAuthProvider: () => Lc,
+           GoogleAuthProvider: () => xc,
+           OAuthCredential: () => si,
+           OAuthProvider: () => Ic,
+           OperationType: () => Ap,
+           PhoneAuthCredential: () => Vi,
+ ... (4006 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/273.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/273.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325)

#### 1. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L4-L6` → after: `L4-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/273.js#L4-L141) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/273.js#L4-L6)

```diff
-   40978: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       BloxdInformation: () => fD
+   40769: (pp, ip, cp) => {
+     cp.d(ip, {
+       $c: () => yp,
+       $d: () => Ac,
+       $e: () => qc,
+       A: () => Mp,
+       Ab: () => di,
+       Ac: () => Ii,
+       Af: () => sc,
+       B: () => Ep,
+       Bd: () => ti,
+       C: () => Cp,
+       Cb: () => sp,
+       Cd: () => Zi,
+       Dc: () => Wi,
+       Dd: () => hp,
+ ... (122 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L8-L122` → after: `L143-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L143-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/273.js#L143-L778) · [Before (L8-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/273.js#L8-L122)

```diff
-     var pD = wD(1200),
-       sD = wD(58),
-       KD = wD(103),
-       rD = wD(1447),
-       LD = wD(128),
-       cD = wD(1057),
-       gD = wD(1096);
-     const RD = (0, sD.lazy)((() => wD.e(123).then((() => wD(6558))))),
-       AD = (0, sD.lazy)((() => wD.e(124).then((() => wD(6566)))));
- 
-     function UD() {
-       return (0, gD.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, gD.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: "Security Exploit Bounty Program"
- ... (99 more removed lines; see GitHub link above)
+     const Op = -2147483648,
+       op = 12,
+       Ip = 12,
+       Sp = 4095,
+       xp = {
+         Lifeform: 1,
+         Throwable: 2,
+         Mesh: 3,
+         Audio: 4,
+         Item: 5
+       },
+       Lp = {
+         Alive: 1,
+         Crouching: 2,
+         OnGround: 4,
+         InFluid: 8,
+ ... (620 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L124-L151` → after: `L780-L1364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L780-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/273.js#L780-L1364) · [Before (L124-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/273.js#L124-L151)

```diff
-       return (0, gD.jsxs)("div", {
-         className: "BloxdInformation",
-         children: [(0, gD.jsxs)("div", {
-           className: "BloxdInformationSectionList",
-           children: [Object.keys(fD).map((pD => (0, gD.jsx)(rD.Y, {
-             active: zD === pD,
-             onClick: () => {
-               wD(pD)
-             },
-             children: DD(fD[pD].title)
-           }, pD))), KD.featureFlags.usePartnerLinks && (0, gD.jsx)(gD.Fragment, {
-             children: (0, gD.jsxs)(rD.Y, {
-               onClick: () => {
-                 window.open("https://www.crazygames.com/c/io")
-               },
-               children: [(0, gD.jsx)(cD.e, {
- ... (12 more removed lines; see GitHub link above)
+ 
+     function Ac(pp, ip, cp, Op, op) {
+       var Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep;
+       switch (pp) {
+         case 32:
+           return 4 === Op && (null === (Ip = op.tickEnd) || void 0 === Ip || Ip.call(op, Hi.LP(ip, cp)), !0);
+         case 33:
+           return 12 === Op && (null === (Sp = op.entitySpawned) || void 0 === Sp || Sp.call(op, di.serverId(ip, cp), di.index(ip, cp), di.kind(ip, cp)), !0);
+         case 34:
+           return 12 === Op && (null === (xp = op.entityDespawned) || void 0 === xp || xp.call(op, di.serverId(ip, cp), di.index(ip, cp), di.kind(ip, cp)), !0);
+         case 39:
+           return !(Op < 20) && (null === (Lp = op.changeBlockFail) || void 0 === Lp || Lp.call(op, ei.pos(ip, cp, 0), ei.pos(ip, cp, 1), ei.pos(ip, cp, 2), ei.actual(ip, cp), ei.dataLen(ip, cp), cp + 20, Op - 20), !0);
+         case 46:
+           return 0 === Op && (null === (Yp = op.changeBlockFailEnd) || void 0 === Yp || Yp.call(op), !0);
+         case 48:
+           return 20 === Op && (null === (Dp = op.inventoryEvent) || void 0 === Dp || Dp.call(op, ui.what(ip, cp), ui.value(ip, cp), ui.pos(ip, cp, 0), ui.pos(ip, cp, 1), ui.pos(ip, cp, 2), ui.block(ip, cp)), !0);
+ ... (569 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/274.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/274.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3)

#### 1. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L4)

```diff
-   41016: (DD, zD, wD) => {
+   41864: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7-L13` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L7-L9) · [Before (L7-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L7-L13)

```diff
-       f: () => dD,
-       h: () => GD,
-       k: () => hD,
-       m: () => UD,
-       o: () => BD,
-       s: () => ID,
-       v: () => fD
+       e: () => xp,
+       i: () => Sp,
+       m: () => Yp
```

#### 3. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L15-L47` → after: `L11-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L11-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L11-L24) · [Before (L15-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L15-L47)

```diff
-     var pD = wD(37079),
-       sD = wD(37273),
-       KD = wD(37125),
-       rD = wD(41023),
-       LD = wD(40155),
-       cD = wD(39935),
-       gD = wD(39969),
-       RD = wD(39939),
-       AD = wD(37134);
-     const UD = Object.freeze(new pD.i(0, 0, 0, 0)),
-       fD = Object.freeze(pD.s.Zero()),
-       ID = Object.freeze(pD.r.Zero()),
-       BD = Object.freeze(cD.b.Zero()),
-       GD = Object.freeze(sD.d.Black()),
-       hD = Object.freeze(new sD.h(0, 0, 0, 0)),
-       nD = {
- ... (17 more removed lines; see GitHub link above)
+     var Op = cp(37479),
+       op = cp(38942),
+       Ip = cp(38938);
+ 
+     function Sp(pp, ip, cp, Op) {
+       const op = Ip.o;
+       ip.fill(0), pp.gravity.toArray(ip, op.gravity), pp.colorDead.toArray(ip, op.colorDead), cp[op.ramp] = pp.useRampGradients ? 1 : 0;
+       const Sp = pp.getColorGradients(),
+         xp = Pp(pp, Sp, "colour", Op);
+       cp[op.colorCount] = xp;
+       for (let Ip = 0; Ip < xp; Ip++) {
+         var Lp;
+         const pp = Sp[Wp(Sp, Ip)];
+         ip[op.colorPositions + Ip] = pp.gradient, pp.color1.toArray(ip, op.color1 + 4 * Ip), (null !== (Lp = pp.color2) && void 0 !== Lp ? Lp : pp.color1).toArray(ip, op.color2 + 4 * Ip)
```

#### 4. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L49-L50` → after: `L26-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L26-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L26-L39) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L49-L50)

```diff
-       get runtimeAnimations() {
-         return this._runtimeAnimations
+       const Yp = pp.getVelocityGradients(),
+         Dp = Pp(pp, Yp, "tw", Op);
+       cp[op.velocityCount] = Dp;
+       for (let Ip = 0; Ip < Dp; Ip++) tp(ip, op.tw + 4 * Ip, Yp[Wp(Yp, Ip)]);
+       const Ap = pp.useRampGradients ? pp.getColorRemapGradients() : null,
+         yp = Pp(pp, Ap, "colour remap", Op);
+       cp[op.remapCount] = yp;
+       for (let Ip = 0; Ip < yp; Ip++) tp(ip, op.remap + 4 * Ip, Ap[Wp(Ap, Ip)])
+     }
+ 
+     function xp() {
+       return {
+         key: [],
+         texels: new Uint8Array(4 * Ip.k)
```

#### 5. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L52-L55` → after: `L41-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L41-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L41-L109) · [Before (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L52-L55)

```diff
-       get hasRunningRuntimeAnimations() {
-         for (const DD of this._runtimeAnimations)
-           if (!DD.isStopped()) return !0;
-         return !1
+     }
+     const Lp = [];
+ 
+     function Yp(pp, ip) {
+       return Dp(pp, Lp), !vp(Lp, ip.key) && (ip.key.length = 0, ip.key.push(...Lp), ip.key.length > 0 && function(pp, ip) {
+         for (let cp = 0; cp < Ip.k; cp++) op.l.GetCurrentGradient(cp / Ip.k, pp, ((pp, ip, cp) => {
+           Op.Color3.LerpToRef(pp.color, ip.color, cp, Ap)
+         })), ip[4 * cp] = 255 * Ap.r, ip[4 * cp + 1] = 255 * Ap.g, ip[4 * cp + 2] = 255 * Ap.b, ip[4 * cp + 3] = 255
+       }(pp.getRampGradients(), ip.texels), !0)
+     }
+ 
+     function Dp(pp, ip) {
+       ip.length = 0;
+       const cp = pp.useRampGradients ? pp.getRampGradients() : null;
+       if (null !== cp && void 0 !== cp && cp.length) {
+         ip.push(cp.length);
+ ... (53 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L57-L58` → after: `L111-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L111-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L111-L141) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L57-L58)

```diff
-       constructor(DD, zD, wD, pD, sD, KD) {
-         this.name = DD, this.targetProperty = zD, this.framePerSecond = wD, this.dataType = pD, this.MK = sD, this.enableBlending = KD, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._c … [truncated]
+       return Lp
+     }
+     cp.d(ip, {
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
+ ... (15 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L60-L66` → after: `L143-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L143-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L143-L180) · [Before (L60-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L60-L66)

```diff
-       toString(DD) {
-         let zD = "Name: " + this.name + ", property: " + this.targetProperty;
-         if (zD += ", datatype: " + ["Float", "WI", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], zD += ", nKeys: " + (this._keys ? this._keys.length : "none"), zD += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), DD) {
-           zD += ", Ranges: {";
-           let DD = !0;
-           for (const wD in this._ranges) DD || (zD += ", "), DD = !1, zD += wD;
-           zD += "}"
+     }
+     cp.d(ip, {
+       c: () => Op
+     })
+   },
+   41890: (pp, ip, cp) => {
+     cp.d(ip, {
+       createLiteRendererAsync: () => bL,
+       liteBabylonBackend: () => bp,
+       setPipelineFailureHook: () => Yi
+     });
+     var Op = cp(37479),
+       op = cp(37815),
+       Ip = cp(38118),
+       Sp = cp(37445),
+       xp = cp(38126);
+ ... (22 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L70-L71` → after: `L183-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L183-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L183-L223) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L70-L71)

```diff
-       addEvent(DD) {
-         this._events.push(DD), this._events.sort(((DD, zD) => DD.frame - zD.frame))
+       getClassName() {
+         return "LinesMesh"
+       }
+     }
+     const Yp = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
+       Dp = pp => 1 << Yp.indexOf(pp),
+       Ap = Dp("VERTEXCOLOR"),
+       Pp = Dp("INSTANCES"),
+       Wp = Dp("THIN_INSTANCES"),
+       yp = Dp("INSTANCESCOLOR"),
+       Up = Dp("FOG"),
+       wp = Dp("LITE_FRONT_LAYER");
+ 
+     function vp(pp, ip, cp, Op) {
+       let op = 0;
+       return pp.isVerticesDataPresent("color") && (op |= Ap), "none" !== ip && (op |= Pp), "thin" === ip && (op |= Wp, pp.isVerticesDataPresent("instanceColor") && (op |= yp)), Op.fogEnabled && pp.applyFog && 0 !== Op.fogMode && (op |= Up), cp >= 1 && (op |= wp), op
+ ... (25 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L73-L74` → after: `L225-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L225-L226) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L73-L74)

```diff
-       removeEvents(DD) {
-         for (let zD = 0; zD < this._events.length; zD++) this._events[zD].frame === DD && (this._events.splice(zD, 1), zD--)
+       Gl() {
+         return this.pw
```

#### 10. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L76-L77` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L228-L229) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L76-L77)

```diff
-       getEvents() {
-         return this._events
+       getClassName() {
+         return "LiteMaterial"
```

#### 11. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L79-L80` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L231-L232) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L79-L80)

```diff
-       createRange(DD, zD, wD) {
-         this._ranges[DD] || (this._ranges[DD] = new rD.e(DD, zD, wD))
+       freeze() {
+         this.checkReadyOnlyOnce = !0
```

#### 12. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L82-L92` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L234-L235) · [Before (L82-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L82-L92)

```diff
-       deleteRange(DD) {
-         let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         const wD = this._ranges[DD];
-         if (wD) {
-           if (zD) {
-             const DD = wD.from,
-               zD = wD.to;
-             for (let wD = this._keys.length - 1; wD >= 0; wD--) this._keys[wD].frame >= DD && this._keys[wD].frame <= zD && this._keys.splice(wD, 1)
-           }
-           this._ranges[DD] = null
-         }
+       unfreeze() {
+         this.checkReadyOnlyOnce = !1
```

#### 13. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L94-L95` → after: `L237-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L237-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L237-L239) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L94-L95)

```diff
-       getRange(DD) {
-         return this._ranges[DD]
+       markDirty() {}
+       get fillMode() {
+         return this.model.fillMode
```

#### 14. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L97-L98` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L241-L242) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L97-L98)

```diff
-       getKeys() {
-         return this._keys
+       needAlphaBlendingForMesh(pp) {
+         return (0, Rp.P)(this.model, pp.visibility, pp.hasVertexAlpha)
```

#### 15. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L100-L103` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L244-L245) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L100-L103)

```diff
-       getHighestFrame() {
-         let DD = 0;
-         for (let zD = 0, wD = this._keys.length; zD < wD; zD++) DD < this._keys[zD].frame && (DD = this._keys[zD].frame);
-         return DD
+       needAlphaTestingForMesh(pp) {
+         return (0, Rp.T)(this.model, pp.visibility, pp.hasVertexAlpha)
```

#### 16. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L105-L106` → after: `L247-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L247-L249) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L105-L106)

```diff
-       getEasingFunction() {
-         return this._easingFunction
+       dispose() {
+         (0, dp.i)(this);
+         for (const pp of this.disposers.splice(0)) pp()
```

#### 17. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L108-L109` → after: `L251-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L251-L252) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L108-L109)

```diff
-       setEasingFunction(DD) {
-         this._easingFunction = DD
+       get model() {
+         return (0, Rp.$)(this)
```

#### 18. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L111-L112` → after: `L254-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L254-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L254-L314) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L111-L112)

```diff
-       floatInterpolateFunction(DD, zD, wD) {
-         return (0, KD.Lerp)(DD, zD, wD)
+     }
+     const Xp = new WeakSet;
+ 
+     function lp(pp) {
+       return Xp.has(pp)
+     }
+ 
+     function Qp(pp) {
+       Xp.add(pp)
+     }
+     const Jp = {
+       create: (pp, ip) => ((0, ep.p)(pp, new Ep(pp.name, ip)), qp.d.defines()),
+       write: () => {},
+       addFeature: (pp, ip) => {
+         const cp = pp.mirror;
+         ip.feature === mp.g && ip.state.dirLightCount > 0 && (pp.disableLighting = !0, (0, Rp.Y)(pp)), "BLOXD_LIGHTING" in ip.defines && (0, dp.g)(cp), ip.feature === kp.f && ((0, Hp.n)(ip.state, Cp), function(pp, ip) {
+ ... (45 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L114-L115` → after: `L316-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L316-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L316-L321) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L114-L115)

```diff
-       floatInterpolateFunctionWithTangents(DD, zD, wD, pD, sD) {
-         return (0, KD.Hermite)(DD, zD, wD, pD, sD)
+     };
+     var Bp = cp(37667),
+       Np = cp(37349);
+     class Tp {
+       constructor(pp, ip, cp) {
+         this.engine = pp, this.clearColor = ip, this.ambientColor = cp, this.onBeforeRenderObservable = new Np.d, this.onBeforeCameraRenderObservable = new Np.d, this.onAfterRenderObservable = new Np.d, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = … [truncated]
```

#### 20. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L117-L118` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L323-L324) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L117-L118)

```diff
-       quaternionInterpolateFunction(DD, zD, wD) {
-         return pD.i.Slerp(DD, zD, wD)
+       gy() {
+         return this.engine
```

#### 21. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L120-L121` → after: `L326-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L326-L327) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L120-L121)

```diff
-       quaternionInterpolateFunctionWithTangents(DD, zD, wD, sD, KD) {
-         return pD.i.Hermite(DD, zD, wD, sD, KD).normalize()
+       getUniqueId() {
+         return ++this.lastId
```

#### 22. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L123-L124` → after: `L329-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L329-L330) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L123-L124)

```diff
-       vector3InterpolateFunction(DD, zD, wD) {
-         return pD.s.Lerp(DD, zD, wD)
+       getFrameId() {
+         return this.frameId
```

#### 23. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L126-L127` → after: `L332-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L332-L333) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L126-L127)

```diff
-       vector3InterpolateFunctionWithTangents(DD, zD, wD, sD, KD) {
-         return pD.s.Hermite(DD, zD, wD, sD, KD)
+       getAnimationRatio() {
+         return this.animationRatio
```

#### 24. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L129-L130` → after: `L335-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L335-L336) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L129-L130)

```diff
-       vector2InterpolateFunction(DD, zD, wD) {
-         return pD.r.Lerp(DD, zD, wD)
+       addPendingData(pp) {
+         this.pending.push(pp)
```

#### 25. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L132-L133` → after: `L338-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L338-L339) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L132-L133)

```diff
-       vector2InterpolateFunctionWithTangents(DD, zD, wD, sD, KD) {
-         return pD.r.Hermite(DD, zD, wD, sD, KD)
+       removePendingData(pp) {
+         const ip = this.pending.indexOf(pp); - 1 !== ip && this.pending.splice(ip, 1)
```

#### 26. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L135-L136` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L341-L342) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L135-L136)

```diff
-       sizeInterpolateFunction(DD, zD, wD) {
-         return cD.b.Lerp(DD, zD, wD)
+       getWaitingItemsCount() {
+         return this.pending.length
```

#### 27. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L138-L139` → after: `L344-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L344-L345) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L138-L139)

```diff
-       color3InterpolateFunction(DD, zD, wD) {
-         return sD.d.Lerp(DD, zD, wD)
+       isReady() {
+         return 0 === this.pending.length
```

#### 28. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L141-L142` → after: `L347-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L347-L348) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L141-L142)

```diff
-       color3InterpolateFunctionWithTangents(DD, zD, wD, pD, KD) {
-         return sD.d.Hermite(DD, zD, wD, pD, KD)
+       getActiveMeshes() {
+         return []
```

#### 29. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L144-L145` → after: `L350-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L350-L351) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L144-L145)

```diff
-       color4InterpolateFunction(DD, zD, wD) {
-         return sD.h.Lerp(DD, zD, wD)
+       render() {
+         this.frameId++, this.animationRatio = .06 * Math.max(1, Math.min(this.engine.getDeltaTime(), 1e3)), this.draw(), this.onAfterRenderObservable.notifyObservers(this)
```

#### 30. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L147-L148` → after: `L353-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L353-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L353-L389) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L147-L148)

```diff
-       color4InterpolateFunctionWithTangents(DD, zD, wD, pD, KD) {
-         return sD.h.Hermite(DD, zD, wD, pD, KD)
+     }
+ 
+     function fp() {
+       throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
+     }
+     const bp = {
+       Zcp: fp,
+       jop: (pp, ip) => {
+         const cp = new Tp(pp.engine, Op.b.FromArray(ip.clearColor), Op.Color3.FromArray(ip.ambientColor));
+         (0, Sp.e)(Jp, cp), pp.pw = cp,
+           function(pp, ip) {
+             const cp = Object.assign((0, Bp.j)(pp, "camera"), {
+               layerMask: 268435455
+             });
+             pp.model.nodes.setWorldSource(cp.row, pp.model.view.worldMatrix), pp.camera = ip.activeCamera = cp
+           }(pp, cp), (0, op.i)(pp, ((pp, ip, cp) => (0, Ip.e)(pp, ip, cp, xp.c)))
+ ... (21 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L150-L151` → after: `L391-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L391-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L391-L392) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L150-L151)

```diff
-       _getKeyValue(DD) {
-         return "function" === typeof DD ? DD() : DD
+       frameDrawn() {
+         this.refusedFrames = 0
```

#### 32. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L153-L154` → after: `L394-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L394-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L394-L405) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L153-L154)

```diff
-       evaluate(DD) {
-         return nD.key = 0, this._interpolate(DD, nD)
+       frameFailed(pp) {
+         (function(pp) {
+           const {
+             name: ip,
+             message: cp
+           } = null !== pp && void 0 !== pp ? pp : {};
+           return "InvalidStateError" === ip && "string" === typeof cp && cp.startsWith("GPUDevice.")
+         })(pp) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
+           reason: "unknown",
+           message: pp.message,
+           framesRefused: !0
+         }))
```

#### 33. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L156-L203` → after: `L407-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L407-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L407-L476) · [Before (L156-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L156-L203)

```diff
-       _interpolate(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (zD.MK === MD.ANIMATIONLOOPMODE_CONSTANT && zD.repeatCount > 0) return zD.highLimitValue.clone ? zD.highLimitValue.clone() : zD.highLimitValue;
-         const pD = this._keys;
-         let sD;
-         if (this._coreAnimation) sD = this._coreAnimation._key;
-         else {
-           const KD = pD.length;
-           for (sD = zD.key; sD >= 0 && DD < pD[sD].frame;) --sD;
-           for (; sD + 1 <= KD - 1 && DD >= pD[sD + 1].frame;) ++sD;
-           if (zD.key = sD, sD < 0) return wD ? void 0 : this._getKeyValue(pD[0].value);
-           if (sD + 1 > KD - 1) return wD ? void 0 : this._getKeyValue(pD[KD - 1].value);
-           this._key = sD
-         }
-         const KD = pD[sD],
-           rD = pD[sD + 1];
- ... (32 more removed lines; see GitHub link above)
+     }
+     var gp = cp(41375),
+       Gp = cp(38949);
+ 
+     function rp(pp) {
+       return Math.max(4, 4 * Math.ceil(pp / 4))
+     }
+ 
+     function Zp(pp, ip, cp, Op) {
+       const op = pp.createBuffer({
+         label: Op,
+         size: rp(ip.byteLength),
+         usage: cp,
+         mappedAtCreation: !0
+       });
+       return new Uint8Array(op.getMappedRange(), 0, ip.byteLength).set(new Uint8Array(ip.buffer, ip.byteOffset, ip.byteLength)), op.unmap(), op
+ ... (54 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L205` → after: `L478-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L478-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L478-L641) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L205)

```diff
-             return DD
+             yield {
+               data: cp,
+               width: pp,
+               height: ip
+             }, op = cp, Ip = pp, Sp = ip
+           }
+         }(ip, cp, Op, op)) xp(Yp.data, Lp++, Yp.width, Yp.height);
+       return Sp
+     }
+     const Kp = {
+       premultiplyAlpha: "none",
+       colorSpaceConversion: "none"
+     };
+ 
+     function Vp(pp) {
+       if (pp.startsWith("data:")) {
+ ... (148 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L207-L293` → after: `L643-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L643-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L643-L648) · [Before (L207-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L207-L293)

```diff
-           case MD.ANIMATIONTYPE_VECTOR3: {
-             const DD = gD ? this.vector3InterpolateFunctionWithTangents(LD, KD.outTangent.scale(RD), cD, rD.inTangent.scale(RD), AD) : this.vector3InterpolateFunction(LD, cD, AD);
-             switch (zD.MK) {
-               case MD.ANIMATIONLOOPMODE_CYCLE:
-               case MD.ANIMATIONLOOPMODE_CONSTANT:
-               case MD.ANIMATIONLOOPMODE_YOYO:
-                 return DD;
-               case MD.ANIMATIONLOOPMODE_RELATIVE:
-               case MD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
-                 return DD.add((zD.offsetValue || fD).scale(zD.repeatCount))
-             }
-             break
-           }
-           case MD.ANIMATIONTYPE_VECTOR2: {
-             const DD = gD ? this.vector2InterpolateFunctionWithTangents(LD, KD.outTangent.scale(RD), cD, rD.inTangent.scale(RD), AD) : this.vector2InterpolateFunction(LD, cD, AD);
-             switch (zD.MK) {
- ... (71 more removed lines; see GitHub link above)
+           of cp) op += Sp;
+         for (const {
+             name: Sp,
+             offset: xp,
+             size: Lp,
+             type: Yp
```

#### 36. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L296` → after: `L711-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L711-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L711-L714) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L296)

```diff
-         return zD
+         let Ip = 0;
+         ip.renderSelf && this.packRow(Ip++, pp, ip.row, cp);
+         for (let Sp = 0; Sp < ip.rows.length; Sp++) this.packRow(Ip++, ip.instances[Sp], ip.rows[Sp], cp);
+         this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * op), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, op * this.rowStride)
```

#### 37. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L298-L330` → after: `L716-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L716-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L716-L724) · [Before (L298-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L298-L330)

```diff
-       setKeys(DD) {
-         let zD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = DD;
-         else if (this._keys = DD.slice(0), zD)
-           for (let wD = 0; wD < this._keys.length; wD++) {
-             const DD = this._keys[wD];
-             this._keys[wD] = {
-               frame: DD.frame,
-               value: DD.value.clone ? DD.value.clone() : DD.value,
-               inTangent: DD.inTangent && DD.inTangent.clone ? DD.inTangent.clone() : DD.inTangent,
-               outTangent: DD.outTangent && DD.outTangent.clone ? DD.outTangent.clone() : DD.outTangent,
-               interpolation: DD.interpolation,
-               lockedTangent: DD.lockedTangent,
-               easingFunction: DD.easingFunction
-             }
-           }
- ... (17 more removed lines; see GitHub link above)
+       packRow(pp, ip, cp, Op) {
+         const op = this.matrices;
+         if (cp < 0) op.set(ip.getWorldMatrix().m, 16 * pp);
+         else
+           for (let Yp = 0; Yp < 16; Yp++) op[16 * pp + Yp] = Op[16 * cp + Yp];
+         const Ip = this.attributes;
+         if (!Ip) return;
+         const Sp = ip.MJ,
+           xp = this.layout;
```

#### 38. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L332-L352` → after: `L726-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L726-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L726-L729) · [Before (L332-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L332-L352)

```diff
-           const sD = wD[pD],
-             KD = {};
-           switch (KD.frame = sD.frame, zD) {
-             case MD.ANIMATIONTYPE_FLOAT:
-               KD.values = [sD.value], void 0 !== sD.inTangent && KD.values.push(sD.inTangent), void 0 !== sD.outTangent && (void 0 === sD.inTangent && KD.values.push(void 0), KD.values.push(sD.outTangent)), void 0 !== sD.interpolation && (void 0 === sD.inTangent && KD.values.push … [truncated]
-               break;
-             case MD.ANIMATIONTYPE_QUATERNION:
-             case MD.ANIMATIONTYPE_MATRIX:
-             case MD.ANIMATIONTYPE_VECTOR3:
-             case MD.ANIMATIONTYPE_COLOR3:
-             case MD.ANIMATIONTYPE_COLOR4:
-               KD.values = sD.value.QpD(), void 0 != sD.inTangent && KD.values.push(sD.inTangent.QpD()), void 0 != sD.outTangent && (void 0 === sD.inTangent && KD.values.push(void 0), KD.values.push(sD.outTangent.QpD())), void 0 !== sD.interpolation && (void 0 === sD.inTangent &&  … [truncated]
-           }
-           DD.keys.push(KD)
-         }
-         DD.rG = [];
- ... (5 more removed lines; see GitHub link above)
+           var Lp;
+           const ip = null !== (Lp = Sp[xp[Yp]]) && void 0 !== Lp ? Lp : 0,
+             cp = pp * this.rowStride + this.offsets[Yp];
+           ip.toArray ? ip.toArray(Ip, cp) : ip.copyToArray ? ip.copyToArray(Ip, cp) : Ip[cp] = ip
```

#### 39. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L356-L358` → after: `L732-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L732-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L732-L747) · [Before (L356-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L356-L358)

```diff
-       static _UniversalLerp(DD, zD, wD) {
-         const pD = DD.constructor;
-         return pD.Lerp ? pD.Lerp(DD, zD, wD) : pD.Slerp ? pD.Slerp(DD, zD, wD) : DD.toFixed ? DD * (1 - wD) + wD * zD : zD
+     }
+     class wi {
+       constructor(pp, ip, cp, Op) {
+         let op = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
+           Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+         this.key = pp, this.byteOffset = ip, this.byteStride = cp, this.size = Op, this.instanced = op, this.type = Ip, this.normalized = Sp
+       }
+       getBuffer() {
+         return this.key
+       }
+       getSize() {
+         return this.size
+       }
+       getIsInstanced() {
+         return this.instanced
```

#### 40. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L363-L443` → after: `L759-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L759-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L759-L783) · [Before (L363-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L363-L443)

```diff
-       let sD;
-       sD = "object" === typeof zD ? zD : {
-         referenceFrame: zD ?? 0,
-         range: wD,
-         cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
-       };
-       let KD = DD;
-       sD.cloneOriginalAnimation && (KD = DD.clone(), KD.name = sD.clonedAnimationName || KD.name);
-       const rD = KD.getKeys();
-       if (!rD.length) return KD;
-       const LD = sD.referenceFrame && sD.referenceFrame >= 0 ? sD.referenceFrame : 0;
-       let cD = 0;
-       const gD = rD[0];
-       let RD = rD.length - 1;
-       const AD = rD[RD],
- ... (65 more removed lines; see GitHub link above)
+       var Op;
+       let op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+       const Ip = null !== (Op = ip._colorFormat) && void 0 !== Op ? Op : "bgra8unorm",
+         Sp = op ? 15 : 0;
+       return cp ? {
+         ...pp,
+         targets: [{
+           format: Ip,
+           blend: {
+             color: cp,
+             alpha: Hi
+           },
+           writeMask: Sp
+         }]
+       } : {
+         ...pp,
+ ... (9 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L446-L448` → after: `L786-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L786-L787) · [Before (L446-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L446-L448)

```diff
-     function JD(DD, zD, wD, pD) {
-       const sD = new MD(DD + "Animation", DD, wD, zD, MD.ANIMATIONLOOPMODE_CONSTANT);
-       return sD.setEasingFunction(pD), sD
+     function ei(pp, ip) {
+       pp._renderables.push(ip)
```

#### 42. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L451-L453` → after: `L790-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L790-L791) · [Before (L451-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L451-L453)

```diff
-     function ED(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD) {
-       const AD = MD._PrepareAnimation(DD, wD, pD, sD, KD, rD, LD, cD);
-       return AD ? (zD.Ul && (RD = zD.Ul()), RD ? RD.beginDirectAnimation(zD, [AD], 0, sD, AD.MK !== MD.ANIMATIONLOOPMODE_CONSTANT, 1, gD) : null) : null
+     function ui(pp) {
+       return pp._device
```

#### 43. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L456-L459` → after: `L794-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L794-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L794-L796) · [Before (L456-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L456-L459)

```diff
-     function QD(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD) {
-       const AD = MD._PrepareAnimation(DD, pD, sD, KD, rD, LD, cD, gD);
-       if (!AD) return null;
-       return zD.Ul().beginDirectHierarchyAnimation(zD, wD, [AD], 0, KD, 1 === AD.MK, 1, RD)
+     function ji(pp) {
+       var ip, cp;
+       return null !== (ip = null === (cp = pp._frameGraph) || void 0 === cp ? void 0 : cp._tasks) && void 0 !== ip ? ip : []
```

#### 44. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L462-L464` → after: `L799-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L799-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L799-L800) · [Before (L462-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L462-L464)

```diff
-     function XD(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD) {
-       const RD = MD._PrepareAnimation(DD, wD, pD, sD, KD, rD, LD, cD);
-       return RD ? (zD.animations.push(RD), zD.Ul().beginAnimation(zD, 0, sD, 1 === RD.MK, 1, gD)) : null
+     function ki(pp) {
+       return pp._currentEncoder
```

#### 45. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L467-L480` → after: `L803-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L803-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L803-L819) · [Before (L467-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L467-L480)

```diff
-     function VD(DD, zD, wD, pD, sD, KD, rD) {
-       let LD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-         cD = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
-         gD = arguments.length > 9 ? arguments[9] : void 0;
-       if (rD <= 0) return wD[DD] = zD, LD && LD(), null;
-       const RD = sD * (rD / 1e3);
-       KD.setKeys(gD ?? [{
-         frame: 0,
-         value: wD[DD].clone ? wD[DD].clone() : wD[DD]
-       }, {
-         frame: RD,
-         value: zD
-       }]), wD.animations || (wD.animations = []), wD.animations.push(KD);
-       return pD.beginAnimation(wD, 0, RD, !1, 1, LD ?? void 0, void 0, cD)
+     function mi(pp) {
+       return pp.createBindGroupLayout({
+         label: "lite-scene-equivalent",
+         entries: [{
+           binding: 0,
+           visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
+           buffer: {
+             type: "uniform"
+           }
+         }, {
+           binding: 1,
+           visibility: GPUShaderStage.FRAGMENT,
+           buffer: {
+             type: "uniform"
+           }
+         }]
+ ... (1 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L484` → after: `L827-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L827-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L827-L871) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L484)

```diff
-       RD.d.AppendSerializedAnimations(DD, zD)
+       let cp = Ci.get(pp);
+       if (!cp) {
+         cp = {
+           module: pp.createShaderModule({
+             label: "placeholder",
+             code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
+           }),
+           pipelines: new Map
+         }, Ci.set(pp, cp)
+       }
+       const Op = `${ip._colorFormat}|${ip._depthStencilFormat}|${ip._sampleCount}`;
+       let op = cp.pipelines.get(Op);
+       if (!op) {
+         var Ip;
+         const {
+           module: Sp
+ ... (29 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L487-L528` → after: `L874-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L874-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L874-L877) · [Before (L487-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L487-L528)

```diff
-     function CD(DD) {
-       const zD = new MD(DD.name, DD.property, DD.framePerSecond, DD.dataType, DD.loopBehavior),
-         wD = DD.dataType,
-         KD = [];
-       let rD, LD;
-       for (DD.enableBlending && (zD.enableBlending = DD.enableBlending), DD.blendingSpeed && (zD.blendingSpeed = DD.blendingSpeed), LD = 0; LD < DD.keys.length; LD++) {
-         const zD = DD.keys[LD];
-         let cD, gD, RD;
-         switch (wD) {
-           case MD.ANIMATIONTYPE_FLOAT:
-             rD = zD.values[0], zD.values.length >= 2 && (cD = zD.values[1]), zD.values.length >= 3 && (gD = zD.values[2]), zD.values.length >= 4 && (RD = zD.values[3]);
-             break;
-           case MD.ANIMATIONTYPE_QUATERNION:
-             if (rD = pD.i.FromArray(zD.values), zD.values.length >= 8) {
-               const DD = pD.i.FromArray(zD.values.slice(4, 8));
-               DD.equals(pD.i.Zero()) || (cD = DD)
- ... (26 more removed lines; see GitHub link above)
+     function Xi(pp, ip, cp) {
+       const Op = ip.eye,
+         op = ip.viewMatrix;
+       pp[0] = Op[0] + op[2] * cp, pp[1] = Op[1] + op[6] * cp, pp[2] = Op[2] + op[10] * cp
```

#### 48. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L530-L547` → after: `L879-L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L879-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L879-L910) · [Before (L530-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L530-L547)

```diff
-     async function xD(DD, zD) {
-       return await new Promise(((wD, pD) => {
-         const sD = new gD.e;
-         sD.addEventListener("readystatechange", (() => {
-           if (4 == sD.readyState)
-             if (200 == sD.status) {
-               let zD = JSON.parse(sD.responseText);
-               if (zD.animations && (zD = zD.animations), zD.length) {
-                 const DD = [];
-                 for (const wD of zD) DD.push(CD(wD));
-                 wD(DD)
-               } else {
-                 const pD = CD(zD);
-                 DD && (pD.name = DD), wD(pD)
-               }
-             } else pD("Unable to load the animation")
- ... (2 more removed lines; see GitHub link above)
+     var li = cp(38178),
+       Qi = cp(41860),
+       Ji = cp(37433);
+     const Bi = Math.PI,
+       Ni = Bi / 1.95,
+       Ti = [5e-4 / 94, 125e-7, 5e-4 / 18],
+       fi = [
+         [68e-8, .686],
+         [55e-8, .678],
+         [45e-8, .666]
+       ].map((pp => {
+         let [ip, cp] = pp;
+         return .434 * Bi * Math.pow(2 * Bi / ip, 2) * cp
+       }));
+ 
+     function bi(pp, ip, cp) {
+ ... (16 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L549-L570` → after: `L912-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L912-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L912-L990) · [Before (L549-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L549-L570)

```diff
-     async function TD(DD) {
-       const zD = this?.SnippetUrl ?? MD.SnippetUrl;
-       return await new Promise(((wD, pD) => {
-         const sD = new gD.e;
-         sD.addEventListener("readystatechange", (() => {
-           if (4 == sD.readyState)
-             if (200 == sD.status) {
-               const zD = JSON.parse(JSON.parse(sD.responseText).jsonPayload);
-               if (zD.animations) {
-                 const pD = JSON.parse(zD.animations),
-                   sD = [];
-                 for (const zD of pD.animations) {
-                   const wD = CD(zD);
-                   wD.snippetId = DD, sD.push(wD)
-                 }
-                 wD(sD)
- ... (6 more removed lines; see GitHub link above)
+     const ai = {
+       A: .15,
+       B: .5,
+       C: .1,
+       D: .2,
+       E: .02,
+       F: .3
+     };
+     const ni = 1 / function(pp) {
+       const {
+         A: ip,
+         B: cp,
+         C: Op,
+         D: op,
+         E: Ip,
+         F: Sp
+ ... (63 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L577-L578` → after: `L994-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L994-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L994-L1062) · [Before (L577-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L577-L578)

```diff
-     function dD() {
-       jD || (jD = !0, MD.Parse = CD, MD.ParseFromFileAsync = xD, MD.ParseFromSnippetAsync = TD, MD.CreateFromSnippetAsync = bD, MD.CreateAnimation = JD, MD.CreateAndStartAnimation = ED, MD.CreateAndStartHierarchyAnimation = QD, MD.CreateMergeAndStartAnimation = XD, MD.MakeAnimati … [truncated]
+     function Zi(pp, ip) {
+       var cp;
+       const Op = null !== (cp = pp.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== cp ? cp : [];
+       let op = 0;
+       const Ip = () => Op[op],
+         Sp = () => Op[op++],
+         xp = pp => {
+           const cp = /^\d/.test(pp) ? pp : ip.get(pp);
+           return "string" === typeof cp ? parseInt(cp) : Number.NaN
+         },
+         Lp = () => {
+           const pp = Sp();
+           if ("!" === pp) return !Lp();
+           if ("(" === pp) {
+             const pp = Dp();
+             return Sp(), pp
+ ... (53 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L580-L591` → after: `L1064-L8584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1064-L8584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L1064-L8584) · [Before (L580-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L580-L591)

```diff
-   },
-   41023: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => pD
-     });
-     class pD {
-       constructor(DD, zD, wD) {
-         this.name = DD, this.from = zD, this.to = wD
-       }
-       clone() {
-         return new pD(this.name, this.from, this.to)
-       }
+     var zi = cp(37429),
+       si = cp(37745),
+       Ki = cp(37747),
+       Vi = cp(40892),
+       pc = cp(38982);
+     const ic = 32,
+       cc = [10, 3, 10],
+       Oc = [21, 7, 21],
+       oc = Oc[0] * Oc[1] * Oc[2],
+       Ic = 0,
+       Sc = 1,
+       xc = 2,
+       Lc = 3,
+       Yc = 64,
+       Dc = 512,
+       Ac = 4 * oc,
+ ... (7505 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L594-L623` → after: `L8587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L8587) · [Before (L594-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L594-L623)

```diff
-   41066: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => pD.b,
-       f: () => pD.k
-     });
-     var pD = wD(40066);
-     (0, pD.e)()
-   },
-   41049: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => pD.d
-     });
-     var pD = wD(40400);
-     (0, pD.c)()
-   },
-   41035: (DD, zD, wD) => {
- ... (14 more removed lines; see GitHub link above)
+   40892: (pp, ip, cp) => {
```

#### 53. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L625` → after: `L8589-L8600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8589-L8600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L8589-L8600) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L625)

```diff
-       e: () => pD.f
+       A: () => Up,
+       C: () => Wp,
+       E: () => yp,
+       c: () => op,
+       g: () => Op,
+       h: () => Pp,
+       l: () => Dp,
+       m: () => wp,
+       o: () => Ip,
+       r: () => xp,
+       t: () => Lp,
+       x: () => Sp
```

#### 54. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L627-L628` → after: `L8602-L8677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8602-L8677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/274.js#L8602-L8677) · [Before (L627-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/274.js#L627-L628)

```diff
-     var pD = wD(40372);
-     (0, pD.c)()
+     const Op = 3,
+       op = 0,
+       Ip = 1,
+       Sp = 2,
+       xp = {
+         uniform: 3,
+         hP: 4,
+         special: 5,
+         volume: 6,
+         sampler: 7,
+         entities: 8,
+         entityGrids: 9
+       },
+       Lp = 10,
+       Yp = "BloxdPackInputs",
+       Dp = "bloxdPackInputs",
+ ... (60 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/275.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/275.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a)

#### 1. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L4-L5` → after: `L4-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L4-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/275.js#L4-L68) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/275.js#L4-L5)

```diff
-   41093: DD => {
-     DD.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
+   41114: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp,
+       f: () => Ip,
+       g: () => xp
+     });
+     let Op = null,
+       op = null;
+ 
+     function Ip(pp, ip) {
+       return Op = pp, op = null, xp(ip), () => {
+         Op === pp && (Op = null, op = null)
+       }
+     }
+ 
+     function Sp() {
+ ... (49 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/276.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/276.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6)

#### 1. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L4-L5` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/276.js#L4-L16) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/276.js#L4-L5)

```diff
-   41099: DD => {
-     DD.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
+   41273: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       gamePackSource: () => Ip
+     });
+     var Op = cp(5103),
+       op = cp(1520);
+ 
+     function Ip(pp) {
+       return {
+         packKey: async ip => (await op.b.getGame(pp, ip, !0)).customTexturePackKey,
+         fetchPack: Op.d
+       }
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/277.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/277.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410)

#### 1. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/277.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/277.js#L2)

```diff
- export const ids = [277];
+ export const ids = [276, 277];
```

#### 2. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4-L5` → after: `L4-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/277.js#L4-L93) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/277.js#L4-L5)

```diff
-   41103: DD => {
-     DD.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
+   41273: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       gamePackSource: () => Ip
+     });
+     var Op = cp(5103),
+       op = cp(1520);
+ 
+     function Ip(pp) {
+       return {
+         packKey: async ip => (await op.b.getGame(pp, ip, !0)).customTexturePackKey,
+         fetchPack: Op.d
+       }
+     }
+   },
+   51202: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+ ... (74 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/278.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/278.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0)

#### 1. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L4-L5` → after: `L4-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L4-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/278.js#L4-L152) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/278.js#L4-L5)

```diff
-   41108: DD => {
-     DD.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
+   41277: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       BloxdInformation: () => Wp
+     });
+     var Op = cp(1201),
+       op = cp(62),
+       Ip = cp(104),
+       Sp = cp(1480),
+       xp = cp(131),
+       Lp = cp(1060),
+       Yp = cp(1112);
+     const Dp = (0, op.lazy)((() => Promise.all([cp.e(124), cp.e(398)]).then((() => cp(6658))))),
+       Ap = (0, op.lazy)((() => cp.e(126).then((() => cp(6672)))));
+ 
+     function Pp() {
+       return (0, Yp.jsxs)("div", {
+ ... (133 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/279.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/279.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae)

#### 1. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L4-L5` → after: `L4-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L4-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/279.js#L4-L628) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/279.js#L4-L5)

```diff
-   41111: DD => {
-     DD.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
+   41315: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Hp,
+       h: () => Qp,
+       j: () => wp,
+       m: () => vp,
+       o: () => Pp,
+       p: () => Up,
+       t: () => yp,
+       w: () => Wp
+     });
+     var Op = cp(37320),
+       op = cp(37487),
+       Ip = cp(37356),
+       Sp = cp(41320),
+       xp = cp(40415),
+ ... (609 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/280.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/280.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db)

#### 1. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/280.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/280.js#L4-L5)

```diff
-   41113: DD => {
-     DD.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
+   41402: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/281.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/281.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696)

#### 1. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/281.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/281.js#L4-L5)

```diff
-   41119: DD => {
-     DD.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEWSURBVHic7dohEoJAFMZxcCgSLHIOq8Vs8QSewOxJzJ7AO5gtVs+hxYBREwzjMDDLW/zA/f/iusCbz6fCG+PI6HrevS3H3x9P0/U321NsOX5iuvofSHydaJqmTvtfee7r0 … [truncated]
+   41410: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/282.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/282.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8)

#### 1. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/282.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/282.js#L4-L5)

```diff
-   41123: DD => {
-     DD.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEQSURBVHic7dpBDsFAFMbxjnRBIiSO4QZ2tuIgDuAEDuAATmJrxwkcQ0Ik7FhVLEqNN/VNzf+3bKYzL58X6qUuM9ouxzfL/YfT1XT+dLFzlvtbptP/QB5qo36347X+eL6EO … [truncated]
+   41418: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/283.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/283.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e)

#### 1. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/283.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/283.js#L4-L5)

```diff
-   41128: DD => {
-     DD.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEHSURBVHic7dqxEsFAFIXhrEkjGt5Nq9bSKhUKDa1aq/dYNKKkilGEWHfjbOz/lZnN7p3jDnEnLjParMY3y/2n88V0/nJ9dJb7e6bT/0AeaqOi6HutL8trqKNN6IDQGzZ9s … [truncated]
+   41427: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/284.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/284.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887)

#### 1. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/284.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/284.js#L4-L5)

```diff
-   41136: DD => {
-     DD.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7do9EsFAGMbxrEnjY3Quo1WrncIBnMABXIJardDonUNnfJRUMYoQ6914Nvb/KzOb3Xce7xDvxGVG0/HwZrn/cDybzl9u985yf8t0+h/IQ23U67S91p8u11BHm … [truncated]
+   41432: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/285.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/285.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2)

#### 1. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/285.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/285.js#L4-L5)

```diff
-   41144: DD => {
-     DD.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrElDFB5OSavRewSFXqOlVOi8lkIoqWIUIdbdOBv7f2Vms3vnuEPcicuMVpPxzXL/6Vyazl8ejs5yf890+h/IQ21UDPpe68vLNdTRJnRA6A2bP … [truncated]
+   41440: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/286.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/286.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469)

#### 1. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/286.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/286.js#L4-L5)

```diff
-   41150: DD => {
-     DD.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPVSURBVHic7dxPbhMxGIdhB03aRSXaHafgAmwQC4TEohI34BRIPQESl0Fi20XVTS/ADThBi1QCnZHKAiwl7njGY3v8+c/77BJsx5n57GZI5rdRgd69P3/cf7w9Op5s3z/8O … [truncated]
+   41446: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEWSURBVHic7dohEoJAFMZxcCgSLHIOq8Vs8QSewOxJzJ7AO5gtVs+hxYBREwzjMDDLW/zA/f/iusCbz6fCG+PI6HrevS3H3x9P0/U321NsOX5iuvofSHydaJqmTvtfee7r0 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/287.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/287.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1)

#### 1. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/287.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/287.js#L4-L5)

```diff
-   41153: DD => {
-     DD.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKpSURBVHic7Zq/ThVBFMa/JXNBFAiVISEhSsM2WhFewADREAMkFEYSX4DCjvgExs4XoNBgKyUF8SUgBLWxkcTCRMMFLty78VrNze5hZ3Z2Z+7dXeb8utmZMzM78805Z/8Es … [truncated]
+   41454: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEQSURBVHic7dpBDsFAFMbxjnRBIiSO4QZ2tuIgDuAEDuAATmJrxwkcQ0Ik7FhVLEqNN/VNzf+3bKYzL58X6qUuM9ouxzfL/YfT1XT+dLFzlvtbptP/QB5qo36347X+eL6EO … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/288.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/288.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1)

#### 1. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/288.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/288.js#L4-L5)

```diff
-   41160: DD => {
-     DD.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEKSURBVHic7doxDoJAEIVh1hBjY/BsxsrOI3ADLmA8gp2VsfJgEhtjoxXGAsV1Ft/i/l9Jlt3Jc6I4wWVG22pxs9x/Ol9M55fro7PcPzKd/gfyUBsVxdhrfV1fQx1tQgeE3 … [truncated]
+   41461: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEHSURBVHic7dqxEsFAFIXhrEkjGt5Nq9bSKhUKDa1aq/dYNKKkilGEWHfjbOz/lZnN7p3jDnEnLjParMY3y/2n88V0/nJ9dJb7e6bT/0AeaqOi6HutL8trqKNN6IDQGzZ9s … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/289.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/289.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848)

#### 1. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/289.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/289.js#L4-L5)

```diff
-   41164: DD => {
-     DD.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAELSURBVHic7dqxEsFAFIXhjcmko6BTeSKlSucBVB5Hp1J6IpUKBV0aqhhFiHU3zsb+X5nZ7N457hB3kjmj8WZ9s9xfns6m84/LVWa5v2c6/Q/koTYqBn2v9eXlGupoEzog9 … [truncated]
+   41467: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7do9EsFAGMbxrEnjY3Quo1WrncIBnMABXIJardDonUNnfJRUMYoQ6914Nvb/KzOb3Xce7xDvxGVG0/HwZrn/cDybzl9u985yf8t0+h/IQ23U67S91p8u11BHm … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/290.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/290.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b)

#### 1. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/290.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/290.js#L4-L5)

```diff
-   41171: DD => {
-     DD.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIOSURBVHic7ZoxSwMxFIDfFRGVKgVxcpJDnK6Dg/9AXFwqdFKqk3UUl9JJnMTNsXYqopNDZ/EfODjYSVpxEoQOHlraUsFzsLFeendtLrlLr3nfEnp5Ly+XvPdySaoBJ+W8Y … [truncated]
+   41469: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrElDFB5OSavRewSFXqOlVOi8lkIoqWIUIdbdOBv7f2Vms3vnuEPcicuMVpPxzXL/6Vyazl8ejs5yf890+h/IQ21UDPpe68vLNdTRJnRA6A2bP … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/291.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/291.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4)

#### 1. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4-L152` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/291.js#L4-L5) · [Before (L4-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/291.js#L4-L152)

```diff
-   41190: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       CharacterPreview: () => AD
-     });
-     var pD = wD(58),
-       sD = wD(2750),
-       KD = wD(1245),
-       rD = wD(2560),
-       LD = wD(34233),
-       cD = wD(3643),
-       gD = wD(1096);
-     const RD = .6 * Math.PI,
-       AD = (0, pD.memo)((0, pD.forwardRef)((function(DD, zD) {
-         let {
-           onReady: wD,
-           onDrawn: AD,
- ... (133 more removed lines; see GitHub link above)
+   41478: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPVSURBVHic7dxPbhMxGIdhB03aRSXaHafgAmwQC4TEohI34BRIPQESl0Fi20XVTS/ADThBi1QCnZHKAiwl7njGY3v8+c/77BJsx5n57GZI5rdRgd69P3/cf7w9Op5s3z/8O … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/292.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/292.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76)

#### 1. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L4-L1182` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/292.js#L4-L5) · [Before (L4-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/292.js#L4-L1182)

```diff
-   41206: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       default: () => az
-     });
-     var pD = wD(41210),
-       sD = wD(41243),
-       KD = wD(41248),
-       rD = wD(58),
-       LD = wD(79),
-       cD = wD(41266),
-       gD = wD(41269),
-       RD = wD(4782),
-       AD = wD(41275),
-       UD = wD(1895),
-       fD = wD(41282),
-       ID = wD(41304),
- ... (1163 more removed lines; see GitHub link above)
+   41481: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKpSURBVHic7Zq/ThVBFMa/JXNBFAiVISEhSsM2WhFewADREAMkFEYSX4DCjvgExs4XoNBgKyUF8SUgBLWxkcTCRMMFLty78VrNze5hZ3Z2Z+7dXeb8utmZMzM78805Z/8Es … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/293.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/293.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663)

#### 1. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L4-L17228` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/293.js#L4-L5) · [Before (L4-L17228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/293.js#L4-L17228)

```diff
-   41210: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => dz,
-       e: () => Xz,
-       g: () => nz,
-       i: () => cD,
-       l: () => Sz,
-       m: () => gD,
-       n: () => Uz
-     });
-     var pD = wD(41212),
-       sD = wD(41217),
-       KD = wD(41231);
-     class rD {
-       constructor(DD, zD, wD, pD) {
-         this.state = DD, this.pos = zD, this.explicit = wD, this.view = pD, this.abortListeners = [], this.abortOnDocChange = !1
- ... (17209 more removed lines; see GitHub link above)
+   41484: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEKSURBVHic7doxDoJAEIVh1hBjY/BsxsrOI3ADLmA8gp2VsfJgEhtjoxXGAsV1Ft/i/l9Jlt3Jc6I4wWVG22pxs9x/Ol9M55fro7PcPzKd/gfyUBsVxdhrfV1fQx1tQgeE3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/294.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/294.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b)

#### 1. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L4-L2146` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/294.js#L4-L5) · [Before (L4-L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/294.js#L4-L2146)

```diff
-   41212: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => nz,
-       e: () => jD,
-       ChangeSet: () => dD,
-       h: () => Tz,
-       j: () => kD,
-       k: () => Sz,
-       n: () => oD,
-       q: () => bD,
-       u: () => sz,
-       z: () => kz,
-       v: () => mz,
-       C: () => lz,
-       E: () => Jz,
-       G: () => HD,
- ... (2127 more removed lines; see GitHub link above)
+   41492: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAELSURBVHic7dqxEsFAFIXhjcmko6BTeSKlSucBVB5Hp1J6IpUKBV0aqhhFiHU3zsb+X5nZ7N457hB3kjmj8WZ9s9xfns6m84/LVWa5v2c6/Q/koTYqBn2v9eXlGupoEzog9 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/295.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/295.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617)

#### 1. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L4-L4269` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/295.js#L4-L6) · [Before (L4-L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/295.js#L4-L4269)

```diff
-   41297: DD => {
-     function zD(DD) {
-       var zD = new Error("Cannot find module '" + DD + "'");
-       throw zD.code = "MODULE_NOT_FOUND", zD
-     }
-     zD.keys = () => [], zD.resolve = zD, zD.id = 41297, DD.exports = zD
-   },
-   41361: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => pD,
-       e: () => sD
-     });
-     const pD = "Sends one question to the AI",
-       sD = {
-         title: pD,
-         "data-asks-ai": !0
- ... (4250 more removed lines; see GitHub link above)
+   41498: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIOSURBVHic7ZoxSwMxFIDfFRGVKgVxcpJDnK6Dg/9AXFwqdFKqk3UUl9JJnMTNsXYqopNDZ/EfODjYSVpxEoQOHlraUsFzsLFeendtLrlLr3nfEnp5Ly+XvPdySaoBJ+W8Y … [truncated]
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/296.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/296.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486)

#### 1. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/296.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/296.js#L4-L6)

```diff
-   41275: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => pD
+   41524: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       CharacterPreview: () => Ap
```

#### 2. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L8-L7359` → after: `L8-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L8-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/296.js#L8-L152) · [Before (L8-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/296.js#L8-L7359)

```diff
-     const pD = String.raw`interface Map<K, V> {
-     clear(): void;
-     /**
-      * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
-      */
-     delete(key: K): boolean;
-     /**
-      * Executes a provided function once per each key/value pair in the Map, in insertion order.
-      */
-     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
-     /**
-      * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
-      * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
-      */
-     get(key: K): V | undefined;
-     /**
- ... (7336 more removed lines; see GitHub link above)
+     var Op = cp(62),
+       op = cp(2835),
+       Ip = cp(1251),
+       Sp = cp(2638),
+       xp = cp(34462),
+       Lp = cp(3731),
+       Yp = cp(1112);
+     const Dp = .6 * Math.PI,
+       Ap = (0, Op.memo)((0, Op.forwardRef)((function(pp, ip) {
+         let {
+           onReady: cp,
+           onDrawn: Ap,
+           owner: Pp = "other",
+           framing: Wp = "player",
+           forcedCosmetics: yp,
+           IL: Up,
+ ... (129 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/297.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/297.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3)

#### 1. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L4-L9` → after: `L4-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L4-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/297.js#L4-L58) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/297.js#L4-L9)

```diff
-   41282: (DD, zD, wD) => {
-     function pD() {
-       return pD = Object.assign ? Object.assign.bind() : function(DD) {
-         for (var zD = 1; zD < arguments.length; zD++) {
-           var wD = arguments[zD];
-           for (var pD in wD)({}).hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
+   41535: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       default: () => Zi
+     });
+     var Op = cp(41541),
+       op = cp(41591),
+       Ip = cp(41595),
+       Sp = cp(62),
+       xp = cp(82),
+       Lp = cp(41612),
+       Yp = cp(41621),
+       Dp = cp(4874),
+       Ap = cp(41630),
+       Pp = cp(1929),
+       Wp = cp(41637),
+       yp = cp(41647),
+ ... (39 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L12` → after: `L61-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L61-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/297.js#L61-L115) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/297.js#L12)

```diff
-       }, pD.apply(null, arguments)
+       }
+       eq(pp) {
+         return this.colour === pp.colour && this.playerName === pp.playerName && this.showName === pp.showName
+       }
+       get estimatedHeight() {
+         return -1
+       }
+       ignoreEvent() {
+         return !0
+       }
+     }
+ 
+     function Gp(pp, ip) {
+       const cp = [],
+         Op = [];
+       for (const [, Sp] of pp) {
+ ... (39 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L14-L16` → after: `L117-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L117-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/297.js#L117-L153) · [Before (L14-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/297.js#L14-L16)

```diff
-     wD.d(zD, {
-       b: () => UD,
-       d: () => LD
+     const rp = Mp.E.define({
+       create: () => ({
+         cursors: new Map,
+         uO: Cp.c.none
+       }),
+       update(pp, ip) {
+         let cp = pp.cursors,
+           Op = !1;
+         if (ip.docChanged) {
+           const pp = new Map;
+           for (const [Op, op] of cp) pp.set(Op, {
+             ...op,
+             anchor: ip.changes.mapPos(op.anchor, 1),
+             head: ip.changes.mapPos(op.head, 1)
+           });
+           cp = pp, Op = !0
+ ... (21 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L18-L32` → after: `L155-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L155-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/297.js#L155-L223) · [Before (L18-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/297.js#L18-L32)

```diff
-     var sD = !1;
-     try {
-       sD = "undefined" !== typeof localStorage
-     } catch (ID) {}
-     var KD = "undefined" !== typeof process,
-       rD = sD && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || KD && {
-         NODE_ENV: "production",
-         PUBLIC_URL: "",
-         WDS_SOCKET_HOST: void 0,
-         WDS_SOCKET_PATH: void 0,
-         WDS_SOCKET_PORT: void 0,
-         FAST_REFRESH: !0,
-         REACT_APP_DEV_URLS: "false"
-       }.DEBUG ? console.log : function(DD) {
-         return ""
+     const Zp = Mp.C.define(),
+       zp = Cp.c.mark({
+         class: "CodeInsertFlash"
+       }),
+       sp = Mp.E.define({
+         create: () => Cp.c.none,
+         update(pp, ip) {
+           let cp = pp.map(ip.changes);
+           for (const Op of ip.effects) Op.is(Zp) && (cp = Op.value ? Cp.c.set(zp.range(Op.value.from, Op.value.to)) : Cp.c.none);
+           return cp
+         },
+         provide: pp => Cp.f.uO.from(pp)
+       }),
+       Kp = Mp.E.define({
+         create: () => !1,
+         update: (pp, ip) => pp || void 0 !== ip.annotation(Mp.I.userEvent) && !ip.annotation(Mp.I.remote)
+ ... (53 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L35-L61` → after: `L256-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L256-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/297.js#L256-L276) · [Before (L35-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/297.js#L35-L61)

```diff
-     function LD(DD, zD, wD, sD, KD) {
-       void 0 === sD && (sD = {});
-       var rD = pD({}, RD(wD), sD),
-         LD = function(DD, zD, wD, sD, KD) {
-           var rD = [].concat(zD),
-             LD = fD(DD, wD, sD),
-             cD = LD.compilerHost,
-             gD = LD.updateFile,
-             RD = LD.deleteFile,
-             AD = new Map,
-             UD = 0,
-             ID = pD({}, cD, {
-               getProjectVersion: function() {
-                 return UD.toString()
-               },
-               getCompilationSettings: function() {
- ... (11 more removed lines; see GitHub link above)
+     function Si(pp, ip) {
+       const {
+         t: cp
+       } = (0, Ii.H)();
+       (0, kp.f)("CodeEditorInsertText", (Op => {
+         let {
+           text: op,
+           focus: Ip
+         } = Op;
+         const Sp = pp.current,
+           xp = null !== Sp && void 0 !== Sp && Sp.dom.isConnected ? function(pp, ip) {
+             if (!ii(pp)) return null;
+             const {
+               from: cp,
+               to: Op
+             } = pp.selection.main, op = cp + ip.length;
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L63-L64` → after: `L278-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/297.js#L278-L279) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/297.js#L63-L64)

```diff
-               getScriptVersion: function(DD) {
-                 return AD.get(DD) || "0"
+               selection: {
+                 anchor: op
```

#### 7. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L66` → after: `L281-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L281-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/297.js#L281-L297) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/297.js#L66)

```diff
-               writeFile: DD.writeFile
+               effects: [Cp.f.scrollIntoView(op, {
+                 y: "center"
+               }), Zp.of({
+                 from: cp,
+                 to: op
+               })],
+               userEvent: "input"
+             }
+           }(Sp.state, op) : null;
+         null !== Sp && null !== xp ? (Sp.dispatch(xp), Ip && Sp.focus(), setTimeout((() => {
+           Sp.dom.isConnected && Sp.dispatch({
+             effects: Zp.of(null)
+           })
+         }), 1500)) : (0, oi.d)(op).then((() => {
+           ip({
+             message: cp("codeEditorWorld:pickCopied", {
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L68-L77` → after: `L299-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L299-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/297.js#L299-L452) · [Before (L68-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/297.js#L68-L77)

```diff
-             BD = {
-               languageServiceHost: ID,
-               updateFile: function(DD) {
-                 UD++, AD.set(DD.fileName, UD.toString()), rD.includes(DD.fileName) || rD.push(DD.fileName), gD(DD)
-               },
-               deleteFile: function(DD) {
-                 UD++, AD.set(DD.fileName, UD.toString());
-                 var zD = rD.indexOf(DD.fileName); - 1 !== zD && rD.splice(zD, 1), RD(DD)
-               }
-             };
+             type: "success"
+           })
+         }), (pp => {
+           console.error("Pick could not copy the coordinates", pp), ip({
+             message: cp("codeEditorWorld:pickPlaceCursor", {
+               coords: op
+             }),
+             type: "warning"
+           })
+         }))
+       }))
+     }
+     var xi = cp(41583);
+     const Li = "#e45649",
+       Yi = "#383a42",
+       Di = "#696c77",
+ ... (138 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L79-L87` → after: `L454-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L454-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/297.js#L454-L552) · [Before (L79-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/297.js#L79-L87)

```diff
-         }(DD, zD, rD, wD, KD),
-         cD = LD.languageServiceHost,
-         gD = LD.updateFile,
-         AD = LD.deleteFile,
-         UD = wD.createLanguageService(cD),
-         ID = UD.getCompilerOptionsDiagnostics();
-       if (ID.length) {
-         var BD = fD(DD, sD, wD);
-         throw new Error(wD.formatDiagnostics(ID, BD.compilerHost))
+         }
+       }),
+       ji = [{
+         action: "explain",
+         label: "Explain this"
+       }, {
+         action: "fix",
+         label: "Fix this"
+       }, {
+         action: "change",
+         label: "Change this\u2026"
+       }];
+ 
+     function ki(pp, ip) {
+       return [ui, Ip.m.fromClass(class {
+         constructor(pp) {
+ ... (83 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L89-L114` → after: `L554-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L554-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/297.js#L554-L559) · [Before (L89-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/297.js#L89-L114)

```diff
-       return {
-         name: "vfs",
-         sys: DD,
-         languageService: UD,
-         getSourceFile: function(DD) {
-           var zD;
-           return null == (zD = UD.getProgram()) ? void 0 : zD.getSourceFile(DD)
-         },
-         createFile: function(DD, zD) {
-           gD(wD.createSourceFile(DD, zD, rD.target, !1))
-         },
-         updateFile: function(DD, zD, pD) {
-           var sD = UD.getProgram().getSourceFile(DD);
-           if (!sD) throw new Error("Did not find a source file for " + DD);
-           var KD = sD.text,
-             rD = null != pD ? pD : wD.createTextSpan(0, KD.length),
- ... (10 more removed lines; see GitHub link above)
+       const Op = [];
+       if (Op.push(...cp(pp.prefixDisplayParts, Mi.text)), pp.parameters.length > 0) {
+         Op.push("\n");
+         for (let op = 0; op < pp.parameters.length; op++) {
+           const Ip = pp.parameters[op];
+           Op.push("\t"), Op.push(...cp(Ip.displayParts, Mi.parameter, null !== ip && op !== ip)), Op.push("\n")
```

#### 11. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L120` → after: `L581-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L581-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/297.js#L581-L593) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/297.js#L120)

```diff
-       throw new Error("Method '" + DD + "' is not implemented.")
+       return !!pp && ((0, ep.p)(pp) || (0, ep.m)(pp))
+     }
+ 
+     function fi(pp, ip, cp) {
+       return () => {
+         let Op = [...ip.languageService.getSemanticDiagnostics(cp), ...ip.languageService.getSyntacticDiagnostics(cp)];
+         return Op = Op.filter((pp => !(0, mp.G)(pp.start) && !(0, mp.G)(pp.length) && !Xi.has(pp.code))), pp || (Op = Op.filter((pp => !li.has(pp.code)))), Op.map((pp => ({
+           from: pp.start,
+           to: pp.start + pp.length,
+           message: "string" === typeof pp.messageText ? pp.messageText : pp.messageText.messageText,
+           severity: Qi.has(pp.code) ? "warning" : "error"
+         })))
+       }
```

#### 12. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L124-L128` → after: `L597-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L597-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/297.js#L597-L635) · [Before (L124-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/297.js#L124-L128)

```diff
-       return function() {
-         for (var wD = arguments.length, pD = new Array(wD), sD = 0; sD < wD; sD++) pD[sD] = arguments[sD];
-         var KD = zD.apply(void 0, pD),
-           LD = "string" === typeof KD ? KD.slice(0, 80) + "..." : KD;
-         return rD.apply(void 0, ["> " + DD].concat(pD)), rD("< " + LD), KD
+       return cp => {
+         var Op, op;
+         const Ip = pp.languageService.getCompletionsAtPosition(ip, cp.pos, {});
+         if (!Ip) return {
+           from: cp.pos,
+           options: []
+         };
+         let Sp = null !== (Op = null === (op = Ip.optionalReplacementSpan) || void 0 === op ? void 0 : op.start) && void 0 !== Op ? Op : cp.pos;
+         if (!Ip.optionalReplacementSpan) {
+           const pp = cp.state.doc.sliceString(0, cp.pos);
+           for (; Sp > 0 && /[\w$]/.test(pp[Sp - 1]);) Sp--
+         }
+         return Ip.entries = Ip.entries.filter((pp => pp.kind !== Up().ScriptElementKind.warning)), {
+           from: Sp,
+           options: Ip.entries.map((Op => {
+             var op, Ip, xp, Lp;
+ ... (23 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L151-L195` → after: `L640-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L640-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/297.js#L640-L654) · [Before (L151-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/297.js#L151-L195)

```diff
-       return {
-         args: [],
-         createDirectory: function() {
-           return cD("createDirectory")
-         },
-         directoryExists: gD("directoryExists", (function(zD) {
-           return Array.from(DD.keys()).some((function(DD) {
-             return DD.startsWith(zD)
-           }))
-         })),
-         exit: function() {
-           return cD("exit")
-         },
-         fileExists: gD("fileExists", (function(zD) {
-           return DD.has(zD) || DD.has(AD(zD))
-         })),
- ... (29 more removed lines; see GitHub link above)
+       return ip => {
+         const cp = document.createElement("div");
+         cp.className = "CodeEditorTooltip";
+         let Op = !1;
+         return queueMicrotask((() => {
+           Op || (xp.render((0, mi.jsx)(Pp.e, {
+             text: pp
+           }), cp), ip.requestMeasure())
+         })), {
+           dom: cp,
+           destroy() {
+             Op = !0, queueMicrotask((() => {
+               xp.unmountComponentAtNode(cp)
+             }))
+           }
```

#### 14. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L201-L218` → after: `L660-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L660-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/297.js#L660-L726) · [Before (L201-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/297.js#L201-L218)

```diff
-       var sD = new Map;
-       return {
-         compilerHost: pD({}, DD, {
-           getCanonicalFileName: function(DD) {
-             return DD
-           },
-           getDefaultLibFileName: function() {
-             return "/" + wD.getDefaultLibFileName(zD)
-           },
-           getNewLine: function() {
-             return DD.newLine
-           },
-           getSourceFile: function(pD, KD) {
-             var rD, LD;
-             return sD.get(pD) || (LD = wD.createSourceFile(pD, DD.readFile(pD), null != (rD = null != KD ? KD : zD.target) ? rD : RD(wD).target, !1), sD.set(LD.fileName, LD), LD)
-           },
- ... (2 more removed lines; see GitHub link above)
+       return Op => {
+         var op;
+         if (!ip) return [];
+         const Ip = null === (op = Op.selection.By[0]) || void 0 === op ? void 0 : op.head;
+         if (void 0 === Ip) return [];
+         const Sp = pp.languageService.getSignatureHelpItems(cp, Ip, {});
+         if (!Sp || !Sp.items.length) return [];
+         const xp = Sp.applicableSpan.start - Sp.items[0].prefixDisplayParts.map((pp => pp.text)).join("").length,
+           Lp = Sp.applicableSpan.start,
+           Yp = Op.doc.lineAt(Ip),
+           Dp = Yp.from,
+           Ap = Math.min(Yp.to, Ip);
+         let Pp, Wp;
+         return xp < Dp ? (Pp = Dp, Wp = Ap) : (Pp = xp, Wp = Lp), [{
+           pos: Pp,
+           end: Wp,
+ ... (51 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L220-L227` → after: `L728-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L728-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/297.js#L728-L736) · [Before (L220-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/297.js#L220-L227)

```diff
-         }),
-         updateFile: function(zD) {
-           var wD = sD.has(zD.fileName);
-           return DD.writeFile(zD.fileName, zD.text), sD.set(zD.fileName, zD), wD
-         },
-         deleteFile: function(zD) {
-           var wD = sD.has(zD.fileName);
-           return sD.delete(zD.fileName), DD.deleteFile(zD.fileName), wD
+         });
+         if (Ip.documentation) {
+           Lp.push("\n\n");
+           for (const pp of Ip.documentation) Lp.push({
+             str: pp.text,
+             style: {
+               color: Mi.docs
+             }
+           })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/298.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/298.js` (869 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89)

#### 1. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4-L2269` → after: `L4-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L4-L79) · [Before (L4-L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L4-L2269)

```diff
-   41304: (DD, zD, wD) => {
-     var pD = "/index.js",
-       sD = {};
-     (DD => {
-       var zD = Object.defineProperty,
-         sD = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (DD, wD) => {
-           for (var pD in wD) zD(DD, pD, {
-             get: wD[pD],
-             enumerable: !0
-           })
-         }),
-         KD = {};
-       sD(KD, {
-         ANONYMOUS: () => u1,
-         AccessFlags: () => RK,
-         AssertionLevel: () => Ow,
- ... (2250 more removed lines; see GitHub link above)
+   41541: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Ji,
+       g: () => Ri,
+       h: () => di,
+       l: () => Lp,
+       o: () => Bi,
+       r: () => Yp,
+       u: () => yi
+     });
+     var Op = cp(41548),
+       op = cp(41556),
+       Ip = cp(41566);
+     class Sp {
+       constructor(pp, ip, cp, Op) {
+         this.state = pp, this.pos = ip, this.explicit = cp, this.view = Op, this.abortListeners = [], this.abortOnDocChange = !1
+ ... (60 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2272-L2277` → after: `L83-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L83-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L83-L89) · [Before (L2272-L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2272-L2277)

```diff
-       function UD(DD, zD) {
-         if (void 0 !== DD)
-           for (let wD = 0; wD < DD.length; wD++) {
-             const pD = zD(DD[wD], wD);
-             if (pD) return pD
-           }
+     function Yp(pp, ip) {
+       return cp => {
+         for (let ip = (0, Ip.kb)(cp.state).resolveInner(cp.pos, -1); ip; ip = ip.parent) {
+           if (pp.indexOf(ip.name) > -1) return null;
+           if (ip.type.isTop) break
+         }
+         return ip(cp)
```

#### 3. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2279-L2284` → after: `L91-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L91-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L91-L127) · [Before (L2279-L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2279-L2284)

```diff
- 
-       function fD(DD, zD) {
-         if (void 0 !== DD)
-           for (let wD = DD.length - 1; wD >= 0; wD--) {
-             const pD = zD(DD[wD], wD);
-             if (pD) return pD
+     }
+     class Dp {
+       constructor(pp, ip, cp, Op) {
+         this.completion = pp, this.source = ip, this.match = cp, this.score = Op
+       }
+     }
+ 
+     function Ap(pp) {
+       return pp.selection.main.from
+     }
+ 
+     function Pp(pp, ip) {
+       var cp;
+       let {
+         source: Op
+       } = pp, op = ip && "^" != Op[0], Ip = "$" != Op[Op.length - 1];
+ ... (21 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2286-L2292` → after: `L129-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L129-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L129-L176) · [Before (L2286-L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2286-L2292)

```diff
-       }
- 
-       function ID(DD, zD) {
-         if (void 0 !== DD)
-           for (let wD = 0; wD < DD.length; wD++) {
-             const pD = zD(DD[wD], wD);
-             if (void 0 !== pD) return pD
+         })),
+         scrollIntoView: !0,
+         userEvent: "input.complete"
+       }
+     }
+     const Up = new WeakMap;
+ 
+     function wp(pp) {
+       if (!Array.isArray(pp)) return pp;
+       let ip = Up.get(pp);
+       return ip || Up.set(pp, ip = Lp(pp)), ip
+     }
+     const vp = Op.C.define(),
+       tp = Op.C.define();
+     class Hp {
+       constructor(pp) {
+ ... (32 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2294-L2299` → after: `L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L178) · [Before (L2294-L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2294-L2299)

```diff
-       }
- 
-       function BD(DD, zD) {
-         for (const wD of DD) {
-           const DD = zD(wD);
-           if (void 0 !== DD) return DD
+           return this.ret(Sp, [0, Ip])
```

#### 6. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2301-L2345` → after: `L180-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L180-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L180-L187) · [Before (L2301-L2345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2301-L2345)

```diff
-       }
- 
-       function GD(DD, zD, wD) {
-         let pD = wD;
-         if (DD) {
-           let wD = 0;
-           for (const sD of DD) pD = zD(pD, sD, wD), wD++
-         }
-         return pD
-       }
- 
-       function hD(DD, zD, wD) {
-         const pD = [];
-         np.assertEqual(DD.length, zD.length);
-         for (let sD = 0; sD < DD.length; sD++) pD.push(wD(DD[sD], zD[sD], sD));
-         return pD
- ... (29 more removed lines; see GitHub link above)
+         let xp = pp.indexOf(this.pattern);
+         if (0 == xp) return this.ret(pp.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
+         let Lp = ip.length,
+           Yp = 0;
+         if (xp < 0) {
+           for (let Ip = 0, Sp = Math.min(pp.length, 200); Ip < Sp && Yp < Lp;) {
+             let Sp = (0, Op.J)(pp, Ip);
+             Sp != ip[Yp] && Sp != cp[Yp] || (op[Yp++] = Ip), Ip += (0, Op.N)(Sp)
```

#### 7. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2349-L2361` → after: `L259-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L259-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L259-L261) · [Before (L2349-L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2349-L2361)

```diff
-       function ED(DD, zD, wD) {
-         if (void 0 === DD) return -1;
-         for (let pD = wD ?? 0; pD < DD.length; pD++)
-           if (zD(DD[pD], pD)) return pD;
-         return -1
-       }
- 
-       function QD(DD, zD, wD) {
-         if (void 0 === DD) return -1;
-         for (let pD = wD ?? DD.length - 1; pD >= 0; pD--)
-           if (zD(DD[pD], pD)) return pD;
-         return -1
-       }
+     function jp(pp, ip) {
+       return pp ? ip ? pp + " " + ip : pp : ip
+     }
```

#### 8. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2363-L2368` → after: `L263-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L263-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L263-L365) · [Before (L2363-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2363-L2368)

```diff
-       function XD(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jw;
-         if (void 0 !== DD)
-           for (let pD = 0; pD < DD.length; pD++)
-             if (wD(DD[pD], zD)) return !0;
-         return !1
+     function kp(pp, ip, cp, Op, Ip, Sp) {
+       let xp, Lp, Yp = pp.textDirection == op.e.RTL,
+         Dp = Yp,
+         Ap = !1,
+         Pp = "top",
+         Wp = ip.left - Ip.left,
+         yp = Ip.right - ip.right,
+         Up = Op.right - Op.left,
+         wp = Op.bottom - Op.top;
+       if (Dp && Wp < Math.min(Up, yp) ? Dp = !1 : !Dp && yp < Math.min(Up, Wp) && (Dp = !0), Up <= (Dp ? Wp : yp)) xp = Math.max(Ip.top, Math.min(cp.top, Ip.bottom - wp)) - ip.top, Lp = Math.min(400, Dp ? Wp : yp);
+       else {
+         Ap = !0, Lp = Math.min(400, (Yp ? ip.right : Ip.right - ip.left) - 30);
+         let pp = Ip.bottom - ip.bottom;
+         pp >= wp || pp > ip.top ? xp = cp.bottom - ip.top : (Pp = "bottom", xp = ip.bottom - cp.top)
+       }
+       return {
+ ... (87 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2370-L2374` → after: `L367-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L367-L368) · [Before (L2370-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2370-L2374)

```diff
- 
-       function VD(DD, zD, wD) {
-         for (let pD = wD ?? 0; pD < DD.length; pD++)
-           if (XD(zD, DD.charCodeAt(pD))) return pD;
-         return -1
+       mount() {
+         this.updateSel()
```

#### 10. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2376-L2383` → after: `L370-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L370-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L370-L373) · [Before (L2376-L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2376-L2383)

```diff
- 
-       function PD(DD, zD) {
-         let wD = 0;
-         if (void 0 !== DD)
-           for (let pD = 0; pD < DD.length; pD++) {
-             zD(DD[pD], pD) && wD++
-           }
-         return wD
+       showOptions(pp, ip) {
+         this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(pp, ip, this.range)), this.list.addEventListener("scroll", (() => {
+           this.info && this.view.requestMeasure(this.placeInfoReq)
+         }))
```

#### 11. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2385-L2398` → after: `L375-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L375-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L375-L385) · [Before (L2385-L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2385-L2398)

```diff
- 
-       function CD(DD, zD) {
-         if (void 0 !== DD) {
-           const wD = DD.length;
-           let pD = 0;
-           for (; pD < wD && zD(DD[pD]);) pD++;
-           if (pD < wD) {
-             const sD = DD.slice(0, pD);
-             for (pD++; pD < wD;) {
-               const wD = DD[pD];
-               zD(wD) && sD.push(wD), pD++
-             }
-             return sD
-           }
+       update(pp) {
+         var ip;
+         let cp = pp.state.field(this.stateField),
+           Op = pp.startState.field(this.stateField);
+         if (this.updateTooltipClass(pp.state), cp != Op) {
+           let {
+             options: op,
+             selected: Ip,
+             disabled: Sp
+           } = cp.open;
+           Op.open && Op.open.options == op || (this.range = Rp(op.length, Ip, pp.state.facet(ep).maxRenderedOptions), this.showOptions(op, cp.id)), this.updateSel(), Sp != (null === (ip = Op.open) || void 0 === ip ? void 0 : ip.disabled) && this.dom.classList.toggle("cm-tooltip-a … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2402-L2406` → after: `L388-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L388-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L388-L394) · [Before (L2402-L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2402-L2406)

```diff
- 
-       function xD(DD, zD) {
-         let wD = 0;
-         for (let pD = 0; pD < DD.length; pD++) zD(DD[pD], pD, DD) && (DD[wD] = DD[pD], wD++);
-         DD.length = wD
+       updateTooltipClass(pp) {
+         let ip = this.tooltipClass(pp);
+         if (ip != this.currentClass) {
+           for (let pp of this.currentClass.split(" ")) pp && this.dom.classList.remove(pp);
+           for (let pp of ip.split(" ")) pp && this.dom.classList.add(pp);
+           this.currentClass = ip
+         }
```

#### 13. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2408-L2410` → after: `L396-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L396-L397) · [Before (L2408-L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2408-L2410)

```diff
- 
-       function TD(DD) {
-         DD.length = 0
+       positioned(pp) {
+         this.space = pp, this.info && this.view.requestMeasure(this.placeInfoReq)
```

#### 14. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2412-L2417` → after: `L399-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L399-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L399-L416) · [Before (L2412-L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2412-L2417)

```diff
- 
-       function bD(DD, zD) {
-         let wD;
-         if (void 0 !== DD) {
-           wD = [];
-           for (let pD = 0; pD < DD.length; pD++) wD.push(zD(DD[pD], pD))
+       updateSel() {
+         let pp = this.view.state.field(this.stateField),
+           ip = pp.open;
+         (ip.selected > -1 && ip.selected < this.range.from || ip.selected >= this.range.to) && (this.range = Rp(ip.options.length, ip.selected, this.view.state.facet(ep).maxRenderedOptions), this.showOptions(ip.options, pp.id));
+         let cp = this.updateSelectedOption(ip.selected);
+         if (cp) {
+           this.destroyInfo();
+           let {
+             completion: Op
+           } = ip.options[ip.selected], {
+             info: Ip
+           } = Op;
+           if (!Ip) return;
+           let Sp = "string" === typeof Ip ? document.createTextNode(Ip) : Ip(Op);
+           if (!Sp) return;
+           "then" in Sp ? Sp.then((ip => {
+ ... (2 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2421-L2435` → after: `L419-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L419-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L419-L455) · [Before (L2421-L2435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2421-L2435)

```diff
- 
-       function* jD(DD, zD) {
-         for (const wD of DD) yield zD(wD)
-       }
- 
-       function dD(DD, zD) {
-         if (void 0 !== DD)
-           for (let wD = 0; wD < DD.length; wD++) {
-             const pD = DD[wD],
-               sD = zD(pD, wD);
-             if (pD !== sD) {
-               const pD = DD.slice(0, wD);
-               for (pD.push(sD), wD++; wD < DD.length; wD++) pD.push(zD(DD[wD], wD));
-               return pD
-             }
+       addInfoPane(pp, ip) {
+         this.destroyInfo();
+         let cp = this.info = document.createElement("div");
+         if (cp.className = "cm-tooltip cm-completionInfo", cp.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != pp.nodeType) cp.appendChild(pp), this.infoDestroy = null;
+         else {
+           let {
+             dom: ip,
+             destroy: Op
+           } = pp;
+           cp.appendChild(ip), this.infoDestroy = Op || null
+         }
+         this.dom.appendChild(cp), this.view.requestMeasure(this.placeInfoReq)
+       }
+       updateSelectedOption(pp) {
+         let ip = null;
+         for (let cp = this.list.firstChild, Op = this.range.from; cp; cp = cp.nextSibling, Op++) "LI" == cp.nodeName && cp.id ? Op == pp ? cp.hasAttribute("aria-selected") || (cp.setAttribute("aria-selected", "true"), ip = cp) : cp.hasAttribute("aria-selected") && (cp.removeAttri … [truncated]
+ ... (21 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2446` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L458) · [Before (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2446)

```diff
-         return zD
+         return Op.top > Math.min(op.bottom, ip.bottom) - 10 || Op.bottom < Math.max(op.top, ip.top) + 10 ? null : this.view.state.facet(ep).positionInfo(this.view, ip, Op, cp, op, this.dom)
```

#### 17. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2448-L2456` → after: `L460-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L460-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L460-L461) · [Before (L2448-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2448-L2456)

```diff
- 
-       function iD(DD, zD) {
-         let wD;
-         if (void 0 !== DD)
-           for (let pD = 0; pD < DD.length; pD++) {
-             const sD = zD(DD[pD], pD);
-             sD && (wD = ww(sD) ? Rz(wD, sD) : Lz(wD, sD))
-           }
-         return wD ?? gD
+       placeInfo(pp) {
+         this.info && (pp ? (pp.style && (this.info.style.cssText = pp.style), this.info.className = "cm-tooltip cm-completionInfo " + (pp.class || "")) : this.info.style.cssText = "top: -1e6px")
```

#### 18. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2458-L2464` → after: `L463-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L463-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L463-L482) · [Before (L2458-L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2458-L2464)

```diff
- 
-       function lD(DD, zD) {
-         const wD = [];
-         if (void 0 !== DD)
-           for (let pD = 0; pD < DD.length; pD++) {
-             const sD = zD(DD[pD], pD);
-             sD && (ww(sD) ? Rz(wD, sD) : wD.push(sD))
+       createListBox(pp, ip, cp) {
+         const Op = document.createElement("ul");
+         Op.id = ip, Op.setAttribute("role", "listbox"), Op.setAttribute("aria-expanded", "true"), Op.setAttribute("aria-label", this.view.state.phrase("Completions")), Op.addEventListener("mousedown", (pp => {
+           pp.target == Op && pp.preventDefault()
+         }));
+         let op = null;
+         for (let Ip = cp.from; Ip < cp.to; Ip++) {
+           let {
+             completion: Sp,
+             match: xp
+           } = pp[Ip], {
+             section: Lp
+           } = Sp;
+           if (Lp) {
+             let pp = "string" == typeof Lp ? Lp : Lp.name;
+             if (pp != op && (Ip > cp.from || 0 == cp.from))
+ ... (4 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2466-L2482` → after: `L484-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L484-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L484-L490) · [Before (L2466-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2466-L2482)

```diff
-         return wD
-       }
- 
-       function* WD(DD, zD) {
-         for (const wD of DD) {
-           const DD = zD(wD);
-           DD && (yield* DD)
-         }
-       }
- 
-       function ND(DD, zD) {
-         let wD;
-         if (void 0 !== DD)
-           for (let pD = 0; pD < DD.length; pD++) {
-             const sD = DD[pD],
-               KD = zD(sD, pD);
- ... (1 more removed lines; see GitHub link above)
+           const Yp = Op.appendChild(document.createElement("li"));
+           Yp.id = ip + "-" + Ip, Yp.setAttribute("role", "option");
+           let Dp = this.optionClass(Sp);
+           Dp && (Yp.className = Dp);
+           for (let pp of this.optionContent) {
+             let ip = pp(Sp, this.view.state, this.view, xp);
+             ip && Yp.appendChild(ip)
```

#### 20. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2494` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L493) · [Before (L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2494)

```diff
-         return wD
+         return cp.from && Op.classList.add("cm-completionListIncompleteTop"), cp.to < pp.length && Op.classList.add("cm-completionListIncompleteBottom"), Op
```

#### 21. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2496-L2504` → after: `L495-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L495-L496) · [Before (L2496-L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2496-L2504)

```diff
- 
-       function yD(DD, zD) {
-         const wD = [];
-         if (void 0 !== DD)
-           for (let pD = 0; pD < DD.length; pD++) {
-             const sD = zD(DD[pD], pD);
-             void 0 !== sD && wD.push(sD)
-           }
-         return wD
+       destroyInfo() {
+         this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
```

#### 22. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2506-L2511` → after: `L498-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L498-L499) · [Before (L2506-L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2506-L2511)

```diff
- 
-       function* kD(DD, zD) {
-         for (const wD of DD) {
-           const DD = zD(wD);
-           void 0 !== DD && (yield DD)
-         }
+       destroy() {
+         this.destroyInfo()
```

#### 23. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2514-L2518` → after: `L503-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L503-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L503-L505) · [Before (L2514-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2514-L2518)

```diff
-       function mD(DD, zD, wD) {
-         if (DD.has(zD)) return DD.get(zD);
-         const pD = wD();
-         return DD.set(zD, pD), pD
-       }
+     function Mp(pp, ip) {
+       return cp => new qp(cp, pp, ip)
+     }
```

#### 24. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2520-L2521` → after: `L507-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L507-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L507-L512) · [Before (L2520-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2520-L2521)

```diff
-       function eD(DD, zD) {
-         return !DD.has(zD) && (DD.add(zD), !0)
+     function Cp(pp) {
+       return 100 * (pp.boost || 0) + (pp.apply ? 10 : 0) + (pp.info ? 5 : 0) + (pp.type ? 1 : 0)
+     }
+     class Ep {
+       constructor(pp, ip, cp, Op, op, Ip) {
+         this.options = pp, this.attrs = ip, this.tooltip = cp, this.timestamp = Op, this.selected = op, this.disabled = Ip
```

#### 25. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2523-L2525` → after: `L514-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L514-L515) · [Before (L2523-L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2523-L2525)

```diff
- 
-       function* oD(DD) {
-         yield DD
+       setSelected(pp, ip) {
+         return pp == this.selected || pp >= this.options.length ? this : new Ep(this.options, Jp(ip, pp), this.tooltip, this.timestamp, pp, this.disabled)
```

#### 26. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2527-L2543` → after: `L517-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L517-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L517-L566) · [Before (L2527-L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2527-L2543)

```diff
- 
-       function aD(DD, zD, wD) {
-         let pD;
-         if (void 0 !== DD) {
-           pD = [];
-           const sD = DD.length;
-           let KD, rD, LD = 0,
-             cD = 0;
-           for (; LD < sD;) {
-             for (; cD < sD;) {
-               if (rD = zD(DD[cD], cD), 0 === cD) KD = rD;
-               else if (rD !== KD) break;
-               cD++
-             }
-             if (LD < cD) {
-               const zD = wD(DD.slice(LD, cD), KD, LD, cD);
- ... (1 more removed lines; see GitHub link above)
+       static build(pp, ip, cp, Op, op, Ip) {
+         if (Op && !Ip && pp.some((pp => pp.isPending))) return Op.setDisabled();
+         let Sp = function(pp, ip) {
+           let cp = [],
+             Op = null,
+             op = null,
+             Ip = pp => {
+               cp.push(pp);
+               let {
+                 section: ip
+               } = pp.completion;
+               if (ip) {
+                 Op || (Op = []);
+                 let pp = "string" == typeof ip ? ip : ip.name;
+                 Op.some((ip => ip.name == pp)) || Op.push("string" == typeof ip ? {
+                   name: pp
+ ... (34 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2548` → after: `L588-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L588-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L588-L592) · [Before (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2548)

```diff
-         return pD
+         return new Ep(Sp, Jp(cp, xp), {
+           pos: pp.reduce(((pp, ip) => ip.hasResult() ? Math.min(pp, ip.from) : pp), 1e8),
+           create: np,
+           above: op.aboveCursor
+         }, Op ? Op.timestamp : Date.now(), xp, !1)
```

#### 28. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2550-L2557` → after: `L594-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L594-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L594-L598) · [Before (L2550-L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2550-L2557)

```diff
- 
-       function uD(DD, zD) {
-         if (void 0 === DD) return;
-         const wD = new Map;
-         return DD.forEach(((DD, pD) => {
-           const [sD, KD] = zD(pD, DD);
-           wD.set(sD, KD)
-         })), wD
+       map(pp) {
+         return new Ep(this.options, this.attrs, {
+           ...this.tooltip,
+           pos: pp.mapPos(this.tooltip.pos)
+         }, this.timestamp, this.selected, this.disabled)
```

#### 29. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2559-L2566` → after: `L600-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L600-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L600-L601) · [Before (L2559-L2566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2559-L2566)

```diff
- 
-       function vD(DD, zD) {
-         if (void 0 !== DD) {
-           if (void 0 === zD) return DD.length > 0;
-           for (let wD = 0; wD < DD.length; wD++)
-             if (zD(DD[wD])) return !0
-         }
-         return !1
+       setDisabled() {
+         return new Ep(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
```

#### 30. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2568-L2572` → after: `L603-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L603-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L603-L606) · [Before (L2568-L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2568-L2572)

```diff
- 
-       function tD(DD, zD, wD) {
-         let pD;
-         for (let sD = 0; sD < DD.length; sD++) zD(DD[sD]) ? pD = void 0 === pD ? sD : pD : void 0 !== pD && (wD(pD, sD), pD = void 0);
-         void 0 !== pD && wD(pD, DD.length)
+     }
+     class Xp {
+       constructor(pp, ip, cp) {
+         this.active = pp, this.id = ip, this.open = cp
```

#### 31. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2574-L2576` → after: `L608-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L608-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L608-L609) · [Before (L2574-L2576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2574-L2576)

```diff
- 
-       function FD(DD, zD) {
-         return void 0 === zD || 0 === zD.length ? DD : void 0 === DD || 0 === DD.length ? zD : [...DD, ...zD]
+       static start() {
+         return new Xp(Bp, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
```

#### 32. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2579` → after: `L644-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L644-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L644-L681) · [Before (L2579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2579)

```diff
-       function YD(DD, zD) {
+     function Jp(pp, ip) {
+       let cp = {
+         "aria-autocomplete": "list",
+         "aria-haspopup": "listbox",
+         "aria-controls": pp
+       };
+       return ip > -1 && (cp["aria-activedescendant"] = pp + "-" + ip), cp
+     }
+     const Bp = [];
+ 
+     function Np(pp, ip) {
+       if (pp.isUserEvent("input.complete")) {
+         let cp = pp.annotation(Wp);
+         if (cp && ip.activateOnCompletion(cp)) return 12
+       }
+       let cp = pp.isUserEvent("input.type");
+ ... (22 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2582-L2584` → after: `L684-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L684-L685) · [Before (L2582-L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2582-L2584)

```diff
- 
-       function HD(DD) {
-         return DD.map(YD)
+       updateFor(pp, ip) {
+         return this.map(pp.changes)
```

#### 34. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2586-L2599` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L687-L688) · [Before (L2586-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2586-L2599)

```diff
- 
-       function qD(DD, zD, wD) {
-         const pD = HD(DD);
-         ! function(DD, zD, wD) {
-           zD.sort(((zD, pD) => wD(DD[zD], DD[pD]) || Vw(zD, pD)))
-         }(DD, pD, wD);
-         let sD = DD[pD[0]];
-         const KD = [pD[0]];
-         for (let rD = 1; rD < pD.length; rD++) {
-           const wD = pD[rD],
-             LD = DD[wD];
-           zD(sD, LD) || (KD.push(wD), sD = LD)
-         }
-         return KD.sort(), KD.map((zD => DD[zD]))
+       map(pp) {
+         return this
```

#### 35. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2601-L2607` → after: `L690-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L690-L691) · [Before (L2601-L2607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2601-L2607)

```diff
- 
-       function Dz(DD, zD, wD) {
-         return 0 === DD.length ? [] : 1 === DD.length ? DD.slice() : wD ? qD(DD, zD, wD) : function(DD, zD) {
-           const wD = [];
-           for (let pD = 0; pD < DD.length; pD++) Az(wD, DD[pD], zD);
-           return wD
-         }(DD, zD)
+       touches(pp) {
+         return pp.changes.touchesRange(Ap(pp.state))
```

#### 36. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2609-L2611` → after: `L693-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L693-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L693-L696) · [Before (L2609-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2609-L2611)

```diff
- 
-       function zz() {
-         return []
+     }
+     class fp extends Tp {
+       constructor(pp, ip, cp, Op, op, Ip) {
+         super(pp, 3, ip), this.limit = cp, this.result = Op, this.from = op, this.to = Ip
```

#### 37. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2613-L2625` → after: `L698-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L698-L699) · [Before (L2613-L2625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2613-L2625)

```diff
- 
-       function wz(DD, zD, wD, pD, sD) {
-         if (0 === DD.length) return DD.push(zD), !0;
-         const KD = Cz(DD, zD, fw, wD);
-         if (KD < 0) {
-           if (pD && !sD) {
-             const wD = ~KD;
-             if (wD > 0 && pD(zD, DD[wD - 1])) return !1;
-             if (wD < DD.length && pD(zD, DD[wD])) return DD.splice(wD, 1, zD), !0
-           }
-           return DD.splice(~KD, 0, zD), !0
-         }
-         return !!sD && (DD.splice(KD, 0, zD), !0)
+       hasResult() {
+         return !0
```

#### 38. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2628-L2640` → after: `L734-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L734-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L734-L836) · [Before (L2628-L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2628-L2640)

```diff
-       function pz(DD, zD, wD) {
-         return function(DD, zD) {
-           if (0 === DD.length) return gD;
-           let wD = DD[0];
-           const pD = [wD];
-           for (let sD = 1; sD < DD.length; sD++) {
-             const KD = DD[sD];
-             switch (zD(KD, wD)) {
-               case !0:
-               case 0:
-                 continue;
-               case -1:
-                 return np.fail("Array is unsorted.")
+     function ap(pp, ip) {
+       const cp = ip.completion.apply || ip.completion.label;
+       let Op = pp.state.field(hp).active.find((pp => pp.source == ip.source));
+       return Op instanceof fp && ("string" == typeof cp ? pp.dispatch({
+         ...yp(pp.state, cp, Op.from, Op.to),
+         annotations: Wp.of(ip.completion)
+       }) : cp(pp, ip.completion, Op.from, Op.to), !0)
+     }
+     const np = Mp(hp, ap);
+ 
+     function Fp(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
+       return cp => {
+         let Op = cp.state.field(hp, !1);
+         if (!Op || !Op.open || Op.open.disabled || Date.now() - Op.open.timestamp < cp.state.facet(ep).interactionDelay) return !1;
+         let Ip, Sp = 1;
+ ... (87 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2642` → after: `L838-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L838-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L838-L984) · [Before (L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2642)

```diff
-             pD.push(wD = KD)
+             let Sp = Op.active.find((pp => pp.source == Ip.active.source));
+             if (Sp && Sp.isPending)
+               if (null == Ip.done) {
+                 let pp = new Tp(Ip.active.source, 0);
+                 for (let ip of Ip.updates) pp = pp.update(ip, cp);
+                 pp.isPending || ip.push(pp)
+               } else this.startQuery(Sp)
+           }(ip.length || Op.open && Op.open.disabled) && this.view.dispatch({
+             effects: bp.of(ip)
+           })
+         }
+       }, {
+         eventHandlers: {
+           blur(pp) {
+             let ip = this.view.state.field(hp, !1);
+             if (ip && ip.tooltip && this.view.state.facet(ep).closeOnBlur) {
+ ... (131 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L2644-L2654` → after: `L986-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L986-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/298.js#L986-L1077) · [Before (L2644-L2654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/298.js#L2644-L2654)

```diff
-           return pD
-         }(fz(DD, zD), wD ?? zD ?? jw)
-       }
- 
-       function sz(DD, zD) {
-         let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jw;
-         if (void 0 === DD || void 0 === zD) return DD === zD;
-         if (DD.length !== zD.length) return !1;
-         for (let pD = 0; pD < DD.length; pD++)
-           if (!wD(DD[pD], zD[pD], pD)) return !1;
-         return !0
+         },
+         ".cm-completionIcon-class": {
+           "&:after": {
+             content: "'\u25cb'"
+           }
+         },
+         ".cm-completionIcon-interface": {
+           "&:after": {
+             content: "'\u25cc'"
+           }
+         },
+         ".cm-completionIcon-variable": {
+           "&:after": {
+             content: "'\ud835\udc65'"
+           }
+         },
+ ... (76 more added lines; see GitHub link above)
```
