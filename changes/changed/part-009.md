# Changed — Bundle Modifications Report (Part 009 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `9 / 65` (**305** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 008](part-008.md) · [Part 010 →](part-010.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/135.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/135.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13)

#### 17. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L301` → after: `L301-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L301-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L301-L304) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L301)

```diff
-       return (DD / sD).toFixed(1)
+       return Object.keys(pp.files).map((ip => ({
+         path: ip,
+         source: pp.files[ip]
+       })))
```

#### 18. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L303-L342` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L306) · [Before (L303-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L303-L342)

```diff
-   },
-   36232: DD => {
-     DD.exports = function(DD, zD, wD, pD) {
-       var sD = self || window;
-       try {
-         try {
-           var KD;
-           try {
-             KD = new sD.Blob([DD])
-           } catch (gD) {
-             (KD = new(sD.BlobBuilder || sD.WebKitBlobBuilder || sD.MozBlobBuilder || sD.MSBlobBuilder)).append(DD), KD = KD.getBlob()
-           }
-           var rD = sD.URL || sD.webkitURL,
-             LD = rD.createObjectURL(KD),
-             cD = new sD[zD](LD, wD);
-           return rD.revokeObjectURL(LD), cD
- ... (24 more removed lines; see GitHub link above)
+     let Wp = Promise.resolve();
```

#### 19. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L345` → after: `L309-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L309-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L309-L310) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L345)

```diff
-       return DD.pathname.slice(DD.pathname.lastIndexOf("/") + 1)
+       const ip = Wp.then(pp);
+       return Wp = ip.catch((() => {})), ip
```

#### 20. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L348-L355` → after: `L313-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L313-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L313-L325) · [Before (L348-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L348-L355)

```diff
-     function UD() {
-       try {
-         if ("undefined" === typeof localStorage) return null;
-         const DD = JSON.parse(localStorage.getItem(gD) ?? "[]");
-         return Array.isArray(DD) ? DD.filter((DD => "string" === typeof DD)) : []
-       } catch (DD) {
-         return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", DD), null
-       }
+     function Up(pp, ip) {
+       return yp((() => vp(pp, ip)))
+     }
+ 
+     function wp(pp, ip, cp) {
+       return yp((async () => JSON.stringify(await (0, xp.f)()) === JSON.stringify(pp) && (null === ip ? (await tp(), !0) : vp(ip, cp))))
+     }
+     async function vp(pp, ip) {
+       const cp = await Ip.g.setItem(xp.e, pp);
+       return cp && Ep(pp, ip), cp
+     }
+     async function tp() {
+       await Ip.g.removeItem(xp.e), Ip.h.removeItem(Sp.d)
```

#### 21. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L374` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L329) · [Before (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L374)

```diff
-       return OD && !JD
+       return yp(tp)
```

#### 22. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L376-L396` → after: `L331-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L331-L333) · [Before (L376-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L376-L396)

```diff
-     class QD {
-       worker = null;
-       failed = !1;
-       constructor() {
-         if (ED()) try {
-           this.worker = VD(), fD(hD, this.worker, ["error", () => {
-             this.failed = !0
-           }])
-         } catch {
-           this.stop()
-         }
-       }
-       take() {
-         const DD = this.worker;
-         if (this.worker = null, null !== DD && this.failed) throw fD(GD, DD, []), new Error("it did not run");
-         return DD
- ... (5 more removed lines; see GitHub link above)
+ 
+     function dp(pp, ip) {
+       return "active" === ep(pp, ip).kind
```

#### 23. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L398-L448` → after: `L335-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L335-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L335-L357) · [Before (L398-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L398-L448)

