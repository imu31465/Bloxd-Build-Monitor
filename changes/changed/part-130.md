# Changed — Bundle Modifications Report (Part 130 / 133)

- **Updated at**: `2026-11-20T23:38 JST`
- **Part**: `130 / 133` (**265** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 129](part-129.md) · [Part 131 →](part-131.md)

## `bloxd.io` · `bundles/bloxd.io/main.js` (qepqb8.0352199c → bcgkc.38229551 · continued)

- **File**: `bundles/bloxd.io/main.js` (1187 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 89. `bundles/bloxd.io/main.js` (Changed code · before: `L1068-L1071` → after: `L2260-L2262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2260-L2262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2260-L2262) · [Before (L1068-L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1068-L1071)

```diff
-                   if (!gv || !gv.open) return !1;
-                   var vv = "undefined" !== typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
-                     zv = "function" === typeof fetch && -1 !== fetch.toString().indexOf("[native code");
-                   return (!vv || zv) && "undefined" !== typeof indexedDB && "undefined" !== typeof IDBKeyRange
+                   var yT = RT(QT, lT),
+                     fT = yT.head;
+                   MT._adapter = MT._getAdapter(fT)
```

#### 90. `bundles/bloxd.io/main.js` (Changed code · before: `L1073` → after: `L2264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2264) · [Before (L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1073)

```diff
-                   return !1
+                   cT = pT("INVALID_HANDSHAKE_REQUEST", CT)
```

#### 91. `bundles/bloxd.io/main.js` (Changed code · before: `L1077-L1085` → after: `L2270-L2274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2270-L2274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2270-L2274) · [Before (L1077-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1077-L1085)

```diff
-               function dv(vv, zv) {
-                 vv = vv || [], zv = zv || {};
-                 try {
-                   return new Blob(vv, zv)
-                 } catch (Sv) {
-                   if ("TypeError" !== Sv.name) throw Sv;
-                   for (var Pv = new("undefined" !== typeof BlobBuilder ? BlobBuilder : "undefined" !== typeof MSBlobBuilder ? MSBlobBuilder : "undefined" !== typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder), hv = 0; hv < vv.length; hv += 1) Pv.append(vv[hv]);
-                   return Pv.getBlob(zv.type)
-                 }
+               function AT(TT) {
+                 MT.destroyed || MT._writable.write({
+                   id: kT,
+                   payload: [ST.toBuffer(IT), TT]
+                 })
```

#### 92. `bundles/bloxd.io/main.js` (Changed code · before: `L1087-L1088` → after: `L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2276) · [Before (L1087-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1087-L1088)

```diff
-               "undefined" === typeof Promise && vv(3);
-               var Nv = Promise;
+             }
```

#### 93. `bundles/bloxd.io/main.js` (Changed code · before: `L1090-L1094` → after: `L2278-L2286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2278-L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2278-L2286) · [Before (L1090-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1090-L1094)

```diff
-               function lv(vv, zv) {
-                 zv && vv.then((function(vv) {
-                   zv(null, vv)
-                 }), (function(vv) {
-                   zv(vv)
+             function OT(TT) {
+               var kT = TT.id;
+               if (MT._matchesPrefix(kT)) {
+                 var cT = xT.concat(TT.payload);
+                 MT._receive(cT, MT._adapter, (function(TT, cT) {
+                   MT.destroyed || cT || MT._writable.write({
+                     id: kT,
+                     payload: [TT]
+                   })
```

#### 94. `bundles/bloxd.io/main.js` (Changed code · before: `L1098-L1100` → after: `L2291-L2293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2291-L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2291-L2293) · [Before (L1098-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1098-L1100)

```diff
-               function Tv(vv, zv, Pv) {
-                 "function" === typeof zv && vv.then(zv), "function" === typeof Pv && vv.catch(Pv)
-               }
+             function yT() {
+               MT.destroy()
+             }
```

#### 95. `bundles/bloxd.io/main.js` (Changed code · before: `L1102-L1104` → after: `L2295-L2298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2295-L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2295-L2298) · [Before (L1102-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1102-L1104)

```diff
-               function Wv(vv) {
-                 return "string" !== typeof vv && (console.warn(vv + " used as a key, but it is not a string."), vv = String(vv)), vv
-               }
+             function fT() {
+               MT.destroy(!0)
+             }
+           }
```

#### 96. `bundles/bloxd.io/main.js` (Changed code · before: `L1106-L1114` → after: `L2300-L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2300-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2300-L2302) · [Before (L1106-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1106-L1114)

```diff
-               function wv() {
-                 if (arguments.length && "function" === typeof arguments[arguments.length - 1]) return arguments[arguments.length - 1]
-               }
-               var av = "local-forage-detect-blob-support",
-                 sv = void 0,
-                 Cv = {},
-                 iv = Object.prototype.toString,
-                 cv = "readonly",
-                 Gv = "readwrite";
+           function HT(TT, kT, cT) {
+             this._msg = TT, this.headers = kT || {}, this.request = cT || {}
+           }
```

#### 97. `bundles/bloxd.io/main.js` (Changed code · before: `L1116-L1119` → after: `L2304-L2306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2304-L2306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2304-L2306) · [Before (L1116-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1116-L1119)

```diff
-               function mv(vv) {
-                 for (var zv = vv.length, Pv = new ArrayBuffer(zv), hv = new Uint8Array(Pv), Sv = 0; Sv < zv; Sv++) hv[Sv] = vv.charCodeAt(Sv);
-                 return Pv
-               }
+           function eT(TT, kT, cT, lT) {
+             this._msg = TT, this.headers = kT, this.error = cT, this.response = lT
+           }
```

#### 98. `bundles/bloxd.io/main.js` (Changed code · before: `L1121-L1135` → after: `L2308-L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2308-L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2308-L2310) · [Before (L1121-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1121-L1135)

```diff
-               function jv(vv) {
-                 return new Nv((function(zv) {
-                   var Pv = vv.transaction(av, Gv),
-                     hv = dv([""]);
-                   Pv.objectStore(av).put(hv, "key"), Pv.onabort = function(vv) {
-                     vv.preventDefault(), vv.stopPropagation(), zv(!1)
-                   }, Pv.oncomplete = function() {
-                     var vv = navigator.userAgent.match(/Chrome\/(\d+)/),
-                       Pv = navigator.userAgent.match(/Edge\//);
-                     zv(Pv || !vv || parseInt(vv[1], 10) >= 43)
-                   }
-                 })).catch((function() {
-                   return !1
-                 }))
-               }
+           function GT(TT, kT) {
+             this.channel = kT, this.locals = {}, this.message = TT, Object.freeze(this)
+           }
```

#### 99. `bundles/bloxd.io/main.js` (Changed code · before: `L1137-L1141` → after: `L2312-L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2312-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2312-L2314) · [Before (L1137-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1137-L1141)

```diff
-               function fv(vv) {
-                 return "boolean" === typeof sv ? Nv.resolve(sv) : jv(vv).then((function(vv) {
-                   return sv = vv
-                 }))
-               }
+           function VT(TT, kT) {
+             this._ctx = TT, this._mask = -1 >>> (0 | kT), this._id = 0, this._n = 0, this._cbs = {}
+           }
```

#### 100. `bundles/bloxd.io/main.js` (Changed code · before: `L1143-L1151` → after: `L2316-L2318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2316-L2318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2316-L2318) · [Before (L1143-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1143-L1151)

```diff
-               function Fv(vv) {
-                 var zv = Cv[vv.name],
-                   Pv = {};
-                 Pv.promise = new Nv((function(vv, zv) {
-                   Pv.resolve = vv, Pv.reject = zv
-                 })), zv.deferredOperations.push(Pv), zv.dbReady ? zv.dbReady = zv.dbReady.then((function() {
-                   return Pv.promise
-                 })) : zv.dbReady = Pv.promise
-               }
+           function ET(TT, kT, cT, lT) {
+             this._clientSvc = TT, this._serverSvc = kT, this._hash = cT, this._isRemote = !!lT, this._readers = UT(TT, kT)
+           }
```

#### 101. `bundles/bloxd.io/main.js` (Changed code · before: `L1153-L1156` → after: `L2320-L2326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2320-L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2320-L2326) · [Before (L1153-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1153-L1156)

```diff
-               function Yv(vv) {
-                 var zv = Cv[vv.name].deferredOperations.pop();
-                 if (zv) return zv.resolve(), zv.promise
-               }
+           function ZT() {
+             yT.Transform.call(this, {
+               readableObjectMode: !0
+             }), this._id = void 0, this._buf = MT.newBuffer(0), this._bufs = [], this.on("finish", (function() {
+               this.push(null)
+             }))
+           }
```

#### 102. `bundles/bloxd.io/main.js` (Changed code · before: `L1158-L1161` → after: `L2328-L2334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2328-L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2328-L2334) · [Before (L1158-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1158-L1161)

```diff
-               function nv(vv, zv) {
-                 var Pv = Cv[vv.name].deferredOperations.pop();
-                 if (Pv) return Pv.reject(zv), Pv.promise
-               }
+           function uT() {
+             yT.Transform.call(this, {
+               writableObjectMode: !0
+             }), this.on("finish", (function() {
+               this.push(null)
+             }))
+           }
```

#### 103. `bundles/bloxd.io/main.js` (Changed code · before: `L1163-L1189` → after: `L2336-L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2336-L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2336-L2342) · [Before (L1163-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1163-L1189)

```diff
-               function Ov(vv, zv) {
-                 return new Nv((function(Pv, hv) {
-                   if (Cv[vv.name] = Cv[vv.name] || Qv(), vv.db) {
-                     if (!zv) return Pv(vv.db);
-                     Fv(vv), vv.db.close()
-                   }
-                   var Sv = [vv.name];
-                   zv && Sv.push(vv.version);
-                   var ev = gv.open.apply(gv, Sv);
-                   zv && (ev.onupgradeneeded = function(zv) {
-                     var Pv = ev.result;
-                     try {
-                       Pv.createObjectStore(vv.storeName), zv.oldVersion <= 1 && Pv.createObjectStore(av)
-                     } catch (hv) {
-                       if ("ConstraintError" !== hv.name) throw hv;
-                       console.warn('The database "' + vv.name + '" has been upgraded from version ' + zv.oldVersion + " to version " + zv.newVersion + ', but the storage "' + vv.storeName + '" already exists.')
- ... (11 more removed lines; see GitHub link above)
+           function XT() {
+             yT.Transform.call(this, {
+               readableObjectMode: !0
+             }), this._id = void 0, this._frameCount = 0, this._buf = MT.newBuffer(0), this._bufs = [], this.on("finish", (function() {
+               this.push(null)
+             }))
+           }
```

#### 104. `bundles/bloxd.io/main.js` (Changed code · before: `L1191-L1193` → after: `L2344-L2350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2344-L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2344-L2350) · [Before (L1191-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1191-L1193)

```diff
-               function Dv(vv) {
-                 return Ov(vv, !1)
-               }
+           function dT() {
+             yT.Transform.call(this, {
+               writableObjectMode: !0
+             }), this.on("finish", (function() {
+               this.push(null)
+             }))
+           }
```

#### 105. `bundles/bloxd.io/main.js` (Changed code · before: `L1195-L1197` → after: `L2352-L2355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2352-L2355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2352-L2355) · [Before (L1195-L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1195-L1197)

```diff
-               function Kv(vv) {
-                 return Ov(vv, !0)
-               }
+           function LT(TT) {
+             var kT = MT.newBuffer(4);
+             return kT.writeInt32BE(TT), kT
+           }
```

#### 106. `bundles/bloxd.io/main.js` (Changed code · before: `L1199-L1211` → after: `L2357-L2381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2357-L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2357-L2381) · [Before (L1199-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1199-L1211)

```diff
-               function Vv(vv, zv) {
-                 if (!vv.db) return !0;
-                 var Pv = !vv.db.objectStoreNames.contains(vv.storeName),
-                   hv = vv.version < vv.db.version,
-                   Sv = vv.version > vv.db.version;
-                 if (hv && (vv.version !== zv && console.warn('The database "' + vv.name + "\" can't be downgraded from version " + vv.db.version + " to version " + vv.version + "."), vv.version = vv.db.version), Sv || Pv) {
-                   if (Pv) {
-                     var ev = vv.db.version + 1;
-                     ev > vv.version && (vv.version = ev)
-                   }
-                   return !0
-                 }
-                 return !1
+           function RT(TT, kT) {
+             var cT = new IT(kT),
+               lT = TT._read(cT);
+             if (!cT.isValid()) throw new Error(jT("truncated %j", TT.schema()));
+             return {
+               head: lT,
+               tail: cT.buf.slice(cT.pos)
+             }
+           }
+ 
+           function gT(TT, kT) {
+             return TT.equals(kT) ? TT : TT.createResolver(kT)
+           }
+ 
+           function UT(TT, kT) {
+             var cT = {};
+ ... (9 more added lines; see GitHub link above)
```

#### 107. `bundles/bloxd.io/main.js` (Changed code · before: `L1214-L1226` → after: `L2386-L2391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2386-L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2386-L2391) · [Before (L1214-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1214-L1226)

```diff
-               function Uv(vv) {
-                 return new Nv((function(zv, Pv) {
-                   var hv = new FileReader;
-                   hv.onerror = Pv, hv.onloadend = function(Pv) {
-                     var hv = btoa(Pv.target.result || "");
-                     zv({
-                       __local_forage_encoded_blob: !0,
-                       data: hv,
-                       type: vv.type
-                     })
-                   }, hv.readAsBinaryString(vv)
-                 }))
-               }
+           function YT(TT, kT, cT, lT) {
+             Object.keys(kT).forEach((function(MT) {
+               var KT, OT, yT = kT[MT];
+               lT ? (KT = cT, OT = FT.forProtocol(yT)) : (KT = FT.forProtocol(yT), OT = cT), TT[MT] = new ET(KT, OT, MT, !0)
+             }))
+           }
```

#### 108. `bundles/bloxd.io/main.js` (Changed code · before: `L1228-L1231` → after: `L2393-L2399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2393-L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2393-L2399) · [Before (L1228-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1228-L1231)

```diff
-               function Rv(vv) {
-                 return dv([mv(atob(vv.data))], {
-                   type: vv.type
-                 })
+           function BT(TT, kT) {
+             var cT = {};
+             return Object.keys(TT).forEach((function(lT) {
+               var MT = TT[lT];
+               if (MT._isRemote) {
+                 var KT = kT ? MT._serverSvc : MT._clientSvc;
+                 cT[lT] = KT.protocol
```

#### 109. `bundles/bloxd.io/main.js` (Changed code · before: `L1234-L1236` → after: `L2404-L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2404-L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2404-L2406) · [Before (L1234-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1234-L1236)

```diff
-               function xv(vv) {
-                 return vv && vv.__local_forage_encoded_blob
-               }
+           function WT(TT) {
+             return !!TT && "[object Error]" === Object.prototype.toString.call(TT)
+           }
```

#### 110. `bundles/bloxd.io/main.js` (Changed code · before: `L1238-L1245` → after: `L2408-L2411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2408-L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2408-L2411) · [Before (L1238-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1238-L1245)

```diff
-               function tv(vv) {
-                 var zv = this,
-                   Pv = zv._initReady().then((function() {
-                     var vv = Cv[zv._dbInfo.name];
-                     if (vv && vv.dbReady) return vv.dbReady
-                   }));
-                 return Tv(Pv, vv, vv), Pv
-               }
+           function nT(TT, kT) {
+             var cT = new Error(TT);
+             return cT.cause = kT, cT
+           }
```

#### 111. `bundles/bloxd.io/main.js` (Changed code · before: `L1247-L1261` → after: `L2413-L2416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2413-L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2413-L2416) · [Before (L1247-L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1247-L1261)

```diff
-               function qv(vv) {
-                 Fv(vv);
-                 for (var zv = Cv[vv.name], Pv = zv.forages, hv = 0; hv < Pv.length; hv++) {
-                   var Sv = Pv[hv];
-                   Sv._dbInfo.db && (Sv._dbInfo.db.close(), Sv._dbInfo.db = null)
-                 }
-                 return vv.db = null, Dv(vv).then((function(zv) {
-                   return vv.db = zv, Vv(vv) ? Kv(vv) : zv
-                 })).then((function(hv) {
-                   vv.db = zv.db = hv;
-                   for (var Sv = 0; Sv < Pv.length; Sv++) Pv[Sv]._dbInfo.db = hv
-                 })).catch((function(zv) {
-                   throw nv(vv, zv), zv
-                 }))
-               }
+           function pT(TT, kT) {
+             var cT = nT(TT.toLowerCase().replace(/_/g, " "), kT);
+             return cT.rpcCode = kT && kT.rpcCode ? kT.rpcCode : TT, cT
+           }
```

#### 112. `bundles/bloxd.io/main.js` (Changed code · before: `L1263-L1278` → after: `L2418-L2427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2418-L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2418-L2427) · [Before (L1263-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1263-L1278)

```diff
-               function Iv(vv, zv, Pv, hv) {
-                 void 0 === hv && (hv = 1);
-                 try {
-                   var Sv = vv.db.transaction(vv.storeName, zv);
-                   Pv(null, Sv)
-                 } catch (ev) {
-                   if (hv > 0 && (!vv.db || "InvalidStateError" === ev.name || "NotFoundError" === ev.name)) return Nv.resolve().then((function() {
-                     if (!vv.db || "NotFoundError" === ev.name && !vv.db.objectStoreNames.contains(vv.storeName) && vv.version <= vv.db.version) return vv.db && (vv.version = vv.db.version + 1), Kv(vv)
-                   })).then((function() {
-                     return qv(vv).then((function() {
-                       Iv(vv, zv, Pv, hv - 1)
-                     }))
-                   })).catch(Pv);
-                   Pv(ev)
-                 }
-               }
+           function iT(TT, kT, cT) {
+             var lT, MT, KT, OT = [];
+             for (lT = 0, MT = cT.length; lT < MT; lT++)(KT = cT[lT]).type.isValid(kT[KT.name], {
+               errorHook: xT
+             });
+             var yT = OT.map((function(TT) {
+                 return jT("%s = %j but expected %s", TT.path, TT.value, TT.type)
+               })).join(", "),
+               fT = new Error(jT("%s (%s)", TT, yT));
+             return fT.details = OT, fT;
```

#### 113. `bundles/bloxd.io/main.js` (Changed code · before: `L1280-L1287` → after: `L2429-L2438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2429-L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2429-L2438) · [Before (L1280-L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1280-L1287)

```diff
-               function Qv() {
-                 return {
-                   forages: [],
-                   db: null,
-                   dbReady: null,
-                   deferredOperations: []
-                 }
-               }
+             function xT(TT, kT, cT) {
+               var lT, MT, yT, fT = [];
+               for (lT = 0, MT = TT.length; lT < MT; lT++) yT = TT[lT], isNaN(yT) ? fT.push("." + yT) : fT.push("[" + yT + "]");
+               OT.push({
+                 path: KT.name + fT.join(""),
+                 value: kT,
+                 type: cT
+               })
+             }
+           }
```

#### 114. `bundles/bloxd.io/main.js` (Changed code · before: `L1289-L1298` → after: `L2440-L2442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2440-L2442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2440-L2442) · [Before (L1289-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1289-L1298)

```diff
-               function Zv(vv) {
-                 var zv = this,
-                   Pv = {
-                     db: null
-                   };
-                 if (vv)
-                   for (var hv in vv) Pv[hv] = vv[hv];
-                 var Sv = Cv[Pv.name];
-                 Sv || (Sv = Qv(), Cv[Pv.name] = Sv), Sv.forages.push(zv), zv._initReady || (zv._initReady = zv.ready, zv.ready = tv);
-                 var ev = [];
+           function qT(TT) {
+             return TT ? MT.getHash(TT).readInt16BE(0) << 16 : 0
+           }
```

#### 115. `bundles/bloxd.io/main.js` (Changed code · before: `L1300-L1301` → after: `L2444-L2476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2444-L2476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2444-L2476) · [Before (L1300-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1300-L1301)

```diff
-                 function gv() {
-                   return Nv.resolve()
+           function sT(TT, kT) {
+             return (TT ^ kT) >> 16 === 0
+           }
+ 
+           function Tk(TT) {
+             return !(!TT || !TT.pipe)
+           }
+ 
+           function kk(TT, kT) {
+             var cT = TT.message(kT);
+             if (!cT) throw new Error(jT("unknown message: %s", kT));
+             return cT
+           }
+ 
+           function ck(TT) {
+             var kT, cT = [TT.wreq, TT.wres],
+ ... (17 more added lines; see GitHub link above)
```

#### 116. `bundles/bloxd.io/main.js` (Changed code · before: `L1303-L1305` → after: `L2478-L2686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2478-L2686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2478-L2686) · [Before (L1303-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1303-L1305)

```diff
-                 for (var pv = 0; pv < Sv.forages.length; pv++) {
-                   var dv = Sv.forages[pv];
-                   dv !== zv && ev.push(dv._initReady().catch(gv))
+               }))) : TT.onTransition.apply(TT.ctx, cT.concat((function(cT) {
+                 yT ? TT.onError(nT("duplicate handler call", cT)) : (yT = !0, kT = cT, process.nextTick(MT))
+               })))
+             }(0)
+           }
+           aT.forSchema = function(TT, kT, cT) {
+             if (cT = cT || {}, !MT.isValidName(TT)) throw new Error(jT("invalid message name: %s", TT));
+             if (!Array.isArray(kT.request)) throw new Error(jT("invalid message request: %s", TT));
+             var lT = jT("%s.%sRequest", vT.namespace, MT.capitalize(TT)),
+               KT = AT.forSchema({
+                 name: lT,
+                 type: "record",
+                 namespace: cT.namespace || "",
+                 fields: kT.request
+               }, cT);
+             if (delete cT.sC[lT], !kT.response) throw new Error(jT("invalid message response: %s", TT));
+ ... (193 more added lines; see GitHub link above)
```

#### 117. `bundles/bloxd.io/main.js` (Changed code · before: `L1307-L1316` → after: `L2688-L2721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2688-L2721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2688-L2721) · [Before (L1307-L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1307-L1316)

```diff
-                 var lv = Sv.forages.slice(0);
-                 return Nv.all(ev).then((function() {
-                   return Pv.db = Sv.db, Dv(Pv)
-                 })).then((function(vv) {
-                   return Pv.db = vv, Vv(Pv, zv._defaultConfig.version) ? Kv(Pv) : vv
-                 })).then((function(vv) {
-                   Pv.db = Sv.db = vv, zv._dbInfo = Pv;
-                   for (var hv = 0; hv < lv.length; hv++) {
-                     var ev = lv[hv];
-                     ev !== zv && (ev._dbInfo.db = Pv.db, ev._dbInfo.version = Pv.version)
+                 kT ? (TT = kT.error, lT._strict$ || (void 0 === TT ? TT = null : AT.isType(KT, "union:unwrapped") ? "string" == typeof TT && (TT = new Error(TT)) : TT && TT.string && "string" == typeof TT.string && (TT = new Error(TT.string))), OT(TT, kT.response)) : OT()
+               }))
+             } else if (this._buffering$) CT("no active client channels, buffering call"), this.once("channel", (function() {
+               this._emitMessage$(TT, kT, cT)
+             }));
+             else {
+               var yT = new Error("no active channels");
+               process.nextTick((function() {
+                 cT ? cT.call(new GT(TT._msg), yT) : lT.emit("error", yT)
+               }))
+             }
+           }, rT.prototype._createMessageHandler$ = function(TT) {
+             var kT = TT.requestType.getFields().map((function(TT) {
+                 return TT.getName()
+               })),
+               cT = "return function " + TT.name + "(";
+ ... (18 more added lines; see GitHub link above)
```

#### 118. `bundles/bloxd.io/main.js` (Changed code · before: `L1318-L1319` → after: `L2723-L2789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2723-L2789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2723-L2789) · [Before (L1318-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1318-L1319)

```diff
-                 }))
-               }
+                 })).pipe(lT)
+               }, cT = new JT(this, MT, kT)
+             } else {
+               var KT, OT;
+               if (Tk(TT) ? KT = OT = TT : (KT = TT.readable, OT = TT.writable), !lT) {
+                 var yT = new XT;
+                 KT = KT.pipe(yT);
+                 var fT = new dT;
+                 fT.pipe(OT), OT = fT
+               }
+               cT = new oT(this, KT, OT, kT), lT || (cT.once("eot", (function() {
+                 KT.unpipe(yT), fT.unpipe(OT)
+               })), yT.once("error", (function(TT) {
+                 cT.destroy(TT)
+               })))
+             }
+ ... (51 more added lines; see GitHub link above)
```

#### 119. `bundles/bloxd.io/main.js` (Changed code · before: `L1321-L1342` → after: `L2791-L2803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2791-L2803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2791-L2803) · [Before (L1321-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1321-L1342)

```diff
-               function Av(vv, zv) {
-                 var Pv = this;
-                 vv = Wv(vv);
-                 var hv = new Nv((function(zv, hv) {
-                   Pv.ready().then((function() {
-                     Iv(Pv._dbInfo, cv, (function(Sv, ev) {
-                       if (Sv) return hv(Sv);
-                       try {
-                         var gv = ev.objectStore(Pv._dbInfo.storeName).get(vv);
-                         gv.onsuccess = function() {
-                           var vv = gv.result;
-                           void 0 === vv && (vv = null), xv(vv) && (vv = Rv(vv)), zv(vv)
-                         }, gv.onerror = function() {
-                           hv(gv.error)
-                         }
-                       } catch (pv) {
- ... (6 more removed lines; see GitHub link above)
+             function yT(TT, cT, MT) {
+               var KT, yT;
+               if (OT.destroyed) KT = new Error("channel destroyed");
+               else try {
+                 yT = TT.toBuffer()
+               } catch (IT) {
+                 KT = iT(jT("invalid %j request", lT.name), TT, [{
+                   name: "headers",
+                   type: hT
+                 }, {
+                   name: "request",
+                   type: lT.requestType
+                 }])
```

#### 120. `bundles/bloxd.io/main.js` (Changed code · before: `L1344-L1369` → after: `L2805-L2814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2805-L2814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2805-L2814) · [Before (L1344-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1344-L1369)

```diff
- 
-               function Lv(vv, zv) {
-                 var Pv = this,
-                   hv = new Nv((function(zv, hv) {
-                     Pv.ready().then((function() {
-                       Iv(Pv._dbInfo, cv, (function(Sv, ev) {
-                         if (Sv) return hv(Sv);
-                         try {
-                           var gv = ev.objectStore(Pv._dbInfo.storeName).openCursor(),
-                             pv = 1;
-                           gv.onsuccess = function() {
-                             var Pv = gv.result;
-                             if (Pv) {
-                               var hv = Pv.value;
-                               xv(hv) && (hv = Rv(hv));
-                               var Sv = vv(hv, Pv.key, pv++);
- ... (10 more removed lines; see GitHub link above)
+               if (KT) MT(KT);
+               else {
+                 var fT = kT && void 0 !== kT.timeout ? kT.timeout : OT.timeout,
+                   xT = OT._registry.add(fT, (function(TT, kT, KT) {
+                     if (!TT && !lT.oneWay) try {
+                       KT._decodeResponse(kT, cT, lT)
+                     } catch (IT) {
+                       TT = IT
+                     }
+                     MT(TT)
```

#### 121. `bundles/bloxd.io/main.js` (Changed code · before: `L1371` → after: `L2816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2816) · [Before (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1371)

```diff
-                 return lv(hv, zv), hv
+                 xT |= OT._prefix, CT("sending message %s", xT), OT._send(xT, yT, !!lT && lT.oneWay)
```

#### 122. `bundles/bloxd.io/main.js` (Changed code · before: `L1374-L1403` → after: `L2820-L2822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2820-L2822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2820-L2822) · [Before (L1374-L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1374-L1403)

```diff
-               function Hv(vv, zv, Pv) {
-                 var hv = this;
-                 vv = Wv(vv);
-                 var Sv = new Nv((function(Pv, Sv) {
-                   var ev;
-                   hv.ready().then((function() {
-                     return ev = hv._dbInfo, "[object Blob]" === iv.call(zv) ? fv(ev.db).then((function(vv) {
-                       return vv ? zv : Uv(zv)
-                     })) : zv
-                   })).then((function(zv) {
-                     Iv(hv._dbInfo, Gv, (function(ev, gv) {
-                       if (ev) return Sv(ev);
-                       try {
-                         var pv = gv.objectStore(hv._dbInfo.storeName);
-                         null === zv && (zv = void 0);
-                         var dv = pv.put(zv, vv);
- ... (14 more removed lines; see GitHub link above)
+             function fT(TT) {
+               OT.pending--, cT.call(KT, TT, MT), !OT.draining || OT.destroyed || OT.pending || OT.destroy()
+             }
```

#### 123. `bundles/bloxd.io/main.js` (Changed code · before: `L1405-L1426` → after: `L2824-L2880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2824-L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2824-L2880) · [Before (L1405-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1405-L1426)

```diff
-               function Mv(vv, zv) {
-                 var Pv = this;
-                 vv = Wv(vv);
-                 var hv = new Nv((function(zv, hv) {
-                   Pv.ready().then((function() {
-                     Iv(Pv._dbInfo, Gv, (function(Sv, ev) {
-                       if (Sv) return hv(Sv);
-                       try {
-                         var gv = ev.objectStore(Pv._dbInfo.storeName).delete(vv);
-                         ev.oncomplete = function() {
-                           zv()
-                         }, ev.onerror = function() {
-                           hv(gv.error)
-                         }, ev.onabort = function() {
-                           var vv = gv.error ? gv.error : gv.transaction.error;
-                           hv(vv)
- ... (6 more removed lines; see GitHub link above)
+             function xT(TT) {
+               OT.client.emit("error", TT, OT)
+             }
+             this.pending++, process.nextTick((function() {
+               if (lT.name) {
+                 OT.emit("outgoingCall", KT, kT);
+                 var cT = OT.client._fns$;
+                 CT("starting client middleware chain (%s middleware)", cT.length), ck({
+                   fns: cT,
+                   ctx: KT,
+                   wreq: TT,
+                   wres: MT,
+                   onTransition: yT,
+                   onCompletion: fT,
+                   onError: xT
+                 })
+ ... (41 more added lines; see GitHub link above)
```

#### 124. `bundles/bloxd.io/main.js` (Changed code · before: `L1428-L1429` → after: `L2882-L2941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2882-L2941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2882-L2941) · [Before (L1428-L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1428-L1429)

```diff
-                 return lv(hv, zv), hv
-               }
+               if (!fT) return void cT(new Error("invalid writable stream"));
+               fT.write({
+                 id: TT,
+                 payload: [QT.toBuffer(yT), kT]
+               }), MT._endWritable && fT.end()
+             })), !0
+           }, fT.inherits(bT, wT), bT.prototype._emit = function() {
+             if (this._connected || this.draining) wT.prototype._emit.apply(this, arguments);
+             else {
+               CT("queuing request");
+               var TT, kT, cT = [];
+               for (TT = 0, kT = arguments.length; TT < kT; TT++) cT.push(arguments[TT]);
+               this.once("_ready", (function() {
+                 this._emit.apply(this, cT)
+               }))
+             }
+ ... (44 more added lines; see GitHub link above)
```

#### 125. `bundles/bloxd.io/main.js` (Changed code · before: `L1431-L1452` → after: `L2943-L3031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2943-L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L2943-L3031) · [Before (L1431-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1431-L1452)

```diff
-               function yv(vv) {
-                 var zv = this,
-                   Pv = new Nv((function(vv, Pv) {
-                     zv.ready().then((function() {
-                       Iv(zv._dbInfo, Gv, (function(hv, Sv) {
-                         if (hv) return Pv(hv);
-                         try {
-                           var ev = Sv.objectStore(zv._dbInfo.storeName).clear();
-                           Sv.oncomplete = function() {
-                             vv()
-                           }, Sv.onabort = Sv.onerror = function() {
-                             var vv = ev.error ? ev.error : ev.transaction.error;
-                             Pv(vv)
-                           }
-                         } catch (gv) {
-                           Pv(gv)
- ... (6 more removed lines; see GitHub link above)
+             function xT(TT) {
+               MT.server.emit("error", TT, MT)
+             }
+             CT("starting server middleware chain (%s middleware)", fT.length), MT.pending++, ck({
+               fns: fT,
+               ctx: yT,
+               wreq: lT,
+               wres: OT,
+               onTransition: function(TT, kT, cT) {
+                 var lT = MT.server._handlers[KT.name];
+                 if (lT) {
+                   var OT = !KT.oneWay;
+                   try {
+                     OT ? lT.call(yT, TT.request, (function(TT, lT) {
+                       OT = !1, kT.error = TT, kT.response = lT, cT()
+                     })) : (lT.call(yT, TT.request), cT())
+ ... (73 more added lines; see GitHub link above)
```

#### 126. `bundles/bloxd.io/main.js` (Changed code · before: `L1454-L1473` → after: `L3033-L3064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3033-L3064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3033-L3064) · [Before (L1454-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1454-L1473)

```diff
-               function Bv(vv) {
-                 var zv = this,
-                   Pv = new Nv((function(vv, Pv) {
-                     zv.ready().then((function() {
-                       Iv(zv._dbInfo, cv, (function(hv, Sv) {
-                         if (hv) return Pv(hv);
-                         try {
-                           var ev = Sv.objectStore(zv._dbInfo.storeName).count();
-                           ev.onsuccess = function() {
-                             vv(ev.result)
-                           }, ev.onerror = function() {
-                             Pv(ev.error)
-                           }
-                         } catch (gv) {
-                           Pv(gv)
-                         }
- ... (4 more removed lines; see GitHub link above)
+             function KT() {
+               lT._cbs[MT] && (delete lT._cbs[MT], lT._n--, cT && clearTimeout(cT), kT.apply(lT._ctx, arguments))
+             }
+           }, VT.prototype.clear = function() {
+             Object.keys(this._cbs).forEach((function(TT) {
+               this._cbs[TT](new Error("interrupted"))
+             }), this)
+           }, ET.prototype._decodeRequest = function(TT) {
+             var kT, cT, lT = new IT(TT),
+               MT = hT._read(lT),
+               KT = NT._read(lT);
+             if (KT ? (kT = this._serverSvc.message(KT), cT = this._readers[KT + "?"]._read(lT)) : kT = DT, !lT.isValid()) throw new Error(jT("truncated %s request", KT || "ping$"));
+             return new HT(kT, MT, cT)
+           }, ET.prototype._decodeResponse = function(TT, kT, cT) {
+             var lT = new IT(TT);
+             MT.copyOwnProperties(hT._read(lT), kT.headers, !0);
+ ... (16 more added lines; see GitHub link above)
```

#### 127. `bundles/bloxd.io/main.js` (Changed code · before: `L1475-L1498` → after: `L3066-L3150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3066-L3150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3066-L3150) · [Before (L1475-L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1475-L1498)

```diff
- 
-               function Jv(vv, zv) {
-                 var Pv = this,
-                   hv = new Nv((function(zv, hv) {
-                     vv < 0 ? zv(null) : Pv.ready().then((function() {
-                       Iv(Pv._dbInfo, cv, (function(Sv, ev) {
-                         if (Sv) return hv(Sv);
-                         try {
-                           var gv = ev.objectStore(Pv._dbInfo.storeName),
-                             pv = !1,
-                             dv = gv.openKeyCursor();
-                           dv.onsuccess = function() {
-                             var Pv = dv.result;
-                             Pv ? 0 === vv || pv ? zv(Pv.key) : (pv = !0, Pv.advance(vv)) : zv(null)
-                           }, dv.onerror = function() {
-                             hv(dv.error)
- ... (8 more removed lines; see GitHub link above)
+               TT = TT.slice(lT + 4)
+             }
+             this._buf = TT, cT()
+           }, ZT.prototype._flush = function(TT) {
+             if (this._buf.length || this._bufs.length) {
+               var kT = this._bufs.slice();
+               kT.unshift(this._buf);
+               var cT = pT("TRAILING_DATA");
+               cT.trailingData = xT.concat(kT).toString(), this.emit("error", cT)
+             }
+             TT()
+           }, fT.inherits(uT, yT.Transform), uT.prototype._transform = function(TT, kT, cT) {
+             var lT, MT, KT, OT = TT.payload;
+             for (lT = 0, MT = OT.length; lT < MT; lT++) KT = OT[lT], this.push(LT(KT.length)), this.push(KT);
+             this.push(LT(0)), cT()
+           }, fT.inherits(XT, yT.Transform), XT.prototype._transform = function(TT, kT, cT) {
+ ... (69 more added lines; see GitHub link above)
```

#### 128. `bundles/bloxd.io/main.js` (Changed code · before: `L1501-L1514` → after: `L3154-L3188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3154-L3188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3154-L3188) · [Before (L1501-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1501-L1514)

```diff
-               function Ev(vv) {
-                 var zv = this,
-                   Pv = new Nv((function(vv, Pv) {
-                     zv.ready().then((function() {
-                       Iv(zv._dbInfo, cv, (function(hv, Sv) {
-                         if (hv) return Pv(hv);
-                         try {
-                           var ev = Sv.objectStore(zv._dbInfo.storeName).openKeyCursor(),
-                             gv = [];
-                           ev.onsuccess = function() {
-                             var zv = ev.result;
-                             zv ? (gv.push(zv.key), zv.continue()) : vv(gv)
-                           }, ev.onerror = function() {
-                             Pv(ev.error)
+           function fT(TT, kT, cT) {
+             function MT(TT, cT) {
+               kT.importHook(TT, "idl", (function(lT, yT) {
+                 if (lT) cT(lT);
+                 else if (void 0 !== yT) {
+                   try {
+                     var fT = new xT(yT, kT)._readProtocol(yT, kT)
+                   } catch (lT) {
+                     return lT.path = TT, void cT(lT)
+                   }! function(TT, cT, yT, fT) {
+                     var xT = [];
+ 
+                     function IT() {
+                       var AT = cT.shift();
+                       if (AT) {
+                         var jT = KT.join(yT, AT.name);
+ ... (19 more added lines; see GitHub link above)
```

#### 129. `bundles/bloxd.io/main.js` (Changed code · before: `L1517` → after: `L3206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3206) · [Before (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1517)

```diff
-                           Pv(pv)
+                           return void fT(lT)
```

#### 130. `bundles/bloxd.io/main.js` (Changed code · before: `L1519-L1547` → after: `L3208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3208) · [Before (L1519-L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1519-L1547)

```diff
-                       }))
-                     })).catch(Pv)
-                   }));
-                 return lv(Pv, vv), Pv
-               }
- 
-               function ov(vv, zv) {
-                 zv = wv.apply(this, arguments);
-                 var Pv = this.config();
-                 (vv = "function" !== typeof vv && vv || {}).name || (vv.name = vv.name || Pv.name, vv.storeName = vv.storeName || Pv.storeName);
-                 var hv, Sv = this;
-                 if (vv.name) {
-                   var ev = vv.name === Pv.name && Sv._dbInfo.db ? Nv.resolve(Sv._dbInfo.db) : Dv(vv).then((function(zv) {
-                     var Pv = Cv[vv.name],
-                       hv = Pv.forages;
-                     Pv.db = zv;
- ... (13 more removed lines; see GitHub link above)
+                         fT(null, TT)
```

#### 131. `bundles/bloxd.io/main.js` (Changed code · before: `L1570-L1593` → after: `L3211-L3223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3211-L3223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3211-L3223) · [Before (L1570-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1570-L1593)

```diff
-                   })) : ev.then((function(zv) {
-                     Fv(vv);
-                     var Pv = Cv[vv.name],
-                       hv = Pv.forages;
-                     zv.close();
-                     for (var Sv = 0; Sv < hv.length; Sv++) hv[Sv]._dbInfo.db = null;
-                     var ev = new Nv((function(zv, Pv) {
-                       var hv = gv.deleteDatabase(vv.name);
-                       hv.onerror = function() {
-                         var vv = hv.result;
-                         vv && vv.close(), Pv(hv.error)
-                       }, hv.onblocked = function() {
-                         console.warn('dropInstance blocked for database "' + vv.name + '" until all open connections are closed')
-                       }, hv.onsuccess = function() {
-                         var vv = hv.result;
-                         vv && vv.close(), zv(vv)
- ... (8 more removed lines; see GitHub link above)
+                     IT()
+                   }(fT.protocol, fT.imports, KT.dirname(TT), cT)
+                 } else cT()
+               }))
+             }
+             cT || "function" != typeof kT || (cT = kT, kT = void 0), (kT = kT || {}).importHook || (kT.importHook = lT.createImportHook()), MT(TT, (function(TT, kT) {
+               if (TT) cT(TT);
+               else if (kT) {
+                 var lT = kT.types;
+                 if (lT) {
+                   var MT = CT(kT) || "";
+                   lT.forEach((function(TT) {
+                     TT.namespace === MT && delete TT.namespace
```

#### 132. `bundles/bloxd.io/main.js` (Changed code · before: `L1595-L1611` → after: `L3225-L3229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3225-L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3225-L3229) · [Before (L1595-L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1595-L1611)

```diff
-                 } else hv = Nv.reject("Invalid arguments");
-                 return lv(hv, zv), hv
-               }
-               var bv = {
-                 _driver: "asyncStorage",
-                 _initStorage: Zv,
-                 _support: pv(),
-                 iterate: Lv,
-                 getItem: Av,
-                 setItem: Hv,
-                 removeItem: Mv,
-                 clear: yv,
-                 length: Bv,
-                 key: Jv,
-                 keys: Ev,
-                 dropInstance: ov
- ... (1 more removed lines; see GitHub link above)
+                 }
+                 cT(null, kT)
+               } else cT(new Error("empty root import"))
+             }))
+           }
```

#### 133. `bundles/bloxd.io/main.js` (Changed code · before: `L1613-L1633` → after: `L3231-L3233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3231-L3233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3231-L3233) · [Before (L1613-L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1613-L1633)

```diff
-               function rv() {
-                 return "function" === typeof openDatabase
-               }
-               var kv = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
-                 Xv = "~~local_forage_type~",
-                 uv = /^~~local_forage_type~([^~]+)~/,
-                 vz = "__lfsc__:",
-                 zz = vz.length,
-                 Pz = "arbf",
-                 hz = "blob",
-                 Sz = "si08",
-                 ez = "ui08",
-                 gz = "uic8",
-                 pz = "si16",
-                 dz = "si32",
-                 Nz = "ur16",
- ... (5 more removed lines; see GitHub link above)
+           function xT(TT, kT) {
+             kT = kT || {}, this._tk = new IT(TT), this._ackVoidMessages = !!kT.ackVoidMessages, this._implicitTags = !kT.delimitedCollections, this._typeRefs = kT.typeRefs || yT
+           }
```

#### 134. `bundles/bloxd.io/main.js` (Changed code · before: `L1635-L1644` → after: `L3235-L3237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3235-L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3235-L3237) · [Before (L1635-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1635-L1644)

```diff
-               function sz(vv) {
-                 var zv, Pv, hv, Sv, ev, gv = .75 * vv.length,
-                   pv = vv.length,
-                   dv = 0;
-                 "=" === vv[vv.length - 1] && (gv--, "=" === vv[vv.length - 2] && gv--);
-                 var Nv = new ArrayBuffer(gv),
-                   lv = new Uint8Array(Nv);
-                 for (zv = 0; zv < pv; zv += 4) Pv = kv.indexOf(vv[zv]), hv = kv.indexOf(vv[zv + 1]), Sv = kv.indexOf(vv[zv + 2]), ev = kv.indexOf(vv[zv + 3]), lv[dv++] = Pv << 2 | hv >> 4, lv[dv++] = (15 & hv) << 4 | Sv >> 2, lv[dv++] = (3 & Sv) << 6 | 63 & ev;
-                 return Nv
-               }
+           function IT(TT) {
+             this._str = TT, this.pos = 0
+           }
```

#### 135. `bundles/bloxd.io/main.js` (Changed code · before: `L1646-L1651` → after: `L3239-L3245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3239-L3245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3239-L3245) · [Before (L1646-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1646-L1651)

```diff
-               function Cz(vv) {
-                 var zv, Pv = new Uint8Array(vv),
-                   hv = "";
-                 for (zv = 0; zv < Pv.length; zv += 3) hv += kv[Pv[zv] >> 2], hv += kv[(3 & Pv[zv]) << 4 | Pv[zv + 1] >> 4], hv += kv[(15 & Pv[zv + 1]) << 2 | Pv[zv + 2] >> 6], hv += kv[63 & Pv[zv + 2]];
-                 return Pv.length % 3 === 2 ? hv = hv.substring(0, hv.length - 1) + "=" : Pv.length % 3 === 1 && (hv = hv.substring(0, hv.length - 2) + "=="), hv
-               }
+           function AT(TT) {
+             for (var kT = TT.replace(/^[ \t]+|[ \t]+$/g, "").split("\n").map((function(TT, kT) {
+                 return kT ? TT.replace(/^\s*\*\s?/, "") : TT
+               })); kT.length && !kT[0];) kT.shift();
+             for (; kT.length && !kT[kT.length - 1];) kT.pop();
+             return kT.join("\n")
+           }
```

#### 136. `bundles/bloxd.io/main.js` (Changed code · before: `L1653-L1668` → after: `L3247-L3367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3247-L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3247-L3367) · [Before (L1653-L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1653-L1668)

```diff
-               function iz(vv, zv) {
-                 var Pv = "";
-                 if (vv && (Pv = az.call(vv)), vv && ("[object ArrayBuffer]" === Pv || vv.buffer && "[object ArrayBuffer]" === az.call(vv.buffer))) {
-                   var hv, Sv = vz;
-                   vv instanceof ArrayBuffer ? (hv = vv, Sv += Pz) : (hv = vv.buffer, "[object Int8Array]" === Pv ? Sv += Sz : "[object Uint8Array]" === Pv ? Sv += ez : "[object Uint8ClampedArray]" === Pv ? Sv += gz : "[object Int16Array]" === Pv ? Sv += pz : "[object Uint16Array] … [truncated]
-                 } else if ("[object Blob]" === Pv) {
-                   var ev = new FileReader;
-                   ev.onload = function() {
-                     var Pv = Xv + vv.type + "~" + Cz(this.result);
-                     zv(vz + hz + Pv)
-                   }, ev.readAsArrayBuffer(vv)
-                 } else try {
-                   zv(JSON.stringify(vv))
-                 } catch (gv) {
-                   console.error("Couldn't convert value into a JSON string: ", vv), zv(null, gv)
-                 }
+           function CT(TT) {
+             if (TT.namespace) return TT.namespace;
+             var kT = /^(.*)\.[^.]+$/.exec(TT.protocol);
+             return kT ? kT[1] : void 0
+           }
+           xT.readProtocol = function(TT, kT) {
+             var cT = new xT(TT, kT)._readProtocol();
+             if (cT.imports.length) throw new Error("unresolvable import");
+             return cT.protocol
+           }, xT.readSchema = function(TT, kT) {
+             var cT = new xT(TT, kT),
+               lT = cT._readJavadoc(),
+               MT = cT._readType(void 0 === lT ? {} : {
+                 doc: lT
+               }, !0);
+             return cT._tk.next({
+ ... (105 more added lines; see GitHub link above)
```

#### 137. `bundles/bloxd.io/main.js` (Changed code · before: `L1670-L1707` → after: `L3369-L3371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3369-L3371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3369-L3371) · [Before (L1670-L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1670-L1707)

```diff
- 
-               function cz(vv) {
-                 if (vv.substring(0, zz) !== vz) return JSON.parse(vv);
-                 var zv, Pv = vv.substring(wz),
-                   hv = vv.substring(zz, wz);
-                 if (hv === hz && uv.test(Pv)) {
-                   var Sv = Pv.match(uv);
-                   zv = Sv[1], Pv = Pv.substring(Sv[0].length)
-                 }
-                 var ev = sz(Pv);
-                 switch (hv) {
-                   case Pz:
-                     return ev;
-                   case hz:
-                     return dv([ev], {
-                       type: zv
- ... (22 more removed lines; see GitHub link above)
+               return {
+                 name: lT,
+                 schema: cT
```

#### 138. `bundles/bloxd.io/main.js` (Changed code · before: `L1709-L1713` → after: `L3373-L3385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3373-L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3373-L3385) · [Before (L1709-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1709-L1713)

```diff
-               var Gz = {
-                 serialize: iz,
-                 deserialize: cz,
-                 stringToBuffer: sz,
-                 bufferToString: Cz
+             }
+           }, xT.prototype._readJavadoc = function() {
+             var TT = this._tk.next({
+               id: "javadoc",
+               emitJavadoc: !0,
+               silent: !0
+             });
+             if (TT) return TT.val
+           }, xT.prototype._readField = function() {
+             var TT = this._tk,
+               kT = this._readJavadoc(),
+               cT = {
+                 type: this._readType()
```

#### 139. `bundles/bloxd.io/main.js` (Changed code · before: `L1715-L1727` → after: `L3387-L3617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3387-L3617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3387-L3617) · [Before (L1715-L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1715-L1727)

```diff
- 
-               function mz(vv, zv, Pv, hv) {
-                 vv.executeSql("CREATE TABLE IF NOT EXISTS " + zv.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], Pv, hv)
-               }
- 
-               function jz(vv) {
-                 var zv = this,
-                   Pv = {
-                     db: null
-                   };
-                 if (vv)
-                   for (var hv in vv) Pv[hv] = "string" !== typeof vv[hv] ? vv[hv].toString() : vv[hv];
-                 var Sv = new Nv((function(vv, hv) {
+             return void 0 !== kT && void 0 === cT.doc && (cT.doc = kT), this._readAnnotations(cT), cT.name = TT.next({
+               id: "name"
+             }).val, TT.next({
+               val: "=",
+               silent: !0
+             }) && (cT.default = TT.next({
+               id: "json"
+             }).val), cT
+           }, xT.prototype._readType = function(TT, kT) {
+             switch (TT = TT || {}, this._readAnnotations(TT), TT.type = this._tk.next({
+                 id: "name"
+               }).val, TT.type) {
+               case "record":
+               case "error":
+                 return this._readRecord(TT);
+               case "fixed":
+ ... (215 more added lines; see GitHub link above)
```

#### 140. `bundles/bloxd.io/main.js` (Changed code · before: `L1729` → after: `L3619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3619) · [Before (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1729)

```diff
-                     Pv.db = openDatabase(Pv.name, String(Pv.version), Pv.description, Pv.size)
+                     return xT.readSchema(kT)
```

#### 141. `bundles/bloxd.io/main.js` (Changed code · before: `L1731` → after: `L3621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3621) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1731)

```diff
-                     return hv(Sv)
+                     return kT
```

#### 142. `bundles/bloxd.io/main.js` (Changed code · before: `L1733-L1741` → after: `L3623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3623) · [Before (L1733-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1733-L1741)

```diff
-                   Pv.db.transaction((function(Sv) {
-                     mz(Sv, Pv, (function() {
-                       zv._dbInfo = Pv, vv()
-                     }), (function(vv, zv) {
-                       hv(zv)
-                     }))
-                   }), hv)
-                 }));
-                 return Pv.uC = Gz, Sv
+                 }
```

#### 143. `bundles/bloxd.io/main.js` (Changed code · before: `L1744-L1752` → after: `L3659-L3676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3659-L3676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3659-L3676) · [Before (L1744-L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1744-L1752)

```diff
-               function fz(vv, zv, Pv, hv, Sv, ev) {
-                 vv.executeSql(Pv, hv, Sv, (function(vv, gv) {
-                   gv.code === gv.SYNTAX_ERR ? vv.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [zv.storeName], (function(vv, pv) {
-                     pv.rows.length ? ev(vv, gv) : mz(vv, zv, (function() {
-                       vv.executeSql(Pv, hv, Sv, ev)
-                     }), ev)
-                   }), ev) : ev(vv, gv)
-                 }), ev)
-               }
+           function tT(TT, kT) {
+             var cT;
+             if (jT ? (cT = jT, vT.push([jT, this]), jT = null) : cT = this, this._hash = new uT, this.name = void 0, this.aliases = void 0, this.doc = TT && TT.doc ? "" + TT.doc : void 0, TT) {
+               var lT = TT.name,
+                 MT = void 0 === TT.namespace ? kT && kT.namespace : TT.namespace;
+               if (void 0 !== lT) {
+                 if (RT(lT = nT(lT, MT))) throw new Error(xT("cannot rename primitive type: %j", lT));
+                 var KT = kT && kT.sC;
+                 if (KT) {
+                   if (void 0 !== KT[lT]) throw new Error(xT("duplicate type name: %s", lT));
+                   KT[lT] = cT
+                 }
+               } else if (kT && kT.noAnonymousTypes) throw new Error(xT("missing name property in schema: %j", TT));
+               this.name = lT, this.aliases = TT.aliases ? TT.aliases.map((function(TT) {
+                 return nT(TT, MT)
+               })) : []
+ ... (2 more added lines; see GitHub link above)
```

#### 144. `bundles/bloxd.io/main.js` (Changed code · before: `L1754-L1771` → after: `L3678-L3680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3678-L3680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3678-L3680) · [Before (L1754-L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1754-L1771)

```diff
-               function Fz(vv, zv) {
-                 var Pv = this;
-                 vv = Wv(vv);
-                 var hv = new Nv((function(zv, hv) {
-                   Pv.ready().then((function() {
-                     var Sv = Pv._dbInfo;
-                     Sv.db.transaction((function(Pv) {
-                       fz(Pv, Sv, "SELECT * FROM " + Sv.storeName + " WHERE key = ? LIMIT 1", [vv], (function(vv, Pv) {
-                         var hv = Pv.rows.length ? Pv.rows.item(0).value : null;
-                         hv && (hv = Sv.uC.deserialize(hv)), zv(hv)
-                       }), (function(vv, zv) {
-                         hv(zv)
-                       }))
-                     }))
-                   })).catch(hv)
-                 }));
- ... (2 more removed lines; see GitHub link above)
+           function hT(TT) {
+             tT.call(this), this._branchConstructor = this._createBranchConstructor(), TT || Object.freeze(this)
+           }
```

#### 145. `bundles/bloxd.io/main.js` (Changed code · before: `L1773-L1793` → after: `L3682-L3684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3682-L3684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3682-L3684) · [Before (L1773-L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1773-L1793)

```diff
-               function Yz(vv, zv) {
-                 var Pv = this,
-                   hv = new Nv((function(zv, hv) {
-                     Pv.ready().then((function() {
-                       var Sv = Pv._dbInfo;
-                       Sv.db.transaction((function(Pv) {
-                         fz(Pv, Sv, "SELECT * FROM " + Sv.storeName, [], (function(Pv, hv) {
-                           for (var ev = hv.rows, gv = ev.length, pv = 0; pv < gv; pv++) {
-                             var dv = ev.item(pv),
-                               Nv = dv.value;
-                             if (Nv && (Nv = Sv.uC.deserialize(Nv)), void 0 !== (Nv = vv(Nv, dv.key, pv + 1))) return void zv(Nv)
-                           }
-                           zv()
-                         }), (function(vv, zv) {
-                           hv(zv)
-                         }))
- ... (5 more removed lines; see GitHub link above)
+           function NT() {
+             hT.call(this)
+           }
```

#### 146. `bundles/bloxd.io/main.js` (Changed code · before: `L1795-L1820` → after: `L3686-L3688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3686-L3688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3686-L3688) · [Before (L1795-L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1795-L1820)

```diff
-               function nz(vv, zv, Pv, hv) {
-                 var Sv = this;
-                 vv = Wv(vv);
-                 var ev = new Nv((function(ev, gv) {
-                   Sv.ready().then((function() {
-                     void 0 === zv && (zv = null);
-                     var pv = zv,
-                       dv = Sv._dbInfo;
-                     dv.uC.serialize(zv, (function(zv, Nv) {
-                       Nv ? gv(Nv) : dv.db.transaction((function(Pv) {
-                         fz(Pv, dv, "INSERT OR REPLACE INTO " + dv.storeName + " (key, value) VALUES (?, ?)", [vv, zv], (function() {
-                           ev(pv)
-                         }), (function(vv, zv) {
-                           gv(zv)
-                         }))
-                       }), (function(zv) {
- ... (10 more removed lines; see GitHub link above)
+           function QT() {
+             hT.call(this)
+           }
```

#### 147. `bundles/bloxd.io/main.js` (Changed code · before: `L1822-L1824` → after: `L3690-L3692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3690-L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3690-L3692) · [Before (L1822-L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1822-L1824)

```diff
-               function Oz(vv, zv, Pv) {
-                 return nz.apply(this, [vv, zv, Pv, 1])
-               }
+           function ST() {
+             hT.call(this)
+           }
```

#### 148. `bundles/bloxd.io/main.js` (Changed code · before: `L1826-L1842` → after: `L3694-L3696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3694-L3696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3694-L3696) · [Before (L1826-L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1826-L1842)

```diff
-               function Dz(vv, zv) {
-                 var Pv = this;
-                 vv = Wv(vv);
-                 var hv = new Nv((function(zv, hv) {
-                   Pv.ready().then((function() {
-                     var Sv = Pv._dbInfo;
-                     Sv.db.transaction((function(Pv) {
-                       fz(Pv, Sv, "DELETE FROM " + Sv.storeName + " WHERE key = ?", [vv], (function() {
-                         zv()
-                       }), (function(vv, zv) {
-                         hv(zv)
-                       }))
-                     }))
-                   })).catch(hv)
-                 }));
-                 return lv(hv, zv), hv
- ... (1 more removed lines; see GitHub link above)
+           function DT() {
+             hT.call(this)
+           }
```

#### 149. `bundles/bloxd.io/main.js` (Changed code · before: `L1844-L1859` → after: `L3698-L3700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3698-L3700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3698-L3700) · [Before (L1844-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1844-L1859)

```diff
-               function Kz(vv) {
-                 var zv = this,
-                   Pv = new Nv((function(vv, Pv) {
-                     zv.ready().then((function() {
-                       var hv = zv._dbInfo;
-                       hv.db.transaction((function(zv) {
-                         fz(zv, hv, "DELETE FROM " + hv.storeName, [], (function() {
-                           vv()
-                         }), (function(vv, zv) {
-                           Pv(zv)
-                         }))
-                       }))
-                     })).catch(Pv)
-                   }));
-                 return lv(Pv, vv), Pv
-               }
+           function aT() {
+             hT.call(this)
+           }
```

#### 150. `bundles/bloxd.io/main.js` (Changed code · before: `L1861-L1877` → after: `L3702-L3704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3702-L3704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3702-L3704) · [Before (L1861-L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1861-L1877)

```diff
-               function Vz(vv) {
-                 var zv = this,
-                   Pv = new Nv((function(vv, Pv) {
-                     zv.ready().then((function() {
-                       var hv = zv._dbInfo;
-                       hv.db.transaction((function(zv) {
-                         fz(zv, hv, "SELECT COUNT(key) as c FROM " + hv.storeName, [], (function(zv, Pv) {
-                           var hv = Pv.rows.item(0).c;
-                           vv(hv)
-                         }), (function(vv, zv) {
-                           Pv(zv)
-                         }))
-                       }))
-                     })).catch(Pv)
-                   }));
-                 return lv(Pv, vv), Pv
- ... (1 more removed lines; see GitHub link above)
+           function FT() {
+             hT.call(this)
+           }
```

#### 151. `bundles/bloxd.io/main.js` (Changed code · before: `L1879-L1895` → after: `L3706-L3708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3706-L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3706-L3708) · [Before (L1879-L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1879-L1895)

```diff
-               function Uz(vv, zv) {
-                 var Pv = this,
-                   hv = new Nv((function(zv, hv) {
-                     Pv.ready().then((function() {
-                       var Sv = Pv._dbInfo;
-                       Sv.db.transaction((function(Pv) {
-                         fz(Pv, Sv, "SELECT key FROM " + Sv.storeName + " WHERE id = ? LIMIT 1", [vv + 1], (function(vv, Pv) {
-                           var hv = Pv.rows.length ? Pv.rows.item(0).key : null;
-                           zv(hv)
-                         }), (function(vv, zv) {
-                           hv(zv)
-                         }))
-                       }))
-                     })).catch(hv)
-                   }));
-                 return lv(hv, zv), hv
- ... (1 more removed lines; see GitHub link above)
+           function rT() {
+             hT.call(this)
+           }
```

#### 152. `bundles/bloxd.io/main.js` (Changed code · before: `L1897-L1913` → after: `L3710-L3712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3710-L3712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3710-L3712) · [Before (L1897-L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1897-L1913)

```diff
-               function Rz(vv) {
-                 var zv = this,
-                   Pv = new Nv((function(vv, Pv) {
-                     zv.ready().then((function() {
-                       var hv = zv._dbInfo;
-                       hv.db.transaction((function(zv) {
-                         fz(zv, hv, "SELECT key FROM " + hv.storeName, [], (function(zv, Pv) {
-                           for (var hv = [], Sv = 0; Sv < Pv.rows.length; Sv++) hv.push(Pv.rows.item(Sv).key);
-                           vv(hv)
-                         }), (function(vv, zv) {
-                           Pv(zv)
-                         }))
-                       }))
-                     })).catch(Pv)
-                   }));
-                 return lv(Pv, vv), Pv
- ... (1 more removed lines; see GitHub link above)
+           function PT() {
+             hT.call(this)
+           }
```

#### 153. `bundles/bloxd.io/main.js` (Changed code · before: `L1915-L1931` → after: `L3714-L3725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3714-L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3714-L3725) · [Before (L1915-L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1915-L1931)

```diff
-               function xz(vv) {
-                 return new Nv((function(zv, Pv) {
-                   vv.transaction((function(hv) {
-                     hv.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], (function(Pv, hv) {
-                       for (var Sv = [], ev = 0; ev < hv.rows.length; ev++) Sv.push(hv.rows.item(ev).name);
-                       zv({
-                         db: vv,
-                         storeNames: Sv
-                       })
-                     }), (function(vv, zv) {
-                       Pv(zv)
-                     }))
-                   }), (function(vv) {
-                     Pv(vv)
-                   }))
-                 }))
- ... (1 more removed lines; see GitHub link above)
+           function wT(TT, kT) {
+             if (tT.call(this), !Array.isArray(TT)) throw new Error(xT("non-array union schema: %j", TT));
+             if (!TT.length) throw new Error("empty union");
+             this.types = Object.freeze(TT.map((function(TT) {
+               return tT.forSchema(TT, kT)
+             }))), this._branchIndices = {}, this.types.forEach((function(TT, kT) {
+               if (tT.isType(TT, "union")) throw new Error("unions cannot be directly nested");
+               var cT = TT.branchName;
+               if (void 0 !== this._branchIndices[cT]) throw new Error(xT("duplicate union branch name: %j", cT));
+               this._branchIndices[cT] = kT
+             }), this)
+           }
```

#### 154. `bundles/bloxd.io/main.js` (Changed code · before: `L1933-L1966` → after: `L3727-L3736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3727-L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3727-L3736) · [Before (L1933-L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1933-L1966)

```diff
-               function tz(vv, zv) {
-                 zv = wv.apply(this, arguments);
-                 var Pv = this.config();
-                 (vv = "function" !== typeof vv && vv || {}).name || (vv.name = vv.name || Pv.name, vv.storeName = vv.storeName || Pv.storeName);
-                 var hv, Sv = this;
-                 return lv(hv = vv.name ? new Nv((function(zv) {
-                   var hv;
-                   hv = vv.name === Pv.name ? Sv._dbInfo.db : openDatabase(vv.name, "", "", 0), vv.storeName ? zv({
-                     db: hv,
-                     storeNames: [vv.storeName]
-                   }) : zv(xz(hv))
-                 })).then((function(vv) {
-                   return new Nv((function(zv, Pv) {
-                     vv.db.transaction((function(hv) {
-                       function Sv(vv) {
-                         return new Nv((function(zv, Pv) {
- ... (18 more removed lines; see GitHub link above)
+           function mT(TT, kT) {
+             wT.call(this, TT, kT), this._dynamicBranches = null, this._bucketIndices = {}, this.types.forEach((function(TT, kT) {
+               if (tT.isType(TT, "abstract", "logical")) this._dynamicBranches || (this._dynamicBranches = []), this._dynamicBranches.push({
+                 index: kT,
+                 type: TT
+               });
+               else {
+                 var cT = pT(TT);
+                 if (void 0 !== this._bucketIndices[cT]) throw new Error(xT("ambiguous unwrapped union: %j", this));
+                 this._bucketIndices[cT] = kT
```

#### 155. `bundles/bloxd.io/main.js` (Changed code · before: `L1968-L1981` → after: `L3738-L3739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3738-L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3738-L3739) · [Before (L1968-L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1968-L1981)

```diff
-               var qz = {
-                 _driver: "webSQLStorage",
-                 _initStorage: jz,
-                 _support: rv(),
-                 iterate: Yz,
-                 getItem: Fz,
-                 setItem: Oz,
-                 removeItem: Dz,
-                 clear: Kz,
-                 length: Vz,
-                 key: Uz,
-                 keys: Rz,
-                 dropInstance: tz
-               };
+             }), this), Object.freeze(this)
+           }
```

#### 156. `bundles/bloxd.io/main.js` (Changed code · before: `L1983-L1989` → after: `L3741-L3743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3741-L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3741-L3743) · [Before (L1983-L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1983-L1989)

```diff
-               function Iz() {
-                 try {
-                   return "undefined" !== typeof localStorage && "setItem" in localStorage && !!localStorage.setItem
-                 } catch (vv) {
-                   return !1
-                 }
-               }
+           function bT(TT, kT) {
+             wT.call(this, TT, kT), Object.freeze(this)
+           }
```

#### 157. `bundles/bloxd.io/main.js` (Changed code · before: `L1991-L1994` → after: `L3745-L3753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3745-L3753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3745-L3753) · [Before (L1991-L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1991-L1994)

```diff
-               function Qz(vv, zv) {
-                 var Pv = vv.name + "/";
-                 return vv.storeName !== zv.storeName && (Pv += vv.storeName + "/"), Pv
-               }
+           function zT(TT, kT) {
+             if (tT.call(this, TT, kT), !Array.isArray(TT.symbols) || !TT.symbols.length) throw new Error(xT("invalid enum symbols: %j", TT.symbols));
+             if (this.symbols = Object.freeze(TT.symbols.slice()), this._indices = {}, this.symbols.forEach((function(TT, kT) {
+                 if (!lT.isValidName(TT)) throw new Error(xT("invalid %s symbol: %j", this, TT));
+                 if (void 0 !== this._indices[TT]) throw new Error(xT("duplicate %s symbol: %j", this, TT));
+                 this._indices[TT] = kT
+               }), this), this.default = TT.default, void 0 !== this.default && void 0 === this._indices[this.default]) throw new Error(xT("invalid %s default: %j", this, this.default));
+             this._branchConstructor = this._createBranchConstructor(), Object.freeze(this)
+           }
```

#### 158. `bundles/bloxd.io/main.js` (Changed code · before: `L1996-L2003` → after: `L3755-L3758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3755-L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3755-L3758) · [Before (L1996-L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L1996-L2003)

```diff
-               function Zz() {
-                 var vv = "_localforage_support_test";
-                 try {
-                   return localStorage.setItem(vv, !0), localStorage.removeItem(vv), !1
-                 } catch (zv) {
-                   return !0
-                 }
-               }
+           function JT(TT, kT) {
+             if (tT.call(this, TT, kT), TT.size !== (0 | TT.size) || TT.size < 0) throw new Error(xT("invalid %s size", this.branchName));
+             this.size = 0 | TT.size, this._branchConstructor = this._createBranchConstructor(), Object.freeze(this)
+           }
```

#### 159. `bundles/bloxd.io/main.js` (Changed code · before: `L2005-L2007` → after: `L3760-L3763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3760-L3763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3760-L3763) · [Before (L2005-L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2005-L2007)

```diff
-               function Az() {
-                 return !Zz() || localStorage.length > 0
-               }
+           function oT(TT, kT) {
+             if (tT.call(this), !TT.values) throw new Error(xT("missing map values: %j", TT));
+             this.valuesType = tT.forSchema(TT.values, kT), this._branchConstructor = this._createBranchConstructor(), Object.freeze(this)
+           }
```

#### 160. `bundles/bloxd.io/main.js` (Changed code · before: `L2009-L2015` → after: `L3765-L3768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3765-L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3765-L3768) · [Before (L2009-L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2009-L2015)

```diff
-               function Lz(vv) {
-                 var zv = this,
-                   Pv = {};
-                 if (vv)
-                   for (var hv in vv) Pv[hv] = vv[hv];
-                 return Pv.keyPrefix = Qz(vv, zv._defaultConfig), Az() ? (zv._dbInfo = Pv, Pv.uC = Gz, Nv.resolve()) : Nv.reject()
-               }
+           function HT(TT, kT) {
+             if (tT.call(this), !TT.items) throw new Error(xT("missing array items: %j", TT));
+             this.itemsType = tT.forSchema(TT.items, kT), this._branchConstructor = this._createBranchConstructor(), Object.freeze(this)
+           }
```

#### 161. `bundles/bloxd.io/main.js` (Changed code · before: `L2017-L2026` → after: `L3770-L3785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3770-L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3770-L3785) · [Before (L2017-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2017-L2026)

```diff
-               function Hz(vv) {
-                 var zv = this,
-                   Pv = zv.ready().then((function() {
-                     for (var vv = zv._dbInfo.keyPrefix, Pv = localStorage.length - 1; Pv >= 0; Pv--) {
-                       var hv = localStorage.key(Pv);
-                       0 === hv.indexOf(vv) && localStorage.removeItem(hv)
-                     }
-                   }));
-                 return lv(Pv, vv), Pv
-               }
+           function eT(TT, kT) {
+             var cT = (kT = kT || {}).namespace;
+             if (void 0 !== TT.namespace) kT.namespace = TT.namespace;
+             else if (TT.name) {
+               var MT = lT.impliedNamespace(TT.name);
+               void 0 !== MT && (kT.namespace = MT)
+             }
+             if (tT.call(this, TT, kT), !Array.isArray(TT.fields)) throw new Error(xT("non-array record fields: %j", TT.fields));
+             if (lT.hasDuplicates(TT.fields, (function(TT) {
+                 return TT.name
+               }))) throw new Error(xT("duplicate field name: %j", TT.fields));
+             this._fieldsByName = {}, this.fields = Object.freeze(TT.fields.map((function(TT) {
+               var cT = new ET(TT, kT);
+               return this._fieldsByName[cT.name] = cT, cT
+             }), this)), this._branchConstructor = this._createBranchConstructor(), this._isError = "error" === TT.type, this.recordConstructor = this._createConstructor(kT.errorStackTraces, kT.omitRecordMethods), this._read = this._createReader(), this._skip = this._createSkipper … [truncated]
+           }
```

#### 162. `bundles/bloxd.io/main.js` (Changed code · before: `L2028-L2037` → after: `L3787-L3797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3787-L3797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3787-L3797) · [Before (L2028-L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2028-L2037)

```diff
-               function Mz(vv, zv) {
-                 var Pv = this;
-                 vv = Wv(vv);
-                 var hv = Pv.ready().then((function() {
-                   var zv = Pv._dbInfo,
-                     hv = localStorage.getItem(zv.keyPrefix + vv);
-                   return hv && (hv = zv.uC.deserialize(hv)), hv
-                 }));
-                 return lv(hv, zv), hv
-               }
+           function GT(TT, kT) {
+             this._logicalTypeName = TT.logicalType, tT.call(this), jT = this;
+             try {
+               this._underlyingType = tT.forSchema(TT, kT)
+             } finally {
+               jT = null;
+               var cT = vT.length;
+               cT && vT[cT - 1][0] === this && vT.pop()
+             }
+             tT.isType(this.underlyingType, "union") ? this._branchConstructor = this.underlyingType._branchConstructor : this._branchConstructor = this.underlyingType._createBranchConstructor()
+           }
```

#### 163. `bundles/bloxd.io/main.js` (Changed code · before: `L2039-L2051` → after: `L3799-L3801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3799-L3801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3799-L3801) · [Before (L2039-L2051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2039-L2051)

```diff
-               function yz(vv, zv) {
-                 var Pv = this,
-                   hv = Pv.ready().then((function() {
-                     for (var zv = Pv._dbInfo, hv = zv.keyPrefix, Sv = hv.length, ev = localStorage.length, gv = 1, pv = 0; pv < ev; pv++) {
-                       var dv = localStorage.key(pv);
-                       if (0 === dv.indexOf(hv)) {
-                         var Nv = localStorage.getItem(dv);
-                         if (Nv && (Nv = zv.uC.deserialize(Nv)), void 0 !== (Nv = vv(Nv, dv.substring(Sv), gv++))) return Nv
-                       }
-                     }
-                   }));
-                 return lv(hv, zv), hv
-               }
+           function VT(TT) {
+             this._concreteTypeName = "long", hT.call(this, !0), this._noUnpack = !!TT
+           }
```

#### 164. `bundles/bloxd.io/main.js` (Changed code · before: `L2053-L2064` → after: `L3803-L3815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3803-L3815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3803-L3815) · [Before (L2053-L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2053-L2064)

```diff
-               function Bz(vv, zv) {
-                 var Pv = this,
-                   hv = Pv.ready().then((function() {
-                     var zv, hv = Pv._dbInfo;
-                     try {
-                       zv = localStorage.key(vv)
-                     } catch (Sv) {
-                       zv = null
-                     }
-                     return zv && (zv = zv.substring(hv.keyPrefix.length)), zv
-                   }));
-                 return lv(hv, zv), hv
+           function ET(TT, kT) {
+             var cT = TT.name;
+             if ("string" != typeof cT || !lT.isValidName(cT)) throw new Error(xT("invalid field name: %s", cT));
+             this.name = cT, this.type = tT.forSchema(TT.type, kT), this.aliases = TT.aliases || [], this.doc = void 0 !== TT.doc ? "" + TT.doc : void 0, this._order = function(TT) {
+               switch (TT) {
+                 case "ascending":
+                   return 1;
+                 case "descending":
+                   return -1;
+                 case "ignore":
+                   return 0;
+                 default:
+                   throw new Error(xT("invalid order: %j", TT))
```

#### 165. `bundles/bloxd.io/main.js` (Changed code · before: `L2066-L2076` → after: `L3817-L3828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3817-L3828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3817-L3828) · [Before (L2066-L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2066-L2076)

```diff
- 
-               function Jz(vv) {
-                 var zv = this,
-                   Pv = zv.ready().then((function() {
-                     for (var vv = zv._dbInfo, Pv = localStorage.length, hv = [], Sv = 0; Sv < Pv; Sv++) {
-                       var ev = localStorage.key(Sv);
-                       0 === ev.indexOf(vv.keyPrefix) && hv.push(ev.substring(vv.keyPrefix.length))
-                     }
-                     return hv
-                   }));
-                 return lv(Pv, vv), Pv
+             }(void 0 === TT.order ? "ascending" : TT.order);
+             var MT = TT.default;
+             if (void 0 !== MT) {
+               var KT, OT = this.type;
+               try {
+                 KT = OT._copy(MT, {
+                   coerce: 2,
+                   wrap: 2
+                 })
+               } catch (fT) {
+                 var yT = xT("incompatible field default %j (%s)", MT, fT.message);
+                 throw tT.isType(OT, "union") && (yT += xT(", union defaults must match the first branch's type (%j)", OT.types[0])), new Error(yT)
```

#### 166. `bundles/bloxd.io/main.js` (Changed code · before: `L2078-L2083` → after: `L3830-L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3830-L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3830-L3833) · [Before (L2078-L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2078-L2083)

```diff
- 
-               function Ez(vv) {
-                 var zv = this.keys().then((function(vv) {
-                   return vv.length
-                 }));
-                 return lv(zv, vv), zv
+               RT(OT.typeName) && "bytes" !== OT.typeName ? this.defaultValue = function() {
+                 return KT
+               } : this.defaultValue = function() {
+                 return OT._copy(KT)
```

#### 167. `bundles/bloxd.io/main.js` (Changed code · before: `L2086-L2094` → after: `L3839-L3841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3839-L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3839-L3841) · [Before (L2086-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2086-L2094)

```diff
-               function oz(vv, zv) {
-                 var Pv = this;
-                 vv = Wv(vv);
-                 var hv = Pv.ready().then((function() {
-                   var zv = Pv._dbInfo;
-                   localStorage.removeItem(zv.keyPrefix + vv)
-                 }));
-                 return lv(hv, zv), hv
-               }
+           function ZT(TT) {
+             this._readerType = TT, this._read = null, this.itemsType = null, this.size = 0, this.symbols = null, this.valuesType = null
+           }
```

#### 168. `bundles/bloxd.io/main.js` (Changed code · before: `L2096-L2115` → after: `L3843-L3845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3843-L3845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3843-L3845) · [Before (L2096-L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2096-L2115)

```diff
-               function bz(vv, zv, Pv) {
-                 var hv = this;
-                 vv = Wv(vv);
-                 var Sv = hv.ready().then((function() {
-                   void 0 === zv && (zv = null);
-                   var Pv = zv;
-                   return new Nv((function(Sv, ev) {
-                     var gv = hv._dbInfo;
-                     gv.uC.serialize(zv, (function(zv, hv) {
-                       if (hv) ev(hv);
-                       else try {
-                         localStorage.setItem(gv.keyPrefix + vv, zv), Sv(Pv)
-                       } catch (pv) {
-                         "QuotaExceededError" !== pv.name && "NS_ERROR_DOM_QUOTA_REACHED" !== pv.name || ev(pv), ev(pv)
-                       }
-                     }))
- ... (4 more removed lines; see GitHub link above)
+           function uT() {
+             this.str = void 0
+           }
```

#### 169. `bundles/bloxd.io/main.js` (Changed code · before: `L2117-L2176` → after: `L3847-L3853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3847-L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3847-L3853) · [Before (L2117-L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2117-L2176)

```diff
-               function rz(vv, zv) {
-                 if (zv = wv.apply(this, arguments), !(vv = "function" !== typeof vv && vv || {}).name) {
-                   var Pv = this.config();
-                   vv.name = vv.name || Pv.name, vv.storeName = vv.storeName || Pv.storeName
-                 }
-                 var hv, Sv = this;
-                 return hv = vv.name ? new Nv((function(zv) {
-                   vv.storeName ? zv(Qz(vv, Sv._defaultConfig)) : zv(vv.name + "/")
-                 })).then((function(vv) {
-                   for (var zv = localStorage.length - 1; zv >= 0; zv--) {
-                     var Pv = localStorage.key(zv);
-                     0 === Pv.indexOf(vv) && localStorage.removeItem(Pv)
-                   }
-                 })) : Nv.reject("Invalid arguments"), lv(hv, zv), hv
-               }
-               var kz = {
- ... (44 more removed lines; see GitHub link above)
+           function XT(TT, kT, cT, lT) {
+             if (cT) {
+               if (cT._readerType !== TT) throw new Error("invalid resolver");
+               return cT._read(kT, lT)
+             }
+             return TT._read(kT)
+           }
```

#### 170. `bundles/bloxd.io/main.js` (Changed code · before: `L2178-L2185` → after: `L3855-L3861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3855-L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3855-L3861) · [Before (L2178-L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2178-L2185)

```diff
-               function dP(vv, zv) {
-                 vv[zv] = function() {
-                   var Pv = arguments;
-                   return vv.ready().then((function() {
-                     return vv[zv].apply(vv, Pv)
-                   }))
-                 }
-               }
+           function dT(TT) {
+             var kT = {};
+             TT.name && (kT[TT.name] = !0);
+             var cT, lT, MT = TT.aliases;
+             for (cT = 0, lT = MT.length; cT < lT; cT++) kT[MT[cT]] = !0;
+             return Object.keys(kT)
+           }
```

#### 171. `bundles/bloxd.io/main.js` (Changed code · before: `L2187-L2191` → after: `L3863-L3978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3863-L3978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3863-L3978) · [Before (L2187-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2187-L2191)

```diff
-               function NP() {
-                 for (var vv = 1; vv < arguments.length; vv++) {
-                   var zv = arguments[vv];
-                   if (zv)
-                     for (var Pv in zv) zv.hasOwnProperty(Pv) && (vP(zv[Pv]) ? arguments[0][Pv] = zv[Pv].slice() : arguments[0][Pv] = zv[Pv])
+           function LT(TT, kT, cT) {
+             if (!kT.name) return !0;
+             var MT, KT, OT, yT = cT ? kT.name : lT.unqualify(kT.name),
+               fT = dT(TT);
+             for (MT = 0, KT = fT.length; MT < KT; MT++)
+               if (OT = fT[MT], cT || (OT = lT.unqualify(OT)), OT === yT) return !0;
+             return !1
+           }
+ 
+           function RT(TT) {
+             var kT = IT[TT];
+             return kT && kT.prototype instanceof hT
+           }
+ 
+           function gT(TT) {
+             if ("error" === TT) TT = "record";
+ ... (100 more added lines; see GitHub link above)
```

#### 172. `bundles/bloxd.io/main.js` (Changed code · before: `L2195-L2211` → after: `L3981-L4042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3981-L4042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L3981-L4042) · [Before (L2195-L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2195-L2211)

```diff
-               var lP = function() {
-                   function vv(zv) {
-                     for (var Pv in Sv(this, vv), hP)
-                       if (hP.hasOwnProperty(Pv)) {
-                         var hv = hP[Pv],
-                           ev = hv._driver;
-                         this[Pv] = ev, zP[ev] || this.defineDriver(hv)
-                       } this._defaultConfig = NP({}, pP), this._config = NP({}, this._defaultConfig, zv), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch((functi … [truncated]
-                   }
-                   return vv.prototype.config = function(vv) {
-                     if ("object" === ("undefined" === typeof vv ? "undefined" : hv(vv))) {
-                       if (this._ready) return new Error("Can't call config() after localforage has been used.");
-                       for (var zv in vv) {
-                         if ("storeName" === zv && (vv[zv] = vv[zv].replace(/\W/g, "_")), "version" === zv && "number" !== typeof vv[zv]) return new Error("Database version must be a number.");
-                         this._config[zv] = vv[zv]
-                       }
- ... (1 more removed lines; see GitHub link above)
+             }
+             if (Array.isArray(TT)) {
+               var yT = jT;
+               jT = null;
+               var AT = TT.map((function(TT) {
+                 return tT.forSchema(TT, kT)
+               }));
+               lT || (lT = function(TT) {
+                 var kT, cT, lT, MT, KT = {};
+                 for (kT = 0, cT = TT.length; kT < cT; kT++)
+                   if (MT = TT[kT], !tT.isType(MT, "logical")) {
+                     if (KT[lT = pT(MT)]) return !0;
+                     KT[lT] = !0
+                   } return !1
+               }(AT) ? bT : mT), jT = yT, cT = new lT(AT, kT)
+             } else cT = function(cT) {
+ ... (46 more added lines; see GitHub link above)
```

#### 173. `bundles/bloxd.io/main.js` (Changed code · before: `L2213-L2266` → after: `L4044-L4118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4044-L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L4044-L4118) · [Before (L2213-L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2213-L2266)

```diff
-                     return "string" === typeof vv ? this._config[vv] : this._config
-                   }, vv.prototype.defineDriver = function(vv, zv, Pv) {
-                     var hv = new Nv((function(zv, Pv) {
-                       try {
-                         var hv = vv._driver,
-                           Sv = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
-                         if (!vv._driver) return void Pv(Sv);
-                         for (var ev = gP.concat("_initStorage"), gv = 0, pv = ev.length; gv < pv; gv++) {
-                           var dv = ev[gv];
-                           if ((!uz(eP, dv) || vv[dv]) && "function" !== typeof vv[dv]) return void Pv(Sv)
-                         }
-                         var Tv = function() {
-                           for (var zv = function(vv) {
-                               return function() {
-                                 var zv = new Error("Method " + vv + " is not implemented by the current driver"),
-                                   Pv = Nv.reject(zv);
- ... (38 more removed lines; see GitHub link above)
+                   }))
+                 }, kT);
+               default:
+                 throw new Error(xT("cannot infer type from: %j", TT))
+             }
+           }, tT.forTypes = function(TT, kT) {
+             if (!TT.length) throw new Error("no types to combine");
+             if (1 === TT.length) return TT[0];
+             kT = kT || {};
+             var cT = [],
+               lT = 0,
+               MT = !0;
+             if (TT.forEach((function(TT) {
+                 switch (TT.typeName) {
+                   case "union:unwrapped":
+                     MT = !1, cT = cT.concat(TT.types);
+ ... (59 more added lines; see GitHub link above)
```

#### 174. `bundles/bloxd.io/main.js` (Changed code · before: `L2268-L2270` → after: `L4120-L4129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4120-L4129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L4120-L4129) · [Before (L2268-L2270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2268-L2270)

```diff
- 
-                     function gv(vv) {
-                       return hv._extend(vv), ev(), hv._ready = hv._initStorage(hv._config), hv._ready
+                     return tT.forSchema({
+                       type: "enum",
+                       symbols: Object.keys(OT)
+                     }, kT)
+                   }(cT, kT);
+                 case "buffer":
+                   return function(TT, kT) {
+                     var cT, lT, MT, KT = -1;
+                     for (cT = 0, lT = TT.length; cT < lT; cT++) {
+                       if ("bytes" === (MT = TT[cT]).typeName) return MT; - 1 === KT ? KT = MT.size : MT.size !== KT && (KT = -2)
```

#### 175. `bundles/bloxd.io/main.js` (Changed code · before: `L2272-L2280` → after: `L4131-L4168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4131-L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L4131-L4168) · [Before (L2272-L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2272-L2280)

```diff
- 
-                     function pv(vv) {
-                       return function() {
-                         var zv = 0;
- 
-                         function Pv() {
-                           for (; zv < vv.length;) {
-                             var Sv = vv[zv];
-                             return zv++, hv._dbInfo = null, hv._ready = null, hv.getDriver(Sv).then(gv).catch(Pv)
+                     return KT < 0 ? tT.forSchema("bytes", kT) : TT[0]
+                   }(cT, kT);
+                 case "array":
+                   return (cT = cT.filter((function(TT) {
+                     return TT !== kT.emptyArrayType
+                   }))).length ? tT.forSchema({
+                     type: "array",
+                     items: tT.forTypes(cT.map((function(TT) {
+                       return TT.itemsType
+                     })), kT)
+                   }, kT) : kT.emptyArrayType;
+                 default:
+                   return function(TT, kT) {
+                     var cT, lT, MT, KT, OT, yT = [],
+                       fT = {},
+                       xT = {},
+ ... (22 more added lines; see GitHub link above)
```

#### 176. `bundles/bloxd.io/main.js` (Changed code · before: `L2286-L2295` → after: `L4171-L4175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4171-L4175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L4171-L4175) · [Before (L2286-L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2286-L2295)

```diff
-                         return Pv()
-                       }
-                     }
-                     var dv = null !== this._driverSet ? this._driverSet.catch((function() {
-                       return Nv.resolve()
-                     })) : Nv.resolve();
-                     return this._driverSet = dv.then((function() {
-                       var vv = Sv[0];
-                       return hv._dbInfo = null, hv._ready = null, hv.getDriver(vv).then((function(vv) {
-                         hv._driver = vv._driver, ev(), hv._wrapLibraryMethodsWithReady(), hv._initDriver = pv(Sv)
+                         return {
+                           name: TT,
+                           type: cT,
+                           default: xT[TT]
+                         }
```

#### 177. `bundles/bloxd.io/main.js` (Changed code · before: `L2297-L2338` → after: `L4177-L4182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4177-L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L4177-L4182) · [Before (L2297-L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2297-L2338)

```diff
-                     })).catch((function() {
-                       ev();
-                       var vv = new Error("No available storage method found.");
-                       return hv._driverSet = Nv.reject(vv), hv._driverSet
-                     })), Tv(this._driverSet, zv, Pv), this._driverSet
-                   }, vv.prototype.supports = function(vv) {
-                     return !!PP[vv]
-                   }, vv.prototype._extend = function(vv) {
-                     NP(this, vv)
-                   }, vv.prototype._getSupportedDrivers = function(vv) {
-                     for (var zv = [], Pv = 0, hv = vv.length; Pv < hv; Pv++) {
-                       var Sv = vv[Pv];
-                       this.supports(Sv) && zv.push(Sv)
-                     }
-                     return zv
-                   }, vv.prototype._wrapLibraryMethodsWithReady = function() {
- ... (26 more removed lines; see GitHub link above)
+                     } : {
+                       type: "map",
+                       values: tT.forTypes(yT, kT)
+                     };
+                     return tT.forSchema(OT, kT)
+                   }(cT, kT)
```

#### 178. `bundles/bloxd.io/main.js` (Changed code · before: `L2340` → after: `L4184-L4310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4184-L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L4184-L4310) · [Before (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2340)

```diff
-               return zv
+             }));
+             return 1 === xT.length ? xT[0] : tT.forSchema(xT, kT)
+           }, tT.isType = function() {
+             var TT = arguments.length;
+             if (!TT) return !1;
+             var kT = arguments[0];
+             if (!kT || "function" != typeof kT._update || "function" != typeof kT.fingerprint) return !1;
+             if (1 === TT) return !0;
+             var cT, lT = kT.typeName;
+             for (cT = 1; cT < TT; cT++)
+               if (0 === lT.indexOf(arguments[cT])) return !0;
+             return !1
+           }, tT.__reset = function(TT) {
+             fT("resetting type buffer to %d", TT), CT.buf = OT.allocUnsafeSlow(TT)
+           }, Object.defineProperty(tT.prototype, "branchName", {
+             enumerable: !0,
+ ... (111 more added lines; see GitHub link above)
```

#### 179. `bundles/bloxd.io/main.js` (Changed code · before: `L2342-L2344` → after: `L4312-L4433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4312-L4433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L4312-L4433) · [Before (L2342-L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2342-L2344)

```diff
- 
-             function zv(vv) {
-               return vv.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
+             var cT = {};
+             void 0 !== this.name && (cT.name = kT), cT.type = this.typeName;
+             var lT = this._deref(cT, TT);
+             return void 0 !== lT && (cT = lT), TT.exportAttrs && (this.aliases && this.aliases.length && (cT.aliases = this.aliases), void 0 !== this.doc && (cT.doc = this.doc)), cT
+           }, tT.prototype._createBranchConstructor = function() {
+             var TT = this.branchName;
+             if ("null" === TT) return null;
+             var kT = ~TT.indexOf(".") ? "this['" + TT + "']" : "this." + TT,
+               cT = new Function("return function Branch$(val) { " + kT + " = val; };")();
+             return cT.type = this, cT.prototype.unwrap = new Function("return " + kT + ";"), cT.prototype.unwrapped = cT.prototype.unwrap, cT
+           }, tT.prototype._peek = function(TT) {
+             var kT = TT.pos,
+               cT = this._read(TT);
+             return TT.pos = kT, cT
+           }, tT.prototype._check = lT.abstractFunction, tT.prototype._copy = lT.abstractFunction, tT.prototype._deref = lT.abstractFunction, tT.prototype._match = lT.abstractFunction, tT.prototype._read = lT.abstractFunction, tT.prototype._skip = lT.abstractFunction, tT.prototype … [truncated]
+             return this.aliases
+ ... (106 more added lines; see GitHub link above)
```

#### 180. `bundles/bloxd.io/main.js` (Changed code · before: `L2346-L2361` → after: `L4435-L4458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4435-L4458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L4435-L4458) · [Before (L2346-L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2346-L2361)

```diff
-             return function Pv(hv) {
-               function Sv() {}
- 
-               function ev(zv, Pv, ev) {
-                 if ("undefined" !== typeof document) {
-                   "number" === typeof(ev = vv({
-                     path: "/"
-                   }, Sv.defaults, ev)).expires && (ev.expires = new Date(1 * new Date + 864e5 * ev.expires)), ev.expires = ev.expires ? ev.expires.toUTCString() : "";
-                   try {
-                     var gv = JSON.stringify(Pv);
-                     /^[\{\[]/.test(gv) && (Pv = gv)
-                   } catch (Nv) {}
-                   Pv = hv.write ? hv.write(Pv, zv) : encodeURIComponent(String(Pv)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), zv = encodeURIComponent(String(zv)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\) … [truncated]
-                   var pv = "";
-                   for (var dv in ev) ev[dv] && (pv += "; " + dv, !0 !== ev[dv] && (pv += "=" + ev[dv].split(";")[0]));
-                   return document.cookie = zv + "=" + Pv + pv
+           }, aT.prototype.typeName = "float", aT.prototype.random = function() {
+             return AT.nextFloat(1e3)
+           }, KT.inherits(FT, hT), FT.prototype._check = function(TT, kT, cT) {
+             var lT = "number" == typeof TT;
+             return !lT && cT && cT(TT, this), lT
+           }, FT.prototype._read = function(TT) {
+             return TT.readDouble()
+           }, FT.prototype._skip = function(TT) {
+             TT.skipDouble()
+           }, FT.prototype._write = function(TT, kT) {
+             "number" != typeof kT && WT(kT, this), TT.writeDouble(kT)
+           }, FT.prototype._match = function(TT, kT) {
+             return TT.matchDouble(kT)
+           }, FT.prototype._update = function(TT, kT) {
+             switch (kT.typeName) {
+               case "double":
+ ... (8 more added lines; see GitHub link above)
```

#### 181. `bundles/bloxd.io/main.js` (Changed code · before: `L2364-L2377` → after: `L4553-L4570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4553-L4570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L4553-L4570) · [Before (L2364-L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2364-L2377)

```diff
- 
-               function gv(vv, Pv) {
-                 if ("undefined" !== typeof document) {
-                   for (var Sv = {}, ev = document.cookie ? document.cookie.split("; ") : [], gv = 0; gv < ev.length; gv++) {
-                     var pv = ev[gv].split("="),
-                       dv = pv.slice(1).join("=");
-                     Pv || '"' !== dv.charAt(0) || (dv = dv.slice(1, -1));
-                     try {
-                       var Nv = zv(pv[0]);
-                       if (dv = (hv.read || hv)(dv, Nv) || zv(dv), Pv) try {
-                         dv = JSON.parse(dv)
-                       } catch (lv) {}
-                       if (Sv[Nv] = dv, vv === Nv) break
-                     } catch (lv) {}
+               return void(TT._read = function(TT) {
+                 return KT._read(TT)
+               })
+             }
+           }, mT.prototype._copy = function(TT, kT) {
+             var cT, lT = kT && 0 | kT.coerce,
+               MT = kT && 0 | kT.wrap;
+             if (2 === MT) cT = 0;
+             else {
+               switch (lT) {
+                 case 1:
+                   cT = BT(TT) && void 0 !== this._bucketIndices.buffer ? this._bucketIndices.buffer : this._getIndex(TT);
+                   break;
+                 case 2:
+                   if (null === TT) cT = this._bucketIndices.null;
+                   else if ("object" === typeof TT) {
+ ... (2 more added lines; see GitHub link above)
```

#### 182. `bundles/bloxd.io/main.js` (Changed code · before: `L2379-L2380` → after: `L4572-L4574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4572-L4574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L4572-L4574) · [Before (L2379-L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2379-L2380)

```diff
-                   return vv ? Sv[vv] : Sv
-                 }
+                   break;
+                 default:
+                   cT = this._getIndex(TT)
```

#### 183. `bundles/bloxd.io/main.js` (Changed code · before: `L2382-L2418` → after: `L4576-L5100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4576-L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L4576-L5100) · [Before (L2382-L2418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2382-L2418)

```diff
-               return Sv.set = ev, Sv.get = function(vv) {
-                 return gv(vv, !1)
-               }, Sv.getJSON = function(vv) {
-                 return gv(vv, !0)
-               }, Sv.remove = function(zv, Pv) {
-                 ev(zv, "", vv(Pv, {
-                   expires: -1
-                 }))
-               }, Sv.defaults = {}, Sv.withConverter = Pv, Sv
-             }((function() {}))
-           }))
-         }, , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             b: () => Sv
-           });
-           var hv = Pv(39);
- ... (21 more removed lines; see GitHub link above)
+               void 0 === cT && WT(TT, this)
+             }
+             var OT = this.types[cT];
+             if (null === TT || 3 === MT) return OT._copy(TT, kT);
+             if (3 === lT) {
+               var yT = {};
+               return yT[OT.branchName] = OT._copy(TT, kT), yT
+             }
+             return OT._copy(TT, kT)
+           }, mT.prototype.compare = function(TT, kT) {
+             var cT = this._getIndex(TT),
+               MT = this._getIndex(kT);
+             if (void 0 === cT) WT(TT, this);
+             else {
+               if (void 0 !== MT) return cT === MT ? this.types[cT].compare(TT, kT) : lT.compare(cT, MT);
+               WT(kT, this)
+ ... (509 more added lines; see GitHub link above)
```

#### 184. `bundles/bloxd.io/main.js` (Changed code · before: `L2420` → after: `L5102-L5110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5102-L5110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5102-L5110) · [Before (L2420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2420)

```diff
-           var Wv = "function" === typeof Symbol && Symbol.iterator;
+         },
+         3754: (TT, kT, cT) => {
+           var lT = cT(3719),
+             MT = cT(3763),
+             KT = cT(3766),
+             OT = lT.Ov,
+             yT = new vT(4096),
+             fT = /^[A-Za-z_][A-Za-z0-9_]*$/,
+             xT = KT.format;
```

#### 185. `bundles/bloxd.io/main.js` (Changed code · before: `L2423-L2437` → after: `L5113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5113) · [Before (L2423-L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2423-L2437)

```diff
-             for (var zv = "https://reactjs.org/docs/error-decoder.html?invariant=" + vv, Pv = 1; Pv < arguments.length; Pv++) zv += "&args[]=" + encodeURIComponent(arguments[Pv]);
-             return "Minified React error #" + vv + "; visit " + zv + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
-           }
-           var av = {
-               isMounted: function() {
-                 return !1
-               },
-               enqueueForceUpdate: function() {},
-               enqueueReplaceState: function() {},
-               enqueueSetState: function() {}
-             },
-             sv = {};
- 
-           function Cv(vv, zv, Pv) {
-             this.props = vv, this.context = zv, this.refs = sv, this.updater = Pv || av
+             return "function" == typeof OT.alloc ? OT.alloc(TT) : new OT(TT)
```

#### 186. `bundles/bloxd.io/main.js` (Changed code · before: `L2440-L2443` → after: `L5116-L5117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5116-L5117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5116-L5117) · [Before (L2440-L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2440-L2443)

```diff
-           function iv() {}
- 
-           function cv(vv, zv, Pv) {
-             this.props = vv, this.context = zv, this.refs = sv, this.updater = Pv || av
+           function AT(TT, kT) {
+             return "function" == typeof OT.from ? OT.from(TT, kT) : new OT(TT, kT)
```

#### 187. `bundles/bloxd.io/main.js` (Changed code · before: `L2464-L2485` → after: `L5120-L5121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5120-L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5120-L5121) · [Before (L2464-L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2464-L2485)

```diff
-           function Fv(vv, zv, Pv) {
-             var hv, ev = {},
-               gv = null,
-               pv = null;
-             if (null != zv)
-               for (hv in void 0 !== zv.ref && (pv = zv.ref), void 0 !== zv.key && (gv = "" + zv.key), zv) jv.call(zv, hv) && !fv.hasOwnProperty(hv) && (ev[hv] = zv[hv]);
-             var dv = arguments.length - 2;
-             if (1 === dv) ev.children = Pv;
-             else if (1 < dv) {
-               for (var Nv = Array(dv), lv = 0; lv < dv; lv++) Nv[lv] = arguments[lv + 2];
-               ev.children = Nv
-             }
-             if (vv && vv.defaultProps)
-               for (hv in dv = vv.defaultProps) void 0 === ev[hv] && (ev[hv] = dv[hv]);
-             return {
-               $$typeof: Sv,
- ... (6 more removed lines; see GitHub link above)
+           function CT(TT) {
+             return TT.charAt(0).toUpperCase() + TT.slice(1)
```

#### 188. `bundles/bloxd.io/main.js` (Changed code · before: `L2489` → after: `L5125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5125) · [Before (L2489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2489)

```diff
-             return "object" === typeof vv && null !== vv && vv.$$typeof === Sv
+             return fT.test(TT)
```

#### 189. `bundles/bloxd.io/main.js` (Changed code · before: `L2493-L2502` → after: `L5128-L5129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5128-L5129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5128-L5129) · [Before (L2493-L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2493-L2502)

```diff
-           function Ov(vv, zv) {
-             return "object" === typeof vv && null !== vv && null != vv.key ? function(vv) {
-               var zv = {
-                 "=": "=0",
-                 ":": "=2"
-               };
-               return "$" + vv.replace(/[=:]/g, (function(vv) {
-                 return zv[vv]
-               }))
-             }("" + vv.key) : zv.toString(36)
+           function vT(TT) {
+             this._len = 0 | TT, this._pos = 0, this._slab = IT(this._len)
```

#### 190. `bundles/bloxd.io/main.js` (Changed code · before: `L2505-L2520` → after: `L5132-L5136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5132-L5136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5132-L5136) · [Before (L2505-L2520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2505-L2520)

```diff
-           function Dv(vv, zv, Pv, hv, gv) {
-             var pv = typeof vv;
-             "undefined" !== pv && "boolean" !== pv || (vv = null);
-             var dv = !1;
-             if (null === vv) dv = !0;
-             else switch (pv) {
-               case "string":
-               case "number":
-                 dv = !0;
-                 break;
-               case "object":
-                 switch (vv.$$typeof) {
-                   case Sv:
-                   case ev:
-                     dv = !0
-                 }
+           function tT(TT) {
+             var kT = Math.pow(2, 31),
+               cT = Math.floor(TT || Math.random() * (kT - 1));
+             this._max = kT, this._nextInt = function() {
+               return cT = (1103515245 * cT + 12345) % kT
```

#### 191. `bundles/bloxd.io/main.js` (Changed code · before: `L2546-L2552` → after: `L5140-L5141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5140-L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5140-L5141) · [Before (L2546-L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2546-L2552)

```diff
-           function Kv(vv, zv, Pv) {
-             if (null == vv) return vv;
-             var hv = [],
-               Sv = 0;
-             return Dv(vv, hv, "", "", (function(vv) {
-               return zv.call(Pv, vv, Sv++)
-             })), hv
+           function hT() {
+             this._index = 0, this._items = []
```

#### 192. `bundles/bloxd.io/main.js` (Changed code · before: `L2555-L2565` → after: `L5144-L5145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5144-L5145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5144-L5145) · [Before (L2555-L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2555-L2565)

```diff
-           function Vv(vv) {
-             if (-1 === vv._status) {
-               var zv = vv._result;
-               zv = zv(), vv._status = 0, vv._result = zv, zv.then((function(zv) {
-                 0 === vv._status && (zv = zv.default, vv._status = 1, vv._result = zv)
-               }), (function(zv) {
-                 0 === vv._status && (vv._status = 2, vv._result = zv)
-               }))
-             }
-             if (1 === vv._status) return vv._result;
-             throw vv._result
+           function NT(TT, kT) {
+             if (this.buf = TT, this.pos = 0 | kT, this.pos < 0) throw new Error("negative offset")
```

#### 193. `bundles/bloxd.io/main.js` (Changed code · before: `L2571-L2579` → after: `L5148-L5355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5148-L5355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5148-L5355) · [Before (L2571-L2579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2571-L2579)

```diff
-           function Rv() {
-             var vv = Uv.current;
-             if (null === vv) throw Error(wv(321));
-             return vv
-           }
-           var xv = {
-             ReactCurrentDispatcher: Uv,
-             ReactCurrentBatchConfig: {
-               transition: 0
+           function QT(TT, kT) {
+             for (; kT--;) TT[kT] = ~TT[kT]
+           }
+           vT.prototype.alloc = function(TT) {
+             if (TT < 0) throw new Error("negative length");
+             var kT = this._len;
+             return TT > kT ? IT(TT) : (this._pos + TT > kT && (this._slab = IT(kT), this._pos = 0), this._slab.slice(this._pos, this._pos += TT))
+           }, tT.prototype.nextBoolean = function() {
+             return !!(this._nextInt() % 2)
+           }, tT.prototype.nextInt = function(TT, kT) {
+             return void 0 === kT && (kT = TT, TT = 0), kT = void 0 === kT ? this._max : kT, TT + Math.floor(this.nextFloat() * (kT - TT))
+           }, tT.prototype.nextFloat = function(TT, kT) {
+             return void 0 === kT && (kT = TT, TT = 0), TT + ((kT = void 0 === kT ? 1 : kT) - TT) * this._nextInt() / this._max
+           }, tT.prototype.nextString = function(TT, kT) {
+             TT |= 0;
+             var cT = "";
+ ... (192 more added lines; see GitHub link above)
```

#### 194. `bundles/bloxd.io/main.js` (Changed code · before: `L2581-L2583` → after: `L5357-L5366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5357-L5366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5357-L5366) · [Before (L2581-L2583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2581-L2583)

```diff
-             ReactCurrentOwner: mv,
-             IsSomeRendererActing: {
-               current: !1
+             addDeprecatedGetters: function(TT, kT) {
+               var cT, lT, MT, OT, yT = TT.prototype;
+               for (cT = 0, lT = kT.length; cT < lT; cT++) yT[OT = "get" + CT(MT = kT[cT])] = KT.deprecate(fT(MT), "use `." + MT + "` instead of `." + OT + "()`");
+ 
+               function fT(TT) {
+                 return function() {
+                   var kT = this[TT];
+                   return "function" == typeof kT ? kT.apply(this, arguments) : kT
+                 }
+               }
```

#### 195. `bundles/bloxd.io/main.js` (Changed code · before: `L2585-L2592` → after: `L5368-L5376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5368-L5376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5368-L5376) · [Before (L2585-L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2585-L2592)

```diff
-             assign: hv
-           };
-           zv.Children = {
-             map: Kv,
-             forEach: function(vv, zv, Pv) {
-               Kv(vv, (function() {
-                 zv.apply(this, arguments)
-               }), Pv)
+             bufferFrom: AT,
+             capitalize: CT,
+             copyOwnProperties: function(TT, kT, cT) {
+               var lT, MT, KT, OT = Object.getOwnPropertyNames(TT);
+               for (lT = 0, MT = OT.length; lT < MT; lT++)
+                 if (KT = OT[lT], !kT.hasOwnProperty(KT) || cT) {
+                   var yT = Object.getOwnPropertyDescriptor(TT, KT);
+                   Object.defineProperty(kT, KT, yT)
+                 } return kT
```

#### 196. `bundles/bloxd.io/main.js` (Changed code · before: `L2594-L2598` → after: `L5378-L5381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5378-L5381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5378-L5381) · [Before (L2594-L2598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2594-L2598)

```diff
-             count: function(vv) {
-               var zv = 0;
-               return Kv(vv, (function() {
-                 zv++
-               })), zv
+             getHash: function(TT, kT) {
+               kT = kT || "md5";
+               var cT = MT.createHash(kT);
+               return cT.end(TT), cT.read()
```

#### 197. `bundles/bloxd.io/main.js` (Changed code · before: `L2600-L2601` → after: `L5383-L5400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5383-L5400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5383-L5400) · [Before (L2600-L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2600-L2601)

```diff
-             toArray: function(vv) {
-               return Kv(vv, (function(vv) {
+             compare: function(TT, kT) {
+               return TT === kT ? 0 : TT < kT ? -1 : 1
+             },
+             getOption: function(TT, kT, cT) {
+               var lT = TT[kT];
+               return void 0 === lT ? cT : lT
+             },
+             impliedNamespace: function(TT) {
+               var kT = /^(.*)\.[^.]+$/.exec(TT);
+               return kT ? kT[1] : void 0
+             },
+             isValidName: jT,
+             jsonEnd: function(TT, kT) {
+               kT |= 0;
+               var cT = TT.charAt(kT++);
+               if (/[\d-]/.test(cT)) {
+ ... (2 more added lines; see GitHub link above)
```

#### 198. `bundles/bloxd.io/main.js` (Changed code · before: `L2603` → after: `L5402-L5424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5402-L5424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5402-L5424) · [Before (L2603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2603)

```diff
-               })) || []
+               }
+               if (/true|null/.test(TT.slice(kT - 1, kT + 3))) return kT + 3;
+               if (/false/.test(TT.slice(kT - 1, kT + 4))) return kT + 4;
+               var lT = 0,
+                 MT = !1;
+               do {
+                 switch (cT) {
+                   case "{":
+                   case "[":
+                     MT || lT++;
+                     break;
+                   case "}":
+                   case "]":
+                     if (!MT && !--lT) return kT;
+                     break;
+                   case '"':
+ ... (7 more added lines; see GitHub link above)
```

#### 199. `bundles/bloxd.io/main.js` (Changed code · before: `L2605-L2606` → after: `L5426-L5439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5426-L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5426-L5439) · [Before (L2605-L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2605-L2606)

```diff
-             only: function(vv) {
-               if (!Yv(vv)) throw Error(wv(143));
+             newBuffer: IT,
+             objectValues: function(TT) {
+               return Object.keys(TT).map((function(kT) {
+                 return TT[kT]
+               }))
+             },
+             qualify: function(TT, kT) {
+               return ~TT.indexOf(".") ? TT = TT.replace(/^\./, "") : kT && (TT = kT + "." + TT), TT.split(".").forEach((function(kT) {
+                 if (!jT(kT)) throw new Error(xT("invalid name: %j", TT))
+               })), TT
+             },
+             toMap: function(TT, kT) {
+               var cT, lT, MT = {};
+               for (cT = 0; cT < TT.length; cT++) MT[kT(lT = TT[cT])] = lT;
```

#### 200. `bundles/bloxd.io/main.js` (Changed code · before: `L2608-L2721` → after: `L5441-L5455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5441-L5455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5441-L5455) · [Before (L2608-L2721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2608-L2721)

```diff
-             }
-           }, zv.Component = Cv, zv.PureComponent = cv, zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xv, zv.cloneElement = function(vv, zv, Pv) {
-             if (null === vv || void 0 === vv) throw Error(wv(267, vv));
-             var ev = hv({}, vv.props),
-               gv = vv.key,
-               pv = vv.ref,
-               dv = vv._owner;
-             if (null != zv) {
-               if (void 0 !== zv.ref && (pv = zv.ref, dv = mv.current), void 0 !== zv.key && (gv = "" + zv.key), vv.type && vv.type.defaultProps) var Nv = vv.type.defaultProps;
-               for (lv in zv) jv.call(zv, lv) && !fv.hasOwnProperty(lv) && (ev[lv] = void 0 === zv[lv] && void 0 !== Nv ? Nv[lv] : zv[lv])
-             }
-             var lv = arguments.length - 2;
-             if (1 === lv) ev.children = Pv;
-             else if (1 < lv) {
-               Nv = Array(lv);
-               for (var Tv = 0; Tv < lv; Tv++) Nv[Tv] = arguments[Tv + 2];
- ... (98 more removed lines; see GitHub link above)
+             },
+             singleIndexOf: function(TT, kT) {
+               var cT, lT, MT = -1;
+               if (!TT) return -1;
+               for (cT = 0, lT = TT.length; cT < lT; cT++)
+                 if (TT[cT] === kT) {
+                   if (MT >= 0) return -2;
+                   MT = cT
+                 } return MT
+             },
+             hasDuplicates: function(TT, kT) {
+               var cT, lT, MT, KT = Object.create(null);
+               for (cT = 0, lT = TT.length; cT < lT; cT++) {
+                 if (MT = TT[cT], kT && (MT = kT(MT)), KT[MT]) return !0;
+                 KT[MT] = !0
```

#### 201. `bundles/bloxd.io/main.js` (Changed code · before: `L2723` → after: `L5457-L5486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5457-L5486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5457-L5486) · [Before (L2723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2723)

```diff
-             }
+               return !1
+             },
+             unqualify: function(TT) {
+               var kT = TT.split(".");
+               return kT[kT.length - 1]
+             },
+             BufferPool: vT,
+             Lcg: tT,
+             OrderedQueue: hT,
+             Tap: NT
+           }
+         },
+         3721: (TT, kT) => {
+           kT.byteLength = function(TT) {
+             var kT = yT(TT),
+               cT = kT[0],
+ ... (14 more added lines; see GitHub link above)
```

#### 202. `bundles/bloxd.io/main.js` (Changed code · before: `L2725-L2737` → after: `L5488-L5493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5488-L5493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5488-L5493) · [Before (L2725-L2737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2725-L2737)

```diff
-           }
-         }, , , , , (vv, zv, Pv) => {
-           ! function vv() {
-             if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
-               __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vv)
-             } catch (zv) {
-               console.error(zv)
-             }
-           }(), vv.exports = Pv(65)
-         }, , , (vv, zv, Pv) => {
-           var hv = Pv(52),
-             Sv = Pv(57),
-             ev = Pv(69);
+           }, kT.fromByteArray = function(TT) {
+             for (var kT, lT = TT.length, MT = lT % 3, KT = [], OT = 16383, yT = 0, xT = lT - MT; yT < xT; yT += OT) KT.push(fT(TT, yT, yT + OT > xT ? xT : yT + OT));
+             1 === MT ? (kT = TT[lT - 1], KT.push(cT[kT >> 2] + cT[kT << 4 & 63] + "==")) : 2 === MT && (kT = (TT[lT - 2] << 8) + TT[lT - 1], KT.push(cT[kT >> 10] + cT[kT >> 4 & 63] + cT[kT << 2 & 63] + "="));
+             return KT.join("")
+           };
+           for (var cT = [], lT = [], MT = "undefined" !== typeof Uint8Array ? Uint8Array : Array, KT = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", OT = 0; OT < 64; ++OT) cT[OT] = KT[OT], lT[KT.charCodeAt(OT)] = OT;
```

#### 203. `bundles/bloxd.io/main.js` (Changed code · before: `L2740-L2761` → after: `L5496-L5499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5496-L5499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5496-L5499) · [Before (L2740-L2761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2740-L2761)

```diff
-             for (var zv = "https://reactjs.org/docs/error-decoder.html?invariant=" + vv, Pv = 1; Pv < arguments.length; Pv++) zv += "&args[]=" + encodeURIComponent(arguments[Pv]);
-             return "Minified React error #" + vv + "; visit " + zv + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
-           }
-           if (!hv) throw Error(gv(227));
-           var pv = new Set,
-             dv = {};
- 
-           function Nv(vv, zv) {
-             lv(vv, zv), lv(vv + "Capture", zv)
-           }
- 
-           function lv(vv, zv) {
-             for (dv[vv] = zv, vv = 0; vv < zv.length; vv++) pv.add(zv[vv])
-           }
-           var Tv = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
-             Wv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\ … [truncated]
- ... (6 more removed lines; see GitHub link above)
+             var kT = TT.length;
+             if (kT % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
+             var cT = TT.indexOf("=");
+             return -1 === cT && (cT = kT), [cT, cT === kT ? 0 : 4 - cT % 4]
```

#### 204. `bundles/bloxd.io/main.js` (Changed code · before: `L2791-L2792` → after: `L5502-L5504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5502-L5504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5502-L5504) · [Before (L2791-L2792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2791-L2792)

```diff
-           function Gv(vv) {
-             return vv[1].toUpperCase()
+           function fT(TT, kT, lT) {
+             for (var MT, KT, OT = [], yT = kT; yT < lT; yT += 3) MT = (TT[yT] << 16 & 16711680) + (TT[yT + 1] << 8 & 65280) + (255 & TT[yT + 2]), OT.push(cT[(KT = MT) >> 18 & 63] + cT[KT >> 12 & 63] + cT[KT >> 6 & 63] + cT[63 & KT]);
+             return OT.join("")
```

#### 205. `bundles/bloxd.io/main.js` (Changed code · before: `L2795-L2873` → after: `L5512-L5519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5512-L5519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5512-L5519) · [Before (L2795-L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2795-L2873)

```diff
-           function mv(vv, zv, Pv, hv) {
-             var Sv = iv.hasOwnProperty(zv) ? iv[zv] : null;
-             (null !== Sv ? 0 === Sv.type : !hv && (2 < zv.length && ("o" === zv[0] || "O" === zv[0]) && ("n" === zv[1] || "N" === zv[1]))) || (function(vv, zv, Pv, hv) {
-               if (null === zv || "undefined" === typeof zv || function(vv, zv, Pv, hv) {
-                   if (null !== Pv && 0 === Pv.type) return !1;
-                   switch (typeof zv) {
-                     case "function":
-                     case "symbol":
-                       return !0;
-                     case "boolean":
-                       return !hv && (null !== Pv ? !Pv.acceptsBooleans : "data-" !== (vv = vv.toLowerCase().slice(0, 5)) && "aria-" !== vv);
-                     default:
-                       return !1
-                   }
-                 }(vv, zv, Pv, hv)) return !0;
-               if (hv) return !1;
- ... (63 more removed lines; see GitHub link above)
+             function cT(lT) {
+               if (kT[lT]) return kT[lT].exports;
+               var MT = kT[lT] = {
+                 i: lT,
+                 l: !1,
+                 exports: {}
+               };
+               return TT[lT].call(MT.exports, MT, MT.exports, cT), MT.l = !0, MT.exports
```

#### 206. `bundles/bloxd.io/main.js` (Changed code · before: `L2875-L2890` → after: `L5521-L5590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5521-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5521-L5590) · [Before (L2875-L2890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2875-L2890)

```diff
-             return "\n" + Hv + vv
-           }
-           var Jv = !1;
- 
-           function Ev(vv, zv) {
-             if (!vv || Jv) return "";
-             Jv = !0;
-             var Pv = Error.prepareStackTrace;
-             Error.prepareStackTrace = void 0;
-             try {
-               if (zv)
-                 if (zv = function() {
-                     throw Error()
-                   }, Object.defineProperty(zv.prototype, "props", {
-                     set: function() {
-                       throw Error()
+             return cT.m = TT, cT.c = kT, cT.d = function(TT, kT, lT) {
+               cT.o(TT, kT) || Object.defineProperty(TT, kT, {
+                 enumerable: !0,
+                 get: lT
+               })
+             }, cT.r = function(TT) {
+               "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(TT, Symbol.toStringTag, {
+                 value: "Module"
+               }), Object.defineProperty(TT, "__esModule", {
+                 value: !0
+               })
+             }, cT.t = function(TT, kT) {
+               if (1 & kT && (TT = cT(TT)), 8 & kT) return TT;
+               if (4 & kT && "object" == typeof TT && TT && TT.__esModule) return TT;
+               var lT = Object.create(null);
+               if (cT.r(lT), Object.defineProperty(lT, "default", {
+ ... (54 more added lines; see GitHub link above)
```

#### 207. `bundles/bloxd.io/main.js` (Changed code · before: `L2892-L3034` → after: `L5592-L5652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5592-L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5592-L5652) · [Before (L2892-L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L2892-L3034)

```diff
-                   }), "object" === typeof Reflect && Reflect.construct) {
-                   try {
-                     Reflect.construct(zv, [])
-                   } catch (dv) {
-                     var hv = dv
-                   }
-                   Reflect.construct(vv, [], zv)
-                 } else {
-                   try {
-                     zv.call()
-                   } catch (dv) {
-                     hv = dv
-                   }
-                   vv.call(zv.prototype)
-                 }
-               else {
- ... (127 more removed lines; see GitHub link above)
+                   }, TT.getMacOSVersionName = function(TT) {
+                     var kT = TT.split(".").splice(0, 2).map((function(TT) {
+                       return parseInt(TT, 10) || 0
+                     }));
+                     if (kT.push(0), 10 === kT[0]) switch (kT[1]) {
+                       case 5:
+                         return "Leopard";
+                       case 6:
+                         return "Snow Leopard";
+                       case 7:
+                         return "Lion";
+                       case 8:
+                         return "Mountain Lion";
+                       case 9:
+                         return "Mavericks";
+                       case 10:
+ ... (45 more added lines; see GitHub link above)
```

#### 208. `bundles/bloxd.io/main.js` (Changed code · before: `L3036-L3043` → after: `L5654-L5785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5654-L5785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5654-L5785) · [Before (L3036-L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L3036-L3043)

```diff
-                   },
-                   setValue: function(vv) {
-                     hv = "" + vv
-                   },
-                   stopTracking: function() {
-                     vv._valueTracker = null, delete vv[zv]
-                   }
-                 }
+                   }, TT.find = function(TT, kT) {
+                     var cT, lT;
+                     if (Array.prototype.find) return Array.prototype.find.call(TT, kT);
+                     for (cT = 0, lT = TT.length; cT < lT; cT += 1) {
+                       var MT = TT[cT];
+                       if (kT(MT, cT)) return MT
+                     }
+                   }, TT.assign = function(TT) {
+                     for (var kT, cT, lT = TT, MT = arguments.length, KT = new Array(MT > 1 ? MT - 1 : 0), OT = 1; OT < MT; OT++) KT[OT - 1] = arguments[OT];
+                     if (Object.assign) return Object.assign.apply(Object, [TT].concat(KT));
+                     var yT = function() {
+                       var TT = KT[kT];
+                       "object" == typeof TT && null !== TT && Object.keys(TT).forEach((function(kT) {
+                         lT[kT] = TT[kT]
+                       }))
+                     };
+ ... (116 more added lines; see GitHub link above)
```

#### 209. `bundles/bloxd.io/main.js` (Changed code · before: `L3045-L3046` → after: `L5787-L5793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5787-L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5787-L5793) · [Before (L3045-L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L3045-L3046)

```diff
-             }(vv))
-           }
+             },
+             90: function(TT, kT, cT) {
+               kT.__esModule = !0, kT.default = void 0;
+               var lT, MT = (lT = cT(91)) && lT.__esModule ? lT : {
+                   default: lT
+                 },
+                 KT = cT(18);
```

#### 210. `bundles/bloxd.io/main.js` (Changed code · before: `L3048-L3153` → after: `L5795-L5798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5795-L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5795-L5798) · [Before (L3048-L3153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L3048-L3153)

```diff
-           function uv(vv) {
-             if (!vv) return !1;
-             var zv = vv._valueTracker;
-             if (!zv) return !0;
-             var Pv = zv.getValue(),
-               hv = "";
-             return vv && (hv = kv(vv) ? vv.checked ? "true" : "false" : vv.value), (vv = hv) !== Pv && (zv.setValue(vv), !0)
-           }
- 
-           function vz(vv) {
-             if ("undefined" === typeof(vv = vv || ("undefined" !== typeof document ? document : void 0))) return null;
-             try {
-               return vv.activeElement || vv.body
-             } catch (zv) {
-               return vv.body
-             }
- ... (90 more removed lines; see GitHub link above)
+               function OT(TT, kT) {
+                 for (var cT = 0; cT < kT.length; cT++) {
+                   var lT = kT[cT];
+                   lT.enumerable = lT.enumerable || !1, lT.configurable = !0, "value" in lT && (lT.writable = !0), Object.defineProperty(TT, lT.key, lT)
```

#### 211. `bundles/bloxd.io/main.js` (Changed code · before: `L3157-L3252` → after: `L5801-L5831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5801-L5831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5801-L5831) · [Before (L3157-L3252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L3157-L3252)

```diff
-               null == zv && (zv = ""), Pv = zv
-             }
-             vv._wrapperState = {
-               initialValue: rv(Pv)
-             }
-           }
- 
-           function Tz(vv, zv) {
-             var Pv = rv(zv.value),
-               hv = rv(zv.defaultValue);
-             null != Pv && ((Pv = "" + Pv) !== vv.value && (vv.value = Pv), null == zv.defaultValue && vv.defaultValue !== Pv && (vv.defaultValue = Pv)), null != hv && (vv.defaultValue = "" + hv)
-           }
- 
-           function Wz(vv) {
-             var zv = vv.textContent;
-             zv === vv._wrapperState.initialValue && "" !== zv && null !== zv && (vv.value = zv)
- ... (80 more removed lines; see GitHub link above)
+               var yT = function() {
+                 function TT() {}
+                 var kT, cT, lT;
+                 return TT.getParser = function(TT, kT) {
+                   if (void 0 === kT && (kT = !1), "string" != typeof TT) throw new Error("UserAgent should be a string");
+                   return new MT.default(TT, kT)
+                 }, TT.parse = function(TT) {
+                   return new MT.default(TT).getResult()
+                 }, kT = TT, lT = [{
+                   key: "BROWSER_MAP",
+                   get: function() {
+                     return KT.BROWSER_MAP
+                   }
+                 }, {
+                   key: "ENGINE_MAP",
+                   get: function() {
+ ... (15 more added lines; see GitHub link above)
```

#### 212. `bundles/bloxd.io/main.js` (Changed code · before: `L3254-L3258` → after: `L5833-L5839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5833-L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5833-L5839) · [Before (L3254-L3258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L3254-L3258)

```diff
-             fz = ["Webkit", "ms", "Moz", "O"];
- 
-           function Fz(vv, zv, Pv) {
-             return null == zv || "boolean" === typeof zv || "" === zv ? "" : Pv || "number" !== typeof zv || 0 === zv || jz.hasOwnProperty(vv) && jz[vv] ? ("" + zv).trim() : zv + "px"
-           }
+             91: function(TT, kT, cT) {
+               kT.__esModule = !0, kT.default = void 0;
+               var lT = fT(cT(92)),
+                 MT = fT(cT(93)),
+                 KT = fT(cT(94)),
+                 OT = fT(cT(95)),
+                 yT = fT(cT(17));
```

#### 213. `bundles/bloxd.io/main.js` (Changed code · before: `L3260-L3265` → after: `L5841-L5844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5841-L5844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5841-L5844) · [Before (L3260-L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L3260-L3265)

```diff
-           function Yz(vv, zv) {
-             for (var Pv in vv = vv.style, zv)
-               if (zv.hasOwnProperty(Pv)) {
-                 var hv = 0 === Pv.indexOf("--"),
-                   Sv = Fz(Pv, zv[Pv], hv);
-                 "float" === Pv && (Pv = "cssFloat"), hv ? vv.setProperty(Pv, Sv) : vv[Pv] = Sv
+               function fT(TT) {
+                 return TT && TT.__esModule ? TT : {
+                   default: TT
+                 }
```

#### 214. `bundles/bloxd.io/main.js` (Changed code · before: `L3267-L3519` → after: `L5846-L5849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5846-L5849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5846-L5849) · [Before (L3267-L3519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L3267-L3519)

```diff
-           }
-           Object.keys(jz).forEach((function(vv) {
-             fz.forEach((function(zv) {
-               zv = zv + vv.charAt(0).toUpperCase() + vv.substring(1), jz[zv] = jz[vv]
-             }))
-           }));
-           var nz = Sv({
-             menuitem: !0
-           }, {
-             area: !0,
-             base: !0,
-             br: !0,
-             col: !0,
-             embed: !0,
-             hr: !0,
-             img: !0,
- ... (237 more removed lines; see GitHub link above)
+               var xT = function() {
+                 function TT(TT, kT) {
+                   if (void 0 === kT && (kT = !1), null == TT || "" === TT) throw new Error("UserAgent parameter can't be empty");
+                   this._ua = TT, this.parsedResult = {}, !0 !== kT && this.parse()
```

#### 215. `bundles/bloxd.io/main.js` (Changed code · before: `L3521-L3591` → after: `L5851-L5983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5851-L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5851-L5983) · [Before (L3521-L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L3521-L3591)

```diff
-                 zv.sibling.return = zv.return, zv = zv.sibling
-               }
-             }
-             return null
-           }
- 
-           function SP(vv, zv) {
-             for (var Pv = vv.alternate; null !== zv;) {
-               if (zv === vv || zv === Pv) return !0;
-               zv = zv.return
-             }
-             return !1
-           }
-           var eP, gP, pP, dP, NP = !1,
-             lP = [],
-             TP = null,
- ... (55 more removed lines; see GitHub link above)
+                 var kT = TT.prototype;
+                 return kT.getUA = function() {
+                   return this._ua
+                 }, kT.test = function(TT) {
+                   return TT.test(this._ua)
+                 }, kT.parseBrowser = function() {
+                   var TT = this;
+                   this.parsedResult.browser = {};
+                   var kT = yT.default.find(lT.default, (function(kT) {
+                     if ("function" == typeof kT.test) return kT.test(TT);
+                     if (kT.test instanceof Array) return kT.test.some((function(kT) {
+                       return TT.test(kT)
+                     }));
+                     throw new Error("Browser's test function is not valid")
+                   }));
+                   return kT && (this.parsedResult.browser = kT.describe(this.getUA())), this.parsedResult.browser
+ ... (117 more added lines; see GitHub link above)
```

#### 216. `bundles/bloxd.io/main.js` (Changed code · before: `L3593-L3758` → after: `L5985-L5987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5985-L5987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5985-L5987) · [Before (L3593-L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L3593-L3758)

```diff
-                 } else if (3 === zv && Pv.stateNode.hydrate) return void(vv.blockedOn = 3 === Pv.tag ? Pv.stateNode.containerInfo : null)
-             }
-             vv.blockedOn = null
-           }
- 
-           function fP(vv) {
-             if (null !== vv.blockedOn) return !1;
-             for (var zv = vv.targetContainers; 0 < zv.length;) {
-               var Pv = eh(vv.domEventName, vv.eventSystemFlags, zv[0], vv.nativeEvent);
-               if (null !== Pv) return null !== (zv = We(Pv)) && gP(zv), vv.blockedOn = Pv, !1;
-               zv.shift()
-             }
-             return !0
-           }
- 
-           function FP(vv, zv, Pv) {
- ... (150 more removed lines; see GitHub link above)
+                 }, TT
+               }();
+               kT.default = xT, TT.exports = kT.default
```

#### 217. `bundles/bloxd.io/main.js` (Changed code · before: `L3760-L3808` → after: `L5989-L6002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5989-L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L5989-L6002) · [Before (L3760-L3808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L3760-L3808)

```diff
-             kP = Math.log,
-             XP = Math.LN2;
-           var uP = ev.unstable_UserBlockingPriority,
-             vh = ev.unstable_runWithPriority,
-             zh = !0;
- 
-           function Ph(vv, zv, Pv, hv) {
-             Lz || Zz();
-             var Sv = Sh,
-               ev = Lz;
-             Lz = !0;
-             try {
-               Qz(Sv, vv, zv, Pv, hv)
-             } finally {
-               (Lz = ev) || Mz()
-             }
- ... (33 more removed lines; see GitHub link above)
+             92: function(TT, kT, cT) {
+               kT.__esModule = !0, kT.default = void 0;
+               var lT, MT = (lT = cT(17)) && lT.__esModule ? lT : {
+                   default: lT
+                 },
+                 KT = /version\/(\d+(\.?_?\d+)+)/i,
+                 OT = [{
+                   test: [/googlebot/i],
+                   describe: function(TT) {
+                     var kT = {
+                         name: "Googlebot"
+                       },
+                       cT = MT.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, TT) || MT.default.getFirstMatch(KT, TT);
+                     return cT && (kT.version = cT), kT
```

#### 218. `bundles/bloxd.io/main.js` (Changed code · before: `L3810-L3912` → after: `L6004-L8139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6004-L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L6004-L8139) · [Before (L3810-L3912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L3810-L3912)

```diff
-                   yS(vv, zv, hv, null, Pv)
-                 }
-               }
-           }
- 
-           function eh(vv, zv, Pv, hv) {
-             var Sv = Kz(hv);
-             if (null !== (Sv = Te(Sv))) {
-               var ev = vP(Sv);
-               if (null === ev) Sv = null;
-               else {
-                 var gv = ev.tag;
-                 if (13 === gv) {
-                   if (null !== (Sv = zP(ev))) return Sv;
-                   Sv = null
-                 } else if (3 === gv) {
- ... (87 more removed lines; see GitHub link above)
+                 }, {
+                   test: [/opera/i],
+                   describe: function(TT) {
+                     var kT = {
+                         name: "Opera"
+                       },
+                       cT = MT.default.getFirstMatch(KT, TT) || MT.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, TT);
+                     return cT && (kT.version = cT), kT
+                   }
+                 }, {
+                   test: [/opr\/|opios/i],
+                   describe: function(TT) {
+                     var kT = {
+                         name: "Opera"
+                       },
+                       cT = MT.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, TT) || MT.default.getFirstMatch(KT, TT);
+ ... (2120 more added lines; see GitHub link above)
```

#### 219. `bundles/bloxd.io/main.js` (Changed code · before: `L3914-L3915` → after: `L8141-L8573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8141-L8573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L8141-L8573) · [Before (L3914-L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L3914-L3915)

```diff
-               movementX: function(vv) {
-                 return "movementX" in vv ? vv.movementX : (vv !== Ch && (Ch && "mousemove" === vv.type ? (ah = vv.screenX - Ch.screenX, sh = vv.screenY - Ch.screenY) : sh = ah = 0, Ch = vv), ah)
+               kT = {};
+             return function(cT, lT, MT) {
+               var KT, OT = function(TT, cT, lT) {
+                   void 0 === lT && (lT = {});
+                   var MT = new Date(TT),
+                     KT = function(TT, cT) {
+                       void 0 === cT && (cT = {});
+                       var lT = cT.timeZoneName || "short",
+                         MT = TT + "|" + lT,
+                         KT = kT[MT];
+                       return KT || (KT = new Intl.DateTimeFormat("en-US", {
+                         hour12: !1,
+                         timeZone: TT,
+                         year: "numeric",
+                         month: "2-digit",
+                         day: "2-digit",
+ ... (417 more added lines; see GitHub link above)
```

#### 220. `bundles/bloxd.io/main.js` (Changed code · before: `L3917-L3918` → after: `L8575-L8708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8575-L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L8575-L8708) · [Before (L3917-L3918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L3917-L3918)

```diff
-               movementY: function(vv) {
-                 return "movementY" in vv ? vv.movementY : sh
+               MT = IT.bind(lT);
+             return MT.listener = cT, lT.wrapFn = MT, MT
+           }
+ 
+           function CT(TT, kT, cT) {
+             var lT = TT._events;
+             if (void 0 === lT) return [];
+             var MT = lT[kT];
+             return void 0 === MT ? [] : "function" === typeof MT ? cT ? [MT.listener || MT] : [MT] : cT ? function(TT) {
+               for (var kT = new Array(TT.length), cT = 0; cT < kT.length; ++cT) kT[cT] = TT[cT].listener || TT[cT];
+               return kT
+             }(MT) : vT(MT, MT.length)
+           }
+ 
+           function jT(TT) {
+             var kT = this._events;
+ ... (118 more added lines; see GitHub link above)
```

#### 221. `bundles/bloxd.io/main.js` (Changed code · before: `L3920-L3935` → after: `L8710-L8718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8710-L8718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L8710-L8718) · [Before (L3920-L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L3920-L3935)

```diff
-             }),
-             fh = wh(jh),
-             Fh = wh(Sv({}, jh, {
-               dataTransfer: 0
-             })),
-             Yh = wh(Sv({}, Gh, {
-               relatedTarget: 0
-             })),
-             nh = wh(Sv({}, ih, {
-               animationName: 0,
-               elapsedTime: 0,
-               pseudoElement: 0
-             })),
-             Oh = Sv({}, ih, {
-               clipboardData: function(vv) {
-                 return "clipboardData" in vv ? vv.clipboardData : window.clipboardData
+               if (kT.constructor === RegExp) return kT.source === cT.source && kT.flags === cT.flags;
+               if (kT.valueOf !== Object.prototype.valueOf) return kT.valueOf() === cT.valueOf();
+               if (kT.toString !== Object.prototype.toString) return kT.toString() === cT.toString();
+               if ((lT = (KT = Object.keys(kT)).length) !== Object.keys(cT).length) return !1;
+               for (MT = lT; 0 !== MT--;)
+                 if (!Object.prototype.hasOwnProperty.call(cT, KT[MT])) return !1;
+               for (MT = lT; 0 !== MT--;) {
+                 var OT = KT[MT];
+                 if (!TT(kT[OT], cT[OT])) return !1
```

#### 222. `bundles/bloxd.io/main.js` (Changed code · before: `L3937-L3954` → after: `L8720-L8801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8720-L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L8720-L8801) · [Before (L3937-L3954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L3937-L3954)

```diff
-             }),
-             Dh = wh(Oh),
-             Kh = wh(Sv({}, ih, {
-               data: 0
-             })),
-             Vh = {
-               Esc: "Escape",
-               Spacebar: " ",
-               Left: "ArrowLeft",
-               Up: "ArrowUp",
-               Right: "ArrowRight",
-               Down: "ArrowDown",
-               Del: "Delete",
-               Win: "OS",
-               Menu: "ContextMenu",
-               Apps: "ContextMenu",
- ... (2 more removed lines; see GitHub link above)
+               return !0
+             }
+             return kT !== kT && cT !== cT
+           }
+         },
+         4047: (TT, kT, cT) => {
+           var lT = cT(4051),
+             MT = Object.prototype.toString,
+             KT = Object.prototype.hasOwnProperty;
+           TT.exports = function(TT, kT, cT) {
+             if (!lT(kT)) throw new TypeError("iterator must be a function");
+             var OT, yT;
+             arguments.length >= 3 && (OT = cT), yT = TT, "[object Array]" === MT.call(yT) ? function(TT, kT, cT) {
+               for (var lT = 0, MT = TT.length; lT < MT; lT++) KT.call(TT, lT) && (null == cT ? kT(TT[lT], lT, TT) : kT.call(cT, TT[lT], lT, TT))
+             }(TT, kT, OT) : "string" === typeof TT ? function(TT, kT, cT) {
+               for (var lT = 0, MT = TT.length; lT < MT; lT++) null == cT ? kT(TT.charAt(lT), lT, TT) : kT.call(cT, TT.charAt(lT), lT, TT)
+ ... (66 more added lines; see GitHub link above)
```

#### 223. `bundles/bloxd.io/main.js` (Changed code · before: `L3957-L3992` → after: `L8823-L8923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8823-L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L8823-L8923) · [Before (L3957-L3992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L3957-L3992)

```diff
-               8: "Backspace",
-               9: "Tab",
-               12: "Clear",
-               13: "Enter",
-               16: "Shift",
-               17: "Control",
-               18: "Alt",
-               19: "Pause",
-               20: "CapsLock",
-               27: "Escape",
-               32: " ",
-               33: "PageUp",
-               34: "PageDown",
-               35: "End",
-               36: "Home",
-               37: "ArrowLeft",
- ... (20 more removed lines; see GitHub link above)
+               __proto__: null,
+               "%AggregateError%": "undefined" === typeof AggregateError ? lT : AggregateError,
+               "%Array%": Array,
+               "%ArrayBuffer%": "undefined" === typeof ArrayBuffer ? lT : ArrayBuffer,
+               "%ArrayIteratorPrototype%": wT && mT ? mT([][Symbol.iterator]()) : lT,
+               "%AsyncFromSyncIteratorPrototype%": lT,
+               "%AsyncFunction%": HT,
+               "%AsyncGenerator%": HT,
+               "%AsyncGeneratorFunction%": HT,
+               "%AsyncIteratorPrototype%": HT,
+               "%Atomics%": "undefined" === typeof Atomics ? lT : Atomics,
+               "%BigInt%": "undefined" === typeof BigInt ? lT : BigInt,
+               "%BigInt64Array%": "undefined" === typeof BigInt64Array ? lT : BigInt64Array,
+               "%BigUint64Array%": "undefined" === typeof BigUint64Array ? lT : BigUint64Array,
+               "%Boolean%": Boolean,
+               "%DataView%": "undefined" === typeof DataView ? lT : DataView,
+ ... (85 more added lines; see GitHub link above)
```

#### 224. `bundles/bloxd.io/main.js` (Changed code · before: `L3995-L3998` → after: `L8926-L8999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8926-L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L8926-L8999) · [Before (L3995-L3998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L3995-L3998)

```diff
-               Alt: "altKey",
-               Control: "ctrlKey",
-               Meta: "metaKey",
-               Shift: "shiftKey"
+               __proto__: null,
+               "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
+               "%ArrayPrototype%": ["Array", "prototype"],
+               "%ArrayProto_entries%": ["Array", "prototype", "entries"],
+               "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
+               "%ArrayProto_keys%": ["Array", "prototype", "keys"],
+               "%ArrayProto_values%": ["Array", "prototype", "values"],
+               "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
+               "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
+               "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
+               "%BooleanPrototype%": ["Boolean", "prototype"],
+               "%DataViewPrototype%": ["DataView", "prototype"],
+               "%DatePrototype%": ["Date", "prototype"],
+               "%ErrorPrototype%": ["Error", "prototype"],
+               "%EvalErrorPrototype%": ["EvalError", "prototype"],
+               "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
+ ... (58 more added lines; see GitHub link above)
```

#### 225. `bundles/bloxd.io/main.js` (Changed code · before: `L4000-L4003` → after: `L9001-L9134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9001-L9134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9001-L9134) · [Before (L4000-L4003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4000-L4003)

```diff
- 
-           function xh(vv) {
-             var zv = this.nativeEvent;
-             return zv.getModifierState ? zv.getModifierState(vv) : !!(vv = Rh[vv]) && !!zv[vv]
+           TT.exports = function(TT, kT) {
+             if ("string" !== typeof TT || 0 === TT.length) throw new IT("intrinsic name must be a non-empty string");
+             if (arguments.length > 1 && "boolean" !== typeof kT) throw new IT('"allowMissing" argument must be a boolean');
+             if (null === UT(/^%?[^%]*%?$/, TT)) throw new xT("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
+             var cT = function(TT) {
+                 var kT = gT(TT, 0, 1),
+                   cT = gT(TT, -1);
+                 if ("%" === kT && "%" !== cT) throw new xT("invalid intrinsic syntax, expected closing `%`");
+                 if ("%" === cT && "%" !== kT) throw new xT("invalid intrinsic syntax, expected opening `%`");
+                 var lT = [];
+                 return RT(TT, YT, (function(TT, kT, cT, MT) {
+                   lT[lT.length] = cT ? RT(MT, BT, "$1") : kT || TT
+                 })), lT
+               }(TT),
+               lT = cT.length > 0 ? cT[0] : "",
+               MT = WT("%" + lT + "%", kT),
+ ... (118 more added lines; see GitHub link above)
```

#### 226. `bundles/bloxd.io/main.js` (Changed code · before: `L4005-L4006` → after: `L9136-L9168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9136-L9168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9136-L9168) · [Before (L4005-L4006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4005-L4006)

```diff
- 
-           function th() {
+         },
+         361: TT => {
+           TT.exports = 1e-6
+         },
+         393: (TT, kT, cT) => {
+           TT.exports = function(TT, kT) {
+             var cT = TT[0],
+               MT = TT[1],
+               KT = TT[2],
+               OT = kT[0],
+               yT = kT[1],
+               fT = kT[2];
+             return Math.abs(cT - OT) <= lT * Math.max(1, Math.abs(cT), Math.abs(OT)) && Math.abs(MT - yT) <= lT * Math.max(1, Math.abs(MT), Math.abs(yT)) && Math.abs(KT - fT) <= lT * Math.max(1, Math.abs(KT), Math.abs(fT))
+           };
+           var lT = cT(361)
+         },
+ ... (17 more added lines; see GitHub link above)
```

#### 227. `bundles/bloxd.io/main.js` (Changed code · before: `L4009-L4096` → after: `L9178-L9232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9178-L9232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9178-L9232) · [Before (L4009-L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4009-L4096)

```diff
-           var qh = Sv({}, Gh, {
-               key: function(vv) {
-                 if (vv.key) {
-                   var zv = Vh[vv.key] || vv.key;
-                   if ("Unidentified" !== zv) return zv
-                 }
-                 return "keypress" === vv.type ? 13 === (vv = lh(vv)) ? "Enter" : String.fromCharCode(vv) : "keydown" === vv.type || "keyup" === vv.type ? Uh[vv.keyCode] || "Unidentified" : ""
-               },
-               code: 0,
-               location: 0,
-               ctrlKey: 0,
-               shiftKey: 0,
-               altKey: 0,
-               metaKey: 0,
-               repeat: 0,
-               locale: 0,
- ... (72 more removed lines; see GitHub link above)
+         },
+         350: (TT, kT, cT) => {
+           var lT = cT(356);
+           TT.exports = {
+             EPSILON: cT(361),
+             ZERO: lT(),
+             create: lT,
+             clone: cT(364),
+             angle: cT(368),
+             ck: cT(371),
+             copy: cT(383),
+             set: cT(391),
+             equals: cT(393),
+             exactEquals: cT(397),
+             add: cT(400),
+             subtract: cT(407),
+ ... (39 more added lines; see GitHub link above)
```

#### 228. `bundles/bloxd.io/main.js` (Changed code · before: `L4098-L4100` → after: `L9234-L9243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9234-L9243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9234-L9243) · [Before (L4098-L4100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4098-L4100)

```diff
- 
-           function kh(vv) {
-             return "object" === typeof(vv = vv.detail) && "data" in vv ? vv.data : null
+         },
+         505: (TT, kT, cT) => {
+           TT.exports = cT(500)
+         },
+         500: TT => {
+           TT.exports = function(TT) {
+             var kT = TT[0],
+               cT = TT[1],
+               lT = TT[2];
+             return Math.sqrt(kT * kT + cT * cT + lT * lT)
```

#### 229. `bundles/bloxd.io/main.js` (Changed code · before: `L4102-L4123` → after: `L9245-L9251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9245-L9251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9245-L9251) · [Before (L4102-L4123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4102-L4123)

```diff
-           var Xh = !1;
-           var uh = {
-             color: !0,
-             date: !0,
-             datetime: !0,
-             "datetime-local": !0,
-             email: !0,
-             month: !0,
-             number: !0,
-             password: !0,
-             range: !0,
-             search: !0,
-             tel: !0,
-             text: !0,
-             time: !0,
-             url: !0,
- ... (6 more removed lines; see GitHub link above)
+         },
+         538: TT => {
+           TT.exports = function(TT, kT, cT, lT) {
+             var MT = kT[0],
+               KT = kT[1],
+               OT = kT[2];
+             return TT[0] = MT + lT * (cT[0] - MT), TT[1] = KT + lT * (cT[1] - KT), TT[2] = OT + lT * (cT[2] - OT), TT
```

#### 230. `bundles/bloxd.io/main.js` (Changed code · before: `L4125-L4130` → after: `L9253-L9256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9253-L9256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9253-L9256) · [Before (L4125-L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4125-L4130)

```diff
- 
-           function zS(vv, zv, Pv, hv) {
-             tz(hv), 0 < (zv = JS(zv, "onChange")).length && (Pv = new ch("onChange", "change", null, Pv, hv), vv.push({
-               event: Pv,
-               listeners: zv
-             }))
+         },
+         450: TT => {
+           TT.exports = function(TT, kT, cT) {
+             return TT[0] = Math.max(kT[0], cT[0]), TT[1] = Math.max(kT[1], cT[1]), TT[2] = Math.max(kT[2], cT[2]), TT
```

#### 231. `bundles/bloxd.io/main.js` (Changed code · before: `L4132-L4136` → after: `L9258-L9261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9258-L9261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9258-L9261) · [Before (L4132-L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4132-L4136)

```diff
-           var PS = null,
-             hS = null;
- 
-           function SS(vv) {
-             QS(vv, 0)
+         },
+         443: TT => {
+           TT.exports = function(TT, kT, cT) {
+             return TT[0] = Math.min(kT[0], cT[0]), TT[1] = Math.min(kT[1], cT[1]), TT[2] = Math.min(kT[2], cT[2]), TT
```

#### 232. `bundles/bloxd.io/main.js` (Changed code · before: `L4138-L4140` → after: `L9263-L9269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9263-L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9263-L9269) · [Before (L4138-L4140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4138-L4140)

```diff
- 
-           function eS(vv) {
-             if (uv(we(vv))) return vv
+         },
+         430: (TT, kT, cT) => {
+           TT.exports = cT(422)
+         },
+         422: TT => {
+           TT.exports = function(TT, kT, cT) {
+             return TT[0] = kT[0] * cT[0], TT[1] = kT[1] * cT[1], TT[2] = kT[2] * cT[2], TT
```

#### 233. `bundles/bloxd.io/main.js` (Changed code · before: `L4142-L4144` → after: `L9271-L9274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9271-L9274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9271-L9274) · [Before (L4142-L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4142-L4144)

```diff
- 
-           function gS(vv, zv) {
-             if ("change" === vv) return zv
+         },
+         526: TT => {
+           TT.exports = function(TT, kT) {
+             return TT[0] = -kT[0], TT[1] = -kT[1], TT[2] = -kT[2], TT
```

#### 234. `bundles/bloxd.io/main.js` (Changed code · before: `L4146-L4157` → after: `L9276-L9368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9276-L9368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9276-L9368) · [Before (L4146-L4157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4146-L4157)

```diff
-           var pS = !1;
-           if (Tv) {
-             var dS;
-             if (Tv) {
-               var NS = "oninput" in document;
-               if (!NS) {
-                 var lS = document.createElement("div");
-                 lS.setAttribute("oninput", "return;"), NS = "function" === typeof lS.oninput
-               }
-               dS = NS
-             } else dS = !1;
-             pS = dS && (!document.documentMode || 9 < document.documentMode)
+         },
+         378: TT => {
+           TT.exports = function(TT, kT) {
+             var cT = kT[0],
+               lT = kT[1],
+               MT = kT[2],
+               KT = cT * cT + lT * lT + MT * MT;
+             KT > 0 && (KT = 1 / Math.sqrt(KT), TT[0] = kT[0] * KT, TT[1] = kT[1] * KT, TT[2] = kT[2] * KT);
+             return TT
+           }
+         },
+         545: TT => {
+           TT.exports = function(TT, kT) {
+             kT = kT || 1;
+             var cT = 2 * Math.random() * Math.PI,
+               lT = 2 * Math.random() - 1,
+ ... (77 more added lines; see GitHub link above)
```

#### 235. `bundles/bloxd.io/main.js` (Changed code · before: `L4159-L4161` → after: `L9370-L9376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9370-L9376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9370-L9376) · [Before (L4159-L4161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4159-L4161)

```diff
- 
-           function TS() {
-             PS && (PS.detachEvent("onpropertychange", WS), hS = PS = null)
+         },
+         416: (TT, kT, cT) => {
+           TT.exports = cT(407)
+         },
+         407: TT => {
+           TT.exports = function(TT, kT, cT) {
+             return TT[0] = kT[0] - cT[0], TT[1] = kT[1] - cT[1], TT[2] = kT[2] - cT[2], TT
```

#### 236. `bundles/bloxd.io/main.js` (Changed code · before: `L4163-L4176` → after: `L9378-L9384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9378-L9384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9378-L9384) · [Before (L4163-L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4163-L4176)

```diff
- 
-           function WS(vv) {
-             if ("value" === vv.propertyName && eS(hS)) {
-               var zv = [];
-               if (zS(zv, hS, vv, Kz(vv)), vv = SS, Lz) vv(zv);
-               else {
-                 Lz = !0;
-                 try {
-                   Iz(vv, zv)
-                 } finally {
-                   Lz = !1, Mz()
-                 }
-               }
-             }
+         },
+         556: TT => {
+           TT.exports = function(TT, kT, cT) {
+             var lT = kT[0],
+               MT = kT[1],
+               KT = kT[2];
+             return TT[0] = lT * cT[0] + MT * cT[3] + KT * cT[6], TT[1] = lT * cT[1] + MT * cT[4] + KT * cT[7], TT[2] = lT * cT[2] + MT * cT[5] + KT * cT[8], TT
```

#### 237. `bundles/bloxd.io/main.js` (Changed code · before: `L4178-L4180` → after: `L9386-L9393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9386-L9393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9386-L9393) · [Before (L4178-L4180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4178-L4180)

```diff
- 
-           function wS(vv, zv, Pv) {
-             "focusin" === vv ? (TS(), hS = Pv, (PS = zv).attachEvent("onpropertychange", WS)) : "focusout" === vv && TS()
+         },
+         552: TT => {
+           TT.exports = function(TT, kT, cT) {
+             var lT = kT[0],
+               MT = kT[1],
+               KT = kT[2],
+               OT = cT[3] * lT + cT[7] * MT + cT[11] * KT + cT[15];
+             return OT = OT || 1, TT[0] = (cT[0] * lT + cT[4] * MT + cT[8] * KT + cT[12]) / OT, TT[1] = (cT[1] * lT + cT[5] * MT + cT[9] * KT + cT[13]) / OT, TT[2] = (cT[2] * lT + cT[6] * MT + cT[10] * KT + cT[14]) / OT, TT
```

#### 238. `bundles/bloxd.io/main.js` (Changed code · before: `L4182-L4184` → after: `L9395-L9409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9395-L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9395-L9409) · [Before (L4182-L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4182-L4184)

```diff
- 
-           function aS(vv) {
-             if ("selectionchange" === vv || "keyup" === vv || "keydown" === vv) return eS(hS)
+         },
+         562: TT => {
+           TT.exports = function(TT, kT, cT) {
+             var lT = kT[0],
+               MT = kT[1],
+               KT = kT[2],
+               OT = cT[0],
+               yT = cT[1],
+               fT = cT[2],
+               xT = cT[3],
+               IT = xT * lT + yT * KT - fT * MT,
+               AT = xT * MT + fT * lT - OT * KT,
+               CT = xT * KT + OT * MT - yT * lT,
+               jT = -OT * lT - yT * MT - fT * KT;
+             return TT[0] = IT * xT + jT * -OT + AT * -fT - CT * -yT, TT[1] = AT * xT + jT * -yT + CT * -OT - IT * -fT, TT[2] = CT * xT + jT * -fT + IT * -yT - AT * -OT, TT
```

#### 239. `bundles/bloxd.io/main.js` (Changed code · before: `L4186-L4188` → after: `L9411-L9420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9411-L9420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9411-L9420) · [Before (L4186-L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4186-L4188)

```diff
- 
-           function sS(vv, zv) {
-             if ("click" === vv) return eS(zv)
+         },
+         3921: TT => {
+           TT.exports = Object.getOwnPropertyDescriptor
+         },
+         3913: (TT, kT, cT) => {
+           var lT = cT(3921);
+           if (lT) try {
+             lT([], "length")
+           } catch (MT) {
+             lT = null
```

#### 240. `bundles/bloxd.io/main.js` (Changed code · before: `L4190-L4192` → after: `L9422-L9444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9422-L9444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9422-L9444) · [Before (L4190-L4192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4190-L4192)

```diff
- 
-           function CS(vv, zv) {
-             if ("input" === vv || "change" === vv) return eS(zv)
+           TT.exports = lT
+         },
+         4027: (TT, kT, cT) => {
+           var lT = cT(3928),
+             MT = function() {
+               return !!lT
+             };
+           MT.hasArrayLengthDefineBug = function() {
+             if (!lT) return null;
+             try {
+               return 1 !== lT([], "length", {
+                 value: 1
+               }).length
+             } catch (TT) {
+               return !0
+             }
+ ... (7 more added lines; see GitHub link above)
```

#### 241. `bundles/bloxd.io/main.js` (Changed code · before: `L4194-L4206` → after: `L9446-L9466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9446-L9466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9446-L9466) · [Before (L4194-L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4194-L4206)

```diff
-           var iS = "function" === typeof Object.is ? Object.is : function(vv, zv) {
-               return vv === zv && (0 !== vv || 1 / vv === 1 / zv) || vv !== vv && zv !== zv
-             },
-             cS = Object.prototype.hasOwnProperty;
- 
-           function GS(vv, zv) {
-             if (iS(vv, zv)) return !0;
-             if ("object" !== typeof vv || null === vv || "object" !== typeof zv || null === zv) return !1;
-             var Pv = Object.keys(vv),
-               hv = Object.keys(zv);
-             if (Pv.length !== hv.length) return !1;
-             for (hv = 0; hv < Pv.length; hv++)
-               if (!cS.call(zv, Pv[hv]) || !iS(vv[Pv[hv]], zv[Pv[hv]])) return !1;
+         },
+         3790: TT => {
+           TT.exports = function() {
+             if ("function" !== typeof Symbol || "function" !== typeof Object.getOwnPropertySymbols) return !1;
+             if ("symbol" === typeof Symbol.iterator) return !0;
+             var TT = {},
+               kT = Symbol("test"),
+               cT = Object(kT);
+             if ("string" === typeof kT) return !1;
+             if ("[object Symbol]" !== Object.prototype.toString.call(kT)) return !1;
+             if ("[object Symbol]" !== Object.prototype.toString.call(cT)) return !1;
+             for (var lT in TT[kT] = 42, TT) return !1;
+             if ("function" === typeof Object.keys && 0 !== Object.keys(TT).length) return !1;
+             if ("function" === typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(TT).length) return !1;
+             var MT = Object.getOwnPropertySymbols(TT);
+             if (1 !== MT.length || MT[0] !== kT) return !1;
+ ... (5 more added lines; see GitHub link above)
```

#### 242. `bundles/bloxd.io/main.js` (Changed code · before: `L4209-L4212` → after: `L9469-L9473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9469-L9473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9469-L9473) · [Before (L4209-L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4209-L4212)

```diff
- 
-           function mS(vv) {
-             for (; vv && vv.firstChild;) vv = vv.firstChild;
-             return vv
+         },
+         3785: (TT, kT, cT) => {
+           var lT = cT(3790);
+           TT.exports = function() {
+             return lT() && !!Symbol.toStringTag
```

#### 243. `bundles/bloxd.io/main.js` (Changed code · before: `L4214-L4233` → after: `L9475-L9519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9475-L9519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9475-L9519) · [Before (L4214-L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4214-L4233)

```diff
- 
-           function jS(vv, zv) {
-             var Pv, hv = mS(vv);
-             for (vv = 0; hv;) {
-               if (3 === hv.nodeType) {
-                 if (Pv = vv + hv.textContent.length, vv <= zv && Pv >= zv) return {
-                   node: hv,
-                   offset: zv - vv
-                 };
-                 vv = Pv
-               }
-               vv: {
-                 for (; hv;) {
-                   if (hv.nextSibling) {
-                     hv = hv.nextSibling;
-                     break vv
- ... (4 more removed lines; see GitHub link above)
+         },
+         4003: (TT, kT, cT) => {
+           var lT = Function.prototype.call,
+             MT = Object.prototype.hasOwnProperty,
+             KT = cT(3970);
+           TT.exports = KT.call(lT, MT)
+         },
+         3728: (TT, kT) => {
+           kT.read = function(TT, kT, cT, lT, MT) {
+             var KT, OT, yT = 8 * MT - lT - 1,
+               fT = (1 << yT) - 1,
+               xT = fT >> 1,
+               IT = -7,
+               AT = cT ? MT - 1 : 0,
+               CT = cT ? -1 : 1,
+               jT = TT[kT + AT];
+ ... (29 more added lines; see GitHub link above)
```

#### 244. `bundles/bloxd.io/main.js` (Changed code · before: `L4235` → after: `L9521-L9526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9521-L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9521-L9526) · [Before (L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4235)

```diff
-               hv = mS(hv)
+             }))
+           } : TT.exports = function(TT, kT) {
+             if (kT) {
+               TT.super_ = kT;
+               var cT = function() {};
+               cT.prototype = kT.prototype, TT.prototype = new cT, TT.prototype.constructor = TT
```

#### 245. `bundles/bloxd.io/main.js` (Changed code · before: `L4238-L4240` → after: `L9529-L9543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9529-L9543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9529-L9543) · [Before (L4238-L4240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4238-L4240)

```diff
- 
-           function fS(vv, zv) {
-             return !(!vv || !zv) && (vv === zv || (!vv || 3 !== vv.nodeType) && (zv && 3 === zv.nodeType ? fS(vv, zv.parentNode) : "contains" in vv ? vv.contains(zv) : !!vv.compareDocumentPosition && !!(16 & vv.compareDocumentPosition(zv))))
+         },
+         1645: TT => {
+           TT.exports = function(TT, kT, cT, lT, MT, KT, OT, yT) {
+             if (!TT) {
+               var fT;
+               if (void 0 === kT) fT = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
+               else {
+                 var xT = [cT, lT, MT, KT, OT, yT],
+                   IT = 0;
+                 (fT = new Error(kT.replace(/%s/g, (function() {
+                   return xT[IT++]
+                 })))).name = "Invariant Violation"
+               }
+               throw fT.framesToPop = 1, fT
+             }
```

#### 246. `bundles/bloxd.io/main.js` (Changed code · before: `L4242-L4244` → after: `L9545-L9575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9545-L9575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9545-L9575) · [Before (L4242-L4244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4242-L4244)

```diff
- 
-           function FS() {
-             for (var vv = window, zv = vz(); zv instanceof vv.HTMLIFrameElement;) {
+         },
+         3779: (TT, kT, cT) => {
+           var lT = cT(3785)(),
+             MT = cT(3794)("Object.prototype.toString"),
+             KT = function(TT) {
+               return !(lT && TT && "object" === typeof TT && Symbol.toStringTag in TT) && "[object Arguments]" === MT(TT)
+             },
+             OT = function(TT) {
+               return !!KT(TT) || null !== TT && "object" === typeof TT && "number" === typeof TT.length && TT.length >= 0 && "[object Array]" !== MT(TT) && "[object Function]" === MT(TT.callee)
+             },
+             yT = function() {
+               return KT(arguments)
+             }();
+           KT.isLegacyArguments = OT, TT.exports = yT ? KT : OT
+         },
+         4051: TT => {
+ ... (15 more added lines; see GitHub link above)
```

#### 247. `bundles/bloxd.io/main.js` (Changed code · before: `L4246` → after: `L9577-L9578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9577-L9578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9577-L9578) · [Before (L4246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4246)

```diff
-                 var Pv = "string" === typeof zv.contentWindow.location.href
+                 var kT = lT.call(TT);
+                 return KT.test(kT)
```

#### 248. `bundles/bloxd.io/main.js` (Changed code · before: `L4248` → after: `L9580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9580) · [Before (L4248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4248)

```diff
-                 Pv = !1
+                 return !1
```

#### 249. `bundles/bloxd.io/main.js` (Changed code · before: `L4250-L4318` → after: `L9582-L9587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9582-L9587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9582-L9587) · [Before (L4250-L4318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4250-L4318)

```diff
-               if (!Pv) break;
-               zv = vz((vv = zv.contentWindow).document)
-             }
-             return zv
-           }
- 
-           function YS(vv) {
-             var zv = vv && vv.nodeName && vv.nodeName.toLowerCase();
-             return zv && ("input" === zv && ("text" === vv.type || "search" === vv.type || "tel" === vv.type || "url" === vv.type || "password" === vv.type) || "textarea" === zv || "true" === vv.contentEditable)
-           }
-           var nS = Tv && "documentMode" in document && 11 >= document.documentMode,
-             OS = null,
-             DS = null,
-             KS = null,
-             VS = !1;
- 
- ... (53 more removed lines; see GitHub link above)
+             },
+             yT = function(TT) {
+               try {
+                 return !OT(TT) && (lT.call(TT), !0)
+               } catch (kT) {
+                 return !1
```

#### 250. `bundles/bloxd.io/main.js` (Changed code · before: `L4320-L4334` → after: `L9589-L9604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9589-L9604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9589-L9604) · [Before (L4320-L4334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4320-L4334)

```diff
-             }
-             if (rz) throw vv = kz, rz = !1, kz = null, vv
-           }
- 
-           function ZS(vv, zv) {
-             var Pv = se(zv),
-               hv = vv + "__bubble";
-             Pv.has(hv) || (MS(zv, vv, 2, !1), Pv.add(hv))
-           }
-           var AS = "_reactListening" + Math.random().toString(36).slice(2);
- 
-           function LS(vv) {
-             vv[AS] || (vv[AS] = !0, pv.forEach((function(zv) {
-               qS.has(zv) || HS(zv, !1, vv, null), HS(zv, !0, vv, null)
-             })))
+             },
+             fT = Object.prototype.toString,
+             xT = "function" === typeof Symbol && !!Symbol.toStringTag,
+             IT = !(0 in [, ]),
+             AT = function() {
+               return !1
+             };
+           if ("object" === typeof document) {
+             var CT = document.all;
+             fT.call(CT) === fT.call(document.all) && (AT = function(TT) {
+               if ((IT || !TT) && ("undefined" === typeof TT || "object" === typeof TT)) try {
+                 var kT = fT.call(TT);
+                 return ("[object HTMLAllCollection]" === kT || "[object HTML document.all class]" === kT || "[object HTMLCollection]" === kT || "[object Object]" === kT) && null == TT("")
+               } catch (cT) {}
+               return !1
+             })
```

#### 251. `bundles/bloxd.io/main.js` (Changed code · before: `L4336-L4342` → after: `L9606-L9613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9606-L9613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9606-L9613) · [Before (L4336-L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4336-L4342)

```diff
- 
-           function HS(vv, zv, Pv, hv) {
-             var Sv = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
-               ev = Pv;
-             if ("selectionchange" === vv && 9 !== Pv.nodeType && (ev = Pv.ownerDocument), null !== hv && !zv && qS.has(vv)) {
-               if ("scroll" !== vv) return;
-               Sv |= 2, ev = hv
+           TT.exports = MT ? function(TT) {
+             if (AT(TT)) return !0;
+             if (!TT) return !1;
+             if ("function" !== typeof TT && "object" !== typeof TT) return !1;
+             try {
+               MT(TT, null, kT)
+             } catch (lT) {
+               if (lT !== cT) return !1
```

#### 252. `bundles/bloxd.io/main.js` (Changed code · before: `L4344-L4346` → after: `L9615-L9652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9615-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9615-L9652) · [Before (L4344-L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4344-L4346)

```diff
-             var gv = se(ev),
-               pv = vv + "__" + (zv ? "capture" : "bubble");
-             gv.has(pv) || (zv && (Sv |= 4), MS(ev, vv, Sv, zv), gv.add(pv))
+             return !OT(TT) && yT(TT)
+           } : function(TT) {
+             if (AT(TT)) return !0;
+             if (!TT) return !1;
+             if ("function" !== typeof TT && "object" !== typeof TT) return !1;
+             if (xT) return yT(TT);
+             if (OT(TT)) return !1;
+             var kT = fT.call(TT);
+             return !("[object Function]" !== kT && "[object GeneratorFunction]" !== kT && !/^\[object HTML/.test(kT)) && yT(TT)
+           }
+         },
+         4035: (TT, kT, cT) => {
+           var lT, MT = Object.prototype.toString,
+             KT = Function.prototype.toString,
+             OT = /^\s*(?:function)?\*/,
+             yT = cT(3785)(),
+ ... (22 more added lines; see GitHub link above)
```

#### 253. `bundles/bloxd.io/main.js` (Changed code · before: `L4349-L4359` → after: `L9674-L9675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9674-L9675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9674-L9675) · [Before (L4349-L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4349-L4359)

```diff
-           function MS(vv, zv, Pv, hv) {
-             var Sv = ZP.get(zv);
-             switch (void 0 === Sv ? 2 : Sv) {
-               case 0:
-                 Sv = Ph;
-                 break;
-               case 1:
-                 Sv = hh;
-                 break;
-               default:
-                 Sv = Sh
+             function kT(TT) {
+               return TT.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
```

#### 254. `bundles/bloxd.io/main.js` (Changed code · before: `L4361-L4367` → after: `L9677-L9678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9677-L9678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9677-L9678) · [Before (L4361-L4367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4361-L4367)

```diff
-             Pv = Sv.bind(null, zv, Pv, vv), Sv = void 0, !Bz || "touchstart" !== zv && "touchmove" !== zv && "wheel" !== zv || (Sv = !0), hv ? void 0 !== Sv ? vv.addEventListener(zv, Pv, {
-               capture: !0,
-               passive: Sv
-             }) : vv.addEventListener(zv, Pv, !0) : void 0 !== Sv ? vv.addEventListener(zv, Pv, {
-               passive: Sv
-             }) : vv.addEventListener(zv, Pv, !1)
-           }
+             return function cT(lT) {
+               function MT() {}
```

#### 255. `bundles/bloxd.io/main.js` (Changed code · before: `L4369-L4387` → after: `L9680-L9708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9680-L9708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9680-L9708) · [Before (L4369-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4369-L4387)

```diff
-           function yS(vv, zv, Pv, hv, Sv) {
-             var ev = hv;
-             if (0 === (1 & zv) && 0 === (2 & zv) && null !== hv) vv: for (;;) {
-               if (null === hv) return;
-               var gv = hv.tag;
-               if (3 === gv || 4 === gv) {
-                 var pv = hv.stateNode.containerInfo;
-                 if (pv === Sv || 8 === pv.nodeType && pv.parentNode === Sv) break;
-                 if (4 === gv)
-                   for (gv = hv.return; null !== gv;) {
-                     var dv = gv.tag;
-                     if ((3 === dv || 4 === dv) && ((dv = gv.stateNode.containerInfo) === Sv || 8 === dv.nodeType && dv.parentNode === Sv)) return;
-                     gv = gv.return
-                   }
-                 for (; null !== pv;) {
-                   if (null === (gv = Te(pv))) return;
- ... (3 more removed lines; see GitHub link above)
+               function KT(kT, cT, KT) {
+                 if ("undefined" !== typeof document) {
+                   "number" === typeof(KT = TT({
+                     path: "/"
+                   }, MT.defaults, KT)).expires && (KT.expires = new Date(1 * new Date + 864e5 * KT.expires)), KT.expires = KT.expires ? KT.expires.toUTCString() : "";
+                   try {
+                     var OT = JSON.stringify(cT);
+                     /^[\{\[]/.test(OT) && (cT = OT)
+                   } catch (xT) {}
+                   cT = lT.write ? lT.write(cT, kT) : encodeURIComponent(String(cT)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), kT = encodeURIComponent(String(kT)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\) … [truncated]
+                   var yT = "";
+                   for (var fT in KT) KT[fT] && (yT += "; " + fT, !0 !== KT[fT] && (yT += "=" + KT[fT].split(";")[0]));
+                   return document.cookie = kT + "=" + cT + yT
+                 }
+               }
+ 
+ ... (13 more added lines; see GitHub link above)
```

#### 256. `bundles/bloxd.io/main.js` (Changed code · before: `L4389` → after: `L9710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9710) · [Before (L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4389)

```diff
-                   pv = pv.parentNode
+                   return TT ? MT[TT] : MT
```

#### 257. `bundles/bloxd.io/main.js` (Changed code · before: `L4392-L4399` → after: `L9713-L9740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9713-L9740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9713-L9740) · [Before (L4392-L4399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4392-L4399)

```diff
-               hv = hv.return
-             }! function(vv, zv, Pv) {
-               if (Hz) return vv(zv, Pv);
-               Hz = !0;
-               try {
-                 return Az(vv, zv, Pv)
-               } finally {
-                 Hz = !1, Mz()
+               return MT.set = KT, MT.get = function(TT) {
+                 return OT(TT, !1)
+               }, MT.getJSON = function(TT) {
+                 return OT(TT, !0)
+               }, MT.remove = function(kT, cT) {
+                 KT(kT, "", TT(cT, {
+                   expires: -1
+                 }))
+               }, MT.defaults = {}, MT.withConverter = cT, MT
+             }((function() {}))
+           }))
+         },
+         55: (TT, kT, cT) => {
+           TT.exports = function TT(kT, cT, lT) {
+             function MT(OT, yT) {
+               if (!cT[OT]) {
+ ... (12 more added lines; see GitHub link above)
```

#### 258. `bundles/bloxd.io/main.js` (Changed code · before: `L4401-L4482` → after: `L9742-L9815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9742-L9815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9742-L9815) · [Before (L4401-L4482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4401-L4482)

```diff
-             }((function() {
-               var hv = ev,
-                 Sv = Kz(Pv),
-                 gv = [];
-               vv: {
-                 var pv = QP.get(vv);
-                 if (void 0 !== pv) {
-                   var dv = ch,
-                     Nv = vv;
-                   switch (vv) {
-                     case "keypress":
-                       if (0 === lh(Pv)) break vv;
-                     case "keydown":
-                     case "keyup":
-                       dv = Ih;
-                       break;
- ... (66 more removed lines; see GitHub link above)
+               return cT[OT].exports
+             }
+             for (var KT = void 0, OT = 0; OT < lT.length; OT++) MT(lT[OT]);
+             return MT
+           }({
+             1: [function(TT, kT, lT) {
+               (function(TT) {
+                 var cT, lT, MT = TT.MutationObserver || TT.WebKitMutationObserver;
+                 if (MT) {
+                   var KT = 0,
+                     OT = new MT(IT),
+                     yT = TT.document.createTextNode("");
+                   OT.observe(yT, {
+                     characterData: !0
+                   }), cT = function() {
+                     yT.data = KT = ++KT % 2
+ ... (58 more added lines; see GitHub link above)
```

#### 259. `bundles/bloxd.io/main.js` (Changed code · before: `L4484-L4491` → after: `L9817-L9876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9817-L9876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9817-L9876) · [Before (L4484-L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4484-L4491)

```diff
-                   var lv = 0 !== (4 & zv),
-                     Tv = !lv && "scroll" === vv,
-                     Wv = lv ? null !== pv ? pv + "Capture" : null : pv;
-                   lv = [];
-                   for (var wv, av = hv; null !== av;) {
-                     var sv = (wv = av).stateNode;
-                     if (5 === wv.tag && null !== sv && (wv = sv, null !== Wv && (null != (sv = yz(av, Wv)) && lv.push(BS(av, sv, wv)))), Tv) break;
-                     av = av.return
+                   lT === TT ? KT.reject(TT, new TypeError("Cannot resolve promise with itself")) : KT.resolve(TT, lT)
+                 }))
+               }
+ 
+               function CT(TT) {
+                 var kT = TT && TT.then;
+                 if (TT && ("object" === typeof TT || "function" === typeof TT) && "function" === typeof kT) return function() {
+                   kT.apply(TT, arguments)
+                 }
+               }
+ 
+               function jT(TT, kT) {
+                 var cT = !1;
+ 
+                 function lT(kT) {
+                   cT || (cT = !0, KT.reject(TT, kT))
+ ... (44 more added lines; see GitHub link above)
```

#### 260. `bundles/bloxd.io/main.js` (Changed code · before: `L4493-L4495` → after: `L9878-L9879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9878-L9879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9878-L9879) · [Before (L4493-L4495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4493-L4495)

```diff
-                   0 < lv.length && (pv = new dv(pv, Nv, null, Pv, Sv), gv.push({
-                     event: pv,
-                     listeners: lv
+                   kT.resolve(TT).then(fT, (function(TT) {
+                     lT || (lT = !0, KT.reject(xT, TT))
```

#### 261. `bundles/bloxd.io/main.js` (Changed code · before: `L4499-L4515` → after: `L9883-L9898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9883-L9898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9883-L9898) · [Before (L4499-L4515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4499-L4515)

```diff
-               if (0 === (7 & zv)) {
-                 if (dv = "mouseout" === vv || "pointerout" === vv, (!(pv = "mouseover" === vv || "pointerover" === vv) || 0 !== (16 & zv) || !(Nv = Pv.relatedTarget || Pv.fromElement) || !Te(Nv) && !Nv[Ne]) && (dv || pv) && (pv = Sv.window === Sv ? Sv : (pv = Sv.ownerDocument) ?  … [truncated]
-                   if (lv = fh, sv = "onMouseLeave", Wv = "onMouseEnter", av = "mouse", "pointerout" !== vv && "pointerover" !== vv || (lv = Qh, sv = "onPointerLeave", Wv = "onPointerEnter", av = "pointer"), Tv = null == dv ? pv : we(dv), wv = null == Nv ? pv : we(Nv), (pv = new l … [truncated]
-                     for (Wv = Nv, av = 0, wv = lv = dv; wv; wv = ES(wv)) av++;
-                     for (wv = 0, sv = Wv; sv; sv = ES(sv)) wv++;
-                     for (; 0 < av - wv;) lv = ES(lv),
-                     av--;
-                     for (; 0 < wv - av;) Wv = ES(Wv),
-                     wv--;
-                     for (; av--;) {
-                       if (lv === Wv || null !== Wv && lv === Wv.alternate) break vv;
-                       lv = ES(lv), Wv = ES(Wv)
-                     }
-                     lv = null
-                   }
-                   else lv = null;
- ... (1 more removed lines; see GitHub link above)
+ 
+               function QT(TT) {
+                 var kT = this;
+                 if ("[object Array]" !== Object.prototype.toString.call(TT)) return this.reject(new TypeError("must be an array"));
+                 var cT = TT.length,
+                   lT = !1;
+                 if (!cT) return this.resolve([]);
+                 for (var OT = -1, yT = new this(MT); ++OT < cT;) fT(TT[OT]);
+                 return yT;
+ 
+                 function fT(TT) {
+                   kT.resolve(TT).then((function(TT) {
+                     lT || (lT = !0, KT.resolve(yT, TT))
+                   }), (function(TT) {
+                     lT || (lT = !0, KT.reject(yT, TT))
+                   }))
```

#### 262. `bundles/bloxd.io/main.js` (Changed code · before: `L4517-L4544` → after: `L9900-L9922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9900-L9922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9900-L9922) · [Before (L4517-L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4517-L4544)

```diff
-                 if ("select" === (dv = (pv = hv ? we(hv) : window).nodeName && pv.nodeName.toLowerCase()) || "input" === dv && "file" === pv.type) var Cv = gS;
-                 else if (vS(pv))
-                   if (pS) Cv = CS;
-                   else {
-                     Cv = aS;
-                     var iv = wS
-                   }
-                 else(dv = pv.nodeName) && "input" === dv.toLowerCase() && ("checkbox" === pv.type || "radio" === pv.type) && (Cv = sS);
-                 switch (Cv && (Cv = Cv(vv, hv)) ? zS(gv, Cv, Pv, Sv) : (iv && iv(vv, pv, hv), "focusout" === vv && (iv = pv._wrapperState) && iv.controlled && "number" === pv.type && gz(pv, "number", pv.value)), iv = hv ? we(hv) : window, vv) {
-                   case "focusin":
-                     (vS(iv) || "true" === iv.contentEditable) && (OS = iv, DS = hv, KS = null);
-                     break;
-                   case "focusout":
-                     KS = DS = OS = null;
-                     break;
-                   case "mousedown":
- ... (12 more removed lines; see GitHub link above)
+               }
+               kT.exports = xT, xT.prototype.catch = function(TT) {
+                 return this.then(null, TT)
+               }, xT.prototype.then = function(TT, kT) {
+                 if ("function" !== typeof TT && this.state === yT || "function" !== typeof kT && this.state === OT) return this;
+                 var cT = new this.constructor(MT);
+                 return this.state !== fT ? AT(cT, this.state === yT ? TT : kT, this.outcome) : this.queue.push(new IT(cT, TT, kT)), cT
+               }, IT.prototype.callFulfilled = function(TT) {
+                 KT.resolve(this.promise, TT)
+               }, IT.prototype.otherCallFulfilled = function(TT) {
+                 AT(this.promise, this.onFulfilled, TT)
+               }, IT.prototype.callRejected = function(TT) {
+                 KT.reject(this.promise, TT)
+               }, IT.prototype.otherCallRejected = function(TT) {
+                 AT(this.promise, this.onRejected, TT)
+               }, KT.resolve = function(TT, kT) {
+ ... (7 more added lines; see GitHub link above)
```

#### 263. `bundles/bloxd.io/main.js` (Changed code · before: `L4546-L4559` → after: `L9924-L9971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9924-L9971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9924-L9971) · [Before (L4546-L4559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4546-L4559)

```diff
-                 var cv;
-                 if (yh) vv: {
-                   switch (vv) {
-                     case "compositionstart":
-                       var Gv = "onCompositionStart";
-                       break vv;
-                     case "compositionend":
-                       Gv = "onCompositionEnd";
-                       break vv;
-                     case "compositionupdate":
-                       Gv = "onCompositionUpdate";
-                       break vv
-                   }
-                   Gv = void 0
+                 return TT
+               }, KT.reject = function(TT, kT) {
+                 TT.state = OT, TT.outcome = kT;
+                 for (var cT = -1, lT = TT.queue.length; ++cT < lT;) TT.queue[cT].callRejected(kT);
+                 return TT
+               }, xT.resolve = tT, xT.reject = hT, xT.all = NT, xT.race = QT
+             }, {
+               1: 1
+             }],
+             3: [function(TT, kT, lT) {
+               (function(kT) {
+                 "function" !== typeof kT.Promise && (kT.Promise = TT(2))
+               }).call(this, "undefined" !== typeof cT.g ? cT.g : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
+             }, {
+               2: 2
+             }],
+ ... (32 more added lines; see GitHub link above)
```

#### 264. `bundles/bloxd.io/main.js` (Changed code · before: `L4600-L4606` → after: `L9975-L9986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9975-L9986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9975-L9986) · [Before (L4600-L4606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4600-L4606)

```diff
-           function BS(vv, zv, Pv) {
-             return {
-               instance: vv,
-               listener: zv,
-               currentTarget: Pv
-             }
-           }
+               function fT(TT, kT) {
+                 TT = TT || [], kT = kT || {};
+                 try {
+                   return new Blob(TT, kT)
+                 } catch (MT) {
+                   if ("TypeError" !== MT.name) throw MT;
+                   for (var cT = new("undefined" !== typeof BlobBuilder ? BlobBuilder : "undefined" !== typeof MSBlobBuilder ? MSBlobBuilder : "undefined" !== typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder), lT = 0; lT < TT.length; lT += 1) cT.append(TT[lT]);
+                   return cT.getBlob(kT.type)
+                 }
+               }
+               "undefined" === typeof Promise && TT(3);
+               var xT = Promise;
```

#### 265. `bundles/bloxd.io/main.js` (Changed code · before: `L4608-L4615` → after: `L9988-L9994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9988-L9994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9988-L9994) · [Before (L4608-L4615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4608-L4615)

```diff
-           function JS(vv, zv) {
-             for (var Pv = zv + "Capture", hv = []; null !== vv;) {
-               var Sv = vv,
-                 ev = Sv.stateNode;
-               5 === Sv.tag && null !== ev && (Sv = ev, null != (ev = yz(vv, Pv)) && hv.unshift(BS(vv, ev, Sv)), null != (ev = yz(vv, zv)) && hv.push(BS(vv, ev, Sv))), vv = vv.return
-             }
-             return hv
-           }
+               function IT(TT, kT) {
+                 kT && TT.then((function(TT) {
+                   kT(null, TT)
+                 }), (function(TT) {
+                   kT(TT)
+                 }))
+               }
```

#### 266. `bundles/bloxd.io/main.js` (Changed code · before: `L4617-L4623` → after: `L9996-L9998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9996-L9998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L9996-L9998) · [Before (L4617-L4623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4617-L4623)

```diff
-           function ES(vv) {
-             if (null === vv) return null;
-             do {
-               vv = vv.return
-             } while (vv && 5 !== vv.tag);
-             return vv || null
-           }
+               function AT(TT, kT, cT) {
+                 "function" === typeof kT && TT.then(kT), "function" === typeof cT && TT.catch(cT)
+               }
```

#### 267. `bundles/bloxd.io/main.js` (Changed code · before: `L4625-L4637` → after: `L10000-L10002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10000-L10002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10000-L10002) · [Before (L4625-L4637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4625-L4637)

```diff
-           function oS(vv, zv, Pv, hv, Sv) {
-             for (var ev = zv._reactName, gv = []; null !== Pv && Pv !== hv;) {
-               var pv = Pv,
-                 dv = pv.alternate,
-                 Nv = pv.stateNode;
-               if (null !== dv && dv === hv) break;
-               5 === pv.tag && null !== Nv && (pv = Nv, Sv ? null != (dv = yz(Pv, ev)) && gv.unshift(BS(Pv, dv, pv)) : Sv || null != (dv = yz(Pv, ev)) && gv.push(BS(Pv, dv, pv))), Pv = Pv.return
-             }
-             0 !== gv.length && vv.push({
-               event: zv,
-               listeners: gv
-             })
-           }
+               function CT(TT) {
+                 return "string" !== typeof TT && (console.warn(TT + " used as a key, but it is not a string."), TT = String(TT)), TT
+               }
```

#### 268. `bundles/bloxd.io/main.js` (Changed code · before: `L4639-L4641` → after: `L10004-L10012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10004-L10012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10004-L10012) · [Before (L4639-L4641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4639-L4641)

```diff
-           function bS() {}
-           var rS = null,
-             kS = null;
+               function jT() {
+                 if (arguments.length && "function" === typeof arguments[arguments.length - 1]) return arguments[arguments.length - 1]
+               }
+               var vT = "local-forage-detect-blob-support",
+                 tT = void 0,
+                 hT = {},
+                 NT = Object.prototype.toString,
+                 QT = "readonly",
+                 ST = "readwrite";
```

#### 269. `bundles/bloxd.io/main.js` (Changed code · before: `L4643-L4652` → after: `L10014-L10017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10014-L10017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10014-L10017) · [Before (L4643-L4652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4643-L4652)

```diff
-           function XS(vv, zv) {
-             switch (vv) {
-               case "button":
-               case "input":
-               case "select":
-               case "textarea":
-                 return !!zv.autoFocus
-             }
-             return !1
-           }
+               function DT(TT) {
+                 for (var kT = TT.length, cT = new ArrayBuffer(kT), lT = new Uint8Array(cT), MT = 0; MT < kT; MT++) lT[MT] = TT.charCodeAt(MT);
+                 return cT
+               }
```

#### 270. `bundles/bloxd.io/main.js` (Changed code · before: `L4654-L4658` → after: `L10019-L10033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10019-L10033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10019-L10033) · [Before (L4654-L4658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4654-L4658)

```diff
-           function uS(vv, zv) {
-             return "textarea" === vv || "option" === vv || "noscript" === vv || "string" === typeof zv.children || "number" === typeof zv.children || "object" === typeof zv.dangerouslySetInnerHTML && null !== zv.dangerouslySetInnerHTML && null != zv.dangerouslySetInnerHTML.__html
-           }
-           var ve = "function" === typeof setTimeout ? setTimeout : void 0,
-             ze = "function" === typeof clearTimeout ? clearTimeout : void 0;
+               function aT(TT) {
+                 return new xT((function(kT) {
+                   var cT = TT.transaction(vT, ST),
+                     lT = fT([""]);
+                   cT.objectStore(vT).put(lT, "key"), cT.onabort = function(TT) {
+                     TT.preventDefault(), TT.stopPropagation(), kT(!1)
+                   }, cT.oncomplete = function() {
+                     var TT = navigator.userAgent.match(/Chrome\/(\d+)/),
+                       cT = navigator.userAgent.match(/Edge\//);
+                     kT(cT || !TT || parseInt(TT[1], 10) >= 43)
+                   }
+                 })).catch((function() {
+                   return !1
+                 }))
+               }
```

#### 271. `bundles/bloxd.io/main.js` (Changed code · before: `L4660-L4662` → after: `L10035-L10039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10035-L10039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10035-L10039) · [Before (L4660-L4662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4660-L4662)

```diff
-           function Pe(vv) {
-             1 === vv.nodeType ? vv.textContent = "" : 9 === vv.nodeType && (null != (vv = vv.body) && (vv.textContent = ""))
-           }
+               function FT(TT) {
+                 return "boolean" === typeof tT ? xT.resolve(tT) : aT(TT).then((function(TT) {
+                   return tT = TT
+                 }))
+               }
```

#### 272. `bundles/bloxd.io/main.js` (Changed code · before: `L4664-L4670` → after: `L10041-L10049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10041-L10049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10041-L10049) · [Before (L4664-L4670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4664-L4670)

```diff
-           function he(vv) {
-             for (; null != vv; vv = vv.nextSibling) {
-               var zv = vv.nodeType;
-               if (1 === zv || 3 === zv) break
-             }
-             return vv
-           }
+               function rT(TT) {
+                 var kT = hT[TT.name],
+                   cT = {};
+                 cT.promise = new xT((function(TT, kT) {
+                   cT.resolve = TT, cT.reject = kT
+                 })), kT.deferredOperations.push(cT), kT.dbReady ? kT.dbReady = kT.dbReady.then((function() {
+                   return cT.promise
+                 })) : kT.dbReady = cT.promise
+               }
```

#### 273. `bundles/bloxd.io/main.js` (Changed code · before: `L4672-L4680` → after: `L10051-L10053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10051-L10053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10051-L10053) · [Before (L4672-L4680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4672-L4680)

```diff
-           function Se(vv) {
-             vv = vv.previousSibling;
-             for (var zv = 0; vv;) {
-               if (8 === vv.nodeType) {
-                 var Pv = vv.data;
-                 if ("$" === Pv || "$!" === Pv || "$?" === Pv) {
-                   if (0 === zv) return vv;
-                   zv--
-                 } else "/$" === Pv && zv++
+               function PT(TT) {
+                 var kT = hT[TT.name].deferredOperations.pop();
+                 if (kT) return kT.resolve(), kT.promise
```

#### 274. `bundles/bloxd.io/main.js` (Changed code · before: `L4693-L4703` → after: `L10056-L10058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10056-L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10056-L10058) · [Before (L4693-L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4693-L4703)

```diff
-           function Te(vv) {
-             var zv = vv[pe];
-             if (zv) return zv;
-             for (var Pv = vv.parentNode; Pv;) {
-               if (zv = Pv[Ne] || Pv[pe]) {
-                 if (Pv = zv.alternate, null !== zv.child || null !== Pv && null !== Pv.child)
-                   for (vv = Se(vv); null !== vv;) {
-                     if (Pv = vv[pe]) return Pv;
-                     vv = Se(vv)
-                   }
-                 return zv
+               function wT(TT, kT) {
+                 var cT = hT[TT.name].deferredOperations.pop();
+                 if (cT) return cT.reject(kT), cT.promise
```

#### 275. `bundles/bloxd.io/main.js` (Changed code · before: `L4710-L4712` → after: `L10061-L10087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10061-L10087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10061-L10087) · [Before (L4710-L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4710-L4712)

```diff
-           function We(vv) {
-             return !(vv = vv[pe] || vv[Ne]) || 5 !== vv.tag && 6 !== vv.tag && 13 !== vv.tag && 3 !== vv.tag ? null : vv
-           }
+               function mT(TT, kT) {
+                 return new xT((function(cT, lT) {
+                   if (hT[TT.name] = hT[TT.name] || ZT(), TT.db) {
+                     if (!kT) return cT(TT.db);
+                     rT(TT), TT.db.close()
+                   }
+                   var MT = [TT.name];
+                   kT && MT.push(TT.version);
+                   var KT = OT.open.apply(OT, MT);
+                   kT && (KT.onupgradeneeded = function(kT) {
+                     var cT = KT.result;
+                     try {
+                       cT.createObjectStore(TT.storeName), kT.oldVersion <= 1 && cT.createObjectStore(vT)
+                     } catch (lT) {
+                       if ("ConstraintError" !== lT.name) throw lT;
+                       console.warn('The database "' + TT.name + '" has been upgraded from version ' + kT.oldVersion + " to version " + kT.newVersion + ', but the storage "' + TT.storeName + '" already exists.')
+ ... (11 more added lines; see GitHub link above)
```

#### 276. `bundles/bloxd.io/main.js` (Changed code · before: `L4714-L4717` → after: `L10089-L10091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10089-L10091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10089-L10091) · [Before (L4714-L4717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4714-L4717)

```diff
-           function we(vv) {
-             if (5 === vv.tag || 6 === vv.tag) return vv.stateNode;
-             throw Error(gv(33))
-           }
+               function bT(TT) {
+                 return mT(TT, !1)
+               }
```

#### 277. `bundles/bloxd.io/main.js` (Changed code · before: `L4719-L4721` → after: `L10093-L10095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10093-L10095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10093-L10095) · [Before (L4719-L4721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4719-L4721)

```diff
-           function ae(vv) {
-             return vv[de] || null
-           }
+               function zT(TT) {
+                 return mT(TT, !0)
+               }
```

#### 278. `bundles/bloxd.io/main.js` (Changed code · before: `L4723-L4728` → after: `L10097-L10110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10097-L10110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10097-L10110) · [Before (L4723-L4728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4723-L4728)

```diff
-           function se(vv) {
-             var zv = vv[le];
-             return void 0 === zv && (zv = vv[le] = new Set), zv
-           }
-           var Ce = [],
-             ie = -1;
+               function JT(TT, kT) {
+                 if (!TT.db) return !0;
+                 var cT = !TT.db.objectStoreNames.contains(TT.storeName),
+                   lT = TT.version < TT.db.version,
+                   MT = TT.version > TT.db.version;
+                 if (lT && (TT.version !== kT && console.warn('The database "' + TT.name + "\" can't be downgraded from version " + TT.db.version + " to version " + TT.version + "."), TT.version = TT.db.version), MT || cT) {
+                   if (cT) {
+                     var KT = TT.db.version + 1;
+                     KT > TT.version && (TT.version = KT)
+                   }
+                   return !0
+                 }
+                 return !1
+               }
```

#### 279. `bundles/bloxd.io/main.js` (Changed code · before: `L4730-L4734` → after: `L10112-L10124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10112-L10124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10112-L10124) · [Before (L4730-L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4730-L4734)

```diff
-           function ce(vv) {
-             return {
-               current: vv
-             }
-           }
+               function oT(TT) {
+                 return new xT((function(kT, cT) {
+                   var lT = new FileReader;
+                   lT.onerror = cT, lT.onloadend = function(cT) {
+                     var lT = btoa(cT.target.result || "");
+                     kT({
+                       __local_forage_encoded_blob: !0,
+                       data: lT,
+                       type: TT.type
+                     })
+                   }, lT.readAsBinaryString(TT)
+                 }))
+               }
```

#### 280. `bundles/bloxd.io/main.js` (Changed code · before: `L4736-L4738` → after: `L10126-L10130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10126-L10130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10126-L10130) · [Before (L4736-L4738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4736-L4738)

```diff
-           function Ge(vv) {
-             0 > ie || (vv.current = Ce[ie], Ce[ie] = null, ie--)
-           }
+               function HT(TT) {
+                 return fT([DT(atob(TT.data))], {
+                   type: TT.type
+                 })
+               }
```

#### 281. `bundles/bloxd.io/main.js` (Changed code · before: `L4740-L4746` → after: `L10132-L10134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10132-L10134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10132-L10134) · [Before (L4740-L4746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4740-L4746)

```diff
-           function me(vv, zv) {
-             ie++, Ce[ie] = vv.current, vv.current = zv
-           }
-           var je = {},
-             fe = ce(je),
-             Fe = ce(!1),
-             Ye = je;
+               function eT(TT) {
+                 return TT && TT.__local_forage_encoded_blob
+               }
```

#### 282. `bundles/bloxd.io/main.js` (Changed code · before: `L4748-L4756` → after: `L10136-L10143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10136-L10143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10136-L10143) · [Before (L4748-L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4748-L4756)

```diff
-           function ne(vv, zv) {
-             var Pv = vv.type.contextTypes;
-             if (!Pv) return je;
-             var hv = vv.stateNode;
-             if (hv && hv.__reactInternalMemoizedUnmaskedChildContext === zv) return hv.__reactInternalMemoizedMaskedChildContext;
-             var Sv, ev = {};
-             for (Sv in Pv) ev[Sv] = zv[Sv];
-             return hv && ((vv = vv.stateNode).__reactInternalMemoizedUnmaskedChildContext = zv, vv.__reactInternalMemoizedMaskedChildContext = ev), ev
-           }
+               function GT(TT) {
+                 var kT = this,
+                   cT = kT._initReady().then((function() {
+                     var TT = hT[kT._dbInfo.name];
+                     if (TT && TT.dbReady) return TT.dbReady
+                   }));
+                 return AT(cT, TT, TT), cT
+               }
```

#### 283. `bundles/bloxd.io/main.js` (Changed code · before: `L4758-L4760` → after: `L10145-L10159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10145-L10159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10145-L10159) · [Before (L4758-L4760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4758-L4760)

```diff
-           function Oe(vv) {
-             return null !== (vv = vv.childContextTypes) && void 0 !== vv
-           }
+               function VT(TT) {
+                 rT(TT);
+                 for (var kT = hT[TT.name], cT = kT.forages, lT = 0; lT < cT.length; lT++) {
+                   var MT = cT[lT];
+                   MT._dbInfo.db && (MT._dbInfo.db.close(), MT._dbInfo.db = null)
+                 }
+                 return TT.db = null, bT(TT).then((function(kT) {
+                   return TT.db = kT, JT(TT) ? zT(TT) : kT
+                 })).then((function(lT) {
+                   TT.db = kT.db = lT;
+                   for (var MT = 0; MT < cT.length; MT++) cT[MT]._dbInfo.db = lT
+                 })).catch((function(kT) {
+                   throw wT(TT, kT), kT
+                 }))
+               }
```

#### 284. `bundles/bloxd.io/main.js` (Changed code · before: `L4762-L4764` → after: `L10161-L10176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10161-L10176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10161-L10176) · [Before (L4762-L4764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4762-L4764)

```diff
-           function De() {
-             Ge(Fe), Ge(fe)
-           }
+               function ET(TT, kT, cT, lT) {
+                 void 0 === lT && (lT = 1);
+                 try {
+                   var MT = TT.db.transaction(TT.storeName, kT);
+                   cT(null, MT)
+                 } catch (KT) {
+                   if (lT > 0 && (!TT.db || "InvalidStateError" === KT.name || "NotFoundError" === KT.name)) return xT.resolve().then((function() {
+                     if (!TT.db || "NotFoundError" === KT.name && !TT.db.objectStoreNames.contains(TT.storeName) && TT.version <= TT.db.version) return TT.db && (TT.version = TT.db.version + 1), zT(TT)
+                   })).then((function() {
+                     return VT(TT).then((function() {
+                       ET(TT, kT, cT, lT - 1)
+                     }))
+                   })).catch(cT);
+                   cT(KT)
+                 }
+               }
```

#### 285. `bundles/bloxd.io/main.js` (Changed code · before: `L4766-L4769` → after: `L10178-L10185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10178-L10185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10178-L10185) · [Before (L4766-L4769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4766-L4769)

```diff
-           function Ke(vv, zv, Pv) {
-             if (fe.current !== je) throw Error(gv(168));
-             me(fe, zv), me(Fe, Pv)
-           }
+               function ZT() {
+                 return {
+                   forages: [],
+                   db: null,
+                   dbReady: null,
+                   deferredOperations: []
+                 }
+               }
```

#### 286. `bundles/bloxd.io/main.js` (Changed code · before: `L4771-L4777` → after: `L10187-L10196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10187-L10196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10187-L10196) · [Before (L4771-L4777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4771-L4777)

```diff
-           function Ve(vv, zv, Pv) {
-             var hv = vv.stateNode;
-             if (vv = zv.childContextTypes, "function" !== typeof hv.getChildContext) return Pv;
-             for (var ev in hv = hv.getChildContext())
-               if (!(ev in vv)) throw Error(gv(108, bv(zv) || "Unknown", ev));
-             return Sv({}, Pv, hv)
-           }
+               function uT(TT) {
+                 var kT = this,
+                   cT = {
+                     db: null
+                   };
+                 if (TT)
+                   for (var lT in TT) cT[lT] = TT[lT];
+                 var MT = hT[cT.name];
+                 MT || (MT = ZT(), hT[cT.name] = MT), MT.forages.push(kT), kT._initReady || (kT._initReady = kT.ready, kT.ready = GT);
+                 var KT = [];
```

#### 287. `bundles/bloxd.io/main.js` (Changed code · before: `L4779-L4781` → after: `L10198-L10217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10198-L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10198-L10217) · [Before (L4779-L4781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4779-L4781)

```diff
-           function Ue(vv) {
-             return vv = (vv = vv.stateNode) && vv.__reactInternalMemoizedMergedChildContext || je, Ye = fe.current, me(fe, vv), me(Fe, Fe.current), !0
-           }
+                 function OT() {
+                   return xT.resolve()
+                 }
+                 for (var yT = 0; yT < MT.forages.length; yT++) {
+                   var fT = MT.forages[yT];
+                   fT !== kT && KT.push(fT._initReady().catch(OT))
+                 }
+                 var IT = MT.forages.slice(0);
+                 return xT.all(KT).then((function() {
+                   return cT.db = MT.db, bT(cT)
+                 })).then((function(TT) {
+                   return cT.db = TT, JT(cT, kT._defaultConfig.version) ? zT(cT) : TT
+                 })).then((function(TT) {
+                   cT.db = MT.db = TT, kT._dbInfo = cT;
+                   for (var lT = 0; lT < IT.length; lT++) {
+                     var KT = IT[lT];
+ ... (4 more added lines; see GitHub link above)
```

#### 288. `bundles/bloxd.io/main.js` (Changed code · before: `L4783-L4810` → after: `L10219-L10241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10219-L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10219-L10241) · [Before (L4783-L4810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4783-L4810)

```diff
-           function Re(vv, zv, Pv) {
-             var hv = vv.stateNode;
-             if (!hv) throw Error(gv(169));
-             Pv ? (vv = Ve(vv, zv, Ye), hv.__reactInternalMemoizedMergedChildContext = vv, Ge(Fe), Ge(fe), me(fe, vv)) : Ge(Fe), me(Fe, Pv)
-           }
-           var xe = null,
-             te = null,
-             qe = ev.unstable_runWithPriority,
-             Ie = ev.unstable_scheduleCallback,
-             Qe = ev.unstable_cancelCallback,
-             Ze = ev.unstable_shouldYield,
-             Ae = ev.unstable_requestPaint,
-             Le = ev.unstable_now,
-             He = ev.unstable_getCurrentPriorityLevel,
-             Me = ev.unstable_ImmediatePriority,
-             ye = ev.unstable_UserBlockingPriority,
- ... (12 more removed lines; see GitHub link above)
+               function XT(TT, kT) {
+                 var cT = this;
+                 TT = CT(TT);
+                 var lT = new xT((function(kT, lT) {
+                   cT.ready().then((function() {
+                     ET(cT._dbInfo, QT, (function(MT, KT) {
+                       if (MT) return lT(MT);
+                       try {
+                         var OT = KT.objectStore(cT._dbInfo.storeName).get(TT);
+                         OT.onsuccess = function() {
+                           var TT = OT.result;
+                           void 0 === TT && (TT = null), eT(TT) && (TT = HT(TT)), kT(TT)
+                         }, OT.onerror = function() {
+                           lT(OT.error)
+                         }
+                       } catch (yT) {
+ ... (7 more added lines; see GitHub link above)
```

#### 289. `bundles/bloxd.io/main.js` (Changed code · before: `L4812-L4827` → after: `L10243-L10270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10243-L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10243-L10270) · [Before (L4812-L4827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4812-L4827)

```diff
-           function zg() {
-             switch (He()) {
-               case Me:
-                 return 99;
-               case ye:
-                 return 98;
-               case Be:
-                 return 97;
-               case Je:
-                 return 96;
-               case Ee:
-                 return 95;
-               default:
-                 throw Error(gv(332))
-             }
-           }
+               function dT(TT, kT) {
+                 var cT = this,
+                   lT = new xT((function(kT, lT) {
+                     cT.ready().then((function() {
+                       ET(cT._dbInfo, QT, (function(MT, KT) {
+                         if (MT) return lT(MT);
+                         try {
+                           var OT = KT.objectStore(cT._dbInfo.storeName).openCursor(),
+                             yT = 1;
+                           OT.onsuccess = function() {
+                             var cT = OT.result;
+                             if (cT) {
+                               var lT = cT.value;
+                               eT(lT) && (lT = HT(lT));
+                               var MT = TT(lT, cT.key, yT++);
+                               void 0 !== MT ? kT(MT) : cT.continue()
+ ... (12 more added lines; see GitHub link above)
```

#### 290. `bundles/bloxd.io/main.js` (Changed code · before: `L4829-L4844` → after: `L10272-L10301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10272-L10301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10272-L10301) · [Before (L4829-L4844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4829-L4844)

```diff
-           function Pg(vv) {
-             switch (vv) {
-               case 99:
-                 return Me;
-               case 98:
-                 return ye;
-               case 97:
-                 return Be;
-               case 96:
-                 return Je;
-               case 95:
-                 return Ee;
-               default:
-                 throw Error(gv(332))
-             }
-           }
+               function LT(TT, kT, cT) {
+                 var lT = this;
+                 TT = CT(TT);
+                 var MT = new xT((function(cT, MT) {
+                   var KT;
+                   lT.ready().then((function() {
+                     return KT = lT._dbInfo, "[object Blob]" === NT.call(kT) ? FT(KT.db).then((function(TT) {
+                       return TT ? kT : oT(kT)
+                     })) : kT
+                   })).then((function(kT) {
+                     ET(lT._dbInfo, ST, (function(KT, OT) {
+                       if (KT) return MT(KT);
+                       try {
+                         var yT = OT.objectStore(lT._dbInfo.storeName);
+                         null === kT && (kT = void 0);
+                         var fT = yT.put(kT, TT);
+ ... (14 more added lines; see GitHub link above)
```

#### 291. `bundles/bloxd.io/main.js` (Changed code · before: `L4846-L4848` → after: `L10303-L10327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10303-L10327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10303-L10327) · [Before (L4846-L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4846-L4848)

```diff
-           function hg(vv, zv) {
-             return vv = Pg(vv), qe(vv, zv)
-           }
+               function RT(TT, kT) {
+                 var cT = this;
+                 TT = CT(TT);
+                 var lT = new xT((function(kT, lT) {
+                   cT.ready().then((function() {
+                     ET(cT._dbInfo, ST, (function(MT, KT) {
+                       if (MT) return lT(MT);
+                       try {
+                         var OT = KT.objectStore(cT._dbInfo.storeName).delete(TT);
+                         KT.oncomplete = function() {
+                           kT()
+                         }, KT.onerror = function() {
+                           lT(OT.error)
+                         }, KT.onabort = function() {
+                           var TT = OT.error ? OT.error : OT.transaction.error;
+                           lT(TT)
+ ... (9 more added lines; see GitHub link above)
```

#### 292. `bundles/bloxd.io/main.js` (Changed code · before: `L4850-L4852` → after: `L10329-L10350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10329-L10350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10329-L10350) · [Before (L4850-L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4850-L4852)

```diff
-           function Sg(vv, zv, Pv) {
-             return vv = Pg(vv), Ie(vv, zv, Pv)
-           }
+               function gT(TT) {
+                 var kT = this,
+                   cT = new xT((function(TT, cT) {
+                     kT.ready().then((function() {
+                       ET(kT._dbInfo, ST, (function(lT, MT) {
+                         if (lT) return cT(lT);
+                         try {
+                           var KT = MT.objectStore(kT._dbInfo.storeName).clear();
+                           MT.oncomplete = function() {
+                             TT()
+                           }, MT.onabort = MT.onerror = function() {
+                             var TT = KT.error ? KT.error : KT.transaction.error;
+                             cT(TT)
+                           }
+                         } catch (OT) {
+                           cT(OT)
+ ... (6 more added lines; see GitHub link above)
```

#### 293. `bundles/bloxd.io/main.js` (Changed code · before: `L4854-L4860` → after: `L10352-L10372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10352-L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10352-L10372) · [Before (L4854-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4854-L4860)

```diff
-           function eg() {
-             if (null !== ke) {
-               var vv = ke;
-               ke = null, Qe(vv)
-             }
-             gg()
-           }
+               function UT(TT) {
+                 var kT = this,
+                   cT = new xT((function(TT, cT) {
+                     kT.ready().then((function() {
+                       ET(kT._dbInfo, QT, (function(lT, MT) {
+                         if (lT) return cT(lT);
+                         try {
+                           var KT = MT.objectStore(kT._dbInfo.storeName).count();
+                           KT.onsuccess = function() {
+                             TT(KT.result)
+                           }, KT.onerror = function() {
+                             cT(KT.error)
+                           }
+                         } catch (OT) {
+                           cT(OT)
+                         }
+ ... (5 more added lines; see GitHub link above)
```

#### 294. `bundles/bloxd.io/main.js` (Changed code · before: `L4862-L4879` → after: `L10374-L10396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10374-L10396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10374-L10396) · [Before (L4862-L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4862-L4879)

```diff
-           function gg() {
-             if (!Xe && null !== re) {
-               Xe = !0;
-               var vv = 0;
-               try {
-                 var zv = re;
-                 hg(99, (function() {
-                   for (; vv < zv.length; vv++) {
-                     var Pv = zv[vv];
-                     do {
-                       Pv = Pv(!0)
-                     } while (null !== Pv)
-                   }
-                 })), re = null
-               } catch (Pv) {
-                 throw null !== re && (re = re.slice(vv + 1)), Ie(Me, eg), Pv
- ... (2 more removed lines; see GitHub link above)
+               function YT(TT, kT) {
+                 var cT = this,
+                   lT = new xT((function(kT, lT) {
+                     TT < 0 ? kT(null) : cT.ready().then((function() {
+                       ET(cT._dbInfo, QT, (function(MT, KT) {
+                         if (MT) return lT(MT);
+                         try {
+                           var OT = KT.objectStore(cT._dbInfo.storeName),
+                             yT = !1,
+                             fT = OT.openKeyCursor();
+                           fT.onsuccess = function() {
+                             var cT = fT.result;
+                             cT ? 0 === TT || yT ? kT(cT.key) : (yT = !0, cT.advance(TT)) : kT(null)
+                           }, fT.onerror = function() {
+                             lT(fT.error)
+                           }
+ ... (7 more added lines; see GitHub link above)
```

#### 295. `bundles/bloxd.io/main.js` (Changed code · before: `L4885-L4895` → after: `L10399-L10421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10399-L10421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10399-L10421) · [Before (L4885-L4895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4885-L4895)

```diff
-           function dg(vv, zv) {
-             if (vv && vv.defaultProps) {
-               for (var Pv in zv = Sv({}, zv), vv = vv.defaultProps) void 0 === zv[Pv] && (zv[Pv] = vv[Pv]);
-               return zv
-             }
-             return zv
-           }
-           var Ng = ce(null),
-             lg = null,
-             Tg = null,
-             Wg = null;
+               function BT(TT) {
+                 var kT = this,
+                   cT = new xT((function(TT, cT) {
+                     kT.ready().then((function() {
+                       ET(kT._dbInfo, QT, (function(lT, MT) {
+                         if (lT) return cT(lT);
+                         try {
+                           var KT = MT.objectStore(kT._dbInfo.storeName).openKeyCursor(),
+                             OT = [];
+                           KT.onsuccess = function() {
+                             var kT = KT.result;
+                             kT ? (OT.push(kT.key), kT.continue()) : TT(OT)
+                           }, KT.onerror = function() {
+                             cT(KT.error)
+                           }
+                         } catch (yT) {
+ ... (7 more added lines; see GitHub link above)
```

#### 296. `bundles/bloxd.io/main.js` (Changed code · before: `L4897-L4899` → after: `L10423-L10509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10423-L10509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10423-L10509) · [Before (L4897-L4899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4897-L4899)

```diff
-           function wg() {
-             Wg = Tg = lg = null
-           }
+               function WT(TT, kT) {
+                 kT = jT.apply(this, arguments);
+                 var cT = this.config();
+                 (TT = "function" !== typeof TT && TT || {}).name || (TT.name = TT.name || cT.name, TT.storeName = TT.storeName || cT.storeName);
+                 var lT, MT = this;
+                 if (TT.name) {
+                   var KT = TT.name === cT.name && MT._dbInfo.db ? xT.resolve(MT._dbInfo.db) : bT(TT).then((function(kT) {
+                     var cT = hT[TT.name],
+                       lT = cT.forages;
+                     cT.db = kT;
+                     for (var MT = 0; MT < lT.length; MT++) lT[MT]._dbInfo.db = kT;
+                     return kT
+                   }));
+                   lT = TT.storeName ? KT.then((function(kT) {
+                     if (kT.objectStoreNames.contains(TT.storeName)) {
+                       var cT = kT.version + 1;
+ ... (71 more added lines; see GitHub link above)
```

#### 297. `bundles/bloxd.io/main.js` (Changed code · before: `L4901-L4904` → after: `L10511-L10531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10511-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10511-L10531) · [Before (L4901-L4904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4901-L4904)

```diff
-           function ag(vv) {
-             var zv = Ng.current;
-             Ge(Ng), vv.type._context._currentValue = zv
-           }
+               function pT() {
+                 return "function" === typeof openDatabase
+               }
+               var iT = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
+                 qT = "~~local_forage_type~",
+                 sT = /^~~local_forage_type~([^~]+)~/,
+                 Tk = "__lfsc__:",
+                 kk = Tk.length,
+                 ck = "arbf",
+                 lk = "blob",
+                 Mk = "si08",
+                 Kk = "ui08",
+                 Ok = "uic8",
+                 yk = "si16",
+                 fk = "si32",
+                 xk = "ur16",
+ ... (5 more added lines; see GitHub link above)
```

#### 298. `bundles/bloxd.io/main.js` (Changed code · before: `L4906-L4915` → after: `L10533-L10542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10533-L10542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10533-L10542) · [Before (L4906-L4915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4906-L4915)

```diff
-           function sg(vv, zv) {
-             for (; null !== vv;) {
-               var Pv = vv.alternate;
-               if ((vv.childLanes & zv) === zv) {
-                 if (null === Pv || (Pv.childLanes & zv) === zv) break;
-                 Pv.childLanes |= zv
-               } else vv.childLanes |= zv, null !== Pv && (Pv.childLanes |= zv);
-               vv = vv.return
-             }
-           }
+               function tk(TT) {
+                 var kT, cT, lT, MT, KT, OT = .75 * TT.length,
+                   yT = TT.length,
+                   fT = 0;
+                 "=" === TT[TT.length - 1] && (OT--, "=" === TT[TT.length - 2] && OT--);
+                 var xT = new ArrayBuffer(OT),
+                   IT = new Uint8Array(xT);
+                 for (kT = 0; kT < yT; kT += 4) cT = iT.indexOf(TT[kT]), lT = iT.indexOf(TT[kT + 1]), MT = iT.indexOf(TT[kT + 2]), KT = iT.indexOf(TT[kT + 3]), IT[fT++] = cT << 2 | lT >> 4, IT[fT++] = (15 & lT) << 4 | MT >> 2, IT[fT++] = (3 & MT) << 6 | 63 & KT;
+                 return xT
+               }
```

#### 299. `bundles/bloxd.io/main.js` (Changed code · before: `L4917-L4919` → after: `L10544-L10549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10544-L10549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10544-L10549) · [Before (L4917-L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4917-L4919)

```diff
-           function Cg(vv, zv) {
-             lg = vv, Wg = Tg = null, null !== (vv = vv.dependencies) && null !== vv.firstContext && (0 !== (vv.lanes & zv) && (kp = !0), vv.firstContext = null)
-           }
+               function hk(TT) {
+                 var kT, cT = new Uint8Array(TT),
+                   lT = "";
+                 for (kT = 0; kT < cT.length; kT += 3) lT += iT[cT[kT] >> 2], lT += iT[(3 & cT[kT]) << 4 | cT[kT + 1] >> 4], lT += iT[(15 & cT[kT + 1]) << 2 | cT[kT + 2] >> 6], lT += iT[63 & cT[kT + 2]];
+                 return cT.length % 3 === 2 ? lT = lT.substring(0, lT.length - 1) + "=" : cT.length % 3 === 1 && (lT = lT.substring(0, lT.length - 2) + "=="), lT
+               }
```

#### 300. `bundles/bloxd.io/main.js` (Changed code · before: `L4921-L4932` → after: `L10551-L10565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10551-L10565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10551-L10565) · [Before (L4921-L4932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4921-L4932)

```diff
-           function ig(vv, zv) {
-             if (Wg !== vv && !1 !== zv && 0 !== zv)
-               if ("number" === typeof zv && 1073741823 !== zv || (Wg = vv, zv = 1073741823), zv = {
-                   context: vv,
-                   observedBits: zv,
-                   next: null
-                 }, null === Tg) {
-                 if (null === lg) throw Error(gv(308));
-                 Tg = zv, lg.dependencies = {
-                   lanes: 0,
-                   firstContext: zv,
-                   responders: null
+               function Nk(TT, kT) {
+                 var cT = "";
+                 if (TT && (cT = vk.call(TT)), TT && ("[object ArrayBuffer]" === cT || TT.buffer && "[object ArrayBuffer]" === vk.call(TT.buffer))) {
+                   var lT, MT = Tk;
+                   TT instanceof ArrayBuffer ? (lT = TT, MT += ck) : (lT = TT.buffer, "[object Int8Array]" === cT ? MT += Mk : "[object Uint8Array]" === cT ? MT += Kk : "[object Uint8ClampedArray]" === cT ? MT += Ok : "[object Int16Array]" === cT ? MT += yk : "[object Uint16Array] … [truncated]
+                 } else if ("[object Blob]" === cT) {
+                   var KT = new FileReader;
+                   KT.onload = function() {
+                     var cT = qT + TT.type + "~" + hk(this.result);
+                     kT(Tk + lk + cT)
+                   }, KT.readAsArrayBuffer(TT)
+                 } else try {
+                   kT(JSON.stringify(TT))
+                 } catch (OT) {
+                   console.error("Couldn't convert value into a JSON string: ", TT), kT(null, OT)
```

#### 301. `bundles/bloxd.io/main.js` (Changed code · before: `L4934-L4937` → after: `L10567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10567) · [Before (L4934-L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4934-L4937)

```diff
-               } else Tg = Tg.next = zv;
-             return vv._currentValue
-           }
-           var cg = !1;
+               }
```

#### 302. `bundles/bloxd.io/main.js` (Changed code · before: `L4939-L4949` → after: `L10569-L10612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10569-L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10569-L10612) · [Before (L4939-L4949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4939-L4949)

```diff
-           function Gg(vv) {
-             vv.updateQueue = {
-               baseState: vv.memoizedState,
-               firstBaseUpdate: null,
-               lastBaseUpdate: null,
-               shared: {
-                 pending: null
-               },
-               effects: null
-             }
-           }
+               function Qk(TT) {
+                 if (TT.substring(0, kk) !== Tk) return JSON.parse(TT);
+                 var kT, cT = TT.substring(jk),
+                   lT = TT.substring(kk, jk);
+                 if (lT === lk && sT.test(cT)) {
+                   var MT = cT.match(sT);
+                   kT = MT[1], cT = cT.substring(MT[0].length)
+                 }
+                 var KT = tk(cT);
+                 switch (lT) {
+                   case ck:
+                     return KT;
+                   case lk:
+                     return fT([KT], {
+                       type: kT
+                     });
+ ... (28 more added lines; see GitHub link above)
```

#### 303. `bundles/bloxd.io/main.js` (Changed code · before: `L4951-L4959` → after: `L10614-L10616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10614-L10616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10614-L10616) · [Before (L4951-L4959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4951-L4959)

```diff
-           function mg(vv, zv) {
-             vv = vv.updateQueue, zv.updateQueue === vv && (zv.updateQueue = {
-               baseState: vv.baseState,
-               firstBaseUpdate: vv.firstBaseUpdate,
-               lastBaseUpdate: vv.lastBaseUpdate,
-               shared: vv.shared,
-               effects: vv.effects
-             })
-           }
+               function Dk(TT, kT, cT, lT) {
+                 TT.executeSql("CREATE TABLE IF NOT EXISTS " + kT.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], cT, lT)
+               }
```

#### 304. `bundles/bloxd.io/main.js` (Changed code · before: `L4961-L4970` → after: `L10618-L10640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10618-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10618-L10640) · [Before (L4961-L4970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4961-L4970)

```diff
-           function jg(vv, zv) {
-             return {
-               eventTime: vv,
-               lane: zv,
-               tag: 0,
-               payload: null,
-               callback: null,
-               next: null
-             }
-           }
+               function ak(TT) {
+                 var kT = this,
+                   cT = {
+                     db: null
+                   };
+                 if (TT)
+                   for (var lT in TT) cT[lT] = "string" !== typeof TT[lT] ? TT[lT].toString() : TT[lT];
+                 var MT = new xT((function(TT, lT) {
+                   try {
+                     cT.db = openDatabase(cT.name, String(cT.version), cT.description, cT.size)
+                   } catch (MT) {
+                     return lT(MT)
+                   }
+                   cT.db.transaction((function(MT) {
+                     Dk(MT, cT, (function() {
+                       kT._dbInfo = cT, TT()
+ ... (7 more added lines; see GitHub link above)
```

#### 305. `bundles/bloxd.io/main.js` (Changed code · before: `L4972-L4977` → after: `L10642-L10650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10642-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10642-L10650) · [Before (L4972-L4977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4972-L4977)

```diff
-           function fg(vv, zv) {
-             if (null !== (vv = vv.updateQueue)) {
-               var Pv = (vv = vv.shared).pending;
-               null === Pv ? zv.next = zv : (zv.next = Pv.next, Pv.next = zv), vv.pending = zv
-             }
-           }
+               function Fk(TT, kT, cT, lT, MT, KT) {
+                 TT.executeSql(cT, lT, MT, (function(TT, OT) {
+                   OT.code === OT.SYNTAX_ERR ? TT.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [kT.storeName], (function(TT, yT) {
+                     yT.rows.length ? KT(TT, OT) : Dk(TT, kT, (function() {
+                       TT.executeSql(cT, lT, MT, KT)
+                     }), KT)
+                   }), KT) : KT(TT, OT)
+                 }), KT)
+               }
```

#### 306. `bundles/bloxd.io/main.js` (Changed code · before: `L4979-L5008` → after: `L10652-L10669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10652-L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10652-L10669) · [Before (L4979-L5008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L4979-L5008)

```diff
-           function Fg(vv, zv) {
-             var Pv = vv.updateQueue,
-               hv = vv.alternate;
-             if (null !== hv && Pv === (hv = hv.updateQueue)) {
-               var Sv = null,
-                 ev = null;
-               if (null !== (Pv = Pv.firstBaseUpdate)) {
-                 do {
-                   var gv = {
-                     eventTime: Pv.eventTime,
-                     lane: Pv.lane,
-                     tag: Pv.tag,
-                     payload: Pv.payload,
-                     callback: Pv.callback,
-                     next: null
-                   };
- ... (14 more removed lines; see GitHub link above)
+               function rk(TT, kT) {
+                 var cT = this;
+                 TT = CT(TT);
+                 var lT = new xT((function(kT, lT) {
+                   cT.ready().then((function() {
+                     var MT = cT._dbInfo;
+                     MT.db.transaction((function(cT) {
+                       Fk(cT, MT, "SELECT * FROM " + MT.storeName + " WHERE key = ? LIMIT 1", [TT], (function(TT, cT) {
+                         var lT = cT.rows.length ? cT.rows.item(0).value : null;
+                         lT && (lT = MT.aN.deserialize(lT)), kT(lT)
+                       }), (function(TT, kT) {
+                         lT(kT)
+                       }))
+                     }))
+                   })).catch(lT)
+                 }));
+ ... (2 more added lines; see GitHub link above)
```

#### 307. `bundles/bloxd.io/main.js` (Changed code · before: `L5010-L5024` → after: `L10671-L10690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10671-L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10671-L10690) · [Before (L5010-L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5010-L5024)

```diff
-           function Yg(vv, zv, Pv, hv) {
-             var ev = vv.updateQueue;
-             cg = !1;
-             var gv = ev.firstBaseUpdate,
-               pv = ev.lastBaseUpdate,
-               dv = ev.shared.pending;
-             if (null !== dv) {
-               ev.shared.pending = null;
-               var Nv = dv,
-                 lv = Nv.next;
-               Nv.next = null, null === pv ? gv = lv : pv.next = lv, pv = Nv;
-               var Tv = vv.alternate;
-               if (null !== Tv) {
-                 var Wv = (Tv = Tv.updateQueue).lastBaseUpdate;
-                 Wv !== pv && (null === Wv ? Tv.firstBaseUpdate = lv : Wv.next = lv, Tv.lastBaseUpdate = Nv)
+               function Pk(TT, kT) {
+                 var cT = this,
+                   lT = new xT((function(kT, lT) {
+                     cT.ready().then((function() {
+                       var MT = cT._dbInfo;
+                       MT.db.transaction((function(cT) {
+                         Fk(cT, MT, "SELECT * FROM " + MT.storeName, [], (function(cT, lT) {
+                           for (var KT = lT.rows, OT = KT.length, yT = 0; yT < OT; yT++) {
+                             var fT = KT.item(yT),
+                               xT = fT.value;
+                             if (xT && (xT = MT.aN.deserialize(xT)), void 0 !== (xT = TT(xT, fT.key, yT + 1))) return void kT(xT)
+                           }
+                           kT()
+                         }), (function(TT, kT) {
+                           lT(kT)
+                         }))
+ ... (4 more added lines; see GitHub link above)
```

#### 308. `bundles/bloxd.io/main.js` (Changed code · before: `L5026-L5040` → after: `L10692-L10698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10692-L10698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10692-L10698) · [Before (L5026-L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5026-L5040)

```diff
-             }
-             if (null !== gv) {
-               for (Wv = ev.baseState, pv = 0, Tv = lv = Nv = null;;) {
-                 dv = gv.lane;
-                 var wv = gv.eventTime;
-                 if ((hv & dv) === dv) {
-                   null !== Tv && (Tv = Tv.next = {
-                     eventTime: wv,
-                     lane: 0,
-                     tag: gv.tag,
-                     payload: gv.payload,
-                     callback: gv.callback,
-                     next: null
-                   });
-                   vv: {
+ 
+               function wk(TT, kT, cT, lT) {
+                 var MT = this;
+                 TT = CT(TT);
+                 var KT = new xT((function(KT, OT) {
+                   MT.ready().then((function() {
+                     void 0 === kT && (kT = null);
```

#### 309. `bundles/bloxd.io/main.js` (Changed code · before: `L5042-L5047` → after: `L10700-L10711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10700-L10711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10700-L10711) · [Before (L5042-L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5042-L5047)

```diff
-                       sv = gv;
-                     switch (dv = zv, wv = Pv, sv.tag) {
-                       case 1:
-                         if ("function" === typeof(av = sv.payload)) {
-                           Wv = av.call(wv, Wv, dv);
-                           break vv
+                       fT = MT._dbInfo;
+                     fT.aN.serialize(kT, (function(kT, xT) {
+                       xT ? OT(xT) : fT.db.transaction((function(cT) {
+                         Fk(cT, fT, "INSERT OR REPLACE INTO " + fT.storeName + " (key, value) VALUES (?, ?)", [TT, kT], (function() {
+                           KT(yT)
+                         }), (function(TT, kT) {
+                           OT(kT)
+                         }))
+                       }), (function(kT) {
+                         if (kT.code === kT.QUOTA_ERR) {
+                           if (lT > 0) return void KT(wk.apply(MT, [TT, yT, cT, lT - 1]));
+                           OT(kT)
```

#### 310. `bundles/bloxd.io/main.js` (Changed code · before: `L5049-L5073` → after: `L10713-L10717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10713-L10717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10713-L10717) · [Before (L5049-L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5049-L5073)

```diff
-                         Wv = av;
-                         break vv;
-                       case 3:
-                         av.flags = -4097 & av.flags | 64;
-                       case 0:
-                         if (null === (dv = "function" === typeof(av = sv.payload) ? av.call(wv, Wv, dv) : av) || void 0 === dv) break vv;
-                         Wv = Sv({}, Wv, dv);
-                         break vv;
-                       case 2:
-                         cg = !0
-                     }
-                   }
-                   null !== gv.callback && (vv.flags |= 32, null === (dv = ev.effects) ? ev.effects = [gv] : dv.push(gv))
-                 } else wv = {
-                   eventTime: wv,
-                   lane: dv,
- ... (9 more removed lines; see GitHub link above)
+                       }))
+                     }))
+                   })).catch(OT)
+                 }));
+                 return IT(KT, cT), KT
```

#### 311. `bundles/bloxd.io/main.js` (Changed code · before: `L5079-L5087` → after: `L10720-L10721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10720-L10721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10720-L10721) · [Before (L5079-L5087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5079-L5087)

```diff
-           function ng(vv, zv, Pv) {
-             if (vv = zv.effects, zv.effects = null, null !== vv)
-               for (zv = 0; zv < vv.length; zv++) {
-                 var hv = vv[zv],
-                   Sv = hv.callback;
-                 if (null !== Sv) {
-                   if (hv.callback = null, hv = Pv, "function" !== typeof Sv) throw Error(gv(191, Sv));
-                   Sv.call(hv)
-                 }
+               function mk(TT, kT, cT) {
+                 return wk.apply(this, [TT, kT, cT, 1])
```

#### 312. `bundles/bloxd.io/main.js` (Changed code · before: `L5092-L5120` → after: `L10724-L10740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10724-L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10724-L10740) · [Before (L5092-L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5092-L5120)

```diff
-           function Dg(vv, zv, Pv, hv) {
-             Pv = null === (Pv = Pv(hv, zv = vv.memoizedState)) || void 0 === Pv ? zv : Sv({}, zv, Pv), vv.memoizedState = Pv, 0 === vv.lanes && (vv.updateQueue.baseState = Pv)
-           }
-           var Kg = {
-             isMounted: function(vv) {
-               return !!(vv = vv._reactInternals) && vP(vv) === vv
-             },
-             enqueueSetState: function(vv, zv, Pv) {
-               vv = vv._reactInternals;
-               var hv = UN(),
-                 Sv = RN(vv),
-                 ev = jg(hv, Sv);
-               ev.payload = zv, void 0 !== Pv && null !== Pv && (ev.callback = Pv), fg(vv, ev), xN(vv, Sv, hv)
-             },
-             enqueueReplaceState: function(vv, zv, Pv) {
-               vv = vv._reactInternals;
- ... (13 more removed lines; see GitHub link above)
+               function bk(TT, kT) {
+                 var cT = this;
+                 TT = CT(TT);
+                 var lT = new xT((function(kT, lT) {
+                   cT.ready().then((function() {
+                     var MT = cT._dbInfo;
+                     MT.db.transaction((function(cT) {
+                       Fk(cT, MT, "DELETE FROM " + MT.storeName + " WHERE key = ?", [TT], (function() {
+                         kT()
+                       }), (function(TT, kT) {
+                         lT(kT)
+                       }))
+                     }))
+                   })).catch(lT)
+                 }));
+                 return IT(lT, kT), lT
+ ... (1 more added lines; see GitHub link above)
```

#### 313. `bundles/bloxd.io/main.js` (Changed code · before: `L5122-L5124` → after: `L10742-L10757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10742-L10757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10742-L10757) · [Before (L5122-L5124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5122-L5124)

```diff
-           function Vg(vv, zv, Pv, hv, Sv, ev, gv) {
-             return "function" === typeof(vv = vv.stateNode).shouldComponentUpdate ? vv.shouldComponentUpdate(hv, ev, gv) : !zv.prototype || !zv.prototype.isPureReactComponent || (!GS(Pv, hv) || !GS(Sv, ev))
-           }
+               function zk(TT) {
+                 var kT = this,
+                   cT = new xT((function(TT, cT) {
+                     kT.ready().then((function() {
+                       var lT = kT._dbInfo;
+                       lT.db.transaction((function(kT) {
+                         Fk(kT, lT, "DELETE FROM " + lT.storeName, [], (function() {
+                           TT()
+                         }), (function(TT, kT) {
+                           cT(kT)
+                         }))
+                       }))
+                     })).catch(cT)
+                   }));
+                 return IT(cT, TT), cT
+               }
```

#### 314. `bundles/bloxd.io/main.js` (Changed code · before: `L5126-L5131` → after: `L10759-L10879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10759-L10879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10759-L10879) · [Before (L5126-L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5126-L5131)

```diff
-           function Ug(vv, zv, Pv) {
-             var hv = !1,
-               Sv = je,
-               ev = zv.contextType;
-             return "object" === typeof ev && null !== ev ? ev = ig(ev) : (Sv = Oe(zv) ? Ye : fe.current, ev = (hv = null !== (hv = zv.contextTypes) && void 0 !== hv) ? ne(vv, Sv) : je), zv = new zv(Pv, ev), vv.memoizedState = null !== zv.state && void 0 !== zv.state ? zv.state :  … [truncated]
-           }
+               function Jk(TT) {
+                 var kT = this,
+                   cT = new xT((function(TT, cT) {
+                     kT.ready().then((function() {
+                       var lT = kT._dbInfo;
+                       lT.db.transaction((function(kT) {
+                         Fk(kT, lT, "SELECT COUNT(key) as c FROM " + lT.storeName, [], (function(kT, cT) {
+                           var lT = cT.rows.item(0).c;
+                           TT(lT)
+                         }), (function(TT, kT) {
+                           cT(kT)
+                         }))
+                       }))
+                     })).catch(cT)
+                   }));
+                 return IT(cT, TT), cT
+ ... (105 more added lines; see GitHub link above)
```

#### 315. `bundles/bloxd.io/main.js` (Changed code · before: `L5133-L5135` → after: `L10881-L10887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10881-L10887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10881-L10887) · [Before (L5133-L5135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5133-L5135)

```diff
-           function Rg(vv, zv, Pv, hv) {
-             vv = zv.state, "function" === typeof zv.componentWillReceiveProps && zv.componentWillReceiveProps(Pv, hv), "function" === typeof zv.UNSAFE_componentWillReceiveProps && zv.UNSAFE_componentWillReceiveProps(Pv, hv), zv.state !== vv && Kg.enqueueReplaceState(zv, zv.state, … [truncated]
-           }
+               function Zk() {
+                 try {
+                   return "undefined" !== typeof localStorage && "setItem" in localStorage && !!localStorage.setItem
+                 } catch (TT) {
+                   return !1
+                 }
+               }
```

#### 316. `bundles/bloxd.io/main.js` (Changed code · before: `L5137-L5143` → after: `L10889-L10892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10889-L10892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10889-L10892) · [Before (L5137-L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5137-L5143)

```diff
-           function xg(vv, zv, Pv, hv) {
-             var Sv = vv.stateNode;
-             Sv.props = Pv, Sv.state = vv.memoizedState, Sv.refs = Og, Gg(vv);
-             var ev = zv.contextType;
-             "object" === typeof ev && null !== ev ? Sv.context = ig(ev) : (ev = Oe(zv) ? Ye : fe.current, Sv.context = ne(vv, ev)), Yg(vv, Pv, Sv, hv), Sv.state = vv.memoizedState, "function" === typeof(ev = zv.getDerivedStateFromProps) && (Dg(vv, zv, ev, Pv), Sv.state = vv.memoi … [truncated]
-           }
-           var tg = Array.isArray;
+               function uk(TT, kT) {
+                 var cT = TT.name + "/";
+                 return TT.storeName !== kT.storeName && (cT += TT.storeName + "/"), cT
+               }
```

#### 317. `bundles/bloxd.io/main.js` (Changed code · before: `L5145-L5150` → after: `L10894-L10899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10894-L10899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10894-L10899) · [Before (L5145-L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5145-L5150)

```diff
-           function qg(vv, zv, Pv) {
-             if (null !== (vv = Pv.ref) && "function" !== typeof vv && "object" !== typeof vv) {
-               if (Pv._owner) {
-                 if (Pv = Pv._owner) {
-                   if (1 !== Pv.tag) throw Error(gv(309));
-                   var hv = Pv.stateNode
+               function Xk() {
+                 var TT = "_localforage_support_test";
+                 try {
+                   return localStorage.setItem(TT, !0), localStorage.removeItem(TT), !1
+                 } catch (kT) {
+                   return !0
```

#### 318. `bundles/bloxd.io/main.js` (Changed code · before: `L5165-L5167` → after: `L10903-L10905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10903-L10905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10903-L10905) · [Before (L5165-L5167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5165-L5167)

```diff
-           function Ig(vv, zv) {
-             if ("textarea" !== vv.type) throw Error(gv(31, "[object Object]" === Object.prototype.toString.call(zv) ? "object with keys {" + Object.keys(zv).join(", ") + "}" : zv))
-           }
+               function dk() {
+                 return !Xk() || localStorage.length > 0
+               }
```

#### 319. `bundles/bloxd.io/main.js` (Changed code · before: `L5169-L5173` → after: `L10907-L10912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10907-L10912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10907-L10912) · [Before (L5169-L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5169-L5173)

```diff
-           function Qg(vv) {
-             function zv(zv, Pv) {
-               if (vv) {
-                 var hv = zv.lastEffect;
-                 null !== hv ? (hv.nextEffect = Pv, zv.lastEffect = Pv) : zv.firstEffect = zv.lastEffect = Pv, Pv.nextEffect = null, Pv.flags = 8
+               function Lk(TT) {
+                 var kT = this,
+                   cT = {};
+                 if (TT)
+                   for (var lT in TT) cT[lT] = TT[lT];
+                 return cT.keyPrefix = uk(TT, kT._defaultConfig), dk() ? (kT._dbInfo = cT, cT.aN = Sk, xT.resolve()) : xT.reject()
```

#### 320. `bundles/bloxd.io/main.js` (Changed code · before: `L5177-L5181` → after: `L10915-L10924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10915-L10924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10915-L10924) · [Before (L5177-L5181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5177-L5181)

```diff
-             function Pv(Pv, hv) {
-               if (!vv) return null;
-               for (; null !== hv;) zv(Pv, hv), hv = hv.sibling;
-               return null
-             }
+               function Rk(TT) {
+                 var kT = this,
+                   cT = kT.ready().then((function() {
+                     for (var TT = kT._dbInfo.keyPrefix, cT = localStorage.length - 1; cT >= 0; cT--) {
+                       var lT = localStorage.key(cT);
+                       0 === lT.indexOf(TT) && localStorage.removeItem(lT)
+                     }
+                   }));
+                 return IT(cT, TT), cT
+               }
```

#### 321. `bundles/bloxd.io/main.js` (Changed code · before: `L5183-L5186` → after: `L10926-L10935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10926-L10935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10926-L10935) · [Before (L5183-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5183-L5186)

```diff
-             function hv(vv, zv) {
-               for (vv = new Map; null !== zv;) null !== zv.key ? vv.set(zv.key, zv) : vv.set(zv.index, zv), zv = zv.sibling;
-               return vv
-             }
+               function gk(TT, kT) {
+                 var cT = this;
+                 TT = CT(TT);
+                 var lT = cT.ready().then((function() {
+                   var kT = cT._dbInfo,
+                     lT = localStorage.getItem(kT.keyPrefix + TT);
+                   return lT && (lT = kT.aN.deserialize(lT)), lT
+                 }));
+                 return IT(lT, kT), lT
+               }
```

#### 322. `bundles/bloxd.io/main.js` (Changed code · before: `L5188-L5190` → after: `L10937-L10949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10937-L10949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10937-L10949) · [Before (L5188-L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5188-L5190)

```diff
-             function Sv(vv, zv) {
-               return (vv = Wl(vv, zv)).index = 0, vv.sibling = null, vv
-             }
+               function Uk(TT, kT) {
+                 var cT = this,
+                   lT = cT.ready().then((function() {
+                     for (var kT = cT._dbInfo, lT = kT.keyPrefix, MT = lT.length, KT = localStorage.length, OT = 1, yT = 0; yT < KT; yT++) {
+                       var fT = localStorage.key(yT);
+                       if (0 === fT.indexOf(lT)) {
+                         var xT = localStorage.getItem(fT);
+                         if (xT && (xT = kT.aN.deserialize(xT)), void 0 !== (xT = TT(xT, fT.substring(MT), OT++))) return xT
+                       }
+                     }
+                   }));
+                 return IT(lT, kT), lT
+               }
```

#### 323. `bundles/bloxd.io/main.js` (Changed code · before: `L5192-L5194` → after: `L10951-L10963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10951-L10963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10951-L10963) · [Before (L5192-L5194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5192-L5194)

```diff
-             function ev(zv, Pv, hv) {
-               return zv.index = hv, vv ? null !== (hv = zv.alternate) ? (hv = hv.index) < Pv ? (zv.flags = 2, Pv) : hv : (zv.flags = 2, Pv) : Pv
-             }
+               function Yk(TT, kT) {
+                 var cT = this,
+                   lT = cT.ready().then((function() {
+                     var kT, lT = cT._dbInfo;
+                     try {
+                       kT = localStorage.key(TT)
+                     } catch (MT) {
+                       kT = null
+                     }
+                     return kT && (kT = kT.substring(lT.keyPrefix.length)), kT
+                   }));
+                 return IT(lT, kT), lT
+               }
```

#### 324. `bundles/bloxd.io/main.js` (Changed code · before: `L5196-L5198` → after: `L10965-L10975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10965-L10975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10965-L10975) · [Before (L5196-L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5196-L5198)

```diff
-             function pv(zv) {
-               return vv && null === zv.alternate && (zv.flags = 2), zv
-             }
+               function Bk(TT) {
+                 var kT = this,
+                   cT = kT.ready().then((function() {
+                     for (var TT = kT._dbInfo, cT = localStorage.length, lT = [], MT = 0; MT < cT; MT++) {
+                       var KT = localStorage.key(MT);
+                       0 === KT.indexOf(TT.keyPrefix) && lT.push(KT.substring(TT.keyPrefix.length))
+                     }
+                     return lT
+                   }));
+                 return IT(cT, TT), cT
+               }
```

#### 325. `bundles/bloxd.io/main.js` (Changed code · before: `L5200-L5202` → after: `L10977-L10982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10977-L10982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10977-L10982) · [Before (L5200-L5202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5200-L5202)

```diff
-             function dv(vv, zv, Pv, hv) {
-               return null === zv || 6 !== zv.tag ? ((zv = Cl(Pv, vv.mode, hv)).return = vv, zv) : ((zv = Sv(zv, Pv)).return = vv, zv)
-             }
+               function Wk(TT) {
+                 var kT = this.keys().then((function(TT) {
+                   return TT.length
+                 }));
+                 return IT(kT, TT), kT
+               }
```

#### 326. `bundles/bloxd.io/main.js` (Changed code · before: `L5204-L5206` → after: `L10984-L10992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10984-L10992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10984-L10992) · [Before (L5204-L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5204-L5206)

```diff
-             function Nv(vv, zv, Pv, hv) {
-               return null !== zv && zv.elementType === Pv.type ? ((hv = Sv(zv, Pv.props)).ref = qg(vv, zv, Pv), hv.return = vv, hv) : ((hv = wl(Pv.type, Pv.key, Pv.props, null, vv.mode, hv)).ref = qg(vv, zv, Pv), hv.return = vv, hv)
-             }
+               function nk(TT, kT) {
+                 var cT = this;
+                 TT = CT(TT);
+                 var lT = cT.ready().then((function() {
+                   var kT = cT._dbInfo;
+                   localStorage.removeItem(kT.keyPrefix + TT)
+                 }));
+                 return IT(lT, kT), lT
+               }
```

#### 327. `bundles/bloxd.io/main.js` (Changed code · before: `L5208-L5210` → after: `L10994-L11013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10994-L11013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L10994-L11013) · [Before (L5208-L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5208-L5210)

```diff
-             function lv(vv, zv, Pv, hv) {
-               return null === zv || 4 !== zv.tag || zv.stateNode.containerInfo !== Pv.containerInfo || zv.stateNode.implementation !== Pv.implementation ? ((zv = il(Pv, vv.mode, hv)).return = vv, zv) : ((zv = Sv(zv, Pv.children || [])).return = vv, zv)
-             }
+               function pk(TT, kT, cT) {
+                 var lT = this;
+                 TT = CT(TT);
+                 var MT = lT.ready().then((function() {
+                   void 0 === kT && (kT = null);
+                   var cT = kT;
+                   return new xT((function(MT, KT) {
+                     var OT = lT._dbInfo;
+                     OT.aN.serialize(kT, (function(kT, lT) {
+                       if (lT) KT(lT);
+                       else try {
+                         localStorage.setItem(OT.keyPrefix + TT, kT), MT(cT)
+                       } catch (yT) {
+                         "QuotaExceededError" !== yT.name && "NS_ERROR_DOM_QUOTA_REACHED" !== yT.name || KT(yT), KT(yT)
+                       }
+                     }))
+ ... (4 more added lines; see GitHub link above)
```

#### 328. `bundles/bloxd.io/main.js` (Changed code · before: `L5212-L5214` → after: `L11015-L11074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11015-L11074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11015-L11074) · [Before (L5212-L5214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5212-L5214)

```diff
-             function Tv(vv, zv, Pv, hv, ev) {
-               return null === zv || 7 !== zv.tag ? ((zv = al(Pv, vv.mode, hv, ev)).return = vv, zv) : ((zv = Sv(zv, Pv)).return = vv, zv)
-             }
+               function ik(TT, kT) {
+                 if (kT = jT.apply(this, arguments), !(TT = "function" !== typeof TT && TT || {}).name) {
+                   var cT = this.config();
+                   TT.name = TT.name || cT.name, TT.storeName = TT.storeName || cT.storeName
+                 }
+                 var lT, MT = this;
+                 return lT = TT.name ? new xT((function(kT) {
+                   TT.storeName ? kT(uk(TT, MT._defaultConfig)) : kT(TT.name + "/")
+                 })).then((function(TT) {
+                   for (var kT = localStorage.length - 1; kT >= 0; kT--) {
+                     var cT = localStorage.key(kT);
+                     0 === cT.indexOf(TT) && localStorage.removeItem(cT)
+                   }
+                 })) : xT.reject("Invalid arguments"), IT(lT, kT), lT
+               }
+               var qk = {
+ ... (44 more added lines; see GitHub link above)
```

#### 329. `bundles/bloxd.io/main.js` (Changed code · before: `L5216-L5223` → after: `L11076-L11081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11076-L11081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11076-L11081) · [Before (L5216-L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5216-L5223)

```diff
-             function Wv(vv, zv, Pv) {
-               if ("string" === typeof zv || "number" === typeof zv) return (zv = Cl("" + zv, vv.mode, Pv)).return = vv, zv;
-               if ("object" === typeof zv && null !== zv) {
-                 switch (zv.$$typeof) {
-                   case fv:
-                     return (Pv = wl(zv.type, zv.key, zv.props, null, vv.mode, Pv)).ref = qg(vv, null, zv), Pv.return = vv, Pv;
-                   case Fv:
-                     return (zv = il(zv, vv.mode, Pv)).return = vv, zv
+               function xc(TT, kT) {
+                 TT[kT] = function() {
+                   var cT = arguments;
+                   return TT.ready().then((function() {
+                     return TT[kT].apply(TT, cT)
+                   }))
```

#### 330. `bundles/bloxd.io/main.js` (Changed code · before: `L5231-L5239` → after: `L11085-L11089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11085-L11089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11085-L11089) · [Before (L5231-L5239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5231-L5239)

```diff
-             function wv(vv, zv, Pv, hv) {
-               var Sv = null !== zv ? zv.key : null;
-               if ("string" === typeof Pv || "number" === typeof Pv) return null !== Sv ? null : dv(vv, zv, "" + Pv, hv);
-               if ("object" === typeof Pv && null !== Pv) {
-                 switch (Pv.$$typeof) {
-                   case fv:
-                     return Pv.key === Sv ? Pv.type === Yv ? Tv(vv, zv, Pv.props.children, hv, Sv) : Nv(vv, zv, Pv, hv) : null;
-                   case Fv:
-                     return Pv.key === Sv ? lv(vv, zv, Pv, hv) : null
+               function Ic() {
+                 for (var TT = 1; TT < arguments.length; TT++) {
+                   var kT = arguments[TT];
+                   if (kT)
+                     for (var cT in kT) kT.hasOwnProperty(cT) && (kc(kT[cT]) ? arguments[0][cT] = kT[cT].slice() : arguments[0][cT] = kT[cT])
```

#### 331. `bundles/bloxd.io/main.js` (Changed code · before: `L5241-L5242` → after: `L11091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11091) · [Before (L5241-L5242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5241-L5242)

```diff
-                 if (tg(Pv) || yv(Pv)) return null !== Sv ? null : Tv(vv, zv, Pv, hv, null);
-                 Ig(vv, Pv)
+                 return arguments[0]
```

#### 332. `bundles/bloxd.io/main.js` (Changed code · before: `L5244-L5245` → after: `L11093-L11161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11093-L11161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11093-L11161) · [Before (L5244-L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5244-L5245)

```diff
-               return null
-             }
+               var Ac = function() {
+                   function TT(kT) {
+                     for (var cT in MT(this, TT), Mc)
+                       if (Mc.hasOwnProperty(cT)) {
+                         var lT = Mc[cT],
+                           KT = lT._driver;
+                         this[cT] = KT, cc[KT] || this.defineDriver(lT)
+                       } this._defaultConfig = Ic({}, fc), this._config = Ic({}, this._defaultConfig, kT), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch((functi … [truncated]
+                   }
+                   return TT.prototype.config = function(TT) {
+                     if ("object" === ("undefined" === typeof TT ? "undefined" : lT(TT))) {
+                       if (this._ready) return new Error("Can't call config() after localforage has been used.");
+                       for (var kT in TT) {
+                         if ("storeName" === kT && (TT[kT] = TT[kT].replace(/\W/g, "_")), "version" === kT && "number" !== typeof TT[kT]) return new Error("Database version must be a number.");
+                         this._config[kT] = TT[kT]
+                       }
+ ... (53 more added lines; see GitHub link above)
```

#### 333. `bundles/bloxd.io/main.js` (Changed code · before: `L5247-L5260` → after: `L11163-L11165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11163-L11165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11163-L11165) · [Before (L5247-L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5247-L5260)

```diff
-             function av(vv, zv, Pv, hv, Sv) {
-               if ("string" === typeof hv || "number" === typeof hv) return dv(zv, vv = vv.get(Pv) || null, "" + hv, Sv);
-               if ("object" === typeof hv && null !== hv) {
-                 switch (hv.$$typeof) {
-                   case fv:
-                     return vv = vv.get(null === hv.key ? Pv : hv.key) || null, hv.type === Yv ? Tv(zv, vv, hv.props.children, Sv, hv.key) : Nv(zv, vv, hv, Sv);
-                   case Fv:
-                     return lv(zv, vv = vv.get(null === hv.key ? Pv : hv.key) || null, hv, Sv)
-                 }
-                 if (tg(hv) || yv(hv)) return Tv(zv, vv = vv.get(Pv) || null, hv, Sv, null);
-                 Ig(zv, hv)
-               }
-               return null
-             }
+                     function KT() {
+                       lT._config.driver = lT.driver()
+                     }
```

#### 334. `bundles/bloxd.io/main.js` (Changed code · before: `L5262-L5281` → after: `L11167-L11169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11167-L11169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11167-L11169) · [Before (L5262-L5281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5262-L5281)

```diff
-             function sv(Sv, gv, pv, dv) {
-               for (var Nv = null, lv = null, Tv = gv, sv = gv = 0, Cv = null; null !== Tv && sv < pv.length; sv++) {
-                 Tv.index > sv ? (Cv = Tv, Tv = null) : Cv = Tv.sibling;
-                 var iv = wv(Sv, Tv, pv[sv], dv);
-                 if (null === iv) {
-                   null === Tv && (Tv = Cv);
-                   break
-                 }
-                 vv && Tv && null === iv.alternate && zv(Sv, Tv), gv = ev(iv, gv, sv), null === lv ? Nv = iv : lv.sibling = iv, lv = iv, Tv = Cv
-               }
-               if (sv === pv.length) return Pv(Sv, Tv), Nv;
-               if (null === Tv) {
-                 for (; sv < pv.length; sv++) null !== (Tv = Wv(Sv, pv[sv], dv)) && (gv = ev(Tv, gv, sv), null === lv ? Nv = Tv : lv.sibling = Tv, lv = Tv);
-                 return Nv
-               }
-               for (Tv = hv(Sv, Tv); sv < pv.length; sv++) null !== (Cv = av(Tv, Sv, sv, pv[sv], dv)) && (vv && null !== Cv.alternate && Tv.delete(null === Cv.key ? sv : Cv.key), gv = ev(Cv, gv, sv), null === lv ? Nv = Cv : lv.sibling = Cv, lv = Cv);
- ... (4 more removed lines; see GitHub link above)
+                     function OT(TT) {
+                       return lT._extend(TT), KT(), lT._ready = lT._initStorage(lT._config), lT._ready
+                     }
```

#### 335. `bundles/bloxd.io/main.js` (Changed code · before: `L5283-L5318` → after: `L11171-L11178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11171-L11178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11171-L11178) · [Before (L5283-L5318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5283-L5318)

```diff
-             function Cv(Sv, pv, dv, Nv) {
-               var lv = yv(dv);
-               if ("function" !== typeof lv) throw Error(gv(150));
-               if (null == (dv = lv.call(dv))) throw Error(gv(151));
-               for (var Tv = lv = null, sv = pv, Cv = pv = 0, iv = null, cv = dv.next(); null !== sv && !cv.done; Cv++, cv = dv.next()) {
-                 sv.index > Cv ? (iv = sv, sv = null) : iv = sv.sibling;
-                 var Gv = wv(Sv, sv, cv.value, Nv);
-                 if (null === Gv) {
-                   null === sv && (sv = iv);
-                   break
-                 }
-                 vv && sv && null === Gv.alternate && zv(Sv, sv), pv = ev(Gv, pv, Cv), null === Tv ? lv = Gv : Tv.sibling = Gv, Tv = Gv, sv = iv
-               }
-               if (cv.done) return Pv(Sv, sv), lv;
-               if (null === sv) {
-                 for (; !cv.done; Cv++, cv = dv.next()) null !== (cv = Wv(Sv, cv.value, Nv)) && (pv = ev(cv, pv, Cv), null === Tv ? lv = cv : Tv.sibling = cv, Tv = cv);
- ... (20 more removed lines; see GitHub link above)
+                     function yT(TT) {
+                       return function() {
+                         var kT = 0;
+ 
+                         function cT() {
+                           for (; kT < TT.length;) {
+                             var MT = TT[kT];
+                             return kT++, lT._dbInfo = null, lT._ready = null, lT.getDriver(MT).then(OT).catch(cT)
```

#### 336. `bundles/bloxd.io/main.js` (Changed code · before: `L5320-L5322` → after: `L11180-L11182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11180-L11182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11180-L11182) · [Before (L5320-L5322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5320-L5322)

```diff
-                         } else if (Nv.elementType === ev.type) {
-                           Pv(vv, Nv.sibling), (hv = Sv(Nv, ev.props)).ref = qg(vv, Nv, ev), hv.return = vv, vv = hv;
-                           break vv
+                           KT();
+                           var yT = new Error("No available storage method found.");
+                           return lT._driverSet = xT.reject(yT), lT._driverSet
```

#### 337. `bundles/bloxd.io/main.js` (Changed code · before: `L5324-L5325` → after: `L11184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11184) · [Before (L5324-L5325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5324-L5325)

```diff
-                         Pv(vv, Nv);
-                         break
+                         return cT()
```

#### 338. `bundles/bloxd.io/main.js` (Changed code · before: `L5329-L5358` → after: `L11187-L11280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11187-L11280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11187-L11280) · [Before (L5329-L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5329-L5358)

```diff
-                     ev.type === Yv ? ((hv = al(ev.props.children, vv.mode, dv, ev.key)).return = vv, vv = hv) : ((dv = wl(ev.type, ev.key, ev.props, null, vv.mode, dv)).ref = qg(vv, hv, ev), dv.return = vv, vv = dv)
-                   }
-                   return pv(vv);
-                 case Fv:
-                   vv: {
-                     for (Nv = ev.key; null !== hv;) {
-                       if (hv.key === Nv) {
-                         if (4 === hv.tag && hv.stateNode.containerInfo === ev.containerInfo && hv.stateNode.implementation === ev.implementation) {
-                           Pv(vv, hv.sibling), (hv = Sv(hv, ev.children || [])).return = vv, vv = hv;
-                           break vv
-                         }
-                         Pv(vv, hv);
-                         break
-                       }
-                       zv(vv, hv), hv = hv.sibling
-                     }(hv = il(ev, vv.mode, dv)).return = vv,
- ... (14 more removed lines; see GitHub link above)
+                     var fT = null !== this._driverSet ? this._driverSet.catch((function() {
+                       return xT.resolve()
+                     })) : xT.resolve();
+                     return this._driverSet = fT.then((function() {
+                       var TT = MT[0];
+                       return lT._dbInfo = null, lT._ready = null, lT.getDriver(TT).then((function(TT) {
+                         lT._driver = TT._driver, KT(), lT._wrapLibraryMethodsWithReady(), lT._initDriver = yT(MT)
+                       }))
+                     })).catch((function() {
+                       KT();
+                       var TT = new Error("No available storage method found.");
+                       return lT._driverSet = xT.reject(TT), lT._driverSet
+                     })), AT(this._driverSet, kT, cT), this._driverSet
+                   }, TT.prototype.supports = function(TT) {
+                     return !!lc[TT]
+                   }, TT.prototype._extend = function(TT) {
+ ... (78 more added lines; see GitHub link above)
```

#### 339. `bundles/bloxd.io/main.js` (Changed code · before: `L5375-L5385` → after: `L11290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11290) · [Before (L5375-L5385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5375-L5385)

```diff
-           function Jg(vv, zv) {
-             switch (me(yg, zv), me(Mg, vv), me(Hg, Lg), vv = zv.nodeType) {
-               case 9:
-               case 11:
-                 zv = (zv = zv.documentElement) ? zv.namespaceURI : Cz(null, "");
-                 break;
-               default:
-                 zv = Cz(zv = (vv = 8 === vv ? zv.parentNode : zv).namespaceURI || null, vv = vv.tagName)
-             }
-             Ge(Hg), me(Hg, zv)
-           }
+           function lT() {}
```

#### 340. `bundles/bloxd.io/main.js` (Changed code · before: `L5387-L5388` → after: `L11292-L11293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11292-L11293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11292-L11293) · [Before (L5387-L5388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5387-L5388)

```diff
-           function Eg() {
-             Ge(Hg), Ge(Mg), Ge(yg)
+           function MT(TT, kT, cT) {
+             this.nj = TT, this.context = kT, this.once = cT || !1
```

#### 341. `bundles/bloxd.io/main.js` (Changed code · before: `L5391-L5395` → after: `L11296-L11300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11296-L11300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11296-L11300) · [Before (L5391-L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5391-L5395)

```diff
-           function og(vv) {
-             Bg(yg.current);
-             var zv = Bg(Hg.current),
-               Pv = Cz(zv, vv.type);
-             zv !== Pv && (me(Mg, vv), me(Hg, Pv))
+           function KT(TT, kT, lT, KT, OT) {
+             if ("function" !== typeof lT) throw new TypeError("The listener must be a function");
+             var yT = new MT(lT, KT || TT, OT),
+               fT = cT ? cT + kT : kT;
+             return TT._events[fT] ? TT._events[fT].nj ? TT._events[fT] = [TT._events[fT], yT] : TT._events[fT].push(yT) : (TT._events[fT] = yT, TT._eventsCount++), TT
```

#### 342. `bundles/bloxd.io/main.js` (Changed code · before: `L5398-L5399` → after: `L11303-L11304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11303-L11304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11303-L11304) · [Before (L5398-L5399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5398-L5399)

```diff
-           function bg(vv) {
-             Mg.current === vv && (Ge(Hg), Ge(Mg))
+           function OT(TT, kT) {
+             0 === --TT._eventsCount ? TT._events = new lT : delete TT._events[kT]
```

#### 343. `bundles/bloxd.io/main.js` (Changed code · before: `L5403-L5412` → after: `L11307-L11344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11307-L11344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11307-L11344) · [Before (L5403-L5412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5403-L5412)

```diff
-           function kg(vv) {
-             for (var zv = vv; null !== zv;) {
-               if (13 === zv.tag) {
-                 var Pv = zv.memoizedState;
-                 if (null !== Pv && (null === (Pv = Pv.dehydrated) || "$?" === Pv.data || "$!" === Pv.data)) return zv
-               } else if (19 === zv.tag && void 0 !== zv.memoizedProps.revealOrder) {
-                 if (0 !== (64 & zv.flags)) return zv
-               } else if (null !== zv.child) {
-                 zv.child.return = zv, zv = zv.child;
-                 continue
+           function yT() {
+             this._events = new lT, this._eventsCount = 0
+           }
+           Object.create && (lT.prototype = Object.create(null), (new lT).__proto__ || (cT = !1)), yT.prototype.eventNames = function() {
+             var TT, lT, MT = [];
+             if (0 === this._eventsCount) return MT;
+             for (lT in TT = this._events) kT.call(TT, lT) && MT.push(cT ? lT.slice(1) : lT);
+             return Object.getOwnPropertySymbols ? MT.concat(Object.getOwnPropertySymbols(TT)) : MT
+           }, yT.prototype.listeners = function(TT) {
+             var kT = cT ? cT + TT : TT,
+               lT = this._events[kT];
+             if (!lT) return [];
+             if (lT.nj) return [lT.nj];
+             for (var MT = 0, KT = lT.length, OT = new Array(KT); MT < KT; MT++) OT[MT] = lT[MT].nj;
+             return OT
+           }, yT.prototype.listenerCount = function(TT) {
+ ... (22 more added lines; see GitHub link above)
```

#### 344. `bundles/bloxd.io/main.js` (Changed code · before: `L5414-L5417` → after: `L11346-L11366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11346-L11366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11346-L11366) · [Before (L5414-L5417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5414-L5417)

```diff
-               if (zv === vv) break;
-               for (; null === zv.sibling;) {
-                 if (null === zv.return || zv.return === vv) return null;
-                 zv = zv.return
+               for (xT = 1, fT = new Array(AT - 1); xT < AT; xT++) fT[xT - 1] = arguments[xT];
+               IT.nj.apply(IT.context, fT)
+             } else {
+               var CT, jT = IT.length;
+               for (xT = 0; xT < jT; xT++) switch (IT[xT].once && this.removeListener(TT, IT[xT].nj, void 0, !0), AT) {
+                 case 1:
+                   IT[xT].nj.call(IT[xT].context);
+                   break;
+                 case 2:
+                   IT[xT].nj.call(IT[xT].context, kT);
+                   break;
+                 case 3:
+                   IT[xT].nj.call(IT[xT].context, kT, lT);
+                   break;
+                 case 4:
+                   IT[xT].nj.call(IT[xT].context, kT, lT, MT);
+ ... (5 more added lines; see GitHub link above)
```

#### 345. `bundles/bloxd.io/main.js` (Changed code · before: `L5421-L5440` → after: `L11369-L11382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11369-L11382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11369-L11382) · [Before (L5421-L5440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5421-L5440)

```diff
-             return null
-           }
-           var Xg = null,
-             ug = null,
-             vp = !1;
- 
-           function zp(vv, zv) {
-             var Pv = ll(5, null, null, 0);
-             Pv.elementType = "DELETED", Pv.type = "DELETED", Pv.stateNode = zv, Pv.return = vv, Pv.flags = 8, null !== vv.lastEffect ? (vv.lastEffect.nextEffect = Pv, vv.lastEffect = Pv) : vv.firstEffect = vv.lastEffect = Pv
-           }
- 
-           function Pp(vv, zv) {
-             switch (vv.tag) {
-               case 5:
-                 var Pv = vv.type;
-                 return null !== (zv = 1 !== zv.nodeType || Pv.toLowerCase() !== zv.nodeName.toLowerCase() ? null : zv) && (vv.stateNode = zv, !0);
- ... (4 more removed lines; see GitHub link above)
+             return !0
+           }, yT.prototype.on = function(TT, kT, cT) {
+             return KT(this, TT, kT, cT, !1)
+           }, yT.prototype.once = function(TT, kT, cT) {
+             return KT(this, TT, kT, cT, !0)
+           }, yT.prototype.removeListener = function(TT, kT, lT, MT) {
+             var KT = cT ? cT + TT : TT;
+             if (!this._events[KT]) return this;
+             if (!kT) return OT(this, KT), this;
+             var yT = this._events[KT];
+             if (yT.nj) yT.nj !== kT || MT && !yT.once || lT && yT.context !== lT || OT(this, KT);
+             else {
+               for (var fT = 0, xT = [], IT = yT.length; fT < IT; fT++)(yT[fT].nj !== kT || MT && !yT[fT].once || lT && yT[fT].context !== lT) && xT.push(yT[fT]);
+               xT.length ? this._events[KT] = 1 === xT.length ? xT[0] : xT : OT(this, KT)
```

#### 346. `bundles/bloxd.io/main.js` (Changed code · before: `L5442-L5454` → after: `L11384-L11397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11384-L11397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11384-L11397) · [Before (L5442-L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5442-L5454)

```diff
-           }
- 
-           function hp(vv) {
-             if (vp) {
-               var zv = ug;
-               if (zv) {
-                 var Pv = zv;
-                 if (!Pp(vv, zv)) {
-                   if (!(zv = he(Pv.nextSibling)) || !Pp(vv, zv)) return vv.flags = -1025 & vv.flags | 2, vp = !1, void(Xg = vv);
-                   zp(Xg, Pv)
-                 }
-                 Xg = vv, ug = he(zv.firstChild)
-               } else vv.flags = -1025 & vv.flags | 2, vp = !1, Xg = vv
+             return this
+           }, yT.prototype.hN = function(TT) {
+             var kT;
+             return TT ? (kT = cT ? cT + TT : TT, this._events[kT] && OT(this, kT)) : (this._events = new lT, this._eventsCount = 0), this
+           }, yT.prototype.off = yT.prototype.removeListener, yT.prototype.addListener = yT.prototype.on, yT.prefixed = cT, yT.EventEmitter = yT, TT.exports = yT
+         },
+         1154: (TT, kT, cT) => {
+           const lT = cT(1161),
+             MT = ["Failed to fetch", "NetworkError when attempting to fetch resource.", "The Internet connection appears to be offline.", "Network request failed"];
+           class KT extends Error {
+             constructor(TT) {
+               super(), TT instanceof Error ? (this.originalError = TT, ({
+                 message: TT
+               } = TT)) : (this.originalError = new Error(TT), this.originalError.stack = this.stack), this.name = "AbortError", this.message = TT
```

#### 347. `bundles/bloxd.io/main.js` (Changed code · before: `L5457-L5481` → after: `L11400-L11422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11400-L11422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11400-L11422) · [Before (L5457-L5481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5457-L5481)

```diff
- 
-           function Sp(vv) {
-             for (vv = vv.return; null !== vv && 5 !== vv.tag && 3 !== vv.tag && 13 !== vv.tag;) vv = vv.return;
-             Xg = vv
-           }
- 
-           function ep(vv) {
-             if (vv !== Xg) return !1;
-             if (!vp) return Sp(vv), vp = !0, !1;
-             var zv = vv.type;
-             if (5 !== vv.tag || "head" !== zv && "body" !== zv && !uS(zv, vv.memoizedProps))
-               for (zv = ug; zv;) zp(vv, zv), zv = he(zv.nextSibling);
-             if (Sp(vv), 13 === vv.tag) {
-               if (!(vv = null !== (vv = vv.memoizedState) ? vv.dehydrated : null)) throw Error(gv(317));
-               vv: {
-                 for (vv = vv.nextSibling, zv = 0; vv;) {
- ... (9 more removed lines; see GitHub link above)
+           const OT = (TT, kT) => new Promise(((cT, OT) => {
+             kT = {
+               onFailedAttempt: () => {},
+               retries: 10,
+               ...kT
+             };
+             const yT = lT.operation(kT);
+             yT.attempt((async lT => {
+               try {
+                 cT(await TT(lT))
+               } catch (xT) {
+                 if (!(xT instanceof Error)) return void OT(new TypeError(`Non-error was thrown: "${xT}". You should only throw errors.`));
+                 if (xT instanceof KT) yT.stop(), OT(xT.originalError);
+                 else if (xT instanceof TypeError && (fT = xT.message, !MT.includes(fT))) yT.stop(), OT(xT);
+                 else {
+                   ((TT, kT, cT) => {
+ ... (7 more added lines; see GitHub link above)
```

#### 348. `bundles/bloxd.io/main.js` (Changed code · before: `L5483` → after: `L11424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11424) · [Before (L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5483)

```diff
-                   vv = vv.nextSibling
+                   yT.retry(xT) || OT(yT.mainError())
```

#### 349. `bundles/bloxd.io/main.js` (Changed code · before: `L5487-L5510` → after: `L11427-L11479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11427-L11479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11427-L11479) · [Before (L5487-L5510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5487-L5510)

```diff
-             } else ug = Xg ? he(vv.stateNode.nextSibling) : null;
-             return !0
-           }
- 
-           function gp() {
-             ug = Xg = null, vp = !1
-           }
-           var pp = [];
- 
-           function dp() {
-             for (var vv = 0; vv < pp.length; vv++) pp[vv]._workInProgressVersionPrimary = null;
-             pp.length = 0
-           }
-           var Np = jv.ReactCurrentDispatcher,
-             lp = jv.ReactCurrentBatchConfig,
-             Tp = 0,
- ... (8 more removed lines; see GitHub link above)
+               var fT
+             }))
+           }));
+           TT.exports = OT, TT.exports.default = OT, TT.exports.AbortError = KT
+         },
+         1161: (TT, kT, cT) => {
+           TT.exports = cT(1168)
+         },
+         1168: (TT, kT, cT) => {
+           var lT = cT(1175);
+           kT.operation = function(TT) {
+             var cT = kT.timeouts(TT);
+             return new lT(cT, {
+               forever: TT && (TT.forever || TT.retries === 1 / 0),
+               unref: TT && TT.unref,
+               maxRetryTime: TT && TT.maxRetryTime
+ ... (37 more added lines; see GitHub link above)
```

#### 350. `bundles/bloxd.io/main.js` (Changed code · before: `L5512` → after: `L11481-L11482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11481-L11482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11481-L11482) · [Before (L5512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5512)

```diff
- 
+         },
+         1175: TT => {
```

#### 351. `bundles/bloxd.io/main.js` (Changed code · before: `L5514-L5526` → after: `L11484-L11528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11484-L11528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11484-L11528) · [Before (L5514-L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5514-L5526)

```diff
-             if (null === zv) return !1;
-             for (var Pv = 0; Pv < zv.length && Pv < vv.length; Pv++)
-               if (!iS(vv[Pv], zv[Pv])) return !1;
-             return !0
-           }
- 
-           function Gp(vv, zv, Pv, hv, Sv, ev) {
-             if (Tp = ev, Wp = zv, zv.memoizedState = null, zv.updateQueue = null, zv.lanes = 0, Np.current = null === vv || null === vv.memoizedState ? Ep : op, vv = Pv(hv, Sv), Cp) {
-               ev = 0;
-               do {
-                 if (Cp = !1, !(25 > ev)) throw Error(gv(301));
-                 ev += 1, ap = wp = null, zv.updateQueue = null, Np.current = bp, vv = Pv(hv, Sv)
-               } while (Cp)
+             "boolean" === typeof kT && (kT = {
+               forever: kT
+             }), this._originalTimeouts = JSON.parse(JSON.stringify(TT)), this._timeouts = TT, this._options = kT || {}, this._maxRetryTime = kT && kT.maxRetryTime || 1 / 0, this._fn = null, this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeo … [truncated]
+           }
+           TT.exports = kT, kT.prototype.reset = function() {
+             this._attempts = 1, this._timeouts = this._originalTimeouts.slice(0)
+           }, kT.prototype.stop = function() {
+             this._timeout && clearTimeout(this._timeout), this._timer && clearTimeout(this._timer), this._timeouts = [], this._cachedTimeouts = null
+           }, kT.prototype.retry = function(TT) {
+             if (this._timeout && clearTimeout(this._timeout), !TT) return !1;
+             var kT = (new Date).getTime();
+             if (TT && kT - this._operationStart >= this._maxRetryTime) return this._errors.push(TT), this._errors.unshift(new Error("RetryOperation timeout occurred")), !1;
+             this._errors.push(TT);
+             var cT = this._timeouts.shift();
+             if (void 0 === cT) {
+               if (!this._cachedTimeouts) return !1;
+ ... (29 more added lines; see GitHub link above)
```

#### 352. `bundles/bloxd.io/main.js` (Changed code · before: `L5531-L5540` → after: `L11532-L11535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11532-L11535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11532-L11535) · [Before (L5531-L5540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5531-L5540)

```diff
- 
-           function mp() {
-             var vv = {
-               memoizedState: null,
-               baseState: null,
-               baseQueue: null,
-               queue: null,
-               next: null
-             };
-             return null === ap ? Wp.memoizedState = ap = vv : ap = ap.next = vv, ap
+         },
+         4215: TT => {
+           function kT(TT) {
+             if ("string" !== typeof TT) throw new TypeError("Path must be a string. Received " + JSON.stringify(TT))
```

#### 353. `bundles/bloxd.io/main.js` (Changed code · before: `L5543-L5558` → after: `L11538-L11562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11538-L11562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L11538-L11562) · [Before (L5543-L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L5543-L5558)

```diff
-           function jp() {
-             if (null === wp) {
-               var vv = Wp.alternate;
-               vv = null !== vv ? vv.memoizedState : null
-             } else vv = wp.next;
-             var zv = null === ap ? Wp.memoizedState : ap.next;
-             if (null !== zv) ap = zv, wp = vv;
-             else {
-               if (null === vv) throw Error(gv(310));
-               vv = {
-                 memoizedState: (wp = vv).memoizedState,
-                 baseState: wp.baseState,
-                 baseQueue: wp.baseQueue,
-                 queue: wp.queue,
-                 next: null
-               }, null === ap ? Wp.memoizedState = ap = vv : ap = ap.next = vv
+           function cT(TT, kT) {
+             for (var cT, lT = "", MT = 0, KT = -1, OT = 0, yT = 0; yT <= TT.length; ++yT) {
+               if (yT < TT.length) cT = TT.charCodeAt(yT);
+               else {
+                 if (47 === cT) break;
+                 cT = 47
+               }
+               if (47 === cT) {
+                 if (KT === yT - 1 || 1 === OT);
+                 else if (KT !== yT - 1 && 2 === OT) {
+                   if (lT.length < 2 || 2 !== MT || 46 !== lT.charCodeAt(lT.length - 1) || 46 !== lT.charCodeAt(lT.length - 2))
+                     if (lT.length > 2) {
+                       var fT = lT.lastIndexOf("/");
+                       if (fT !== lT.length - 1) {
+                         -1 === fT ? (lT = "", MT = 0) : MT = (lT = lT.slice(0, fT)).length - 1 - lT.lastIndexOf("/"), KT = yT, OT = 0;
+                         continue
+ ... (9 more added lines; see GitHub link above)
```
