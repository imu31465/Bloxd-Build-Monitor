# Changed — Bundle Modifications Report (Part 015 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `15 / 56` (**279** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 014](part-014.md) · [Part 016 →](part-016.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/270.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/270.js` (87 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0)

#### 52. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L680-L681` → after: `L2243-L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2243-L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2243-L2244) · [Before (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L680-L681)

```diff
-       get config() {
-         return this.checkDestroyed(), this._config
+       bindOnlyNormalMatrix(QQ) {
+         this._activeEffect.setMatrix("normalMatrix", QQ)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L683-L684` → after: `L2246-L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2246-L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2246-L2247) · [Before (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L683-L684)

```diff
-       get container() {
-         return this._container
+       bind(QQ, WQ) {
+         WQ && this.bindForSubMesh(QQ, WQ, WQ.ZD[0])
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L686-L687` → after: `L2249-L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2249-L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2249-L2252) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L686-L687)

```diff
-       get isDeleted() {
-         return this._isDeleted
+       _afterBind(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           XQ = arguments.length > 2 ? arguments[2] : void 0;
+         super._afterBind(QQ, WQ, XQ), this.sE()._cachedEffect = WQ, XQ ? XQ._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L689-L690` → after: `L2254-L2256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2254-L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2254-L2256) · [Before (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L689-L690)

```diff
-       set isDeleted(pp) {
-         this._isDeleted = pp
+       _mustRebind(QQ, WQ, XQ) {
+         let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
+         return XQ._drawWrapper._forceRebindOnNextCall || QQ.isCachedMaterialInvalid(this, WQ, wQ)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L692-L695` → after: `L2258-L2259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2258-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2258-L2259) · [Before (L692-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L692-L695)

```diff
-       checkDestroyed() {
-         if (this.isDeleted) throw Ai.create("app-deleted", {
-           appName: this._name
-         })
+       dispose(QQ, WQ, XQ) {
+         this._activeEffect = void 0, super.dispose(QQ, WQ, XQ)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L698` → after: `L2262-L2268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2262-L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2262-L2268) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L698)

```diff
-     const Wi = "9.23.0";
+   },
+   40621: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => TQ,
+       d: () => qQ
+     });
+     const wQ = new WeakMap;
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L701-L717` → after: `L2271-L2273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2271-L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2271-L2273) · [Before (L701-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L701-L717)

```diff
-       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         cp = pp;
-       if ("object" !== typeof ip) {
-         ip = {
-           name: ip
-         }
-       }
-       const op = Object.assign({
-           name: Vp,
-           automaticDataCollectionEnabled: !1
-         }, ip),
-         Sp = op.name;
-       if ("string" !== typeof Sp || !Sp) throw Ai.create("bad-app-name", {
-         appName: String(Sp)
-       });
-       if (cp || (cp = (0, Ip.B)()), !cp) throw Ai.create("no-options");
- ... (1 more removed lines; see GitHub link above)
+       const WQ = QQ.getVertexBuffers();
+       if (!WQ) return null;
+       let XQ = wQ.get(QQ);
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L719-L722` → after: `L2275-L2295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2275-L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2275-L2295) · [Before (L719-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L719-L722)

```diff
-         if ((0, Ip.y)(cp, xp.options) && (0, Ip.y)(op, xp.config)) return xp;
-         throw Ai.create("duplicate-app", {
-           appName: Sp
-         })
+         let QQ = !1;
+         for (const wQ in WQ)
+           if (!XQ.has(wQ)) {
+             QQ = !0;
+             break
+           } if (!QQ) return XQ
+       } else XQ = new Map, wQ.set(QQ, XQ);
+       for (const wQ in WQ) {
+         const QQ = WQ[wQ];
+         if (QQ) {
+           const WQ = QQ.byteOffset,
+             qQ = QQ.byteStride,
+             TQ = QQ.type,
+             zQ = QQ.normalized;
+           XQ.set(wQ, {
+             offset: WQ,
+ ... (5 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L765-L876` → after: `L2301-L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2301-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2301-L2304) · [Before (L765-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L765-L876)

```diff
-       if (null !== pp && "function" !== typeof pp) throw Ai.create("invalid-log-argument");
-       (0, op.j)(pp, ip)
-     }
- 
-     function di(pp) {
-       (0, op.g)(pp)
-     }
-     const ei = "firebase-heartbeat-store";
-     let ui = null;
- 
-     function ji() {
-       return ui || (ui = function(pp, ip) {
-         let {
-           blocked: cp,
-           upgrade: Op,
-           blocking: op,
- ... (96 more removed lines; see GitHub link above)
+       WQ.forEach(((WQ, XQ) => {
+         const wQ = `vp_${XQ}_info`;
+         QQ.setFloat4(wQ, WQ.offset, WQ.stride, WQ.type, WQ.normalized ? 1 : 0)
+       }))
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L878-L901` → after: `L2306-L2325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2306-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2306-L2325) · [Before (L878-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L878-L901)

```diff
-     class Mi {
-       constructor(pp) {
-         this.app = pp, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
-       }
-       async runIndexedDBEnvironmentCheck() {
-         return !!(0, Ip.Q)() && (0, Ip.gb)().then((() => !0)).catch((() => !1))
-       }
-       async read() {
-         if (await this._canUseIndexedDBPromise) {
-           return await async function(pp) {
-             try {
-               const ip = await ji();
-               return await ip.transaction(ei).objectStore(ei).get(mi(pp))
-             } catch (ip) {
-               if (ip instanceof Ip.l) Rp.warn(ip.message);
-               else {
- ... (8 more removed lines; see GitHub link above)
+   },
+   40573: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => sQ,
+       c: () => FQ
+     });
+     var wQ = XQ(40260),
+       qQ = XQ(37370),
+       TQ = XQ(40268);
+     let zQ = (() => {
+       var QQ;
+       let WQ, XQ, qQ = [];
+       return QQ = class {
+         static extractMinAndMaxIndexed(QQ, WQ, XQ, wQ, qQ, TQ) {
+           for (let zQ = XQ; zQ < XQ + wQ; zQ++) {
+             const XQ = 3 * WQ[zQ],
+ ... (4 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L904-L925` → after: `L2328-L2334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2328-L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2328-L2334) · [Before (L904-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L904-L925)

```diff
-         return {
-           heartbeats: []
-         }
-       }
-       async overwrite(pp) {
-         var ip;
-         if (await this._canUseIndexedDBPromise) {
-           const cp = await this.read();
-           return ki(this.app, {
-             lastSentHeartbeatDate: null !== (ip = pp.lastSentHeartbeatDate) && void 0 !== ip ? ip : cp.lastSentHeartbeatDate,
-             heartbeats: pp.heartbeats
-           })
-         }
-       }
-       async add(pp) {
-         var ip;
- ... (6 more removed lines; see GitHub link above)
+         static extractMinAndMax(QQ, WQ, XQ, wQ, qQ, TQ) {
+           for (let zQ = WQ, sQ = WQ * wQ; zQ < WQ + XQ; zQ++, sQ += wQ) {
+             const WQ = QQ[sQ],
+               XQ = QQ[sQ + 1],
+               wQ = QQ[sQ + 2];
+             qQ.minimizeInPlaceFromFloats(WQ, XQ, wQ), TQ.maximizeInPlaceFromFloats(WQ, XQ, wQ)
+           }
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L930-L934` → after: `L2381-L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2381-L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2381-L2389) · [Before (L930-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L930-L934)

```diff
-     function Ci(pp) {
-       return (0, Ip.s)(JSON.stringify({
-         version: 2,
-         heartbeats: pp
-       })).length
+     function FQ(QQ, WQ, XQ) {
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+         TQ = arguments.length > 4 ? arguments[4] : void 0;
+       const sQ = new qQ.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         FQ = new qQ.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+       return TQ || (TQ = 3), zQ.extractMinAndMax(QQ, WQ, XQ, TQ, sQ, FQ), wQ && (sQ.x -= sQ.x * wQ.x + wQ.y, sQ.y -= sQ.y * wQ.x + wQ.y, sQ.z -= sQ.z * wQ.x + wQ.y, FQ.x += FQ.x * wQ.x + wQ.y, FQ.y += FQ.y * wQ.x + wQ.y, FQ.z += FQ.z * wQ.x + wQ.y), {
+         minimum: sQ,
+         maximum: FQ
+       }
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L939` → after: `L2392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2392) · [Before (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L939)

```diff
-   40692: (pp, ip, cp) => {
+   40555: (QQ, WQ, XQ) => {
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L941-L942` → after: `L2394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2394) · [Before (L941-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L941-L942)

```diff
-       c: () => xp,
-       d: () => op
+       b: () => gQ
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L944` → after: `L2396-L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2396-L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2396-L2401) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L944)

```diff
-     var Op = cp(40700);
+     var wQ, qQ = XQ(40404),
+       TQ = XQ(40557),
+       zQ = XQ(40561),
+       sQ = XQ(40573),
+       FQ = XQ(40578),
+       PQ = XQ(40153);
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L946-L950` → after: `L2403-L2445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2403-L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2403-L2445) · [Before (L946-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L946-L950)

```diff
-       constructor(pp, ip, cp) {
-         this.name = pp, this.instanceFactory = ip, this.type = cp, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
-       }
-       setInstantiationMode(pp) {
-         return this.instantiationMode = pp, this
+       get materialDefines() {
+         const QQ = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
+         return "string" === typeof QQ ? null : QQ
+       }
+       set materialDefines(QQ) {
+         (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = QQ
+       }
+       _getDrawWrapper(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         QQ = QQ ?? this._engine.currentRenderPassId;
+         let XQ = this._drawWrappers[QQ];
+         return !XQ && WQ && (this._drawWrappers[QQ] = XQ = new FQ.d(this._mesh.sE().Uj())), XQ
+       }
+       _removeDrawWrapper(QQ) {
+         let WQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[QQ]?.dispose(WQ), this._drawWrappers[QQ] = void 0
+ ... (27 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L952-L953` → after: `L2447-L2448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2447-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2447-L2448) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L952-L953)

```diff
-       setMultipleInstances(pp) {
-         return this.multipleInstances = pp, this
+       static AddToMesh(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
+         return new gQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L955-L956` → after: `L2450-L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2450-L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2450-L2453) · [Before (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L955-L956)

```diff
-       setServiceProps(pp) {
-         return this.serviceProps = pp, this
+       constructor(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
+         let sQ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
+           FQ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
+         this.materialIndex = QQ, this.verticesStart = WQ, this.verticesCount = XQ, this.indexStart = wQ, this.indexCount = qQ, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastCollide … [truncated]
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L958-L959` → after: `L2455-L2456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2455-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2455-L2456) · [Before (L958-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L958-L959)

```diff
-       setInstanceCreatedCallback(pp) {
-         return this.onInstanceCreated = pp, this
+       get IsGlobal() {
+         return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L961-L1020` → after: `L2458-L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2458-L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2458-L2459) · [Before (L961-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L961-L1020)

```diff
-     }
-     const Ip = "[DEFAULT]";
-     class Sp {
-       constructor(pp, ip) {
-         this.name = pp, this.container = ip, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
-       }
-       get(pp) {
-         const ip = this.normalizeInstanceIdentifier(pp);
-         if (!this.instancesDeferred.has(ip)) {
-           const pp = new Op.e;
-           if (this.instancesDeferred.set(ip, pp), this.isInitialized(ip) || this.shouldAutoInitialize()) try {
-             const cp = this.getOrInitializeService({
-               instanceIdentifier: ip
-             });
-             cp && pp.resolve(cp)
-           } catch (cp) {}
- ... (44 more removed lines; see GitHub link above)
+       uC() {
+         return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.uC() : this._boundingInfo
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1022-L1024` → after: `L2461-L2462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2461-L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2461-L2462) · [Before (L1022-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L1022-L1024)

```diff
-       clearInstance() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ip;
-         this.instancesDeferred.delete(pp), this.instancesOptions.delete(pp), this.instances.delete(pp)
+       setBoundingInfo(QQ) {
+         return this._boundingInfo = QQ, this
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1026-L1028` → after: `L2464-L2465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2464-L2465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2464-L2465) · [Before (L1026-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L1026-L1028)

```diff
-       async delete() {
-         const pp = Array.from(this.instances.values());
-         await Promise.all([...pp.filter((pp => "INTERNAL" in pp)).map((pp => pp.INTERNAL.delete())), ...pp.filter((pp => "_delete" in pp)).map((pp => pp._delete()))])
+       getMesh() {
+         return this._mesh
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1030-L1031` → after: `L2467-L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2467-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2467-L2468) · [Before (L1030-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L1030-L1031)

```diff
-       isComponentSet() {
-         return null != this.component
+       getRenderingMesh() {
+         return this._renderingMesh
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1033-L1035` → after: `L2470-L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2470-L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2470-L2471) · [Before (L1033-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L1033-L1035)

```diff
-       isInitialized() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ip;
-         return this.instances.has(pp)
+       getReplacementMesh() {
+         return this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1037-L1039` → after: `L2473-L2475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2473-L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2473-L2475) · [Before (L1037-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L1037-L1039)

```diff
-       getOptions() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ip;
-         return this.instancesOptions.get(pp) || {}
+       getEffectiveMesh() {
+         const QQ = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
+         return QQ || this._renderingMesh
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1041-L1053` → after: `L2477-L2483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2477-L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2477-L2483) · [Before (L1041-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L1041-L1053)

```diff
-       initialize() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         const {
-           options: ip = {}
-         } = pp, cp = this.normalizeInstanceIdentifier(pp.instanceIdentifier);
-         if (this.isInitialized(cp)) throw Error(`${this.name}(${cp}) has already been initialized`);
-         if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
-         const Op = this.getOrInitializeService({
-           instanceIdentifier: cp,
-           options: ip
-         });
-         for (const [op, Ip] of this.instancesDeferred.entries()) {
-           cp === this.normalizeInstanceIdentifier(op) && Ip.resolve(Op)
+       lj() {
+         let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         const WQ = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
+         if (!WQ) return QQ && this._mesh.sE()._hasDefaultMaterial ? this._mesh.sE().defaultMaterial : null;
+         if (this._isMultiMaterial(WQ)) {
+           const QQ = WQ.getSubMaterial(this.materialIndex);
+           return this._currentMaterial !== QQ && (this._currentMaterial = QQ, this.resetDrawCache()), QQ
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1057-L1169` → after: `L2487-L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2487-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2487-L2488) · [Before (L1057-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L1057-L1169)

```diff
-       pN(pp, ip) {
-         var cp;
-         const Op = this.normalizeInstanceIdentifier(ip),
-           op = null !== (cp = this.onInitCallbacks.get(Op)) && void 0 !== cp ? cp : new Set;
-         op.add(pp), this.onInitCallbacks.set(Op, op);
-         const Ip = this.instances.get(Op);
-         return Ip && pp(Ip, Op), () => {
-           op.delete(pp)
-         }
-       }
-       invokeOnInitCallbacks(pp, ip) {
-         const cp = this.onInitCallbacks.get(ip);
-         if (cp)
-           for (const op of cp) try {
-             op(pp, ip)
-           } catch (Op) {}
- ... (97 more removed lines; see GitHub link above)
+       _isMultiMaterial(QQ) {
+         return void 0 !== QQ.getSubMaterial
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1171-L1176` → after: `L2490-L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2490-L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2490-L2554) · [Before (L1171-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L1171-L1176)

```diff
-       set logHandler(pp) {
-         if ("function" !== typeof pp) throw new TypeError("Value assigned to `logHandler` must be a function");
-         this._logHandler = pp
-       }
-       get userLogHandler() {
-         return this._userLogHandler
+       refreshBoundingInfo() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
+         if (QQ || (QQ = this._renderingMesh.getVerticesData(qQ.l.PositionKind)), !QQ) return this._boundingInfo = this._mesh.uC(), this;
+         const WQ = this._renderingMesh.lwQ();
+         let XQ;
+         if (0 === this.indexStart && this.indexCount === WQ.length) {
+           const QQ = this._renderingMesh.uC();
+           XQ = {
+             minimum: QQ.minimum.clone(),
+             maximum: QQ.maximum.clone()
+           }
+         } else XQ = (0, sQ.b)(QQ, WQ, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
+         return this._boundingInfo ? this._boundingInfo.reConstruct(XQ.minimum, XQ.maximum) : this._boundingInfo = new zQ.e(XQ.minimum, XQ.maximum), this
+       }
+       _checkCollision(QQ) {
+ ... (49 more added lines; see GitHub link above)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1178-L1179` → after: `L2556-L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2556-L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2556-L2564) · [Before (L1178-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L1178-L1179)

```diff
-       set userLogHandler(pp) {
-         this._userLogHandler = pp
+       _intersectLines(QQ, WQ, XQ, wQ, qQ) {
+         let zQ = null;
+         for (let sQ = this.indexStart; sQ < this.indexStart + this.indexCount; sQ += 2) {
+           const FQ = WQ[XQ[sQ]],
+             PQ = WQ[XQ[sQ + 1]],
+             gQ = QQ.intersectionSegment(FQ, PQ, wQ);
+           if (!(gQ < 0) && ((qQ || !zQ || gQ < zQ.distance) && (zQ = new TQ.c(null, null, gQ), zQ.faceId = sQ / 2, qQ))) break
+         }
+         return zQ
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1181-L1183` → after: `L2566-L2574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2566-L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2566-L2574) · [Before (L1181-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L1181-L1183)

```diff
-       debug() {
-         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
-         this._userLogHandler && this._userLogHandler(this, op.DEBUG, ...ip), this._logHandler(this, op.DEBUG, ...ip)
+       _intersectUnIndexedLines(QQ, WQ, XQ, wQ, qQ) {
+         let zQ = null;
+         for (let sQ = this.verticesStart; sQ < this.verticesStart + this.verticesCount; sQ += 2) {
+           const XQ = WQ[sQ],
+             FQ = WQ[sQ + 1],
+             PQ = QQ.intersectionSegment(XQ, FQ, wQ);
+           if (!(PQ < 0) && ((qQ || !zQ || PQ < zQ.distance) && (zQ = new TQ.c(null, null, PQ), zQ.faceId = sQ / 2, qQ))) break
+         }
+         return zQ
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1185-L1187` → after: `L2576-L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2576-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2576-L2599) · [Before (L1185-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L1185-L1187)

```diff
-       log() {
-         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
-         this._userLogHandler && this._userLogHandler(this, op.VERBOSE, ...ip), this._logHandler(this, op.VERBOSE, ...ip)
+       _intersectTriangles(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
+         let sQ = null,
+           FQ = -1;
+         for (let PQ = this.indexStart; PQ < this.indexStart + this.indexCount - (3 - wQ); PQ += wQ) {
+           FQ++;
+           const wQ = XQ[PQ],
+             gQ = XQ[PQ + 1],
+             JQ = XQ[PQ + 2];
+           if (qQ && 4294967295 === JQ) {
+             PQ += 2;
+             continue
+           }
+           const rQ = WQ[wQ],
+             IQ = WQ[gQ],
+             jQ = WQ[JQ];
+           if (!rQ || !IQ || !jQ) continue;
+ ... (8 more added lines; see GitHub link above)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1189-L1191` → after: `L2601-L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2601-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2601-L2614) · [Before (L1189-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L1189-L1191)

```diff
-       info() {
-         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
-         this._userLogHandler && this._userLogHandler(this, op.INFO, ...ip), this._logHandler(this, op.INFO, ...ip)
+       _intersectUnIndexedTriangles(QQ, WQ, XQ, wQ, qQ) {
+         let TQ = null;
+         for (let zQ = this.verticesStart; zQ < this.verticesStart + this.verticesCount; zQ += 3) {
+           const XQ = WQ[zQ],
+             sQ = WQ[zQ + 1],
+             FQ = WQ[zQ + 2];
+           if (qQ && !qQ(XQ, sQ, FQ, QQ, -1, -1, -1)) continue;
+           const PQ = QQ.intersectsTriangle(XQ, sQ, FQ);
+           if (PQ) {
+             if (PQ.distance < 0) continue;
+             if ((wQ || !TQ || PQ.distance < TQ.distance) && (TQ = PQ, TQ.faceId = zQ / 3, wQ)) break
+           }
+         }
+         return TQ
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1193-L1195` → after: `L2616-L2617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2616-L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2616-L2617) · [Before (L1193-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L1193-L1195)

```diff
-       warn() {
-         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
-         this._userLogHandler && this._userLogHandler(this, op.WARN, ...ip), this._logHandler(this, op.WARN, ...ip)
+       _rebuild() {
+         this._linesIndexBuffer && (this._linesIndexBuffer = null)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1197-L1199` → after: `L2619-L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2619-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2619-L2626) · [Before (L1197-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L1197-L1199)

```diff
-       error() {
-         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
-         this._userLogHandler && this._userLogHandler(this, op.ERROR, ...ip), this._logHandler(this, op.ERROR, ...ip)
+       clone(QQ, WQ) {
+         const XQ = new gQ(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, QQ, WQ, !1);
+         if (!this.IsGlobal) {
+           const QQ = this.uC();
+           if (!QQ) return XQ;
+           XQ._boundingInfo = new zQ.e(QQ.minimum, QQ.maximum)
+         }
+         return XQ
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1201-L1230` → after: `L2628-L2644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2628-L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2628-L2644) · [Before (L1201-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L1201-L1230)

```diff
-     }
- 
-     function Dp(pp) {
-       Op.forEach((ip => {
-         ip.setLogLevel(pp)
-       }))
-     }
- 
-     function Ap(pp, ip) {
-       for (const cp of Op) {
-         let Op = null;
-         ip && ip.level && (Op = Ip[ip.level]), cp.userLogHandler = null === pp ? null : function(ip, cp) {
-           for (var Ip = arguments.length, Sp = new Array(Ip > 2 ? Ip - 2 : 0), xp = 2; xp < Ip; xp++) Sp[xp - 2] = arguments[xp];
-           const Lp = Sp.map((pp => {
-             if (null == pp) return null;
-             if ("string" === typeof pp) return pp;
- ... (14 more removed lines; see GitHub link above)
+       dispose() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         this._linesIndexBuffer && (this._mesh.sE().Uj()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
+         const WQ = this._mesh.ZD.indexOf(this);
+         this._mesh.ZD.splice(WQ, 1), this.resetDrawCache(void 0, QQ)
+       }
+       getClassName() {
+         return "SubMesh"
+       }
+       static CreateFromIndices(QQ, WQ, XQ, wQ, qQ) {
+         let TQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+           zQ = Number.MAX_VALUE,
+           sQ = -Number.MAX_VALUE;
+         const FQ = (qQ || wQ).lwQ();
+         for (let PQ = WQ; PQ < WQ + XQ; PQ++) {
+           const QQ = FQ[PQ];
+ ... (1 more added lines; see GitHub link above)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1233` → after: `L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2648) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L1233)

```diff
-     }
+     }(wQ = gQ.prototype).projectToRef ?? (wQ.projectToRef = (0, PQ.h)("SubMesh", "projectToRef"))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/271.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/271.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136)

#### 1. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L5-L18` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L4-L6) · [Before (L5-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L5-L18)

```diff
-   40713: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       getAnalytics: () => zi,
-       getGoogleAnalyticsClientId: () => pc,
-       initializeAnalytics: () => si,
-       isSupported: () => Ki,
-       logEvent: () => Ic,
-       setAnalyticsCollectionEnabled: () => Oc,
-       setConsent: () => Sc,
-       setCurrentScreen: () => Vi,
-       setDefaultEventParameters: () => oc,
-       setUserId: () => ic,
-       setUserProperties: () => cc,
-       settings: () => ri
+   41834: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => wQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L20-L35` → after: `L8-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L8-L26) · [Before (L20-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L20-L35)

```diff
-     var Op = cp(40687),
-       op = cp(40704),
-       Ip = cp(40700),
-       Sp = cp(40692);
-     let xp, Lp;
-     const Yp = new WeakMap,
-       Dp = new WeakMap,
-       Ap = new WeakMap,
-       Pp = new WeakMap,
-       Wp = new WeakMap;
-     let yp = {
-       get(pp, ip, cp) {
-         if (pp instanceof IDBTransaction) {
-           if ("done" === ip) return Dp.get(pp);
-           if ("objectStoreNames" === ip) return pp.objectStoreNames || Ap.get(pp);
-           if ("store" === ip) return cp.objectStoreNames[1] ? void 0 : cp.objectStore(cp.objectStoreNames[0])
+     class wQ {}
+     wQ.AUTOSAMPLERSUFFIX = "Sampler", wQ.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", wQ.ALPHA_DISABLE = 0, wQ.ALPHA_ADD = 1, wQ.ALPHA_COMBINE = 2, wQ.ALPHA_SUBTRACT = 3, wQ.ALPHA_MULTIPLY = 4, wQ.ALPHA_MAXIMIZED = 5, wQ.ALPHA_ONEONE = 6, wQ.ALPHA_PREMULTIPLIED = 7, wQ.ALPH … [truncated]
+   },
+   41824: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => FQ
+     });
+     var wQ = XQ(40260),
+       qQ = XQ(40268),
+       TQ = XQ(37370),
+       zQ = XQ(40525),
+       sQ = XQ(40496);
+     let FQ = (() => {
+       var QQ;
+       let WQ, XQ, FQ, PQ, gQ = zQ.d,
+         JQ = [];
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L37-L53` → after: `L28-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L28-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L28-L185) · [Before (L37-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L37-L53)

```diff
-         return vp(pp[ip])
-       },
-       set: (pp, ip, cp) => (pp[ip] = cp, !0),
-       has: (pp, ip) => pp instanceof IDBTransaction && ("done" === ip || "store" === ip) || ip in pp
-     };
- 
-     function Up(pp) {
-       return pp !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Lp || (Lp = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(pp) ? function() {
-         for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
-         return pp.apply(tp(this), cp), vp(Yp.get(this))
-       } : function() {
-         for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
-         return vp(pp.apply(tp(this), cp))
-       } : function(ip) {
-         for (var cp = arguments.length, Op = new Array(cp > 1 ? cp - 1 : 0), op = 1; op < cp; op++) Op[op - 1] = arguments[op];
-         const Ip = pp.call(tp(this), ip, ...Op);
- ... (1 more removed lines; see GitHub link above)
+         _setPosition(QQ) {
+           this._position = QQ
+         }
+         get position() {
+           return this._position
+         }
+         set position(QQ) {
+           this._setPosition(QQ)
+         }
+         _setDirection(QQ) {
+           this._direction = QQ
+         }
+         get direction() {
+           return this._direction
+         }
+         set direction(QQ) {
+ ... (142 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L55-L213` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L187-L188) · [Before (L55-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L55-L213)

```diff
-     }
- 
-     function wp(pp) {
-       return "function" === typeof pp ? Up(pp) : (pp instanceof IDBTransaction && function(pp) {
-         if (Dp.has(pp)) return;
-         const ip = new Promise(((ip, cp) => {
-           const Op = () => {
-               pp.removeEventListener("complete", op), pp.removeEventListener("error", Ip), pp.removeEventListener("abort", Ip)
-             },
-             op = () => {
-               ip(), Op()
-             },
-             Ip = () => {
-               cp(pp.error || new DOMException("AbortError", "AbortError")), Op()
-             };
-           pp.addEventListener("complete", op), pp.addEventListener("error", Ip), pp.addEventListener("abort", Ip)
- ... (143 more removed lines; see GitHub link above)
+       update(QQ) {
+         this.updateMipLevel(QQ, 0)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L215-L385` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L190-L191) · [Before (L215-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L215-L385)

```diff
-     }
- 
-     function np(pp) {
-       return `${pp.appName}!${pp.appId}`
-     }
-     const Fp = new Map;
- 
-     function gp(pp, ip) {
-       const cp = np(pp);
-       Gp(cp, ip),
-         function(pp, ip) {
-           const cp = Zp();
-           cp && cp.postMessage({
-             key: pp,
-             fid: ip
-           });
- ... (155 more removed lines; see GitHub link above)
+       updateMipLevel(QQ, WQ) {
+         this._getEngine().updateRawTexture(this._texture, QQ, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, WQ), this._waitingForData = !1
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L387-L396` → after: `L193-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L193-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L193-L196) · [Before (L387-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L387-L396)

```diff
-     }
-     async function Ii(pp) {
-       let ip = await Si(pp.appConfig);
-       for (; 1 === ip.registrationStatus;) await bp(100), ip = await Si(pp.appConfig);
-       if (0 === ip.registrationStatus) {
-         const {
-           installationEntry: ip,
-           registrationPromise: cp
-         } = await oi(pp);
-         return cp || ip
+       clone() {
+         if (!this._texture) return super.clone();
+         const QQ = new qQ(null, this.getSize().width, this.getSize().height, this.format, this.sE(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
+         return QQ._texture = this._texture, this._texture.incrementReferences(), QQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L398-L432` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L198-L199) · [Before (L398-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L398-L432)

```diff
-       return ip
-     }
- 
-     function Si(pp) {
-       return Oi(pp, (pp => {
-         if (!pp) throw Xp.create("installation-not-found");
-         return xi(pp)
-       }))
-     }
- 
-     function xi(pp) {
-       return 1 === (ip = pp).registrationStatus && ip.registrationTime + Rp < Date.now() ? {
-         fid: pp.fid,
-         registrationStatus: 0
-       } : pp;
-       var ip
- ... (19 more removed lines; see GitHub link above)
+       isReady() {
+         return super.isReady() && !this._waitingForData
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L434-L447` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L201-L202) · [Before (L434-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L434-L447)

```diff
-       const xp = {
-           installation: {
-             sdkVersion: qp,
-             appId: cp.appId
-           }
-         },
-         Lp = {
-           method: "POST",
-           headers: Ip,
-           body: JSON.stringify(xp)
-         },
-         Yp = await fp((() => fetch(op, Lp)));
-       if (Yp.ok) {
-         return Jp(await Yp.json())
+       static CreateLuminanceTexture(QQ, WQ, XQ, wQ) {
+         return new qQ(QQ, WQ, XQ, 1, wQ, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L449-L599` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L204-L205) · [Before (L449-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L449-L599)

```diff
-       throw await Bp("Generate Auth Token", Yp)
-     }
-     async function Yi(pp) {
-       let ip, cp = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       const Op = await Oi(pp.appConfig, (Op => {
-         if (!Ai(Op)) throw Xp.create("not-registered");
-         const op = Op.authToken;
-         if (!cp && function(pp) {
-             return 2 === pp.requestStatus && ! function(pp) {
-               const ip = Date.now();
-               return ip < pp.creationTime || pp.creationTime + pp.expiresIn < ip + Cp
-             }(pp)
-           }(op)) return Op;
-         if (1 === op.requestStatus) return ip = async function(pp, ip) {
-           let cp = await Di(pp.appConfig);
-           for (; 1 === cp.authToken.requestStatus;) await bp(100), cp = await Di(pp.appConfig);
- ... (135 more removed lines; see GitHub link above)
+       static CreateLuminanceAlphaTexture(QQ, WQ, XQ, wQ) {
+         return new qQ(QQ, WQ, XQ, 2, wQ, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L601-L675` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L207-L208) · [Before (L601-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L601-L675)

```diff
-       return pp
-     }
- 
-     function ji(pp) {
-       return Promise.all(pp.map((pp => pp.catch((pp => pp)))))
-     }
- 
-     function ki(pp, ip) {
-       const cp = function(pp, ip) {
-           let cp;
-           return window.trustedTypes && (cp = window.trustedTypes.createPolicy(pp, ip)), cp
-         }("firebase-js-sdk-policy", {
-           createScriptURL: ui
-         }),
-         Op = document.createElement("script"),
-         op = `${ti}?l=${pp}&id=${ip}`;
- ... (59 more removed lines; see GitHub link above)
+       static CreateAlphaTexture(QQ, WQ, XQ, wQ) {
+         return new qQ(QQ, WQ, XQ, 0, wQ, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L677-L682` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L210-L211) · [Before (L677-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L677-L682)

```diff
-     }
-     const Ri = new class {
-       constructor() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
-         this.throttleMetadata = pp, this.intervalMillis = ip
+       static CreateRGBTexture(QQ, WQ, XQ, wQ) {
+         return new qQ(QQ, WQ, XQ, 4, wQ, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L684-L685` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L213-L214) · [Before (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L684-L685)

```diff
-       getThrottleMetadata(pp) {
-         return this.throttleMetadata[pp]
+       static CreateRGBATexture(QQ, WQ, XQ, wQ) {
+         return new qQ(QQ, WQ, XQ, 5, wQ, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L687-L688` → after: `L216-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L216-L217) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L687-L688)

```diff
-       setThrottleMetadata(pp, ip) {
-         this.throttleMetadata[pp] = ip
+       static CreateRGBAStorageTexture(QQ, WQ, XQ, wQ) {
+         return new qQ(QQ, WQ, XQ, 5, wQ, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L690-L691` → after: `L219-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L219-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L219-L223) · [Before (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L690-L691)

```diff
-       deleteThrottleMetadata(pp) {
-         delete this.throttleMetadata[pp]
+       static CreateRTexture(QQ, WQ, XQ, TQ) {
+         let zQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           sQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           FQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : wQ.g.TRILINEAR_SAMPLINGMODE;
+         return new qQ(QQ, WQ, XQ, 6, TQ, zQ, sQ, FQ, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L693-L715` → after: `L225-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L225-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L225-L229) · [Before (L693-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L693-L715)

```diff
-     };
- 
-     function qi(pp) {
-       return new Headers({
-         Accept: "application/json",
-         "x-goog-api-key": pp
-       })
-     }
-     async function Mi(pp) {
-       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ri,
-         cp = arguments.length > 2 ? arguments[2] : void 0;
-       const {
-         appId: Op,
-         apiKey: op,
-         measurementId: Ip
-       } = pp.options;
- ... (7 more removed lines; see GitHub link above)
+       static CreateRStorageTexture(QQ, WQ, XQ, TQ) {
+         let zQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           sQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           FQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : wQ.g.TRILINEAR_SAMPLINGMODE;
+         return new qQ(QQ, WQ, XQ, 6, TQ, zQ, sQ, FQ, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L730-L758` → after: `L232-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L232-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L232-L261) · [Before (L730-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L730-L758)

```diff
-     async function Ci(pp, ip, cp) {
-       let {
-         throttleEndTimeMillis: Op,
-         backoffCount: op
-       } = ip, Sp = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ri;
-       var xp;
-       const {
-         appId: Lp,
-         measurementId: Yp
-       } = pp;
-       try {
-         await
-         function(pp, ip) {
-           return new Promise(((cp, Op) => {
-             const op = Math.max(ip - Date.now(), 0),
-               Ip = setTimeout(cp, op);
- ... (13 more removed lines; see GitHub link above)
+   },
+   41870: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => wQ.c
+     });
+     var wQ = XQ(40683);
+     (0, wQ.g)()
+   },
+   41827: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => wQ.e
+     });
+     var wQ = XQ(40705);
+     (0, wQ.f)()
+   },
+   40705: (QQ, WQ, XQ) => {
+ ... (14 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L760-L793` → after: `L263-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L263-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L263-L280) · [Before (L760-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L760-L793)

```diff
-       try {
-         const ip = await async function(pp) {
-           var ip;
-           const {
-             appId: cp,
-             apiKey: Op
-           } = pp, op = {
-             method: "GET",
-             headers: qi(Op)
-           }, Ip = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", cp), Sp = await fetch(Ip, op);
-           if (200 !== Sp.status && 304 !== Sp.status) {
-             let pp = "";
-             try {
-               const cp = await Sp.json();
-               (null === (ip = cp.error) || void 0 === ip ? void 0 : ip.message) && (pp = cp.error.message)
-             } catch (xp) {}
- ... (18 more removed lines; see GitHub link above)
+       constructor(QQ) {
+         let WQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           wQ = arguments.length > 5 ? arguments[5] : void 0,
+           qQ = arguments.length > 6 ? arguments[6] : void 0,
+           sQ = arguments.length > 7 ? arguments[7] : void 0;
+         super(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, WQ, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = wQ, this.useVertexAlpha = qQ, this.color = new  … [truncated]
+         const FQ = {
+           attributes: [zQ.l.PositionKind],
+           uniforms: ["world", "viewProjection"],
+           needAlphaBlending: !0,
+           defines: [],
+           useClipPlane: null,
+           shaderLanguage: 0
+         };
+         if (this.useVertexAlpha ? FQ.defines.push("#define VERTEXALPHA") : FQ.needAlphaBlending = !1, this.useVertexColor ? (FQ.defines.push("#define VERTEXCOLOR"), FQ.attributes.push(zQ.l.ColorKind)) : (FQ.uniforms.push("color"), this._color4 = new TQ.d), sQ) this.material = sQ;
+         else {
+ ... (2 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L795` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L282-L283) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L795)

```diff
-           throw Dp
+           const QQ = new gQ.t("colorShader", this.sE(), "color", FQ, !1);
+           QQ.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(QQ)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L804-L807` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L286-L287) · [Before (L804-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L804-L807)

```diff
-     }
-     class Ei {
-       constructor() {
-         this.listeners = []
+       getClassName() {
+         return "LinesMesh"
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L809-L810` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L289-L290) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L809-L810)

```diff
-       addEventListener(pp) {
-         this.listeners.push(pp)
+       get material() {
+         return this._internalAbstractMeshDataInfo._material
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L812-L813` → after: `L292-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L292-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L292-L296) · [Before (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L812-L813)

```diff
-       abort() {
-         this.listeners.forEach((pp => pp()))
+       set material(QQ) {
+         const WQ = this.material;
+         if (WQ === QQ) return;
+         const XQ = WQ && this._ownsMaterial;
+         this._ownsMaterial = !1, this._setInternalMaterial(QQ), XQ && WQ?.dispose()
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L815-L855` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L298-L299) · [Before (L815-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L815-L855)

```diff
-     }
-     let Xi, li;
- 
-     function Qi(pp) {
-       li = pp
-     }
- 
-     function Ji(pp) {
-       Xi = pp
-     }
-     async function Bi(pp, ip, cp, Op, op, Sp, xp) {
-       var Lp;
-       const Yp = Mi(pp);
-       Yp.then((ip => {
-         cp[ip.measurementId] = ip.appId, pp.options.measurementId && ip.measurementId !== pp.options.measurementId && Hi.warn(`The measurement ID in the local Firebase config (${pp.options.measurementId}) does not match the measurement ID fetched from the server (${ip.measurement … [truncated]
-       })).catch((pp => Hi.error(pp))), ip.push(Yp);
- ... (25 more removed lines; see GitHub link above)
+       _setInternalMaterial(QQ) {
+         this._setMaterial(QQ), this.material && (this.material.fillMode = PQ.b.LineListDrawMode, this.material.disableLighting = !0)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L857-L858` → after: `L301-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L301-L302) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L857-L858)

```diff
-       _delete() {
-         return delete Ti[this.app.options.appId], Promise.resolve()
+       get checkCollisions() {
+         return !1
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L860-L881` → after: `L304-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L304-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L304-L314) · [Before (L860-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L860-L881)

```diff
-     }
-     let Ti = {},
-       fi = [];
-     const bi = {};
-     let ai, ni, Fi = "dataLayer",
-       gi = "gtag",
-       Gi = !1;
- 
-     function ri(pp) {
-       if (Gi) throw ei.create("already-initialized");
-       pp.dataLayerName && (Fi = pp.dataLayerName), pp.gtagName && (gi = pp.gtagName)
-     }
- 
-     function Zi(pp, ip, cp) {
-       ! function() {
-         const pp = [];
- ... (6 more removed lines; see GitHub link above)
+       set checkCollisions(QQ) {}
+       _bind(QQ, WQ) {
+         if (!this._geometry) return this;
+         const XQ = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
+         if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(WQ, XQ) : this._geometry._bind(WQ, XQ, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMate … [truncated]
+           const {
+             r: QQ,
+             g: WQ,
+             b: XQ
+           } = this.color;
+           this._color4.set(QQ, WQ, XQ, this.alpha), this.material.setColor4("color", this._color4)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L883-L888` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L316) · [Before (L883-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L883-L888)

```diff
-       }();
-       const Op = pp.options.appId;
-       if (!Op) throw ei.create("no-app-id");
-       if (!pp.options.apiKey) {
-         if (!pp.options.measurementId) throw ei.create("no-api-key");
-         Hi.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${pp.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
+         return this
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L890-L911` → after: `L318-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L318-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L318-L321) · [Before (L890-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L890-L911)

```diff
-       if (null != Ti[Op]) throw ei.create("already-exists", {
-         id: Op
-       });
-       if (!Gi) {
-         ! function(pp) {
-           let ip = [];
-           Array.isArray(window[pp]) ? ip = window[pp] : window[pp] = ip
-         }(Fi);
-         const {
-           wrappedGtag: pp,
-           gtagCore: ip
-         } = function(pp, ip, cp, Op, op) {
-           let Ip = function() {
-             for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
-             window[Op].push(arguments)
-           };
- ... (6 more removed lines; see GitHub link above)
+       _draw(QQ, WQ, XQ) {
+         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
+         const wQ = this.sE().Uj();
+         return this._unIndexed ? wQ.drawArraysType(PQ.b.LineListDrawMode, QQ.verticesStart, QQ.verticesCount, XQ) : wQ.drawElementsType(PQ.b.LineListDrawMode, QQ.indexStart, QQ.indexCount, XQ), this
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L913-L930` → after: `L323-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L323-L325) · [Before (L913-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L913-L930)

```diff
-       Ti[Op] = Bi(pp, fi, bi, ip, ai, Fi, cp);
-       return new Ni(pp)
-     }
- 
-     function zi() {
-       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Op.J)();
-       pp = (0, Ip.F)(pp);
-       const ip = (0, Op.x)(pp, vi);
-       return ip.isInitialized() ? ip.getImmediate() : si(pp)
-     }
- 
-     function si(pp) {
-       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const cp = (0, Op.x)(pp, vi);
-       if (cp.isInitialized()) {
-         const pp = cp.getImmediate();
- ... (2 more removed lines; see GitHub link above)
+       dispose(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || WQ) && this.material?.dispose(!1, !1, !0), super.dispose(QQ)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L932-L943` → after: `L327-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L327-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L327-L334) · [Before (L932-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L932-L943)

```diff
-       return cp.initialize({
-         options: ip
-       })
-     }
-     async function Ki() {
-       if ((0, Ip.K)()) return !1;
-       if (!(0, Ip.o)()) return !1;
-       if (!(0, Ip.Q)()) return !1;
-       try {
-         return await (0, Ip.gb)()
-       } catch (pp) {
-         return !1
+       clone(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           XQ = arguments.length > 2 ? arguments[2] : void 0;
+         if (WQ && void 0 === WQ._addToSceneRootNodes) {
+           const XQ = WQ;
+           return XQ.source = this, new rQ(QQ, this.sE(), XQ.parent, XQ.source, XQ.doNotCloneChildren)
+         }
+         return new rQ(QQ, this.sE(), WQ, this, XQ)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L945-L986` → after: `L336-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L336-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L336-L340) · [Before (L945-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L945-L986)

```diff
-     }
- 
-     function Vi(pp, ip, cp) {
-       pp = (0, Ip.F)(pp), async function(pp, ip, cp, Op) {
-         if (Op && Op.global) return pp("set", {
-           screen_name: cp
-         }), Promise.resolve();
-         pp("config", await ip, {
-           update: !0,
-           screen_name: cp
-         })
-       }(ni, Ti[pp.app.options.appId], ip, cp).catch((pp => Hi.error(pp)))
-     }
-     async function pc(pp) {
-       return pp = (0, Ip.F)(pp), async function(pp, ip) {
-         const cp = await ip;
- ... (26 more removed lines; see GitHub link above)
+       createInstance(QQ) {
+         const WQ = new IQ(QQ, this);
+         if (this.bC) {
+           WQ.bC = {};
+           for (const QQ in this.bC) WQ.bC[QQ] = this.bC[QQ]
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L988-L1003` → after: `L342-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L342-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L342-L350) · [Before (L988-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L988-L1003)

```diff
-         pp("config", await ip, {
-           update: !0,
-           user_properties: cp
-         })
-       }(ni, Ti[pp.app.options.appId], ip, cp).catch((pp => Hi.error(pp)))
-     }
- 
-     function Oc(pp, ip) {
-       pp = (0, Ip.F)(pp), async function(pp, ip) {
-         const cp = await pp;
-         window[`ga-disable-${cp}`] = !ip
-       }(Ti[pp.app.options.appId], ip).catch((pp => Hi.error(pp)))
-     }
- 
-     function oc(pp) {
-       ni ? ni("set", pp) : Ji(pp)
+         return WQ
+       }
+       serialize(QQ) {
+         super.serialize(QQ), QQ.color = this.color.awQ(), QQ.alpha = this.alpha
+       }
+       static Parse(QQ, WQ) {
+         const XQ = new rQ(QQ.name, WQ);
+         return XQ.color = TQ.b.FromArray(QQ.color), XQ.alpha = QQ.alpha, XQ
+       }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1005-L1015` → after: `L352-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L352-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L352-L359) · [Before (L1005-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L1005-L1015)

```diff
- 
-     function Ic(pp, ip, cp, Op) {
-       pp = (0, Ip.F)(pp), async function(pp, ip, cp, Op, op) {
-         if (op && op.global) pp("event", cp, Op);
-         else {
-           const op = await ip;
-           pp("event", cp, Object.assign(Object.assign({}, Op), {
-             send_to: op
-           }))
-         }
-       }(ni, Ti[pp.app.options.appId], ip, cp, Op).catch((pp => Hi.error(pp)))
+     rQ.ForceGLSL = !1;
+     class IQ extends FQ.b {
+       constructor(QQ, WQ) {
+         super(QQ, WQ), this.intersectionThreshold = WQ.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1018-L1039` → after: `L363-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L363-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/271.js#L363-L365) · [Before (L1018-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/271.js#L1018-L1039)

```diff
-     function Sc(pp) {
-       ni ? ni("consent", "update", pp) : Qi(pp)
-     }
-     const xc = "@firebase/analytics",
-       Lc = "0.10.0";
-     (0, Op.z)(new Sp.d(vi, ((pp, ip) => {
-       let {
-         options: cp
-       } = ip;
-       return Zi(pp.getProvider("app").getImmediate(), pp.getProvider("installations-internal").getImmediate(), cp)
-     }), "PUBLIC")), (0, Op.z)(new Sp.d("analytics-internal", (function(pp) {
-       try {
-         const ip = pp.getProvider(vi).getImmediate();
-         return {
-           logEvent: (pp, cp, Op) => Ic(ip, pp, cp, Op)
-         }
- ... (6 more removed lines; see GitHub link above)
+     function BQ() {
+       jQ || (jQ = !0, sQ.d._LinesMeshParser = (QQ, WQ) => rQ.Parse(QQ, WQ))
+     }(wQ = rQ.prototype).enableEdgesRendering ?? (wQ.enableEdgesRendering = (0, JQ.h)("LinesMesh", "enableEdgesRendering")), (qQ = IQ.prototype).enableEdgesRendering ?? (qQ.enableEdgesRendering = (0, JQ.h)("InstancedLinesMesh", "enableEdgesRendering"))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/272.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/272.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L5-L3926` → after: `L4-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L4-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/272.js#L4-L239) · [Before (L5-L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/272.js#L5-L3926)

```diff
-     40721: (pp, ip, cp) => {
-         cp.r(ip), cp.d(ip, {
-           ActionCodeOperation: () => Pp,
-           ActionCodeURL: () => pc,
-           AuthCredential: () => bi,
-           AuthErrorCodes: () => vp,
-           EmailAuthCredential: () => Zi,
-           EmailAuthProvider: () => cc,
-           FacebookAuthProvider: () => Sc,
-           FactorId: () => Lp,
-           GithubAuthProvider: () => Lc,
-           GoogleAuthProvider: () => xc,
-           OAuthCredential: () => si,
-           OAuthProvider: () => Ic,
-           OperationType: () => Ap,
-           PhoneAuthCredential: () => Vi,
- ... (3906 more removed lines; see GitHub link above)
+   40717: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => vQ,
+       g: () => UQ,
+       j: () => pQ,
+       n: () => GQ,
+       r: () => DQ,
+       t: () => VQ
+     });
+     var wQ = XQ(40286),
+       qQ = XQ(40355),
+       TQ = XQ(37370),
+       zQ = XQ(40404),
+       sQ = XQ(40724),
+       FQ = XQ(40602),
+       PQ = XQ(40314),
+ ... (220 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L3928-L3952` → after: `L241-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L241-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/272.js#L241-L354) · [Before (L3928-L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/272.js#L3928-L3952)

```diff
-           go = new Map([
-             ["identitytoolkit.googleapis.com", "p"],
-             ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
-             ["test-identitytoolkit.sandbox.googleapis.com", "t"]
-           ]);
- 
-         function Go(pp) {
-           const ip = pp.config;
-           Rp(ip.authDomain, pp, "auth-domain-config-required");
-           const cp = ip.emulator ? Qp(ip, "emulator/auth/iframe") : `https://${pp.config.authDomain}/__/auth/iframe`,
-             Ip = {
-               apiKey: ip.apiKey,
-               appName: pp.name,
-               v: op.f
-             },
-             Sp = go.get(pp.config.apiHost);
- ... (9 more removed lines; see GitHub link above)
+           shaderLanguage: this._options.shaderLanguage,
+           extraInitializationsAsync: this._options.extraInitializationsAsync
+         }, sQ), wQ ? XQ.setEffect(lQ, aQ, this._materialContext) : vQ && vQ.setEffect(lQ, aQ), this._onEffectCreatedObservable && (yQ.effect = lQ, yQ.subMesh = XQ ?? QQ?.ZD[0] ?? null, this._onEffectCreatedObservable.notifyObservers(yQ))), vQ._wasPreviouslyUsingInstances = !!WQ,  … [truncated]
+       }
+       bindOnlyWorldMatrix(QQ, WQ) {
+         const XQ = WQ ?? this.getEffect();
+         if (!XQ) return;
+         const wQ = this._options.uniforms; - 1 !== wQ.indexOf("world") && XQ.setMatrix("world", QQ);
+         const qQ = this.sE(); - 1 !== wQ.indexOf("worldView") && (QQ.multiplyToRef(qQ.getViewMatrix(), this._cachedWorldViewMatrix), XQ.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== wQ.indexOf("worldViewProjection") && (QQ.multiplyToRef(qQ.getTransformMatrix(), thi … [truncated]
+       }
+       bindForSubMesh(QQ, WQ, XQ) {
+         this.bind(QQ, WQ, XQ._drawWrapperOverride?.effect, XQ)
+       }
+       bind(QQ, WQ, XQ, wQ) {
+         const qQ = wQ && this._storeEffectOnSubMeshes,
+           TQ = XQ ?? (qQ ? wQ.effect : this.getEffect());
+ ... (98 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L3954-L4026` → after: `L356-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L356-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/272.js#L356-L573) · [Before (L3954-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/272.js#L3954-L4026)

```diff
-         class Zo {
-           constructor(pp) {
-             this.window = pp, this.associatedEvent = null
-           }
-           close() {
-             if (this.window) try {
-               this.window.close()
-             } catch (pp) {}
-           }
-         }
- 
-         function zo(pp, ip, cp) {
-           let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
-             Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
-           const Sp = Math.max((window.screen.availHeight - Ip) / 2, 0).toString(),
-             xp = Math.max((window.screen.availWidth - op) / 2, 0).toString();
- ... (57 more removed lines; see GitHub link above)
+         const XQ = Object.keys(this._options);
+         for (const wQ of XQ) {
+           const QQ = this._options[wQ];
+           Array.isArray(QQ) && (this._options[wQ] = QQ.slice(0))
+         }
+         this.stencil.copyTo(WQ.stencil);
+         for (const wQ in this._textures) WQ.setTexture(wQ, this._textures[wQ]);
+         for (const wQ in this._internalTextures) WQ.setInternalTexture(wQ, this._internalTextures[wQ]);
+         for (const wQ in this._textureArrays) WQ.setTextureArray(wQ, this._textureArrays[wQ]);
+         for (const wQ in this._externalTextures) WQ.setExternalTexture(wQ, this._externalTextures[wQ]);
+         for (const wQ in this._ints) WQ.setInt(wQ, this._ints[wQ]);
+         for (const wQ in this._uints) WQ.setUInt(wQ, this._uints[wQ]);
+         for (const wQ in this._floats) WQ.setFloat(wQ, this._floats[wQ]);
+         for (const wQ in this._floatsArrays) WQ.setFloats(wQ, this._floatsArrays[wQ]);
+         for (const wQ in this._colors3) WQ.setColor3(wQ, this._colors3[wQ]);
+         for (const wQ in this._colors3Arrays) WQ._colors3Arrays[wQ] = this._colors3Arrays[wQ];
+ ... (202 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/273.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/273.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L4-L141` → after: `L5-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L5-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/273.js#L5-L24) · [Before (L4-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/273.js#L4-L141)

```diff
-   40769: (pp, ip, cp) => {
-     cp.d(ip, {
-       $c: () => yp,
-       $d: () => Ac,
-       $e: () => qc,
-       A: () => Mp,
-       Ab: () => di,
-       Ac: () => Ii,
-       Af: () => sc,
-       B: () => Ep,
-       Bd: () => ti,
-       C: () => Cp,
-       Cb: () => sp,
-       Cd: () => Zi,
-       Dc: () => Wi,
-       Dd: () => hp,
- ... (122 more removed lines; see GitHub link above)
+   40746: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       FirebaseError: () => wQ.d,
+       SDK_VERSION: () => wQ.g,
+       _DEFAULT_ENTRY_NAME: () => wQ.k,
+       rwQ: () => wQ.n,
+       _addOrOverwriteComponent: () => wQ.q,
+       _apps: () => wQ.r,
+       _clearComponents: () => wQ.t,
+       _components: () => wQ.x,
+       _getProvider: () => wQ.B,
+       _registerComponent: () => wQ.E,
+       _removeServiceInstance: () => wQ.G,
+       deleteApp: () => wQ.K,
+       getApp: () => wQ.O,
+       getApps: () => wQ.M,
+ ... (4 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L143-L1365` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/273.js#L26-L27) · [Before (L143-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/273.js#L143-L1365)

```diff
-     const Op = -2147483648,
-       op = 12,
-       Ip = 12,
-       Sp = 4095,
-       xp = {
-         Lifeform: 1,
-         Throwable: 2,
-         Mesh: 3,
-         Audio: 4,
-         Item: 5
-       },
-       Lp = {
-         Alive: 1,
-         Crouching: 2,
-         OnGround: 4,
-         InFluid: 8,
- ... (1207 more removed lines; see GitHub link above)
+     var wQ = XQ(40755);
+     (0, wQ._)("firebase", "9.23.0", "app")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/274.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/274.js` (124 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L4)

```diff
-   41864: (pp, ip, cp) => {
+   40761: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7-L9` → after: `L19-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L19-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L19-L30) · [Before (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L7-L9)

```diff
-       e: () => xp,
-       i: () => Sp,
-       m: () => Yp
+       db: () => iQ,
+       eb: () => hQ,
+       fb: () => GQ,
+       h: () => vQ,
+       k: () => bQ,
+       n: () => UQ,
+       q: () => sQ,
+       u: () => zQ,
+       v: () => fQ,
+       x: () => AQ,
+       y: () => aQ,
+       z: () => cQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L11-L21` → after: `L32-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L32-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L32-L181) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L11-L21)

```diff
-     var Op = cp(37479),
-       op = cp(38942),
-       Ip = cp(38938);
- 
-     function Sp(pp, ip, cp, Op) {
-       const op = Ip.o;
-       ip.fill(0), pp.gravity.toArray(ip, op.gravity), pp.colorDead.toArray(ip, op.colorDead), cp[op.ramp] = pp.useRampGradients ? 1 : 0;
-       const Sp = pp.getColorGradients(),
-         xp = Pp(pp, Sp, "colour", Op);
-       cp[op.colorCount] = xp;
-       for (let Ip = 0; Ip < xp; Ip++) {
+     const wQ = function(QQ) {
+         const WQ = [];
+         let XQ = 0;
+         for (let wQ = 0; wQ < QQ.length; wQ++) {
+           let qQ = QQ.charCodeAt(wQ);
+           qQ < 128 ? WQ[XQ++] = qQ : qQ < 2048 ? (WQ[XQ++] = qQ >> 6 | 192, WQ[XQ++] = 63 & qQ | 128) : 55296 === (64512 & qQ) && wQ + 1 < QQ.length && 56320 === (64512 & QQ.charCodeAt(wQ + 1)) ? (qQ = 65536 + ((1023 & qQ) << 10) + (1023 & QQ.charCodeAt(++wQ)), WQ[XQ++] = qQ >> 1 … [truncated]
+         }
+         return WQ
+       },
+       qQ = {
+         byteToCharMap_: null,
+         charToByteMap_: null,
+         byteToCharMapWebSafe_: null,
+         charToByteMapWebSafe_: null,
+         ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
+         get ENCODED_VALS() {
+ ... (134 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L23-L24` → after: `L183-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L183-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L183-L194) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L23-L24)

```diff
-         const pp = Sp[Wp(Sp, Ip)];
-         ip[op.colorPositions + Ip] = pp.gradient, pp.color1.toArray(ip, op.color1 + 4 * Ip), (null !== (Lp = pp.color2) && void 0 !== Lp ? Lp : pp.color1).toArray(ip, op.color2 + 4 * Ip)
+         return null === (WQ = PQ()) || void 0 === WQ ? void 0 : WQ[`_${QQ}`]
+       };
+     class IQ {
+       constructor() {
+         this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((QQ, WQ) => {
+           this.resolve = QQ, this.reject = WQ
+         }))
+       }
+       wrapCallback(QQ) {
+         return (WQ, XQ) => {
+           WQ ? this.reject(WQ) : this.resolve(XQ), "function" === typeof QQ && (this.promise.catch((() => {})), 1 === QQ.length ? QQ(WQ) : QQ(WQ, XQ))
+         }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L37-L40` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L199) · [Before (L37-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L37-L40)

```diff
-       return {
-         key: [],
-         texels: new Uint8Array(4 * Ip.k)
-       }
+       return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L44-L49` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L202-L203) · [Before (L44-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L44-L49)

```diff
-     function Yp(pp, ip) {
-       return Dp(pp, Lp), !vp(Lp, ip.key) && (ip.key.length = 0, ip.key.push(...Lp), ip.key.length > 0 && function(pp, ip) {
-         for (let cp = 0; cp < Ip.k; cp++) op.l.GetCurrentGradient(cp / Ip.k, pp, ((pp, ip, cp) => {
-           Op.Color3.LerpToRef(pp.color, ip.color, cp, Ap)
-         })), ip[4 * cp] = 255 * Ap.r, ip[4 * cp + 1] = 255 * Ap.g, ip[4 * cp + 2] = 255 * Ap.b, ip[4 * cp + 3] = 255
-       }(pp.getRampGradients(), ip.texels), !0)
+     function BQ() {
+       return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jQ())
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L52-L58` → after: `L206-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L206-L208) · [Before (L52-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L52-L58)

```diff
-     function Dp(pp, ip) {
-       ip.length = 0;
-       const cp = pp.useRampGradients ? pp.getRampGradients() : null;
-       if (null !== cp && void 0 !== cp && cp.length) {
-         ip.push(cp.length);
-         for (const pp of cp) ip.push(pp.gradient, pp.color.r, pp.color.g, pp.color.b)
-       }
+     function yQ() {
+       const QQ = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
+       return "object" === typeof QQ && void 0 !== QQ.id
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L62-L63` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L211-L212) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L62-L63)

```diff
-     function Pp(pp, ip, cp, Op) {
-       return ip ? ip.length > Ip.d ? (Op(`particleStops:${cp}`, `GPU particles use the first 2 and last ${Ip.d-2} of more than ${Ip.d} ${cp} gradient stops (${pp.name})`), Ip.d) : ip.length : 0
+     function VQ() {
+       return "object" === typeof navigator && "ReactNative" === navigator.product
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L66-L67` → after: `L215-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L215-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L215-L217) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L66-L67)

```diff
-     function Wp(pp, ip) {
-       return ip < 2 || pp.length <= Ip.d ? ip : pp.length - Ip.d + ip
+     function DQ() {
+       const QQ = jQ();
+       return QQ.indexOf("MSIE ") >= 0 || QQ.indexOf("Trident/") >= 0
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L72-L73` → after: `L220-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L220-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L220-L225) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L72-L73)

```diff
-     function wp(pp, ip, cp) {
-       return Sp(pp, yp, Up, cp), ip && vp(Up, ip) ? null : Up.slice()
+     function pQ() {
+       try {
+         return "object" === typeof indexedDB
+       } catch (QQ) {
+         return !1
+       }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L76-L80` → after: `L228-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L228-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L228-L245) · [Before (L76-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L76-L80)

```diff
-     function vp(pp, ip) {
-       if (pp.length !== ip.length) return !1;
-       for (let cp = 0; cp < pp.length; cp++)
-         if (pp[cp] !== ip[cp]) return !1;
-       return !0
+     function GQ() {
+       return new Promise(((QQ, WQ) => {
+         try {
+           let XQ = !0;
+           const wQ = "validate-browser-context-for-indexeddb-analytics-module",
+             qQ = self.indexedDB.open(wQ);
+           qQ.onsuccess = () => {
+             qQ.result.close(), XQ || self.indexedDB.deleteDatabase(wQ), QQ(!0)
+           }, qQ.onupgradeneeded = () => {
+             XQ = !1
+           }, qQ.onerror = () => {
+             var QQ;
+             WQ((null === (QQ = qQ.error) || void 0 === QQ ? void 0 : QQ.message) || "")
+           }
+         } catch (XQ) {
+           WQ(XQ)
+ ... (2 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L83-L85` → after: `L248-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L248-L249) · [Before (L83-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L83-L85)

```diff
-     function tp(pp, ip, cp) {
-       var Op;
-       pp[ip] = cp.gradient, pp[ip + 1] = cp.factor1, pp[ip + 2] = null !== (Op = cp.factor2) && void 0 !== Op ? Op : cp.factor1
+     function UQ() {
+       return !("undefined" === typeof navigator || !navigator.cookieEnabled)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L87-L109` → after: `L251-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L251-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L251-L253) · [Before (L87-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L87-L109)

```diff
-   },
-   41375: (pp, ip, cp) => {
-     function Op(pp, ip, cp) {
-       const Op = ip * ip * 4,
-         op = pp[0].layers,
-         Ip = op * (pp.length - 1) + pp[pp.length - 1].layers,
-         Sp = new Uint8Array(Ip * Op);
-       pp.forEach(((ip, cp) => {
-         const Ip = cp + 1 < pp.length ? Math.min(ip.layers, op) : ip.layers;
-         Sp.set(new Uint8Array(ip.pixels.buffer, ip.pixels.byteOffset, Ip * Op), cp * op * Op)
-       }));
-       const xp = Math.max(1, Math.min(Ip, cp || Ip));
-       if (xp === Ip) return [{
-         pixels: Sp,
-         layers: Ip
-       }];
- ... (7 more removed lines; see GitHub link above)
+     class bQ extends Error {
+       constructor(QQ, WQ, XQ) {
+         super(WQ), this.code = QQ, this.customData = XQ, this.name = "FirebaseError", Object.setPrototypeOf(this, bQ.prototype), Error.captureStackTrace && Error.captureStackTrace(this, vQ.prototype.create)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L113-L117` → after: `L256-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L256-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L256-L274) · [Before (L113-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L113-L117)

```diff
-     cp.d(ip, {
-       d: () => Op,
-       h: () => Ip
-     });
-     const op = new WeakMap;
+     class vQ {
+       constructor(QQ, WQ, XQ) {
+         this.service = QQ, this.serviceName = WQ, this.errors = XQ
+       }
+       create(QQ) {
+         const WQ = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
+           XQ = `${this.service}/${QQ}`,
+           wQ = this.errors[QQ],
+           qQ = wQ ? function(QQ, WQ) {
+             return QQ.replace(dQ, ((QQ, XQ) => {
+               const wQ = WQ[XQ];
+               return null != wQ ? String(wQ) : `<${XQ}?>`
+             }))
+           }(wQ, WQ) : "Error",
+           TQ = `${this.serviceName}: ${qQ} (${XQ}).`;
+         return new bQ(XQ, TQ, WQ)
+ ... (3 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L119-L133` → after: `L276-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L276-L279) · [Before (L119-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L119-L133)

```diff
-     function Ip(pp, ip, cp) {
-       var Op, Ip;
-       const Sp = null !== (Op = op.get(pp)) && void 0 !== Op ? Op : new Map;
-       op.set(pp, Sp);
-       const xp = null !== (Ip = Sp.get(ip[0])) && void 0 !== Ip ? Ip : [];
-       Sp.set(ip[0], xp);
-       const Lp = xp.find((pp => pp.urls.length === ip.length && pp.urls.every(((pp, cp) => pp === ip[cp]))));
-       if (Lp) return Lp.built;
-       const Yp = {
-         urls: [...ip],
-         built: cp()
-       };
-       return xp.push(Yp), Yp.built.catch((() => {
-         xp.splice(xp.indexOf(Yp), 1)
-       })), Yp.built
+     function HQ(QQ) {
+       for (const WQ in QQ)
+         if (Object.prototype.hasOwnProperty.call(QQ, WQ)) return !1;
+       return !0
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L135-L141` → after: `L281-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L281-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L281-L292) · [Before (L135-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L135-L141)

```diff
-   },
-   41860: (pp, ip, cp) => {
-     function Op() {
-       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
-       const ip = new Set;
-       return (cp, Op) => {
-         ip.has(cp) || (ip.add(cp), console.warn(pp + Op))
+ 
+     function aQ(QQ, WQ) {
+       if (QQ === WQ) return !0;
+       const XQ = Object.keys(QQ),
+         wQ = Object.keys(WQ);
+       for (const qQ of XQ) {
+         if (!wQ.includes(qQ)) return !1;
+         const XQ = QQ[qQ],
+           TQ = WQ[qQ];
+         if (lQ(XQ) && lQ(TQ)) {
+           if (!aQ(XQ, TQ)) return !1
+         } else if (XQ !== TQ) return !1
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L144-L180` → after: `L298-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L298-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L298-L316) · [Before (L144-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L144-L180)

```diff
-     cp.d(ip, {
-       c: () => Op
-     })
-   },
-   41890: (pp, ip, cp) => {
-     cp.d(ip, {
-       createLiteRendererAsync: () => bL,
-       liteBabylonBackend: () => bp,
-       setPipelineFailureHook: () => Yi
-     });
-     var Op = cp(37479),
-       op = cp(37815),
-       Ip = cp(38118),
-       Sp = cp(37445),
-       xp = cp(38126);
-     class Lp extends xp.c {
- ... (21 more removed lines; see GitHub link above)
+ 
+     function lQ(QQ) {
+       return null !== QQ && "object" === typeof QQ
+     }
+ 
+     function hQ(QQ) {
+       const WQ = [];
+       for (const [XQ, wQ] of Object.entries(QQ)) Array.isArray(wQ) ? wQ.forEach((QQ => {
+         WQ.push(encodeURIComponent(XQ) + "=" + encodeURIComponent(QQ))
+       })) : WQ.push(encodeURIComponent(XQ) + "=" + encodeURIComponent(wQ));
+       return WQ.length ? "&" + WQ.join("&") : ""
+     }
+ 
+     function iQ(QQ) {
+       const WQ = {};
+       return QQ.replace(/^\?/, "").split("&").forEach((QQ => {
+ ... (3 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L182-L185` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L318) · [Before (L182-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L182-L185)

```diff
-       }
-       getClassName() {
-         return "LinesMesh"
-       }
+       })), WQ
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L196-L198` → after: `L321-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L321-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L321-L325) · [Before (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L196-L198)

```diff
-     function vp(pp, ip, cp, Op) {
-       let op = 0;
-       return pp.isVerticesDataPresent("color") && (op |= Ap), "none" !== ip && (op |= Pp), "thin" === ip && (op |= Wp, pp.isVerticesDataPresent("instanceColor") && (op |= yp)), Op.fogEnabled && pp.applyFog && 0 !== Op.fogMode && (op |= Up), cp >= 1 && (op |= wp), op
+     function cQ(QQ) {
+       const WQ = QQ.indexOf("?");
+       if (!WQ) return "";
+       const XQ = QQ.indexOf("#", WQ);
+       return QQ.substring(WQ, XQ > 0 ? XQ : void 0)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L202` → after: `L329-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L329-L330) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L202)

```diff
-       pp.updateColor4("color", ip.color, ip.alpha)
+       const XQ = new RQ(QQ, WQ);
+       return XQ.subscribe.bind(XQ)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L216-L226` → after: `L334-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L334-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L334-L338) · [Before (L216-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L216-L226)

```diff
-         this.name = pp, this.pw = ip, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.Kl = {
-           addOnce: pp => {
-             this.disposers.push(pp)
-           }
-         }, this.uniqueId = ip.getUniqueId()
-       }
-       get isFrozen() {
-         return this.checkReadyOnlyOnce
-       }
-       Gl() {
-         return this.pw
+         this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = WQ, this.task.then((() => {
+           QQ(this)
+         })).catch((QQ => {
+           this.error(QQ)
+         }))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L228-L229` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L340-L343) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L228-L229)

```diff
-       getClassName() {
-         return "LiteMaterial"
+       next(QQ) {
+         this.forEachObserver((WQ => {
+           WQ.next(QQ)
+         }))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L231-L232` → after: `L345-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L345-L348) · [Before (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L231-L232)

```diff
-       freeze() {
-         this.checkReadyOnlyOnce = !0
+       error(QQ) {
+         this.forEachObserver((WQ => {
+           WQ.error(QQ)
+         })), this.close(QQ)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L234-L235` → after: `L350-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L350-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L350-L353) · [Before (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L234-L235)

```diff
-       unfreeze() {
-         this.checkReadyOnlyOnce = !1
+       complete() {
+         this.forEachObserver((QQ => {
+           QQ.complete()
+         })), this.close()
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L237-L239` → after: `L355-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L355-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L355-L373) · [Before (L237-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L237-L239)

```diff
-       markDirty() {}
-       get fillMode() {
-         return this.model.fillMode
+       subscribe(QQ, WQ, XQ) {
+         let wQ;
+         if (void 0 === QQ && void 0 === WQ && void 0 === XQ) throw new Error("Missing Observer.");
+         wQ = function(QQ, WQ) {
+           if ("object" !== typeof QQ || null === QQ) return !1;
+           for (const XQ of WQ)
+             if (XQ in QQ && "function" === typeof QQ[XQ]) return !0;
+           return !1
+         }(QQ, ["next", "error", "complete"]) ? QQ : {
+           next: QQ,
+           error: WQ,
+           complete: XQ
+         }, void 0 === wQ.next && (wQ.next = EQ), void 0 === wQ.error && (wQ.error = EQ), void 0 === wQ.complete && (wQ.complete = EQ);
+         const qQ = this.unsubscribeOne.bind(this, this.observers.length);
+         return this.finalized && this.task.then((() => {
+           try {
+ ... (3 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L241-L242` → after: `L375-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L375-L376) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L241-L242)

```diff
-       needAlphaBlendingForMesh(pp) {
-         return (0, Rp.P)(this.model, pp.visibility, pp.hasVertexAlpha)
+       unsubscribeOne(QQ) {
+         void 0 !== this.observers && void 0 !== this.observers[QQ] && (delete this.observers[QQ], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L244-L245` → after: `L378-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L378-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L378-L380) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L244-L245)

```diff
-       needAlphaTestingForMesh(pp) {
-         return (0, Rp.T)(this.model, pp.visibility, pp.hasVertexAlpha)
+       forEachObserver(QQ) {
+         if (!this.finalized)
+           for (let WQ = 0; WQ < this.observers.length; WQ++) this.sendOne(WQ, QQ)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L247-L249` → after: `L382-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L382-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L382-L389) · [Before (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L247-L249)

```diff
-       dispose() {
-         (0, dp.i)(this);
-         for (const pp of this.disposers.splice(0)) pp()
+       sendOne(QQ, WQ) {
+         this.task.then((() => {
+           if (void 0 !== this.observers && void 0 !== this.observers[QQ]) try {
+             WQ(this.observers[QQ])
+           } catch (XQ) {
+             "undefined" !== typeof console && console.error && console.error(XQ)
+           }
+         }))
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L251-L252` → after: `L391-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L391-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L391-L394) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L251-L252)

```diff
-       get model() {
-         return (0, Rp.$)(this)
+       close(QQ) {
+         this.finalized || (this.finalized = !0, void 0 !== QQ && (this.finalError = QQ), this.task.then((() => {
+           this.observers = void 0, this.onNoObservers = void 0
+         })))
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L255` → after: `L397-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L397-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L397-L402) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L255)

```diff
-     const Xp = new WeakSet;
+ 
+     function EQ() {}
+     const CQ = 1e3,
+       uQ = 2,
+       LQ = 144e5,
+       kQ = .5;
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L258` → after: `L405-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L405-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L405-L408) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L258)

```diff
-       return Xp.has(pp)
+       let WQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uQ;
+       const XQ = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CQ) * Math.pow(WQ, QQ),
+         wQ = Math.round(kQ * XQ * (Math.random() - .5) * 2);
+       return Math.min(LQ, XQ + wQ)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L262` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L412) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L262)

```diff
-       Xp.add(pp)
+       return QQ && QQ._delegate ? QQ._delegate : QQ
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L264-L289` → after: `L414-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L414-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L414-L452) · [Before (L264-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L264-L289)

```diff
-     const Jp = {
-       create: (pp, ip) => ((0, ep.p)(pp, new Ep(pp.name, ip)), qp.d.defines()),
-       write: () => {},
-       addFeature: (pp, ip) => {
-         const cp = pp.mirror;
-         ip.feature === mp.g && ip.state.dirLightCount > 0 && (pp.disableLighting = !0, (0, Rp.Y)(pp)), "BLOXD_LIGHTING" in ip.defines && (0, dp.g)(cp), ip.feature === kp.f && ((0, Hp.n)(ip.state, Cp), function(pp, ip) {
-           const cp = pp.Gl().gy();
-           setTimeout((() => {
-             cp.atlasArrays(ip.sources).then((cp => {
-               (0, Hp.b)(pp, ip, cp.map((pp => ({
-                 atlas: pp,
-                 layers: pp.layers
-               }))), cp[0].layerWidth, Cp)
-             })).catch((pp => {
-               console.error("Failed to build the atlas's texture arrays", pp)
-             }))
- ... (10 more removed lines; see GitHub link above)
+   },
+   40755: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => TQ.k,
+       g: () => JW,
+       k: () => mQ,
+       n: () => XW,
+       q: () => wW,
+       r: () => QW,
+       t: () => sW,
+       x: () => WW,
+       B: () => TW,
+       E: () => qW,
+       G: () => zW,
+       K: () => BW,
+       O: () => IW,
+ ... (23 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L291-L315` → after: `L454-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L454-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L454-L455) · [Before (L291-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L291-L315)

```diff
-       cube: Qp,
-       canvas: (pp, ip, cp) => {
-         let {
-           width: Op,
-           height: op,
-           mipmaps: Ip,
-           samplingMode: Sp = Mp.g.trilinear,
-           hasAlpha: xp = !1,
-           wrap: Lp = Mp.b.clamp
-         } = cp;
-         const Yp = pp.gy().createCanvas(Op, op),
-           Dp = new Mp.k("2d", {
-             kind: "canvas",
-             width: Op,
-             height: op,
-             canvas: Yp
- ... (9 more removed lines; see GitHub link above)
+       set: (QQ, WQ, XQ) => (QQ[WQ] = XQ, !0),
+       has: (QQ, WQ) => QQ instanceof IDBTransaction && ("done" === WQ || "store" === WQ) || WQ in QQ
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L355-L405` → after: `L458-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L458-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L458-L468) · [Before (L355-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L355-L405)

```diff
-     function fp() {
-       throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
-     }
-     const bp = {
-       Zcp: fp,
-       jop: (pp, ip) => {
-         const cp = new Tp(pp.engine, Op.b.FromArray(ip.clearColor), Op.Color3.FromArray(ip.ambientColor));
-         (0, Sp.e)(Jp, cp), pp.pw = cp,
-           function(pp, ip) {
-             const cp = Object.assign((0, Bp.j)(pp, "camera"), {
-               layerMask: 268435455
-             });
-             pp.model.nodes.setWorldSource(cp.row, pp.model.view.worldMatrix), pp.camera = ip.activeCamera = cp
-           }(pp, cp), (0, op.i)(pp, ((pp, ip, cp) => (0, Ip.e)(pp, ip, cp, xp.c)))
-       },
-       wop: () => {},
- ... (35 more removed lines; see GitHub link above)
+     function jQ(QQ) {
+       return QQ !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (sQ || (sQ = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(QQ) ? function() {
+         for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
+         return QQ.apply(VQ(this), XQ), yQ(FQ.get(this))
+       } : function() {
+         for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
+         return yQ(QQ.apply(VQ(this), XQ))
+       } : function(WQ) {
+         for (var XQ = arguments.length, wQ = new Array(XQ > 1 ? XQ - 1 : 0), qQ = 1; qQ < XQ; qQ++) wQ[qQ - 1] = arguments[qQ];
+         const TQ = QQ.call(VQ(this), WQ, ...wQ);
+         return gQ.set(TQ, WQ.sort ? WQ.sort() : [WQ]), yQ(TQ)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L412` → after: `L473-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L473-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L473-L489) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L412)

```diff
-       return Math.max(4, 4 * Math.ceil(pp / 4))
+       return "function" === typeof QQ ? jQ(QQ) : (QQ instanceof IDBTransaction && function(QQ) {
+         if (PQ.has(QQ)) return;
+         const WQ = new Promise(((WQ, XQ) => {
+           const wQ = () => {
+               QQ.removeEventListener("complete", qQ), QQ.removeEventListener("error", TQ), QQ.removeEventListener("abort", TQ)
+             },
+             qQ = () => {
+               WQ(), wQ()
+             },
+             TQ = () => {
+               XQ(QQ.error || new DOMException("AbortError", "AbortError")), wQ()
+             };
+           QQ.addEventListener("complete", qQ), QQ.addEventListener("error", TQ), QQ.addEventListener("abort", TQ)
+         }));
+         PQ.set(QQ, WQ)
+       }(QQ), WQ = QQ, (zQ || (zQ = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((QQ => WQ instanceof QQ)) ? new Proxy(QQ, IQ) : QQ);
+ ... (1 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L415-L422` → after: `L492-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L492-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L492-L512) · [Before (L415-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L415-L422)

```diff
-     function Zp(pp, ip, cp, Op) {
-       const op = pp.createBuffer({
-         label: Op,
-         size: rp(ip.byteLength),
-         usage: cp,
-         mappedAtCreation: !0
-       });
-       return new Uint8Array(op.getMappedRange(), 0, ip.byteLength).set(new Uint8Array(ip.buffer, ip.byteOffset, ip.byteLength)), op.unmap(), op
+     function yQ(QQ) {
+       if (QQ instanceof IDBRequest) return function(QQ) {
+         const WQ = new Promise(((WQ, XQ) => {
+           const wQ = () => {
+               QQ.removeEventListener("success", qQ), QQ.removeEventListener("error", TQ)
+             },
+             qQ = () => {
+               WQ(yQ(QQ.result)), wQ()
+             },
+             TQ = () => {
+               XQ(QQ.error), wQ()
+             };
+           QQ.addEventListener("success", qQ), QQ.addEventListener("error", TQ)
+         }));
+         return WQ.then((WQ => {
+           WQ instanceof IDBCursor && FQ.set(WQ, QQ)
+ ... (5 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L426` → after: `L520-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L520-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L520-L532) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L426)

```diff
-       return Math.floor(Math.log2(Math.max(pp, ip))) + 1
+       if (!(QQ instanceof IDBDatabase) || WQ in QQ || "string" !== typeof WQ) return;
+       if (GQ.get(WQ)) return GQ.get(WQ);
+       const XQ = WQ.replace(/FromIndex$/, ""),
+         wQ = WQ !== XQ,
+         qQ = pQ.includes(XQ);
+       if (!(XQ in (wQ ? IDBIndex : IDBObjectStore).prototype) || !qQ && !DQ.includes(XQ)) return;
+       const TQ = async function(QQ) {
+         const WQ = this.transaction(QQ, qQ ? "readwrite" : "readonly");
+         let TQ = WQ.store;
+         for (var zQ = arguments.length, sQ = new Array(zQ > 1 ? zQ - 1 : 0), FQ = 1; FQ < zQ; FQ++) sQ[FQ - 1] = arguments[FQ];
+         return wQ && (TQ = TQ.index(sQ.shift())), (await Promise.all([TQ[XQ](...sQ), qQ && WQ.done]))[0]
+       };
+       return GQ.set(WQ, TQ), TQ
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L428-L482` → after: `L534-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L534-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L534-L550) · [Before (L428-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L428-L482)

```diff
- 
-     function sp(pp, ip, cp, Op, op, Ip) {
-       const Sp = pp.createTexture({
-           label: Ip,
-           size: {
-             width: cp,
-             height: Op,
-             depthOrArrayLayers: op
-           },
-           format: "rgba8unorm",
-           mipLevelCount: zp(cp, Op),
-           usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
-         }),
-         xp = (ip, cp, Op, Ip) => {
-           pp.queue.writeTexture({
-             texture: Sp,
- ... (39 more removed lines; see GitHub link above)
+     IQ = (QQ => ({
+       ...QQ,
+       get: (WQ, XQ, wQ) => UQ(WQ, XQ) || QQ.get(WQ, XQ, wQ),
+       has: (WQ, XQ) => !!UQ(WQ, XQ) || QQ.has(WQ, XQ)
+     }))(IQ);
+     class bQ {
+       constructor(QQ) {
+         this.container = QQ
+       }
+       getPlatformInfoString() {
+         return this.container.getProviders().map((QQ => {
+           if (function(QQ) {
+               const WQ = QQ.getComponent();
+               return "VERSION" === (null === WQ || void 0 === WQ ? void 0 : WQ.type)
+             }(QQ)) {
+             const WQ = QQ.getImmediate();
+ ... (1 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L484-L490` → after: `L552-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L552-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L552-L613) · [Before (L484-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L484-L490)

```diff
-         }(ip, cp, Op, op)) xp(Yp.data, Lp++, Yp.width, Yp.height);
-       return Sp
-     }
-     const Kp = {
-       premultiplyAlpha: "none",
-       colorSpaceConversion: "none"
-     };
+           return null
+         })).filter((QQ => QQ)).join(" ")
+       }
+     }
+     const vQ = "@firebase/app",
+       dQ = "0.9.13",
+       HQ = new qQ.e("@firebase/app"),
+       aQ = "@firebase/app-compat",
+       lQ = "@firebase/analytics-compat",
+       hQ = "@firebase/analytics",
+       iQ = "@firebase/app-check-compat",
+       cQ = "@firebase/app-check",
+       AQ = "@firebase/auth",
+       RQ = "@firebase/auth-compat",
+       EQ = "@firebase/database",
+       CQ = "@firebase/database-compat",
+ ... (46 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L492-L518` → after: `L615-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L615-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L615-L619) · [Before (L492-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L492-L518)

```diff
-     function Vp(pp) {
-       if (pp.startsWith("data:")) {
-         const ip = pp.search(/[;,]/);
-         return `data:${ip>5?pp.slice(5,ip):""} URL of ${pp.length} characters`
-       }
-       return pp.length > 80 ? `${pp.slice(0,80)}...` : pp
-     }
-     async function ii(pp) {
-       const ip = await fetch(pp);
-       if (!ip.ok) throw new Error(`${Vp(pp)}: ${ip.status} ${ip.statusText}`);
-       return createImageBitmap(await ip.blob(), Kp)
-     }
-     async function ci(pp) {
-       const ip = await ii(pp),
-         cp = new OffscreenCanvas(ip.width, ip.height),
-         Op = cp.getContext("2d", {
- ... (11 more removed lines; see GitHub link above)
+     function XW(QQ, WQ) {
+       try {
+         QQ.container.sC(WQ)
+       } catch (XQ) {
+         HQ.debug(`Component ${WQ.name} failed to register with FirebaseApp ${QQ.name}`, XQ)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L523-L554` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L624) · [Before (L523-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L523-L554)

```diff
-       return (0, gp.h)(pp, ip.urls, (async () => {
-         const cp = await Promise.all(ip.urls.map((async (pp, cp) => {
-             var Op, op, Ip, Sp, xp;
-             return null !== (Sp = null !== (op = null === (Ip = ip.pixels) || void 0 === Ip ? void 0 : Ip[cp]) && void 0 !== op ? op : null, xp = ip.layerWidth, Op = null !== Sp && void 0 !== Sp && Sp.byteLength && xp && Sp.byteLength % (xp * xp * 4) === 0 ? {
-               pixels: Sp,
-               layerWidth: xp,
-               layers: Sp.byteLength / (xp * xp * 4)
-             } : null) && void 0 !== Op ? Op : await async function(pp) {
-               const {
-                 pixels: ip,
-                 width: cp
-               } = await ci(pp);
-               return {
-                 pixels: ip,
-                 layerWidth: cp,
-                 layers: ip.byteLength / (cp * cp * 4)
- ... (16 more removed lines; see GitHub link above)
+       QQ.container.addOrOverwriteComponent(WQ)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L588-L589` → after: `L628-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L628-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L628-L631) · [Before (L588-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L588-L589)

```diff
-       for (const ip of (0, Gp.o)(pp))
-         if (!Ii.has((0, Gp.l)(ip))) return !1;
+       const WQ = QQ.name;
+       if (WW.has(WQ)) return HQ.debug(`There were multiple attempts to register component ${WQ}.`), !1;
+       WW.set(WQ, QQ);
+       for (const XQ of QW.values()) XW(XQ, QQ);
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L593-L606` → after: `L635-L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L635-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L635-L639) · [Before (L593-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L593-L606)

```diff
-     function xi(pp) {
-       const ip = Ii.get(pp);
-       if (!ip) return null;
-       const [cp, Op, op] = ip;
-       return {
-         srcFactor: oi.get(cp),
-         dstFactor: oi.get(Op),
-         operation: op
-       }
-     }
-     let Li = null;
- 
-     function Yi(pp) {
-       Li = pp
+     function TW(QQ, WQ) {
+       const XQ = QQ.container.getProvider("heartbeat").getImmediate({
+         optional: !0
+       });
+       return XQ && XQ.triggerHeartbeat(), QQ.container.getProvider(WQ)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L610-L611` → after: `L642-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L642-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L642-L644) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L610-L611)

```diff
-     function Ai(pp) {
-       return Di.has(pp)
+     function zW(QQ, WQ) {
+       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mQ;
+       TW(QQ, WQ).clearInstance(XQ)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L614-L617` → after: `L647-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L647-L648) · [Before (L614-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L614-L617)

```diff
-     function Pi(pp, ip, cp, Op) {
-       let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-       var Ip;
-       Ai(pp) || (null === (Ip = Li) || void 0 === Ip || Ip(ip, cp, Op, op))
+     function sW() {
+       WW.clear()
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L683-L691` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L666) · [Before (L683-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L683-L691)

```diff
-         var Op, op, Ip, Sp;
-         super(pp), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (Op = null === cp | … [truncated]
-           this.inputs[pp] = new wi(this.attributesKey, 4 * this.offsets[ip], 4 * this.rowStride, cp.strides[pp])
-         })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), pp.batchUploads.set(ip, this), ip.Kl.addOnce((() => {
-           this.release()
-         }))
-       }
-       rebind() {
-         this.bind(this.matrices, this.attributes)
+         this._isDeleted = !1, this._options = Object.assign({}, QQ), this._config = Object.assign({}, WQ), this._name = WQ.name, this._automaticDataCollectionEnabled = WQ.automaticDataCollectionEnabled, this._container = XQ, this.container.sC(new wQ.e("app", (() => this), "PUBLIC … [truncated]
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L693-L694` → after: `L668-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L668-L669) · [Before (L693-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L693-L694)

```diff
-       get packedMatrices() {
-         return this.matrices
+       get automaticDataCollectionEnabled() {
+         return this.checkDestroyed(), this._automaticDataCollectionEnabled
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L696-L698` → after: `L671-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L671-L672) · [Before (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L696-L698)

```diff
-       packedRowMesh(pp) {
-         const ip = this.packedBatch;
-         return ip.renderSelf ? 0 === pp ? this.packedSource : ip.instances[pp - 1] : ip.instances[pp]
+       set automaticDataCollectionEnabled(QQ) {
+         this.checkDestroyed(), this._automaticDataCollectionEnabled = QQ
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L700-L701` → after: `L674-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L674-L675) · [Before (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L700-L701)

```diff
-       get packedAttributes() {
-         return this.attributes
+       get name() {
+         return this.checkDestroyed(), this._name
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L703-L730` → after: `L677-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L677-L678) · [Before (L703-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L703-L730)

```diff
-       pack(pp, ip, cp, Op) {
-         const op = (ip.renderSelf ? 1 : 0) + ip.rows.length;
-         if (this.frame = Op, this.count = op, this.packedSource = pp, this.packedBatch = ip, 0 === op) return;
-         if (pp.getWorldMatrix(), 16 * op > this.matrices.length) {
-           let pp = this.matrices.length / 16;
-           for (; pp < op;) pp *= 2;
-           this.matrices = new Float32Array(16 * pp), this.attributes &&= new Float32Array(pp * this.rowStride), this.bind(this.matrices, this.attributes)
-         }
-         let Ip = 0;
-         ip.renderSelf && this.packRow(Ip++, pp, ip.row, cp);
-         for (let Sp = 0; Sp < ip.rows.length; Sp++) this.packRow(Ip++, ip.instances[Sp], ip.rows[Sp], cp);
-         this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * op), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, op * this.rowStride)
-       }
-       packRow(pp, ip, cp, Op) {
-         const op = this.matrices;
-         if (cp < 0) op.set(ip.getWorldMatrix().m, 16 * pp);
- ... (12 more removed lines; see GitHub link above)
+       get options() {
+         return this.checkDestroyed(), this._options
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L732-L738` → after: `L680-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L680-L681) · [Before (L732-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L732-L738)

```diff
-     }
-     class wi {
-       constructor(pp, ip, cp, Op) {
-         let op = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-           Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
-           Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-         this.key = pp, this.byteOffset = ip, this.byteStride = cp, this.size = Op, this.instanced = op, this.type = Ip, this.normalized = Sp
+       get config() {
+         return this.checkDestroyed(), this._config
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L740-L741` → after: `L683-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L683-L684) · [Before (L740-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L740-L741)

```diff
-       getBuffer() {
-         return this.key
+       get container() {
+         return this._container
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L743-L744` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L686-L687) · [Before (L743-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L743-L744)

```diff
-       getSize() {
-         return this.size
+       get isDeleted() {
+         return this._isDeleted
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L746-L747` → after: `L689-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L689-L690) · [Before (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L746-L747)

```diff
-       getIsInstanced() {
-         return this.instanced
+       set isDeleted(QQ) {
+         this._isDeleted = QQ
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L749-L782` → after: `L692-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L692-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L692-L695) · [Before (L749-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L749-L782)

```diff
-     }
-     const vi = "CANVAS_ALPHA_ONE",
-       ti = `override ${vi}: bool = false;`,
-       Hi = {
-         srcFactor: "zero",
-         dstFactor: "one",
-         operation: "add"
-       };
- 
-     function di(pp, ip, cp) {
-       var Op;
-       let op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       const Ip = null !== (Op = ip._colorFormat) && void 0 !== Op ? Op : "bgra8unorm",
-         Sp = op ? 15 : 0;
-       return cp ? {
-         ...pp,
- ... (18 more removed lines; see GitHub link above)
+       checkDestroyed() {
+         if (this.isDeleted) throw PW.create("app-deleted", {
+           appName: this._name
+         })
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L785-L797` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L698) · [Before (L785-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L785-L797)

```diff
- 
-     function ei(pp, ip) {
-       pp._renderables.push(ip)
-     }
- 
-     function ui(pp) {
-       return pp._device
-     }
- 
-     function ji(pp) {
-       var ip, cp;
-       return null !== (ip = null === (cp = pp._frameGraph) || void 0 === cp ? void 0 : cp._tasks) && void 0 !== ip ? ip : []
-     }
+     const JW = "9.23.0";
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L800-L828` → after: `L701-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L701-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L701-L703) · [Before (L800-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L800-L828)

```diff
-       return pp._currentEncoder
-     }
- 
-     function mi(pp) {
-       return pp.createBindGroupLayout({
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
- ... (13 more removed lines; see GitHub link above)
+       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         XQ = QQ;
+       if ("object" !== typeof WQ) {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L830-L1312` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L705) · [Before (L830-L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L830-L1312)

```diff
-           module: pp.createShaderModule({
-             label: "placeholder",
-             code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
-           }),
-           pipelines: new Map
-         }, Ci.set(pp, cp)
-       }
-       const Op = `${ip._colorFormat}|${ip._depthStencilFormat}|${ip._sampleCount}`;
-       let op = cp.pipelines.get(Op);
-       if (!op) {
-         var Ip;
-         const {
-           module: Sp
-         } = cp;
-         op = pp.createRenderPipeline({
-           label: `placeholder ${Op}`,
- ... (467 more removed lines; see GitHub link above)
+           name: WQ
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L1315-L1389` → after: `L708-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L708-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L708-L717) · [Before (L1315-L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L1315-L1389)

```diff
-       return !0
-     }
-     const gc = new Float32Array(1);
-     new Uint32Array(gc.buffer);
-     var Gc = cp(38991);
- 
-     function rc(pp) {
-       const [ip, cp, Op] = Gc.n;
-       return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${pp.group}) @binding(${pp.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeT … [truncated]
-     }
- 
-     function Zc(pp) {
-       let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-         cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const [op, Ip, Sp] = Oc, [xp, Lp, Yp] = cc, Dp = Math.log2(ic), Ap = Op ? "var<private> bloxdSpCrossed: bool;\n" : "", Pp = Op ? "\t\t\tbloxdSpCrossed = true;\n" : "";
- ... (59 more removed lines; see GitHub link above)
+       const qQ = Object.assign({
+           name: mQ,
+           automaticDataCollectionEnabled: !1
+         }, WQ),
+         zQ = qQ.name;
+       if ("string" !== typeof zQ || !zQ) throw PW.create("bad-app-name", {
+         appName: String(zQ)
+       });
+       if (XQ || (XQ = (0, TQ.C)()), !XQ) throw PW.create("no-options");
+       const sQ = QW.get(zQ);
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L1391-L1403` → after: `L719-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L719-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L719-L722) · [Before (L1391-L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L1391-L1403)

```diff
-         const ip = YO,
-           op = "trace" === cp || "lit" === cp;
-         let Ip = "";
-         pp.sunShadow && (Ip = op ? `${Zc(ip,!0,"lit"===cp)}${Op=ip,`@group(${Op.group}) @binding(${Op.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${Op.group}) @binding(${Op.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn blo … [truncated]
-           const Op = `@group(${pp}) @binding(${ip}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
-           return cp ? `${Op}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Vc}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = text … [truncated]
-         }(ip.group, Vi.t, "maskEdge" === cp));
-         const Sp = {
-           shadowDirection: `${Vi.l}.shadowDirection`,
-           renderOffset: `${Vi.l}.renderOffset`,
-           eyePosition: `${Vi.l}.eyePosition`
-         };
-         return `${rc(ip)}${Ip}${function(pp){const[ip,cp,Op]=Gc.n;return`@group(${pp.group}) @binding(${pp.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${pp.group}) @binding(${pp.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset … [truncated]
+         if ((0, TQ.y)(XQ, sQ.options) && (0, TQ.y)(qQ, sQ.config)) return sQ;
+         throw PW.create("duplicate-app", {
+           appName: zQ
+         })
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L1405-L1418` → after: `L724-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L724-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L724-L727) · [Before (L1405-L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L1405-L1418)

```diff
-       var Op;
-       return `${pp.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${pp.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
-     }
- 
-     function AO(pp, ip, cp, Op) {
-       let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
-       if (!ip) return "";
-       const Ip = (Sp = "fragmentInputs.vPositionW", xp = pp.sunShadow ? {
-         normal: cp,
-         flags: Op
-       } : null, `\n\tbloxdSpShadowPosition = ${Sp};\n${xp?`\tbloxdSpShadowNormal = normalize(${xp.normal});\n\tbloxdSpShadowEmissive = (${xp.flags} & ${li.d.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${xp.flags} & ${li.h}u) != 0u;\n`:""}`);
-       var Sp, xp;
-       return pp.sunShadow && ("mask" === op || "maskEdge" === op) ? `${Ip}${Lp="fragmentInputs.position",Yp="maskEdge"===op,`\n\tbloxdSpShadowPixel = vec2i(${Lp}.xy);\n${Yp?`\tbloxdSpShadowZ = ${Lp}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${Lp}.z), dpdy(${Lp}.z));\n`:""}`}` : Ip;
-       var Lp, Yp
+       const FQ = new wQ.c(zQ);
+       for (const wQ of WW.values()) FQ.sC(wQ);
+       const PQ = new gW(XQ, qQ, FQ);
+       return QW.set(zQ, PQ), PQ
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L1424-L1425` → after: `L730-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L730-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L730-L737) · [Before (L1424-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L1424-L1425)

```diff
-     function UO(pp) {
-       return `\tvertexOutputs.vPackTexture = ${WO}[min(u32(${pp}), arrayLength(&${WO}) - 1u)];\n`
+     function IW() {
+       let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mQ;
+       const WQ = QW.get(QQ);
+       if (!WQ && QQ === mQ && (0, TQ.C)()) return rW();
+       if (!WQ) throw PW.create("no-app", {
+         appName: QQ
+       });
+       return WQ
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L1428-L1429` → after: `L740-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L740-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L740-L741) · [Before (L1428-L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L1428-L1429)

```diff
-     function wO(pp) {
-       return void 0 !== pp.uv
+     function jW() {
+       return Array.from(QW.values())
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L1431-L1460` → after: `L743-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L743-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L743-L745) · [Before (L1431-L1460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L1431-L1460)

```diff
- 
-     function vO(pp) {
-       if (!pp) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
-       if (wO(pp)) return function(pp) {
-         const {
-           texture: ip,
-           cells: cp,
-           layers: Op
-         } = pp, op = `textureDimensions(${ip}, bloxdSpLevel)`, Ip = cp ? `max(vec2u(vec2f(${op}) / ${cp}), vec2u(1u))` : op, Sp = cp ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Ip};\n\tlet bloxdSpIndex = u32( … [truncated]
-         let xp;
-         if (cp)
-           if (1 === Op.length) xp = `\treturn bloxdSpOwnTexel(${Op[0]}, bloxdSpUv, bloxdSpLevel);\n`;
-           else {
-             const pp = Op.length - 1;
-             xp = `\tvar bloxdSpColour = bloxdSpOwnTexel(${Op[pp]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
-             for (let ip = pp - 1; ip >= 0; ip--) xp += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${Op[ip]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a)) … [truncated]
- ... (14 more removed lines; see GitHub link above)
+     async function BW(QQ) {
+       const WQ = QQ.name;
+       QW.has(WQ) && (QW.delete(WQ), await Promise.all(QQ.container.getProviders().map((QQ => QQ.delete()))), QQ.isDeleted = !0)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L1535-L1575` → after: `L750-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L750-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L750-L761) · [Before (L1535-L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L1535-L1575)

```diff
-       return !(null === (ip = (0, pc.g)(pp)) || void 0 === ip || !ip.sceneDepth)
-     }
- 
-     function EO(pp) {
-       const ip = (0, pc.g)(pp);
-       return !!ip && tO(ip.hooks, ip.strict, ip.program)
-     }
- 
-     function XO(pp, ip, cp, Op) {
-       return SO(pp, ip, cp, Op, "terrain")
-     }
- 
-     function lO(pp, ip, cp) {
-       let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
-       const Ip = function(pp) {
- ... (25 more removed lines; see GitHub link above)
+       let TQ = null !== (qQ = MQ[QQ]) && void 0 !== qQ ? qQ : QQ;
+       XQ && (TQ += `-${XQ}`);
+       const zQ = TQ.match(/\s|\//),
+         sQ = WQ.match(/\s|\//);
+       if (zQ || sQ) {
+         const QQ = [`Unable to register library "${TQ}" with version "${WQ}":`];
+         return zQ && QQ.push(`library name "${TQ}" contains illegal characters (whitespace or "/")`), zQ && sQ && QQ.push("and"), sQ && QQ.push(`version name "${WQ}" contains illegal characters (whitespace or "/")`), void HQ.warn(QQ.join(" "))
+       }
+       qW(new wQ.e(`${TQ}-version`, (() => ({
+         library: TQ,
+         version: WQ
+       })), "VERSION"))
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L1623-L1624` → after: `L765-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L765-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L765-L766) · [Before (L1623-L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L1623-L1624)

```diff
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : KO;
-       return `\n\tlet atlasIdxIn = ${pp};\n\tlet animTick = ${cp.LP};\n\tlet animTickStride = ${cp.stride};\n\tlet numAnimTextures = ${cp.count};\n\t${(0,kp.d)(jp.b.WGSL,cp.perTexture)}\n\t${ip}animLayer;\n`
+       if (null !== QQ && "function" !== typeof QQ) throw PW.create("invalid-log-argument");
+       (0, qQ.h)(QQ, WQ)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L1628-L1638` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L770) · [Before (L1628-L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L1628-L1638)

```diff
-       const ip = (ip, cp) => {
-         const Op = ip > 0 ? `fragmentInputs.texAtlasIndex - ${pp.atlasLayers.toFixed(1)} * ${ip.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
-         return `${cp?"textureSampleLevel":"textureSample"}(textureAtlas${ip}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${Op}))${cp?", atlasLod":""})`
-       };
-       if (1 === pp.atlasCount) return `baseColor = ${ip(0,!1)};`;
-       let cp = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,zi.hb)(pp.M6)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
-       for (let Op = 0; Op < pp.atlasCount; Op++) {
-         const op = pp.atlasLayers * (Op + 1) - .5;
-         cp += `${Op>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,zi.hb)(op)}) {\n\t\tbaseColor = ${ip(Op,!0)};\n\t}`
-       }
-       return cp
+       (0, qQ.f)(QQ)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L1641-L1642` → after: `L775-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L775-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L775-L798) · [Before (L1641-L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L1641-L1642)

```diff
-     function io(pp) {
-       return `terrain-${pp.texture}${"atlas"===pp.texture?pp.atlasCount:""}${pp.animated?"-anim":""}${pp.alphaTest?"-test":""}${pp.lighting?"-lit":""}-dir${pp.dirLightCount}${pp.packed?"-packed":""}${JO(pp)?`-sp${pp.packVariant}`:""}${pp.liquid?"-liquid":""}${pp.resting?"-rest":" … [truncated]
+     function UW() {
+       return GW || (GW = function(QQ, WQ) {
+         let {
+           blocked: XQ,
+           upgrade: wQ,
+           blocking: qQ,
+           terminated: TQ
+         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         const zQ = indexedDB.open(QQ, WQ),
+           sQ = yQ(zQ);
+         return wQ && zQ.addEventListener("upgradeneeded", (QQ => {
+           wQ(yQ(zQ.result), QQ.oldVersion, QQ.newVersion, yQ(zQ.transaction), QQ)
+         })), XQ && zQ.addEventListener("blocked", (QQ => XQ(QQ.oldVersion, QQ.newVersion, QQ))), sQ.then((QQ => {
+           TQ && QQ.addEventListener("close", (() => TQ())), qQ && QQ.addEventListener("versionchange", (QQ => qQ(QQ.oldVersion, QQ.newVersion, QQ)))
+         })).catch((() => {})), sQ
+       }("firebase-heartbeat-database", 1, {
+ ... (8 more added lines; see GitHub link above)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L1644-L6699` → after: `L800-L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L800-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L800-L809) · [Before (L1644-L6699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L1644-L6699)

```diff
- 
-     function co(pp) {
-       let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-         cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
-       const Op = function(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
-         const cp = "none" !== pp.texture,
-           Op = "atlas" === pp.texture,
-           op = pp.dirLightCount > 0,
-           Ip = JO(pp);
-         if (pp.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${pp.dirLightCount}`);
-         let Sp = 1,
-           xp = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
-         if (Op) {
-           pp.animated && (xp += `@group(2) @binding(${Sp++}) var<storage, read> animDataPerTex: array<f32>;\n`), xp += `@group(2) @binding(${Sp++}) var atlasSampler: sampler;\n`;
-           for (let ip = 0; ip < pp.atlasCount; ip++) xp += `@group(2) @binding(${Sp++}) var textureAtlas${ip}: texture_2d_array<f32>;\n`
- ... (5040 more removed lines; see GitHub link above)
+     async function bW(QQ, WQ) {
+       try {
+         const XQ = (await UW()).transaction(pW, "readwrite"),
+           wQ = XQ.objectStore(pW);
+         await wQ.put(WQ, vW(QQ)), await XQ.done
+       } catch (XQ) {
+         if (XQ instanceof TQ.k) HQ.warn(XQ.message);
+         else {
+           const QQ = PW.create("idb-set", {
+             originalErrorMessage: null === XQ || void 0 === XQ ? void 0 : XQ.message
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L6701-L7606` → after: `L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L811) · [Before (L6701-L7606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L6701-L7606)

```diff
-         return Promise.all([op, Ip]).then((pp => {
-           let [ip, cp] = pp;
-           return this.prepassOf.set(ip, cp), this.maskPipelines++, ip
-         }))
-       }
-       failedPackBuild(pp, ip, cp, Op) {
-         console.error(`Lite terrain pipeline ${cp} failed`, Op), gx(this.device, ip, cp, null, Op);
-         const op = Promise.reject(Op);
-         op.catch((() => {}));
-         const Ip = {
-           name: cp,
-           module: null,
-           built: op
-         };
-         return this.builds.set(pp, Ip), Ip
-       }
- ... (890 more removed lines; see GitHub link above)
+           HQ.warn(QQ.message)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7612-L7626` → after: `L816-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L816-L817) · [Before (L7612-L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L7612-L7626)

```diff
-     function dL(pp, ip) {
-       return pp[0] * ip[0] + pp[1] * ip[1] + pp[2] * ip[2] < HL
-     }
-     async function eL(pp) {
-       const {
-         pixels: ip,
-         width: cp,
-         height: Op
-       } = await ci(pp), op = new Uint8Array(cp * Op);
-       for (let Ip = 0; Ip < op.length; Ip++) op[Ip] = ip[4 * Ip + 3];
-       return {
-         width: cp,
-         height: Op,
-         alpha: op
-       }
+     function vW(QQ) {
+       return `${QQ.name}!${QQ.options.appId}`
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7629-L7671` → after: `L820-L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L820-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L820-L823) · [Before (L7629-L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L7629-L7671)

```diff
-       constructor(pp, ip) {
-         this.device = pp, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Gc.j), this.entities = void 0, this.entityStandIn =  … [truncated]
-           label: "sun-shadow",
-           size: 128,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         }), this.voxelBuffer = pp.createBuffer({
-           label: "sun-shadow-voxels",
-           size: 4 * Uc,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.special = pp.createBuffer({
-           label: "sun-shadow-special",
-           size: 9568256,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         });
-         const [cp, Op, op] = Gc.n;
-         this.volume = pp.createTexture({
- ... (27 more removed lines; see GitHub link above)
+       constructor(QQ) {
+         this.container = QQ, this._heartbeatsCache = null;
+         const WQ = this.container.getProvider("app").getImmediate();
+         this.PB = new aW(WQ), this._heartbeatsCachePromise = this.PB.read().then((QQ => (this._heartbeatsCache = QQ, QQ)))
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7673-L7675` → after: `L825-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L825-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L825-L871) · [Before (L7673-L7675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L7673-L7675)

```diff
-       dispose() {
-         var pp;
-         null === (pp = this.stopWindow) || void 0 === pp || pp.call(this)
+       async triggerHeartbeat() {
+         const QQ = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
+           WQ = HW();
+         if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== WQ && !this._heartbeatsCache.heartbeats.some((QQ => QQ.date === WQ))) return this._heartbeatsCache.heartbeats.push({
+           date: WQ,
+           agent: QQ
+         }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((QQ => {
+           const WQ = new Date(QQ.date).valueOf();
+           return Date.now() - WQ <= 2592e6
+         })), this.PB.overwrite(this._heartbeatsCache)
+       }
+       async getHeartbeatsHeader() {
+         if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length) return "";
+         const QQ = HW(),
+           {
+             heartbeatsToSend: WQ,
+ ... (31 more added lines; see GitHub link above)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7677-L7678` → after: `L873-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L873-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L873-L880) · [Before (L7677-L7678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L7677-L7678)

```diff
-       get tracesEntities() {
-         return null !== this.entities
+     }
+ 
+     function HW() {
+       return (new Date).toISOString().substring(0, 10)
+     }
+     class aW {
+       constructor(QQ) {
+         this.app = QQ, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7680-L7685` → after: `L882-L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L882-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L882-L883) · [Before (L7680-L7685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L7680-L7685)

```diff
-       describePendingWork() {
-         var pp, ip;
-         const cp = [];
-         !this.volumePassStarted || this.volumePass || this.volumePassFailed || cp.push("Lite sun shadow volume pipeline compiling");
-         const Op = null !== (pp = null === (ip = this.casters) || void 0 === ip ? void 0 : ip.planesLoading) && void 0 !== pp ? pp : 0;
-         return Op > 0 && cp.push(`${Op} Lite sun shadow plane casters loading their textures`), cp
+       async runIndexedDBEnvironmentCheck() {
+         return !!(0, TQ.Z)() && (0, TQ.fb)().then((() => !0)).catch((() => !1))
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7687-L7719` → after: `L885-L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L885-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L885-L901) · [Before (L7687-L7719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L7687-L7719)

```diff
-       entries() {
-         var pp, ip, cp, Op;
-         const op = Vi.r;
-         return [{
-           binding: op.uniform,
-           resource: {
-             buffer: this.uniform
-           }
-         }, {
-           binding: op.hP,
-           resource: {
-             buffer: this.voxelBuffer
-           }
-         }, {
-           binding: op.special,
-           resource: {
- ... (17 more removed lines; see GitHub link above)
+       async read() {
+         if (await this._canUseIndexedDBPromise) {
+           return await async function(QQ) {
+             try {
+               const WQ = await UW();
+               return await WQ.transaction(pW).objectStore(pW).get(vW(QQ))
+             } catch (WQ) {
+               if (WQ instanceof TQ.k) HQ.warn(WQ.message);
+               else {
+                 const QQ = PW.create("idb-get", {
+                   originalErrorMessage: null === WQ || void 0 === WQ ? void 0 : WQ.message
+                 });
+                 HQ.warn(QQ.message)
+               }
+             }
+           }(this.app) || {
+ ... (1 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7721` → after: `L903-L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L903-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L903-L906) · [Before (L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L7721)

```diff
-         }]
+         }
+         return {
+           heartbeats: []
+         }
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7723` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L908) · [Before (L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L7723)

```diff
-       prepare(pp, ip, cp) {
+       async overwrite(QQ) {
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7725-L7780` → after: `L910-L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L910-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L910-L915) · [Before (L7725-L7780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L7725-L7780)

```diff
-         this.entitiesThisFrame = !1;
-         const op = null !== (Op = null === cp || void 0 === cp ? void 0 : cp.sunShadowReach()) && void 0 !== Op ? Op : {
-           sunShadow: !1,
-           airShadow: !1
-         };
-         if (!cp || !op.sunShadow && !op.airShadow) return void(this.volumeHolds = null);
-         if (pp.WP.epp !== ic) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${pp.WP.epp}; everything is lit.`)));
-         const Ip = this.start(pp);
-         this.casters.update(pp.UW, pp.UW.HW.length);
-         const Sp = pp.BP;
-         for (let Pp = 0; Pp < 3; Pp++) this.eye[Pp] = ip[Pp] + Sp[Pp];
-         const xp = (0, Gc.t)(this.eye);
-         this.staleNear = xp;
-         const Lp = pp.WP.XU;
-         Ip.update(this.eye, ((pp, ip, cp) => Lp.lU(pp, ip, cp)), 1);
-         const Yp = (0, Gc.o)(cp.opp()),
- ... (40 more removed lines; see GitHub link above)
+         if (await this._canUseIndexedDBPromise) {
+           const XQ = await this.read();
+           return bW(this.app, {
+             lastSentHeartbeatDate: null !== (WQ = QQ.lastSentHeartbeatDate) && void 0 !== WQ ? WQ : XQ.lastSentHeartbeatDate,
+             heartbeats: QQ.heartbeats
+           })
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7787-L7801` → after: `L918-L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L918-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L918-L925) · [Before (L7787-L7801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L7787-L7801)

```diff
-       computeVolume(pp, ip, cp) {
-         const Op = this.buildVolumePass();
-         if (!Op) return void(this.volumeHolds = null);
-         const op = (0, Gc.r)(this.volumeHolds, pp);
-         this.volumeHolds = pp;
-         const Ip = 1 === op.length && op[0].size.every(((pp, ip) => pp === Gc.n[ip])),
-           Sp = this.sweptChunk,
-           xp = this.sweptLight,
-           Lp = ip[0] !== xp[0] || ip[1] !== xp[1] || ip[2] !== xp[2],
-           Yp = cp[0] !== Sp[0] || cp[1] !== Sp[1] || cp[2] !== Sp[2],
-           Dp = Lp && dL(ip, xp);
-         if ((Ip || this.written || Yp || Dp) && (this.fastLeft = Gc.f), Ip || this.written || Lp || Yp) {
-           this.written = !1;
-           for (let pp = 0; pp < 3; pp++) Sp[pp] = cp[pp], xp[pp] = ip[pp];
-           this.sweepLeft = Ip ? 0 : Gc.f
+       async add(QQ) {
+         var WQ;
+         if (await this._canUseIndexedDBPromise) {
+           const XQ = await this.read();
+           return bW(this.app, {
+             lastSentHeartbeatDate: null !== (WQ = QQ.lastSentHeartbeatDate) && void 0 !== WQ ? WQ : XQ.lastSentHeartbeatDate,
+             heartbeats: [...XQ.heartbeats, ...QQ.heartbeats]
+           })
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7934-L7935` → after: `L930-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L930-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L930-L934) · [Before (L7934-L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L7934-L7935)

```diff
-     function CL(pp, ip, cp, Op) {
-       pp.drawOffset(ip, Op + mL), ip[Op + RL] = pp.drawTime(), cp[Op + qL] = pp.ring.drawStart(), cp[Op + ML] = pp.ring.drawCount()
+     function lW(QQ) {
+       return (0, TQ.u)(JSON.stringify({
+         version: 2,
+         heartbeats: QQ
+       })).length
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7937-L7938` → after: `L936-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L936-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L936-L944) · [Before (L7937-L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L7937-L7938)

```diff
-     const EL = `\n${hO}\n\nconst MAX_STOPS = ${kL.d}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${kL.d/4}>,\n\tcolor1: array<vec4f, ${kL.d}>,\n\t … [truncated]
-     var XL = cp(41864);
+     var hW;
+     hW = "", qW(new wQ.e("platform-logger", (QQ => new bQ(QQ)), "PRIVATE")), qW(new wQ.e("heartbeat", (QQ => new dW(QQ)), "PRIVATE")), yW(vQ, dQ, hW), yW(vQ, dQ, "esm2017"), yW("fire-js", "")
+   },
+   40758: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => sQ,
+       e: () => qQ
+     });
+     var wQ = XQ(40761);
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7940-L7955` → after: `L946-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L946-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L946-L947) · [Before (L7940-L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L7940-L7955)

```diff
-       constructor(pp, ip, cp, Op) {
-         this.device = pp, this.system = ip, this.frameIndex = cp, this.bindings = Op, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, XL.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.bou … [truncated]
-           this.device.queue.writeBuffer(this.ring, pp * kL.e * 4, this.system.ring.records, pp * kL.e, (ip - pp) * kL.e)
-         };
-         const {
-           name: op
-         } = ip;
-         this.ring = pp.createBuffer({
-           label: `particles-${op}`,
-           size: ip.ring.records.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.uniforms = pp.createBuffer({
-           label: `particles-uniforms-${op}`,
-           size: 4 * kL.m,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
+       constructor(QQ, WQ, XQ) {
+         this.name = QQ, this.instanceFactory = WQ, this.type = XQ, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7957-L7959` → after: `L949-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L949-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L949-L950) · [Before (L7957-L7959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L7957-L7959)

```diff
-       writeUniforms(pp) {
-         const ip = (0, XL.d)(this.system, this.uniformBits, pp);
-         ip && (this.uniformBits = ip, this.device.queue.writeBuffer(this.uniforms, 0, ip))
+       setInstantiationMode(QQ) {
+         return this.instantiationMode = QQ, this
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L7961-L8002` → after: `L952-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L952-L953) · [Before (L7961-L8002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L7961-L8002)

```diff
-       bind() {
-         const {
-           system: pp
-         } = this, ip = this.texture;
-         (0, XL.m)(pp, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
-           label: `particles-ramp-${pp.name}`,
-           size: [kL.k, 1],
-           format: "rgba8unorm",
-           usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
-         }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
-           texture: this.ramp
-         }, this.rampTexels.texels, {
-           bytesPerRow: 4 * kL.k
-         }, [kL.k, 1]));
-         const cp = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
-         this.bindGroup && this.boundView === ip.view && this.boundSampler === ip.sampler && this.boundRamp === cp || (this.boundView = ip.view, this.boundSampler = ip.sampler, this.boundRamp = cp, this.bindGroup = this.device.createBindGroup({
- ... (26 more removed lines; see GitHub link above)
+       setMultipleInstances(QQ) {
+         return this.multipleInstances = QQ, this
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8004-L8006` → after: `L955-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L955-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L955-L959) · [Before (L8004-L8006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8004-L8006)

```diff
-       destroy() {
-         var pp;
-         this.ring.destroy(), this.uniforms.destroy(), null === (pp = this.ramp) || void 0 === pp || pp.destroy()
+       setServiceProps(QQ) {
+         return this.serviceProps = QQ, this
+       }
+       setInstanceCreatedCallback(QQ) {
+         return this.onInstanceCreated = QQ, this
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8011-L8019` → after: `L965-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L965-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L965-L976) · [Before (L8011-L8019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8011-L8019)

```diff
-         this.device = pp, this.resources = ip, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(409 … [truncated]
-           order: 251,
-           isTransparent: !0,
-           _worldCenter: [0, 0, 0],
-           bind: (pp, ip) => (this.bindTarget(ip), {
-             renderable: this.renderable,
-             pipeline: Ei(this.device, ip),
-             draw: pp => ip === this.preparedTarget ? this.draw(pp) : 0
-           })
+         this.name = QQ, this.container = WQ, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
+       }
+       get(QQ) {
+         const WQ = this.normalizeInstanceIdentifier(QQ);
+         if (!this.instancesDeferred.has(WQ)) {
+           const QQ = new wQ.d;
+           if (this.instancesDeferred.set(WQ, QQ), this.isInitialized(WQ) || this.shouldAutoInitialize()) try {
+             const XQ = this.getOrInitializeService({
+               instanceIdentifier: WQ
+             });
+             XQ && QQ.resolve(XQ)
+           } catch (XQ) {}
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8022-L8027` → after: `L980-L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L980-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L980-L994) · [Before (L8022-L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8022-L8027)

```diff
-       rebind(pp) {
-         this.device = pp, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
-         for (const [ip, cp] of this.systems) {
-           const Op = new lL(pp, ip, cp.frameIndex, this.bindings),
-             op = ip.ring.drawCount();
-           op > 0 && Op.upload(0, op), this.systems.set(ip, Op)
+       getImmediate(QQ) {
+         var WQ;
+         const XQ = this.normalizeInstanceIdentifier(null === QQ || void 0 === QQ ? void 0 : QQ.identifier),
+           wQ = null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.optional) && void 0 !== WQ && WQ;
+         if (!this.isInitialized(XQ) && !this.shouldAutoInitialize()) {
+           if (wQ) return null;
+           throw Error(`Service ${this.name} is not available`)
+         }
+         try {
+           return this.getOrInitializeService({
+             instanceIdentifier: XQ
+           })
+         } catch (qQ) {
+           if (wQ) return null;
+           throw qQ
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8030-L8115` → after: `L997-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L997-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L997-L998) · [Before (L8030-L8115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8030-L8115)

```diff
-       build() {
-         const {
-           device: pp
-         } = this, ip = pp.createBindGroupLayout({
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
- ... (70 more removed lines; see GitHub link above)
+       getComponent() {
+         return this.component
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8117-L8118` → after: `L1000-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1000-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1000-L1020) · [Before (L8117-L8118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8117-L8118)

```diff
-       describePendingWork() {
-         return (0, jL.d)(this.systems.keys(), "Lite")
+       setComponent(QQ) {
+         if (QQ.name !== this.name) throw Error(`Mismatching Component ${QQ.name} for Provider ${this.name}.`);
+         if (this.component) throw Error(`Component for ${this.name} has already been provided`);
+         if (this.component = QQ, this.shouldAutoInitialize()) {
+           if (function(QQ) {
+               return "EAGER" === QQ.instantiationMode
+             }(QQ)) try {
+             this.getOrInitializeService({
+               instanceIdentifier: TQ
+             })
+           } catch (WQ) {}
+           for (const [QQ, XQ] of this.instancesDeferred.entries()) {
+             const wQ = this.normalizeInstanceIdentifier(QQ);
+             try {
+               const QQ = this.getOrInitializeService({
+                 instanceIdentifier: wQ
+ ... (5 more added lines; see GitHub link above)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8120-L8122` → after: `L1022-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1022-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1022-L1024) · [Before (L8120-L8122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8120-L8122)

```diff
-       eJ(pp, ip) {
-         const cp = new jL.c(pp, ip, this);
-         return this.systems.set(cp, new lL(this.device, cp, this.allocateFrameIndex(), this.bindings)), cp
+       clearInstance() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TQ;
+         this.instancesDeferred.delete(QQ), this.instancesOptions.delete(QQ), this.instances.delete(QQ)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8124-L8125` → after: `L1026-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1026-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1026-L1028) · [Before (L8124-L8125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8124-L8125)

```diff
-       K9(pp, ip) {
-         for (const cp of this.systems.keys()) cp.K9(pp, ip)
+       async delete() {
+         const QQ = Array.from(this.instances.values());
+         await Promise.all([...QQ.filter((QQ => "INTERNAL" in QQ)).map((QQ => QQ.INTERNAL.delete())), ...QQ.filter((QQ => "_delete" in QQ)).map((QQ => QQ._delete()))])
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8127-L8138` → after: `L1030-L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1030-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1030-L1031) · [Before (L8127-L8138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8127-L8138)

```diff
-       canDraw(pp) {
-         const ip = this.systems.get(pp),
-           cp = pp.texture ? this.resources.boundTexture(pp.texture) : null;
-         if (!ip || !cp || !this.targetPipelines) return !1;
-         if (ip.texture = cp, ip.pipelines.length = 0, !Si(pp.blendMode)) return this.warnOnce(`blend:${pp.blendMode}`, `particle blend mode ${pp.blendMode} is not drawn (${pp.name})`), !0;
-         const Op = (0, Gp.o)(pp.blendMode);
-         for (const op of Op) {
-           const pp = this.pipelineFor(op);
-           if (!1 === pp) return ip.pipelines.length = 0, !0;
-           pp && ip.pipelines.push(pp)
-         }
-         return ip.pipelines.length === Op.length
+       isComponentSet() {
+         return null != this.component
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8140-L8141` → after: `L1033-L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1033-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1033-L1035) · [Before (L8140-L8141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8140-L8141)

```diff
-       disposeStopped(pp) {
-         pp.dispose()
+       isInitialized() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TQ;
+         return this.instances.has(QQ)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8143-L8145` → after: `L1037-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1037-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1037-L1039) · [Before (L8143-L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8143-L8145)

```diff
-       remove(pp) {
-         const ip = this.systems.get(pp);
-         ip && (this.systems.delete(pp), ip.destroy(), this.freeFrameIndices.push(ip.frameIndex))
+       getOptions() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TQ;
+         return this.instancesOptions.get(QQ) || {}
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8147-L8157` → after: `L1041-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1041-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1041-L1053) · [Before (L8147-L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8147-L8157)

```diff
-       prepare(pp) {
-         const ip = pp.animationRatio || 1;
-         Xi(this.renderable._worldCenter, pp, qi), this.preparedTarget = this.target, this.draws.length = 0;
-         let cp = 0;
-         for (const Op of this.systems.values()) {
-           const pp = Op.system;
-           if (!pp.animateIfActive(ip)) continue;
-           if (pp.ring.takeUploads(Op.upload), !pp.hasLiveParticles() || 0 === Op.pipelines.length) continue;
-           Op.writeUniforms(this.warnOnce), Op.bind();
-           const op = 64 * Op.frameIndex;
-           Op.count = pp.ring.drawCount(), CL(pp, this.frameData, this.frameBits, op), cp = Math.max(cp, op + 64), this.draws.push(Op)
+       initialize() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         const {
+           options: WQ = {}
+         } = QQ, XQ = this.normalizeInstanceIdentifier(QQ.instanceIdentifier);
+         if (this.isInitialized(XQ)) throw Error(`${this.name}(${XQ}) has already been initialized`);
+         if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
+         const wQ = this.getOrInitializeService({
+           instanceIdentifier: XQ,
+           options: WQ
+         });
+         for (const [qQ, TQ] of this.instancesDeferred.entries()) {
+           XQ === this.normalizeInstanceIdentifier(qQ) && TQ.resolve(wQ)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8159` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1055) · [Before (L8159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8159)

```diff
-         cp > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, cp)
+         return wQ
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8161-L8166` → after: `L1057-L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1057-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1057-L1064) · [Before (L8161-L8166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8161-L8166)

```diff
-       draw(pp) {
-         let ip = 0,
-           cp = null;
-         for (const Op of this.draws) {
-           pp.setBindGroup(1, Op.bindGroup), pp.setBindGroup(2, this.frameBindGroup, [256 * Op.frameIndex]);
-           for (const op of Op.pipelines) op !== cp && (pp.setPipeline(op), cp = op), pp.draw(4, Op.count), ip++
+       cL(QQ, WQ) {
+         var XQ;
+         const wQ = this.normalizeInstanceIdentifier(WQ),
+           qQ = null !== (XQ = this.onInitCallbacks.get(wQ)) && void 0 !== XQ ? XQ : new Set;
+         qQ.add(QQ), this.onInitCallbacks.set(wQ, qQ);
+         const TQ = this.instances.get(wQ);
+         return TQ && QQ(TQ, wQ), () => {
+           qQ.delete(QQ)
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8170-L8174` → after: `L1067-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1067-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1067-L1072) · [Before (L8170-L8174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8170-L8174)

```diff
-       bindTarget(pp) {
-         this.target = pp;
-         const ip = `${pp._colorFormat}|${pp._depthStencilFormat}|${pp._depthCompare}|${pp._sampleCount}`;
-         let cp = this.pipelines.get(ip);
-         cp || (cp = new Map, this.pipelines.set(ip, cp)), this.targetPipelines = cp
+       invokeOnInitCallbacks(QQ, WQ) {
+         const XQ = this.onInitCallbacks.get(WQ);
+         if (XQ)
+           for (const qQ of XQ) try {
+             qQ(QQ, WQ)
+           } catch (wQ) {}
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8176` → after: `L1074-L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1074-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1074-L1084) · [Before (L8176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8176)

```diff
-       pipelineFor(pp) {
+       getOrInitializeService(QQ) {
+         let {
+           instanceIdentifier: WQ,
+           options: XQ = {}
+         } = QQ, wQ = this.instances.get(WQ);
+         if (!wQ && this.component && (wQ = this.component.instanceFactory(this.container, {
+             instanceIdentifier: (qQ = WQ, qQ === TQ ? void 0 : qQ),
+             options: XQ
+           }), this.instances.set(WQ, wQ), this.instancesOptions.set(WQ, XQ), this.invokeOnInitCallbacks(wQ, WQ), this.component.onInstanceCreated)) try {
+           this.component.onInstanceCreated(this.container, WQ, wQ)
+         } catch (zQ) {}
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8178-L8228` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1086) · [Before (L8178-L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8178-L8228)

```diff
-         const cp = this.targetPipelines,
-           Op = cp.get(pp);
-         if (void 0 !== Op) return Op;
-         cp.set(pp, null);
-         const op = this.target,
-           Ip = pp === Gp.d,
-           Sp = null !== (ip = op._depthCompare) && void 0 !== ip ? ip : Ri,
-           {
-             device: xp
-           } = this;
-         return xp.createRenderPipelineAsync({
-           label: `particles-${pp}`,
-           layout: this.pipelineLayout,
-           vertex: {
-             module: this.module,
-             entryPoint: "mainVertex"
- ... (35 more removed lines; see GitHub link above)
+         return wQ || null
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8230-L8235` → after: `L1088-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1088-L1090) · [Before (L8230-L8235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8230-L8235)

```diff
-       createFrameBuffer() {
-         return this.device.createBuffer({
-           label: "particles-frames",
-           size: this.frameData.byteLength,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
+       normalizeInstanceIdentifier() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TQ;
+         return this.component ? this.component.multipleInstances ? QQ : TQ : QQ
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8237-L8248` → after: `L1092-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1092-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1092-L1093) · [Before (L8237-L8248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8237-L8248)

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

#### 105. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8252-L8319` → after: `L1097-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1097-L1098) · [Before (L8252-L8319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8252-L8319)

```diff
-       constructor(pp, ip, cp, Op, op) {
-         this.lite = pp, this.canvas = ip, this.info = cp, this.resources = op, this.lOp = !1, this.needPOTTextures = !1, this.p_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
-           reset: () => {
-             this.lastFrameTime = null
-           }
-         }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = ip.width, this.renderHeight = ip.height, this.caps = {
-           maxTextureSize: Op.maxTextureDimension2D,
-           texture2DArrayMaxLayerCount: Op.maxTextureArrayLayers
-         }
-       }
-       getCaps() {
-         return this.caps
-       }
-       detach() {
-         this.lite = null
-       }
- ... (52 more removed lines; see GitHub link above)
+       constructor(QQ) {
+         this.name = QQ, this.providers = new Map
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8321-L8323` → after: `L1100-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1100-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1100-L1103) · [Before (L8321-L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8321-L8323)

```diff
-       S_(pp, ip) {
-         var cp;
-         return null !== (cp = this.resources.S_.get(pp)) && void 0 !== cp ? cp : new yi(this.resources, pp, ip)
+       sC(QQ) {
+         const WQ = this.getProvider(QQ.name);
+         if (WQ.isComponentSet()) throw new Error(`Component ${QQ.name} has already been registered with ${this.name}`);
+         WQ.setComponent(QQ)
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8325-L8326` → after: `L1105-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1105-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1105-L1106) · [Before (L8325-L8326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8325-L8326)

```diff
-       atlasArrays(pp) {
-         return this.resources.atlasArrays(pp)
+       addOrOverwriteComponent(QQ) {
+         this.getProvider(QQ.name).isComponentSet() && this.providers.delete(QQ.name), this.sC(QQ)
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8328-L8331` → after: `L1108-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1108-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1108-L1111) · [Before (L8328-L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8328-L8331)

```diff
-     }
-     class BL {
-       constructor() {
-         this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
+       getProvider(QQ) {
+         if (this.providers.has(QQ)) return this.providers.get(QQ);
+         const WQ = new zQ(QQ, this);
+         return this.providers.set(QQ, WQ), WQ
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8333-L8337` → after: `L1113-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1113-L1114) · [Before (L8333-L8337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8333-L8337)

```diff
-       copyFromView(pp) {
-         this.fov = pp.fov, this.nearPlane = pp.near, this.farPlane = pp.far;
-         const ip = pp.worldMatrix;
-         for (let cp = 0; cp < 16; cp++)
-           if (this.worldMatrix[cp] !== ip[cp]) return this.worldMatrix.set(ip), void this.worldMatrixVersion++
+       getProviders() {
+         return Array.from(this.providers.values())
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8341-L8364` → after: `L1155-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1155-L1156) · [Before (L8341-L8364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8341-L8364)

```diff
-       constructor(pp, ip, cp, Op) {
-         this.canvas = ip, this.options = cp, this.xcp = void 0, this.backendName = "WebGPU (Lite)", this.l_ = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new BL, this.lastFrameTime = 0, this.engine = void 0, this.pw = void 0, … [truncated]
-         const {
-           resources: op,
-           meshes: Ip
-         } = pp;
-         this.resources = op, this.particles = pp.particles, this.xcp = new JL(pp.engine, ip, Op, pp.device.limits, op), (0, Mp.G)({
-           sx: pp => {
-             lp(pp) && op.textureSlot(pp)
-           },
-           loaded: pp => lp(pp) ? op.textureLoaded(pp) : null,
-           canvasUpdated: (pp, ip, cp) => {
-             lp(pp) && op.canvasUpdated(pp, ip, cp)
-           }
-         }), this.l_ = Ip.l_, this.modelMeshes = Ip.modelMeshes
-       }
- ... (8 more removed lines; see GitHub link above)
+       constructor(QQ) {
+         this.name = QQ, this._logLevel = zQ, this._logHandler = FQ, this._userLogHandler = null, wQ.push(this)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8366-L8372` → after: `L1158-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1158-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1158-L1159) · [Before (L8366-L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8366-L8372)

```diff
-       install(pp) {
-         this.engine = pp.engine, this.pw = pp.pw, this.sceneTask = pp.sceneTask, this.device = pp.device, this.liteTerrain = pp.terrain, this.meshes = pp.meshes, this.sunShadow = pp.sunShadow;
-         const ip = new Fp(pp.device.lost);
-         this.refusals = ip, ip.deviceLost.then((() => {
-           var ip;
-           ip = pp.device, Di.add(ip)
-         })), pp.pw.camera = this.camera
+       get logLevel() {
+         return this._logLevel
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8374-L8412` → after: `L1161-L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1161-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1161-L1163) · [Before (L8374-L8412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8374-L8412)

```diff
-       async rebuild() {
-         var pp, ip, cp, Op, op;
-         const Ip = await hL();
-         this.halted = !0, this.liteTerrain.retire(), null === (pp = this.sunShadow) || void 0 === pp || pp.dispose(), this.xcp.detach();
-         try {
-           (0, ap.b)(this.engine)
-         } catch (Dp) {
-           console.warn("Lite: disposing the lost device's engine threw", Dp)
-         }
-         const Sp = {
-             width: this.xcp.renderWidth,
-             height: this.xcp.renderHeight
-           },
-           xp = await aL(this.canvas, this.options, Sp, Ip),
-           Lp = ui(xp),
-           Yp = nL(Lp);
- ... (23 more removed lines; see GitHub link above)
+       set logLevel(QQ) {
+         if (!(QQ in qQ)) throw new TypeError(`Invalid value "${QQ}" assigned to \`logLevel\``);
+         this._logLevel = QQ
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8414-L8420` → after: `L1165-L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1165-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1165-L1166) · [Before (L8414-L8420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8414-L8420)

```diff
-       whenTerrainDrawn() {
-         return new Promise(((pp, ip) => {
-           this.firstTerrain = {
-             drawn: pp,
-             failed: ip
-           }
-         }))
+       setLogLevel(QQ) {
+         this._logLevel = "string" === typeof QQ ? TQ[QQ] : QQ
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8422-L8424` → after: `L1168-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1168-L1169) · [Before (L8422-L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8422-L8424)

```diff
-       get castsEntitySunShadows() {
-         var pp, ip;
-         return null !== (pp = null === (ip = this.sunShadow) || void 0 === ip ? void 0 : ip.tracesEntities) && void 0 !== pp && pp
+       get logHandler() {
+         return this._logHandler
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8426-L8427` → after: `L1171-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1171-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1171-L1173) · [Before (L8426-L8427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8426-L8427)

```diff
-       get sampleCount() {
-         return this.engine.msaaSamples
+       set logHandler(QQ) {
+         if ("function" !== typeof QQ) throw new TypeError("Value assigned to `logHandler` must be a function");
+         this._logHandler = QQ
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8429-L8434` → after: `L1175-L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1175-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1175-L1176) · [Before (L8429-L8434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8429-L8434)

```diff
-       attach(pp) {
-         this.WU = pp, this.modelMeshes.attach(pp.model, pp.sceneMirror);
-         const ip = pp.pw;
-         this.setClearColour(ip.clearColor.r, ip.clearColor.g, ip.clearColor.b), ip.draw = () => {
-           this.drawFrame(pp, ip)
-         }
+       get userLogHandler() {
+         return this._userLogHandler
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8436-L8444` → after: `L1178-L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1178-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1178-L1179) · [Before (L8436-L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8436-L8444)

```diff
-       render(pp) {
-         if (!this.refusals.lost && !this.halted) {
-           try {
-             this.xcp.Hk(), pp.pw.render()
-           } catch (ip) {
-             throw this.refusals.frameFailed(ip), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(ip), this.firstTerrain = null), ip
-           }
-           this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
-         }
+       set userLogHandler(QQ) {
+         this._userLogHandler = QQ
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8446-L8447` → after: `L1181-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1181-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1181-L1183) · [Before (L8446-L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8446-L8447)

```diff
-       lastFrameDrawCalls() {
-         return this.engine.drawCallCount
+       debug() {
+         for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
+         this._userLogHandler && this._userLogHandler(this, qQ.DEBUG, ...WQ), this._logHandler(this, qQ.DEBUG, ...WQ)
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8449-L8457` → after: `L1185-L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1185-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1185-L1187) · [Before (L8449-L8457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8449-L8457)

```diff
-       describePendingWork() {
-         var pp, ip, cp, Op;
-         const op = [...this.particles.describePendingWork(), ...null !== (pp = null === (ip = this.sunShadow) || void 0 === ip ? void 0 : ip.describePendingWork()) && void 0 !== pp ? pp : []],
-           Ip = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (cp = this.terrain.sceneDepth) && void 0 !== cp && cp.compiling ? 1 : 0) + (null !== (Op = this.terrain.shadowMask) && void 0 !== Op && Op.compiling ? 1 : 0);
-         Ip > 0 && op.push(`${Ip} Lite pipelines compiling`);
-         const Sp = this.terrain.buffersAwaitingVerdict;
-         Sp > 0 && op.push(`${Sp} Lite terrain buffers awaiting their out-of-memory verdict`);
-         const xp = this.resources.texturesLoading;
-         return xp > 0 && op.push(`${xp} Lite textures loading`), op
+       log() {
+         for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
+         this._userLogHandler && this._userLogHandler(this, qQ.VERBOSE, ...WQ), this._logHandler(this, qQ.VERBOSE, ...WQ)
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8459-L8460` → after: `L1189-L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1189-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1189-L1191) · [Before (L8459-L8460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8459-L8460)

```diff
-       prepareTexture(pp) {
-         return null !== this.resources.boundTexture(pp) || this.resources.textureFailed(pp)
+       info() {
+         for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
+         this._userLogHandler && this._userLogHandler(this, qQ.INFO, ...WQ), this._logHandler(this, qQ.INFO, ...WQ)
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8462-L8473` → after: `L1193-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1193-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1193-L1195) · [Before (L8462-L8473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8462-L8473)

```diff
-       drawFrame(pp, ip) {
-         var cp, Op, op, Ip, Sp, xp;
-         const Lp = ex(pp);
-         this.camera.copyFromView(Lp), this.setClearColour(Lp.clearColour[0], Lp.clearColour[1], Lp.clearColour[2]), null === (cp = this.sunShadow) || void 0 === cp || cp.prepare(pp.HP, Lp.eye, null !== (Op = pp.HP.Dy) && void 0 !== Op ? Op : null), this.terrain.prepare(pp, Lp), n … [truncated]
-         const Yp = performance.now();
-         this.resources.flushUploads(), null === (xp = this.sunShadow) || void 0 === xp || xp.traceEntities(this.meshes);
-         try {
-           (0, hp.l)(this.engine, this.lastFrameTime > 0 ? Yp - this.lastFrameTime : 0)
-         } finally {
-           this.resources.endUploadFrame()
-         }
-         this.lastFrameTime = Yp, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(Yp), this.firstTerrain = null)
+       warn() {
+         for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
+         this._userLogHandler && this._userLogHandler(this, qQ.WARN, ...WQ), this._logHandler(this, qQ.WARN, ...WQ)
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8475-L8477` → after: `L1197-L1199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1197-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1197-L1199) · [Before (L8475-L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8475-L8477)

```diff
-       setClearColour(pp, ip, cp) {
-         const Op = this.pw.clearColor;
-         Op.r = pp, Op.g = ip, Op.b = cp, Op.a = 1
+       error() {
+         for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
+         this._userLogHandler && this._userLogHandler(this, qQ.ERROR, ...WQ), this._logHandler(this, qQ.ERROR, ...WQ)
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8482-L8487` → after: `L1204-L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1204-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1204-L1206) · [Before (L8482-L8487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8482-L8487)

```diff
-       const ip = {};
-       for (const cp in pp.limits) {
-         const Op = pp.limits[cp];
-         "number" === typeof Op && (ip[cp] = Op)
-       }
-       return ip
+       wQ.forEach((WQ => {
+         WQ.setLogLevel(QQ)
+       }))
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L8489-L8511` → after: `L1208-L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1208-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/274.js#L1208-L1229) · [Before (L8489-L8511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/274.js#L8489-L8511)

```diff
-     const fL = "WebGPU device lost while Lite was starting";
-     async function bL(pp, ip) {
-       const cp = await hL(),
-         Op = cp.info,
-         op = {
-           vendor: (null === Op || void 0 === Op ? void 0 : Op.vendor) || "unknown vendor",
-           renderer: (null === Op || void 0 === Op ? void 0 : Op.architecture) || "unknown renderer",
-           version: (null === Op || void 0 === Op ? void 0 : Op.description) || "unknown version"
-         };
-       pp.style.background = "black";
-       const Ip = await aL(pp, ip, ip.bufferSize, cp),
-         Sp = ui(Ip),
-         xp = nL(Sp);
-       try {
-         const cp = new NL(await FL(Ip, Sp, ip, null), pp, ip, op),
-           Op = xp();
- ... (7 more removed lines; see GitHub link above)
+ 
+     function JQ(QQ, WQ) {
+       for (const XQ of wQ) {
+         let wQ = null;
+         WQ && WQ.level && (wQ = TQ[WQ.level]), XQ.userLogHandler = null === QQ ? null : function(WQ, XQ) {
+           for (var TQ = arguments.length, zQ = new Array(TQ > 2 ? TQ - 2 : 0), sQ = 2; sQ < TQ; sQ++) zQ[sQ - 2] = arguments[sQ];
+           const FQ = zQ.map((QQ => {
+             if (null == QQ) return null;
+             if ("string" === typeof QQ) return QQ;
+             if ("number" === typeof QQ || "boolean" === typeof QQ) return QQ.toString();
+             if (QQ instanceof Error) return QQ.message;
+             try {
+               return JSON.stringify(QQ)
+             } catch (WQ) {
+               return null
+             }
+ ... (6 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/275.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/275.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896)

#### 1. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L4-L8` → after: `L5-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L5-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/275.js#L5-L18) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/275.js#L4-L8)

```diff
-   41114: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp,
-       f: () => Ip,
-       g: () => xp
+   40773: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       getAnalytics: () => YW,
+       getGoogleAnalyticsClientId: () => KW,
+       initializeAnalytics: () => NW,
+       isSupported: () => ZW,
+       logEvent: () => XX,
+       setAnalyticsCollectionEnabled: () => QX,
+       setConsent: () => wX,
+       setCurrentScreen: () => OW,
+       setDefaultEventParameters: () => WX,
+       setUserId: () => mW,
+       setUserProperties: () => MW,
+       settings: () => nW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L10-L11` → after: `L20-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L20-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/275.js#L20-L102) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/275.js#L10-L11)

```diff
-     let Op = null,
-       op = null;
+     var wQ = XQ(40755),
+       qQ = XQ(40770),
+       TQ = XQ(40761),
+       zQ = XQ(40758);
+     let sQ, FQ;
+     const PQ = new WeakMap,
+       gQ = new WeakMap,
+       JQ = new WeakMap,
+       rQ = new WeakMap,
+       IQ = new WeakMap;
+     let jQ = {
+       get(QQ, WQ, XQ) {
+         if (QQ instanceof IDBTransaction) {
+           if ("done" === WQ) return gQ.get(QQ);
+           if ("objectStoreNames" === WQ) return QQ.objectStoreNames || JQ.get(QQ);
+           if ("store" === WQ) return XQ.objectStoreNames[1] ? void 0 : XQ.objectStore(XQ.objectStoreNames[0])
+ ... (67 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L14-L17` → after: `L105-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L105-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/275.js#L105-L200) · [Before (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/275.js#L14-L17)

```diff
-       return Op = pp, op = null, xp(ip), () => {
-         Op === pp && (Op = null, op = null)
-       }
-     }
+       if (!(QQ instanceof IDBDatabase) || WQ in QQ || "string" !== typeof WQ) return;
+       if (UQ.get(WQ)) return UQ.get(WQ);
+       const XQ = WQ.replace(/FromIndex$/, ""),
+         wQ = WQ !== XQ,
+         qQ = GQ.includes(XQ);
+       if (!(XQ in (wQ ? IDBIndex : IDBObjectStore).prototype) || !qQ && !pQ.includes(XQ)) return;
+       const TQ = async function(QQ) {
+         const WQ = this.transaction(QQ, qQ ? "readwrite" : "readonly");
+         let TQ = WQ.store;
+         for (var zQ = arguments.length, sQ = new Array(zQ > 1 ? zQ - 1 : 0), FQ = 1; FQ < zQ; FQ++) sQ[FQ - 1] = arguments[FQ];
+         return wQ && (TQ = TQ.index(sQ.shift())), (await Promise.all([TQ[XQ](...sQ), qQ && WQ.done]))[0]
+       };
+       return UQ.set(WQ, TQ), TQ
+     }
+     jQ = (QQ => ({
+       ...QQ,
+ ... (80 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L20-L25` → after: `L203-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L203-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/275.js#L203-L734) · [Before (L20-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/275.js#L20-L25)

```diff
-       return null === op ? null : {
-         ...op
-       }
-     }
- 
-     function xp(pp) {
+       try {
+         const QQ = new Uint8Array(17);
+         (self.crypto || self.msCrypto).getRandomValues(QQ), QQ[0] = 112 + QQ[0] % 16;
+         const WQ = function(QQ) {
+           const WQ = (XQ = QQ, btoa(String.fromCharCode(...XQ)).replace(/\+/g, "-").replace(/\//g, "_"));
+           var XQ;
+           return WQ.substr(0, 22)
+         }(QQ);
+         return SQ.test(WQ) ? WQ : ""
+       } catch (QQ) {
+         return ""
+       }
+     }
+ 
+     function oQ(QQ) {
+       return `${QQ.appName}!${QQ.appId}`
+ ... (516 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L27-L28` → after: `L736-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L736-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/275.js#L736-L933) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/275.js#L27-L28)

```diff
-       null !== (ip = Op) && void 0 !== ip && ip(pp) && (op = {
-         ...pp
+       const {
+         appId: FQ,
+         measurementId: PQ
+       } = QQ;
+       try {
+         await
+         function(QQ, WQ) {
+           return new Promise(((XQ, wQ) => {
+             const qQ = Math.max(WQ - Date.now(), 0),
+               TQ = setTimeout(XQ, qQ);
+             QQ.addEventListener((() => {
+               clearTimeout(TQ), wQ(pW.create("fetch-throttle", {
+                 throttleEndTimeMillis: WQ
+               }))
+             }))
+           }))
+ ... (182 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L31-L37` → after: `L936-L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L936-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/275.js#L936-L993) · [Before (L31-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/275.js#L31-L37)

```diff
-   },
-   41123: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => op,
-       c: () => Ip
-     });
-     let Op = null;
+     async function ZW() {
+       if ((0, TQ.R)()) return !1;
+       if (!(0, TQ.n)()) return !1;
+       if (!(0, TQ.Z)()) return !1;
+       try {
+         return await (0, TQ.fb)()
+       } catch (QQ) {
+         return !1
+       }
+     }
+ 
+     function OW(QQ, WQ, XQ) {
+       QQ = (0, TQ.L)(QQ), async function(QQ, WQ, XQ, wQ) {
+         if (wQ && wQ.global) return QQ("set", {
+           screen_name: XQ
+         }), Promise.resolve();
+ ... (42 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L40-L68` → after: `L996-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L996-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/275.js#L996-L1039) · [Before (L40-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/275.js#L40-L68)

```diff
-       Op = {
-         conn: pp,
-         reason: ip
-       }
-     }
- 
-     function Ip(pp) {
-       var ip;
-       const cp = (null === (ip = Op) || void 0 === ip ? void 0 : ip.conn) === pp ? Op.reason : null;
-       return Op = null, cp
-     }
-   },
-   41194: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Ip,
-       h: () => op
- ... (13 more removed lines; see GitHub link above)
+       QQ = (0, TQ.L)(QQ), async function(QQ, WQ) {
+         const XQ = await QQ;
+         window[`ga-disable-${XQ}`] = !WQ
+       }(uW[QQ.app.options.appId], WQ).catch((QQ => VW.error(QQ)))
+     }
+ 
+     function WX(QQ) {
+       SW ? SW("set", QQ) : RW(QQ)
+     }
+ 
+     function XX(QQ, WQ, XQ, wQ) {
+       QQ = (0, TQ.L)(QQ), async function(QQ, WQ, XQ, wQ, qQ) {
+         if (qQ && qQ.global) QQ("event", XQ, wQ);
+         else {
+           const qQ = await WQ;
+           QQ("event", XQ, Object.assign(Object.assign({}, wQ), {
+ ... (28 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/276.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/276.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651)

#### 1. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L4-L20` → after: `L5-L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L5-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/276.js#L5-L4026) · [Before (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/276.js#L4-L20)

```diff
-   41273: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       gamePackSource: () => Ip
-     });
-     var Op = cp(5103),
-       op = cp(1520);
- 
-     function Ip(pp) {
-       return {
-         packKey: async ip => (await op.b.getGame(pp, ip, !0)).customTexturePackKey,
-         fetchPack: Op.d
-       }
-     }
-   }
- };
- Object.freeze(modules);
- ... (1 more removed lines; see GitHub link above)
+     40779: (QQ, WQ, XQ) => {
+         XQ.r(WQ), XQ.d(WQ, {
+           ActionCodeOperation: () => rQ,
+           ActionCodeURL: () => KW,
+           AuthCredential: () => kW,
+           AuthErrorCodes: () => VQ,
+           EmailAuthCredential: () => xW,
+           EmailAuthProvider: () => MW,
+           FacebookAuthProvider: () => wX,
+           FactorId: () => FQ,
+           GithubAuthProvider: () => TX,
+           GoogleAuthProvider: () => qX,
+           OAuthCredential: () => NW,
+           OAuthProvider: () => XX,
+           OperationType: () => JQ,
+           PhoneAuthCredential: () => OW,
+ ... (4006 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/277.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/277.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592)

#### 1. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/277.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/277.js#L2)

```diff
- export const ids = [276, 277];
+ export const ids = [277];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4-L6` → after: `L4-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/277.js#L4-L141) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/277.js#L4-L6)

```diff
-   41273: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       gamePackSource: () => Ip
+   40813: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       $: () => eQ,
+       $c: () => xQ,
+       $e: () => oX,
+       A: () => eW,
+       Ad: () => dQ,
+       Be: () => VX,
+       C: () => nQ,
+       Cb: () => wX,
+       Cc: () => TW,
+       Cf: () => KX,
+       Db: () => qX,
+       Ed: () => zW,
+       Ef: () => MX,
+       F: () => YW,
+ ... (122 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L8-L9` → after: `L143-L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L143-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/277.js#L143-L892) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/277.js#L8-L9)

```diff
-     var Op = cp(5103),
-       op = cp(1520);
+     const wQ = -2147483648,
+       qQ = 12,
+       TQ = 12,
+       zQ = 4095,
+       sQ = {
+         Lifeform: 1,
+         Throwable: 2,
+         Mesh: 3,
+         Audio: 4,
+         Item: 5
+       },
+       FQ = {
+         Alive: 1,
+         Crouching: 2,
+         OnGround: 4,
+         InFluid: 8,
+ ... (734 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L12-L91` → after: `L895-L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L895-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/277.js#L895-L1365) · [Before (L12-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/277.js#L12-L91)

```diff
-       return {
-         packKey: async ip => (await op.b.getGame(pp, ip, !0)).customTexturePackKey,
-         fetchPack: Op.d
-       }
-     }
-   },
-   51202: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       fetchGuestContext: () => Pp,
-       guestJoinTarget: () => Hp,
-       guestJoinWithPack: () => yp,
-       guestPackForGame: () => Wp,
-       invalidateGuestTrafficCode: () => tp
-     });
-     var Op = cp(1211),
-       op = cp(1520),
- ... (64 more removed lines; see GitHub link above)
+       return gX.buffer !== QQ.buffer && (gX = new Uint8Array(QQ.buffer)), gX
+     }
+ 
+     function rX(QQ, WQ, XQ) {
+       const wQ = QQ.gI(66, WQ, 4);
+       if (wQ < 0) return !1;
+       return QQ.view.setUint8(wQ + 0, XQ), !0
+     }
+ 
+     function IX(QQ, WQ, XQ) {
+       const wQ = QQ.gI(67, WQ, 4);
+       if (wQ < 0) return !1;
+       return QQ.view.setUint32(wQ + 0, XQ, !0), !0
+     }
+ 
+     function jX(QQ, WQ, XQ) {
+ ... (455 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/278.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/278.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/278.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/278.js#L4-L6)

```diff
-   41277: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       BloxdInformation: () => Wp
+   41851: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => yQ,
+       f: () => sQ,
+       i: () => zQ,
+       j: () => PQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L8-L16` → after: `L11-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L11-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/278.js#L11-L34) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/278.js#L8-L16)

```diff
-     var Op = cp(1201),
-       op = cp(62),
-       Ip = cp(104),
-       Sp = cp(1480),
-       xp = cp(131),
-       Lp = cp(1060),
-       Yp = cp(1112);
-     const Dp = (0, op.lazy)((() => Promise.all([cp.e(124), cp.e(398)]).then((() => cp(6658))))),
-       Ap = (0, op.lazy)((() => cp.e(126).then((() => cp(6672)))));
+     var wQ = XQ(37539),
+       qQ = XQ(38986),
+       TQ = XQ(38979);
+ 
+     function zQ(QQ, WQ, XQ, wQ) {
+       const qQ = TQ.u;
+       WQ.fill(0), QQ.gravity.toArray(WQ, qQ.gravity), QQ.colorDead.toArray(WQ, qQ.colorDead), XQ[qQ.ramp] = QQ.useRampGradients ? 1 : 0;
+       const zQ = QQ.getColorGradients(),
+         sQ = rQ(QQ, zQ, "colour", wQ);
+       XQ[qQ.colorCount] = sQ;
+       for (let TQ = 0; TQ < sQ; TQ++) {
+         var FQ;
+         const QQ = zQ[IQ(zQ, TQ)];
+         WQ[qQ.colorPositions + TQ] = QQ.gradient, QQ.color1.toArray(WQ, qQ.color1 + 4 * TQ), (null !== (FQ = QQ.color2) && void 0 !== FQ ? FQ : QQ.color1).toArray(WQ, qQ.color2 + 4 * TQ)
+       }
+       const PQ = QQ.getVelocityGradients(),
+ ... (8 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L19-L75` → after: `L37-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L37-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/278.js#L37-L451) · [Before (L19-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/278.js#L19-L75)

```diff
-       return (0, Yp.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, Yp.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: "Security Exploit Bounty Program"
-         }), (0, Yp.jsx)("p", {
-           children: "We have a program for reporting security exploits. Find an important security flaw in Bloxd? Report it through the process below. Please include steps to reproduce the exploit, including any relevant code if the exploit requires it. You will receive the rewar … [truncated]
-         }), (0, Yp.jsx)("h3", {
-           children: "1. How to Report"
-         }), (0, Yp.jsxs)("p", {
-           children: ["Please follow the instructions on", " ", (0, Yp.jsx)("a", {
-             href: "https://forms.gle/wUL8WiH3LbGiJBzF7",
-             target: "_blank",
-             rel: "noreferrer",
-             children: "this form"
-           }), " ", "to report the exploit."]
- ... (41 more removed lines; see GitHub link above)
+       return {
+         key: [],
+         texels: new Uint8Array(4 * TQ.l)
+       }
+     }
+     const FQ = [];
+ 
+     function PQ(QQ, WQ) {
+       return gQ(QQ, FQ), !VQ(FQ, WQ.key) && (WQ.key.length = 0, WQ.key.push(...FQ), WQ.key.length > 0 && function(QQ, WQ) {
+         for (let XQ = 0; XQ < TQ.l; XQ++) qQ.l.GetCurrentGradient(XQ / TQ.l, QQ, ((QQ, WQ, XQ) => {
+           wQ.Color3.LerpToRef(QQ.color, WQ.color, XQ, JQ)
+         })), WQ[4 * XQ] = 255 * JQ.r, WQ[4 * XQ + 1] = 255 * JQ.g, WQ[4 * XQ + 2] = 255 * JQ.b, WQ[4 * XQ + 3] = 255
+       }(QQ.getRampGradients(), WQ.texels), !0)
+     }
+ 
+     function gQ(QQ, WQ) {
+ ... (399 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L77-L79` → after: `L453-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L453-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/278.js#L453-L818) · [Before (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/278.js#L77-L79)

```diff
-         }), (0, Yp.jsx)("p", {
-           children: "A: Yes, as long as you follow the rules laid out with respect to the exploit you are reporting. I.e. don't abuse or share the exploit, etc."
-         })]
+         };
+       sQ(WQ, 0, XQ, wQ);
+       let FQ = 1;
+       for (const PQ of function*(QQ, WQ, XQ, wQ) {
+           let qQ = QQ,
+             TQ = WQ,
+             zQ = XQ;
+           for (; TQ > 1 || zQ > 1;) {
+             const QQ = Math.max(1, TQ >> 1),
+               WQ = Math.max(1, zQ >> 1),
+               XQ = new Uint8Array(QQ * WQ * wQ * 4),
+               sQ = 4 * TQ;
+             let FQ = 0;
+             for (let PQ = 0; PQ < wQ; PQ++) {
+               const wQ = PQ * sQ * zQ;
+               for (let PQ = 0; PQ < WQ; PQ++) {
+ ... (350 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L83` → after: `L826-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L826-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/278.js#L826-L920) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/278.js#L83)

```diff
-     function Wp() {
+     function hW(QQ, WQ) {
+       let XQ = lW.get(QQ);
+       if (!XQ) {
+         XQ = {
+           module: QQ.createShaderModule({
+             label: "placeholder",
+             code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
+           }),
+           pipelines: new Map
+         }, lW.set(QQ, XQ)
+       }
+       const wQ = `${WQ._colorFormat}|${WQ._depthStencilFormat}|${WQ._sampleCount}`;
+       let qQ = XQ.pipelines.get(wQ);
+       if (!qQ) {
+         var TQ;
+         const {
+ ... (79 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L85-L93` → after: `L922-L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L922-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/278.js#L922-L969) · [Before (L85-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/278.js#L85-L93)

```diff
-         t: pp
-       } = (0, Op.H)(), [ip, cp] = (0, op.useState)("partnersAndCredits"), Wp = {
-         partnersAndCredits: {
-           title: Ip.featureFlags.usePartnerLinks ? pp("homePage:partnersAndCredits") : pp("homePage:credits"),
-           content: (0, Yp.jsxs)(Yp.Fragment, {
-             children: [(0, Yp.jsx)("div", {
-               className: "BloxdInformationHeader FullyFancyText",
-               children: Ip.featureFlags.usePartnerLinks ? pp("homePage:partnersAndCredits") : pp("homePage:credits")
-             }), Ip.featureFlags.usePartnerLinks && "\n\t\t\t\t\tPartners:\n\n\t\t\t\t\tcrazygames.com - https://www.crazygames.com/c/io\n\t\t\t\t\tnow.gg - https://now.gg/\n\t\t\t\t\tminijuegos.com - https://www.minijuegos.com/\n\t\t\t\t\tkevin.games - https://kevin.games/\n\t\t\ … [truncated]
+         A: WQ,
+         B: XQ,
+         C: wQ,
+         D: qQ,
+         E: TQ,
+         F: zQ
+       } = fW;
+       return (QQ * (WQ * QQ + wQ * XQ) + qQ * TQ) / (QQ * (WQ * QQ + XQ) + qQ * zQ) - TQ / zQ
+     }(1e3);
+ 
+     function tW(QQ, WQ, XQ) {
+       return Math.min(Math.max(QQ, WQ), XQ)
+     }
+     const oW = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;
+ 
+     function eW(QQ, WQ) {
+ ... (32 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L96-L103` → after: `L1004-L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L1004-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/278.js#L1004-L1038) · [Before (L96-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/278.js#L96-L103)

```diff
-         bloxdIngameRules: {
-           title: pp("homePage:bloxdIngameRules"),
-           content: (0, Yp.jsxs)(Yp.Fragment, {
-             children: [(0, Yp.jsx)("div", {
-               className: "BloxdInformationHeader FullyFancyText",
-               children: pp("homePage:bloxdIngameRules")
-             }), "\n\t\t\t\t\t1. Be respectful of others.\n\n\t\t\t\t\t2. Don't harass or bully other players.\n\n\t\t\t\t\t3. Discriminatory jokes and hate speech (attacks on an individual or group based on their race, ethnicity, national origin, sex, gender, sexual orientation,  … [truncated]
-           })
+         FQ = () => {
+           const QQ = zQ();
+           if ("!" === QQ) return !FQ();
+           if ("(" === QQ) {
+             const QQ = gQ();
+             return zQ(), QQ
+           }
+           if ("defined" === QQ) {
+             const QQ = "(" === TQ();
+             QQ && zQ();
+             const XQ = zQ();
+             return QQ && zQ(), WQ.has(XQ)
+           }
+           const XQ = TQ();
+           if ("==" === XQ || "!=" === XQ || ">" === XQ || "<" === XQ || ">=" === XQ || "<=" === XQ) {
+             zQ();
+ ... (19 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L105-L110` → after: `L1040-L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L1040-L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/278.js#L1040-L1048) · [Before (L105-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/278.js#L105-L110)

```diff
-         privacyPolicy: {
-           title: pp("homePage:privacyPolicy"),
-           content: (0, Yp.jsx)(op.Suspense, {
-             fallback: null,
-             children: (0, Yp.jsx)(Dp, {})
-           })
+         PQ = () => {
+           let QQ = FQ();
+           for (;
+             "&&" === TQ();) {
+             zQ();
+             const WQ = FQ();
+             QQ = QQ && WQ
+           }
+           return QQ
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L112-L117` → after: `L1050-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L1050-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/278.js#L1050-L1058) · [Before (L112-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/278.js#L112-L117)

```diff
-         termsOfService: {
-           title: pp("homePage:termsOfService"),
-           content: (0, Yp.jsx)(op.Suspense, {
-             fallback: null,
-             children: (0, Yp.jsx)(Ap, {})
-           })
+         gQ = () => {
+           let QQ = PQ();
+           for (;
+             "||" === TQ();) {
+             zQ();
+             const WQ = PQ();
+             QQ = QQ || WQ
+           }
+           return QQ
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L119-L150` → after: `L1060-L1941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L1060-L1941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/278.js#L1060-L1941) · [Before (L119-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/278.js#L119-L150)

```diff
-         securityExploitBounties: {
-           title: pp("homePage:securityExploitBounties"),
-           content: (0, Yp.jsx)(Pp, {})
-         }
-       };
-       return (0, Yp.jsxs)("div", {
-         className: "BloxdInformation",
-         children: [(0, Yp.jsxs)("div", {
-           className: "BloxdInformationSectionList",
-           children: [Object.keys(Wp).map((Op => (0, Yp.jsx)(Sp.S, {
-             active: ip === Op,
-             onClick: () => {
-               cp(Op)
-             },
-             children: pp(Wp[Op].title)
-           }, Op))), Ip.featureFlags.usePartnerLinks && (0, Yp.jsx)(Yp.Fragment, {
- ... (16 more removed lines; see GitHub link above)
+         JQ = gQ();
+       if (qQ !== wQ.length) throw new Error(`Cannot evaluate #if ${QQ}`);
+       return JQ
+     }
+     var YW = XQ(37472),
+       NW = XQ(37792),
+       ZW = XQ(37794),
+       OW = XQ(40917),
+       KW = XQ(39026);
+     const mW = 32,
+       MW = [10, 3, 10],
+       QX = [21, 7, 21],
+       WX = QX[0] * QX[1] * QX[2],
+       XX = 0,
+       wX = 1,
+       qX = 2,
+ ... (866 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/279.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/279.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef)

#### 1. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/279.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/279.js#L4)

```diff
-   41315: (pp, ip, cp) => {
+   41128: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L8-L13` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/279.js#L8) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/279.js#L8-L13)

```diff
-       j: () => wp,
-       m: () => vp,
-       o: () => Pp,
-       p: () => Up,
-       t: () => yp,
-       w: () => Wp
+       j: () => sQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L15-L358` → after: `L10-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/279.js#L10-L15) · [Before (L15-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/279.js#L15-L358)

```diff
-     var Op = cp(37320),
-       op = cp(37487),
-       Ip = cp(37356),
-       Sp = cp(41320),
-       xp = cp(40415),
-       Lp = cp(40225),
-       Yp = cp(40261),
-       Dp = cp(40233),
-       Ap = cp(37368);
-     const Pp = Object.freeze(new Op.f(0, 0, 0, 0)),
-       Wp = Object.freeze(Op.o.Zero()),
-       yp = Object.freeze(Op.l.Zero()),
-       Up = Object.freeze(Lp.c.Zero()),
-       wp = Object.freeze(op.d.Black()),
-       vp = Object.freeze(new op.h(0, 0, 0, 0)),
-       tp = {
- ... (328 more removed lines; see GitHub link above)
+     let wQ = null,
+       qQ = null;
+ 
+     function TQ(QQ, WQ) {
+       return wQ = QQ, qQ = null, sQ(WQ), () => {
+         wQ === QQ && (wQ = null, qQ = null)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L362-L408` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/279.js#L19-L21) · [Before (L362-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/279.js#L362-L408)

```diff
-     function dp(pp, ip, cp) {
-       let op;
-       op = "object" === typeof ip ? ip : {
-         referenceFrame: ip ?? 0,
-         range: cp,
-         cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
-       };
-       let Ip = pp;
-       op.cloneOriginalAnimation && (Ip = pp.clone(), Ip.name = op.clonedAnimationName || Ip.name);
-       const Sp = Ip.getKeys();
-       if (!Sp.length) return Ip;
-       const xp = op.referenceFrame && op.referenceFrame >= 0 ? op.referenceFrame : 0;
-       let Lp = 0;
-       const Yp = Sp[0];
-       let Dp = Sp.length - 1;
- ... (31 more removed lines; see GitHub link above)
+     function zQ() {
+       return null === qQ ? null : {
+         ...qQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L488-L524` → after: `L26-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L26-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/279.js#L26-L42) · [Before (L488-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/279.js#L488-L524)

```diff
-       const ip = new Hp(pp.name, pp.property, pp.framePerSecond, pp.dataType, pp.loopBehavior),
-         cp = pp.dataType,
-         Ip = [];
-       let Sp, xp;
-       for (pp.enableBlending && (ip.enableBlending = pp.enableBlending), pp.blendingSpeed && (ip.blendingSpeed = pp.blendingSpeed), xp = 0; xp < pp.keys.length; xp++) {
-         const ip = pp.keys[xp];
-         let Lp, Yp, Dp;
-         switch (cp) {
-           case Hp.ANIMATIONTYPE_FLOAT:
-             Sp = ip.values[0], ip.values.length >= 2 && (Lp = ip.values[1]), ip.values.length >= 3 && (Yp = ip.values[2]), ip.values.length >= 4 && (Dp = ip.values[3]);
-             break;
-           case Hp.ANIMATIONTYPE_QUATERNION:
-             if (Sp = Op.f.FromArray(ip.values), ip.values.length >= 8) {
-               const pp = Op.f.FromArray(ip.values.slice(4, 8));
-               pp.equals(Op.f.Zero()) || (Lp = pp)
-             }
- ... (21 more removed lines; see GitHub link above)
+       var WQ;
+       null !== (WQ = wQ) && void 0 !== WQ && WQ(QQ) && (qQ = {
+         ...QQ
+       })
+     }
+   },
+   41139: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => qQ,
+       g: () => TQ
+     });
+     let wQ = null;
+ 
+     function qQ(QQ, WQ) {
+       wQ = {
+         conn: QQ,
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L526-L527` → after: `L44-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L44-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/279.js#L44-L66) · [Before (L526-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/279.js#L526-L527)

```diff
-       if (ip.setKeys(Ip), pp.By)
-         for (xp = 0; xp < pp.By.length; xp++) Sp = pp.By[xp], ip.createRange(Sp.name, Sp.from, Sp.to);
+     }
+ 
+     function TQ(QQ) {
+       var WQ;
+       const XQ = (null === (WQ = wQ) || void 0 === WQ ? void 0 : WQ.conn) === QQ ? wQ.reason : null;
+       return wQ = null, XQ
+     }
+   },
+   41195: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => TQ,
+       d: () => qQ
+     });
+     let wQ = {
+       fire: () => {},
+       close: () => {}
+ ... (7 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/280.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/280.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4-L5` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/280.js#L4-L16) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/280.js#L4-L5)

```diff
-   41402: pp => {
-     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
+   41265: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       gamePackSource: () => TQ
+     });
+     var wQ = XQ(5340),
+       qQ = XQ(1548);
+ 
+     function TQ(QQ) {
+       return {
+         packKey: async WQ => (await qQ.e.getGame(QQ, WQ, !0)).customTexturePackKey,
+         fetchPack: wQ.e
+       }
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/281.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/281.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/281.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/281.js#L2)

```diff
- export const ids = [281];
+ export const ids = [280, 281];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L4-L5` → after: `L4-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L4-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/281.js#L4-L93) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/281.js#L4-L5)

```diff
-   41410: pp => {
-     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
+   41265: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       gamePackSource: () => TQ
+     });
+     var wQ = XQ(5340),
+       qQ = XQ(1548);
+ 
+     function TQ(QQ) {
+       return {
+         packKey: async WQ => (await qQ.e.getGame(QQ, WQ, !0)).customTexturePackKey,
+         fetchPack: wQ.e
+       }
+     }
+   },
+   51222: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+ ... (74 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/282.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/282.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70)

#### 1. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L4-L5` → after: `L4-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L4-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/282.js#L4-L152) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/282.js#L4-L5)

```diff
-   41418: pp => {
-     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
+   41271: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       BloxdInformation: () => IQ
+     });
+     var wQ = XQ(1226),
+       qQ = XQ(61),
+       TQ = XQ(105),
+       zQ = XQ(1507),
+       sQ = XQ(158),
+       FQ = XQ(1094),
+       PQ = XQ(1145);
+     const gQ = (0, qQ.lazy)((() => Promise.all([XQ.e(126), XQ.e(402)]).then((() => XQ(6914))))),
+       JQ = (0, qQ.lazy)((() => XQ.e(128).then((() => XQ(6928)))));
+ 
+     function rQ() {
+       return (0, PQ.jsxs)("div", {
+ ... (133 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/283.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/283.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L4-L5` → after: `L4-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L4-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/283.js#L4-L628) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/283.js#L4-L5)

```diff
-   41427: pp => {
-     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
+   41309: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => pQ,
+       d: () => RQ,
+       f: () => yQ,
+       h: () => VQ,
+       k: () => rQ,
+       o: () => BQ,
+       s: () => jQ,
+       w: () => IQ
+     });
+     var wQ = XQ(37370),
+       qQ = XQ(37546),
+       TQ = XQ(37404),
+       zQ = XQ(41313),
+       sQ = XQ(40491),
+ ... (609 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/284.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/284.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/284.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/284.js#L4-L5)

```diff
-   41432: pp => {
-     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
+   41417: QQ => {
+     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/285.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/285.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/285.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/285.js#L4-L5)

```diff
-   41440: pp => {
-     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
+   41426: QQ => {
+     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/286.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/286.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/286.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/286.js#L4-L5)

```diff
-   41446: pp => {
-     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEWSURBVHic7dohEoJAFMZxcCgSLHIOq8Vs8QSewOxJzJ7AO5gtVs+hxYBREwzjMDDLW/zA/f/iusCbz6fCG+PI6HrevS3H3x9P0/U321NsOX5iuvofSHydaJqmTvtfee7r0 … [truncated]
+   41431: QQ => {
+     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/287.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/287.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/287.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/287.js#L4-L5)

```diff
-   41454: pp => {
-     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEQSURBVHic7dpBDsFAFMbxjnRBIiSO4QZ2tuIgDuAEDuAATmJrxwkcQ0Ik7FhVLEqNN/VNzf+3bKYzL58X6qUuM9ouxzfL/YfT1XT+dLFzlvtbptP/QB5qo36347X+eL6EO … [truncated]
+   41440: QQ => {
+     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/288.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/288.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468)

#### 1. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/288.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/288.js#L4-L5)

```diff
-   41461: pp => {
-     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEHSURBVHic7dqxEsFAFIXhrEkjGt5Nq9bSKhUKDa1aq/dYNKKkilGEWHfjbOz/lZnN7p3jDnEnLjParMY3y/2n88V0/nJ9dJb7e6bT/0AeaqOi6HutL8trqKNN6IDQGzZ9s … [truncated]
+   41447: QQ => {
+     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/289.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/289.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/289.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/289.js#L4-L5)

```diff
-   41467: pp => {
-     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7do9EsFAGMbxrEnjY3Quo1WrncIBnMABXIJardDonUNnfJRUMYoQ6914Nvb/KzOb3Xce7xDvxGVG0/HwZrn/cDybzl9u985yf8t0+h/IQ23U67S91p8u11BHm … [truncated]
+   41449: QQ => {
+     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/290.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/290.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/290.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/290.js#L4-L5)

```diff
-   41469: pp => {
-     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrElDFB5OSavRewSFXqOlVOi8lkIoqWIUIdbdOBv7f2Vms3vnuEPcicuMVpPxzXL/6Vyazl8ejs5yf890+h/IQ21UDPpe68vLNdTRJnRA6A2bP … [truncated]
+   41452: QQ => {
+     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEWSURBVHic7dohEoJAFMZxcCgSLHIOq8Vs8QSewOxJzJ7AO5gtVs+hxYBREwzjMDDLW/zA/f/iusCbz6fCG+PI6HrevS3H3x9P0/U321NsOX5iuvofSHydaJqmTvtfee7r0 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/291.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/291.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade)

#### 1. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/291.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/291.js#L4-L5)

```diff
-   41478: pp => {
-     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPVSURBVHic7dxPbhMxGIdhB03aRSXaHafgAmwQC4TEohI34BRIPQESl0Fi20XVTS/ADThBi1QCnZHKAiwl7njGY3v8+c/77BJsx5n57GZI5rdRgd69P3/cf7w9Op5s3z/8O … [truncated]
+   41459: QQ => {
+     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEQSURBVHic7dpBDsFAFMbxjnRBIiSO4QZ2tuIgDuAEDuAATmJrxwkcQ0Ik7FhVLEqNN/VNzf+3bKYzL58X6qUuM9ouxzfL/YfT1XT+dLFzlvtbptP/QB5qo36347X+eL6EO … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/292.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/292.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93)

#### 1. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/292.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/292.js#L4-L5)

```diff
-   41481: pp => {
-     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKpSURBVHic7Zq/ThVBFMa/JXNBFAiVISEhSsM2WhFewADREAMkFEYSX4DCjvgExs4XoNBgKyUF8SUgBLWxkcTCRMMFLty78VrNze5hZ3Z2Z+7dXeb8utmZMzM78805Z/8Es … [truncated]
+   41462: QQ => {
+     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEHSURBVHic7dqxEsFAFIXhrEkjGt5Nq9bSKhUKDa1aq/dYNKKkilGEWHfjbOz/lZnN7p3jDnEnLjParMY3y/2n88V0/nJ9dJb7e6bT/0AeaqOi6HutL8trqKNN6IDQGzZ9s … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/293.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/293.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22)

#### 1. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/293.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/293.js#L4-L5)

```diff
-   41484: pp => {
-     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEKSURBVHic7doxDoJAEIVh1hBjY/BsxsrOI3ADLmA8gp2VsfJgEhtjoxXGAsV1Ft/i/l9Jlt3Jc6I4wWVG22pxs9x/Ol9M55fro7PcPzKd/gfyUBsVxdhrfV1fQx1tQgeE3 … [truncated]
+   41468: QQ => {
+     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7do9EsFAGMbxrEnjY3Quo1WrncIBnMABXIJardDonUNnfJRUMYoQ6914Nvb/KzOb3Xce7xDvxGVG0/HwZrn/cDybzl9u985yf8t0+h/IQ23U67S91p8u11BHm … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/294.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/294.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79)

#### 1. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/294.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/294.js#L4-L5)

```diff
-   41492: pp => {
-     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAELSURBVHic7dqxEsFAFIXhjcmko6BTeSKlSucBVB5Hp1J6IpUKBV0aqhhFiHU3zsb+X5nZ7N457hB3kjmj8WZ9s9xfns6m84/LVWa5v2c6/Q/koTYqBn2v9eXlGupoEzog9 … [truncated]
+   41473: QQ => {
+     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrElDFB5OSavRewSFXqOlVOi8lkIoqWIUIdbdOBv7f2Vms3vnuEPcicuMVpPxzXL/6Vyazl8ejs5yf890+h/IQ21UDPpe68vLNdTRJnRA6A2bP … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/295.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/295.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/295.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/295.js#L4-L5)

```diff
-   41498: pp => {
-     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIOSURBVHic7ZoxSwMxFIDfFRGVKgVxcpJDnK6Dg/9AXFwqdFKqk3UUl9JJnMTNsXYqopNDZ/EfODjYSVpxEoQOHlraUsFzsLFeendtLrlLr3nfEnp5Ly+XvPdySaoBJ+W8Y … [truncated]
+   41475: QQ => {
+     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPVSURBVHic7dxPbhMxGIdhB03aRSXaHafgAmwQC4TEohI34BRIPQESl0Fi20XVTS/ADThBi1QCnZHKAiwl7njGY3v8+c/77BJsx5n57GZI5rdRgd69P3/cf7w9Op5s3z/8O … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/296.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/296.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L4-L152` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/296.js#L4-L5) · [Before (L4-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/296.js#L4-L152)

```diff
-   41524: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       CharacterPreview: () => Ap
-     });
-     var Op = cp(62),
-       op = cp(2835),
-       Ip = cp(1251),
-       Sp = cp(2638),
-       xp = cp(34462),
-       Lp = cp(3731),
-       Yp = cp(1112);
-     const Dp = .6 * Math.PI,
-       Ap = (0, Op.memo)((0, Op.forwardRef)((function(pp, ip) {
-         let {
-           onReady: cp,
-           onDrawn: Ap,
- ... (133 more removed lines; see GitHub link above)
+   41477: QQ => {
+     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKpSURBVHic7Zq/ThVBFMa/JXNBFAiVISEhSsM2WhFewADREAMkFEYSX4DCjvgExs4XoNBgKyUF8SUgBLWxkcTCRMMFLty78VrNze5hZ3Z2Z+7dXeb8utmZMzM78805Z/8Es … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/297.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/297.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L4-L1182` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/297.js#L4-L5) · [Before (L4-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/297.js#L4-L1182)

```diff
-   41535: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       default: () => Zi
-     });
-     var Op = cp(41541),
-       op = cp(41591),
-       Ip = cp(41595),
-       Sp = cp(62),
-       xp = cp(82),
-       Lp = cp(41612),
-       Yp = cp(41621),
-       Dp = cp(4874),
-       Ap = cp(41630),
-       Pp = cp(1929),
-       Wp = cp(41637),
-       yp = cp(41647),
- ... (1163 more removed lines; see GitHub link above)
+   41481: QQ => {
+     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEKSURBVHic7doxDoJAEIVh1hBjY/BsxsrOI3ADLmA8gp2VsfJgEhtjoxXGAsV1Ft/i/l9Jlt3Jc6I4wWVG22pxs9x/Ol9M55fro7PcPzKd/gfyUBsVxdhrfV1fQx1tQgeE3 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/298.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/298.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4-L17228` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/298.js#L4-L5) · [Before (L4-L17228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/298.js#L4-L17228)

```diff
-   41541: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Ji,
-       g: () => Ri,
-       h: () => di,
-       l: () => Lp,
-       o: () => Bi,
-       r: () => Yp,
-       u: () => yi
-     });
-     var Op = cp(41548),
-       op = cp(41556),
-       Ip = cp(41566);
-     class Sp {
-       constructor(pp, ip, cp, Op) {
-         this.state = pp, this.pos = ip, this.explicit = cp, this.view = Op, this.abortListeners = [], this.abortOnDocChange = !1
- ... (17209 more removed lines; see GitHub link above)
+   41490: QQ => {
+     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAELSURBVHic7dqxEsFAFIXhjcmko6BTeSKlSucBVB5Hp1J6IpUKBV0aqhhFiHU3zsb+X5nZ7N457hB3kjmj8WZ9s9xfns6m84/LVWa5v2c6/Q/koTYqBn2v9eXlGupoEzog9 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/299.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/299.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L4-L2146` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/299.js#L4-L5) · [Before (L4-L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/299.js#L4-L2146)

```diff
-   41548: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => di,
-       f: () => lp,
-       ChangeSet: () => Qp,
-       i: () => Xi,
-       l: () => ap,
-       n: () => Bi,
-       o: () => gp,
-       r: () => Xp,
-       u: () => Si,
-       A: () => Fi,
-       w: () => gi,
-       B: () => Ti,
-       C: () => ji,
-       E: () => Vp,
- ... (2127 more removed lines; see GitHub link above)
+   41496: QQ => {
+     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIOSURBVHic7ZoxSwMxFIDfFRGVKgVxcpJDnK6Dg/9AXFwqdFKqk3UUl9JJnMTNsXYqopNDZ/EfODjYSVpxEoQOHlraUsFzsLFeendtLrlLr3nfEnp5Ly+XvPdySaoBJ+W8Y … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/300.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/300.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03)

#### 1. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L4-L14` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/300.js#L4-L6) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/300.js#L4-L14)

```diff
-   41644: pp => {
-     function ip(pp) {
-       var ip = new Error("Cannot find module '" + pp + "'");
-       throw ip.code = "MODULE_NOT_FOUND", ip
-     }
-     ip.keys = () => [], ip.resolve = ip, ip.id = 41644, pp.exports = ip
-   },
-   41707: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Op,
-       f: () => op
+   41521: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       CharacterPreview: () => JQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L16-L4275` → after: `L8-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L8-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/300.js#L8-L161) · [Before (L16-L4275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/300.js#L16-L4275)

```diff
-     const Op = "Sends one question to the AI",
-       op = {
-         title: Op,
-         "data-asks-ai": !0
-       }
-   },
-   41612: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Op
-     });
-     const Op = String.raw`
- 	/** The ID of the player running the code.
- 	 *
- 	 * Lobby code usually has nobody running it, so this is null.
- 	 */
- 	declare const myId: string | null
- ... (4244 more removed lines; see GitHub link above)
+     var wQ = XQ(61),
+       qQ = XQ(2978),
+       TQ = XQ(1273),
+       zQ = XQ(2678),
+       sQ = XQ(34541),
+       FQ = XQ(3862),
+       PQ = XQ(1145);
+     const gQ = .6 * Math.PI,
+       JQ = (0, wQ.memo)((0, wQ.forwardRef)((function(QQ, WQ) {
+         let {
+           onReady: XQ,
+           onDrawn: JQ,
+           owner: rQ = "other",
+           framing: IQ = "player",
+           forcedCosmetics: jQ,
+           Rs: BQ,
+ ... (138 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/301.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/301.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/301.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/301.js#L4-L6)

```diff
-   41630: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Op
+   41536: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       default: () => xW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L8-L6414` → after: `L8-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/301.js#L8-L153) · [Before (L8-L6414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/301.js#L8-L6414)

```diff
-     const Op = String.raw`interface Map<K, V> {
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
- ... (6391 more removed lines; see GitHub link above)
+     var wQ = XQ(41545),
+       qQ = XQ(41577),
+       TQ = XQ(41586),
+       zQ = XQ(61),
+       sQ = XQ(78),
+       FQ = XQ(41603),
+       PQ = XQ(41611),
+       gQ = XQ(5085),
+       JQ = XQ(41613),
+       rQ = XQ(1975),
+       IQ = XQ(41615),
+       jQ = XQ(41631),
+       BQ = XQ.n(jQ),
+       yQ = XQ(41592),
+       VQ = XQ(41598),
+       DQ = XQ(1391),
+ ... (130 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6416-L7359` → after: `L155-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L155-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/301.js#L155-L1182) · [Before (L6416-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/301.js#L6416-L7359)

```diff
-     const Op = String.raw`import type {
- 	GameApi,
- 	Console,
- 	EntityId,
- 	Pos,
- 	LifeformId,
- 	PlayerId,
- 	PlayerDbId,
- 	LifeformBodyPart,
- 	PlayerAttemptDamageOtherPlayerOpts,
- 	HittingSoundOverride,
- 	DamageCause,
- 	ItemName,
- 	EnchantmentAttributes,
- 	EnchantmentPerk,
- 	EnchantmentTier,
- ... (928 more removed lines; see GitHub link above)
+     const NQ = lQ.G.define(),
+       ZQ = hQ.e.mark({
+         class: "CodeInsertFlash"
+       }),
+       OQ = lQ.I.define({
+         create: () => hQ.e.none,
+         update(QQ, WQ) {
+           let XQ = QQ.map(WQ.changes);
+           for (const wQ of WQ.effects) wQ.is(NQ) && (XQ = wQ.value ? hQ.e.set(ZQ.range(wQ.value.from, wQ.value.to)) : hQ.e.none);
+           return XQ
+         },
+         provide: QQ => hQ.k.Tw.from(QQ)
+       }),
+       KQ = lQ.I.define({
+         create: () => !1,
+         update: (QQ, WQ) => QQ || void 0 !== WQ.annotation(lQ.O.userEvent) && !WQ.annotation(lQ.O.remote)
+ ... (1012 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/302.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/302.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L4` → after: `L4-L13795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L4-L13795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L4-L13795) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L4)

```diff
-   41637: (pp, ip, cp) => {
+   41545: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => RW,
+       d: () => dW,
+       f: () => DW,
+       i: () => FQ,
+       l: () => EW,
+       n: () => PQ,
+       p: () => rW
+     });
+     var wQ = XQ(41550),
+       qQ = XQ(41555),
+       TQ = XQ(41566);
+     class zQ {
+       constructor(QQ, WQ, XQ, wQ) {
+         this.state = QQ, this.pos = WQ, this.explicit = XQ, this.view = wQ, this.abortListeners = [], this.abortOnDocChange = !1
+ ... (13776 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L6-L9` → after: `L13797-L15363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R13797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L13797-L15363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L13797-L15363) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L6-L9)

```diff
-       return Op = Object.assign ? Object.assign.bind() : function(pp) {
-         for (var ip = 1; ip < arguments.length; ip++) {
-           var cp = arguments[ip];
-           for (var Op in cp)({}).hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
+       return iz
+     }
+   },
+   41568: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => wQ,
+       g: () => IQ,
+       k: () => zQ,
+       o: () => gQ,
+       p: () => PQ,
+       s: () => RQ,
+       v: () => CQ,
+       w: () => EQ,
+       x: () => jQ
+     });
+     const wQ = 1024;
+ ... (1551 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L12` → after: `L15366-L15604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R15366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L15366-L15604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L15366-L15604) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L12)

```diff
-       }, Op.apply(null, arguments)
+       }(WQ))), 0);
+ 
+     function jQ(QQ, WQ) {
+       let XQ = QQ.languageDataAt("commentTokens", WQ, 1);
+       return XQ.length ? XQ[0] : {}
+     }
+     const BQ = 50;
+ 
+     function yQ(QQ, WQ) {
+       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WQ.selection.Qy,
+         wQ = XQ.map((QQ => jQ(WQ, QQ.from).block));
+       if (!wQ.every((QQ => QQ))) return null;
+       let qQ = XQ.map(((QQ, XQ) => function(QQ, WQ, XQ, wQ) {
+         let qQ, TQ, {
+             open: zQ,
+             close: sQ
+ ... (223 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L35-L84` → after: `L15607-L15619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R15607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L15607-L15619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L15607-L15619) · [Before (L35-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L35-L84)

```diff
-     function xp(pp, ip, cp, op, Ip) {
-       void 0 === op && (op = {});
-       var Sp = Op({}, Dp(cp), op),
-         xp = function(pp, ip, cp, op, Ip) {
-           var Sp = [].concat(ip),
-             xp = Wp(pp, cp, op),
-             Lp = xp.compilerHost,
-             Yp = xp.updateFile,
-             Dp = xp.deleteFile,
-             Ap = new Map,
-             Pp = 0,
-             yp = Op({}, Lp, {
-               getProjectVersion: function() {
-                 return Pp.toString()
-               },
-               getCompilationSettings: function() {
- ... (34 more removed lines; see GitHub link above)
+     function iQ(QQ, WQ, XQ, wQ) {
+       let qQ = WQ + 1 > XQ + 20 ? WQ - XQ - 1 : 0,
+         TQ = QQ.slice(qQ, WQ);
+       return TQ.push(wQ), TQ
+     }
+ 
+     function cQ(QQ, WQ) {
+       return QQ.length ? WQ.length ? QQ.concat(WQ) : QQ : WQ
+     }
+     const AQ = [],
+       RQ = 200;
+ 
+     function EQ(QQ, WQ) {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L86-L87` → after: `L15621-L15623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R15621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L15621-L15623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L15621-L15623) · [Before (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L86-L87)

```diff
-         var Up = Wp(pp, op, cp);
-         throw new Error(cp.formatDiagnostics(yp, Up.compilerHost))
+         let XQ = QQ[QQ.length - 1],
+           wQ = XQ.selectionsAfter.slice(Math.max(0, XQ.selectionsAfter.length - RQ));
+         return wQ.length && wQ[wQ.length - 1].eq(WQ) ? QQ : (wQ.push(WQ), iQ(QQ, QQ.length - 1, 1e9, XQ.setSelAfter(wQ)))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L89-L114` → after: `L15625-L15719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R15625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L15625-L15719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L15625-L15719) · [Before (L89-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L89-L114)

```diff
-       return {
-         name: "vfs",
-         sys: pp,
-         languageService: Pp,
-         getSourceFile: function(pp) {
-           var ip;
-           return null == (ip = Pp.getProgram()) ? void 0 : ip.getSourceFile(pp)
-         },
-         createFile: function(pp, ip) {
-           Yp(cp.createSourceFile(pp, ip, Sp.target, !1))
-         },
-         updateFile: function(pp, ip, Op) {
-           var op = Pp.getProgram().getSourceFile(pp);
-           if (!op) throw new Error("Did not find a source file for " + pp);
-           var Ip = op.text,
-             Sp = null != Op ? Op : cp.createTextSpan(0, Ip.length),
- ... (10 more removed lines; see GitHub link above)
+       return [hQ.selection([WQ])]
+     }
+ 
+     function CQ(QQ) {
+       let WQ = QQ[QQ.length - 1],
+         XQ = QQ.slice();
+       return XQ[QQ.length - 1] = WQ.setSelAfter(WQ.selectionsAfter.slice(0, WQ.selectionsAfter.length - 1)), XQ
+     }
+ 
+     function uQ(QQ, WQ) {
+       if (!QQ.length) return QQ;
+       let XQ = QQ.length,
+         wQ = AQ;
+       for (; XQ;) {
+         let qQ = LQ(QQ[XQ - 1], WQ, wQ);
+         if (qQ.changes && !qQ.changes.empty || qQ.effects.length) {
+ ... (79 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L120` → after: `L15816-L15831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R15816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L15816-L15831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L15816-L15831) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L120)

```diff
-       throw new Error("Method '" + pp + "' is not implemented.")
+       let WQ, XQ = QQ.scrollDOM.clientHeight < QQ.scrollDOM.scrollHeight - 2,
+         wQ = 0,
+         qQ = 0;
+       if (XQ) {
+         for (let WQ of QQ.state.facet(sQ.k.scrollMargins)) {
+           let XQ = WQ(QQ);
+           (null === XQ || void 0 === XQ ? void 0 : XQ.top) && (wQ = Math.max(null === XQ || void 0 === XQ ? void 0 : XQ.top, wQ)), (null === XQ || void 0 === XQ ? void 0 : XQ.bottom) && (qQ = Math.max(null === XQ || void 0 === XQ ? void 0 : XQ.bottom, qQ))
+         }
+         WQ = QQ.scrollDOM.clientHeight - wQ - qQ
+       } else WQ = (QQ.dom.ownerDocument.defaultView || window).innerHeight;
+       return {
+         marginTop: wQ,
+         marginBottom: qQ,
+         selfScroll: XQ,
+         height: Math.max(QQ.defaultLineHeight, WQ - 5)
+       }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L124-L128` → after: `L15835-L15849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R15835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L15835-L15849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L15835-L15849) · [Before (L124-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L124-L128)

```diff
-       return function() {
-         for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
-         var Ip = ip.apply(void 0, Op),
-           xp = "string" === typeof Ip ? Ip.slice(0, 80) + "..." : Ip;
-         return Sp.apply(void 0, ["> " + pp].concat(Op)), Sp("< " + xp), Ip
+       let XQ, wQ = XW(QQ),
+         {
+           state: qQ
+         } = QQ,
+         TQ = tQ(qQ.selection, (XQ => XQ.empty ? QQ.moveVertically(XQ, WQ, wQ.height) : nQ(XQ, WQ)));
+       if (TQ.eq(qQ.selection)) return !1;
+       if (wQ.selfScroll) {
+         let WQ = QQ.coordsAtPos(qQ.selection.main.head),
+           zQ = QQ.scrollDOM.getBoundingClientRect(),
+           FQ = zQ.top + wQ.marginTop,
+           PQ = zQ.bottom - wQ.marginBottom;
+         WQ && WQ.top > FQ && WQ.bottom < PQ && (XQ = sQ.k.scrollIntoView(TQ.main.head, {
+           y: "start",
+           yMargin: WQ.top - FQ
+         }))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L131-L144` → after: `L15855-L15916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R15855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L15855-L15916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L15855-L15916) · [Before (L131-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L131-L144)

```diff
-     var Dp = function(pp) {
-         return Op({}, pp.getDefaultCompilerOptions(), {
-           jsx: pp.JsxEmit.React,
-           strict: !0,
-           esModuleInterop: !0,
-           module: pp.ModuleKind.ESNext,
-           suppressOutputPathCheck: !0,
-           skipLibCheck: !0,
-           skipDefaultLibCheck: !0
-         }, pp.versionMajorMinor && Number(pp.versionMajorMinor.split(".")[0]) >= 6 ? {
-           ignoreDeprecations: "6.0"
-         } : {
-           moduleResolution: pp.ModuleResolutionKind.NodeJs
-         })
+     const qW = QQ => wW(QQ, !1),
+       TW = QQ => wW(QQ, !0);
+ 
+     function zW(QQ, WQ, XQ) {
+       let wQ = QQ.lineBlockAt(WQ.head),
+         qQ = QQ.moveToLineBoundary(WQ, XQ);
+       if (qQ.head == WQ.head && qQ.head != (XQ ? wQ.to : wQ.from) && (qQ = QQ.moveToLineBoundary(WQ, XQ, !1)), !XQ && qQ.head == wQ.from && wQ.length) {
+         let XQ = /^\s*/.exec(QQ.state.sliceDoc(wQ.from, Math.min(wQ.from + 100, wQ.to)))[0].length;
+         XQ && WQ.head != wQ.from + XQ && (qQ = zQ.k.cursor(wQ.from + XQ))
+       }
+       return qQ
+     }
+ 
+     function sW(QQ, WQ, XQ) {
+       let wQ = !1,
+         qQ = tQ(QQ.selection, (WQ => {
+ ... (46 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L146-L147` → after: `L15918-L15945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R15918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L15918-L15945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L15918-L15945) · [Before (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L146-L147)

```diff
-       Ap = function(pp) {
-         return pp.replace("/", "/lib.").toLowerCase()
+       GW = QQ => {
+         let {
+           state: WQ,
+           dispatch: XQ
+         } = QQ;
+         return XQ(oQ(WQ, {
+           anchor: WQ.doc.length
+         })), !0
+       },
+       UW = QQ => {
+         let {
+           state: WQ,
+           dispatch: XQ
+         } = QQ;
+         return XQ(oQ(WQ, {
+           anchor: WQ.selection.main.anchor,
+ ... (12 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L151-L154` → after: `L16046-L16326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R16046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L16046-L16326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L16046-L16326) · [Before (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L151-L154)

```diff
-       return {
-         args: [],
-         createDirectory: function() {
-           return Lp("createDirectory")
+       let WQ = [],
+         XQ = -1;
+       for (let wQ of QQ.selection.Qy) {
+         let qQ = QQ.doc.lineAt(wQ.from),
+           TQ = QQ.doc.lineAt(wQ.to);
+         if (wQ.empty || wQ.to != TQ.from || (TQ = QQ.doc.lineAt(wQ.to - 1)), XQ >= qQ.number) {
+           let QQ = WQ[WQ.length - 1];
+           QQ.to = TQ.to, QQ.Qy.push(wQ)
+         } else WQ.push({
+           from: qQ.from,
+           to: TQ.to,
+           Qy: [wQ]
+         });
+         XQ = TQ.number + 1
+       }
+       return WQ
+ ... (265 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L156-L159` → after: `L16328-L16547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R16328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L16328-L16547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L16328-L16547) · [Before (L156-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L156-L159)

```diff
-         directoryExists: Yp("directoryExists", (function(ip) {
-           return Array.from(pp.keys()).some((function(pp) {
-             return pp.startsWith(ip)
-           }))
+         preventDefault: !0
+       }, {
+         key: "Mod-[",
+         run: fW
+       }, {
+         key: "Mod-]",
+         run: kW
+       }, {
+         key: "Mod-Alt-\\",
+         run: QQ => {
+           let {
+             state: WQ,
+             dispatch: XQ
+           } = QQ;
+           if (WQ.readOnly) return !1;
+           let wQ = Object.create(null),
+ ... (204 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L161-L165` → after: `L16549-L16554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R16549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L16549-L16554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L16549-L16554) · [Before (L161-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L161-L165)

```diff
-         exit: function() {
-           return Lp("exit")
-         },
-         fileExists: Yp("fileExists", (function(ip) {
-           return pp.has(ip) || pp.has(Ap(ip))
+         preventDefault: !0
+       }, {
+         mac: "Mod-Delete",
+         run: QQ => dW(QQ, (WQ => {
+           let XQ = QQ.moveToLineBoundary(WQ, !0).head;
+           return WQ.head < XQ ? XQ : Math.min(QQ.state.doc.length, WQ.head + 1)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L167-L168` → after: `L16556-L16703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R16556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L16556-L16703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L16556-L16703) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L167-L168)

```diff
-         getCurrentDirectory: function() {
-           return "/"
+         preventDefault: !0
+       }].concat([{
+         key: "Ctrl-b",
+         run: NQ,
+         shift: gW,
+         preventDefault: !0
+       }, {
+         key: "Ctrl-f",
+         run: ZQ,
+         shift: JW
+       }, {
+         key: "Ctrl-p",
+         run: QW,
+         shift: jW
+       }, {
+         key: "Ctrl-n",
+ ... (132 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L170-L171` → after: `L16705-L16706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R16705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L16705-L16706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L16705-L16706) · [Before (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L170-L171)

```diff
-         getDirectories: function() {
-           return []
+         ".cm-content": {
+           caretColor: PX
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L173-L174` → after: `L16708-L16709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R16708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L16708-L16709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L16708-L16709) · [Before (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L173-L174)

```diff
-         getExecutingFilePath: function() {
-           return Lp("getExecutingFilePath")
+         ".cm-cursor, .cm-dropCursor": {
+           borderLeftColor: PX
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L176-L184` → after: `L16711-L16751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R16711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L16711-L16751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L16711-L16751) · [Before (L176-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L176-L184)

```diff
-         readDirectory: Yp("readDirectory", (function(ip) {
-           return "/" === ip ? Array.from(pp.keys()) : []
-         })),
-         readFile: Yp("readFile", (function(ip) {
-           var cp;
-           return null != (cp = pp.get(ip)) ? cp : pp.get(Ap(ip))
-         })),
-         resolvePath: function(pp) {
-           return pp
+         "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
+           backgroundColor: FX
+         },
+         ".cm-panels": {
+           backgroundColor: qX,
+           color: mW
+         },
+         ".cm-panels.cm-panels-top": {
+           borderBottom: "2px solid black"
+         },
+         ".cm-panels.cm-panels-bottom": {
+           borderTop: "2px solid black"
+         },
+         ".cm-searchMatch": {
+           backgroundColor: "#72a1ff59",
+           outline: "1px solid #457dff"
+ ... (25 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L186-L189` → after: `L16753-L16755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R16753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L16753-L16755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L16753-L16755) · [Before (L186-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L186-L189)

```diff
-         newLine: "\n",
-         useCaseSensitiveFileNames: !0,
-         write: function() {
-           return Lp("write")
+         ".cm-tooltip": {
+           border: "none",
+           backgroundColor: sX
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L191-L192` → after: `L16757-L16759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R16757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L16757-L16759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L16757-L16759) · [Before (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L191-L192)

```diff
-         writeFile: function(ip, cp) {
-           pp.set(ip, cp)
+         ".cm-tooltip .cm-tooltip-arrow:before": {
+           borderTopColor: "transparent",
+           borderBottomColor: "transparent"
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L194-L195` → after: `L16761-L16847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R16761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L16761-L16847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L16761-L16847) · [Before (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L194-L195)

```diff
-         deleteFile: function(ip) {
-           pp.delete(ip)
+         ".cm-tooltip .cm-tooltip-arrow:after": {
+           borderTopColor: sX,
+           borderBottomColor: sX
+         },
+         ".cm-tooltip-autocomplete": {
+           "& > ul > li[aria-selected]": {
+             backgroundColor: TX,
+             color: mW
+           }
+         }
+       }, {
+         dark: !0
+       }),
+       JX = FQ.b.define([{
+         tag: YW.h.keyword,
+         color: wX
+ ... (71 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L200-L223` → after: `L16885-L16920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R16885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L16885-L16920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L16885-L16920) · [Before (L200-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L200-L223)

```diff
-     function Wp(pp, ip, cp) {
-       var op = new Map;
-       return {
-         compilerHost: Op({}, pp, {
-           getCanonicalFileName: function(pp) {
-             return pp
-           },
-           getDefaultLibFileName: function() {
-             return "/" + cp.getDefaultLibFileName(ip)
-           },
-           getNewLine: function() {
-             return pp.newLine
-           },
-           getSourceFile: function(Op, Ip) {
-             var Sp, xp;
-             return op.get(Op) || (xp = cp.createSourceFile(Op, pp.readFile(Op), null != (Sp = null != Ip ? Ip : ip.target) ? Sp : Dp(cp).target, !1), op.set(xp.fileName, xp), xp)
- ... (8 more removed lines; see GitHub link above)
+     function pX(QQ) {
+       var {
+         value: WQ,
+         selection: XQ,
+         onChange: wQ,
+         onStatistics: qQ,
+         onCreateEditor: FQ,
+         onUpdate: PQ,
+         extensions: gQ = DX,
+         autoFocus: JQ,
+         theme: rQ = "light",
+         height: IQ = null,
+         minHeight: jQ = null,
+         maxHeight: BQ = null,
+         width: yQ = null,
+         minWidth: VQ = null,
+ ... (20 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L225-L227` → after: `L16922-L17214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R16922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L16922-L17214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/302.js#L16922-L17214) · [Before (L225-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/302.js#L225-L227)

```diff
-         deleteFile: function(ip) {
-           var cp = op.has(ip.fileName);
-           return op.delete(ip.fileName), pp.deleteFile(ip.fileName), cp
+         "& .cm-scroller": {
+           height: "100% !important"
+         }
+       }), uQ = sQ.k.updateListener.of((QQ => {
+         if (QQ.docChanged && "function" === typeof wQ && !QQ.transactions.some((QQ => QQ.annotation(VX)))) {
+           RQ.current ? RQ.current.reset() : (RQ.current = new jX((() => {
+             if (EQ.current) {
+               var QQ = EQ.current;
+               EQ.current = null, QQ()
+             }
+             RQ.current = null
+           }), 200), ("undefined" === typeof window ? new BX : (yX || (yX = new BX), yX)).add(RQ.current));
+           var WQ = QQ.state.doc.toString();
+           wQ(WQ, QQ)
+         }
+         qQ && qQ((QQ => ({
+ ... (277 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/303.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/303.js` (177 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405)

#### 1. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L4-L2269` → after: `L4-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L4-L42) · [Before (L4-L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L4-L2269)

```diff
-   41647: (pp, ip, cp) => {
-     var Op = "/index.js",
-       op = {};
-     (pp => {
-       var ip = Object.defineProperty,
-         op = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (pp, cp) => {
-           for (var Op in cp) ip(pp, Op, {
-             get: cp[Op],
-             enumerable: !0
-           })
-         }),
-         Ip = {};
-       op(Ip, {
-         ANONYMOUS: () => r8,
-         AccessFlags: () => AI,
-         AssertionLevel: () => uc,
- ... (2250 more removed lines; see GitHub link above)
+   41550: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => DW,
+       d: () => AQ,
+       ChangeSet: () => RQ,
+       g: () => iW,
+       k: () => tQ,
+       l: () => EW,
+       o: () => nQ,
+       s: () => cQ,
+       t: () => qW,
+       A: () => tW,
+       x: () => oW,
+       C: () => uW,
+       G: () => UW,
+       I: () => mQ,
+ ... (23 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2272-L2278` → after: `L46-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L46-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L46-L52) · [Before (L2272-L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2272-L2278)

```diff
-       function Pp(pp, ip) {
-         if (void 0 !== pp)
-           for (let cp = 0; cp < pp.length; cp++) {
-             const Op = ip(pp[cp], cp);
-             if (Op) return Op
-           }
-       }
+     function zQ(QQ) {
+       return QQ >= 127462 && QQ <= 127487
+     }(() => {
+       let QQ = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7, … [truncated]
+       for (let WQ = 0, XQ = 0; WQ < QQ.length; WQ++)(WQ % 2 ? qQ : wQ).push(XQ += QQ[WQ])
+     })();
+     const sQ = 8205;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2280-L2286` → after: `L54-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L54-L56) · [Before (L2280-L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2280-L2286)

```diff
-       function Wp(pp, ip) {
-         if (void 0 !== pp)
-           for (let cp = pp.length - 1; cp >= 0; cp--) {
-             const Op = ip(pp[cp], cp);
-             if (Op) return Op
-           }
-       }
+     function FQ(QQ, WQ) {
+       return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? PQ : gQ)(QQ, WQ, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
+     }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2288-L2293` → after: `L58-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L58-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L58-L118) · [Before (L2288-L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2288-L2293)

```diff
-       function yp(pp, ip) {
-         if (void 0 !== pp)
-           for (let cp = 0; cp < pp.length; cp++) {
-             const Op = ip(pp[cp], cp);
-             if (void 0 !== Op) return Op
-           }
+     function PQ(QQ, WQ, XQ) {
+       if (WQ == QQ.length) return WQ;
+       WQ && rQ(QQ.charCodeAt(WQ)) && IQ(QQ.charCodeAt(WQ - 1)) && WQ--;
+       let wQ = JQ(QQ, WQ);
+       for (WQ += jQ(wQ); WQ < QQ.length;) {
+         let qQ = JQ(QQ, WQ);
+         if (wQ == sQ || qQ == sQ || XQ && TQ(qQ)) WQ += jQ(qQ), wQ = qQ;
+         else {
+           if (!zQ(qQ)) break;
+           {
+             let XQ = 0,
+               wQ = WQ - 2;
+             for (; wQ >= 0 && zQ(JQ(QQ, wQ));) XQ++, wQ -= 2;
+             if (XQ % 2 == 0) break;
+             WQ += 2
+           }
+ ... (45 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2295-L2300` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L120-L121) · [Before (L2295-L2300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2295-L2300)

```diff
- 
-       function Up(pp, ip) {
-         for (const cp of pp) {
-           const pp = ip(cp);
-           if (void 0 !== pp) return pp
-         }
+       append(QQ) {
+         return this.replace(this.length, this.length, QQ)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2302-L2307` → after: `L123-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L123-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/303.js#L123-L138) · [Before (L2302-L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/303.js#L2302-L2307)

```diff
- 
-       function wp(pp, ip, cp) {
-         let Op = cp;
-         if (pp) {
-           let cp = 0;
-           for (const op of pp) Op = ip(Op, op, cp), cp++
+       slice(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
+         [QQ, WQ] = dQ(this, QQ, WQ);
+         let XQ = [];
+         return this.decompose(QQ, WQ, XQ, 0), VQ.from(XQ, WQ - QQ)
+       }
+       eq(QQ) {
+         if (QQ == this) return !0;
+         if (QQ.length != this.length || QQ.lines != this.lines) return !1;
+         let WQ = this.scanIdentical(QQ, 1),
+           XQ = this.length - this.scanIdentical(QQ, -1),
+           wQ = new GQ(this),
+           qQ = new GQ(QQ);
+         for (let TQ = WQ, zQ = WQ;;) {
+           if (wQ.next(TQ), qQ.next(TQ), TQ = 0, wQ.lineBreak != qQ.lineBreak || wQ.done != qQ.done || wQ.value != qQ.value) return !1;
+           if (zQ += wQ.value.length, wQ.done || zQ >= XQ) return !0
```
