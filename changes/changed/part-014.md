# Changed — Bundle Modifications Report (Part 014 / 047)

- **Updated at**: `2026-11-22T23:29 JST`
- **Part**: `14 / 47` (**276** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 013](part-013.md) · [Part 015 →](part-015.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/258.js` (bqoxjr.2558012f → 3lwmg.ecbaa066 · continued)

- **File**: `bundles/bloxd.io/chunks/js/258.js` (84 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d)

#### 83. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1201-L1230` → after: `L2628-L2644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2628-L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2628-L2644) · [Before (L1201-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L1201-L1230)

```diff
-     }
- 
-     function uQ(QQ) {
-       LQ.forEach((FQ => {
-         FQ.setLogLevel(QQ)
-       }))
-     }
- 
-     function HQ(QQ, FQ) {
-       for (const wQ of LQ) {
-         let LQ = null;
-         FQ && FQ.level && (LQ = oQ[FQ.level]), wQ.userLogHandler = null === QQ ? null : function(FQ, wQ) {
-           for (var oQ = arguments.length, DQ = new Array(oQ > 2 ? oQ - 2 : 0), kQ = 2; kQ < oQ; kQ++) DQ[kQ - 2] = arguments[kQ];
-           const vQ = DQ.map((QQ => {
-             if (null == QQ) return null;
-             if ("string" === typeof QQ) return QQ;
- ... (14 more removed lines; see GitHub link above)
+       dispose() {
+         let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         this._linesIndexBuffer && (this._mesh.XF().JU()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
+         const ek = this._mesh.TY.indexOf(this);
+         this._mesh.TY.splice(ek, 1), this.resetDrawCache(void 0, kk)
+       }
+       getClassName() {
+         return "SubMesh"
+       }
+       static CreateFromIndices(kk, ek, ik, Dk, fk) {
+         let Sk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+           bk = Number.MAX_VALUE,
+           rk = -Number.MAX_VALUE;
+         const Pk = (fk || Dk).oik();
+         for (let mk = ek; mk < ek + ik; mk++) {
+           const kk = Pk[mk];
+ ... (1 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1233` → after: `L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2648) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L1233)

```diff
-     }
+     }(Dk = Mk.prototype).projectToRef ?? (Dk.projectToRef = (0, mk.i)("SubMesh", "projectToRef"))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/259.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/259.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b)

#### 1. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L5-L18` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L4-L6) · [Before (L5-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L5-L18)

```diff
-   39963: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       getAnalytics: () => nF,
-       getGoogleAnalyticsClientId: () => yF,
-       initializeAnalytics: () => gF,
-       isSupported: () => PF,
-       logEvent: () => ww,
-       setAnalyticsCollectionEnabled: () => Qw,
-       setConsent: () => Lw,
-       setCurrentScreen: () => ZF,
-       setDefaultEventParameters: () => Fw,
-       setUserId: () => BF,
-       setUserProperties: () => dF,
-       settings: () => JF
+   41166: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Dk
```

#### 2. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L20-L35` → after: `L8-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L8-L26) · [Before (L20-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L20-L35)

```diff
-     var LQ = wQ(39933),
-       qQ = wQ(39956),
-       oQ = wQ(39949),
-       DQ = wQ(39942);
-     let kQ, vQ;
-     const mQ = new WeakMap,
-       uQ = new WeakMap,
-       HQ = new WeakMap,
-       bQ = new WeakMap,
-       YQ = new WeakMap;
-     let xQ = {
-       get(QQ, FQ, wQ) {
-         if (QQ instanceof IDBTransaction) {
-           if ("done" === FQ) return uQ.get(QQ);
-           if ("objectStoreNames" === FQ) return QQ.objectStoreNames || HQ.get(QQ);
-           if ("store" === FQ) return wQ.objectStoreNames[1] ? void 0 : wQ.objectStore(wQ.objectStoreNames[0])
+     class Dk {}
+     Dk.AUTOSAMPLERSUFFIX = "Sampler", Dk.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", Dk.ALPHA_DISABLE = 0, Dk.ALPHA_ADD = 1, Dk.ALPHA_COMBINE = 2, Dk.ALPHA_SUBTRACT = 3, Dk.ALPHA_MULTIPLY = 4, Dk.ALPHA_MAXIMIZED = 5, Dk.ALPHA_ONEONE = 6, Dk.ALPHA_PREMULTIPLIED = 7, Dk.ALPH … [truncated]
+   },
+   41145: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => Pk
+     });
+     var Dk = ik(39566),
+       fk = ik(39570),
+       Sk = ik(36698),
+       bk = ik(39822),
+       rk = ik(39790);
+     let Pk = (() => {
+       var kk;
+       let ek, ik, Pk, mk, Mk = bk.d,
+         Kk = [];
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L37-L53` → after: `L28-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L28-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L28-L185) · [Before (L37-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L37-L53)

```diff
-         return eQ(QQ[FQ])
-       },
-       set: (QQ, FQ, wQ) => (QQ[FQ] = wQ, !0),
-       has: (QQ, FQ) => QQ instanceof IDBTransaction && ("done" === FQ || "store" === FQ) || FQ in QQ
-     };
- 
-     function AQ(QQ) {
-       return QQ !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (vQ || (vQ = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(QQ) ? function() {
-         for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
-         return QQ.apply(MQ(this), wQ), eQ(mQ.get(this))
-       } : function() {
-         for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
-         return eQ(QQ.apply(MQ(this), wQ))
-       } : function(FQ) {
-         for (var wQ = arguments.length, LQ = new Array(wQ > 1 ? wQ - 1 : 0), qQ = 1; qQ < wQ; qQ++) LQ[qQ - 1] = arguments[qQ];
-         const oQ = QQ.call(MQ(this), FQ, ...LQ);
- ... (1 more removed lines; see GitHub link above)
+         _setPosition(kk) {
+           this._position = kk
+         }
+         get position() {
+           return this._position
+         }
+         set position(kk) {
+           this._setPosition(kk)
+         }
+         _setDirection(kk) {
+           this._direction = kk
+         }
+         get direction() {
+           return this._direction
+         }
+         set direction(kk) {
+ ... (142 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L55-L213` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L187-L188) · [Before (L55-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L55-L213)

```diff
-     }
- 
-     function tQ(QQ) {
-       return "function" === typeof QQ ? AQ(QQ) : (QQ instanceof IDBTransaction && function(QQ) {
-         if (uQ.has(QQ)) return;
-         const FQ = new Promise(((FQ, wQ) => {
-           const LQ = () => {
-               QQ.removeEventListener("complete", qQ), QQ.removeEventListener("error", oQ), QQ.removeEventListener("abort", oQ)
-             },
-             qQ = () => {
-               FQ(), LQ()
-             },
-             oQ = () => {
-               wQ(QQ.error || new DOMException("AbortError", "AbortError")), LQ()
-             };
-           QQ.addEventListener("complete", qQ), QQ.addEventListener("error", oQ), QQ.addEventListener("abort", oQ)
- ... (143 more removed lines; see GitHub link above)
+       update(kk) {
+         this.updateMipLevel(kk, 0)
```

#### 5. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L215-L385` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L190-L191) · [Before (L215-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L215-L385)

```diff
-     }
- 
-     function VQ(QQ) {
-       return `${QQ.appName}!${QQ.appId}`
-     }
-     const hQ = new Map;
- 
-     function JQ(QQ, FQ) {
-       const wQ = VQ(QQ);
-       EQ(wQ, FQ),
-         function(QQ, FQ) {
-           const wQ = gQ();
-           wQ && wQ.postMessage({
-             key: QQ,
-             fid: FQ
-           });
- ... (155 more removed lines; see GitHub link above)
+       updateMipLevel(kk, ek) {
+         this._getEngine().updateRawTexture(this._texture, kk, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, ek), this._waitingForData = !1
```

#### 6. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L387-L396` → after: `L193-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L193-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L193-L196) · [Before (L387-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L387-L396)

```diff
-     }
-     async function LF(QQ) {
-       let FQ = await qF(QQ.appConfig);
-       for (; 1 === FQ.registrationStatus;) await aQ(100), FQ = await qF(QQ.appConfig);
-       if (0 === FQ.registrationStatus) {
-         const {
-           installationEntry: FQ,
-           registrationPromise: wQ
-         } = await wF(QQ);
-         return wQ || FQ
+       clone() {
+         if (!this._texture) return super.clone();
+         const kk = new fk(null, this.getSize().width, this.getSize().height, this.format, this.XF(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
+         return kk._texture = this._texture, this._texture.incrementReferences(), kk
```

#### 7. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L398-L432` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L198-L199) · [Before (L398-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L398-L432)

```diff
-       return FQ
-     }
- 
-     function qF(QQ) {
-       return FF(QQ, (QQ => {
-         if (!QQ) throw IQ.create("installation-not-found");
-         return oF(QQ)
-       }))
-     }
- 
-     function oF(QQ) {
-       return 1 === (FQ = QQ).registrationStatus && FQ.registrationTime + WQ < Date.now() ? {
-         fid: QQ.fid,
-         registrationStatus: 0
-       } : QQ;
-       var FQ
- ... (19 more removed lines; see GitHub link above)
+       isReady() {
+         return super.isReady() && !this._waitingForData
```

#### 8. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L434-L447` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L201-L202) · [Before (L434-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L434-L447)

```diff
-       const kQ = {
-           installation: {
-             sdkVersion: RQ,
-             appId: wQ.appId
-           }
-         },
-         vQ = {
-           method: "POST",
-           headers: oQ,
-           body: JSON.stringify(kQ)
-         },
-         mQ = await jQ((() => fetch(qQ, vQ)));
-       if (mQ.ok) {
-         return TQ(await mQ.json())
+       static CreateLuminanceTexture(kk, ek, ik, Dk) {
+         return new fk(kk, ek, ik, 1, Dk, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 9. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L449-L599` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L204-L205) · [Before (L449-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L449-L599)

```diff
-       throw await KQ("Generate Auth Token", mQ)
-     }
-     async function kF(QQ) {
-       let FQ, wQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       const LQ = await FF(QQ.appConfig, (LQ => {
-         if (!mF(LQ)) throw IQ.create("not-registered");
-         const qQ = LQ.authToken;
-         if (!wQ && function(QQ) {
-             return 2 === QQ.requestStatus && ! function(QQ) {
-               const FQ = Date.now();
-               return FQ < QQ.creationTime || QQ.creationTime + QQ.expiresIn < FQ + sQ
-             }(QQ)
-           }(qQ)) return LQ;
-         if (1 === qQ.requestStatus) return FQ = async function(QQ, FQ) {
-           let wQ = await vF(QQ.appConfig);
-           for (; 1 === wQ.authToken.requestStatus;) await aQ(100), wQ = await vF(QQ.appConfig);
- ... (135 more removed lines; see GitHub link above)
+       static CreateLuminanceAlphaTexture(kk, ek, ik, Dk) {
+         return new fk(kk, ek, ik, 2, Dk, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 10. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L601-L675` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L207-L208) · [Before (L601-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L601-L675)

```diff
-       return QQ
-     }
- 
-     function cF(QQ) {
-       return Promise.all(QQ.map((QQ => QQ.catch((QQ => QQ)))))
-     }
- 
-     function CF(QQ, FQ) {
-       const wQ = function(QQ, FQ) {
-           let wQ;
-           return window.trustedTypes && (wQ = window.trustedTypes.createPolicy(QQ, FQ)), wQ
-         }("firebase-js-sdk-policy", {
-           createScriptURL: pF
-         }),
-         LQ = document.createElement("script"),
-         qQ = `${tF}?l=${QQ}&id=${FQ}`;
- ... (59 more removed lines; see GitHub link above)
+       static CreateAlphaTexture(kk, ek, ik, Dk) {
+         return new fk(kk, ek, ik, 0, Dk, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 11. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L677-L682` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L210-L211) · [Before (L677-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L677-L682)

```diff
-     }
-     const iF = new class {
-       constructor() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-           FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
-         this.throttleMetadata = QQ, this.intervalMillis = FQ
+       static CreateRGBTexture(kk, ek, ik, Dk) {
+         return new fk(kk, ek, ik, 4, Dk, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L684-L685` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L213-L214) · [Before (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L684-L685)

```diff
-       getThrottleMetadata(QQ) {
-         return this.throttleMetadata[QQ]
+       static CreateRGBATexture(kk, ek, ik, Dk) {
+         return new fk(kk, ek, ik, 5, Dk, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L687-L688` → after: `L216-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L216-L217) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L687-L688)

```diff
-       setThrottleMetadata(QQ, FQ) {
-         this.throttleMetadata[QQ] = FQ
+       static CreateRGBAStorageTexture(kk, ek, ik, Dk) {
+         return new fk(kk, ek, ik, 5, Dk, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 14. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L690-L691` → after: `L219-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L219-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L219-L223) · [Before (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L690-L691)

```diff
-       deleteThrottleMetadata(QQ) {
-         delete this.throttleMetadata[QQ]
+       static CreateRTexture(kk, ek, ik, Sk) {
+         let bk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           rk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           Pk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Dk.f.TRILINEAR_SAMPLINGMODE;
+         return new fk(kk, ek, ik, 6, Sk, bk, rk, Pk, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
```

#### 15. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L693-L715` → after: `L225-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L225-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L225-L229) · [Before (L693-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L693-L715)

```diff
-     };
- 
-     function WF(QQ) {
-       return new Headers({
-         Accept: "application/json",
-         "x-goog-api-key": QQ
-       })
-     }
-     async function RF(QQ) {
-       let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iF,
-         wQ = arguments.length > 2 ? arguments[2] : void 0;
-       const {
-         appId: LQ,
-         apiKey: qQ,
-         measurementId: oQ
-       } = QQ.options;
- ... (7 more removed lines; see GitHub link above)
+       static CreateRStorageTexture(kk, ek, ik, Sk) {
+         let bk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           rk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           Pk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Dk.f.TRILINEAR_SAMPLINGMODE;
+         return new fk(kk, ek, ik, 6, Sk, bk, rk, Pk, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
```

#### 16. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L730-L758` → after: `L232-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L232-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L232-L261) · [Before (L730-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L730-L758)

```diff
-     async function OF(QQ, FQ, wQ) {
-       let {
-         throttleEndTimeMillis: LQ,
-         backoffCount: qQ
-       } = FQ, DQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iF;
-       var kQ;
-       const {
-         appId: vQ,
-         measurementId: mQ
-       } = QQ;
-       try {
-         await
-         function(QQ, FQ) {
-           return new Promise(((wQ, LQ) => {
-             const qQ = Math.max(FQ - Date.now(), 0),
-               oQ = setTimeout(wQ, qQ);
- ... (13 more removed lines; see GitHub link above)
+   },
+   41196: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => Dk.c
+     });
+     var Dk = ik(40016);
+     (0, Dk.e)()
+   },
+   41151: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Dk.e
+     });
+     var Dk = ik(40038);
+     (0, Dk.g)()
+   },
+   40038: (kk, ek, ik) => {
+ ... (14 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L760-L793` → after: `L263-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L263-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L263-L280) · [Before (L760-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L760-L793)

```diff
-       try {
-         const FQ = await async function(QQ) {
-           var FQ;
-           const {
-             appId: wQ,
-             apiKey: LQ
-           } = QQ, qQ = {
-             method: "GET",
-             headers: WF(LQ)
-           }, oQ = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", wQ), DQ = await fetch(oQ, qQ);
-           if (200 !== DQ.status && 304 !== DQ.status) {
-             let QQ = "";
-             try {
-               const wQ = await DQ.json();
-               (null === (FQ = wQ.error) || void 0 === FQ ? void 0 : FQ.message) && (QQ = wQ.error.message)
-             } catch (kQ) {}
- ... (18 more removed lines; see GitHub link above)
+       constructor(kk) {
+         let ek = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           Dk = arguments.length > 5 ? arguments[5] : void 0,
+           fk = arguments.length > 6 ? arguments[6] : void 0,
+           rk = arguments.length > 7 ? arguments[7] : void 0;
+         super(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, ek, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Dk, this.useVertexAlpha = fk, this.color = new  … [truncated]
+         const Pk = {
+           attributes: [bk.e.PositionKind],
+           uniforms: ["world", "viewProjection"],
+           needAlphaBlending: !0,
+           defines: [],
+           useClipPlane: null,
+           shaderLanguage: 0
+         };
+         if (this.useVertexAlpha ? Pk.defines.push("#define VERTEXALPHA") : Pk.needAlphaBlending = !1, this.useVertexColor ? (Pk.defines.push("#define VERTEXCOLOR"), Pk.attributes.push(bk.e.ColorKind)) : (Pk.uniforms.push("color"), this._color4 = new Sk.f), rk) this.material = rk;
+         else {
+ ... (2 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L795` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L282-L283) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L795)

```diff
-           throw uQ
+           const kk = new Mk.o("colorShader", this.XF(), "color", Pk, !1);
+           kk.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(kk)
```

#### 19. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L804-L807` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L286-L287) · [Before (L804-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L804-L807)

```diff
-     }
-     class sF {
-       constructor() {
-         this.listeners = []
+       getClassName() {
+         return "LinesMesh"
```

#### 20. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L809-L810` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L289-L290) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L809-L810)

```diff
-       addEventListener(QQ) {
-         this.listeners.push(QQ)
+       get material() {
+         return this._internalAbstractMeshDataInfo._material
```

#### 21. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L812-L813` → after: `L292-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L292-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L292-L296) · [Before (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L812-L813)

```diff
-       abort() {
-         this.listeners.forEach((QQ => QQ()))
+       set material(kk) {
+         const ek = this.material;
+         if (ek === kk) return;
+         const ik = ek && this._ownsMaterial;
+         this._ownsMaterial = !1, this._setInternalMaterial(kk), ik && ek?.dispose()
```

#### 22. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L815-L855` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L298-L299) · [Before (L815-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L815-L855)

```diff
-     }
-     let rF, IF;
- 
-     function UF(QQ) {
-       IF = QQ
-     }
- 
-     function NF(QQ) {
-       rF = QQ
-     }
-     async function TF(QQ, FQ, wQ, LQ, qQ, DQ, kQ) {
-       var vQ;
-       const mQ = RF(QQ);
-       mQ.then((FQ => {
-         wQ[FQ.measurementId] = FQ.appId, QQ.options.measurementId && FQ.measurementId !== QQ.options.measurementId && eF.warn(`The measurement ID in the local Firebase config (${QQ.options.measurementId}) does not match the measurement ID fetched from the server (${FQ.measurement … [truncated]
-       })).catch((QQ => eF.error(QQ))), FQ.push(mQ);
- ... (25 more removed lines; see GitHub link above)
+       _setInternalMaterial(kk) {
+         this._setMaterial(kk), this.material && (this.material.fillMode = mk.e.LineListDrawMode, this.material.disableLighting = !0)
```

#### 23. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L857-L858` → after: `L301-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L301-L302) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L857-L858)

```diff
-       _delete() {
-         return delete zF[this.app.options.appId], Promise.resolve()
+       get checkCollisions() {
+         return !1
```

#### 24. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L860-L881` → after: `L304-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L304-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L304-L314) · [Before (L860-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L860-L881)

```diff
-     }
-     let zF = {},
-       lF = [];
-     const jF = {};
-     let aF, XF, fF = "dataLayer",
-       VF = "gtag",
-       hF = !1;
- 
-     function JF(QQ) {
-       if (hF) throw GF.create("already-initialized");
-       QQ.dataLayerName && (fF = QQ.dataLayerName), QQ.gtagName && (VF = QQ.gtagName)
-     }
- 
-     function EF(QQ, FQ, wQ) {
-       ! function() {
-         const QQ = [];
- ... (6 more removed lines; see GitHub link above)
+       set checkCollisions(kk) {}
+       _bind(kk, ek) {
+         if (!this._geometry) return this;
+         const ik = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
+         if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(ek, ik) : this._geometry._bind(ek, ik, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMate … [truncated]
+           const {
+             r: kk,
+             g: ek,
+             b: ik
+           } = this.color;
+           this._color4.set(kk, ek, ik, this.alpha), this.material.setColor4("color", this._color4)
```

#### 25. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L883-L888` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L316) · [Before (L883-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L883-L888)

```diff
-       }();
-       const LQ = QQ.options.appId;
-       if (!LQ) throw GF.create("no-app-id");
-       if (!QQ.options.apiKey) {
-         if (!QQ.options.measurementId) throw GF.create("no-api-key");
-         eF.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${QQ.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
+         return this
```

#### 26. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L890-L911` → after: `L318-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L318-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L318-L321) · [Before (L890-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L890-L911)

```diff
-       if (null != zF[LQ]) throw GF.create("already-exists", {
-         id: LQ
-       });
-       if (!hF) {
-         ! function(QQ) {
-           let FQ = [];
-           Array.isArray(window[QQ]) ? FQ = window[QQ] : window[QQ] = FQ
-         }(fF);
-         const {
-           wrappedGtag: QQ,
-           gtagCore: FQ
-         } = function(QQ, FQ, wQ, LQ, qQ) {
-           let oQ = function() {
-             for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
-             window[LQ].push(arguments)
-           };
- ... (6 more removed lines; see GitHub link above)
+       _draw(kk, ek, ik) {
+         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
+         const Dk = this.XF().JU();
+         return this._unIndexed ? Dk.drawArraysType(mk.e.LineListDrawMode, kk.verticesStart, kk.verticesCount, ik) : Dk.drawElementsType(mk.e.LineListDrawMode, kk.indexStart, kk.indexCount, ik), this
```

#### 27. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L913-L930` → after: `L323-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L323-L325) · [Before (L913-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L913-L930)

```diff
-       zF[LQ] = TF(QQ, lF, jF, FQ, aF, fF, wQ);
-       return new KF(QQ)
-     }
- 
-     function nF() {
-       let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, LQ.J)();
-       QQ = (0, oQ.P)(QQ);
-       const FQ = (0, LQ.t)(QQ, AF);
-       return FQ.isInitialized() ? FQ.getImmediate() : gF(QQ)
-     }
- 
-     function gF(QQ) {
-       let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const wQ = (0, LQ.t)(QQ, AF);
-       if (wQ.isInitialized()) {
-         const QQ = wQ.getImmediate();
- ... (2 more removed lines; see GitHub link above)
+       dispose(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || ek) && this.material?.dispose(!1, !1, !0), super.dispose(kk)
```

#### 28. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L932-L943` → after: `L327-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L327-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L327-L334) · [Before (L932-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L932-L943)

```diff
-       return wQ.initialize({
-         options: FQ
-       })
-     }
-     async function PF() {
-       if ((0, oQ.U)()) return !1;
-       if (!(0, oQ.m)()) return !1;
-       if (!(0, oQ.$)()) return !1;
-       try {
-         return await (0, oQ.mb)()
-       } catch (QQ) {
-         return !1
+       clone(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           ik = arguments.length > 2 ? arguments[2] : void 0;
+         if (ek && void 0 === ek._addToSceneRootNodes) {
+           const ik = ek;
+           return ik.source = this, new xk(kk, this.XF(), ik.parent, ik.source, ik.doNotCloneChildren)
+         }
+         return new xk(kk, this.XF(), ek, this, ik)
```

#### 29. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L945-L986` → after: `L336-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L336-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L336-L340) · [Before (L945-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L945-L986)

```diff
-     }
- 
-     function ZF(QQ, FQ, wQ) {
-       QQ = (0, oQ.P)(QQ), async function(QQ, FQ, wQ, LQ) {
-         if (LQ && LQ.global) return QQ("set", {
-           screen_name: wQ
-         }), Promise.resolve();
-         QQ("config", await FQ, {
-           update: !0,
-           screen_name: wQ
-         })
-       }(XF, zF[QQ.app.options.appId], FQ, wQ).catch((QQ => eF.error(QQ)))
-     }
-     async function yF(QQ) {
-       return QQ = (0, oQ.P)(QQ), async function(QQ, FQ) {
-         const wQ = await FQ;
- ... (26 more removed lines; see GitHub link above)
+       createInstance(kk) {
+         const ek = new nk(kk, this);
+         if (this.Iq) {
+           ek.Iq = {};
+           for (const kk in this.Iq) ek.Iq[kk] = this.Iq[kk]
```

#### 30. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L988-L1003` → after: `L342-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L342-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L342-L350) · [Before (L988-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L988-L1003)

```diff
-         QQ("config", await FQ, {
-           update: !0,
-           user_properties: wQ
-         })
-       }(XF, zF[QQ.app.options.appId], FQ, wQ).catch((QQ => eF.error(QQ)))
-     }
- 
-     function Qw(QQ, FQ) {
-       QQ = (0, oQ.P)(QQ), async function(QQ, FQ) {
-         const wQ = await QQ;
-         window[`ga-disable-${wQ}`] = !FQ
-       }(zF[QQ.app.options.appId], FQ).catch((QQ => eF.error(QQ)))
-     }
- 
-     function Fw(QQ) {
-       XF ? XF("set", QQ) : NF(QQ)
+         return ek
+       }
+       serialize(kk) {
+         super.serialize(kk), kk.color = this.color.Tik(), kk.alpha = this.alpha
+       }
+       static Parse(kk, ek) {
+         const ik = new xk(kk.name, ek);
+         return ik.color = Sk.e.FromArray(kk.color), ik.alpha = kk.alpha, ik
+       }
```

#### 31. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1005-L1015` → after: `L352-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L352-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L352-L359) · [Before (L1005-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L1005-L1015)

```diff
- 
-     function ww(QQ, FQ, wQ, LQ) {
-       QQ = (0, oQ.P)(QQ), async function(QQ, FQ, wQ, LQ, qQ) {
-         if (qQ && qQ.global) QQ("event", wQ, LQ);
-         else {
-           const qQ = await FQ;
-           QQ("event", wQ, Object.assign(Object.assign({}, LQ), {
-             send_to: qQ
-           }))
-         }
-       }(XF, zF[QQ.app.options.appId], FQ, wQ, LQ).catch((QQ => eF.error(QQ)))
+     xk.ForceGLSL = !1;
+     class nk extends Pk.b {
+       constructor(kk, ek) {
+         super(kk, ek), this.intersectionThreshold = ek.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 32. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L1018-L1039` → after: `L363-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L363-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/259.js#L363-L365) · [Before (L1018-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/259.js#L1018-L1039)

```diff
-     function Lw(QQ) {
-       XF ? XF("consent", "update", QQ) : UF(QQ)
-     }
-     const qw = "@firebase/analytics",
-       ow = "0.10.0";
-     (0, LQ.x)(new DQ.e(AF, ((QQ, FQ) => {
-       let {
-         options: wQ
-       } = FQ;
-       return EF(QQ.getProvider("app").getImmediate(), QQ.getProvider("installations-internal").getImmediate(), wQ)
-     }), "PUBLIC")), (0, LQ.x)(new DQ.e("analytics-internal", (function(QQ) {
-       try {
-         const FQ = QQ.getProvider(AF).getImmediate();
-         return {
-           logEvent: (QQ, wQ, LQ) => ww(FQ, QQ, wQ, LQ)
-         }
- ... (6 more removed lines; see GitHub link above)
+     function Hk() {
+       Uk || (Uk = !0, rk.e._LinesMeshParser = (kk, ek) => xk.Parse(kk, ek))
+     }(Dk = xk.prototype).enableEdgesRendering ?? (Dk.enableEdgesRendering = (0, Kk.i)("LinesMesh", "enableEdgesRendering")), (fk = nk.prototype).enableEdgesRendering ?? (fk.enableEdgesRendering = (0, Kk.i)("InstancedLinesMesh", "enableEdgesRendering"))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/260.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/260.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073)

#### 1. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L5-L3926` → after: `L4-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L4-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/260.js#L4-L239) · [Before (L5-L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/260.js#L5-L3926)

```diff
-     39965: (QQ, FQ, wQ) => {
-         wQ.r(FQ), wQ.d(FQ, {
-           ActionCodeOperation: () => bQ,
-           ActionCodeURL: () => yF,
-           AuthCredential: () => jF,
-           AuthErrorCodes: () => eQ,
-           EmailAuthCredential: () => EF,
-           EmailAuthProvider: () => dF,
-           FacebookAuthProvider: () => Lw,
-           FactorId: () => vQ,
-           GithubAuthProvider: () => ow,
-           GoogleAuthProvider: () => qw,
-           OAuthCredential: () => gF,
-           OAuthProvider: () => ww,
-           OperationType: () => HQ,
-           PhoneAuthCredential: () => ZF,
- ... (3906 more removed lines; see GitHub link above)
+   40049: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => Ak,
+       d: () => Lk,
+       h: () => yk,
+       j: () => Yk,
+       l: () => pk,
+       o: () => lk
+     });
+     var Dk = ik(39585),
+       fk = ik(39653),
+       Sk = ik(36698),
+       bk = ik(39708),
+       rk = ik(40053),
+       Pk = ik(39946),
+       mk = ik(39612),
+ ... (220 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L3928-L3952` → after: `L241-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L241-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/260.js#L241-L354) · [Before (L3928-L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/260.js#L3928-L3952)

```diff
-           fq = new Map([
-             ["identitytoolkit.googleapis.com", "p"],
-             ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
-             ["test-identitytoolkit.sandbox.googleapis.com", "t"]
-           ]);
- 
-         function Vq(QQ) {
-           const FQ = QQ.config;
-           WQ(FQ.authDomain, QQ, "auth-domain-config-required");
-           const wQ = FQ.emulator ? NQ(FQ, "emulator/auth/iframe") : `https://${QQ.config.authDomain}/__/auth/iframe`,
-             oQ = {
-               apiKey: FQ.apiKey,
-               appName: QQ.name,
-               v: qQ.g
-             },
-             DQ = fq.get(QQ.config.apiHost);
- ... (9 more removed lines; see GitHub link above)
+           shaderLanguage: this._options.shaderLanguage,
+           extraInitializationsAsync: this._options.extraInitializationsAsync
+         }, rk), Dk ? ik.setEffect(Vk, dk, this._materialContext) : Ak && Ak.setEffect(Vk, dk), this._onEffectCreatedObservable && (wk.effect = Vk, wk.subMesh = ik ?? kk?.TY[0] ?? null, this._onEffectCreatedObservable.notifyObservers(wk))), Ak._wasPreviouslyUsingInstances = !!ek,  … [truncated]
+       }
+       bindOnlyWorldMatrix(kk, ek) {
+         const ik = ek ?? this.getEffect();
+         if (!ik) return;
+         const Dk = this._options.uniforms; - 1 !== Dk.indexOf("world") && ik.setMatrix("world", kk);
+         const fk = this.XF(); - 1 !== Dk.indexOf("worldView") && (kk.multiplyToRef(fk.getViewMatrix(), this._cachedWorldViewMatrix), ik.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Dk.indexOf("worldViewProjection") && (kk.multiplyToRef(fk.getTransformMatrix(), thi … [truncated]
+       }
+       bindForSubMesh(kk, ek, ik) {
+         this.bind(kk, ek, ik._drawWrapperOverride?.effect, ik)
+       }
+       bind(kk, ek, ik, Dk) {
+         const fk = Dk && this._storeEffectOnSubMeshes,
+           Sk = ik ?? (fk ? Dk.effect : this.getEffect());
+ ... (98 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L3954-L4026` → after: `L356-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L356-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/260.js#L356-L573) · [Before (L3954-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/260.js#L3954-L4026)

```diff
-         class Jq {
-           constructor(QQ) {
-             this.window = QQ, this.associatedEvent = null
-           }
-           close() {
-             if (this.window) try {
-               this.window.close()
-             } catch (QQ) {}
-           }
-         }
- 
-         function Eq(QQ, FQ, wQ) {
-           let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
-             oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
-           const DQ = Math.max((window.screen.availHeight - oQ) / 2, 0).toString(),
-             kQ = Math.max((window.screen.availWidth - qQ) / 2, 0).toString();
- ... (57 more removed lines; see GitHub link above)
+         const ik = Object.keys(this._options);
+         for (const Dk of ik) {
+           const kk = this._options[Dk];
+           Array.isArray(kk) && (this._options[Dk] = kk.slice(0))
+         }
+         this.stencil.copyTo(ek.stencil);
+         for (const Dk in this._textures) ek.setTexture(Dk, this._textures[Dk]);
+         for (const Dk in this._internalTextures) ek.setInternalTexture(Dk, this._internalTextures[Dk]);
+         for (const Dk in this._textureArrays) ek.setTextureArray(Dk, this._textureArrays[Dk]);
+         for (const Dk in this._externalTextures) ek.setExternalTexture(Dk, this._externalTextures[Dk]);
+         for (const Dk in this._ints) ek.setInt(Dk, this._ints[Dk]);
+         for (const Dk in this._uints) ek.setUInt(Dk, this._uints[Dk]);
+         for (const Dk in this._floats) ek.setFloat(Dk, this._floats[Dk]);
+         for (const Dk in this._floatsArrays) ek.setFloats(Dk, this._floatsArrays[Dk]);
+         for (const Dk in this._colors3) ek.setColor3(Dk, this._colors3[Dk]);
+         for (const Dk in this._colors3Arrays) ek._colors3Arrays[Dk] = this._colors3Arrays[Dk];
+ ... (202 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/261.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/261.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9)

#### 1. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L4-L141` → after: `L5-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L5-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/261.js#L5-L24) · [Before (L4-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/261.js#L4-L141)

```diff
-   40003: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       $c: () => pQ,
-       $d: () => cQ,
-       $e: () => Ww,
-       $f: () => Mw,
-       Ae: () => Tw,
-       Af: () => Pw,
-       Bb: () => qw,
-       Be: () => zw,
-       C: () => JQ,
-       Cd: () => KQ,
-       Db: () => aQ,
-       Dc: () => mQ,
-       De: () => Kw,
-       Ef: () => Sw,
- ... (122 more removed lines; see GitHub link above)
+   40071: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       FirebaseError: () => Dk.b,
+       SDK_VERSION: () => Dk.f,
+       _DEFAULT_ENTRY_NAME: () => Dk.j,
+       qik: () => Dk.l,
+       _addOrOverwriteComponent: () => Dk.n,
+       _apps: () => Dk.q,
+       _clearComponents: () => Dk.r,
+       _components: () => Dk.v,
+       _getProvider: () => Dk.z,
+       _registerComponent: () => Dk.B,
+       _removeServiceInstance: () => Dk.D,
+       deleteApp: () => Dk.E,
+       getApp: () => Dk.H,
+       getApps: () => Dk.F,
+ ... (4 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L143-L1361` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/261.js#L26-L27) · [Before (L143-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/261.js#L143-L1361)

```diff
-     const LQ = -2147483648,
-       qQ = 12,
-       oQ = 12,
-       DQ = 4095,
-       kQ = {
-         Lifeform: 1,
-         Throwable: 2,
-         Mesh: 3,
-         Audio: 4,
-         Item: 5
-       },
-       vQ = {
-         Alive: 1,
-         Crouching: 2,
-         OnGround: 4,
-         InFluid: 8,
- ... (1203 more removed lines; see GitHub link above)
+     var Dk = ik(40078);
+     (0, Dk.N)("firebase", "9.23.0", "app")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (109 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 1. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L4)

```diff
-   41015: (QQ, FQ, wQ) => {
+   40092: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L6` → after: `L7-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L7-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L7-L17) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L6)

```diff
-       b: () => tQ,
+       $: () => pk,
+       C: () => dk,
+       G: () => qk,
+       H: () => Kk,
+       J: () => Mk,
+       N: () => xk,
+       Q: () => tk,
+       T: () => Uk,
+       W: () => wk,
+       _: () => sk,
+       cb: () => yk,
```

#### 3. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8-L9` → after: `L19-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L19-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L19-L30) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8-L9)

```diff
-       e: () => DQ,
-       g: () => mQ
+       g: () => Ak,
+       gb: () => Hk,
+       j: () => Ck,
+       kb: () => lk,
+       mb: () => uk,
+       n: () => Lk,
+       o: () => rk,
+       qb: () => Fk,
+       r: () => bk,
+       rb: () => Yk,
+       v: () => Wk,
+       y: () => Ik
```

#### 4. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L11-L21` → after: `L32-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L32-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L32-L181) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L11-L21)

```diff
-     var LQ = wQ(36870),
-       qQ = wQ(38236),
-       oQ = wQ(38230);
- 
-     function DQ(QQ, FQ, wQ, LQ) {
-       const qQ = oQ.y;
-       FQ.fill(0), QQ.gravity.toArray(FQ, qQ.gravity), QQ.colorDead.toArray(FQ, qQ.colorDead), wQ[qQ.ramp] = QQ.useRampGradients ? 1 : 0;
-       const DQ = QQ.getColorGradients(),
-         kQ = bQ(QQ, DQ, "colour", LQ);
-       wQ[qQ.colorCount] = kQ;
-       for (let oQ = 0; oQ < kQ; oQ++) {
+     const Dk = function(kk) {
+         const ek = [];
+         let ik = 0;
+         for (let Dk = 0; Dk < kk.length; Dk++) {
+           let fk = kk.charCodeAt(Dk);
+           fk < 128 ? ek[ik++] = fk : fk < 2048 ? (ek[ik++] = fk >> 6 | 192, ek[ik++] = 63 & fk | 128) : 55296 === (64512 & fk) && Dk + 1 < kk.length && 56320 === (64512 & kk.charCodeAt(Dk + 1)) ? (fk = 65536 + ((1023 & fk) << 10) + (1023 & kk.charCodeAt(++Dk)), ek[ik++] = fk >> 1 … [truncated]
+         }
+         return ek
+       },
+       fk = {
+         byteToCharMap_: null,
+         charToByteMap_: null,
+         byteToCharMapWebSafe_: null,
+         charToByteMapWebSafe_: null,
+         ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
+         get ENCODED_VALS() {
+ ... (134 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L23-L24` → after: `L183-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L183-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L183-L194) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L23-L24)

```diff
-         const QQ = DQ[YQ(DQ, oQ)];
-         FQ[qQ.colorPositions + oQ] = QQ.gradient, QQ.color1.toArray(FQ, qQ.color1 + 4 * oQ), (null !== (vQ = QQ.color2) && void 0 !== vQ ? vQ : QQ.color1).toArray(FQ, qQ.color2 + 4 * oQ)
+         return null === (ek = mk()) || void 0 === ek ? void 0 : ek[`_${kk}`]
+       };
+     class nk {
+       constructor() {
+         this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((kk, ek) => {
+           this.resolve = kk, this.reject = ek
+         }))
+       }
+       wrapCallback(kk) {
+         return (ek, ik) => {
+           ek ? this.reject(ek) : this.resolve(ik), "function" === typeof kk && (this.promise.catch((() => {})), 1 === kk.length ? kk(ek) : kk(ek, ik))
+         }
```

#### 6. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L37-L40` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L199) · [Before (L37-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L37-L40)

```diff
-       return {
-         key: [],
-         texels: new Uint8Array(4 * oQ.k)
-       }
+       return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
```

#### 7. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L44-L49` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L202-L203) · [Before (L44-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L44-L49)

```diff
-     function mQ(QQ, FQ) {
-       return uQ(QQ, vQ), !eQ(vQ, FQ.key) && (FQ.key.length = 0, FQ.key.push(...vQ), FQ.key.length > 0 && function(QQ, FQ) {
-         for (let wQ = 0; wQ < oQ.k; wQ++) qQ.k.GetCurrentGradient(wQ / oQ.k, QQ, ((QQ, FQ, wQ) => {
-           LQ.Color3.LerpToRef(QQ.color, FQ.color, wQ, HQ)
-         })), FQ[4 * wQ] = 255 * HQ.r, FQ[4 * wQ + 1] = 255 * HQ.g, FQ[4 * wQ + 2] = 255 * HQ.b, FQ[4 * wQ + 3] = 255
-       }(QQ.getRampGradients(), FQ.texels), !0)
+     function Hk() {
+       return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Uk())
```

#### 8. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L52-L57` → after: `L206-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L206-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L206-L224) · [Before (L52-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L52-L57)

```diff
-     function uQ(QQ, FQ) {
-       FQ.length = 0;
-       const wQ = QQ.useRampGradients ? QQ.getRampGradients() : null;
-       if (null !== wQ && void 0 !== wQ && wQ.length) {
-         FQ.push(wQ.length);
-         for (const QQ of wQ) FQ.push(QQ.gradient, QQ.color.r, QQ.color.g, QQ.color.b)
+     function wk() {
+       const kk = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
+       return "object" === typeof kk && void 0 !== kk.id
+     }
+ 
+     function lk() {
+       return "object" === typeof navigator && "ReactNative" === navigator.product
+     }
+ 
+     function pk() {
+       const kk = Uk();
+       return kk.indexOf("MSIE ") >= 0 || kk.indexOf("Trident/") >= 0
+     }
+ 
+     function yk() {
+       try {
+ ... (3 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L62-L63` → after: `L228-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L228-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L228-L245) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L62-L63)

```diff
-     function bQ(QQ, FQ, wQ, LQ) {
-       return FQ ? FQ.length > oQ.e ? (LQ(`particleStops:${wQ}`, `GPU particles use the first 2 and last ${oQ.e-2} of more than ${oQ.e} ${wQ} gradient stops (${QQ.name})`), oQ.e) : FQ.length : 0
+     function Yk() {
+       return new Promise(((kk, ek) => {
+         try {
+           let ik = !0;
+           const Dk = "validate-browser-context-for-indexeddb-analytics-module",
+             fk = self.indexedDB.open(Dk);
+           fk.onsuccess = () => {
+             fk.result.close(), ik || self.indexedDB.deleteDatabase(Dk), kk(!0)
+           }, fk.onupgradeneeded = () => {
+             ik = !1
+           }, fk.onerror = () => {
+             var kk;
+             ek((null === (kk = fk.error) || void 0 === kk ? void 0 : kk.message) || "")
+           }
+         } catch (ik) {
+           ek(ik)
+ ... (2 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L66-L67` → after: `L248-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L248-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L248-L272) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L66-L67)

```diff
-     function YQ(QQ, FQ) {
-       return FQ < 2 || QQ.length <= oQ.e ? FQ : QQ.length - oQ.e + FQ
+     function Lk() {
+       return !("undefined" === typeof navigator || !navigator.cookieEnabled)
+     }
+     class Ck extends Error {
+       constructor(kk, ek, ik) {
+         super(ek), this.code = kk, this.customData = ik, this.name = "FirebaseError", Object.setPrototypeOf(this, Ck.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Ak.prototype.create)
+       }
+     }
+     class Ak {
+       constructor(kk, ek, ik) {
+         this.service = kk, this.serviceName = ek, this.errors = ik
+       }
+       create(kk) {
+         const ek = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
+           ik = `${this.service}/${kk}`,
+           Dk = this.errors[kk],
+ ... (9 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L69-L70` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L274) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L69-L70)

```diff
-     const xQ = new Float32Array(oQ.r),
-       AQ = new Uint32Array(xQ.buffer);
+     const jk = /\{\$([^}]+)}/g;
```

#### 12. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L72-L73` → after: `L276-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L276-L279) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L72-L73)

```diff
-     function tQ(QQ, FQ, wQ) {
-       return DQ(QQ, xQ, AQ, wQ), FQ && eQ(AQ, FQ) ? null : AQ.slice()
+     function sk(kk) {
+       for (const ek in kk)
+         if (Object.prototype.hasOwnProperty.call(kk, ek)) return !1;
+       return !0
```

#### 13. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L77-L79` → after: `L283-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L283-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L283-L295) · [Before (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L77-L79)

```diff
-       if (QQ.length !== FQ.length) return !1;
-       for (let wQ = 0; wQ < QQ.length; wQ++)
-         if (QQ[wQ] !== FQ[wQ]) return !1;
+       if (kk === ek) return !0;
+       const ik = Object.keys(kk),
+         Dk = Object.keys(ek);
+       for (const fk of ik) {
+         if (!Dk.includes(fk)) return !1;
+         const ik = kk[fk],
+           Sk = ek[fk];
+         if (Vk(ik) && Vk(Sk)) {
+           if (!dk(ik, Sk)) return !1
+         } else if (ik !== Sk) return !1
+       }
+       for (const fk of Dk)
+         if (!ik.includes(fk)) return !1;
```

#### 14. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L83-L85` → after: `L299-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L299-L300) · [Before (L83-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L83-L85)

```diff
-     function MQ(QQ, FQ, wQ) {
-       var LQ;
-       QQ[FQ] = wQ.gradient, QQ[FQ + 1] = wQ.factor1, QQ[FQ + 2] = null !== (LQ = wQ.factor2) && void 0 !== LQ ? LQ : wQ.factor1
+     function Vk(kk) {
+       return null !== kk && "object" === typeof kk
```

#### 15. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L87-L94` → after: `L302-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L302-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L302-L308) · [Before (L87-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L87-L94)

```diff
-   },
-   41008: (QQ, FQ, wQ) => {
-     function LQ() {
-       let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
-       const FQ = new Set;
-       return (wQ, LQ) => {
-         FQ.has(wQ) || (FQ.add(wQ), console.warn(QQ + LQ))
-       }
+ 
+     function Fk(kk) {
+       const ek = [];
+       for (const [ik, Dk] of Object.entries(kk)) Array.isArray(Dk) ? Dk.forEach((kk => {
+         ek.push(encodeURIComponent(ik) + "=" + encodeURIComponent(kk))
+       })) : ek.push(encodeURIComponent(ik) + "=" + encodeURIComponent(Dk));
+       return ek.length ? "&" + ek.join("&") : ""
```

#### 16. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L96-L132` → after: `L310-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L310-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L310-L316) · [Before (L96-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L96-L132)

```diff
-     wQ.d(FQ, {
-       b: () => LQ
-     })
-   },
-   41057: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       createLiteRendererAsync: () => Uv,
-       liteBabylonBackend: () => aQ,
-       setPipelineFailureHook: () => nq
-     });
-     var LQ = wQ(36870),
-       qQ = wQ(37172),
-       oQ = wQ(37448),
-       DQ = wQ(36820),
-       kQ = wQ(37460);
-     class vQ extends kQ.b {
- ... (21 more removed lines; see GitHub link above)
+ 
+     function uk(kk) {
+       const ek = {};
+       return kk.replace(/^\?/, "").split("&").forEach((kk => {
+         if (kk) {
+           const [ik, Dk] = kk.split("=");
+           ek[decodeURIComponent(ik)] = decodeURIComponent(Dk)
```

#### 17. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L134-L137` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L318) · [Before (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L134-L137)

```diff
-       }
-       getClassName() {
-         return "LinesMesh"
-       }
+       })), ek
```

#### 18. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L148-L150` → after: `L321-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L321-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L321-L325) · [Before (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L148-L150)

```diff
-     function eQ(QQ, FQ, wQ, LQ) {
-       let qQ = 0;
-       return QQ.isVerticesDataPresent("color") && (qQ |= HQ), "none" !== FQ && (qQ |= bQ), "thin" === FQ && (qQ |= YQ, QQ.isVerticesDataPresent("instanceColor") && (qQ |= xQ)), LQ.fogEnabled && QQ.applyFog && 0 !== LQ.fogMode && (qQ |= AQ), wQ >= 1 && (qQ |= tQ), qQ
+     function qk(kk) {
+       const ek = kk.indexOf("?");
+       if (!ek) return "";
+       const ik = kk.indexOf("#", ek);
+       return kk.substring(ek, ik > 0 ? ik : void 0)
```

#### 19. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L154` → after: `L329-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L329-L330) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L154)

```diff
-       QQ.updateColor4("color", FQ.color, FQ.alpha)
+       const ik = new zk(kk, ek);
+       return ik.subscribe.bind(ik)
```

#### 20. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L168-L187` → after: `L334-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L334-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L334-L338) · [Before (L168-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L168-L187)

```diff
-         this.name = QQ, this.lA = FQ, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.zN = {
-           addOnce: QQ => {
-             this.disposers.push(QQ)
-           }
-         }, this.uniqueId = FQ.getUniqueId()
-       }
-       get isFrozen() {
-         return this.checkReadyOnlyOnce
-       }
-       iN() {
-         return this.lA
-       }
-       getClassName() {
-         return "LiteMaterial"
-       }
-       freeze() {
- ... (4 more removed lines; see GitHub link above)
+         this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = ek, this.task.then((() => {
+           kk(this)
+         })).catch((kk => {
+           this.error(kk)
+         }))
```

#### 21. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L189-L191` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L340-L343) · [Before (L189-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L189-L191)

```diff
-       markDirty() {}
-       get fillMode() {
-         return this.model.fillMode
+       next(kk) {
+         this.forEachObserver((ek => {
+           ek.next(kk)
+         }))
```

#### 22. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L193-L194` → after: `L345-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L345-L348) · [Before (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L193-L194)

```diff
-       needAlphaBlendingForMesh(QQ) {
-         return (0, WQ.Y)(this.model, QQ.visibility, QQ.hasVertexAlpha)
+       error(kk) {
+         this.forEachObserver((ek => {
+           ek.error(kk)
+         })), this.close(kk)
```

#### 23. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L196-L197` → after: `L350-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L350-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L350-L353) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L196-L197)

```diff
-       needAlphaTestingForMesh(QQ) {
-         return (0, WQ.ab)(this.model, QQ.visibility, QQ.hasVertexAlpha)
+       complete() {
+         this.forEachObserver((kk => {
+           kk.complete()
+         })), this.close()
```

#### 24. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L199-L201` → after: `L355-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L355-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L355-L389) · [Before (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L199-L201)

```diff
-       dispose() {
-         (0, pQ.g)(this);
-         for (const QQ of this.disposers.splice(0)) QQ()
+       subscribe(kk, ek, ik) {
+         let Dk;
+         if (void 0 === kk && void 0 === ek && void 0 === ik) throw new Error("Missing Observer.");
+         Dk = function(kk, ek) {
+           if ("object" !== typeof kk || null === kk) return !1;
+           for (const ik of ek)
+             if (ik in kk && "function" === typeof kk[ik]) return !0;
+           return !1
+         }(kk, ["next", "error", "complete"]) ? kk : {
+           next: kk,
+           error: ek,
+           complete: ik
+         }, void 0 === Dk.next && (Dk.next = Qk), void 0 === Dk.error && (Dk.error = Qk), void 0 === Dk.complete && (Dk.complete = Qk);
+         const fk = this.unsubscribeOne.bind(this, this.observers.length);
+         return this.finalized && this.task.then((() => {
+           try {
+ ... (19 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L203-L204` → after: `L391-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L391-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L391-L394) · [Before (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L203-L204)

```diff
-       get model() {
-         return (0, WQ.jb)(this)
+       close(kk) {
+         this.finalized || (this.finalized = !0, void 0 !== kk && (this.finalError = kk), this.task.then((() => {
+           this.observers = void 0, this.onNoObservers = void 0
+         })))
```

#### 26. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L207` → after: `L397-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L397-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L397-L402) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L207)

```diff
-     const IQ = new WeakSet;
+ 
+     function Qk() {}
+     const vk = 1e3,
+       Ek = 2,
+       hk = 144e5,
+       ak = .5;
```

#### 27. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L210` → after: `L405-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L405-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L405-L408) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L210)

```diff
-       return IQ.has(QQ)
+       let ek = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ek;
+       const ik = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vk) * Math.pow(ek, kk),
+         Dk = Math.round(ak * ik * (Math.random() - .5) * 2);
+       return Math.min(hk, ik + Dk)
```

#### 28. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L214` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L412) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L214)

```diff
-       IQ.add(QQ)
+       return kk && kk._delegate ? kk._delegate : kk
```

#### 29. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L216-L244` → after: `L414-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L414-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L414-L452) · [Before (L216-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L216-L244)

```diff
-     const TQ = {
-       create: (QQ, FQ) => ((0, cQ.p)(QQ, new rQ(QQ.name, FQ)), RQ.c.defines()),
-       write: () => {},
-       addFeature: (QQ, FQ) => {
-         const wQ = QQ.mirror;
-         FQ.feature === iQ.h && FQ.state.dirLightCount > 0 && (QQ.disableLighting = !0, (0, WQ.fb)(QQ)), "BLOXD_LIGHTING" in FQ.defines && (0, pQ.e)(wQ), FQ.feature === SQ.l && ((0, GQ.m)(FQ.state, sQ), function(QQ, FQ) {
-           const wQ = QQ.iN().Wx();
-           FQ.textures.forEach(((LQ, qQ) => {
-             setTimeout((() => {
-               var oQ, DQ;
-               const {
-                 url: kQ
-               } = LQ.source;
-               wQ.atlasArray(kQ, null !== (oQ = null === (DQ = FQ.sources.pixels) || void 0 === DQ ? void 0 : DQ[qQ]) && void 0 !== oQ ? oQ : null, FQ.sources.layerWidth).then((wQ => {
-                 (0, GQ.e)(QQ, FQ, qQ, wQ, wQ.layerWidth, wQ.layers, sQ)
-               })).catch((QQ => {
- ... (13 more removed lines; see GitHub link above)
+   },
+   40078: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => Sk.j,
+       f: () => xe,
+       j: () => Jk,
+       l: () => De,
+       n: () => fe,
+       q: () => ee,
+       r: () => Pe,
+       v: () => ie,
+       z: () => be,
+       B: () => Se,
+       D: () => re,
+       E: () => we,
+       H: () => Ue,
+ ... (23 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L246-L270` → after: `L454-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L454-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L454-L455) · [Before (L246-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L246-L270)

```diff
-       cube: NQ,
-       canvas: (QQ, FQ, wQ) => {
-         let {
-           width: LQ,
-           height: qQ,
-           mipmaps: oQ,
-           samplingMode: DQ = OQ.f.trilinear,
-           hasAlpha: kQ = !1,
-           wrap: vQ = OQ.d.clamp
-         } = wQ;
-         const mQ = QQ.Wx().createCanvas(LQ, qQ),
-           uQ = new OQ.j("2d", {
-             kind: "canvas",
-             width: LQ,
-             height: qQ,
-             canvas: mQ
- ... (9 more removed lines; see GitHub link above)
+       set: (kk, ek, ik) => (kk[ek] = ik, !0),
+       has: (kk, ek) => kk instanceof IDBTransaction && ("done" === ek || "store" === ek) || ek in kk
```

#### 31. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L272-L306` → after: `L457-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L457-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L457-L468) · [Before (L272-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L272-L306)

```diff
-     var KQ = wQ(37036),
-       zQ = wQ(36722);
-     class lQ {
-       constructor(QQ, FQ, wQ) {
-         this.engine = QQ, this.clearColor = FQ, this.ambientColor = wQ, this.onBeforeRenderObservable = new zQ.e, this.onBeforeCameraRenderObservable = new zQ.e, this.onAfterRenderObservable = new zQ.e, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = … [truncated]
-       }
-       Wx() {
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
+     function Uk(kk) {
+       return kk !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (rk || (rk = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(kk) ? function() {
+         for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
+         return kk.apply(lk(this), ik), wk(Pk.get(this))
+       } : function() {
+         for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
+         return wk(kk.apply(lk(this), ik))
+       } : function(ek) {
+         for (var ik = arguments.length, Dk = new Array(ik > 1 ? ik - 1 : 0), fk = 1; fk < ik; fk++) Dk[fk - 1] = arguments[fk];
+         const Sk = kk.call(lk(this), ek, ...Dk);
+         return Mk.set(Sk, ek.sort ? ek.sort() : [ek]), wk(Sk)
```

#### 32. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L310-L311` → after: `L472-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L472-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L472-L489) · [Before (L310-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L310-L311)

```diff
-     function jQ() {
-       throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
+     function Hk(kk) {
+       return "function" === typeof kk ? Uk(kk) : (kk instanceof IDBTransaction && function(kk) {
+         if (mk.has(kk)) return;
+         const ek = new Promise(((ek, ik) => {
+           const Dk = () => {
+               kk.removeEventListener("complete", fk), kk.removeEventListener("error", Sk), kk.removeEventListener("abort", Sk)
+             },
+             fk = () => {
+               ek(), Dk()
+             },
+             Sk = () => {
+               ik(kk.error || new DOMException("AbortError", "AbortError")), Dk()
+             };
+           kk.addEventListener("complete", fk), kk.addEventListener("error", Sk), kk.addEventListener("abort", Sk)
+         }));
+         mk.set(kk, ek)
+ ... (2 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L313-L339` → after: `L491-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L491-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L491-L504) · [Before (L313-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L313-L339)

```diff
-     const aQ = {
-       awQ: jQ,
-       mqQ: (QQ, FQ) => {
-         const wQ = new lQ(QQ.engine, LQ.b.FromArray(FQ.clearColor), LQ.Color3.FromArray(FQ.ambientColor));
-         (0, DQ.d)(TQ, wQ), QQ.lA = wQ,
-           function(QQ, FQ) {
-             const wQ = Object.assign((0, KQ.k)(QQ, "camera"), {
-               layerMask: 268435455
-             });
-             QQ.model.nodes.setWorldSource(wQ.row, QQ.model.view.worldMatrix), QQ.camera = FQ.activeCamera = wQ
-           }(QQ, wQ), (0, qQ.k)(QQ, ((QQ, FQ, wQ) => (0, oQ.h)(QQ, FQ, wQ, kQ.b)))
-       },
-       oqQ: () => {},
-       setBabylonFog: () => {},
-       HqQ: jQ,
-       xqQ: () => {},
- ... (11 more removed lines; see GitHub link above)
+ 
+     function wk(kk) {
+       if (kk instanceof IDBRequest) return function(kk) {
+         const ek = new Promise(((ek, ik) => {
+           const Dk = () => {
+               kk.removeEventListener("success", fk), kk.removeEventListener("error", Sk)
+             },
+             fk = () => {
+               ek(wk(kk.result)), Dk()
+             },
+             Sk = () => {
+               ik(kk.error), Dk()
+             };
+           kk.addEventListener("success", fk), kk.addEventListener("error", Sk)
```

#### 34. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L341-L358` → after: `L506-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L506-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L506-L532) · [Before (L341-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L341-L358)

```diff
-         this.deviceLost = Promise.race([QQ, FQ])
-       }
-       frameDrawn() {
-         this.refusedFrames = 0
-       }
-       frameFailed(QQ) {
-         (function(QQ) {
-           const {
-             name: FQ,
-             message: wQ
-           } = null !== QQ && void 0 !== QQ ? QQ : {};
-           return "InvalidStateError" === FQ && "string" === typeof wQ && wQ.startsWith("GPUDevice.")
-         })(QQ) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
-           reason: "unknown",
-           message: QQ.message,
-           framesRefused: !0
- ... (2 more removed lines; see GitHub link above)
+         return ek.then((ek => {
+           ek instanceof IDBCursor && Pk.set(ek, kk)
+         })).catch((() => {})), xk.set(ek, kk), ek
+       }(kk);
+       if (Kk.has(kk)) return Kk.get(kk);
+       const ek = Hk(kk);
+       return ek !== kk && (Kk.set(kk, ek), xk.set(ek, kk)), ek
+     }
+     const lk = kk => xk.get(kk);
+     const pk = ["get", "getKey", "getAll", "getAllKeys", "count"],
+       yk = ["put", "add", "delete", "clear"],
+       Yk = new Map;
+ 
+     function Lk(kk, ek) {
+       if (!(kk instanceof IDBDatabase) || ek in kk || "string" !== typeof ek) return;
+       if (Yk.get(ek)) return Yk.get(ek);
+ ... (11 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L362-L373` → after: `L541-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L541-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L541-L619) · [Before (L362-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L362-L373)

```diff
-         this.resources = QQ, this.matrixKey = {
-           MH: 0
-         }, this.attributesKey = {
-           MH: 0
-         }, this.inputs = Object.create(null);
-         for (let FQ = 0; FQ < 4; FQ++) this.inputs[`world${FQ}`] = new nQ(this.matrixKey, 16 * FQ, 64, 4)
-       }
-       release() {
-         this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
-       }
-       bind(QQ, FQ) {
-         this.resources.vertexBufferCreated(this.matrixKey, QQ, !0), FQ && this.resources.vertexBufferCreated(this.attributesKey, FQ, !0)
+         this.container = kk
+       }
+       getPlatformInfoString() {
+         return this.container.getProviders().map((kk => {
+           if (function(kk) {
+               const ek = kk.getComponent();
+               return "VERSION" === (null === ek || void 0 === ek ? void 0 : ek.type)
+             }(kk)) {
+             const ek = kk.getImmediate();
+             return `${ek.library}/${ek.version}`
+           }
+           return null
+         })).filter((kk => kk)).join(" ")
+       }
+     }
+     const Ak = "@firebase/app",
+ ... (63 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L376` → after: `L622-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L622-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L622-L664) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L376)

```diff
-     class JQ extends hQ {
+ 
+     function fe(kk, ek) {
+       kk.container.addOrOverwriteComponent(ek)
+     }
+ 
+     function Se(kk) {
+       const ek = kk.name;
+       if (ie.has(ek)) return sk.debug(`There were multiple attempts to register component ${ek}.`), !1;
+       ie.set(ek, kk);
+       for (const ik of ee.values()) De(ik, kk);
+       return !0
+     }
+ 
+     function be(kk, ek) {
+       const ik = kk.container.getProvider("heartbeat").getImmediate({
+         optional: !0
+ ... (27 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L378-L394` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L666) · [Before (L378-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L378-L394)

```diff
-         super(QQ), this.mesh = FQ, this.rowStride = void 0, this.matrices = null, this.attributes = null;
-         const LQ = this.inputs;
-         let qQ = 0;
-         for (const {
-             size: DQ
-           }
-           of wQ) qQ += DQ;
-         for (const {
-             name: DQ,
-             offset: kQ,
-             size: vQ,
-             type: mQ
-           }
-           of wQ) LQ[DQ] = new nQ(this.attributesKey, 4 * kQ, 4 * qQ, vQ, !0, mQ);
-         this.rowStride = qQ, QQ.T_.set(FQ, this);
-         const oQ = FQ.isVerticesDataPresent;
- ... (1 more removed lines; see GitHub link above)
+         this._isDeleted = !1, this._options = Object.assign({}, kk), this._config = Object.assign({}, ek), this._name = ek.name, this._automaticDataCollectionEnabled = ek.automaticDataCollectionEnabled, this._container = ik, this.container.wq(new Dk.f("app", (() => this), "PUBLIC … [truncated]
```

#### 38. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L396-L397` → after: `L668-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L668-L669) · [Before (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L396-L397)

```diff
-       attach(QQ, FQ) {
-         this.matrices = QQ, this.attributes = FQ, this.bind(QQ, FQ), this.mirror(QQ, QQ.length, QQ.length / 16)
+       get automaticDataCollectionEnabled() {
+         return this.checkDestroyed(), this._automaticDataCollectionEnabled
```

#### 39. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L399-L403` → after: `L671-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L671-L672) · [Before (L399-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L399-L403)

```diff
-       t5(QQ) {
-         this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, QQ ? 64 * QQ : void 0)
-       }
-       i5() {
-         this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
+       set automaticDataCollectionEnabled(kk) {
+         this.checkDestroyed(), this._automaticDataCollectionEnabled = kk
```

#### 40. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L405-L406` → after: `L674-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L674-L675) · [Before (L405-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L405-L406)

```diff
-       matrixRows(QQ, FQ) {
-         this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * QQ, 16 * FQ)
+       get name() {
+         return this.checkDestroyed(), this._name
```

#### 41. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L408-L409` → after: `L677-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L677-L678) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L408-L409)

```diff
-       attributeRows(QQ, FQ) {
-         this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, QQ * this.rowStride, FQ * this.rowStride)
+       get options() {
+         return this.checkDestroyed(), this._options
```

#### 42. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L411-L412` → after: `L680-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L680-L681) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L411-L412)

```diff
-       release() {
-         super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
+       get config() {
+         return this.checkDestroyed(), this._config
```

#### 43. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L414-L426` → after: `L683-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L683-L684) · [Before (L414-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L414-L426)

```diff
-       mirror(QQ, FQ, wQ) {
-         const LQ = this.mesh._thinInstanceDataStorage;
-         LQ.matrixData = QQ, LQ.matrixBufferSize = FQ, LQ.worldMatrices = null, LQ.instancesCount = wQ
-       }
-     }
-     class EQ extends hQ {
-       constructor(QQ, FQ, wQ) {
-         var LQ, qQ, oQ, DQ;
-         super(QQ), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (LQ = null === wQ | … [truncated]
-           this.inputs[QQ] = new nQ(this.attributesKey, 4 * this.offsets[FQ], 4 * this.rowStride, wQ.strides[QQ])
-         })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), QQ.batchUploads.set(FQ, this), FQ.zN.addOnce((() => {
-           this.release()
-         }))
+       get container() {
+         return this._container
```

#### 44. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L428-L429` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L686-L687) · [Before (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L428-L429)

```diff
-       get packedMatrices() {
-         return this.matrices
+       get isDeleted() {
+         return this._isDeleted
```

#### 45. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L431-L433` → after: `L689-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L689-L690) · [Before (L431-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L431-L433)

```diff
-       packedRowMesh(QQ) {
-         const FQ = this.packedBatch;
-         return FQ.renderSelf ? 0 === QQ ? this.packedSource : FQ.instances[QQ - 1] : FQ.instances[QQ]
+       set isDeleted(kk) {
+         this._isDeleted = kk
```

#### 46. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L435-L436` → after: `L692-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L692-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L692-L695) · [Before (L435-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L435-L436)

```diff
-       get packedAttributes() {
-         return this.attributes
+       checkDestroyed() {
+         if (this.isDeleted) throw Me.create("app-deleted", {
+           appName: this._name
+         })
```

#### 47. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L438-L444` → after: `L697-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L697-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L697-L705) · [Before (L438-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L438-L444)

```diff
-       pack(QQ, FQ, wQ, LQ) {
-         const qQ = (FQ.renderSelf ? 1 : 0) + FQ.rows.length;
-         if (this.frame = LQ, this.count = qQ, this.packedSource = QQ, this.packedBatch = FQ, 0 === qQ) return;
-         if (QQ.getWorldMatrix(), 16 * qQ > this.matrices.length) {
-           let QQ = this.matrices.length / 16;
-           for (; QQ < qQ;) QQ *= 2;
-           this.matrices = new Float32Array(16 * QQ), this.attributes &&= new Float32Array(QQ * this.rowStride), this.bind(this.matrices, this.attributes)
+     }
+     const xe = "9.23.0";
+ 
+     function ne(kk) {
+       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         ik = kk;
+       if ("object" !== typeof ek) {
+         ek = {
+           name: ek
```

#### 48. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L451-L465` → after: `L708-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L708-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L708-L722) · [Before (L451-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L451-L465)

```diff
-       packRow(QQ, FQ, wQ, LQ) {
-         const qQ = this.matrices;
-         if (wQ < 0) qQ.set(FQ.getWorldMatrix().m, 16 * QQ);
-         else
-           for (let mQ = 0; mQ < 16; mQ++) qQ[16 * QQ + mQ] = LQ[16 * wQ + mQ];
-         const oQ = this.attributes;
-         if (!oQ) return;
-         const DQ = FQ.bK,
-           kQ = this.layout;
-         for (let mQ = 0; mQ < kQ.length; mQ++) {
-           var vQ;
-           const FQ = null !== (vQ = DQ[kQ[mQ]]) && void 0 !== vQ ? vQ : 0,
-             wQ = QQ * this.rowStride + this.offsets[mQ];
-           FQ.toArray ? FQ.toArray(oQ, wQ) : FQ.copyToArray ? FQ.copyToArray(oQ, wQ) : oQ[wQ] = FQ
-         }
+       const fk = Object.assign({
+           name: Jk,
+           automaticDataCollectionEnabled: !1
+         }, ek),
+         bk = fk.name;
+       if ("string" !== typeof bk || !bk) throw Me.create("bad-app-name", {
+         appName: String(bk)
+       });
+       if (ik || (ik = (0, Sk.H)()), !ik) throw Me.create("no-options");
+       const rk = ee.get(bk);
+       if (rk) {
+         if ((0, Sk.C)(ik, rk.options) && (0, Sk.C)(fk, rk.config)) return rk;
+         throw Me.create("duplicate-app", {
+           appName: bk
+         })
```

#### 49. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L467-L1054` → after: `L724-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L724-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L724-L727) · [Before (L467-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L467-L1054)

```diff
-     }
-     class nQ {
-       constructor(QQ, FQ, wQ, LQ) {
-         let qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-           oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
-           DQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-         this.key = QQ, this.byteOffset = FQ, this.byteStride = wQ, this.size = LQ, this.instanced = qQ, this.type = oQ, this.normalized = DQ
-       }
-       getBuffer() {
-         return this.key
-       }
-       getSize() {
-         return this.size
-       }
-       getIsInstanced() {
-         return this.instanced
- ... (572 more removed lines; see GitHub link above)
+       const Pk = new Dk.c(bk);
+       for (const Dk of ie.values()) Pk.wq(Dk);
+       const mk = new Ke(ik, fk, Pk);
+       return ee.set(bk, mk), mk
```

#### 50. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1074-L1368` → after: `L731-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L731-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L731-L736) · [Before (L1074-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L1074-L1368)

```diff
-       const QQ = iw;
-       return `${Cw(QQ)}${Sw(QQ,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${pw.d}>,\n}\n@group(${QQ.group}) @binding(${QQ.work}) var<uniform> bloxd … [truncated]
-     }
-     const Rw = 2;
-     const Ow = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";
- 
-     function sw(QQ, FQ) {
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
-       const LQ = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${FQ.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y … [truncated]
-         qQ = "trace" === wQ || "lit" === wQ,
-         oQ = "maskEdge" === wQ ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
-         DQ = qQ ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${FQ.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of step … [truncated]
-       return `${LQ}${QQ.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${qQ?function(){const[QQ,FQ,wQ]=pw.r;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif  … [truncated]
-     }
-     const rw = "bloxdSpOwnTexture";
- 
- ... (279 more removed lines; see GitHub link above)
+       let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jk;
+       const ek = ee.get(kk);
+       if (!ek && kk === Jk && (0, Sk.H)()) return ne();
+       if (!ek) throw Me.create("no-app", {
+         appName: kk
+       });
```

#### 51. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1372-L1530` → after: `L740-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L740-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L740-L741) · [Before (L1372-L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L1372-L1530)

```diff
-     function rL(QQ) {
-       return `terrain-${QQ.texture}${"atlas"===QQ.texture?QQ.atlasCount:""}${QQ.animated?"-anim":""}${QQ.alphaTest?"-test":""}${QQ.lighting?"-lit":""}-dir${QQ.dirLightCount}${QQ.packed?"-packed":""}${uL(QQ)?`-sp${QQ.packVariant}`:""}${QQ.liquid?"-liquid":""}${QQ.resting?"-rest":" … [truncated]
-     }
- 
-     function IL(QQ) {
-       let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-         wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
-       const LQ = function(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
-         const wQ = "none" !== QQ.texture,
-           LQ = "atlas" === QQ.texture,
-           qQ = QQ.dirLightCount > 0,
-           oQ = uL(QQ);
-         if (QQ.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${QQ.dirLightCount}`);
-         let DQ = 1,
-           kQ = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
- ... (143 more removed lines; see GitHub link above)
+     function He() {
+       return Array.from(ee.values())
```

#### 52. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1532-L1564` → after: `L743-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L743-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L743-L745) · [Before (L1532-L1564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L1532-L1564)

```diff
-     const XL = {
-         lights: 0,
-         lightStride: 12,
-         fogInfos: 96,
-         fogColour: 100,
-         outputHeight: 103,
-         animTick: 104,
-         timeMs: 105
-       },
-       fL = 256,
-       VL = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) … [truncated]
-       hL = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
-       JL = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
-       EL = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertex … [truncated]
-       nL = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
-       gL = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogC … [truncated]
- ... (17 more removed lines; see GitHub link above)
+     async function we(kk) {
+       const ek = kk.name;
+       ee.has(ek) && (ee.delete(ek), await Promise.all(kk.container.getProviders().map((kk => kk.delete()))), kk.isDeleted = !0)
```

#### 53. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1566-L7276` → after: `L747-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L747-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L747-L756) · [Before (L1566-L7276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L1566-L7276)

```diff
-     _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
-       FQ
-     }.vLightData, diffuse$ {
-       QQ
-     }.rgb, $ {
-       FQ
-     }.vLightSpecular.rgb, diffuse$ {
-       QQ
-     }.a, glossiness);\
-     nshadow = 1.;\
-     naggShadow += shadow;\
-     nnumLights += 1.0;\
-     ndiffuseBase += info.diffuse * shadow;\
-     n #endif`}(FQ))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n … [truncated]
- 
-     function Qq(QQ) {
- ... (5695 more removed lines; see GitHub link above)
+ 
+     function le(kk, ek, ik) {
+       var fk;
+       let Sk = null !== (fk = ke[kk]) && void 0 !== fk ? fk : kk;
+       ik && (Sk += `-${ik}`);
+       const bk = Sk.match(/\s|\//),
+         rk = ek.match(/\s|\//);
+       if (bk || rk) {
+         const kk = [`Unable to register library "${Sk}" with version "${ek}":`];
+         return bk && kk.push(`library name "${Sk}" contains illegal characters (whitespace or "/")`), bk && rk && kk.push("and"), rk && kk.push(`version name "${ek}" contains illegal characters (whitespace or "/")`), void sk.warn(kk.join(" "))
```

#### 54. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7278-L7286` → after: `L758-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L758-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L758-L811) · [Before (L7278-L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7278-L7286)

```diff
-       evictBeyond(QQ, FQ) {
-         const wQ = this.slotDistance(QQ),
-           LQ = [];
-         for (let qQ = 0; qQ < UF; qQ++) qQ !== QQ && this.slotPool[qQ] && this.slotDistance(qQ) > wQ && LQ.push(qQ);
-         LQ.sort(((QQ, FQ) => this.slotDistance(FQ) - this.slotDistance(QQ)));
-         for (const qQ of LQ) {
-           if (this.freeCount >= FQ) return;
-           const QQ = this.slotChunk[qQ];
-           QQ && !QQ.vW && QQ.Sb && (QQ.Ex === this.slotVersion[qQ] || Dv(QQ)) && this.encodeSlot(qQ, this.victimScratch, !1)
+       Se(new Dk.f(`${Sk}-version`, (() => ({
+         library: Sk,
+         version: ek
+       })), "VERSION"))
+     }
+ 
+     function pe(kk, ek) {
+       if (null !== kk && "function" !== typeof kk) throw Me.create("invalid-log-argument");
+       (0, fk.k)(kk, ek)
+     }
+ 
+     function ye(kk) {
+       (0, fk.h)(kk)
+     }
+     const Ye = "firebase-heartbeat-store";
+     let Le = null;
+ ... (38 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7295` → after: `L815-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L815-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L815-L818) · [Before (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7295)

```diff
-     var mv = wQ(37065);
+ 
+     function je(kk) {
+       return `${kk.name}!${kk.options.appId}`
+     }
```

#### 56. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7298-L7396` → after: `L821-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L821-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L821-L851) · [Before (L7298-L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7298-L7396)

```diff
-         this.device = QQ, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Aw, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.nH = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = QQ.createBuffer( … [truncated]
-           label: "sun-shadow-entities",
-           size: 589828,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.gridBuffer = QQ.createBuffer({
-           label: "sun-shadow-entity-grids",
-           size: 16777216,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         })
-       }
-       update(QQ, FQ, wQ) {
-         this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
-         const {
-           frame: LQ
-         } = this;
-         LQ.mY(QQ, FQ), wQ.forEachSunShadowCaster((QQ => {
- ... (83 more removed lines; see GitHub link above)
+         this.container = kk, this._heartbeatsCache = null;
+         const ek = this.container.getProvider("app").getImmediate();
+         this.aH = new Ve(ek), this._heartbeatsCachePromise = this.aH.read().then((kk => (this._heartbeatsCache = kk, kk)))
+       }
+       async triggerHeartbeat() {
+         const kk = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
+           ek = de();
+         if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== ek && !this._heartbeatsCache.heartbeats.some((kk => kk.date === ek))) return this._heartbeatsCache.heartbeats.push({
+           date: ek,
+           agent: kk
+         }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((kk => {
+           const ek = new Date(kk.date).valueOf();
+           return Date.now() - ek <= 2592e6
+         })), this.aH.overwrite(this._heartbeatsCache)
+       }
+       async getHeartbeatsHeader() {
+ ... (15 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7398-L7410` → after: `L853-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L853-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L853-L860) · [Before (L7398-L7410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7398-L7410)

```diff
-                 for (let QQ = tQ[2]; QQ <= eQ[2]; QQ++)
-                   for (let FQ = tQ[1]; FQ <= eQ[1]; FQ++)
-                     for (let wQ = tQ[0]; wQ <= eQ[0]; wQ++)
-                       if (Mw(AQ, bQ[0] + (wQ + .5) * uQ, bQ[1] + (FQ + .5) * uQ, bQ[2] + (QQ + .5) * uQ, uQ / 2)) {
-                         const LQ = wQ + HQ[0] * (FQ + HQ[1] * QQ);
-                         xQ[LQ >>> 5] |= 1 << (31 & LQ)
-                       }
-               } return {
-               words: xQ,
-               lo: bQ,
-               hi: YQ,
-               cell: uQ,
-               dims: HQ
+               } else if (ik.push({
+                   agent: fk.agent,
+                   dates: [fk.date]
+                 }), Fe(ik) > ek) {
+                 ik.pop();
+                 break
+               }
+               Dk = Dk.slice(1)
```

#### 58. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7412-L7423` → after: `L862-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L862-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L862-L871) · [Before (L7412-L7423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7412-L7423)

```diff
-           }((0, mv.l)(oQ, QQ.vertexCount), FQ ? QQ.indexData : null, wQ, LQ, qQ) : null;
-         if (!DQ) return null;
-         const {
-           words: kQ,
-           ...vQ
-         } = DQ;
-         if (this.gridTop + kQ.length > Hw) return void(this.gridsFull = !0);
-         const mQ = this.gridTop;
-         return this.gridTop += kQ.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * mQ, kQ), {
-           ...vQ,
-           at: mQ
-         }
+             return {
+               heartbeatsToSend: ik,
+               unsentEntries: Dk
+             }
+           }(this._heartbeatsCache.heartbeats),
+           Dk = (0, Sk.r)(JSON.stringify({
+             version: 2,
+             heartbeats: ek
+           }));
+         return this._heartbeatsCache.lastSentHeartbeatDate = kk, ik.length > 0 ? (this._heartbeatsCache.heartbeats = ik, await this.aH.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.aH.overwrite(this._heartbeatsCache)), Dk
```

#### 59. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7428-L7442` → after: `L875-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L875-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L875-L876) · [Before (L7428-L7442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7428-L7442)

```diff
-     function bv(QQ, FQ) {
-       return QQ[0] * FQ[0] + QQ[1] * FQ[1] + QQ[2] * FQ[2] < Hv
-     }
-     async function Yv(QQ) {
-       const {
-         pixels: FQ,
-         width: wQ,
-         height: LQ
-       } = await jq(QQ), qQ = new Uint8Array(wQ * LQ);
-       for (let oQ = 0; oQ < qQ.length; oQ++) qQ[oQ] = FQ[4 * oQ + 3];
-       return {
-         width: wQ,
-         height: LQ,
-         alpha: qQ
-       }
+     function de() {
+       return (new Date).toISOString().substring(0, 10)
```

#### 60. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7445-L7490` → after: `L879-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L879-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L879-L880) · [Before (L7445-L7490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7445-L7490)

```diff
-       constructor(QQ, FQ) {
-         this.device = QQ, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(pw.q), this.entities = void 0, this.entityStandIn =  … [truncated]
-           label: "sun-shadow",
-           size: 128,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         }), this.voxelBuffer = QQ.createBuffer({
-           label: "sun-shadow-voxels",
-           size: 4 * hF,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.special = QQ.createBuffer({
-           label: "sun-shadow-special",
-           size: 9568256,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         });
-         const [wQ, LQ, qQ] = pw.r;
-         this.volume = QQ.createTexture({
- ... (30 more removed lines; see GitHub link above)
+       constructor(kk) {
+         this.app = kk, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
```

#### 61. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7492-L7497` → after: `L882-L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L882-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L882-L883) · [Before (L7492-L7497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7492-L7497)

```diff
-       describePendingWork() {
-         var QQ, FQ;
-         const wQ = [];
-         !this.volumePassStarted || this.volumePass || this.volumePassFailed || wQ.push("Lite sun shadow volume pipeline compiling");
-         const LQ = null !== (QQ = null === (FQ = this.casters) || void 0 === FQ ? void 0 : FQ.planesLoading) && void 0 !== QQ ? QQ : 0;
-         return LQ > 0 && wQ.push(`${LQ} Lite sun shadow plane casters loading their textures`), wQ
+       async runIndexedDBEnvironmentCheck() {
+         return !!(0, Sk.cb)() && (0, Sk.rb)().then((() => !0)).catch((() => !1))
```

#### 62. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7499-L7531` → after: `L885-L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L885-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L885-L901) · [Before (L7499-L7531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7499-L7531)

```diff
-       entries() {
-         var QQ, FQ, wQ, LQ;
-         const qQ = RF.u;
-         return [{
-           binding: qQ.uniform,
-           resource: {
-             buffer: this.uniform
-           }
-         }, {
-           binding: qQ.Sb,
-           resource: {
-             buffer: this.voxelBuffer
-           }
-         }, {
-           binding: qQ.special,
-           resource: {
- ... (17 more removed lines; see GitHub link above)
+       async read() {
+         if (await this._canUseIndexedDBPromise) {
+           return await async function(kk) {
+             try {
+               const ek = await Ce();
+               return await ek.transaction(Ye).objectStore(Ye).get(je(kk))
+             } catch (ek) {
+               if (ek instanceof Sk.j) sk.warn(ek.message);
+               else {
+                 const kk = Me.create("idb-get", {
+                   originalErrorMessage: null === ek || void 0 === ek ? void 0 : ek.message
+                 });
+                 sk.warn(kk.message)
+               }
+             }
+           }(this.app) || {
+ ... (1 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7533` → after: `L903-L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L903-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L903-L906) · [Before (L7533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7533)

```diff
-         }]
+         }
+         return {
+           heartbeats: []
+         }
```

#### 64. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7535` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L908) · [Before (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7535)

```diff
-       prepare(QQ, FQ, wQ) {
+       async overwrite(kk) {
```

#### 65. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7537-L7592` → after: `L910-L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L910-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L910-L915) · [Before (L7537-L7592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7537-L7592)

```diff
-         this.entitiesThisFrame = !1;
-         const qQ = null !== (LQ = null === wQ || void 0 === wQ ? void 0 : wQ.sunShadowReach()) && void 0 !== LQ ? LQ : {
-           sunShadow: !1,
-           airShadow: !1
-         };
-         if (!wQ || !qQ.sunShadow && !qQ.airShadow) return void(this.volumeHolds = null);
-         if (QQ.nH.KQQ !== sF) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${QQ.nH.KQQ}; everything is lit.`)));
-         const oQ = this.start(QQ);
-         this.casters.update(QQ.Bb, QQ.Bb.LY.length);
-         const DQ = QQ.Mb;
-         for (let bQ = 0; bQ < 3; bQ++) this.eye[bQ] = FQ[bQ] + DQ[bQ];
-         const kQ = (0, pw.z)(this.eye);
-         this.staleNear = kQ;
-         const vQ = QQ.nH.AA;
-         oQ.update(this.eye, ((QQ, FQ, wQ) => vQ.tA(QQ, FQ, wQ)), 1);
-         const mQ = (0, pw.v)(wQ.MQQ()),
- ... (40 more removed lines; see GitHub link above)
+         if (await this._canUseIndexedDBPromise) {
+           const ik = await this.read();
+           return Ae(this.app, {
+             lastSentHeartbeatDate: null !== (ek = kk.lastSentHeartbeatDate) && void 0 !== ek ? ek : ik.lastSentHeartbeatDate,
+             heartbeats: kk.heartbeats
+           })
```

#### 66. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7596-L7613` → after: `L918-L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L918-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L918-L925) · [Before (L7596-L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7596-L7613)

```diff
-       traceEntities(QQ) {
-         this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, QQ)
-       }
-       computeVolume(QQ, FQ, wQ) {
-         const LQ = this.buildVolumePass();
-         if (!LQ) return void(this.volumeHolds = null);
-         const qQ = (0, pw.y)(this.volumeHolds, QQ);
-         this.volumeHolds = QQ;
-         const oQ = 1 === qQ.length && qQ[0].size.every(((QQ, FQ) => QQ === pw.r[FQ])),
-           DQ = this.sweptChunk,
-           kQ = this.sweptLight,
-           vQ = FQ[0] !== kQ[0] || FQ[1] !== kQ[1] || FQ[2] !== kQ[2],
-           mQ = wQ[0] !== DQ[0] || wQ[1] !== DQ[1] || wQ[2] !== DQ[2],
-           uQ = vQ && bv(FQ, kQ);
-         if ((oQ || this.written || mQ || uQ) && (this.fastLeft = pw.j), oQ || this.written || vQ || mQ) {
-           this.written = !1;
- ... (2 more removed lines; see GitHub link above)
+       async add(kk) {
+         var ek;
+         if (await this._canUseIndexedDBPromise) {
+           const ik = await this.read();
+           return Ae(this.app, {
+             lastSentHeartbeatDate: null !== (ek = kk.lastSentHeartbeatDate) && void 0 !== ek ? ek : ik.lastSentHeartbeatDate,
+             heartbeats: [...ik.heartbeats, ...kk.heartbeats]
+           })
```

#### 67. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7742-L7743` → after: `L930-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L930-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L930-L934) · [Before (L7742-L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7742-L7743)

```diff
-     function cv(QQ, FQ, wQ, LQ) {
-       QQ.drawOffset(FQ, LQ + ev), FQ[LQ + Mv] = QQ.drawTime(), wQ[LQ + Gv] = QQ.ring.drawStart(), wQ[LQ + pv] = QQ.ring.drawCount()
+     function Fe(kk) {
+       return (0, Sk.r)(JSON.stringify({
+         version: 2,
+         heartbeats: kk
+       })).length
```

#### 68. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7745-L7746` → after: `L936-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L936-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L936-L944) · [Before (L7745-L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7745-L7746)

```diff
-     const Cv = `\n${tL}\n\nconst MAX_STOPS = ${tv.e}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${tv.e/4}>,\n\tcolor1: array<vec4f, ${tv.e}>,\n\t … [truncated]
-     var Sv = wQ(41015);
+     var ue;
+     ue = "", Se(new Dk.f("platform-logger", (kk => new Ck(kk)), "PRIVATE")), Se(new Dk.f("heartbeat", (kk => new se(kk)), "PRIVATE")), le(Ak, jk, ue), le(Ak, jk, "esm2017"), le("fire-js", "")
+   },
+   40087: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => rk,
+       f: () => fk
+     });
+     var Dk = ik(40092);
```

#### 69. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7748-L7763` → after: `L946-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L946-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L946-L947) · [Before (L7748-L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7748-L7763)

```diff
-       constructor(QQ, FQ, wQ, LQ) {
-         this.device = QQ, this.system = FQ, this.frameIndex = wQ, this.bindings = LQ, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, Sv.d)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.bou … [truncated]
-           this.device.queue.writeBuffer(this.ring, QQ * tv.f * 4, this.system.ring.records, QQ * tv.f, (FQ - QQ) * tv.f)
-         };
-         const {
-           name: qQ
-         } = FQ;
-         this.ring = QQ.createBuffer({
-           label: `particles-${qQ}`,
-           size: FQ.ring.records.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.uniforms = QQ.createBuffer({
-           label: `particles-uniforms-${qQ}`,
-           size: 4 * tv.r,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
+       constructor(kk, ek, ik) {
+         this.name = kk, this.instanceFactory = ek, this.type = ik, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
```

#### 70. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7765-L7767` → after: `L949-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L949-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L949-L950) · [Before (L7765-L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7765-L7767)

```diff
-       writeUniforms(QQ) {
-         const FQ = (0, Sv.b)(this.system, this.uniformBits, QQ);
-         FQ && (this.uniformBits = FQ, this.device.queue.writeBuffer(this.uniforms, 0, FQ))
+       setInstantiationMode(kk) {
+         return this.instantiationMode = kk, this
```

#### 71. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7769-L7810` → after: `L952-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L952-L953) · [Before (L7769-L7810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7769-L7810)

```diff
-       bind() {
-         const {
-           system: QQ
-         } = this, FQ = this.texture;
-         (0, Sv.g)(QQ, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
-           label: `particles-ramp-${QQ.name}`,
-           size: [tv.k, 1],
-           format: "rgba8unorm",
-           usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
-         }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
-           texture: this.ramp
-         }, this.rampTexels.texels, {
-           bytesPerRow: 4 * tv.k
-         }, [tv.k, 1]));
-         const wQ = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
-         this.bindGroup && this.boundView === FQ.view && this.boundSampler === FQ.sampler && this.boundRamp === wQ || (this.boundView = FQ.view, this.boundSampler = FQ.sampler, this.boundRamp = wQ, this.bindGroup = this.device.createBindGroup({
- ... (26 more removed lines; see GitHub link above)
+       setMultipleInstances(kk) {
+         return this.multipleInstances = kk, this
```

#### 72. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7812-L7814` → after: `L955-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L955-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L955-L959) · [Before (L7812-L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7812-L7814)

```diff
-       destroy() {
-         var QQ;
-         this.ring.destroy(), this.uniforms.destroy(), null === (QQ = this.ramp) || void 0 === QQ || QQ.destroy()
+       setServiceProps(kk) {
+         return this.serviceProps = kk, this
+       }
+       setInstanceCreatedCallback(kk) {
+         return this.onInstanceCreated = kk, this
```

#### 73. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7819-L7904` → after: `L965-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L965-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L965-L976) · [Before (L7819-L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7819-L7904)

```diff
-         this.device = QQ, this.resources = FQ, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(409 … [truncated]
-         const wQ = QQ.createBindGroupLayout({
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
+         this.name = kk, this.container = ek, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
+       }
+       get(kk) {
+         const ek = this.normalizeInstanceIdentifier(kk);
+         if (!this.instancesDeferred.has(ek)) {
+           const kk = new Dk.d;
+           if (this.instancesDeferred.set(ek, kk), this.isInitialized(ek) || this.shouldAutoInitialize()) try {
+             const ik = this.getOrInitializeService({
+               instanceIdentifier: ek
+             });
+             ik && kk.resolve(ik)
+           } catch (ik) {}
```

#### 74. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7907-L7908` → after: `L980-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L980-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L980-L995) · [Before (L7907-L7908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7907-L7908)

```diff
-       get WqQ() {
-         return this.systems.size
+       getImmediate(kk) {
+         var ek;
+         const ik = this.normalizeInstanceIdentifier(null === kk || void 0 === kk ? void 0 : kk.identifier),
+           Dk = null !== (ek = null === kk || void 0 === kk ? void 0 : kk.optional) && void 0 !== ek && ek;
+         if (!this.isInitialized(ik) && !this.shouldAutoInitialize()) {
+           if (Dk) return null;
+           throw Error(`Service ${this.name} is not available`)
+         }
+         try {
+           return this.getOrInitializeService({
+             instanceIdentifier: ik
+           })
+         } catch (fk) {
+           if (Dk) return null;
+           throw fk
+         }
```

#### 75. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7910-L7911` → after: `L997-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L997-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L997-L998) · [Before (L7910-L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7910-L7911)

```diff
-       reset() {
-         for (const QQ of this.systems.keys()) QQ.reset()
+       getComponent() {
+         return this.component
```

#### 76. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7913-L7914` → after: `L1000-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1000-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1000-L1020) · [Before (L7913-L7914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7913-L7914)

```diff
-       describePendingWork() {
-         return (0, Av.g)(this.systems.keys(), "Lite")
+       setComponent(kk) {
+         if (kk.name !== this.name) throw Error(`Mismatching Component ${kk.name} for Provider ${this.name}.`);
+         if (this.component) throw Error(`Component for ${this.name} has already been provided`);
+         if (this.component = kk, this.shouldAutoInitialize()) {
+           if (function(kk) {
+               return "EAGER" === kk.instantiationMode
+             }(kk)) try {
+             this.getOrInitializeService({
+               instanceIdentifier: Sk
+             })
+           } catch (ek) {}
+           for (const [kk, ik] of this.instancesDeferred.entries()) {
+             const Dk = this.normalizeInstanceIdentifier(kk);
+             try {
+               const kk = this.getOrInitializeService({
+                 instanceIdentifier: Dk
+ ... (5 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7916-L7918` → after: `L1022-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1022-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1022-L1024) · [Before (L7916-L7918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7916-L7918)

```diff
-       aT(QQ, FQ) {
-         const wQ = new Av.e(QQ, FQ, this);
-         return this.systems.set(wQ, new iv(this.device, wQ, this.allocateFrameIndex(), this.bindings)), wQ
+       clearInstance() {
+         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sk;
+         this.instancesDeferred.delete(kk), this.instancesOptions.delete(kk), this.instances.delete(kk)
```

#### 78. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7920-L7921` → after: `L1026-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1026-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1026-L1028) · [Before (L7920-L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7920-L7921)

```diff
-       kQQ(QQ, FQ) {
-         for (const wQ of this.systems.keys()) wQ.kQQ(QQ, FQ)
+       async delete() {
+         const kk = Array.from(this.instances.values());
+         await Promise.all([...kk.filter((kk => "INTERNAL" in kk)).map((kk => kk.INTERNAL.delete())), ...kk.filter((kk => "_delete" in kk)).map((kk => kk._delete()))])
```

#### 79. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7923-L7934` → after: `L1030-L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1030-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1030-L1031) · [Before (L7923-L7934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7923-L7934)

```diff
-       canDraw(QQ) {
-         const FQ = this.systems.get(QQ),
-           wQ = QQ.texture ? this.resources.boundTexture(QQ.texture) : null;
-         if (!FQ || !wQ || !this.targetPipelines) return !1;
-         if (FQ.texture = wQ, FQ.pipelines.length = 0, !hq(QQ.blendMode)) return this.warnOnce(`blend:${QQ.blendMode}`, `particle blend mode ${QQ.blendMode} is not drawn (${QQ.name})`), !0;
-         const LQ = (0, rq.l)(QQ.blendMode);
-         for (const qQ of LQ) {
-           const QQ = this.pipelineFor(qQ);
-           if (!1 === QQ) return FQ.pipelines.length = 0, !0;
-           QQ && FQ.pipelines.push(QQ)
-         }
-         return FQ.pipelines.length === LQ.length
+       isComponentSet() {
+         return null != this.component
```

#### 80. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7936-L7937` → after: `L1033-L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1033-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1033-L1035) · [Before (L7936-L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7936-L7937)

```diff
-       disposeStopped(QQ) {
-         QQ.dispose()
+       isInitialized() {
+         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sk;
+         return this.instances.has(kk)
```

#### 81. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7939-L7941` → after: `L1037-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1037-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1037-L1039) · [Before (L7939-L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7939-L7941)

```diff
-       remove(QQ) {
-         const FQ = this.systems.get(QQ);
-         FQ && (this.systems.delete(QQ), FQ.destroy(), this.freeFrameIndices.push(FQ.frameIndex))
+       getOptions() {
+         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sk;
+         return this.instancesOptions.get(kk) || {}
```

#### 82. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7943-L7953` → after: `L1041-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1041-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1041-L1053) · [Before (L7943-L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7943-L7953)

```diff
-       prepare(QQ) {
-         const FQ = QQ.animationRatio || 1;
-         kF(this.renderable._worldCenter, QQ, LF), this.preparedTarget = this.target, this.draws.length = 0;
-         let wQ = 0;
-         for (const LQ of this.systems.values()) {
-           const QQ = LQ.system;
-           if (!QQ.animateIfActive(FQ)) continue;
-           if (QQ.ring.takeUploads(LQ.upload), !QQ.hasLiveParticles() || 0 === LQ.pipelines.length) continue;
-           LQ.writeUniforms(this.warnOnce), LQ.bind();
-           const qQ = 64 * LQ.frameIndex;
-           LQ.count = QQ.ring.drawCount(), cv(QQ, this.frameData, this.frameBits, qQ), wQ = Math.max(wQ, qQ + 64), this.draws.push(LQ)
+       initialize() {
+         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         const {
+           options: ek = {}
+         } = kk, ik = this.normalizeInstanceIdentifier(kk.instanceIdentifier);
+         if (this.isInitialized(ik)) throw Error(`${this.name}(${ik}) has already been initialized`);
+         if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
+         const Dk = this.getOrInitializeService({
+           instanceIdentifier: ik,
+           options: ek
+         });
+         for (const [fk, Sk] of this.instancesDeferred.entries()) {
+           ik === this.normalizeInstanceIdentifier(fk) && Sk.resolve(Dk)
```

#### 83. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7955` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1055) · [Before (L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7955)

```diff
-         wQ > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, wQ)
+         return Dk
```

#### 84. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7957-L7962` → after: `L1057-L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1057-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1057-L1064) · [Before (L7957-L7962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7957-L7962)

```diff
-       draw(QQ) {
-         let FQ = 0,
-           wQ = null;
-         for (const LQ of this.draws) {
-           QQ.setBindGroup(1, LQ.bindGroup), QQ.setBindGroup(2, this.frameBindGroup, [256 * LQ.frameIndex]);
-           for (const qQ of LQ.pipelines) qQ !== wQ && (QQ.setPipeline(qQ), wQ = qQ), QQ.draw(4, LQ.count), FQ++
+       Av(kk, ek) {
+         var ik;
+         const Dk = this.normalizeInstanceIdentifier(ek),
+           fk = null !== (ik = this.onInitCallbacks.get(Dk)) && void 0 !== ik ? ik : new Set;
+         fk.add(kk), this.onInitCallbacks.set(Dk, fk);
+         const Sk = this.instances.get(Dk);
+         return Sk && kk(Sk, Dk), () => {
+           fk.delete(kk)
```

#### 85. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7966-L7970` → after: `L1067-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1067-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1067-L1072) · [Before (L7966-L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7966-L7970)

```diff
-       bindTarget(QQ) {
-         this.target = QQ;
-         const FQ = `${QQ._colorFormat}|${QQ._depthStencilFormat}|${QQ._depthCompare}|${QQ._sampleCount}`;
-         let wQ = this.pipelines.get(FQ);
-         wQ || (wQ = new Map, this.pipelines.set(FQ, wQ)), this.targetPipelines = wQ
+       invokeOnInitCallbacks(kk, ek) {
+         const ik = this.onInitCallbacks.get(ek);
+         if (ik)
+           for (const fk of ik) try {
+             fk(kk, ek)
+           } catch (Dk) {}
```

#### 86. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7972` → after: `L1074-L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1074-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1074-L1084) · [Before (L7972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7972)

```diff
-       pipelineFor(QQ) {
+       getOrInitializeService(kk) {
+         let {
+           instanceIdentifier: ek,
+           options: ik = {}
+         } = kk, Dk = this.instances.get(ek);
+         if (!Dk && this.component && (Dk = this.component.instanceFactory(this.container, {
+             instanceIdentifier: (fk = ek, fk === Sk ? void 0 : fk),
+             options: ik
+           }), this.instances.set(ek, Dk), this.instancesOptions.set(ek, ik), this.invokeOnInitCallbacks(Dk, ek), this.component.onInstanceCreated)) try {
+           this.component.onInstanceCreated(this.container, ek, Dk)
+         } catch (bk) {}
```

#### 87. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L7974-L8021` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1086) · [Before (L7974-L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L7974-L8021)

```diff
-         const wQ = this.targetPipelines,
-           LQ = wQ.get(QQ);
-         if (void 0 !== LQ) return LQ;
-         wQ.set(QQ, null);
-         const qQ = this.target,
-           oQ = QQ === rq.e,
-           DQ = null !== (FQ = qQ._depthCompare) && void 0 !== FQ ? FQ : wF;
-         return this.device.createRenderPipelineAsync({
-           label: `particles-${QQ}`,
-           layout: this.pipelineLayout,
-           vertex: {
-             module: this.module,
-             entryPoint: "mainVertex"
-           },
-           fragment: yQ({
-             module: this.module,
- ... (32 more removed lines; see GitHub link above)
+         return Dk || null
```

#### 88. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8023-L8028` → after: `L1088-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1088-L1090) · [Before (L8023-L8028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8023-L8028)

```diff
-       createFrameBuffer() {
-         return this.device.createBuffer({
-           label: "particles-frames",
-           size: this.frameData.byteLength,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
+       normalizeInstanceIdentifier() {
+         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sk;
+         return this.component ? this.component.multipleInstances ? kk : Sk : kk
```

#### 89. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8030-L8041` → after: `L1092-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1092-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1092-L1093) · [Before (L8030-L8041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8030-L8041)

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

#### 90. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8045-L8097` → after: `L1097-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1097-L1098) · [Before (L8045-L8097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8045-L8097)

```diff
-       constructor(QQ, FQ, wQ, LQ, qQ) {
-         this.lite = QQ, this.canvas = FQ, this.info = wQ, this.resources = qQ, this.SLQ = !1, this.needPOTTextures = !1, this.r_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
-           reset: () => {
-             this.lastFrameTime = null
-           }
-         }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = FQ.width, this.renderHeight = FQ.height, this.caps = {
-           maxTextureSize: LQ.maxTextureDimension2D,
-           texture2DArrayMaxLayerCount: LQ.maxTextureArrayLayers
-         }
-       }
-       getCaps() {
-         return this.caps
-       }
-       getRenderWidth() {
-         return this.renderWidth
-       }
- ... (37 more removed lines; see GitHub link above)
+       constructor(kk) {
+         this.name = kk, this.providers = new Map
```

#### 91. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8099-L8100` → after: `L1100-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1100-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1100-L1103) · [Before (L8099-L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8099-L8100)

```diff
-       getDeltaTime() {
-         return this.deltaTime
+       wq(kk) {
+         const ek = this.getProvider(kk.name);
+         if (ek.isComponentSet()) throw new Error(`Component ${kk.name} has already been registered with ${this.name}`);
+         ek.setComponent(kk)
```

#### 92. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8102-L8104` → after: `L1105-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1105-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1105-L1106) · [Before (L8102-L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8102-L8104)

```diff
-       createCanvas(QQ, FQ) {
-         const wQ = document.createElement("canvas");
-         return wQ.width = QQ, wQ.height = FQ, wQ
+       addOrOverwriteComponent(kk) {
+         this.getProvider(kk.name).isComponentSet() && this.providers.delete(kk.name), this.wq(kk)
```

#### 93. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8106-L8108` → after: `L1108-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1108-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1108-L1111) · [Before (L8106-L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8106-L8108)

```diff
-       T_(QQ, FQ) {
-         var wQ;
-         return null !== (wQ = this.resources.T_.get(QQ)) && void 0 !== wQ ? wQ : new JQ(this.resources, QQ, FQ)
+       getProvider(kk) {
+         if (this.providers.has(kk)) return this.providers.get(kk);
+         const ek = new bk(kk, this);
+         return this.providers.set(kk, ek), ek
```

#### 94. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8110-L8111` → after: `L1113-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1113-L1114) · [Before (L8110-L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8110-L8111)

```diff
-       atlasArray(QQ, FQ, wQ) {
-         return this.resources.atlasArray(QQ, FQ, wQ)
+       getProviders() {
+         return Array.from(this.providers.values())
```

#### 95. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8115-L8116` → after: `L1155-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1155-L1156) · [Before (L8115-L8116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8115-L8116)

```diff
-       constructor() {
-         this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
+       constructor(kk) {
+         this.name = kk, this._logLevel = bk, this._logHandler = Pk, this._userLogHandler = null, Dk.push(this)
```

#### 96. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8118-L8122` → after: `L1158-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1158-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1158-L1159) · [Before (L8118-L8122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8118-L8122)

```diff
-       copyFromView(QQ) {
-         this.fov = QQ.fov, this.nearPlane = QQ.near, this.farPlane = QQ.far;
-         const FQ = QQ.worldMatrix;
-         for (let wQ = 0; wQ < 16; wQ++)
-           if (this.worldMatrix[wQ] !== FQ[wQ]) return this.worldMatrix.set(FQ), void this.worldMatrixVersion++
+       get logLevel() {
+         return this._logLevel
```

#### 97. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8124-L8136` → after: `L1161-L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1161-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1161-L1163) · [Before (L8124-L8136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8124-L8136)

```diff
-     }
-     class sv {
-       constructor(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ) {
-         let uQ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
-         this.engine = QQ, this.lA = FQ, this.sceneTask = wQ, this.gpuDevice = LQ, this.terrain = qQ, this.meshes = oQ, this.particles = DQ, this.resources = kQ, this.sunShadow = uQ, this.FwQ = void 0, this.backendName = "WebGPU (Lite)", this.X3 = void 0, this.modelMeshes = void 0 … [truncated]
-           ym: QQ => {
-             UQ(QQ) && kQ.textureSlot(QQ)
-           },
-           loaded: QQ => UQ(QQ) ? kQ.textureLoaded(QQ) : null,
-           canvasUpdated: (QQ, FQ, wQ) => {
-             UQ(QQ) && kQ.canvasUpdated(QQ, FQ, wQ)
-           }
-         }), this.X3 = oQ.X3, this.modelMeshes = oQ.modelMeshes, FQ.camera = this.camera
+       set logLevel(kk) {
+         if (!(kk in fk)) throw new TypeError(`Invalid value "${kk}" assigned to \`logLevel\``);
+         this._logLevel = kk
```

#### 98. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8138-L8140` → after: `L1165-L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1165-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1165-L1166) · [Before (L8138-L8140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8138-L8140)

```diff
-       get castsEntitySunShadows() {
-         var QQ, FQ;
-         return null !== (QQ = null === (FQ = this.sunShadow) || void 0 === FQ ? void 0 : FQ.tracesEntities) && void 0 !== QQ && QQ
+       setLogLevel(kk) {
+         this._logLevel = "string" === typeof kk ? Sk[kk] : kk
```

#### 99. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8142-L8143` → after: `L1168-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1168-L1169) · [Before (L8142-L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8142-L8143)

```diff
-       get sampleCount() {
-         return this.engine.msaaSamples
+       get logHandler() {
+         return this._logHandler
```

#### 100. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8145-L8150` → after: `L1171-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1171-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1171-L1173) · [Before (L8145-L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8145-L8150)

```diff
-       attach(QQ) {
-         this.modelMeshes.attach(QQ.model, QQ.sceneMirror);
-         const FQ = QQ.lA;
-         this.setClearColour(FQ.clearColor.r, FQ.clearColor.g, FQ.clearColor.b), FQ.draw = () => {
-           this.drawFrame(QQ, FQ)
-         }
+       set logHandler(kk) {
+         if ("function" !== typeof kk) throw new TypeError("Value assigned to `logHandler` must be a function");
+         this._logHandler = kk
```

#### 101. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8152-L8158` → after: `L1175-L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1175-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1175-L1176) · [Before (L8152-L8158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8152-L8158)

```diff
-       render(QQ) {
-         try {
-           this.FwQ.eC(), QQ.lA.render()
-         } catch (FQ) {
-           throw this.refusals.frameFailed(FQ), FQ
-         }
-         this.refusals.frameDrawn()
+       get userLogHandler() {
+         return this._userLogHandler
```

#### 102. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8160-L8161` → after: `L1178-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1178-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1178-L1183) · [Before (L8160-L8161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8160-L8161)

```diff
-       lastFrameDrawCalls() {
-         return this.engine.drawCallCount
+       set userLogHandler(kk) {
+         this._userLogHandler = kk
+       }
+       debug() {
+         for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
+         this._userLogHandler && this._userLogHandler(this, fk.DEBUG, ...ek), this._logHandler(this, fk.DEBUG, ...ek)
```

#### 103. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8163-L8171` → after: `L1185-L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1185-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1185-L1187) · [Before (L8163-L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8163-L8171)

```diff
-       describePendingWork() {
-         var QQ, FQ, wQ, LQ;
-         const qQ = [...this.particles.describePendingWork(), ...null !== (QQ = null === (FQ = this.sunShadow) || void 0 === FQ ? void 0 : FQ.describePendingWork()) && void 0 !== QQ ? QQ : []],
-           oQ = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (wQ = this.terrain.sceneDepth) && void 0 !== wQ && wQ.compiling ? 1 : 0) + (null !== (LQ = this.terrain.shadowMask) && void 0 !== LQ && LQ.compiling ? 1 : 0);
-         oQ > 0 && qQ.push(`${oQ} Lite pipelines compiling`);
-         const DQ = this.terrain.buffersAwaitingVerdict;
-         DQ > 0 && qQ.push(`${DQ} Lite terrain buffers awaiting their out-of-memory verdict`);
-         const kQ = this.resources.texturesLoading;
-         return kQ > 0 && qQ.push(`${kQ} Lite textures loading`), qQ
+       log() {
+         for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
+         this._userLogHandler && this._userLogHandler(this, fk.VERBOSE, ...ek), this._logHandler(this, fk.VERBOSE, ...ek)
```

#### 104. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8173-L8174` → after: `L1189-L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1189-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1189-L1191) · [Before (L8173-L8174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8173-L8174)

```diff
-       prepareTexture(QQ) {
-         return null !== this.resources.boundTexture(QQ) || this.resources.textureFailed(QQ)
+       info() {
+         for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
+         this._userLogHandler && this._userLogHandler(this, fk.INFO, ...ek), this._logHandler(this, fk.INFO, ...ek)
```

#### 105. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8176-L8187` → after: `L1193-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1193-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1193-L1195) · [Before (L8176-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8176-L8187)

```diff
-       drawFrame(QQ, FQ) {
-         var wQ, LQ, qQ, oQ, DQ, kQ;
-         const vQ = Yk(QQ);
-         this.camera.copyFromView(vQ), this.setClearColour(vQ.clearColour[0], vQ.clearColour[1], vQ.clearColour[2]), null === (wQ = this.sunShadow) || void 0 === wQ || wQ.prepare(QQ.dH, vQ.eye, null !== (LQ = QQ.dH.JY) && void 0 !== LQ ? LQ : null), this.terrain.prepare(QQ, vQ), n … [truncated]
-         const mQ = performance.now();
-         this.resources.flushUploads(), null === (kQ = this.sunShadow) || void 0 === kQ || kQ.traceEntities(this.meshes);
-         try {
-           (0, XQ.q)(this.engine, this.lastFrameTime > 0 ? mQ - this.lastFrameTime : 0)
-         } finally {
-           this.resources.endUploadFrame()
-         }
-         this.lastFrameTime = mQ
+       warn() {
+         for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
+         this._userLogHandler && this._userLogHandler(this, fk.WARN, ...ek), this._logHandler(this, fk.WARN, ...ek)
```

#### 106. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8189-L8191` → after: `L1197-L1199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1197-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1197-L1199) · [Before (L8189-L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8189-L8191)

```diff
-       setClearColour(QQ, FQ, wQ) {
-         const LQ = this.lA.clearColor;
-         LQ.r = QQ, LQ.g = FQ, LQ.b = wQ, LQ.a = 1
+       error() {
+         for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
+         this._userLogHandler && this._userLogHandler(this, fk.ERROR, ...ek), this._logHandler(this, fk.ERROR, ...ek)
```

#### 107. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8196-L8199` → after: `L1203-L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1203-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1203-L1206) · [Before (L8196-L8199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8196-L8199)

```diff
-     function Iv(QQ, FQ) {
-       return "object" === typeof QQ && null !== QQ ? Object.assign(QQ, {
-         startStep: FQ
-       }) : QQ
+     function Mk(kk) {
+       Dk.forEach((ek => {
+         ek.setLogLevel(kk)
+       }))
```

#### 108. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8201-L8248` → after: `L1208-L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1208-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1208-L1221) · [Before (L8201-L8248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8201-L8248)

```diff
-     async function Uv(QQ, FQ) {
-       const wQ = await navigator.gpu.requestAdapter({
-         powerPreference: "high-performance"
-       });
-       if (!wQ) throw Iv(new Error("No WebGPU adapter"), "no_adapter");
-       const LQ = wQ.info,
-         qQ = {
-           vendor: (null === LQ || void 0 === LQ ? void 0 : LQ.vendor) || "unknown vendor",
-           renderer: (null === LQ || void 0 === LQ ? void 0 : LQ.architecture) || "unknown renderer",
-           version: (null === LQ || void 0 === LQ ? void 0 : LQ.description) || "unknown version"
-         },
-         oQ = function(QQ) {
-           const FQ = {};
-           for (const wQ in QQ.limits) {
-             const LQ = QQ.limits[wQ];
-             "number" === typeof LQ && (FQ[wQ] = LQ)
- ... (32 more removed lines; see GitHub link above)
+ 
+     function Kk(kk, ek) {
+       for (const ik of Dk) {
+         let Dk = null;
+         ek && ek.level && (Dk = Sk[ek.level]), ik.userLogHandler = null === kk ? null : function(ek, ik) {
+           for (var Sk = arguments.length, bk = new Array(Sk > 2 ? Sk - 2 : 0), rk = 2; rk < Sk; rk++) bk[rk - 2] = arguments[rk];
+           const Pk = bk.map((kk => {
+             if (null == kk) return null;
+             if ("string" === typeof kk) return kk;
+             if ("number" === typeof kk || "boolean" === typeof kk) return kk.toString();
+             if (kk instanceof Error) return kk.message;
+             try {
+               return JSON.stringify(kk)
+             } catch (ek) {
```

#### 109. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L8250-L8271` → after: `L1223-L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1223-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/262.js#L1223-L1229) · [Before (L8250-L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/262.js#L8250-L8271)

```diff
-             }(DQ, QQ))),
-             uQ = new Wv(FQ, kQ);
-           for (const YQ of function(QQ, FQ, wQ) {
-               return [FQ.opaqueRenderable, QQ.opaqueRenderable, QQ.skyLastRenderable, wQ.renderable, FQ.transparentRenderable, QQ.transparentRenderable, QQ.frontRenderable]
-             }(mQ, vQ, uQ)) BQ(DQ, YQ);
-           const HQ = function(QQ) {
-             for (const FQ of dQ(QQ))
-               if ("lA" === FQ.name) return FQ;
-             throw new Error("Lite: the scene has no render task named scene")
-           }(DQ);
-           qQ && vQ.installSceneDepth(HQ, QQ);
-           const bQ = oQ ? new xv(FQ, oQ.entities) : null;
-           vQ.sunShadow = bQ, bQ && null !== oQ && void 0 !== oQ && oQ.entities && (vQ.shadowMask = new sk(FQ, HQ, QQ, vQ));
-           return mQ.sunShadow = bQ, await (0, fQ.h)(DQ), new sv(QQ, DQ, HQ, FQ, vQ, mQ, uQ, kQ, wQ, LQ, bQ)
-         }(DQ, vQ, QQ, qQ, FQ.sceneDepth, FQ.sunShadow);
-         if (null !== mQ) {
- ... (6 more removed lines; see GitHub link above)
+             }
+           })).filter((kk => kk)).join(" ");
+           ik >= (null !== Dk && void 0 !== Dk ? Dk : ek.logLevel) && kk({
+             level: fk[ik].toLowerCase(),
+             message: Pk,
+             args: bk,
+             type: ek.name
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/263.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/263.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2)

#### 1. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L4-L8` → after: `L5-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L5-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L5-L74) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L4-L8)

```diff
-   40407: (QQ, FQ, wQ) => {
-     function LQ(QQ, FQ, wQ) {
-       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(QQ, FQ).getContext("2d", wQ);
-       const LQ = document.createElement("canvas");
-       return LQ.width = QQ, LQ.height = FQ, LQ.getContext("2d", wQ)
+   40106: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       getAnalytics: () => Oe,
+       getGoogleAnalyticsClientId: () => Re,
+       initializeAnalytics: () => ge,
+       isSupported: () => Ge,
+       logEvent: () => Di,
+       setAnalyticsCollectionEnabled: () => ei,
+       setConsent: () => fi,
+       setCurrentScreen: () => Ne,
+       setDefaultEventParameters: () => ii,
+       setUserId: () => Je,
+       setUserProperties: () => ki,
+       settings: () => oe
+     });
+     var Dk = ik(40078),
+ ... (54 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L12-L134` → after: `L105-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L105-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L105-L117) · [Before (L12-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L12-L134)

```diff
-       return QQ.getContext("2d", FQ)
-     }
-     wQ.d(FQ, {
-       b: () => qQ,
-       d: () => LQ
-     })
-   },
-   40338: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => GQ,
-       g: () => xQ,
-       j: () => JQ,
-       m: () => OQ,
-       n: () => rQ,
-       r: () => IQ,
-       s: () => MQ,
- ... (107 more removed lines; see GitHub link above)
+       if (!(kk instanceof IDBDatabase) || ek in kk || "string" !== typeof ek) return;
+       if (Lk.get(ek)) return Lk.get(ek);
+       const ik = ek.replace(/FromIndex$/, ""),
+         Dk = ek !== ik,
+         fk = Yk.includes(ik);
+       if (!(ik in (Dk ? IDBIndex : IDBObjectStore).prototype) || !fk && !yk.includes(ik)) return;
+       const Sk = async function(kk) {
+         const ek = this.transaction(kk, fk ? "readwrite" : "readonly");
+         let Sk = ek.store;
+         for (var bk = arguments.length, rk = new Array(bk > 1 ? bk - 1 : 0), Pk = 1; Pk < bk; Pk++) rk[Pk - 1] = arguments[Pk];
+         return Dk && (Sk = Sk.index(rk.shift())), (await Promise.all([Sk[ik](...rk), fk && ek.done]))[0]
+       };
+       return Lk.set(ek, Sk), Sk
```

#### 3. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L136` → after: `L119-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L119-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L119-L138) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L136)

```diff
-     const kQ = new oQ.d(0);
+     Uk = (kk => ({
+       ...kk,
+       get: (ek, ik, Dk) => Ck(ek, ik) || kk.get(ek, ik, Dk),
+       has: (ek, ik) => !!Ck(ek, ik) || kk.has(ek, ik)
+     }))(Uk);
+     const Ak = "@firebase/installations",
+       jk = "0.6.4",
+       sk = 1e4,
+       dk = `w:${jk}`,
+       Vk = "FIS_v2",
+       Fk = 36e5,
+       uk = {
+         "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
+         "not-registered": "Firebase Installation is not registered.",
+         "installation-not-found": "Firebase Installation not found.",
+         "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
+ ... (4 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L139-L142` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L141) · [Before (L139-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L139-L142)

```diff
-       if (0 === QQ) return kQ;
-       const FQ = new oQ.d(LQ.Ab);
-       for (let wQ = 0; wQ < LQ.Ab; wQ++) FQ[wQ] = QQ >>> 8 * wQ & 255;
-       return FQ
+       return kk instanceof Sk.j && kk.code.includes("request-failed")
```

#### 5. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L144-L166` → after: `L143-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L143-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L143-L178) · [Before (L144-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L144-L166)

```diff
-     class mQ {
-       constructor(QQ, FQ) {
-         this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new DQ(FQ, {
-           ptr: () => QQ.UH(),
-           MH: () => QQ.QDQ(),
-           reserve: FQ => QQ.bDQ(FQ)
-         }), this.net = new DQ(FQ, {
-           ptr: () => QQ.mDQ(),
-           MH: () => QQ.vDQ(),
-           reserve: FQ => QQ.YDQ(FQ)
-         }), this.worker = new DQ(FQ, {
-           ptr: () => QQ.zDQ(),
-           MH: () => QQ.KDQ(),
-           reserve: FQ => QQ.xDQ(FQ)
-         }), this.cmd = new DQ(FQ, {
-           ptr: () => QQ.hoQ(),
- ... (7 more removed lines; see GitHub link above)
+ 
+     function zk(kk) {
+       let {
+         projectId: ek
+       } = kk;
+       return `https://firebaseinstallations.googleapis.com/v1/projects/${ek}/installations`
+     }
+ 
+     function Qk(kk) {
+       return {
+         token: kk.token,
+         requestStatus: 2,
+         expiresIn: (ek = kk.expiresIn, Number(ek.replace("s", "000"))),
+         creationTime: Date.now()
+       };
+       var ek
+ ... (20 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L191-L202` → after: `L182-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L182-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L182-L197) · [Before (L191-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L191-L202)

```diff
-       QQ.forEachWorkerOut(((wQ, qQ, oQ) => {
-         if ((0, LQ.Kd)(wQ)) try {
-           var DQ;
-           null === (DQ = FQ.worldgen) || void 0 === DQ || DQ.take(wQ, oQ)
-         } catch (vQ) {
-           QQ.crash(CQ, vQ)
-         } else try {
-           var kQ;
-           null === (kQ = FQ.mesh) || void 0 === kQ || kQ.take(wQ, qQ, oQ)
-         } catch (vQ) {
-           QQ.crash(IQ, vQ)
-         }
+       let {
+         refreshToken: ik
+       } = ek;
+       const Dk = Ek(kk);
+       return Dk.append("Authorization", function(kk) {
+         return `${Vk} ${kk}`
+       }(ik)), Dk
+     }
+     async function ak(kk) {
+       const ek = await kk();
+       return ek.status >= 500 && ek.status < 600 ? kk() : ek
+     }
+ 
+     function Wk(kk) {
+       return new Promise((ek => {
+         setTimeout(ek, kk)
```

#### 7. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L205` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L200) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L205)

```diff
-     const NQ = 1048576;
+     const tk = /^[cdef][\w-]{21}$/;
```

#### 8. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L207-L213` → after: `L202-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L202-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L202-L213) · [Before (L207-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L207-L213)

```diff
-     function TQ(QQ, FQ) {
-       let wQ = !1;
-       const LQ = () => {
-         wQ = !1, FQ()
-       };
-       return () => {
-         !wQ && QQ.cursor >= NQ && (wQ = !0, queueMicrotask(LQ))
+     function Xk() {
+       try {
+         const kk = new Uint8Array(17);
+         (self.crypto || self.msCrypto).getRandomValues(kk), kk[0] = 112 + kk[0] % 16;
+         const ek = function(kk) {
+           const ek = (ik = kk, btoa(String.fromCharCode(...ik)).replace(/\+/g, "-").replace(/\//g, "_"));
+           var ik;
+           return ek.substr(0, 22)
+         }(kk);
+         return tk.test(ek) ? ek : ""
+       } catch (kk) {
+         return ""
```

#### 9. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L219` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L218) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L219)

```diff
-       return sQ.has(QQ.site) ? QQ.error instanceof WebAssembly.RuntimeError || (0, qQ.k)(QQ.error) : !KQ.has(QQ.site) && QQ.error instanceof Error
+       return `${kk.appName}!${kk.appId}`
```

#### 10. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L221-L226` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L220) · [Before (L221-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L221-L226)

```diff
-     const lQ = "events",
-       jQ = [],
-       aQ = "debugLog",
-       XQ = "terrainTextures",
-       fQ = "sunShadowTextures",
-       VQ = new TextDecoder;
+     const ck = new Map;
```

#### 11. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L229-L242` → after: `L223-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L223-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L223-L232) · [Before (L229-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L229-L242)

```diff
-       const {
-         site: wQ,
-         error: qQ,
-         header: oQ
-       } = QQ, DQ = oQ ? (0, LQ.Dd)(oQ.lastError) : "noFrame", kQ = `CORE-${wQ===AQ?DQ:wQ}`, vQ = null === qQ || void 0 === qQ ? "" : ` ${(0,uQ.k)(qQ)}`, mQ = {
-         site: wQ,
-         wasmBuild: FQ.wasm,
-         clientVersion: FQ.client
-       };
-       return oQ && (mQ.status = String(oQ.status), mQ.lastError = DQ, mQ.lastErrorCode = String(oQ.lastError), mQ.lastErrorDetail = String(oQ.lastErrorDetail), mQ.errorCount = String(oQ.errorCount), mQ.frameIndex = String(oQ.frameIndex), mQ.tickIndex = String(oQ.tickIndex)), {
-         code: kQ,
-         message: `core ${wQ}, last error ${DQ};${vQ}`,
-         details: mQ
-       }
+       const ik = Bk(kk);
+       Zk(ik, ek),
+         function(kk, ek) {
+           const ik = gk();
+           ik && ik.postMessage({
+             key: kk,
+             fid: ek
+           });
+           Gk()
+         }(ik, ek)
```

#### 12. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L244-L268` → after: `L234-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L234-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L234-L271) · [Before (L244-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L244-L268)

```diff
-     class JQ {
-       constructor(QQ, FQ, wQ) {
-         this.core = QQ, this.memory = FQ, this.handlers = wQ, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = nu … [truncated]
-           ptr: 0,
-           len: 0,
-           net: jQ,
-           netOffsets: this.netOffsets,
-           kind: "none"
-         }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new mQ(QQ, FQ)
-       }
-       get netKeptFrames() {
-         return this.keptFrames
-       }
-       get netWrittenSinceFrame() {
-         return this.rings.net.cursor - this.netKept
-       }
- ... (9 more removed lines; see GitHub link above)
+ 
+     function Zk(kk, ek) {
+       const ik = ck.get(kk);
+       if (ik)
+         for (const Dk of ik) Dk(ek)
+     }
+     let Ok = null;
+ 
+     function gk() {
+       return !Ok && "BroadcastChannel" in self && (Ok = new BroadcastChannel("[Firebase] FID Change"), Ok.onmessage = kk => {
+         Zk(kk.data.key, kk.data.fid)
+       }), Ok
+     }
+ 
+     function Gk() {
+       0 === ck.size && Ok && (Ok.close(), Ok = null)
+ ... (22 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L271-L278` → after: `L387-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L387-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L387-L391) · [Before (L271-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L271-L278)

```diff
-       get isStopped() {
-         return this.stopped
-       }
-       frame(QQ, FQ) {
-         var wQ;
-         let oQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (this.stopped) return !1;
-         if (!this.writePendingInput()) return !1;
+     }
+     async function fe(kk) {
+       let ek = await Se(kk.appConfig);
+       for (; 1 === ek.registrationStatus;) await Wk(100), ek = await Se(kk.appConfig);
+       if (0 === ek.registrationStatus) {
```

#### 14. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L280-L333` → after: `L393-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L393-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L393-L396) · [Before (L280-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L280-L333)

```diff
-           input: DQ,
-           net: kQ,
-           worker: vQ,
-           cmd: mQ
-         } = this.rings, uQ = kQ.cursor, HQ = FQ && !this.drawsHeld;
-         let tQ = LQ.G.Fatal;
-         const eQ = mQ.cursor;
-         let GQ = null;
-         try {
-           const FQ = (HQ ? LQ.S.Draws : 0) | (oQ ? LQ.S.NetAll : 0);
-           tQ = (0, YQ.c)((() => this.core.frame(QQ, DQ.cursor, kQ.cursor, vQ.cursor, FQ, eQ)))
-         } catch (KQ) {
-           GQ = {
-             error: KQ
-           }
-         }
- ... (38 more removed lines; see GitHub link above)
+           installationEntry: ek,
+           registrationPromise: ik
+         } = await De(kk);
+         return ik || ek
```

#### 15. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L335-L342` → after: `L398-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L398-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L398-L437) · [Before (L335-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L335-L342)

```diff
-       handEnvEvents() {
-         for (const oQ of this.graceEvents) {
-           if (this.stopped) return !1;
-           try {
-             var QQ, FQ;
-             null === (QQ = (FQ = this.handlers).onReconnectGrace) || void 0 === QQ || QQ.call(FQ, oQ)
-           } catch (qQ) {
-             return this.crashOn(iQ, qQ), !1
+       return ek
+     }
+ 
+     function Se(kk) {
+       return ie(kk, (kk => {
+         if (!kk) throw qk.create("installation-not-found");
+         return be(kk)
+       }))
+     }
+ 
+     function be(kk) {
+       return 1 === (ek = kk).registrationStatus && ek.registrationTime + sk < Date.now() ? {
+         fid: kk.fid,
+         registrationStatus: 0
+       } : kk;
+       var ek
+ ... (24 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L345-L351` → after: `L499-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L499-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L499-L509) · [Before (L345-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L345-L351)

```diff
-         for (const oQ of this.envEvents) {
-           if (this.stopped) return !1;
-           try {
-             var wQ, LQ;
-             null === (wQ = (LQ = this.handlers).onEnvEvent) || void 0 === wQ || wQ.call(LQ, oQ)
-           } catch (qQ) {
-             return this.crashOn(WQ, qQ), !1
+       }));
+       return ek ? await ek : Dk.authToken
+     }
+ 
+     function me(kk) {
+       return ie(kk, (kk => {
+         if (!Me(kk)) throw qk.create("not-registered");
+         const ek = kk.authToken;
+         return 1 === (ik = ek).requestStatus && ik.requestTime + sk < Date.now() ? Object.assign(Object.assign({}, kk), {
+           authToken: {
+             requestStatus: 0
```

#### 17. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L353-L360` → after: `L511-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L511-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L511-L522) · [Before (L353-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L353-L360)

```diff
-         }
-         return !this.stopped
-       }
-       setEventWalker(QQ) {
-         this.eventWalker = QQ
-       }
-       writePendingInput() {
-         if (this.stopped) return !1;
+         }) : kk;
+         var ik
+       }))
+     }
+ 
+     function Me(kk) {
+       return void 0 !== kk && 2 === kk.registrationStatus
+     }
+     async function Ke(kk) {
+       let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       const ik = kk;
+       await async function(kk) {
```

#### 18. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L362-L379` → after: `L524-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L524-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L524-L549) · [Before (L362-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L362-L379)

```diff
-           input: QQ
-         } = this.rings;
-         try {
-           const FQ = this.unsentUiPrefs;
-           FQ && QQ.writeRecord(LQ.fb.UiPrefs, 0, FQ.nametagCutDistance, 0, (0, LQ.ae)(FQ)) && (this.unsentUiPrefs = null);
-           const wQ = this.unsentEnvPrefs;
-           wQ && QQ.writeRecord(LQ.fb.EnvPrefs, (0, LQ.Hd)(wQ), wQ.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
-           const qQ = this.unsentLookPrefs;
-           qQ && QQ.writeRecord(LQ.fb.Sensitivity, 0, qQ.mouse, qQ.touch, (0, HQ.i)(qQ.fovPercent)) && (this.unsentLookPrefs = null);
-           let oQ = 0;
-           for (const {
-               aux: LQ,
-               payload: DQ
-             }
-             of this.unsentOptions) {
-             if (!QQ.writeOptions(LQ, DQ)) {
- ... (2 more removed lines; see GitHub link above)
+           registrationPromise: ek
+         } = await De(kk);
+         ek && await ek
+       }(ik);
+       return (await Pe(ik, ek)).token
+     }
+ 
+     function xe(kk) {
+       return qk.create("missing-app-config-values", {
+         valueName: kk
+       })
+     }
+     const ne = "installations",
+       Ue = kk => {
+         const ek = kk.getProvider("app").getImmediate(),
+           ik = function(kk) {
+ ... (10 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L381-L385` → after: `L551-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L551-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L551-L556) · [Before (L381-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L381-L385)

```diff
-             oQ++
-           }
-           oQ > 0 && this.unsentOptions.splice(0, oQ)
-         } catch (FQ) {
-           return this.crash(eQ, FQ), !1
+           }(ek);
+         return {
+           app: ek,
+           appConfig: ik,
+           heartbeatServiceProvider: (0, Dk.z)(ek, "heartbeat"),
+           _delete: () => Promise.resolve()
```

#### 20. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L387-L399` → after: `L558-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L558-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L558-L571) · [Before (L387-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L387-L399)

```diff
-         return !0
-       }
-       setHoldDraws(QQ) {
-         this.drawsHeld = QQ
-       }
-       setUiPrefs(QQ) {
-         this.unsentUiPrefs = {
-           ...QQ
-         }
-       }
-       setEnvPrefs(QQ) {
-         this.unsentEnvPrefs = {
-           ...QQ
+       },
+       He = kk => {
+         const ek = kk.getProvider("app").getImmediate(),
+           ik = (0, Dk.z)(ek, ne).getImmediate();
+         return {
+           getId: () => async function(kk) {
+             const ek = kk,
+               {
+                 installationEntry: ik,
+                 registrationPromise: Dk
+               } = await De(ek);
+             return Dk ? Dk.catch(console.error) : Pe(ek).catch(console.error), ik.fid
+           }(ik),
+           getToken: kk => Ke(ik, kk)
```

#### 21. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L402-L404` → after: `L601-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L601-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L601-L674) · [Before (L402-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L402-L404)

```diff
-       setLookPrefs(QQ) {
-         this.unsentLookPrefs = {
-           ...QQ
+       return kk
+     }
+ 
+     function Ce(kk) {
+       return Promise.all(kk.map((kk => kk.catch((kk => kk)))))
+     }
+ 
+     function Ae(kk, ek) {
+       const ik = function(kk, ek) {
+           let ik;
+           return window.trustedTypes && (ik = window.trustedTypes.createPolicy(kk, ek)), ik
+         }("firebase-js-sdk-policy", {
+           createScriptURL: Le
+         }),
+         Dk = document.createElement("script"),
+         fk = `${le}?l=${kk}&id=${ek}`;
+ ... (58 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L407-L449` → after: `L677-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L677-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L677-L682) · [Before (L407-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L407-L449)

```diff
-       queueOptions(QQ, FQ) {
-         return !this.isStopped && (FQ.byteLength > LQ.Ob.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
-           aux: QQ,
-           payload: FQ
-         }), !0))
-       }
-       setChunkCap(QQ) {
-         return this.callCore("setChunkCap", null, (FQ => FQ.pDQ(QQ)))
-       }
-       shedMemory(QQ) {
-         const FQ = this.callCore("shedMemory", null, (FQ => FQ.ODQ(QQ)));
-         return 0 === FQ ? null : FQ
-       }
-       addDistanceInUse() {
-         const QQ = this.callCore("addDistanceInUse", null, (QQ => QQ.zoQ()));
-         return 0 === QQ ? null : QQ
- ... (27 more removed lines; see GitHub link above)
+     }
+     const se = new class {
+       constructor() {
+         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
+           ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
+         this.throttleMetadata = kk, this.intervalMillis = ek
```

#### 23. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L451-L452` → after: `L684-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L684-L685) · [Before (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L451-L452)

```diff
-       setTextureLayers(QQ) {
-         return this.callCore("setTextureLayers", !1, (FQ => FQ.RDQ(QQ)))
+       getThrottleMetadata(kk) {
+         return this.throttleMetadata[kk]
```

#### 24. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L454-L460` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L687-L688) · [Before (L454-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L454-L460)

```diff
-       setBlockColours(QQ) {
-         let {
-           blocks: FQ,
-           counts: wQ,
-           values: LQ
-         } = QQ;
-         return this.callCore("setBlockColours", !1, (QQ => QQ.tLQ(FQ, wQ, LQ)))
+       setThrottleMetadata(kk, ek) {
+         this.throttleMetadata[kk] = ek
```

#### 25. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L462-L463` → after: `L690-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L690-L691) · [Before (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L462-L463)

```diff
-       terrainTextureNames() {
-         return this.callCore(XQ, [], (QQ => QQ.TDQ()))
+       deleteThrottleMetadata(kk) {
+         delete this.throttleMetadata[kk]
```

#### 26. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L465-L478` → after: `L693-L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L693-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L693-L758) · [Before (L465-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L465-L478)

```diff
-       setTerrainTextures(QQ, FQ, wQ, LQ) {
-         return this.callCore(XQ, !1, (qQ => qQ.WDQ(QQ, wQ, FQ, LQ)))
-       }
-       setShaderPack(QQ, FQ, wQ, LQ, qQ, oQ) {
-         return this.callCore("setShaderPack", !1, (DQ => {
-           var kQ, vQ;
-           return null !== (kQ = null === (vQ = DQ.rLQ) || void 0 === vQ ? void 0 : vQ.call(DQ, QQ, FQ, wQ, LQ, qQ, oQ)) && void 0 !== kQ && kQ
-         }))
-       }
-       sunShadowWantedTextures() {
-         return this.callCore(fQ, null, (QQ => {
-           var FQ, wQ;
-           return null !== (FQ = null === (wQ = QQ.sDQ) || void 0 === wQ ? void 0 : wQ.call(QQ)) && void 0 !== FQ ? FQ : null
-         }))
+     };
+ 
+     function de(kk) {
+       return new Headers({
+         Accept: "application/json",
+         "x-goog-api-key": kk
+       })
+     }
+     async function Ve(kk) {
+       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : se,
+         ik = arguments.length > 2 ? arguments[2] : void 0;
+       const {
+         appId: Dk,
+         apiKey: fk,
+         measurementId: Sk
+       } = kk.options;
+ ... (50 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L480-L481` → after: `L760-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L760-L761) · [Before (L480-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L480-L481)

```diff
-       setSunShadowTexture(QQ, FQ, wQ, LQ, qQ) {
-         this.callCore(fQ, void 0, (oQ => {
+       try {
+         const ek = await async function(kk) {
```

#### 28. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L483-L596` → after: `L763-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L763-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L763-L778) · [Before (L483-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L483-L596)

```diff
-           null === (DQ = oQ.iDQ) || void 0 === DQ || DQ.call(oQ, QQ, FQ, wQ, LQ, qQ)
-         }))
-       }
-       takeSunShadowWarnings() {
-         return this.callCore(fQ, [], (QQ => {
-           var FQ, wQ;
-           return null !== (FQ = null === (wQ = QQ.IDQ) || void 0 === wQ ? void 0 : wQ.call(QQ)) && void 0 !== FQ ? FQ : []
-         }))
-       }
-       sunShadowsHeld() {
-         return this.callCore(fQ, null, (QQ => {
-           var FQ, wQ;
-           return null !== (FQ = null === (wQ = QQ.rDQ) || void 0 === wQ ? void 0 : wQ.call(QQ)) && void 0 !== FQ ? FQ : null
-         }))
-       }
-       callCore(QQ, FQ, wQ) {
- ... (98 more removed lines; see GitHub link above)
+           const {
+             appId: ik,
+             apiKey: Dk
+           } = kk, fk = {
+             method: "GET",
+             headers: de(Dk)
+           }, Sk = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", ik), bk = await fetch(Sk, fk);
+           if (200 !== bk.status && 304 !== bk.status) {
+             let kk = "";
+             try {
+               const ik = await bk.json();
+               (null === (ek = ik.error) || void 0 === ek ? void 0 : ek.message) && (kk = ik.error.message)
+             } catch (rk) {}
+             throw Ye.create("config-fetch-failed", {
+               httpStatus: bk.status,
+               responseMessage: kk
```

#### 29. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L599` → after: `L781-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L781-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L781-L795) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L599)

```diff
-           uQ = QQ + (0, LQ.Yd)(vQ)
+           return bk.json()
+         }(kk);
+         return bk.deleteThrottleMetadata(Pk), ek
+       } catch (Mk) {
+         const ek = Mk;
+         if (! function(kk) {
+             if (!(kk instanceof Sk.j) || !kk.customData) return !1;
+             const ek = Number(kk.customData.httpStatus);
+             return 429 === ek || 500 === ek || 503 === ek || 504 === ek
+           }(ek)) {
+           if (bk.deleteThrottleMetadata(Pk), mk) return pe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${mk} provided in the "measurementId" field in the local Firebase config. [${null===ek||void 0===ek?void 0:ek.me … [truncated]
+             appId: Pk,
+             measurementId: mk
+           };
+           throw Mk
```

#### 30. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L601-L607` → after: `L797-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L797-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L797-L802) · [Before (L601-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L601-L607)

```diff
-         return oQ
-       }
-       forEachNetOut(QQ) {
-         this.forEachOut(pQ, "net-out", LQ.Y.NetOutPtr, LQ.Y.NetOutLen, LQ.Db, 0, ((FQ, wQ, qQ, oQ) => {
-           const DQ = (0, LQ.Pd)(wQ);
-           DQ === LQ.Hb.Frame ? QQ((0, LQ.Ld)(wQ), qQ) : this.crash(pQ, `net-out record at ${oQ} is kind ${DQ}, not a frame`)
-         }))
+         const Dk = 503 === Number(null === (rk = null === ek || void 0 === ek ? void 0 : ek.customData) || void 0 === rk ? void 0 : rk.httpStatus) ? (0, Sk.v)(fk, bk.intervalMillis, 30) : (0, Sk.v)(fk, bk.intervalMillis),
+           Kk = {
+             throttleEndTimeMillis: Date.now() + Dk,
+             backoffCount: fk + 1
+           };
+         return bk.setThrottleMetadata(Pk, Kk), pe.debug(`Calling attemptFetch again in ${Dk} millis`), Fe(kk, Kk, ik, bk)
```

#### 31. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L609-L614` → after: `L804-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L804-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L804-L807) · [Before (L609-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L609-L614)

```diff
-       forEachWorkerOut(QQ) {
-         this.forEachOut(cQ, "worker-out", LQ.Y.WorkerOutPtr, LQ.Y.WorkerOutLen, LQ.hd, 4, ((FQ, wQ, qQ, oQ) => {
-           const DQ = 255 & FQ,
-             kQ = DQ === LQ.td.Init ? this.initOf(qQ, oQ) : qQ;
-           null !== kQ && QQ(DQ, FQ >>> 8 & 16777215, kQ)
-         }))
+     }
+     class ue {
+       constructor() {
+         this.listeners = []
```

#### 32. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L616-L622` → after: `L809-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L809-L810) · [Before (L616-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L616-L622)

```diff
-       initOf(QQ, FQ) {
-         const wQ = this.memory().buffer;
-         if (QQ.byteLength !== LQ.$) return this.crash(cQ, `worker-out Init record at ${FQ} is ${QQ.byteLength} bytes, not a view`), null;
-         const qQ = new DataView(QQ.buffer, QQ.byteOffset, LQ.$),
-           oQ = qQ.getUint32(0, !0),
-           DQ = qQ.getUint32(4, !0);
-         return oQ + DQ > wQ.byteLength ? (this.crash(cQ, `worker-out Init record at ${FQ} names ${DQ} bytes at ${oQ} outside ${wQ.byteLength} bytes of memory`), null) : new Uint8Array(wQ, oQ, DQ)
+       addEventListener(kk) {
+         this.listeners.push(kk)
```

#### 33. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L624-L640` → after: `L812-L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L812-L813) · [Before (L624-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L624-L640)

```diff
-       forEachOut(QQ, FQ, wQ, qQ, oQ, DQ, kQ) {
-         if (this.stopped || null === this.lastHeader) return;
-         const vQ = this.headerView(),
-           mQ = vQ[wQ],
-           uQ = vQ[qQ];
-         if (0 === uQ) return;
-         const HQ = this.memory().buffer;
-         if (mQ % 4 !== 0 || mQ + uQ > HQ.byteLength) return void this.crash(QQ, `${FQ} of ${uQ} bytes at ${mQ} outside ${HQ.byteLength} bytes of memory`);
-         const bQ = new DataView(HQ, mQ, uQ);
-         let YQ = 0;
-         for (; YQ < uQ;) {
-           const wQ = YQ + oQ,
-             qQ = wQ <= uQ ? bQ.getUint32(YQ + DQ, !0) : -1;
-           if (qQ < 0 || qQ > uQ - wQ) return void this.crash(QQ, `${FQ} record at ${YQ} overruns its ${uQ} bytes`);
-           if (kQ(bQ.getUint32(YQ, !0), bQ.getUint32(YQ + 4, !0), new Uint8Array(HQ, mQ + wQ, qQ), YQ), this.stopped) return;
-           YQ = wQ + (0, LQ.Yd)(qQ)
- ... (1 more removed lines; see GitHub link above)
+       abort() {
+         this.listeners.forEach((kk => kk()))
```

#### 34. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L642-L657` → after: `L815-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L815-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L815-L840) · [Before (L642-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L642-L657)

```diff
-       forEachEvent(QQ) {
-         if (this.stopped || null === this.lastHeader) return;
-         const FQ = this.headerView(),
-           wQ = FQ[LQ.Y.EventsPtr],
-           qQ = FQ[LQ.Y.EventsLen];
-         if (0 === qQ) return;
-         const oQ = this.memory().buffer;
-         if (wQ % 4 !== 0 || wQ + qQ > oQ.byteLength) return void this.crash(lQ, `events of ${qQ} bytes at ${wQ} outside ${oQ.byteLength} bytes of memory`);
-         const DQ = new DataView(oQ, wQ, qQ);
-         let kQ = 0;
-         for (; kQ < qQ;) {
-           const FQ = kQ + LQ.L,
-             wQ = FQ <= qQ ? DQ.getUint32(kQ, !0) : -1,
-             oQ = wQ >>> 16;
-           if (wQ < 0 || oQ > qQ - FQ) return void this.crash(lQ, `event record at ${kQ} overruns its ${qQ} bytes`);
-           QQ(65535 & wQ, DQ, FQ, oQ), kQ = FQ + (0, LQ.Yd)(oQ)
+     }
+     let qe, Ie;
+ 
+     function ze(kk) {
+       Ie = kk
+     }
+ 
+     function Qe(kk) {
+       qe = kk
+     }
+     async function ve(kk, ek, ik, Dk, fk, bk, rk) {
+       var Pk;
+       const mk = Ve(kk);
+       mk.then((ek => {
+         ik[ek.measurementId] = ek.appId, kk.options.measurementId && ek.measurementId !== kk.options.measurementId && pe.warn(`The measurement ID in the local Firebase config (${kk.options.measurementId}) does not match the measurement ID fetched from the server (${ek.measurement … [truncated]
+       })).catch((kk => pe.error(kk))), ek.push(mk);
+ ... (10 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L660-L680` → after: `L857-L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L857-L858) · [Before (L660-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L660-L680)

```diff
-       crashOn(QQ, FQ) {
-         FQ instanceof qQ.b ? this.crash(lQ, FQ.message) : this.crash(QQ, FQ)
-       }
-       crash(QQ, FQ) {
-         this.stopped || (this.stopped = !0, this.handlers.onCrash({
-           site: QQ,
-           error: FQ,
-           header: this.lastHeader
-         }))
-       }
-       headerWord(QQ) {
-         return this.stopped || null === this.lastHeader ? 0 : this.headerView()[QQ]
-       }
-       readLoadCounts(QQ) {
-         if (this.stopped || null === this.lastHeader) return !1;
-         const FQ = this.core.st();
- ... (5 more removed lines; see GitHub link above)
+       _delete() {
+         return delete he[this.app.options.appId], Promise.resolve()
```

#### 36. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L682-L684` → after: `L860-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L860-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L860-L911) · [Before (L682-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L682-L684)

```diff
-       headerView() {
-         const QQ = this.memory().buffer;
-         return QQ !== this.headerBuffer && (this.headerBuffer = QQ, this.header = new Uint32Array(QQ, this.core.uY(), LQ.U)), this.header
+     }
+     let he = {},
+       ae = [];
+     const We = {};
+     let te, Xe, Be = "dataLayer",
+       ce = "gtag",
+       Te = !1;
+ 
+     function oe(kk) {
+       if (Te) throw Ye.create("already-initialized");
+       kk.dataLayerName && (Be = kk.dataLayerName), kk.gtagName && (ce = kk.gtagName)
+     }
+ 
+     function Ze(kk, ek, ik) {
+       ! function() {
+         const kk = [];
+ ... (36 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L697-L699` → after: `L925-L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L925-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L925-L939) · [Before (L697-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L697-L699)

```diff
-       qQ = {
-         scanned: !1
-       };
+       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const ik = (0, Dk.z)(kk, we);
+       if (ik.isInitialized()) {
+         const kk = ik.getImmediate();
+         if ((0, Sk.C)(ek, ik.getOptions())) return kk;
+         throw Ye.create("already-initialized")
+       }
+       return ik.initialize({
+         options: ek
+       })
+     }
+     async function Ge() {
+       if ((0, Sk.W)()) return !1;
+       if (!(0, Sk.n)()) return !1;
+       if (!(0, Sk.cb)()) return !1;
```

#### 38. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L701-L703` → after: `L941-L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L941-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L941-L943) · [Before (L701-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L701-L703)

```diff
-         return QQ()
-       } finally {
-         qQ = null
+         return await (0, Sk.rb)()
+       } catch (kk) {
+         return !1
```

#### 39. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L707-L711` → after: `L947-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L947-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/263.js#L947-L992) · [Before (L707-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/263.js#L707-L711)

```diff
-     function DQ() {
-       const QQ = qQ;
-       if (null === QQ) return (0, LQ.c)();
-       const FQ = (0, LQ.c)(!QQ.scanned);
-       return QQ.scanned = !0, FQ
+     function Ne(kk, ek, ik) {
+       kk = (0, Sk.Q)(kk), async function(kk, ek, ik, Dk) {
+         if (Dk && Dk.global) return kk("set", {
+           screen_name: ik
+         }), Promise.resolve();
+         kk("config", await ek, {
+           update: !0,
+           screen_name: ik
+         })
+       }(Xe, he[kk.app.options.appId], ek, ik).catch((kk => pe.error(kk)))
+     }
+     async function Re(kk) {
+       return kk = (0, Sk.Q)(kk), async function(kk, ek) {
+         const ik = await ek;
+         return new Promise(((ek, Dk) => {
+           kk("get", ik, "client_id", (kk => {
+ ... (30 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/264.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/264.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6)

#### 1. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4-L75` → after: `L5-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L5-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/264.js#L5-L389) · [Before (L4-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/264.js#L4-L75)

```diff
-   40469: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       BloxdInformation: () => YQ
-     });
-     var LQ = wQ(1207),
-       qQ = wQ(53),
-       oQ = wQ(96),
-       DQ = wQ(1451),
-       kQ = wQ(134),
-       vQ = wQ(1079),
-       mQ = wQ(1107);
-     const uQ = (0, qQ.lazy)((() => wQ.e(117).then((() => wQ(6344))))),
-       HQ = (0, qQ.lazy)((() => wQ.e(118).then((() => wQ(6353)))));
- 
-     function bQ() {
-       return (0, mQ.jsxs)("div", {
- ... (56 more removed lines; see GitHub link above)
+     40111: (kk, ek, ik) => {
+         ik.r(ek), ik.d(ek, {
+           ActionCodeOperation: () => xk,
+           ActionCodeURL: () => Re,
+           AuthCredential: () => We,
+           AuthErrorCodes: () => lk,
+           EmailAuthCredential: () => Ze,
+           EmailAuthProvider: () => ki,
+           FacebookAuthProvider: () => fi,
+           FactorId: () => Pk,
+           GithubAuthProvider: () => bi,
+           GoogleAuthProvider: () => Si,
+           OAuthCredential: () => ge,
+           OAuthProvider: () => Di,
+           OperationType: () => Kk,
+           PhoneAuthCredential: () => Ne,
+ ... (369 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L77-L93` → after: `L391-L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L391-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/264.js#L391-L848) · [Before (L77-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/264.js#L77-L93)

```diff
-         }), (0, mQ.jsx)("p", {
-           children: "A: Yes, as long as you follow the rules laid out with respect to the exploit you are reporting. I.e. don't abuse or share the exploit, etc."
-         })]
-       })
-     }
- 
-     function YQ() {
-       const {
-         t: QQ
-       } = (0, LQ.y)(), [FQ, wQ] = (0, qQ.useState)("partnersAndCredits"), YQ = {
-         partnersAndCredits: {
-           title: oQ.featureFlags.usePartnerLinks ? QQ("homePage:partnersAndCredits") : QQ("homePage:credits"),
-           content: (0, mQ.jsxs)(mQ.Fragment, {
-             children: [(0, mQ.jsx)("div", {
-               className: "BloxdInformationHeader FullyFancyText",
-               children: oQ.featureFlags.usePartnerLinks ? QQ("homePage:partnersAndCredits") : QQ("homePage:credits")
- ... (1 more removed lines; see GitHub link above)
+         }
+ 
+         function Ak(kk, ek, ik) {
+           if (!(ek instanceof ik)) throw ik.name !== ek.constructor.name && Yk(kk, "argument-error"), Ck(kk, "argument-error", `Type of ${ek.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
+         }
+ 
+         function jk(kk) {
+           for (var ek = arguments.length, ik = new Array(ek > 1 ? ek - 1 : 0), Dk = 1; Dk < ek; Dk++) ik[Dk - 1] = arguments[Dk];
+           if ("string" !== typeof kk) {
+             const ek = ik[0],
+               Dk = [...ik.slice(1)];
+             return Dk[0] && (Dk[0].appName = kk.name), kk._errorFactory.create(ek, ...Dk)
+           }
+           return wk.create(kk, ...ik)
+         }
+ 
+ ... (442 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L95-L102` → after: `L850-L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L850-L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/264.js#L850-L1526) · [Before (L95-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/264.js#L95-L102)

```diff
-         },
-         bloxdIngameRules: {
-           title: QQ("homePage:bloxdIngameRules"),
-           content: (0, mQ.jsxs)(mQ.Fragment, {
-             children: [(0, mQ.jsx)("div", {
-               className: "BloxdInformationHeader FullyFancyText",
-               children: QQ("homePage:bloxdIngameRules")
-             }), "\n\t\t\t\t\t1. Be respectful of others.\n\n\t\t\t\t\t2. Don't harass or bully other players.\n\n\t\t\t\t\t3. Discriminatory jokes and hate speech (attacks on an individual or group based on their race, ethnicity, national origin, sex, gender, sexual orientation,  … [truncated]
+         }
+         class fe {
+           constructor(kk) {
+             var {
+               uid: ek,
+               auth: ik,
+               stsTokenManager: Dk
+             } = kk, fk = Sk(kk, ["uid", "auth", "stsTokenManager"]);
+             this.providerId = "firebase", this.proactiveRefresh = new Rk(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = ek, this.auth = ik, this.stsTokenManager = Dk, this.accessToken = Dk.accessToken, this.displayName = fk.displayName || null, this.ema … [truncated]
+           }
+           async getIdToken(kk) {
+             const ek = await Nk(this, this.stsTokenManager.getToken(this.auth, kk));
+             return sk(ek, this.auth, "internal-error"), this.accessToken !== ek && (this.accessToken = ek, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), ek
+           }
+           getIdTokenResult(kk) {
+             return Ok(this, kk)
+ ... (661 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L104-L109` → after: `L1528-L2381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1528-L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/264.js#L1528-L2381) · [Before (L104-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/264.js#L104-L109)

```diff
-         },
-         privacyPolicy: {
-           title: QQ("homePage:privacyPolicy"),
-           content: (0, mQ.jsx)(qQ.Suspense, {
-             fallback: null,
-             children: (0, mQ.jsx)(uQ, {})
+         }
+ 
+         function Ee(kk, ek, ik) {
+           const Dk = ze(kk);
+           sk(Dk._canInitEmulator, Dk, "emulator-config-failed"), sk(/^https?:\/\//.test(ek), Dk, "invalid-emulator-scheme");
+           const fk = !!(null === ik || void 0 === ik ? void 0 : ik.disableWarnings),
+             Sk = he(ek),
+             {
+               host: bk,
+               port: rk
+             } = function(kk) {
+               const ek = he(kk),
+                 ik = /(\/\/)?([^?#/]+)/.exec(kk.substr(ek.length));
+               if (!ik) return {
+                 host: "",
+                 port: null
+ ... (838 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L111-L116` → after: `L2383-L2388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2383-L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/264.js#L2383-L2388) · [Before (L111-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/264.js#L111-L116)

```diff
-         },
-         termsOfService: {
-           title: QQ("homePage:termsOfService"),
-           content: (0, mQ.jsx)(qQ.Suspense, {
-             fallback: null,
-             children: (0, mQ.jsx)(HQ, {})
+         }
+         async function Qi(kk, ek) {
+           await async function(kk, ek) {
+             return ak(kk, "POST", "/v1/accounts:update", hk(kk, ek))
+           }((0, Dk.Q)(kk), {
+             oobCode: ek
```

#### 6. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L118-L131` → after: `L2390-L2539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2390-L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/264.js#L2390-L2539) · [Before (L118-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/264.js#L118-L131)

```diff
-         },
-         securityExploitBounties: {
-           title: QQ("homePage:securityExploitBounties"),
-           content: (0, mQ.jsx)(bQ, {})
-         }
-       };
-       return (0, mQ.jsxs)("div", {
-         className: "BloxdInformation",
-         children: [(0, mQ.jsxs)("div", {
-           className: "BloxdInformationSectionList",
-           children: [Object.keys(YQ).map((LQ => (0, mQ.jsx)(DQ.L, {
-             active: FQ === LQ,
-             onClick: () => {
-               wQ(LQ)
+         }
+         async function vi(kk, ek) {
+           const ik = (0, Dk.Q)(kk),
+             fk = await te(ik, {
+               oobCode: ek
+             }),
+             Sk = fk.requestType;
+           switch (sk(Sk, ik, "internal-error"), Sk) {
+             case "EMAIL_SIGNIN":
+               break;
+             case "VERIFY_AND_CHANGE_EMAIL":
+               sk(fk.newEmail, ik, "internal-error");
+               break;
+             case "REVERT_SECOND_FACTOR_ADDITION":
+               sk(fk.mfaInfo, ik, "internal-error");
+             default:
+ ... (134 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L133-L137` → after: `L2541-L2846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2541-L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/264.js#L2541-L2846) · [Before (L133-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/264.js#L133-L137)

```diff
-             children: QQ(YQ[LQ].title)
-           }, LQ))), oQ.featureFlags.usePartnerLinks && (0, mQ.jsx)(mQ.Fragment, {
-             children: (0, mQ.jsxs)(DQ.L, {
-               onClick: () => {
-                 window.open("https://www.crazygames.com/c/io")
+             rk = await Nk(Sk, async function(kk, ek) {
+               return ak(kk, "POST", "/v1/accounts:update", ek)
+             }(Sk.auth, bk));
+           Sk.displayName = rk.displayName || null, Sk.photoURL = rk.photoUrl || null;
+           const Pk = Sk.providerData.find((kk => {
+             let {
+               providerId: ek
+             } = kk;
+             return "password" === ek
+           }));
+           Pk && (Pk.displayName = Sk.displayName, Pk.photoURL = Sk.photoURL), await Sk._updateTokensIfNecessary(rk)
+         }
+ 
+         function Oi(kk, ek) {
+           return Gi((0, Dk.Q)(kk), ek, null)
+         }
+ ... (290 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L139-L141` → after: `L2848-L2953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2848-L2953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/264.js#L2848-L2953) · [Before (L139-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/264.js#L139-L141)

```diff
-               children: [(0, mQ.jsx)(vQ.c, {
-                 name: "arrow-up-right-from-square"
-               }), " Crazy Games"]
+               Sk = this.storage.getItem(ik);
+             (0, Dk.$)() && 10 === document.documentMode && Sk !== kk.newValue && kk.newValue !== kk.oldValue ? setTimeout(fk, 10) : fk()
+           }
+           notifyListeners(kk, ek) {
+             this.localCache[kk] = ek;
+             const ik = this.listeners[kk];
+             if (ik)
+               for (const Dk of Array.from(ik)) Dk(ek ? JSON.parse(ek) : ek)
+           }
+           startPolling() {
+             this.stopPolling(), this.pollTimer = setInterval((() => {
+               this.forAllChangedKeys(((kk, ek, ik) => {
+                 this.onStorageEvent(new StorageEvent("storage", {
+                   key: kk,
+                   oldValue: ek,
+                   newValue: ik
+ ... (90 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L143-L156` → after: `L2955-L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2955-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/264.js#L2955-L4026) · [Before (L143-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/264.js#L143-L156)

```diff
-           })]
-         }), (0, mQ.jsx)("div", {
-           className: "BloxdInformationContentWrapper",
-           children: YQ[FQ].content
-         }), (0, mQ.jsxs)("div", {
-           className: "BloxdInformationText",
-           children: ["SiteUsed: ", kQ.r, " | SubSiteUsed: ", kQ.w]
-         })]
-       })
-     }
-   }
- };
- Object.freeze(modules);
- for (const QQ in modules) Object.freeze(modules[QQ]);
+           }
+           _subscribe(kk, ek) {
+             0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[kk] || (this.handlersMap[kk] = new Set), this.handlersMap[kk].add(ek)
+           }
+           _unsubscribe(kk, ek) {
+             this.handlersMap[kk] && ek && this.handlersMap[kk].delete(ek), ek && 0 !== this.handlersMap[kk].size || delete this.handlersMap[kk], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
+           }
+         }
+ 
+         function dD() {
+           let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
+             ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
+             ik = "";
+           for (let Dk = 0; Dk < ek; Dk++) ik += Math.floor(10 * Math.random());
+           return kk + ik
+         }
+ ... (1056 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/265.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/265.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89)

#### 1. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/265.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/265.js#L4)

```diff
-   40506: (QQ, FQ, wQ) => {
+   40157: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L7-L9` → after: `L8-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L8-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/265.js#L8-L115) · [Before (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/265.js#L7-L9)

```diff
-       d: () => GQ,
-       h: () => NQ,
-       l: () => tQ,
+       Ab: () => lk,
+       Ad: () => le,
+       Ae: () => Ei,
+       B: () => Se,
+       Bd: () => Ze,
+       Be: () => Ji,
+       C: () => Vk,
+       Ce: () => Qi,
+       Db: () => ye,
+       Dc: () => Me,
+       Df: () => wi,
+       E: () => uk,
+       Ec: () => me,
+       Ee: () => Bi,
+       Fb: () => Nk,
+       Fd: () => tk,
+ ... (92 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L11-L13` → after: `L117-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L117-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/265.js#L117-L141) · [Before (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/265.js#L11-L13)

```diff
-       q: () => bQ,
-       u: () => AQ,
-       w: () => xQ
+       qb: () => ii,
+       qd: () => Ek,
+       qf: () => Ri,
+       rb: () => Ue,
+       rc: () => ge,
+       rd: () => vk,
+       re: () => Oi,
+       s: () => rk,
+       t: () => Be,
+       tf: () => ti,
+       v: () => Te,
+       vb: () => Pe,
+       vc: () => fe,
+       vd: () => He,
+       ve: () => vi,
+       vf: () => Xi,
+ ... (9 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L15-L33` → after: `L143-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L143-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/265.js#L143-L777) · [Before (L15-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/265.js#L15-L33)

```diff
-     var LQ = wQ(36696),
-       qQ = wQ(36873),
-       oQ = wQ(36729),
-       DQ = wQ(40514),
-       kQ = wQ(39650),
-       vQ = wQ(39418),
-       mQ = wQ(39455),
-       uQ = wQ(39426),
-       HQ = wQ(36741);
-     const bQ = Object.freeze(new LQ.e(0, 0, 0, 0)),
-       YQ = Object.freeze(LQ.p.Zero()),
-       xQ = Object.freeze(LQ.n.Zero()),
-       AQ = Object.freeze(vQ.d.Zero()),
-       tQ = Object.freeze(qQ.b.Black()),
-       eQ = Object.freeze(new qQ.e(0, 0, 0, 0)),
-       MQ = {
- ... (3 more removed lines; see GitHub link above)
+     const Dk = -2147483648,
+       fk = 12,
+       Sk = 12,
+       bk = 4095,
+       rk = {
+         Lifeform: 1,
+         Throwable: 2,
+         Mesh: 3,
+         Audio: 4,
+         Item: 5
+       },
+       Pk = {
+         Alive: 1,
+         Crouching: 2,
+         OnGround: 4,
+         InFluid: 8,
+ ... (619 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L35-L358` → after: `L779-L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L779-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/265.js#L779-L834) · [Before (L35-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/265.js#L35-L358)

```diff
-     class GQ {
-       static _PrepareAnimation(QQ, FQ, wQ, oQ, DQ, kQ, mQ, uQ) {
-         let HQ;
-         if (!isNaN(parseFloat(DQ)) && isFinite(DQ) ? HQ = GQ.ANIMATIONTYPE_FLOAT : DQ instanceof LQ.e ? HQ = GQ.ANIMATIONTYPE_QUATERNION : DQ instanceof LQ.p ? HQ = GQ.ANIMATIONTYPE_VECTOR3 : DQ instanceof LQ.n ? HQ = GQ.ANIMATIONTYPE_VECTOR2 : DQ instanceof qQ.b ? HQ = GQ.ANIMAT … [truncated]
-         const bQ = new GQ(QQ, FQ, wQ, HQ, mQ),
-           YQ = [{
-             frame: 0,
-             value: DQ
-           }, {
-             frame: oQ,
-             value: kQ
-           }];
-         return bQ.setKeys(YQ), void 0 !== uQ && bQ.setEasingFunction(uQ), bQ
-       }
-       get runtimeAnimations() {
-         return this._runtimeAnimations
- ... (308 more removed lines; see GitHub link above)
+ 
+     function mi(kk, ek, ik, Dk, fk) {
+       var Sk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk, lk, pk, yk, Yk, Lk, Ck, Ak, jk, sk, dk, Vk, Fk, uk;
+       switch (kk) {
+         case 32:
+           return 4 === Dk && (null === (Sk = fk.tickEnd) || void 0 === Sk || Sk.call(fk, pe.Px(ek, ik)), !0);
+         case 33:
+           return 12 === Dk && (null === (bk = fk.entitySpawned) || void 0 === bk || bk.call(fk, ye.serverId(ek, ik), ye.index(ek, ik), ye.kind(ek, ik)), !0);
+         case 34:
+           return 12 === Dk && (null === (rk = fk.entityDespawned) || void 0 === rk || rk.call(fk, ye.serverId(ek, ik), ye.index(ek, ik), ye.kind(ek, ik)), !0);
+         case 39:
+           return !(Dk < 20) && (null === (Pk = fk.changeBlockFail) || void 0 === Pk || Pk.call(fk, Ye.pos(ek, ik, 0), Ye.pos(ek, ik, 1), Ye.pos(ek, ik, 2), Ye.actual(ek, ik), Ye.dataLen(ek, ik), ik + 20, Dk - 20), !0);
+         case 46:
+           return 0 === Dk && (null === (mk = fk.changeBlockFailEnd) || void 0 === mk || mk.call(fk), !0);
+         case 48:
+           return 20 === Dk && (null === (Mk = fk.inventoryEvent) || void 0 === Mk || Mk.call(fk, Le.what(ek, ik), Le.value(ek, ik), Le.pos(ek, ik, 0), Le.pos(ek, ik, 1), Le.pos(ek, ik, 2), Le.block(ek, ik)), !0);
+ ... (40 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L363-L443` → after: `L896-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L896-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/265.js#L896-L955) · [Before (L363-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/265.js#L363-L443)

```diff
-       let qQ;
-       qQ = "object" === typeof FQ ? FQ : {
-         referenceFrame: FQ ?? 0,
-         range: wQ,
-         cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
-       };
-       let oQ = QQ;
-       qQ.cloneOriginalAnimation && (oQ = QQ.clone(), oQ.name = qQ.clonedAnimationName || oQ.name);
-       const DQ = oQ.getKeys();
-       if (!DQ.length) return oQ;
-       const kQ = qQ.referenceFrame && qQ.referenceFrame >= 0 ? qQ.referenceFrame : 0;
-       let vQ = 0;
-       const mQ = DQ[0];
-       let uQ = DQ.length - 1;
-       const HQ = DQ[uQ],
- ... (65 more removed lines; see GitHub link above)
+       const Dk = kk.tn(66, ek, 4);
+       if (Dk < 0) return !1;
+       return kk.view.setUint8(Dk + 0, ik), !0
+     }
+ 
+     function Ui(kk, ek, ik) {
+       const Dk = kk.tn(67, ek, 4);
+       if (Dk < 0) return !1;
+       return kk.view.setUint32(Dk + 0, ik, !0), !0
+     }
+ 
+     function Hi(kk, ek, ik) {
+       const Dk = kk.tn(68, ek, 4);
+       if (Dk < 0) return !1;
+       return kk.view.setUint8(Dk + 0, ik), !0
+     }
+ ... (44 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L447-L448` → after: `L959-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L959-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/265.js#L959-L962) · [Before (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/265.js#L447-L448)

```diff
-       const qQ = new GQ(QQ + "Animation", QQ, wQ, FQ, GQ.ANIMATIONLOOPMODE_CONSTANT);
-       return qQ.setEasingFunction(LQ), qQ
+       const fk = kk.tn(256, ek, 4 + Dk.length);
+       if (fk < 0) return !1;
+       const Sk = kk.view;
+       return Sk.setUint16(fk + 0, ik, !0), xi(Sk).set(Dk, Sk.byteOffset + fk + 4), !0
```

#### 8. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L451-L453` → after: `L965-L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L965-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/265.js#L965-L968) · [Before (L451-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/265.js#L451-L453)

```diff
-     function CQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ) {
-       const HQ = GQ._PrepareAnimation(QQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ);
-       return HQ ? (FQ.iN && (uQ = FQ.iN()), uQ ? uQ.beginDirectAnimation(FQ, [HQ], 0, qQ, HQ.xQ !== GQ.ANIMATIONLOOPMODE_CONSTANT, 1, mQ) : null) : null
+     function si(kk, ek, ik) {
+       const Dk = kk.tn(258, ek, 4);
+       if (Dk < 0) return !1;
+       return kk.view.setUint8(Dk + 0, ik), !0
```

#### 9. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L456-L459` → after: `L971-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L971-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/265.js#L971-L978) · [Before (L456-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/265.js#L456-L459)

```diff
-     function SQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ) {
-       const HQ = GQ._PrepareAnimation(QQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ);
-       if (!HQ) return null;
-       return FQ.iN().beginDirectHierarchyAnimation(FQ, wQ, [HQ], 0, oQ, 1 === HQ.xQ, 1, uQ)
+     function di(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
+       const mk = kk.tn(320, ek, 48 + Pk.length);
+       if (mk < 0) return !1;
+       const Mk = kk.view;
+       Mk.setUint32(mk + 0, ik, !0), Mk.setUint16(mk + 4, Dk, !0), Mk.setUint16(mk + 6, fk, !0), Mk.setUint32(mk + 8, Sk, !0);
+       for (let Kk = 0; Kk < 3; Kk++) Mk.setFloat64(mk + 12 + 8 * Kk, bk[Kk], !0);
+       for (let Kk = 0; Kk < 3; Kk++) Mk.setFloat32(mk + 36 + 4 * Kk, rk[Kk], !0);
+       return xi(Mk).set(Pk, Mk.byteOffset + mk + 48), !0
```

#### 10. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L462-L464` → after: `L981-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L981-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/265.js#L981-L988) · [Before (L462-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/265.js#L462-L464)

```diff
-     function iQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ) {
-       const uQ = GQ._PrepareAnimation(QQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ);
-       return uQ ? (FQ.animations.push(uQ), FQ.iN().beginAnimation(FQ, 0, qQ, 1 === uQ.xQ, 1, mQ)) : null
+     function Vi(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
+       const mk = kk.tn(321, ek, 48 + Pk.length);
+       if (mk < 0) return !1;
+       const Mk = kk.view;
+       Mk.setUint32(mk + 0, ik, !0), Mk.setInt32(mk + 4, Dk, !0), Mk.setUint16(mk + 8, fk, !0), Mk.setUint16(mk + 10, Sk, !0);
+       for (let Kk = 0; Kk < 3; Kk++) Mk.setFloat64(mk + 12 + 8 * Kk, bk[Kk], !0);
+       for (let Kk = 0; Kk < 3; Kk++) Mk.setFloat32(mk + 36 + 4 * Kk, rk[Kk], !0);
+       return xi(Mk).set(Pk, Mk.byteOffset + mk + 48), !0
```

#### 11. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L468-L480` → after: `L992-L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L992-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/265.js#L992-L1013) · [Before (L468-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/265.js#L468-L480)

```diff
-       let kQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-         vQ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
-         mQ = arguments.length > 9 ? arguments[9] : void 0;
-       if (DQ <= 0) return wQ[QQ] = FQ, kQ && kQ(), null;
-       const uQ = qQ * (DQ / 1e3);
-       oQ.setKeys(mQ ?? [{
-         frame: 0,
-         value: wQ[QQ].clone ? wQ[QQ].clone() : wQ[QQ]
-       }, {
-         frame: uQ,
-         value: FQ
-       }]), wQ.animations || (wQ.animations = []), wQ.animations.push(oQ);
-       return LQ.beginAnimation(wQ, 0, uQ, !1, 1, kQ ?? void 0, void 0, vQ)
+       const rk = kk.tn(322, ek, 44 + bk.length);
+       if (rk < 0) return !1;
+       const Pk = kk.view;
+       Pk.setUint32(rk + 0, ik, !0), Pk.setUint32(rk + 4, Dk, !0);
+       for (let mk = 0; mk < 3; mk++) Pk.setFloat64(rk + 8 + 8 * mk, fk[mk], !0);
+       for (let mk = 0; mk < 3; mk++) Pk.setFloat32(rk + 32 + 4 * mk, Sk[mk], !0);
+       return xi(Pk).set(bk, Pk.byteOffset + rk + 44), !0
+     }
+ 
+     function ui(kk, ek, ik) {
+       const Dk = kk.tn(323, ek, 4);
+       if (Dk < 0) return !1;
+       return kk.view.setUint32(Dk + 0, ik, !0), !0
+     }
+ 
+     function qi(kk, ek, ik, Dk, fk, Sk) {
+ ... (6 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L484` → after: `L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/265.js#L1017) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/265.js#L484)

```diff
-       uQ.c.AppendSerializedAnimations(QQ, FQ)
+       return !(kk.tn(325, ek, 0) < 0)
```

#### 13. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L487-L584` → after: `L1020-L1219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1020-L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/265.js#L1020-L1219) · [Before (L487-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/265.js#L487-L584)

```diff
-     function OQ(QQ) {
-       const FQ = new GQ(QQ.name, QQ.property, QQ.framePerSecond, QQ.dataType, QQ.loopBehavior),
-         wQ = QQ.dataType,
-         oQ = [];
-       let DQ, kQ;
-       for (QQ.enableBlending && (FQ.enableBlending = QQ.enableBlending), QQ.blendingSpeed && (FQ.blendingSpeed = QQ.blendingSpeed), kQ = 0; kQ < QQ.keys.length; kQ++) {
-         const FQ = QQ.keys[kQ];
-         let vQ, mQ, uQ;
-         switch (wQ) {
-           case GQ.ANIMATIONTYPE_FLOAT:
-             DQ = FQ.values[0], FQ.values.length >= 2 && (vQ = FQ.values[1]), FQ.values.length >= 3 && (mQ = FQ.values[2]), FQ.values.length >= 4 && (uQ = FQ.values[3]);
-             break;
-           case GQ.ANIMATIONTYPE_QUATERNION:
-             if (DQ = LQ.e.FromArray(FQ.values), FQ.values.length >= 8) {
-               const QQ = LQ.e.FromArray(FQ.values.slice(4, 8));
-               QQ.equals(LQ.e.Zero()) || (vQ = QQ)
- ... (82 more removed lines; see GitHub link above)
+     function zi(kk, ek, ik, Dk, fk, Sk) {
+       const bk = kk.tn(384, ek, 16);
+       if (bk < 0) return !1;
+       const rk = kk.view;
+       return rk.setUint32(bk + 0, ik, !0), rk.setUint32(bk + 4, Dk, !0), rk.setFloat32(bk + 8, fk, !0), rk.setFloat32(bk + 12, Sk, !0), !0
+     }
+ 
+     function Qi(kk, ek, ik, Dk, fk, Sk, bk) {
+       const rk = kk.tn(385, ek, 36 + bk.length);
+       if (rk < 0) return !1;
+       const Pk = kk.view;
+       Pk.setUint32(rk + 0, ik, !0), Pk.setUint32(rk + 4, Dk, !0);
+       for (let mk = 0; mk < 3; mk++) Pk.setFloat64(rk + 8 + 8 * mk, fk[mk], !0);
+       return Pk.setUint32(rk + 32, Sk, !0), xi(Pk).set(bk, Pk.byteOffset + rk + 36), !0
+     }
+ 
+ ... (184 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L586-L587` → after: `L1221-L1286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1221-L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/265.js#L1221-L1286) · [Before (L586-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/265.js#L586-L587)

```diff
-       constructor(QQ, FQ, wQ) {
-         this.name = QQ, this.from = FQ, this.to = wQ
+       constructor(kk, ek) {
+         this.core = kk, this.afterCall = ek
+       }
+       canModify(kk, ek, ik) {
+         const Dk = this.core.eSk(kk, ek, ik);
+         return this.afterCall(), Dk
+       }
+       terrainBlocked(kk, ek, ik, Dk, fk) {
+         const Sk = this.core.oSk(kk, ek, ik, Dk, fk);
+         return this.afterCall(), Sk
+       }
+       RV(kk, ek, ik, Dk) {
+         const fk = this.core.Ln(kk, ek, ik, Dk);
+         return this.afterCall(), fk
+       }
+       blockData(kk, ek, ik) {
+ ... (50 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L589-L590` → after: `L1288-L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R1288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L1288-L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/265.js#L1288-L1362) · [Before (L589-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/265.js#L589-L590)

```diff
-       clone() {
-         return new LQ(this.name, this.from, this.to)
+       invQuickMove(kk, ek, ik, Dk) {
+         const fk = this.core.lSk(kk, ek, ik, Dk);
+         return this.afterCall(), fk
+       }
+       invRemove(kk, ek, ik) {
+         const Dk = this.core.pSk(kk, ek, ik);
+         return this.afterCall(), Dk
+       }
+       invEnchant(kk, ek, ik, Dk, fk) {
+         const Sk = this.core.HSk(kk, ek, ik, Dk, fk);
+         return this.afterCall(), Sk
+       }
+       craft(kk, ek, ik) {
+         const Dk = this.core.craft(kk, ek, ik);
+         return this.afterCall(), Dk
+       }
+ ... (59 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/266.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/266.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e)

#### 1. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L4-L5` → after: `L4-L8413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4-L8413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/266.js#L4-L8413) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/266.js#L4-L5)

```diff
-   40588: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
+   41177: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => wk,
+       f: () => rk,
+       j: () => bk,
+       n: () => mk
+     });
+     var Dk = ik(36868),
+       fk = ik(38294),
+       Sk = ik(38287);
+ 
+     function bk(kk, ek, ik, Dk) {
+       const fk = Sk.t;
+       ek.fill(0), kk.gravity.toArray(ek, fk.gravity), kk.colorDead.toArray(ek, fk.colorDead), ik[fk.ramp] = kk.useRampGradients ? 1 : 0;
+       const bk = kk.getColorGradients(),
+         rk = xk(kk, bk, "colour", Dk);
+ ... (8394 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/267.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/267.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8)

#### 1. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L4-L5` → after: `L4-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L4-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/267.js#L4-L836) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/267.js#L4-L5)

```diff
-   40590: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
+   40400: (kk, ek, ik) => {
+     function Dk(kk, ek, ik) {
+       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(kk, ek).getContext("2d", ik);
+       const Dk = document.createElement("canvas");
+       return Dk.width = kk, Dk.height = ek, Dk.getContext("2d", ik)
+     }
+ 
+     function fk(kk, ek) {
+       return kk.getContext("2d", ek)
+     }
+     ik.d(ek, {
+       c: () => fk,
+       f: () => Dk
+     })
+   },
+   40364: (kk, ek, ik) => {
+ ... (817 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/268.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/268.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658)

#### 1. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4-L5` → after: `L4-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/268.js#L4-L68) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/268.js#L4-L5)

```diff
-   40593: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
+   40501: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk,
+       g: () => Sk,
+       h: () => rk
+     });
+     let Dk = null,
+       fk = null;
+ 
+     function Sk(kk, ek) {
+       return Dk = kk, fk = null, rk(ek), () => {
+         Dk === kk && (Dk = null, fk = null)
+       }
+     }
+ 
+     function bk() {
+ ... (49 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/269.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/269.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b)

#### 1. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L4-L5` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/269.js#L4-L16) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/269.js#L4-L5)

```diff
-   40599: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
+   40641: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       gamePackSource: () => Sk
+     });
+     var Dk = ik(4915),
+       fk = ik(1459);
+ 
+     function Sk(kk) {
+       return {
+         packKey: async ek => (await fk.b.getGame(kk, ek, !0)).customTexturePackKey,
+         fetchPack: Dk.e
+       }
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/270.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/270.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3)

#### 1. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/270.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/270.js#L2)

```diff
- export const ids = [270];
+ export const ids = [269, 270];
```

#### 2. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L4-L5` → after: `L4-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L4-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/270.js#L4-L93) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/270.js#L4-L5)

```diff
-   40607: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
+   40641: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       gamePackSource: () => Sk
+     });
+     var Dk = ik(4915),
+       fk = ik(1459);
+ 
+     function Sk(kk) {
+       return {
+         packKey: async ek => (await fk.b.getGame(kk, ek, !0)).customTexturePackKey,
+         fetchPack: Dk.e
+       }
+     }
+   },
+   50545: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+ ... (74 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/271.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/271.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c)

#### 1. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L4-L5` → after: `L4-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L4-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/271.js#L4-L152) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/271.js#L4-L5)

```diff
-   40609: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
+   40650: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       BloxdInformation: () => nk
+     });
+     var Dk = ik(1172),
+       fk = ik(60),
+       Sk = ik(99),
+       bk = ik(1410),
+       rk = ik(131),
+       Pk = ik(1033),
+       mk = ik(1066);
+     const Mk = (0, fk.lazy)((() => ik.e(123).then((() => ik(6364))))),
+       Kk = (0, fk.lazy)((() => ik.e(124).then((() => ik(6370)))));
+ 
+     function xk() {
+       return (0, mk.jsxs)("div", {
+ ... (133 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/272.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/272.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf)

#### 1. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L4-L5` → after: `L4-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L4-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/272.js#L4-L628) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/272.js#L4-L5)

```diff
-   40618: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEWSURBVHic7dohEoJAFMZxcCgSLHIOq8Vs8QSewOxJzJ7AO5gtVs+hxYBREwzjMDDLW/zA/f/iusCbz6fCG+PI6HrevS3H3x9P0/U321NsOX5iuvofSHydaJqmTvtfee7r0 … [truncated]
+   40684: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => yk,
+       d: () => zk,
+       g: () => wk,
+       h: () => lk,
+       l: () => xk,
+       p: () => Hk,
+       s: () => Uk,
+       t: () => nk
+     });
+     var Dk = ik(36698),
+       fk = ik(36874),
+       Sk = ik(36729),
+       bk = ik(40690),
+       rk = ik(39787),
+ ... (609 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/273.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/273.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325)

#### 1. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/273.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/273.js#L4-L5)

```diff
-   40620: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEQSURBVHic7dpBDsFAFMbxjnRBIiSO4QZ2tuIgDuAEDuAATmJrxwkcQ0Ik7FhVLEqNN/VNzf+3bKYzL58X6qUuM9ouxzfL/YfT1XT+dLFzlvtbptP/QB5qo36347X+eL6EO … [truncated]
+   40751: kk => {
+     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/274.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/274.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3)

#### 1. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/274.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/274.js#L4-L5)

```diff
-   40626: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEHSURBVHic7dqxEsFAFIXhrEkjGt5Nq9bSKhUKDa1aq/dYNKKkilGEWHfjbOz/lZnN7p3jDnEnLjParMY3y/2n88V0/nJ9dJb7e6bT/0AeaqOi6HutL8trqKNN6IDQGzZ9s … [truncated]
+   40757: kk => {
+     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/275.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/275.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a)

#### 1. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/275.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/275.js#L4-L5)

```diff
-   40628: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7do9EsFAGMbxrEnjY3Quo1WrncIBnMABXIJardDonUNnfJRUMYoQ6914Nvb/KzOb3Xce7xDvxGVG0/HwZrn/cDybzl9u985yf8t0+h/IQ23U67S91p8u11BHm … [truncated]
+   40762: kk => {
+     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/276.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/276.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6)

#### 1. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/276.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/276.js#L4-L5)

```diff
-   40635: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrElDFB5OSavRewSFXqOlVOi8lkIoqWIUIdbdOBv7f2Vms3vnuEPcicuMVpPxzXL/6Vyazl8ejs5yf890+h/IQ21UDPpe68vLNdTRJnRA6A2bP … [truncated]
+   40767: kk => {
+     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/277.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/277.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410)

#### 1. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/277.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/277.js#L4-L5)

```diff
-   40639: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPVSURBVHic7dxPbhMxGIdhB03aRSXaHafgAmwQC4TEohI34BRIPQESl0Fi20XVTS/ADThBi1QCnZHKAiwl7njGY3v8+c/77BJsx5n57GZI5rdRgd69P3/cf7w9Op5s3z/8O … [truncated]
+   40769: kk => {
+     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/278.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/278.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0)

#### 1. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/278.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/278.js#L4-L5)

```diff
-   40645: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKpSURBVHic7Zq/ThVBFMa/JXNBFAiVISEhSsM2WhFewADREAMkFEYSX4DCjvgExs4XoNBgKyUF8SUgBLWxkcTCRMMFLty78VrNze5hZ3Z2Z+7dXeb8utmZMzM78805Z/8Es … [truncated]
+   40777: kk => {
+     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/279.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/279.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae)

#### 1. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/279.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/279.js#L4-L5)

```diff
-   40650: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEKSURBVHic7doxDoJAEIVh1hBjY/BsxsrOI3ADLmA8gp2VsfJgEhtjoxXGAsV1Ft/i/l9Jlt3Jc6I4wWVG22pxs9x/Ol9M55fro7PcPzKd/gfyUBsVxdhrfV1fQx1tQgeE3 … [truncated]
+   40785: kk => {
+     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEWSURBVHic7dohEoJAFMZxcCgSLHIOq8Vs8QSewOxJzJ7AO5gtVs+hxYBREwzjMDDLW/zA/f/iusCbz6fCG+PI6HrevS3H3x9P0/U321NsOX5iuvofSHydaJqmTvtfee7r0 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/280.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/280.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db)

#### 1. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/280.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/280.js#L4-L5)

```diff
-   40654: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAELSURBVHic7dqxEsFAFIXhjcmko6BTeSKlSucBVB5Hp1J6IpUKBV0aqhhFiHU3zsb+X5nZ7N457hB3kjmj8WZ9s9xfns6m84/LVWa5v2c6/Q/koTYqBn2v9eXlGupoEzog9 … [truncated]
+   40789: kk => {
+     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEQSURBVHic7dpBDsFAFMbxjnRBIiSO4QZ2tuIgDuAEDuAATmJrxwkcQ0Ik7FhVLEqNN/VNzf+3bKYzL58X6qUuM9ouxzfL/YfT1XT+dLFzlvtbptP/QB5qo36347X+eL6EO … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/281.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/281.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696)

#### 1. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/281.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/281.js#L4-L5)

```diff
-   40658: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIOSURBVHic7ZoxSwMxFIDfFRGVKgVxcpJDnK6Dg/9AXFwqdFKqk3UUl9JJnMTNsXYqopNDZ/EfODjYSVpxEoQOHlraUsFzsLFeendtLrlLr3nfEnp5Ly+XvPdySaoBJ+W8Y … [truncated]
+   40797: kk => {
+     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEHSURBVHic7dqxEsFAFIXhrEkjGt5Nq9bSKhUKDa1aq/dYNKKkilGEWHfjbOz/lZnN7p3jDnEnLjParMY3y/2n88V0/nJ9dJb7e6bT/0AeaqOi6HutL8trqKNN6IDQGzZ9s … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/282.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/282.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8)

#### 1. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/282.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/282.js#L2)

```diff
- export const ids = [282, 283];
+ export const ids = [282];
```

#### 2. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L4-L754` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/282.js#L4-L5) · [Before (L4-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/282.js#L4-L754)

```diff
-   40667: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       CharacterCustomisationUI: () => jQ
-     });
-     var LQ = wQ(53),
-       qQ = wQ(2910),
-       oQ = wQ(1140),
-       DQ = wQ(1897),
-       kQ = wQ(1070),
-       vQ = wQ.n(kQ),
-       mQ = wQ(1254),
-       uQ = wQ(600),
-       HQ = wQ(1207),
-       bQ = wQ(2148),
-       YQ = wQ(1560),
-       xQ = wQ(8582),
- ... (735 more removed lines; see GitHub link above)
+   40801: kk => {
+     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7do9EsFAGMbxrEnjY3Quo1WrncIBnMABXIJardDonUNnfJRUMYoQ6914Nvb/KzOb3Xce7xDvxGVG0/HwZrn/cDybzl9u985yf8t0+h/IQ23U67S91p8u11BHm … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/283.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/283.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e)

#### 1. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L4-L152` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/283.js#L4-L5) · [Before (L4-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/283.js#L4-L152)

```diff
-   40672: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       CharacterPreview: () => HQ
-     });
-     var LQ = wQ(53),
-       qQ = wQ(2657),
-       oQ = wQ(1254),
-       DQ = wQ(8582),
-       kQ = wQ(9137),
-       vQ = wQ(3511),
-       mQ = wQ(1107);
-     const uQ = .6 * Math.PI,
-       HQ = (0, LQ.memo)((0, LQ.forwardRef)((function(QQ, FQ) {
-         let {
-           onReady: wQ,
-           onDrawn: HQ,
- ... (133 more removed lines; see GitHub link above)
+   40808: kk => {
+     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrElDFB5OSavRewSFXqOlVOi8lkIoqWIUIdbdOBv7f2Vms3vnuEPcicuMVpPxzXL/6Vyazl8ejs5yf890+h/IQ21UDPpe68vLNdTRJnRA6A2bP … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/284.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/284.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887)

#### 1. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4-L1182` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/284.js#L4-L5) · [Before (L4-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/284.js#L4-L1182)

```diff
-   40679: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       default: () => EF
-     });
-     var LQ = wQ(40688),
-       qQ = wQ(40732),
-       oQ = wQ(40736),
-       DQ = wQ(53),
-       kQ = wQ(71),
-       vQ = wQ(40759),
-       mQ = wQ(40764),
-       uQ = wQ(4610),
-       HQ = wQ(40770),
-       bQ = wQ(1873),
-       YQ = wQ(40778),
-       xQ = wQ(40792),
- ... (1163 more removed lines; see GitHub link above)
+   40813: kk => {
+     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPVSURBVHic7dxPbhMxGIdhB03aRSXaHafgAmwQC4TEohI34BRIPQESl0Fi20XVTS/ADThBi1QCnZHKAiwl7njGY3v8+c/77BJsx5n57GZI5rdRgd69P3/cf7w9Op5s3z/8O … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/285.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/285.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2)

#### 1. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L4-L17228` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/285.js#L4-L5) · [Before (L4-L17228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/285.js#L4-L17228)

```diff
-   40688: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => NF,
-       g: () => iF,
-       i: () => MF,
-       m: () => vQ,
-       o: () => TF,
-       s: () => mQ,
-       t: () => bF
-     });
-     var LQ = wQ(40695),
-       qQ = wQ(40702),
-       oQ = wQ(40718);
-     class DQ {
-       constructor(QQ, FQ, wQ, LQ) {
-         this.state = QQ, this.pos = FQ, this.explicit = wQ, this.view = LQ, this.abortListeners = [], this.abortOnDocChange = !1
- ... (17209 more removed lines; see GitHub link above)
+   40821: kk => {
+     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKpSURBVHic7Zq/ThVBFMa/JXNBFAiVISEhSsM2WhFewADREAMkFEYSX4DCjvgExs4XoNBgKyUF8SUgBLWxkcTCRMMFLty78VrNze5hZ3Z2Z+7dXeb8utmZMzM78805Z/8Es … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/286.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/286.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469)

#### 1. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L4-L2146` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/286.js#L4-L5) · [Before (L4-L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/286.js#L4-L2146)

```diff
-   40695: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => MF,
-       e: () => UQ,
-       ChangeSet: () => NQ,
-       h: () => rF,
-       j: () => fQ,
-       n: () => TF,
-       r: () => JQ,
-       t: () => IQ,
-       w: () => qF,
-       B: () => fF,
-       z: () => VF,
-       D: () => zF,
-       H: () => cF,
-       L: () => BQ,
- ... (2127 more removed lines; see GitHub link above)
+   40829: kk => {
+     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEKSURBVHic7doxDoJAEIVh1hBjY/BsxsrOI3ADLmA8gp2VsfJgEhtjoxXGAsV1Ft/i/l9Jlt3Jc6I4wWVG22pxs9x/Ol9M55fro7PcPzKd/gfyUBsVxdhrfV1fQx1tQgeE3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/287.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/287.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1)

#### 1. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4-L4269` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/287.js#L4-L6) · [Before (L4-L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/287.js#L4-L4269)

```diff
-   40784: QQ => {
-     function FQ(QQ) {
-       var FQ = new Error("Cannot find module '" + QQ + "'");
-       throw FQ.code = "MODULE_NOT_FOUND", FQ
-     }
-     FQ.keys = () => [], FQ.resolve = FQ, FQ.id = 40784, QQ.exports = FQ
-   },
-   40855: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => LQ,
-       g: () => qQ
-     });
-     const LQ = "Sends one question to the AI",
-       qQ = {
-         title: LQ,
-         "data-asks-ai": !0
- ... (4250 more removed lines; see GitHub link above)
+   40836: kk => {
+     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAELSURBVHic7dqxEsFAFIXhjcmko6BTeSKlSucBVB5Hp1J6IpUKBV0aqhhFiHU3zsb+X5nZ7N457hB3kjmj8WZ9s9xfns6m84/LVWa5v2c6/Q/koTYqBn2v9eXlGupoEzog9 … [truncated]
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/288.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/288.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1)

#### 1. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L4-L7359` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/288.js#L4-L5) · [Before (L4-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/288.js#L4-L7359)

```diff
-   40770: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => LQ
-     });
-     const LQ = String.raw`interface Map<K, V> {
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
- ... (7340 more removed lines; see GitHub link above)
+   40840: kk => {
+     kk.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIOSURBVHic7ZoxSwMxFIDfFRGVKgVxcpJDnK6Dg/9AXFwqdFKqk3UUl9JJnMTNsXYqopNDZ/EfODjYSVpxEoQOHlraUsFzsLFeendtLrlLr3nfEnp5Ly+XvPdySaoBJ+W8Y … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/289.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/289.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848)

#### 1. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/289.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/289.js#L2)

```diff
- export const ids = [289];
+ export const ids = [289, 290];
```

#### 2. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L4-L12` → after: `L4-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L4-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/289.js#L4-L42) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/289.js#L4-L12)

```diff
-   40778: (QQ, FQ, wQ) => {
-     function LQ() {
-       return LQ = Object.assign ? Object.assign.bind() : function(QQ) {
-         for (var FQ = 1; FQ < arguments.length; FQ++) {
-           var wQ = arguments[FQ];
-           for (var LQ in wQ)({}).hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
-         }
-         return QQ
-       }, LQ.apply(null, arguments)
+   40850: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       CharacterCustomisationUI: () => ak
+     });
+     var Dk = ik(60),
+       fk = ik(2955),
+       Sk = ik(1095),
+       bk = ik(1893),
+       rk = ik(1021),
+       Pk = ik.n(rk),
+       mk = ik(1218),
+       Mk = ik(581),
+       Kk = ik(1172),
+       xk = ik(2195),
+       nk = ik(1537),
+       Uk = ik(8658),
+ ... (23 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L35-L116` → after: `L45-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L45-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/289.js#L45-L49) · [Before (L35-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/289.js#L35-L116)

```diff
-     function kQ(QQ, FQ, wQ, qQ, oQ) {
-       void 0 === qQ && (qQ = {});
-       var DQ = LQ({}, uQ(wQ), qQ),
-         kQ = function(QQ, FQ, wQ, qQ, oQ) {
-           var DQ = [].concat(FQ),
-             kQ = YQ(QQ, wQ, qQ),
-             vQ = kQ.compilerHost,
-             mQ = kQ.updateFile,
-             uQ = kQ.deleteFile,
-             HQ = new Map,
-             bQ = 0,
-             xQ = LQ({}, vQ, {
-               getProjectVersion: function() {
-                 return bQ.toString()
-               },
-               getCompilationSettings: function() {
- ... (66 more removed lines; see GitHub link above)
+     function vk(kk, ek) {
+       return Object.entries(kk).some((kk => {
+         let [ik, Dk] = kk;
+         return Qk(ik, Dk, ek)
+       }))
```

#### 4. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L120` → after: `L53-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L53-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/289.js#L53-L84) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/289.js#L120)

```diff
-       throw new Error("Method '" + QQ + "' is not implemented.")
+       var ek;
+       let {
+         pack: ik,
+         ownedPacks: Dk,
+         showStoreLink: fk = !1,
+         children: Sk
+       } = kk;
+       const {
+         t: bk
+       } = (0, Kk.D)(), rk = jk.e[ik], mk = rk.purchasable && !Dk.includes(ik) && jk.t.includes(ik), Mk = dk.j[ik];
+       return (0, zk.jsxs)("div", {
+         className: Pk()("CosmeticPackGroup", {
+           CosmeticPackGroupLocked: mk
+         }),
+         children: [Mk && (0, zk.jsx)(Mk, {}), (0, zk.jsxs)("div", {
+           className: "CosmeticPackGroupLabel",
+ ... (16 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L123-L128` → after: `L87-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L87-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/289.js#L87-L108) · [Before (L123-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/289.js#L123-L128)

```diff
-     function mQ(QQ, FQ) {
-       return function() {
-         for (var wQ = arguments.length, LQ = new Array(wQ), qQ = 0; qQ < wQ; qQ++) LQ[qQ] = arguments[qQ];
-         var oQ = FQ.apply(void 0, LQ),
-           kQ = "string" === typeof oQ ? oQ.slice(0, 80) + "..." : oQ;
-         return DQ.apply(void 0, ["> " + QQ].concat(LQ)), DQ("< " + kQ), oQ
+     function hk(kk) {
+       let {
+         equippedEmoteIds: ek,
+         ownedPacks: ik,
+         canBuy: Dk,
+         onUpdateLoadout: fk,
+         onEmoteSelected: Sk,
+         onEquipPreviewSkin: bk
+       } = kk;
+       const {
+         t: rk
+       } = (0, Kk.D)(), Mk = new Set(ek), nk = new Map, Uk = Object.keys(xk.f.emote).sort(((kk, ek) => {
+         var ik, Dk, fk, Sk;
+         return (null !== (ik = null === (Dk = (0, xk.j)("emote", kk)) || void 0 === Dk ? void 0 : Dk.clientIdx) && void 0 !== ik ? ik : 0) - (null !== (fk = null === (Sk = (0, xk.j)("emote", ek)) || void 0 === Sk ? void 0 : Sk.clientIdx) && void 0 !== fk ? fk : 0)
+       })).filter((kk => {
+         const ek = (0, xk.n)("emote", kk),
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L131-L143` → after: `L197-L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L197-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/289.js#L197-L752) · [Before (L131-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/289.js#L131-L143)

```diff
-     var uQ = function(QQ) {
-         return LQ({}, QQ.getDefaultCompilerOptions(), {
-           jsx: QQ.JsxEmit.React,
-           strict: !0,
-           esModuleInterop: !0,
-           module: QQ.ModuleKind.ESNext,
-           suppressOutputPathCheck: !0,
-           skipLibCheck: !0,
-           skipDefaultLibCheck: !0
-         }, QQ.versionMajorMinor && Number(QQ.versionMajorMinor.split(".")[0]) >= 6 ? {
-           ignoreDeprecations: "6.0"
-         } : {
-           moduleResolution: QQ.ModuleResolutionKind.NodeJs
+     const ak = (0, Dk.memo)((function(kk) {
+       let {
+         selectedTab: ek
+       } = kk;
+       const ik = "characters" === ek ? "skin" : ek,
+         {
+           t: rk
+         } = (0, Kk.D)(),
+         {
+           userContext: Hk,
+           isUserContextUpdating: dk
+         } = (0, Sk.d)(),
+         Ik = (0, fk.b)(),
+         {
+           gameState: ak,
+           initSdkSelectorFinished: Wk
+ ... (540 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L145-L230` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/289.js#L754) · [Before (L145-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/289.js#L145-L230)

```diff
-       },
-       HQ = function(QQ) {
-         return QQ.replace("/", "/lib.").toLowerCase()
-       };
- 
-     function bQ(QQ) {
-       return {
-         args: [],
-         createDirectory: function() {
-           return vQ("createDirectory")
-         },
-         directoryExists: mQ("directoryExists", (function(FQ) {
-           return Array.from(QQ.keys()).some((function(QQ) {
-             return QQ.startsWith(FQ)
-           }))
-         })),
- ... (70 more removed lines; see GitHub link above)
+       })))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/290.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/290.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b)

#### 1. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L4-L3696` → after: `L4-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L4-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/290.js#L4-L55) · [Before (L4-L3696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/290.js#L4-L3696)

```diff
-   40792: (QQ, FQ, wQ) => {
-     var LQ = "/index.js",
-       qQ = {};
-     (QQ => {
-       var FQ = Object.defineProperty,
-         qQ = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (QQ, wQ) => {
-           for (var LQ in wQ) FQ(QQ, LQ, {
-             get: wQ[LQ],
-             enumerable: !0
-           })
-         }),
-         oQ = {};
-       qQ(oQ, {
-         ANONYMOUS: () => n_,
-         AccessFlags: () => ko,
-         AssertionLevel: () => Gw,
- ... (3677 more removed lines; see GitHub link above)
+   40857: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       CharacterPreview: () => Kk
+     });
+     var Dk = ik(60),
+       fk = ik(2683),
+       Sk = ik(1218),
+       bk = ik(8658),
+       rk = ik(33799),
+       Pk = ik(3590),
+       mk = ik(1066);
+     const Mk = .6 * Math.PI,
+       Kk = (0, Dk.memo)((0, Dk.forwardRef)((function(kk, ek) {
+         let {
+           onReady: ik,
+           onDrawn: Kk,
+ ... (36 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L3698-L3898` → after: `L57-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L57-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/290.js#L57-L62) · [Before (L3698-L3898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/290.js#L3698-L3898)

```diff
-                 return null == (QQ = this.Iu) ? void 0 : QQ.signatureToString(this)
-               }
-             }
-           });
-           const wQ = [jS.getNodeConstructor(), jS.getIdentifierConstructor(), jS.getTokenConstructor(), jS.getSourceFileConstructor()];
-           for (const LQ of wQ) UF(LQ.prototype, "__debugKind") || Object.defineProperties(LQ.prototype, {
-             __tsDebuggerDisplay: {
-               value() {
-                 return `${GH(this)?"GeneratedIdentifier":iI(this)?`Identifier '${fm(this)}'`:WI(this)?`PrivateIdentifier '${fm(this)}'`:kI(this)?`StringLiteral ${JSON.stringify(this.text.length<10?this.text:this.text.slice(10)+"...")}`:oI(this)?`NumericLiteral ${this.text}`:DI(th … [truncated]
-               }
-             },
-             __debugKind: {
-               get() {
-                 return pQ(this.kind)
-               }
-             },
- ... (185 more removed lines; see GitHub link above)
+                 Lk.current !== kk || Fk.current !== ek || uk.current || (uk.current = !0, null === (ik = Vk.current) || void 0 === ik || ik.call(Vk))
+               }))
+             }))
+           }), []);
+         return (0, Dk.useImperativeHandle)(ek, (() => {
+           const kk = (kk, ek) => {
```

#### 3. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L3900-L4422` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/290.js#L64) · [Before (L3900-L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/290.js#L3900-L4422)

```diff
-             return FQ.delete(QQ), qQ
-           }
- 
-           function tQ(QQ, FQ, wQ) {
-             const LQ = AQ(FQ, wQ),
-               qQ = {
-                 source: QQ,
-                 target: LQ
-               };
-             mQ.push(qQ), QQ.edges.push(qQ), LQ.edges.push(qQ)
-           }
- 
-           function eQ(QQ) {
-             if (-1 !== QQ.level) return QQ.level;
-             let FQ = 0;
-             for (const wQ of xQ(QQ)) FQ = Math.max(FQ, eQ(wQ) + 1);
- ... (507 more removed lines; see GitHub link above)
+             (Ck.current[kk] = ek, null !== Uk && void 0 !== Uk && Uk[kk]) || (null === (ik = Lk.current) || void 0 === ik || ik.setCosmetic(kk, ek), Ik())
```

#### 4. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L4424-L4427` → after: `L66-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L66-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/290.js#L66-L72) · [Before (L4424-L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/290.js#L4424-L4427)

```diff
-           FQ.writeSync(oQ, "[\n" + [{
-             name: "process_name",
-             args: {
-               name: "tsc"
+           return {
+             updateCosmetic: kk,
+             setAllCosmetics(ek) {
+               for (const Dk of Sk.y) {
+                 var ik;
+                 kk(Dk, null !== (ik = ek[Dk]) && void 0 !== ik ? ik : (0, bk.b)(Dk))
+               }
```

#### 5. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L4429-L4433` → after: `L74-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L74-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/290.js#L74-L76) · [Before (L4429-L4433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/290.js#L4429-L4433)

```diff
-             ...AQ
-           }, {
-             name: "thread_name",
-             args: {
-               name: "Main"
+             isReady() {
+               var kk, ek;
+               return null !== (kk = null === (ek = Lk.current) || void 0 === ek ? void 0 : ek.isReady()) && void 0 !== kk && kk
```

#### 6. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L4435-L5003` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/290.js#L78) · [Before (L4435-L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/290.js#L4435-L5003)

```diff
-             ...AQ
-           }, {
-             name: "TracingStartedInBrowser",
-             ...AQ,
-             cat: "disabled-by-default-devtools.timeline"
-           }].map((QQ => JSON.stringify(QQ))).join(",\n"))
-         }, QQ.stopTracing = function() {
-           ML.assert(wq, "Tracing is not in progress"), ML.assert(!!DQ.length === ("server" !== LQ)), FQ.writeSync(oQ, "\n]\n"), FQ.closeSync(oQ), wq = void 0, DQ.length ? function(QQ) {
-             var wQ, LQ, qQ, oQ, DQ, kQ, mQ, uQ, HQ, bQ, YQ, xQ, tQ, eQ, MQ, GQ, pQ, cQ, CQ;
-             uq("beginDumpTypes");
-             const SQ = vQ[vQ.length - 1].typesPath,
-               iQ = FQ.openSync(SQ, "w"),
-               WQ = new Map;
-             FQ.writeSync(iQ, "[");
-             const RQ = QQ.length;
-             for (let vQ = 0; vQ < RQ; vQ++) {
- ... (553 more removed lines; see GitHub link above)
+             resetCamera() {
```

#### 7. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L5005-L5032` → after: `L80-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/290.js#L80-L82) · [Before (L5005-L5032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/290.js#L5005-L5032)

```diff
-               CQ(FQ, wQ) || ((null == wQ ? void 0 : wQ.synchronousWatchDirectory) ? ((null == (LQ = uQ.get(DQ)) ? void 0 : LQ.targetWatcher) || eQ(QQ, DQ, FQ), cQ(QQ, DQ, wQ)) : function(QQ, FQ, wQ, LQ) {
-                 const qQ = uQ.get(FQ);
-                 if (qQ && oQ(QQ, 1)) return void
-                 function(QQ, FQ, wQ, LQ) {
-                   const qQ = bQ.get(FQ);
-                   qQ ? qQ.fileNames.push(wQ) : bQ.set(FQ, {
-                     dirName: QQ,
-                     options: LQ,
-                     fileNames: [wQ]
-                   });
-                   YQ && (vQ(YQ), YQ = void 0);
-                   YQ = kQ(MQ, 1e3, "timerToUpdateChildWatches")
-                 }(QQ, FQ, wQ, LQ);
-                 eQ(QQ, FQ, wQ), pQ(qQ), GQ(qQ)
-               }(QQ, DQ, FQ, wQ))
-             }), !1, wQ),
- ... (12 more removed lines; see GitHub link above)
+               null === (kk = Lk.current) || void 0 === kk || kk.resetCamera()
+             },
+             setOrbit(kk) {
```

#### 8. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L5034-L5395` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/290.js#L84) · [Before (L5034-L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/290.js#L5034-L5395)

```diff
-               const FQ = ML.checkDefined(uQ.get(DQ));
-               tQ && HQ.remove(DQ, tQ), qQ && (null == (QQ = FQ.links) || QQ.delete(qQ)), FQ.refCount--, FQ.refCount || (uQ.delete(DQ), FQ.links = void 0, Jg(FQ), pQ(FQ), FQ.childWatches.forEach(wS))
-             }
-           }
-         }
- 
-         function eQ(QQ, FQ, wQ, LQ) {
-           var qQ, oQ;
-           let DQ, kQ;
-           qw(wQ) ? DQ = wQ : kQ = wQ, HQ.forEach(((QQ, wQ) => {
-             if ((!kQ || !0 !== kQ.get(wQ)) && (wQ === FQ || LL(FQ, wQ) && FQ[wQ.length] === RD))
-               if (kQ)
-                 if (LQ) {
-                   const QQ = kQ.get(wQ);
-                   QQ ? QQ.push(...LQ) : kQ.set(wQ, LQ.slice())
-                 } else kQ.set(wQ, !0);
- ... (346 more removed lines; see GitHub link above)
+               null === (ek = Lk.current) || void 0 === ek || ek.setOrbit(kk)
```

#### 9. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L5397-L9605` → after: `L86-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L86-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/290.js#L86-L92) · [Before (L5397-L9605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/290.js#L5397-L9605)

```diff
-             bQ = oQ.platform(),
-             YQ = function() {
-               return "win32" !== bQ && "win64" !== bQ && !RQ((QQ = LQ, QQ.replace(/\w/g, (QQ => {
-                 const FQ = QQ.toUpperCase();
-                 return QQ === FQ ? QQ.toLowerCase() : FQ
-               }))));
-               var QQ
-             }(),
-             xQ = FQ.realpathSync.native ? "win32" === process.platform ? function(QQ) {
-               return QQ.length < 260 ? FQ.realpathSync.native(QQ) : FQ.realpathSync(QQ)
-             } : FQ.realpathSync.native : FQ.realpathSync,
-             AQ = LQ.endsWith("sys.js") ? qQ.join(qQ.dirname("/"), "__fake__.js") : LQ,
-             tQ = "win32" === process.platform || mQ,
-             eQ = ew((() => process.cwd())),
-             {
-               watchFile: MQ,
- ... (4193 more removed lines; see GitHub link above)
+             async ensureReadyForCapture(kk) {
+               var ek;
+               await (null === (ek = Lk.current) || void 0 === ek ? void 0 : ek.untilDrawn(kk))
+             },
+             getDevTools() {
+               var kk;
+               return null !== (kk = Lk.current) && void 0 !== kk && kk.isReady() ? Lk.current.dev : null
```

#### 10. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L9625-L9637` → after: `L95-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L95-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/290.js#L95-L98) · [Before (L9625-L9637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/290.js#L9625-L9637)

```diff
-         }
- 
-         function RQ(FQ, wQ) {
-           if (!Kv(GQ(oQ), QQ)) return;
-           const LQ = oQ,
-             {
-               length: qQ
-             } = lQ();
-           1 === qQ && "n" === xQ[LQ] ? SQ(wQ ? rk.A_bigint_literal_cannot_use_exponential_notation : rk.A_bigint_literal_must_be_an_integer, FQ, LQ - FQ + 1) : (SQ(rk.An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal, LQ, qQ), oQ = LQ)
-         }
- 
-         function OQ() {
-           const QQ = oQ;
+         }), [Uk, Ik]), (0, Dk.useEffect)((() => {
+           const kk = Pk.b.register(xk),
+             ek = rk.h.openCharacter(pk.current, nk);
+           Lk.current = ek;
```

#### 11. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L9639-L9684` → after: `L100-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L100-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/290.js#L100-L115) · [Before (L9639-L9684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/290.js#L9639-L9684)

```diff
-           for (; bv(CQ(oQ));) tv(cQ(oQ)) || (FQ = !1), oQ++;
-           return uQ = xQ.substring(QQ, oQ), FQ
-         }
- 
-         function sQ(QQ, FQ) {
-           return rQ(QQ, !0, FQ)
-         }
- 
-         function rQ(QQ, FQ, wQ) {
-           let LQ = [],
-             qQ = !1,
-             DQ = !1;
-           for (; LQ.length < QQ || FQ;) {
-             let QQ = cQ(oQ);
-             if (wQ && 95 === QQ) HQ |= 512, qQ ? (qQ = !1, DQ = !0) : SQ(DQ ? rk.Multiple_consecutive_numeric_separators_are_not_permitted : rk.Numeric_separators_are_not_allowed_here, oQ, 1), oQ++;
-             else {
- ... (30 more removed lines; see GitHub link above)
+           return ek.ready.then((() => {
+             ik && (sk(!0), dk.current())
+           })).catch((kk => {
+             console.error("Failed to set up the character preview", kk)
+           })), () => {
+             ik = !1, kk(), ek.resetCamera(), ek.close(), Lk.current = null
+           }
+         }), []), (0, Dk.useEffect)((() => {
+           yk <= 0 || Yk <= 0 || Lk.current.resize(yk, Yk)
+         }), [yk, Yk]), (0, Dk.useEffect)((() => {
+           if (!jk) return;
+           const kk = Ak.current;
+           for (const ek of Sk.y) {
+             const ik = null === Uk || void 0 === Uk ? void 0 : Uk[ek],
+               Dk = kk[ek];
+             ik && ik !== Dk ? Lk.current.setCosmetic(ek, ik) : !ik && Dk && Ck.current[ek] && Lk.current.setCosmetic(ek, Ck.current[ek])
```

#### 12. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L9686-L17201` → after: `L117-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L117-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/290.js#L117-L136) · [Before (L9686-L17201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/290.js#L9686-L17201)

```diff
-           return wQ
-         }
- 
-         function UQ(QQ) {
-           const FQ = 96 === cQ(oQ);
-           let wQ, LQ = ++oQ,
-             qQ = "";
-           for (;;) {
-             if (oQ >= DQ) {
-               qQ += xQ.substring(LQ, oQ), HQ |= 4, SQ(rk.Unterminated_template_literal), wQ = FQ ? 15 : 18;
-               break
-             }
-             const kQ = cQ(oQ);
-             if (96 === kQ) {
-               qQ += xQ.substring(LQ, oQ), oQ++, wQ = FQ ? 15 : 18;
-               break
- ... (7500 more removed lines; see GitHub link above)
+           Ak.current = {
+             ...Uk
+           }, qk.current = !0, Ik()
+         }), [Uk, jk, Ik]), (0, Dk.useEffect)((() => {
+           jk && Lk.current.playEmote(null !== Hk && void 0 !== Hk ? Hk : null)
+         }), [Hk, wk, jk]), (0, Dk.useEffect)((() => {
+           if (!jk || null === lk) return;
+           const kk = Lk.current,
+             {
+               pitch: ek,
+               radius: ik
+             } = rk.d[nk];
+           if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return kk.setOrbit({
+             yaw: lk + Mk,
+             pitch: ek,
+             radius: ik
+ ... (4 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L17203-L125586` → after: `L138-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L138-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/290.js#L138-L152) · [Before (L17203-L125586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/290.js#L17203-L125586)

```diff
-           kQ = !1;
-           for (let FQ = DQ; FQ >= 0; FQ--) {
-             const wQ = QQ << 16 | qQ[FQ],
-               LQ = wQ / 10 | 0;
-             qQ[FQ] = LQ, QQ = wQ - 10 * LQ, LQ && !kQ && (DQ = FQ, kQ = !0)
-           }
-           oQ = QQ + oQ
-         }
-         return oQ
-       }
- 
-       function iR(QQ) {
-         let {
-           negative: FQ,
-           base10Value: wQ
-         } = QQ;
- ... (108368 more removed lines; see GitHub link above)
+           const Sk = bk => {
+             kk.setOrbit({
+               yaw: lk + (bk - Dk) / 6e3 * 2 * Math.PI,
+               pitch: ek,
+               radius: ik
+             }), fk = requestAnimationFrame(Sk)
+           };
+           return fk = requestAnimationFrame(Sk), () => {
+             cancelAnimationFrame(fk), kk.resetCamera()
+           }
+         }), [jk, lk]), (0, mk.jsx)("div", {
+           className: "CharCustomisationPreview",
+           ref: pk
+         })
+       })))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/291.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/291.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4)

#### 1. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/291.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/291.js#L4-L6)

```diff
-   40876: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       collectImportedWorldCodePluginNames: () => mQ
+   40865: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       default: () => Ze
```

#### 2. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L8-L11` → after: `L8-L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L8-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/291.js#L8-L570) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/291.js#L8-L11)

```diff
-     var LQ = wQ(36483),
-       qQ = wQ(36481),
-       oQ = wQ(40792),
-       DQ = wQ.n(oQ);
+     var Dk = ik(40871),
+       fk = ik(40919),
+       Sk = ik(40924),
+       bk = ik(60),
+       rk = ik(75),
+       Pk = ik(40936),
+       mk = ik(40945),
+       Mk = ik(4707),
+       Kk = ik(40950),
+       xk = ik(1858),
+       nk = ik(40957),
+       Uk = ik(40972),
+       Hk = ik.n(Uk),
+       wk = ik(40926),
+       lk = ik(40934),
+       pk = ik(1327),
+ ... (547 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L14-L22` → after: `L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/291.js#L573) · [Before (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/291.js#L14-L22)

```diff
-       return DQ().isImportDeclaration(QQ) && DQ().isStringLiteral(QQ.moduleSpecifier) && function(QQ) {
-         const FQ = QQ.importClause;
-         if (!FQ) return !0;
-         if (FQ.isTypeOnly) return !1;
-         const wQ = FQ.namedBindings;
-         return !(wQ && !DQ().isNamespaceImport(wQ)) || !!FQ.name || wQ.elements.some((QQ => !QQ.isTypeOnly))
-       }(QQ) || DQ().isExportDeclaration(QQ) && QQ.moduleSpecifier && DQ().isStringLiteral(QQ.moduleSpecifier) && function(QQ) {
-         return !QQ.isTypeOnly && (!QQ.exportClause || !DQ().isNamedExports(QQ.exportClause) || 0 === QQ.exportClause.elements.length || QQ.exportClause.elements.some((QQ => !QQ.isTypeOnly)))
-       }(QQ) ? QQ.moduleSpecifier.text : DQ().isImportEqualsDeclaration(QQ) && !QQ.isTypeOnly && DQ().isExternalModuleReference(QQ.moduleReference) && QQ.moduleReference.expression && DQ().isStringLiteral(QQ.moduleReference.expression) ? QQ.moduleReference.expression.text : DQ().i … [truncated]
+       return "/" + kk
```

#### 4. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L26-L37` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/291.js#L577) · [Before (L26-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/291.js#L26-L37)

```diff
-       if (!FQ.startsWith("./") && !FQ.startsWith("../")) return;
-       const qQ = ((QQ.includes("/") ? QQ.slice(0, QQ.lastIndexOf("/") + 1) : "") + FQ).split("/"),
-         oQ = [];
-       for (const LQ of qQ)
-         if ("" !== LQ && "." !== LQ)
-           if (".." !== LQ) oQ.push(LQ);
-           else {
-             if (0 === oQ.length) return;
-             oQ.pop()
-           } const DQ = oQ.join("/");
-       for (const kQ of [DQ, `${DQ}.ts`, `${DQ}.js`])
-         if (kQ in wQ && !(0, LQ.n)(kQ)) return kQ
+       kk.getSourceFile(ek) && kk.deleteFile(ek), kk.createFile(ek, ik)
```

#### 5. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L41-L61` → after: `L581-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L581-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/291.js#L581-L592) · [Before (L41-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/291.js#L41-L61)

```diff
-       const FQ = new Set,
-         wQ = (0, qQ.b)(QQ);
-       if (!wQ) return [];
-       const LQ = [wQ],
-         oQ = new Set;
-       for (; LQ.length > 0;) {
-         const wQ = LQ.pop();
-         if (!wQ || oQ.has(wQ)) continue;
-         oQ.add(wQ);
-         const mQ = DQ().createSourceFile(wQ, QQ[wQ], DQ().ScriptTarget.Latest, !1),
-           uQ = mQ => {
-             const HQ = kQ(mQ),
-               bQ = HQ ? (0, qQ.n)(HQ) : null;
-             if (bQ) FQ.add(bQ);
-             else if (HQ) {
-               const FQ = vQ(wQ, HQ, QQ);
- ... (5 more removed lines; see GitHub link above)
+       return !!kk && ((0, Lk.x)(kk) || (0, Lk.t)(kk))
+     }
+ 
+     function ae(kk, ek, ik) {
+       return () => {
+         let Dk = [...ek.languageService.getSemanticDiagnostics(ik), ...ek.languageService.getSyntacticDiagnostics(ik)];
+         return Dk = Dk.filter((kk => !(0, jk.F)(kk.start) && !(0, jk.F)(kk.length) && !qe.has(kk.code))), kk || (Dk = Dk.filter((kk => !Ie.has(kk.code)))), Dk.map((kk => ({
+           from: kk.start,
+           to: kk.start + kk.length,
+           message: "string" === typeof kk.messageText ? kk.messageText : kk.messageText.messageText,
+           severity: ze.has(kk.code) ? "warning" : "error"
+         })))
```

#### 6. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L65-L66` → after: `L595-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L595-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/291.js#L595-L638) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/291.js#L65-L66)

```diff
-   },
-   40832: QQ => {
+ 
+     function We(kk, ek) {
+       return ik => {
+         var Dk, fk;
+         const Sk = kk.languageService.getCompletionsAtPosition(ek, ik.pos, {});
+         if (!Sk) return {
+           from: ik.pos,
+           options: []
+         };
+         let bk = null !== (Dk = null === (fk = Sk.optionalReplacementSpan) || void 0 === fk ? void 0 : fk.start) && void 0 !== Dk ? Dk : ik.pos;
+         if (!Sk.optionalReplacementSpan) {
+           const kk = ik.state.doc.sliceString(0, ik.pos);
+           for (; bk > 0 && /[\w$]/.test(kk[bk - 1]);) bk--
+         }
+         return Sk.entries = Sk.entries.filter((kk => kk.kind !== Hk().ScriptElementKind.warning)), {
+           from: bk,
+ ... (28 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L68-L79` → after: `L640-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L640-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/291.js#L640-L1183) · [Before (L68-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/291.js#L68-L79)

```diff
-       var FQ = new Error("Cannot find module '" + QQ + "'");
-       throw FQ.code = "MODULE_NOT_FOUND", FQ
-     }
-     FQ.keys = () => [], FQ.resolve = FQ, FQ.id = 40832, QQ.exports = FQ
-   },
-   40818: () => {},
-   40799: () => {},
-   40838: () => {},
-   40813: () => {},
-   40807: () => {},
-   40794: () => {},
-   40824: () => {}
+       return ek => {
+         const ik = document.createElement("div");
+         ik.className = "CodeEditorTooltip";
+         let Dk = !1;
+         return queueMicrotask((() => {
+           Dk || (rk.render((0, je.jsx)(xk.e, {
+             text: kk
+           }), ik), ek.requestMeasure())
+         })), {
+           dom: ik,
+           destroy() {
+             Dk = !0, queueMicrotask((() => {
+               rk.unmountComponentAtNode(ik)
+             }))
+           }
+         }
+ ... (528 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/292.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/292.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76)

#### 1. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L4-L6` → after: `L4-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/292.js#L4-L12) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/292.js#L4-L6)

```diff
-   40857: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       default: () => CQ
+   40871: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => Qe,
+       g: () => se,
+       i: () => ye,
+       j: () => Pk,
+       n: () => ve,
+       o: () => mk,
+       s: () => ne
```

#### 2. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L8-L18` → after: `L14-L15775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L14-L15775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/292.js#L14-L15775) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/292.js#L8-L18)

```diff
-     var LQ = wQ(53),
-       qQ = wQ(4593),
-       oQ = wQ(1682),
-       DQ = wQ(1070),
-       kQ = wQ.n(DQ),
-       vQ = wQ(1451),
-       mQ = wQ(1207),
-       uQ = wQ(4557),
-       HQ = wQ(4575),
-       bQ = wQ(4582),
-       YQ = wQ(1107);
+     var Dk = ik(40876),
+       fk = ik(40883),
+       Sk = ik(40902);
+     class bk {
+       constructor(kk, ek, ik, Dk) {
+         this.state = kk, this.pos = ek, this.explicit = ik, this.view = Dk, this.abortListeners = [], this.abortOnDocChange = !1
+       }
+       tokenBefore(kk) {
+         let ek = (0, Sk.lb)(this.state).resolveInner(this.pos, -1);
+         for (; ek && kk.indexOf(ek.name) < 0;) ek = ek.parent;
+         return ek ? {
+           from: ek.from,
+           to: this.pos,
+           text: this.state.sliceDoc(ek.from, this.pos),
+           type: ek.type
+         } : null
+ ... (15746 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L21` → after: `L15778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R15778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L15778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/292.js#L15778) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/292.js#L21)

```diff
-       return QQ.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
+       return kk.textDirectionAt(kk.state.selection.main.head) == rk.c.LTR
```

#### 4. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L23` → after: `L15780-L15781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R15780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L15780-L15781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/292.js#L15780-L15781) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/292.js#L23)

```diff
-     uQ.d.registerLanguage("javascript", HQ.e), uQ.d.registerLanguage("typescript", bQ.c);
+     const gk = kk => Zk(kk, !Ok(kk)),
+       Gk = kk => Zk(kk, Ok(kk));
```

#### 5. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L26-L27` → after: `L15784-L15802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R15784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L15784-L15802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/292.js#L15784-L15802) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/292.js#L26-L27)

```diff
-       const wQ = xQ(QQ).replace(/"/g, "&quot;");
-       return `<button type="button" class="DocsCopyButton ${FQ}" title="${wQ}" aria-label="${wQ}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
+       return ck(kk, (ik => ik.empty ? kk.moveByGroup(ik, ek) : Tk(ik, ek)))
+     }
+     "undefined" != typeof Intl && Intl.Segmenter;
+ 
+     function Rk(kk, ek, ik) {
+       if (ek.type.prop(ik)) return !0;
+       let Dk = ek.to - ek.from;
+       return Dk && (Dk > 2 || /[^\s,.;:]/.test(kk.sliceDoc(ek.from, ek.to))) || ek.firstChild
+     }
+ 
+     function Jk(kk, ek, ik) {
+       let Dk, fk, Sk = (0, Pk.lb)(kk).resolveInner(ek.head),
+         rk = ik ? mk.g.closedBy : mk.g.openedBy;
+       for (let bk = ek.head;;) {
+         let ek = ik ? Sk.childAfter(bk) : Sk.childBefore(bk);
+         if (!ek) break;
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L31-L39` → after: `L15806-L15822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R15806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L15806-L15822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/292.js#L15806-L15822) · [Before (L31-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/292.js#L31-L39)

```diff
-       const wQ = [],
-         LQ = QQ.toLowerCase(),
-         qQ = FQ.toLowerCase();
-       let oQ = 0;
-       for (; oQ < QQ.length;) {
-         const DQ = LQ.indexOf(qQ, oQ);
-         if (-1 === DQ) {
-           wQ.push(QQ.slice(oQ));
-           break
+       return ck(kk, (ik => {
+         if (!ik.empty) return Tk(ik, ek);
+         let Dk = kk.moveVertically(ik, ek);
+         return Dk.head != ik.head ? Dk : kk.moveToLineBoundary(ik, ek)
+       }))
+     }
+     const ee = kk => ke(kk, !1),
+       ie = kk => ke(kk, !0);
+ 
+     function De(kk) {
+       let ek, ik = kk.scrollDOM.clientHeight < kk.scrollDOM.scrollHeight - 2,
+         Dk = 0,
+         fk = 0;
+       if (ik) {
+         for (let ek of kk.state.facet(rk.f.scrollMargins)) {
+           let ik = ek(kk);
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L41-L44` → after: `L15824-L15863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R15824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L15824-L15863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/292.js#L15824-L15863) · [Before (L41-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/292.js#L41-L44)

```diff
-         DQ > oQ && wQ.push(QQ.slice(oQ, DQ)), wQ.push((0, YQ.jsx)("mark", {
-           className: "DocsHighlight",
-           children: QQ.slice(DQ, DQ + FQ.length)
-         }, DQ)), oQ = DQ + FQ.length
+         ek = kk.scrollDOM.clientHeight - Dk - fk
+       } else ek = (kk.dom.ownerDocument.defaultView || window).innerHeight;
+       return {
+         marginTop: Dk,
+         marginBottom: fk,
+         selfScroll: ik,
+         height: Math.max(kk.defaultLineHeight, ek - 5)
+       }
+     }
+ 
+     function fe(kk, ek) {
+       let ik, Dk = De(kk),
+         {
+           state: fk
+         } = kk,
+         Sk = Xk(fk.selection, (ik => ik.empty ? kk.moveVertically(ik, ek, Dk.height) : Tk(ik, ek)));
+ ... (24 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L48-L77` → after: `L15867-L15912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R15867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L15867-L15912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/292.js#L15867-L15912) · [Before (L48-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/292.js#L48-L77)

```diff
-     var eQ = wQ(1079),
-       MQ = wQ(1367),
-       GQ = wQ(36508),
-       pQ = wQ(36514);
-     const cQ = {
-         clientOptions: {
-           tabStep: "docsClientOptionsTab",
-           tabText: "codeEditor:tutorialClientOptionsTab",
-           pageStep: "docsClientOptions",
-           pageText: "codeEditor:tutorialClientOptions"
-         },
-         apiReference: {
-           tabStep: "docsApiReferenceTab",
-           tabText: "codeEditor:tutorialApiReferenceTab",
-           pageStep: "docsApiReference",
-           pageText: "codeEditor:tutorialApiReference"
- ... (14 more removed lines; see GitHub link above)
+ 
+     function Pe(kk, ek, ik) {
+       let Dk = !1,
+         fk = Xk(kk.selection, (ek => {
+           let fk = (0, Pk.cb)(kk, ek.head, -1) || (0, Pk.cb)(kk, ek.head, 1) || ek.head > 0 && (0, Pk.cb)(kk, ek.head - 1, 1) || ek.head < kk.doc.length && (0, Pk.cb)(kk, ek.head + 1, -1);
+           if (!fk || !fk.end) return ek;
+           Dk = !0;
+           let Sk = fk.start.from == ek.head ? fk.end.to : fk.end.from;
+           return ik ? bk.h.range(ek.anchor, Sk) : bk.h.cursor(Sk)
+         }));
+       return !!Dk && (ek(Bk(kk, fk)), !0)
+     }
+ 
+     function me(kk, ek) {
+       let ik = Xk(kk.state.selection, (kk => {
+         let ik = ek(kk);
+ ... (30 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L79-L103` → after: `L15914-L15959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R15914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L15914-L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/292.js#L15914-L15959) · [Before (L79-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/292.js#L79-L103)

```diff
-         const [OQ, sQ] = (0, LQ.useState)(qQ.c[0].id), rQ = (0, LQ.useRef)(null), IQ = (0, LQ.useRef)(null), [UQ, NQ] = (0, LQ.useState)(""), [TQ, KQ] = (0, LQ.useState)(0), [zQ, lQ] = (0, LQ.useState)(null), [jQ, aQ] = (0, LQ.useState)(!1), [XQ, fQ] = (0, LQ.useState)(160), VQ = … [truncated]
-         (0, LQ.useEffect)((() => {
-           gQ && UQ.length > 0 && (NQ(""), nQ((QQ => QQ + 1)))
-         }), [gQ, UQ]);
-         const PQ = UQ.length > 0,
-           ZQ = (0, LQ.useMemo)((() => function(QQ) {
-             if (!QQ) return [];
-             const FQ = QQ.toLowerCase(),
-               wQ = [];
-             for (const LQ of qQ.c) {
-               const QQ = LQ.content.toLowerCase();
-               let qQ = 0,
-                 oQ = -1,
-                 DQ = 0,
-                 kQ = QQ.indexOf(FQ, DQ);
-               for (; - 1 !== kQ;) - 1 === oQ && (oQ = kQ), qQ++, DQ = kQ + FQ.length, kQ = QQ.indexOf(FQ, DQ);
- ... (9 more removed lines; see GitHub link above)
+         return ik(Bk(ek, {
+           anchor: 0
+         })), !0
+       },
+       Le = kk => {
+         let {
+           state: ek,
+           dispatch: ik
+         } = kk;
+         return ik(Bk(ek, {
+           anchor: ek.doc.length
+         })), !0
+       },
+       Ce = kk => {
+         let {
+           state: ek,
+ ... (30 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L105-L107` → after: `L15961-L16008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R15961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L15961-L16008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/292.js#L15961-L16008) · [Before (L105-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/292.js#L105-L107)

```diff
-             return wQ.sort(((QQ, FQ) => FQ.matchCount - QQ.matchCount)), wQ
-           }(UQ)), [UQ]),
-           yQ = PQ ? null !== (FQ = null !== (wQ = null === (DQ = ZQ.find((QQ => QQ.doc.id === OQ))) || void 0 === DQ ? void 0 : DQ.doc) && void 0 !== wQ ? wQ : null === (HQ = ZQ[0]) || void 0 === HQ ? void 0 : HQ.doc) && void 0 !== FQ ? FQ : null : null !== (bQ = qQ.c.find((QQ => … [truncated]
+             if (Sk.head == ik.head) break;
+             ik = Sk
+           }
+       }
+       return fk.length != Dk.lw.length && (kk.dispatch(Bk(ik, bk.h.create(fk, fk.length - 1))), !0)
+     }
+ 
+     function se(kk, ek) {
+       if (kk.state.readOnly) return !1;
+       let ik = "delete.selection",
+         {
+           state: Dk
+         } = kk,
+         fk = Dk.changeByRange((Dk => {
+           let {
+             from: fk,
+ ... (32 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L109-L172` → after: `L16010-L16207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R16010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L16010-L16207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/292.js#L16010-L16207) · [Before (L109-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/292.js#L109-L172)

```diff
-             t: BQ
-           } = (0, mQ.y)(),
-           dQ = BQ("codeEditor:copySnippet"),
-           QF = (0, LQ.useMemo)((() => yQ ? function(QQ, FQ, wQ, LQ) {
-             let qQ = FQ;
-             qQ = qQ.replace(/\r\n/g, "\n");
-             const oQ = [];
-             qQ = qQ.replace(/```(\w*)\n([\s\S]*?)```/g, ((QQ, FQ, LQ) => {
-               const qQ = oQ.length;
-               let DQ = xQ(LQ);
-               try {
-                 DQ = uQ.d.highlight(LQ.trimEnd(), {
-                   language: FQ
-                 }).value
-               } catch (kQ) {
-                 console.warn("Could not highlight documentation code block", kQ)
- ... (48 more removed lines; see GitHub link above)
+             state: mk
+           } = kk,
+           Mk = mk.doc.lineAt(rk);
+         if (ik && !ek && rk > Mk.from && rk < Mk.from + 200 && !/[^ \t]/.test(fk = Mk.text.slice(0, rk - Mk.from))) {
+           if ("\t" == fk[fk.length - 1]) return rk - 1;
+           let kk = (0, bk.S)(fk, mk.tabSize) % (0, Pk.Q)(mk) || (0, Pk.Q)(mk);
+           for (let ek = 0; ek < kk && " " == fk[fk.length - 1 - ek]; ek++) rk--;
+           Sk = rk
+         } else Sk = (0, bk.U)(Mk.text, rk - Mk.from, ek, ek) + Mk.from, Sk == rk && Mk.number != (ek ? mk.doc.lines : 1) ? Sk += ek ? 1 : -1 : !ek && /[\ufe00-\ufe0f]/.test(Mk.text.slice(Sk - Mk.from, rk - Mk.from)) && (Sk = (0, bk.U)(Mk.text, Sk - Mk.from, !1, !1) + Mk.from);
+         return Sk
+       })),
+       Fe = kk => Ve(kk, !1, !0),
+       ue = kk => Ve(kk, !0, !1),
+       qe = (kk, ek) => se(kk, (ik => {
+         let Dk = ik.head,
+           {
+ ... (182 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L174-L207` → after: `L16209-L16216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R16209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L16209-L16216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/292.js#L16209-L16216) · [Before (L174-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/292.js#L174-L207)

```diff
-           const FQ = QQ => {
-             var FQ, wQ, LQ, qQ, oQ;
-             const DQ = null === (FQ = (wQ = QQ.target).closest) || void 0 === FQ ? void 0 : FQ.call(wQ, ".DocsCopyButton");
-             if (!DQ) return;
-             QQ.preventDefault(), QQ.stopPropagation();
-             const kQ = null !== (LQ = null === (qQ = DQ.parentElement) || void 0 === qQ || null === (oQ = qQ.querySelector("code")) || void 0 === oQ ? void 0 : oQ.textContent) && void 0 !== LQ ? LQ : "";
-             navigator.clipboard.writeText(kQ.trimEnd()).then((() => {
-               DQ.classList.add("Copied"), setTimeout((() => {
-                 DQ.classList.remove("Copied")
-               }), 1500)
-             })).catch((QQ => {
-               console.warn("Could not copy documentation code", QQ)
-             }))
-           };
-           return QQ.addEventListener("click", FQ, !0), () => {
-             QQ.removeEventListener("click", FQ, !0)
- ... (18 more removed lines; see GitHub link above)
+           let fk = (0, bk.S)(Dk, ek.tabSize),
+             Sk = 0,
+             rk = (0, Pk._)(ek, Math.max(0, fk - (0, Pk.Q)(ek)));
+           for (; Sk < Dk.length && Sk < rk.length && Dk.charCodeAt(Sk) == rk.charCodeAt(Sk);) Sk++;
+           ik.push({
+             from: kk.from + Sk,
+             to: kk.from + Dk.length,
+             insert: rk.slice(Sk)
```

#### 13. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L209-L226` → after: `L16218-L16360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R16218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L16218-L16360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/292.js#L16218-L16360) · [Before (L209-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/292.js#L209-L226)

```diff
-         }), [zQ, QF]);
-         const LF = (0, LQ.useCallback)((QQ => {
-             if (!IQ.current) return;
-             const FQ = IQ.current.querySelectorAll(".DocsHighlight");
-             if (0 === FQ.length) return;
-             const wQ = (TQ + QQ + FQ.length) % FQ.length;
-             KQ(wQ), lQ(wQ)
-           }), [TQ]),
-           qF = (0, LQ.useCallback)((QQ => {
-             var FQ;
-             const wQ = null === (FQ = cQ[QQ]) || void 0 === FQ ? void 0 : FQ.tabStep;
-             wQ && wQ === JQ && (0, pQ.f)(wQ), QQ !== OQ ? (aQ(!0), sQ(QQ), KQ(0), IQ.current && (IQ.current.scrollTop = 0), PQ && lQ(0)) : aQ(!jQ)
-           }), [PQ, OQ, jQ, JQ]),
-           oF = (0, LQ.useCallback)((QQ => {
-             var FQ;
-             const wQ = Array.from((null === (FQ = IQ.current) || void 0 === FQ ? void 0 : FQ.querySelectorAll(".DocsH2, .DocsH3")) || []).find((FQ => {
- ... (2 more removed lines; see GitHub link above)
+         })), {
+           userEvent: "delete.dedent"
+         })), !0)
+       },
+       Xe = [{
+         key: "Alt-ArrowLeft",
+         mac: "Ctrl-ArrowLeft",
+         run: kk => ck(kk, (ek => Jk(kk.state, ek, !Ok(kk)))),
+         shift: kk => me(kk, (ek => Jk(kk.state, ek, !Ok(kk))))
+       }, {
+         key: "Alt-ArrowRight",
+         mac: "Ctrl-ArrowRight",
+         run: kk => ck(kk, (ek => Jk(kk.state, ek, Ok(kk)))),
+         shift: kk => me(kk, (ek => Jk(kk.state, ek, Ok(kk))))
+       }, {
+         key: "Alt-ArrowUp",
+ ... (127 more added lines; see GitHub link above)
```
