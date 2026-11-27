# Changed — Bundle Modifications Report (Part 055 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `55 / 126` (**265** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 054](part-054.md) · [Part 056 →](part-056.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/304.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/304.js` (60 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc)

#### 42. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L684-L685` → after: `L952-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L952-L953) · [Before (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L684-L685)

```diff
-       getThrottleMetadata(RR) {
-         return this.throttleMetadata[RR]
+       setMultipleInstances(rr) {
+         return this.multipleInstances = rr, this
```

#### 43. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L687-L688` → after: `L955-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L955-L956) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L687-L688)

```diff
-       setThrottleMetadata(RR, JR) {
-         this.throttleMetadata[RR] = JR
+       setServiceProps(rr) {
+         return this.serviceProps = rr, this
```

#### 44. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L690-L691` → after: `L958-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L958-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L958-L959) · [Before (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L690-L691)

```diff
-       deleteThrottleMetadata(RR) {
-         delete this.throttleMetadata[RR]
+       setInstanceCreatedCallback(rr) {
+         return this.onInstanceCreated = rr, this
```

#### 45. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L730-L758` → after: `L962-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L962-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L962-L965) · [Before (L730-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L730-L758)

```diff
-     async function gJ(RR, JR, GR) {
-       let {
-         throttleEndTimeMillis: yR,
-         backoffCount: tR
-       } = JR, ZR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BJ;
-       var qR;
-       const {
-         appId: iR,
-         measurementId: fR
-       } = RR;
-       try {
-         await
-         function(RR, JR) {
-           return new Promise(((GR, yR) => {
-             const tR = Math.max(JR - Date.now(), 0),
-               uR = setTimeout(GR, tR);
- ... (13 more removed lines; see GitHub link above)
+     const ar = "[DEFAULT]";
+     class jr {
+       constructor(rr, Sr) {
+         this.name = rr, this.container = Sr, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
```

#### 46. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L760-L771` → after: `L967-L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L967-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L967-L1012) · [Before (L760-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L760-L771)