```diff
-     class XD {
-       decoded;
-       worker;
-       reject;
-       constructor(DD, zD, wD, pD, KD) {
-         try {
-           this.worker = KD?.take() ?? VD()
-         } catch (gD) {
-           throw JD = !0, new Error(`The zstd decoder's worker did not start: ${(0,LD.d)(gD)}`)
-         }
-         const rD = this.worker;
-         this.decoded = (0, sD.k)(((zD, sD) => {
-           this.reject = sD;
-           const KD = (DD, zD) => {
-             fD(hD, rD, [DD, zD])
-           };
- ... (35 more removed lines; see GitHub link above)
+ 
+     function ep(pp, ip) {
+       var cp;
+       return null === pp ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : mp(pp) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.ok) || pp.validation.fromRecheck ? null === ip ? {
+         kind: "none",
+         reason: "noCompiler"
+       } : qp(pp, ip) ? {
+         kind: "blocked",
+         messageKey: "shaderPack:failedUnchecked"
+       } : pp.validation.ok ? {
+ ... (7 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L453-L457` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L362) · [Before (L453-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L453-L457)

```diff
-       if (globalThis.Worker !== ID) throw new Error("Worker is not the one the page loaded with");
-       return new Worker(new URL(wD.p + wD.u(67), wD.b), {
-         name: "wasmZstdDecoder",
-         type: "module"
-       })
+       Ip.l.setItem(Yp, performance.timeOrigin)
```

#### 25. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L459-L613` → after: `L364-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L364-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L364-L366) · [Before (L459-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L459-L613)

```diff
-     const PD = Reflect.apply,
-       CD = ArrayBuffer,
-       xD = "undefined" === typeof Response ? void 0 : Response,
-       TD = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
-       bD = function() {
-         let DD;
-         void 0 !== TD && new TD({
-           __proto__: null,
-           start(zD) {
-             const {
-               enqueue: wD,
-               close: pD,
-               error: sD
-             } = Object.getPrototypeOf(zD);
-             DD = {
-               enqueue: wD,
- ... (139 more removed lines; see GitHub link above)
+ 
+     function kp() {
+       return Ip.l.getItem(Yp) === performance.timeOrigin
```

#### 26. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L617-L619` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L370) · [Before (L617-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L617-L619)

```diff
-       try {
-         (0, cD.R)(DD.cancel())
-       } catch {}
+       return !(0, op.k)(pp.manifest.apiVersion)
```

#### 27. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L626-L685` → after: `L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L374) · [Before (L626-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L626-L685)

```diff
-       return WD ??= function() {
-         const DD = new Map,
-           zD = "bloxd_wasm_webgpu:5121192,bloxd_wasm_webgl:5503528,bloxd_wasm_webgl1:4839018,bloxd_wasm_workers:201241,bloxd_wasm_models:311531,bloxd_wasm_client:3704228";
-         for (const wD of zD?.split(",") ?? []) {
-           const [zD = "", pD] = wD.split(":"), sD = Number(pD);
-           Number.isInteger(sD) && sD > 0 && DD.set(zD, sD)
-         }
-         return DD
-       }(), WD.get(DD)
-     }
-     async function ZD(DD, zD) {
-       let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const pD = ND(DD.name);
-       if (void 0 === pD) return yD(await kD(DD, zD, wD), "cold-wasm");
-       const KD = jD ? new QD : null;
-       let rD;
- ... (44 more removed lines; see GitHub link above)
+       return Dp ??= pp.Rl((0, Lp.shaderPackTextures)()), Dp
```

#### 28. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L689-L693` → after: `L378-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L378-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L378-L379) · [Before (L689-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L689-L693)

```diff
-       return {
-         __proto__: null,
-         module: DD,
-         path: zD
-       }
+       var cp;
+       return (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.headerVersion) !== Rp(ip)
```

#### 29. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L696-L724` → after: `L382-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L382-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L382-L385) · [Before (L696-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L696-L724)

```diff
-     function kD(DD, zD, wD) {
-       return void 0 === ND(DD.name) ? (0, cD.B)(DD.url(), zD, wD) : (0, cD.B)(DD.url(), zD, {
-         ...wD,
-         hideThen: !0,
-         onDownloaded: () => {
-           ! function(DD) {
-             const zD = UD();
-             if (null === zD) return;
-             const wD = AD(DD),
-               pD = zD.filter((DD => DD !== wD));
-             pD.push(wD);
-             try {
-               localStorage.setItem(gD, JSON.stringify(pD.slice(-RD)))
-             } catch (sD) {
-               console.warn(`Bloxd wasm: ${wD} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, sD)
-             }
- ... (13 more removed lines; see GitHub link above)
+     function Mp(pp) {
+       return yp((async () => {
+         Ep(await (0, xp.f)(!0), pp)
+       }))
```

#### 30. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L731-L732` → after: `L388-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L388-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L388-L391) · [Before (L731-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L731-L732)

```diff
-     function vD(DD, zD, wD) {
-       return null === eD ? eD = FD(DD, zD, wD?.memoryMaximumBytes) : DD !== eD.build ? console.warn(`Bloxd wasm: ${DD.name} was asked for after ${eD.build.name} started loading, which this thread keeps`) : zD.name !== eD.workers.name && console.warn(`Bloxd wasm: ${zD.name} was as … [truncated]
+     function Cp() {
+       return yp((async () => {
+         Ip.h.removeItem(Sp.d)
+       }))
```

#### 31. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L736-L788` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L395) · [Before (L736-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L736-L788)

```diff
-       if (null !== eD) return (0, sD.h)([]);
-       const wD = DD.filter((DD => !aD.has(DD.name))).map((DD => {
-         const wD = new AbortController,
-           pD = {
-             compiled: kD(DD, (0, KD.d)(DD.name), {
-               priority: zD,
-               sw: wD.signal,
-               onDownloaded: () => {
-                 pD.downloaded = !0
-               },
-               retries: {
-                 onRetry: () => {
-                   pD.downloaded = !1, null !== eD && wD.abort()
-                 }
-               }
-             }),
- ... (37 more removed lines; see GitHub link above)
+       dp(pp, ip) ? Ip.h.setItem(Sp.d, !0) : Ip.h.removeItem(Sp.d)
```

#### 32. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L791-L792` → after: `L407-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L407-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L407-L415) · [Before (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L791-L792)

```diff
-     function YD(DD) {
-       return uD.get(DD)
+     function Sp() {
+       return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: ip,
+           textureNameToIndex: cp,
+           textureAnimationData: Ip
+         } = pp;
+         return op ??= (0, Op.j)(cp, Ip, ip), op
+       })), Ip
```

#### 33. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L795-L826` → after: `L418-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L418-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L418-L419) · [Before (L795-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L795-L826)

```diff
-     function HD(DD) {
-       const zD = performance.now(),
-         wD = aD.get(DD.name);
-       aD.delete(DD.name);
-       const pD = !0 === wD?.downloaded ? wD : void 0;
-       return void 0 !== wD && void 0 === pD && wD.cancel.abort(), (0, sD.k)(((wD, KD) => {
-         const rD = (pD, sD) => {
-             uD.set(DD.name, {
-               path: sD,
-               ms: performance.now() - zD
-             }), wD(pD)
-           },
-           LD = () => {
-             (0, sD.u)(Dz(DD), (DD => {
-               let {
-                 module: zD,
- ... (16 more removed lines; see GitHub link above)
+     function xp() {
+       if (null === op) throw new Error("Shader pack textures read before loadShaderPackTextures");
```

#### 34. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L834` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L423) · [Before (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L834)

```diff
-   6653: (DD, zD, wD) => {
+   6792: (pp, ip, cp) => {
```

#### 35. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L836` → after: `L425-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L425-L426) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L836)

```diff
-       d: () => rD
+       e: () => Lp,
+       h: () => xp
```

#### 36. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L838-L853` → after: `L428-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L428-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L428-L492) · [Before (L838-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L838-L853)

```diff
-     var pD = wD(2868);
-     const sD = {
-       bloxd_wasm: () => "65e53edc5e3e962e1a92a587d8a28027f8eb8bbf9d122ae3c4664a5d1e3eeb52",
-       bloxd_wasm_client: () => "8bc7382052570456e32df38bb06cf837a4cdcf0c6efeb71183c9d9d96efdecc2",
-       bloxd_wasm_workers: () => "9d62ece3db9e2837185fc5cbad53d14e1aa611299a39cfe5dd4f80c692bc8153",
-       bloxd_wasm_models: () => "d952d307f65587ac75621c390045d763a956e5786dbdece0affe80fd6c11a572",
-       bloxd_wasm_webgpu: () => "aaf47b22bd97d7f9059c5cc77097acb8001c433a0191aa99b3b272ad0af40d0c",
-       bloxd_wasm_webgl: () => "758269d3a7396a32bdaeee633b3c45cd4d1efb4fd30ca2bacc7ee762494718ff",
-       bloxd_wasm_webgl1: () => "e473a9c2912b1b2ebd1af57ce23061b2484e5ad7c6b3bb8302c55025cbdc6150",
-       bloxd_wasm_replay: () => "fb6a7b64a8768ff2eb5122b936925ed35cbdcfc5efaf1bf3b7d53b1f4d483eae",
-       bloxd_wasm_recorder: () => "b5295674c11fb730f85cc5f9aef22b1971a45cc8f95ff014897be3749114a35e",
-       bloxd_wasm_anim: () => "2108b3f685a0b7e36780befaa10a018b8b914c00b52465c4d8de81cd4aaad1b7",
-       bloxd_wasm_textures: () => "441f3f36c1158de1a8f992401057b7b30a10760b00006c152617c9a76cf0dbfa",
-       bloxd_wasm_shader_pack: () => "504138fb584a53bf18bce9d737fbad86034e70bedc89181a53adee1dec66ef20"
-     };
-     var KD = wD(4722);
+     var Op = cp(6798),
+       op = cp(6772),
+       Ip = cp(118);
+     const Sp = 100;
+     async function xp(pp, ip) {
+       var cp;
+       let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (cp = navigator.gpu) && void 0 !== cp ? cp : null;
+       const Sp = pp.ipp(ip, (0, op.shaderPackTextures)());
+       if (Sp.errors.length > 0) return Yp(pp, Sp.errors, Sp.offInStrict);
+       const xp = await async function(pp) {
+         if (!pp) return null;
+         try {
+           const ip = await (0, Ip.s)(pp);
+           return ip ? await ip.requestDevice() : null
+         } catch (ip) {
+           return console.error("Couldn't get a WebGPU device to validate the shader pack.", ip), null
+ ... (49 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/135.js` (Changed code · before: `L855-L861` → after: `L494-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-723b341b43da1361d12e3020dfccf3d0f9c7988596be1a67190b7da71c544a13) · [After (L494-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/135.js#L494-L501) · [Before (L855-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/135.js#L855-L861)

```diff
-     function rD(DD) {
-       const zD = Object.prototype.hasOwnProperty.call(sD, DD) ? sD[DD]() : void 0;
-       if (void 0 !== zD) return {
-         sha256: zD,
-         onMismatch: KD.B
-       };
-       throw new pD.l(`${DD} has no release digest, so this build refuses it`)
+     function Yp(pp, ip, cp) {
+       return {
+         headerVersion: (0, Op.pageShaderPackValidationVersion)(pp),
+         ok: 0 === ip.length,
+         errors: ip.slice(0, Sp),
+         moreErrors: Math.max(0, ip.length - Sp),
+         offInStrict: cp
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/136.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/136.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036)

#### 1. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/136.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/136.js#L4)

```diff
-   6664: (DD, zD, wD) => {
+   6758: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/136.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/136.js#L6-L7)

```diff
-       loadShaderPackTextures: () => rD,
-       shaderPackTextures: () => LD
+       loadPageShaderPackCompiler: () => yi
```

#### 3. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L9` → after: `L8-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L8-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/136.js#L8-L445) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/136.js#L9)

```diff
-     var pD = wD(5084);
+     var Op = {};
+     cp.r(Op), cp.d(Op, {
+       Gop: () => op,
+       ipp: () => Ip,
+       default: () => gp,
+       rop: () => Sp,
+       Zop: () => xp,
+       initSync: () => Fp,
+       eA: () => Lp,
+       eOp: () => Yp,
+       zop: () => Dp,
+       sop: () => Ap,
+       Ql: () => Pp,
+       Kop: () => Wp,
+       Rl: () => yp,
+       Vop: () => Up
+ ... (422 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/136.js` (Changed code · before: `L14-L25` → after: `L450-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0cdf42286e51664aff28504e88873db6904cdbe4f45327213c1357f0fa053036) · [After (L450-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/136.js#L450-L486) · [Before (L14-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/136.js#L14-L25)

```diff
-       return KD ??= Promise.all([wD.e(72), wD.e(188)]).then((() => wD(40415))).then((DD => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: zD,
-           textureNameToIndex: wD,
-           textureAnimationData: KD
-         } = DD;
-         return sD ??= (0, pD.m)(wD, KD, zD), sD
-       })), KD
-     }
- 
-     function LD() {
-       if (null === sD) throw new Error("Shader pack textures read before loadShaderPackTextures");
+       return zp ? Promise.resolve(zp) : (sp || (sp = async function() {
+         let pp;
+         try {
+           pp = await (0, Gp.C)(new cp.U(cp(6770)), (0, rp.e)("bloxd_wasm_shader_pack"))
+         } catch (ip) {
+           throw new Zp((0, Gp.J)(ip), ip)
+         }
+         try {
+           await gp({
+             module_or_path: pp
+           })
+         } catch (ip) {
+           throw new Zp("instantiate", ip)
+         }
+         return zp = Op, zp
+       }(), sp.then(void 0, (() => {
+ ... (21 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/137.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/137.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a)

#### 1. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/137.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/137.js#L2)

```diff
- export const ids = [136, 137];
+ export const ids = [137];
```

#### 2. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L4-L19` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/137.js#L4-L9) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/137.js#L4-L19)

```diff
-   6691: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       forgetShaderPackActiveHint: () => xD,
-       isOtherApiVersion: () => XD,
-       isShaderPackActive: () => OD,
-       isShaderPackChangePending: () => QD,
-       markShaderPackChangePending: () => ED,
-       pageShaderPackValidationVersion: () => VD,
-       reconcileStoredShaderPackHint: () => CD,
-       removeShaderPack: () => MD,
-       replaceShaderPack: () => GD,
-       saveShaderPack: () => BD,
-       shaderPackNeedsCheck: () => PD,
-       storedPackOutcome: () => JD,
-       storedShaderPackFiles: () => UD,
-       toStoredShaderPack: () => AD
+   36519: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => zp,
+       f: () => ii,
+       i: () => Kp,
+       k: () => Zp
```

#### 3. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L21-L27` → after: `L11-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L11-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/137.js#L11-L298) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/137.js#L21-L27)

```diff
-     var pD = wD(5084),
-       sD = wD(5076),
-       KD = wD(35),
-       rD = wD(3462),
-       LD = wD(6693),
-       cD = wD(6664);
-     const gD = "shaderPackChangePending";
+     var Op = cp(2963),
+       op = cp(2980),
+       Ip = cp(6762),
+       Sp = cp(4791),
+       xp = cp(2975),
+       Lp = cp(2970);
+     const Yp = "bloxd-wasmDownloaded",
+       Dp = 12;
+ 
+     function Ap(pp) {
+       return pp.pathname.slice(pp.pathname.lastIndexOf("/") + 1)
+     }
+ 
+     function Pp() {
+       try {
+         if ("undefined" === typeof localStorage) return null;
+ ... (272 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L32-L37` → after: `L460-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L460-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/137.js#L460-L463) · [Before (L32-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/137.js#L32-L37)

```diff
-         manifest: DD.manifest,
-         files: (0, pD.z)(DD.files),
-         validation: zD,
-         ...wD && {
-           listing: wD
-         }
+         build: pp,
+         workers: ip,
+         memoryMaximumBytes: cp,
+         loaded: Ip
```

#### 5. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L42-L47` → after: `L468-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L468-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/137.js#L468-L469) · [Before (L42-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/137.js#L42-L47)

```diff
-       return Object.keys(DD.files).map((zD => ({
-         path: zD,
-         source: DD.files[zD]
-       })))
-     }
-     let fD = Promise.resolve();
+       return rp.get(pp)
+     }
```

#### 6. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L50-L59` → after: `L472-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L472-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/137.js#L472-L495) · [Before (L50-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/137.js#L50-L59)

```diff
-       const zD = fD.then(DD);
-       return fD = zD.catch((() => {})), zD
-     }
- 
-     function BD(DD, zD) {
-       return ID((() => hD(DD, zD)))
-     }
- 
-     function GD(DD, zD, wD) {
-       return ID((async () => JSON.stringify(await (0, LD.c)()) === JSON.stringify(DD) && (null === zD ? (await nD(), !0) : hD(zD, wD))))
+       const ip = performance.now(),
+         cp = Gp.get(pp.name);
+       Gp.delete(pp.name);
+       const Op = !0 === cp?.downloaded ? cp : void 0;
+       return void 0 !== cp && void 0 === Op && cp.cancel.abort(), (0, op.j)(((cp, Ip) => {
+         const Sp = (Op, op) => {
+             rp.set(pp.name, {
+               path: op,
+               ms: performance.now() - ip
+             }), cp(Op)
+           },
+           xp = () => {
+             (0, op.u)(ci(pp), (pp => {
+               let {
+                 module: ip,
+                 path: cp
+ ... (8 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L62-L108` → after: `L498-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L498-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/137.js#L498-L529) · [Before (L62-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/137.js#L62-L108)

```diff
-       const wD = await KD.g.setItem(LD.b, DD);
-       return wD && TD(DD, zD), wD
-     }
-     async function nD() {
-       await KD.g.removeItem(LD.b), KD.h.removeItem(rD.e)
-     }
- 
-     function MD() {
-       return ID(nD)
-     }
- 
-     function OD(DD, zD) {
-       return "active" === JD(DD, zD).kind
-     }
- 
-     function JD(DD, zD) {
- ... (31 more removed lines; see GitHub link above)
+       const {
+         module: cp
+       } = await ci(pp, {
+         retries: ip
+       });
+       return cp
+     }
+     async function ci(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       return await bp(pp, (0, Ip.e)(pp.name), ip)
+     }
+   },
+   6762: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp
+     });
+ ... (16 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/137.js` (Changed code · before: `L111-L161` → after: `L532-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493aR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6a09dfe0684e796645fa89c3590def8efa80891503befbb6eee5cb96f565493a) · [After (L532-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/137.js#L532-L537) · [Before (L111-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/137.js#L111-L161)

```diff
-       return !(0, sD.h)(DD.manifest.apiVersion)
-     }
- 
-     function VD(DD) {
-       return RD ??= DD.qS((0, cD.shaderPackTextures)()), RD
-     }
- 
-     function PD(DD, zD) {
-       var wD;
-       return (null === (wD = DD.validation) || void 0 === wD ? void 0 : wD.headerVersion) !== VD(zD)
-     }
- 
-     function CD(DD) {
-       return ID((async () => {
-         TD(await (0, LD.c)(!0), DD)
-       }))
- ... (35 more removed lines; see GitHub link above)
+       const ip = Object.prototype.hasOwnProperty.call(op, pp) ? op[pp]() : void 0;
+       if (void 0 !== ip) return {
+         sha256: ip,
+         onMismatch: Ip.v
+       };
+       throw new Op.g(`${pp} has no release digest, so this build refuses it`)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/138.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/138.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4)

#### 1. `bundles/bloxd.io/chunks/js/138.js` (Changed code · before: `L4-L9` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/138.js#L4-L7) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/138.js#L4-L9)

```diff
-   6670: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => OD,
-       e: () => JD,
-       f: () => nD,
-       h: () => hD
+   6772: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       loadShaderPackTextures: () => Sp,
+       shaderPackTextures: () => xp
```

#### 2. `bundles/bloxd.io/chunks/js/138.js` (Changed code · before: `L11-L22` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/138.js#L9-L11) · [Before (L11-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/138.js#L11-L22)

```diff
-     var pD = wD(6678);
-     const sD = 6,
-       KD = 3,
-       rD = 1,
-       LD = 2,
-       cD = 4,
-       gD = 8,
-       RD = 16,
-       AD = 32,
-       UD = 64,
-       fD = 128,
-       ID = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];
+     var Op = cp(5167);
+     let op = null,
+       Ip = null;
```

#### 3. `bundles/bloxd.io/chunks/js/138.js` (Changed code · before: `L24-L27` → after: `L13-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8a5a9cae7ca8b1d6f113ef92e0ed2af1dcf6a16a1132b935cc22133e5b471aa4) · [After (L13-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/138.js#L13-L25) · [Before (L24-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/138.js#L24-L27)

```diff
-     function BD(DD) {
-       if (!DD) return 0;
-       const zD = ID.indexOf(DD);
-       if (zD <= 0) throw new Error(`"${DD}" is not a shader pack hook function`);
+     function Sp() {
+       return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: ip,
+           textureNameToIndex: cp,
+           textureAnimationData: Ip
+         } = pp;
+         return op ??= (0, Op.j)(cp, Ip, ip), op
+       })), Ip
+     }
+ 
+     function xp() {
+       if (null === op) throw new Error("Shader pack textures read before loadShaderPackTextures");
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/139.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/139.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28)

#### 1. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L2)

```diff
- export const ids = [139];
+ export const ids = [138, 139];
```

#### 2. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L4-L2469` → after: `L4-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L4-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L4-L28) · [Before (L4-L2469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L4-L2469)

```diff
-   40562: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => pD,
-       c: () => RD,
-       d: () => rD,
-       g: () => sD,
-       k: () => LD,
-       l: () => gD
-     });
-     class pD extends Error {
-       constructor() {
-         super(...arguments), this.name = "CoreCorruption"
-       }
-     }
- 
-     function sD(DD) {
- ... (2450 more removed lines; see GitHub link above)
+   6798: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       forgetShaderPackActiveHint: () => Cp,
+       isOtherApiVersion: () => mp,
+       isShaderPackActive: () => dp,
+       isShaderPackChangePending: () => kp,
+       markShaderPackChangePending: () => jp,
+       pageShaderPackValidationVersion: () => Rp,
+       reconcileStoredShaderPackHint: () => Mp,
+       removeShaderPack: () => Hp,
+       replaceShaderPack: () => wp,
+       saveShaderPack: () => Up,
+       shaderPackNeedsCheck: () => qp,
+       storedPackOutcome: () => ep,
+       storedShaderPackFiles: () => Pp,
+       toStoredShaderPack: () => Ap
+ ... (9 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L2472-L2495` → after: `L31-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L31-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L31-L36) · [Before (L2472-L2495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L2472-L2495)

```diff
-       let rD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
-       return KD.has(DD) ? Promise.reject(new sD(zD, KD.get(DD), !0)) : new Promise(((KD, cD) => {
-         const RD = wD => {
-             LD(DD, wD), fD(), cD(new sD(zD, wD))
-           },
-           AD = DD => {
-             DD instanceof WebAssembly.RuntimeError ? RD(DD) : (fD(), cD(DD))
-           },
-           UD = gD.map((DD => {
-             let [zD, wD] = DD;
-             return [zD, DD => {
-               const zD = wD(DD);
-               (0, pD.j)(zD) && RD(zD)
-             }]
-           })),
-           fD = () => {
- ... (8 more removed lines; see GitHub link above)
+       return {
+         manifest: pp.manifest,
+         files: (0, Op.v)(pp.files),
+         validation: ip,
+         ...cp && {
+           listing: cp
```

#### 4. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L2497-L2588` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L38) · [Before (L2497-L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L2497-L2588)

```diff
-         ID.then((DD => {
-           fD(), KD(DD)
-         }), AD)
-       }))
-     }
-   },
-   40630: (DD, zD, wD) => {
-     wD.d(zD, {
-       A: () => dD,
-       D: () => XD,
-       H: () => bD,
-       L: () => mD,
-       N: () => jD,
-       Q: () => iD,
-       R: () => TD,
-       b: () => QD,
- ... (76 more removed lines; see GitHub link above)
+       }
```

#### 5. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L2592-L2595` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L42-L45) · [Before (L2592-L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L2592-L2595)

```diff
-       return DD ? DD.load() : Promise.resolve().then((function() {
-         var DD = new Error("Cannot find module '@bloxd/wasm/client'");
-         throw DD.code = "MODULE_NOT_FOUND", DD
-       })).then((DD => DD.bloxdWasmClient))
+       return Object.keys(pp.files).map((ip => ({
+         path: ip,
+         source: pp.files[ip]
+       })))
```

#### 6. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L2599-L2634` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L50-L51) · [Before (L2599-L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L2599-L2634)

```diff
-       LD.h.setItem(fD, DD)
-     }
-     async function lD() {
-       if (null === RD.f) return SD(null);
-       const DD = LD.h.getItem(fD);
-       let zD = "none" === DD ? null : "webgl";
-       return null !== DD && "none" !== DD && ("string" === typeof DD && void 0 !== (0, pD.d)(RD.f, DD) ? zD = DD : console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(DD)}, is none of this client's: guessing WebGL2's`)), null === zD ? null : RD.f[zD]()
-     }
-     let WD = null,
-       ND = null,
-       ZD = null;
- 
-     function yD() {
-       return WD ??= jD().then((async DD => {
-         const zD = null !== DD && !(0, cD.n)(DD),
-           wD = {
- ... (20 more removed lines; see GitHub link above)
+       const ip = Wp.then(pp);
+       return Wp = ip.catch((() => {})), ip
```

#### 7. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L2646-L2649` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L55) · [Before (L2646-L2649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L2646-L2649)

```diff
-       return (0, pD.m)(DD, sD.e, {
-         ...zD,
-         memoryMaximumBytes: (0, KD.o)()
-       })
+       return yp((() => vp(pp, ip)))
```

#### 8. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L2694-L2764` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L59) · [Before (L2694-L2764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L2694-L2764)

```diff
-       return DD === rD ? "program retry" : DD === KD ? "program link" : DD === gD ? "program link stall" : DD === LD || DD === cD ? `program ${zD} ${wD}` : "program"
-     }
-     const UD = {
-         1: "renderer",
-         2: "sky",
-         3: "meshes",
-         4: "terrain"
-       },
-       fD = {
-         0: "transform",
-         1: "object",
-         2: "instance batch",
-         3: "material",
-         4: "terrain part",
-         5: "particle system",
-         6: "geometry",
- ... (55 more removed lines; see GitHub link above)
+       return yp((async () => JSON.stringify(await (0, xp.f)()) === JSON.stringify(pp) && (null === ip ? (await tp(), !0) : vp(ip, cp))))
```

#### 9. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L2766-L2860` → after: `L61-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L61-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L61-L63) · [Before (L2766-L2860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L2766-L2860)

```diff
- 
-     function QD() {
-       return JD((0, sD.b)())
-     }
- 
-     function XD(DD, zD) {
-       switch (DD) {
-         case pD.o.RenderSceneRowNotDrawn:
-           return {
-             words: ` ${ED(fD,zD)}`, instance: String(zD), group: String(DD)
-           };
-         case pD.o.RenderChunkMeshNotDrawn: {
-           const wD = 0 === (128 & zD) ? "" : " shortage",
-             pD = zD >>> 8;
-           return {
-             words: ` ${ED(ID,127&zD)}${wD}${0===pD?"":` kind ${JD(pD)}`}`,
- ... (79 more removed lines; see GitHub link above)
+     async function vp(pp, ip) {
+       const cp = await Ip.g.setItem(xp.e, pp);
+       return cp && Ep(pp, ip), cp
```

#### 10. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L2862-L2864` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L65-L66) · [Before (L2862-L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L2862-L2864)

```diff
- 
-     function xD() {
-       return PD.size > 0
+     async function tp() {
+       await Ip.g.removeItem(xp.e), Ip.h.removeItem(Sp.d)
```

#### 11. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L2868` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L70) · [Before (L2868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L2868)

```diff
-       PD.clear()
+       return yp(tp)
```

#### 12. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L2918-L2919` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L74) · [Before (L2918-L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L2918-L2919)

```diff
-       const wD = (0, LD.b)(zD.variants);
-       return DD.setShaderPack(wD.variantFlags, wD.hooks, wD.moduleCodes, (0, cD.z)(zD.layers), cD.n[zD.Dg], zD.keepCircleShadows)
+       return "active" === ep(pp, ip).kind
```

#### 13. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L2930-L2936` → after: `L79-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L79-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L79-L92) · [Before (L2930-L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L2930-L2936)

```diff
-       const pD = null !== (wD = null === DD || void 0 === DD ? void 0 : DD.reason) && void 0 !== wD ? wD : "none";
-       return ID.has(pD) ? {
-         messageKey: zD ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
-         noAdapter: !0
-       } : "not_requested" === pD && "override" === (null === DD || void 0 === DD ? void 0 : DD.source) ? {
-         messageKey: "shaderPack:failedRendererOverride",
-         noAdapter: !1
+       return null === pp ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : mp(pp) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.ok) || pp.validation.fromRecheck ? null === ip ? {
+         kind: "none",
+         reason: "noCompiler"
+       } : qp(pp, ip) ? {
+         kind: "blocked",
+         messageKey: "shaderPack:failedUnchecked"
+       } : pp.validation.ok ? {
+         kind: "active"
```

#### 14. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L2938-L3388` → after: `L94-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L94-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L94-L98) · [Before (L2938-L3388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L2938-L3388)

```diff
-         messageKey: BD.has(pD) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
-         noAdapter: !1
-       }
-     }
-     class hD extends Error {
-       constructor(DD) {
-         super(`the shader pack can't run in this game: ${DD}`), this.messageKey = DD, this.name = "ShaderPackJoinError"
-       }
-     }
-     const nD = "strict";
-     class MD {
-       constructor(DD) {
-         this.deps = DD, this.pagePack = void 0, this.loaded = null, this.Dg = nD, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this. … [truncated]
-           status: "none"
-         }))).then((DD => (this.loaded = DD, "active" === DD.status && (this.handOverToPreviews(DD), null !== DD.harnessPolicy && (this.Dg = DD.harnessPolicy, this.handOver())), DD)))
-       }
- ... (435 more removed lines; see GitHub link above)
+         kind: "blocked",
+         messageKey: "shaderPack:failedValidation"
+       } : {
+         kind: "none",
+         reason: "failedWhenLoaded"
```

#### 15. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L3406-L3412` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L103) · [Before (L3406-L3412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L3406-L3412)

```diff
-       if (null === rD) try {
-         DD = (0, pD.getBrowserName)(), zD = (0, pD.getBrowserVersion)(), wD = (0, pD.getOperatingSystem)(), sD = (0, pD.getOperatingSystemVersion)(), rD = `${DD.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===zD?"unknown":KD(zD)}-${wD}${void 0===sD?"":`_${KD(sD)}`}`
-       } catch (LD) {
-         console.warn("The user agent couldn't be read for its browser code", LD), rD = "unknown"
-       }
-       var DD, zD, wD, sD;
-       return rD
+       Ip.l.setItem(Yp, performance.timeOrigin)
```

#### 16. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L3416-L3521` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L107) · [Before (L3416-L3521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L3416-L3521)

```diff
-       let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
-       const zD = `WGPU-${LD()}`,
-         pD = (DD, pD) => {
-           const {
-             reason: KD,
-             message: rD
-           } = pD, LD = {
-             pipeline: null !== DD && void 0 !== DD ? DD : "",
-             reason: String(KD),
-             browserMessage: String(rD)
-           };
-           Promise.resolve().then((() => wD(40666))).then((DD => {
-             let {
-               reportCrash: wD
-             } = DD;
-             wD({
- ... (90 more removed lines; see GitHub link above)
+       return Ip.l.getItem(Yp) === performance.timeOrigin
```

#### 17. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L3525` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L111) · [Before (L3525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L3525)

```diff
-       return Number(DD.strict) * pD.c.length + pD.c.indexOf(DD.program)
+       return !(0, op.k)(pp.manifest.apiVersion)
```

#### 18. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L3529` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L115) · [Before (L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L3529)

```diff
-       return "" === DD ? [] : DD.split(" ")
+       return Dp ??= pp.Rl((0, Lp.shaderPackTextures)()), Dp
```

#### 19. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L3532-L3544` → after: `L118-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L118-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L118-L120) · [Before (L3532-L3544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L3532-L3544)

```diff
-     function OD(DD) {
-       const zD = {
-         variantFlags: new Uint8Array(sD),
-         hooks: new Uint8Array(sD * KD),
-         moduleCodes: Array(sD).fill(""),
-         reads: Array(2 * sD).fill("")
-       };
-       for (const wD of DD) {
-         const DD = nD(wD.key),
-           pD = (DD, zD) => null === wD.hooks.surface || wD.reads.fragment.includes(DD) ? 0 : zD;
-         zD.variantFlags[DD] = (wD.sceneDepth ? rD : 0) | (wD.movesVertices ? LD : 0) | (wD.sunShadow ? cD : 0) | (wD.airShadow ? gD : 0) | (wD.discards ? RD : 0) | pD("localPosition", AD) | pD("enchantSpeed", UD) | pD("enchantTier", fD), zD.hooks[DD * KD] = BD(wD.hooks.vertex), z … [truncated]
-       }
-       return zD
+     function qp(pp, ip) {
+       var cp;
+       return (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.headerVersion) !== Rp(ip)
```

#### 20. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L3548-L3572` → after: `L124-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L124-L125) · [Before (L3548-L3572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L3548-L3572)

```diff
-       const {
-         hooks: zD,
-         moduleCodes: wD,
-         reads: pD
-       } = DD;
-       return Array.from(DD.variantFlags, ((DD, sD) => {
-         const AD = sD * KD;
-         return {
-           key: hD(sD),
-           hooks: {
-             vertex: GD(zD[AD]),
-             surface: GD(zD[AD + 1]),
-             light: GD(zD[AD + 2])
-           },
-           moduleCode: wD[sD],
-           sceneDepth: 0 !== (DD & rD),
- ... (9 more removed lines; see GitHub link above)
+       return yp((async () => {
+         Ep(await (0, xp.f)(!0), pp)
```

#### 21. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L3635-L3642` → after: `L130-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L130-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L130-L132) · [Before (L3635-L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L3635-L3642)

```diff
-       const DD = AD.map((DD => {
-         let {
-           name: zD,
-           type: wD
-         } = DD;
-         return `    ${zD}: ${wD},\n`
-       })).join("");
-       return `struct ${gD} {\n${DD}}\n@group(${pD}) @binding(${sD}) var<uniform> ${RD}: ${gD};\n`
+       return yp((async () => {
+         Ip.h.removeItem(Sp.d)
+       }))
```

#### 22. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L3646-L3649` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L136) · [Before (L3646-L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L3646-L3649)

```diff
-       const wD = new DataView(DD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, UD),
-         [pD, sD, KD, rD, LD, cD] = AD;
-       wD.setFloat32(pD.offset, zD.seconds, !0), wD.setUint32(sD.offset, zD.lit ? 1 : 0, !0);
-       for (let gD = 0; gD < 3; gD++) wD.setInt32(KD.offset + 4 * gD, zD.renderOffset[gD], !0), wD.setFloat32(rD.offset + 4 * gD, zD.gDD[gD], !0), wD.setFloat32(LD.offset + 4 * gD, zD.eyePosition[gD], !0), wD.setFloat32(cD.offset + 4 * gD, zD.shadowDirection[gD], !0)
+       dp(pp, ip) ? Ip.h.setItem(Sp.d, !0) : Ip.h.removeItem(Sp.d)
```

#### 23. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L3652-L3654` → after: `L148-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L148-L149) · [Before (L3652-L3654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L3652-L3654)

```diff
-     function BD(DD) {
-       const zD = new Uint32Array(Math.max(1, DD.length));
-       return DD.forEach(((DD, wD) => {
+     function Sp() {
+       return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
```

#### 24. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L3656-L3657` → after: `L151-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L151-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L151-L153) · [Before (L3656-L3657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L3656-L3657)

```diff
-           id: pD,
-           rotation: sD
+           FORMER_BLOCK_IMAGE_NAMES: ip,
+           textureNameToIndex: cp,
+           textureAnimationData: Ip
```

#### 25. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L3659` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L155) · [Before (L3659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L3659)

```diff
-         zD[wD] = 65535 & pD | (3 & sD) << 16
+         return op ??= (0, Op.j)(cp, Ip, ip), op
```

#### 26. `bundles/bloxd.io/chunks/js/139.js` (Changed code · before: `L3662-L3665` → after: `L158-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0a74309c92fc1a4f1d62d630022a49e0cee6b3b0e9a9f44b6354321d756dbe28) · [After (L158-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/139.js#L158-L161) · [Before (L3662-L3665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/139.js#L3662-L3665)

```diff
-     const GD = {
-       off: 0,
-       strict: 1,
-       allow: 2
+ 
+     function xp() {
+       if (null === op) throw new Error("Shader pack textures read before loadShaderPackTextures");
+       return op
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/140.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/140.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846)

#### 1. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L4-L8` → after: `L4-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L4-L13) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L4-L8)

```diff
-   41647: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       compilePagePack: () => gD,
-       prefetchCompiler: () => LD,
-       reconcileHint: () => cD
+   38993: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Yp,
+       h: () => Pp,
+       l: () => Wp,
+       p: () => wp,
+       q: () => Ap,
+       t: () => Dp,
+       x: () => Sp,
+       y: () => yp
```

#### 2. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L10-L13` → after: `L15-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L15-L17) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L10-L13)

```diff
-     var pD = wD(6645),
-       sD = wD(6691),
-       KD = wD(6664),
-       rD = wD(6682);
+     var Op = cp(316),
+       op = cp(1749);
+     const Ip = "A valid external Instance reference no longer exists.";
```

#### 3. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L15-L16` → after: `L19-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L19-L20) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L15-L16)

```diff
-     function LD() {
-       (0, pD.loadPageShaderPackCompiler)()
+     function Sp(pp) {
+       return pp.includes(Ip)
```

#### 4. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L18-L20` → after: `L22-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L22-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L22-L47) · [Before (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L18-L20)

```diff
-     async function cD() {
-       const DD = await (0, pD.loadPageShaderPackCompiler)();
-       await (DD ? (0, sD.reconcileStoredShaderPackHint)(DD) : (0, sD.forgetShaderPackActiveHint)())
+     const xp = [
+         [1e4, "<10s", "lt10s"],
+         [6e4, "<1m", "lt1m"],
+         [3e5, "<5m", "lt5m"],
+         [18e5, "<30m", "lt30m"],
+         [1 / 0, "30m+", "ge30m"]
+       ],
+       Lp = [
+         [1e3, "lt1s"],
+         [2e3, "lt2s"],
+         [5e3, "lt5s"],
+         [1e4, "lt10s"],
+         [3e4, "lt30s"],
+         [1 / 0, "ge30s"]
+       ];
+     const Yp = {
+ ... (10 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L22-L44` → after: `L49-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L49-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L49-L66) · [Before (L22-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L22-L44)

```diff
-     async function gD(DD) {
-       const zD = await (0, pD.loadPageShaderPackCompiler)();
-       if (!zD) return {
-         status: "none"
-       };
-       const wD = await (0, rD.d)(DD, zD),
-         LD = (0, sD.storedPackOutcome)(wD, zD);
-       if ("none" === LD.kind) return {
-         status: "none"
-       };
-       const cD = zD.LDD((0, sD.storedShaderPackFiles)(wD), (0, KD.shaderPackTextures)());
-       if ("blocked" === LD.kind) return {
-         status: "blocked",
-         messageKey: LD.messageKey,
-         variants: 0 === cD.errors.length ? cD.variants : null
-       };
- ... (7 more removed lines; see GitHub link above)
+ 
+     function Ap(pp) {
+       return `${(null===pp||void 0===pp?void 0:pp.vendor)||"unknown vendor"} ${(null===pp||void 0===pp?void 0:pp.architecture)||"unknown architecture"}`
+     }
+ 
+     function Pp(pp) {
+       return vp(pp)[1]
+     }
+ 
+     function Wp(pp) {
+       return vp(pp)[2]
+     }
+ 
+     function yp(pp, ip, cp) {
+       const op = (0, Op.i)(),
+         Ip = null !== op && op >= ip,
+ ... (2 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L46-L51` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L68-L69) · [Before (L46-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L46-L51)

```diff
-         status: "active",
-         pack: {
-           name: gD,
-           variants: cD.variants,
-           keepCircleShadows: !0 === RD
-         }
+         page: null === xp ? Sp : `${Sp}${Pp(xp)}`,
+         code: `${pp}_${null===xp?Sp:`${Sp}_${Wp(xp)}`}_${Up(cp)}`
```

#### 7. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L55-L70` → after: `L95-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L95-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L95-L102) · [Before (L55-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L55-L70)

```diff
-   6691: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       forgetShaderPackActiveHint: () => xD,
-       isOtherApiVersion: () => XD,
-       isShaderPackActive: () => OD,
-       isShaderPackChangePending: () => QD,
-       markShaderPackChangePending: () => ED,
-       pageShaderPackValidationVersion: () => VD,
-       reconcileStoredShaderPackHint: () => CD,
-       removeShaderPack: () => MD,
-       replaceShaderPack: () => GD,
-       saveShaderPack: () => BD,
-       shaderPackNeedsCheck: () => PD,
-       storedPackOutcome: () => JD,
-       storedShaderPackFiles: () => UD,
-       toStoredShaderPack: () => AD
+   40842: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Op,
+       d: () => Dp,
+       f: () => Sp,
+       g: () => op,
+       i: () => xp,
+       l: () => Yp
```

#### 8. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L72-L88` → after: `L104-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L104-L106) · [Before (L72-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L72-L88)

```diff
-     var pD = wD(5084),
-       sD = wD(5076),
-       KD = wD(35),
-       rD = wD(3462),
-       LD = wD(6693),
-       cD = wD(6664);
-     const gD = "shaderPackChangePending";
-     let RD = null;
- 
-     function AD(DD, zD, wD) {
-       return {
-         manifest: DD.manifest,
-         files: (0, pD.z)(DD.files),
-         validation: zD,
-         ...wD && {
-           listing: wD
- ... (1 more removed lines; see GitHub link above)
+     class Op extends Error {
+       constructor() {
+         super(...arguments), this.name = "CoreCorruption"
```

#### 9. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L93-L96` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L111) · [Before (L93-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L93-L96)

```diff
-       return Object.keys(DD.files).map((zD => ({
-         path: zD,
-         source: DD.files[zD]
-       })))
+       return pp instanceof RangeError && /call stack/i.test(pp.message) || pp instanceof Error && "InternalError" === pp.name && /recursion/i.test(pp.message)
```

#### 10. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L98` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L113) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L98)

```diff
-     let fD = Promise.resolve();
+     const Ip = /wasm:\/\/|wasm-function\[|\[wasm code\]/;
```

#### 11. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L101-L102` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L116-L117) · [Before (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L101-L102)

```diff
-       const zD = fD.then(DD);
-       return fD = zD.catch((() => {})), zD
+       var ip;
+       return pp instanceof WebAssembly.RuntimeError || pp instanceof Op || op(pp) && Ip.test(null !== (ip = pp.stack) && void 0 !== ip ? ip : "")
```

#### 12. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L106` → after: `L121-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L121-L122) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L106)

```diff
-       return ID((() => hD(DD, zD)))
+       if (Sp(pp)) throw pp;
+       console.error(ip, pp)
```

#### 13. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L109-L110` → after: `L125-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L125-L126) · [Before (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L109-L110)

```diff
-     function GD(DD, zD, wD) {
-       return ID((async () => JSON.stringify(await (0, LD.c)()) === JSON.stringify(DD) && (null === zD ? (await nD(), !0) : hD(zD, wD))))
+     function Lp(pp, ip, cp, op, Ip) {
+       if (ip % op !== 0 || ip + cp > pp.byteLength) throw new Op(`${Ip}: ${cp} bytes at ${ip}, ${op}-aligned, outside ${pp.byteLength} bytes of memory`)
```

#### 14. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L112-L114` → after: `L128-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L128-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L128-L130) · [Before (L112-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L112-L114)

```diff
-     async function hD(DD, zD) {
-       const wD = await KD.g.setItem(LD.b, DD);
-       return wD && TD(DD, zD), wD
+ 
+     function Yp(pp, ip, cp, Op, op) {
+       return 0 === cp ? null : (Lp(ip, cp, Op * pp.BYTES_PER_ELEMENT, pp.BYTES_PER_ELEMENT, op), new pp(ip, cp, Op))
```

#### 15. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L116-L117` → after: `L132-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L132-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L132-L134) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L116-L117)

```diff
-     async function nD() {
-       await KD.g.removeItem(LD.b), KD.h.removeItem(rD.e)
+ 
+     function Dp(pp, ip, cp, Op, op) {
+       return 0 === ip ? null : (Lp(pp, ip, cp, Op, op), new DataView(pp, ip, cp))
```

#### 16. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L120-L121` → after: `L190-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L190-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L190-L211) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L120-L121)

```diff
-     function MD() {
-       return ID(nD)
+     function Ep(pp) {
+       let ip;
+       try {
+         ip = pp.getContext("webgl", {
+           powerPreference: tp.c
+         })
+       } catch {
+         ip = null
+       }
+       if (null === ip) return null;
+       let cp = null;
+       try {
+         const pp = ip.getParameter(ip.MAX_TEXTURE_SIZE);
+         cp = "number" === typeof pp && pp > 0 ? pp : null
+       } catch {
+         cp = null
+ ... (6 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L124-L125` → after: `L218-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L218-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L218-L230) · [Before (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L124-L125)

```diff
-     function OD(DD, zD) {
-       return "active" === JD(DD, zD).kind
+     function Bp(pp) {
+       return function(pp) {
+         try {
+           return pp()
+         } catch {
+           return null
+         }
+       }((() => {
+         var ip, cp, Op, Sp;
+         const xp = null !== (ip = null === (cp = pp.info) || void 0 === cp ? void 0 : cp.vendor) && void 0 !== ip ? ip : "";
+         return "windows" === (0, Pp.getOperatingSystem)() && "" !== xp && "intel" !== (0, Pp.normaliseGpuVendor)(xp) ? null : ((0, Pp.seedGpuVendor)(xp), Lp = (0, op.i)(), Yp = (0, Ip.f)(xp, null !== (Op = null === (Sp = pp.info) || void 0 === Sp ? void 0 : Sp.architecture) && vo … [truncated]
+         var Lp, Yp
+       }))
```

#### 18. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L128` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L233) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L128)

```diff
-     function JD(DD, zD) {
+     function Np() {
```

#### 19. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L130-L149` → after: `L235-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L235-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L235-L299) · [Before (L130-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L130-L149)

```diff
-       return null === DD ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : XD(DD) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (wD = DD.validation) || void 0 === wD ? void 0 : wD.ok) || DD.validation.fromRecheck ? null === zD ? {
-         kind: "none",
-         reason: "noCompiler"
-       } : PD(DD, zD) ? {
-         kind: "blocked",
-         messageKey: "shaderPack:failedUnchecked"
-       } : DD.validation.ok ? {
-         kind: "active"
-       } : {
-         kind: "blocked",
- ... (4 more removed lines; see GitHub link above)
+       return {
+         gpu: null !== (pp = navigator.gpu) && void 0 !== pp ? pp : null,
+         webgl2: () => {
+           try {
+             return null !== document.createElement("canvas").getContext("webgl2")
+           } catch {
+             return !1
+           }
+         },
+         webgl1: () => function(pp) {
+           let ip, cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.d;
+           try {
+             ip = pp.getContext("webgl")
+           } catch {
+             ip = null
+           }
+ ... (49 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L154` → after: `L304-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L304-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L304-L317) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L154)

```diff
-       KD.k.setItem(gD, performance.timeOrigin)
+       let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+       if ((0, xp.r)("render") && "webgl1" === (0, xp.o)("renderer")) return "webgl1";
+       const ip = [() => new URLSearchParams(window.location.search).get(Dp.c), () => yp.h.getItem(Dp.g), () => {
+         const ip = localStorage.getItem(qp);
+         return null !== ip && pp && localStorage.removeItem(qp), "1" === ip ? "webgl2" : null
+       }];
+       for (const cp of ip) {
+         let pp = null;
+         try {
+           pp = bp(cp())
+         } catch {}
+         if (null !== pp) return pp
+       }
+       return null
```

#### 21. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L157-L158` → after: `L320-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L320-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L320-L325) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L157-L158)

```diff
-     function QD() {
-       return KD.k.getItem(gD) === performance.timeOrigin
+     function fp(pp) {
+       try {
+         return pp()
+       } catch {
+         return !1
+       }
```

#### 22. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L162` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L329) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L162)

```diff
-       return !(0, sD.h)(DD.manifest.apiVersion)
+       return "lite" === pp ? "webgpu" : "webgl2" === pp || "babylon" === pp ? "webgl" : null
```

#### 23. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L166` → after: `L333-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L333-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L333-L400) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L166)

```diff
-       return RD ??= DD.qS((0, cD.shaderPackTextures)()), RD
+       return "none" === pp || "compatibility_mode" === pp
+     }
+     async function ap() {
+       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Np();
+       const ip = await async function(pp) {
+         const ip = Fp(pp),
+           {
+             source: cp
+           } = ip,
+           Op = !ip.asked,
+           op = "gpu" in ip && ip.heldBack,
+           Sp = function(pp) {
+             let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+             return op && !hp(pp) ? {
+               reason: "webgl_holdback",
+               adapter: null,
+ ... (52 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L170-L171` → after: `L404-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L404-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L404-L408) · [Before (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L170-L171)

```diff
-       var wD;
-       return (null === (wD = DD.validation) || void 0 === wD ? void 0 : wD.headerVersion) !== VD(zD)
+       let {
+         source: cp,
+         asked: Op
+       } = ip;
+       return Op || "default" === cp ? (0, mp.h)(Op, pp.defaultCompatibility) : void 0
```

#### 25. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L175-L177` → after: `L412-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L412-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L412-L444) · [Before (L175-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L175-L177)

```diff
-       return ID((async () => {
-         TD(await (0, LD.c)(!0), DD)
-       }))
+       const ip = pp.override(),
+         cp = pp.webGpuSetting(),
+         Op = null === ip && !0 !== cp && pp.Dy(),
+         op = null !== ip || null !== cp || Op ? null : pp.claimed(),
+         Ip = null !== ip ? "override" : !0 === cp ? "setting" : Op ? "pack" : !1 === cp ? "setting" : null !== op ? "claim" : "default",
+         Sp = function(pp) {
+           return "override" === pp || "setting" === pp
+         }(Ip);
+       if ("webgl" === ip || "webgl1" === ip || "webgl" === op || "setting" === Ip && !1 === cp) return {
+         source: Ip,
+         asked: Sp,
+         refused: "not_requested"
+       };
+       if (!pp.gpu) return {
+         source: Ip,
+         asked: Sp,
+ ... (17 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L181-L183` → after: `L448-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L448-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L448-L515) · [Before (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L181-L183)

```diff
-       return ID((async () => {
-         KD.h.removeItem(rD.e)
-       }))
+       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
+           ...Np(),
+           override: () => Tp(!1)
+         },
+         ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pp.isWebKit;
+       try {
+         if (!ip()) return !1;
+         const cp = Fp(pp);
+         return "gpu" in cp && !cp.heldBack
+       } catch (cp) {
+         return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", cp), !1
+       }
+     }
+     let Gp = !1;
+     async function rp(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Np();
+ ... (52 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L187` → after: `L519-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L519-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L519-L626) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L187)

```diff
-       OD(DD, zD) ? KD.h.setItem(rD.e, !0) : KD.h.removeItem(rD.e)
+       return "webgpu" !== pp.backend || ip && (null === pp.adapter || !(0, Up.H)(pp.adapter))
+     }
+ 
+     function Oi(pp, ip, cp, Op, op) {
+       const Ip = new URLSearchParams(ip).get(cp),
+         Sp = null !== Ip && void 0 !== Ip ? Ip : (0, Lp.f)(cp);
+       return Sp !== Op && Sp !== op ? null : (Gp ||= null === Ip && "webgpu" === pp.backend, Sp === Op)
+     }
+ 
+     function oi(pp) {
+       return null !== pp && "missing" in pp
+     }
+ 
+     function Ii(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !Li(),
+         cp = arguments.length > 2 ? arguments[2] : void 0;
+ ... (92 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L190` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L629) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L190)

```diff
-   6682: (DD, zD, wD) => {
+   40949: (pp, ip, cp) => {
```

#### 29. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L193` → after: `L632-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L632-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L632-L634) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L193)

```diff
-       h: () => LD
+       e: () => Up,
+       g: () => Pp,
+       i: () => Ap
```

#### 30. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L195-L216` → after: `L636-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L636-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L636-L699) · [Before (L195-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L195-L216)

```diff
-     var pD = wD(6691),
-       sD = wD(6664),
-       KD = wD(119);
-     const rD = 100;
-     async function LD(DD, zD) {
-       var wD;
-       let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (wD = navigator.gpu) && void 0 !== wD ? wD : null;
-       const rD = DD.LDD(zD, (0, sD.shaderPackTextures)());
-       if (rD.errors.length > 0) return gD(DD, rD.errors, rD.offInStrict);
-       const LD = await async function(DD) {
-         if (!DD) return null;
-         try {
-           const zD = await (0, KD.x)(DD);
-           return zD ? await zD.requestDevice() : null
-         } catch (zD) {
-           return console.error("Couldn't get a WebGPU device to validate the shader pack.", zD), null
- ... (6 more removed lines; see GitHub link above)
+     const Op = 2e3,
+       op = "unavailable";
+     let Ip = () => Promise.resolve().then((() => cp(3031))),
+       Sp = null,
+       xp = null,
+       Lp = Yp();
+ 
+     function Yp() {
+       let pp = () => {};
+       return {
+         promise: new Promise((ip => {
+           pp = () => {
+             ip(null)
+           }
+         })),
+         resolve: pp
+ ... (48 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L219-L240` → after: `L702-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L702-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L702-L704) · [Before (L219-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L219-L240)

```diff
-         const zD = await Promise.all(rD.validationModules.map((zD => async function(DD, zD, wD) {
-           zD.pushErrorScope("validation");
-           const pD = zD.createShaderModule({
-               code: wD.code
-             }),
-             sD = zD.popErrorScope(),
-             {
-               messages: KD
-             } = await pD.getCompilationInfo(),
-             rD = KD.filter((DD => "error" === DD.type)).map((zD => DD.mapValidationMessage(wD, zD))),
-             LD = await sD;
-           LD && 0 === rD.length && rD.push({
-             file: null,
-             line: 0,
-             message: LD.message,
-             variants: [wD.key]
- ... (6 more removed lines; see GitHub link above)
+         return Wp(await Promise.race([Dp(), Ip, Lp.promise]), pp, ip, cp)
+       } catch {
+         return Wp(null, pp, ip, cp)
```

#### 32. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L242` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L706) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L242)

```diff
-         LD.destroy()
+         clearTimeout(op)
```

#### 33. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L245-L256` → after: `L709-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L709-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L709-L1004) · [Before (L245-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L245-L256)

```diff
-     async function cD(DD, zD) {
-       var wD;
-       if (!(0, pD.shaderPackNeedsCheck)(DD, zD) || (0, pD.isOtherApiVersion)(DD)) return DD;
-       const sD = await LD(zD, (0, pD.storedShaderPackFiles)(DD));
-       if (!sD) return DD;
-       const KD = !1 === (null === (wD = DD.validation) || void 0 === wD ? void 0 : wD.ok) && !DD.validation.fromRecheck,
-         rD = {
-           ...DD,
-           validation: KD ? sD : {
-             ...sD,
-             fromRecheck: !0
-           }
+   },
+   40945: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       BUILT_IN_ANIMATIONS_SITE: () => zp,
+       CORE_ERRORS_SITE: () => fp,
+       EVENT_OVERFLOW_SITE: () => Zp,
+       FIRST_VIEW_SITE: () => Vp,
+       JOIN_SITE: () => hp,
+       LEAVE_SITE: () => ap,
+       MAIN_THREAD_SITE: () => ii,
+       MODEL_FEED_SITE: () => np,
+       MODEL_POOL_SITE: () => Fp,
+       NON_FATAL_LOKI_REPORTS_PER_PAGE: () => Ii,
+       NON_FATAL_REPORTS_PER_SESSION: () => ji,
+       PREVIEW_ANIMATIONS_SITE: () => rp,
+       RENDER_RELOAD_SITE: () => Gp,
+ ... (280 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L258` → after: `L1006-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L1006-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L1006-L1010) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L258)

```diff
-       return await (0, pD.replaceShaderPack)(DD, rD, zD) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), rD
+         Qi((() => {
+           Pi(ip)
+         }))
+       }
+       return Pp
```

#### 35. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L261-L267` → after: `L1013-L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L1013-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/140.js#L1013-L1037) · [Before (L261-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/140.js#L261-L267)

```diff
-     function gD(DD, zD, wD) {
-       return {
-         headerVersion: (0, pD.pageShaderPackValidationVersion)(DD),
-         ok: 0 === zD.length,
-         errors: zD.slice(0, rD),
-         moreErrors: Math.max(0, zD.length - rD),
-         offInStrict: wD
+     function Xi(pp) {
+       Ji("counts", (async () => {
+         const {
+           peekVisitSessionId: ip
+         } = await Promise.resolve().then((() => cp(670)));
+         null !== ip() && (await pp(), ui = !0)
+       }))
+     }
+ 
+     function li(pp) {
+       qi.has(pp.errorKind) || (qi.add(pp.errorKind), Xi((async () => {
+         const {
+           reportClientError: ip
+         } = await Promise.resolve().then((() => cp(3025)));
+         ip(pp.errorKind, pp.error, pp.code, !0, void 0, pp.fields)
+       })))
+ ... (9 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/141.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/141.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5)

#### 1. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L5-L2417` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/141.js#L4) · [Before (L5-L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/141.js#L5-L2417)

```diff
-   6744: (DD, zD, wD) => {
-     var pD = wD(6746);
-     zD.e = {
-       prefix: pD.prefix,
-       iconName: pD.iconName,
-       icon: [pD.width, pD.height, pD.aliases, pD.unicode, pD.svgPathData]
-     }, zD.g = zD.e, pD.prefix, pD.iconName, pD.width, pD.height, pD.aliases, pD.unicode, pD.svgPathData, pD.aliases
-   },
-   6752: (DD, zD, wD) => {
-     var pD = wD(6761);
-     zD.b = {
-       prefix: pD.prefix,
-       iconName: pD.iconName,
-       icon: [pD.width, pD.height, pD.aliases, pD.unicode, pD.svgPathData]
-     }, zD.e = zD.b, pD.prefix, pD.iconName, pD.width, pD.height, pD.aliases, pD.unicode, pD.svgPathData, pD.aliases
-   },
- ... (2397 more removed lines; see GitHub link above)
+   6780: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L2420-L2425` → after: `L7-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L7-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/141.js#L7-L124) · [Before (L2420-L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/141.js#L2420-L2425)

```diff
-       d: () => KD
-     });
-     var pD = {
-         prefix: "fas",
-         iconName: "shirt",
-         icon: [640, 512, [128085, "t-shirt", "tshirt"], "f553", "M320.2 112c44.2 0 80-35.8 80-80l53.5 0c17 0 33.3 6.7 45.3 18.7L617.6 169.4c12.5 12.5 12.5 32.8 0 45.3l-50.7 50.7c-12.5 12.5-32.8 12.5-45.3 0l-41.4-41.4 0 224c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-224-4 … [truncated]
+       g: () => ep,
+       i: () => tp,
+       m: () => vp
+     });
+     var Op = cp(6788);
+     const op = 6,
+       Ip = 3,
+       Sp = 1,
+       xp = 2,
+       Lp = 4,
+       Yp = 8,
+       Dp = 16,
+       Ap = 32,
+       Pp = 64,
+       Wp = 128,
+       yp = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];
+ ... (102 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L2427-L2428` → after: `L126-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L126-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/141.js#L126-L245) · [Before (L2427-L2428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/141.js#L2427-L2428)

```diff
-       sD = pD,
-       KD = pD
+       Lp = 10,
+       Yp = "BloxdPackInputs",
+       Dp = "bloxdPackInputs",
+       Ap = [{
+         name: "seconds",
+         type: "f32",
+         offset: 0
+       }, {
+         name: "lit",
+         type: "u32",
+         offset: 4
+       }, {
+         name: "renderOffset",
+         type: "vec3i",
+         offset: 16
+       }, {
+ ... (104 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/142.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/142.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0)

#### 1. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L4-L119` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L4-L8) · [Before (L4-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L4-L119)

```diff
-   8090: (DD, zD) => {
-     var wD = "youtube",
-       pD = [61802],
-       sD = "f167",
-       KD = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
-     zD.e = {
-       prefix: "fab",
-       iconName: wD,
-       icon: [576, 512, pD, sD, KD]
-     }, zD.h = zD.e
-   },
-   6879: (DD, zD) => {
-     Object.defineProperty(zD, "__esModule", {
-       value: !0
-     });
-     var wD = "bolt",
- ... (100 more removed lines; see GitHub link above)
+   41994: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       compilePagePack: () => Yp,
+       prefetchCompiler: () => xp,
+       reconcileHint: () => Lp
```

#### 2. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L121-L123` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L10-L13) · [Before (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L121-L123)

```diff
-     var pD = wD(40958);
-     let sD = null,
-       KD = null;
+     var Op = cp(6758),
+       op = cp(6798),
+       Ip = cp(6772),
+       Sp = cp(6792);
```

#### 3. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L126-L128` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L16) · [Before (L126-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L126-L128)

```diff
-       return sD ??= wD.e(61).then((() => wD(60401))).catch((DD => {
-         throw sD = null, DD
-       })), sD
+       (0, Op.loadPageShaderPackCompiler)()
```

#### 4. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L130-L137` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L18-L20) · [Before (L130-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L130-L137)

```diff
- 
-     function LD() {
-       return KD ??= Promise.all([rD(), (0, pD.f)()]).then((DD => {
-         let [zD] = DD;
-         return zD
-       }), (DD => {
-         throw KD = null, DD
-       })), KD
+     async function Lp() {
+       const pp = await (0, Op.loadPageShaderPackCompiler)();
+       await (pp ? (0, op.reconcileStoredShaderPackHint)(pp) : (0, op.forgetShaderPackActiveHint)())
```

#### 5. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L139-L220` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L22-L25) · [Before (L139-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L139-L220)

```diff
-   },
-   42463: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => aD,
-       e: () => HD,
-       i: () => mD,
-       m: () => eD,
-       p: () => oD,
-       q: () => zz,
-       s: () => kD,
-       u: () => yD
-     });
-     var pD = wD(4499),
-       sD = wD(4515),
-       KD = wD(34218),
-       rD = wD(3288),
- ... (66 more removed lines; see GitHub link above)
+     async function Yp(pp) {
+       const ip = await (0, Op.loadPageShaderPackCompiler)();
+       if (!ip) return {
+         status: "none"
```

#### 6. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L222-L255` → after: `L27-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L27-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L27-L50) · [Before (L222-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L222-L255)

```diff
-     let WD = null,
-       ND = 0,
-       ZD = "none";
- 
-     function yD() {
-       return ND
-     }
- 
-     function kD() {
-       ND++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? ZD = "all" : "none" === ZD && (ZD = "notBoards")
-     }(0, cD.v)((() => {
-       (function() {
-         const DD = QD;
-         return QD = !1, DD
-       })() && kD(!1)
-     }));
- ... (18 more removed lines; see GitHub link above)
+       const cp = await (0, Sp.e)(pp, ip),
+         xp = (0, op.storedPackOutcome)(cp, ip);
+       if ("none" === xp.kind) return {
+         status: "none"
+       };
+       const Lp = ip.ipp((0, op.storedShaderPackFiles)(cp), (0, Ip.shaderPackTextures)());
+       if ("blocked" === xp.kind) return {
+         status: "blocked",
+         messageKey: xp.messageKey,
+         variants: 0 === Lp.errors.length ? Lp.variants : null
+       };
+       if (Lp.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", Lp.errors), {
+         status: "none"
+       };
+       const {
+         name: Yp,
+ ... (8 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L280-L281` → after: `L54-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L54-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L54-L79) · [Before (L280-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L280-L281)

```diff
-     const uD = new Map,
-       vD = new Map;
+   },
+   6798: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       forgetShaderPackActiveHint: () => Cp,
+       isOtherApiVersion: () => mp,
+       isShaderPackActive: () => dp,
+       isShaderPackChangePending: () => kp,
+       markShaderPackChangePending: () => jp,
+       pageShaderPackValidationVersion: () => Rp,
+       reconcileStoredShaderPackHint: () => Mp,
+       removeShaderPack: () => Hp,
+       replaceShaderPack: () => wp,
+       saveShaderPack: () => Up,
+       shaderPackNeedsCheck: () => qp,
+       storedPackOutcome: () => ep,
+       storedShaderPackFiles: () => Pp,
+ ... (10 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L284-L307` → after: `L82-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L82-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L82-L87) · [Before (L284-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L284-L307)

```diff
-       var pD;
-       const sD = wD ? `${DD}#${wD.join(",")}` : DD,
-         KD = uD.get(sD);
-       if (KD) return KD.image;
-       const rD = {
-         image: null !== (pD = vD.get(sD)) && void 0 !== pD ? pD : null
-       };
-       return uD.set(sD, rD), zD().then((async DD => {
-         if (null === DD) return null;
-         const zD = new Image;
-         zD.crossOrigin = "anonymous", zD.src = DD, await zD.decode();
-         const pD = await createImageBitmap(zD);
-         if (!wD) return pD;
-         try {
-           return function(DD, zD) {
-             let [wD, pD, sD] = zD;
- ... (8 more removed lines; see GitHub link above)
+       return {
+         manifest: pp.manifest,
+         files: (0, Op.v)(pp.files),
+         validation: ip,
+         ...cp && {
+           listing: cp
```

#### 9. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L410` → after: `L93-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L93-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L93-L96) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L410)

```diff
-       return `bolder ${DD}px 'Jetbrains Mono'`
+       return Object.keys(pp.files).map((ip => ({
+         path: ip,
+         source: pp.files[ip]
+       })))
```

#### 10. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L414` → after: `L101-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L101-L102) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L414)

```diff
-       return "object" === typeof DD && null !== DD
+       const ip = Wp.then(pp);
+       return Wp = ip.catch((() => {})), ip
```

#### 11. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L418-L419` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L106) · [Before (L418-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L418-L419)

```diff
-       const wD = "number" === typeof DD ? DD : "string" === typeof DD ? Number(DD.replace("px", "")) : NaN;
-       return Number.isFinite(wD) && wD > 0 ? wD : zD
+       return yp((() => vp(pp, ip)))
```

#### 12. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L422-L423` → after: `L109-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L109-L110) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L422-L423)

```diff
-     function fD(DD) {
-       return AD(DD) ? DD : void 0
+     function wp(pp, ip, cp) {
+       return yp((async () => JSON.stringify(await (0, xp.f)()) === JSON.stringify(pp) && (null === ip ? (await tp(), !0) : vp(ip, cp))))
```

#### 13. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L425-L428` → after: `L112-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L112-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L112-L114) · [Before (L425-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L425-L428)

```diff
- 
-     function ID(DD) {
-       const zD = "number" === typeof DD ? rD.w[DD] : DD;
-       return "string" === typeof zD && Object.hasOwn(rD.k, zD) ? rD.k[zD] : void 0
+     async function vp(pp, ip) {
+       const cp = await Ip.g.setItem(xp.e, pp);
+       return cp && Ep(pp, ip), cp
```

#### 14. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L430-L432` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L116-L117) · [Before (L430-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L430-L432)

```diff
- 
-     function BD(DD, zD) {
-       return "string" === typeof DD ? DD : AD(DD) ? "string" === typeof DD.translationKey ? zD.translate(DD.translationKey, DD.params).map((DD => "string" === typeof DD ? DD : DD.icon)).join("") : "string" === typeof DD.entityName ? zD.shownPlayerName(DD.entityName) : "" : void 0 … [truncated]
+     async function tp() {
+       await Ip.g.removeItem(xp.e), Ip.h.removeItem(Sp.d)
```

#### 15. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L435-L496` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L120-L121) · [Before (L435-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L435-L496)

```diff
-     function GD(DD, zD, wD, pD) {
-       if (!Array.isArray(DD)) return [];
-       const sD = [];
-       for (const RD of DD) {
-         var KD, rD;
-         if (AD(RD) && "chatTag" in RD) {
-           sD.push({
-             kind: "rank",
-             rank: RD
-           });
-           continue
-         }
-         if (AD(RD) && "icon" in RD && !("mainRGB" in RD)) {
-           var gD;
-           sD.push({
-             kind: "icon",
- ... (46 more removed lines; see GitHub link above)
+     function Hp() {
+       return yp(tp)
```

#### 16. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L500-L502` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L125) · [Before (L500-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L500-L502)

```diff
-       const wD = hD(DD),
-         pD = hD(zD);
-       return void 0 === DD && !pD || !wD && void 0 === zD ? 0 : wD !== pD ? .5 * cD.HORIZONTAL_PADDING : 0
+       return "active" === ep(pp, ip).kind
```

#### 17. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L505-L548` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L128) · [Before (L505-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L505-L548)

```diff
-     function MD(DD) {
-       return "rank" === DD.kind ? cD.DEFAULT_FONT_SIZE : DD.size
-     }
- 
-     function OD(DD, zD, wD) {
-       return "icon" === DD.kind ? DD.size : "rank" === DD.kind ? function(DD, zD) {
-         const wD = zD.rankIcon(DD.rank.icon);
-         return wD ? gD * (wD.width / wD.height) : gD
-       }(DD, wD) + cD.HORIZONTAL_PADDING : (wD.glyphsShown(DD.text), zD.font = RD(DD.size), zD.measureText(DD.text).width)
-     }
- 
-     function JD(DD, zD, wD) {
-       if (0 === DD.length) return {
-         width: 0,
-         height: 0,
-         sizes: []
- ... (28 more removed lines; see GitHub link above)
+     function ep(pp, ip) {
```

#### 18. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L550-L578` → after: `L130-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L130-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L130-L149) · [Before (L550-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L550-L578)

```diff
-       if ("icon" === DD.kind) {
-         const pD = KD.iconImage(DD.icon);
-         return pD && rD.push({
-           image: pD,
-           x: zD,
-           y: wD + cD.VERTICAL_PADDING / 2,
-           size: DD.size
-         }), DD.size
-       }
-       if ("rank" === DD.kind) {
-         const rD = null !== LD && void 0 !== LD ? LD : OD(DD, sD, KD);
-         return function(DD, zD, wD, pD, sD, KD, rD) {
-           var LD, RD;
-           const {
-             rank: AD
-           } = DD;
- ... (13 more removed lines; see GitHub link above)
+       return null === pp ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : mp(pp) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.ok) || pp.validation.fromRecheck ? null === ip ? {
+         kind: "none",
+         reason: "noCompiler"
+       } : qp(pp, ip) ? {
+         kind: "blocked",
+         messageKey: "shaderPack:failedUnchecked"
+       } : pp.validation.ok ? {
+         kind: "active"
+       } : {
+         kind: "blocked",
+ ... (4 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L593-L604` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L153-L154) · [Before (L593-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L593-L604)

```diff
-     function XD(DD, zD) {
-       for (const {
-           image: wD,
-           x: pD,
-           y: sD,
-           size: KD
-         }
-         of DD) zD.imageSmoothingEnabled = !1, zD.drawImage(wD, pD, sD, KD, KD)
-     }
- 
-     function VD(DD, zD, wD, pD, sD, KD) {
-       DD.save(), DD.translate(wD, pD), DD.scale(sD, sD), DD.fillStyle = KD, DD.fill(zD), DD.restore()
+     function jp() {
+       Ip.l.setItem(Yp, performance.timeOrigin)
```

#### 20. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L607-L693` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L157-L158) · [Before (L607-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L607-L693)

```diff
-     function PD(DD, zD, wD) {
-       const pD = "object" === typeof DD && null !== DD ? DD : {},
-         sD = function(DD, zD, wD) {
-           if (!Array.isArray(DD) || 0 === DD.length) return [];
-           const pD = [{
-             width: 0,
-             height: 0,
-             y: 0,
-             items: []
-           }];
-           for (const rD of GD(DD, cD.DEFAULT_FONT_SIZE, wD)) {
-             if ("text" !== rD.kind) {
-               pD[pD.length - 1].items.push({
-                 content: rD,
-                 chars: 1,
-                 size: {
- ... (71 more removed lines; see GitHub link above)
+     function kp() {
+       return Ip.l.getItem(Yp) === performance.timeOrigin
```

#### 21. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L725-L730` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L162) · [Before (L725-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L725-L730)

```diff
-       return "object" !== typeof DD || null === DD || Array.isArray(DD) ? void 0 : DD
-     }
-     const ZD = new Set(CD.e);
- 
-     function yD(DD, zD) {
-       return "string" === typeof DD ? UD(DD, zD) : zD
+       return !(0, op.k)(pp.manifest.apiVersion)
```

#### 22. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L734` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L166) · [Before (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L734)

```diff
-       return yD(DD.width, jD)
+       return Dp ??= pp.Rl((0, Lp.shaderPackTextures)()), Dp
```

#### 23. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L739-L740` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L171) · [Before (L739-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L739-L740)

```diff
-       const pD = null !== (wD = DD.applyTo) && void 0 !== wD ? wD : "both";
-       return "both" === pD || pD === zD
+       return (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.headerVersion) !== Rp(ip)
```

#### 24. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L744-L961` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L175-L176) · [Before (L744-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L744-L961)

```diff
-       const zD = kD(DD);
-       return "glow" === DD.style ? zD * dD : Math.ceil(zD / 2) + 1
-     }
- 
-     function oD(DD, zD, wD) {
-       var pD, sD;
-       const KD = null !== (pD = ND(DD.info)) && void 0 !== pD ? pD : {},
-         LD = "string" === typeof DD.name ? DD.name : "",
-         gD = KD.subtitle;
-       if (Array.isArray(KD.content) && 0 === KD.content.length && !(Array.isArray(gD) && gD.length > 0)) return null;
-       const RD = "number" === typeof DD.hideNameSeed ? DD.hideNameSeed : null,
-         AD = "" === LD || !0 === DD.mesh ? LD : (0, xD.e)(LD, !wD.canSeeRealPlayerNames, RD);
-       if (!AD && !KD.content) return null;
-       const UD = "string" === typeof DD.colour ? DD.colour : "default",
-         fD = Object.hasOwn(rD.v, UD) ? rD.v[UD] : void 0,
-         BD = KD.content ? GD(KD.content, cD.DEFAULT_FONT_SIZE, wD, fD) : [{
- ... (202 more removed lines; see GitHub link above)
+       return yp((async () => {
+         Ep(await (0, xp.f)(!0), pp)
```

#### 25. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L967` → after: `L181-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L181-L183) · [Before (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L967)

```diff
-       cz.clear(), gz.clear()
+       return yp((async () => {
+         Ip.h.removeItem(Sp.d)
+       }))
```

#### 26. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L971-L972` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L187) · [Before (L971-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L971-L972)

```diff
-       const wD = DD.get(zD);
-       return void 0 !== wD && (DD.delete(zD), DD.set(zD, wD)), wD
+       dp(pp, ip) ? Ip.h.setItem(Sp.d, !0) : Ip.h.removeItem(Sp.d)
```

#### 27. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L974-L998` → after: `L189-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L189-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L189-L210) · [Before (L974-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L974-L998)

```diff
- 
-     function Mz(DD, zD, wD) {
-       DD.set(zD, wD), DD.size > zz && DD.delete(DD.keys().next().value)
-     }
- 
-     function Oz(DD, zD, wD) {
-       if (DD === qD.Nametag) {
-         let DD = nz(cz, zD);
-         return void 0 === DD && (DD = oD(JSON.parse(zD), wD, rz), Mz(cz, zD, DD)), DD
-       }
-       if (DD === qD.MultilineText) {
-         var sD;
-         const DD = JSON.parse(zD),
-           pD = JSON.stringify(null !== (sD = DD.box) && void 0 !== sD ? sD : null),
-           KD = "number" === typeof DD.shown ? DD.shown : null;
-         let rD = nz(gz, pD);
- ... (9 more removed lines; see GitHub link above)
+   },
+   6792: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Lp,
+       h: () => xp
+     });
+     var Op = cp(6798),
+       op = cp(6772),
+       Ip = cp(118);
+     const Sp = 100;
+     async function xp(pp, ip) {
+       var cp;
+       let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (cp = navigator.gpu) && void 0 !== cp ? cp : null;
+       const Sp = pp.ipp(ip, (0, op.shaderPackTextures)());
+       if (Sp.errors.length > 0) return Yp(pp, Sp.errors, Sp.offInStrict);
+       const xp = await async function(pp) {
+ ... (6 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L1001-L1052` → after: `L244-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L244-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L244-L255) · [Before (L1001-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L1001-L1052)

```diff
-       if (DD === qD.Board) return function(DD, zD) {
-         var wD;
-         if (!zD.canSeePlayerWrittenText) return null;
-         const {
-           shared: sD,
-           w: KD = 0,
-           h: rD = 0
-         } = DD, LD = !KD;
-         let cD;
-         if (LD) {
-           var gD, RD;
-           cD = null !== (gD = null === sD || void 0 === sD || null === (RD = sD.text) || void 0 === RD ? void 0 : RD.toString()) && void 0 !== gD ? gD : ""
-         } else {
-           if ("string" !== typeof(null === sD || void 0 === sD ? void 0 : sD.text)) return null;
-           cD = sD.text
-         }
- ... (36 more removed lines; see GitHub link above)
+     }
+     async function Lp(pp, ip) {
+       var cp;
+       if (!(0, Op.shaderPackNeedsCheck)(pp, ip) || (0, Op.isOtherApiVersion)(pp)) return pp;
+       const op = await xp(ip, (0, Op.storedShaderPackFiles)(pp));
+       if (!op) return pp;
+       const Ip = !1 === (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.ok) && !pp.validation.fromRecheck,
+         Sp = {
+           ...pp,
+           validation: Ip ? op : {
+             ...op,
+             fromRecheck: !0
```

#### 29. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L1054-L1056` → after: `L257-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L257-L258) · [Before (L1054-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L1054-L1056)

```diff
-         }
-       }(JSON.parse(zD), rz, Dz);
-       throw new Error(`unknown text plane kind ${DD}`)
+         };
+       return await (0, Op.replaceShaderPack)(pp, Sp, ip) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Sp
```

#### 30. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L1060-L1105` → after: `L261-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L261-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/142.js#L261-L267) · [Before (L1060-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/142.js#L1060-L1105)

```diff
-     function Ez(DD, zD) {
-       let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       try {
-         if (DD.length < 2) return [0, 0];
-         const KD = (0, sD.b)(zD);
-         if (!KD) return [0, 0];
-         const rD = Gz();
-         rD !== Lz && (Lz = rD, hz());
-         const [LD] = DD, cD = Kz.decode(DD.subarray(1));
-         let gD;
-         LD !== qD.Board && LD !== qD.Leaderboard || !rz.canSeePlayerWrittenText || rz.glyphsShown(cD), KD.save();
-         try {
-           gD = Oz(LD, cD, KD)
-         } finally {
-           KD.restore()
- ... (30 more removed lines; see GitHub link above)
+     function Yp(pp, ip, cp) {
+       return {
+         headerVersion: (0, Op.pageShaderPackValidationVersion)(pp),
+         ok: 0 === ip.length,
+         errors: ip.slice(0, Sp),
+         moreErrors: Math.max(0, ip.length - Sp),
+         offInStrict: cp
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/143.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/143.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8)

#### 1. `bundles/bloxd.io/chunks/js/143.js` (Changed code · before: `L4` → after: `L5-L2461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8) · [After (L5-L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/143.js#L5-L2461) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/143.js#L4)

```diff
-   8099: (DD, zD, wD) => {
+   6849: (pp, ip, cp) => {
+     var Op = cp(6855);
+     ip.e = {
+       prefix: Op.prefix,
+       iconName: Op.iconName,
+       icon: [Op.width, Op.height, Op.aliases, Op.unicode, Op.svgPathData]
+     }, ip.g = ip.e, Op.prefix, Op.iconName, Op.width, Op.height, Op.aliases, Op.unicode, Op.svgPathData, Op.aliases
+   },
+   6858: (pp, ip, cp) => {
+     var Op = cp(6861);
+     ip.e = {
+       prefix: Op.prefix,
+       iconName: Op.iconName,
+       icon: [Op.width, Op.height, Op.aliases, Op.unicode, Op.svgPathData]
+     }, ip.g = ip.e, Op.prefix, Op.iconName, Op.width, Op.height, Op.aliases, Op.unicode, Op.svgPathData, Op.aliases
+   },
+ ... (2441 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/143.js` (Changed code · before: `L6` → after: `L2463-L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8R2463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8) · [After (L2463-L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/143.js#L2463-L2464) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/143.js#L6)

```diff
-       encodeBinaryMessageWithMetricsCookies: () => sD
+       b: () => op,
+       c: () => Ip
```

#### 3. `bundles/bloxd.io/chunks/js/143.js` (Changed code · before: `L8-L12` → after: `L2466-L2472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8R2466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8) · [After (L2466-L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/143.js#L2466-L2472) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/143.js#L8-L12)

```diff
-     var pD = wD(3757);
- 
-     function sD(DD) {
-       return pD.m.toBuffer(DD)
-     }
+     var Op = {
+         prefix: "fas",
+         iconName: "shirt",
+         icon: [640, 512, [128085, "t-shirt", "tshirt"], "f553", "M320.2 112c44.2 0 80-35.8 80-80l53.5 0c17 0 33.3 6.7 45.3 18.7L617.6 169.4c12.5 12.5 12.5 32.8 0 45.3l-50.7 50.7c-12.5 12.5-32.8 12.5-45.3 0l-41.4-41.4 0 224c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-224-4 … [truncated]
+       },
+       op = Op,
+       Ip = Op
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/144.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/144.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5)

#### 1. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L4-L8` → after: `L4-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/144.js#L4-L17) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/144.js#L4-L8)

```diff
-   8107: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       BloxdDiscordSDK: () => BD,
-       DiscordLoginCancelledError: () => ID,
-       discordPopupTimeoutMs: () => fD
+   8205: (pp, ip) => {
+     var cp = "youtube",
+       Op = [61802],
+       op = "f167",
+       Ip = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
+     ip.c = {
+       prefix: "fab",
+       iconName: cp,
+       icon: [576, 512, Op, op, Ip]
+     }, ip.e = ip.c
+   },
+   6983: (pp, ip) => {
+     Object.defineProperty(ip, "__esModule", {
+       value: !0
```

#### 2. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L10-L36` → after: `L19-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L19-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/144.js#L19-L182) · [Before (L10-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/144.js#L10-L36)

```diff
-     var pD = wD(157),
-       sD = wD(1234),
-       KD = wD(1130),
-       rD = wD(1152),
-       LD = wD.n(rD),
-       cD = wD(1211),
-       gD = wD(35),
-       RD = wD(619),
-       AD = wD(1355),
-       UD = wD(1084);
-     const fD = 6e5;
-     class ID extends Error {
-       constructor() {
-         super(...arguments), this.name = KD.discordLoginCancelledErrorName
-       }
-     }
- ... (11 more removed lines; see GitHub link above)
+     var cp = "bolt",
+       Op = [9889, "zap"],
+       op = "f0e7",
+       Ip = "M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z";
+     ip.definition = {
+       prefix: "fas",
+       iconName: cp,
+       icon: [448, 512, Op, op, Ip]
+     }, ip.faBolt = ip.definition, ip.prefix = "fas", ip.iconName = cp, ip.width = 448, ip.height = 512, ip.ligatures = Op, ip.unicode = op, ip.svgPathData = Ip, ip.aliases = Op
+   },
+   7696: (pp, ip) => {
+     var cp = "person-military-pointing",
+       Op = [],
+       op = "e54a",
+       Ip = "M214.9 14.1C202 15.2 192 26 192 39 192 52.8 203.2 64 217 64l151 0c8.8 0 16-7.2 16-16l0-30.6C384 8 376 .7 366.7 1.4L214.9 14.1zM208 112c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16L209.6 96c-1 5.2-1.6 10.5-1.6 16zM40 224c-22.1 0-40 17.9-40 40s17.9 40 40 40l1 … [truncated]
+     ip.d = {
+ ... (148 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L38-L39` → after: `L184-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L184-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/144.js#L184-L210) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/144.js#L38-L39)

```diff
-       resetPopupState() {
-         null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseRe … [truncated]
+     }
+     const jp = new Map(Object.entries(dp).map((pp => {
+       let [ip, cp] = pp;
+       return [ip, ep(cp)]
+     })));
+     let kp = !1;
+     const mp = new Set;
+     var Rp = cp(41046);
+     const qp = "Jetbrains Mono",
+       Mp = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2248,U+26A1,U+2713,U+FEFF,U+FFFD",
+       Cp = "U+0100-0130,U+0132-0151,U+0154-017F,U+018F-0190,U+0192,U+019B,U+01A0-01A1,U+01AF-01B0,U+01CD-01CE,U+01D0,U+01D2,U+01D4,U+01D6,U+01D8,U+01DA,U+01DC,U+01E6-01E7,U+01EA-01EB,U+01F4-01F5,U+01FC-01FF,U+0218-021B,U+0232-0233,U+0237,U+0259,U+02B9-02BA,U+02C7,U+02C9,U+02D8-02 … [truncated]
+ 
+     function Ep(pp) {
+       return pp.split(",").map((pp => {
+         const [ip, cp = ip] = pp.slice(2).split("-");
+         return [parseInt(ip, 16), parseInt(cp, 16)]
+ ... (11 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L41` → after: `L212-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L212-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/144.js#L212-L259) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/144.js#L41)

```diff
-       failPopup(DD) {
+     }
+     const Jp = 397,
+       Bp = 1,
+       Np = {
+         translate: pp => [pp],
+         keyBindingText: pp => pp,
+         isFriend: () => !1,
+         hiddenNames: {},
+         loadsFontRest: !1
+       };
+     let Tp = null,
+       fp = 0,
+       bp = "none";
+ 
+     function hp() {
+       return fp
+ ... (32 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L43-L102` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/144.js#L261) · [Before (L43-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/144.js#L43-L102)

```diff
-         const wD = this.popupWindowPromiseReject;
-         null === (zD = this.popupWindow) || void 0 === zD || zD.close(), this.resetPopupState(), null === wD || void 0 === wD || wD(DD)
-       }
-       openDiscordOAuthWindow() {
-         const DD = UD.b.discordClientID;
-         return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${DD}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${wi … [truncated]
-       }
-       async showDiscordAuthPrompt() {
-         return new Promise(((DD, zD) => {
-           AD.NotificationProvider.showPromptPopup({
-             title: "Discord Login Required",
-             confirmText: "Continue",
-             confirmTooltip: "Open Discord login window",
-             cancelText: "Cancel",
-             cancelTooltip: "Cancel Discord login"
-           }).getResult().then((wD => {
- ... (44 more removed lines; see GitHub link above)
+         this.restWanted || (this.restWanted = !0, null === (pp = this.rest) || void 0 === pp || pp.load())
```

#### 6. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L104-L106` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/144.js#L263-L264) · [Before (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/144.js#L104-L106)

```diff
-       hasCurrentUser() {
-         const DD = gD.c.getItem(this.bloxdDiscordRefreshTokenKey);
-         return !(0, RD.B)(DD)
+       loadFor(pp) {
+         !this.restWanted && lp.test(pp) && this.loadRest()
```

#### 7. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L108-L111` → after: `L266-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L266-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/144.js#L266-L296) · [Before (L108-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/144.js#L108-L111)

```diff
-       async getCurrentUser(DD) {
-         const zD = gD.c.getItem(this.bloxdDiscordRefreshTokenKey);
-         if (!zD) return null;
-         let wD;
+     }(ap);
+ 
+     function Fp(pp) {
+       Object.assign(Np, pp), Np.loadsFontRest && np.loadRest(), ap(!1)
+     }
+ 
+     function gp(pp) {
+       pp !== Tp && (Tp = pp, ap())
+     }
+ 
+     function Gp(pp) {
+       if ("none" === bp || null === pp) return;
+       pp(Jp, "all" === bp ? 0 : Bp, new Uint8Array(0)) && (bp = "none")
+     }
+     const rp = new Map,
+       Zp = new Map;
+ ... (15 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L113-L125` → after: `L298-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L298-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/144.js#L298-L443) · [Before (L113-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/144.js#L113-L125)

```diff
-           const pD = await LD()((async () => {
-             try {
-               return await (0, KD.postJsonWithMetricsCookiesAndJsonResponse)(`${cD.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
-                 refreshToken: zD
-               }, {
-                 retries: 0
-               }, DD.getMetricsCookies())
-             } catch (wD) {
-               if (GD(wD)) throw new(LD().AbortError)(wD);
-               throw wD
-             }
-           }), {
-             retries: 3
+           return function(pp, ip) {
+             let [cp, Op, op] = ip;
+             const Ip = (0, Yp.e)(pp.width, pp.height),
+               {
+                 canvas: Sp
+               } = Ip;
+             return Ip.drawImage(pp, 0, 0), Ip.globalCompositeOperation = "multiply", Ip.fillStyle = `rgb(${cp}, ${Op}, ${op})`, Ip.fillRect(0, 0, Sp.width, Sp.height), Ip.globalCompositeOperation = "destination-in", Ip.drawImage(pp, 0, 0), Sp
+           }(Op, cp)
+         } finally {
+           Op.close()
+         }
+       })).then((pp => {
+         rp.get(op) === Sp && Zp.delete(op), pp !== Sp.image && (Sp.image = pp, ap(!1))
+       }), (ip => {
+         console.warn(`[bloxd-wasm-client] text icon ${pp} did not load`, ip), rp.get(op) === Sp && (rp.delete(op), Zp.delete(op), null !== Sp.image && ap(!1))
+       })), Sp.image
+ ... (130 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L127-L129` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/144.js#L445) · [Before (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/144.js#L127-L129)

```diff
-           wD = pD.accessToken, gD.c.setItem(this.bloxdDiscordRefreshTokenKey, pD.refreshToken)
-         } catch (pD) {
-           return GD(pD) ? (gD.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", pD), null)
+           continue
```

#### 10. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L131-L132` → after: `L447-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L447-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/144.js#L447-L598) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/144.js#L131-L132)

```diff
-         return {
-           accessToken: wD
+         if (Ap(Dp) && "icon" in Dp && !("mainRGB" in Dp)) {
+           var Yp;
+           op.push({
+             kind: "icon",
+             icon: String(Dp.icon),
+             size: Pp(null === (Yp = Wp(Dp.style)) || void 0 === Yp ? void 0 : Yp.fontSize, Lp.DEFAULT_FONT_SIZE)
+           });
+           continue
+         }
+         if (Ap(Dp) && (0, xp.Eb)(Dp)) {
+           op.push({
+             kind: "text",
+             text: "",
+             size: ip,
+             colour: Op
+           });
+ ... (136 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L135-L136` → after: `L671-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L671-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/144.js#L671-L692) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/144.js#L135-L136)

```diff
-       signOut() {
-         this.failPopup(new ID("Signed out of Discord during login")), gD.c.removeItem(this.bloxdDiscordRefreshTokenKey)
+       const Dp = "string" === typeof Op.backgroundColor ? Op.backgroundColor : "#22283b";
+       return {
+         width: Sp,
+         height: xp,
+         chars: Yp,
+         draw: (pp, ip) => {
+           const Op = [];
+           if (pp.fillStyle = Dp, pp.fillRect(0, 0, Sp, xp), null === ip)
+             for (const Ip of op) Ip.items.length > 0 && jp(Ip.items.map((pp => pp.content)), 0, Ip.y, Ip.height, pp, cp, Op);
+           else {
+             let Ip = 0;
+             for (const Sp of op)
+               for (const op of Sp.items) {
+                 if (Ip >= ip) break;
+                 kp("text" === op.content.kind ? {
+                   ...op.content,
+ ... (6 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L141` → after: `L744-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L744-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/144.js#L744-L1106) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/144.js#L141)

```diff
-       return DD instanceof pD.c && 435 === DD.httpCode
+       const ip = ap(pp);
+       return "glow" === pp.style ? ip * Qp : Math.ceil(ip / 2) + 1
+     }
+ 
+     function gp(pp, ip, cp) {
+       var Op, op;
+       const Ip = null !== (Op = fp(pp.info)) && void 0 !== Op ? Op : {},
+         xp = "string" === typeof pp.name ? pp.name : "",
+         Yp = Ip.subtitle;
+       if (Array.isArray(Ip.content) && 0 === Ip.content.length && !(Array.isArray(Yp) && Yp.length > 0)) return null;
+       const Dp = "number" === typeof pp.hideNameSeed ? pp.hideNameSeed : null,
+         Ap = "" === xp || !0 === pp.mesh ? xp : (0, Cp.d)(xp, !cp.canSeeRealPlayerNames, Dp);
+       if (!Ap && !Ip.content) return null;
+       const Pp = "string" === typeof pp.colour ? pp.colour : "default",
+         Wp = Object.hasOwn(Sp.r, Pp) ? Sp.r[Pp] : void 0,
+         Up = Ip.content ? wp(Ip.content, Lp.DEFAULT_FONT_SIZE, cp, Wp) : [{
+ ... (347 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/145.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/145.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977)

#### 1. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/145.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/145.js#L4-L6)

```diff
-   8111: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       BloxdFirebaseSdk: () => UD
+   8212: (pp, ip, cp) => {
+     cp.d(ip, {
+       encodeBinaryMessageWithMetricsCookies: () => op
```

#### 2. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L8-L161` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/145.js#L8-L11) · [Before (L8-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/145.js#L8-L161)

```diff
-     var pD = wD(1837),
-       sD = wD(2901),
-       KD = wD(113),
-       rD = wD(103),
-       LD = wD(1702),
-       cD = wD(2035);
-     const gD = {
-       apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
-       authDomain: "bloxd-ee1aa.firebaseapp.com",
-       projectId: "bloxd-ee1aa",
-       storageBucket: "bloxd-ee1aa.appspot.com",
-       messagingSenderId: "758847442742",
-       appId: "1:758847442742:web:7bb74eb261641e30f02d97"
-     };
-     var RD = wD(2925),
-       AD = wD(1724);
- ... (138 more removed lines; see GitHub link above)
+     var Op = cp(3837);
+ 
+     function op(pp) {
+       return Op.h.toBuffer(pp)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/146.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/146.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af)

#### 1. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/146.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/146.js#L4)

```diff
-   8120: (DD, zD, wD) => {
+   8218: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/146.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/146.js#L6)

```diff
-       BloxdDiscordActivitySdk: () => nD
+       BloxdDiscordSDK: () => Up,
+       DiscordLoginCancelledError: () => yp,
+       discordPopupTimeoutMs: () => Wp
```

#### 3. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L8-L63` → after: `L10-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L10-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/146.js#L10-L25) · [Before (L8-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/146.js#L8-L63)

```diff
-     var pD = wD(8124),
-       sD = wD(1234),
-       KD = wD(1200),
-       rD = wD(619),
-       LD = wD(1260),
-       cD = wD(1737),
-       gD = wD(1332),
-       RD = wD(760),
-       AD = wD(20),
-       UD = wD(1084),
-       fD = function(DD) {
-         return DD.APPLICATION_COMMANDS = "applications.commands", DD.IDENTIFY = "identify", DD.EMAIL = "email", DD.GUILDS = "guilds", DD.READ_DM_CHANNELS = "dm_channels.read", DD.WRITE_ACTIVITIES = "rpc.activities.write", DD
-       }(fD || {}),
-       ID = function(DD) {
-         return DD[DD.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", DD[DD.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", DD[DD.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", DD[DD.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", DD[DD.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", DD[DD.RATELIMITE … [truncated]
-       }(ID || {}),
- ... (40 more removed lines; see GitHub link above)
+     var Op = cp(156),
+       op = cp(1236),
+       Ip = cp(1149),
+       Sp = cp(1162),
+       xp = cp.n(Sp),
+       Lp = cp(1211),
+       Yp = cp(44),
+       Dp = cp(640),
+       Ap = cp(1372),
+       Pp = cp(1087);
+     const Wp = 6e5;
+     class yp extends Error {
+       constructor() {
+         super(...arguments), this.name = Ip.discordLoginCancelledErrorName
+       }
+     }
```

#### 4. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L65-L114` → after: `L27-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L27-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/146.js#L27-L35) · [Before (L65-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/146.js#L65-L114)

```diff
-       constructor(DD) {
-         this.discordSdk = DD, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
-       }
-       static async setup() {
-         console.log("Setting up Discord SDK with client id", UD.b.discordClientID);
-         const DD = new pD.d(UD.b.discordClientID);
-         let zD = !1;
-         setTimeout((() => {
-           zD || (console.warn("Discord SDK took too long to initialize"), (0, cD.reloadBloxd)())
-         }), 15e3), await DD.ready(), zD = !0;
-         try {
-           const {
-             enabled: zD
-           } = await DD.commands.encourageHardwareAcceleration();
-           zD || console.warn("Hardware acceleration not enabled in the Discord client")
-         } catch (sD) {
- ... (34 more removed lines; see GitHub link above)
+       constructor() {
+         this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirect … [truncated]
+         const pp = new URL(this.discordRedirectUrl).origin;
+         window.addEventListener("message", (ip => {
+           var cp;
+           if (ip.origin !== pp || "oauth_authentication_discord" !== (null === (cp = ip.data) || void 0 === cp ? void 0 : cp.type)) return;
+           if ("string" !== typeof ip.data.code || !ip.data.code) return void this.failPopup(new yp("Discord authentication was cancelled on Discord"));
+           const Op = this.popupWindowPromiseResolve;
+           this.resetPopupState(), null === Op || void 0 === Op || Op(ip.data.code)
```

#### 5. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L117` → after: `L38-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L38-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/146.js#L38-L41) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/146.js#L117)

```diff
-       async getInGameDescriptions() {
+       resetPopupState() {
+         null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseRe … [truncated]
+       }
+       failPopup(pp) {
```

#### 6. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L120-L130` → after: `L91-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L91-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/146.js#L91-L132) · [Before (L120-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/146.js#L120-L130)

```diff
-           requestedGameNameWithVariation: zD
-         } = (0, gD.c)(), wD = (0, RD.m)(zD), pD = null !== (DD = hD[zD]) && void 0 !== DD ? DD : GD[wD.type], sD = await (0, KD.D)(LD.c.ENGLISH, wD.title), cD = (0, gD.c)();
-         if ((0, gD.j)(cD)) return {
-           primary: `${pD} in a Discord World`
-         };
-         const AD = `${pD} in ${sD}`;
-         return (0, rD.B)(cD.lobbyName) ? {
-           primary: AD
-         } : {
-           primary: AD,
-           secondary: `Lobby ${cD.lobbyName}`
+           accessToken: cp,
+           refreshToken: Op
+         } = await xp()((async () => await (0, Ip.postJsonWithMetricsCookiesAndJsonResponse)(`${Lp.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
+           authorizationCode: pp,
+           bloxdClientEnvironment: Pp.c.clientEnvironment,
+           instanceId: null
+         }, {
+           retries: 0
+         }, ip.getMetricsCookies())), {
+           retries: 3
+         });
+         return console.log("Discord access token received:", Op, this.bloxdDiscordRefreshTokenKey), Yp.e.setItem(this.bloxdDiscordRefreshTokenKey, Op), cp
+       }
+       hasCurrentUser() {
+         const pp = Yp.e.getItem(this.bloxdDiscordRefreshTokenKey);
+         return !(0, Dp.G)(pp)
+ ... (26 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L133-L138` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/146.js#L135-L136) · [Before (L133-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/146.js#L133-L138)

```diff
-       getCurrentChannelType() {
-         const {
-           channelId: DD,
-           guildId: zD
-         } = this.getCurrentChannelAndGuild();
-         return null !== zD ? sD.b.GUILD : null !== DD ? sD.b.DM : null
+       signOut() {
+         this.failPopup(new yp("Signed out of Discord during login")), Yp.e.removeItem(this.bloxdDiscordRefreshTokenKey)
```

#### 8. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L140-L249` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/146.js#L138-L141) · [Before (L140-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/146.js#L140-L249)

```diff
-       getRequiredScopeForCurrentChannel() {
-         const DD = this.getCurrentChannelType(),
-           zD = [fD.APPLICATION_COMMANDS, fD.IDENTIFY, fD.EMAIL, fD.GUILDS, fD.WRITE_ACTIVITIES];
-         switch (DD) {
-           case sD.b.DM:
-           case sD.b.GUILD:
-             return [...zD];
-           default:
-             throw new Error(`Unknown Discord channel type: ${DD}`)
-         }
-       }
-       getCurrentChannelAndGuild() {
-         const {
-           channelId: DD,
-           guildId: zD
-         } = this.discordSdk;
- ... (94 more removed lines; see GitHub link above)
+     }
+ 
+     function wp(pp) {
+       return pp instanceof Op.e && 435 === pp.httpCode
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/147.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/147.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05)

#### 1. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L4-L4534` → after: `L4-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/147.js#L4-L13) · [Before (L4-L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/147.js#L4-L4534)

```diff
-   8124: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => cK,
-       g: () => lw
-     });
-     var pD = {};
-     wD.r(pD), wD.d(pD, {
-       b: () => sp,
-       f: () => Lp,
-       c: () => rp,
-       i: () => Fw,
-       l: () => tw,
-       o: () => Tp,
-       s: () => qw,
-       u: () => dp,
-       x: () => Qp,
- ... (4515 more removed lines; see GitHub link above)
+   8220: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       BloxdFirebaseSdk: () => Pp
+     });
+     var Op = cp(1860),
+       op = cp(3003),
+       Ip = cp(108),
+       Sp = cp(104),
+       xp = cp(1705),
+       Lp = cp(2080);
```

#### 2. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L4536-L4638` → after: `L15-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L15-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/147.js#L15-L20) · [Before (L4536-L4638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/147.js#L4536-L4638)

```diff
-       [ip.READY]: {
-         payload: lp.extend({
-           evt: rw(ip.READY),
-           data: tz({
-             v: iz(),
-             config: tz({
-               cdn_host: Sz().optional(),
-               api_endpoint: Sz(),
-               environment: Sz()
-             }),
-             user: tz({
-               id: Sz(),
-               username: Sz(),
-               discriminator: Sz(),
-               avatar: Sz().optional()
-             }).optional()
- ... (87 more removed lines; see GitHub link above)
+       apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
+       authDomain: "bloxd-ee1aa.firebaseapp.com",
+       projectId: "bloxd-ee1aa",
+       storageBucket: "bloxd-ee1aa.appspot.com",
+       messagingSenderId: "758847442742",
+       appId: "1:758847442742:web:7bb74eb261641e30f02d97"
```

#### 3. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L4640-L4831` → after: `L22-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L22-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/147.js#L22-L31) · [Before (L4640-L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/147.js#L4640-L4831)

```diff
-     const kp = tz({}).nullable(),
-       mp = tz({
-         code: Sz()
-       }),
-       ep = tz({
-         guilds: vz(tz({
-           id: Sz(),
-           name: Sz()
-         }))
-       }),
-       op = tz({
-         id: Sz(),
-         name: Sz(),
-         icon_url: Sz().optional(),
-         members: vz(qw)
-       }),
- ... (176 more removed lines; see GitHub link above)
+     var Dp = cp(3025),
+       Ap = cp(1742);
+     class Pp {
+       constructor() {}
+       static async setup() {
+         try {
+           return await Pp.setupInternal()
+         } catch (pp) {
+           return console.error("Failed to setup Firebase SDK:", pp), null
+         }
```

#### 4. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L4833-L4840` → after: `L33-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L33-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/147.js#L33-L50) · [Before (L4833-L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/147.js#L4833-L4840)

```diff
-     }
- 
-     function Is(DD) {
-       let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
-       const wD = vw[DD].response,
-         pD = Yw.extend({
-           cmd: rw(DD),
-           data: wD
+       static async setupInternal() {
+         const pp = await Promise.all([cp.e(270), cp.e(269)]).then((() => cp(40682))),
+           ip = await Promise.all([cp.e(270), cp.e(271)]).then((() => cp(40713))),
+           Wp = await Promise.all([cp.e(270), cp.e(272)]).then((() => cp(40721))),
+           yp = pp.initializeApp({
+             ...Yp,
+             measurementId: op.bloxdGa4MeasurementId
+           });
+         (0, op.setUpGtag)(), window.gtag("config", op.bloxdGa4MeasurementId), (0, op.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
+         const Up = ip.getAnalytics(yp),
+           wp = {
+             portal: Ip.currentUrl.getSearchParam("portal") || "root",
+             loggedIn: !1
+           };
+         ip.setUserProperties(Up, wp);
+         const vp = Wp.initializeAuth(yp, {
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L4842-L4846` → after: `L52-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/147.js#L52-L55) · [Before (L4842-L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/147.js#L4842-L4846)

```diff
-       return wD => async sD => {
-         const KD = await wD({
-           cmd: DD,
-           args: sD,
-           transfer: zD(sD)
+         Wp.useDeviceLanguage(vp);
+         const tp = new Wp.GoogleAuthProvider;
+         tp.setCustomParameters({
+           prompt: "select_account"
```

#### 6. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L4848-L4893` → after: `L57-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L57-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/147.js#L57-L61) · [Before (L4848-L4893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/147.js#L4848-L4893)

```diff
-         return pD.parse(KD).data
-       }
-     }
-     const Bs = Is(ow.AUTHENTICATE),
-       Gs = DD => fs(DD, Fw.AUTHORIZE, mp),
-       hs = DD => fs(DD, Fw.CAPTURE_LOG, kp),
-       ns = DD => fs(DD, Fw.ENCOURAGE_HW_ACCELERATION, Ks),
-       Ms = DD => fs(DD, Fw.GET_ENTITLEMENTS_EMBEDDED, zs),
-       Os = DD => fs(DD, Fw.GET_SKUS_EMBEDDED, Ds),
-       Es = DD => fs(DD, Fw.GET_CHANNEL_PERMISSIONS, rs),
-       Qs = DD => fs(DD, Fw.GET_PLATFORM_BEHAVIORS, Ls),
-       Xs = DD => fs(DD, Fw.OPEN_EXTERNAL_LINK, kp),
-       Vs = DD => fs(DD, Fw.OPEN_INVITE_DIALOG, kp),
-       Ps = Is(ow.OPEN_SHARE_MOMENT_DIALOG);
-     sp.HU({
-       state: !0,
- ... (30 more removed lines; see GitHub link above)
+         const Hp = new Wp.OAuthProvider(Op.g[Op.b.APPLE]),
+           dp = new Wp.OAuthProvider(Op.g[Op.b.MICROSOFT]);
+         dp.setCustomParameters({
+           prompt: "select_account",
+           tenant: "consumers"
```

#### 7. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L4895-L5229` → after: `L63-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/147.js#L63-L66) · [Before (L4895-L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/147.js#L4895-L5229)

```diff
-         return async DD => {
-           try {
-             const pD = await zD({
-               cmd: wD,
-               args: DD,
-               transfer: KD(DD)
-             });
-             return rD.parse(pD).data
-           } catch (pD) {
-             if (pD.code === Sw.INVALID_PAYLOAD) {
-               const pD = sD(DD),
-                 LD = await zD({
-                   cmd: wD,
-                   args: pD,
-                   transfer: KD(pD)
-                 });
- ... (319 more removed lines; see GitHub link above)
+         const ep = {
+           [Op.b.GOOGLE]: tp,
+           [Op.b.APPLE]: Hp,
+           [Op.b.MICROSOFT]: dp
```

#### 8. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L5231-L5259` → after: `L68-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L68-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/147.js#L68-L77) · [Before (L5231-L5259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/147.js#L5231-L5259)

```diff
-         KK.forEach((zD => {
-           ! function(DD, zD, wD) {
-             const pD = DD[zD],
-               sD = DD;
-             pD && (DD[zD] = function() {
-               const DD = [].slice.call(arguments),
-                 KD = "" + DD.join(" ");
-               wD(zD, KD), pD.apply(sD, DD)
-             })
-           }(console, zD, DD)
-         }))
-       }
-       handleClose(DD) {
-         Rs.parse(DD)
-       }
-       handleHandshake() {}
- ... (13 more removed lines; see GitHub link above)
+         window.gtag("set", {
+           cookie_flags: "SameSite=None;Secure"
+         }), await new Promise((pp => {
+           const ip = Wp.onIdTokenChanged(vp, (cp => {
+             ip(), pp()
+           }))
+         }));
+         class jp extends Pp {
+           setUserProperties(pp) {
+             ip.setUserProperties(Up, pp)
```

#### 9. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L5261-L5591` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/147.js#L79-L80) · [Before (L5261-L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/147.js#L5261-L5591)

```diff
-           if (null == pD.nonce) return void console.error("Missing nonce", DD);
-           null === (wD = this.pendingCommands.get(pD.nonce)) || void 0 === wD || wD.resolve(pD), this.pendingCommands.delete(pD.nonce)
-         }
-       }
-       _getSearch() {
-         return "undefined" === typeof window ? "" : window.location.search
-       }
-     }
-     var gK, RK = 1e9,
-       AK = !0,
-       UK = "[DecimalError] ",
-       fK = UK + "Invalid argument: ",
-       IK = UK + "Exponent out of range: ",
-       BK = Math.floor,
-       GK = Math.pow,
-       hK = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
- ... (315 more removed lines; see GitHub link above)
+           onIdTokenChanged(pp) {
+             Wp.onIdTokenChanged(vp, pp)
```

#### 10. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L5593-L5664` → after: `L82-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/147.js#L82-L83) · [Before (L5593-L5664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/147.js#L5593-L5664)

```diff
-           if (AD[RD] += KD, AD[RD] != nK) break;
-           AD[RD--] = 0, KD = 1
-         }
-       for (pD = AD.length; 0 === AD[--pD];) AD.pop();
-       if (AK && (DD.e > OK || DD.e < -OK)) throw Error(IK + CK(DD));
-       return DD
-     }
- 
-     function SK(DD, zD) {
-       var wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD = DD.constructor,
-         fD = UD.precision;
-       if (!DD.s || !zD.s) return zD.s ? zD.s = -zD.s : zD = new UD(DD), AK ? dK(zD, fD) : zD;
-       if (cD = DD.d, AD = zD.d, pD = zD.e, gD = DD.e, cD = cD.slice(), rD = gD - pD) {
-         for ((RD = rD < 0) ? (wD = cD, rD = -rD, LD = AD.length) : (wD = AD, pD = gD, LD = cD.length), rD > (sD = Math.max(Math.ceil(fD / 7), LD) + 2) && (rD = sD, wD.length = 1), wD.reverse(), sD = rD; sD--;) wD.push(0);
-         wD.reverse()
-       } else {
- ... (56 more removed lines; see GitHub link above)
+           canSignIn() {
+             return !0
```

#### 11. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L5666-L5930` → after: `L85-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L85-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/147.js#L85-L108) · [Before (L5666-L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/147.js#L5666-L5930)

```diff
-           return DD === ~~DD && DD < 1e7 ? (zD.e = 0, void(zD.d = [DD])) : jK(zD, DD.toString())
-         }
-         if ("string" !== typeof DD) throw Error(fK + DD);
-         if (45 === DD.charCodeAt(0) ? (DD = DD.slice(1), zD.s = -1) : zD.s = 1, !hK.test(DD)) throw Error(fK + DD);
-         jK(zD, DD)
-       }
-       if (KD.prototype = JK, KD.ROUND_UP = 0, KD.ROUND_DOWN = 1, KD.ROUND_CEIL = 2, KD.ROUND_FLOOR = 3, KD.ROUND_HALF_UP = 4, KD.ROUND_HALF_DOWN = 5, KD.ROUND_HALF_EVEN = 6, KD.ROUND_HALF_CEIL = 7, KD.ROUND_HALF_FLOOR = 8, KD.clone = DD, KD.config = KD.set = WK, void 0 === zD &&  … [truncated]
-         for (sD = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], wD = 0; wD < sD.length;) zD.hasOwnProperty(pD = sD[wD++]) || (zD[pD] = this[pD]);
-       return KD.config(zD), KD
-     }({
-       precision: 20,
-       rounding: 4,
-       toExpNeg: -7,
-       toExpPos: 21,
-       LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
-     });
- ... (249 more removed lines; see GitHub link above)
+           async signInWithPopup(pp) {
+             var ip;
+             const cp = await Wp.signInWithPopup(vp, ep[pp]);
+             return null !== (ip = null === cp || void 0 === cp ? void 0 : cp.user) && void 0 !== ip ? ip : null
+           }
+           async getCurrentUser(pp) {
+             const ip = vp.currentUser;
+             if (!ip) return null;
+             const {
+               signInProvider: cp
+             } = await ip.getIdTokenResult(!1);
+             return cp === Op.g[pp] ? ip : null
+           }
+           async signOut(pp) {
+             null !== await this.getCurrentUser(pp) && await Wp.signOut(vp)
+           }
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L5932-L5997` → after: `L110-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L110-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/147.js#L110-L112) · [Before (L5932-L5997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/147.js#L5932-L5997)

```diff
-         return DD
-       };
- 
-       function jz(DD, zD) {
-         return DD && bz(DD, zD, Aw)
-       }
- 
-       function dz(DD, zD) {
-         for (var wD = 0, pD = (zD = az(zD, DD) ? [zD] : Zz(zD)).length; null != DD && wD < pD;) DD = DD[Fz(zD[wD++])];
-         return wD && wD == pD ? DD : void 0
-       }
- 
-       function Sz(DD, zD) {
-         return null != DD && zD in Object(DD)
-       }
- 
- ... (50 more removed lines; see GitHub link above)
+         class mp extends Pp {
+           setUserProperties(pp) {
+             ip.setUserProperties(Up, pp)
```

#### 13. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L5999-L6065` → after: `L114-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L114-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/147.js#L114-L118) · [Before (L5999-L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/147.js#L5999-L6065)

```diff
-           if (!PD) return !1;
-           return RD || (RD = new Pz),
-             function(DD, zD, wD, pD, sD, KD) {
-               var rD = 2 & sD,
-                 LD = Aw(DD),
-                 cD = LD.length,
-                 gD = Aw(zD),
-                 RD = gD.length;
-               if (cD != RD && !rD) return !1;
-               var AD = cD;
-               for (; AD--;) {
-                 var UD = LD[AD];
-                 if (!(rD ? UD in zD : HD.call(zD, UD))) return !1
-               }
-               var fD = KD.get(DD);
-               if (fD && KD.get(zD)) return fD == zD;
- ... (51 more removed lines; see GitHub link above)
+           onIdTokenChanged(pp) {
+             Wp.onIdTokenChanged(vp, pp)
+           }
+           canSignIn(pp) {
+             return null !== (0, Lp.b)(pp)
```

#### 14. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L6067-L6074` → after: `L120-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L120-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/147.js#L120-L127) · [Before (L6067-L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/147.js#L6067-L6074)

```diff
-         }(DD[0], DD[1]) : function(DD) {
-           var zD = function(DD) {
-             var zD = Aw(DD),
-               wD = zD.length;
-             for (; wD--;) {
-               var pD = zD[wD],
-                 sD = DD[pD];
-               zD[wD] = [pD, sD, uz(sD)]
+           async signInWithPopup(pp) {
+             const ip = (0, Lp.b)(pp);
+             if (null === ip) return console.warn(`The app can't sign in with ${pp}; check canSignIn first`), null;
+             try {
+               return await kp(ip, "signIn")
+             } catch (cp) {
+               if (cp instanceof Ap.d && "timeout" === cp.code) return null;
+               throw (0, Dp.reportClientError)("login_failed", cp, `app_${ip}`), cp
```

#### 15. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L6104-L6109` → after: `L130-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L130-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/147.js#L130-L143) · [Before (L6104-L6109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/147.js#L6104-L6109)

```diff
-         }(DD) : function(DD) {
-           return az(DD) ? (zD = Fz(DD), function(DD) {
-             return null == DD ? void 0 : DD[zD]
-           }) : function(DD) {
-             return function(zD) {
-               return dz(zD, DD)
+           async getCurrentUser(pp) {
+             const ip = vp.currentUser;
+             if (ip) {
+               const {
+                 signInProvider: cp
+               } = await ip.getIdTokenResult(!1);
+               if (cp === Op.g[pp]) return ip
+             }
+             const cp = (0, Lp.b)(pp);
+             if (null === cp) return null;
+             try {
+               return await kp(cp, "getCurrentUser")
+             } catch (op) {
+               return console.error(`Failed to get the current ${pp} user from the app:`, op), null
```

#### 16. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L6150-L6155` → after: `L146-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L146-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/147.js#L146-L156) · [Before (L6150-L6155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/147.js#L6150-L6155)

```diff
-           if (UD) {
-             if (!yD(zD, (function(DD, zD) {
-                 if (!UD.has(zD) && (fD === DD || wD(fD, DD, pD, sD, KD))) return UD.add(zD)
-               }))) {
-               AD = !1;
-               break
+           async signOut(pp) {
+             const ip = (0, Lp.b)(pp);
+             null !== ip && xp.b.request(`${ip}.signOut`, {}).catch((ip => {
+               console.error(`Failed to sign out of ${pp} in the app:`, ip)
+             }));
+             const cp = vp.currentUser;
+             if (cp) {
+               const {
+                 signInProvider: ip
+               } = await cp.getIdTokenResult(!1);
+               ip === Op.g[pp] && await Wp.signOut(vp)
```

#### 17. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L6162-L6236` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/147.js#L160) · [Before (L6162-L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/147.js#L6162-L6236)

```diff
-         return KD.delete(DD), KD.delete(zD), AD
-       }
- 
-       function kz(DD, zD) {
-         var wD = DD.__data__;
-         return function(DD) {
-           var zD = typeof DD;
-           return "string" == zD || "number" == zD || "symbol" == zD || "boolean" == zD ? "__proto__" !== DD : null === DD
-         }(zD) ? wD["string" == typeof zD ? "string" : "hash"] : wD.map
-       }
- 
-       function mz(DD, zD) {
-         var wD = function(DD, zD) {
-           return null == DD ? void 0 : DD[zD]
-         }(DD, zD);
-         return lz(wD) ? wD : void 0
- ... (59 more removed lines; see GitHub link above)
+         return (0, Sp.isMobileApp)() ? (await xp.b.ready, new mp) : new jp
```

#### 18. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L6238-L6329` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/147.js#L162) · [Before (L6238-L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/147.js#L6238-L6329)

```diff
- 
-       function Yz(DD) {
-         if (null != DD) {
-           try {
-             return YD.call(DD)
-           } catch (zD) {}
-           try {
-             return DD + ""
-           } catch (zD) {}
-         }
-         return ""
-       }
- 
-       function Hz(DD, zD) {
-         if ("function" != typeof DD || zD && "function" != typeof zD) throw new TypeError("Expected a function");
-         var wD = function() {
- ... (76 more removed lines; see GitHub link above)
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/148.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/148.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162)

#### 1. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/148.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/148.js#L4)

```diff
-   8126: (DD, zD, wD) => {
+   8224: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/148.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/148.js#L6-L8)

```diff
-       BloxdMsnAccountSdk: () => AD,
-       MsnSdkAdaptor: () => BD,
-       msnMockIdentityStorageKey: () => cD
+       BloxdDiscordActivitySdk: () => tp
```

#### 3. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L10-L87` → after: `L8-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L8-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/148.js#L8-L56) · [Before (L10-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/148.js#L10-L87)

```diff
-     var pD = wD(1326),
-       sD = wD(1186),
-       KD = wD(3470),
-       rD = wD(619);
-     wD(35);
-     const LD = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
-       cD = "msnMockIdentity";
-     let gD = null;
- 
-     function RD() {
-       return gD ??= async function() {
-         await (0, sD.b)(LD, {}, !1);
-         for (let DD = 0; DD < 50 && !window.$msstart; DD++) await (0, rD.H)(100)
-       }(), gD
-     }
-     class AD {
- ... (62 more removed lines; see GitHub link above)
+     var Op = cp(8232),
+       op = cp(1236),
+       Ip = cp(1201),
+       Sp = cp(640),
+       xp = cp(1260),
+       Lp = cp(1765),
+       Yp = cp(1349),
+       Dp = cp(768),
+       Ap = cp(25),
+       Pp = cp(1087),
+       Wp = function(pp) {
+         return pp.APPLICATION_COMMANDS = "applications.commands", pp.IDENTIFY = "identify", pp.EMAIL = "email", pp.GUILDS = "guilds", pp.READ_DM_CHANNELS = "dm_channels.read", pp.WRITE_ACTIVITIES = "rpc.activities.write", pp
+       }(Wp || {}),
+       yp = function(pp) {
+         return pp[pp.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", pp[pp.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", pp[pp.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", pp[pp.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", pp[pp.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", pp[pp.RATELIMITE … [truncated]
+       }(yp || {}),
+ ... (33 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L90-L99` → after: `L59-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L59-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/148.js#L59-L62) · [Before (L90-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/148.js#L90-L99)

```diff
-         leaderboard: {
-           1: ["right", "left"],
-           5: ["top", "left"]
-         },
-         square: {
-           1: []
-         },
-         skyscraper: {
-           2: []
-         }
+         goalRush: "Playing",
+         heroesvbrainrots: "Battling",
+         hideseek: "Playing",
+         bingo: "Playing"
```

#### 5. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L101-L103` → after: `L64-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/148.js#L64-L66) · [Before (L101-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/148.js#L101-L103)

```diff
-     class BD extends pD.b {
-       constructor() {
-         super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
+     class tp {
+       constructor(pp) {
+         this.discordSdk = pp, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
```

#### 6. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L106-L145` → after: `L69-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L69-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/148.js#L69-L97) · [Before (L106-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/148.js#L106-L145)

```diff
-         return await RD(), new BD
-       }
-       playVideoAd(DD, zD) {
-         this.playVideoOrRewarded("video", DD, DD)
-       }
-       playRewarded(DD, zD) {
-         this.playVideoOrRewarded("rewarded", DD, zD)
-       }
-       canShowBloxdAd(DD) {
-         for (const zD in ID)
-           if (DD.adId in ID[zD]) return !1;
-         return !0
-       }
-       async renderBanner(DD) {
-         if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,KD.b)(DD)}: msn placement is already showing so not requesting`);
-         const zD = ID[DD.adType][DD.adId];
- ... (24 more removed lines; see GitHub link above)
+         console.log("Setting up Discord SDK with client id", Pp.c.discordClientID);
+         const pp = new Op.c(Pp.c.discordClientID);
+         let ip = !1;
+         setTimeout((() => {
+           ip || (console.warn("Discord SDK took too long to initialize"), (0, Lp.reloadBloxd)())
+         }), 15e3), await pp.ready(), ip = !0;
+         try {
+           const {
+             enabled: ip
+           } = await pp.commands.encourageHardwareAcceleration();
+           ip || console.warn("Hardware acceleration not enabled in the Discord client")
+         } catch (op) {
+           console.error("Failed to encourage hardware acceleration in the Discord client", op)
+         }
+         const cp = new tp(pp);
+         return cp.isMobilePlatform() && (cp.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
+ ... (13 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L147-L152` → after: `L99-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L99-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/148.js#L99-L191) · [Before (L147-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/148.js#L147-L152)

```diff
-         } else console.warn(`AD ${(0,KD.b)(DD)}: couldn't find an msn unit that fit screen size`)
-       }
-       async clearBanner(DD) {
-         null !== this.currentlyShowingBannerPlacement && (0, KD.b)(DD) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,KD.b)(DD)}: Attempting to clear msn banner ads for banner`, DD), await this.clearAllBannerAds())
-       }
-       async clearAllBannerAds() {
+         }
+         await this.discordSdk.commands.setActivity({
+           activity: {
+             type: Up.PLAYING,
+             details: ip,
+             state: cp,
+             assets: {
+               large_image: "icon",
+               large_text: ip
+             },
+             timestamps: {
+               start: this.startTime
+             }
+           }
+         }).catch((pp => {
+           console.error(`Failed to update Discord activity rich presence with description="${ip}":`, pp)
+ ... (77 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L154-L155` → after: `L193-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L193-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/148.js#L193-L196) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/148.js#L154-L155)

```diff
-           if (this.isCurrentlyClearingAllBanners) return;
-           this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
+           const {
+             locale: pp
+           } = await this.discordSdk.commands.userSettingsGetLocale();
+           return pp
```

#### 9. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L157-L175` → after: `L198-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L198-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/148.js#L198-L239) · [Before (L157-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/148.js#L157-L175)

```diff
-           console.log("AD: Error while clearing all msn banner ads", DD)
-         } finally {
-           this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
-         }
-       }
-       playVideoOrRewarded(DD, zD, wD) {
-         const pD = zD => {
-           console.error(`AD: Error while playing MSN ${DD} ad: `, zD), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), wD()
-         };
-         if (window.$msstart) {
-           console.log(`AD: Attempting to play MSN ${DD} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
-           const wD = async () => {
-             try {
-               const wD = await window.$msstart.loadAdsAsync("rewarded" === DD),
-                 pD = await window.$msstart.showAdsAsync(wD.instanceId);
-               this.clearAllBannerAds(), await pD.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${DD} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), zD()
- ... (3 more removed lines; see GitHub link above)
+           return console.error("Failed to get user locale from Discord:", pp.stack), null
+         }
+       }
+       async getChannelName(pp) {
+         return this.discordSdk.commands.getChannel({
+           channel_id: pp
+         }).then((pp => pp.name)).catch((pp => "Your Current Discord Chat"))
+       }
+       async getDiscordContextFromChannelId(pp) {
+         const ip = await this.getChannelName(pp);
+         return op.g.from({
+           type: op.c.DM,
+           channelId: pp,
+           channelName: ip
+         })
+       }
+ ... (26 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L177-L207` → after: `L241-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L241-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/148.js#L241-L249) · [Before (L177-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/148.js#L177-L207)

```diff
-           window.adStartSoPause(null, {
-             preventMovement: !0
-           }), wD()
-         } else pD(`AD: Can't play MSN ${DD} ad because sdk is not loaded`)
-       }
-     }
- 
-     function GD(DD) {
-       let zD, wD;
-       switch (DD.placement) {
-         case "top":
-           zD = (window.innerWidth - DD.width) / 2, wD = UD;
-           break;
-         case "right":
-           zD = window.innerWidth - DD.width - UD, wD = window.innerHeight / 2 - DD.height / 2 - 10;
-           break;
- ... (15 more removed lines; see GitHub link above)
+         Ap.c.set({
+           notchSize: {
+             top: ip("top", window.innerHeight),
+             right: Math.max(ip("right", window.innerWidth), 7),
+             bottom: 0,
+             left: ip("left", window.innerWidth)
+           }
+         })
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/149.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/149.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353)

#### 1. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L4` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/149.js#L4-L9) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/149.js#L4)

```diff
-   8129: (DD, zD, wD) => {
+   8232: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => YI,
+       g: () => Tc
+     });
+     var Op = {};
```

#### 2. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6` → after: `L11-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L11-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/149.js#L11-L28) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/149.js#L6)

```diff
-       GameDistributionSdkAdaptor: () => KD
+       b: () => SO,
+       h: () => YO,
+       f: () => LO,
+       k: () => Kc,
+       n: () => sc,
+       r: () => XO,
+       u: () => iO,
+       v: () => JO,
+       x: () => mO,
+       y: () => QO,
+       z: () => Vc,
+       D: () => qO,
+       F: () => EO,
+       H: () => lO,
+       M: () => pO,
+       K: () => oO,
+ ... (2 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L8-L10` → after: `L30-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L30-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/149.js#L30-L476) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/149.js#L8-L10)

```diff
-     var pD = wD(1326),
-       sD = wD(1186);
-     class KD extends pD.b {
+     var op = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};
+ 
+     function Ip(pp) {
+       return pp && pp.__esModule && Object.prototype.hasOwnProperty.call(pp, "default") ? pp.default : pp
+     }
+     var Sp = {
+       exports: {}
+     };
+     ! function(pp) {
+       var ip = Object.prototype.hasOwnProperty,
+         cp = "~";
+ 
+       function Op() {}
+ 
+       function op(pp, ip, cp) {
+         this.Py = pp, this.context = ip, this.once = cp || !1
+ ... (431 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L12` → after: `L478-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L478-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/149.js#L478-L638) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/149.js#L12)

```diff
-         super(), this.setOnEndCb = DD, this.name = "gamedistribution"
+         this.spa = this.safeParseAsync, this._def = pp, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine  … [truncated]
+       }
+       get description() {
+         return this._def.description
+       }
+       _getType(pp) {
+         return Ap(pp.data)
+       }
+       _getOrReturnCtx(pp, ip) {
+         return ip || {
+           common: pp.parent.common,
+           data: pp.data,
+           parsedType: Ap(pp.data),
+           schemaErrorMap: this._def.errorMap,
+           path: pp.path,
+           parent: pp.parent
+ ... (145 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L14` → after: `L640-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L640-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/149.js#L640-L693) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/149.js#L14)

```diff
-       static async setup() {
+       brand() {
+         return new Ci({
+           typeName: Ji.ZodBranded,
+           type: this,
+           ...Xp(this._def)
+         })
+       } catch (pp) {
+         const ip = "function" === typeof pp ? pp : () => pp;
+         return new Ri({
+           ...Xp(this._def),
+           innerType: this,
+           catchValue: ip,
+           typeName: Ji.ZodCatch
+         })
+       }
+       describe(pp) {
+ ... (38 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L17-L52` → after: `L1038-L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L1038-L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/149.js#L1038-L2065) · [Before (L17-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/149.js#L17-L52)

```diff
-         return window.GD_OPTIONS = {
-           gameId: "b35b336d21654aa5a378480d13ed7225",
-           onEvent: wD => {
-             const pD = () => {
-               zD && (window.adCompleteSoResume(), zD = !1), DD && (DD(), DD = null)
-             };
-             switch (wD.name) {
-               case "SDK_GAME_START":
-                 console.log("Gamedis SDK_GAME_START"), zD = !1, DD ? (DD(), DD = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
-                 break;
-               case "SDK_GAME_PAUSE":
-                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
-                   preventMovement: !0
-                 }), zD = !0;
-                 break;
-               case "SDK_ERROR":
- ... (20 more removed lines; see GitHub link above)
+         const cp = new Hp;
+         for (const Op of this._def.checks)
+           if ("int" === Op.kind) xp.isInteger(pp.data) || (ip = this._getOrReturnCtx(pp, ip), tp(ip, {
+             code: Pp.invalid_type,
+             expected: "integer",
+             received: "float",
+             message: Op.message
+           }), cp.pU());
+           else if ("min" === Op.kind) {
+           (Op.inclusive ? pp.data < Op.value : pp.data <= Op.value) && (ip = this._getOrReturnCtx(pp, ip), tp(ip, {
+             code: Pp.too_small,
+             minimum: Op.value,
+             type: "number",
+             inclusive: Op.inclusive,
+             exact: !1,
+             message: Op.message
+ ... (1012 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L55-L56` → after: `L2068-L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R2068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L2068-L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/149.js#L2068-L2107) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/149.js#L55-L56)

```diff
-       playVideoAd(DD, zD) {
-         this.setOnEndCb(DD), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
+     }
+     Di.create = (pp, ip, cp) => new Di({
+       left: pp,
+       right: ip,
+       typeName: Ji.ZodIntersection,
+       ...Xp(cp)
+     });
+     class Ai extends lp {
+       _parse(pp) {
+         const {
+           status: ip,
+           ctx: cp
+         } = this._processInputParams(pp);
+         if (cp.parsedType !== Dp.array) return tp(cp, {
+           code: Pp.invalid_type,
+           expected: Dp.array,
+ ... (24 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L58-L61` → after: `L2109-L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R2109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L2109-L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/149.js#L2109-L2113) · [Before (L58-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/149.js#L58-L61)

```diff
-       renderBanner(DD) {
-         console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(DD.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, DD.divId), window.gdsdk.showAd … [truncated]
-           containerId: DD.divId
-         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((DD => console.info(DD)))) : console.error("window.gdsdk.AdType.Display is undefined")
+       rest(pp) {
+         return new Ai({
+           ...this._def,
+           rest: pp
+         })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/150.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/150.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166)

#### 1. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/150.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/150.js#L4)

```diff
-   8137: (DD, zD, wD) => {
+   8241: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/150.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/150.js#L6)

```diff
-       CoolMathGamesSdkAdaptor: () => KD
+       BloxdMsnAccountSdk: () => Ap,
+       MsnSdkAdaptor: () => Up
```

#### 3. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L8-L9` → after: `L9-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L9-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/150.js#L9-L102) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/150.js#L8-L9)

```diff
-     var pD = wD(1326),
-       sD = wD(1186);
+     var Op = cp(1341),
+       op = cp(1194),
+       Ip = cp(3575),
+       Sp = cp(640),
+       xp = cp(1755);
+     const Lp = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
+     let Yp = null;
+ 
+     function Dp() {
+       return Yp ??= async function() {
+         await (0, op.b)(Lp, {}, !1);
+         for (let pp = 0; pp < 50 && !window.$msstart; pp++) await (0, Sp.M)(100)
+       }(), Yp
+     }
+     class Ap {
+       constructor() {}
+ ... (78 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L12-L24` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/150.js#L105) · [Before (L12-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/150.js#L12-L24)

```diff
-         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
-           console.error("adBreakStartCallback not set")
-         }, this.adBreakCompleteCallback = () => {
-           console.error("adBreakCompleteCallback not set")
-         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
-       }
-       doAdBreakStart() {
-         this.adBreakStartCallback();
-         const DD = document.getElementsByClassName("ads-popup");
-         for (const zD of DD) zD instanceof HTMLElement && (zD.style.position = "fixed")
-       }
-       doAdBreakComplete() {
-         this.adBreakCompleteCallback()
+         super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
```

#### 5. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L27` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/150.js#L108) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/150.js#L27)

```diff
-         return await (0, sD.b)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, sD.b)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new KD
+         return await Dp(), new Up
```

#### 6. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L30-L31` → after: `L111-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L111-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/150.js#L111-L179) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/150.js#L30-L31)

```diff
-         this.adBreakStartCallback = () => {
-           console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
+         this.playVideoOrRewarded("video", pp, pp)
+       }
+       playRewarded(pp, ip) {
+         this.playVideoOrRewarded("rewarded", pp, ip)
+       }
+       canShowBloxdAd(pp) {
+         for (const ip in yp)
+           if (pp.adId in yp[ip]) return !1;
+         return !0
+       }
+       async renderBanner(pp) {
+         if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,Ip.d)(pp)}: msn placement is already showing so not requesting`);
+         const ip = yp[pp.adType][pp.adId];
+         if ((0, Sp.G)(ip)) return void console.warn(`AD ${(0,Ip.d)(pp)}: no msn placement is configured for this bloxd placement so not showing any ad`);
+         const cp = [];
+         for (const Op of ip)
+ ... (53 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L33-L53` → after: `L181-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L181-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/150.js#L181-L209) · [Before (L33-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/150.js#L33-L53)

```diff
-           })
-         }, this.adBreakCompleteCallback = () => {
-           console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), DD()
-         }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
-       }
-       onGameplayStart() {
-         try {
-           window.parent.cmgGameEvent("start")
-         } catch {
-           console.log("Couldn't access cmgGameEvent on parent")
-         }
-       }
-       onGameplayStop() {}
-       onGameEntered() {
-         try {
-           window.parent.cmgGameEvent("start")
- ... (5 more removed lines; see GitHub link above)
+           }), cp()
+         } else Op(`AD: Can't play MSN ${pp} ad because sdk is not loaded`)
+       }
+     }
+ 
+     function wp(pp) {
+       let ip, cp;
+       switch (pp.placement) {
+         case "top":
+           ip = (window.innerWidth - pp.width) / 2, cp = Pp;
+           break;
+         case "right":
+           ip = window.innerWidth - pp.width - Pp, cp = window.innerHeight / 2 - pp.height / 2 - 10;
+           break;
+         case "left":
+           ip = Pp, cp = window.innerHeight / 2 - pp.height / 2 - 10
+ ... (13 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/151.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/151.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b)

#### 1. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/151.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/151.js#L4)

```diff
-   8142: (DD, zD, wD) => {
+   8248: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/151.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/151.js#L6)

```diff
-       AdMobSdkAdaptor: () => RD
+       GameDistributionSdkAdaptor: () => Ip
```

#### 3. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L8-L39` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/151.js#L8-L9) · [Before (L8-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/151.js#L8-L39)

```diff
-     var pD = wD(1326),
-       sD = wD(20),
-       KD = wD(1702),
-       rD = wD(128),
-       LD = wD(3470),
-       cD = wD(351);
-     const gD = {
-       mobileAndroid: {
-         banners: {
-           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
-           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
-           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
-           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
-           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
-           square_1: "ca-app-pub-5991928098122027/6381115670"
-         },
- ... (16 more removed lines; see GitHub link above)
+     var Op = cp(1341),
+       op = cp(1194);
```

#### 4. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L42-L50` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/151.js#L12) · [Before (L42-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/151.js#L42-L50)

```diff
-         super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = gD[DD], KD.c.on("ads.bannerStatus", (DD => {
-           let {
-             placementId: zD,
-             shown: wD,
-             error: pD
-           } = DD;
-           const sD = !this.bannerFirstResponseSeen.has(zD);
-           this.bannerFirstResponseSeen.add(zD), sD ? wD ? console.log(`AD ${zD}: AdMob banner loaded`) : console.warn(`AD ${zD}: AdMob banner failed to load: ${pD}`) : wD || console.warn(`AD ${zD}: AdMob banner refresh failed: ${pD}`)
-         }))
+         super(), this.setOnEndCb = pp, this.name = "gamedistribution"
```

#### 5. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L53-L75` → after: `L15-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L15-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/151.js#L15-L52) · [Before (L53-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/151.js#L53-L75)

```diff
-         const DD = "mobileIos" === rD.v ? "mobileIos" : "mobileAndroid";
-         return console.log(`AD: AdMobSDK initialised for ${DD}`), new RD(DD)
-       }
-       muteGameDuring(DD) {
-         return this.fullScreenAdsInFlight++, sD.e.set({
-           soundOnFromAd: !1
-         }), DD.finally((() => {
-           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && sD.e.set({
-             soundOnFromAd: !0
-           })
-         }))
-       }
-       playRewarded(DD, zD) {
-         const wD = this.adUnitIds.rewarded;
-         this.muteGameDuring(KD.c.request("ads.showRewarded", {
-           placementId: wD
- ... (7 more removed lines; see GitHub link above)
+         let pp;
+         let ip;
+         return window.GD_OPTIONS = {
+           gameId: "b35b336d21654aa5a378480d13ed7225",
+           onEvent: cp => {
+             const Op = () => {
+               ip && (window.adCompleteSoResume(), ip = !1), pp && (pp(), pp = null)
+             };
+             switch (cp.name) {
+               case "SDK_GAME_START":
+                 console.log("Gamedis SDK_GAME_START"), ip = !1, pp ? (pp(), pp = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
+                 break;
+               case "SDK_GAME_PAUSE":
+                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
+                   preventMovement: !0
+                 }), ip = !0;
+ ... (22 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L79-L86` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/151.js#L56) · [Before (L79-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/151.js#L79-L86)

```diff
-         const wD = this.adUnitIds.interstitial;
-         this.muteGameDuring(KD.c.request("ads.showInterstitial", {
-           placementId: wD
-         })).then((() => {
-           DD()
-         }), (zD => {
-           console.warn(`AD ${wD}: AdMob interstitial failed:`, zD), DD()
-         }))
+         this.setOnEndCb(pp), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
```

#### 7. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L89-L117` → after: `L59-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L59-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/151.js#L59-L61) · [Before (L89-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/151.js#L89-L117)

```diff
-         const zD = (0, LD.b)(DD),
-           wD = this.adUnitIds.banners[zD];
-         if (void 0 === wD) return;
-         const pD = document.getElementById(DD.divId);
-         if (!pD) return void console.warn(`AD ${zD}: AdMob renderBanner called but div ${DD.divId} is not in DOM`);
-         const sD = pD.getBoundingClientRect(),
-           rD = window.innerWidth,
-           gD = window.innerHeight;
-         if (0 === rD || 0 === gD) return void console.warn(`AD ${zD}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
-         const RD = {
-           x1: cD.c.clamp(sD.left / rD * 100, 0, 100),
-           y1: cD.c.clamp(sD.top / gD * 100, 0, 100),
-           x2: cD.c.clamp(sD.right / rD * 100, 0, 100),
-           y2: cD.c.clamp(sD.bottom / gD * 100, 0, 100)
-         };
-         this.bannerPlacementByBloxdId.set(zD, wD), console.log(`AD ${zD}: AdMob renderBanner placementId=${wD} box=`, RD), KD.c.emit("ads.showBanner", {
- ... (13 more removed lines; see GitHub link above)
+         console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(pp.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, pp.divId), window.gdsdk.showAd … [truncated]
+           containerId: pp.divId
+         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((pp => console.info(pp)))) : console.error("window.gdsdk.AdType.Display is undefined")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/152.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/152.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f)

#### 1. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/152.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/152.js#L4-L6)

```diff
-   8151: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => gD
+   8252: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       CoolMathGamesSdkAdaptor: () => Ip
```

#### 2. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L8-L53` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/152.js#L8-L9) · [Before (L8-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/152.js#L8-L53)

```diff
-     var pD = wD(2901);
-     const sD = [1, 8, 9],
-       KD = 5,
-       rD = 200,
-       LD = 150;
- 
-     function cD(DD, zD) {
-       let wD = 0;
-       DD("addEventListener", 2, ((DD, rD) => {
-         if (!rD) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
-         const LD = function(DD) {
-           const zD = "useractioncomplete" === DD.eventStatus || "tcloaded" === DD.eventStatus && !!DD.tcString;
-           return DD.gdprApplies && zD ? sD.every((zD => !0 === DD.purpose.consents[zD])) : null
-         }(DD);
-         if (null === LD) return;
-         const cD = ++wD;
- ... (30 more removed lines; see GitHub link above)
+     var Op = cp(1341),
+       op = cp(1194);
```

#### 3. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L56` → after: `L12-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L12-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/152.js#L12-L24) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/152.js#L56)

```diff
-         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = cD
+         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
+           console.error("adBreakStartCallback not set")
+         }, this.adBreakCompleteCallback = () => {
+           console.error("adBreakCompleteCallback not set")
+         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
+       }
+       doAdBreakStart() {
+         this.adBreakStartCallback();
+         const pp = document.getElementsByClassName("ads-popup");
+         for (const ip of pp) ip instanceof HTMLElement && (ip.style.position = "fixed")
+       }
+       doAdBreakComplete() {
+         this.adBreakCompleteCallback()
```

#### 4. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L59-L72` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/152.js#L27) · [Before (L59-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/152.js#L59-L72)

```diff
-         return (0, KD.canonicaliseZonesWhenIdle)(cD), (0, LD.E)(), await (0, sD.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, rD.e)("inMobi"), new gD
-       }
-       playRewarded(DD, zD) {
-         if ("undefined" !== typeof window.aiptag.adplayer) {
-           console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
-           const wD = "video_reward";
-           window.aiptag.cmd.player.push((function() {
-             window.aiptag.adplayer.startPreRoll({
-               alias: wD
-             })
-           })), window.adStartSoPause(DD, {
-             onFailCb: zD
-           })
-         } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), zD()
+         return await (0, op.b)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, op.b)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new Ip
```

#### 5. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L75-L77` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/152.js#L30-L32) · [Before (L75-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/152.js#L75-L77)

```diff
-         "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (zD ? ` (alias: ${zD})` : "")), window.aiptag.cmd.player.push((function() {
-           window.aiptag.adplayer.startPreRoll({
-             alias: zD
+         this.adBreakStartCallback = () => {
+           console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
+             preventMovement: !0
```

#### 6. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L79` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/152.js#L34-L36) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/152.js#L79)

```diff
-         })), window.adStartSoPause(DD)) : (DD(), console.error("AIP ad lib not loaded, no ad playing"))
+         }, this.adBreakCompleteCallback = () => {
+           console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), pp()
+         }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
```

#### 7. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L81-L92` → after: `L38-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L38-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/152.js#L38-L43) · [Before (L81-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/152.js#L81-L92)

```diff
-       renderBanner(DD) {
-         if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
-         const {
-           divId: zD,
-           alias: wD
-         } = DD;
-         window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.display({
-             adUnitName: zD,
-             alias: wD
-           })
-         })), console.log("AD: Requested aip banner", document.getElementById(DD.divId), wD ? `(alias: ${wD})` : "")
+       onGameplayStart() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
+         }
```

#### 8. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L94-L97` → after: `L45-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L45-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/152.js#L45-L51) · [Before (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/152.js#L94-L97)

```diff
-       clearBanner(DD) {
-         "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.destroy(DD.divId)
-         })), console.log(`AD: Clearing aip banner ad ${DD.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
+       onGameplayStop() {}
+       onGameEntered() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
+         }
```

#### 9. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L99-L110` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/152.js#L53) · [Before (L99-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/152.js#L99-L110)

```diff
-       setBannerAutoRefreshEnabled(DD, zD) {
-         window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.setAutoRefresh(DD.divId, zD)
-         }))
-       }
-       newPageSession() {
-         console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
-           window.__VM.push((function(DD, zD) {
-             zD.Instances.pageManager.newPageSession(!1)
-           }))
-         }))
-       }
+       onGameExited() {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/153.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/153.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3)

#### 1. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/153.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/153.js#L4-L6)

```diff
-   8151: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => gD
+   8260: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       AdMobSdkAdaptor: () => Dp
```

#### 2. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L8-L52` → after: `L8-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L8-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/153.js#L8-L39) · [Before (L8-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/153.js#L8-L52)

```diff
-     var pD = wD(2901);
-     const sD = [1, 8, 9],
-       KD = 5,
-       rD = 200,
-       LD = 150;
- 
-     function cD(DD, zD) {
-       let wD = 0;
-       DD("addEventListener", 2, ((DD, rD) => {
-         if (!rD) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
-         const LD = function(DD) {
-           const zD = "useractioncomplete" === DD.eventStatus || "tcloaded" === DD.eventStatus && !!DD.tcString;
-           return DD.gdprApplies && zD ? sD.every((zD => !0 === DD.purpose.consents[zD])) : null
-         }(DD);
-         if (null === LD) return;
-         const cD = ++wD;
- ... (29 more removed lines; see GitHub link above)
+     var Op = cp(1341),
+       op = cp(25),
+       Ip = cp(1705),
+       Sp = cp(131),
+       xp = cp(3575),
+       Lp = cp(337);
+     const Yp = {
+       mobileAndroid: {
+         banners: {
+           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
+           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
+           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
+           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
+           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
+           square_1: "ca-app-pub-5991928098122027/6381115670"
+         },
+ ... (16 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L54-L55` → after: `L41-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L41-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/153.js#L41-L50) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/153.js#L54-L55)

```diff
-       constructor() {
-         super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
+       constructor(pp) {
+         super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = Yp[pp], Ip.b.on("ads.bannerStatus", (pp => {
+           let {
+             placementId: ip,
+             shown: cp,
+             error: Op
+           } = pp;
+           const op = !this.bannerFirstResponseSeen.has(ip);
+           this.bannerFirstResponseSeen.add(ip), op ? cp ? console.log(`AD ${ip}: AdMob banner loaded`) : console.warn(`AD ${ip}: AdMob banner failed to load: ${Op}`) : cp || console.warn(`AD ${ip}: AdMob banner refresh failed: ${Op}`)
+         }))
```

#### 4. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L58-L76` → after: `L53-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L53-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/153.js#L53-L76) · [Before (L58-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/153.js#L58-L76)

```diff
-         return window.nitroAds = window.nitroAds || {
-           createAd: function() {
-             for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
-             return new Promise((DD => {
-               window.nitroAds.queue.push(["createAd", zD, DD])
-             }))
-           },
-           addUserToken: function() {
-             for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
-             window.nitroAds.queue.push(["addUserToken", zD])
-           },
-           queue: []
-         }, document.addEventListener("nitroAds.rendered", (DD => {
-           var zD, wD, pD;
-           const sD = document.getElementById(null !== (zD = null === (wD = DD.detail) || void 0 === wD || null === (pD = wD.adInfo) || void 0 === pD ? void 0 : pD.adUnitCode) && void 0 !== zD ? zD : "");
-           null !== sD && void 0 !== sD && sD.classList.contains("NitroBanner") && sD.classList.toggle("NitroBannerUnfilled", "blank" === DD.detail.type)
- ... (3 more removed lines; see GitHub link above)
+         const pp = "mobileIos" === Sp.siteUsed ? "mobileIos" : "mobileAndroid";
+         return console.log(`AD: AdMobSDK initialised for ${pp}`), new Dp(pp)
+       }
+       muteGameDuring(pp) {
+         return this.fullScreenAdsInFlight++, op.c.set({
+           soundOnFromAd: !1
+         }), pp.finally((() => {
+           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && op.c.set({
+             soundOnFromAd: !0
+           })
+         }))
+       }
+       playRewarded(pp, ip) {
+         const cp = this.adUnitIds.rewarded;
+         this.muteGameDuring(Ip.b.request("ads.showRewarded", {
+           placementId: cp
+ ... (8 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L79-L150` → after: `L79-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L79-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/153.js#L79-L86) · [Before (L79-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/153.js#L79-L150)

```diff
-         this.showVideoAd(DD, DD)
-       }
-       playRewarded(DD, zD) {
-         this.showVideoAd(DD, zD)
-       }
-       showVideoAd(DD, zD) {
-         if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void zD();
-         const wD = document.getElementById("GenericVideoWrapper"),
-           pD = document.getElementById("GenericVideoInner");
-         if (null === wD || null === pD) return void zD();
-         this.videoInFlight = !0;
-         let sD = !1;
-         const KD = document.createElement("div");
-         KD.id = LD, KD.className = "NitroVideoPlacement";
-         const rD = rD => {
-           if (!sD) {
- ... (56 more removed lines; see GitHub link above)
+         const cp = this.adUnitIds.interstitial;
+         this.muteGameDuring(Ip.b.request("ads.showInterstitial", {
+           placementId: cp
+         })).then((() => {
+           pp()
+         }), (ip => {
+           console.warn(`AD ${cp}: AdMob interstitial failed:`, ip), pp()
+         }))
```

#### 6. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L153-L167` → after: `L89-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L89-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/153.js#L89-L107) · [Before (L153-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/153.js#L153-L167)

```diff
-         const {
-           divId: zD,
-           width: wD,
-           height: pD
-         } = DD, sD = `${zD}-nitro`;
-         let KD = document.getElementById(sD);
-         null === KD && (KD = document.createElement("div"), KD.id = sD, KD.className = "NitroBanner", KD.style.setProperty("--nitro-slot-width", `${wD}px`), KD.style.setProperty("--nitro-slot-height", `${pD}px`), document.getElementById(zD).appendChild(KD));
-         const rD = [
-           [String(wD), String(pD)]
-         ];
-         Promise.resolve(window.nitroAds.createAd(sD, {
-           sizes: rD
-         })).catch((DD => {
-           console.error(`AD: Nitro failed to create banner ${sD}:`, DD)
-         })), console.log(`AD: Requested Nitro banner ${sD}`)
+         const ip = (0, xp.d)(pp),
+           cp = this.adUnitIds.banners[ip];
+         if (void 0 === cp) return;
+         const Op = document.getElementById(pp.divId);
+         if (!Op) return void console.warn(`AD ${ip}: AdMob renderBanner called but div ${pp.divId} is not in DOM`);
+         const op = Op.getBoundingClientRect(),
+           Sp = window.innerWidth,
+           Yp = window.innerHeight;
+         if (0 === Sp || 0 === Yp) return void console.warn(`AD ${ip}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
+         const Dp = {
+           x1: Lp.d.clamp(op.left / Sp * 100, 0, 100),
+           y1: Lp.d.clamp(op.top / Yp * 100, 0, 100),
+           x2: Lp.d.clamp(op.right / Sp * 100, 0, 100),
+           y2: Lp.d.clamp(op.bottom / Yp * 100, 0, 100)
+         };
+         this.bannerPlacementByBloxdId.set(ip, cp), console.log(`AD ${ip}: AdMob renderBanner placementId=${cp} box=`, Dp), Ip.b.emit("ads.showBanner", {
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L169-L171` → after: `L109-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L109-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/153.js#L109-L114) · [Before (L169-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/153.js#L169-L171)

```diff
-       displayConsentUI() {
-         var DD, zD;
-         null === (DD = (zD = window).__cmp) || void 0 === DD || DD.call(zD, "showModal")
+       clearBanner(pp) {
+         const ip = (0, xp.d)(pp),
+           cp = this.bannerPlacementByBloxdId.get(ip);
+         void 0 !== cp && (this.bannerPlacementByBloxdId.delete(ip), this.bannerFirstResponseSeen.delete(cp), console.log(`AD ${ip}: AdMob clearBanner placementId=${cp}`), Ip.b.emit("ads.hideBanner", {
+           placementId: cp
+         }))
```

#### 8. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L173-L182` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/153.js#L116-L117) · [Before (L173-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/153.js#L173-L182)

```diff
-       addPrivacyLinks(DD) {
-         var zD, wD, pD, sD;
-         const KD = document.createElement("span");
-         KD.dataset.ccpaLink = "1";
-         const rD = document.createElement("div");
-         rD.id = "ncmp-consent-link", DD.replaceChildren(KD, rD), null === (zD = (wD = window).__uspapi) || void 0 === zD || zD.call(wD, "addLink", 1), null === (pD = (sD = window).__cmp) || void 0 === pD || pD.call(sD, "addConsentLink")
-       }
-       newPageSession() {
-         var DD, zD;
-         null === (DD = (zD = window.nitroAds).navigate) || void 0 === DD || DD.call(zD)
+       canShowBloxdAd(pp) {
+         return !1
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/154.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/154.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df)

#### 1. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L4` → after: `L4-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L4-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/154.js#L4-L44) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/154.js#L4)

```diff
-   8157: (DD, zD, wD) => {
+   8269: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Yp
+     });
+     var Op = cp(3003);
+     const op = [1, 8, 9],
+       Ip = 5,
+       Sp = 200,
+       xp = 150;
+ 
+     function Lp(pp, ip) {
+       let cp = 0;
+       pp("addEventListener", 2, ((pp, Sp) => {
+         if (!Sp) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
+         const xp = function(pp) {
+           const ip = "useractioncomplete" === pp.eventStatus || "tcloaded" === pp.eventStatus && !!pp.tcString;
+ ... (25 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L6` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/154.js#L46) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/154.js#L6)

```diff
-       AdsenseForGamesSdkAdaptor: () => KD
+       AdinPlaySdkAdaptor: () => Yp
```

#### 3. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L8-L9` → after: `L48-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L48-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/154.js#L48-L53) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/154.js#L8-L9)

```diff
-     var pD = wD(1326),
-       sD = wD(1186);
+     var Op = cp(1341),
+       op = cp(1194),
+       Ip = cp(226),
+       Sp = cp(8269),
+       xp = cp(3003);
+     const Lp = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
```

#### 4. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L12` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/154.js#L56) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/154.js#L12)

```diff
-         super(), this.name = "adsense"
+         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = Lp
```

#### 5. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L15-L27` → after: `L59-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L59-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/154.js#L59-L72) · [Before (L15-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/154.js#L15-L27)

```diff
-         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(DD) {
-           window.adsbygoogle.push(DD)
-         }, window.adConfig({
-           preloadAdBreaks: "on",
-           sound: "on",
-           onReady: () => {
-             console.log("adsense for games ready")
-           }
-         }), await (0, sD.b)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
-           "data-ad-client": "ca-pub-5991928098122027",
-           "data-ad-frequency-hint": "120s",
-           type: "text/javascript"
-         }), console.log("Loaded adsense for games"), new KD
+         return (0, Ip.canonicaliseZonesWhenIdle)(Lp), (0, xp.setUpGtag)(), await (0, op.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, Sp.b)("inMobi"), new Yp
+       }
+       playRewarded(pp, ip) {
+         if ("undefined" !== typeof window.aiptag.adplayer) {
+           console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
+           const cp = "video_reward";
+           window.aiptag.cmd.player.push((function() {
+             window.aiptag.adplayer.startPreRoll({
+               alias: cp
+             })
+           })), window.adStartSoPause(pp, {
+             onFailCb: ip
+           })
+         } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), ip()
```

#### 6. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L30-L49` → after: `L75-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L75-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/154.js#L75-L109) · [Before (L30-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/154.js#L30-L49)

```diff
-         console.log("playPreroll requested");
-         let wD = !1;
-         const pD = setTimeout((() => {
-           console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), wD = !0, DD()
-         }), 3e3);
-         window.adBreak({
-           type: "video_start" === zD ? "start" : "next",
-           name: zD,
-           beforeAd: () => {
-             console.log("beforeAd called"), clearTimeout(pD), window.adStartSoPause(null, {
-               preventMovement: !0
-             })
-           },
-           afterAd: () => {
-             console.log("afterAd called"), window.adCompleteSoResume()
-           },
- ... (4 more removed lines; see GitHub link above)
+         "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (ip ? ` (alias: ${ip})` : "")), window.aiptag.cmd.player.push((function() {
+           window.aiptag.adplayer.startPreRoll({
+             alias: ip
+           })
+         })), window.adStartSoPause(pp)) : (pp(), console.error("AIP ad lib not loaded, no ad playing"))
+       }
+       renderBanner(pp) {
+         if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
+         const {
+           divId: ip,
+           alias: cp
+         } = pp;
+         window.aiptag.cmd.display.push((function() {
+           window.aipDisplayTag.display({
+             adUnitName: ip,
+             alias: cp
+ ... (19 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/155.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/155.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe)

#### 1. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4` → after: `L4-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L4-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/155.js#L4-L44) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/155.js#L4)

```diff
-   8162: (DD, zD, wD) => {
+   8269: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Yp
+     });
+     var Op = cp(3003);
+     const op = [1, 8, 9],
+       Ip = 5,
+       Sp = 200,
+       xp = 150;
+ 
+     function Lp(pp, ip) {
+       let cp = 0;
+       pp("addEventListener", 2, ((pp, Sp) => {
+         if (!Sp) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
+         const xp = function(pp) {
+           const ip = "useractioncomplete" === pp.eventStatus || "tcloaded" === pp.eventStatus && !!pp.tcString;
+ ... (25 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L6` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/155.js#L46) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/155.js#L6)

```diff
-       AditudeSdkAdaptor: () => rD
+       NitroSdkAdaptor: () => Lp
```

#### 3. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L8-L13` → after: `L48-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L48-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/155.js#L48-L52) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/155.js#L8-L13)

```diff
-     var pD = wD(1326),
-       sD = wD(1186);
-     const KD = {
-       video: "pb-slot-interstitial-video",
-       rewarded: "pb-slot-rewarded-video"
-     };
+     var Op = cp(1341),
+       op = cp(1194),
+       Ip = cp(8269),
+       Sp = cp(3003);
+     const xp = "NitroOutstreamVideo";
```

#### 4. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L16` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/155.js#L55) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/155.js#L16)

```diff
-         super(), this.name = "aditude"
+         super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
```

#### 5. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L19-L21` → after: `L58-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L58-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/155.js#L58-L76) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/155.js#L19-L21)

```diff
-         return window.tude = window.tude || {
-           cmd: []
-         }, await (0, sD.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new rD
+         return window.nitroAds = window.nitroAds || {
+           createAd: function() {
+             for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+             return new Promise((pp => {
+               window.nitroAds.queue.push(["createAd", ip, pp])
+             }))
+           },
+           addUserToken: function() {
+             for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+             window.nitroAds.queue.push(["addUserToken", ip])
+           },
+           queue: []
+         }, document.addEventListener("nitroAds.rendered", (pp => {
+           var ip, cp, Op;
+           const op = document.getElementById(null !== (ip = null === (cp = pp.detail) || void 0 === cp || null === (Op = cp.adInfo) || void 0 === Op ? void 0 : Op.adUnitCode) && void 0 !== ip ? ip : "");
+           null !== op && void 0 !== op && op.classList.contains("NitroBanner") && op.classList.toggle("NitroBannerUnfilled", "blank" === pp.detail.type)
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L24` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/155.js#L79) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/155.js#L24)

```diff
-         this.playVideoOrRewarded("video", DD, DD)
+         this.showVideoAd(pp, pp)
```

#### 7. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L27` → after: `L82-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L82-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/155.js#L82-L150) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/155.js#L27)

```diff
-         this.playVideoOrRewarded("rewarded", DD, zD)
+         this.showVideoAd(pp, ip)
+       }
+       showVideoAd(pp, ip) {
+         if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void ip();
+         const cp = document.getElementById("GenericVideoWrapper"),
+           Op = document.getElementById("GenericVideoInner");
+         if (null === cp || null === Op) return void ip();
+         this.videoInFlight = !0;
+         let op = !1;
+         const Ip = document.createElement("div");
+         Ip.id = xp, Ip.className = "NitroVideoPlacement";
+         const Sp = Sp => {
+           if (!op) {
+             op = !0, clearTimeout(vp), clearInterval(wp), document.removeEventListener("nitroAds.adResult", Dp), document.removeEventListener("nitroAds.rendered", Ap), document.removeEventListener("nitroAds.complete", Pp);
+             try {
+               Wp.remove(), Ip.querySelectorAll("video").forEach((pp => {
+ ... (53 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L30-L36` → after: `L153-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L153-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/155.js#L153-L167) · [Before (L30-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/155.js#L30-L36)

```diff
-         const zD = this.getBaseDivId(DD.adId, DD.width, DD.height);
-         window.tude.cmd.push((function() {
-           window.tude.refreshAdsViaDivMappings([{
-             divId: DD.divId,
-             baseDivId: zD
-           }])
-         }))
+         const {
+           divId: ip,
+           width: cp,
+           height: Op
+         } = pp, op = `${ip}-nitro`;
+         let Ip = document.getElementById(op);
+         null === Ip && (Ip = document.createElement("div"), Ip.id = op, Ip.className = "NitroBanner", Ip.style.setProperty("--nitro-slot-width", `${cp}px`), Ip.style.setProperty("--nitro-slot-height", `${Op}px`), document.getElementById(ip).appendChild(Ip));
+         const Sp = [
+           [String(cp), String(Op)]
+         ];
+         Promise.resolve(window.nitroAds.createAd(op, {
+           sizes: Sp
+         })).catch((pp => {
+           console.error(`AD: Nitro failed to create banner ${op}:`, pp)
+         })), console.log(`AD: Requested Nitro banner ${op}`)
```

#### 9. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L38-L39` → after: `L169-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L169-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/155.js#L169-L171) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/155.js#L38-L39)

```diff
-       getBaseDivId(DD, zD, wD) {
-         return `pb-slot-bloxdio-${zD}-${wD}${DD>1?`-${DD}`:""}`
+       displayConsentUI() {
+         var pp, ip;
+         null === (pp = (ip = window).__cmp) || void 0 === pp || pp.call(ip, "showModal")
```

#### 10. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L41-L78` → after: `L173-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L173-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/155.js#L173-L182) · [Before (L41-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/155.js#L41-L78)

```diff
-       playVideoOrRewarded(DD, zD, wD) {
-         var pD;
-         let sD = !1;
-         const rD = () => {
-             document.getElementById("GenericVideoWrapper").style.display = "none", sD = !0
-           },
-           LD = (DD, zD) => {
-             console.error(`AD: Error while playing Aditude video ad: ${DD}:`, zD), rD(), wD()
-           };
-         if (console.log(`AD: Requesting Aditude ${DD} ad`), void 0 === (null === (pD = window.tude) || void 0 === pD ? void 0 : pD.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${DD} ad playing`), void LD("Aditude ad lib not loaded", null);
-         document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
-           console.log("AD: Inside Aditude window.tude.cmd.push");
-           try {
-             window.tude.requestInstreamPlayer({
-               code: KD[DD],
-               divId: "GenericVideoInner",
- ... (22 more removed lines; see GitHub link above)
+       addPrivacyLinks(pp) {
+         var ip, cp, Op, op;
+         const Ip = document.createElement("span");
+         Ip.dataset.ccpaLink = "1";
+         const Sp = document.createElement("div");
+         Sp.id = "ncmp-consent-link", pp.replaceChildren(Ip, Sp), null === (ip = (cp = window).__uspapi) || void 0 === ip || ip.call(cp, "addLink", 1), null === (Op = (op = window).__cmp) || void 0 === Op || Op.call(op, "addConsentLink")
+       }
+       newPageSession() {
+         var pp, ip;
+         null === (pp = (ip = window.nitroAds).navigate) || void 0 === pp || pp.call(ip)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/156.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/156.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4)

#### 1. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4-L2250` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/156.js#L4-L40) · [Before (L4-L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/156.js#L4-L2250)

```diff
-   8875: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => LD
-     });
-     var pD = wD(20),
-       sD = wD(1200),
-       KD = wD(5021),
-       rD = wD(1096);
- 
-     function LD(DD) {
-       let {
-         note: zD
-       } = DD;
-       const {
-         t: wD
-       } = (0, sD.E)(), {
- ... (2231 more removed lines; see GitHub link above)
+   8278: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       AdsenseForGamesSdkAdaptor: () => Ip
+     });
+     var Op = cp(1341),
+       op = cp(1194);
+     class Ip extends Op.b {
+       constructor() {
+         super(), this.name = "adsense"
+       }
+       static async setup() {
+         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(pp) {
+           window.adsbygoogle.push(pp)
+         }, window.adConfig({
+           preloadAdBreaks: "on",
+           sound: "on",
+ ... (21 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2299-L2368` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/156.js#L43-L44) · [Before (L2299-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/156.js#L2299-L2368)

```diff
-           onChangeComplete: pD => {
-             if (pD === zD) return void wD(cD.current);
-             const sD = Pw(cD.current, DD, pD);
-             cD.current = sD, KD(sD), (0, XD.reportAnalyticsClick)({
-               id: "hud_layout.safe_zone",
-               value: DD
-             })
-           }
-         })
-       };
-       return (0, JD.jsxs)("div", {
-         className: "SettingBoxGroup HudSafeZone",
-         children: [(0, JD.jsxs)("div", {
-           className: "SettingBox HudSafeZoneHeader",
-           children: [(0, JD.jsx)("div", {
-             children: rD("hudLayout:safeZone")
- ... (54 more removed lines; see GitHub link above)
+           afterAd: () => {
+             console.log("afterAd called"), window.adCompleteSoResume()
```

#### 3. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2370-L2393` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/156.js#L46-L47) · [Before (L2370-L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/156.js#L2370-L2393)

```diff
-           gD = [...DD.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((DD => DD.cloneNode(!0)));
-         return {
-           faces: Object.keys(sD).length > 0 ? sD : null,
-           names: KD,
-           shop: cD(".TouchInventoryKey.ShopKey"),
-           bag: cD(".TouchInventoryKey.BagKey"),
-           items: gD.length > 0 ? gD : null,
-           rowIcons: zD,
-           pinnedIcon: wD
-         }
-       }(document, xD, bD) : Lz)), dD = (0, sD.useRef)(null), SD = (0, sD.useRef)(null), iD = function(DD) {
-         const [zD, wD] = (0, sD.useState)((() => .4 * window.innerHeight));
-         return (0, sD.useLayoutEffect)((() => {
-           var zD;
-           const pD = null === (zD = DD.current) || void 0 === zD ? void 0 : zD.closest(".SettingsMenuRight");
-           if (!pD) return;
- ... (8 more removed lines; see GitHub link above)
+           adBreakDone: ip => {
+             console.log("adBreakDone called", ip), clearTimeout(Op), cp || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), pp())
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/157.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/157.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076)

#### 1. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L4-L15` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/157.js#L4-L6) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/157.js#L4-L15)

```diff
-   36586: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => KD,
-       h: () => BD,
-       j: () => GD,
-       k: () => LD,
-       m: () => UD,
-       q: () => hD,
-       s: () => AD,
-       v: () => MD,
-       y: () => ID,
-       z: () => nD
+   8281: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       AditudeSdkAdaptor: () => Sp
```

#### 2. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L17-L40` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/157.js#L8-L16) · [Before (L17-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/157.js#L17-L40)

```diff
-     var pD = wD(20),
-       sD = wD(25);
-     const KD = "clientGameInventoryButtonsChanged",
-       rD = new Map;
- 
-     function LD() {
-       return [...rD.values()].sort(((DD, zD) => {
-         var wD, pD;
-         return (null !== (wD = DD.order) && void 0 !== wD ? wD : 0) - (null !== (pD = zD.order) && void 0 !== pD ? pD : 0)
-       }))
-     }
-     let cD = null;
- 
-     function gD(DD) {
-       cD = DD
-     }
- ... (8 more removed lines; see GitHub link above)
+     var Op = cp(1341),
+       op = cp(1194);
+     const Ip = {
+       video: "pb-slot-interstitial-video",
+       rewarded: "pb-slot-rewarded-video"
+     };
+     class Sp extends Op.b {
+       constructor() {
+         super(), this.name = "aditude"
```

#### 3. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L42-L78` → after: `L18-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L18-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/157.js#L18-L78) · [Before (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/157.js#L42-L78)

```diff
-       DD.panel && "clientGame" === pD.e.get("openInGameMenuName") && gD(DD.id)
-     }
- 
-     function UD() {
-       return RD
-     }
- 
-     function fD() {
-       return LD().filter((DD => DD.panel && !DD.disabled))
-     }
- 
-     function ID(DD) {
-       const zD = fD(),
-         wD = zD.findIndex((DD => DD.id === cD));
-       return !(wD < 0 || zD.length < 2) && (AD(zD[(wD + DD + zD.length) % zD.length]), !0)
-     }
- ... (21 more removed lines; see GitHub link above)
+       static async setup() {
+         return window.tude = window.tude || {
+           cmd: []
+         }, await (0, op.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new Sp
+       }
+       playVideoAd(pp, ip) {
+         this.playVideoOrRewarded("video", pp, pp)
+       }
+       playRewarded(pp, ip) {
+         this.playVideoOrRewarded("rewarded", pp, ip)
+       }
+       renderBanner(pp) {
+         const ip = this.getBaseDivId(pp.adId, pp.width, pp.height);
+         window.tude.cmd.push((function() {
+           window.tude.refreshAdsViaDivMappings([{
+             divId: pp.divId,
+ ... (45 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/158.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/158.js` (83 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056)

#### 1. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L4)

```diff
-   39083: (DD, zD, wD) => {
+   9e3: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L6-L7)

```diff
-       b: () => LD,
-       d: () => KD
+       c: () => xp
```

#### 3. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L9-L10` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L8-L11) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L9-L10)

```diff
-     var pD = wD(4107);
-     let sD = null;
+     var Op = cp(25),
+       op = cp(1201),
+       Ip = cp(5113),
+       Sp = cp(1112);
```

#### 4. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L13` → after: `L14-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L14-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L14-L32) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L13)

```diff
-       return null !== sD && DD === sD
+       let {
+         note: ip
+       } = pp;
+       const {
+         t: cp
+       } = (0, op.H)(), {
+         clientEscMenuOptions: xp
+       } = (0, Op.o)(["clientEscMenuOptions"]);
+       return (0, Sp.jsx)(Ip.b, {
+         label: cp("touchSettings:actionButtons"),
+         checked: xp.touchActionButtons,
+         onClick: pp => {
+           Op.c.setClientEscMenuOptions({
+             touchActionButtons: pp
+           })
+         },
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L16-L64` → after: `L112-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L112-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L112-L120) · [Before (L16-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L16-L64)

```diff
-     function rD() {
-       this.Dv = !1, this.stopPropagation = !1, this.Av = !1, this.disabled = !1
-     }
-     class LD {
-       constructor(DD, zD) {
-         this.version = "0.7.0";
-         var wD = Object.assign({}, new rD, zD || {});
-         this.element = DD || document, this.Dv = !!wD.Dv, this.stopPropagation = !!wD.stopPropagation, this.Av = !!wD.Av, this.disabled = !!wD.disabled, this.filterEvents = (DD, zD) => !0, this.ignoreEvent = DD => !1, this.down = new pD.EventEmitter, this.up = new pD.EventEmitter … [truncated]
-           dx: 0,
-           dy: 0,
-           IzD: 0,
-           BzD: 0,
-           GzD: 0
-         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
-           lastX: 0,
-           lastY: 0,
- ... (33 more removed lines; see GitHub link above)
+     function Zp(pp, ip, cp, Op) {
+       const op = cp(function(pp, ip) {
+           return "attack" !== pp || ip ? Gp[pp].label : "hudLayout:attackContext"
+         }(pp, ip)),
+         Ip = Op[pp];
+       return Ip ? cp("hudLayout:slotWithKey", {
+         slot: op,
+         key: Ip
+       }) : op
```

#### 6. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L67-L68` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L123-L124) · [Before (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L67-L68)

```diff
-     function cD(DD) {
-       for (var zD in DD) DD[zD] = 0
+     function zp(pp, ip, cp, Op) {
+       return pp.map((pp => Zp(pp, ip, cp, Op))).join(", ")
```

#### 7. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L72-L85` → after: `L128-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L128-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L128-L134) · [Before (L72-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L72-L85)

```diff
-       window.addEventListener("keydown", GD.bind(null, DD, !0), !1), window.addEventListener("keyup", GD.bind(null, DD, !1), !1);
-       var zD = {
-         passive: !0
-       };
-       DD.element.addEventListener("touchstart", fD.bind(void 0, DD), {
-         passive: !1
-       }), DD.element.addEventListener("touchend", BD.bind(void 0, DD), zD), DD.element.addEventListener("mousedown", hD.bind(null, DD, !0), zD), window.document.addEventListener("mouseup", hD.bind(null, DD, !1), zD), DD.element.addEventListener("touchmove", nD.bind(null, DD), zD) … [truncated]
-     }
-     var RD = 0,
-       AD = 0,
-       UD = null;
- 
-     function fD(DD, zD) {
-       zD.preventDefault(), ID(zD)
+       let {
+         className: ip,
+         keepPlace: cp
+       } = pp;
+       return cp ? (0, ep.jsx)("div", {
+         className: Lp()(ip, "Placeholder")
+       }) : null
```

#### 8. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L89-L127` → after: `L138-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L138-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L138-L167) · [Before (L89-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L89-L127)

```diff
-       let zD = !1;
-       for (let wD = 0; wD < DD.touches.length; ++wD)
-         if (DD.touches[wD].identifier === UD) {
-           zD = !0;
-           break
-         } if (!zD) {
-         const zD = DD.changedTouches[0];
-         RD = zD.clientX, AD = zD.clientY, UD = zD.identifier
-       }
-     }
- 
-     function BD(DD, zD) {
-       for (var wD = zD.changedTouches, pD = 0; pD < wD.length; ++pD) wD[pD].identifier === UD && (UD = null)
-     }
- 
-     function GD(DD, zD, wD) {
- ... (23 more removed lines; see GitHub link above)
+       let {
+         id: ip,
+         elements: cp,
+         actionButtons: op,
+         keyNames: Ip,
+         className: Sp,
+         keepPlace: xp,
+         onHidden: Lp
+       } = pp;
+       const {
+         t: Dp
+       } = (0, Op.H)();
+       if (!Gp[ip].hide) return (0, ep.jsx)(sp, {
+         className: Sp,
+         keepPlace: xp
+       });
+ ... (14 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L130-L145` → after: `L170-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L170-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L170-L204) · [Before (L130-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L130-L145)

```diff
-     function nD(DD, zD) {
-       var wD = zD.movementX || zD.mozMovementX || 0,
-         pD = zD.movementY || zD.mozMovementY || 0;
-       if (zD.touches && 0 === (wD | pD)) {
-         var sD = function(DD) {
-           ID(DD);
-           for (let zD = 0; zD < DD.changedTouches.length; ++zD)
-             if (DD.changedTouches[zD].identifier == UD) {
-               const wD = DD.changedTouches[zD],
-                 pD = [wD.clientX - RD, wD.clientY - AD];
-               return RD = wD.clientX, AD = wD.clientY, pD
-             } return console.error(`Did not find touch id ${UD}`), [0, 0]
-         }(zD);
-         wD = sD[0], pD = sD[1]
-       }
-       DD.Fv.dx += wD, DD.Fv.dy += pD
+     function Vp(pp) {
+       let {
+         id: ip,
+         elements: cp,
+         actionButtons: op,
+         keyNames: Ip,
+         className: Sp,
+         keepPlace: xp,
+         onlyWhenMoved: Lp,
+         locked: Dp,
+         onReset: Ap
+       } = pp;
+       const {
+         t: Pp
+       } = (0, Op.H)(), Wp = Gp[ip], yp = (0, Xp.I)(cp[ip]);
+       return !Wp.move && !Wp.scale || Lp && yp ? (0, ep.jsx)(sp, {
+ ... (19 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L148-L161` → after: `L207-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L207-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L207-L241) · [Before (L148-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L148-L161)

```diff
-     function MD(DD, zD) {
-       XD(DD, zD);
-       var wD = 1;
-       switch (zD.deltaMode) {
-         case 0:
-           wD = 1;
-           break;
-         case 1:
-           wD = 12;
-           break;
-         case 2:
-           wD = DD.element.clientHeight || window.innerHeight
-       }
-       DD.Fv.IzD += (zD.deltaX || 0) * wD, DD.Fv.BzD += (zD.deltaY || 0) * wD, DD.Fv.GzD += (zD.deltaZ || 0) * wD
+     function ii(pp) {
+       let {
+         id: ip,
+         actionButtons: cp,
+         keyNames: op,
+         className: Ip,
+         keepPlace: Sp,
+         locked: xp,
+         lockable: Lp,
+         onLocked: Dp
+       } = pp;
+       const {
+         t: Ap
+       } = (0, Op.H)();
+       return Lp || xp ? (0, ep.jsx)(Yp.S, {
+         className: Ip,
+ ... (19 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L164-L165` → after: `L244-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L244-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L244-L270) · [Before (L164-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L164-L165)

```diff
-     function OD(DD, zD) {
-       if (!DD.Av) return zD.preventDefault(), !1
+     function ci(pp) {
+       let {
+         className: ip,
+         open: cp,
+         name: op,
+         onToggle: Ip
+       } = pp;
+       const {
+         t: Sp
+       } = (0, Op.H)();
+       return (0, ep.jsx)(Yp.S, {
+         className: ip,
+         ariaLabel: Sp(cp ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
+           name: op
+         }),
+         pressed: cp,
+ ... (11 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L179` → after: `L274-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L274-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L274-L277) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L179)

```diff
-       return !!DD[JD[zD]] || ("AltRight" === zD || "ControlLeft" === zD) && "function" === typeof DD.getModifierState && !0 === DD.getModifierState("AltGraph")
+       var cp;
+       pp.contains(document.activeElement) && ip.focus({
+         preventScroll: !0
+       }), null === (cp = (0, Mp.f)()) || void 0 === cp || cp.handOverPadFocus(pp, ip)
```

#### 13. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L182-L193` → after: `L280-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L280-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L280-L283) · [Before (L182-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L182-L193)

```diff
-     function QD(DD, zD) {
-       for (var wD in DD._modifiersHeldThroughBlur = {}, JD) DD._keyStates[wD] && (DD._modifiersHeldThroughBlur[wD] = !0);
-       zD && zD.isTrusted && function() {
-         try {
-           return window.self !== window.top
-         } catch (DD) {
-           return !0
-         }
-       }() && (clearTimeout(DD._blurRelease), DD._blurRelease = setTimeout((function() {
-         if (!document.hasFocus())
-           for (var zD in DD._modifiersHeldThroughBlur = {}, DD._keyStates) DD._keyStates[zD] && !/^Mouse\d/.test(zD) && VD(DD, zD)
-       }), 0))
+     function oi(pp) {
+       const ip = pp.closest("[data-hud-row]"),
+         cp = null === ip || void 0 === ip ? void 0 : ip.querySelector(".HudElementRowName");
+       return !(!ip || !cp) && (Oi(ip, cp), !0)
```

#### 14. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L197-L199` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L288) · [Before (L197-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L197-L199)

```diff
-       var wD = DD._modifiersHeldThroughBlur;
-       if (wD && zD.isTrusted && document.hasFocus())
-         for (var pD in wD) delete wD[pD], DD._keyStates[pD] && pD !== zD.code && (ED(zD, pD) || VD(DD, pD))
+       return "joystick" === pp && !ip
```

#### 15. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L202-L206` → after: `L291-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L291-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L291-L298) · [Before (L202-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L202-L206)

```diff
-     function VD(DD, zD) {
-       const wD = {
-           code: zD,
-           preventDefault: () => {},
-           stopPropagation: () => {}
+     function xi() {
+       const {
+         t: pp
+       } = (0, Op.H)();
+       return (0, ep.jsx)(Yp.S, {
+         className: "HudFixJoystickButton",
+         analyticsClick: {
+           id: "hud_layout.fix_joystick"
```

#### 16. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L208-L230` → after: `L300-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L300-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L300-L308) · [Before (L208-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L208-L230)

```diff
-         pD = sD;
-       sD = wD;
-       try {
-         PD(zD, !1, DD, wD)
-       } finally {
-         sD = pD
-       }
-     }
- 
-     function PD(DD, zD, wD, pD) {
-       var sD = wD._keyBindmap[DD];
-       sD && (CD(wD._keyStates[DD], zD) && (wD._keyStates[DD] = zD, sD.forEach((DD => {
-         (!wD.filterEvents || wD.filterEvents(pD, DD)) && function(DD, zD, wD, pD) {
-           var sD = zD ? wD.pressCount : wD.releaseCount;
-           sD[DD] = (sD[DD] || 0) + 1;
-           var KD = wD._bindPressCount[DD] || 0;
- ... (7 more removed lines; see GitHub link above)
+         onClick: pp => {
+           const ip = pp.currentTarget;
+           if (!oi(ip)) {
+             const pp = function(pp) {
+               var ip, cp;
+               const Op = [pp.previousElementSibling, pp.nextElementSibling].find((pp => pp instanceof HTMLElement && pp.matches(Ii)));
+               return null !== (ip = null !== Op && void 0 !== Op ? Op : null === (cp = pp.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === cp ? void 0 : cp.querySelector(`:is(${Ii}):not(.HudFixJoystickButton)`)) && void 0 !== ip ? ip : null
+             }(ip);
+             pp && Oi(ip, pp)
```

#### 17. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L232-L233` → after: `L310-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L310-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L310-L315) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L232-L233)

```diff
-         }(DD, zD, wD, pD)
-       }))), "button" in pD || (wD.Dv && !pD.defaultPrevented && pD.preventDefault(), wD.stopPropagation && pD.stopPropagation()))
+           Dp.c.setClientEscMenuOptions({
+             joystickMode: "fixed_shown"
+           })
+         },
+         children: pp("hudLayout:fixJoystick")
+       })
```

#### 18. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L236-L237` → after: `L338-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L338-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L338-L372) · [Before (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L236-L237)

```diff
-     function CD(DD, zD) {
-       return DD ? !zD : zD
+     function ti(pp) {
+       let {
+         id: ip,
+         slot: cp,
+         icon: Op,
+         label: Ip,
+         hidden: Sp,
+         className: xp,
+         face: Yp
+       } = pp;
+       const Dp = (0, op.useRef)(null);
+       return (0, op.useLayoutEffect)((() => {
+         Yp && Dp.current && (0, wi.j)(Dp.current, Yp)
+       }), [Yp]), (0, ep.jsxs)("div", {
+         className: Lp()("TouchKeyHit", `TouchSlot${cp}`, xp, {
+           HudPreviewGhost: Sp.has(ip)
+ ... (19 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L255-L262` → after: `L375-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L375-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L375-L388) · [Before (L255-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L255-L262)

```diff
-     function UD() {
-       return {
-         source: null,
-         direction: null,
-         bZ: null,
-         timeout: void 0,
-         writtenAngle: null
-       }
+     function Hi(pp) {
+       let {
+         item: ip,
+         selected: cp
+       } = pp;
+       const Op = (0, op.useRef)(null);
+       return (0, op.useLayoutEffect)((() => {
+         Op.current && (0, wi.j)(Op.current, ip)
+       }), [ip]), (0, ep.jsx)("div", {
+         ref: Op,
+         className: Lp()("InvenItem", {
+           Selected: cp
+         })
+       })
```

#### 20. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L266` → after: `L406-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L406-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L406-L429) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L266)

```diff
-       return AD.find((zD => null !== zD.source && zD.source === DD))
+       let {
+         id: ip,
+         hidden: cp,
+         parked: Op,
+         unslotted: op = !1
+       } = pp;
+       return (0, ep.jsx)("div", {
+         className: Lp()("TopRightIcon", yi.n[ip], {
+           HudPreviewGhost: cp.has(ip),
+           [Pi.d]: void 0 !== Op,
+           [Pi.h]: op
+         }),
+         ...ei(Op),
+         children: (0, ep.jsx)("div", {
+           className: "UiItemIcon SmallTextBold",
+           ...vi(ip),
+ ... (8 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L270` → after: `L433-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L433-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L433-L486) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L270)

```diff
-       clearTimeout(DD.timeout), DD.source = null, DD.direction = null, DD.writtenAngle = null, DD.bZ && (DD.bZ.style.rotate = "")
+       let {
+         portraitPhone: ip,
+         icons: cp,
+         pinnedIcons: Op,
+         hidden: Ip,
+         moved: Sp,
+         trayState: xp
+       } = pp;
+       const Yp = ip ? (0, Pi.E)(cp) : [],
+         Dp = cp.filter((pp => "settings" === pp)),
+         Ap = cp.filter((pp => "settings" !== pp && !Yp.includes(pp))).reverse(),
+         Pp = Yp.length > 0 && "gone" === xp,
+         Wp = [...Dp, ...Pp ? ["tray"] : [], ...Ap].filter((pp => "tray" === pp || Ip.has(pp) && !Sp.has(pp))),
+         yp = pp => {
+           const ip = Wp.indexOf(pp);
+           return ip < 0 ? void 0 : ip
+ ... (38 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L272-L316` → after: `L488-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L488-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L488-L501) · [Before (L272-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L272-L316)

```diff
-     const BD = (0, pD.memo)((function() {
-       const [, DD] = (0, pD.useReducer)((DD => DD + 1), 0);
-       return (0, sD.g)("damagedByOtherPlayer", (zD => {
-         let {
-           tD: wD,
-           direction: pD
-         } = zD;
-         const sD = wD || "nonDirectional",
-           KD = function(DD) {
-             var zD;
-             const wD = null !== (zD = fD(DD)) && void 0 !== zD ? zD : AD.find((DD => null === DD.source));
-             if (wD) return wD;
-             const pD = {
-               source: null,
-               direction: null,
-               bZ: null,
- ... (29 more removed lines; see GitHub link above)
+ 
+     function ki(pp) {
+       let {
+         icon: ip
+       } = pp;
+       return (0, ep.jsx)("div", {
+         className: "TopRightIcon",
+         children: (0, ep.jsx)("div", {
+           className: "UiItemIcon SmallTextBold",
+           children: (0, ep.jsx)("div", {
+             className: "ScaleOnHover",
+             children: (0, ep.jsx)(Cp.d, {
+               name: ip
+             })
```

#### 23. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L318` → after: `L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L503) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L318)

```diff
-         }, zD)))
+         })
```

#### 24. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L320` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L505) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L320)

```diff
-     }));
+     }
```

#### 25. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L323-L327` → after: `L508-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L508-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L508-L526) · [Before (L323-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L323-L327)

```diff
-       for (const zD of AD) {
-         if (null === zD.source || (0, LD.B)(zD.direction)) continue;
-         const wD = zD.direction - DD;
-         wD !== zD.writtenAngle && (zD.writtenAngle = wD, zD.bZ.style.rotate = `${wD}rad`)
-       }
+       let {
+         next: ip,
+         hidden: cp
+       } = pp;
+       return (0, ep.jsx)("div", {
+         className: Lp()("HotBarArrow", ip ? "Next" : "Previous", {
+           HudPreviewGhost: cp
+         }),
+         ...vi("arrows"),
+         children: (0, ep.jsx)("div", {
+           className: "UiItemIcon SmallTextBold",
+           children: (0, ep.jsx)("div", {
+             className: "ScaleOnHover",
+             children: (0, ep.jsx)(Cp.d, {
+               name: ip ? "caret-right" : "caret-left"
+             })
+ ... (3 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L338` → after: `L530-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L530-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L530-L575) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L338)

```diff
-       return pD
+       return (0, ep.jsx)("div", {
+         className: "SocialBarContainer",
+         children: (0, ep.jsx)("div", {
+           className: "SocialBarOuter",
+           children: (0, ep.jsx)("div", {
+             className: "SocialBar",
+             children: (0, ep.jsx)("div", {
+               className: "CondensedSocialBarInner",
+               children: (0, ep.jsx)("div", {
+                 className: "CondensedSectionsContainer",
+                 children: (0, ep.jsxs)("div", {
+                   className: "CondensedSections",
+                   children: [(0, ep.jsxs)("div", {
+                     className: "CondensedSection CondensedSectionFriendRequests",
+                     children: [(0, ep.jsx)("div", {
+                       className: "CondensedSectionValue",
+ ... (30 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L342-L353` → after: `L601-L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L601-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L601-L919) · [Before (L342-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L342-L353)

```diff
-       return pD !== DD && (pD = DD, !0)
-     }
-   },
-   34174: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => KD,
-       h: () => sD
-     });
-     var pD = wD(20);
- 
-     function sD(DD, zD) {
-       return DD && !zD
+       let {
+         presence: ip,
+         portraitPhone: cp,
+         hidden: op,
+         actionButtons: Ip,
+         joystickFixed: Sp,
+         keysAbove: xp,
+         auraBar: Yp,
+         trayState: Dp,
+         moved: Pp
+       } = pp;
+       const {
+         t: Wp
+       } = (0, Op.H)(), {
+         faces: yp,
+         items: Up
+ ... (303 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L357` → after: `L923-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L923-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L923-L926) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L357)

```diff
-       return sD(pD.e.get("isTouchScreen"), pD.e.get("clientEscMenuOptions").touchActionButtons)
+       const [pp, ip] = (0, op.useState)({}), cp = (0, op.useCallback)((pp => {
+         ip((ip => [...new Set([...Object.keys(ip), ...Object.keys(pp)])].every((cp => ip[cp] === pp[cp])) ? ip : pp))
+       }), []);
+       return [pp, cp]
```

#### 29. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L359-L405` → after: `L928-L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L928-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L928-L972) · [Before (L359-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L359-L405)

```diff
-   },
-   40585: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       startPadGameplay: () => JD
-     });
-     wD(40468);
-     var pD = wD(40477),
-       sD = wD(3757),
-       KD = wD(20),
-       rD = wD(39047),
-       LD = wD(3688),
-       cD = wD(39066),
-       gD = wD(25),
-       RD = wD(2769),
-       AD = wD(38415),
-       UD = wD(8855),
- ... (31 more removed lines; see GitHub link above)
+     const Qi = .05;
+ 
+     function Ji(pp) {
+       var ip;
+       let {
+         selected: cp,
+         layout: op,
+         actionButtons: Ip,
+         keyNames: Sp,
+         overlaps: xp,
+         scaleCaps: Dp,
+         joystickFixed: Ap,
+         onScale: Pp,
+         onHidden: Wp,
+         onReset: yp,
+         locked: Up,
+ ... (29 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L407-L408` → after: `L974-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L974-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L974-L984) · [Before (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L407-L408)

```diff
-             release: () => {
-               pD = !1, zD = ID, wD.reset()
+             children: (0, ep.jsx)(Cp.d, {
+               name: "minus"
+             })
+           }), (0, ep.jsx)("span", {
+             className: "HudQuickSizeValue",
+             children: `${Math.round(100*kp)}%`
+           }), (0, ep.jsx)(Yp.S, {
+             disabled: jp || kp >= mp,
+             ariaLabel: Hp("hudLayout:larger"),
+             onClick: () => {
+               Rp(1)
```

#### 31. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L410-L412` → after: `L986-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L986-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L986-L1044) · [Before (L410-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L410-L412)

```diff
-             uninstall: DD => {
-               DD.camera.qY === KD && (DD.camera.qY = null)
-             }
+             children: (0, ep.jsx)(Cp.d, {
+               name: "plus"
+             })
+           })]
+         }), (dp || tp) && (0, ep.jsxs)("div", {
+           className: "HudQuickActions",
+           children: [dp && (0, ep.jsxs)(ep.Fragment, {
+             children: [(0, ep.jsx)(ii, {
+               id: dp.id,
+               actionButtons: Ip,
+               keyNames: Sp,
+               locked: jp,
+               lockable: wp(dp.id),
+               onLocked: vp
+             }), (0, ep.jsx)(Kp, {
+               id: dp.id,
+ ... (43 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L414-L422` → after: `L1046-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1046-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1046-L1058) · [Before (L414-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L414-L422)

```diff
-         })();
-         return {
-           update: (zD, wD, pD) => {
-             DD.update((0, RD.e)(), zD, wD, pD)
-           },
-           release: DD.release,
-           uninstall: () => {
-             const zD = (0, RD.e)();
-             zD && DD.uninstall(zD)
+         };
+       let Lp = null;
+       const Yp = () => {
+           Lp !== (0 === Ip.size) && (Lp = 0 === Ip.size, null === Op || void 0 === Op || Op(Lp))
+         },
+         Dp = pp => {
+           const ip = pp.cloneNode(!0);
+           if ("LINK" === ip.tagName) {
+             Ip.add(ip);
+             const pp = () => {
+               Ip.delete(ip), Yp()
+             };
+             ip.addEventListener("load", pp), ip.addEventListener("error", pp), cp && ip.addEventListener("load", cp)
```

#### 33. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L424-L524` → after: `L1060-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1060-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1060-L1073) · [Before (L424-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L424-L524)

```diff
-         }
-       };
-     var OD = wD(40495);
-     wD(37669), wD(8745);
-     wD(8765).d;
-     const JD = () => {
-       const DD = (0, OD.e)((() => {
-           const DD = {
-             x: 0,
-             y: 0,
-             magnitude: 0,
-             headingOffset: 0,
-             jumpHeld: !1,
-             jumpPressedSinceTick: !1,
-             crouchHeld: !1,
-             running: !1,
- ... (85 more removed lines; see GitHub link above)
+           return ip
+         },
+         Ap = () => {
+           const Op = function(pp) {
+               const ip = [...pp.body.children].filter((pp => pp.matches(Fi)));
+               return [...pp.head.querySelectorAll(Fi), ...ip]
+             }(pp).filter(xp),
+             Sp = new Set(Op);
+           for (const [pp, ip] of op) Sp.has(pp) || (ip.remove(), op.delete(pp), Ip.delete(ip));
+           let Lp = null;
+           for (let pp = Op.length - 1; pp >= 0; pp--) {
+             const Ip = Op[pp];
+             let Sp = op.get(Ip);
+             Sp ? "STYLE" === Ip.tagName && Sp.textContent !== Ip.textContent && (Sp.textContent = Ip.textContent, null === cp || void 0 === cp || cp()) : (Sp = Dp(Ip), op.set(Ip, Sp), ip.head.insertBefore(Sp, Lp)), Lp = Sp
```

#### 34. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L526-L531` → after: `L1075-L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1075-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1075-L1086) · [Before (L526-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L526-L531)

```diff
-         })()),
-         zD = (0, pD.e)(),
-         wD = null,
-         KD = null;
-       return () => {
-         DD(), zD(), null === wD || void 0 === wD || wD(), null === KD || void 0 === KD || KD()
+           Yp()
+         };
+       Ap();
+       const Pp = new MutationObserver(Ap);
+       return Pp.observe(pp.head, {
+         childList: !0,
+         subtree: !0,
+         characterData: !0
+       }), Pp.observe(pp.body, {
+         childList: !0
+       }), () => {
+         Pp.disconnect()
```

#### 35. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L534-L551` → after: `L1089-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1089-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1089-L1117) · [Before (L534-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L534-L551)

```diff
-   },
-   36586: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => KD,
-       h: () => BD,
-       j: () => GD,
-       k: () => LD,
-       m: () => UD,
-       q: () => hD,
-       s: () => AD,
-       v: () => MD,
-       y: () => ID,
-       z: () => nD
-     });
-     var pD = wD(20),
-       sD = wD(25);
- ... (2 more removed lines; see GitHub link above)
+ 
+     function Gi(pp, ip, cp) {
+       let {
+         keysAbove: Op
+       } = cp;
+       const op = [...pp.documentElement.classList].filter((pp => !bi.has(pp) && !ni.has(pp))),
+         Ip = [...ip.documentElement.classList].filter((pp => ni.has(pp))),
+         Sp = [Ti, fi.hotbar, fi.hasShop, fi.hasBag];
+       Op && Sp.push(fi.keysAbove), ip.documentElement.className = [...op, ...Sp, ...Ip].join(" ")
+     }
+     const ri = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];
+ 
+     function Zi(pp, ip, cp, Op, op) {
+       const Ip = (0, Xp.y)(cp, Op, "joystick"),
+         Sp = (0, yi.A)((0, yi.M)(cp, Op, op), Op),
+         xp = Sp.classes.filter((pp => !ai.has(pp))),
+ ... (13 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L554-L557` → after: `L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1120) · [Before (L554-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L554-L557)

```diff
-       return [...rD.values()].sort(((DD, zD) => {
-         var wD, pD;
-         return (null !== (wD = DD.order) && void 0 !== wD ? wD : 0) - (null !== (pD = zD.order) && void 0 !== pD ? pD : 0)
-       }))
+       return (0, yi.L)(Dp.c.get("notchSize"), window.innerWidth, window.innerHeight)
```

#### 37. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L562` → after: `L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1124) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L562)

```diff
-       cD = DD
+       return (0, yi.u)(zi(), (0, yi.P)(pp))
```

#### 38. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L566-L567` → after: `L1127-L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1127-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1127-L1130) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L566-L567)

```diff
-     function AD(DD) {
-       RD = !0;
+     function Ki(pp, ip, cp) {
+       const Op = pp.documentElement.style,
+         op = (0, yi.I)(ip),
+         Ip = Op.getPropertyValue(op);
```

#### 39. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L569` → after: `L1132-L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1132-L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1132-L1134) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L569)

```diff
-         DD.onClick()
+         return cp((pp => {
+           Op.setProperty(op, String(pp))
+         }))
```

#### 40. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L571` → after: `L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1136) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L571)

```diff
-         RD = !1
+         "" === Ip ? Op.removeProperty(op) : Op.setProperty(op, Ip)
```

#### 41. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L576-L577` → after: `L1140-L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1140-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1140-L1148) · [Before (L576-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L576-L577)

```diff
-     function UD() {
-       return RD
+     function Vi(pp, ip) {
+       const [cp, Op] = Ki(pp, "hotbar", (ip => {
+         const cp = cp => {
+           var Op, op;
+           return ip(cp), null !== (Op = null === (op = pp.querySelector(".HotBarGameItemsContainer")) || void 0 === op ? void 0 : op.getBoundingClientRect().width) && void 0 !== Op ? Op : 0
+         };
+         return [cp(1), cp(Xp.j)]
+       }));
+       return cp <= 0 ? Xp.j : Math.min(Xp.j, Math.max(1, Math.floor(Op / cp / ip + 1e-6) * ip))
```

#### 42. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L580-L587` → after: `L1155-L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1155-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1155-L1218) · [Before (L580-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L580-L587)

```diff
-     function fD() {
-       return LD().filter((DD => DD.panel && !DD.disabled))
-     }
- 
-     function ID(DD) {
-       const zD = fD(),
-         wD = zD.findIndex((DD => DD.id === cD));
-       return !(wD < 0 || zD.length < 2) && (AD(zD[(wD + DD + zD.length) % zD.length]), !0)
+     function oc(pp, ip, cp, Op, op) {
+       let {
+         canKeep: Ip = () => !0,
+         passes: Sp = pc,
+         before: xp
+       } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
+       const Lp = ip.hudLayouts[cp].hudLocked.filter(Ip);
+       if (0 === Lp.length) return ip;
+       const Yp = [...Jp].filter((Op => !Lp.includes(Op) && (0, Xp.y)(pp, cp, Op).join() === (0, Xp.y)(ip, cp, Op).join())),
+         Dp = pp => {
+           const ip = (0, Ep.J)(Yp.flatMap((ip => pp[ip] ? [pp[ip]] : [])));
+           return {
+             ...pp,
+             cluster: null !== ip && void 0 !== ip ? ip : void 0
+           }
+         };
+ ... (48 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L590-L591` → after: `L1221-L1228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1221-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1221-L1228) · [Before (L590-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L590-L591)

```diff
-     function BD() {
-       return null !== cD && fD().length > 1
+     function Ic(pp, ip, cp, Op, op) {
+       let [Ip, Sp, xp] = ip;
+       const Lp = Xp.u[pp],
+         Yp = {};
+       Lp.scale && cc(Op) > 0 && Math.abs(cc(cp) - cc(Op)) > ic && (Yp.scale = Math.max(Xp.k, Math.min(Xp.j, xp * cc(cp) / cc(Op))));
+       const Dp = (0, Ep.d)(cp).x - (0, Ep.d)(Op).x,
+         Ap = (0, Ep.d)(cp).y - (0, Ep.d)(Op).y;
+       return Lp.move && (Math.abs(Dp) > ic || Math.abs(Ap) > ic) && (Yp.dx = Ip + Dp / op.width, Yp.dy = Sp + Ap / op.height), void 0 === Yp.scale && void 0 === Yp.dx ? null : Yp
```

#### 44. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L595` → after: `L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1233) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L595)

```diff
-       gD(null)
+       return Sc > 0
```

#### 45. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L598-L599` → after: `L1242-L1444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1242-L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1242-L1444) · [Before (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L598-L599)

```diff
-     function hD() {
-       "inventory" !== pD.e.get("openInGameMenuName") && gD(null)
+     function Ac(pp) {
+       let {
+         preview: ip,
+         stageRef: cp,
+         ringRef: Op,
+         centreLineRef: Ip,
+         snapCentre: Sp,
+         ready: xp,
+         measure: Lp,
+         k: Yp,
+         viewport: Dp,
+         boxes: Ap,
+         pieces: Pp,
+         selected: Wp,
+         insets: yp,
+         layout: Up,
+ ... (187 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L602-L604` → after: `L1448-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1448-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1448-L1449) · [Before (L602-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L602-L604)

```diff
-     function nD() {
-       const DD = cD;
-       return gD(null), DD
+     function Wc(pp, ip) {
+       return Object.keys(pp).filter((pp => pp !== ip)).map((ip => pp[ip]))
```

#### 47. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L608-L610` → after: `L1453-L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1453-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1453-L1459) · [Before (L608-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L608-L610)

```diff
-       return rD.set(DD.id, DD), sD.l.KG(KD, LD(), !0), () => {
-         rD.get(DD.id) === DD && (rD.delete(DD.id), sD.l.KG(KD, LD()))
-       }
+       return pp.map((pp => {
+         let {
+           id: ip,
+           box: cp
+         } = pp;
+         return `${ip}:${cp.left},${cp.top},${cp.right},${cp.bottom}`
+       })).join(";")
```

#### 48. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L631-L632` → after: `L1462-L1496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1462-L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1462-L1496) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L631-L632)

```diff
-     function gD() {
-       return cD
+     function Uc(pp) {
+       const ip = [],
+         cp = ip => (0, Xp.K)(ip) && !pp.documentElement.classList.contains((0, yi.B)(ip));
+       for (const xp of pp.querySelectorAll(`[${rp}]`)) {
+         const pp = cp(xp.getAttribute(rp)) ? xp.querySelector(".ScaleOnHover") : null,
+           Op = (null !== pp && void 0 !== pp ? pp : xp).getBoundingClientRect();
+         (Op.width > 0 || Op.height > 0) && ip.push({
+           id: xp.getAttribute(rp),
+           box: (0, Ep.j)(Op)
+         })
+       }
+       const Op = pp => (0, Ep.J)(ip.filter((ip => {
+           let {
+             id: cp
+           } = ip;
+           return pp(cp)
+ ... (19 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L635-L642` → after: `L1499-L1520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1499-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1499-L1520) · [Before (L635-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L635-L642)

```diff
-     function RD(DD, zD) {
-       const wD = {
-         content: DD,
-         menu: zD
-       };
-       return cD = wD, sD.l.KG(LD, cD, !0), () => {
-         cD === wD && (cD = null, ID = !1, GD(), sD.l.KG(LD, null))
-       }
+     function wc(pp, ip, cp) {
+       const Op = ip.right - ip.left,
+         op = ip.bottom - ip.top;
+       return Ki(pp, "cluster", (ip => {
+         const Ip = cp => {
+             ip(cp);
+             const Op = [...pp.querySelectorAll(`[${rp}]:not(.HudPreviewGhost)`)].filter((pp => Jp.has(pp.getAttribute(rp)))).map((pp => (0, Ep.j)(pp.getBoundingClientRect()))),
+               op = (0, Ep.J)(Op);
+             return op ? {
+               w: op.right - op.left,
+               h: op.bottom - op.top
+             } : null
+           },
+           Sp = pp => !pp || pp.w <= Op && pp.h <= op,
+           xp = Ip(1),
+           Lp = Ip(Xp.j);
+ ... (6 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L646-L647` → after: `L1523-L1531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1523-L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1523-L1531) · [Before (L646-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L646-L647)

```diff
-     function UD() {
-       return AD
+     function vc(pp) {
+       Gi(document, pp, {
+         keysAbove: !1
+       });
+       const ip = parseFloat(getComputedStyle(pp.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
+         cp = Number.isFinite(ip) && ip < 0;
+       return Gi(document, pp, {
+         keysAbove: cp
+       }), (0, Pc.b)(pp), cp
```

#### 51. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L651-L653` → after: `L1535-L1536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1535-L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1535-L1536) · [Before (L651-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L651-L653)

```diff
-       return AD = DD, () => {
-         AD === DD && (AD = null)
-       }
+       const ip = pp.querySelector(".TouchInventoryKey.ShopKey");
+       return null !== ip && "1" === getComputedStyle(ip).getPropertyValue("--touch-shop-above").trim()
```

#### 52. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L657-L662` → after: `L1539-L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1539-L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1539-L1607) · [Before (L657-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L657-L662)

```diff
-     function BD() {
-       const DD = pD.e.get("openInGameMenuName");
-       "clientGame" !== DD && (ID = "inventory" === DD), (0, rD.m)() || (0, rD.j)(), (0, KD.p)(KD.b), pD.e.set({
-         openInGameMenuName: "clientGame",
-         openEverythingMenuName: null
-       })
+     function Hc(pp, ip) {
+       let {
+         layout: cp,
+         orientation: Op,
+         viewport: Ip,
+         replicaKey: Sp,
+         joystickFixed: xp,
+         busy: Lp
+       } = ip;
+       const [Yp, Dp] = (0, op.useState)(null), [Ap, Pp] = (0, op.useState)({
+         boxes: {},
+         pieces: []
+       }), [Wp, yp] = (0, op.useState)({
+         top: 0,
+         right: 0,
+         bottom: 0,
+ ... (53 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L665-L666` → after: `L1611-L1652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1611-L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1611-L1652) · [Before (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L665-L666)

```diff
-     function GD() {
-       nD(!1)
+     function ec(pp, ip, cp, Op, op) {
+       const Ip = cp[pp],
+         Sp = (Ip.left + Ip.right) / 2,
+         xp = (Ip.top + Ip.bottom) / 2,
+         Lp = (7.5 * ip.length + 14) / Op,
+         Yp = 18 / Op,
+         Dp = {
+           Above: {
+             left: Sp - Lp / 2,
+             top: Ip.top - Yp,
+             right: Sp + Lp / 2,
+             bottom: Ip.top
+           },
+           Below: {
+             left: Sp - Lp / 2,
+             top: Ip.bottom,
+ ... (26 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L670` → after: `L1656-L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1656-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1656-L1660) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L670)

```diff
-       nD(ID)
+       const [pp, ip] = (0, Di.b)();
+       return (0, op.useMemo)((() => ({
+         width: pp,
+         height: ip
+       })), [pp, ip])
```

#### 55. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L674-L694` → after: `L1664-L2015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L1664-L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L1664-L2015) · [Before (L674-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L674-L694)

```diff
-       "clientGame" === pD.e.get("openInGameMenuName") && pD.e.set({
-         openInGameMenuName: DD ? "inventory" : null
-       }), DD || (0, rD.j)(), ID = !1
-     }
-   },
-   36491: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => cD
-     });
-     var pD = wD(338),
-       sD = wD(20),
-       KD = wD(36495),
-       rD = wD(1648),
-       LD = wD(1981);
- 
-     function cD(DD, zD) {
- ... (5 more removed lines; see GitHub link above)
+       var ip;
+       const {
+         layout: cp,
+         orientation: Ip,
+         selected: Sp,
+         onSelect: xp,
+         onMove: Yp,
+         canMove: Dp,
+         actionButtons: Ap,
+         joystickFixed: Pp,
+         presence: Wp,
+         keyNames: Up,
+         maxHeight: wp,
+         fill: vp = !1,
+         apiRef: tp
+       } = pp, {
+ ... (336 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L717-L729` → after: `L2020-L2023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L2020-L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L2020-L2023) · [Before (L717-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L717-L729)

```diff
-       if (DD instanceof sD.c) return {
-         at: rD[zD],
-         code: 0
-       };
-       const wD = (0, pD.g)(DD),
-         cD = "number" === typeof wD ? wD : 0;
-       return null !== (0, KD.j)(cD).name ? {
-         at: "refused",
-         code: cD
-       } : {
-         at: LD[zD],
-         code: cD
-       }
+       (0, op.useEffect)((() => {
+         var cp;
+         null === (cp = pp.current) || void 0 === cp || cp.toggleAttribute("inert", ip)
+       }), [pp, ip])
```

#### 57. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L731-L741` → after: `L2025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R2025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L2025) · [Before (L731-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L731-L741)

```diff
-   },
-   8901: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => KD,
-       g: () => rD,
-       i: () => LD,
-       m: () => gD,
-       q: () => cD
-     });
-     var pD = wD(197),
-       sD = wD(4657);
+     const mc = "hudFullScreen";
```

#### 58. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L744-L745` → after: `L2028-L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L2028-L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L2028-L2146) · [Before (L744-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L744-L745)

```diff
-       return rD(DD) === pD.e.gameOrPluginOnPlayerAuthRejected.code
-     }
+       let {
+         onScale: ip,
+         onHidden: cp,
+         onReset: Ip,
+         locked: Sp,
+         lockable: xp,
+         onLocked: Lp,
+         onClose: Dp,
+         ...Ap
+       } = pp;
+       const {
+         t: Pp
+       } = (0, Op.H)(), Wp = (0, op.useRef)(null);
+       (0, Yi.x)("popup", Wp, Dp),
+       function(pp) {
+         const ip = (0, op.useRef)(pp);
+ ... (103 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L748` → after: `L2149-L2173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L2149-L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L2149-L2173) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L748)

```diff
-       return "object" === typeof DD && null !== DD ? DD.code : void 0
+       let {
+         info: ip,
+         tuple: cp,
+         props: op
+       } = pp;
+       const {
+         t: Ip
+       } = (0, Op.H)();
+       return (0, ep.jsx)(Wp.i, {
+         name: Ip("hudLayout:size"),
+         min: Xp.k,
+         max: Xp.j,
+         step: Qi,
+         initValue: cp[2],
+         disabled: op.locked.has(ip.id),
+         selectableMax: op.scaleCaps[ip.id],
+ ... (9 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L752-L753` → after: `L2177-L2318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R2177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L2177-L2318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L2177-L2318) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L752-L753)

```diff
-       var zD;
-       return null !== (zD = Object.keys(sD.b).find((zD => sD.b[zD] === DD))) && void 0 !== zD ? zD : null
+       const {
+         t: ip
+       } = (0, Op.H)(), {
+         present: cp,
+         elements: Ip,
+         selected: Sp,
+         onSelect: xp,
+         onHidden: Yp,
+         onReset: Dp,
+         note: Ap,
+         actionButtons: Pp,
+         keyNames: Wp,
+         sizeBesidePreview: yp,
+         locked: Up,
+         lockable: wp,
+         onLocked: vp
+ ... (126 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L757-L763` → after: `L2322-L2384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R2322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L2322-L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L2322-L2384) · [Before (L757-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L757-L763)

```diff
-       return "notWhitelisted" === DD ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
-     }
-     const gD = {
-       private: "customLobby:cantJoinPrivate",
-       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
-       banned: "customLobby:cantJoinBanned",
-       adminLocked: "customLobby:cantJoinAdminLocked"
+       let {
+         preview: ip,
+         quick: cp,
+         onFullScreen: Ip,
+         resting: Sp,
+         onSidePanel: xp
+       } = pp;
+       const {
+         t: Lp
+       } = (0, Op.H)(), Dp = uc(), Ap = (0, op.useRef)(null), {
+         width: Pp
+       } = (0, Ai.d)(Ap), Wp = Math.floor(Dp.width * Math.min(1, ip.maxHeight / Dp.height)), yp = Pp - Wp - 12, Up = yp >= 130, wp = Pp > 0;
+       (0, op.useEffect)((() => {
+         wp && xp(Up)
+       }), [wp, Up, xp]);
+       const vp = (0, Ep.D)(Up ? Wp : Pp, Dp.width, Dp.height, ip.maxHeight),
+ ... (47 more added lines; see GitHub link above)
```
