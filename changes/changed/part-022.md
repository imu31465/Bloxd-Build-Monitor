# Changed — Bundle Modifications Report (Part 022 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `22 / 86` (**277** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 021](part-021.md) · [Part 023 →](part-023.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/297.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/297.js` (87 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e)

#### 86. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L1201-L1230` → after: `L2628-L2644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR2628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L2628-L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/297.js#L2628-L2644) · [Before (L1201-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/297.js#L1201-L1230)

```diff
-     }
- 
-     function MB(BB) {
-       YB.forEach((OB => {
-         OB.setLogLevel(BB)
-       }))
-     }
- 
-     function PB(BB, OB) {
-       for (const GB of YB) {
-         let YB = null;
-         OB && OB.level && (YB = QB[OB.level]), GB.userLogHandler = null === BB ? null : function(OB, GB) {
-           for (var QB = arguments.length, oB = new Array(QB > 2 ? QB - 2 : 0), jB = 2; jB < QB; jB++) oB[jB - 2] = arguments[jB];
-           const yB = oB.map((BB => {
-             if (null == BB) return null;
-             if ("string" === typeof BB) return BB;
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

#### 87. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L1233` → after: `L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR2648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/297.js#L2648) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/297.js#L1233)

```diff
-     }
+     }(mW = tW.prototype).projectToRef ?? (mW.projectToRef = (0, wW.k)("SubMesh", "projectToRef"))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/298.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/298.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L5-L18` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L4-L6) · [Before (L5-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L5-L18)

```diff
-   41533: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       getAnalytics: () => bO,
-       getGoogleAnalyticsClientId: () => sO,
-       initializeAnalytics: () => CO,
-       isSupported: () => HO,
-       logEvent: () => GG,
-       setAnalyticsCollectionEnabled: () => BG,
-       setConsent: () => YG,
-       setCurrentScreen: () => vO,
-       setDefaultEventParameters: () => OG,
-       setUserId: () => xO,
-       setUserProperties: () => tO,
-       settings: () => eO
+   53769: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => mW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L20-L35` → after: `L8-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L8-L26) · [Before (L20-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L20-L35)

```diff
-     var YB = GB(41513),
-       DB = GB(41525),
-       QB = GB(41520),
-       oB = GB(41515);
-     let jB, yB;
-     const JB = new WeakMap,
-       MB = new WeakMap,
-       PB = new WeakMap,
-       zB = new WeakMap,
-       lB = new WeakMap;
-     let pB = {
-       get(BB, OB, GB) {
-         if (BB instanceof IDBTransaction) {
-           if ("done" === OB) return MB.get(BB);
-           if ("objectStoreNames" === OB) return BB.objectStoreNames || PB.get(BB);
-           if ("store" === OB) return GB.objectStoreNames[1] ? void 0 : GB.objectStore(GB.objectStoreNames[0])
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

#### 3. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L37-L53` → after: `L28-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L28-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L28-L185) · [Before (L37-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L37-L53)

```diff
-         return NB(BB[OB])
-       },
-       set: (BB, OB, GB) => (BB[OB] = GB, !0),
-       has: (BB, OB) => BB instanceof IDBTransaction && ("done" === OB || "store" === OB) || OB in BB
-     };
- 
-     function qB(BB) {
-       return BB !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (yB || (yB = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(BB) ? function() {
-         for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
-         return BB.apply(RB(this), GB), NB(JB.get(this))
-       } : function() {
-         for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
-         return NB(BB.apply(RB(this), GB))
-       } : function(OB) {
-         for (var GB = arguments.length, YB = new Array(GB > 1 ? GB - 1 : 0), DB = 1; DB < GB; DB++) YB[DB - 1] = arguments[DB];
-         const QB = BB.call(RB(this), OB, ...YB);
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

#### 4. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L55-L213` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L187-L188) · [Before (L55-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L55-L213)

```diff
-     }
- 
-     function ZB(BB) {
-       return "function" === typeof BB ? qB(BB) : (BB instanceof IDBTransaction && function(BB) {
-         if (MB.has(BB)) return;
-         const OB = new Promise(((OB, GB) => {
-           const YB = () => {
-               BB.removeEventListener("complete", DB), BB.removeEventListener("error", QB), BB.removeEventListener("abort", QB)
-             },
-             DB = () => {
-               OB(), YB()
-             },
-             QB = () => {
-               GB(BB.error || new DOMException("AbortError", "AbortError")), YB()
-             };
-           BB.addEventListener("complete", DB), BB.addEventListener("error", QB), BB.addEventListener("abort", QB)
- ... (143 more removed lines; see GitHub link above)
+       update(WW) {
+         this.updateMipLevel(WW, 0)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L215-L385` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L190-L191) · [Before (L215-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L215-L385)

```diff
-     }
- 
-     function hB(BB) {
-       return `${BB.appName}!${BB.appId}`
-     }
-     const aB = new Map;
- 
-     function eB(BB, OB) {
-       const GB = hB(BB);
-       TB(GB, OB),
-         function(BB, OB) {
-           const GB = CB();
-           GB && GB.postMessage({
-             key: BB,
-             fid: OB
-           });
- ... (155 more removed lines; see GitHub link above)
+       updateMipLevel(WW, iW) {
+         this._getEngine().updateRawTexture(this._texture, WW, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, iW), this._waitingForData = !1
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L387-L396` → after: `L193-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L193-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L193-L196) · [Before (L387-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L387-L396)

```diff
-     }
-     async function YO(BB) {
-       let OB = await DO(BB.appConfig);
-       for (; 1 === OB.registrationStatus;) await wB(100), OB = await DO(BB.appConfig);
-       if (0 === OB.registrationStatus) {
-         const {
-           installationEntry: OB,
-           registrationPromise: GB
-         } = await GO(BB);
-         return GB || OB
+       clone() {
+         if (!this._texture) return super.clone();
+         const WW = new EW(null, this.getSize().width, this.getSize().height, this.format, this.bD(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
+         return WW._texture = this._texture, this._texture.incrementReferences(), WW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L398-L432` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L198-L199) · [Before (L398-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L398-L432)

```diff
-       return OB
-     }
- 
-     function DO(BB) {
-       return OO(BB, (BB => {
-         if (!BB) throw mB.create("installation-not-found");
-         return QO(BB)
-       }))
-     }
- 
-     function QO(BB) {
-       return 1 === (OB = BB).registrationStatus && OB.registrationTime + fB < Date.now() ? {
-         fid: BB.fid,
-         registrationStatus: 0
-       } : BB;
-       var OB
- ... (19 more removed lines; see GitHub link above)
+       isReady() {
+         return super.isReady() && !this._waitingForData
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L434-L447` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L201-L202) · [Before (L434-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L434-L447)

```diff
-       const jB = {
-           installation: {
-             sdkVersion: kB,
-             appId: GB.appId
-           }
-         },
-         yB = {
-           method: "POST",
-           headers: QB,
-           body: JSON.stringify(jB)
-         },
-         JB = await XB((() => fetch(DB, yB)));
-       if (JB.ok) {
-         return iB(await JB.json())
+       static CreateLuminanceTexture(WW, iW, OW, mW) {
+         return new EW(WW, iW, OW, 1, mW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L449-L599` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L204-L205) · [Before (L449-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L449-L599)

```diff
-       throw await LB("Generate Auth Token", JB)
-     }
-     async function jO(BB) {
-       let OB, GB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       const YB = await OO(BB.appConfig, (YB => {
-         if (!JO(YB)) throw mB.create("not-registered");
-         const DB = YB.authToken;
-         if (!GB && function(BB) {
-             return 2 === BB.requestStatus && ! function(BB) {
-               const OB = Date.now();
-               return OB < BB.creationTime || BB.creationTime + BB.expiresIn < OB + KB
-             }(BB)
-           }(DB)) return YB;
-         if (1 === DB.requestStatus) return OB = async function(BB, OB) {
-           let GB = await yO(BB.appConfig);
-           for (; 1 === GB.authToken.requestStatus;) await wB(100), GB = await yO(BB.appConfig);
- ... (135 more removed lines; see GitHub link above)
+       static CreateLuminanceAlphaTexture(WW, iW, OW, mW) {
+         return new EW(WW, iW, OW, 2, mW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L601-L675` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L207-L208) · [Before (L601-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L601-L675)

```diff
-       return BB
-     }
- 
-     function VO(BB) {
-       return Promise.all(BB.map((BB => BB.catch((BB => BB)))))
-     }
- 
-     function SO(BB, OB) {
-       const GB = function(BB, OB) {
-           let GB;
-           return window.trustedTypes && (GB = window.trustedTypes.createPolicy(BB, OB)), GB
-         }("firebase-js-sdk-policy", {
-           createScriptURL: AO
-         }),
-         YB = document.createElement("script"),
-         DB = `${ZO}?l=${BB}&id=${OB}`;
- ... (59 more removed lines; see GitHub link above)
+       static CreateAlphaTexture(WW, iW, OW, mW) {
+         return new EW(WW, iW, OW, 0, mW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L677-L682` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L210-L211) · [Before (L677-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L677-L682)

```diff
-     }
-     const UO = new class {
-       constructor() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-           OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
-         this.throttleMetadata = BB, this.intervalMillis = OB
+       static CreateRGBTexture(WW, iW, OW, mW) {
+         return new EW(WW, iW, OW, 4, mW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L684-L685` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L213-L214) · [Before (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L684-L685)

```diff
-       getThrottleMetadata(BB) {
-         return this.throttleMetadata[BB]
+       static CreateRGBATexture(WW, iW, OW, mW) {
+         return new EW(WW, iW, OW, 5, mW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L687-L688` → after: `L216-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L216-L217) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L687-L688)

```diff
-       setThrottleMetadata(BB, OB) {
-         this.throttleMetadata[BB] = OB
+       static CreateRGBAStorageTexture(WW, iW, OW, mW) {
+         return new EW(WW, iW, OW, 5, mW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L690-L691` → after: `L219-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L219-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L219-L223) · [Before (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L690-L691)

```diff
-       deleteThrottleMetadata(BB) {
-         delete this.throttleMetadata[BB]
+       static CreateRTexture(WW, iW, OW, NW) {
+         let PW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           LW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           cW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : mW.h.TRILINEAR_SAMPLINGMODE;
+         return new EW(WW, iW, OW, 6, NW, PW, LW, cW, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L693-L715` → after: `L225-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L225-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L225-L229) · [Before (L693-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L693-L715)

```diff
-     };
- 
-     function fO(BB) {
-       return new Headers({
-         Accept: "application/json",
-         "x-goog-api-key": BB
-       })
-     }
-     async function kO(BB) {
-       let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UO,
-         GB = arguments.length > 2 ? arguments[2] : void 0;
-       const {
-         appId: YB,
-         apiKey: DB,
-         measurementId: QB
-       } = BB.options;
- ... (7 more removed lines; see GitHub link above)
+       static CreateRStorageTexture(WW, iW, OW, NW) {
+         let PW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           LW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           cW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : mW.h.TRILINEAR_SAMPLINGMODE;
+         return new EW(WW, iW, OW, 6, NW, PW, LW, cW, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L730-L758` → after: `L232-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L232-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L232-L261) · [Before (L730-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L730-L758)

```diff
-     async function dO(BB, OB, GB) {
-       let {
-         throttleEndTimeMillis: YB,
-         backoffCount: DB
-       } = OB, oB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UO;
-       var jB;
-       const {
-         appId: yB,
-         measurementId: JB
-       } = BB;
-       try {
-         await
-         function(BB, OB) {
-           return new Promise(((GB, YB) => {
-             const DB = Math.max(OB - Date.now(), 0),
-               QB = setTimeout(GB, DB);
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

#### 17. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L760-L793` → after: `L263-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L263-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L263-L280) · [Before (L760-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L760-L793)

```diff
-       try {
-         const OB = await async function(BB) {
-           var OB;
-           const {
-             appId: GB,
-             apiKey: YB
-           } = BB, DB = {
-             method: "GET",
-             headers: fO(YB)
-           }, QB = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", GB), oB = await fetch(QB, DB);
-           if (200 !== oB.status && 304 !== oB.status) {
-             let BB = "";
-             try {
-               const GB = await oB.json();
-               (null === (OB = GB.error) || void 0 === OB ? void 0 : OB.message) && (BB = GB.error.message)
-             } catch (jB) {}
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

#### 18. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L795` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L282-L283) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L795)

```diff
-           throw MB
+           const WW = new tW.o("colorShader", this.bD(), "color", cW, !1);
+           WW.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(WW)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L804-L807` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L286-L287) · [Before (L804-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L804-L807)

```diff
-     }
-     class KO {
-       constructor() {
-         this.listeners = []
+       getClassName() {
+         return "LinesMesh"
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L809-L810` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L289-L290) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L809-L810)

```diff
-       addEventListener(BB) {
-         this.listeners.push(BB)
+       get material() {
+         return this._internalAbstractMeshDataInfo._material
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L812-L813` → after: `L292-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L292-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L292-L296) · [Before (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L812-L813)

```diff
-       abort() {
-         this.listeners.forEach((BB => BB()))
+       set material(WW) {
+         const iW = this.material;
+         if (iW === WW) return;
+         const OW = iW && this._ownsMaterial;
+         this._ownsMaterial = !1, this._setInternalMaterial(WW), OW && iW?.dispose()
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L815-L855` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L298-L299) · [Before (L815-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L815-L855)

```diff
-     }
-     let uO, mO;
- 
-     function IO(BB) {
-       mO = BB
-     }
- 
-     function FO(BB) {
-       uO = BB
-     }
-     async function iO(BB, OB, GB, YB, DB, oB, jB) {
-       var yB;
-       const JB = kO(BB);
-       JB.then((OB => {
-         GB[OB.measurementId] = OB.appId, BB.options.measurementId && OB.measurementId !== BB.options.measurementId && NO.warn(`The measurement ID in the local Firebase config (${BB.options.measurementId}) does not match the measurement ID fetched from the server (${OB.measurement … [truncated]
-       })).catch((BB => NO.error(BB))), OB.push(JB);
- ... (25 more removed lines; see GitHub link above)
+       _setInternalMaterial(WW) {
+         this._setMaterial(WW), this.material && (this.material.fillMode = wW.d.LineListDrawMode, this.material.disableLighting = !0)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L857-L858` → after: `L301-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L301-L302) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L857-L858)

```diff
-       _delete() {
-         return delete gO[this.app.options.appId], Promise.resolve()
+       get checkCollisions() {
+         return !1
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L860-L881` → after: `L304-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L304-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L304-L314) · [Before (L860-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L860-L881)

```diff
-     }
-     let gO = {},
-       rO = [];
-     const XO = {};
-     let wO, EO, cO = "dataLayer",
-       hO = "gtag",
-       aO = !1;
- 
-     function eO(BB) {
-       if (aO) throw WO.create("already-initialized");
-       BB.dataLayerName && (cO = BB.dataLayerName), BB.gtagName && (hO = BB.gtagName)
-     }
- 
-     function TO(BB, OB, GB) {
-       ! function() {
-         const BB = [];
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

#### 25. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L883-L888` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L316) · [Before (L883-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L883-L888)

```diff
-       }();
-       const YB = BB.options.appId;
-       if (!YB) throw WO.create("no-app-id");
-       if (!BB.options.apiKey) {
-         if (!BB.options.measurementId) throw WO.create("no-api-key");
-         NO.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${BB.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
+         return this
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L890-L911` → after: `L318-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L318-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L318-L321) · [Before (L890-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L890-L911)

```diff
-       if (null != gO[YB]) throw WO.create("already-exists", {
-         id: YB
-       });
-       if (!aO) {
-         ! function(BB) {
-           let OB = [];
-           Array.isArray(window[BB]) ? OB = window[BB] : window[BB] = OB
-         }(cO);
-         const {
-           wrappedGtag: BB,
-           gtagCore: OB
-         } = function(BB, OB, GB, YB, DB) {
-           let QB = function() {
-             for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
-             window[YB].push(arguments)
-           };
- ... (6 more removed lines; see GitHub link above)
+       _draw(WW, iW, OW) {
+         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
+         const mW = this.bD().VA();
+         return this._unIndexed ? mW.drawArraysType(wW.d.LineListDrawMode, WW.verticesStart, WW.verticesCount, OW) : mW.drawElementsType(wW.d.LineListDrawMode, WW.indexStart, WW.indexCount, OW), this
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L913-L930` → after: `L323-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L323-L325) · [Before (L913-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L913-L930)

```diff
-       gO[YB] = iO(BB, rO, XO, OB, wO, cO, GB);
-       return new LO(BB)
-     }
- 
-     function bO() {
-       let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, YB.S)();
-       BB = (0, QB.E)(BB);
-       const OB = (0, YB.D)(BB, qO);
-       return OB.isInitialized() ? OB.getImmediate() : CO(BB)
-     }
- 
-     function CO(BB) {
-       let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const GB = (0, YB.D)(BB, qO);
-       if (GB.isInitialized()) {
-         const BB = GB.getImmediate();
- ... (2 more removed lines; see GitHub link above)
+       dispose(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || iW) && this.material?.dispose(!1, !1, !0), super.dispose(WW)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L932-L943` → after: `L327-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L327-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L327-L334) · [Before (L932-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L932-L943)

```diff
-       return GB.initialize({
-         options: OB
-       })
-     }
-     async function HO() {
-       if ((0, QB.I)()) return !1;
-       if (!(0, QB.l)()) return !1;
-       if (!(0, QB.S)()) return !1;
-       try {
-         return await (0, QB.ib)()
-       } catch (BB) {
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

#### 29. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L945-L986` → after: `L336-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L336-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L336-L340) · [Before (L945-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L945-L986)

```diff
-     }
- 
-     function vO(BB, OB, GB) {
-       BB = (0, QB.E)(BB), async function(BB, OB, GB, YB) {
-         if (YB && YB.global) return BB("set", {
-           screen_name: GB
-         }), Promise.resolve();
-         BB("config", await OB, {
-           update: !0,
-           screen_name: GB
-         })
-       }(EO, gO[BB.app.options.appId], OB, GB).catch((BB => NO.error(BB)))
-     }
-     async function sO(BB) {
-       return BB = (0, QB.E)(BB), async function(BB, OB) {
-         const GB = await OB;
- ... (26 more removed lines; see GitHub link above)
+       createInstance(WW) {
+         const iW = new lW(WW, this);
+         if (this.bV) {
+           iW.bV = {};
+           for (const WW in this.bV) iW.bV[WW] = this.bV[WW]
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L988-L1003` → after: `L342-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L342-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L342-L350) · [Before (L988-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L988-L1003)

```diff
-         BB("config", await OB, {
-           update: !0,
-           user_properties: GB
-         })
-       }(EO, gO[BB.app.options.appId], OB, GB).catch((BB => NO.error(BB)))
-     }
- 
-     function BG(BB, OB) {
-       BB = (0, QB.E)(BB), async function(BB, OB) {
-         const GB = await BB;
-         window[`ga-disable-${GB}`] = !OB
-       }(gO[BB.app.options.appId], OB).catch((BB => NO.error(BB)))
-     }
- 
-     function OG(BB) {
-       EO ? EO("set", BB) : FO(BB)
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

#### 31. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L1005-L1015` → after: `L352-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L352-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L352-L359) · [Before (L1005-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L1005-L1015)

```diff
- 
-     function GG(BB, OB, GB, YB) {
-       BB = (0, QB.E)(BB), async function(BB, OB, GB, YB, DB) {
-         if (DB && DB.global) BB("event", GB, YB);
-         else {
-           const DB = await OB;
-           BB("event", GB, Object.assign(Object.assign({}, YB), {
-             send_to: DB
-           }))
-         }
-       }(EO, gO[BB.app.options.appId], OB, GB, YB).catch((BB => NO.error(BB)))
+     xW.ForceGLSL = !1;
+     class lW extends cW.e {
+       constructor(WW, iW) {
+         super(WW, iW), this.intersectionThreshold = iW.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L1018-L1039` → after: `L363-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L363-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/298.js#L363-L365) · [Before (L1018-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/298.js#L1018-L1039)

```diff
-     function YG(BB) {
-       EO ? EO("consent", "update", BB) : IO(BB)
-     }
-     const DG = "@firebase/analytics",
-       QG = "0.10.0";
-     (0, YB.F)(new oB.f(qO, ((BB, OB) => {
-       let {
-         options: GB
-       } = OB;
-       return TO(BB.getProvider("app").getImmediate(), BB.getProvider("installations-internal").getImmediate(), GB)
-     }), "PUBLIC")), (0, YB.F)(new oB.f("analytics-internal", (function(BB) {
-       try {
-         const OB = BB.getProvider(qO).getImmediate();
-         return {
-           logEvent: (BB, GB, YB) => GG(OB, BB, GB, YB)
-         }
- ... (6 more removed lines; see GitHub link above)
+     function bW() {
+       AW || (AW = !0, LW.e._LinesMeshParser = (WW, iW) => xW.Parse(WW, iW))
+     }(mW = xW.prototype).enableEdgesRendering ?? (mW.enableEdgesRendering = (0, ZW.k)("LinesMesh", "enableEdgesRendering")), (EW = lW.prototype).enableEdgesRendering ?? (EW.enableEdgesRendering = (0, ZW.k)("InstancedLinesMesh", "enableEdgesRendering"))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/299.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/299.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L5-L3926` → after: `L4-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L4-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/299.js#L4-L239) · [Before (L5-L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/299.js#L5-L3926)

```diff
-     41540: (BB, OB, GB) => {
-         GB.r(OB), GB.d(OB, {
-           ActionCodeOperation: () => zB,
-           ActionCodeURL: () => sO,
-           AuthCredential: () => XO,
-           AuthErrorCodes: () => NB,
-           EmailAuthCredential: () => TO,
-           EmailAuthProvider: () => tO,
-           FacebookAuthProvider: () => YG,
-           FactorId: () => yB,
-           GithubAuthProvider: () => QG,
-           GoogleAuthProvider: () => DG,
-           OAuthCredential: () => CO,
-           OAuthProvider: () => GG,
-           OperationType: () => PB,
-           PhoneAuthCredential: () => vO,
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

#### 2. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L3928-L3952` → after: `L241-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L241-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/299.js#L241-L354) · [Before (L3928-L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/299.js#L3928-L3952)

```diff
-           ED = new Map([
-             ["identitytoolkit.googleapis.com", "p"],
-             ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
-             ["test-identitytoolkit.sandbox.googleapis.com", "t"]
-           ]);
- 
-         function cD(BB) {
-           const OB = BB.config;
-           fB(OB.authDomain, BB, "auth-domain-config-required");
-           const GB = OB.emulator ? FB(OB, "emulator/auth/iframe") : `https://${BB.config.authDomain}/__/auth/iframe`,
-             QB = {
-               apiKey: OB.apiKey,
-               appName: BB.name,
-               v: DB.i
-             },
-             oB = ED.get(BB.config.apiHost);
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

#### 3. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L3954-L4026` → after: `L356-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L356-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/299.js#L356-L573) · [Before (L3954-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/299.js#L3954-L4026)

```diff
-         class aD {
-           constructor(BB) {
-             this.window = BB, this.associatedEvent = null
-           }
-           close() {
-             if (this.window) try {
-               this.window.close()
-             } catch (BB) {}
-           }
-         }
- 
-         function eD(BB, OB, GB) {
-           let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
-             QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
-           const oB = Math.max((window.screen.availHeight - QB) / 2, 0).toString(),
-             jB = Math.max((window.screen.availWidth - DB) / 2, 0).toString();
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/300.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/300.js` (87 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03)

#### 1. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L4-L142` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L4-L6) · [Before (L4-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L4-L142)

```diff
-   41579: (BB, OB, GB) => {
-     GB.d(OB, {
-       $: () => tO,
-       $c: () => AB,
-       $d: () => BO,
-       $f: () => qG,
-       A: () => bO,
-       Ae: () => lG,
-       Be: () => CG,
-       Cb: () => OG,
-       Cc: () => cB,
-       Cd: () => FB,
-       Dc: () => TB,
-       De: () => TG,
-       Df: () => xG,
-       E: () => zB,
- ... (123 more removed lines; see GitHub link above)
+   42e3: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => dO
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L144-L784` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L8-L12) · [Before (L144-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L144-L784)

```diff
-     const YB = -2147483648,
-       DB = 12,
-       QB = 12,
-       oB = 4095,
-       jB = {
-         Lifeform: 1,
-         Throwable: 2,
-         Mesh: 3,
-         Audio: 4,
-         Item: 5
-       },
-       yB = {
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

#### 3. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L786-L840` → after: `L14-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L14-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L14-L23) · [Before (L786-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L786-L840)

```diff
-     function yG(BB, OB, GB, YB, DB) {
-       var QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB, NB, RB, WB, AB, VB, SB, nB, UB, fB, kB, dB, KB, uB;
-       switch (BB) {
-         case 32:
-           return 4 === YB && (null === (QB = DB.tickEnd) || void 0 === QB || QB.call(DB, NO.kP(OB, GB)), !0);
-         case 33:
-           return 12 === YB && (null === (oB = DB.entitySpawned) || void 0 === oB || oB.call(DB, RO.serverId(OB, GB), RO.index(OB, GB), RO.kind(OB, GB)), !0);
-         case 34:
-           return 12 === YB && (null === (jB = DB.entityDespawned) || void 0 === jB || jB.call(DB, RO.serverId(OB, GB), RO.index(OB, GB), RO.kind(OB, GB)), !0);
-         case 39:
-           return !(YB < 20) && (null === (yB = DB.changeBlockFail) || void 0 === yB || yB.call(DB, WO.pos(OB, GB, 0), WO.pos(OB, GB, 1), WO.pos(OB, GB, 2), WO.actual(OB, GB), WO.dataLen(OB, GB), GB + 20, YB - 20), !0);
-         case 46:
-           return 0 === YB && (null === (JB = DB.changeBlockFailEnd) || void 0 === JB || JB.call(DB), !0);
-         case 48:
-           return 20 === YB && (null === (MB = DB.inventoryEvent) || void 0 === MB || MB.call(DB, AO.what(OB, GB), AO.value(OB, GB), AO.pos(OB, GB, 0), AO.pos(OB, GB, 1), AO.pos(OB, GB, 2), AO.block(OB, GB)), !0);
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

#### 4. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L899` → after: `L29-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L29-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L29-L33) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L899)

```diff
-       return MG.buffer !== BB.buffer && (MG = new Uint8Array(BB.buffer)), MG
+       let {
+         code: iW,
+         unbound: OW
+       } = WW;
+       return `${iW}:${OW}`
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L902-L905` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L36-L37) · [Before (L902-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L902-L905)

```diff
-     function zG(BB, OB, GB) {
-       const YB = BB.ZP(66, OB, 4);
-       if (YB < 0) return !1;
-       return BB.view.setUint8(YB + 0, GB), !0
+     function ZW(WW, iW) {
+       return iW[1] - WW[1] || (WW[0] < iW[0] ? -1 : 1)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L908-L911` → after: `L74-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L74-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L74-L79) · [Before (L908-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L908-L911)

```diff
-     function lG(BB, OB, GB) {
-       const YB = BB.ZP(67, OB, 4);
-       if (YB < 0) return !1;
-       return BB.view.setUint32(YB + 0, GB, !0), !0
+     function lW(WW) {
+       var iW;
+       const OW = xW[WW];
+       if (void 0 !== OW) return OW;
+       const mW = null !== (iW = /^(?:Key|Digit)(.)$/.exec(WW)) && void 0 !== iW ? iW : /^Numpad(.+)$/.exec(WW);
+       return null !== mW ? WW.startsWith("Numpad") ? `Num ${mW[1]}` : mW[1] : WW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L914-L917` → after: `L86-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L86-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L86-L91) · [Before (L914-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L914-L917)

```diff
-     function pG(BB, OB, GB) {
-       const YB = BB.ZP(68, OB, 4);
-       if (YB < 0) return !1;
-       return BB.view.setUint8(YB + 0, GB), !0
+     function kW(WW) {
+       const iW = Math.max(0, Math.floor(WW / 1e3)),
+         OW = Math.floor(iW / 3600),
+         mW = Math.floor(iW % 3600 / 60),
+         EW = String(iW % 60).padStart(2, "0");
+       return OW > 0 ? `${OW}:${String(mW).padStart(2,"0")}:${EW}` : `${mW}:${EW}`
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L920-L924` → after: `L94-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L94-L95) · [Before (L920-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L920-L924)

```diff
-     function qG(BB, OB, GB, YB) {
-       const DB = BB.ZP(69, OB, 4 + YB.length);
-       if (DB < 0) return !1;
-       const QB = BB.view;
-       return QB.setUint8(DB + 0, GB), PG(QB).set(YB, QB.byteOffset + DB + 4), !0
+     function sW(WW, iW) {
+       return getComputedStyle(WW).getPropertyValue(iW).trim()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L927-L931` → after: `L98-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L98-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L98-L106) · [Before (L927-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L927-L931)

```diff
-     function ZG(BB, OB, GB, YB, DB) {
-       const QB = BB.ZP(128, OB, 4 + DB.length);
-       if (QB < 0) return !1;
-       const oB = BB.view;
-       return oB.setUint8(QB + 0, GB), oB.setUint16(QB + 2, YB, !0), PG(oB).set(DB, oB.byteOffset + QB + 4), !0
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

#### 10. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L934-L937` → after: `L109-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L109-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L109-L127) · [Before (L934-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L934-L937)

```diff
-     function NG(BB, OB, GB) {
-       const YB = BB.ZP(131, OB, 4);
-       if (YB < 0) return !1;
-       return BB.view.setInt32(YB + 0, GB, !0), !0
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

#### 11. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L940-L943` → after: `L130-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L130-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L130-L350) · [Before (L940-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L940-L943)

```diff
-     function RG(BB, OB, GB) {
-       const YB = BB.ZP(132, OB, 4);
-       if (YB < 0) return !1;
-       return BB.view.setUint32(YB + 0, GB, !0), !0
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

#### 12. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L946-L949` → after: `L364-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L364-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L364-L373) · [Before (L946-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L946-L949)

```diff
-     function WG(BB, OB, GB) {
-       const YB = BB.ZP(133, OB, 4);
-       if (YB < 0) return !1;
-       return BB.view.setUint32(YB + 0, GB, !0), !0
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

#### 13. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L951-L955` → after: `L375-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L375-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L375-L412) · [Before (L951-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L951-L955)

```diff
- 
-     function AG(BB, OB, GB) {
-       const YB = BB.ZP(144, OB, 4);
-       if (YB < 0) return !1;
-       return BB.view.setUint8(YB + 0, GB), !0
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

#### 14. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L958-L962` → after: `L415-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L415-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L415-L416) · [Before (L958-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L958-L962)

```diff
-     function VG(BB, OB, GB, YB, DB) {
-       const QB = BB.ZP(145, OB, 12);
-       if (QB < 0) return !1;
-       const oB = BB.view;
-       return oB.setInt32(QB + 0, GB, !0), oB.setInt32(QB + 4, YB, !0), oB.setInt32(QB + 8, DB, !0), !0
+     function DW(WW) {
+       return [...WW].sort(((WW, iW) => WW.startMs - iW.startMs))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L965-L969` → after: `L419-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L419-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L419-L466) · [Before (L965-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L965-L969)

```diff
-     function SG(BB, OB, GB, YB) {
-       const DB = BB.ZP(256, OB, 4 + YB.length);
-       if (DB < 0) return !1;
-       const QB = BB.view;
-       return QB.setUint16(DB + 0, GB, !0), PG(QB).set(YB, QB.byteOffset + DB + 4), !0
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

#### 16. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L973-L975` → after: `L511-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L511-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L511-L535) · [Before (L973-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L973-L975)

```diff
-       const YB = BB.ZP(258, OB, 4);
-       if (YB < 0) return !1;
-       return BB.view.setUint8(YB + 0, GB), !0
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

#### 17. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L978-L985` → after: `L538-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L538-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L538-L540) · [Before (L978-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L978-L985)

```diff
-     function UG(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
-       const JB = BB.ZP(320, OB, 48 + yB.length);
-       if (JB < 0) return !1;
-       const MB = BB.view;
-       MB.setUint32(JB + 0, GB, !0), MB.setUint16(JB + 4, YB, !0), MB.setUint16(JB + 6, DB, !0), MB.setUint32(JB + 8, QB, !0);
-       for (let PB = 0; PB < 3; PB++) MB.setFloat64(JB + 12 + 8 * PB, oB[PB], !0);
-       for (let PB = 0; PB < 3; PB++) MB.setFloat32(JB + 36 + 4 * PB, jB[PB], !0);
-       return PG(MB).set(yB, MB.byteOffset + JB + 48), !0
+     function aW(WW) {
+       var iW, OW, mW;
+       return WW.type === eW.e.IncrementalSnapshot ? XW.has(null !== (OW = null === (mW = WW.data) || void 0 === mW ? void 0 : mW.source) && void 0 !== OW ? OW : -1) : WW.type === eW.e.Custom && (null === (iW = WW.data) || void 0 === iW ? void 0 : iW.tag) === BW
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L988-L995` → after: `L543-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L543-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L543-L562) · [Before (L988-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L988-L995)

```diff
-     function fG(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
-       const JB = BB.ZP(321, OB, 48 + yB.length);
-       if (JB < 0) return !1;
-       const MB = BB.view;
-       MB.setUint32(JB + 0, GB, !0), MB.setInt32(JB + 4, YB, !0), MB.setUint16(JB + 8, DB, !0), MB.setUint16(JB + 10, QB, !0);
-       for (let PB = 0; PB < 3; PB++) MB.setFloat64(JB + 12 + 8 * PB, oB[PB], !0);
-       for (let PB = 0; PB < 3; PB++) MB.setFloat32(JB + 36 + 4 * PB, jB[PB], !0);
-       return PG(MB).set(yB, MB.byteOffset + JB + 48), !0
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

#### 19. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L997-L1005` → after: `L564-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L564-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L564-L597) · [Before (L997-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L997-L1005)

```diff
- 
-     function kG(BB, OB, GB, YB, DB, QB, oB) {
-       const jB = BB.ZP(322, OB, 44 + oB.length);
-       if (jB < 0) return !1;
-       const yB = BB.view;
-       yB.setUint32(jB + 0, GB, !0), yB.setUint32(jB + 4, YB, !0);
-       for (let JB = 0; JB < 3; JB++) yB.setFloat64(jB + 8 + 8 * JB, DB[JB], !0);
-       for (let JB = 0; JB < 3; JB++) yB.setFloat32(jB + 32 + 4 * JB, QB[JB], !0);
-       return PG(yB).set(oB, yB.byteOffset + jB + 44), !0
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

#### 20. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1007-L1011` → after: `L599-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L599-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L599-L759) · [Before (L1007-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1007-L1011)

```diff
- 
-     function dG(BB, OB, GB) {
-       const YB = BB.ZP(323, OB, 4);
-       if (YB < 0) return !1;
-       return BB.view.setUint32(YB + 0, GB, !0), !0
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

#### 21. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1014-L1020` → after: `L762-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L762-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L762-L770) · [Before (L1014-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1014-L1020)

```diff
-     function KG(BB, OB, GB, YB, DB, QB) {
-       const oB = BB.ZP(324, OB, 32 + QB.length);
-       if (oB < 0) return !1;
-       const jB = BB.view;
-       jB.setUint32(oB + 0, GB, !0), jB.setUint32(oB + 4, YB, !0);
-       for (let yB = 0; yB < 3; yB++) jB.setFloat64(oB + 8 + 8 * yB, DB[yB], !0);
-       return PG(jB).set(QB, jB.byteOffset + oB + 32), !0
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

#### 22. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1024` → after: `L774-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L774-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L774-L783) · [Before (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1024)

```diff
-       return !(BB.ZP(325, OB, 0) < 0)
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

#### 23. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1027-L1031` → after: `L786-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L786-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L786-L796) · [Before (L1027-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1027-L1031)

```diff
-     function mG(BB, OB, GB, YB, DB, QB) {
-       const oB = BB.ZP(384, OB, 16);
-       if (oB < 0) return !1;
-       const jB = BB.view;
-       return jB.setUint32(oB + 0, GB, !0), jB.setUint32(oB + 4, YB, !0), jB.setFloat32(oB + 8, DB, !0), jB.setFloat32(oB + 12, QB, !0), !0
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

#### 24. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1034-L1040` → after: `L799-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L799-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L799-L800) · [Before (L1034-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1034-L1040)

```diff
-     function IG(BB, OB, GB, YB, DB, QB, oB) {
-       const jB = BB.ZP(385, OB, 36 + oB.length);
-       if (jB < 0) return !1;
-       const yB = BB.view;
-       yB.setUint32(jB + 0, GB, !0), yB.setUint32(jB + 4, YB, !0);
-       for (let JB = 0; JB < 3; JB++) yB.setFloat64(jB + 8 + 8 * JB, DB[JB], !0);
-       return yB.setUint32(jB + 32, QB, !0), PG(yB).set(oB, yB.byteOffset + jB + 36), !0
+     function Ei(WW, iW) {
+       return WW < iW.startMs ? iW.startMs - WW : WW > iW.endMs ? 2 * (WW - iW.endMs) : 0
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1042-L1050` → after: `L802-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L802-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L802-L890) · [Before (L1042-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1042-L1050)

```diff
- 
-     function FG(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
-       const JB = BB.ZP(386, OB, 56 + yB.length);
-       if (JB < 0) return !1;
-       const MB = BB.view;
-       MB.setUint32(JB + 0, GB, !0), MB.setUint8(JB + 4, YB);
-       for (let PB = 0; PB < 4; PB++) MB.setFloat32(JB + 8 + 4 * PB, DB[PB], !0);
-       for (let PB = 0; PB < 3; PB++) MB.setFloat64(JB + 24 + 8 * PB, QB[PB], !0);
-       return MB.setUint32(JB + 48, oB, !0), MB.setUint32(JB + 52, jB, !0), PG(MB).set(yB, MB.byteOffset + JB + 56), !0
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

#### 26. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1053-L1062` → after: `L893-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L893-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L893-L894) · [Before (L1053-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1053-L1062)

```diff
-     function iG(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
-       const JB = BB.ZP(387, OB, 56);
-       if (JB < 0) return !1;
-       const MB = BB.view;
-       MB.setUint32(JB + 0, GB, !0), MB.setUint16(JB + 4, YB, !0), MB.setUint8(JB + 6, DB);
-       for (let PB = 0; PB < 3; PB++) MB.setFloat64(JB + 8 + 8 * PB, QB[PB], !0);
-       for (let PB = 0; PB < 2; PB++) MB.setFloat32(JB + 32 + 4 * PB, oB[PB], !0);
-       MB.setFloat32(JB + 40, jB, !0);
-       for (let PB = 0; PB < 3; PB++) MB.setFloat32(JB + 44 + 4 * PB, yB[PB], !0);
-       return !0
+     function Pi(WW) {
+       return iW => WW >= iW.startMs && WW < iW.endMs
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1064-L1068` → after: `L896-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L896-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L896-L935) · [Before (L1064-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1064-L1068)

```diff
- 
-     function LG(BB, OB, GB) {
-       const YB = BB.ZP(388, OB, 4);
-       if (YB < 0) return !1;
-       return BB.view.setUint32(YB + 0, GB, !0), !0
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

#### 28. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1071-L1075` → after: `L949-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L949-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L949-L962) · [Before (L1071-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1071-L1075)

```diff
-     function gG(BB, OB, GB, YB) {
-       const DB = BB.ZP(389, OB, 8);
-       if (DB < 0) return !1;
-       const QB = BB.view;
-       return QB.setInt32(DB + 0, GB, !0), QB.setFloat32(DB + 4, YB, !0), !0
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

#### 29. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1078-L1082` → after: `L965-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L965-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L965-L971) · [Before (L1078-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1078-L1082)

```diff
-     function rG(BB, OB, GB, YB) {
-       const DB = BB.ZP(390, OB, 8);
-       if (DB < 0) return !1;
-       const QB = BB.view;
-       return QB.setInt32(DB + 0, GB, !0), QB.setFloat32(DB + 4, YB, !0), !0
+     function Mi(WW, iW) {
+       return WW.replace(xi, (function(WW) {
+         for (var OW = arguments.length, mW = new Array(OW > 1 ? OW - 1 : 0), EW = 1; EW < OW; EW++) mW[EW - 1] = arguments[EW];
+         if (si(mW.slice(0, 7).find((WW => "string" === typeof WW)), iW, !0)) return WW;
+         const NW = WW.slice(0, 4).toLowerCase();
+         return "url(" === NW ? `url("${ki}")` : "@imp" === NW ? `@import "${ki}"` : `"${ki}"`
+       }))
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1085-L1089` → after: `L974-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L974-L975) · [Before (L1085-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1085-L1089)

```diff
-     function XG(BB, OB, GB, YB, DB, QB) {
-       const oB = BB.ZP(391, OB, 12);
-       if (oB < 0) return !1;
-       const jB = BB.view;
-       return jB.setFloat32(oB + 0, GB, !0), jB.setFloat32(oB + 4, YB, !0), jB.setUint8(oB + 8, DB), jB.setUint8(oB + 9, QB), !0
+     function Ki(WW) {
+       return bi.test(WW.replace(xi, '""'))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1092-L1095` → after: `L978-L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L978-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L978-L991) · [Before (L1092-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1092-L1095)

```diff
-     function wG(BB, OB, GB) {
-       const YB = BB.ZP(392, OB, 4);
-       if (YB < 0) return !1;
-       return BB.view.setUint32(YB + 0, GB, !0), !0
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

#### 32. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1098-L1102` → after: `L994-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L994-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L994-L1001) · [Before (L1098-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1098-L1102)

```diff
-     function EG(BB, OB, GB, YB, DB) {
-       const QB = BB.ZP(393, OB, 12);
-       if (QB < 0) return !1;
-       const oB = BB.view;
-       return oB.setUint32(QB + 0, GB, !0), oB.setUint16(QB + 4, YB, !0), oB.setFloat32(QB + 8, DB, !0), !0
+     function Yi(WW, iW) {
+       const OW = Mi(WW, iW);
+       if (Ki(OW) || "open" === Si(OW)) return "";
+       if (!OW.includes("\\")) return OW;
+       const mW = function(WW) {
+         return WW.replace(Ai, ((WW, iW, OW) => void 0 !== iW ? String.fromCodePoint(Math.min(parseInt(iW, 16), 1114111)) : null !== OW && void 0 !== OW ? OW : ""))
+       }(OW);
+       return Mi(mW, iW) !== mW || Ki(mW) ? "" : OW
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1105-L1113` → after: `L1004-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1004-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1004-L1006) · [Before (L1105-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1105-L1113)

```diff
-     function cG(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB, PB) {
-       const zB = BB.ZP(394, OB, 56 + PB.length);
-       if (zB < 0) return !1;
-       const lB = BB.view;
-       lB.setUint32(zB + 0, GB, !0), lB.setUint16(zB + 4, YB, !0), lB.setUint8(zB + 6, DB), lB.setUint8(zB + 7, QB);
-       for (let pB = 0; pB < 3; pB++) lB.setFloat64(zB + 8 + 8 * pB, oB[pB], !0);
-       lB.setFloat32(zB + 32, jB, !0), lB.setInt32(zB + 36, yB, !0);
-       for (let pB = 0; pB < 3; pB++) lB.setFloat32(zB + 40 + 4 * pB, JB[pB], !0);
-       return lB.setFloat32(zB + 52, MB, !0), PG(lB).set(PB, lB.byteOffset + zB + 56), !0
+     function yi(WW, iW) {
+       const OW = li.test(WW) ? Yi(WW, iW) : WW;
+       return OW.split("/* rr_split */").every((WW => "between" === Si(WW))) ? OW : ""
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1117-L1119` → after: `L1010-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1010-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1010-L1039) · [Before (L1117-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1117-L1119)

```diff
-       const YB = BB.ZP(398, OB, 4);
-       if (YB < 0) return !1;
-       return BB.view.setUint32(YB + 0, GB, !0), !0
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

#### 35. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1122-L1126` → after: `L1042-L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1042-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1042-L1054) · [Before (L1122-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1122-L1126)

```diff
-     function aG(BB, OB, GB, YB, DB) {
-       const QB = BB.ZP(399, OB, 12);
-       if (QB < 0) return !1;
-       const oB = BB.view;
-       return oB.setUint32(QB + 0, GB, !0), oB.setUint32(QB + 4, YB, !0), oB.setFloat32(QB + 8, DB, !0), !0
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

#### 36. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1129-L1132` → after: `L1057-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1057-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1057-L1076) · [Before (L1129-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1129-L1132)

```diff
-     function eG(BB, OB, GB) {
-       const YB = BB.ZP(448, OB, 4);
-       if (YB < 0) return !1;
-       return BB.view.setFloat32(YB + 0, GB, !0), !0
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

#### 37. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1135-L1140` → after: `L1104-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1104-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1104-L1111) · [Before (L1135-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1135-L1140)

```diff
-     function TG(BB, OB, GB, YB) {
-       const DB = BB.ZP(450, OB, 12);
-       if (DB < 0) return !1;
-       const QB = BB.view;
-       for (let oB = 0; oB < 2; oB++) QB.setFloat32(DB + 0 + 4 * oB, GB[oB], !0);
-       return QB.setUint8(DB + 8, YB), !0
+     function Di(WW, iW) {
+       return WW.replace(ei, (WW => WW.replace(vi, ((WW, OW, mW) => {
+         const EW = OW.toLowerCase(),
+           NW = ni[iW][EW];
+         if (void 0 === mW) return "none" === NW ? di : oi;
+         const PW = mW.toLowerCase();
+         return ui[EW].includes(PW) ? PW === NW ? oi : di : WW
+       }))))
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1143-L1147` → after: `L1114-L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1114-L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1114-L1118) · [Before (L1143-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1143-L1147)

```diff
-     function bG(BB, OB, GB, YB) {
-       const DB = BB.ZP(452, OB, 8);
-       if (DB < 0) return !1;
-       const QB = BB.view;
-       return QB.setFloat32(DB + 0, GB, !0), QB.setUint8(DB + 4, YB), !0
+     function Vi(WW) {
+       const iW = WW.attributes,
+         OW = null === iW || void 0 === iW ? void 0 : iW.rel,
+         mW = null === iW || void 0 === iW ? void 0 : iW.href;
+       return "link" === WW.tagName && "string" === typeof OW && OW.toLowerCase().split(/\s+/).includes("stylesheet") && "string" === typeof mW ? mW : null
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1150-L1154` → after: `L1121-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1121-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1121-L1138) · [Before (L1150-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1150-L1154)

```diff
-     function CG(BB, OB, GB, YB, DB) {
-       const QB = BB.ZP(454, OB, 4);
-       if (QB < 0) return !1;
-       const oB = BB.view;
-       return oB.setUint8(QB + 0, GB), oB.setUint8(QB + 1, YB), oB.setUint8(QB + 2, DB), !0
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

#### 40. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1157-L1162` → after: `L1141-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1141-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1141-L1183) · [Before (L1157-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1157-L1162)

```diff
-     function HG(BB, OB, GB, YB) {
-       const DB = BB.ZP(455, OB, 40);
-       if (DB < 0) return !1;
-       const QB = BB.view;
-       for (let oB = 0; oB < 9; oB++) QB.setInt32(DB + 0 + 4 * oB, GB[oB], !0);
-       return QB.setUint32(DB + 36, YB, !0), !0
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

#### 41. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1164-L1169` → after: `L1185-L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1185-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1185-L1278) · [Before (L1164-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1164-L1169)

```diff
- 
-     function vG(BB, OB, GB, YB) {
-       const DB = BB.ZP(456, OB, 8);
-       if (DB < 0) return !1;
-       const QB = BB.view;
-       return QB.setFloat32(DB + 0, GB, !0), QB.setUint8(DB + 4, YB), !0
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

#### 42. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1171-L1178` → after: `L1280-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1280-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1280-L1305) · [Before (L1171-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1171-L1178)

```diff
- 
-     function sG(BB, OB, GB, YB, DB) {
-       const QB = BB.ZP(457, OB, 16);
-       if (QB < 0) return !1;
-       const oB = BB.view;
-       for (let jB = 0; jB < 3; jB++) oB.setInt32(QB + 0 + 4 * jB, GB[jB], !0);
-       for (let jB = 0; jB < 3; jB++) oB.setInt8(QB + 12 + 1 * jB, YB[jB]);
-       return oB.setUint8(QB + 15, DB), !0
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

#### 43. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1180-L1185` → after: `L1307-L1355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1307-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1307-L1355) · [Before (L1180-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1180-L1185)

```diff
- 
-     function xG(BB, OB, GB, YB) {
-       const DB = BB.ZP(530, OB, 4 + YB.length);
-       if (DB < 0) return !1;
-       const QB = BB.view;
-       return QB.setUint8(DB + 0, GB), PG(QB).set(YB, QB.byteOffset + DB + 4), !0
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

#### 44. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1188-L1192` → after: `L1358-L1424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1358-L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1358-L1424) · [Before (L1188-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1188-L1192)

```diff
-     function tG(BB, OB, GB, YB, DB, QB) {
-       const oB = BB.ZP(531, OB, 12 + QB.length);
-       if (oB < 0) return !1;
-       const jB = BB.view;
-       return jB.setFloat32(oB + 0, GB, !0), jB.setFloat32(oB + 4, YB, !0), jB.setUint32(oB + 8, DB, !0), PG(jB).set(QB, jB.byteOffset + oB + 12), !0
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

#### 45. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1195-L1199` → after: `L1427-L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1427-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1427-L1428) · [Before (L1195-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1195-L1199)

```diff
-     function BY(BB, OB, GB, YB, DB, QB) {
-       const oB = BB.ZP(532, OB, 12 + QB.length);
-       if (oB < 0) return !1;
-       const jB = BB.view;
-       return jB.setInt32(oB + 0, GB, !0), jB.setInt32(oB + 4, YB, !0), jB.setUint32(oB + 8, DB, !0), PG(jB).set(QB, jB.byteOffset + oB + 12), !0
+     function WO(WW, iW) {
+       return `${WW}/${iW}`
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1202-L1206` → after: `L1431-L1441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1431-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1431-L1441) · [Before (L1202-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1202-L1206)

```diff
-     function OY(BB, OB, GB, YB, DB) {
-       const QB = BB.ZP(533, OB, 8 + DB.length);
-       if (QB < 0) return !1;
-       const oB = BB.view;
-       return oB.setInt32(QB + 0, GB, !0), oB.setInt32(QB + 4, YB, !0), PG(oB).set(DB, oB.byteOffset + QB + 8), !0
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

#### 47. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1210` → after: `L1445-L1456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1445-L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1445-L1456) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1210)

```diff
-       return !(BB.ZP(576, OB, 0) < 0)
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

#### 48. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1213-L1220` → after: `L1459-L1460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1459-L1460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1459-L1460) · [Before (L1213-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1213-L1220)

```diff
-     function YY(BB, OB, GB, YB, DB, QB) {
-       const oB = BB.ZP(577, OB, 36 + QB.length);
-       if (oB < 0) return !1;
-       const jB = BB.view;
-       jB.setUint8(oB + 0, GB);
-       for (let yB = 0; yB < 16; yB++) jB.setUint8(oB + 4 + 1 * yB, YB[yB]);
-       for (let yB = 0; yB < 16; yB++) jB.setUint8(oB + 20 + 1 * yB, DB[yB]);
-       return PG(jB).set(QB, jB.byteOffset + oB + 36), !0
+     function mO(WW, iW) {
+       return (iW - WW.startMs) / 1e3
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1223-L1227` → after: `L1463-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1463-L1464) · [Before (L1223-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1223-L1227)

```diff
-     function DY(BB, OB, GB, YB) {
-       const DB = BB.ZP(578, OB, 4 + YB.length);
-       if (DB < 0) return !1;
-       const QB = BB.view;
-       return QB.setUint8(DB + 0, GB), PG(QB).set(YB, QB.byteOffset + DB + 4), !0
+     function EO(WW) {
+       return Math.max(.4, .1 * WW)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1230-L1234` → after: `L1467-L1468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1467-L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1467-L1468) · [Before (L1230-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1230-L1234)

```diff
-     function QY(BB, OB, GB, YB, DB, QB, oB, jB) {
-       const yB = BB.ZP(579, OB, 36);
-       if (yB < 0) return !1;
-       const JB = BB.view;
-       return JB.setFloat64(yB + 0, GB, !0), JB.setFloat64(yB + 8, YB, !0), JB.setFloat64(yB + 16, DB, !0), JB.setFloat64(yB + 24, QB, !0), JB.setUint16(yB + 32, oB, !0), JB.setUint8(yB + 34, jB), !0
+     function NO(WW) {
+       return Math.max(.0625, Math.min(16, WW))
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1237-L1238` → after: `L1471-L1553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1471-L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1471-L1553) · [Before (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1237-L1238)

```diff
-       constructor(BB, OB) {
-         this.core = BB, this.afterCall = OB
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

#### 52. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1240-L1242` → after: `L1555-L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1555-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1555-L1605) · [Before (L1240-L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1240-L1242)

```diff
-       canModify(BB, OB, GB) {
-         const YB = this.core.coB(BB, OB, GB);
-         return this.afterCall(), YB
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

#### 53. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1244-L1246` → after: `L1607-L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1607-L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1607-L1632) · [Before (L1244-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1244-L1246)

```diff
-       terrainBlocked(BB, OB, GB, YB, DB) {
-         const QB = this.core.FjB(BB, OB, GB, YB, DB);
-         return this.afterCall(), QB
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

#### 54. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1248-L1250` → after: `L1634-L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1634-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1634-L1639) · [Before (L1248-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1248-L1250)

```diff
-       qm(BB, OB, GB, YB) {
-         const DB = this.core.Wl(BB, OB, GB, YB);
-         return this.afterCall(), DB
+       loadParts(WW, iW) {
+         this.blobs.load(WW.segment.sequence, iW, WW.abort.signal).then((iW => {
+           if (this.slots.get(WW.segment.sequence) === WW) return null === iW ? (console.error(`Replay video segment ${WW.segment.sequence} has no playable parts.`), void this.markFailed(WW.segment)) : void this.playBlob(WW, iW)
+         }), (iW => {
+           this.slots.get(WW.segment.sequence) === WW && (console.error(`Replay video segment ${WW.segment.sequence} failed to load.`, iW), this.markFailed(WW.segment))
+         }))
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1252-L1254` → after: `L1641-L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1641-L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1641-L1642) · [Before (L1252-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1252-L1254)

```diff
-       blockData(BB, OB, GB) {
-         const YB = this.core.woB(BB, OB, GB);
-         return this.afterCall(), YB
+       playBlob(WW, iW) {
+         WW.objectUrl = URL.createObjectURL(iW), WW.video.src = WW.objectUrl
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1256-L1258` → after: `L1644-L1645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1644-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1644-L1645) · [Before (L1256-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1256-L1258)

```diff
-       cameraSweep(BB, OB, GB, YB, DB, QB, oB) {
-         const jB = this.core.rQB(BB, OB, GB, YB, DB, QB, oB);
-         return this.afterCall(), jB
+       markFailed(WW) {
+         this.failed.add(WW.sequence), this.onLoadFailed()
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1260-L1262` → after: `L1647-L1651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1647-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1647-L1651) · [Before (L1260-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1260-L1262)

```diff
-       hasServerTarget(BB) {
-         const OB = this.core.OjB(BB);
-         return this.afterCall(), OB
+       showStill(WW) {
+         const iW = null !== WW && WW.url !== this.failedStillUrl ? WW : null;
+         null !== iW && this.stillImage.getAttribute("src") !== iW.url && (this.stillImage.src = iW.url);
+         const OW = null !== iW && this.stillImage.complete && this.stillImage.naturalWidth > 0;
+         OW !== this.stillShown && (this.stillImage.classList.toggle("brv-still-shown", OW), this.stillShown = OW)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1264-L1266` → after: `L1653-L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1653-L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1653-L1655) · [Before (L1264-L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1264-L1266)

```diff
-       entityInteractable(BB) {
-         const OB = this.core.HoB(BB);
-         return this.afterCall(), OB
+       show(WW) {
+         var iW;
+         this.shown !== WW && (null === (iW = this.shown) || void 0 === iW || iW.video.classList.remove("brv-video-shown"), null === WW || void 0 === WW || WW.video.classList.add("brv-video-shown"), this.shown = WW)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1268-L1270` → after: `L1657-L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1657-L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1657-L1658) · [Before (L1268-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1268-L1270)

```diff
-       entityCrouching(BB) {
-         const OB = this.core.CoB(BB);
-         return this.afterCall(), OB
+       evictExcept(WW) {
+         for (const [iW, OW] of this.slots) WW.includes(OW.segment) || (this.release(OW), this.slots.delete(iW))
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1272-L1274` → after: `L1660-L1661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1660-L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1660-L1661) · [Before (L1272-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1272-L1274)

```diff
-       entityDrawn(BB) {
-         const OB = this.core.hQB(BB);
-         return this.afterCall(), OB
+       release(WW) {
+         this.shown === WW && (this.shown = null), WW.abort.abort(), WW.video.pause(), WW.video.removeAttribute("src"), WW.video.load(), WW.video.remove(), null !== WW.objectUrl && URL.revokeObjectURL(WW.objectUrl)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1276-L1278` → after: `L1663-L1687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1663-L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1663-L1687) · [Before (L1276-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1276-L1278)

```diff
-       predictServerPosition(BB, OB, GB, YB) {
-         const DB = this.core.zjB(BB, OB, GB, YB);
-         return this.afterCall(), DB
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

#### 62. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1280-L1282` → after: `L1689-L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1689-L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1689-L1729) · [Before (L1280-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1280-L1282)

```diff
-       setOtherEntitySetting(BB, OB, GB) {
-         const YB = this.core.cQB(BB, OB, GB);
-         return this.afterCall(), YB
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

#### 63. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1284-L1286` → after: `L1731-L1732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1731-L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1731-L1732) · [Before (L1284-L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1284-L1286)

```diff
-       entityInfoBatch(BB) {
-         const OB = this.core.TQB(BB);
-         return this.afterCall(), OB
+       get inactiveRanges() {
+         return this.annotations.inactiveRanges
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1288-L1290` → after: `L1734-L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1734-L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1734-L1735) · [Before (L1288-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1288-L1290)

```diff
-       entityName(BB) {
-         const OB = this.core.voB(BB);
-         return this.afterCall(), OB
+       get videoGaps() {
+         return this.annotations.videoGaps
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1292-L1294` → after: `L1737-L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1737-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1737-L1738) · [Before (L1292-L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1292-L1294)

```diff
-       hasEffect(BB, OB) {
-         const GB = this.core.BjB(BB, OB);
-         return this.afterCall(), GB
+       get frames() {
+         return this.annotations.frames
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1296-L1298` → after: `L1740-L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1740-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1740-L1741) · [Before (L1296-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1296-L1298)

```diff
-       scratchPtr() {
-         const BB = this.core.FQB();
-         return this.afterCall(), BB
+       get input() {
+         return this.annotations.input
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1300-L1302` → after: `L1743-L1746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1743-L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1743-L1746) · [Before (L1300-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1300-L1302)

```diff
-       invSwap(BB, OB) {
-         const GB = this.core.jjB(BB, OB);
-         return this.afterCall(), GB
+       subscribe(WW) {
+         return this.listeners.add(WW), WW(this.getState()), () => {
+           this.listeners.delete(WW)
+         }
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1304-L1306` → after: `L1748-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1748-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1748-L1759) · [Before (L1304-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1304-L1306)

```diff
-       invMove(BB, OB, GB) {
-         const YB = this.core.DjB(BB, OB, GB);
-         return this.afterCall(), YB
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

#### 69. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1308-L1310` → after: `L1761-L1762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1761-L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1761-L1762) · [Before (L1308-L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1308-L1310)

```diff
-       invQuickMove(BB, OB, GB, YB) {
-         const DB = this.core.QjB(BB, OB, GB, YB);
-         return this.afterCall(), DB
+       getPositionMs() {
+         return this.timeline.toPosition(this.clock.timeMs())
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1312-L1314` → after: `L1764-L1765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1764-L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1764-L1765) · [Before (L1312-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1312-L1314)

```diff
-       invRemove(BB, OB, GB) {
-         const YB = this.core.ojB(BB, OB, GB);
-         return this.afterCall(), YB
+       getSyncStats() {
+         return this.videoLayer.getSyncStats()
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1316-L1318` → after: `L1767-L1768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1767-L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1767-L1768) · [Before (L1316-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1316-L1318)

```diff
-       invEnchant(BB, OB, GB, YB, DB) {
-         const QB = this.core.YjB(BB, OB, GB, YB, DB);
-         return this.afterCall(), QB
+       resetSyncStats() {
+         this.videoLayer.resetSyncStats()
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1320-L1322` → after: `L1770-L1771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1770-L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1770-L1771) · [Before (L1320-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1320-L1322)

```diff
-       craft(BB, OB, GB) {
-         const YB = this.core.craft(BB, OB, GB);
-         return this.afterCall(), YB
+       play() {
+         this.ended && this.seekToTime(this.timeline.startMs), this.clock.play(), this.syncDom(), this.emit()
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1324-L1326` → after: `L1773-L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1773-L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1773-L1774) · [Before (L1324-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1324-L1326)

```diff
-       salvage(BB, OB, GB) {
-         const YB = this.core.salvage(BB, OB, GB);
-         return this.afterCall(), YB
+       pause() {
+         this.clock.pause(), this.syncDom(), this.emit()
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1328-L1330` → after: `L1776-L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1776-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1776-L1777) · [Before (L1328-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1328-L1330)

```diff
-       selectSlot(BB) {
-         const OB = this.core.ZjB(BB);
-         return this.afterCall(), OB
+       togglePlay() {
+         this.clock.playing ? this.pause() : this.play()
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1332-L1334` → after: `L1779-L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1779-L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1779-L1780) · [Before (L1332-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1332-L1334)

```diff
-       closeChest() {
-         const BB = this.core.hoB();
-         return this.afterCall(), BB
+       seekToPosition(WW) {
+         this.seekToTime(this.timeline.toTime(WW))
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1336-L1338` → after: `L1782-L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1782-L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1782-L1783) · [Before (L1336-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1336-L1338)

```diff
-       itemAttributesBatch(BB) {
-         const OB = this.core.eQB(BB);
-         return this.afterCall(), OB
+       seekBy(WW) {
+         this.seekToPosition(this.timeline.toPosition(this.clock.timeMs()) + WW)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1340-L1342` → after: `L1785-L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1785-L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1785-L1786) · [Before (L1340-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1340-L1342)

```diff
-       itemNames() {
-         const BB = this.core.Yk();
-         return this.afterCall(), BB
+       stepFrame(WW) {
+         this.clock.pause(), this.seekBy(WW * LO * 1e3)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1344-L1346` → after: `L1788-L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1788-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1788-L1790) · [Before (L1344-L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1344-L1346)

```diff
-       blockProps() {
-         const BB = this.core.EoB();
-         return this.afterCall(), BB
+       setSpeed(WW) {
+         var iW;
+         this.clock.setSpeed(WW), null === (iW = this.domLayer) || void 0 === iW || iW.setSpeed(WW), this.emit()
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1348-L1350` → after: `L1792-L1793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1792-L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1792-L1793) · [Before (L1348-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1348-L1350)

```diff
-       itemProps() {
-         const BB = this.core.yjB();
-         return this.afterCall(), BB
+       setSkipInactive(WW) {
+         this.skipInactive = WW, this.emit()
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1352-L1354` → after: `L1795-L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1795-L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1795-L1798) · [Before (L1352-L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1352-L1354)

```diff
-       salvageRecipe(BB) {
-         const OB = this.core.CQB(BB);
-         return this.afterCall(), OB
+       goToChapter(WW) {
+         const iW = this.clock.timeMs(),
+           OW = 1 === WW ? this.chapters.find((WW => WW.startMs > iW + 500)) : this.chapters.findLast((WW => WW.startMs < iW - 2e3));
+         void 0 !== OW && this.seekToTime(OW.startMs)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1356-L1358` → after: `L1800-L1802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1800-L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1800-L1802) · [Before (L1356-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1356-L1358)

```diff
-       craftingView(BB, OB, GB) {
-         const YB = this.core.aQB(BB, OB, GB);
-         return this.afterCall(), YB
+       destroy() {
+         var WW;
+         cancelAnimationFrame(this.frame), this.urlRefresher.destroy(), this.annotations.destroy(), null === (WW = this.domLayer) || void 0 === WW || WW.destroy(), this.videoLayer.destroy(), this.stage.destroy(), this.listeners.clear()
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1360-L1362` → after: `L1804-L1805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1804-L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1804-L1805) · [Before (L1360-L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1360-L1362)

```diff
-       directorView() {
-         const BB = this.core.LQB();
-         return this.afterCall(), BB
+       getNotice(WW) {
+         return this.annotations.isHiddenAt(WW) ? "tabHidden" : this.videoLayer.failedAt(WW) && !this.urlRefresher.refreshing ? "videoFailed" : null !== this.domLayer || this.videoLayer.visible ? this.annotations.isVideoGapAt(WW) ? "videoGap" : null : "nothingToShow"
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1364-L1366` → after: `L1807-L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1807-L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1807-L1815) · [Before (L1364-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1364-L1366)

```diff
-       directorDefaultPose() {
-         const BB = this.core.XQB();
-         return this.afterCall(), BB
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

#### 84. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1368-L1370` → after: `L1817-L1818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1817-L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1817-L1818) · [Before (L1368-L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1368-L1370)

```diff
-       directorEntity(BB) {
-         const OB = this.core.gQB(BB);
-         return this.afterCall(), OB
+       seekToTime(WW) {
+         this.ended = !1, this.clock.seek(Math.max(this.timeline.startMs, Math.min(this.timeline.endMs, WW))), this.videoLayer.noteClockJump(), this.syncDom(), this.emit()
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1372-L1374` → after: `L1820-L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1820-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1820-L1822) · [Before (L1372-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1372-L1374)

```diff
-       directorPose(BB, OB, GB, YB, DB, QB) {
-         const oB = this.core.wQB(BB, OB, GB, YB, DB, QB);
-         return this.afterCall(), oB
+       syncDom() {
+         var WW;
+         null === (WW = this.domLayer) || void 0 === WW || WW.sync(this.clock.timeMs(), this.clock.playing)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1376-L1378` → after: `L1824-L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L1824-L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L1824-L2536) · [Before (L1376-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1376-L1378)

```diff
-       passTimings(BB) {
-         const OB = this.core.PjB(BB);
-         return this.afterCall(), OB
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

#### 87. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L1380-L1382` → after: `L2538-L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R2538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L2538-L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/300.js#L2538-L2543) · [Before (L1380-L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/300.js#L1380-L1382)

```diff
-       drawCensus() {
-         const BB = this.core.boB();
-         return this.afterCall(), BB
+ 
+       function eW(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         UW !== kW && (oW.current = UW), tW((OW => {
+           (0, TW.j)(OW, JO, UW), (0, TW.j)(OW, hO, (0, nW.i)(WW)), iW && (0, TW.j)(OW, HO, null)
+         }))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/301.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/301.js` (475 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L4)

```diff
-   44735: (BB, OB, GB) => {
+   42009: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L7-L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L8) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L7-L8)

```diff
-       g: () => jB,
-       j: () => oB,
+       h: () => oP,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L11-L13` → after: `L11-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L11-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L11-L39) · [Before (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L11-L13)

```diff
-     var YB = GB(37885),
-       DB = GB(39394),
-       QB = GB(39388);
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

#### 4. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L15-L24` → after: `L41-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L41-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L41-L66) · [Before (L15-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L15-L24)

```diff
-     function oB(BB, OB, GB, YB) {
-       const DB = QB.v;
-       OB.fill(0), BB.gravity.toArray(OB, DB.gravity), BB.colorDead.toArray(OB, DB.colorDead), GB[DB.ramp] = BB.useRampGradients ? 1 : 0;
-       const oB = BB.getColorGradients(),
-         jB = zB(BB, oB, "colour", YB);
-       GB[DB.colorCount] = jB;
-       for (let QB = 0; QB < jB; QB++) {
-         var yB;
-         const BB = oB[lB(oB, QB)];
-         OB[DB.colorPositions + QB] = BB.gradient, BB.color1.toArray(OB, DB.color1 + 4 * QB), (null !== (yB = BB.color2) && void 0 !== yB ? yB : BB.color1).toArray(OB, DB.color2 + 4 * QB)
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

#### 5. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L36-L40` → after: `L71-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L71-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L71-L77) · [Before (L36-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L36-L40)

```diff
-     function jB() {
-       return {
-         key: [],
-         texels: new Uint8Array(4 * QB.h)
-       }
+     function bW(WW, iW, OW) {
+       var mW, EW;
+       const NW = null == (mW = AW[WW]) ? void 0 : mW[OW];
+       if (NW) return NW.call(iW);
+       const PW = lW(WW),
+         LW = null == (EW = Object.getOwnPropertyDescriptor(PW, OW)) ? void 0 : EW.get;
+       return LW ? ((AW[WW] || (AW[WW] = {}))[OW] = LW, LW.call(iW)) : iW[OW]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L42` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L79) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L42)

```diff
-     const yB = [];
+     const jW = {};
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L44-L49` → after: `L81-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L81-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L81-L85) · [Before (L44-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L44-L49)

```diff
-     function JB(BB, OB) {
-       return MB(BB, yB), !NB(yB, OB.key) && (OB.key.length = 0, OB.key.push(...yB), OB.key.length > 0 && function(BB, OB) {
-         for (let GB = 0; GB < QB.h; GB++) DB.h.GetCurrentGradient(GB / QB.h, BB, ((BB, OB, GB) => {
-           YB.Color3.LerpToRef(BB.color, OB.color, GB, PB)
-         })), OB[4 * GB] = 255 * PB.r, OB[4 * GB + 1] = 255 * PB.g, OB[4 * GB + 2] = 255 * PB.b, OB[4 * GB + 3] = 255
-       }(BB.getRampGradients(), OB.texels), !0)
+     function UW(WW, iW, OW) {
+       const mW = `${WW}.${String(OW)}`;
+       if (jW[mW]) return jW[mW].bind(iW);
+       const EW = lW(WW)[OW];
+       return "function" !== typeof EW ? iW[OW] : (jW[mW] = EW, EW.bind(iW))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L51-L57` → after: `L87-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L87-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L87-L157) · [Before (L51-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L51-L57)

```diff
- 
-     function MB(BB, OB) {
-       OB.length = 0;
-       const GB = BB.useRampGradients ? BB.getRampGradients() : null;
-       if (null !== GB && void 0 !== GB && GB.length) {
-         OB.push(GB.length);
-         for (const BB of GB) OB.push(BB.gradient, BB.color.r, BB.color.g, BB.color.b)
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

#### 9. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L59-L64` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L159) · [Before (L59-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L59-L64)

```diff
-     }
-     const PB = new YB.Color3;
- 
-     function zB(BB, OB, GB, YB) {
-       return OB ? OB.length > QB.b ? (YB(`particleStops:${GB}`, `GPU particles use the first 2 and last ${QB.b-2} of more than ${QB.b} ${GB} gradient stops (${BB.name})`), QB.b) : OB.length : 0
-     }
+     };
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L66-L67` → after: `L161-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L161-L162) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L66-L67)

```diff
-     function lB(BB, OB) {
-       return OB < 2 || BB.length <= QB.b ? OB : BB.length - QB.b + OB
+     function MW(WW) {
+       return WW.nodeType === WW.ELEMENT_NODE
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L72-L73` → after: `L165-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L165-L167) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L72-L73)

```diff
-     function ZB(BB, OB, GB) {
-       return oB(BB, pB, qB, GB), OB && NB(qB, OB) ? null : qB.slice()
+     function KW(WW) {
+       const iW = WW && "host" in WW && "mode" in WW && sW.host(WW) || null;
+       return Boolean(iW && "shadowRoot" in iW && sW.shadowRoot(iW) === WW)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L76-L80` → after: `L170-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L170-L171) · [Before (L76-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L76-L80)

```diff
-     function NB(BB, OB) {
-       if (BB.length !== OB.length) return !1;
-       for (let GB = 0; GB < BB.length; GB++)
-         if (BB[GB] !== OB[GB]) return !1;
-       return !0
+     function SW(WW) {
+       return "[object ShadowRoot]" === Object.prototype.toString.call(WW)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L83-L109` → after: `L174-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L174-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L174-L183) · [Before (L83-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L83-L109)

```diff
-     function RB(BB, OB, GB) {
-       var YB;
-       BB[OB] = GB.gradient, BB[OB + 1] = GB.factor1, BB[OB + 2] = null !== (YB = GB.factor2) && void 0 !== YB ? YB : GB.factor1
-     }
-   },
-   42154: (BB, OB, GB) => {
-     function YB(BB, OB, GB) {
-       const YB = OB * OB * 4,
-         DB = BB[0].layers,
-         QB = DB * (BB.length - 1) + BB[BB.length - 1].layers,
-         oB = new Uint8Array(QB * YB);
-       BB.forEach(((OB, GB) => {
-         const QB = GB + 1 < BB.length ? Math.min(OB.layers, DB) : OB.layers;
-         oB.set(new Uint8Array(OB.pixels.buffer, OB.pixels.byteOffset, QB * YB), GB * DB * YB)
-       }));
-       const jB = Math.max(1, Math.min(QB, GB || QB));
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

#### 14. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L111` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L185) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L111)

```diff
-       return yB
+       var iW
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L119-L141` → after: `L188-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L188-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L188-L213) · [Before (L119-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L119-L141)

```diff
-     function QB(BB, OB, GB) {
-       var YB, QB;
-       const oB = null !== (YB = DB.get(BB)) && void 0 !== YB ? YB : new Map;
-       DB.set(BB, oB);
-       const jB = null !== (QB = oB.get(OB[0])) && void 0 !== QB ? QB : [];
-       oB.set(OB[0], jB);
-       const yB = jB.find((BB => BB.urls.length === OB.length && BB.urls.every(((BB, GB) => BB === OB[GB]))));
-       if (yB) return yB.built;
-       const JB = {
-         urls: [...OB],
-         built: GB()
-       };
-       return jB.push(JB), JB.built.catch((() => {
-         jB.splice(jB.indexOf(JB), 1)
-       })), JB.built
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

#### 16. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L215-L220` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L217-L218) · [Before (L215-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L215-L220)

```diff
-       constructor(BB, OB) {
-         this.name = BB, this.eq = OB, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.lF = {
-           addOnce: BB => {
-             this.disposers.push(BB)
-           }
-         }, this.uniqueId = OB.getUniqueId()
+       constructor() {
+         LW(this, "idNodeMap", new Map), LW(this, "nodeMetaMap", new WeakMap)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L222-L223` → after: `L220-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L220-L223) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L222-L223)

```diff
-       get isFrozen() {
-         return this.checkReadyOnlyOnce
+       getId(WW) {
+         var iW;
+         if (!WW) return -1;
+         return (null == (iW = this.getMeta(WW)) ? void 0 : iW.id) ?? -1
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L225-L226` → after: `L225-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L225-L226) · [Before (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L225-L226)

```diff
-       JF() {
-         return this.eq
+       AmW(WW) {
+         return this.idNodeMap.get(WW) || null
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L228-L229` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L228-L229) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L228-L229)

```diff
-       getClassName() {
-         return "LiteMaterial"
+       getIds() {
+         return Array.from(this.idNodeMap.keys())
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L231-L232` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L231-L232) · [Before (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L231-L232)

```diff
-       freeze() {
-         this.checkReadyOnlyOnce = !0
+       getMeta(WW) {
+         return this.nodeMetaMap.get(WW) || null
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L234-L235` → after: `L234-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L234-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L234-L236) · [Before (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L234-L235)

```diff
-       unfreeze() {
-         this.checkReadyOnlyOnce = !1
+       removeNodeFromMap(WW) {
+         const iW = this.getId(WW);
+         this.idNodeMap.delete(iW), WW.childNodes && WW.childNodes.forEach((WW => this.removeNodeFromMap(WW)))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L237-L239` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L238-L239) · [Before (L237-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L237-L239)

```diff
-       markDirty() {}
-       get fillMode() {
-         return this.model.fillMode
+       has(WW) {
+         return this.idNodeMap.has(WW)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L241-L242` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L241-L242) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L241-L242)

```diff
-       needAlphaBlendingForMesh(BB) {
-         return (0, fB.P)(this.model, BB.visibility, BB.hasVertexAlpha)
+       hasNode(WW) {
+         return this.nodeMetaMap.has(WW)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L244-L245` → after: `L244-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L244-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L244-L246) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L244-L245)

```diff
-       needAlphaTestingForMesh(BB) {
-         return (0, fB.Q)(this.model, BB.visibility, BB.hasVertexAlpha)
+       add(WW, iW) {
+         const OW = iW.id;
+         this.idNodeMap.set(OW, WW), this.nodeMetaMap.set(WW, iW)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L247-L249` → after: `L248-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L248-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L248-L254) · [Before (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L247-L249)

```diff
-       dispose() {
-         (0, AB.m)(this);
-         for (const BB of this.disposers.splice(0)) BB()
+       replace(WW, iW) {
+         const OW = this.AmW(WW);
+         if (OW) {
+           const WW = this.nodeMetaMap.get(OW);
+           WW && this.nodeMetaMap.set(iW, WW)
+         }
+         this.idNodeMap.set(WW, iW)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L251-L252` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L256-L257) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L251-L252)

```diff
-       get model() {
-         return (0, fB.U)(this)
+       reset() {
+         this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L257-L258` → after: `L261-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L261-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L261-L262) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L257-L258)

```diff
-     function IB(BB) {
-       return mB.has(BB)
+     function JW() {
+       return new TW
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L262-L352` → after: `L266-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L266-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L266-L275) · [Before (L262-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L262-L352)

```diff
-       mB.add(BB)
-     }
-     const iB = {
-       create: (BB, OB) => ((0, VB.n)(BB, new uB(BB.name, OB)), kB.e.defines()),
-       write: () => {},
-       addFeature: (BB, OB) => {
-         const GB = BB.mirror;
-         OB.feature === UB.f && OB.state.dirLightCount > 0 && (BB.disableLighting = !0, (0, fB.S)(BB)), "BLOXD_LIGHTING" in OB.defines && (0, AB.j)(GB), OB.feature === nB.f && ((0, WB.k)(OB.state, KB), function(BB, OB) {
-           const GB = BB.JF().Lp();
-           setTimeout((() => {
-             GB.atlasArrays(OB.sources).then((GB => {
-               (0, WB.d)(BB, OB, GB.map((BB => ({
-                 atlas: BB,
-                 layers: BB.layers
-               }))), GB[0].layerWidth, KB)
-             })).catch((BB => {
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

#### 29. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L355-L406` → after: `L278-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L278-L279) · [Before (L355-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L355-L406)

```diff
-     function XB() {
-       throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
-     }
-     const wB = {
-       hYB: XB,
-       yQB: (BB, OB) => {
-         const GB = new rB(BB.engine, YB.e.FromArray(OB.clearColor), YB.Color3.FromArray(OB.ambientColor));
-         (0, oB.c)(iB, GB), BB.eq = GB,
-           function(BB, OB) {
-             const GB = Object.assign((0, LB.i)(BB, "camera"), {
-               layerMask: 268435455
-             });
-             BB.model.nodes.setWorldSource(GB.row, BB.model.view.worldMatrix), BB.camera = OB.activeCamera = GB
-           }(BB, GB), (0, DB.h)(BB, ((BB, OB, GB) => (0, QB.j)(BB, OB, GB, jB.e)))
-       },
-       DQB: () => {},
- ... (36 more removed lines; see GitHub link above)
+     function HW(WW) {
+       return WW.toLowerCase()
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L408-L409` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L281) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L408-L409)

```diff
-     var eB = GB(42154),
-       TB = GB(39412);
+     const nW = "__rrweb_original__";
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L412` → after: `L284-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L284-L285) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L412)

```diff
-       return Math.max(4, 4 * Math.ceil(BB / 4))
+       const iW = WW.type;
+       return WW.hasAttribute("data-rr-is-password") ? "password" : iW ? HW(iW) : null
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L415-L422` → after: `L288-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L288-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L288-L296) · [Before (L415-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L415-L422)

```diff
-     function CB(BB, OB, GB, YB) {
-       const DB = BB.createBuffer({
-         label: YB,
-         size: bB(OB.byteLength),
-         usage: GB,
-         mappedAtCreation: !0
-       });
-       return new Uint8Array(DB.getMappedRange(), 0, OB.byteLength).set(new Uint8Array(OB.buffer, OB.byteOffset, OB.byteLength)), DB.unmap(), DB
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

#### 33. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L426` → after: `L304-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L304-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L304-L318) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L426)

```diff
-       return Math.floor(Math.log2(Math.max(BB, OB))) + 1
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

#### 34. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L429-L474` → after: `L324-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L324-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L324-L371) · [Before (L429-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L429-L474)

```diff
-     function vB(BB, OB, GB, YB, DB, QB) {
-       const oB = BB.createTexture({
-           label: QB,
-           size: {
-             width: GB,
-             height: YB,
-             depthOrArrayLayers: DB
-           },
-           format: "rgba8unorm",
-           mipLevelCount: HB(GB, YB),
-           usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
-         }),
-         jB = (OB, GB, YB, QB) => {
-           BB.queue.writeTexture({
-             texture: oB,
-             mipLevel: GB
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

#### 35. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L478-L485` → after: `L375-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L375-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L375-L377) · [Before (L478-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L478-L485)

```diff
-             yield {
-               data: GB,
-               width: BB,
-               height: OB
-             }, DB = GB, QB = BB, oB = OB
-           }
-         }(OB, GB, YB, DB)) jB(JB.data, yB++, JB.width, JB.height);
-       return oB
+         }
+         return EW.push(WW), EW
+       }(WW, iW).join("/* rr_split */")
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L487-L490` → after: `L379-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L379-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L379-L380) · [Before (L487-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L487-L490)

```diff
-     const sB = {
-       premultiplyAlpha: "none",
-       colorSpaceConversion: "none"
-     };
+     let BW = 1;
+     const qW = new RegExp("[^a-z0-9-_:]");
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L492-L519` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L382-L383) · [Before (L492-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L492-L519)

```diff
-     function xB(BB) {
-       if (BB.startsWith("data:")) {
-         const OB = BB.search(/[;,]/);
-         return `data:${OB>5?BB.slice(5,OB):""} URL of ${BB.length} characters`
-       }
-       return BB.length > 80 ? `${BB.slice(0,80)}...` : BB
-     }
-     async function tB(BB) {
-       const OB = await fetch(BB);
-       if (!OB.ok) throw new Error(`${xB(BB)}: ${OB.status} ${OB.statusText}`);
-       return createImageBitmap(await OB.blob(), sB)
-     }
-     async function BO(BB) {
-       const OB = await tB(BB),
-         GB = new OffscreenCanvas(OB.width, OB.height),
-         YB = GB.getContext("2d", {
- ... (12 more removed lines; see GitHub link above)
+     function RW() {
+       return BW++
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L523-L554` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L391) · [Before (L523-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L523-L554)

```diff
-       return (0, eB.i)(BB, OB.urls, (async () => {
-         const GB = await Promise.all(OB.urls.map((async (BB, GB) => {
-             var YB, DB, QB, oB, jB;
-             return null !== (oB = null !== (DB = null === (QB = OB.pixels) || void 0 === QB ? void 0 : QB[GB]) && void 0 !== DB ? DB : null, jB = OB.layerWidth, YB = null !== oB && void 0 !== oB && oB.byteLength && jB && oB.byteLength % (jB * jB * 4) === 0 ? {
-               pixels: oB,
-               layerWidth: jB,
-               layers: oB.byteLength / (jB * jB * 4)
-             } : null) && void 0 !== YB ? YB : await async function(BB) {
-               const {
-                 pixels: OB,
-                 width: GB
-               } = await BO(BB);
-               return {
-                 pixels: OB,
-                 layerWidth: GB,
-                 layers: OB.byteLength / (GB * GB * 4)
- ... (16 more removed lines; see GitHub link above)
+       return iW && "" !== iW.trim() ? Wi(WW, iW) : iW
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L588-L590` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L395) · [Before (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L588-L590)

```diff
-       for (const OB of (0, TB.o)(BB))
-         if (!YO.has((0, TB.k)(OB))) return !1;
-       return !0
+       return Boolean("svg" === WW.tagName || WW.ownerSVGElement)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L593-L601` → after: `L398-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L398-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L398-L403) · [Before (L593-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L593-L601)

```diff
-     function QO(BB) {
-       const OB = YO.get(BB);
-       if (!OB) return null;
-       const [GB, YB, DB] = OB;
-       return {
-         srcFactor: GO.get(GB),
-         dstFactor: GO.get(YB),
-         operation: DB
-       }
+     function Wi(WW, iW) {
+       let OW = zW.get(WW);
+       if (OW || (OW = WW.createElement("a"), zW.set(WW, OW)), iW) {
+         if (iW.startsWith("blob:") || iW.startsWith("data:")) return iW
+       } else iW = "";
+       return OW.setAttribute("href", iW), OW.href
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L605-L608` → after: `L406-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L406-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L406-L409) · [Before (L605-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L605-L608)

```diff
-     function jO(BB) {
-       oO = BB
-     }
-     const yO = new WeakSet;
+     function ii(WW, iW, OW, mW) {
+       return mW ? "src" === OW || "href" === OW && ("use" !== iW || "#" !== mW[0]) || "xlink:href" === OW && "#" !== mW[0] || "background" === OW && ["table", "td", "th"].includes(iW) ? FW(WW, mW) : "srcset" === OW ? function(WW, iW) {
+         if ("" === iW.trim()) return iW;
+         let OW = 0;
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L610-L611` → after: `L411-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L411-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L411-L443) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L610-L611)

```diff
-     function JO(BB) {
-       return yO.has(BB)
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

#### 43. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L614-L617` → after: `L446-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L446-L447) · [Before (L614-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L614-L617)

```diff
-     function MO(BB, OB, GB, YB) {
-       let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-       var QB;
-       JO(BB) || (null === (QB = oO) || void 0 === QB || QB(OB, GB, YB, DB))
+     function Oi(WW, iW, OW) {
+       return ["video", "audio"].includes(WW) && "autoplay" === HW(iW)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L619-L632` → after: `L449-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L449-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L449-L455) · [Before (L619-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L619-L632)

```diff
-     class PO {
-       constructor(BB) {
-         this.resources = BB, this.matrixKey = {
-           CP: 0
-         }, this.attributesKey = {
-           CP: 0
-         }, this.inputs = Object.create(null);
-         for (let OB = 0; OB < 4; OB++) this.inputs[`world${OB}`] = new pO(this.matrixKey, 16 * OB, 64, 4)
-       }
-       release() {
-         this.resources.liveUploads.delete(this), this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
-       }
-       bind(BB, OB) {
-         this.resources.liveUploads.add(this), this.resources.vertexBufferCreated(this.matrixKey, BB, !0), OB && this.resources.vertexBufferCreated(this.attributesKey, OB, !0)
+ 
+     function mi(WW, iW, OW) {
+       if (!WW) return !1;
+       if (WW.nodeType !== WW.ELEMENT_NODE) return !!OW && mi(sW.parentNode(WW), iW, OW);
+       for (let mW = WW.classList.length; mW--;) {
+         const OW = WW.classList[mW];
+         if (iW.test(OW)) return !0
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L758-L782` → after: `L460-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L460-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L460-L466) · [Before (L758-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L758-L782)

```diff
-     function RO(BB, OB, GB) {
-       var YB;
-       let DB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       const QB = null !== (YB = OB._colorFormat) && void 0 !== YB ? YB : "bgra8unorm",
-         oB = DB ? 15 : 0;
-       return GB ? {
-         ...BB,
-         targets: [{
-           format: QB,
-           blend: {
-             color: GB,
-             alpha: NO
-           },
-           writeMask: oB
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

#### 46. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L787-L796` → after: `L483-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L483-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L483-L694) · [Before (L787-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L787-L796)

```diff
-       BB._renderables.push(OB)
-     }
- 
-     function AO(BB) {
-       return BB._device
-     }
- 
-     function VO(BB) {
-       var OB, GB;
-       return null !== (OB = null === (GB = BB._frameGraph) || void 0 === GB ? void 0 : GB._tasks) && void 0 !== OB ? OB : []
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

#### 47. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L800` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L698) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L800)

```diff
-       return BB._currentEncoder
+       return void 0 === WW || null === WW ? "" : WW.toLowerCase()
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L804-L819` → after: `L702-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L702-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L702-L714) · [Before (L804-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L804-L819)

```diff
-       return BB.createBindGroupLayout({
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

#### 49. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L827-L838` → after: `L718-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L718-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L718-L747) · [Before (L827-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L827-L838)

```diff
-       let GB = dO.get(BB);
-       if (!GB) {
-         GB = {
-           module: BB.createShaderModule({
-             label: "placeholder",
-             code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
-           }),
-           pipelines: new Map
-         }, dO.set(BB, GB)
-       }
-       const YB = `${OB._colorFormat}|${OB._depthStencilFormat}|${OB._sampleCount}`;
-       let DB = GB.pipelines.get(YB);
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

#### 50. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L840-L867` → after: `L749-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L749-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L749-L837) · [Before (L840-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L840-L867)

```diff
-         var QB;
-         const {
-           module: oB
-         } = GB;
-         DB = BB.createRenderPipeline({
-           label: `placeholder ${YB}`,
-           layout: BB.createPipelineLayout({
-             bindGroupLayouts: []
-           }),
-           vertex: {
-             module: oB,
-             entryPoint: "v"
-           },
-           fragment: {
-             module: oB,
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

#### 51. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L871` → after: `L840-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L840-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L840-L934) · [Before (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L871)

```diff
-       return DB
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

#### 52. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L874-L892` → after: `L960-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L960-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L960-L962) · [Before (L874-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L874-L892)

```diff
-     function uO(BB, OB, GB) {
-       const YB = OB.eye,
-         DB = OB.viewMatrix;
-       BB[0] = YB[0] + DB[2] * GB, BB[1] = YB[1] + DB[6] * GB, BB[2] = YB[2] + DB[10] * GB
-     }
-     var mO = GB(38636),
-       IO = GB(44732),
-       FO = GB(37919);
-     const iO = Math.PI,
-       LO = iO / 1.95,
-       gO = [5e-4 / 94, 125e-7, 5e-4 / 18],
-       rO = [
-         [68e-8, .686],
-         [55e-8, .678],
-         [45e-8, .666]
-       ].map((BB => {
- ... (3 more removed lines; see GitHub link above)
+     function xi(WW) {
+       return WW && WW.__esModule && Object.prototype.hasOwnProperty.call(WW, "default") ? WW.default : WW
+     }
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L894-L910` → after: `L964-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L964-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L964-L983) · [Before (L894-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L894-L910)

```diff
-     function XO(BB, OB, GB) {
-       const {
-         up: YB,
-         mieDirectionalG: DB
-       } = BB, QB = 1 - cO(1 - Math.exp(OB[1] / 45e4), 0, 1), oB = BB.rayleigh - (1 - QB), jB = Math.hypot(OB[0], OB[1], OB[2]), yB = jB > 0 ? 1 / jB : 0, JB = GB.sunDir;
-       for (let lB = 0; lB < 3; lB++) JB[lB] = OB[lB] * yB;
-       const MB = JB[0] * YB[0] + JB[1] * YB[1] + JB[2] * YB[2],
-         PB = 1e3 * Math.max(0, 1 - Math.exp(-(LO - Math.acos(cO(MB, -1, 1))) / 1.5));
-       GB.sunE = PB;
-       const zB = .2 * BB.turbidity * 1e-17 * BB.mieCoefficient;
-       for (let lB = 0; lB < 3; lB++) {
-         const BB = gO[lB] * oB,
-           OB = rO[lB] * zB,
-           YB = PB / (BB + OB);
-         GB.inScatterR[lB] = BB * YB, GB.inScatterM[lB] = OB * YB, GB.extinctionBeta[lB] = 8400 * BB + 1250 * OB
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

#### 54. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L912-L918` → after: `L985-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L985-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L985-L986) · [Before (L912-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L912-L918)

```diff
-     const wO = {
-       A: .15,
-       B: .5,
-       C: .1,
-       D: .2,
-       E: .02,
-       F: .3
+     var Ai, bi = {
+       exports: {}
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L932-L933` → after: `L989-L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L989-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L989-L1023) · [Before (L932-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L932-L933)

```diff
-     function cO(BB, OB, GB) {
-       return Math.min(Math.max(BB, OB), GB)
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

#### 56. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L935` → after: `L1025-L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1025-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1025-L1031) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L935)

```diff
-     const hO = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;
+     const Ui = li(Object.freeze(Object.defineProperty({
+       __proto__: null,
+       default: {}
+     }, Symbol.toStringTag, {
+       value: "Module"
+     })));
+     var ki, si;
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L937-L980` → after: `L1033-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1033-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1033-L1073) · [Before (L937-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L937-L980)

```diff
-     function aO(BB, OB) {
-       const GB = new Map(OB),
-         YB = [],
-         DB = [],
-         QB = () => 0 === DB.length || DB[DB.length - 1].active;
-       let oB = null;
-       const jB = () => {
-         const BB = [...GB].filter((BB => {
-             let [, OB] = BB;
-             return !0 !== OB
-           })),
-           OB = BB.map((BB => {
-             let [OB] = BB;
-             return OB
-           })).join("|");
-         oB = BB.length ? new RegExp(`\\b(${OB})\\b`, "g") : null
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

#### 58. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L983-L984` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1076) · [Before (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L983-L984)

```diff
-       if (DB.length) throw new Error("Unterminated #if");
-       return YB.join("\n")
+       return ki = OW, OW.default = OW, ki
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L987-L991` → after: `L1080-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1080-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1080-L1081) · [Before (L987-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L987-L991)

```diff
-     function eO(BB, OB, GB) {
-       return BB.replace(OB, (BB => {
-         const OB = GB.get(BB);
-         return "string" === typeof OB ? OB : BB
-       }))
+     function TO() {
+       return Ki || (Ki = 1, yO.isClean = Symbol("isClean"), yO.my = Symbol("my")), yO
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L994-L1009` → after: `L1084-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1084-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1084-L1111) · [Before (L994-L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L994-L1009)

```diff
-     function TO(BB, OB) {
-       var GB;
-       const YB = null !== (GB = BB.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== GB ? GB : [];
-       let DB = 0;
-       const QB = () => YB[DB],
-         oB = () => YB[DB++],
-         jB = BB => {
-           const GB = /^\d/.test(BB) ? BB : OB.get(BB);
-           return "string" === typeof GB ? parseInt(GB) : Number.NaN
-         },
-         yB = () => {
-           const BB = oB();
-           if ("!" === BB) return !yB();
-           if ("(" === BB) {
-             const BB = MB();
-             return oB(), BB
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

#### 61. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1011-L1015` → after: `L1113-L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1113-L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1113-L1123) · [Before (L1011-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1011-L1015)

```diff
-           if ("defined" === BB) {
-             const BB = "(" === QB();
-             BB && oB();
-             const GB = oB();
-             return BB && oB(), OB.has(GB)
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

#### 62. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1017-L1036` → after: `L1125-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1125-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1125-L1138) · [Before (L1017-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1017-L1036)

```diff
-           const GB = QB();
-           if ("==" === GB || "!=" === GB || ">" === GB || "<" === GB || ">=" === GB || "<=" === GB) {
-             oB();
-             const OB = jB(BB),
-               YB = jB(oB());
-             if (Number.isNaN(OB) || Number.isNaN(YB)) return !1;
-             switch (GB) {
-               case "==":
-                 return OB === YB;
-               case "!=":
-                 return OB !== YB;
-               case ">":
-                 return OB > YB;
-               case "<":
-                 return OB < YB;
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

#### 63. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1038-L1046` → after: `L1140-L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1140-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1140-L1160) · [Before (L1038-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1038-L1046)

```diff
-           return OB.has(BB)
-         },
-         JB = () => {
-           let BB = yB();
-           for (;
-             "&&" === QB();) {
-             oB();
-             const OB = yB();
-             BB = BB && OB
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

#### 64. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1048-L1056` → after: `L1162-L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1162-L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1162-L1170) · [Before (L1048-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1048-L1056)

```diff
-           return BB
-         },
-         MB = () => {
-           let BB = JB();
-           for (;
-             "||" === QB();) {
-             oB();
-             const OB = JB();
-             BB = BB || OB
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

#### 65. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1058-L1062` → after: `L1172-L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1172-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1172-L1250) · [Before (L1058-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1058-L1062)

```diff
-           return BB
-         },
-         PB = MB();
-       if (DB !== YB.length) throw new Error(`Cannot evaluate #if ${BB}`);
-       return PB
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

#### 66. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1085-L1088` → after: `L1253-L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1253-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1253-L1256) · [Before (L1085-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1085-L1088)

```diff
-     function lG(BB, OB) {
-       const GB = BB % OB;
-       return GB < 0 ? GB + OB : GB
-     }
+     function hO() {
+       if (Ti) return yi;
+       Ti = 1;
+       let WW = JO();
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1090-L1092` → after: `L1258-L1261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1258-L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1258-L1261) · [Before (L1090-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1090-L1092)

```diff
-     function pG(BB, OB, GB) {
-       return YB = lG(BB, BG[0]), DB = lG(OB, BG[1]), QB = lG(GB, BG[2]), YB + BG[0] * (DB + BG[1] * QB);
-       var YB, DB, QB
+       function iW(iW, OW) {
+         new WW(OW).stringify(iW)
+       }
+       return yi = iW, iW.default = iW, yi
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1095-L1152` → after: `L1264-L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1264-L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1264-L1281) · [Before (L1095-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1095-L1152)

```diff
-     function qG(BB, OB, GB) {
-       return BB + 8 * (OB + 8 * GB)
-     }
- 
-     function ZG(BB, OB, GB) {
-       return BB + 4 * (OB + 4 * GB)
-     }
-     const NG = 65535,
-       RG = 0,
-       WG = 1,
-       AG = 2,
-       VG = 3;
- 
-     function SG(BB) {
-       return Math.ceil(BB * BB / 32)
-     }
- ... (42 more removed lines; see GitHub link above)
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

#### 69. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1154-L1241` → after: `L1283-L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1283-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1283-L1298) · [Before (L1154-L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1154-L1241)

```diff
-       add(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         if (this.parts >= KG || ! function(BB, OB, GB) {
-             const YB = BB[OB],
-               DB = BB[OB + 1],
-               QB = BB[OB + 2],
-               oB = BB[OB + 3],
-               jB = BB[OB + 4],
-               yB = BB[OB + 5],
-               JB = BB[OB + 6],
-               MB = BB[OB + 7],
-               PB = BB[OB + 8],
-               zB = BB[OB + 9],
-               lB = BB[OB + 10],
-               pB = BB[OB + 11],
-               qB = BB[OB + 12],
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

#### 70. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1243-L1249` → after: `L1300-L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1300-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1300-L1318) · [Before (L1243-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1243-L1249)

```diff
-         let oB = 0;
-         for (let yB = 0; yB < 16384; yB++) YB[yB] = oB, oB += OB[yB], OB[yB] = YB[yB];
-         YB[16384] = oB;
-         for (let yB = 0; yB < QB; yB++) {
-           const DB = 4 * yB;
-           for (let QB = GB[DB + 1]; QB <= GB[DB + 3]; QB++)
-             for (let oB = GB[DB]; oB <= GB[DB + 2]; oB++) YB[mG + OB[QB * BB + oB]++] = yB
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
+ ... (3 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1251-L1260` → after: `L1320-L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1320-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1320-L1430) · [Before (L1251-L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1251-L1260)

```diff
-         const jB = this.floats;
-         for (let yB = 0; yB < 16384; yB++) {
-           const BB = mG + YB[yB],
-             OB = BB + Math.min(YB[yB + 1] - YB[yB], 64);
-           for (let GB = BB + 1; GB < OB; GB++) {
-             const OB = YB[GB],
-               DB = jB[81934 + OB * uG];
-             let QB = GB - 1;
-             for (; QB >= BB && jB[81934 + YB[QB] * uG] < DB; QB--) YB[QB + 1] = YB[QB];
-             YB[QB + 1] = OB
+         cloneAfter() {
+           let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
+             iW = this.clone(WW);
+           return this.parent.insertAfter(this, iW), iW
+         }
+         cloneBefore() {
+           let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
+             iW = this.clone(WW);
+           return this.parent.insertBefore(this, iW), iW
+         }
+         error(WW) {
+           let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+           if (this.source) {
+             let {
+               end: OW,
+               start: mW
+ ... (95 more added lines; see GitHub link above)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1267-L1323` → after: `L1486-L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1486-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1486-L1501) · [Before (L1267-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1267-L1323)

```diff
-     function wG(BB) {
-       return Math.min(127, Math.max(0, Math.floor((.5 * BB + .5) * dG)))
-     }
- 
-     function EG(BB, OB, GB, YB, DB) {
-       for (let QB = 0; QB < 4; QB++)
-         for (let oB = 0; oB < 4; oB++) DB[4 * QB + oB] = BB[OB + 4 * QB] * GB[YB + oB] + BB[OB + 4 * QB + 1] * GB[YB + 4 + oB] + BB[OB + 4 * QB + 2] * GB[YB + 8 + oB] + BB[OB + 4 * QB + 3] * GB[YB + 12 + oB]
-     }
- 
-     function cG(BB, OB, GB, YB, DB) {
-       const QB = BB[0] - OB,
-         oB = BB[1] - GB,
-         jB = BB[2] - YB,
-         yB = BB[3] - OB,
-         JB = BB[4] - GB,
-         MB = BB[5] - YB,
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

#### 73. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1326-L1331` → after: `L1504-L1523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1504-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1504-L1523) · [Before (L1326-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1326-L1331)

```diff
-     function TG(BB) {
-       let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-         GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const [DB, QB, oB] = BG, [jB, yB, JB] = tO, MB = Math.log2(xO), PB = YB ? "var<private> bloxdSpCrossed: bool;\n" : "", zB = YB ? "\t\t\tbloxdSpCrossed = true;\n" : "";
-       return `@group(${BB.group}) @binding(${BB.sz}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${BB.group}) @binding(${BB.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${GB?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${PB}struct BloxdSpBoxE … [truncated]
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

#### 74. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1343-L1344` → after: `L1527-L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1527-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1527-L1605) · [Before (L1343-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1343-L1344)

```diff
-       const BB = bG;
-       return `${eG(BB)}${TG(BB,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${aG.b}>,\n}\n@group(${BB.group}) @binding(${BB.work}) var<uniform> bloxd … [truncated]
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

#### 75. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1349-L1355` → after: `L1608-L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1608-L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1608-L1745) · [Before (L1349-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1349-L1355)

```diff
-     function sG(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
-       const YB = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${OB.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y … [truncated]
-         DB = "trace" === GB || "lit" === GB,
-         QB = "maskEdge" === GB ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
-         oB = DB ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${OB.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of step … [truncated]
-       return `${YB}${BB.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${DB?function(){const[BB,OB,GB]=aG.q;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif  … [truncated]
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

#### 76. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1359-L1360` → after: `L1748-L1926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1748-L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1748-L1926) · [Before (L1359-L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1359-L1360)

```diff
-     function tG(BB) {
-       return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${BB.texture}) - 1u)))`
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

#### 77. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1364-L1365` → after: `L1929-L1938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1929-L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1929-L1938) · [Before (L1364-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1364-L1365)

```diff
-     function OY(BB) {
-       return `bloxdSpFlags(${BB})`
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

#### 78. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1369-L1373` → after: `L1941-L1950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1941-L1950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1941-L1950) · [Before (L1369-L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1369-L1373)

```diff
-     function YY(BB, OB, GB, YB, DB) {
-       const QB = BB.indexOf(OB);
-       if (QB < 0 || BB.indexOf(OB, QB + 1) >= 0) throw new Error(`Lite's ${DB} program changed at the shader pack ${YB} hook: ${QB<0?"no":"more than one"} anchor (lite/${DB}ShaderPack.ts)`);
-       return BB.slice(0, QB) + GB + BB.slice(QB + OB.length)
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

#### 79. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1375-L1376` → after: `L1952-L2133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R1952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L1952-L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L1952-L2133) · [Before (L1375-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1375-L1376)

```diff
-     function DY(BB) {
-       return BB.sunShadow || BB.airShadow
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

#### 80. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1379-L1380` → after: `L2136-L2156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R2136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L2136-L2156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L2136-L2156) · [Before (L1379-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1379-L1380)

```diff
-     function QY(BB, OB) {
-       return OB && DY(BB)
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

#### 81. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1387-L1403` → after: `L2159-L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R2159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L2159-L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L2159-L2164) · [Before (L1387-L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1387-L1403)

```diff
-     function jY(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
-       if (!DY(BB)) return "";
-       if (OB) {
-         const OB = oY,
-           DB = "trace" === GB || "lit" === GB;
-         let QB = "";
-         BB.sunShadow && (QB = DB ? `${TG(OB,!0,"lit"===GB)}${YB=OB,`@group(${YB.group}) @binding(${YB.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${YB.group}) @binding(${YB.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn blo … [truncated]
-           const YB = `@group(${BB}) @binding(${OB}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
-           return GB ? `${YB}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${vG}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = text … [truncated]
-         }(OB.group, vO.o, "maskEdge" === GB));
-         const oB = {
-           shadowDirection: `${vO.g}.shadowDirection`,
-           renderOffset: `${vO.g}.renderOffset`,
-           eyePosition: `${vO.g}.eyePosition`
-         };
- ... (1 more removed lines; see GitHub link above)
+     function VO() {
+       if (ai) return Ii;
+       ai = 1;
+       let WW = {};
+       return Ii = function(iW) {
+         WW[iW] || (WW[iW] = !0, "undefined" !== typeof console && console.warn && console.warn(iW))
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1409-L1418` → after: `L2168-L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R2168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L2168-L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L2168-L2188) · [Before (L1409-L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1409-L1418)

```diff
-     function yY(BB, OB, GB, YB) {
-       let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
-       if (!OB) return "";
-       const QB = (oB = "fragmentInputs.vPositionW", jB = BB.sunShadow ? {
-         normal: GB,
-         flags: YB
-       } : null, `\n\tbloxdSpShadowPosition = ${oB};\n${jB?`\tbloxdSpShadowNormal = normalize(${jB.normal});\n\tbloxdSpShadowEmissive = (${jB.flags} & ${mO.b.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${jB.flags} & ${mO.h}u) != 0u;\n`:""}`);
-       var oB, jB;
-       return BB.sunShadow && ("mask" === DB || "maskEdge" === DB) ? `${QB}${yB="fragmentInputs.position",JB="maskEdge"===DB,`\n\tbloxdSpShadowPixel = vec2i(${yB}.xy);\n${JB?`\tbloxdSpShadowZ = ${yB}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${yB}.z), dpdy(${yB}.z));\n`:""}`}` : QB;
-       var yB, JB
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

#### 83. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1424-L1425` → after: `L2191-L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R2191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L2191-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L2191-L2215) · [Before (L1424-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1424-L1425)

```diff
-     function zY(BB) {
-       return `\tvertexOutputs.vPackTexture = ${MY}[min(u32(${BB}), arrayLength(&${MY}) - 1u)];\n`
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

#### 84. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1428-L1429` → after: `L2218-L2233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L2218-L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L2218-L2233) · [Before (L1428-L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1428-L1429)

```diff
-     function lY(BB) {
-       return void 0 !== BB.uv
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

#### 85. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1432-L1442` → after: `L2236-L2517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L2236-L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L2236-L2517) · [Before (L1432-L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1432-L1442)

```diff
-     function pY(BB) {
-       if (!BB) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
-       if (lY(BB)) return function(BB) {
-         const {
-           texture: OB,
-           cells: GB,
-           layers: YB
-         } = BB, DB = `textureDimensions(${OB}, bloxdSpLevel)`, QB = GB ? `max(vec2u(vec2f(${DB}) / ${GB}), vec2u(1u))` : DB, oB = GB ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${QB};\n\tlet bloxdSpIndex = u32( … [truncated]
-         let jB;
-         if (GB)
-           if (1 === YB.length) jB = `\treturn bloxdSpOwnTexel(${YB[0]}, bloxdSpUv, bloxdSpLevel);\n`;
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
+ ... (266 more added lines; see GitHub link above)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1444-L1460` → after: `L2519-L2742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R2519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L2519-L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L2519-L2742) · [Before (L1444-L1460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1444-L1460)

```diff
-             const BB = YB.length - 1;
-             jB = `\tvar bloxdSpColour = bloxdSpOwnTexel(${YB[BB]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
-             for (let OB = BB - 1; OB >= 0; OB--) jB += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${YB[OB]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a)) … [truncated]
-             jB += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
-           }
-         else jB = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
-         return `${BB.id?`var<private> ${xG}: u32;\n`:""}${oB}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${tG(BB)};\n\treturn ${QB};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId  … [truncated]
-       }(BB);
-       const OB = BB,
-         GB = BB => {
-           const GB = BB > 0 ? `bloxdSpLayer - ${OB.layers*BB}u` : "bloxdSpLayer";
-           return `return textureSampleLevel(textureAtlas${BB}, ${OB.sampler}, bloxdSpTurned, ${GB}, round(bloxdSpMipLevel));`
-         };
-       let YB = "";
-       for (let QB = 0; QB < OB.count - 1; QB++) YB += `\tif (bloxdSpLayer < ${OB.layers*(QB+1)}u) {\n\t\t${GB(QB)}\n\t}\n`;
-       const DB = OB.frame ? `${OB.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
- ... (1 more removed lines; see GitHub link above)
+             let WW = mW.match(/^(\s*)([^]*\S)(\s*)$/);
+             iW.text = WW[2], iW.raws.left = WW[1], iW.raws.right = WW[3]
+           }
+         }
+         createTokenizer() {
+           this.tokenizer = iW(this.input)
+         }
+         decl(iW, OW) {
+           let mW = new WW;
+           this.init(mW, iW[0][2]);
+           let EW, NW = iW[iW.length - 1];
+           for (";" === NW[0] && (this.semicolon = !0, iW.pop()), mW.source.end = this.Vk(NW[3] || NW[2] || function(WW) {
+               for (let iW = WW.length - 1; iW >= 0; iW--) {
+                 let OW = WW[iW],
+                   mW = OW[3] || OW[2];
+                 if (mW) return mW
+ ... (208 more added lines; see GitHub link above)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1463-L1466` → after: `L2745-L3064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R2745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L2745-L3064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L2745-L3064) · [Before (L1463-L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1463-L1466)

```diff
-     function qY(BB, OB, GB) {
-       return !!BB.surface && "bloxdDefaultSurface" !== BB.surface && function(BB, OB) {
-         return "liquid" === OB || !BB
-       }(OB, GB)
+     function GO() {
+       if (lO) return xO;
+       lO = 1;
+       let WW = gO(),
+         iW = RO(),
+         OW = dO();
+ 
+       function mW(WW, mW) {
+         let EW = new OW(WW, mW),
+           NW = new iW(EW);
+         try {
+           NW.parse()
+         } catch (PW) {
+           throw PW
+         }
+         return NW.root
+ ... (304 more added lines; see GitHub link above)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1470` → after: `L3321-L3329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R3321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L3321-L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L3321-L3329) · [Before (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1470)

```diff
-       return BB.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${OB.vertexLocalPosition}, ${OY(OB.vertexFlags)});\n\t\tlet bloxdSpVertex = ${BB.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t … [truncated]
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

#### 89. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1473-L1487` → after: `L3332-L3348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R3332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L3332-L3348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L3332-L3348) · [Before (L1473-L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1473-L1487)

```diff
-     function NY(BB, OB, GB, YB, DB) {
-       if (!BB.surface) return "";
-       const QB = (BB, OB) => `\n\tlet bloxdSpTexelUV = ${BB};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = cl … [truncated]
-       let oB = "",
-         jB = "0u, 0u, vec2f(0.0), 0.0";
-       const yB = YB && lY(YB) ? YB : null,
-         JB = YB && !lY(YB) ? YB : null;
-       if (yB) {
-         oB = `${yB.id?`\n\tlet bloxdSpTexture = ${yB.id};\n\t${xG} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${yB.uv};${QB(function(BB,OB){var GB;return`${null!==(GB=BB.levelUv)&&void 0!==GB?GB:BB.cells?`${OB} / ${BB.cells}`:OB} * vec2f(textureDimensions(${BB.texture})) … [truncated]
-       } else JB && (oB = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${JY} = bloxdSpTexture >> 16u;${QB(`fragmentInputs.vMainUV1 * ${(0,bO.pb)(JB.width)}`,"textureAtlas0")}`, jB = `bloxdSpTexture & 0xffffu, ${JY}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
-       const MB = DB.overlayColour,
-         PB = MB ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
-         zB = "bloxdDefaultSurface" !== BB.surface || MB ? `\n\tbaseColor = vec4f(${PB}, baseColor.a);` : "",
-         lB = qY(BB, OB, GB) ? `\n\t${DB.alphaOut} = bloxdSpSurface.alpha;` : "";
-       return `${oB}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${DB.alpha}, ${DB.enchantTier}, ${DB.enchantColour}, ${DB.enchantSpeed}, ${null!==MB&&void 0!==MB?MB:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${DB.normal}, ${DB.localPosition}, ${OY(DB.flags)}, ${jB});\n … [truncated]
+     function QO() {
+       return {
+         stylesWithHoverClass: new Map
+       }
+     }
+     const Wm = "rrweb-snapshot.createSandboxedIframe() requires root to be connected to a document before creating a sandboxed iframe.",
+       im = new WeakSet;
+ 
+     function Om(WW) {
+       if (WW.UNSAFE_allowUnprotectedRebuild) return;
+       const iW = WW.doc.defaultView;
+       if (iW && (!im.has(WW.doc) || ! function(WW) {
+           if (!WW || "IFRAME" !== WW.tagName) return !1;
+           if (!("sandbox" in WW)) return !1;
+           const iW = Array.from(WW.sandbox);
+           return 1 === iW.length && "allow-same-origin" === iW[0]
+ ... (1 more added lines; see GitHub link above)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1492-L1503` → after: `L3352-L3386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R3352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L3352-L3386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L3352-L3386) · [Before (L1492-L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1492-L1503)

```diff
-       if (!BB.light) return "";
-       const DB = OB ? `${bO.m}.rgb, ${bO.m}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${bO.i}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
-         {
-           lambert: QB,
-           diffuse: oB,
-           emissive: jB,
-           ambient: yB,
-           fogColour: JB,
-           fogAlpha: MB,
-           normal: PB
-         } = YB;
-       return `\tvar ${RY} = BloxdLightIn(vec3f(0.0), ${GB?QB:"0.0"}, ${oB}, ${jB}, ${yB}, ${DB}, ${JB}, ${MB}, fragmentInputs.vPositionW, ${PB}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn. … [truncated]
+       const {
+         doc: EW,
+         hackCss: NW,
+         cache: PW
+       } = mW;
+       WW.childNodes.length ? function(WW, iW, OW, mW) {
+         const EW = [];
+         for (const tW of WW.childNodes) tW.type === cW.Text && EW.push(tW);
+         const NW = iW.split("/* rr_split */");
+         for (; NW.length > 1 && NW.length > EW.length;) NW.splice(-2, 2, NW.slice(-2).join(""));
+         let PW = "";
+         OW && (PW = FO(NW.join(""), mW));
+         let LW = 0,
+           wW = -1;
+         for (let cW = 0; cW < EW.length && cW !== NW.length; cW++) {
+           const WW = EW[cW];
+ ... (19 more added lines; see GitHub link above)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1507` → after: `L3622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R3622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L3622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L3622) · [Before (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1507)

```diff
-       return BB.light ? `\n\t{\n\t\tlet bloxdSpLight = ${BB.light}(bloxdSpSurface, ${RY});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
+       return WW && WW.__esModule && Object.prototype.hasOwnProperty.call(WW, "default") ? WW.default : WW
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1534-L1535` → after: `L3626-L3911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R3626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L3626-L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L3626-L3911) · [Before (L1534-L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1534-L1535)

```diff
-       var OB;
-       return !(null === (OB = (0, sO.h)(BB)) || void 0 === OB || !OB.sceneDepth)
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
+             return WW[iW]
+ ... (270 more added lines; see GitHub link above)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1538-L1541` → after: `L3914-L3917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R3914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L3914-L3917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L3914-L3917) · [Before (L1538-L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1538-L1541)

```diff
-     function dY(BB) {
-       const OB = (0, sO.h)(BB);
-       return !!OB && qY(OB.hooks, OB.strict, OB.program)
-     }
+     function JE() {
+       if (Tm) return ym;
+       Tm = 1;
+       let WW = TE();
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1543-L1544` → after: `L3919-L3922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R3919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L3919-L3922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L3919-L3922) · [Before (L1543-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1543-L1544)

```diff
-     function KY(BB, OB, GB, YB) {
-       return YY(BB, OB, GB, YB, "terrain")
+       function iW(iW, OW) {
+         new WW(OW).stringify(iW)
+       }
+       return ym = iW, iW.default = iW, ym
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1547-L1570` → after: `L3925-L4144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R3925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L3925-L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L3925-L4144) · [Before (L1547-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1547-L1570)

```diff
-     function uY(BB, OB, GB) {
-       let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
-       const QB = function(BB) {
-           return (0, sO.d)(BB.packVariant, BB.liquid ? "liquid" : "terrain")
-         }(BB),
-         {
-           hooks: oB
-         } = QB,
-         jB = QY(QB, YB),
-         yB = "edge" === DB ? "maskEdge" : "plain" === DB ? "mask" : "trace",
-         JB = ZY(oB, UY);
-       JB && (OB = KY(OB, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz … [truncated]
-       const MB = "atlas" === BB.texture ? {
-           count: BB.atlasCount,
-           layers: BB.atlasLayers,
- ... (8 more removed lines; see GitHub link above)
+     function hE() {
+       if (hm) return Jm;
+       hm = 1;
+       let {
+         isClean: WW,
+         my: iW
+       } = yE(), OW = Mm(), mW = TE(), EW = JE();
+ 
+       function NW(WW, iW) {
+         let OW = new WW.constructor;
+         for (let mW in WW) {
+           if (!Object.prototype.hasOwnProperty.call(WW, mW)) continue;
+           if ("proxyCache" === mW) continue;
+           let EW = WW[mW],
+             PW = typeof EW;
+           "parent" === mW && "object" === PW ? iW && (OW[mW] = iW) : "source" === mW ? OW[mW] = EW : Array.isArray(EW) ? OW[mW] = EW.map((WW => NW(WW, OW))) : ("object" === PW && null !== EW && (EW = NW(EW)), OW[mW] = EW)
+ ... (204 more added lines; see GitHub link above)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1574-L1575` → after: `L4147-L4162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4147-L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4147-L4162) · [Before (L1574-L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1574-L1575)

```diff
-     function IY(BB) {
-       return void 0 !== BB.packVariant
+     function HE() {
+       if (nm) return Hm;
+       nm = 1;
+       let WW = hE();
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
+       return Hm = iW, iW.default = iW, Hm
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1622-L1624` → after: `L4165-L4184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4165-L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4165-L4184) · [Before (L1622-L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1622-L1624)

```diff
-     function vY(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HY;
-       return `\n\tlet atlasIdxIn = ${BB};\n\tlet animTick = ${GB.kP};\n\tlet animTickStride = ${GB.stride};\n\tlet numAnimTextures = ${GB.count};\n\t${(0,nB.e)(SB.c.WGSL,GB.perTexture)}\n\t${OB}animLayer;\n`
+     function nE() {
+       if (om) return um;
+       om = 1;
+       return um = {
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

#### 98. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1627-L1636` → after: `L4187-L4264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4187-L4264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4187-L4264) · [Before (L1627-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1627-L1636)

```diff
-     function sY(BB) {
-       const OB = (OB, GB) => {
-         const YB = OB > 0 ? `fragmentInputs.texAtlasIndex - ${BB.atlasLayers.toFixed(1)} * ${OB.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
-         return `${GB?"textureSampleLevel":"textureSample"}(textureAtlas${OB}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${YB}))${GB?", atlasLod":""})`
-       };
-       if (1 === BB.atlasCount) return `baseColor = ${OB(0,!1)};`;
-       let GB = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,bO.pb)(BB.v_)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
-       for (let YB = 0; YB < BB.atlasCount; YB++) {
-         const DB = BB.atlasLayers * (YB + 1) - .5;
-         GB += `${YB>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,bO.pb)(DB)}) {\n\t\tbaseColor = ${OB(YB,!0)};\n\t}`
+     function uE() {
+       if (em) return dm;
+       em = 1;
+       let {
+         SourceMapConsumer: WW,
+         SourceMapGenerator: iW
+       } = Um, {
+         existsSync: OW,
+         readFileSync: mW
+       } = Um, {
+         dirname: EW,
+         join: NW
+       } = Um;
+       class PW {
+         constructor(WW, iW) {
+           if (!1 === iW.map) return;
+ ... (62 more added lines; see GitHub link above)
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1638-L1642` → after: `L4266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4266) · [Before (L1638-L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1638-L1642)

```diff
-       return GB
-     }
- 
-     function xY(BB) {
-       return `terrain-${BB.texture}${"atlas"===BB.texture?BB.atlasCount:""}${BB.animated?"-anim":""}${BB.alphaTest?"-test":""}${BB.lighting?"-lit":""}-dir${BB.dirLightCount}${BB.packed?"-packed":""}${IY(BB)?`-sp${BB.packVariant}`:""}${BB.liquid?"-liquid":""}${BB.resting?"-rest":" … [truncated]
+       return dm = PW, PW.default = PW, dm
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1645-L1744` → after: `L4269-L4404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4269-L4404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4269-L4404) · [Before (L1645-L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1645-L1744)

```diff
-     function tY(BB) {
-       let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-         GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
-       const YB = function(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
-         const GB = "none" !== BB.texture,
-           YB = "atlas" === BB.texture,
-           DB = BB.dirLightCount > 0,
-           QB = IY(BB);
-         if (BB.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${BB.dirLightCount}`);
-         let oB = 1,
-           jB = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
-         if (YB) {
-           BB.animated && (jB += `@group(2) @binding(${oB++}) var<storage, read> animDataPerTex: array<f32>;\n`), jB += `@group(2) @binding(${oB++}) var atlasSampler: sampler;\n`;
-           for (let OB = 0; OB < BB.atlasCount; OB++) jB += `@group(2) @binding(${oB++}) var textureAtlas${OB}: texture_2d_array<f32>;\n`
-         } else "single" === BB.texture && (jB += `@group(2) @binding(${oB++}) var diffuseSamplerSampler: sampler;\n`, jB += `@group(2) @binding(${oB++}) var diffuseSampler: texture_2d<f32>;\n`);
- ... (84 more removed lines; see GitHub link above)
+     function oE() {
+       if (Dm) return gm;
+       Dm = 1;
+       let {
+         SourceMapConsumer: WW,
+         SourceMapGenerator: iW
+       } = Um, {
+         fileURLToPath: OW,
+         pathToFileURL: mW
+       } = Um, {
+         isAbsolute: EW,
+         resolve: NW
+       } = Um, {
+         nanoid: PW
+       } = nE(), LW = Um, cW = Mm(), wW = uE(), tW = Symbol("fromOffsetCache"), ZW = Boolean(WW && iW), xW = Boolean(NW && EW);
+       class lW {
+ ... (120 more added lines; see GitHub link above)
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1790-L1791` → after: `L4409-L4587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4409-L4587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4409-L4587) · [Before (L1790-L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1790-L1791)

```diff
-     function QD(BB, OB) {
-       return `#if defined(${BB}) && ${BB}DIRECTUV == 0\nvarying v${OB}UV: vec2f;\n#endif`
+     function dE() {
+       if (pm) return Vm;
+       pm = 1;
+       let {
+         SourceMapConsumer: WW,
+         SourceMapGenerator: iW
+       } = Um, {
+         dirname: OW,
+         relative: mW,
+         resolve: EW,
+         sep: NW
+       } = Um, {
+         pathToFileURL: PW
+       } = Um, LW = oE(), cW = Boolean(WW && iW), wW = Boolean(OW && EW && mW && NW);
+       return Vm = class {
+         constructor(WW, iW, OW, mW) {
+ ... (163 more added lines; see GitHub link above)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1794-L1795` → after: `L4590-L4599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4590-L4599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4590-L4599) · [Before (L1794-L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1794-L1795)

```diff
-     function oD(BB, OB, GB) {
-       return `#if defined(${BB}) && ${BB}DIRECTUV == 0\nif (uniforms.v${OB}Infos.x==0.)\n{vertexOutputs.v${OB}UV= (uniforms.${GB}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${OB}UV= (uniforms.${GB}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
+     function eE() {
+       if (Cm) return fm;
+       Cm = 1;
+       let WW = hE();
+       class iW extends WW {
+         constructor(WW) {
+           super(WW), this.type = "comment"
+         }
+       }
+       return fm = iW, iW.default = iW, fm
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1798-L1848` → after: `L4602-L4611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4602-L4611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4602-L4611) · [Before (L1798-L1848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1798-L1848)

```diff
-     function jD(BB, OB, GB) {
-       return `#ifdef ${BB}\n#if ${BB}DIRECTUV == 1\n#define v${OB}UV vMainUV1\n#elif ${BB}DIRECTUV == 2\n#define v${OB}UV vMainUV2\n#else\nvarying v${OB}UV: vec2f;\n#endif\nvar ${GB}SamplerSampler: sampler;\nvar ${GB}Sampler: texture_2d<f32>;\n#endif`
-     }
-     const yD = {
-         lights: 0,
-         lightStride: 12,
-         fogInfos: 96,
-         fogColour: 100,
-         outputHeight: 103,
-         animTick: 104,
-         timeMs: 105
-       },
-       JD = 256,
-       MD = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) … [truncated]
-       PD = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
-       zD = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
- ... (35 more removed lines; see GitHub link above)
+     function vE() {
+       if (Bm) return Xm;
+       Bm = 1;
+       let WW, iW, OW, mW, {
+           isClean: EW,
+           my: NW
+         } = yE(),
+         PW = HE(),
+         LW = eE(),
+         cW = hE();
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1850-L1852` → after: `L4613-L4615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4613-L4615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4613-L4615) · [Before (L1850-L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1850-L1852)

```diff
-     function VD(BB) {
-       AD.has(BB) || (AD.add(BB), console.warn(`Lite: no place for plugin code at ${BB} in the standard shader: it is left out`))
-     }
+       function wW(WW) {
+         return WW.map((WW => (WW.nodes && (WW.nodes = wW(WW.nodes)), delete WW.source, WW)))
+       }
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1854-L1859` → after: `L4617-L4619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4617-L4619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4617-L4619) · [Before (L1854-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1854-L1859)

```diff
-     function SD(BB, OB) {
-       let GB = BB;
-       const YB = new Map;
-       for (const [QB, oB] of OB) {
-         var DB;
-         YB.set(QB, `${null!==(DB=YB.get(QB))&&void 0!==DB?DB:""}${oB}\n`)
+       function tW(WW) {
+         if (WW[EW] = !1, WW.proxyOf.nodes)
+           for (let iW of WW.proxyOf.nodes) tW(iW)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1861-L1866` → after: `L4621-L4657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4621-L4657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4621-L4657) · [Before (L1861-L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1861-L1866)

```diff
-       for (const [QB, oB] of YB) {
-         if (!QB.startsWith("!")) {
-           const BB = `#define ${QB}`;
-           if (!GB.includes(BB)) {
-             VD(QB);
-             continue
+       class ZW extends cW {
+         append() {
+           for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
+           for (let mW of iW) {
+             let WW = this.normalize(mW, this.last);
+             for (let iW of WW) this.proxyOf.nodes.push(iW)
+           }
+           return this.markDirty(), this
+         }
+         cleanRaws(WW) {
+           if (super.cleanRaws(WW), this.nodes)
+             for (let iW of this.nodes) iW.cleanRaws(WW)
+         }
+         each(WW) {
+           if (!this.proxyOf.nodes) return;
+           let iW, OW, mW = this.getIterator();
+ ... (21 more added lines; see GitHub link above)
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1871-L1876` → after: `L4660-L4709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4660-L4709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4660-L4709) · [Before (L1871-L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1871-L1876)

```diff
-         let BB = QB.substring(1),
-           OB = "g";
-         if (BB.startsWith("!")) OB = "", BB = BB.substring(1);
-         else {
-           const GB = WD.exec(BB);
-           GB && (OB = GB[1], BB = BB.substring(OB.length + 1))
+         index(WW) {
+           return "number" === typeof WW ? WW : (WW.proxyOf && (WW = WW.proxyOf), this.proxyOf.nodes.indexOf(WW))
+         }
+         insertAfter(WW, iW) {
+           let OW, mW = this.index(WW),
+             EW = this.normalize(iW, this.proxyOf.nodes[mW]).reverse();
+           mW = this.index(WW);
+           for (let NW of EW) this.proxyOf.nodes.splice(mW + 1, 0, NW);
+           for (let NW in this.indexes) OW = this.indexes[NW], mW < OW && (this.indexes[NW] = OW + EW.length);
+           return this.markDirty(), this
+         }
+         insertBefore(WW, iW) {
+           let OW, mW = this.index(WW),
+             EW = 0 === mW && "prepend",
+             NW = this.normalize(iW, this.proxyOf.nodes[mW], EW).reverse();
+           mW = this.index(WW);
+ ... (34 more added lines; see GitHub link above)
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1878-L1883` → after: `L4711-L4779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4711-L4779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4711-L4779) · [Before (L1878-L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1878-L1883)

```diff
-         const YB = new RegExp(BB, OB.includes("g") ? OB : `${OB}g`);
-         let DB = YB.exec(GB);
-         for (DB || VD(QB); DB;) {
-           const BB = DB,
-             OB = oB.replace(/\$(\d+)/g, ((OB, GB) => Number(GB) < BB.length ? BB[Number(GB)] : ""));
-           GB = GB.substring(0, BB.index) + OB + GB.substring(BB.index + BB[0].length), YB.lastIndex = BB.index + OB.length, DB = YB.exec(GB)
+         push(WW) {
+           return WW.parent = this, this.proxyOf.nodes.push(WW), this
+         }
+         removeAll() {
+           for (let WW of this.proxyOf.nodes) WW.parent = void 0;
+           return this.proxyOf.nodes = [], this.markDirty(), this
+         }
+         removeChild(WW) {
+           let iW;
+           WW = this.index(WW), this.proxyOf.nodes[WW].parent = void 0, this.proxyOf.nodes.splice(WW, 1);
+           for (let OW in this.indexes) iW = this.indexes[OW], iW >= WW && (this.indexes[OW] = iW - 1);
+           return this.markDirty(), this
+         }
+         replaceValues(WW, iW, OW) {
+           return OW || (OW = iW, iW = {}), this.walkDecls((mW => {
+             iW.props && !iW.props.includes(mW.prop) || iW.fast && !mW.value.includes(iW.fast) || (mW.value = mW.value.replace(WW, OW))
+ ... (53 more added lines; see GitHub link above)
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1886` → after: `L4782-L4794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4782-L4794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4782-L4794) · [Before (L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1886)

```diff
-       return GB
+       return ZW.registerParse = iW => {
+         WW = iW
+       }, ZW.registerRule = WW => {
+         iW = WW
+       }, ZW.registerAtRule = WW => {
+         OW = WW
+       }, ZW.registerRoot = WW => {
+         mW = WW
+       }, Xm = ZW, ZW.default = ZW, ZW.rebuild = WW => {
+         "atrule" === WW.type ? Object.setPrototypeOf(WW, OW.prototype) : "rule" === WW.type ? Object.setPrototypeOf(WW, iW.prototype) : "decl" === WW.type ? Object.setPrototypeOf(WW, PW.prototype) : "comment" === WW.type ? Object.setPrototypeOf(WW, LW.prototype) : "root" === WW.t … [truncated]
+           ZW.rebuild(WW)
+         }))
+       }, Xm
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1892-L1915` → after: `L4797-L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4797-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4797-L4817) · [Before (L1892-L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1892-L1915)

```diff
-     function kD(BB) {
-       const OB = {
-         attributes: [],
-         varyings: [],
-         uniforms: [],
-         textures: [],
-         samplers: new Set,
-         body: ""
-       };
-       let GB = BB.replace(nD, ((BB, GB, YB, DB, QB, oB) => ("attribute" === GB ? OB.attributes.push({
-         name: QB,
-         type: oB
-       }) : void 0 === GB ? OB.varyings.push({
-         name: QB,
-         type: oB,
-         interpolation: KD(oB, YB, DB)
- ... (8 more removed lines; see GitHub link above)
+     function gE() {
+       if (Rm) return qm;
+       Rm = 1;
+       let WW, iW, OW = vE();
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

#### 111. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1918-L1928` → after: `L4820-L4826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4820-L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4820-L4826) · [Before (L1918-L1928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1918-L1928)

```diff
-     function dD(BB) {
-       const OB = BB.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
-         GB = new Map([
-           ["f32", "float"],
-           ["vec2f", "vec2"],
-           ["vec3f", "vec3"],
-           ["vec4f", "vec4"],
-           ["mat4x4f", "mat4"]
-         ]).get(OB);
-       if (!GB) throw new Error(`Lite: unsupported uniform type ${BB}`);
-       return GB
+     function DE() {
+       if (Im) return Gm;
+       Im = 1;
+       let WW = {};
+       return Gm = function(iW) {
+         WW[iW] || (WW[iW] = !0, "undefined" !== typeof console && console.warn && console.warn(iW))
+       }
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1931-L1932` → after: `L4829-L4849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4829-L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4829-L4849) · [Before (L1931-L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1931-L1932)

```diff
-     function KD(BB, OB, GB) {
-       return void 0 === OB && void 0 === GB ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(BB.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === OB ? "@interpolate(flat) " : `@interpolate(${null!==OB&&void 0!==OB?OB:"perspective"}, ${null!==GB&&void 0!==GB?GB:"cente … [truncated]
+     function VE() {
+       if (rm) return am;
+       rm = 1;
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

#### 113. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1935-L1942` → after: `L4852-L4876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4852-L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4852-L4876) · [Before (L1935-L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1935-L1942)

```diff
-     function uD(BB) {
-       return iD({
-         defines: BB.defines,
-         vertex: SD(ND, BB.vertexCode),
-         fragment: SD(RD, BB.fragmentCode),
-         members: [...GD, ...BB.defines.has("OPACITY") ? YD : [], ...BB.defines.has("EMISSIVE") ? DD : [], ...BB.pluginUniforms],
-         structName: "StandardUniforms"
-       })
+     function pE() {
+       if (Fm) return zm;
+       Fm = 1;
+       let WW = VE();
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

#### 114. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1945-L1948` → after: `L4879-L4894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4879-L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4879-L4894) · [Before (L1945-L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1945-L1948)

```diff
-     function mD(BB) {
-       const OB = BB.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
-       if (OB === BB) throw new Error("Lite: fragment main has no return");
-       return OB
+     function fE() {
+       if (OE) return iE;
+       OE = 1;
+       let WW = vE();
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
+       return iE = iW, iW.default = iW, WW.registerAtRule(iW), iE
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1953-L1989` → after: `L4897-L4910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4897-L4910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4897-L4910) · [Before (L1953-L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L1953-L1989)

```diff
-     function iD(BB) {
-       const OB = BB.defines,
-         GB = kD(aO(BB.vertex, OB)),
-         YB = kD(aO(BB.fragment, OB)),
-         DB = new Map;
-       for (const WB of [...GB.varyings, ...YB.varyings]) DB.has(WB.name) || DB.set(WB.name, WB);
-       const QB = [...DB.values()].map(((BB, OB) => `\t@location(${OB}) ${BB.interpolation}${BB.name}: ${BB.type},`)),
-         oB = [...BB.members];
-       for (const WB of [...GB.uniforms, ...YB.uniforms]) oB.some((BB => BB.name === WB.name)) || oB.push(WB);
-       const jB = OD(BB.structName, oB),
-         yB = [],
-         JB = [];
-       let MB = 1;
-       const PB = new Set;
-       for (const WB of [...GB.textures, ...YB.textures]) {
-         if (PB.has(WB.name)) continue;
- ... (21 more removed lines; see GitHub link above)
+     function CE() {
+       if (EE) return mE;
+       EE = 1;
+       let WW, iW, OW = vE();
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
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2023-L2034` → after: `L4913-L4920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4913-L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4913-L4920) · [Before (L2023-L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2023-L2034)

```diff
-       },
-       HD = new Float64Array(16);
- 
-     function vD(BB, OB, GB) {
-       const YB = GB.worldMatrix;
-       var DB;
-       BB.updateFloat3("viewFrom", YB[12], YB[13], YB[14]), BB.updateFloatsFrom("zenithOffset", OB.cameraOffset, 0, 3), BB.updateFloatsFrom("up", OB.up, 0, 3), OB.luminance > 0 && (BB.updateFloat("exposure", OB.luminance), BB.updateFloat("exposureScale", (DB = OB.luminance, Math.l … [truncated]
-       const QB = OB.sunPosition;
-       if (aD.set(QB[0], QB[1], QB[2]), !OB.useSunPosition) {
-         const BB = Math.PI * (OB.inclination - .5),
-           GB = 2 * Math.PI * (OB.azimuth - .5);
-         aD.set(OB.distance * Math.cos(GB) * Math.cos(BB), OB.distance * Math.sin(-BB), OB.distance * Math.sin(GB) * Math.cos(BB)), hD.Quaternion.FromUnitVectorsToRef(hD.Xp.UpReadOnly, eD.set(OB.up[0], OB.up[1], OB.up[2]), TD), aD.rotateByQuaternionToRef(TD, aD)
+         removeChild(WW, iW) {
+           let OW = this.index(WW);
+           return !iW && 0 === OW && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[OW].raws.before), super.removeChild(WW)
+         }
+         toResult() {
+           let OW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+           return new WW(new iW, this, OW).stringify()
+         }
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2036-L2038` → after: `L4922-L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4922-L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4922-L4926) · [Before (L2036-L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2036-L2038)

```diff
-       BB.updateVector3("sun", aD), bD[0] = aD.x, bD[1] = aD.y, bD[2] = aD.z;
-       const oB = XO(OB, bD, CD);
-       BB.updateFloatsFrom("sunDir", oB.sunDir, 0, 3), BB.updateFloat("sunE", oB.sunE), BB.updateFloatsFrom("inScatterR", oB.inScatterR, 0, 3), BB.updateFloatsFrom("inScatterM", oB.inScatterM, 0, 3), BB.updateFloatsFrom("extinctionBeta", oB.extinctionBeta, 0, 3), BB.updateFloat("s … [truncated]
+       return mW.registerLazyResult = iW => {
+         WW = iW
+       }, mW.registerProcessor = WW => {
+         iW = WW
+       }, mE = mW, mW.default = mW, OW.registerRoot(mW), mE
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2041-L2072` → after: `L4929-L4944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4929-L4944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4929-L4944) · [Before (L2041-L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2041-L2072)

```diff
-     function sD(BB, OB) {
-       const GB = HD;
-       GB[0] = OB.far, GB[5] = OB.far, GB[10] = OB.far, GB[15] = 1;
-       const YB = BB.infiniteDistance;
-       for (let DB = 0; DB < 3; DB++) GB[12 + DB] = BB.position[DB] + (YB ? OB.worldMatrix[12 + DB] : 0);
-       return HD
-     }
-     class xD {
-       constructor() {
-         this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
-       }
-       reset() {
-         this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
-       }
-       bind(BB, OB, GB, YB, DB) {
-         GB !== this.pipeline && (BB.setPipeline(GB), this.pipeline = GB), BB.setBindGroup(1, YB, [DB]);
- ... (16 more removed lines; see GitHub link above)
+     function XE() {
+       if (PE) return NE;
+       PE = 1;
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
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2074-L2093` → after: `L4946-L4947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4946-L4947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4946-L4947) · [Before (L2074-L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2074-L2093)

```diff
-       }
-       clear() {
-         this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
-       }
-       collect(BB) {
-         this.collectGroup(BB, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(BB, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(BB, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.mBB.forEachGroup(th … [truncated]
-       }
-       collectGroup(BB, OB, GB, YB, DB) {
-         const QB = this.modelMeshes.group(OB),
-           oB = this.mBB.group(OB),
-           jB = 0 === OB ? null === oB || void 0 === oB ? void 0 : oB.opaque : void 0;
-         this.collectList(BB, null === QB || void 0 === QB ? void 0 : QB.opaque, jB || null === oB || void 0 === oB ? void 0 : oB.opaque, OB, !1, GB, DB), jB && (this.mBB.drawn += this.maker.bundleDraws(BB, jB, OB)), this.collectList(BB, null === QB || void 0 === QB ? void 0 : QB. … [truncated]
-       }
-       collectList(BB, OB, GB, YB, DB, QB, oB) {
-         var jB;
-         const yB = QB.length;
- ... (4 more removed lines; see GitHub link above)
+       };
+       return NE = WW, WW.default = WW, NE
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2096-L2097` → after: `L4950-L4968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4950-L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4950-L4968) · [Before (L2096-L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2096-L2097)

```diff
-     function BQ(BB, OB) {
-       return BB.program.id - OB.program.id || BB.material.owner.uniqueId - OB.material.owner.uniqueId
+     function BE() {
+       if (cE) return LE;
+       cE = 1;
+       let WW = vE(),
+         iW = XE();
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

#### 121. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2100-L2102` → after: `L4971-L5008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4971-L5008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L4971-L5008) · [Before (L2100-L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2100-L2102)

```diff
-     function OQ(BB, OB) {
-       return BB.material.owner.uniqueId - OB.material.owner.uniqueId
-     }
+     function qE() {
+       if (tE) return wE;
+       tE = 1;
+       let WW = HE(),
+         iW = function() {
+           if (WE) return Qm;
+           WE = 1;
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

#### 122. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2104-L2109` → after: `L5010-L5402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5010-L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5010-L5402) · [Before (L2104-L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2104-L2109)

```diff
-     function GQ(BB, OB) {
-       for (let GB = OB + 1; GB < BB.length; GB++) {
-         const YB = BB[GB];
-         let DB = GB - 1;
-         for (; DB >= OB && OQ(BB[DB], YB) > 0; DB--) BB[DB + 1] = BB[DB];
-         BB[DB + 1] = YB
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
+ ... (377 more added lines; see GitHub link above)
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2118-L2120` → after: `L5406-L5411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5406-L5411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5406-L5411) · [Before (L2118-L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2118-L2120)

```diff
-     function QQ(BB, OB, GB) {
-       return BB ? (GB._needUVs = !0, BB.optimizeUVAllocation && (0, dB.B)(BB.matrix) ? (GB[`${OB}DIRECTUV`] = BB.uvSet + 1, GB[`MAINUV${BB.uvSet+1}`] = !0) : GB[`${OB}DIRECTUV`] = 0, !0) : (GB[`${OB}DIRECTUV`] = 0, !1)
-     }
+     function RE() {
+       if (xE) return ZE;
+       xE = 1;
+       let WW = vE(),
+         iW = qE(),
+         OW = oE();
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2122-L2128` → after: `L5413-L5421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5413-L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5413-L5421) · [Before (L2122-L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2122-L2128)

```diff
-     function oQ(BB) {
-       const OB = new Map;
-       for (const GB in BB) {
-         if (95 === GB.charCodeAt(0)) continue;
-         const YB = BB[GB],
-           DB = typeof YB;
-         "number" === DB || "string" === DB ? OB.set(GB, String(YB)) : YB && "function" !== DB && OB.set(GB, !0)
+       function mW(WW, mW) {
+         let EW = new OW(WW, mW),
+           NW = new iW(EW);
+         try {
+           NW.parse()
+         } catch (PW) {
+           throw PW
+         }
+         return NW.root
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2130` → after: `L5423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5423) · [Before (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2130)

```diff
-       return OB
+       return ZE = mW, mW.default = mW, WW.registerParse(mW), ZE
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2133` → after: `L5426-L5432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5426-L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5426-L5432) · [Before (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2133)

```diff
-     function jQ(BB) {
+     function GE() {
+       if (AE) return lE;
+       AE = 1;
+       let {
+         isClean: WW,
+         my: iW
+       } = yE(), OW = dE(), mW = JE(), EW = vE(), NW = gE(), PW = (DE(), pE()), LW = RE(), cW = CE();
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2135-L2148` → after: `L5434-L5463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5434-L5463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5434-L5463) · [Before (L2135-L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2135-L2148)

```diff
-         markAllAsDirty: () => {}
-       };
-       for (const {
-           defines: GB
-         }
-         of BB.features)
-         for (const BB in GB) OB[BB] = GB[BB];
-       return OB
-     }
- 
-     function yQ(BB) {
-       const OB = BB.parts.geometry;
-       return null !== OB && void 0 !== OB && OB.live ? OB : null
-     }
+           atrule: "AtRule",
+           comment: "Comment",
+           decl: "Declaration",
+           document: "Document",
+           root: "Root",
+           rule: "Rule"
+         },
+         tW = {
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

#### 128. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2150-L2204` → after: `L5465-L5466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5465-L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5465-L5466) · [Before (L2150-L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2150-L2204)

```diff
-     function JQ(BB) {
-       var OB;
-       return null !== (OB = yQ(BB)) && void 0 !== OB ? OB : YQ
-     }
-     class MQ {
-       constructor(BB, OB, GB) {
-         let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
-         this.resources = BB, this.warnOnce = OB, this.programWithModel = GB, this.packFailed = YB, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
-       }
-       programFor(BB, OB, GB, YB, DB) {
-         const QB = OB.owner;
-         let oB = this.drawStates.get(OB);
-         if (!oB) {
-           const BB = OB.parts.materials[OB.range];
-           if (!BB) return this.warnOnce("model", `${GB.name} on ${QB.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
-           oB = {
- ... (39 more removed lines; see GitHub link above)
+       function xW(WW) {
+         return "object" === typeof WW && "function" === typeof WW.then
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2206-L2208` → after: `L5468-L5472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5468-L5472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5468-L5472) · [Before (L2206-L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2206-L2208)

```diff
-       definesBits(BB) {
-         const OB = this.view;
-         return (BB.visibility < 1 ? 1 : 0) | (BB.hasVertexAlpha ? 2 : 0) | (BB.applyFog ? 4 : 0) | (BB.useVertexColors ? 8 : 0) | (BB.nonUniformScaling ? 16 : 0) | (OB.fogEnabled && 0 !== OB.fogMode ? 32 : 0) | (OB.lightsEnabled ? 64 : 0) | OB.lightCount << 7
+ 
+       function lW(WW) {
+         let iW = !1,
+           OW = wW[WW.type];
+         return "decl" === WW.type ? iW = WW.prop.toLowerCase() : "atrule" === WW.type && (iW = WW.name.toLowerCase()), iW && WW.append ? [OW, OW + "-" + iW, 0, OW + "Exit", OW + "Exit-" + iW] : iW ? [OW, OW + "-" + iW, OW + "Exit", OW + "Exit-" + iW] : WW.append ? [OW, 0, OW + "E … [truncated]
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2210-L2214` → after: `L5474-L5483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5474-L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5474-L5483) · [Before (L2210-L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2210-L2214)

```diff
-       prepareLightDefines(BB, OB, GB) {
-         let YB = 0;
-         if (this.view.lightsEnabled && !OB) {
-           const OB = Math.min(GB, 4);
-           for (; YB < this.view.lightCount && (BB[`LIGHT${YB}`] = !0, BB[`LITE_LIGHT${YB}_SLOT`] = YB, YB++, BB._needNormals = !0, YB !== OB););
+ 
+       function AW(WW) {
+         let iW;
+         return iW = "document" === WW.type ? ["Document", 0, "DocumentExit"] : "root" === WW.type ? ["Root", 0, "RootExit"] : lW(WW), {
+           eventIndex: 0,
+           events: iW,
+           iterator: 0,
+           node: WW,
+           visitorIndex: 0,
+           visitors: []
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2218-L2234` → after: `L5486-L5514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5486-L5514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5486-L5514) · [Before (L2218-L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2218-L2234)

```diff
-       prepareModelDefines(BB, OB, GB, YB, DB, QB) {
-         const {
-           features: oB
-         } = GB;
-         YB._needNormals = !1, YB._needUVs = !1;
-         const jB = this.view;
-         this.prepareLightDefines(YB, GB.disableLighting, GB.maxSimultaneousLights), YB.MAINUV1 = !1, YB.MAINUV2 = !1;
-         const yB = GB.diffuseTexture;
-         yB ? (YB._needUVs = !0, YB.DIFFUSE = !0, yB.optimizeUVAllocation && (0, dB.B)(yB.matrix) ? (YB.DIFFUSEDIRECTUV = yB.uvSet + 1, YB[`MAINUV${yB.uvSet+1}`] = !0) : YB.DIFFUSEDIRECTUV = 0, yB.uvSet > 1 && this.warnOnce(`uvset:${GB.name}`, `${GB.name} samples UV set ${yB.uvSet … [truncated]
-         const JB = GB.opacityTexture,
-           MB = GB.emissiveTexture;
-         YB.OPACITY = QQ(JB, "OPACITY", YB), YB.OPACITYRGB = null !== JB && JB.getAlphaFromRGB, YB.EMISSIVE = QQ(MB, "EMISSIVE", YB), (JB && JB.uvSet > 1 || MB && MB.uvSet > 1) && this.warnOnce(`uvset:${GB.name}`, `${GB.name} samples a UV set past 2, which is not supported`);
-         const PB = GB.reflectionTexture,
-           zB = null !== PB;
-         if (zB) {
-           if (!this.resources.boundTexture(PB)) return !1;
- ... (1 more removed lines; see GitHub link above)
+ 
+       function bW(iW) {
+         return iW[WW] = !1, iW.nodes && iW.nodes.forEach((WW => bW(WW))), iW
+       }
+       let jW = {};
+       class UW {
+         constructor(WW, OW, mW) {
+           let NW;
+           if (this.stringified = !1, this.processed = !1, "object" !== typeof OW || null === OW || "root" !== OW.type && "document" !== OW.type)
+             if (OW instanceof UW || OW instanceof PW) NW = bW(OW.root), OW.map && ("undefined" === typeof mW.map && (mW.map = {}), mW.map.inline || (mW.map.inline = !1), mW.map.prev = OW.map);
+             else {
+               let WW = LW;
+               mW.syntax && (WW = mW.syntax.parse), mW.parser && (WW = mW.parser), WW.parse && (WW = WW.parse);
+               try {
+                 NW = WW(OW, mW)
+               } catch (cW) {
+ ... (13 more added lines; see GitHub link above)
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2236-L2249` → after: `L5516-L5521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5516-L5521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5516-L5521) · [Before (L2236-L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2236-L2249)

```diff
-         YB.REFLECTION = zB, YB.REFLECTIONMAP_3D = zB, YB.REFLECTIONMAP_SKYBOX = zB, YB.REFLECTIONMAP_OPPOSITEZ = zB && (BB.useRightHandedSystem ? !PB.invertZ : PB.invertZ), YB.ROUGHNESS = zB && GB.roughness > 0, YB.REFLECTIONOVERALPHA = zB && GB.useReflectionOverAlpha, YB.LITE_RE … [truncated]
-         const {
-           visibility: lB,
-           hasVertexAlpha: pB
-         } = OB;
-         YB.ALPHATEST = (0, fB.Q)(GB, lB, pB), YB.ALPHAFROMDIFFUSE = (0, fB.cb)(GB), YB.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== GB.transparencyMode, YB.ALPHABLEND = null === GB.transparencyMode || (0, fB.P)(GB, lB, pB), YB.PREMULTIPLYALPHA = 7 === GB.alphaMode || 8 === GB.a … [truncated]
-         for (const {
-             feature: nB,
-             state: UB,
-             active: fB
-           }
-           of oB) {
-           var qB, ZB;
-           if (fB) null === (qB = (ZB = (0, FO.i)(nB)).prepareDefinesBeforeAttributes) || void 0 === qB || qB.call(ZB, UB, YB, BB, OB)
+         async () {
+           return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
+         } catch (WW) {
+           return this.async().catch(WW)
+         } finally(WW) {
+           return this.async().then(WW, WW)
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2251-L2257` → after: `L5523-L5531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5523-L5531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5523-L5531) · [Before (L2251-L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2251-L2257)

```diff
-         this.modelPackKind(GB) && (YB._needNormals = !0), YB.NORMAL = YB._needNormals && OB.isVerticesDataPresent("normal"), YB.UV1 = YB._needUVs && OB.isVerticesDataPresent("uv"), YB.UV2 = YB._needUVs && OB.isVerticesDataPresent("uv2");
-         const NB = OB.useVertexColors && OB.isVerticesDataPresent("color");
-         YB.VERTEXCOLOR = NB, YB.VERTEXALPHA = OB.hasVertexAlpha && NB, YB.INSTANCESCOLOR = "none" !== QB && OB.isVerticesDataPresent("instanceColor");
-         for (const {
-             feature: nB,
-             state: UB,
-             active: fB
+         getAsyncError() {
+           throw new Error("Use process(css).then(cb) to work with async plugins")
+         }
+         handleError(WW, iW) {
+           let OW = this.result.lastPlugin;
+           try {
+             iW && iW.addToError(WW), this.error = WW, "CssSyntaxError" !== WW.name || WW.plugin ? OW.postcssVersion : (WW.plugin = OW.postcssPlugin, WW.setMessage())
+           } catch (mW) {
+             console && console.error && console.error(mW)
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2259-L2261` → after: `L5533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5533) · [Before (L2259-L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2259-L2261)

```diff
-           of oB) {
-           var RB, WB;
-           if (fB) null === (RB = (WB = (0, FO.i)(nB)).prepareDefines) || void 0 === RB || RB.call(WB, UB, YB, BB, OB, GB)
+           return WW
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2263-L2267` → after: `L5535-L5560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5535-L5560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5535-L5560) · [Before (L2263-L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2263-L2267)

```diff
-         const AB = BB.Lp();
-         for (const {
-             feature: nB,
-             state: UB,
-             active: fB
+         prepareVisitors() {
+           this.listeners = {};
+           let WW = (WW, iW, OW) => {
+             this.listeners[iW] || (this.listeners[iW] = []), this.listeners[iW].push([WW, OW])
+           };
+           for (let iW of this.plugins)
+             if ("object" === typeof iW)
+               for (let OW in iW) {
+                 if (!tW[OW] && /^[A-Z]/.test(OW)) throw new Error(`Unknown event ${OW} in ${iW.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
+                 if (!ZW[OW])
+                   if ("object" === typeof iW[OW])
+                     for (let mW in iW[OW]) WW(iW, "*" === mW ? OW : OW + "-" + mW.toLowerCase(), iW[OW][mW]);
+                   else "function" === typeof iW[OW] && WW(iW, OW, iW[OW])
+               }
+           this.hasListener = Object.keys(this.listeners).length > 0
+         }
+ ... (10 more added lines; see GitHub link above)
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2269-L2271` → after: `L5562-L5590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5562-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5562-L5590) · [Before (L2269-L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2269-L2271)

```diff
-           of oB) {
-           var VB, SB;
-           if (fB && !1 === (null === (VB = (SB = (0, FO.i)(nB)).isReadyForSubMesh) || void 0 === VB ? void 0 : VB.call(SB, UB, YB, BB, AB))) return !1
+           if (this.prepareVisitors(), this.hasListener) {
+             let iW = this.result.root;
+             for (; !iW[WW];) {
+               iW[WW] = !0;
+               let mW = [AW(iW)];
+               for (; mW.length > 0;) {
+                 let WW = this.visitTick(mW);
+                 if (xW(WW)) try {
+                   await WW
+                 } catch (OW) {
+                   let WW = mW[mW.length - 1].node;
+                   throw this.handleError(OW, WW)
+                 }
+               }
+             }
+             if (this.listeners.OnceExit)
+ ... (13 more added lines; see GitHub link above)
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2273-L2284` → after: `L5592-L5604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5592-L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5592-L5604) · [Before (L2273-L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2273-L2284)

```diff
-         return !0
-       }
-     }
- 
-     function PQ(BB, OB, GB) {
-       return BB.codeVersion !== OB.version && function(BB, OB) {
-         const GB = [],
-           YB = [];
-         for (const {
-             feature: zB,
-             state: lB,
-             active: pB
+         runOnRoot(WW) {
+           this.result.lastPlugin = WW;
+           try {
+             if ("object" === typeof WW && WW.Once) {
+               if ("document" === this.result.root.type) {
+                 let iW = this.result.root.nodes.map((iW => WW.Once(iW, this.helpers)));
+                 return xW(iW[0]) ? Promise.all(iW) : iW
+               }
+               return WW.Once(this.result.root, this.helpers)
+             }
+             if ("function" === typeof WW) return WW(this.result.root, this.result)
+           } catch (iW) {
+             throw this.handleError(iW)
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2290-L2293` → after: `L5607-L5622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5607-L5622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5607-L5622) · [Before (L2290-L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2290-L2293)

```diff
-         const yB = [];
-         for (const {
-             feature: zB,
-             state: lB
+         stringify() {
+           if (this.error) throw this.error;
+           if (this.stringified) return this.result;
+           this.stringified = !0, this.sync();
+           let WW = this.result.opts,
+             iW = mW;
+           WW.syntax && (iW = WW.syntax.stringify), WW.stringifier && (iW = WW.stringifier), iW.stringify && (iW = iW.stringify);
+           let EW = new OW(iW, this.result.root, this.result.opts).generate();
+           return this.result.css = EW[0], this.result.map = EW[1], this.result
+         }
+         sync() {
+           if (this.error) throw this.error;
+           if (this.processed) return this.result;
+           if (this.processed = !0, this.processing) throw this.getAsyncError();
+           for (let WW of this.plugins) {
+             if (xW(this.runOnRoot(WW))) throw this.getAsyncError()
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2295-L2304` → after: `L5624-L5630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5624-L5630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5624-L5630) · [Before (L2295-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2295-L2304)

```diff
-           of OB.features) {
-           var JB, MB;
-           const BB = null === (JB = (MB = (0, FO.i)(zB)).getUniforms) || void 0 === JB ? void 0 : JB.call(MB, lB, SB.c.WGSL);
-           for (const OB of null !== (PB = null === BB || void 0 === BB ? void 0 : BB.ubo) && void 0 !== PB ? PB : []) {
-             var PB;
-             OB.size && OB.type && yB.push({
-               name: OB.name,
-               type: OB.type,
-               arraySize: OB.arraySize
-             })
+           if (this.prepareVisitors(), this.hasListener) {
+             let iW = this.result.root;
+             for (; !iW[WW];) iW[WW] = !0, this.walkSync(iW);
+             if (this.listeners.OnceExit)
+               if ("document" === iW.type)
+                 for (let WW of iW.nodes) this.visitSync(this.listeners.OnceExit, WW);
+               else this.visitSync(this.listeners.OnceExit, iW)
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2307-L2366` → after: `L5634-L5635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5634-L5635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5634-L5635) · [Before (L2307-L2366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2307-L2366)

```diff
-         BB.vertexCode = GB, BB.fragmentCode = YB, BB.pluginUniforms = yB, BB.codeKey = JSON.stringify([GB, YB, yB]), BB.codeVersion = OB.version
-       }(BB, OB), `${GB}#${BB.codeKey}`
-     }
- 
-     function zQ(BB, OB) {
-       if (BB)
-         for (const GB in BB) BB[GB] && OB.push([GB, BB[GB]])
-     }
-     const lQ = new Map([
-       [512, "never"],
-       [513, "greater"],
-       [514, "equal"],
-       [515, "greater-equal"],
-       [516, "less"],
-       [517, "not-equal"],
-       [518, "less-equal"],
- ... (44 more removed lines; see GitHub link above)
+         then(WW, iW) {
+           return this.async().then(WW, iW)
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2368-L2504` → after: `L5637-L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5637-L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5637-L5650) · [Before (L2368-L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2368-L2504)

```diff
-         return MB
-       }
-     }
-     var qQ = GB(38035);
- 
-     function ZQ(BB) {
-       if (!BB.frozen) return -1;
-       let OB = BB.version;
-       for (const {
-           feature: GB,
-           state: YB,
-           active: DB
-         }
-         of BB.features) {
-         if (!DB || !GB.bind) continue;
-         const BB = (0, FO.i)(GB).uniformsVersion;
- ... (121 more removed lines; see GitHub link above)
+         toString() {
+           return this.css
+         }
+         visitSync(WW, iW) {
+           for (let [mW, EW] of WW) {
+             let WW;
+             this.result.lastPlugin = mW;
+             try {
+               WW = EW(iW, this.helpers)
+             } catch (OW) {
+               throw this.handleError(OW, iW.proxyOf)
+             }
+             if ("root" !== iW.type && "document" !== iW.type && !iW.parent) return !0;
+             if (xW(WW)) throw this.getAsyncError()
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2510-L2533` → after: `L5653-L5693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5653-L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5653-L5693) · [Before (L2510-L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2510-L2533)

```diff
-       }
-     }
- 
-     function AQ(BB) {
-       const OB = BB.replace(/\s+/g, "");
-       return /u32|^vec\du$/.test(OB) ? "u32" : /i32|^vec\di$/.test(OB) ? "i32" : "f32"
-     }
- 
-     function VQ(BB, OB) {
-       const GB = BB.getSize(),
-         YB = AQ(OB),
-         DB = BB => 4 === GB ? `${BB}x4` : 2 === GB ? `${BB}x2` : null;
-       if ("f32" === YB) {
-         if (5126 === BB.type) return 1 === GB ? "float32" : GB >= 2 && GB <= 4 ? `float32x${GB}` : null;
-         if (!BB.normalized) return null;
-         switch (BB.type) {
- ... (8 more removed lines; see GitHub link above)
+         visitTick(iW) {
+           let OW = iW[iW.length - 1],
+             {
+               node: mW,
+               visitors: EW
+             } = OW;
+           if ("root" !== mW.type && "document" !== mW.type && !mW.parent) return void iW.pop();
+           if (EW.length > 0 && OW.visitorIndex < EW.length) {
+             let [WW, iW] = EW[OW.visitorIndex];
+             OW.visitorIndex += 1, OW.visitorIndex === EW.length && (OW.visitors = [], OW.visitorIndex = 0), this.result.lastPlugin = WW;
+             try {
+               return iW(mW.toProxy(), this.helpers)
+             } catch (PW) {
+               throw this.handleError(PW, mW)
+             }
+           }
+ ... (25 more added lines; see GitHub link above)
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2535-L2612` → after: `L5695-L5696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5695-L5696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5695-L5696) · [Before (L2535-L2612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2535-L2612)

```diff
-         return null
-       }
-       const QB = "u32" === YB ? "uint" : "sint";
-       switch (BB.type) {
-         case 5125:
-         case 5124:
-           return 1 === GB ? `${QB}32` : GB <= 4 ? `${QB}32x${GB}` : null;
-         case 5121:
-         case 5120:
-           return DB(`${QB}8`);
-         case 5123:
-         case 5122:
-           return DB(`${QB}16`)
-       }
-       return null
-     }
- ... (62 more removed lines; see GitHub link above)
+         warnings() {
+           return this.sync().warnings()
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2614-L2655` → after: `L5698-L5720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5698-L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5698-L5720) · [Before (L2614-L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2614-L2655)

```diff
-         if (DB.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${OB}`, `${OB} needs ${DB.length} vertex buffers`), null;
-         let jB = "";
-         for (const MB of DB) {
-           jB += `${MB.stride}${"instance"===MB.step?"i":"v"}`;
-           for (const BB of MB.attributes) jB += `,${BB.shaderLocation}:${BB.offset}:${BB.format}`;
-           jB += ";"
-         }
-         let yB = this.layouts.get(jB);
-         yB || (yB = {
-           key: jB,
-           buffers: DB.map((BB => ({
-             arrayStride: BB.stride,
-             stepMode: BB.step,
-             attributes: BB.attributes
-           }))),
-           instanceEnds: DB.map((BB => {
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

#### 145. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2660-L2708` → after: `L5728-L5752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5728-L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5728-L5752) · [Before (L2660-L2708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2660-L2708)

```diff
-     function UQ(BB, OB, GB, YB) {
-       const DB = OB.program.program.attributes;
-       for (let QB = 0; QB < DB.length; QB++) {
-         if ((DB[QB].optional ? null : GB.vertexInput(BB, DB[QB].name, YB)) !== OB.sources[QB]) return !1
-       }
-       return !0
-     }
-     const fQ = 64;
-     class kQ {
-       constructor(BB, OB, GB, YB) {
-         this.device = BB, this.layout = OB, this.frameBuffer = GB, this.label = YB, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
-       }
-       ensure(BB) {
-         if (BB * fQ <= this.data.length) return !1;
-         let OB = 2 * this.data.length;
-         for (; BB * fQ > OB;) OB *= 2;
- ... (33 more removed lines; see GitHub link above)
+     function IE() {
+       if (kE) return UE;
+       kE = 1;
+       let WW = function() {
+           if (jE) return bE;
+           jE = 1;
+           let WW = dE(),
+             iW = JE(),
+             OW = (DE(), RE());
+           const mW = pE();
+           class EW {
+             constructor(OW, EW, NW) {
+               let PW;
+               EW = EW.toString(), this.stringified = !1, this._processor = OW, this._css = EW, this._opts = NW, this._map = void 0;
+               let LW = iW;
+               this.result = new mW(this._processor, PW, this._opts), this.result.css = EW;
+ ... (9 more added lines; see GitHub link above)
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2710-L2714` → after: `L5754-L5759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5754-L5759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5754-L5759) · [Before (L2710-L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2710-L2714)

```diff
-           }, {
-             binding: 1,
-             resource: {
-               buffer: this.buffer,
-               size: 80
+             async () {
+               return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
+             } catch (WW) {
+               return this.async().catch(WW)
+             } finally(WW) {
+               return this.async().then(WW, WW)
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2716-L2719` → after: `L5761-L5856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5761-L5856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5761-L5856) · [Before (L2716-L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2716-L2719)

```diff
-           }]
-         })
-       }
-     }
+             sync() {
+               if (this.error) throw this.error;
+               return this.result
+             }
+             then(WW, iW) {
+               return this.async().then(WW, iW)
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

#### 148. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2721-L2727` → after: `L5858-L5903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5858-L5903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5858-L5903) · [Before (L2721-L2727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2721-L2727)

```diff
-     function dQ(BB) {
-       return BB.gpu[dB.f.lite] ??= BB.materials.map(((OB, GB) => ({
-         parts: BB,
-         range: GB,
-         owner: BB.owner
-       })))
-     }
+           function LW(cW, wW) {
+             if (Array.isArray(cW)) return cW.map((WW => LW(WW)));
+             let {
+               inputs: tW,
+               ...ZW
+             } = cW;
+             if (tW) {
+               wW = [];
+               for (let WW of tW) {
+                 let OW = {
+                   ...WW,
+                   __proto__: EW.prototype
+                 };
+                 OW.map && (OW.map = {
+                   ...OW.map,
+                   __proto__: iW.prototype
+ ... (30 more added lines; see GitHub link above)
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2729-L2733` → after: `L5905-L5941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5905-L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5905-L5941) · [Before (L2729-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2729-L2733)

```diff
-     function KQ(BB) {
-       var OB, GB, YB;
-       return null !== (OB = null !== (GB = null === (YB = BB.parts.materials[BB.range]) || void 0 === YB ? void 0 : YB.mirror) && void 0 !== GB ? GB : BB.owner.material) && void 0 !== OB ? OB : null
-     }
-     const uQ = ["opaque", "alphaTest", "transparent", "text"];
+       function kW() {
+         for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
+         return 1 === iW.length && Array.isArray(iW[0]) && (iW = iW[0]), new EW(iW)
+       }
+       return kW.plugin = function(WW, iW) {
+         let OW, mW = !1;
+ 
+         function NW() {
+           console && console.warn && !mW && (mW = !0, console.warn(WW + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
+             NODE_ENV: "production",
+             PUBLIC_URL: "",
+             WDS_SOCKET_HOST: void 0,
+             WDS_SOCKET_PATH: void 0,
+             WDS_SOCKET_PORT: void 0,
+             FAST_REFRESH: !0,
+             REACT_APP_DEV_URLS: "false"
+ ... (21 more added lines; see GitHub link above)
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2736` → after: `L5944-L5951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5944-L5951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5944-L5951) · [Before (L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2736)

```diff
-       for (const OB of uQ) BB[OB].units.length = 0, BB[OB].rows.length = 0
+       const iW = [];
+       for (const OW in WW) {
+         const mW = WW[OW];
+         if ("string" !== typeof mW) continue;
+         const EW = ON(OW);
+         iW.push(`${EW}: ${mW};`)
+       }
+       return iW.join(" ")
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2740-L2743` → after: `L5960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5960) · [Before (L2740-L2743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2740-L2743)

```diff
-         this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, IO.c)("Lite: ")
-       }
-       attach(BB, OB) {
-         this.model = BB, this.mirror = OB
+         cm(this, "parentElement", null), cm(this, "parentNode", null), cm(this, "ownerDocument"), cm(this, "firstChild", null), cm(this, "lastChild", null), cm(this, "previousSibling", null), cm(this, "nextSibling", null), cm(this, "ELEMENT_NODE", 1), cm(this, "TEXT_NODE", 3), cm … [truncated]
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2745-L2760` → after: `L5962-L5966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5962-L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5962-L5966) · [Before (L2745-L2760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2745-L2760)

```diff
-       get worlds() {
-         return this.model.nodes.mP
-       }
-       get visibility() {
-         return this.model.meshes.visibility
-       }
-       group(BB) {
-         return this.groups.get(BB)
-       }
-       forEachGroup(BB) {
-         this.groups.forEach(BB)
-       }
-       forEachSelected(BB) {
-         for (const [OB, GB] of this.groups)
-           for (const YB of uQ)
-             for (const DB of GB[YB].units) BB(DB.owner, "text" === YB ? "transparent" : YB, OB)
+       get childNodes() {
+         const WW = [];
+         let iW = this.firstChild;
+         for (; iW;) WW.push(iW), iW = iW.nextSibling;
+         return WW
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2762-L2785` → after: `L5968-L5974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R5968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L5968-L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/301.js#L5968-L5974) · [Before (L2762-L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/301.js#L2762-L2785)

```diff
-       select(BB, OB) {
-         this.frame++, this.selectedCount = 0, this.groups.forEach(mQ);
-         const {
-           model: GB,
-           mirror: YB
-         } = this;
-         if (!GB || !YB || !BB) return;
-         this.rows.length < GB.nodes.CP && (this.rows = new Int32Array(GB.nodes.CP));
-         const DB = this.rows,
-           QB = GB.meshes;
-         for (let jB = 0; jB < QB.looseCount; jB++) {
-           const BB = QB.loose[jB],
-             GB = YB.nodes[BB];
-           GB && !GB.isBlocked && GB.isEnabled() && !GB.SP.hasAZeroComponent && QB.selects(BB, OB.frustum) && (this.activate(GB, BB), this.selectedCount++)
-         }
-         const oB = QB.selectTextPlanes(OB.frustum, DB);
- ... (8 more removed lines; see GitHub link above)
+       contains(WW) {
+         if (!(WW instanceof mN)) return !1;
+         if (WW.ownerDocument !== this.ownerDocument) return !1;
+         if (WW === this) return !0;
+         for (; WW.parentNode;) {
+           if (WW.parentNode === this) return !0;
+           WW = WW.parentNode
```