```diff
-       try {
-         const JR = await async function(RR) {
-           var JR;
-           const {
-             appId: GR,
-             apiKey: yR
-           } = RR, tR = {
-             method: "GET",
-             headers: lJ(yR)
-           }, uR = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", GR), ZR = await fetch(uR, tR);
-           if (200 !== ZR.status && 304 !== ZR.status) {
-             let RR = "";
+       get(rr) {
+         const Sr = this.normalizeInstanceIdentifier(rr);
+         if (!this.instancesDeferred.has(Sr)) {
+           const rr = new Zr.d;
+           if (this.instancesDeferred.set(Sr, rr), this.isInitialized(Sr) || this.shouldAutoInitialize()) try {
+             const Qr = this.getOrInitializeService({
+               instanceIdentifier: Sr
+             });
+             Qr && rr.resolve(Qr)
+           } catch (Qr) {}
+         }
+         return this.instancesDeferred.get(Sr).promise
+       }
+       getImmediate(rr) {
+         var Sr;
+         const Qr = this.normalizeInstanceIdentifier(null === rr || void 0 === rr ? void 0 : rr.identifier),
+ ... (30 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L773-L774` → after: `L1014-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L1014-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L1014-L1017) · [Before (L773-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L773-L774)

```diff
-               const GR = await ZR.json();
-               (null === (JR = GR.error) || void 0 === JR ? void 0 : JR.message) && (RR = GR.error.message)
+               const rr = this.getOrInitializeService({
+                 instanceIdentifier: Zr
+               });
+               Qr.resolve(rr)
```

#### 48. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L804-L807` → after: `L1022-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L1022-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L1022-L1024) · [Before (L804-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L804-L807)

```diff
-     }
-     class bJ {
-       constructor() {
-         this.listeners = []
+       clearInstance() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ar;
+         this.instancesDeferred.delete(rr), this.instancesOptions.delete(rr), this.instances.delete(rr)
```

#### 49. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L809-L810` → after: `L1026-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L1026-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L1026-L1028) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L809-L810)

```diff
-       addEventListener(RR) {
-         this.listeners.push(RR)
+       async delete() {
+         const rr = Array.from(this.instances.values());
+         await Promise.all([...rr.filter((rr => "INTERNAL" in rr)).map((rr => rr.INTERNAL.delete())), ...rr.filter((rr => "_delete" in rr)).map((rr => rr._delete()))])
```

#### 50. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L812-L813` → after: `L1030-L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L1030-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L1030-L1031) · [Before (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L812-L813)

```diff
-       abort() {
-         this.listeners.forEach((RR => RR()))
+       isComponentSet() {
+         return null != this.component
```

#### 51. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L815-L840` → after: `L1033-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L1033-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L1033-L1053) · [Before (L815-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L815-L840)

```diff
-     }
-     let vJ, OJ;
- 
-     function xJ(RR) {
-       OJ = RR
-     }
- 
-     function NJ(RR) {
-       vJ = RR
-     }
-     async function DJ(RR, JR, GR, yR, tR, ZR, qR) {
-       var iR;
-       const fR = pJ(RR);
-       fR.then((JR => {
-         GR[JR.measurementId] = JR.appId, RR.options.measurementId && JR.measurementId !== RR.options.measurementId && nJ.warn(`The measurement ID in the local Firebase config (${RR.options.measurementId}) does not match the measurement ID fetched from the server (${JR.measurement … [truncated]
-       })).catch((RR => nJ.error(RR))), JR.push(fR);
- ... (10 more removed lines; see GitHub link above)
+       isInitialized() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ar;
+         return this.instances.has(rr)
+       }
+       getOptions() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ar;
+         return this.instancesOptions.get(rr) || {}
+       }
+       initialize() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         const {
+           options: Sr = {}
+         } = rr, Qr = this.normalizeInstanceIdentifier(rr.instanceIdentifier);
+         if (this.isInitialized(Qr)) throw Error(`${this.name}(${Qr}) has already been initialized`);
+         if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
+         const Zr = this.getOrInitializeService({
+ ... (5 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L842-L851` → after: `L1055-L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L1055-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L1055-L1094) · [Before (L842-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L842-L851)

```diff
-         return !0
-       }().then((RR => RR ? yR.getId() : void 0)), [KR, wR] = await Promise.all([fR, VR]);
-       (function(RR) {
-         const JR = window.document.getElementsByTagName("script");
-         for (const GR of Object.values(JR))
-           if (GR.src && GR.src.includes(LJ) && GR.src.includes(RR)) return GR;
-         return null
-       })(ZR) || XJ(ZR, KR.measurementId), OJ && (tR("consent", "default", OJ), xJ(void 0)), tR("js", new Date);
-       const rR = null !== (iR = null === qR || void 0 === qR ? void 0 : qR.config) && void 0 !== iR ? iR : {};
-       return rR.origin = "firebase", rR.update = !0, null != wR && (rR.firebase_id = wR), tR("config", KR.measurementId, rR), vJ && (tR("set", vJ), NJ(void 0)), KR.measurementId
+         return Zr
+       }
+       Hx(rr, Sr) {
+         var Qr;
+         const Zr = this.normalizeInstanceIdentifier(Sr),
+           Wr = null !== (Qr = this.onInitCallbacks.get(Zr)) && void 0 !== Qr ? Qr : new Set;
+         Wr.add(rr), this.onInitCallbacks.set(Zr, Wr);
+         const ar = this.instances.get(Zr);
+         return ar && rr(ar, Zr), () => {
+           Wr.delete(rr)
+         }
+       }
+       invokeOnInitCallbacks(rr, Sr) {
+         const Qr = this.onInitCallbacks.get(Sr);
+         if (Qr)
+           for (const Wr of Qr) try {
+ ... (24 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L855` → after: `L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L1098) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L855)

```diff
-         this.app = RR
+         this.name = rr, this.providers = new Map
```

#### 54. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L857-L858` → after: `L1100-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L1100-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L1100-L1103) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L857-L858)

```diff
-       _delete() {
-         return delete oJ[this.app.options.appId], Promise.resolve()
+       gM(rr) {
+         const Sr = this.getProvider(rr.name);
+         if (Sr.isComponentSet()) throw new Error(`Component ${rr.name} has already been registered with ${this.name}`);
+         Sr.setComponent(rr)
```

#### 55. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L860-L911` → after: `L1105-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L1105-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L1105-L1106) · [Before (L860-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L860-L911)

```diff
-     }
-     let oJ = {},
-       cJ = [];
-     const PJ = {};
-     let IJ, mJ, zJ = "dataLayer",
-       SJ = "gtag",
-       jJ = !1;
- 
-     function dJ(RR) {
-       if (jJ) throw WJ.create("already-initialized");
-       RR.dataLayerName && (zJ = RR.dataLayerName), RR.gtagName && (SJ = RR.gtagName)
-     }
- 
-     function EJ(RR, JR, GR) {
-       ! function() {
-         const RR = [];
- ... (36 more removed lines; see GitHub link above)
+       addOrOverwriteComponent(rr) {
+         this.getProvider(rr.name).isComponentSet() && this.providers.delete(rr.name), this.gM(rr)
```

#### 56. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L913-L943` → after: `L1108-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L1108-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L1108-L1114) · [Before (L913-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L913-L943)

```diff
-       oJ[yR] = DJ(RR, cJ, PJ, JR, IJ, zJ, GR);
-       return new HJ(RR)
-     }
- 
-     function YJ() {
-       let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, yR.G)();
-       RR = (0, uR.C)(RR);
-       const JR = (0, yR.t)(RR, aJ);
-       return JR.isInitialized() ? JR.getImmediate() : kJ(RR)
-     }
- 
-     function kJ(RR) {
-       let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const GR = (0, yR.t)(RR, aJ);
-       if (GR.isInitialized()) {
-         const RR = GR.getImmediate();
- ... (15 more removed lines; see GitHub link above)
+       getProvider(rr) {
+         if (this.providers.has(rr)) return this.providers.get(rr);
+         const Sr = new jr(rr, this);
+         return this.providers.set(rr, Sr), Sr
+       }
+       getProviders() {
+         return Array.from(this.providers.values())
```

#### 57. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L946-L999` → after: `L1117-L1200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR1117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L1117-L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L1117-L1200) · [Before (L946-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L946-L999)

```diff
- 
-     function FJ(RR, JR, GR) {
-       RR = (0, uR.C)(RR), async function(RR, JR, GR, yR) {
-         if (yR && yR.global) return RR("set", {
-           screen_name: GR
-         }), Promise.resolve();
-         RR("config", await JR, {
-           update: !0,
-           screen_name: GR
-         })
-       }(mJ, oJ[RR.app.options.appId], JR, GR).catch((RR => nJ.error(RR)))
-     }
-     async function TJ(RR) {
-       return RR = (0, uR.C)(RR), async function(RR, JR) {
-         const GR = await JR;
-         return new Promise(((JR, yR) => {
- ... (38 more removed lines; see GitHub link above)
+   },
+   42375: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => Wr,
+       d: () => Er,
+       h: () => pr,
+       l: () => xr
+     });
+     const Zr = [];
+     var Wr;
+     ! function(rr) {
+       rr[rr.DEBUG = 0] = "DEBUG", rr[rr.VERBOSE = 1] = "VERBOSE", rr[rr.INFO = 2] = "INFO", rr[rr.WARN = 3] = "WARN", rr[rr.ERROR = 4] = "ERROR", rr[rr.SILENT = 5] = "SILENT"
+     }(Wr || (Wr = {}));
+     const ar = {
+         debug: Wr.DEBUG,
+         verbose: Wr.VERBOSE,
+ ... (68 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L1003-L1015` → after: `L1204-L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR1204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L1204-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L1204-L1206) · [Before (L1003-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L1003-L1015)

```diff
-       mJ ? mJ("set", RR) : NJ(RR)
-     }
- 
-     function GG(RR, JR, GR, yR) {
-       RR = (0, uR.C)(RR), async function(RR, JR, GR, yR, tR) {
-         if (tR && tR.global) RR("event", GR, yR);
-         else {
-           const tR = await JR;
-           RR("event", GR, Object.assign(Object.assign({}, yR), {
-             send_to: tR
-           }))
-         }
-       }(mJ, oJ[RR.app.options.appId], JR, GR, yR).catch((RR => nJ.error(RR)))
+       Zr.forEach((Sr => {
+         Sr.setLogLevel(rr)
+       }))
```

#### 59. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L1018-L1032` → after: `L1209-L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR1209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L1209-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L1209-L1230) · [Before (L1018-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L1018-L1032)

```diff
-     function yG(RR) {
-       mJ ? mJ("consent", "update", RR) : xJ(RR)
-     }
-     const tG = "@firebase/analytics",
-       uG = "0.10.0";
-     (0, yR.w)(new ZR.i(aJ, ((RR, JR) => {
-       let {
-         options: GR
-       } = JR;
-       return EJ(RR.getProvider("app").getImmediate(), RR.getProvider("installations-internal").getImmediate(), GR)
-     }), "PUBLIC")), (0, yR.w)(new ZR.i("analytics-internal", (function(RR) {
-       try {
-         const JR = RR.getProvider(aJ).getImmediate();
-         return {
-           logEvent: (RR, GR, yR) => GG(JR, RR, GR, yR)
+     function xr(rr, Sr) {
+       for (const Qr of Zr) {
+         let Zr = null;
+         Sr && Sr.level && (Zr = ar[Sr.level]), Qr.userLogHandler = null === rr ? null : function(Sr, Qr) {
+           for (var ar = arguments.length, jr = new Array(ar > 2 ? ar - 2 : 0), Ir = 2; Ir < ar; Ir++) jr[Ir - 2] = arguments[Ir];
+           const fr = jr.map((rr => {
+             if (null == rr) return null;
+             if ("string" === typeof rr) return rr;
+             if ("number" === typeof rr || "boolean" === typeof rr) return rr.toString();
+             if (rr instanceof Error) return rr.message;
+             try {
+               return JSON.stringify(rr)
+             } catch (Sr) {
+               return null
+             }
+           })).filter((rr => rr)).join(" ");
+ ... (6 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L1039` → after: `L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L1233) · [Before (L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L1039)

```diff
-     }), "PRIVATE")), (0, yR.M)(tG, uG), (0, yR.M)(tG, uG, "esm2017")
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/305.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/305.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e)

#### 1. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L1)

```diff
- /*! For license information please see 4udp6d.305.15b19431.chunk.js.LICENSE.txt */
+ /*! For license information please see fl4vv.305.a3321cc1.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L5-L3074` → after: `L5-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L5-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L5-L229) · [Before (L5-L3074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L5-L3074)

```diff
-     42062: (RR, JR, GR) => {
-         GR.r(JR), GR.d(JR, {
-           ActionCodeOperation: () => wR,
-           ActionCodeURL: () => TJ,
-           AuthCredential: () => PJ,
-           AuthErrorCodes: () => nR,
-           EmailAuthCredential: () => EJ,
-           EmailAuthProvider: () => hJ,
-           FacebookAuthProvider: () => yG,
-           FactorId: () => iR,
-           GithubAuthProvider: () => uG,
-           GoogleAuthProvider: () => tG,
-           OAuthCredential: () => kJ,
-           OAuthProvider: () => GG,
-           OperationType: () => KR,
-           PhoneAuthCredential: () => FJ,
- ... (3054 more removed lines; see GitHub link above)
+   42380: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       getAnalytics: () => oS,
+       getGoogleAnalyticsClientId: () => dS,
+       initializeAnalytics: () => bS,
+       isSupported: () => JS,
+       logEvent: () => QQ,
+       setAnalyticsCollectionEnabled: () => rQ,
+       setConsent: () => ZQ,
+       setCurrentScreen: () => DS,
+       setDefaultEventParameters: () => SQ,
+       setUserId: () => sS,
+       setUserProperties: () => uS,
+       settings: () => cS
+     });
+     var Zr = Qr(42350),
+ ... (209 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3076-L3228` → after: `L231-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L231-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L231-L301) · [Before (L3076-L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3076-L3228)

```diff
-           return new Oy(yR).toPromise()
-         }
- 
-         function Hy(RR, JR) {
-           const GR = xy(RR, !0).delete(JR);
-           return new Oy(GR).toPromise()
-         }
-         class oy {
-           constructor() {
-             this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._w … [truncated]
-           }
-           async _openDb() {
-             return this.db || (this.db = await Ny()), this.db
-           }
-           async _withRetries(RR) {
-             let JR = 0;
- ... (137 more removed lines; see GitHub link above)
+           Jr()
+         }(Qr, Sr)
+     }
+ 
+     function Fr(rr, Sr) {
+       const Qr = wr.get(rr);
+       if (Qr)
+         for (const Zr of Qr) Zr(Sr)
+     }
+     let or = null;
+ 
+     function br() {
+       return !or && "BroadcastChannel" in self && (or = new BroadcastChannel("[Firebase] FID Change"), or.onmessage = rr => {
+         Fr(rr.data.key, rr.data.fid)
+       }), or
+     }
+ ... (55 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3230-L3375` → after: `L303-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L303-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L303-L311) · [Before (L3230-L3375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3230-L3375)

```diff
-             const yR = "string" === typeof RR ? document.getElementById(RR) : RR;
-             lR(yR, "argument-error", {
-               appName: JR
-             }), this.container = yR, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
-           }
-           getResponse() {
-             return this.checkIfDeleted(), this.responseToken
-           }
-           delete() {
-             this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
-           }
-           execute() {
-             this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
-               this.responseToken = function(RR) {
-                 const JR = [],
-                   GR = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
- ... (130 more removed lines; see GitHub link above)
+             return aS(Sr)
+           }(Qr),
+           Wr = function(rr, Sr) {
+             if (0 === Sr.registrationStatus) {
+               if (!navigator.onLine) {
+                 return {
+                   installationEntry: Sr,
+                   registrationPromise: Promise.reject(Pr.create("app-offline"))
+                 }
```

#### 5. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3377-L3458` → after: `L313-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L313-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L313-L364) · [Before (L3377-L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3377-L3458)

```diff
-               this.widgetId = this.getAssertedRecaptcha().render(RR, this.parameters)
-             }
-             return this.widgetId
-           }
-           async init() {
-             lR(vR() && !py(), this.auth, "internal-error"), await
-             function() {
-               let RR = null;
-               return new Promise((JR => {
-                 "complete" !== document.readyState ? (RR = () => JR(), window.addEventListener("load", RR)) : JR()
-               })).catch((JR => {
-                 throw RR && window.removeEventListener("load", RR), JR
-               }))
-             }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
-             const RR = await async function(RR) {
-               return (await PR(RR, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
- ... (66 more removed lines; see GitHub link above)
+               const Qr = {
+                   fid: Sr.fid,
+                   registrationStatus: 1,
+                   registrationTime: Date.now()
+                 },
+                 Zr = async function(rr, Sr) {
+                   try {
+                     const Qr = await async function(rr, Sr) {
+                       let {
+                         appConfig: Qr,
+                         heartbeatServiceProvider: Zr
+                       } = rr, {
+                         fid: Wr
+                       } = Sr;
+                       const ar = qr(Qr),
+                         jr = Cr(Qr),
+ ... (36 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3460-L3461` → after: `L366-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L366-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L366-L369) · [Before (L3460-L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3460-L3461)

```diff
-                 });
-                 return ZR.phoneResponseInfo.sessionInfo
+                 }(rr, Qr);
+               return {
+                 installationEntry: Qr,
+                 registrationPromise: Zr
```

#### 7. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3474-L3556` → after: `L372-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L372-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L372-L422) · [Before (L3474-L3556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3474-L3556)

```diff
-           } finally {
-             GR._reset()
-           }
-         }
-         async function Rt(RR, JR) {
-           await nG((0, yR.C)(RR), JR)
-         }
-         class Jt {
-           constructor(RR) {
-             this.providerId = Jt.PROVIDER_ID, this.auth = xJ(RR)
-           }
-           verifyPhoneNumber(RR, JR) {
-             return hy(this.auth, RR, (0, yR.C)(JR))
-           }
-           static credential(RR, JR) {
-             return FJ._fromVerification(RR, JR)
- ... (67 more removed lines; see GitHub link above)
+             return 1 === Sr.registrationStatus ? {
+               installationEntry: Sr,
+               registrationPromise: ZS(rr)
+             } : {
+               installationEntry: Sr
+             }
+           }(rr, Zr);
+         return Sr = Wr.registrationPromise, Wr.installationEntry
+       }));
+       return "" === Qr.fid ? {
+         installationEntry: await Sr
+       } : {
+         installationEntry: Qr,
+         registrationPromise: Sr
+       }
+     }
+ ... (35 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3558-L3587` → after: `L424-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L424-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L424-L470) · [Before (L3558-L3587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3558-L3587)

```diff
-           return lR(GR, JR, "internal-error"), nG(GR, new yt(RR), RR.bypassAuthState)
-         }
-         class qt {
-           constructor(RR, JR, GR, yR) {
-             let tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-             this.auth = RR, this.resolver = GR, this.user = yR, this.bypassAuthState = tR, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(JR) ? JR : [JR]
-           }
-           execute() {
-             return new Promise((async (RR, JR) => {
-               this.pendingPromise = {
-                 resolve: RR,
-                 reject: JR
-               };
-               try {
-                 this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
-               } catch (GR) {
- ... (14 more removed lines; see GitHub link above)
+           return `${qr(rr)}/${Qr}/authTokens:generate`
+         }(Qr, Sr),
+         ar = Mr(Qr, Sr),
+         jr = Zr.getImmediate({
+           optional: !0
+         });
+       if (jr) {
+         const rr = await jr.getHeartbeatsHeader();
+         rr && ar.append("x-firebase-client", rr)
+       }
+       const Ir = {
+           installation: {
+             sdkVersion: Or,
+             appId: Qr.appId
+           }
+         },
+ ... (31 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3589-L3595` → after: `L472-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L472-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L472-L473) · [Before (L3589-L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3589-L3595)

```diff
-               auth: this.auth,
-               requestUri: JR,
-               sessionId: GR,
-               tenantId: tR || void 0,
-               postBody: yR || void 0,
-               user: this.user,
-               bypassAuthState: this.bypassAuthState
+               requestStatus: 1,
+               requestTime: Date.now()
```

#### 10. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3598` → after: `L481-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L481-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L481-L485) · [Before (L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3598)

```diff
-               this.resolve(await this.getIdpTask(ZR)(qR))
+               const Qr = await jS(rr, Sr),
+                 Zr = Object.assign(Object.assign({}, Sr), {
+                   authToken: Qr
+                 });
+               return await ur(rr.appConfig, Zr), Qr
```

#### 11. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3600-L3618` → after: `L487-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L487-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L487-L495) · [Before (L3600-L3618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3600-L3618)

```diff
-               this.reject(iR)
-             }
-           }
-           onError(RR) {
-             this.reject(RR)
-           }
-           getIdpTask(RR) {
-             switch (RR) {
-               case "signInViaPopup":
-               case "signInViaRedirect":
-                 return tt;
-               case "linkViaPopup":
-               case "linkViaRedirect":
-                 return Zt;
-               case "reauthViaPopup":
-               case "reauthViaRedirect":
- ... (3 more removed lines; see GitHub link above)
+               if (!Hr(Qr) || 401 !== Qr.customData.serverCode && 404 !== Qr.customData.serverCode) {
+                 const Qr = Object.assign(Object.assign({}, Sr), {
+                   authToken: {
+                     requestStatus: 0
+                   }
+                 });
+                 await ur(rr.appConfig, Qr)
+               } else await rS(rr.appConfig);
+               throw Qr
```

#### 12. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3620-L3709` → after: `L497-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L497-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L497-L549) · [Before (L3620-L3709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3620-L3709)

```diff
-           }
-           resolve(RR) {
-             gR(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(RR), this.unregisterAndCleanUp()
-           }
-           reject(RR) {
-             gR(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(RR), this.unregisterAndCleanUp()
-           }
-           unregisterAndCleanUp() {
-             this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
-           }
-         }
-         const it = new xR(2e3, 1e4);
-         async function ft(RR, JR, GR) {
-           const yR = xJ(RR);
-           MR(RR, JR, RG);
-           const tR = Gt(yR, GR);
- ... (74 more removed lines; see GitHub link above)
+           }(rr, Qr), Qr
+         }
+       }));
+       return Sr ? await Sr : Zr.authToken
+     }
+ 
+     function fS(rr) {
+       return SS(rr, (rr => {
+         if (!ES(rr)) throw Pr.create("not-registered");
+         const Sr = rr.authToken;
+         return 1 === (Qr = Sr).requestStatus && Qr.requestTime + vr < Date.now() ? Object.assign(Object.assign({}, rr), {
+           authToken: {
+             requestStatus: 0
+           }
+         }) : rr;
+         var Qr
+ ... (37 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3854-L3884` → after: `L552-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L552-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L552-L602) · [Before (L3854-L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3854-L3884)

```diff
-           for (const yR of JR) try {
-             if (Dt(yR)) return
-           } catch (GR) {}
-           AR(RR, "unauthorized-domain")
-         }
- 
-         function Dt(RR) {
-           const JR = bR(),
-             {
-               protocol: GR,
-               hostname: yR
-             } = new URL(JR);
-           if (RR.startsWith("chrome-extension://")) {
-             const tR = new URL(RR);
-             return "" === tR.hostname && "" === yR ? "chrome-extension:" === GR && RR.replace("chrome-extension://", "") === JR.replace("chrome-extension://", "") : "chrome-extension:" === GR && tR.hostname === yR
-           }
- ... (15 more removed lines; see GitHub link above)
+         return {
+           app: Sr,
+           appConfig: Qr,
+           heartbeatServiceProvider: (0, Zr.A)(Sr, "heartbeat"),
+           _delete: () => Promise.resolve()
+         }
+       },
+       US = rr => {
+         const Sr = rr.getProvider("app").getImmediate(),
+           Qr = (0, Zr.A)(Sr, mS).getImmediate();
+         return {
+           getId: () => async function(rr) {
+             const Sr = rr,
+               {
+                 installationEntry: Qr,
+                 registrationPromise: Zr
+ ... (35 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3886-L3889` → after: `L604-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L604-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L604-L606) · [Before (L3886-L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3886-L3889)

```diff
-         function Pt(RR) {
-           return ct = ct || function(RR) {
-             return new Promise(((JR, GR) => {
-               var yR, tR, uR;
+     function KS(rr) {
+       return Promise.all(rr.map((rr => rr.catch((rr => rr)))))
+     }
```

#### 15. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3891-L3900` → after: `L608-L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L608-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L608-L645) · [Before (L3891-L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3891-L3900)

```diff
-               function ZR() {
-                 ot(), gapi.load("gapi.iframes", {
-                   callback: () => {
-                     JR(gapi.iframes.getContext())
-                   },
-                   ontimeout: () => {
-                     ot(), GR(CR(RR, "network-request-failed"))
-                   },
-                   timeout: Ht.get()
-                 })
+     function yS(rr, Sr) {
+       const Qr = function(rr, Sr) {
+           let Qr;
+           return window.trustedTypes && (Qr = window.trustedTypes.createPolicy(rr, Sr)), Qr
+         }("firebase-js-sdk-policy", {
+           createScriptURL: eS
+         }),
+         Zr = document.createElement("script"),
+         Wr = `${hS}?l=${rr}&id=${Sr}`;
+       Zr.src = Qr ? null === Qr || void 0 === Qr ? void 0 : Qr.createScriptURL(Wr) : Wr, Zr.async = !0, document.head.appendChild(Zr)
+     }
+ 
+     function BS(rr, Sr, Qr, Zr) {
+       return async function(Wr) {
+         try {
+           for (var ar = arguments.length, jr = new Array(ar > 1 ? ar - 1 : 0), Ir = 1; Ir < ar; Ir++) jr[Ir - 1] = arguments[Ir];
+ ... (22 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3902-L3908` → after: `L647-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L647-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L647-L656) · [Before (L3902-L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3902-L3908)

```diff
-               if (null === (tR = null === (yR = ly().gapi) || void 0 === yR ? void 0 : yR.iframes) || void 0 === tR ? void 0 : tR.Iframe) JR(gapi.iframes.getContext());
-               else {
-                 if (!(null === (uR = ly().gapi) || void 0 === uR ? void 0 : uR.load)) {
-                   const JR = pJ("iframefcb");
-                   return ly()[JR] = () => {
-                     gapi.load ? ZR() : GR(CR(RR, "network-request-failed"))
-                   }, lJ(`https://apis.google.com/js/api.js?onload=${JR}`).catch((RR => GR(RR)))
+             }(rr, Sr, Qr, Zr, Wr)
+           } else if ("config" === Wr) {
+             const [Wr, ar] = jr;
+             await async function(rr, Sr, Qr, Zr, Wr, ar) {
+               const jr = Zr[Wr];
+               try {
+                 if (jr) await Sr[jr];
+                 else {
+                   const rr = (await KS(Qr)).find((rr => rr.measurementId === Wr));
+                   rr && await Sr[rr.appId]
```

#### 17. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3910` → after: `L658-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L658-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L658-L659) · [Before (L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3910)

```diff
-                 ZR()
+               } catch (Ir) {
+                 zS.error(Ir)
```

#### 18. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3912-L3913` → after: `L661-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L661-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L661-L749) · [Before (L3912-L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3912-L3913)

```diff
-             })).catch((RR => {
-               throw ct = null, RR
+               rr("config", Wr, ar)
+             }(rr, Sr, Qr, Zr, Wr, ar)
+           } else if ("consent" === Wr) {
+             const [Sr] = jr;
+             rr("consent", "update", Sr)
+           } else if ("get" === Wr) {
+             const [Sr, Qr, Zr] = jr;
+             rr("get", Sr, Qr, Zr)
+           } else if ("set" === Wr) {
+             const [Sr] = jr;
+             rr("set", Sr)
+           } else rr(Wr, ...jr)
+         } catch (fr) {
+           zS.error(fr)
+         }
+       }
+ ... (73 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3915-L3952` → after: `L751-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L751-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L751-L756) · [Before (L3915-L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3915-L3952)

```diff
-           }(RR), ct
-         }
-         const It = new xR(5e3, 15e3),
-           mt = {
-             style: {
-               position: "absolute",
-               top: "-100px",
-               width: "1px",
-               height: "1px"
-             },
-             "aria-hidden": "true",
-             tabindex: "-1"
-           },
-           zt = new Map([
-             ["identitytoolkit.googleapis.com", "p"],
-             ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
- ... (22 more removed lines; see GitHub link above)
+           }))
+         }(Qr, Zr)
+       } catch (pr) {
+         if (Er) return zS.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Er} provided in the "measurementId" field in the local Firebase config. [${null===pr||void 0===pr?void 0:pr.message}]`), {
+           appId: fr,
+           measurementId: Er
```

#### 20. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3954-L3960` → after: `L758-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L758-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L758-L774) · [Before (L3954-L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3954-L3960)

```diff
-         class dt {
-           constructor(RR) {
-             this.window = RR, this.associatedEvent = null
-           }
-           close() {
-             if (this.window) try {
-               this.window.close()
+         throw pr
+       }
+       try {
+         const Sr = await async function(rr) {
+           var Sr;
+           const {
+             appId: Qr,
+             apiKey: Zr
+           } = rr, Wr = {
+             method: "GET",
+             headers: vS(Zr)
+           }, ar = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", Qr), jr = await fetch(ar, Wr);
+           if (200 !== jr.status && 304 !== jr.status) {
+             let rr = "";
+             try {
+               const Qr = await jr.json();
+ ... (1 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3964-L3997` → after: `L797-L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L797-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L797-L1013) · [Before (L3964-L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3964-L3997)

```diff
- 
-         function Et(RR, JR, GR) {
-           let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
-             uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
-           const ZR = Math.max((window.screen.availHeight - uR) / 2, 0).toString(),
-             qR = Math.max((window.screen.availWidth - tR) / 2, 0).toString();
-           let iR = "";
-           const fR = Object.assign(Object.assign({}, jt), {
-               width: tR.toString(),
-               height: uR.toString(),
-               top: ZR,
-               left: qR
-             }),
-             VR = (0, yR.F)().toLowerCase();
-           GR && (iR = rJ(VR) ? "_blank" : GR), KJ(VR) && (JR = JR || "http://localhost", fR.scrollbars = "yes");
-           const KR = Object.entries(fR).reduce(((RR, JR) => {
- ... (18 more removed lines; see GitHub link above)
+         const Zr = 503 === Number(null === (Ir = null === Sr || void 0 === Sr ? void 0 : Sr.customData) || void 0 === Ir ? void 0 : Ir.httpStatus) ? (0, ar.z)(Wr, jr.intervalMillis, 30) : (0, ar.z)(Wr, jr.intervalMillis),
+           xr = {
+             throttleEndTimeMillis: Date.now() + Zr,
+             backoffCount: Wr + 1
+           };
+         return jr.setThrottleMetadata(fr, xr), zS.debug(`Calling attemptFetch again in ${Zr} millis`), LS(rr, xr, Qr, jr)
+       }
+     }
+     class lS {
+       constructor() {
+         this.listeners = []
+       }
+       addEventListener(rr) {
+         this.listeners.push(rr)
+       }
+       abort() {
+ ... (201 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L3999-L4026` → after: `L1015-L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L1015-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/305.js#L1015-L1043) · [Before (L3999-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/305.js#L3999-L4026)

```diff
-         const Yt = "__/auth/handler",
-           kt = "emulator/auth/handler",
-           Qt = encodeURIComponent("fac");
-         async function Ft(RR, JR, GR, uR, ZR, qR) {
-             lR(RR.config.authDomain, RR, "auth-domain-config-required"), lR(RR.config.apiKey, RR, "invalid-api-key");
-             const iR = {
-               apiKey: RR.config.apiKey,
-               appName: RR.name,
-               authType: GR,
-               redirectUrl: uR,
-               v: tR.c,
-               eventId: ZR
-             };
-             if (JR instanceof RG) {
-               JR.setDefaultLanguage(RR.languageCode), iR.providerId = JR.providerId || "", (0, yR.J)(JR.getCustomParameters()) || (iR.customParameters = JSON.stringify(JR.getCustomParameters()));
-               for (const [RR, JR] of Object.entries(qR || {})) iR[RR] = JR
- ... (12 more removed lines; see GitHub link above)
+       }(AS, CS[rr.app.options.appId], Sr, Qr, Zr).catch((rr => zS.error(rr)))
+     }
+ 
+     function ZQ(rr) {
+       AS ? AS("consent", "update", rr) : HS(rr)
+     }
+     const WQ = "@firebase/analytics",
+       aQ = "0.10.0";
+     (0, Zr.E)(new jr.f(tS, ((rr, Sr) => {
+       let {
+         options: Qr
+       } = Sr;
+       return FS(rr.getProvider("app").getImmediate(), rr.getProvider("installations-internal").getImmediate(), Qr)
+     }), "PUBLIC")), (0, Zr.E)(new jr.f("analytics-internal", (function(rr) {
+       try {
+         const Sr = rr.getProvider(tS).getImmediate();
+ ... (13 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/306.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/306.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2)

#### 1. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L4-L1388` → after: `L5-L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L5-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/306.js#L5-L4026) · [Before (L4-L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/306.js#L4-L1388)

```diff
-   42106: (RR, JR, GR) => {
-     GR.d(JR, {
-       $: () => QR,
-       $b: () => aJ,
-       $d: () => KR,
-       Ab: () => rJ,
-       Bc: () => pR,
-       Bf: () => LG,
-       C: () => wR,
-       Cb: () => qJ,
-       Cd: () => LJ,
-       Cf: () => FG,
-       De: () => IG,
-       E: () => tJ,
-       Eb: () => tR,
-       Ef: () => cG,
- ... (1369 more removed lines; see GitHub link above)
+     42388: (rr, Sr, Qr) => {
+         Qr.r(Sr), Qr.d(Sr, {
+           ActionCodeOperation: () => mr,
+           ActionCodeURL: () => dS,
+           AuthCredential: () => GS,
+           AuthErrorCodes: () => zr,
+           EmailAuthCredential: () => FS,
+           EmailAuthProvider: () => uS,
+           FacebookAuthProvider: () => ZQ,
+           FactorId: () => fr,
+           GithubAuthProvider: () => aQ,
+           GoogleAuthProvider: () => WQ,
+           OAuthCredential: () => bS,
+           OAuthProvider: () => QQ,
+           OperationType: () => xr,
+           PhoneAuthCredential: () => DS,
+ ... (4006 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/307.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/307.js` (98 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a)

#### 1. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L4)

```diff
-   53594: (RR, JR, GR) => {
+   42438: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L6` → after: `L6-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L6-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L6-L83) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L6)

```diff
-       b: () => LR,
+       $d: () => xr,
+       A: () => WS,
+       Ab: () => YS,
+       Ac: () => fS,
+       Bd: () => hS,
+       Be: () => qQ,
+       C: () => Lr,
+       Cf: () => QZ,
+       Db: () => Dr,
+       Ec: () => QS,
+       Ed: () => FS,
+       Ee: () => gQ,
+       Ef: () => JQ,
+       Fd: () => Ar,
+       Fe: () => RQ,
+       G: () => Xr,
+ ... (62 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8-L152` → after: `L85-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L85-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L85-L142) · [Before (L8-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8-L152)

```diff
-       e: () => ZR,
-       g: () => fR
-     });
-     var yR = GR(38329),
-       tR = GR(39941),
-       uR = GR(39934);
- 
-     function ZR(RR, JR, GR, yR) {
-       const tR = uR.x;
-       JR.fill(0), RR.gravity.toArray(JR, tR.gravity), RR.colorDead.toArray(JR, tR.colorDead), GR[tR.ramp] = RR.useRampGradients ? 1 : 0;
-       const ZR = RR.getColorGradients(),
-         qR = wR(RR, ZR, "colour", yR);
-       GR[tR.colorCount] = qR;
-       for (let uR = 0; uR < qR; uR++) {
-         var iR;
-         const RR = ZR[rR(ZR, uR)];
- ... (129 more removed lines; see GitHub link above)
+       db: () => DS,
+       dc: () => Er,
+       dd: () => Rr,
+       de: () => fQ,
+       dg: () => YQ,
+       eb: () => Gr,
+       ef: () => vQ,
+       f: () => Br,
+       fb: () => ZQ,
+       fd: () => qr,
+       fe: () => ZZ,
+       g: () => Mr,
+       gb: () => WQ,
+       gc: () => cS,
+       gf: () => XQ,
+       hb: () => kr,
+ ... (42 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L154-L281` → after: `L144-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L144-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L144-L153) · [Before (L154-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L154-L281)

```diff
-     var yR = GR(38329),
-       tR = GR(38675),
-       uR = GR(39055),
-       ZR = GR(38391),
-       qR = GR(39069);
-     class iR extends qR.c {
-       constructor() {
-         for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
-         super(...JR), this.color = new yR.Color3(1, 1, 1), this.alpha = 1, this.material = {
-           name: "colorShader",
-           uniqueId: JR[0].jH().getUniqueId(),
-           shaderPath: "color",
-           fillMode: 4,
-           sideOrientation: null,
-           alphaMode: 2,
-           forceDepthWrite: !1,
- ... (112 more removed lines; see GitHub link above)
+     const Zr = -2147483648,
+       Wr = 12,
+       ar = 12,
+       jr = 4095,
+       Ir = {
+         Lifeform: 1,
+         Throwable: 2,
+         Mesh: 3,
+         Audio: 4,
+         Item: 5
```

#### 5. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L283-L289` → after: `L155-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L155-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L155-L174) · [Before (L283-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L283-L289)

```diff
-       texture: (RR, JR, GR) => {
-         let {
-           data: yR,
-           sets: tR
-         } = GR;
-         var uR;
-         (NR(RR), yR) && (RR.uvSet = null !== (uR = null === tR || void 0 === tR ? void 0 : tR.coordinatesIndex) && void 0 !== uR ? uR : 0, (0, CR.gb)(RR.matrix, null !== tR && void 0 !== tR ? tR : {}))
+       fr = {
+         Alive: 1,
+         Crouching: 2,
+         OnGround: 4,
+         InFluid: 8,
+         Spectating: 16,
+         AttemptingBreak: 32,
+         Aiming: 64,
+         FirstPerson: 128,
+         Replay: 256,
+         Breaking: 512,
+         CursorAim: 1024,
+         FreeCam: 2048,
+         ZoomFirstPerson: 4096,
+         JumpHeld: 8192,
+         Flying: 16384,
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L291-L368` → after: `L176-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L176-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L176-L186) · [Before (L291-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L291-L368)

```diff
-       cube: NR,
-       canvas: (RR, JR, GR) => {
-         let {
-           width: yR,
-           height: tR,
-           mipmaps: uR,
-           samplingMode: ZR = gR.f.trilinear,
-           hasAlpha: qR = !1,
-           wrap: iR = gR.c.clamp
-         } = GR;
-         const fR = RR.ke().createCanvas(yR, tR),
-           VR = new gR.i("2d", {
-             kind: "canvas",
-             width: yR,
-             height: tR,
-             canvas: fR
- ... (62 more removed lines; see GitHub link above)
+       Er = {
+         None: 0,
+         Entity: 1,
+         Open: 2,
+         Close: 3,
+         Milk: 4,
+         Shear: 5,
+         Tame: 6,
+         TameWith: 7,
+         Feed: 8,
+         Ride: 9
```

#### 7. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L753-L1102` → after: `L189-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L189-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L189-L233) · [Before (L753-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L753-L1102)

```diff
-         srcFactor: "zero",
-         dstFactor: "one",
-         operation: "add"
-       };
- 
-     function UJ(RR, JR, GR) {
-       var yR;
-       let tR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       const uR = null !== (yR = JR._colorFormat) && void 0 !== yR ? yR : "bgra8unorm",
-         ZR = tR ? 15 : 0;
-       return GR ? {
-         ...RR,
-         targets: [{
-           format: uR,
-           blend: {
-             color: GR,
- ... (334 more removed lines; see GitHub link above)
+         Off: 0,
+         Key: 1,
+         Touch: 2
+       },
+       xr = {
+         Alive: 16
+       },
+       mr = 32,
+       Nr = {
+         Stored: 1,
+         Unloaded: 2,
+         ResetAll: 4
+       },
+       Ur = {
+         opacity: 0,
+         zIndex: 1,
+ ... (29 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L1104-L1114` → after: `L235-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L235-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L235-L247) · [Before (L1104-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L1104-L1114)

```diff
-       WG = 1,
-       AG = 2,
-       CG = 3;
- 
-     function XG(RR) {
-       return Math.ceil(RR * RR / 32)
-     }
-     const MG = 8192,
-       BG = 1 << 18,
-       lG = 65536,
-       pG = 294912,
+       zr = 4294967295,
+       Yr = 4,
+       nr = 123,
+       er = -2147483648,
+       Kr = {
+         Off: 0,
+         All: 1,
+         Filter: 2
+       },
+       yr = 51,
+       Br = 5,
+       Tr = 4294967295,
+       vr = 4294967295,
```

#### 9. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L1116` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L249) · [Before (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L1116)

```diff
-       bG = 4096,
+       Lr = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
```

#### 10. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L1118-L1517` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L251) · [Before (L1118-L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L1118-L1517)

```diff
-       OG = 16385,
-       xG = 81921,
-       NG = 147457,
-       DG = 4194304;
-     const HG = [0, 0, 0],
-       oG = [0, 0, 0];
- 
-     function cG(RR, JR, GR, yR) {
-       ! function(RR, JR, GR) {
-         const [yR, tR, uR] = [RR[0], RR[1], RR[2]];
-         let ZR, qR, iR;
-         Math.abs(tR) < .99 ? (ZR = uR, qR = 0, iR = -yR) : (ZR = -tR, qR = yR, iR = 0);
-         const fR = Math.hypot(ZR, qR, iR);
-         JR[0] = ZR / fR, JR[1] = qR / fR, JR[2] = iR / fR, GR[0] = tR * JR[2] - uR * JR[1], GR[1] = uR * JR[0] - yR * JR[2], GR[2] = yR * JR[1] - tR * JR[0]
-       }(yR, HG, oG);
-       const tR = 1 / 32;
- ... (384 more removed lines; see GitHub link above)
+       Xr = 255,
```

#### 11. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L1519-L1594` → after: `L253-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L253-L255) · [Before (L1519-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L1519-L1594)

```diff
-         vertexFlags: "vertexOutputs.vBlockFlags",
-         vertexLocalPosition: "vec3f(0.0)",
-         flags: "fragmentInputs.vBlockFlags",
-         normal: "normalize(fragmentInputs.vNormalW)",
-         alpha: "alpha",
-         alphaOut: "alpha",
-         lambert: "fragmentInputs.vTerrainLambert",
-         diffuse: "material.vDiffuseColor.rgb",
-         emissive: "material.emissiveAndLevel.xyz",
-         ambient: "ambient",
-         fogColour: "select(vec3f(0.0), uniforms.vFogColor, uniforms.vFogInfos.x != 0.0)",
-         fogAlpha: "1.0 - fog",
-         enchantTier: "0u",
-         enchantColour: "vec4f(0.0)",
-         enchantSpeed: "0.0",
-         localPosition: "vec3f(0.0)",
- ... (60 more removed lines; see GitHub link above)
+         Off: 0,
+         On: 1,
+         Keep: 2
```

#### 12. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L1598-L1601` → after: `L258-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L258-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L258-L266) · [Before (L1598-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L1598-L1601)

```diff
-         diffuse: 0,
-         ambientAndCutoff: 4,
-         emissiveAndLevel: 8,
-         anim: 12
+         AltVeto: 1,
+         AltAction: 2,
+         Click: 3,
+         ChangeBlock: 4,
+         DropItem: 5,
+         Tick: 6,
+         Message: 7,
+         Create: 8,
+         Director: 11
```

#### 13. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L1609-L1614` → after: `L269-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L269-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L269-L307) · [Before (L1609-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L1609-L1614)

```diff
-         position: 0,
-         normal: 1,
-         color: 2,
-         uv: 3,
-         packedLight: 5,
-         blockFlagWords: 7
+         Hotbar: 256,
+         Drop: 257
+       },
+       Rr = {
+         Down: 1,
+         Next: 2,
+         Stack: 4,
+         Repeat: 8
+       },
+       gr = {
+         Rate: 0,
+         Gyro: 1
+       },
+       Cr = {
+         Active: 1,
+         JumpHeld: 2,
+ ... (23 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L1618-L1815` → after: `L310-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L310-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L310-L319) · [Before (L1618-L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L1618-L1815)

```diff
-       dy = 4,
-       Ey = 5,
-       Yy = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\ … [truncated]
-       ky = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight( … [truncated]
-     const Qy = {
-       gK: "material.anim.x",
-       stride: "material.anim.y",
-       count: "material.anim.z",
-       perTexture: RR => `animDataPerTex[${RR}]`
-     };
- 
-     function Fy(RR, JR) {
-       let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Qy;
-       return `\n\tlet atlasIdxIn = ${RR};\n\tlet animTick = ${GR.gK};\n\tlet animTickStride = ${GR.stride};\n\tlet numAnimTextures = ${GR.count};\n\t${(0,MR.h)(XR.c.WGSL,GR.perTexture)}\n\t${JR}animLayer;\n`
-     }
- 
- ... (182 more removed lines; see GitHub link above)
+       Vr = {
+         Synced: 0,
+         ChestOpened: 1,
+         ChestClosed: 2,
+         ChestRefreshed: 3,
+         EnchantingTable: 4,
+         HotbarRequest: 5,
+         Scrolled: 6,
+         NumberKey: 7,
+         DropRequested: 8
```

#### 15. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L1817-L2029` → after: `L321-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L321-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L321-L340) · [Before (L1817-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L1817-L2029)

```diff
-       ft = 256,
-       Vt = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) … [truncated]
-       Kt = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
-       wt = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
-       rt = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertex … [truncated]
-       et = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
-       Lt = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogC … [truncated]
-       nt = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11 … [truncated]
-       Ut = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Kt}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#e … [truncated]
-     const Wt = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vC … [truncated]
-     frame.lights[LITE_LIGHT$ {
-         RR
-       }
-       _SLOT] `;return`
-     #ifdef LIGHT$ {
-       RR
- ... (197 more removed lines; see GitHub link above)
+       ir = {
+         ToggleMenu: 0,
+         EditBoard: 1,
+         EditCodeBlock: 2,
+         ViewCodeBlock: 3,
+         EditCustomLobbyBlock: 4,
+         OpenIronChest: 5,
+         EditNameTag: 6,
+         EditBook: 7,
+         CantChangeBlock: 8,
+         MiddleBarStart: 9,
+         MiddleBarStop: 10,
+         AimingOverlay: 11,
+         BottomMessage: 12,
+         Hitmarker: 13,
+         ShotsLeft: 14,
+ ... (4 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L3129-L3479` → after: `L343-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L343-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L343-L783) · [Before (L3129-L3479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L3129-L3479)

```diff
-         depth: !1,
-         sunShadow: !1
-       };
- 
-     function du(RR, JR) {
-       let GR = Su.get(RR);
-       GR || (GR = new Map, Su.set(RR, GR));
-       const yR = `${JR.depth?"-depth":""}${JR.sunShadow?"-shadow":""}${JR.shadowMask?"-mask":""}`;
-       let tR = GR.get(yR);
-       if (!tR) {
-         const uR = [{
-           binding: FJ.b,
-           visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-           buffer: {
-             type: "uniform",
-             minBindingSize: FJ.i
- ... (335 more removed lines; see GitHub link above)
+         Alt: 1,
+         Up: 2,
+         HasPos: 4,
+         AttackOnly: 8
+       },
+       cr = {
+         Solid: 1,
+         Fluid: 2,
+         PlaceOver: 4
+       },
+       Fr = {
+         Stackable: 1
+       },
+       or = {
+         granule: 1,
+         wood: 2,
+ ... (425 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L3481-L3491` → after: `L785-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L785-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L785-L840) · [Before (L3481-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L3481-L3491)

```diff
-       const uR = XR.c.WGSL,
-         ZR = (0, XR.Jb)(uR, "uAnimStatesNum"),
-         qR = (0, XR.kb)(uR, (0, hu.f)(uR), ZR),
-         iR = "fragmentInputs.vMainUV1";
-       return {
-         texture: "diffuseSampler",
-         cells: `vec2f(1.0, ${ZR})`,
-         layers: [qR],
-         uv: `vec2f(${iR}.x, ${iR}.y * ${ZR} - ${qR})`,
-         levelUv: iR,
-         id: AZ
+ 
+     function fQ(rr, Sr, Qr, Zr, Wr) {
+       var ar, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr, vr, Or, Lr, lr, Xr;
+       switch (rr) {
+         case 32:
+           return 4 === Zr && (null === (ar = Wr.tickEnd) || void 0 === ar || ar.call(Wr, zS.lx(Sr, Qr)), !0);
+         case 33:
+           return 12 === Zr && (null === (jr = Wr.entitySpawned) || void 0 === jr || jr.call(Wr, YS.serverId(Sr, Qr), YS.index(Sr, Qr), YS.kind(Sr, Qr)), !0);
+         case 34:
+           return 12 === Zr && (null === (Ir = Wr.entityDespawned) || void 0 === Ir || Ir.call(Wr, YS.serverId(Sr, Qr), YS.index(Sr, Qr), YS.kind(Sr, Qr)), !0);
+         case 39:
+           return !(Zr < 20) && (null === (fr = Wr.changeBlockFail) || void 0 === fr || fr.call(Wr, nS.pos(Sr, Qr, 0), nS.pos(Sr, Qr, 1), nS.pos(Sr, Qr, 2), nS.actual(Sr, Qr), nS.dataLen(Sr, Qr), Qr + 20, Zr - 20), !0);
+         case 46:
+           return 0 === Zr && (null === (Er = Wr.changeBlockFailEnd) || void 0 === Er || Er.call(Wr), !0);
+         case 48:
+           return 20 === Zr && (null === (pr = Wr.inventoryEvent) || void 0 === pr || pr.call(Wr, eS.what(Sr, Qr), eS.value(Sr, Qr), eS.pos(Sr, Qr, 0), eS.pos(Sr, Qr, 1), eS.pos(Sr, Qr, 2), eS.block(Sr, Qr)), !0);
+ ... (40 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L3495-L3496` → after: `L898-L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L898-L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L898-L899) · [Before (L3495-L3496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L3495-L3496)

```diff
-     function XZ(RR, JR) {
-       return "box" === JR.kind && !!RR.hooks.surface && null !== CZ(JR)
+     function xQ(rr) {
+       return pQ.buffer !== rr.buffer && (pQ = new Uint8Array(rr.buffer)), pQ
```

#### 19. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L3499-L3500` → after: `L902-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L902-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L902-L905) · [Before (L3499-L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L3499-L3500)

```diff
-     function MZ(RR, JR) {
-       return RR.reads.fragment.includes(JR)
+     function mQ(rr, Sr, Qr) {
+       const Zr = rr.Yx(66, Sr, 4);
+       if (Zr < 0) return !1;
+       return rr.view.setUint8(Zr + 0, Qr), !0
```

#### 20. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L3503-L3504` → after: `L908-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L908-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L908-L911) · [Before (L3503-L3504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L3503-L3504)

```diff
-     function BZ(RR) {
-       return !!RR.BLOXD_LIGHTING && !RR.BLOXD_UNLIT
+     function NQ(rr, Sr, Qr) {
+       const Zr = rr.Yx(67, Sr, 4);
+       if (Zr < 0) return !1;
+       return rr.view.setUint32(Zr + 0, Qr, !0), !0
```

#### 21. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L3507-L3513` → after: `L914-L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L914-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L914-L917) · [Before (L3507-L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L3507-L3513)

```diff
-     function lZ(RR, JR, GR, yR) {
-       const tR = RR.filter((RR => {
-         let [GR, yR] = RR;
-         return "CUSTOM_FRAGMENT_BEFORE_FOG" === GR && yR === JR
-       }));
-       if (1 !== tR.length) throw new Error(`A model program for shader packs has ${0===tR.length?"no":"more than one"} ${yR} code before fog (lite/modelShaderPack.ts)`);
-       return RR.map((RR => RR === tR[0] ? [RR[0], GR] : RR))
+     function UQ(rr, Sr, Qr) {
+       const Zr = rr.Yx(68, Sr, 4);
+       if (Zr < 0) return !1;
+       return rr.view.setUint8(Zr + 0, Qr), !0
```

#### 22. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L3517-L3557` → after: `L921-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L921-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L921-L924) · [Before (L3517-L3557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L3517-L3557)

```diff
-       const {
-         hooks: tR
-       } = RR, {
-         kind: uR,
-         defines: ZR
-       } = JR, qR = [...GR];
-       var iR;
-       JR.atlas && tR.surface && qR.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", wy("atlasIdxIn")]), "item" === uR && qR.push(["CUSTOM_VERTEX_DEFINITIONS", (0, XR.g)(XR.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS … [truncated]
-       const fR = eZ(JR);
-       fR && (tR.surface || tR.light) && qR.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${fR.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${fR.varying} = ${fR.value};`]);
-       let VR = yR;
-       if (VZ(RR, JR, "fragment") && (qR.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${fZ});`]), VR = [...VR, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), MZ(RR, … [truncated]
-         UZ(RR, JR) && qR.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
-         const GR = nZ(RR, JR);
-         GR && qR.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${GR});`]);
-         const yR = (0, XR.xb)(XR.c.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
- ... (25 more removed lines; see GitHub link above)
+       const Wr = rr.Yx(69, Sr, 4 + Zr.length);
+       if (Wr < 0) return !1;
+       const ar = rr.view;
+       return ar.setUint8(Wr + 0, Qr), xQ(ar).set(Zr, ar.byteOffset + Wr + 4), !0
```

#### 23. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L3560-L3561` → after: `L927-L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L927-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L927-L931) · [Before (L3560-L3561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L3560-L3561)

```diff
-     function gZ(RR, JR, GR, yR) {
-       return yy(RR, JR, GR, yR, "model")
+     function hQ(rr, Sr, Qr, Zr, Wr) {
+       const ar = rr.Yx(128, Sr, 4 + Wr.length);
+       if (ar < 0) return !1;
+       const jr = rr.view;
+       return jr.setUint8(ar + 0, Qr), jr.setUint16(ar + 2, Zr, !0), xQ(jr).set(Wr, jr.byteOffset + ar + 4), !0
```

#### 24. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L3565-L3567` → after: `L934-L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L934-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L934-L937) · [Before (L3565-L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L3565-L3567)

```diff
-     function vZ(RR, JR) {
-       const GR = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(RR)[0];
-       return `${GR}${JR}${RR.slice(GR.length)}`
+     function zQ(rr, Sr, Qr) {
+       const Zr = rr.Yx(131, Sr, 4);
+       if (Zr < 0) return !1;
+       return rr.view.setInt32(Zr + 0, Qr, !0), !0
```

#### 25. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L3571-L3654` → after: `L941-L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L941-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L941-L943) · [Before (L3571-L3654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L3571-L3654)

```diff
-       let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const {
-         hooks: tR
-       } = JR, uR = uy(JR, yR), {
-         kind: ZR,
-         defines: qR
-       } = GR, iR = function(RR, JR) {
-         var GR, yR, tR, uR;
-         const {
-           defines: ZR
-         } = JR, qR = eZ(JR), iR = !!ZR.FOG, fR = LZ(ZR), VR = null !== (GR = null === qR || void 0 === qR ? void 0 : qR.enchantTier) && void 0 !== GR ? GR : nZ(RR, JR) ? "fragmentInputs.vPackEnchantTier" : "0u", KR = "lifeform" === JR.kind && !ZR.ALPHAFROMDIFFUSE;
-         return {
-           vertexFlags: null !== (yR = null === qR || void 0 === qR ? void 0 : qR.vertexFlags) && void 0 !== yR ? yR : aZ(JR),
-           vertexLocalPosition: qZ(JR),
-           flags: null !== (tR = null === qR || void 0 === qR ? void 0 : qR.flags) && void 0 !== tR ? tR : aZ(JR),
-           normal: "normalW",
- ... (68 more removed lines; see GitHub link above)
+       const Zr = rr.Yx(132, Sr, 4);
+       if (Zr < 0) return !1;
+       return rr.view.setUint32(Zr + 0, Qr, !0), !0
```

#### 26. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L3657-L4368` → after: `L946-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L946-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L946-L949) · [Before (L3657-L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L3657-L4368)

```diff
-     function DZ(RR) {
-       return RR.failed && null !== RR.packGroup
-     }
-     class HZ {
-       constructor(RR, JR, GR) {
-         let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Hu,
-           tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Nu;
-         this.device = RR, this.resources = JR, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.DRR = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new ht, this.s … [truncated]
-           label: "meshes-frame",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-             buffer: {
-               type: "uniform"
-             }
-           }, {
- ... (696 more removed lines; see GitHub link above)
+     function nQ(rr, Sr, Qr) {
+       const Zr = rr.Yx(133, Sr, 4);
+       if (Zr < 0) return !1;
+       return rr.view.setUint32(Zr + 0, Qr, !0), !0
```

#### 27. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L4371-L4374` → after: `L952-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L952-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L952-L955) · [Before (L4371-L4374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L4371-L4374)

```diff
-     function oZ(RR) {
-       var JR, GR;
-       const yR = null === (JR = RR.Im) || void 0 === JR || null === (GR = JR.aShaderPackItem) || void 0 === GR ? void 0 : GR.x;
-       return void 0 !== yR && 0 !== (yR & OJ.i)
+     function eQ(rr, Sr, Qr) {
+       const Zr = rr.Yx(144, Sr, 4);
+       if (Zr < 0) return !1;
+       return rr.view.setUint8(Zr + 0, Qr), !0
```

#### 28. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L4383-L4591` → after: `L959-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L959-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L959-L962) · [Before (L4383-L4591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L4383-L4591)

```diff
-       const uR = GR[0].width;
-       try {
-         return tR ? function(RR, JR, GR) {
-           const yR = (0, mZ.c)(RR, GR, GR, 6);
-           for (let tR = 0; tR < 6; tR++)(0, mZ.e)(RR, yR, tR, JR[zZ[tR]], {
-             invertY: !1
-           });
-           return yR.texture
-         }(RR, GR, uR) : function(RR, JR, GR, yR) {
-           const tR = RR.createTexture({
-             label: "sink-cube",
-             size: {
-               width: GR,
-               height: GR,
-               depthOrArrayLayers: 6
-             },
- ... (193 more removed lines; see GitHub link above)
+       const ar = rr.Yx(145, Sr, 12);
+       if (ar < 0) return !1;
+       const jr = rr.view;
+       return jr.setInt32(ar + 0, Qr, !0), jr.setInt32(ar + 4, Zr, !0), jr.setInt32(ar + 8, Wr, !0), !0
```

#### 29. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L4594-L4603` → after: `L965-L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L965-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L965-L969) · [Before (L4594-L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L4594-L4603)

```diff
-     function QZ(RR) {
-       return Array.isArray(RR) ? new Float32Array(RR) : RR
-     }
- 
-     function FZ(RR, JR, GR, yR, tR) {
-       const uR = YR(tR),
-         ZR = Math.min(tR, yR.byteLength);
-       if (uR === ZR && yR.byteOffset % 4 === 0) return void RR.queue.writeBuffer(JR, GR, yR.buffer, yR.byteOffset, uR);
-       const qR = new Uint8Array(uR);
-       qR.set(new Uint8Array(yR.buffer, yR.byteOffset, ZR)), RR.queue.writeBuffer(JR, GR, qR)
+     function yQ(rr, Sr, Qr, Zr) {
+       const Wr = rr.Yx(256, Sr, 4 + Zr.length);
+       if (Wr < 0) return !1;
+       const ar = rr.view;
+       return ar.setUint16(Wr + 0, Qr, !0), xQ(ar).set(Zr, ar.byteOffset + Wr + 4), !0
```

#### 30. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L4607-L4662` → after: `L973-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L973-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L973-L975) · [Before (L4607-L4662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L4607-L4662)

```diff
-       const yR = "linear",
-         tR = "nearest";
-       let uR = tR,
-         ZR = tR,
-         qR = "nearest",
-         iR = !JR;
-       switch (RR) {
-         case 11:
-           uR = yR, ZR = yR;
-           break;
-         case 3:
-           uR = yR, ZR = yR, qR = JR ? "linear" : "nearest";
-           break;
-         case 8:
-           qR = JR ? "linear" : "nearest";
-           break;
- ... (40 more removed lines; see GitHub link above)
+       const Zr = rr.Yx(258, Sr, 4);
+       if (Zr < 0) return !1;
+       return rr.view.setUint8(Zr + 0, Qr), !0
```

#### 31. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L4665-L5177` → after: `L978-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L978-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L978-L985) · [Before (L4665-L5177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L4665-L5177)

```diff
-     function sZ(RR) {
-       return 0 === RR ? "clamp-to-edge" : 2 === RR ? "mirror-repeat" : "repeat"
-     }
-     class hZ {
-       constructor(RR, JR) {
-         let {
-           vertexArena: GR = !0
-         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-         this.engine = RR, this.device = JR, this.buffers = new WeakMap, this.LRR = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet,  … [truncated]
-       }
-       createArena() {
-         return new kZ(this.device, (RR => {
-           var JR;
-           null === (JR = this.onDestroy) || void 0 === JR || JR.call(this, RR), this.gpuBuffersVersion++
-         }))
-       }
- ... (497 more removed lines; see GitHub link above)
+     function TQ(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
+       const Er = rr.Yx(320, Sr, 48 + fr.length);
+       if (Er < 0) return !1;
+       const pr = rr.view;
+       pr.setUint32(Er + 0, Qr, !0), pr.setUint16(Er + 4, Zr, !0), pr.setUint16(Er + 6, Wr, !0), pr.setUint32(Er + 8, ar, !0);
+       for (let xr = 0; xr < 3; xr++) pr.setFloat64(Er + 12 + 8 * xr, jr[xr], !0);
+       for (let xr = 0; xr < 3; xr++) pr.setFloat32(Er + 36 + 4 * xr, Ir[xr], !0);
+       return xQ(pr).set(fr, pr.byteOffset + Er + 48), !0
```

#### 32. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L5180-L5181` → after: `L988-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L988-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L988-L995) · [Before (L5180-L5181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L5180-L5181)

```diff
-     function Rq(RR) {
-       return "cube" === RR.kind ? RR.rootUrl : "canvas" === RR.kind ? "canvas" : RR.url
+     function vQ(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
+       const Er = rr.Yx(321, Sr, 48 + fr.length);
+       if (Er < 0) return !1;
+       const pr = rr.view;
+       pr.setUint32(Er + 0, Qr, !0), pr.setInt32(Er + 4, Zr, !0), pr.setUint16(Er + 8, Wr, !0), pr.setUint16(Er + 10, ar, !0);
+       for (let xr = 0; xr < 3; xr++) pr.setFloat64(Er + 12 + 8 * xr, jr[xr], !0);
+       for (let xr = 0; xr < 3; xr++) pr.setFloat32(Er + 36 + 4 * xr, Ir[xr], !0);
+       return xQ(pr).set(fr, pr.byteOffset + Er + 48), !0
```

#### 33. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L5186-L5190` → after: `L998-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L998-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L998-L1005) · [Before (L5186-L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L5186-L5190)

```diff
-     function yq(RR) {
-       const JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
-       RR._colorAttachment.storeOp = RR._targetSignature._sampleCount > 1 ? JR : "store";
-       const GR = RR._renderPassDescriptor.depthStencilAttachment;
-       GR && (GR.depthStoreOp = JR, GR.stencilStoreOp && (GR.stencilStoreOp = JR))
+     function OQ(rr, Sr, Qr, Zr, Wr, ar, jr) {
+       const Ir = rr.Yx(322, Sr, 44 + jr.length);
+       if (Ir < 0) return !1;
+       const fr = rr.view;
+       fr.setUint32(Ir + 0, Qr, !0), fr.setUint32(Ir + 4, Zr, !0);
+       for (let Er = 0; Er < 3; Er++) fr.setFloat64(Ir + 8 + 8 * Er, Wr[Er], !0);
+       for (let Er = 0; Er < 3; Er++) fr.setFloat32(Ir + 32 + 4 * Er, ar[Er], !0);
+       return xQ(fr).set(jr, fr.byteOffset + Ir + 44), !0
```

#### 34. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L5204-L5210` → after: `L1009-L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1009-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1009-L1011) · [Before (L5204-L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L5204-L5210)

```diff
-       RR.fov = JR.fov, RR.near = JR.near, RR.far = JR.far, RR.renderWidth = GR.renderWidth, RR.renderHeight = GR.renderHeight, (0, Zq.s)(JR.holderRotation, 0, Vq, 0), (0, Zq.b)(iq, 0, Vq, 0, JR.holderPosition, 0, Kq);
-       const yR = JR.y5;
-       wq[0] = yR[0], wq[1] = yR[1], wq[2] = yR[2] + 1;
-       const tR = RR.viewMatrix;
-       (0, Zq.j)(yR, wq, fq, tR), (0, Zq.g)(tR, 0, tR), (0, Zq.n)(tR, Kq, 0, tR), (0, Zq.g)(tR, 0, tR);
-       const uR = RR.worldMatrix;
-       (0, Zq.g)(tR, 0, uR), RR.eye[0] = uR[12], RR.eye[1] = uR[13], RR.eye[2] = uR[14], rq[0] = RR.fov, rq[1] = RR.renderWidth / RR.renderHeight, rq[2] = RR.near, rq[3] = RR.far, (0, Zq.q)(rq, RR.projectionMatrix), (0, Zq.n)(tR, RR.projectionMatrix, 0, RR.viewProjectionMatrix), ( … [truncated]
+       const Zr = rr.Yx(323, Sr, 4);
+       if (Zr < 0) return !1;
+       return rr.view.setUint32(Zr + 0, Qr, !0), !0
```

#### 35. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L5213-L5221` → after: `L1014-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1014-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1014-L1020) · [Before (L5213-L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L5213-L5221)

```diff
-     function aq(RR, JR) {
-       let GR = RR.frustumPlanes;
-       GR || (GR = RR.frustumPlanes = Array.from({
-         length: 6
-       }, (() => new tq.c(0, 0, 0, 0))));
-       for (let yR = 0; yR < 6; yR++) {
-         const RR = GR[yR].normal;
-         RR._x = JR[4 * yR], RR._y = JR[4 * yR + 1], RR._z = JR[4 * yR + 2], RR._isDirty = !0, GR[yR].d = JR[4 * yR + 3]
-       }
+     function lQ(rr, Sr, Qr, Zr, Wr, ar) {
+       const jr = rr.Yx(324, Sr, 32 + ar.length);
+       if (jr < 0) return !1;
+       const Ir = rr.view;
+       Ir.setUint32(jr + 0, Qr, !0), Ir.setUint32(jr + 4, Zr, !0);
+       for (let fr = 0; fr < 3; fr++) Ir.setFloat64(jr + 8 + 8 * fr, Wr[fr], !0);
+       return xQ(Ir).set(ar, Ir.byteOffset + jr + 32), !0
```

#### 36. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L5225-L5733` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1024) · [Before (L5225-L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L5225-L5733)

```diff
-       const GR = JR.clearColor;
-       RR.clearColour[0] = GR.r, RR.clearColour[1] = GR.g, RR.clearColour[2] = GR.b, RR.clearColour[3] = GR.a;
-       const yR = JR.ambientColor;
-       RR.ambientColour[0] = yR.r, RR.ambientColour[1] = yR.g, RR.ambientColour[2] = yR.b, RR.animationRatio = JR.animationRatio, RR.frameId = JR.frameId, RR.version++
-     }
- 
-     function nq(RR) {
-       const JR = RR.model.view;
-       return JR.animTick = (0, uq.f)(), JR.timeMs = performance.now(), Lq(JR, RR.tL), RR.model.update(JR.frameId), JR
-     }
- 
-     function Uq(RR) {
-       const JR = RR.tL,
-         {
-           view: GR,
-           Z2: yR
- ... (493 more removed lines; see GitHub link above)
+       return !(rr.Yx(325, Sr, 0) < 0)
```

#### 37. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L5737-L5951` → after: `L1027-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1027-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1027-L1062) · [Before (L5737-L5951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L5737-L5951)

```diff
-     function Nq(RR) {
-       return RR ? 15 : 1
-     }
-     class Dq {
-       constructor(RR, JR, GR, yR) {
-         this.device = RR, this.terrain = yR, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = JR._targetSi … [truncated]
-           label: "sun-shadow-mask-camera",
-           size: 64,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         }), this.layout = RR.createBindGroupLayout({
-           label: "sun-shadow-mask",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.FRAGMENT,
-             texture: {
-               sampleType: "unfilterable-float"
- ... (199 more removed lines; see GitHub link above)
+     function PQ(rr, Sr, Qr, Zr, Wr, ar) {
+       const jr = rr.Yx(384, Sr, 16);
+       if (jr < 0) return !1;
+       const Ir = rr.view;
+       return Ir.setUint32(jr + 0, Qr, !0), Ir.setUint32(jr + 4, Zr, !0), Ir.setFloat32(jr + 8, Wr, !0), Ir.setFloat32(jr + 12, ar, !0), !0
+     }
+ 
+     function HQ(rr, Sr, Qr, Zr, Wr, ar, jr) {
+       const Ir = rr.Yx(385, Sr, 36 + jr.length);
+       if (Ir < 0) return !1;
+       const fr = rr.view;
+       fr.setUint32(Ir + 0, Qr, !0), fr.setUint32(Ir + 4, Zr, !0);
+       for (let Er = 0; Er < 3; Er++) fr.setFloat64(Ir + 8 + 8 * Er, Wr[Er], !0);
+       return fr.setUint32(Ir + 32, ar, !0), xQ(fr).set(jr, fr.byteOffset + Ir + 36), !0
+     }
+ 
+ ... (20 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L5955-L5961` → after: `L1066-L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1066-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1066-L1068) · [Before (L5955-L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L5955-L5961)

```diff
-       let yR = null,
-         tR = 0;
-       for (const uR of GR) {
-         const GR = uR.renderable.mesh;
-         GR && !1 === GR.visible || (uR.pipeline !== yR && (RR.setPipeline(uR.pipeline), yR = uR.pipeline), tR += uR.draw(RR, JR))
-       }
-       return tR
+       const Zr = rr.Yx(388, Sr, 4);
+       if (Zr < 0) return !1;
+       return rr.view.setUint32(Zr + 0, Qr, !0), !0
```

#### 39. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L5963-L6070` → after: `L1070-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1070-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1070-L1075) · [Before (L5963-L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L5963-L6070)

```diff
-     const oq = 6e4,
-       cq = {
-         status: "ok"
-       },
-       Pq = {
-         status: "skipped"
-       };
-     async function Iq(RR, JR) {
-       const {
-         isCancelled: GR
-       } = RR;
-       if (GR()) return {
-         status: "xR"
-       };
-       const {
-         target: yR
- ... (92 more removed lines; see GitHub link above)
+ 
+     function CQ(rr, Sr, Qr, Zr) {
+       const Wr = rr.Yx(389, Sr, 8);
+       if (Wr < 0) return !1;
+       const ar = rr.view;
+       return ar.setInt32(Wr + 0, Qr, !0), ar.setFloat32(Wr + 4, Zr, !0), !0
```

#### 40. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L6072-L6078` → after: `L1077-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1077-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1077-L1082) · [Before (L6072-L6078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L6072-L6078)

```diff
-     async function mq(RR) {
-       if (!RR) return [];
-       try {
-         return (await RR.getCompilationInfo()).messages.filter((RR => "error" === RR.type))
-       } catch {
-         return []
-       }
+ 
+     function MQ(rr, Sr, Qr, Zr) {
+       const Wr = rr.Yx(390, Sr, 8);
+       if (Wr < 0) return !1;
+       const ar = rr.view;
+       return ar.setInt32(Wr + 0, Qr, !0), ar.setFloat32(Wr + 4, Zr, !0), !0
```

#### 41. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L6081-L6083` → after: `L1085-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1085-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1085-L1089) · [Before (L6081-L6083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L6081-L6083)

```diff
-     function zq(RR) {
-       var JR;
-       return null !== (JR = null === RR || void 0 === RR ? void 0 : RR.message) && void 0 !== JR ? JR : String(RR)
+     function GQ(rr, Sr, Qr, Zr, Wr, ar) {
+       const jr = rr.Yx(391, Sr, 12);
+       if (jr < 0) return !1;
+       const Ir = rr.view;
+       return Ir.setFloat32(jr + 0, Qr, !0), Ir.setFloat32(jr + 4, Zr, !0), Ir.setUint8(jr + 8, Wr), Ir.setUint8(jr + 9, ar), !0
```

#### 42. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L6086-L6090` → after: `L1092-L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1092-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1092-L1095) · [Before (L6086-L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L6086-L6090)

```diff
-     function Sq(RR, JR, GR, yR, tR) {
-       xy(JR) ? mq(yR).then((JR => {
-         const [yR] = JR;
-         VJ(RR, "terrain", GR, tR, yR ? `${yR.lineNum}:${yR.linePos} error: ${yR.message}` : null)
-       })) : VJ(RR, "terrain", GR, tR)
+     function kQ(rr, Sr, Qr) {
+       const Zr = rr.Yx(392, Sr, 4);
+       if (Zr < 0) return !1;
+       return rr.view.setUint32(Zr + 0, Qr, !0), !0
```

#### 43. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L6098-L6127` → after: `L1099-L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1099-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1099-L1102) · [Before (L6098-L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L6098-L6127)

```diff
-       const uR = Math.hypot(GR[0], GR[1], GR[2]);
-       if (!(uR > 0)) return;
-       const ZR = [GR[0] / uR, GR[1] / uR, GR[2] / uR],
-         qR = [Math.floor(JR[0]), Math.floor(JR[1]), Math.floor(JR[2])],
-         iR = [0, 0, 0],
-         fR = [1 / 0, 1 / 0, 1 / 0],
-         VR = [1 / 0, 1 / 0, 1 / 0];
-       for (let rR = 0; rR < 3; rR++) ZR[rR] > 0 ? (iR[rR] = 1, fR[rR] = (qR[rR] + 1 - JR[rR]) / ZR[rR], VR[rR] = 1 / ZR[rR]) : ZR[rR] < 0 && (iR[rR] = -1, fR[rR] = (qR[rR] - JR[rR]) / ZR[rR], VR[rR] = -1 / ZR[rR]);
-       const {
-         LK: KR
-       } = RR;
-       let wR = RR.eT(qR[0], qR[1], qR[2]);
-       for (;;) {
-         const JR = fR[0] < fR[1] ? fR[0] < fR[2] ? 0 : 2 : fR[1] < fR[2] ? 1 : 2;
-         if (fR[JR] > yR) return;
-         const GR = iR[JR] > 0 ? qR[JR] + 1 : qR[JR];
- ... (14 more removed lines; see GitHub link above)
+       const ar = rr.Yx(393, Sr, 12);
+       if (ar < 0) return !1;
+       const jr = rr.view;
+       return jr.setUint32(ar + 0, Qr, !0), jr.setUint16(ar + 4, Zr, !0), jr.setFloat32(ar + 8, Wr, !0), !0
```

#### 44. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L6130-L6131` → after: `L1105-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1105-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1105-L1113) · [Before (L6130-L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L6130-L6131)

```diff
-     function Qq(RR, JR) {
-       return RR.group - JR.group || RR.nearest - JR.nearest
+     function VQ(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr) {
+       const mr = rr.Yx(394, Sr, 56 + xr.length);
+       if (mr < 0) return !1;
+       const Nr = rr.view;
+       Nr.setUint32(mr + 0, Qr, !0), Nr.setUint16(mr + 4, Zr, !0), Nr.setUint8(mr + 6, Wr), Nr.setUint8(mr + 7, ar);
+       for (let Ur = 0; Ur < 3; Ur++) Nr.setFloat64(mr + 8 + 8 * Ur, jr[Ur], !0);
+       Nr.setFloat32(mr + 32, Ir, !0), Nr.setInt32(mr + 36, fr, !0);
+       for (let Ur = 0; Ur < 3; Ur++) Nr.setFloat32(mr + 40 + 4 * Ur, Er[Ur], !0);
+       return Nr.setFloat32(mr + 52, pr, !0), xQ(Nr).set(xr, Nr.byteOffset + mr + 56), !0
```

#### 45. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L6133-L6173` → after: `L1115-L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1115-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1115-L1119) · [Before (L6133-L6173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L6133-L6173)

```diff
-     class Fq {
-       constructor(RR, JR) {
-         this.device = RR, this.iW = JR, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
-       }
-       createBuffer() {
-         return this.device.createBuffer({
-           label: "terrain-chunk-slots",
-           size: this.data.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         })
-       }
-       allocate() {
-         var RR;
-         const JR = null !== (RR = this.free.pop()) && void 0 !== RR ? RR : this.next++;
-         if (8 * JR >= this.data.length) {
-           const RR = new Float32Array(2 * this.data.length);
- ... (25 more removed lines; see GitHub link above)
+ 
+     function iQ(rr, Sr, Qr) {
+       const Zr = rr.Yx(398, Sr, 4);
+       if (Zr < 0) return !1;
+       return rr.view.setUint32(Zr + 0, Qr, !0), !0
```

#### 46. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L6175-L7033` → after: `L1121-L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1121-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1121-L1126) · [Before (L6175-L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L6175-L7033)

```diff
-     const Tq = zy,
-       sq = !0;
-     const hq = {
-         arrayStride: 4,
-         stepMode: "vertex",
-         attributes: [{
-           shaderLocation: Tq.packedLight,
-           offset: 0,
-           format: "float32"
-         }]
-       },
-       Ri = {
-         srcFactor: "src-alpha",
-         dstFactor: "one-minus-src-alpha",
-         operation: "add"
-       };
- ... (843 more removed lines; see GitHub link above)
+ 
+     function wQ(rr, Sr, Qr, Zr, Wr) {
+       const ar = rr.Yx(399, Sr, 12);
+       if (ar < 0) return !1;
+       const jr = rr.view;
+       return jr.setUint32(ar + 0, Qr, !0), jr.setUint32(ar + 4, Zr, !0), jr.setFloat32(ar + 8, Wr, !0), !0
```

#### 47. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L7036-L7037` → after: `L1129-L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1129-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1129-L1132) · [Before (L7036-L7037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L7036-L7037)

```diff
-     function Gi(RR, JR, GR, yR) {
-       return `${sy(RR)}|${RR.atlasLayers}|${RR.W8}|${JR}|${GR}|${yR._colorFormat}|${yR._depthStencilFormat}|${yR._sampleCount}`
+     function cQ(rr, Sr, Qr) {
+       const Zr = rr.Yx(448, Sr, 4);
+       if (Zr < 0) return !1;
+       return rr.view.setFloat32(Zr + 0, Qr, !0), !0
```

#### 48. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L7040-L7041` → after: `L1135-L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1135-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1135-L1140) · [Before (L7040-L7041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L7040-L7041)

```diff
-     function yi(RR, JR) {
-       return RR.distance - JR.distance
+     function FQ(rr, Sr, Qr, Zr) {
+       const Wr = rr.Yx(450, Sr, 12);
+       if (Wr < 0) return !1;
+       const ar = rr.view;
+       for (let jr = 0; jr < 2; jr++) ar.setFloat32(Wr + 0 + 4 * jr, Qr[jr], !0);
+       return ar.setUint8(Wr + 8, Zr), !0
```

#### 49. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L7044-L7045` → after: `L1143-L1147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1143-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1143-L1147) · [Before (L7044-L7045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L7044-L7045)

```diff
-     function ti(RR, JR) {
-       return JR.distance - RR.distance
+     function oQ(rr, Sr, Qr, Zr) {
+       const Wr = rr.Yx(452, Sr, 8);
+       if (Wr < 0) return !1;
+       const ar = rr.view;
+       return ar.setFloat32(Wr + 0, Qr, !0), ar.setUint8(Wr + 4, Zr), !0
```

#### 50. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L7047-L7080` → after: `L1149-L1154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1149-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1149-L1154) · [Before (L7047-L7080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L7047-L7080)

```diff
-     class ui {
-       constructor() {
-         this.left = []
-       }
-       sort(RR, JR) {
-         for (let GR = 0; GR < RR.length; GR++) {
-           const JR = RR[GR].distance;
-           if (JR - JR !== 0) return !1
-         }
-         return this.sortRange(RR, 0, RR.length, JR), !0
-       }
-       sortRange(RR, JR, GR, yR) {
-         if (GR - JR <= 16) {
-           for (let tR = JR + 1; tR < GR; tR++) {
-             const GR = RR[tR],
-               uR = yR * GR.distance;
- ... (18 more removed lines; see GitHub link above)
+ 
+     function bQ(rr, Sr, Qr, Zr, Wr) {
+       const ar = rr.Yx(454, Sr, 4);
+       if (ar < 0) return !1;
+       const jr = rr.view;
+       return jr.setUint8(ar + 0, Qr), jr.setUint8(ar + 1, Zr), jr.setUint8(ar + 2, Wr), !0
```

#### 51. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L7085-L7103` → after: `L1158-L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1158-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1158-L1162) · [Before (L7085-L7103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L7085-L7103)

```diff
-       let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : JR;
-       const uR = Math.min(JR, GR),
-         ZR = new Uint32Array(XG(yR));
-       for (let qR = 0; qR < yR; qR++) {
-         const JR = Math.floor(qR * uR / yR),
-           GR = Math.max(JR + 1, Math.floor((qR + 1) * uR / yR));
-         for (let iR = 0; iR < yR; iR++) {
-           const fR = Math.floor(iR * uR / yR),
-             VR = Math.max(fR + 1, Math.floor((iR + 1) * uR / yR));
-           let KR = 0;
-           for (let yR = JR; yR < GR; yR++)
-             for (let JR = fR; JR < VR; JR++) RR[yR * tR + JR] >= Zi && KR++;
-           if (2 * KR >= (GR - JR) * (VR - fR)) {
-             const RR = iR + yR * qR;
-             ZR[RR >>> 5] |= 1 << (31 & RR)
-           }
- ... (3 more removed lines; see GitHub link above)
+       const Wr = rr.Yx(455, Sr, 40);
+       if (Wr < 0) return !1;
+       const ar = rr.view;
+       for (let jr = 0; jr < 9; jr++) ar.setInt32(Wr + 0 + 4 * jr, Qr[jr], !0);
+       return ar.setUint32(Wr + 36, Zr, !0), !0
```

#### 52. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L7106-L7107` → after: `L1165-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1165-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1165-L1169) · [Before (L7106-L7107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L7106-L7107)

```diff
-     function ii(RR) {
-       return Math.max(1, Math.min(16, RR))
+     function DQ(rr, Sr, Qr, Zr) {
+       const Wr = rr.Yx(456, Sr, 8);
+       if (Wr < 0) return !1;
+       const ar = rr.view;
+       return ar.setFloat32(Wr + 0, Qr, !0), ar.setUint8(Wr + 4, Zr), !0
```

#### 53. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L7109-L7273` → after: `L1171-L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1171-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1171-L1178) · [Before (L7109-L7273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L7109-L7273)

```diff
-     class fi {
-       constructor(RR, JR) {
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
-         this.sink = RR, this.loadTexture = JR, this.warn = GR, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise. … [truncated]
-       }
-       update(RR, JR) {
-         return (RR.FY !== this.builtVersion || this.blockCaster.length !== JR) && (this.build(RR, JR), !0)
-       }
-       build(RR, JR) {
-         this.builtVersion = RR.FY;
-         const GR = new Uint16Array(JR),
-           yR = new Map;
-         for (let tR = 1; tR < JR; tR++) {
-           const JR = this.classify(RR, tR, yR);
-           if (null === JR || JR === nG) {
-             GR[tR] = null === JR ? 0 : nG;
- ... (149 more removed lines; see GitHub link above)
+ 
+     function dQ(rr, Sr, Qr, Zr, Wr) {
+       const ar = rr.Yx(457, Sr, 16);
+       if (ar < 0) return !1;
+       const jr = rr.view;
+       for (let Ir = 0; Ir < 3; Ir++) jr.setInt32(ar + 0 + 4 * Ir, Qr[Ir], !0);
+       for (let Ir = 0; Ir < 3; Ir++) jr.setInt8(ar + 12 + 1 * Ir, Zr[Ir]);
+       return jr.setUint8(ar + 15, Wr), !0
```

#### 54. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L7277-L7278` → after: `L1181-L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1181-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1181-L1185) · [Before (L7277-L7278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L7277-L7278)

```diff
-     function Ki(RR) {
-       return !RR.Na && !RR.zB && !RR.ia
+     function sQ(rr, Sr, Qr, Zr) {
+       const Wr = rr.Yx(530, Sr, 4 + Zr.length);
+       if (Wr < 0) return !1;
+       const ar = rr.view;
+       return ar.setUint8(Wr + 0, Qr), xQ(ar).set(Zr, ar.byteOffset + Wr + 4), !0
```

#### 55. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L7281-L7286` → after: `L1188-L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1188-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1188-L1192) · [Before (L7281-L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L7281-L7286)

```diff
-     function wi() {
-       return {
-         bricks: new Uint32Array(fG),
-         cells: new Uint16Array(32768),
-         special: new Uint8Array(qG)
-       }
+     function uQ(rr, Sr, Qr, Zr, Wr, ar) {
+       const jr = rr.Yx(531, Sr, 12 + ar.length);
+       if (jr < 0) return !1;
+       const Ir = rr.view;
+       return Ir.setFloat32(jr + 0, Qr, !0), Ir.setFloat32(jr + 4, Zr, !0), Ir.setUint32(jr + 8, Wr, !0), xQ(Ir).set(ar, Ir.byteOffset + jr + 12), !0
```

#### 56. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L7288-L7492` → after: `L1194-L1199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1194-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1194-L1199) · [Before (L7288-L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L7288-L7492)

```diff
-     class ri {
-       constructor(RR, JR, GR) {
-         let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
-         this.casters = RR, this.writeVoxels = JR, this.writePool = GR, this.warn = yR, this.eyeChunk = null, this.slotChunk = new Array(JG).fill(null), this.slotVersion = new Float64Array(JG).fill(-1), this.slotPool = new Array(JG).fill(null), this.starved = new Uint8Array(JG), t … [truncated]
-         for (let tR = 0; tR < lG; tR++) this.freePool[tR] = 65535 - tR
-       }
-       get queuedCount() {
-         return this.queue.length
-       }
-       get poolInUse() {
-         return lG - this.freeCount
-       }
-       chunkAdded(RR) {
-         if (null === this.eyeChunk || !this.inRadius(RR.i, RR.j, RR.k)) return;
-         const JR = eG(RR.i, RR.j, RR.k);
-         this.slotChunk[JR] = RR, this.slotVersion[JR] = -1, this.enqueue(JR)
- ... (189 more removed lines; see GitHub link above)
+ 
+     function rZ(rr, Sr, Qr, Zr, Wr, ar) {
+       const jr = rr.Yx(532, Sr, 12 + ar.length);
+       if (jr < 0) return !1;
+       const Ir = rr.view;
+       return Ir.setInt32(jr + 0, Qr, !0), Ir.setInt32(jr + 4, Zr, !0), Ir.setUint32(jr + 8, Wr, !0), xQ(Ir).set(ar, Ir.byteOffset + jr + 12), !0
```

#### 57. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L7494-L7623` → after: `L1201-L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1201-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1201-L1206) · [Before (L7494-L7623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L7494-L7623)

```diff
-     var ei = GR(38532);
-     class ai {
-       constructor(RR) {
-         this.device = RR, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new PG, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.NK = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = RR.createBuffer( … [truncated]
-           label: "sun-shadow-entities",
-           size: 589828,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.gridBuffer = RR.createBuffer({
-           label: "sun-shadow-entity-grids",
-           size: 16777216,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         })
-       }
-       update(RR, JR, GR) {
-         this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
-         const {
- ... (114 more removed lines; see GitHub link above)
+ 
+     function SZ(rr, Sr, Qr, Zr, Wr) {
+       const ar = rr.Yx(533, Sr, 8 + Wr.length);
+       if (ar < 0) return !1;
+       const jr = rr.view;
+       return jr.setInt32(ar + 0, Qr, !0), jr.setInt32(ar + 4, Zr, !0), xQ(jr).set(Wr, jr.byteOffset + ar + 8), !0
```

#### 58. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L7628-L7641` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1210) · [Before (L7628-L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L7628-L7641)

```diff
-       return RR[0] * JR[0] + RR[1] * JR[1] + RR[2] * JR[2] < Li
-     }
-     async function Ui(RR) {
-       const {
-         pixels: JR,
-         width: GR,
-         height: yR
-       } = await RJ(RR), tR = new Uint8Array(GR * yR);
-       for (let uR = 0; uR < tR.length; uR++) tR[uR] = JR[4 * uR + 3];
-       return {
-         width: GR,
-         height: yR,
-         alpha: tR
-       }
+       return !(rr.Yx(576, Sr, 0) < 0)
```

#### 59. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L7643-L7940` → after: `L1212-L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1212-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1212-L1220) · [Before (L7643-L7940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L7643-L7940)

```diff
-     class Wi {
-       constructor(RR, JR) {
-         this.device = RR, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(jG.p), this.entities = void 0, this.entityStandIn =  … [truncated]
-           label: "sun-shadow",
-           size: 128,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         }), this.voxelBuffer = RR.createBuffer({
-           label: "sun-shadow-voxels",
-           size: 4 * wG,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.special = RR.createBuffer({
-           label: "sun-shadow-special",
-           size: 9568256,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         });
-         const [GR, yR, tR] = jG.q;
- ... (282 more removed lines; see GitHub link above)
+ 
+     function ZZ(rr, Sr, Qr, Zr, Wr, ar) {
+       const jr = rr.Yx(577, Sr, 36 + ar.length);
+       if (jr < 0) return !1;
+       const Ir = rr.view;
+       Ir.setUint8(jr + 0, Qr);
+       for (let fr = 0; fr < 16; fr++) Ir.setUint8(jr + 4 + 1 * fr, Zr[fr]);
+       for (let fr = 0; fr < 16; fr++) Ir.setUint8(jr + 20 + 1 * fr, Wr[fr]);
+       return xQ(Ir).set(ar, Ir.byteOffset + jr + 36), !0
```

#### 60. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L7950` → after: `L1224-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1224-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1224-L1227) · [Before (L7950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L7950)

```diff
-       RR.drawOffset(JR, yR + Xi), JR[yR + Mi] = RR.drawTime(), GR[yR + Bi] = RR.ring.drawStart(), GR[yR + li] = RR.ring.drawCount()
+       const Wr = rr.Yx(578, Sr, 4 + Zr.length);
+       if (Wr < 0) return !1;
+       const ar = rr.view;
+       return ar.setUint8(Wr + 0, Qr), xQ(ar).set(Zr, ar.byteOffset + Wr + 4), !0
```

#### 61. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L7952-L8022` → after: `L1229-L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1229-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1229-L1234) · [Before (L7952-L8022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L7952-L8022)

```diff
-     const bi = `\n${Py}\n\nconst MAX_STOPS = ${Ci.c}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Ci.c/4}>,\n\tcolor1: array<vec4f, ${Ci.c}>,\n\t … [truncated]
-     var vi = GR(53594);
-     class Oi {
-       constructor(RR, JR, GR, yR) {
-         this.device = RR, this.system = JR, this.frameIndex = GR, this.bindings = yR, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, vi.d)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.bou … [truncated]
-           this.device.queue.writeBuffer(this.ring, RR * Ci.g * 4, this.system.ring.records, RR * Ci.g, (JR - RR) * Ci.g)
-         };
-         const {
-           name: tR
-         } = JR;
-         this.ring = RR.createBuffer({
-           label: `particles-${tR}`,
-           size: JR.ring.records.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.uniforms = RR.createBuffer({
-           label: `particles-uniforms-${tR}`,
- ... (55 more removed lines; see GitHub link above)
+ 
+     function aZ(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
+       const fr = rr.Yx(579, Sr, 36);
+       if (fr < 0) return !1;
+       const Er = rr.view;
+       return Er.setFloat64(fr + 0, Qr, !0), Er.setFloat64(fr + 8, Zr, !0), Er.setFloat64(fr + 16, Wr, !0), Er.setFloat64(fr + 24, ar, !0), Er.setUint16(fr + 32, jr, !0), Er.setUint8(fr + 34, Ir), !0
```

#### 62. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8026-L8140` → after: `L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1238) · [Before (L8026-L8140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8026-L8140)

```diff
-         this.device = RR, this.resources = JR, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(409 … [truncated]
-           order: 251,
-           isTransparent: !0,
-           _worldCenter: [0, 0, 0],
-           bind: (RR, JR) => (this.bindTarget(JR), {
-             renderable: this.renderable,
-             pipeline: bJ(this.device, JR),
-             draw: RR => JR === this.preparedTarget ? this.draw(RR) : 0
-           })
-         }
-       }
-       rebind(RR) {
-         this.device = RR, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
-         for (const [JR, GR] of this.systems) {
-           const yR = new Oi(RR, JR, GR.frameIndex, this.bindings),
-             tR = JR.ring.drawCount();
- ... (99 more removed lines; see GitHub link above)
+         this.core = rr, this.afterCall = Sr
```

#### 63. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8142-L8153` → after: `L1240-L1242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1240-L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1240-L1242) · [Before (L8142-L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8142-L8153)

```diff
-       canDraw(RR) {
-         const JR = this.systems.get(RR),
-           GR = RR.texture ? this.resources.boundTexture(RR.texture) : null;
-         if (!JR || !GR || !this.targetPipelines) return !1;
-         if (JR.texture = GR, JR.pipelines.length = 0, !tJ(RR.blendMode)) return this.warnOnce(`blend:${RR.blendMode}`, `particle blend mode ${RR.blendMode} is not drawn (${RR.name})`), !0;
-         const yR = (0, ER.m)(RR.blendMode);
-         for (const tR of yR) {
-           const RR = this.pipelineFor(tR);
-           if (!1 === RR) return JR.pipelines.length = 0, !0;
-           RR && JR.pipelines.push(RR)
-         }
-         return JR.pipelines.length === yR.length
+       canModify(rr, Sr, Qr) {
+         const Zr = this.core.fIr(rr, Sr, Qr);
+         return this.afterCall(), Zr
```

#### 64. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8155-L8156` → after: `L1244-L1246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1244-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1244-L1246) · [Before (L8155-L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8155-L8156)

```diff
-       disposeStopped(RR) {
-         RR.dispose()
+       terrainBlocked(rr, Sr, Qr, Zr, Wr) {
+         const ar = this.core.rfr(rr, Sr, Qr, Zr, Wr);
+         return this.afterCall(), ar
```

#### 65. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8158-L8160` → after: `L1248-L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1248-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1248-L1250) · [Before (L8158-L8160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8158-L8160)

```diff
-       remove(RR) {
-         const JR = this.systems.get(RR);
-         JR && (this.systems.delete(RR), JR.destroy(), this.freeFrameIndices.push(JR.frameIndex))
+       fR(rr, Sr, Qr, Zr) {
+         const Wr = this.core.vN(rr, Sr, Qr, Zr);
+         return this.afterCall(), Wr
```

#### 66. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8162-L8174` → after: `L1252-L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1252-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1252-L1254) · [Before (L8162-L8174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8162-L8174)

```diff
-       prepare(RR) {
-         const JR = RR.animationRatio || 1;
-         vJ(this.renderable._worldCenter, RR, lJ), this.preparedTarget = this.target, this.draws.length = 0;
-         let GR = 0;
-         for (const yR of this.systems.values()) {
-           const RR = yR.system;
-           if (!RR.animateIfActive(JR)) continue;
-           if (RR.ring.takeUploads(yR.upload), !RR.hasLiveParticles() || 0 === yR.pipelines.length) continue;
-           yR.writeUniforms(this.warnOnce), yR.bind();
-           const tR = 64 * yR.frameIndex;
-           yR.count = RR.ring.drawCount(), gi(RR, this.frameData, this.frameBits, tR), GR = Math.max(GR, tR + 64), this.draws.push(yR)
-         }
-         GR > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, GR)
+       blockData(rr, Sr, Qr) {
+         const Zr = this.core.jIr(rr, Sr, Qr);
+         return this.afterCall(), Zr
```

#### 67. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8176-L8183` → after: `L1256-L1258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1256-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1256-L1258) · [Before (L8176-L8183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8176-L8183)

```diff
-       draw(RR) {
-         let JR = 0,
-           GR = null;
-         for (const yR of this.draws) {
-           RR.setBindGroup(1, yR.bindGroup), RR.setBindGroup(2, this.frameBindGroup, [256 * yR.frameIndex]);
-           for (const tR of yR.pipelines) tR !== GR && (RR.setPipeline(tR), GR = tR), RR.draw(4, yR.count), JR++
-         }
-         return JR
+       cameraSweep(rr, Sr, Qr, Zr, Wr, ar, jr) {
+         const Ir = this.core.Ijr(rr, Sr, Qr, Zr, Wr, ar, jr);
+         return this.afterCall(), Ir
```

#### 68. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8185-L8189` → after: `L1260-L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1260-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1260-L1262) · [Before (L8185-L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8185-L8189)

```diff
-       bindTarget(RR) {
-         this.target = RR;
-         const JR = `${RR._colorFormat}|${RR._depthStencilFormat}|${RR._depthCompare}|${RR._sampleCount}`;
-         let GR = this.pipelines.get(JR);
-         GR || (GR = new Map, this.pipelines.set(JR, GR)), this.targetPipelines = GR
+       hasServerTarget(rr) {
+         const Sr = this.core.KIr(rr);
+         return this.afterCall(), Sr
```

#### 69. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8191-L8233` → after: `L1264-L1266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1264-L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1264-L1266) · [Before (L8191-L8233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8191-L8233)

```diff
-       pipelineFor(RR) {
-         var JR;
-         const GR = this.targetPipelines,
-           yR = GR.get(RR);
-         if (void 0 !== yR) return yR;
-         GR.set(RR, null);
-         const tR = this.target,
-           uR = RR === ER.c,
-           ZR = null !== (JR = tR._depthCompare) && void 0 !== JR ? JR : BJ,
-           {
-             device: qR
-           } = this;
-         return qR.createRenderPipelineAsync({
-           label: `particles-${RR}`,
-           layout: this.pipelineLayout,
-           vertex: {
- ... (27 more removed lines; see GitHub link above)
+       entityInteractable(rr) {
+         const Sr = this.core.tIr(rr);
+         return this.afterCall(), Sr
```

#### 70. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8235-L8243` → after: `L1268-L1270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1268-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1268-L1270) · [Before (L8235-L8243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8235-L8243)

```diff
-       allocateFrameIndex() {
-         const RR = this.freeFrameIndices.pop();
-         if (void 0 !== RR) return RR;
-         const JR = this.nextFrameIndex++;
-         if (64 * (JR + 1) > this.frameData.length) {
-           const RR = new Float32Array(2 * this.frameData.length);
-           RR.set(this.frameData), this.frameData = RR, this.frameBits = new Uint32Array(RR.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
-         }
-         return JR
+       entityCrouching(rr) {
+         const Sr = this.core.UIr(rr);
+         return this.afterCall(), Sr
```

#### 71. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8245-L8250` → after: `L1272-L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1272-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1272-L1274) · [Before (L8245-L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8245-L8250)

```diff
-       createFrameBuffer() {
-         return this.device.createBuffer({
-           label: "particles-frames",
-           size: this.frameData.byteLength,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
+       entityDrawn(rr) {
+         const Sr = this.core.mjr(rr);
+         return this.afterCall(), Sr
```

#### 72. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8252-L8263` → after: `L1276-L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1276-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1276-L1278) · [Before (L8252-L8263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8252-L8263)

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
+       predictServerPosition(rr, Sr, Qr, Zr) {
+         const Wr = this.core.qIr(rr, Sr, Qr, Zr);
+         return this.afterCall(), Wr
```

#### 73. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8265-L8293` → after: `L1280-L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1280-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1280-L1282) · [Before (L8265-L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8265-L8293)

```diff
-     }
-     class Ni {
-       constructor(RR, JR, GR, yR, tR) {
-         this.lite = RR, this.canvas = JR, this.info = GR, this.resources = tR, this.LtR = !1, this.needPOTTextures = !1, this.rRR = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
-           reset: () => {
-             this.lastFrameTime = null
-           }
-         }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = JR.width, this.renderHeight = JR.height, this.caps = {
-           maxTextureSize: yR.maxTextureDimension2D,
-           texture2DArrayMaxLayerCount: yR.maxTextureArrayLayers
-         }
-       }
-       getCaps() {
-         return this.caps
-       }
-       detach() {
- ... (13 more removed lines; see GitHub link above)
+       setOtherEntitySetting(rr, Sr, Qr) {
+         const Zr = this.core.xjr(rr, Sr, Qr);
+         return this.afterCall(), Zr
```

#### 74. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8295-L8316` → after: `L1284-L1286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1284-L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1284-L1286) · [Before (L8295-L8316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8295-L8316)

```diff
-       setSize(RR, JR) {
-         if (this.renderWidth === RR && this.renderHeight === JR) return !1;
-         const GR = this.renderWidth,
-           yR = this.renderHeight;
-         this.renderWidth = RR, this.renderHeight = JR;
-         const tR = this.lite;
-         if (null === tR) return !0;
-         try {
-           (0, mR.q)(tR, RR, JR)
-         } catch (uR) {
-           if (uR instanceof DOMException && "InvalidStateError" === uR.name) {
-             this.renderWidth = GR, this.renderHeight = yR;
-             try {
-               (0, mR.q)(tR, GR, yR)
-             } catch {
-               this.canvas.width = GR, this.canvas.height = yR
- ... (6 more removed lines; see GitHub link above)
+       entityInfoBatch(rr) {
+         const Sr = this.core.tjr(rr);
+         return this.afterCall(), Sr
```

#### 75. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8318-L8320` → after: `L1288-L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1288-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1288-L1290) · [Before (L8318-L8320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8318-L8320)

```diff
-       resize() {}
-       getRenderingCanvas() {
-         return this.canvas
+       entityName(rr) {
+         const Sr = this.core.hIr(rr);
+         return this.afterCall(), Sr
```

#### 76. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8322-L8346` → after: `L1292-L1294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1292-L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1292-L1294) · [Before (L8322-L8346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8322-L8346)

```diff
-       getInfo() {
-         return this.info
-       }
-       yX() {
-         const RR = performance.now();
-         this.deltaTime = null === this.lastFrameTime ? 0 : RR - this.lastFrameTime, this.lastFrameTime = RR
-       }
-       getDeltaTime() {
-         return this.deltaTime
-       }
-       createCanvas(RR, JR) {
-         const GR = document.createElement("canvas");
-         return GR.width = RR, GR.height = JR, GR
-       }
-       LRR(RR, JR) {
-         var GR;
- ... (9 more removed lines; see GitHub link above)
+       hasEffect(rr, Sr) {
+         const Qr = this.core.eIr(rr, Sr);
+         return this.afterCall(), Qr
```

#### 77. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8348-L8352` → after: `L1296-L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1296-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1296-L1298) · [Before (L8348-L8352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8348-L8352)

```diff
-       copyFromView(RR) {
-         this.fov = RR.fov, this.nearPlane = RR.near, this.farPlane = RR.far;
-         const JR = RR.worldMatrix;
-         for (let GR = 0; GR < 16; GR++)
-           if (this.worldMatrix[GR] !== JR[GR]) return this.worldMatrix.set(JR), void this.worldMatrixVersion++
+       scratchPtr() {
+         const rr = this.core.Zjr();
+         return this.afterCall(), rr
```

#### 78. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8354-L8370` → after: `L1300-L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1300-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1300-L1302) · [Before (L8354-L8370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8354-L8370)

```diff
-     }
-     class Hi {
-       constructor(RR, JR, GR, yR) {
-         this.canvas = JR, this.options = GR, this.JyR = void 0, this.backendName = "WebGPU (Lite)", this.DRR = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new Di, this.lastFrameTime = 0, this.engine = void 0, this.tL = void 0 … [truncated]
-         const {
-           resources: tR,
-           meshes: uR
-         } = RR;
-         this.resources = tR, this.particles = RR.particles, this.JyR = new Ni(RR.engine, JR, yR, RR.device.limits, tR), (0, gR.F)({
-           Qq: RR => {
-             xR(RR) && tR.textureSlot(RR)
-           },
-           loaded: RR => xR(RR) ? tR.textureLoaded(RR) : null,
-           canvasUpdated: (RR, JR, GR) => {
-             xR(RR) && tR.canvasUpdated(RR, JR, GR)
-           }
- ... (1 more removed lines; see GitHub link above)
+       invSwap(rr, Sr) {
+         const Qr = this.core.LIr(rr, Sr);
+         return this.afterCall(), Qr
```

#### 79. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8372-L8373` → after: `L1304-L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1304-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1304-L1306) · [Before (L8372-L8373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8372-L8373)

```diff
-       get gpuDevice() {
-         return this.device
+       invMove(rr, Sr, Qr) {
+         const Zr = this.core.TIr(rr, Sr, Qr);
+         return this.afterCall(), Zr
```

#### 80. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8375-L8376` → after: `L1308-L1310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1308-L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1308-L1310) · [Before (L8375-L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8375-L8376)

```diff
-       get deviceLost() {
-         return this.refusals.deviceLost
+       invQuickMove(rr, Sr, Qr, Zr) {
+         const Wr = this.core.vIr(rr, Sr, Qr, Zr);
+         return this.afterCall(), Wr
```

#### 81. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8378-L8379` → after: `L1312-L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1312-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1312-L1314) · [Before (L8378-L8379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8378-L8379)

```diff
-       get terrain() {
-         return this.liteTerrain
+       invRemove(rr, Sr, Qr) {
+         const Zr = this.core.OIr(rr, Sr, Qr);
+         return this.afterCall(), Zr
```

#### 82. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8381-L8387` → after: `L1316-L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1316-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1316-L1318) · [Before (L8381-L8387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8381-L8387)

```diff
-       install(RR) {
-         this.engine = RR.engine, this.tL = RR.tL, this.sceneTask = RR.sceneTask, this.device = RR.device, this.liteTerrain = RR.terrain, this.meshes = RR.meshes, this.sunShadow = RR.sunShadow;
-         const JR = new jR(RR.device.lost);
-         this.refusals = JR, JR.deviceLost.then((() => {
-           var JR;
-           JR = RR.device, iJ.add(JR)
-         })), RR.tL.camera = this.camera
+       invEnchant(rr, Sr, Qr, Zr, Wr) {
+         const ar = this.core.BIr(rr, Sr, Qr, Zr, Wr);
+         return this.afterCall(), ar
```

#### 83. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8389-L8427` → after: `L1320-L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1320-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1320-L1322) · [Before (L8389-L8427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8389-L8427)

```diff
-       async rebuild() {
-         var RR, JR, GR, yR, tR;
-         const uR = await Ii();
-         this.halted = !0, this.liteTerrain.retire(), null === (RR = this.sunShadow) || void 0 === RR || RR.dispose(), this.JyR.detach();
-         try {
-           (0, zR.d)(this.engine)
-         } catch (VR) {
-           console.warn("Lite: disposing the lost device's engine threw", VR)
-         }
-         const ZR = {
-             width: this.JyR.renderWidth,
-             height: this.JyR.renderHeight
-           },
-           qR = await mi(this.canvas, this.options, ZR, uR),
-           iR = AJ(qR),
-           fR = zi(iR);
- ... (23 more removed lines; see GitHub link above)
+       craft(rr, Sr, Qr) {
+         const Zr = this.core.craft(rr, Sr, Qr);
+         return this.afterCall(), Zr
```

#### 84. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8429-L8435` → after: `L1324-L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1324-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1324-L1326) · [Before (L8429-L8435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8429-L8435)

```diff
-       whenTerrainDrawn() {
-         return new Promise(((RR, JR) => {
-           this.firstTerrain = {
-             drawn: RR,
-             failed: JR
-           }
-         }))
+       salvage(rr, Sr, Qr) {
+         const Zr = this.core.salvage(rr, Sr, Qr);
+         return this.afterCall(), Zr
```

#### 85. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8437-L8439` → after: `L1328-L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1328-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1328-L1330) · [Before (L8437-L8439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8437-L8439)

```diff
-       get castsEntitySunShadows() {
-         var RR, JR;
-         return null !== (RR = null === (JR = this.sunShadow) || void 0 === JR ? void 0 : JR.tracesEntities) && void 0 !== RR && RR
+       selectSlot(rr) {
+         const Sr = this.core.GIr(rr);
+         return this.afterCall(), Sr
```

#### 86. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8441-L8442` → after: `L1332-L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1332-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1332-L1334) · [Before (L8441-L8442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8441-L8442)

```diff
-       get sampleCount() {
-         return this.engine.msaaSamples
+       closeChest() {
+         const rr = this.core.EIr();
+         return this.afterCall(), rr
```

#### 87. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8444-L8449` → after: `L1336-L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1336-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1336-L1338) · [Before (L8444-L8449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8444-L8449)

```diff
-       attach(RR) {
-         this.lK = RR, this.modelMeshes.attach(RR.model, RR.sceneMirror);
-         const JR = RR.tL;
-         this.setClearColour(JR.clearColor.r, JR.clearColor.g, JR.clearColor.b), JR.draw = () => {
-           this.drawFrame(RR, JR)
-         }
+       itemAttributesBatch(rr) {
+         const Sr = this.core.Ujr(rr);
+         return this.afterCall(), Sr
```

#### 88. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8451-L8452` → after: `L1340-L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1340-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1340-L1342) · [Before (L8451-L8452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8451-L8452)

```diff
-       get CK() {
-         return !this.refusals.lost && !this.halted
+       itemNames() {
+         const rr = this.core.uH();
+         return this.afterCall(), rr
```

#### 89. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8454-L8462` → after: `L1344-L1346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1344-L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1344-L1346) · [Before (L8454-L8462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8454-L8462)

```diff
-       render(RR) {
-         if (this.CK) {
-           try {
-             this.JyR.yX(), RR.tL.render()
-           } catch (JR) {
-             throw this.refusals.frameFailed(JR), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(JR), this.firstTerrain = null), JR
-           }
-           this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
-         }
+       blockProps() {
+         const rr = this.core.IIr();
+         return this.afterCall(), rr
```

#### 90. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8464-L8465` → after: `L1348-L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1348-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1348-L1350) · [Before (L8464-L8465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8464-L8465)

```diff
-       lastFrameDrawCalls() {
-         return this.engine.drawCallCount
+       itemProps() {
+         const rr = this.core.lIr();
+         return this.afterCall(), rr
```

#### 91. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8467-L8475` → after: `L1352-L1354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1352-L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1352-L1354) · [Before (L8467-L8475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8467-L8475)

```diff
-       describePendingWork() {
-         var RR, JR, GR, yR;
-         const tR = [...this.particles.describePendingWork(), ...null !== (RR = null === (JR = this.sunShadow) || void 0 === JR ? void 0 : JR.describePendingWork()) && void 0 !== RR ? RR : []],
-           uR = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (GR = this.terrain.sceneDepth) && void 0 !== GR && GR.compiling ? 1 : 0) + (null !== (yR = this.terrain.shadowMask) && void 0 !== yR && yR.compiling ? 1 : 0);
-         uR > 0 && tR.push(`${uR} Lite pipelines compiling`);
-         const ZR = this.terrain.buffersAwaitingVerdict;
-         ZR > 0 && tR.push(`${ZR} Lite terrain buffers awaiting their out-of-memory verdict`);
-         const qR = this.resources.texturesLoading;
-         return qR > 0 && tR.push(`${qR} Lite textures loading`), tR
+       salvageRecipe(rr) {
+         const Sr = this.core.zjr(rr);
+         return this.afterCall(), Sr
```

#### 92. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8477-L8478` → after: `L1356-L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1356-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1356-L1358) · [Before (L8477-L8478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8477-L8478)

```diff
-       prepareTexture(RR) {
-         return null !== this.resources.boundTexture(RR) || this.resources.textureFailed(RR)
+       craftingView(rr, Sr, Qr) {
+         const Zr = this.core.Njr(rr, Sr, Qr);
+         return this.afterCall(), Zr
```

#### 93. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8480-L8491` → after: `L1360-L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1360-L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1360-L1362) · [Before (L8480-L8491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8480-L8491)

```diff
-       drawFrame(RR, JR) {
-         var GR, yR, tR, uR, ZR, qR;
-         const iR = Uq(RR);
-         this.camera.copyFromView(iR), this.setClearColour(iR.clearColour[0], iR.clearColour[1], iR.clearColour[2]), null === (GR = this.sunShadow) || void 0 === GR || GR.prepare(RR.xw, iR.eye, null !== (yR = RR.xw.Be) && void 0 !== yR ? yR : null), this.terrain.prepare(RR, iR), n … [truncated]
-         const fR = performance.now();
-         this.resources.flushUploads(), null === (qR = this.sunShadow) || void 0 === qR || qR.traceEntities(this.meshes);
-         try {
-           (0, mR.o)(this.engine, this.lastFrameTime > 0 ? fR - this.lastFrameTime : 0)
-         } finally {
-           this.resources.endUploadFrame()
-         }
-         this.lastFrameTime = fR, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(fR), this.firstTerrain = null)
+       directorView() {
+         const rr = this.core.ajr();
+         return this.afterCall(), rr
```

#### 94. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8493-L8495` → after: `L1364-L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1364-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1364-L1366) · [Before (L8493-L8495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8493-L8495)

```diff
-       setClearColour(RR, JR, GR) {
-         const yR = this.tL.clearColor;
-         yR.r = RR, yR.g = JR, yR.b = GR, yR.a = 1
+       directorDefaultPose() {
+         const rr = this.core.fjr();
+         return this.afterCall(), rr
```

#### 95. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8497-L8503` → after: `L1368-L1370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1368-L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1368-L1370) · [Before (L8497-L8503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8497-L8503)

```diff
-     }
- 
-     function oi(RR) {
-       const JR = {};
-       for (const GR in RR.limits) {
-         const yR = RR.limits[GR];
-         "number" === typeof yR && (JR[GR] = yR)
+       directorEntity(rr) {
+         const Sr = this.core.jjr(rr);
+         return this.afterCall(), Sr
```

#### 96. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8505-L8534` → after: `L1372-L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1372-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1372-L1374) · [Before (L8505-L8534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8505-L8534)

```diff
-       return JR
-     }
-     const ci = "WebGPU device lost while Lite was starting";
-     async function Pi(RR, JR) {
-       const GR = await Ii(),
-         yR = GR.info,
-         tR = {
-           vendor: (null === yR || void 0 === yR ? void 0 : yR.vendor) || "unknown vendor",
-           renderer: (null === yR || void 0 === yR ? void 0 : yR.architecture) || "unknown renderer",
-           version: (null === yR || void 0 === yR ? void 0 : yR.description) || "unknown version"
-         };
-       RR.style.background = "black";
-       const uR = await mi(RR, JR, JR.bufferSize, GR),
-         ZR = AJ(uR),
-         qR = zi(ZR);
-       try {
- ... (14 more removed lines; see GitHub link above)
+       directorPose(rr, Sr, Qr, Zr, Wr, ar) {
+         const jr = this.core.Ejr(rr, Sr, Qr, Zr, Wr, ar);
+         return this.afterCall(), jr
```

#### 97. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8536-L8553` → after: `L1376-L1378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1376-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1376-L1378) · [Before (L8536-L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8536-L8553)

```diff
-     }
-     async function Ii() {
-       const RR = await navigator.gpu.requestAdapter({
-         powerPreference: "high-performance"
-       });
-       if (!RR) throw (0, Gq.h)(new Error("No WebGPU adapter"), "no_adapter");
-       return RR
-     }
-     async function mi(RR, JR, GR, yR) {
-       let tR;
-       try {
-         tR = await (0, mR.h)(RR, {
-           msaaSamples: JR.xyR ? 4 : 1,
-           requiredLimits: oi(yR),
-           alphaMode: "premultiplied"
-         })
- ... (2 more removed lines; see GitHub link above)
+       passTimings(rr) {
+         const Sr = this.core.HIr(rr);
+         return this.afterCall(), Sr
```

#### 98. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8555-L8601` → after: `L1380-L1382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR1380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L1380-L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/307.js#L1380-L1382) · [Before (L8555-L8601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/307.js#L8555-L8601)

```diff
-       var uR;
-       return null !== GR && (0, mR.q)(tR, GR.width, GR.height), tR
-     }
- 
-     function zi(RR) {
-       let JR = null;
-       return RR.lost.then((RR => {
-         JR = RR, console.error(`WebGPU device lost (${RR.reason}): ${RR.message}`)
-       })), () => JR
-     }
-     async function Si(RR, JR, GR, yR) {
-       var tR, uR;
-       let {
-         sceneDepth: ZR,
-         sunShadow: qR
-       } = GR;
- ... (31 more removed lines; see GitHub link above)
+       drawCensus() {
+         const rr = this.core.NIr();
+         return this.afterCall(), rr
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/308.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/308.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e)

#### 1. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/308.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/308.js#L4-L6)

```diff
-   42584: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       BloxdInformation: () => rR
+   54130: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => hr,
+       f: () => Ir,
+       j: () => jr,
+       l: () => Er
```

#### 2. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L8-L16` → after: `L11-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L11-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/308.js#L11-L34) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/308.js#L8-L16)

```diff
-     var yR = GR(1270),
-       tR = GR(66),
-       uR = GR(103),
-       ZR = GR(1590),
-       qR = GR(134),
-       iR = GR(1468),
-       fR = GR(1378);
-     const VR = (0, tR.lazy)((() => Promise.all([GR.e(146), GR.e(711)]).then((() => GR(7654))))),
-       KR = (0, tR.lazy)((() => GR.e(148).then((() => GR(7675)))));
+     var Zr = Qr(38679),
+       Wr = Qr(40284),
+       ar = Qr(40276);
+ 
+     function jr(rr, Sr, Qr, Zr) {
+       const Wr = ar.s;
+       Sr.fill(0), rr.gravity.toArray(Sr, Wr.gravity), rr.colorDead.toArray(Sr, Wr.colorDead), Qr[Wr.ramp] = rr.useRampGradients ? 1 : 0;
+       const jr = rr.getColorGradients(),
+         Ir = mr(rr, jr, "colour", Zr);
+       Qr[Wr.colorCount] = Ir;
+       for (let ar = 0; ar < Ir; ar++) {
+         var fr;
+         const rr = jr[Nr(jr, ar)];
+         Sr[Wr.colorPositions + ar] = rr.gradient, rr.color1.toArray(Sr, Wr.color1 + 4 * ar), (null !== (fr = rr.color2) && void 0 !== fr ? fr : rr.color1).toArray(Sr, Wr.color2 + 4 * ar)
+       }
+       const Er = rr.getVelocityGradients(),
+ ... (8 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L19-L75` → after: `L37-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L37-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/308.js#L37-L451) · [Before (L19-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/308.js#L19-L75)

```diff
-       return (0, fR.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, fR.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: "Security Exploit Bounty Program"
-         }), (0, fR.jsx)("p", {
-           children: "We have a program for reporting security exploits. Find an important security flaw in Bloxd? Report it through the process below. Please include steps to reproduce the exploit, including any relevant code if the exploit requires it. You will receive the rewar … [truncated]
-         }), (0, fR.jsx)("h3", {
-           children: "1. How to Report"
-         }), (0, fR.jsxs)("p", {
-           children: ["Please follow the instructions on", " ", (0, fR.jsx)("a", {
-             href: "https://forms.gle/wUL8WiH3LbGiJBzF7",
-             target: "_blank",
-             rel: "noreferrer",
-             children: "this form"
-           }), " ", "to report the exploit."]
- ... (41 more removed lines; see GitHub link above)
+       return {
+         key: [],
+         texels: new Uint8Array(4 * ar.m)
+       }
+     }
+     const fr = [];
+ 
+     function Er(rr, Sr) {
+       return pr(rr, fr), !zr(fr, Sr.key) && (Sr.key.length = 0, Sr.key.push(...fr), Sr.key.length > 0 && function(rr, Sr) {
+         for (let Qr = 0; Qr < ar.m; Qr++) Wr.j.GetCurrentGradient(Qr / ar.m, rr, ((rr, Sr, Qr) => {
+           Zr.Color3.LerpToRef(rr.color, Sr.color, Qr, xr)
+         })), Sr[4 * Qr] = 255 * xr.r, Sr[4 * Qr + 1] = 255 * xr.g, Sr[4 * Qr + 2] = 255 * xr.b, Sr[4 * Qr + 3] = 255
+       }(rr.getRampGradients(), Sr.texels), !0)
+     }
+ 
+     function pr(rr, Sr) {
+ ... (399 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L77-L79` → after: `L453-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L453-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/308.js#L453-L818) · [Before (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/308.js#L77-L79)

```diff
-         }), (0, fR.jsx)("p", {
-           children: "A: Yes, as long as you follow the rules laid out with respect to the exploit you are reporting. I.e. don't abuse or share the exploit, etc."
-         })]
+         };
+       Ir(Sr, 0, Qr, Zr);
+       let fr = 1;
+       for (const Er of function*(rr, Sr, Qr, Zr) {
+           let Wr = rr,
+             ar = Sr,
+             jr = Qr;
+           for (; ar > 1 || jr > 1;) {
+             const rr = Math.max(1, ar >> 1),
+               Sr = Math.max(1, jr >> 1),
+               Qr = new Uint8Array(rr * Sr * Zr * 4),
+               Ir = 4 * ar;
+             let fr = 0;
+             for (let Er = 0; Er < Zr; Er++) {
+               const Zr = Er * Ir * jr;
+               for (let Er = 0; Er < Sr; Er++) {
+ ... (350 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L83` → after: `L826-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L826-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/308.js#L826-L920) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/308.js#L83)

```diff
-     function rR() {
+     function lS(rr, Sr) {
+       let Qr = LS.get(rr);
+       if (!Qr) {
+         Qr = {
+           module: rr.createShaderModule({
+             label: "placeholder",
+             code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
+           }),
+           pipelines: new Map
+         }, LS.set(rr, Qr)
+       }
+       const Zr = `${Sr._colorFormat}|${Sr._depthStencilFormat}|${Sr._sampleCount}`;
+       let Wr = Qr.pipelines.get(Zr);
+       if (!Wr) {
+         var ar;
+         const {
+ ... (79 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L85-L93` → after: `L922-L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L922-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/308.js#L922-L969) · [Before (L85-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/308.js#L85-L93)

```diff
-         t: RR
-       } = (0, yR.A)(), [JR, GR] = (0, tR.useState)("partnersAndCredits"), rR = {
-         partnersAndCredits: {
-           title: uR.featureFlags.usePartnerLinks ? RR("homePage:partnersAndCredits") : RR("homePage:credits"),
-           content: (0, fR.jsxs)(fR.Fragment, {
-             children: [(0, fR.jsx)("div", {
-               className: "BloxdInformationHeader FullyFancyText",
-               children: uR.featureFlags.usePartnerLinks ? RR("homePage:partnersAndCredits") : RR("homePage:credits")
-             }), uR.featureFlags.usePartnerLinks && "\n\t\t\t\t\tPartners:\n\n\t\t\t\t\tcrazygames.com - https://www.crazygames.com/c/io\n\t\t\t\t\tnow.gg - https://now.gg/\n\t\t\t\t\tminijuegos.com - https://www.minijuegos.com/\n\t\t\t\t\tkevin.games - https://kevin.games/\n\t\t\ … [truncated]
+         A: Sr,
+         B: Qr,
+         C: Zr,
+         D: Wr,
+         E: ar,
+         F: jr
+       } = kS;
+       return (rr * (Sr * rr + Zr * Qr) + Wr * ar) / (rr * (Sr * rr + Qr) + Wr * jr) - ar / jr
+     }(1e3);
+ 
+     function VS(rr, Sr, Qr) {
+       return Math.min(Math.max(rr, Sr), Qr)
+     }
+     const iS = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;
+ 
+     function wS(rr, Sr) {
+ ... (32 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L96-L103` → after: `L1004-L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1004-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/308.js#L1004-L1038) · [Before (L96-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/308.js#L96-L103)

```diff
-         bloxdIngameRules: {
-           title: RR("homePage:bloxdIngameRules"),
-           content: (0, fR.jsxs)(fR.Fragment, {
-             children: [(0, fR.jsx)("div", {
-               className: "BloxdInformationHeader FullyFancyText",
-               children: RR("homePage:bloxdIngameRules")
-             }), "\n\t\t\t\t\t1. Be respectful of others.\n\n\t\t\t\t\t2. Don't harass or bully other players.\n\n\t\t\t\t\t3. Discriminatory jokes and hate speech (attacks on an individual or group based on their race, ethnicity, national origin, sex, gender, sexual orientation,  … [truncated]
-           })
+         fr = () => {
+           const rr = jr();
+           if ("!" === rr) return !fr();
+           if ("(" === rr) {
+             const rr = pr();
+             return jr(), rr
+           }
+           if ("defined" === rr) {
+             const rr = "(" === ar();
+             rr && jr();
+             const Qr = jr();
+             return rr && jr(), Sr.has(Qr)
+           }
+           const Qr = ar();
+           if ("==" === Qr || "!=" === Qr || ">" === Qr || "<" === Qr || ">=" === Qr || "<=" === Qr) {
+             jr();
+ ... (19 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L105-L110` → after: `L1040-L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1040-L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/308.js#L1040-L1048) · [Before (L105-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/308.js#L105-L110)

```diff
-         privacyPolicy: {
-           title: RR("homePage:privacyPolicy"),
-           content: (0, fR.jsx)(tR.Suspense, {
-             fallback: null,
-             children: (0, fR.jsx)(VR, {})
-           })
+         Er = () => {
+           let rr = fr();
+           for (;
+             "&&" === ar();) {
+             jr();
+             const Sr = fr();
+             rr = rr && Sr
+           }
+           return rr
```

#### 9. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L112-L117` → after: `L1050-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1050-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/308.js#L1050-L1058) · [Before (L112-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/308.js#L112-L117)

```diff
-         termsOfService: {
-           title: RR("homePage:termsOfService"),
-           content: (0, fR.jsx)(tR.Suspense, {
-             fallback: null,
-             children: (0, fR.jsx)(KR, {})
-           })
+         pr = () => {
+           let rr = Er();
+           for (;
+             "||" === ar();) {
+             jr();
+             const Sr = Er();
+             rr = rr || Sr
+           }
+           return rr
```

#### 10. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L119-L150` → after: `L1060-L1948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1060-L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/308.js#L1060-L1948) · [Before (L119-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/308.js#L119-L150)

```diff
-         securityExploitBounties: {
-           title: RR("homePage:securityExploitBounties"),
-           content: (0, fR.jsx)(wR, {})
-         }
-       };
-       return (0, fR.jsxs)("div", {
-         className: "BloxdInformation",
-         children: [(0, fR.jsxs)("div", {
-           className: "BloxdInformationSectionList",
-           children: [Object.keys(rR).map((yR => (0, fR.jsx)(ZR.U, {
-             active: JR === yR,
-             onClick: () => {
-               GR(yR)
-             },
-             children: RR(rR[yR].title)
-           }, yR))), uR.featureFlags.usePartnerLinks && (0, fR.jsx)(fR.Fragment, {
- ... (16 more removed lines; see GitHub link above)
+         xr = pr();
+       if (Wr !== Zr.length) throw new Error(`Cannot evaluate #if ${rr}`);
+       return xr
+     }
+     var oS = Qr(38813),
+       bS = Qr(38921),
+       JS = Qr(38930),
+       DS = Qr(42673),
+       dS = Qr(40336);
+     const sS = 32,
+       uS = [10, 3, 10],
+       rQ = [21, 7, 21],
+       SQ = rQ[0] * rQ[1] * rQ[2],
+       QQ = 0,
+       ZQ = 1,
+       WQ = 2,
+ ... (873 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/309.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/309.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868)

#### 1. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/309.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/309.js#L4)

```diff
-   42594: (RR, JR, GR) => {
+   42914: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/309.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/309.js#L6-L7)

```diff
-       blankPhotoCode: () => iR,
-       reportBlankPhoto: () => fR
+       BloxdInformation: () => Nr
```

#### 3. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L9-L13` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/309.js#L8-L16) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/309.js#L9-L13)

```diff
-     var yR = GR(1972),
-       tR = GR(1397),
-       uR = GR(103),
-       ZR = GR(304),
-       qR = GR(5201);
+     var Zr = Qr(1251),
+       Wr = Qr(72),
+       ar = Qr(109),
+       jr = Qr(1576),
+       Ir = Qr(139),
+       fr = Qr(1448),
+       Er = Qr(1338);
+     const pr = (0, Wr.lazy)((() => Promise.all([Qr.e(146), Qr.e(712)]).then((() => Qr(7482))))),
+       xr = (0, Wr.lazy)((() => Qr.e(148).then((() => Qr(7496)))));
```

#### 4. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L15-L16` → after: `L18-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L18-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/309.js#L18-L80) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/309.js#L15-L16)

```diff
-     function iR(RR, JR, GR, yR, tR) {
-       return `${RR}-${JR}-${null===GR?"noloss":GR>=yR?"loss_photo":`loss_${(0,qR.i)(yR-GR)}`}-${tR}`
+     function mr() {
+       return (0, Er.jsxs)("div", {
+         className: "LegalText",
+         children: [(0, Er.jsx)("div", {
+           className: "BloxdInformationHeader FullyFancyText",
+           children: "Security Exploit Bounty Program"
+         }), (0, Er.jsx)("p", {
+           children: "We have a program for reporting security exploits. Find an important security flaw in Bloxd? Report it through the process below. Please include steps to reproduce the exploit, including any relevant code if the exploit requires it. You will receive the rewar … [truncated]
+         }), (0, Er.jsx)("h3", {
+           children: "1. How to Report"
+         }), (0, Er.jsxs)("p", {
+           children: ["Please follow the instructions on", " ", (0, Er.jsx)("a", {
+             href: "https://forms.gle/wUL8WiH3LbGiJBzF7",
+             target: "_blank",
+             rel: "noreferrer",
+             children: "this form"
+ ... (47 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L19-L24` → after: `L83-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L83-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/309.js#L83-L151) · [Before (L19-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/309.js#L19-L24)

```diff
-     function fR(RR, JR, GR, qR) {
-       var fR, VR;
-       const KR = (0, uR.getOperatingSystem)(),
-         wR = "ios" === KR ? `ios_${(0,ZR.d)()}` : KR,
-         rR = iR(null !== (fR = null === (VR = (0, tR.J)().gameRender()) || void 0 === VR ? void 0 : VR.renderer) && void 0 !== fR ? fR : "unknown", wR, qR, GR, JR);
-       (0, yR.reportClientError)("photo_blank", new Error(`Screenshot mode's photo came out blank ${RR} times on ${(0,uR.getBrowserName)()}, then ${JR}`), rR)
+     function Nr() {
+       const {
+         t: rr
+       } = (0, Zr.E)(), [Sr, Qr] = (0, Wr.useState)("partnersAndCredits"), Nr = {
+         partnersAndCredits: {
+           title: ar.featureFlags.usePartnerLinks ? rr("homePage:partnersAndCredits") : rr("homePage:credits"),
+           content: (0, Er.jsxs)(Er.Fragment, {
+             children: [(0, Er.jsx)("div", {
+               className: "BloxdInformationHeader FullyFancyText",
+               children: ar.featureFlags.usePartnerLinks ? rr("homePage:partnersAndCredits") : rr("homePage:credits")
+             }), ar.featureFlags.usePartnerLinks && "\n\t\t\t\t\tPartners:\n\n\t\t\t\t\tcrazygames.com - https://www.crazygames.com/c/io\n\t\t\t\t\tnow.gg - https://now.gg/\n\t\t\t\t\tminijuegos.com - https://www.minijuegos.com/\n\t\t\t\t\tkevin.games - https://kevin.games/\n\t\t\ … [truncated]
+           })
+         },
+         bloxdIngameRules: {
+           title: rr("homePage:bloxdIngameRules"),
+           content: (0, Er.jsxs)(Er.Fragment, {
+ ... (53 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/310.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/310.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d)

#### 1. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/310.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/310.js#L4)

```diff
-   42616: (RR, JR, GR) => {
+   42928: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L6-L8` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/310.js#L6-L7) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/310.js#L6-L8)

```diff
-       openMobLineupPreview: () => YR,
-       openMobPreview: () => ER,
-       openPetPreview: () => kR
+       blankPhotoCode: () => fr,
+       reportBlankPhoto: () => Er
```

#### 3. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L10-L28` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/310.js#L9-L13) · [Before (L10-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/310.js#L10-L28)

```diff
-     var yR = GR(41352),
-       tR = GR(41610),
-       uR = GR(42623),
-       ZR = GR(38329),
-       qR = GR(38195),
-       iR = GR(41768),
-       fR = GR(42644),
-       VR = GR(39630),
-       KR = GR(38285),
-       wR = GR(38265),
-       rR = GR(38189),
-       eR = GR(39524),
-       aR = GR(39518),
-       LR = GR(39256),
-       nR = GR(38287),
-       UR = GR(2435),
- ... (3 more removed lines; see GitHub link above)
+     var Zr = Qr(1912),
+       Wr = Qr(1364),
+       ar = Qr(109),
+       jr = Qr(317),
+       Ir = Qr(5126);
```

#### 4. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L30-L90` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/310.js#L15-L16) · [Before (L30-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/310.js#L30-L90)

```diff
-     function XR(RR, JR) {
-       const GR = function(RR) {
-         return RR.flatMap((RR => {
-           var JR;
-           let [GR, yR] = RR;
-           const tR = void 0 === yR || null === (JR = (0, AR.m)(GR, yR)) || void 0 === JR ? void 0 : JR.attachments;
-           return null !== tR && void 0 !== tR ? tR : []
-         }))
-       }(JR).map((JR => function(RR, JR) {
-         let {
-           modelGlb: GR,
-           texture: yR,
-           animation: tR
-         } = JR;
-         const uR = void 0 !== tR,
-           ZR = `${(0,nR.i)(GR,yR)}|${uR}`;
- ... (45 more removed lines; see GitHub link above)
+     function fr(rr, Sr, Qr, Zr, Wr) {
+       return `${rr}-${Sr}-${null===Qr?"noloss":Qr>=Zr?"loss_photo":`loss_${(0,Ir.h)(Zr-Qr)}`}-${Wr}`
```

#### 5. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L93-L296` → after: `L19-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L19-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/310.js#L19-L24) · [Before (L93-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/310.js#L93-L296)

```diff
-     function cR(RR) {
-       return DR[RR] ??= (0, LR.r)(RR, oR().tL, !0).catch((JR => {
-         throw delete DR[RR], JR
-       })), DR[RR]
-     }
- 
-     function PR(RR) {
-       let JR = HR.get(RR);
-       return JR || (JR = lR.B[RR].loadModel(oR().tL, !1).then((RR => (RR.JA(!1), RR)), (JR => {
-         throw HR.delete(RR), JR
-       })), HR.set(RR, JR)), JR
-     }
- 
-     function IR() {
-       return 2 * gR * Math.tan(oR().camera.fov / 2)
-     }
- ... (188 more removed lines; see GitHub link above)
+     function Er(rr, Sr, Qr, Ir) {
+       var Er, pr;
+       const xr = (0, ar.getOperatingSystem)(),
+         mr = "ios" === xr ? `ios_${(0,jr.c)()}` : xr,
+         Nr = fr(null !== (Er = null === (pr = (0, Wr.U)().gameRender()) || void 0 === pr ? void 0 : pr.renderer) && void 0 !== Er ? Er : "unknown", mr, Ir, Qr, Sr);
+       (0, Zr.reportClientError)("photo_blank", new Error(`Screenshot mode's photo came out blank ${rr} times on ${(0,ar.getBrowserName)()}, then ${Sr}`), Nr)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/311.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/311.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab)

#### 1. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L4-L13` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/311.js#L4-L8) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/311.js#L4-L13)

```diff
-   42635: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => WR,
-       f: () => NR,
-       h: () => LR,
-       k: () => nR,
-       o: () => wR,
-       q: () => aR,
-       u: () => eR,
-       x: () => rR
+   42945: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       openMobLineupPreview: () => or,
+       openMobPreview: () => Fr,
+       openPetPreview: () => br
```

#### 2. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L15-L34` → after: `L10-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L10-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/311.js#L10-L210) · [Before (L15-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/311.js#L15-L34)

```diff
-     var yR = GR(38204),
-       tR = GR(38331),
-       uR = GR(38239),
-       ZR = GR(42641),
-       qR = GR(41741),
-       iR = GR(41534),
-       fR = GR(41568),
-       VR = GR(41542),
-       KR = GR(38253);
-     const wR = Object.freeze(new yR.i(0, 0, 0, 0)),
-       rR = Object.freeze(yR.r.Zero()),
-       eR = Object.freeze(yR.n.Zero()),
-       aR = Object.freeze(iR.b.Zero()),
-       LR = Object.freeze(tR.d.Black()),
-       nR = Object.freeze(new tR.e(0, 0, 0, 0)),
-       UR = {
- ... (4 more removed lines; see GitHub link above)
+     var Zr = Qr(41725),
+       Wr = Qr(41934),
+       ar = Qr(42949),
+       jr = Qr(38679),
+       Ir = Qr(38555),
+       fr = Qr(42085),
+       Er = Qr(42966),
+       pr = Qr(39969),
+       xr = Qr(38650),
+       mr = Qr(38625),
+       Nr = Qr(38552),
+       Ur = Qr(39853),
+       tr = Qr(39845),
+       hr = Qr(39609),
+       zr = Qr(38656),
+       Yr = Qr(2383),
+ ... (185 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L36-L89` → after: `L212-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L212-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/311.js#L212-L262) · [Before (L36-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/311.js#L36-L89)

```diff
-       static _PrepareAnimation(RR, JR, GR, uR, ZR, qR, fR, VR) {
-         let KR;
-         if (!isNaN(parseFloat(ZR)) && isFinite(ZR) ? KR = WR.ANIMATIONTYPE_FLOAT : ZR instanceof yR.i ? KR = WR.ANIMATIONTYPE_QUATERNION : ZR instanceof yR.r ? KR = WR.ANIMATIONTYPE_VECTOR3 : ZR instanceof yR.n ? KR = WR.ANIMATIONTYPE_VECTOR2 : ZR instanceof tR.d ? KR = WR.ANIMAT … [truncated]
-         const wR = new WR(RR, JR, GR, KR, fR),
-           rR = [{
-             frame: 0,
-             value: ZR
-           }, {
-             frame: uR,
-             value: qR
-           }];
-         return wR.setKeys(rR), void 0 !== VR && wR.setEasingFunction(VR), wR
-       }
-       get runtimeAnimations() {
-         return this._runtimeAnimations
-       }
- ... (38 more removed lines; see GitHub link above)
+       constructor(rr, Sr) {
+         this.place = Sr, this.remove = null;
+         const {
+           engine: Qr,
+           Dt: Zr,
+           canvas: Wr
+         } = Cr();
+         rr.appendChild(Wr), Qr.resize(), Qr.runRenderLoop((() => {
+           Zr.render()
+         }))
+       }
+       show(rr) {
+         var Sr;
+         null === (Sr = this.remove) || void 0 === Sr || Sr.call(this), this.remove = this.place(rr)
+       }
+       resize(rr, Sr) {
+ ... (35 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L91-L628` → after: `L264-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L264-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/311.js#L264-L297) · [Before (L91-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/311.js#L91-L628)

```diff
-           this._ranges[RR] = null
-         }
-       }
-       getRange(RR) {
-         return this._ranges[RR]
-       }
-       getKeys() {
-         return this._keys
-       }
-       getHighestFrame() {
-         let RR = 0;
-         for (let JR = 0, GR = this._keys.length; JR < GR; JR++) RR < this._keys[JR].frame && (RR = this._keys[JR].frame);
-         return RR
-       }
-       getEasingFunction() {
-         return this._easingFunction
- ... (522 more removed lines; see GitHub link above)
+           of rr) null !== Qr && Gr(Qr).catch(Sr), yr(Cr().Dt, Zr).catch(Sr)
+       }
+       place() {
+         const {
+           figures: rr,
+           shown: Sr
+         } = this.view, Qr = rr.map(((Qr, Zr) => {
+           var Wr;
+           const ar = null !== (Wr = this.placed[Zr]) && void 0 !== Wr ? Wr : null;
+           if (!Sr[Zr]) return null === ar || void 0 === ar || ar.remove(), null;
+           const jr = (Ir = (Zr + .5) / rr.length, fr = this.aspect, (.5 - Ir) * kr() * fr);
+           var Ir, fr;
+           return null !== ar && ar.figure === Qr && ar.x === jr ? ar : (null === ar || void 0 === ar || ar.remove(), {
+             figure: Qr,
+             x: jr,
+             remove: Vr(Qr, jr)
+ ... (18 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/312.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/312.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986)

#### 1. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L4-L5` → after: `L4-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L4-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/312.js#L4-L628) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/312.js#L4-L5)

```diff
-   43351: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABbCAYAAACI0FBrAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANGSURBVHic7ZwxixNBFMdnJQRCmkCCjYVXHFoIciJoYWWX0m8hYpfCD2FhJ+K3ECu/gIWCRIQUkS1OxEbuYJvj4JqzMCEhmZ15M29297/Z/6+ay+7O7O1/33v7HjOTGQ8P3 … [truncated]
+   42955: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => nr,
+       h: () => qr,
+       i: () => hr,
+       l: () => zr,
+       n: () => mr,
+       p: () => tr,
+       q: () => Ur,
+       s: () => Nr
+     });
+     var Zr = Qr(38560),
+       Wr = Qr(38684),
+       ar = Qr(38599),
+       jr = Qr(42961),
+       Ir = Qr(42060),
+ ... (609 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/313.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/313.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333)

#### 1. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/313.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/313.js#L4-L5)

```diff
-   43356: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALqSURBVFiF3Ze/T1NRFMc/73lb01IKija1TUv5MTgYojEsCungREiYnBxYHHUwLpLwBxhno4thYXDRyWCYHAiwSAyJMUQSWh4lLaQCJrVpoS3U4fU929De+2JNIH6X+3LuP … [truncated]
+   43675: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABbCAYAAACI0FBrAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANGSURBVHic7ZwxixNBFMdnJQRCmkCCjYVXHFoIciJoYWWX0m8hYpfCD2FhJ+K3ECu/gIWCRIQUkS1OxEbuYJvj4JqzMCEhmZ15M29297/Z/6+ay+7O7O1/33v7HjOTGQ8P3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/314.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/314.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65)

#### 1. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/314.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/314.js#L4-L5)

```diff
-   43363: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
+   43678: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALqSURBVFiF3Ze/T1NRFMc/73lb01IKija1TUv5MTgYojEsCungREiYnBxYHHUwLpLwBxhno4thYXDRyWCYHAiwSAyJMUQSWh4lLaQCJrVpoS3U4fU929De+2JNIH6X+3LuP … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/315.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/315.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b)

#### 1. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/315.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/315.js#L4-L5)

```diff
-   43366: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAdSURBVAiZYzi+peH/rLqY/z+/3v/PAGMc39LwHwDpAxJzISLv6wAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.33843,0.44812,0.5765,0.33843, … [truncated]
+   43681: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/316.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/316.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064)

#### 1. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/316.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/316.js#L4-L5)

```diff
-   43369: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
+   43686: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAdSURBVAiZYzi+peH/rLqY/z+/3v/PAGMc39LwHwDpAxJzISLv6wAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.33843,0.44812,0.5765,0.33843, … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/317.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/317.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9)

#### 1. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/317.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/317.js#L4-L5)

```diff
-   43374: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZYzy+peH/80evGQAbSQWwz2X/bgAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.7723,1,0.0765,0.7723,1,0.0765,0.7723,1,0.0765 … [truncated]
+   43688: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/318.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/318.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c)

#### 1. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/318.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/318.js#L4-L5)

```diff
-   43380: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAWSURBVAiZYzi+peH/rLqY/z+/3v8PADf5CTq4b563AAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.53441,0.4375,0,0.53441,0.4375,0,0.53441 … [truncated]
+   43694: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZYzy+peH/80evGQAbSQWwz2X/bgAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.7723,1,0.0765,0.7723,1,0.0765,0.7723,1,0.0765 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/319.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/319.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9)

#### 1. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/319.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/319.js#L4-L5)

```diff
-   43387: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAD6CAYAAAD3EYqJAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAgJSURBVHic7Z0xjFVFFIbnkWlkI5FFQaKVmphgtLHaxM5ELbSQECmko0GzlYkNRguMNCRWRGjslkJDsMACrE22spFopVYmBBQwmMXyWeA859135s2ZO2fn/ve88zXsfe/e2 … [truncated]
+   43701: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAWSURBVAiZYzi+peH/rLqY/z+/3v8PADf5CTq4b563AAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.53441,0.4375,0,0.53441,0.4375,0,0.53441 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/320.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/320.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d)

#### 1. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/320.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/320.js#L4-L5)

```diff
-   43396: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABYCAYAAABrqdC6AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAWNSURBVHic7Z29axxHGMbflfd0WCccnMQyLpIU0fVpgsAEGUNMIBi5UboETCBN/gA3KUKKNCZ1mkCiwqUL48LY4BAwcSEMxr3sInFhkHDkKHcS573TpLDmtDs378w7H7s7c … [truncated]
+   43705: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAD6CAYAAAD3EYqJAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAgJSURBVHic7Z0xjFVFFIbnkWlkI5FFQaKVmphgtLHaxM5ELbSQECmko0GzlYkNRguMNCRWRGjslkJDsMACrE22spFopVYmBBQwmMXyWeA859135s2ZO2fn/ve88zXsfe/e2 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/321.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/321.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49)

#### 1. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/321.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/321.js#L4-L5)

```diff
-   43404: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAqCAYAAADMKGkhAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGXSURBVFiF7ZixTsMwEIb/IAsV1AWJB+ncmWfohjqyVB06MHZgZGCoWBgRW5+hM3OfA5C6VKVCldKhXHQCx47PlmNTvqm1c4r963z3x8XD82sJAZNhv7h/WpQAoDrnxmd32 … [truncated]
+   43709: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABYCAYAAABrqdC6AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAWNSURBVHic7Z29axxHGMbflfd0WCccnMQyLpIU0fVpgsAEGUNMIBi5UboETCBN/gA3KUKKNCZ1mkCiwqUL48LY4BAwcSEMxr3sInFhkHDkKHcS573TpLDmtDs378w7H7s7c … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/322.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/322.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c)

#### 1. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/322.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/322.js#L4-L5)

```diff
-   43410: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGTSURBVGiB7Zi9SsRAFIVPTNgF/wrFP0RtbAVhG30CC99kwcbaMm8g+CYp8gY2gmBroxa6xW7hH+ziEpsMZMYwE5OBGYbzdUnuzc6dM5ebPRE6srG5WwDAfP4DAJiMR5Euf … [truncated]
+   43714: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAqCAYAAADMKGkhAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGXSURBVFiF7ZixTsMwEIb/IAsV1AWJB+ncmWfohjqyVB06MHZgZGCoWBgRW5+hM3OfA5C6VKVCldKhXHQCx47PlmNTvqm1c4r963z3x8XD82sJAZNhv7h/WpQAoDrnxmd32 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/323.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/323.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3)

#### 1. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/323.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/323.js#L4-L5)

```diff
-   43413: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYA2NjdAOfn5ABBQT8A33Ua4vPiZVMAAAAAS … [truncated]
+   43723: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGTSURBVGiB7Zi9SsRAFIVPTNgF/wrFP0RtbAVhG30CC99kwcbaMm8g+CYp8gY2gmBroxa6xW7hH+ziEpsMZMYwE5OBGYbzdUnuzc6dM5ebPRE6srG5WwDAfP4DAJiMR5Euf … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/324.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/324.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2)

#### 1. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/324.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/324.js#L4-L5)

```diff
-   43418: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZYxQSFv/PzcPLIC5exgAADicCBfqQrQEAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.46559 … [truncated]
+   43727: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYA2NjdAOfn5ABBQT8A33Ua4vPiZVMAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/325.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/325.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5)

#### 1. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/325.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/325.js#L4-L5)

```diff
-   43424: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY5SVV/nPwMDA8PjhHUYJSbn/DAwMDEwMWAAAq/oFUma3L30AAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   43736: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZYxQSFv/PzcPLIC5exgAADicCBfqQrQEAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.46559 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/326.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/326.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a)

#### 1. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/326.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/326.js#L4-L5)

```diff
-   43429: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAACCAYAAABxAQMMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHkSURBVCiR7dLPS1MBAMDx79xmrb23ue1t0+XItTWcK3JF9ENpVgSV6aG6WIegCKyMRpFJy0N2sJnNojqsslZpiESypQghUYcuwkBKokKyeE3JyG0VCelc147d6/svfD+Kq … [truncated]
+   43743: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY5SVV/nPwMDA8PjhHUYJSbn/DAwMDEwMWAAAq/oFUma3L30AAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/327.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/327.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042)

#### 1. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/327.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/327.js#L4-L5)

```diff
-   43434: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACdSURBVDiNY2RgYGBoilb9zwAFdUtvM6Lz1bUM4XwGBgaGm9fOMwoJi6OIvXv7kpGJgYqAhYGBgUFZFNVMdP7PH9+JMoz6LiMEHty7wYgu9u7tSwwxogzDFgHY1FHfm1++f … [truncated]
+   43752: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAACCAYAAABxAQMMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHkSURBVCiR7dLPS1MBAMDx79xmrb23ue1t0+XItTWcK3JF9ENpVgSV6aG6WIegCKyMRpFJy0N2sJnNojqsslZpiESypQghUYcuwkBKokKyeE3JyG0VCelc147d6/svfD+Kq … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/328.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/328.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81)

#### 1. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/328.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/328.js#L4-L5)

```diff
-   43437: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGJSURBVGiB7ZixTsNADIZ/R6YLdGmHToiFpwCeoRJPWinPADwFCzBAhmRpu7TDMdBUJ4FQ7vxfsVA+qUpPah3bv89nnSyX9wEG6nols/nCZKNrG4oNfXh8stig0bWNWG3o+ … [truncated]
+   43757: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACdSURBVDiNY2RgYGBoilb9zwAFdUtvM6Lz1bUM4XwGBgaGm9fOMwoJi6OIvXv7kpGJgYqAhYGBgUFZFNVMdP7PH9+JMoz6LiMEHty7wYgu9u7tSwwxogzDFgHY1FHfm1++f … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/329.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/329.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab)

#### 1. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/329.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/329.js#L4-L5)

```diff
-   43443: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGRSURBVGiB7Zg/S8QwGMbfXMsVDunm5seQEw5uExRcBNHByek+gpOjn0IQnFzEP4vogZsgePSbuBUR7vCsgyk0sZe0TSAhPL8t6Zumb56+JHkYGTIcXRZERD/fSyIiymYTp … [truncated]
+   43763: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGJSURBVGiB7ZixTsNADIZ/R6YLdGmHToiFpwCeoRJPWinPADwFCzBAhmRpu7TDMdBUJ4FQ7vxfsVA+qUpPah3bv89nnSyX9wEG6nols/nCZKNrG4oNfXh8stig0bWNWG3o+ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/330.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/330.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2)

#### 1. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/330.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/330.js#L4-L5)

```diff
-   43445: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAYAAABhYU3QAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA5SURBVAiZY1jfH/rfymnFf9eoff//////nwEHYEEX2NwT+P/lm58MYoqsDIuXnmGo6FjNIK+mxgAAtuUU1Ys7U8AAAAAASUVORK5CYII=","alphaCutoff":0,"vertic … [truncated]
+   43771: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGRSURBVGiB7Zg/S8QwGMbfXMsVDunm5seQEw5uExRcBNHByek+gpOjn0IQnFzEP4vogZsgePSbuBUR7vCsgyk0sZe0TSAhPL8t6Zumb56+JHkYGTIcXRZERD/fSyIiymYTp … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/331.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/331.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430)

#### 1. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/331.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/331.js#L4-L5)

```diff
-   43448: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY5SVV/kvLl7GwMbHw8D8bwEDAB57A8ZQ9iKrAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
+   43775: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAYAAABhYU3QAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA5SURBVAiZY1jfH/rfymnFf9eoff//////nwEHYEEX2NwT+P/lm58MYoqsDIuXnmGo6FjNIK+mxgAAtuUU1Ys7U8AAAAAASUVORK5CYII=","alphaCutoff":0,"vertic … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/332.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/332.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1)

#### 1. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/332.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/332.js#L4-L5)

```diff
-   43457: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY7RyWfafgYGB4dieKEYTs1n/GRgYGJgYsAAAxYYGBwfNrmYAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   43783: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY5SVV/kvLl7GwMbHw8D8bwEDAB57A8ZQ9iKrAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/333.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/333.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613)

#### 1. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/333.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/333.js#L4-L5)

```diff
-   43462: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAACCAYAAABc8yy2AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVAiZY5w8f8F/STExBi0NTYZNB84yEAOWTHzM8P3DFoY/8VUMmQrvGdbMfMdw5lQaI7IaxsfPnv/n5uRk4OHmYpBRVmGobWpioIZFAFNaJQbN7skBAAAAAElFTkSuQ … [truncated]
+   43787: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY7RyWfafgYGB4dieKEYTs1n/GRgYGJgYsAAAxYYGBwfNrmYAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/334.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/334.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069)

#### 1. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/334.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/334.js#L4-L5)

```diff
-   43469: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVDiNY2RgYGDoSnH7zwAFZXN2MaLznXx3wvkMDAwM+za7M5qYzUIRO3MqjZGJgYqAhYGBgUGa5yGKIDr/948vRBlGfZcRAod3BzOii505lYYhRpRh2CIAmzrqe/PL1 … [truncated]
+   43789: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAACCAYAAABc8yy2AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVAiZY5w8f8F/STExBi0NTYZNB84yEAOWTHzM8P3DFoY/8VUMmQrvGdbMfMdw5lQaI7IaxsfPnv/n5uRk4OHmYpBRVmGobWpioIZFAFNaJQbN7skBAAAAAElFTkSuQ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/335.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/335.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6)

#### 1. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/335.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/335.js#L4-L5)

```diff
-   43475: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGBSURBVGiB7ZhBSsNQEIb/iUPdiAfwGi1duHbZE7hyFfFEYg/gCVy6EwRDeg0PULoxIM9NIw/tIsn/pw6SD8rrg3Yy8/6ZyfDs9u4pgeDhfmWL5ZqyUVelxIZvNu+MDRl1V … [truncated]
+   43798: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVDiNY2RgYGDoSnH7zwAFZXN2MaLznXx3wvkMDAwM+za7M5qYzUIRO3MqjZGJgYqAhYGBgUGa5yGKIDr/948vRBlGfZcRAod3BzOii505lYYhRpRh2CIAmzrqe/PL1 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/336.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/336.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028)

#### 1. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/336.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/336.js#L4-L5)

```diff
-   43481: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY5xT4fVfWJybAQAPmAKUQohcYQAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.10007,0.03268,-0.0935,0.10007,0.03268,-0.0935 … [truncated]
+   43801: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGBSURBVGiB7ZhBSsNQEIb/iUPdiAfwGi1duHbZE7hyFfFEYg/gCVy6EwRDeg0PULoxIM9NIw/tIsn/pw6SD8rrg3Yy8/6ZyfDs9u4pgeDhfmWL5ZqyUVelxIZvNu+MDRl1V … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/337.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/337.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557)

#### 1. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/337.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/337.js#L4-L5)

```diff
-   43486: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABICAYAAABRGGN6AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANRSURBVHic7Zo9iNRAFMcTGXKXs7ERK4u9K5btLIQFQRFEOFAOtLq1sLGyu8pGUA47Kzt7G63shAUbPeFk4Qq75YrTWmwOzr11pzkLmZhMJjMvM5PsS/J+VT5eZib/vLz3Z … [truncated]
+   43803: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY5xT4fVfWJybAQAPmAKUQohcYQAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.10007,0.03268,-0.0935,0.10007,0.03268,-0.0935 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/338.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/338.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07)

#### 1. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/338.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/338.js#L4-L5)

```diff
-   43493: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA0CAYAAAD19ArKAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJsSURBVGiB7Zi/a9tAHMWfjDg3jimtIWRwF8eDcdpuBUOgWUIgkD3UwXTv1j/A2AQ8hw7ZOrWUOv9Ag5csDQQCgQxJMBkSL81gupiYtI1ocYdaqnSS7nS+6MeBPyDQyae7x … [truncated]
+   43812: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABICAYAAABRGGN6AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANRSURBVHic7Zo9iNRAFMcTGXKXs7ERK4u9K5btLIQFQRFEOFAOtLq1sLGyu8pGUA47Kzt7G63shAUbPeFk4Qq75YrTWmwOzr11pzkLmZhMJjMvM5PsS/J+VT5eZib/vLz3Z … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/339.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/339.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2)

#### 1. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/339.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/339.js#L4-L5)

```diff
-   43501: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADRSURBVFiF7ZU/CwIxDMVT6aJ+S3Fz80AQTg7xQBDOzU38gCI4qaM3tdwfqOZJazjymzrkweMlTUy5P72JQb5eGESTZQVLU1VbM+IIUmPvtysREY0n02Dh6/nwb0SDIDo5N … [truncated]
+   43816: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA0CAYAAAD19ArKAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJsSURBVGiB7Zi/a9tAHMWfjDg3jimtIWRwF8eDcdpuBUOgWUIgkD3UwXTv1j/A2AQ8hw7ZOrWUOv9Ag5csDQQCgQxJMBkSL81gupiYtI1ocYdaqnSS7nS+6MeBPyDQyae7x … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/340.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/340.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f)

#### 1. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/340.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/340.js#L4-L5)

```diff
-   43510: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAWSURBVAiZY3x268h/QVFZhonrTjMAACyMBdKWCLAlAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[1,0.53165,0.3176,1,0.53165,0.3176,1,0.53165 … [truncated]
+   43823: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADRSURBVFiF7ZU/CwIxDMVT6aJ+S3Fz80AQTg7xQBDOzU38gCI4qaM3tdwfqOZJazjymzrkweMlTUy5P72JQb5eGESTZQVLU1VbM+IIUmPvtysREY0n02Dh6/nwb0SDIDo5N … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/341.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/341.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450)

#### 1. `bundles/bloxd.io/chunks/js/341.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/341.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/341.js#L4-L5)

```diff
-   43513: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGNSURBVGiB7Zg/TsMwFMafm5BKiPQCLCwIUXENBFInTsKA1AkmmNh6ETp1qHqNCili4QwNQmraEIY6Upykzh9bsmV9v83xe0mevzzZ+Rgp8nR/nRER7dM/IiKarSImi3+8v … [truncated]
+   43830: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAWSURBVAiZY3x268h/QVFZhonrTjMAACyMBdKWCLAlAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[1,0.53165,0.3176,1,0.53165,0.3176,1,0.53165 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/342.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/342.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2)

#### 1. `bundles/bloxd.io/chunks/js/342.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/342.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/342.js#L4-L5)

```diff
-   43519: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYARBDqAO3u+ADPAh4A0oEZ4lM0BcsAAAAAS … [truncated]
+   43834: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGNSURBVGiB7Zg/TsMwFMafm5BKiPQCLCwIUXENBFInTsKA1AkmmNh6ETp1qHqNCili4QwNQmraEIY6Upykzh9bsmV9v83xe0mevzzZ+Rgp8nR/nRER7dM/IiKarSImi3+8v … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/343.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/343.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2)

#### 1. `bundles/bloxd.io/chunks/js/343.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/343.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/343.js#L4-L5)

```diff
-   43526: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY/zTqvi/+AAbAx8PKwOfdQQDADbJBJwakkKMAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
+   43837: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYARBDqAO3u+ADPAh4A0oEZ4lM0BcsAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/344.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/344.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5)

#### 1. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/344.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/344.js#L4-L5)

```diff
-   43530: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY6wN1PnPwMDA0Lz+CmO+q/p/BgYGBiYGLAAAwGgF3kpJcUoAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   43839: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY/zTqvi/+AAbAx8PKwOfdQQDADbJBJwakkKMAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/345.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/345.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89)

#### 1. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/345.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/345.js#L4-L5)

```diff
-   43532: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAACCAYAAABWr4LkAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGvSURBVCiR7dHPS1MBAMDx73ObNffe5nNvG1uONMdwrsiKkJg0M4R+qIc6rQ5BEFQYCdEPWl70YJNcRXmYJK1SEZHGliKIiF6FgdgQi0hhTClR3yoK0rWuHbsGff6Fj/Dke … [truncated]
+   43847: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY6wN1PnPwMDA0Lz+CmO+q/p/BgYGBiYGLAAAwGgF3kpJcUoAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/346.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/346.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a)

#### 1. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/346.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/346.js#L4-L5)

```diff
-   43540: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAChSURBVDiNY2RgYGCYla7xnwEK0mbeYETnd0UawPkMDAwMZcsvMOa7qqOITdx9k5GJgYqAhYGBgYGbE8USDP63n3+JMoz6LiMEGtZdZkQXm7j7JoYYUYZhiwBs6qjvzS9fv … [truncated]
+   43853: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAACCAYAAABWr4LkAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGvSURBVCiR7dHPS1MBAMDx73ObNffe5nNvG1uONMdwrsiKkJg0M4R+qIc6rQ5BEFQYCdEPWl70YJNcRXmYJK1SEZHGliKIiF6FgdgQi0hhTClR3yoK0rWuHbsGff6Fj/Dke … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/347.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/347.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373)

#### 1. `bundles/bloxd.io/chunks/js/347.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/347.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/347.js#L4-L5)

```diff
-   43543: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGISURBVGiB7ZgxSgNREIb/WUZtgqcQ0gh23iAH8AAeQdLYWtmJzeIRPICV1d7ALiDCQk4R0mjAZ5OVh6bY3f/fOMh+EF4eJLMz75+ZHZ49XF8mEFzdP9p8NqVslFUtseHLx … [truncated]
+   43857: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAChSURBVDiNY2RgYGCYla7xnwEK0mbeYETnd0UawPkMDAwMZcsvMOa7qqOITdx9k5GJgYqAhYGBgYGbE8USDP63n3+JMoz6LiMEGtZdZkQXm7j7JoYYUYZhiwBs6qjvzS9fv … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/348.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/348.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25)

#### 1. `bundles/bloxd.io/chunks/js/348.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/348.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/348.js#L4-L5)

```diff
-   43546: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACcCAYAAAAXtcvFAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAr4SURBVHic7Z1NaBxHFsffSKPRSLbQYGGjEKS9yCxe2EOCIbAisN6czB7MkiwsOfpkCKwWLyw55JiDCayIA2ZzynEJ+0HIYfEp60BwIBDwwQctSJeVCQjbWSZMLM306GMPU … [truncated]
+   43861: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGISURBVGiB7ZgxSgNREIb/WUZtgqcQ0gh23iAH8AAeQdLYWtmJzeIRPICV1d7ALiDCQk4R0mjAZ5OVh6bY3f/fOMh+EF4eJLMz75+ZHZ49XF8mEFzdP9p8NqVslFUtseHLx … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/349.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/349.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1)

#### 1. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/349.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/349.js#L4-L5)

```diff
-   43549: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAGACAYAAADLU767AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAABD7SURBVHic7Z1BiFzHEUBrnBaJRA5aKexFyATpYF2CDgoiNj44hOxNl70IiVyC8CEYg8GwwaBDEJiBBYPBCJ1ELlZgCOSimxfhnBITrFMSmD1ICOlmJI2Iwm7CbqQcdmvo6 … [truncated]
+   43870: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACcCAYAAAAXtcvFAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAr4SURBVHic7Z1NaBxHFsffSKPRSLbQYGGjEKS9yCxe2EOCIbAisN6czB7MkiwsOfpkCKwWLyw55JiDCayIA2ZzynEJ+0HIYfEp60BwIBDwwQctSJeVCQjbWSZMLM306GMPU … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/350.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/350.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea)

#### 1. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/350.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/350.js#L4-L5)

```diff
-   43557: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABVCAYAAAC/xEFcAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAARFSURBVHic7Z3PT9RAFMdfYV1+JIsQEjTiDyKERFGJIdEYYvwHxCM3PZmoiQeNf4DGGzHePBjjiZtc9eLBgxpiOBBClBhXIEhcoyawwIrAqqmH7iztbNtpt9Ppa/s+l5122 … [truncated]
+   43873: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAGACAYAAADLU767AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAABD7SURBVHic7Z1BiFzHEUBrnBaJRA5aKexFyATpYF2CDgoiNj44hOxNl70IiVyC8CEYg8GwwaBDEJiBBYPBCJ1ELlZgCOSimxfhnBITrFMSmD1ICOlmJI2Iwm7CbqQcdmvo6 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/351.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/351.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9df)

#### 1. `bundles/bloxd.io/chunks/js/351.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9df) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/351.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/351.js#L4-L5)

```diff
-   43564: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABQCAYAAAD4K0AmAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALYSURBVHic7du9btswFAXg64IGnHZIhgJpmq0emvRnaTe/R5+hz5S5Y9Y8gzu1HfoTZXA2xynQoSmQxIANqIPB2lYliyJpiUc83xLHIS0GJ1ciKaUjll6+ep3a9BuenoiIi … [truncated]
+   43878: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABVCAYAAAC/xEFcAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAARFSURBVHic7Z3PT9RAFMdfYV1+JIsQEjTiDyKERFGJIdEYYvwHxCM3PZmoiQeNf4DGGzHePBjjiZtc9eLBgxpiOBBClBhXIEhcoyawwIrAqqmH7iztbNtpt9Ppa/s+l5122 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/352.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/352.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130)

#### 1. `bundles/bloxd.io/chunks/js/352.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/352.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/352.js#L4-L5)

```diff
-   43568: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAzSURBVAiZY7BVFfpvb2//X1OU53+gieR/BgYGBiYmKV0Goa+3GE5NlWB48/Eng6Yoz38ADtwN2A2YEbIAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.3 … [truncated]
+   43883: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABQCAYAAAD4K0AmAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALYSURBVHic7du9btswFAXg64IGnHZIhgJpmq0emvRnaTe/R5+hz5S5Y9Y8gzu1HfoTZXA2xynQoSmQxIANqIPB2lYliyJpiUc83xLHIS0GJ1ciKaUjll6+ep3a9BuenoiIi … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/353.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/353.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3)

#### 1. `bundles/bloxd.io/chunks/js/353.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/353.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/353.js#L4-L5)

```diff
-   43570: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
+   43888: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAzSURBVAiZY7BVFfpvb2//X1OU53+gieR/BgYGBiYmKV0Goa+3GE5NlWB48/Eng6Yoz38ADtwN2A2YEbIAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/354.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/354.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248)

#### 1. `bundles/bloxd.io/chunks/js/354.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/354.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/354.js#L4-L5)

```diff
-   43578: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY7RVFfovws/OUJ36jAEAFFIDZYkSkDYAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.1171,0.50665,-0.3483,0.1171,0.50665,-0.34 … [truncated]
+   43897: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/355.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/355.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7de)

#### 1. `bundles/bloxd.io/chunks/js/355.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7deR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7de) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/355.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/355.js#L4-L5)

```diff
-   43584: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY7RVFfr/5sMvBg15XgYAIxsEnz/wS4IAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0,0.53441,0.4375,0,0.53441,0.4375,0,0.53441 … [truncated]
+   43905: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY7RVFfovws/OUJ36jAEAFFIDZYkSkDYAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.1171,0.50665,-0.3483,0.1171,0.50665,-0.34 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/356.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/356.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9)

#### 1. `bundles/bloxd.io/chunks/js/356.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/356.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/356.js#L4-L5)

```diff
-   43588: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAvSURBVAiZY3h5YPf/C3Pn/v/w+PF/Bihg/PD48X8BWVmGW6tWMfCLCTI8v/uIAQDQfhMsC1+8ywAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.61541 … [truncated]
+   43912: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY7RVFfr/5sMvBg15XgYAIxsEnz/wS4IAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0,0.53441,0.4375,0,0.53441,0.4375,0,0.53441 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/357.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/357.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68b)

#### 1. `bundles/bloxd.io/chunks/js/357.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/357.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/357.js#L4-L5)

```diff
-   43591: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
+   43916: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAvSURBVAiZY3h5YPf/C3Pn/v/w+PF/Bihg/PD48X8BWVmGW6tWMfCLCTI8v/uIAQDQfhMsC1+8ywAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.61541 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/358.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/358.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786)

#### 1. `bundles/bloxd.io/chunks/js/358.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/358.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/358.js#L4-L5)

```diff
-   43594: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY7w8f/5/MUUZBgAUqwNl1ncXcwAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.70912,1,0,0.70912,1,0,0.70912,1,0,0.79277,0.9 … [truncated]
+   43923: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/359.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/359.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faa)

#### 1. `bundles/bloxd.io/chunks/js/359.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faa) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/359.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/359.js#L4-L5)

```diff
-   43603: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAaSURBVAiZY7i1atX/5xcv/mdgYPj/8sDu/wBgKgsY6yMuIAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.9375,0.50631,0.361,0.9375,0.50631 … [truncated]
+   43926: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY7w8f/5/MUUZBgAUqwNl1ncXcwAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.70912,1,0,0.70912,1,0,0.70912,1,0,0.79277,0.9 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/360.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/360.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99)

#### 1. `bundles/bloxd.io/chunks/js/360.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/360.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/360.js#L4-L5)

```diff
-   43607: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVCiRxZIxDsIwDEV/LaQgZeAqUdSTde/EzslQVY7SIUMXm4EmSmjcAAtviRT5+3/LBhT82Isfe2n97XCDl6O3O1RvLhwYZAnT9d6sT6LcpRlTi51DX3X4q1Dl5z1G3 … [truncated]
+   43933: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAaSURBVAiZY7i1atX/5xcv/mdgYPj/8sDu/wBgKgsY6yMuIAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.9375,0.50631,0.361,0.9375,0.50631 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/361.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/361.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4)

#### 1. `bundles/bloxd.io/chunks/js/361.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/361.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/361.js#L4-L5)

```diff
-   43614: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA8SURBVCiRY2CgK2BE5hjVmvz/9/UfAxM3E8O55jOMGIpgCmAAXSEKMCgy+o8uxkSMm4hSRD0wZIOAKEUAGl0ftSoKsxQAAAAASUVORK5CYII=","alphaCutoff":0.050 … [truncated]
+   43942: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVCiRxZIxDsIwDEV/LaQgZeAqUdSTde/EzslQVY7SIUMXm4EmSmjcAAtviRT5+3/LBhT82Isfe2n97XCDl6O3O1RvLhwYZAnT9d6sT6LcpRlTi51DX3X4q1Dl5z1G3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/362.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/362.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46)

#### 1. `bundles/bloxd.io/chunks/js/362.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/362.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/362.js#L4-L5)

```diff
-   43620: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB2SURBVCiRtZAxDsAgDANNVj6DEC9jZ+rel1Won2FNOoEghYqlt0RKbNkKAMCnID4FQcdr56KXr2m0mwuDLCEf13Brgt6t4weqqIeW6l9EwO6fKvo/0ziyBBe9kB1bmOokS … [truncated]
+   43944: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA8SURBVCiRY2CgK2BE5hjVmvz/9/UfAxM3E8O55jOMGIpgCmAAXSEKMCgy+o8uxkSMm4hSRD0wZIOAKEUAGl0ftSoKsxQAAAAASUVORK5CYII=","alphaCutoff":0.050 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/363.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/363.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69a)

#### 1. `bundles/bloxd.io/chunks/js/363.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/363.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/363.js#L4-L5)

```diff
-   43629: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC1SURBVDiNzZOxCoMwEIZ/D8GCg4uLbyHBJ3N36t4nC5K36NLFIVCXuw5tQmLFJqVDvyUQuO/yHxcgATUNoqZBPt0d0o9Kjs4i2fTqzpZBNWE+66xaLwi7Z0XZ4iQh9LXtL … [truncated]
+   43946: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB2SURBVCiRtZAxDsAgDANNVj6DEC9jZ+rel1Won2FNOoEghYqlt0RKbNkKAMCnID4FQcdr56KXr2m0mwuDLCEf13Brgt6t4weqqIeW6l9EwO6fKvo/0ziyBBe9kB1bmOokS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/364.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/364.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3e)

#### 1. `bundles/bloxd.io/chunks/js/364.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/364.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/364.js#L4-L5)

```diff
-   43634: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC1SURBVDiNzZOxCoMwEIZ/D8GCg4uLbyHBJ3N36t4nC5K36NLFIVCXuw5tQmLFJqVDvyUQuO/yHxcgATUNoqZBPt0d0o9Kjs4i2fTqzpZBNWE+66xaLwi7Z0XZ4iQh9LXtL … [truncated]
+   43949: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC1SURBVDiNzZOxCoMwEIZ/D8GCg4uLbyHBJ3N36t4nC5K36NLFIVCXuw5tQmLFJqVDvyUQuO/yHxcgATUNoqZBPt0d0o9Kjs4i2fTqzpZBNWE+66xaLwi7Z0XZ4iQh9LXtL … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/365.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/365.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999)

#### 1. `bundles/bloxd.io/chunks/js/365.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/365.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/365.js#L4-L5)

```diff
-   43642: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVCiRxZIxDsIwDEV/LaQgZeAqUdSTde/EzslQVY7SIUMXm4EmSmjcAAtviRT5+3/LBhT82Isfe2n97XCDl6O3O1RvLhwYZAnT9d6sT6LcpRlTi51DX3X4q1Dl5z1G3 … [truncated]
+   43956: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC1SURBVDiNzZOxCoMwEIZ/D8GCg4uLbyHBJ3N36t4nC5K36NLFIVCXuw5tQmLFJqVDvyUQuO/yHxcgATUNoqZBPt0d0o9Kjs4i2fTqzpZBNWE+66xaLwi7Z0XZ4iQh9LXtL … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/366.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/366.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558c)

#### 1. `bundles/bloxd.io/chunks/js/366.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/366.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/366.js#L4-L5)

```diff
-   43648: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABrCAYAAAD+ZTVwAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAT+SURBVHic7Zw/iBVHHMd/m6ze5faKiF0gBznUJojYSERISJAcoga1D6lsU4igTVKYJo2NqeRKwTJIjMiFEDhFBJsgQqqgIIeFIF5xu3on3rPYN8/d2T8zszszv9+8/X3g8 … [truncated]
+   43961: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVCiRxZIxDsIwDEV/LaQgZeAqUdSTde/EzslQVY7SIUMXm4EmSmjcAAtviRT5+3/LBhT82Isfe2n97XCDl6O3O1RvLhwYZAnT9d6sT6LcpRlTi51DX3X4q1Dl5z1G3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/367.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/367.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4)

#### 1. `bundles/bloxd.io/chunks/js/367.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/367.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/367.js#L4-L5)

```diff
-   43650: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEjSURBVFiFY9w0Iek/AwnAr2Ae49lLt3DqMdZTYyTHTCZSNCCDm3cekKsVK2CBMb58/YFXIQ83BwpfXUUBp1q/gnmMZDuEFKChitsRDAwMDLCoM9ZTY9w/N+M/AwMDw+fPv … [truncated]
+   43967: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABrCAYAAAD+ZTVwAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAT+SURBVHic7Zw/iBVHHMd/m6ze5faKiF0gBznUJojYSERISJAcoga1D6lsU4igTVKYJo2NqeRKwTJIjMiFEDhFBJsgQqqgIIeFIF5xu3on3rPYN8/d2T8zszszv9+8/X3g8 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/368.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/368.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64)

#### 1. `bundles/bloxd.io/chunks/js/368.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/368.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/368.js#L4-L5)

```diff
-   43652: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAG3SURBVGiB7dixTsJAGAfw+0jjZCQNEVYjL4Abq2Fy8A1kcyMObjpoJF3YXOgTsDmy8Ai4yeDiUBYnNQZ9gnOitsfZa88vgr3/b6N3/eBPr98VSGhc3L/K5OvLUT81Xg1D0 … [truncated]
+   43976: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEjSURBVFiFY9w0Iek/AwnAr2Ae49lLt3DqMdZTYyTHTCZSNCCDm3cekKsVK2CBMb58/YFXIQ83BwpfXUUBp1q/gnmMZDuEFKChitsRDAwMDLCoM9ZTY9w/N+M/AwMDw+fPv … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/369.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/369.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10c)

#### 1. `bundles/bloxd.io/chunks/js/369.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/369.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/369.js#L4-L5)

```diff
-   43657: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVCiRYwgKiv7PAAXIbBoBqlnHGB2T+Z+BgYHh+7dPKBKcXHwMDAwMDEuXTGdkIsYkFpgJ69YtZcTlVqJMop4iFpgv0MMIJk60SUQBAGjCGCvRlcOvAAAAAElFTkSuQ … [truncated]
+   43985: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAG3SURBVGiB7dixTsJAGAfw+0jjZCQNEVYjL4Abq2Fy8A1kcyMObjpoJF3YXOgTsDmy8Ai4yeDiUBYnNQZ9gnOitsfZa88vgr3/b6N3/eBPr98VSGhc3L/K5OvLUT81Xg1D0 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/370.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/370.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4)

#### 1. `bundles/bloxd.io/chunks/js/370.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/370.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/370.js#L4-L5)

```diff
-   43660: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAqCAYAAABGB/BgAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAD4SURBVFiF7ZYxDoJAEEXfqpUFBQfgBsbCg1h4GwsLC09CZ4zxGBYWhhtwAAsTqTRY4CBunMJARjH8hsxfwuezf5ZxKNjcdjnAIT8CMHFjALaXGIDzKQUgCCMA4mDttGf1t … [truncated]
+   43992: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVCiRYwgKiv7PAAXIbBoBqlnHGB2T+Z+BgYHh+7dPKBKcXHwMDAwMDEuXTGdkIsYkFpgJ69YtZcTlVqJMop4iFpgv0MMIJk60SUQBAGjCGCvRlcOvAAAAAElFTkSuQ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/371.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/371.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2)

#### 1. `bundles/bloxd.io/chunks/js/371.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/371.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/371.js#L4-L5)

```diff
-   43662: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGNSURBVGiB7Zi9SgQxFIVv1lFRwUJQ8V3sV/E93MLGKRQWLAdshBXBYn0IrRadVux8EJEFC0HF37HJwN7sbDIzCSSE83XJ3JvMzZmQzBFkycbZRUFEVHz/EhHRuJ8KXfz66 … [truncated]
+   44e3: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAqCAYAAABGB/BgAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAD4SURBVFiF7ZYxDoJAEEXfqpUFBQfgBsbCg1h4GwsLC09CZ4zxGBYWhhtwAAsTqTRY4CBunMJARjH8hsxfwuezf5ZxKNjcdjnAIT8CMHFjALaXGIDzKQUgCCMA4mDttGf1t … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/372.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/372.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f)

#### 1. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/372.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/372.js#L4-L5)

```diff
-   43668: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAx1NSAPri6wA/y8MA1sEa4oTj3EEAAAAAS … [truncated]
+   44004: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGNSURBVGiB7Zi9SgQxFIVv1lFRwUJQ8V3sV/E93MLGKRQWLAdshBXBYn0IrRadVux8EJEFC0HF37HJwN7sbDIzCSSE83XJ3JvMzZmQzBFkycbZRUFEVHz/EhHRuJ8KXfz66 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/373.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/373.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef)

#### 1. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/373.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/373.js#L4-L5)

```diff
-   43670: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY4wvV/i/TSCfgUWImyFEto4BACzPBDzVKZ6iAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
+   44009: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAx1NSAPri6wA/y8MA1sEa4oTj3EEAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/374.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/374.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f)

#### 1. `bundles/bloxd.io/chunks/js/374.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/374.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/374.js#L4-L5)

```diff
-   43673: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY5ScOes/AwMDw/P0NEbR9v7/DAwMDEwMWAAAyvYGLkl26sMAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   44015: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY4wvV/i/TSCfgUWImyFEto4BACzPBDzVKZ6iAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/375.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/375.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7)

#### 1. `bundles/bloxd.io/chunks/js/375.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/375.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/375.js#L4-L5)

```diff
-   43682: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAACCAYAAADyxTo3AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEuSURBVCiR7dBNK8MBAIDx579mzMbe/pumLdOWvB3cJ0Y5eD24jYNSCq24oNQuLkzZiMvKMqG0ZG2tVtrBWa0WUiQOa4QwL6UYc3VRPoDnGzw/YXktmDcaDNRW1xDdT/KXN … [truncated]
+   44024: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY5ScOes/AwMDw/P0NEbR9v7/DAwMDEwMWAAAyvYGLkl26sMAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/376.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/376.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514)

#### 1. `bundles/bloxd.io/chunks/js/376.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/376.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/376.js#L4-L5)

```diff
-   43690: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACdSURBVDiNY2RgYGBoqnD+zwAFdR17GdH50suWw/kMDAwMT6MiGUXb+1HEXlcWMjIxUBGwMDAwMCj/eIIiiM7/9/U7UYZR32WEwPPUJEZ0sdeVhRhiRBmGLQKwqaO+N798/ … [truncated]
+   44026: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAACCAYAAADyxTo3AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEuSURBVCiR7dBNK8MBAIDx579mzMbe/pumLdOWvB3cJ0Y5eD24jYNSCq24oNQuLkzZiMvKMqG0ZG2tVtrBWa0WUiQOa4QwL6UYc3VRPoDnGzw/YXktmDcaDNRW1xDdT/KXN … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/377.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/377.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4)

#### 1. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/377.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/377.js#L4-L5)

```diff
-   43697: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGDSURBVGiB7ZixSgNBEIb/OcZC7IQUgvgivoSNlb0WNl55T5AytfZWNnkJX0QEkYN0wcLgWpiTRVPk7v83DnIfhM1CMjez/8zcsHZ2/5BAML84t8l0Rtlom1piwx+fnhkbM … [truncated]
+   44034: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACdSURBVDiNY2RgYGBoqnD+zwAFdR17GdH50suWw/kMDAwMT6MiGUXb+1HEXlcWMjIxUBGwMDAwMCj/eIIiiM7/9/U7UYZR32WEwPPUJEZ0sdeVhRhiRBmGLQKwqaO+N798/ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/378.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/378.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace)

#### 1. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/378.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/378.js#L4-L5)

```diff
-   43706: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAJCAYAAAD+WDajAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABMSURBVBiVY3QIZf/f6pvDgA6s43oZmTBEkQDLgdU/GT/YffqPLOidO5uRgYGBgYWBgYFBgJ8Pq068xuK3k4GBgeHDx0+4JXHZiRcAADlyDh3q8hR1AAAAAElFTkSuQmCC" … [truncated]
+   44041: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGDSURBVGiB7ZixSgNBEIb/OcZC7IQUgvgivoSNlb0WNl55T5AytfZWNnkJX0QEkYN0wcLgWpiTRVPk7v83DnIfhM1CMjez/8zcsHZ2/5BAML84t8l0Rtlom1piwx+fnhkbM … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/379.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/379.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72)

#### 1. `bundles/bloxd.io/chunks/js/379.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/379.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/379.js#L4-L5)

```diff
-   43710: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABfSURBVBiVYwzKkvnPgAbevX7NwMDAwNDqm8PAwsvLgiL5+fMfFD4LugBM94HVPxk/2H36z4RuPDIQ4OdjwKuAgYEB0w3vXqMpQHfDgdU/GWHsDx8/4bdCgJ+PkAsYGAA3k … [truncated]
+   44047: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAJCAYAAAD+WDajAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABMSURBVBiVY3QIZf/f6pvDgA6s43oZmTBEkQDLgdU/GT/YffqPLOidO5uRgYGBgYWBgYFBgJ8Pq068xuK3k4GBgeHDx0+4JXHZiRcAADlyDh3q8hR1AAAAAElFTkSuQmCC" … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/380.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/380.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355)

#### 1. `bundles/bloxd.io/chunks/js/380.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/380.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/380.js#L4-L5)

```diff
-   43713: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH0SURBVEiJzVQxiNRAFH0jKbYRDQjCapmBRVmLS5FKBiFXWITbZkGwTSPYbW21rXZXpt0qzcqVN3AM2qTwilvuWIilLiwIWdlmu2/hTpxNsu54pPA1yc//w38v//1hPFXUD … [truncated]
+   44053: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABfSURBVBiVYwzKkvnPgAbevX7NwMDAwNDqm8PAwsvLgiL5+fMfFD4LugBM94HVPxk/2H36z4RuPDIQ4OdjwKuAgYEB0w3vXqMpQHfDgdU/GWHsDx8/4bdCgJ+PkAsYGAA3k … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/381.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/381.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543)

#### 1. `bundles/bloxd.io/chunks/js/381.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/381.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/381.js#L4-L5)

```diff
-   43717: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAABCAYAAAAMwoR9AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAwSURBVAiZASUA2v8A/wCZ/x+Rpf//ADP//wAA/8z////l/fP/P+/J/yWrwf/M/zP/t8EZO2UdOzkAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.14287 … [truncated]
+   44057: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH0SURBVEiJzVQxiNRAFH0jKbYRDQjCapmBRVmLS5FKBiFXWITbZkGwTSPYbW21rXZXpt0qzcqVN3AM2qTwilvuWIilLiwIWdlmu2/hTpxNsu54pPA1yc//w38v//1hPFXUD … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/382.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/382.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1)

#### 1. `bundles/bloxd.io/chunks/js/382.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/382.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/382.js#L4-L5)

```diff
-   43726: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAElSURBVFiFY2SgEOisP/wfn/yVQFtGepjJRKolgxWMemSwAZaBdgADAwOD0tTtKHni27MvJKm/l+3JOBoj1ARcUjwUmzFsYoTR++PZ/wwMDAyz+dRRJFI/3UTh00p+K78xy … [truncated]
+   44062: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAABCAYAAAAMwoR9AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAwSURBVAiZASUA2v8A/wCZ/x+Rpf//ADP//wAA/8z////l/fP/P+/J/yWrwf/M/zP/t8EZO2UdOzkAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.14287 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/383.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/383.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8)

#### 1. `bundles/bloxd.io/chunks/js/383.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/383.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/383.js#L4-L5)

```diff
-   43729: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIQSURBVGiB7ZgxS8NAFMffSZKCgp/CwcHJwUUHJyMoitWhKIibg5uDk2NnJx3ERQSlg61YWjWC0sXVydFPUVBoUoiDPchdc3dJ7mhDeL/tkutd3/vf5d79CWhSWV8Oo+1aq … [truncated]
+   44067: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAElSURBVFiFY2SgEOisP/wfn/yVQFtGepjJRKolgxWMemSwAZaBdgADAwOD0tTtKHni27MvJKm/l+3JOBoj1ARcUjwUmzFsYoTR++PZ/wwMDAyz+dRRJFI/3UTh00p+K78xy … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/384.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/384.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd)

#### 1. `bundles/bloxd.io/chunks/js/384.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/384.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/384.js#L4-L5)

```diff
-   43736: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPWSURBVFiF3ZdbaBxlFIC/TWazk73imDQslazUEmgDqVECsSEPgkEQKfrQIl5AWSo2pn2xt9gmkiamaWy9NAEjkjSUIDFRlAh98TG0DyoI4oulxiRGI9ZOdrM7k393NqwP6 … [truncated]
+   44069: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIQSURBVGiB7ZgxS8NAFMffSZKCgp/CwcHJwUUHJyMoitWhKIibg5uDk2NnJx3ERQSlg61YWjWC0sXVydFPUVBoUoiDPchdc3dJ7mhDeL/tkutd3/vf5d79CWhSWV8Oo+1aq … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/385.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/385.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4)

#### 1. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/385.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/385.js#L4-L5)

```diff
-   43744: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA4CAYAAABQZsDpAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANySURBVGiB3Vm/ixNREJ7Vl8idtlaKhYU2AbFI5X9wcCBYCWdznCJaWAQhYHGkOBBF8BoRUZsE0gpC/gOrCBKwkCvsrGz1DpM9ziKZ9e28eTsvu7NJ3K/Jj/dr9n3fzHszG … [truncated]
+   44071: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPWSURBVFiF3ZdbaBxlFIC/TWazk73imDQslazUEmgDqVECsSEPgkEQKfrQIl5AWSo2pn2xt9gmkiamaWy9NAEjkjSUIDFRlAh98TG0DyoI4oulxiRGI9ZOdrM7k393NqwP6 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/386.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/386.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff)

#### 1. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/386.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/386.js#L4-L5)

```diff
-   43746: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB4SURBVCiRY2AYfoARXcAixuo/AwMDw9fXHxjYuDkYGBgYGH59/cHALSrAwMDAwHBiyTFGFlymXd55DcVAmGFYga67Fk5JmBwTugTMSdgATA5DEzEAQ9Ovrz9wKobJYWjiF … [truncated]
+   44074: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA4CAYAAABQZsDpAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANySURBVGiB3Vm/ixNREJ7Vl8idtlaKhYU2AbFI5X9wcCBYCWdznCJaWAQhYHGkOBBF8BoRUZsE0gpC/gOrCBKwkCvsrGz1DpM9ziKZ9e28eTsvu7NJ3K/Jj/dr9n3fzHszG … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/387.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/387.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-466ec9dd30affa852e3572b52fd199a96ddff9a63822409c8f7e176bc8c100be)

#### 1. `bundles/bloxd.io/chunks/js/387.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-466ec9dd30affa852e3572b52fd199a96ddff9a63822409c8f7e176bc8c100beR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-466ec9dd30affa852e3572b52fd199a96ddff9a63822409c8f7e176bc8c100be) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/387.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/387.js#L4-L5)

```diff
-   43751: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAABCAYAAACbkyOnAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEXSURBVBiVdcE9LwNhAMDxv/Z6KvdSvZ6USNOIRGKxiEnEYkMHpn4BC0obiUlj8tZSX0BCTJKGIDZWwiYMEglhs5RGe889pz0+gd+vZWOv/DuSVDAtm8rtOTfqEPePOaT0M … [truncated]
+   44077: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB4SURBVCiRY2AYfoARXcAixuo/AwMDw9fXHxjYuDkYGBgYGH59/cHALSrAwMDAwHBiyTFGFlymXd55DcVAmGFYga67Fk5JmBwTugTMSdgATA5DEzEAQ9Ovrz9wKobJYWjiF … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/388.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/388.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424a)

#### 1. `bundles/bloxd.io/chunks/js/388.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/388.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/388.js#L4-L5)

```diff
-   43756: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAABCAYAAADq6085AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA8SURBVAiZATEAzv8B9Ke5//lBEQD1VWYA0wwrADMxNQDo4N4AC/P/ACOSdACgm5kANVRKAPLu7AAGX5UAEdoULN8RPVsAAAAASUVORK5CYII=","alphaCutoff":0,"ve … [truncated]
+   44080: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAABCAYAAACbkyOnAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEXSURBVBiVdcE9LwNhAMDxv/Z6KvdSvZ6USNOIRGKxiEnEYkMHpn4BC0obiUlj8tZSX0BCTJKGIDZWwiYMEglhs5RGe889pz0+gd+vZWOv/DuSVDAtm8rtOTfqEPePOaT0M … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/389.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/389.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4)

#### 1. `bundles/bloxd.io/chunks/js/389.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/389.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/389.js#L4-L5)

```diff
-   43760: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAANCAYAAACjDOAMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJjSURBVFiF7ZbNS1RhFIefiaCU/IohSxsiBElosBknN8L4BS10lYES2N6dK/FvCFftZm8gBuZqWgh9KLRJU0MhGQiRsdFksJpkRlenhZ7hXufet7mzqrjP8j7vub/FgcMPf … [truncated]
+   44082: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAABCAYAAADq6085AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA8SURBVAiZATEAzv8B9Ke5//lBEQD1VWYA0wwrADMxNQDo4N4AC/P/ACOSdACgm5kANVRKAPLu7AAGX5UAEdoULN8RPVsAAAAASUVORK5CYII=","alphaCutoff":0,"ve … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/390.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/390.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061)

#### 1. `bundles/bloxd.io/chunks/js/390.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/390.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/390.js#L4-L5)

```diff
-   43766: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVCiRYwgKiv7PAAXIbBoBqlnHGB2T+Z+BgYHh+7dPKBKcXHwMDAwMDEuXTGdkIsYkFpgJ69YtZcTlVqJMop4iFpgv0MMIJk60SUQBAGjCGCvRlcOvAAAAAElFTkSuQ … [truncated]
+   44087: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAANCAYAAACjDOAMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJjSURBVFiF7ZbNS1RhFIefiaCU/IohSxsiBElosBknN8L4BS10lYES2N6dK/FvCFftZm8gBuZqWgh9KLRJU0MhGQiRsdFksJpkRlenhZ7hXufet7mzqrjP8j7vub/FgcMPf … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/391.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/391.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982)

#### 1. `bundles/bloxd.io/chunks/js/391.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/391.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/391.js#L4-L5)

```diff
-   43770: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABCSURBVBiVY1RSVv7PAAWXr1yHMRl0dTTh7Ht37zIyMRAJiFbI+PX7L7jVyNYhO4Obk40GVrPgsg5ZnCQTiVZINAAAQoERlZZrqhQAAAAASUVORK5CYII=","alphaCutof … [truncated]
+   44091: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVCiRYwgKiv7PAAXIbBoBqlnHGB2T+Z+BgYHh+7dPKBKcXHwMDAwMDEuXTGdkIsYkFpgJ69YtZcTlVqJMop4iFpgv0MMIJk60SUQBAGjCGCvRlcOvAAAAAElFTkSuQ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/392.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/392.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270d)

#### 1. `bundles/bloxd.io/chunks/js/392.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270d) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/392.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/392.js#L4-L5)

```diff
-   43778: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC+SURBVEiJY2xpn/qfgQhQU5nNSIra/XMz/jMwMDA4Js9gZCJGE6WABcaYN6cPq4KklCI4+/2bV0Qb7Jg8gxHDEmJAb28jIxHKMABJlpASJ8h8+sYJMYCUOCHbEorjBDkV4 … [truncated]
+   44093: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABCSURBVBiVY1RSVv7PAAWXr1yHMRl0dTTh7Ht37zIyMRAJiFbI+PX7L7jVyNYhO4Obk40GVrPgsg5ZnCQTiVZINAAAQoERlZZrqhQAAAAASUVORK5CYII=","alphaCutof … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/393.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/393.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234)

#### 1. `bundles/bloxd.io/chunks/js/393.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/393.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/393.js#L4-L5)

```diff
-   43787: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
+   44097: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC+SURBVEiJY2xpn/qfgQhQU5nNSIra/XMz/jMwMDA4Js9gZCJGE6WABcaYN6cPq4KklCI4+/2bV0Qb7Jg8gxHDEmJAb28jIxHKMABJlpASJ8h8+sYJMYCUOCHbEorjBDkV4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/394.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/394.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-597404c30f9730379880935b3eaa855def22325a0daac664ae2b9f2dc19ab239)

#### 1. `bundles/bloxd.io/chunks/js/394.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-597404c30f9730379880935b3eaa855def22325a0daac664ae2b9f2dc19ab239R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-597404c30f9730379880935b3eaa855def22325a0daac664ae2b9f2dc19ab239) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/394.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/394.js#L4-L5)

```diff
-   43792: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA5CAYAAACCsf3qAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFpSURBVGiB7drPbcIwFAbw98DqhVM40xWyAwsUiRVYoWOwAitEogt0h64A5xYhIapKNBx4QeAq9R/sxIm+380ScYL5/CJjM3maf5TlbTsbX5pfn+zb5b+KnON0LBQR0frn/ … [truncated]
+   44105: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/395.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/395.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-22d9fe7d368f667c90947d6b270ff468357439949ae7209c4b6ca108927cceec)

#### 1. `bundles/bloxd.io/chunks/js/395.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-22d9fe7d368f667c90947d6b270ff468357439949ae7209c4b6ca108927cceecR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-22d9fe7d368f667c90947d6b270ff468357439949ae7209c4b6ca108927cceec) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/395.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/395.js#L4-L5)

```diff
-   43800: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAaSURBVAiZY5ieLf7/8yqV/79fGfzvmLvmPwBVswq9s1wBAAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[1,0.52644,0.3074,1,0.52644,0.3074,1 … [truncated]
+   44112: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA5CAYAAACCsf3qAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFpSURBVGiB7drPbcIwFAbw98DqhVM40xWyAwsUiRVYoWOwAitEogt0h64A5xYhIapKNBx4QeAq9R/sxIm+380ScYL5/CJjM3maf5TlbTsbX5pfn+zb5b+KnON0LBQR0frn/ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/396.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/396.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1ab362876e52db5d309239495380271a7df7b312697b4671e347f0f7d4073fc7)

#### 1. `bundles/bloxd.io/chunks/js/396.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1ab362876e52db5d309239495380271a7df7b312697b4671e347f0f7d4073fc7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1ab362876e52db5d309239495380271a7df7b312697b4671e347f0f7d4073fc7) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/396.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/396.js#L4-L5)

```diff
-   43803: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHfSURBVEiJ7VS/S0JRGD03nsMbtAYhSMc3RKTDa4xQJApaAgWXVgfbbG9sbHARHPwLHhi0BElIEo41aIiDYwbCG8w3OPjgNlyvXt+75e3H0NBZLt/9vne/891z3iWOZVA9F … [truncated]
+   44117: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAaSURBVAiZY5ieLf7/8yqV/79fGfzvmLvmPwBVswq9s1wBAAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[1,0.52644,0.3074,1,0.52644,0.3074,1 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/397.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/397.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f7f7c7c89c5eed442844b0be110897a8ec194635b63fe394f73e7579d9be711f)

#### 1. `bundles/bloxd.io/chunks/js/397.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f7f7c7c89c5eed442844b0be110897a8ec194635b63fe394f73e7579d9be711fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f7f7c7c89c5eed442844b0be110897a8ec194635b63fe394f73e7579d9be711f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/397.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/397.js#L4-L5)

```diff
-   43810: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAqSURBVAiZY7wxWe6/+oJqBgaGswwMDGcZrkz8xiAuxsLAeeE7A09YKQMAwl8KmURuPDUAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.85713,0.70382 … [truncated]
+   44123: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHfSURBVEiJ7VS/S0JRGD03nsMbtAYhSMc3RKTDa4xQJApaAgWXVgfbbG9sbHARHPwLHhi0BElIEo41aIiDYwbCG8w3OPjgNlyvXt+75e3H0NBZLt/9vne/891z3iWOZVA9F … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/398.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/398.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-261b6d2bb8a4e56f3bfb2f690ec2b6333bb864a52ff9fec254b0b0351ca61168)

#### 1. `bundles/bloxd.io/chunks/js/398.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-261b6d2bb8a4e56f3bfb2f690ec2b6333bb864a52ff9fec254b0b0351ca61168R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-261b6d2bb8a4e56f3bfb2f690ec2b6333bb864a52ff9fec254b0b0351ca61168) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/398.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/398.js#L4-L5)

```diff
-   43813: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEbSURBVFiF7ZgxCsJAEEVnJAomNoKFWIjnEESs9BKezktoJSJYeQE7sQgWgk2SwhRrIQlOUNewWV2Ged3mh00m/082GwRDbpuB+qQ3xkf8xZy1shdxFSnENbx/3wAAwHXRI … [truncated]
+   44131: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAqSURBVAiZY7wxWe6/+oJqBgaGswwMDGcZrkz8xiAuxsLAeeE7A09YKQMAwl8KmURuPDUAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.85713,0.70382 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/399.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/399.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-90895c6f863987ed6541fc28f5f164165e18e815d727a14f3f531f501491c77d)

#### 1. `bundles/bloxd.io/chunks/js/399.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-90895c6f863987ed6541fc28f5f164165e18e815d727a14f3f531f501491c77dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-90895c6f863987ed6541fc28f5f164165e18e815d727a14f3f531f501491c77d) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/399.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/399.js#L4-L5)

```diff
-   43819: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANISURBVFiF5ZdLaFNZHMZ/uT1tzA2tqKtKQi1DFoUxLoTioiFZdOGgdlYKAelipCMM1BcUfNWFRSyKD9DFuIizcgozqxGDWCjMYBdVEUYRgq3QJykucmnU3NR7c42LJtfXv … [truncated]
+   44140: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEbSURBVFiF7ZgxCsJAEEVnJAomNoKFWIjnEESs9BKezktoJSJYeQE7sQgWgk2SwhRrIQlOUNewWV2Ged3mh00m/082GwRDbpuB+qQ3xkf8xZy1shdxFSnENbx/3wAAwHXRI … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/400.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/400.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-824826e19e46e611ae81cc96b6c394d7ca4ff430c1c2a991ca181214de33a35b)

#### 1. `bundles/bloxd.io/chunks/js/400.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-824826e19e46e611ae81cc96b6c394d7ca4ff430c1c2a991ca181214de33a35bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-824826e19e46e611ae81cc96b6c394d7ca4ff430c1c2a991ca181214de33a35b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/400.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/400.js#L4-L5)

```diff
-   43827: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAF9SURBVGiB7ZjfSsMwFMZPTbCo2/CFxH8wmTK88F288tLXmSIiw4ET6Rttw1HZrDcpNLFL2iaQEL7fXdqcNidfTpN+CVlyNrwuiIi2mw0REWXzWaLrf3IxLIiIGOdUjSs5P … [truncated]
+   44149: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANISURBVFiF5ZdLaFNZHMZ/uT1tzA2tqKtKQi1DFoUxLoTioiFZdOGgdlYKAelipCMM1BcUfNWFRSyKD9DFuIizcgozqxGDWCjMYBdVEUYRgq3QJykucmnU3NR7c42LJtfXv … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/401.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/401.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ff6c22d0403b441ebb5a9ccc02bf9736c66a8f3a0fa50819f478fe5f26a5fdb4)

#### 1. `bundles/bloxd.io/chunks/js/401.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ff6c22d0403b441ebb5a9ccc02bf9736c66a8f3a0fa50819f478fe5f26a5fdb4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ff6c22d0403b441ebb5a9ccc02bf9736c66a8f3a0fa50819f478fe5f26a5fdb4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/401.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/401.js#L4-L5)

```diff
-   43836: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAFyYoAOvp6gD+8e4AzmUa4gxrmFAAAAAAS … [truncated]
+   44151: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAF9SURBVGiB7ZjfSsMwFMZPTbCo2/CFxH8wmTK88F288tLXmSIiw4ET6Rttw1HZrDcpNLFL2iaQEL7fXdqcNidfTpN+CVlyNrwuiIi2mw0REWXzWaLrf3IxLIiIGOdUjSs5P … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/402.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/402.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4c405d18837fbe8cbe9aaf07c37ae5f8054c7082f76e96345e41a0a23ed2f5af)

#### 1. `bundles/bloxd.io/chunks/js/402.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4c405d18837fbe8cbe9aaf07c37ae5f8054c7082f76e96345e41a0a23ed2f5afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-4c405d18837fbe8cbe9aaf07c37ae5f8054c7082f76e96345e41a0a23ed2f5af) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/402.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/402.js#L4-L5)

```diff
-   43844: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY7RyWfaf+d8CBh5eXoZ38S0MADX5Bb3RlRVIAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
+   44158: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAFyYoAOvp6gD+8e4AzmUa4gxrmFAAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/403.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/403.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9853737249d1438d2da96d9fed2f1c94b1626bfdf695a77949456f214735c8af)

#### 1. `bundles/bloxd.io/chunks/js/403.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9853737249d1438d2da96d9fed2f1c94b1626bfdf695a77949456f214735c8afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-9853737249d1438d2da96d9fed2f1c94b1626bfdf695a77949456f214735c8af) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/403.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/403.js#L4-L5)

```diff
-   43847: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAACCAYAAAA3t6CmAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFoSURBVCiR7dDLK+QBAMDx70/jOfPzmt+MRmRkkvcjW5tGxq4cLOawTsNBKYUUF4/IZRwYMbub04iMsG0SGTalSVzVlJYUicM0K4SfR5QxxtVxL3vz+RM+wtiUM6jTasnKy … [truncated]
+   44161: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY7RyWfaf+d8CBh5eXoZ38S0MADX5Bb3RlRVIAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/404.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/404.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b15e8cfde8c11c3e67c4aba91fde1e87abda30c4b62f6c1ca93c0f6053dcd960)

#### 1. `bundles/bloxd.io/chunks/js/404.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b15e8cfde8c11c3e67c4aba91fde1e87abda30c4b62f6c1ca93c0f6053dcd960R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b15e8cfde8c11c3e67c4aba91fde1e87abda30c4b62f6c1ca93c0f6053dcd960) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/404.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/404.js#L4-L5)

```diff
-   43849: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACjSURBVDiNY2RgYGDoTTf8zwAFxTPPM6LzQ6IT4HwGBgaGNUsXMNo6uaGIHd63i5GJgYqAhYGBgUGC8xuKIDr/x/fvRBlGfZcRAlvWrWREFzu8bxeGGFGGYYsAbOqo780vX … [truncated]
+   44163: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAACCAYAAAA3t6CmAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFoSURBVCiR7dDLK+QBAMDx70/jOfPzmt+MRmRkkvcjW5tGxq4cLOawTsNBKYUUF4/IZRwYMbub04iMsG0SGTalSVzVlJYUicM0K4SfR5QxxtVxL3vz+RM+wtiUM6jTasnKy … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/405.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/405.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0cd31764e445499dae9e1623119a3f0c21e50369d49556ef56fa1bef3b8e44b9)

#### 1. `bundles/bloxd.io/chunks/js/405.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0cd31764e445499dae9e1623119a3f0c21e50369d49556ef56fa1bef3b8e44b9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0cd31764e445499dae9e1623119a3f0c21e50369d49556ef56fa1bef3b8e44b9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/405.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/405.js#L4-L5)

```diff
-   43856: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGQSURBVGiB7ZivT8QwFMffuCVLSI6/gF8GwykECf8BAocgQeERJBgwJzEo3HkUrigEfwXqMBggE2guIVmyMMR1yb2ya7e1SZvm+3Hd3tv23ndN229ClpxcbFRERGVZERGRm … [truncated]
+   44167: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACjSURBVDiNY2RgYGDoTTf8zwAFxTPPM6LzQ6IT4HwGBgaGNUsXMNo6uaGIHd63i5GJgYqAhYGBgUGC8xuKIDr/x/fvRBlGfZcRAlvWrWREFzu8bxeGGFGGYYsAbOqo780vX … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/406.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/406.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-36943ddaa695d97d1a935eb3c96a7529383a055fd819678a8d80b38f6e74473e)

#### 1. `bundles/bloxd.io/chunks/js/406.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-36943ddaa695d97d1a935eb3c96a7529383a055fd819678a8d80b38f6e74473eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-36943ddaa695d97d1a935eb3c96a7529383a055fd819678a8d80b38f6e74473e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/406.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/406.js#L4-L5)

```diff
-   43861: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAFTbLAOjp+AAD4T0A0BkZ4rm59cYAAAAAS … [truncated]
+   44176: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGQSURBVGiB7ZivT8QwFMffuCVLSI6/gF8GwykECf8BAocgQeERJBgwJzEo3HkUrigEfwXqMBggE2guIVmyMMR1yb2ya7e1SZvm+3Hd3tv23ndN229ClpxcbFRERGVZERGRm … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/407.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/407.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bcb3b8b0a954112d90233f067e1f31a0df7e4d9a61bbfac3b983d6b8eac1ae06)

#### 1. `bundles/bloxd.io/chunks/js/407.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bcb3b8b0a954112d90233f067e1f31a0df7e4d9a61bbfac3b983d6b8eac1ae06R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bcb3b8b0a954112d90233f067e1f31a0df7e4d9a61bbfac3b983d6b8eac1ae06) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/407.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/407.js#L4-L5)

```diff
-   43864: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZYzzttfd/u0I8Ay8vC8M2gXwGADicBSzq4ZO6AAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
+   44181: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAFTbLAOjp+AAD4T0A0BkZ4rm59cYAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/408.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/408.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3a24135e2a2243f6ad42ddb8a76b524921076704e7aea59f7381db1df76679)

#### 1. `bundles/bloxd.io/chunks/js/408.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3a24135e2a2243f6ad42ddb8a76b524921076704e7aea59f7381db1df76679R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-da3a24135e2a2243f6ad42ddb8a76b524921076704e7aea59f7381db1df76679) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/408.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/408.js#L4-L5)

```diff
-   43870: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY4wvV/jPwMDAsLDzAWNQlsx/BgYGBiYGLAAAv+IF21V42BkAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   44187: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZYzzttfd/u0I8Ay8vC8M2gXwGADicBSzq4ZO6AAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/409.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/409.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1ec4c60be473800338bf6f83e23db29f333d5d3fba029bba4252d9fc64c24f50)

#### 1. `bundles/bloxd.io/chunks/js/409.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1ec4c60be473800338bf6f83e23db29f333d5d3fba029bba4252d9fc64c24f50R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1ec4c60be473800338bf6f83e23db29f333d5d3fba029bba4252d9fc64c24f50) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/409.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/409.js#L4-L5)

```diff
-   43878: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAACCAYAAAAti0AoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFQSURBVCiR7dDLK8MBAMDx70/z3H5e+22aCFnyDOfJPHLwPHAaB6UUWnHxiFx2mSlDThOZPJJkGVKSuKqVkCKh1ghhHlE25uro4OjzJ3yEsSl7QKNWk5megXPHxW/Mjrp59 … [truncated]
+   44191: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY4wvV/jPwMDAsLDzAWNQlsx/BgYGBiYGLAAAv+IF21V42BkAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/410.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/410.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1eab6a178dcbc4b81acc6a562e03b8503415994912e42b89b643b672889642f5)

#### 1. `bundles/bloxd.io/chunks/js/410.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1eab6a178dcbc4b81acc6a562e03b8503415994912e42b89b643b672889642f5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1eab6a178dcbc4b81acc6a562e03b8503415994912e42b89b643b672889642f5) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/410.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/410.js#L4-L5)

```diff
-   43887: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACiSURBVDiNY2RgYGCYVKj6nwEK8vpvM6LzM1uU4XwGBgaG6TV3GYOyZFDE1k17wsjEQEXAwsDAwCD8H9VMdP6P7/+IMoz6LiME5rfeZ0QXWzftCYYYUYZhiwBs6qjvzS9fv … [truncated]
+   44193: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAACCAYAAAAti0AoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFQSURBVCiR7dDLK8MBAMDx70/z3H5e+22aCFnyDOfJPHLwPHAaB6UUWnHxiFx2mSlDThOZPJJkGVKSuKqVkCKh1ghhHlE25uro4OjzJ3yEsSl7QKNWk5megXPHxW/Mjrp59 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/411.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/411.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7c6533e4f1ab7ae7c2e6e0684120636dbc41504a563c6deb8305568b84760ee1)

#### 1. `bundles/bloxd.io/chunks/js/411.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7c6533e4f1ab7ae7c2e6e0684120636dbc41504a563c6deb8305568b84760ee1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-7c6533e4f1ab7ae7c2e6e0684120636dbc41504a563c6deb8305568b84760ee1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/411.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/411.js#L4-L5)

```diff
-   43889: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGDSURBVGiB7ZgxTsNAEEX/WKN0uUEKKiouwDUiUdOnoqNLQUcFlXsqiki+BhegokKRb+Auitg0MVpBitj/24yQnxRtVkrGM/tnxqO19fNNAsHD3caWqwVloypriQ1//3hjb … [truncated]
+   44198: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACiSURBVDiNY2RgYGCYVKj6nwEK8vpvM6LzM1uU4XwGBgaG6TV3GYOyZFDE1k17wsjEQEXAwsDAwCD8H9VMdP6P7/+IMoz6LiME5rfeZ0QXWzftCYYYUYZhiwBs6qjvzS9fv … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/412.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/412.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-063fe3d5f83c171a032fdf9ed2c4d9d4ae0cf930cb77eb1af9f8f500727cefcc)

#### 1. `bundles/bloxd.io/chunks/js/412.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-063fe3d5f83c171a032fdf9ed2c4d9d4ae0cf930cb77eb1af9f8f500727cefccR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-063fe3d5f83c171a032fdf9ed2c4d9d4ae0cf930cb77eb1af9f8f500727cefcc) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/412.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/412.js#L4-L5)

```diff
-   43895: RR => {
-     RR.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY/T0D/7PwMDAsH3jWkZbJ7f/DAwMDEwMWAAAvTcFyNvAMsUAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   44202: rr => {
+     rr.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGDSURBVGiB7ZgxTsNAEEX/WKN0uUEKKiouwDUiUdOnoqNLQUcFlXsqiki+BhegokKRb+Auitg0MVpBitj/24yQnxRtVkrGM/tnxqO19fNNAsHD3caWqwVloypriQ1//3hjb … [truncated]
```
